import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth-pages/services/auth.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { PagosService } from '../pagos/services/pagos.service';
import { Ticket } from '../tickets/models/ticket.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { Pago } from '../pagos/models/pago.model';
import { TasaService } from '../../shared/services/tasa.service';

@Component({
  selector: 'app-mi-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mi-dashboard.component.html',
})
export class MiDashboardComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly ticketsService = inject(TicketsService);
  private readonly alquileresService = inject(AlquileresService);
  private readonly pagosService = inject(PagosService);
  readonly tasaService = inject(TasaService);

  loading = true;

  tickets: Ticket[] = [];
  alquileres: Alquiler[] = [];
  pagos: Pago[] = [];

  get user() { return this.auth.user(); }

  ngOnInit(): void {
    const id = this.user?.id;
    if (!id) { this.loading = false; return; }

    let done = 0;
    const check = () => { if (++done === 3) this.loading = false; };

    this.ticketsService.getAll({ clientId: id }).subscribe({
      next: (t) => { this.tickets = t; check(); },
      error: () => check(),
    });

    this.alquileresService.getByClient(id).subscribe({
      next: (a) => { this.alquileres = a; check(); },
      error: () => check(),
    });

    this.pagosService.getByClient(id).subscribe({
      next: (p) => { this.pagos = p; check(); },
      error: () => check(),
    });
  }

  // ── KPIs ────────────────────────────────────────────────────────────────────

  get totalTickets(): number { return this.tickets.length; }
  get totalAlquileres(): number { return this.alquileres.length; }
  get totalReservas(): number { return this.totalTickets + this.totalAlquileres; }

  get gastadoPagos(): number {
    return this.pagos
      .filter(p => p.status === 'VERIFIED')
      .reduce((s, p) => s + (p.amount || 0), 0);
  }

  get alquileresActivos(): Alquiler[] {
    return this.alquileres.filter(a => ['PENDING','CONFIRMED','ACTIVE'].includes(a.status));
  }

  get ticketsPendientes(): Ticket[] {
    return this.tickets.filter(t => t.status === 'CONFIRMED' || t.status === 'PENDING');
  }

  get proximoViaje(): Ticket | null {
    const upcoming = this.tickets
      .filter(t => t.status === 'CONFIRMED' && new Date(t.trip?.departureDate) >= new Date())
      .sort((a, b) => new Date(a.trip?.departureDate).getTime() - new Date(b.trip?.departureDate).getTime());
    return upcoming[0] ?? null;
  }

  get proximoAlquiler(): Alquiler | null {
    const upcoming = this.alquileres
      .filter(a => a.status === 'CONFIRMED' && new Date(a.startDate) >= new Date())
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return upcoming[0] ?? null;
  }

  // ── Actividad reciente ───────────────────────────────────────────────────────

  get actividadReciente(): Array<{ tipo: string; descripcion: string; fecha: string; monto: number; estado: string }> {
    const items: Array<{ tipo: string; descripcion: string; fecha: string; monto: number; estado: string }> = [];

    this.tickets.slice(0, 5).forEach(t => items.push({
      tipo: '⛵ Terminal',
      descripcion: `Viaje ${t.trip?.departureDate ?? ''}`,
      fecha: t.createdAt ?? '',
      monto: t.totalPrice ?? 0,
      estado: t.status,
    }));

    this.alquileres.slice(0, 5).forEach(a => items.push({
      tipo: '🛥️ Charter',
      descripcion: a.vessel?.name ?? 'Embarcación',
      fecha: a.createdAt ?? '',
      monto: a.totalPrice ?? 0,
      estado: a.status,
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
