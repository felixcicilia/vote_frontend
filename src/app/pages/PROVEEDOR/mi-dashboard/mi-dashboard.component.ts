import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth-pages/services/auth.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { PagosService } from '../pagos/services/pagos.service';
import { forkJoin } from 'rxjs';
import { Ticket } from '../tickets/models/ticket.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { IslandBooking } from '../buscar/models/island-trip.model';
import { Pago } from '../pagos/models/pago.model';
import { TasaService } from '../../shared/services/tasa.service';

@Component({
  selector: 'app-mi-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mi-dashboard.component.html',
})
export class MiDashboardComponent implements OnInit {
  private readonly auth              = inject(AuthService);
  private readonly ticketsService    = inject(TicketsService);
  private readonly alquileresService = inject(AlquileresService);
  private readonly islandService     = inject(IslandTripsService);
  private readonly pagosService      = inject(PagosService);
  readonly tasaService = inject(TasaService);

  loading = true;

  tickets: Ticket[] = [];
  alquileres: Alquiler[] = [];
  islandBookings: IslandBooking[] = [];
  pagos: Pago[] = [];

  get user() { return this.auth.user(); }

  ngOnInit(): void {
    this.tasaService.load();
    const id = this.user?.id;
    if (!id) { this.loading = false; return; }

    forkJoin({
      tickets:   this.ticketsService.getAll({ clientId: id }),
      alquiler:  this.alquileresService.getByClient(id),
      island:    this.islandService.getBookings({ clientId: id }),
      pagos:     this.pagosService.getByClient(id),
    }).subscribe({
      next: ({ tickets, alquiler, island, pagos }) => {
        this.tickets        = tickets;
        this.alquileres     = alquiler;
        this.islandBookings = island;
        this.pagos          = pagos;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  // ── KPIs ────────────────────────────────────────────────────────────────────

  get totalExcursiones(): number  { return this.islandBookings.length; }
  get totalCharters(): number     { return this.alquileres.length; }
  get totalReservas(): number     { return this.totalExcursiones + this.totalCharters; }
  get pendingPago(): number {
    return this.islandBookings.filter(b => b.status === 'PENDING').length +
           this.alquileres.filter(a => a.status === 'PENDING').length;
  }

  get gastadoTotal(): number {
    const island  = this.islandBookings
      .filter(b => b.status !== 'CANCELLED')
      .reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
    const charter = this.alquileres
      .filter(a => a.status !== 'CANCELLED')
      .reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
    return island + charter;
  }

  // Próxima excursión isla confirmada
  get proximaExcursion(): IslandBooking | null {
    const hoy = new Date().toISOString().split('T')[0];
    return this.islandBookings
      .filter(b => b.status === 'CONFIRMED' && b.tripDate >= hoy)
      .sort((a, b) => a.tripDate.localeCompare(b.tripDate))[0] ?? null;
  }

  // Próximo charter confirmado
  get proximoCharter(): Alquiler | null {
    const hoy = new Date().toISOString().split('T')[0];
    return this.alquileres
      .filter(a => a.status === 'CONFIRMED' && a.startDate >= hoy)
      .sort((a, b) => a.startDate.localeCompare(b.startDate))[0] ?? null;
  }

  // ── Actividad reciente ───────────────────────────────────────────────────────

  get actividadReciente(): Array<{ tipo: string; icon: string; descripcion: string; fecha: string; monto: number; estado: string; link: string }> {
    const items: Array<{ tipo: string; icon: string; descripcion: string; fecha: string; monto: number; estado: string; link: string }> = [];

    this.islandBookings.slice(0, 5).forEach(b => items.push({
      tipo: 'Excursión isla',
      icon: '🏝️',
      descripcion: b.destination?.name ?? 'Excursión',
      fecha: b.createdAt ?? '',
      monto: Number(b.totalPrice ?? 0),
      estado: b.status,
      link: `/mis-reservas/${b.id}`,
    }));

    this.alquileres.slice(0, 5).forEach(a => items.push({
      tipo: 'Charter',
      icon: '⚓',
      descripcion: a.vessel?.name ?? 'Embarcación',
      fecha: a.createdAt ?? '',
      monto: Number(a.totalPrice ?? 0),
      estado: a.status,
      link: `/alquileres/${a.id}`,
    }));

    return items
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
      .slice(0, 8);
  }

  statusLabel(s: string): string {
    const map: Record<string,string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Realizado',
      CANCELLED: 'Cancelado', ACTIVE: 'Activo', COMPLETED: 'Completado',
    };
    return map[s] ?? s;
  }

  statusClass(s: string): string {
    const map: Record<string,string> = {
      CONFIRMED: 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      USED: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      COMPLETED: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      ACTIVE: 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400',
      CANCELLED: 'bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[s] ?? 'bg-gray-100 text-gray-500';
  }
}
