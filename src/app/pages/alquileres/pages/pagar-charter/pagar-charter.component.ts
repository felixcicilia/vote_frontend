import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlquileresService } from '../../services/alquileres.service';
import { PagosService } from '../../../pagos/services/pagos.service';
import { PaymentAccountsService } from '../../../metodos-cobro/services/payment-accounts.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { ImageUploadComponent } from '../../../../shared/components/image-upload/image-upload.component';
import { Alquiler } from '../../models/alquiler.model';
import { Pago } from '../../../pagos/models/pago.model';
import { PaymentAccount } from '../../../metodos-cobro/models/payment-account.model';
import { environment } from '../../../../../environments/environment';

const STORAGE_TDC = 'maritimo_tdcs';

interface SavedCard {
  id: string; numero: string; titular: string; vencimiento: string; cvv: string;
}

@Component({
  selector: 'app-pagar-charter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './pagar-charter.component.html',
})
export class PagarCharterComponent implements OnInit {
  private readonly fb       = inject(FormBuilder);
  private readonly route    = inject(ActivatedRoute);
  private readonly router   = inject(Router);
  private readonly http     = inject(HttpClient);
  private readonly service  = inject(AlquileresService);
  private readonly pagosService    = inject(PagosService);
  private readonly accountsService = inject(PaymentAccountsService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  rentalId = 0;
  rental: Alquiler | null = null;
  loading = true;
  submitting = false;
  errorMsg = '';
  done = false;
  createdPago: Pago | null = null;

  walletBalance = 0;
  loadingWallet = true;
  savedCards: SavedCard[] = [];
  selectedCardId = '';
  accounts: PaymentAccount[] = [];
  selectedAccountId: string | null = null;

  payForm = this.fb.group({
    currency:       ['USD', Validators.required],
    amount:         [0, [Validators.required, Validators.min(0.01)]],
    transactionRef: [''],
    proofImageUrl:  [''],
    notes:          [''],
  });

  get pf() { return this.payForm.controls; }
  get selectedAccount(): PaymentAccount | null {
    return this.accounts.find(a => String(a.id) === this.selectedAccountId) ?? null;
  }
  get isWallet()  { return this.selectedAccountId === 'wallet'; }
  get isTdc()     { return this.selectedAccountId === 'tdc'; }
  get selectedCard() { return this.savedCards.find(c => c.id === this.selectedCardId) ?? null; }
  get hasEnoughBalance() { return this.walletBalance >= this.totalUsd; }

  get totalUsd(): number { return Number(this.rental?.totalPrice ?? 0); }
  get totalBs(): number {
    const r = this.tasaService.rate();
    return r > 0 ? this.totalUsd * r : this.totalUsd;
  }
  get displayAmount(): string {
    return this.pf.currency.value === 'BS'
      ? `REF ${this.totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$${this.totalUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.rentalId = Number(this.route.snapshot.queryParamMap.get('rentalId'));
    if (!this.rentalId) {
      this.errorMsg = 'Reserva no válida.';
      this.loading = false;
      return;
    }
    this.pf.currency.valueChanges.subscribe(() => this.syncAmount());

    try {
      const raw = localStorage.getItem(STORAGE_TDC);
      if (raw) { const p = JSON.parse(raw); this.savedCards = Array.isArray(p) ? p : []; }
    } catch {}

    this.service.getById(this.rentalId).subscribe({
      next: (r) => { this.rental = r; this.syncAmount(); this.loading = false; },
      error: () => { this.errorMsg = 'No se pudo cargar la reserva.'; this.loading = false; },
    });

    this.accountsService.getActive().subscribe({ next: (a) => { this.accounts = a; } });

    const uid = this.authService.user()?.id;
    if (uid) {
      this.http.get<any>(`${environment.apiUrl}/payments/wallet-balance/${uid}`).subscribe({
        next: (r) => { this.walletBalance = Number(r?.balance ?? r?.data?.balance ?? 0); this.loadingWallet = false; },
        error: () => { this.loadingWallet = false; },
      });
    } else { this.loadingWallet = false; }
  }

  selectMethod(id: string): void {
    this.selectedAccountId = id;
    if (id === 'wallet' || id === 'tdc') {
      this.payForm.patchValue({ currency: 'USD' });
    } else {
      const acc = this.accounts.find(a => String(a.id) === id);
      if (acc) this.payForm.patchValue({ currency: acc.currency });
    }
    this.syncAmount();
  }

  private syncAmount(): void {
    const v = this.pf.currency.value === 'BS' ? this.totalBs : this.totalUsd;
    this.payForm.patchValue({ amount: v }, { emitEvent: false });
  }

  maskedCard(n: string): string {
    if (!n || n.length < 4) return '•••• •••• •••• ????';
    return `•••• •••• •••• ${n.slice(-4)}`;
  }

  onProofUploaded(url: string): void { this.payForm.patchValue({ proofImageUrl: url }); }

  canSubmit(): boolean {
    if (!this.selectedAccountId) return false;
    if (this.isWallet) return this.hasEnoughBalance;
    if (this.isTdc) return !!this.selectedCardId;
    return true;
  }

  registrarPago(): void {
    if (!this.canSubmit()) return;
    const user = this.authService.user();
    if (!user) { this.router.navigate(['/login']); return; }

    this.errorMsg = '';
    this.submitting = true;

    let method: string;
    let notes = this.pf.notes.value?.trim() || undefined;
    let transactionRef = this.pf.transactionRef.value?.trim() || undefined;

    if (this.isWallet) {
      method = 'WALLET';
    } else if (this.isTdc) {
      method = 'CARD';
      const card = this.selectedCard;
      if (card) {
        const last4 = card.numero.replace(/\s/g, '').slice(-4);
        transactionRef = last4;
        const s = `Tarjeta: •••• •••• •••• ${last4} | Titular: ${card.titular} | Vence: ${card.vencimiento}`;
        notes = notes ? `${s} | ${notes}` : s;
      }
    } else {
      method = this.selectedAccount!.method;
    }

    this.pagosService.create({
      clientId:      user.id,
      amount:        Number(this.pf.amount.value),
      currency:      this.pf.currency.value as any,
      method:        method as any,
      referenceType: 'RENTAL',
      referenceId:   this.rentalId,
      transactionRef,
      proofImageUrl: this.pf.proofImageUrl.value?.trim() || undefined,
      notes,
    }).subscribe({
      next: (pago) => { this.createdPago = pago; this.submitting = false; this.done = true; },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al registrar el pago.';
        this.submitting = false;
      },
    });
  }

  pagoDisplay(p: Pago): string {
    if (p.currency === 'BS' || p.currency === 'VES')
      return `REF ${Number(p.amount).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${Number(p.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  formatDate(d?: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
