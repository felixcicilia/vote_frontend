import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../auth-pages/services/auth.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { TasaService } from '../../shared/services/tasa.service';
import { IslandBooking } from '../buscar/models/island-trip.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { ReservationChatComponent } from '../../shared/components/reservation-chat/reservation-chat.component';

export type ReservaType = 'ISLAND' | 'CHARTER';

export interface ReservaRow {
  type: ReservaType;
  id: number;
  status: string;
  fecha: string;
  hora?: string;
  origen?: string;
  destino: string;
  embarcacion: string;
  pasajeros: number;
  total: number;
  extra?: string;
  createdAt: string;
  // raw reference for chat
  clientId: number;
  providerName?: string;
}

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReservationChatComponent],
  templateUrl: './mis-reservas.component.html',
})
export class MisReservasComponent implements OnInit {
  readonly auth        = inject(AuthService);
  readonly tasaService = inject(TasaService);
  private readonly islandService    = inject(IslandTripsService);
  private readonly alquileresService = inject(AlquileresService);

  rows: ReservaRow[] = [];
  filtered: ReservaRow[] = [];
  loading = true;
  search       = '';
  filtroTipo   = '';
  filtroEstado = '';

  // Chat
  chatRow: ReservaRow | null = null;

  // Paginación
  page = 1;
  readonly pageSize = 10;

  get user()       { return this.auth.user(); }
  get total()      { return this.filtered.length; }
  get totalPages() { return Math.max(1, Math.ceil(this.total / this.pageSize)); }
  get paginados()  {
    const s = (this.page - 1) * this.pageSize;
    return this.filtered.slice(s, s + this.pageSize);
  }
  get rangoInicio() { return this.total ? (this.page - 1) * this.pageSize + 1 : 0; }
  get rangoFin()    { return Math.min(this.page * this.pageSize, this.total); }

  ngOnInit(): void { this.tasaService.load(); this.load(); }

  reload(): void { this.loading = true; this.rows = []; this.filtered = []; this.load(); }

  private load(): void {
    const id = this.user?.id;
    if (!id) { this.loading = false; return; }

    forkJoin({
      bookings:  this.islandService.getBookings({ clientId: id }),
      charters:  this.alquileresService.getByClient(id),
    }).subscribe({
      next: ({ bookings, charters }) => {
        const bRows: ReservaRow[] = bookings.map(b => ({
          type:        'ISLAND' as const,
          id:          b.id,
          status:      b.status,
          fecha:       b.tripDate ?? '',
          hora:        b.outboundSlot?.departureTime?.slice(0,5),
          origen:      b.departurePoint?.name,
          destino:     b.destination?.name ?? '—',
          embarcacion: b.vessel?.name ?? '—',
          pasajeros:   b.passengers,
          total:       Number(b.totalPrice),
          extra:       b.tripType === 'IDA_VUELTA' ? 'Ida y vuelta' : 'Solo ida',
          createdAt:   b.createdAt ?? '',
          clientId:    id,
          providerName: (b.vessel as any)?.provider?.companyName,
        }));
        const cRows: ReservaRow[] = charters.map(a => ({
          type:        'CHARTER' as const,
          id:          a.id,
          status:      a.status,
          fecha:       a.startDate,
          destino:     a.destination?.name ?? a.vessel?.name ?? '—',
          embarcacion: a.vessel?.name ?? '—',
          pasajeros:   a.passengers,
          total:       Number(a.totalPrice),
          extra:       `${a.days} ${a.days === 1 ? 'noche' : 'noches'}`,
          createdAt:   a.createdAt ?? '',
          clientId:    id,
          providerName: (a.vessel as any)?.provider?.companyName,
        }));
        this.rows = [...bRows, ...cRows]
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
        (r.origen ?? '').toLowerCase().includes(q) ||
        r.destino.toLowerCase().includes(q) ||
        r.embarcacion.toLowerCase().includes(q);
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

  // Stats
  get totalIsland()  { return this.rows.filter(r => r.type === 'ISLAND').length; }
  get totalCharter() { return this.rows.filter(r => r.type === 'CHARTER').length; }
  get pendingCount()   { return this.rows.filter(r => r.status === 'PENDING').length; }
  get activeCount()    { return this.rows.filter(r => r.status === 'ACTIVE').length; }
  get completedCount() { return this.rows.filter(r => r.status === 'COMPLETED').length; }
  get gastadoTotal() {
    return this.rows
      .filter(r => !['CANCELLED'].includes(r.status))
      .reduce((s, r) => s + r.total, 0);
  }

  // Chat
  openChat(r: ReservaRow, e: Event): void { e.stopPropagation(); this.chatRow = r; }
  closeChat(): void { this.chatRow = null; }
  get currentUserId(): number { return this.user?.id ?? 0; }

  // Helpers
  detailRoute(r: ReservaRow): string[] {
    if (r.type === 'ISLAND')   return ['/mis-reservas', String(r.id)];
    if (r.type === 'CHARTER')  return ['/alquileres', String(r.id)];
    return ['/mis-reservas'];
  }

  statusLabel(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Realizado',
      PAID: 'Pagado', ACTIVE: 'En curso', COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return m[s] ?? s;
  }

  statusClase(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      USED:      'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      PAID:      'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
      ACTIVE:    'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400',
      COMPLETED: 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return m[s] ?? 'bg-gray-100 text-gray-600';
  }

  typeLabel(t: ReservaType): string {
    return t === 'ISLAND' ? '🏝️ Excursión' : '⚓ Charter';
  }

  typeClase(t: ReservaType): string {
    return t === 'ISLAND'
      ? 'bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400'
      : 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400';
  }
}
