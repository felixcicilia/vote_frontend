import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { ViajesService } from '../viajes/services/viajes.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { PagosService } from '../pagos/services/pagos.service';
import { UsuariosService } from '../usuarios/services/usuarios.service';
import { ImageUploadComponent } from '../../shared/components/image-upload/image-upload.component';
import { AuthService } from '../auth-pages/services/auth.service';
import { TasaService } from '../../shared/services/tasa.service';

import { Viaje } from '../viajes/models/viaje.model';
import { Ticket } from '../tickets/models/ticket.model';
import { Pago } from '../pagos/models/pago.model';
import { Usuario } from '../usuarios/models/usuarios.model';
import { environment } from '../../../environments/environment';

type Step = 1 | 2 | 3;

interface PaymentMethodDef {
  value: string;
  icon: string;
  label: string;
}

interface PaymentInfoField {
  key: string;
  value: string;
}

interface PaymentInfoDef {
  title: string;
  fields: PaymentInfoField[];
  showProof: boolean;
  showRef: boolean;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  private readonly fb     = inject(FormBuilder);
  private readonly route  = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly viajesService  = inject(ViajesService);
  private readonly ticketsService = inject(TicketsService);
  private readonly pagosService   = inject(PagosService);
  private readonly usuariosService = inject(UsuariosService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  get isCliente() { return this.authService.role() === 'CLIENTE'; }
  get currentUser() { return this.authService.user(); }

  step: Step = 1;
  loadingData = true;
  loadingAction = false;
  errorMsg = '';

  viajeId = 0;
  viaje: Viaje | null = null;
  clientes: Usuario[] = [];
  createdTicket: Ticket | null = null;
  createdPago: Pago | null = null;

  // ── Métodos de pago disponibles ─────────────────────────────────────────
  readonly PAYMENT_METHODS: PaymentMethodDef[] = [
    { value: 'PAGO_MOVIL',    icon: '📱', label: 'Pago Móvil'    },
    { value: 'TRANSFERENCIA', icon: '🏦', label: 'Transferencia'  },
    { value: 'EFECTIVO',      icon: '💵', label: 'Efectivo'       },
    { value: 'ZELLE',         icon: '💚', label: 'Zelle'          },
    { value: 'CARD',          icon: '💳', label: 'Tarjeta'        },
  ];

  // ── Datos de pago por método ─────────────────────────────────────────────
  // Actualiza estos campos con la información real de tu empresa
  readonly PAYMENT_INFO: Record<string, PaymentInfoDef> = {
    PAGO_MOVIL: {
      title: 'Realiza tu Pago Móvil a:',
      showRef: true,
      showProof: true,
      fields: [
        { key: 'Banco',    value: 'Banco de Venezuela (0102)' },
        { key: 'Teléfono', value: '0414-0000000' },
        { key: 'CI/RIF',   value: 'V-00.000.000' },
        { key: 'Nombre',   value: 'Nombre Empresa C.A.' },
      ],
    },
    TRANSFERENCIA: {
      title: 'Realiza la transferencia a:',
      showRef: true,
      showProof: true,
      fields: [
        { key: 'Banco',    value: 'Banco de Venezuela (0102)' },
        { key: 'Cuenta',   value: '0102-0000-00-0000000000' },
        { key: 'RIF',      value: 'J-00000000-0' },
        { key: 'Nombre',   value: 'Nombre Empresa C.A.' },
      ],
    },
    EFECTIVO: {
      title: 'Instrucciones para pago en efectivo:',
      showRef: false,
      showProof: false,
      fields: [
        { key: 'Lugar',   value: 'Taquilla principal del muelle' },
        { key: 'Horario', value: 'Lun–Vie 8:00 am – 5:00 pm' },
        { key: 'Nota',    value: 'Presentar este comprobante al llegar.' },
      ],
    },
    ZELLE: {
      title: 'Envía el pago por Zelle a:',
      showRef: true,
      showProof: true,
      fields: [
        { key: 'Email', value: 'pagos@empresa.com' },
        { key: 'Nombre', value: 'Nombre Empresa' },
      ],
    },
    CARD: {
      title: 'Pago con Tarjeta de Crédito / Débito',
      showRef: true,
      showProof: false,
      fields: [
        { key: 'Aceptamos', value: 'Visa, Mastercard, American Express' },
        { key: 'Nota',      value: 'El cobro se procesará al confirmar la reserva.' },
      ],
    },
  };

  // ── Step 1 form ──────────────────────────────────────────────────────────
  orderForm = this.fb.group({
    clientId: [null as number | null, Validators.required],
    seats:    [1, [Validators.required, Validators.min(1)]],
  });

  // ── Step 2 form ──────────────────────────────────────────────────────────
  payForm = this.fb.group({
    method:         ['PAGO_MOVIL', Validators.required],
    currency:       ['BS', Validators.required],
    amount:         [0, [Validators.required, Validators.min(0.01)]],
    transactionRef: [''],
    proofImageUrl:  [''],
    notes:          [''],
    // Campos de tarjeta (solo requeridos cuando method === 'CARD')
    cardNumber:     [''],
    cardName:       [''],
    cardExpiry:     [''],
    cardCvv:        [''],
  });

  get isCard(): boolean { return this.pf.method.value === 'CARD'; }

  get of() { return this.orderForm.controls; }
  get pf() { return this.payForm.controls; }

  get pricePerSeat(): number {
    return Number(this.viaje?.schedule?.route?.pricePerSeat ?? 0);
  }

  get totalUsd(): number {
    return this.pricePerSeat * Number(this.of.seats.value ?? 1);
  }

  get totalBs(): number {
    return this.tasaService.rate() > 0 ? this.totalUsd * this.tasaService.rate() : this.totalUsd;
  }

  /** Monto calculado para mostrar según moneda seleccionada */
  get displayAmount(): string {
    const currency = this.pf.currency.value;
    if (currency === 'BS') {
      const bs = this.totalBs;
      return `REF ${bs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${this.totalUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  /** Info del método seleccionado */
  get selectedPaymentInfo(): PaymentInfoDef | null {
    return this.PAYMENT_INFO[this.pf.method.value ?? ''] ?? null;
  }

  /** Formato del monto del pago registrado para confirmación */
  pagoDisplay(pago: Pago): string {
    if (pago.currency === 'BS' || pago.currency === 'VES') {
      return `REF ${Number(pago.amount).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${Number(pago.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.viajeId = Number(this.route.snapshot.queryParamMap.get('viajeId'));
    if (!this.viajeId) {
      this.errorMsg = 'No se especificó un viaje válido.';
      this.loadingData = false;
      return;
    }

    // Recalcular monto cuando cambia la moneda
    this.pf.currency.valueChanges.subscribe(() => this.syncAmount());

    // Activar/desactivar validadores de tarjeta según el método
    this.pf.method.valueChanges.subscribe(method => this.updateCardValidators(method));

    let pending = 2;
    const done = () => { if (--pending === 0) this.loadingData = false; };

    this.viajesService.getById(this.viajeId).subscribe({
      next: (v) => { this.viaje = v; this.syncAmount(); done(); },
      error: () => { this.errorMsg = 'No se pudo cargar el viaje.'; done(); },
    });

    if (this.isCliente && this.currentUser) {
      this.orderForm.patchValue({ clientId: this.currentUser.id });
      this.clientes = [{
        id: this.currentUser.id,
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email,
      } as any];
      done();
    } else {
      this.usuariosService.obtenerUsuarios('CLIENTE').subscribe({
        next: (u) => { this.clientes = u; done(); },
        error: () => done(),
      });
    }
  }

  private updateCardValidators(method: string | null): void {
    const cardFields = [this.pf.cardNumber, this.pf.cardName, this.pf.cardExpiry, this.pf.cardCvv];
    if (method === 'CARD') {
      cardFields.forEach(c => c.setValidators(Validators.required));
    } else {
      cardFields.forEach(c => c.clearValidators());
    }
    cardFields.forEach(c => c.updateValueAndValidity({ emitEvent: false }));
  }

  /** Formatea el número de tarjeta con espacios cada 4 dígitos */
  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').substring(0, 16);
    const formatted = digits.replace(/(.{4})/g, '$1 ').trim();
    this.pf.cardNumber.setValue(formatted, { emitEvent: false });
    input.value = formatted;
  }

  /** Formatea la fecha de expiración MM/AA */
  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').substring(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    this.pf.cardExpiry.setValue(formatted, { emitEvent: false });
    input.value = formatted;
  }

  /** Solo números para CVV */
  formatCvv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').substring(0, 4);
    this.pf.cardCvv.setValue(digits, { emitEvent: false });
    input.value = digits;
  }

  private syncAmount(): void {
    const currency = this.pf.currency.value;
    const value = currency === 'BS' ? this.totalBs : this.totalUsd;
    this.payForm.patchValue({ amount: value }, { emitEvent: false });
  }

  confirmarOrden(): void {
    if (this.orderForm.invalid) { this.orderForm.markAllAsTouched(); return; }
    const seats = Number(this.of.seats.value);
    if (this.viaje && seats > this.viaje.availableSeats) {
      this.errorMsg = `Solo hay ${this.viaje.availableSeats} asientos disponibles.`;
      return;
    }
    this.errorMsg = '';
    this.loadingAction = true;

    this.ticketsService.create({
      tripId:   this.viajeId,
      clientId: Number(this.of.clientId.value),
      seats,
    }).subscribe({
      next: (ticket) => {
        this.createdTicket = ticket;
        this.loadingAction = false;
        this.syncAmount();
        this.step = 2;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al crear el ticket.';
        this.loadingAction = false;
      },
    });
  }

  registrarPago(): void {
    if (this.payForm.invalid) { this.payForm.markAllAsTouched(); return; }
    if (!this.createdTicket) return;
    this.errorMsg = '';
    this.loadingAction = true;

    // Para tarjeta: usar últimos 4 dígitos como referencia e incluir datos en notas
    let transactionRef = this.pf.transactionRef.value?.trim() || undefined;
    let notes = this.pf.notes.value?.trim() || undefined;
    if (this.isCard) {
      const digits = this.pf.cardNumber.value?.replace(/\s/g, '') ?? '';
      transactionRef = digits.slice(-4) || undefined;
      const cardSummary = `Tarjeta: **** **** **** ${digits.slice(-4)} | Titular: ${this.pf.cardName.value} | Vence: ${this.pf.cardExpiry.value}`;
      notes = notes ? `${cardSummary} | ${notes}` : cardSummary;
    }

    this.pagosService.create({
      clientId:       Number(this.of.clientId.value),
      amount:         Number(this.pf.amount.value),
      currency:       this.pf.currency.value as any,
      method:         this.pf.method.value as any,
      referenceType:  'TICKET',
      referenceId:    this.createdTicket.id,
      transactionRef,
      proofImageUrl:  this.pf.proofImageUrl.value?.trim() || undefined,
      notes,
    }).subscribe({
      next: (pago) => {
        this.createdPago = pago;
        this.loadingAction = false;
        this.step = 3;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al registrar el pago.';
        this.loadingAction = false;
      },
    });
  }

  addSeat(): void {
    const cur = Number(this.of.seats.value ?? 1);
    const max = this.viaje?.availableSeats ?? 1;
    if (cur < max) { this.orderForm.patchValue({ seats: cur + 1 }); this.syncAmount(); }
  }

  removeSeat(): void {
    const cur = Number(this.of.seats.value ?? 1);
    if (cur > 1) { this.orderForm.patchValue({ seats: cur - 1 }); this.syncAmount(); }
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  onProofUploaded(url: string): void {
    this.payForm.patchValue({ proofImageUrl: url });
  }

  get rangoInicio(): number { return 0; }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmado', USED: 'Usado', CANCELLED: 'Cancelado',
      VERIFIED: 'Verificado', REJECTED: 'Rechazado',
    };
    return map[s] ?? s;
  }

  seatColor(available: number, total: number): string {
    const pct = available / total;
    if (pct > 0.5) return 'text-green-600 dark:text-green-400';
    if (pct > 0.2) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  }
}
