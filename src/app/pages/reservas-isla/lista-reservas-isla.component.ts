import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { IslandBooking, IslandBookingStatus } from '../buscar/models/island-trip.model';
import { AuthService } from '../auth-pages/services/auth.service';
import { ReservationChatComponent } from '../../shared/components/reservation-chat/reservation-chat.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lista-reservas-isla',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReservationChatComponent],
  templateUrl: './lista-reservas-isla.component.html',
})
export class ListaReservasIslaComponent implements OnInit {
  private readonly service  = inject(IslandTripsService);
  private readonly auth     = inject(AuthService);
  private readonly router   = inject(Router);
  private readonly http     = inject(HttpClient);

  get isProveedor(): boolean { return this.auth.role() === 'PROVEEDOR'; }
  get isMaster(): boolean { const r = this.auth.role(); return r === 'MASTER' || r === 'ADMINISTRADOR'; }
  get pageTitle(): string {
    if (this.isMaster) return 'Excursiones a isla';
    return this.isProveedor ? 'Mis reservas de excursión' : 'Reservas de isla';
  }
  get pageSubtitle(): string {
    if (this.isMaster) return 'Seguimiento de todos los viajes a isla y cayos.';
    return this.isProveedor ? 'Reservas recibidas para tus embarcaciones.' : 'Gestiona las reservas de viajes a islas y cayos.';
  }

  loading = true;
  bookings: IslandBooking[] = [];
  filterStatus: IslandBookingStatus | 'ALL' = 'ALL';
  search = '';
  page = 1;
  readonly limit = 10;

  // Chat
  chatOpenId: number | null = null;
  unreadCounts: Record<number, number> = {};

  get filtered(): IslandBooking[] {
    const term = this.search.trim().toLowerCase();
    return this.bookings.filter(b => {
      const matchStatus = this.filterStatus === 'ALL' || b.status === this.filterStatus;
      const matchSearch = !term
        || `${b.client.firstName} ${b.client.lastName}`.toLowerCase().includes(term)
        || b.client.email.toLowerCase().includes(term)
        || (b.vessel?.name ?? '').toLowerCase().includes(term)
        || b.tripDate.includes(term);
      return matchStatus && matchSearch;
    });
  }

  get total(): number { return this.filtered.length; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.limit)); }
  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  get paginados(): IslandBooking[] { return this.filtered.slice((this.page - 1) * this.limit, this.page * this.limit); }

  cambiarPagina(n: number): void { if (n >= 1 && n <= this.totalPages) this.page = n; }
  onSearchChange(): void { this.page = 1; }
  onFilterChange(): void { this.page = 1; }
  trackById(_: number, b: IslandBooking): number { return b.id; }

  readonly statuses: (IslandBookingStatus | 'ALL')[] = ['ALL', 'PENDING', 'CONFIRMED', 'ACTIVE', 'COMPLETED', 'CANCELLED'];

  ngOnInit(): void {
    const user = this.auth.user();
    const params = (!this.isMaster && this.isProveedor && user?.id) ? { providerId: user.id } : {};
    this.service.getBookings(params).subscribe({
      next: (b) => {
        this.bookings = b;
        this.loading = false;
        this.loadUnreadCounts(b.map(x => x.id));
      },
      error: () => { this.loading = false; },
    });
  }

  updateStatus(booking: IslandBooking, status: IslandBookingStatus): void {
    this.service.updateBooking(booking.id, { status }).subscribe({
      next: () => {
        const idx = this.bookings.findIndex(b => b.id === booking.id);
        if (idx !== -1) this.bookings[idx] = { ...this.bookings[idx], status };
      },
      error: (err) => {
        const msg = err?.error?.message;
        alert('Error: ' + (typeof msg === 'string' ? msg : 'No se pudo actualizar el estado'));
      },
    });
  }

  cancel(booking: IslandBooking): void {
    const reason = prompt('Motivo de cancelación (opcional):') ?? '';
    this.service.updateBooking(booking.id, { status: 'CANCELLED', cancellationReason: reason || undefined }).subscribe({
      next: () => {
        const idx = this.bookings.findIndex(b => b.id === booking.id);
        if (idx !== -1) this.bookings[idx] = { ...this.bookings[idx], status: 'CANCELLED', cancellationReason: reason || null };
      },
      error: (err) => {
        const msg = err?.error?.message;
        alert('Error: ' + (typeof msg === 'string' ? msg : 'No se pudo cancelar'));
      },
    });
  }

  verDetalle(b: IslandBooking): void {
    this.router.navigate(['/reservas-isla', b.id]);
  }

  count(status: IslandBookingStatus | 'ALL'): number {
    if (status === 'ALL') return this.bookings.length;
    return this.bookings.filter(b => b.status === status).length;
  }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      ALL: 'Todos', PENDING: 'Pendiente', CONFIRMED: 'Confirmado',
      ACTIVE: 'Activo', COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return map[s] ?? s;
  }

  statusClass(s: string): string {
    const map: Record<string, string> = {
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    };
    return map[s] ?? 'bg-gray-100 text-gray-600';
  }

  // ── Chat ──────────────────────────────────────────────────────────────────
  openChat(b: IslandBooking, event: Event): void {
    event.stopPropagation();
    this.chatOpenId = b.id;
  }

  closeChat(): void { this.chatOpenId = null; }

  chatTitle(b: IslandBooking): string {
    return b.client ? `${b.client.firstName} ${b.client.lastName}` : `Excursión #${b.id}`;
  }

  get currentUserId(): number { return this.auth.user()?.id ?? 0; }

  clientUserIdFor(b: IslandBooking): number { return b.client?.id ?? 0; }

  providerUserIdFor(b: IslandBooking): number {
    return (b as any).vessel?.providerProfile?.userId ?? (b as any).providerId ?? 0;
  }

  onUnreadChange(bookingId: number, count: number): void {
    this.unreadCounts = { ...this.unreadCounts, [bookingId]: count };
  }

  private loadUnreadCounts(ids: number[]): void {
    if (!ids.length) return;
    if (!this.auth.user()?.id) return;
    this.http.get<Record<number, number>>(
      `${environment.apiUrl}/chat/booking-unread?ids=${ids.join(',')}&type=ISLAND`,
    ).subscribe({ next: (counts) => { this.unreadCounts = counts; } });
  }
}
