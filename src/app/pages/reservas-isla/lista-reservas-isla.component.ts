import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { IslandBooking, IslandBookingStatus } from '../buscar/models/island-trip.model';

@Component({
  selector: 'app-lista-reservas-isla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-reservas-isla.component.html',
})
export class ListaReservasIslaComponent implements OnInit {
  private readonly service = inject(IslandTripsService);

  loading = true;
  bookings: IslandBooking[] = [];
  filterStatus: IslandBookingStatus | 'ALL' = 'ALL';
  search = '';
  page = 1;
  readonly limit = 10;

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
    this.service.getBookings({}).subscribe({
      next: (b) => { this.bookings = b; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  updateStatus(booking: IslandBooking, status: IslandBookingStatus): void {
    this.service.updateBooking(booking.id, { status }).subscribe({
      next: (updated) => { this.bookings = this.bookings.map(b => b.id === updated.id ? updated : b); },
    });
  }

  cancel(booking: IslandBooking): void {
    const reason = prompt('Motivo de cancelación:');
    if (reason === null) return;
    this.service.updateBooking(booking.id, { status: 'CANCELLED', cancellationReason: reason }).subscribe({
      next: (updated) => { this.bookings = this.bookings.map(b => b.id === updated.id ? updated : b); },
    });
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
}
