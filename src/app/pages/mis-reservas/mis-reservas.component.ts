import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../auth-pages/services/auth.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { Ticket } from '../tickets/models/ticket.model';
import { IslandBooking } from '../buscar/models/island-trip.model';

export interface ReservaRow {
  type: 'TICKET' | 'ISLAND';
  id: number;
  status: string;
  fecha: string;
  hora: string;
  origen: string;
  destino: string;
  embarcacion: string;
  pasajeros: number;
  total: number;
  extra: string;
  createdAt: string;
}

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mis-reservas.component.html',
})
export class MisReservasComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly ticketsService = inject(TicketsService);
  private readonly islandService = inject(IslandTripsService);

  rows: ReservaRow[] = [];
  filtered: ReservaRow[] = [];
  loading = true;
  search = '';
  filtroTipo = '';
  filtroEstado = '';

  // Paginación
  page = 1;
  readonly pageSize = 10;

  get user() { return this.auth.user(); }
  get total() { return this.filtered.length; }
  get totalPages() { return Math.max(1, Math.ceil(this.total / this.pageSize)); }
  get paginados() {
    const s = (this.page - 1) * this.pageSize;
    return this.filtered.slice(s, s + this.pageSize);
  }
  get rangoInicio() { return this.total ? (this.page - 1) * this.pageSize + 1 : 0; }
  get rangoFin()    { return Math.min(this.page * this.pageSize, this.total); }

  ngOnInit(): void { this.load(); }

  reload(): void { this.loading = true; this.rows = []; this.filtered = []; this.load(); }

  private load(): void {
    const id = this.user?.id;
    if (!id) { this.loading = false; return; }

    forkJoin({
      tickets:  this.ticketsService.getAll({ clientId: id }),
      bookings: this.islandService.getBookings({ clientId: id }),
    }).subscribe({
      next: ({ tickets, bookings }) => {
        const tRows: ReservaRow[] = tickets.map(t => ({
          type:        'TICKET' as const,
          id:          t.id,
          status:      t.status,
          fecha:       t.trip?.departureDate ?? '',
          hora:        t.trip?.departureTime ?? '',
          origen:      t.trip?.schedule?.route?.originPier?.name ?? '—',
          destino:     t.trip?.schedule?.route?.destinationPier?.name ?? '—',
          embarcacion: t.trip?.schedule?.vessel?.name ?? '—',
          pasajeros:   t.seats,
          total:       Number(t.totalPrice),
          extra:       t.qrCode ?? '',
          createdAt:   t.createdAt ?? '',
        }));
        const bRows: ReservaRow[] = bookings.map(b => ({
          type:        'ISLAND' as const,
          id:          b.id,
          status:      b.status,
          fecha:       b.tripDate ?? '',
          hora:        b.outboundSlot?.departureTime ?? '',
          origen:      b.departurePoint?.name ?? '—',
          destino:     b.destination?.name ?? '—',
          embarcacion: b.vessel?.name ?? '—',
          pasajeros:   b.passengers,
          total:       Number(b.totalPrice),
          extra:       b.tripType === 'IDA_VUELTA' ? 'Ida y vuelta' : 'Solo ida',
          createdAt:   b.createdAt ?? '',
        }));
        this.rows = [...tRows, ...bRows]
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase().trim();
    this.filtered = this.rows.filter(r => {
      const matchSearch = !q ||
        r.origen.toLowerCase().includes(q) ||
        r.destino.toLowerCase().includes(q) ||
        r.embarcacion.toLowerCase().includes(q) ||
        r.extra.toLowerCase().includes(q);
      const matchTipo   = !this.filtroTipo   || r.type   === this.filtroTipo;
      const matchEstado = !this.filtroEstado || r.status === this.filtroEstado;
      return matchSearch && matchTipo && matchEstado;
    });
    this.page = 1;
  }

  cambiarPagina(p: number): void {
    if (p >= 1 && p <= this.totalPages) this.page = p;
  }

  trackById(_: number, r: ReservaRow) { return r.type + r.id; }

  get hayFiltros() { return !!this.search || !!this.filtroTipo || !!this.filtroEstado; }
  limpiar() { this.search = ''; this.filtroTipo = ''; this.filtroEstado = ''; this.applyFilter(); }

  statusLabel(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Realizado',
      ACTIVE: 'En curso', COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return m[s] ?? s;
  }

  statusClase(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      USED:      'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      ACTIVE:    'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400',
      COMPLETED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return m[s] ?? 'bg-gray-100 text-gray-600';
  }
}
