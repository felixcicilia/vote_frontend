import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../auth-pages/services/auth.service';
import { ViajesService } from '../viajes/services/viajes.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { MuellesService } from '../muelles/services/muelles.service';
import { Viaje } from '../viajes/models/viaje.model';
import { Ticket } from '../tickets/models/ticket.model';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { Muelle } from '../muelles/models/muelle.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly viajesService = inject(ViajesService);
  private readonly ticketsService = inject(TicketsService);
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly muellesService = inject(MuellesService);

  // Shared
  loading = true;

  // Client state
  misTickets: Ticket[] = [];
  muelles: Muelle[] = [];
  searchOrigen = '';
  searchDestino = '';
  searchFecha = this.hoy();

  // Provider state
  misEmbarcaciones: Embarcacion[] = [];
  misReservas: Ticket[] = [];

  get user() { return this.auth.user(); }
  get role() { return this.auth.role(); }
  get isCliente() { return this.role === 'CLIENTE'; }
  get isProveedor() { return this.role === 'PROVEEDOR'; }
  get isAdmin() { return this.role === 'MASTER' || this.role === 'ADMINISTRADOR'; }

  ngOnInit(): void {
    if (this.isCliente) this.loadCliente();
    else if (this.isProveedor) this.loadProveedor();
    else { this.loading = false; }
  }

  private loadCliente(): void {
    const userId = this.user?.id;
    const muelles$ = this.muellesService.getAll(true);
    const tickets$ = userId ? this.ticketsService.getAll({ clientId: userId }) : null;

    muelles$.subscribe({ next: (m) => { this.muelles = m; } });

    if (tickets$) {
      tickets$.subscribe({
        next: (t) => { this.misTickets = t.slice(0, 5); this.loading = false; },
        error: () => { this.loading = false; },
      });
    } else {
      this.loading = false;
    }
  }

  private loadProveedor(): void {
    this.embarcacionesService.getAll().subscribe({
      next: (emb) => {
        this.misEmbarcaciones = emb;
        // Cargar reservas de todos los vessels del proveedor
        if (emb.length > 0) {
          this.ticketsService.getAll({ vesselId: emb[0].id }).subscribe({
            next: (t) => { this.misReservas = t.slice(0, 10); this.loading = false; },
            error: () => { this.loading = false; },
          });
        } else {
          this.loading = false;
        }
      },
      error: () => { this.loading = false; },
    });
  }

  buscar(): void {
    if (!this.searchOrigen || !this.searchDestino || !this.searchFecha) return;
    this.router.navigate(['/buscar'], {
      queryParams: {
        origen: this.searchOrigen,
        destino: this.searchDestino,
        fecha: this.searchFecha,
      },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  ticketStatusClass(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400',
      USED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[status] ?? 'bg-gray-100 text-gray-600';
  }

  ticketStatusLabel(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Usado', CANCELLED: 'Cancelado',
    };
    return map[status] ?? status;
  }

  countByStatus(status: string): number {
    return this.misReservas.filter(r => r.status === status).length;
  }

  private hoy(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
}
