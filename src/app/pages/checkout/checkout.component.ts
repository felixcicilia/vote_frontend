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

/** Paso actual del checkout: 1 = Orden, 2 = Pago, 3 = Confirmación */
type Step = 1 | 2 | 3;

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

  // ── state ───────────────────────────────────────────────────────────────
  step: Step = 1;
  loadingData = true;
  loadingAction = false;
  errorMsg = '';

  // data
  viajeId = 0;
  viaje: Viaje | null = null;
  clientes: Usuario[] = [];
  createdTicket: Ticket | null = null;
  createdPago: Pago | null = null;

  // ── Step 1 form: selección de asientos y cliente ─────────────────────────
  orderForm = this.fb.group({
    clientId: [null as number | null, Validators.required],
    seats:    [1, [Validators.required, Validators.min(1)]],
  });

  // ── Step 2 form: pago ────────────────────────────────────────────────────
  payForm = this.fb.group({
    method:         ['PAGO_MOVIL' as string, Validators.required],
    currency:       ['BS', Validators.required],
    amount:         [0, [Validators.required, Validators.min(0.01)]],
    transactionRef: [''],
    proofImageUrl:  [''],
    notes:          [''],
  });

  get of() { return this.orderForm.controls; }
  get pf() { return this.payForm.controls; }

  // computed
  get pricePerSeat(): number {
    return Number(this.viaje?.schedule?.route?.pricePerSeat ?? 0);
  }
  get totalPrice(): number {
    return this.pricePerSeat * Number(this.of.seats.value ?? 1);
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.viajeId = Number(this.route.snapshot.queryParamMap.get('viajeId'));
    if (!this.viajeId) {
      this.errorMsg = 'No se especificó un viaje válido.';
      this.loadingData = false;
      return;
    }

    // load trip + clients in parallel
    let pending = 2;
    const done = () => { if (--pending === 0) this.loadingData = false; };

    this.viajesService.getById(this.viajeId).subscribe({
      next: (v) => {
        this.viaje = v;
        // Pre-fill amount in Bs
        const amountBs = this.tasaService.rate() > 0
          ? this.totalPrice * this.tasaService.rate()
          : this.totalPrice;
        this.payForm.patchValue({ amount: amountBs });
        done();
      },
      error: () => { this.errorMsg = 'No se pudo cargar el viaje.'; done(); },
    });

    // Si el usuario logueado es cliente, auto-seleccionarlo
    if (this.isCliente && this.currentUser) {
      this.orderForm.patchValue({ clientId: this.currentUser.id });
      this.clientes = [{
        id: this.currentUser.id,
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email,
      } as any];
      done(); // no need to fetch all clients
    } else {
      this.usuariosService.obtenerUsuarios('CLIENTE').subscribe({
        next: (u) => { this.clientes = u; done(); },
        error: () => done(),
      });
    }
  }

  // ── Step 1 → crear ticket ───────────────────────────────────────────────
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
        // pre-fill amount in Bs
        const usdTotal = Number(ticket.totalPrice);
        const bsAmount = this.tasaService.rate() > 0
          ? usdTotal * this.tasaService.rate()
          : usdTotal;
        this.payForm.patchValue({ amount: bsAmount });
        this.step = 2;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al crear el ticket.';
        this.loadingAction = false;
      },
    });
  }

  // ── Step 2 → crear pago ─────────────────────────────────────────────────
  registrarPago(): void {
    if (this.payForm.invalid) { this.payForm.markAllAsTouched(); return; }
    if (!this.createdTicket) return;
    this.errorMsg = '';
    this.loadingAction = true;

    this.pagosService.create({
      clientId:       Number(this.of.clientId.value),
      amount:         Number(this.pf.amount.value),
      currency:       this.pf.currency.value as any,
      method:         this.pf.method.value as any,
      referenceType:  'TICKET',
      referenceId:    this.createdTicket.id,
      transactionRef: this.pf.transactionRef.value?.trim() || undefined,
      proofImageUrl:  this.pf.proofImageUrl.value?.trim() || undefined,
      notes:          this.pf.notes.value?.trim() || undefined,
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
    if (cur < max) {
      this.orderForm.patchValue({ seats: cur + 1 });
      this.onSeatsChange();
    }
  }

  removeSeat(): void {
    const cur = Number(this.of.seats.value ?? 1);
    if (cur > 1) {
      this.orderForm.patchValue({ seats: cur - 1 });
      this.onSeatsChange();
    }
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  onProofUploaded(url: string): void {
    this.payForm.patchValue({ proofImageUrl: url });
  }

  onSeatsChange(): void {
    if (this.viaje) {
      const seats = Number(this.of.seats.value) || 1;
      const usdTotal = seats * this.pricePerSeat;
      const bsAmount = this.tasaService.rate() > 0
        ? usdTotal * this.tasaService.rate()
        : usdTotal;
      this.payForm.patchValue({ amount: bsAmount });
    }
  }

  get totalPriceBs(): number {
    return this.tasaService.rate() > 0
      ? this.totalPrice * this.tasaService.rate()
      : this.totalPrice;
  }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmado', USED: 'Usado', CANCELLED: 'Cancelado',
      VERIFIED: 'Verificado', REJECTED: 'Rechazado',
    };
    return map[s] ?? s;
  }
}
