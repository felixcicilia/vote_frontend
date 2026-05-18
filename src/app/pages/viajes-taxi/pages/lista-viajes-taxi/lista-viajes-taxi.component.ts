import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViajeTaxi, TaxiTripStatus } from '../../models/viaje-taxi.model';
import { ViajesTaxiService } from '../../services/viajes-taxi.service';

@Component({
  selector: 'app-lista-viajes-taxi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-viajes-taxi.component.html',
})
export class ListaViajesTaxiComponent implements OnInit {
  private readonly service = inject(ViajesTaxiService);

  loading = false;
  errorMessage = '';
  viajes: ViajeTaxi[] = [];
  filtrados: ViajeTaxi[] = [];
  paginados: ViajeTaxi[] = [];
  search = '';
  filtroEstado: TaxiTripStatus | '' = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.viajes = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los viajes taxi.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.viajes.filter(v => {
      const busqueda = v.originName.toLowerCase().includes(t) ||
        v.destinationName.toLowerCase().includes(t) ||
        v.client.firstName.toLowerCase().includes(t);
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

  statusClase(s: TaxiTripStatus): string {
    if (s === 'SEARCHING') return 'bg-yellow-100 text-yellow-700';
    if (s === 'ACCEPTED' || s === 'HEADING_TO_CLIENT' || s === 'ARRIVED_AT_CLIENT') return 'bg-blue-100 text-blue-700';
    if (s === 'IN_PROGRESS') return 'bg-purple-100 text-purple-700';
    if (s === 'COMPLETED') return 'bg-green-100 text-green-700';
    if (s === 'CANCELLED') return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-600';
  }

  statusLabel(s: TaxiTripStatus): string {
    const map: Record<TaxiTripStatus, string> = {
      SEARCHING: 'Buscando', ACCEPTED: 'Aceptado', HEADING_TO_CLIENT: 'En camino',
      ARRIVED_AT_CLIENT: 'Llegó', IN_PROGRESS: 'En curso',
      COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return map[s] ?? s;
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, v: ViajeTaxi): number { return v.id; }
}
