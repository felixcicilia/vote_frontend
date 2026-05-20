import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

interface PuntoSalida {
  id: number;
  name: string;
  city: string;
  state: string;
  icon: string;
  locationType: 'MUELLE' | 'ISLA';
  isActive: boolean;
}

interface PuntoForm {
  name: string;
  city: string;
  state: string;
  icon: string;
  locationType: 'MUELLE' | 'ISLA';
}

@Component({
  selector: 'app-lista-puntos-salida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-puntos-salida.component.html',
})
export class ListaPuntosSalidaComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/departure-points`;

  loading = true;
  submitting = false;
  showForm = false;
  editingId: number | null = null;
  errorMessage = '';
  successMessage = '';

  puntos: PuntoSalida[] = [];
  filterType: 'ALL' | 'MUELLE' | 'ISLA' = 'ALL';
  search = '';

  form: PuntoForm = this.emptyForm();

  page = 1;
  readonly limit = 15;

  get filteredPuntos(): PuntoSalida[] {
    const term = this.search.trim().toLowerCase();
    return this.puntos.filter(p => {
      const matchType = this.filterType === 'ALL' || p.locationType === this.filterType;
      const matchSearch = !term ||
        p.name.toLowerCase().includes(term) ||
        p.city.toLowerCase().includes(term) ||
        p.state.toLowerCase().includes(term);
      return matchType && matchSearch;
    });
  }

  get total(): number { return this.filteredPuntos.length; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.limit)); }
  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  get paginatedPuntos(): PuntoSalida[] { return this.filteredPuntos.slice((this.page - 1) * this.limit, this.page * this.limit); }

  cambiarPagina(n: number): void { if (n >= 1 && n <= this.totalPages) this.page = n; }

  countByType(type: 'ALL' | 'MUELLE' | 'ISLA'): number {
    const term = this.search.trim().toLowerCase();
    return this.puntos.filter(p => {
      const matchType = type === 'ALL' || p.locationType === type;
      const matchSearch = !term ||
        p.name.toLowerCase().includes(term) ||
        p.city.toLowerCase().includes(term) ||
        p.state.toLowerCase().includes(term);
      return matchType && matchSearch;
    }).length;
  }

  ngOnInit(): void { this.load(); }

  private load(): void {
    this.loading = true;
    this.http.get<any>(this.base).pipe(
      map(r => Array.isArray(r) ? r : (r?.data ?? []))
    ).subscribe({
      next: (data) => { this.puntos = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  openEdit(p: PuntoSalida): void {
    this.editingId = p.id;
    this.form = { name: p.name, city: p.city, state: p.state, icon: p.icon, locationType: p.locationType };
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  cancel(): void { this.showForm = false; this.editingId = null; this.form = this.emptyForm(); }

  save(): void {
    if (!this.form.name.trim() || !this.form.city.trim() || !this.form.state.trim()) {
      this.errorMessage = 'Nombre, ciudad y estado son obligatorios.';
      return;
    }
    this.submitting = true;
    this.errorMessage = '';

    const req$ = this.editingId
      ? this.http.patch<any>(`${this.base}/${this.editingId}`, this.form).pipe(map(r => r?.data ?? r))
      : this.http.post<any>(this.base, this.form).pipe(map(r => r?.data ?? r));

    req$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.puntos = this.puntos.map(p => p.id === this.editingId ? saved : p);
          this.successMessage = 'Punto actualizado.';
        } else {
          this.puntos = [saved, ...this.puntos];
          this.successMessage = 'Punto creado.';
        }
        this.submitting = false;
        this.cancel();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al guardar.';
        this.submitting = false;
      },
    });
  }

  toggleActive(p: PuntoSalida): void {
    this.http.patch<any>(`${this.base}/${p.id}`, { isActive: !p.isActive }).pipe(map(r => r?.data ?? r)).subscribe({
      next: (updated) => { this.puntos = this.puntos.map(x => x.id === updated.id ? updated : x); },
    });
  }

  delete(p: PuntoSalida): void {
    if (!confirm(`¿Eliminar "${p.name}"?`)) return;
    this.http.delete(`${this.base}/${p.id}`).subscribe({
      next: () => { this.puntos = this.puntos.filter(x => x.id !== p.id); },
    });
  }

  private emptyForm(): PuntoForm {
    return { name: '', city: '', state: '', icon: '⚓', locationType: 'MUELLE' };
  }
}
