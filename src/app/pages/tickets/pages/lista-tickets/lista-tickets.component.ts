import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ticket, TicketStatus } from '../../models/ticket.model';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-lista-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-tickets.component.html',
})
export class ListaTicketsComponent implements OnInit {
  private readonly service = inject(TicketsService);

  loading = false;
  errorMessage = '';
  tickets: Ticket[] = [];
  filtrados: Ticket[] = [];
  paginados: Ticket[] = [];
  search = '';
  filtroEstado: TicketStatus | '' = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.tickets = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los tickets.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.tickets.filter(tk => {
      const busqueda = tk.qrCode.toLowerCase().includes(t) ||
        tk.client.firstName.toLowerCase().includes(t) ||
        tk.client.lastName.toLowerCase().includes(t);
      const estado = !this.filtroEstado || tk.status === this.filtroEstado;
      return busqueda && estado;
    });
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  onFilterChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  statusClase(s: TicketStatus): string {
    const map: Record<TicketStatus, string> = {
      PENDING: 'bg-yellow-100 text-yellow-700', CONFIRMED: 'bg-blue-100 text-blue-700',
      USED: 'bg-green-100 text-green-700', CANCELLED: 'bg-red-100 text-red-700',
    };
    return map[s] ?? 'bg-gray-100 text-gray-600';
  }

  statusLabel(s: TicketStatus): string {
    const map: Record<TicketStatus, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmado', USED: 'Usado', CANCELLED: 'Cancelado',
    };
    return map[s] ?? s;
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, t: Ticket): number { return t.id; }
}
