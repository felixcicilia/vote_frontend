import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Viaje, TripStatus } from '../../models/viaje.model';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-lista-viajes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-viajes.component.html',
})
export class ListaViajesComponent implements OnInit {
  private readonly service = inject(ViajesService);

  loading = false;
  errorMessage = '';
  viajes: Viaje[] = [];
  filtrados: Viaje[] = [];
  paginados: Viaje[] = [];
  search = '';
  filtroEstado: TripStatus | '' = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.viajes = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los viajes.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.viajes.filter(v => {
      const busqueda = v.schedule?.route?.originPier?.name?.toLowerCase().includes(t) ||
        v.schedule?.route?.destinationPier?.name?.toLowerCase().includes(t) ||
        v.departureDate.includes(t);
      const estado = !this.filtroEstado || v.status === this.filtroEstado;
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

  statusClase(s: TripStatus): string {
    const map: Record<TripStatus, string> = {
      SCHEDULED: 'bg-blue-100 text-blue-700',
      IN_PROGRESS: 'bg-yellow-100 text-yellow-700',
      COMPLETED: 'bg-green-100 text-green-700',
      CANCELLED: 'bg-red-100 text-red-700',
    };
    return map[s] ?? 'bg-gray-100 text-gray-600';
  }

  statusLabel(s: TripStatus): string {
    const map: Record<TripStatus, string> = {
      SCHEDULED: 'Programado', IN_PROGRESS: 'En curso',
      COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return map[s] ?? s;
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, v: Viaje): number { return v.id; }
}
