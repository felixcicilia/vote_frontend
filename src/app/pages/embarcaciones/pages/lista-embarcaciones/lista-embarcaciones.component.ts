import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Embarcacion, VesselType, VesselStatus, VesselVerificationStatus } from '../../models/embarcacion.model';
import { EmbarcacionesService } from '../../services/embarcaciones.service';

@Component({
  selector: 'app-lista-embarcaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-embarcaciones.component.html',
})
export class ListaEmbarcacionesComponent implements OnInit {
  private readonly service = inject(EmbarcacionesService);

  loading = false;
  errorMessage = '';

  embarcaciones: Embarcacion[] = [];
  filtradas: Embarcacion[] = [];
  paginadas: Embarcacion[] = [];

  search = '';
  filtroTipo: VesselType | '' = '';
  filtroEstado: VesselStatus | '' = '';
  filtroVerificacion: VesselVerificationStatus | '' = '';

  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.loading = true;
    this.errorMessage = '';

    this.service.getAll().subscribe({
      next: (data) => {
        this.embarcaciones = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No se pudo cargar la lista de embarcaciones.';
        this.loading = false;
      },
    });
  }

  aplicarFiltros(): void {
    const term = this.search.trim().toLowerCase();

    this.filtradas = this.embarcaciones.filter((e) => {
      const busqueda =
        e.name.toLowerCase().includes(term) ||
        (e.licensePlate ?? '').toLowerCase().includes(term) ||
        (e.description ?? '').toLowerCase().includes(term);
      const tipo = !this.filtroTipo || e.type === this.filtroTipo;
      const estado = !this.filtroEstado || e.status === this.filtroEstado;
      const verificacion = !this.filtroVerificacion || e.verificationStatus === this.filtroVerificacion;
      return busqueda && tipo && estado && verificacion;
    });

    this.total = this.filtradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    if (this.page < 1) this.page = 1;
    this.actualizarPaginacion();
  }

  actualizarPaginacion(): void {
    const start = (this.page - 1) * this.limit;
    this.paginadas = this.filtradas.slice(start, start + this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  onFilterChange(): void { this.page = 1; this.aplicarFiltros(); }

  cambiarPagina(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
    this.actualizarPaginacion();
  }

  limpiar(): void {
    this.search = '';
    this.filtroTipo = '';
    this.filtroEstado = '';
    this.filtroVerificacion = '';
    this.page = 1;
    this.aplicarFiltros();
  }

  eliminar(e: Embarcacion): void {
    if (!confirm(`¿Eliminar "${e.name}"?`)) return;
    this.service.delete(e.id).subscribe({
      next: () => {
        this.embarcaciones = this.embarcaciones.filter((x) => x.id !== e.id);
        this.aplicarFiltros();
      },
      error: () => alert('No se pudo eliminar la embarcación.'),
    });
  }

  tipoLabel(t: VesselType): string {
    const map: Record<VesselType, string> = {
      LANCHA: 'Lancha', YATE: 'Yate', CATAMARAN: 'Catamarán', BOTE: 'Bote',
    };
    return map[t] ?? t;
  }

  estadoClase(s: VesselStatus): string {
    return s === 'ACTIVE'
      ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
      : s === 'MAINTENANCE'
      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'
      : 'bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400';
  }

  estadoLabel(s: VesselStatus): string {
    return s === 'ACTIVE' ? 'Activa' : s === 'MAINTENANCE' ? 'Mantenimiento' : 'Inactiva';
  }

  verificacionClase(s: VesselVerificationStatus): string {
    return s === 'APPROVED'
      ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
      : s === 'REJECTED'
      ? 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
      : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400';
  }

  verificacionLabel(s: VesselVerificationStatus): string {
    return s === 'APPROVED' ? '✓ Aprobada' : s === 'REJECTED' ? '✗ Rechazada' : '⏳ Pendiente';
  }

  get hayFiltros(): boolean {
    return !!(this.search || this.filtroTipo || this.filtroEstado || this.filtroVerificacion);
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, e: Embarcacion): number { return e.id; }
}
