import {
  Component, Input, Output, EventEmitter, OnInit, inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PagosService } from '../../../pages/pagos/services/pagos.service';
import { AuthService } from '../../../pages/auth-pages/services/auth.service';
import { TasaService } from '../../services/tasa.service';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { Alquiler } from '../../../pages/alquileres/models/alquiler.model';

@Component({
  selector: 'app-pago-charter-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ImageUploadComponent],
  templateUrl: './pago-charter-modal.component.html',
})
export class PagoCharterModalComponent implements OnInit {
  @Input() alquiler!: Alquiler;
  @Output() pagado  = new EventEmitter<void>();
  @Output() cerrar  = new EventEmitter<void>();

  private readonly fb       = inject(FormBuilder);
  private readonly pagos    = inject(PagosService);
  private readonly auth     = inject(AuthService);
  readonly tasaService      = inject(TasaService);

  loading = false;
  errorMsg = '';
  step: 1 | 2 = 1; // 1 = elegir método, 2 = confirmación enviada

  form = this.fb.group({
    method:         ['', Validators.required],
    currency:       ['USD', Validators.required],
    transactionRef: [''],
    proofImageUrl:  [''],
    notes:          [''],
  });

  get pf() { return this.form.controls; }

  /** Datos del proveedor */
  get provider() { return (this.alquiler?.vessel as any)?.provider ?? {}; }

  /** Total en USD */
  get totalUsd(): number { return Number(this.alquiler?.totalPrice ?? 0); }

  get totalBs(): number {
    const rate = this.tasaService.rate();
    return rate > 0 ? this.totalUsd * rate : this.totalUsd;
  }

  get totalDisplay(): string {
    const c = this.pf.currency.value;
    if (c === 'BS' || c === 'VES') {
      return `Bs ${this.totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}`;
    }
    return `$${this.totalUsd.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD`;
  }

  /** Métodos disponibles según datos del proveedor */
  get availableMethods(): { value: string; icon: string; label: string }[] {
    const p = this.provider;
    const methods = [];
    if (p.pagoMovilPhone) methods.push({ value: 'PAGO_MOVIL',    icon: '📱', label: 'Pago Móvil'   });
    if (p.bankAccount)    methods.push({ value: 'TRANSFERENCIA', icon: '🏦', label: 'Transferencia' });
    if (p.zelleEmail)     methods.push({ value: 'ZELLE',         icon: '💚', label: 'Zelle'         });
    // Efectivo siempre disponible
    methods.push({ value: 'CASH', icon: '💵', label: 'Efectivo' });
    return methods;
  }

  /** Instrucciones según método seleccionado */
  get paymentInfo(): { key: string; value: string }[] {
    const p = this.provider;
    const m = this.pf.method.value;
    if (m === 'PAGO_MOVIL') return [
      { key: 'Teléfono', value: p.pagoMovilPhone ?? '' },
      { key: 'Empresa',  value: p.companyName ?? '' },
    ];
    if (m === 'TRANSFERENCIA') return [
      { key: 'Banco',   value: p.bankName ?? '' },
      { key: 'Cuenta',  value: p.bankAccount ?? '' },
      { key: 'Empresa', value: p.companyName ?? '' },
    ];
    if (m === 'ZELLE') return [
      { key: 'Email',   value: p.zelleEmail ?? '' },
      { key: 'Empresa', value: p.companyName ?? '' },
    ];
    if (m === 'CASH') return [
      { key: 'Nota', value: 'Paga en efectivo directamente al proveedor al momento del embarque.' },
    ];
    return [];
  }

  get needsProof(): boolean { return ['PAGO_MOVIL', 'TRANSFERENCIA', 'ZELLE'].includes(this.pf.method.value ?? ''); }
  get needsRef(): boolean   { return ['PAGO_MOVIL', 'TRANSFERENCIA', 'ZELLE'].includes(this.pf.method.value ?? ''); }

  ngOnInit(): void { this.tasaService.load(); }

  selectMethod(value: string): void {
    this.pf.method.setValue(value);
    this.errorMsg = '';
  }

  onProofUploaded(url: string): void { this.pf.proofImageUrl.setValue(url); }

  enviar(): void {
    if (!this.pf.method.value) { this.errorMsg = 'Selecciona un método de pago.'; return; }
    if (this.needsRef && !this.pf.transactionRef.value?.trim()) {
      this.errorMsg = 'Ingresa el número de referencia.'; return;
    }
    if (this.needsProof && !this.pf.proofImageUrl.value?.trim()) {
      this.errorMsg = 'Sube el comprobante de pago.'; return;
    }

    const clientId = this.auth.user()?.id;
    if (!clientId) return;

    this.loading = true;
    this.errorMsg = '';

    this.pagos.create({
      clientId,
      amount:         this.pf.currency.value === 'BS' ? this.totalBs : this.totalUsd,
      currency:       this.pf.currency.value as any,
      method:         this.pf.method.value as any,
      referenceType:  'RENTAL',
      referenceId:    this.alquiler.id,
      transactionRef: this.pf.transactionRef.value?.trim() || undefined,
      proofImageUrl:  this.pf.proofImageUrl.value?.trim() || undefined,
      notes:          this.pf.notes.value?.trim() || undefined,
    }).subscribe({
      next: () => { this.loading = false; this.step = 2; this.pagado.emit(); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : (typeof msg === 'string' ? msg : 'Error al registrar el pago.');
        this.loading = false;
      },
    });
  }
}
