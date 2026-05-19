import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth-pages/services/auth.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { Ticket } from '../tickets/models/ticket.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mi-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mi-negocio.component.html',
})
export class MiNegocioComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly embService = inject(EmbarcacionesService);
  private readonly ticketsService = inject(TicketsService);
  private readonly route = inject(ActivatedRoute);

  embarcaciones: Embarcacion[] = [];
  selectedEmbarcacion: Embarcacion | null = null;
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];

  loadingEmb = true;
  loadingTickets = false;
  filtroStatus = '';
  filtroBusqueda = '';

  get user() { return this.auth.user(); }

  ngOnInit(): void {
    this.embService.getAll().subscribe({
      next: (emb) => {
        this.embarcaciones = emb;
        this.loadingEmb = false;
        // Check if query param
        this.route.queryParams.subscribe(p => {
          if (p['embarcacion']) {
            const found = emb.find(e => String(e.id) === String(p['embarcacion']));
            if (found) this.selectEmbarcacion(found);
            else if (emb.length > 0) this.selectEmbarcacion(emb[0]);
          } else if (emb.length > 0) {
            this.selectEmbarcacion(emb[0]);
          }
        });
      },
      error: () => { this.loadingEmb = false; },
    });
  }

  selectEmbarcacion(emb: Embarcacion): void {
    this.selectedEmbarcacion = emb;
    this.loadingTickets = true;
    this.tickets = [];
    this.filteredTickets = [];

    this.ticketsService.getAll({ vesselId: emb.id }).subscribe({
      next: (t) => {
        this.tickets = t;
        this.applyFilter();
        this.loadingTickets = false;
      },
      error: () => { this.loadingTickets = false; },
    });
  }

  applyFilter(): void {
    let result = [...this.tickets];
    if (this.filtroStatus) result = result.filter(t => t.status === this.filtroStatus);
    if (this.filtroBusqueda) {
      const q = this.filtroBusqueda.toLowerCase();
      result = result.filter(t =>
        `${t.client?.firstName} ${t.client?.lastName}`.toLowerCase().includes(q) ||
        t.client?.email?.toLowerCase().includes(q)
      );
    }
    this.filteredTickets = result;
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      USED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[status] ?? 'bg-gray-100 text-gray-600';
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Usado', CANCELLED: 'Cancelado',
    };
    return map[status] ?? status;
  }

  totalIngresos(): number {
    return this.tickets
      .filter(t => t.status !== 'CANCELLED')
      .reduce((s, t) => s + Number(t.totalPrice ?? 0), 0);
  }

  countByStatus(status: string): number {
    return this.tickets.filter(t => t.status === status).length;
  }

  totalPasajeros(): number {
    return this.tickets
      .filter(t => t.status !== 'CANCELLED')
      .reduce((s, t) => s + (t.seats ?? 0), 0);
  }
}
