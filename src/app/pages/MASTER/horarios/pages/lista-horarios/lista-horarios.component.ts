import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Horario } from '../../models/horario.model';
import { HorariosService } from '../../services/horarios.service';

@Component({
  selector: 'app-lista-horarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-horarios.component.html',
})
export class ListaHorariosComponent implements OnInit {
  private readonly service = inject(HorariosService);

  loading = false;
  errorMessage = '';
  horarios: Horario[] = [];
  filtrados: Horario[] = [];
  paginados: Horario[] = [];
  search = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  readonly DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.horarios = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los horarios.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.horarios.filter(h =>
      h.route.originPier.name.toLowerCase().includes(t) ||
      h.route.destinationPier.name.toLowerCase().includes(t) ||
      h.vessel.name.toLowerCase().includes(t)
    );
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  diasLabel(days: number[]): string {
    return days.map(d => this.DAYS[d] ?? d).join(', ');
  }

  eliminar(h: Horario): void {
    if (!confirm(`¿Eliminar horario #${h.id}?`)) return;
    this.service.delete(h.id).subscribe({
      next: () => { this.horarios = this.horarios.filter(x => x.id !== h.id); this.aplicarFiltros(); },
      error: () => alert('No se pudo eliminar.'),
    });
  }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, h: Horario): number { return h.id; }
}
