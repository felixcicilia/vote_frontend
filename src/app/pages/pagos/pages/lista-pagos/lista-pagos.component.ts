import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pago, PaymentStatus } from '../../models/pago.model';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-lista-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-pagos.component.html',
})
export class ListaPagosComponent implements OnInit {
  private readonly service = inject(PagosService);

  loading = false;
  errorMessage = '';
  pagos: Pago[] = [];
  filtrados: Pago[] = [];
  paginados: Pago[] = [];
  search = '';
  filtroEstado: PaymentStatus | '' = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.pagos = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los pagos.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.pagos.filter(p => {
      const busqueda = (p.transactionRef ?? '').toLowerCase().includes(t) ||
        p.client.firstName.toLowerCase().includes(t) ||
        p.client.lastName.toLowerCase().includes(t);
      const estado = !this.filtroEstado || p.status === this.filtroEstado;
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

  statusClase(s: PaymentStatus): string {
    return s === 'VERIFIED' ? 'bg-green-100 text-green-700'
      : s === 'REJECTED' ? 'bg-red-100 text-red-700'
      : 'bg-yellow-100 text-yellow-700';
  }

  statusLabel(s: PaymentStatus): string {
    return s === 'VERIFIED' ? 'Verificado' : s === 'REJECTED' ? 'Rechazado' : 'Pendiente';
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, p: Pago): number { return p.id; }
}
