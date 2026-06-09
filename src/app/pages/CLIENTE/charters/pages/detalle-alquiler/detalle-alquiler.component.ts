import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alquiler, RentalStatus } from '../../models/alquiler.model';
import { AlquileresService } from '../../services/alquileres.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { ReservationChatComponent } from '../../../../shared/components/reservation-chat/reservation-chat.component';
import { PagoCharterModalComponent } from '../../../../shared/components/pago-charter-modal/pago-charter-modal.component';
import { ReviewModalComponent } from '../../../../shared/components/review-modal/review-modal.component';
import { PagosService } from '../../../pagos/services/pagos.service';
import { ResenasService } from '../../../resenas/services/resenas.service';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-alquiler',
  standalone: true,
  imports: [CommonModule, RouterModule, ReservationChatComponent, PagoCharterModalComponent, ReviewModalComponent],
  templateUrl: './detalle-alquiler.component.html',
})
export class DetalleAlquilerComponent implements OnInit {
  private readonly service = inject(AlquileresService);
  private readonly route   = inject(ActivatedRoute);
  private readonly http    = inject(HttpClient);
  private readonly pagosService  = inject(PagosService);
  private readonly resenasService = inject(ResenasService);
  readonly auth            = inject(AuthService);

  loading = false;
  updating = false;
  errorMessage = '';
  alquiler: Alquiler | null = null;
  chatOpen = false;
  pagoModalOpen = false;
  reviewOpen = false;
  alreadyReviewed = false;
  pagos: any[] = [];
  loadingPagos = false;

  get isMaster():    boolean { const r = this.auth.role(); return r === 'MASTER' || r === 'ADMINISTRADOR'; }
  get isCliente():   boolean { return this.auth.role() === 'CLIENTE'; }
  get isProveedor(): boolean { return this.auth.role() === 'PROVEEDOR'; }
  get backRoute():   string  { return this.isMaster ? '/alquileres' : (this.isCliente ? '/mis-reservas' : '/mi-charter/reservas'); }

  get chatClientId(): number  { return this.alquiler?.client?.id ?? 0; }
  get chatProviderId(): number { return this.auth.user()?.id ?? 0; }
  get chatTitle(): string {
    const c = this.alquiler?.client;
    return c ? `${c.firstName} ${c.lastName}` : `Charter #${this.alquiler?.id}`;
  }

  readonly steps: { key: RentalStatus; label: string; icon: string }[] = [
    { key: 'PENDING',   label: 'Pago enviado',   icon: '💳' },
    { key: 'CONFIRMED', label: 'Aprobado',        icon: '✅' },
    { key: 'ACTIVE',    label: 'En curso',        icon: '⛵' },
    { key: 'COMPLETED', label: 'Completado',      icon: '🏁' },
  ];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (a) => {
        this.alquiler = a;
        this.loading = false;
        if (a.status === 'COMPLETED') {
          const uid = this.auth.user()?.id;
          if (uid) this.resenasService.hasReviewed(uid, 'RENTAL', id).subscribe(e => this.alreadyReviewed = e);
        }
        this.loadingPagos = true;
        this.pagosService.getByReference('RENTAL', id).subscribe({
          next: (p) => { this.pagos = p; this.loadingPagos = false; },
          error: () => { this.loadingPagos = false; },
        });
      },
      error: () => { this.errorMessage = 'No se pudo cargar el alquiler.'; this.loading = false; },
    });
  }

  stepIndex(status: RentalStatus): number {
    const order: RentalStatus[] = ['PENDING', 'CONFIRMED', 'ACTIVE', 'COMPLETED'];
    return order.indexOf(status);
  }

  statusLabel(s: string): string {
    return ({ PENDING: 'Pago enviado', CONFIRMED: 'Aprobado', PAID: 'Pagado', ACTIVE: 'En curso', COMPLETED: 'Completado', CANCELLED: 'Cancelado' } as any)[s] ?? s;
  }

  statusClass(s: string): string {
    return ({
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      PAID:      'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    } as any)[s] ?? '';
  }

  changeStatus(status: RentalStatus): void {
    if (!this.alquiler) return;
    this.updating = true;
    this.service.changeStatus(this.alquiler.id, { status }).subscribe({
      next: (res) => { this.alquiler = (res as any).data ?? res; this.updating = false; },
      error: () => { this.updating = false; },
    });
  }

  onReviewSent(): void { this.alreadyReviewed = true; this.reviewOpen = false; }

  onPagado(): void {
    // Avanzar estado a PAID y recargar el detalle
    this.changeStatus('PAID');
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    return url.startsWith('http') ? url : `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  formatDate(d?: string | Date | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatDateTime(d?: string | Date | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('es-VE', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  durationLabel(days: number): string {
    if (days === 1) return '1 noche';
    return `${days} noches`;
  }

  pagoDisplay(p: any): string {
    if (p.currency === 'BS' || p.currency === 'VES')
      return `REF ${Number(p.amount).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${Number(p.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  pagoStatusClass(s: string): string {
    return ({ PENDING: 'bg-amber-100 text-amber-700', VERIFIED: 'bg-green-100 text-green-700', REJECTED: 'bg-red-100 text-red-600' })[s] ?? 'bg-gray-100 text-gray-600';
  }

  pagoStatusLabel(s: string): string {
    return ({ PENDING: 'Pendiente verificación', VERIFIED: 'Verificado', REJECTED: 'Rechazado' })[s] ?? s;
  }

  methodIcon(m: string): string {
    return ({ PAGO_MOVIL: '📱', TRANSFERENCIA: '🏦', ZELLE: '💚', WALLET: '⚓', CARD: '💳', CASH: '💵', BINANCE: '🟡' })[m] ?? '💰';
  }
}
