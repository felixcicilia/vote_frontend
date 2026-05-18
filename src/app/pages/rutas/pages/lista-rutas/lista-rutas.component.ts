import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ruta } from '../../models/ruta.model';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-lista-rutas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-rutas.component.html',
})
export class ListaRutasComponent implements OnInit {
  private readonly service = inject(RutasService);

  loading = false;
  errorMessage = '';
  rutas: Ruta[] = [];
  filtradas: Ruta[] = [];
  paginadas: Ruta[] = [];
  search = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.rutas = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar las rutas.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtradas = this.rutas.filter(r =>
      r.originPier.name.toLowerCase().includes(t) ||
      r.destinationPier.name.toLowerCase().includes(t)
    );
    this.total = this.filtradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginadas = this.filtradas.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  eliminar(r: Ruta): void {
    if (!confirm(`¿Eliminar ruta ${r.originPier.name} → ${r.destinationPier.name}?`)) return;
    this.service.delete(r.id).subscribe({
      next: () => { this.rutas = this.rutas.filter(x => x.id !== r.id); this.aplicarFiltros(); },
      error: () => alert('No se pudo eliminar.'),
    });
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, r: Ruta): number { return r.id; }
}
