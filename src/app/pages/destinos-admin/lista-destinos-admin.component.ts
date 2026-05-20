import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Destino {
  id: number;
  name: string;
  state: string;
  icon: string;
  description?: string | null;
  isActive: boolean;
}

interface DestinoForm {
  name: string;
  state: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-lista-destinos-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-destinos-admin.component.html',
})
export class ListaDestinosAdminComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/destinations`;

  loading = true;
  submitting = false;
  showForm = false;
  editingId: number | null = null;
  errorMessage = '';
  successMessage = '';

  destinos: Destino[] = [];
  search = '';
  page = 1;
  readonly limit = 10;
  form: DestinoForm = this.emptyForm();

  get filteredDestinos(): Destino[] {
    const term = this.search.trim().toLowerCase();
    if (!term) return this.destinos;
    return this.destinos.filter(d =>
      d.name.toLowerCase().includes(term) ||
      d.state.toLowerCase().includes(term) ||
      (d.description ?? '').toLowerCase().includes(term)
    );
  }

  get total(): number { return this.filteredDestinos.length; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.limit)); }
  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  get paginados(): Destino[] { return this.filteredDestinos.slice((this.page - 1) * this.limit, this.page * this.limit); }

  cambiarPagina(n: number): void { if (n >= 1 && n <= this.totalPages) this.page = n; }
  onSearchChange(): void { this.page = 1; }
  trackById(_: number, d: Destino): number { return d.id; }

  ngOnInit(): void { this.load(); }

  private load(): void {
    this.loading = true;
    this.http.get<any>(this.base).pipe(map(r => Array.isArray(r) ? r : (r?.data ?? []))).subscribe({
      next: (d) => { this.destinos = d; this.loading = false; },
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

  openEdit(d: Destino): void {
    this.editingId = d.id;
    this.form = { name: d.name, state: d.state, icon: d.icon, description: d.description ?? '' };
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  cancel(): void { this.showForm = false; this.editingId = null; this.form = this.emptyForm(); }

  save(): void {
    if (!this.form.name.trim() || !this.form.state.trim()) {
      this.errorMessage = 'Nombre y estado son obligatorios.';
      return;
    }
    this.submitting = true;
    this.errorMessage = '';

    const body = { ...this.form, description: this.form.description || null };
    const req$ = this.editingId
      ? this.http.patch<any>(`${this.base}/${this.editingId}`, body).pipe(map(r => r?.data ?? r))
      : this.http.post<any>(this.base, body).pipe(map(r => r?.data ?? r));

    req$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.destinos = this.destinos.map(d => d.id === this.editingId ? saved : d);
          this.successMessage = 'Destino actualizado.';
        } else {
          this.destinos = [saved, ...this.destinos];
          this.successMessage = 'Destino creado.';
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

  toggleActive(d: Destino): void {
    this.http.patch<any>(`${this.base}/${d.id}`, { isActive: !d.isActive }).pipe(map(r => r?.data ?? r)).subscribe({
      next: (updated) => { this.destinos = this.destinos.map(x => x.id === updated.id ? updated : x); },
    });
  }

  delete(d: Destino): void {
    if (!confirm(`¿Eliminar "${d.name}"?`)) return;
    this.http.delete(`${this.base}/${d.id}`).subscribe({
      next: () => { this.destinos = this.destinos.filter(x => x.id !== d.id); },
    });
  }

  private emptyForm(): DestinoForm {
    return { name: '', state: '', icon: '🏝️', description: '' };
  }
}
