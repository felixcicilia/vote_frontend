import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Muelle } from '../../models/muelle.model';
import { MuellesService } from '../../services/muelles.service';

@Component({
  selector: 'app-lista-muelles',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-muelles.component.html',
})
export class ListaMuellesComponent implements OnInit {
  private readonly service = inject(MuellesService);

  loading = false;
  errorMessage = '';
  muelles: Muelle[] = [];
  filtrados: Muelle[] = [];
  paginados: Muelle[] = [];
  search = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.muelles = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los muelles.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.muelles.filter(m =>
      m.name.toLowerCase().includes(t) || (m.city ?? '').toLowerCase().includes(t)
    );
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  eliminar(m: Muelle): void {
    if (!confirm(`¿Eliminar muelle "${m.name}"?`)) return;
    this.service.delete(m.id).subscribe({
      next: () => { this.muelles = this.muelles.filter(x => x.id !== m.id); this.aplicarFiltros(); },
      error: () => alert('No se pudo eliminar.'),
    });
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, m: Muelle): number { return m.id; }
}
