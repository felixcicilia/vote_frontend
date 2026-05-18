import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Resena } from '../../models/resena.model';
import { ResenasService } from '../../services/resenas.service';

@Component({
  selector: 'app-lista-resenas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-resenas.component.html',
})
export class ListaResenasComponent implements OnInit {
  private readonly service = inject(ResenasService);

  loading = false;
  errorMessage = '';
  resenas: Resena[] = [];
  filtradas: Resena[] = [];
  paginadas: Resena[] = [];
  search = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.resenas = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar las reseñas.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtradas = this.resenas.filter(r =>
      r.reviewer.firstName.toLowerCase().includes(t) ||
      (r.comment ?? '').toLowerCase().includes(t)
    );
    this.total = this.filtradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginadas = this.filtradas.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  estrellas(rating: number): number[] { return Array.from({ length: rating }, (_, i) => i); }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, r: Resena): number { return r.id; }
}
