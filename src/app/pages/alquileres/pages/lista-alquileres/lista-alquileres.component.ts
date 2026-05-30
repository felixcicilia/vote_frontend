import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AlquileresService } from '../../services/alquileres.service';
import { DestinosService } from '../../services/destinos.service';
import { AlquileresStateService } from '../../services/alquileres-state.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Alquiler, RentalStatus } from '../../models/alquiler.model';
import { Destino } from '../../models/destino.model';
import { environment } from '../../../../../environments/environment';
import { amenityLabel, amenityIcon } from '../../data/amenities';

@Component({
  selector: 'app-lista-alquileres',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-alquileres.component.html',
})
export class ListaAlquileresComponent implements OnInit {
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly alquileresService    = inject(AlquileresService);
  private readonly destinosService      = inject(DestinosService);
  private readonly alquileresState      = inject(AlquileresStateService);
  private readonly router               = inject(Router);
  readonly authService                  = inject(AuthService);
  readonly tasaService                  = inject(TasaService);

  get isMaster(): boolean { const r = this.authService.role(); return r === 'MASTER' || r === 'ADMINISTRADOR'; }
  get isAdmin(): boolean  { return this.authService.isAdmin(); }

  // ── Client mode ───────────────────────────────────────────────────────────
  loading = false;
  embarcaciones: Embarcacion[] = [];
  resultados: Embarcacion[] = [];
  destinos: Destino[] = [];
  buscado = false;

  destinoId = '';
  startDate = '';
  endDate = '';
  adults = 2;
  children = 0;
  showPaxPanel = false;

  readonly today = new Date().toISOString().split('T')[0];

  get totalPax(): number { return this.adults + this.children; }
  get destinoSeleccionado(): Destino | null { return this.destinos.find(d => String(d.id) === this.destinoId) ?? null; }
  get paxLabel(): string {
    const parts: string[] = [];
    if (this.adults > 0)   parts.push(`${this.adults} adulto${this.adults !== 1 ? 's' : ''}`);
    if (this.children > 0) parts.push(`${this.children} niño${this.children !== 1 ? 's' : ''}`);
    return parts.join(' · ') || 'Pasajeros';
  }
  get days(): number {
    if (!this.startDate || !this.endDate) return 0;
    return Math.max(0, Math.ceil((new Date(this.endDate).getTime() - new Date(this.startDate).getTime()) / 86400000));
  }
  totalUsd(e: Embarcacion): number { return (e.pricePerDay ?? 0) * (this.days || 1); }

  // ── Master monitoring mode ─────────────────────────────────────────────
  rentals: Alquiler[] = [];
  filterStatus: RentalStatus | 'ALL' = 'ALL';
  search = '';
  page = 1;
  readonly limit = 15;

  get filtered(): Alquiler[] {
    const term = this.search.trim().toLowerCase();
    return this.rentals.filter(r => {
      const matchStatus = this.filterStatus === 'ALL' || r.status === this.filterStatus;
      const matchSearch = !term
        || `${r.client.firstName} ${r.client.lastName}`.toLowerCase().includes(term)
        || r.client.email.toLowerCase().includes(term)
        || (r.vessel?.name ?? '').toLowerCase().includes(term)
        || (r.destination?.name ?? '').toLowerCase().includes(term);
      return matchStatus && matchSearch;
    });
  }
  get total(): number { return this.filtered.length; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.limit)); }
  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  get paginados(): Alquiler[] { return this.filtered.slice((this.page - 1) * this.limit, this.page * this.limit); }

  verDetalle(a: Alquiler): void { this.router.navigate(['/alquileres', a.id]); }
  cambiarPagina(n: number): void { if (n >= 1 && n <= this.totalPages) this.page = n; }
  onSearchChange(): void { this.page = 1; }
  onFilterChange(): void { this.page = 1; }
  trackById(_: number, a: Alquiler): number { return a.id; }

  readonly rentalStatuses: (RentalStatus | 'ALL')[] = ['ALL', 'PENDING', 'CONFIRMED', 'ACTIVE', 'COMPLETED', 'CANCELLED'];

  statusLabel(s: string): string {
    return ({ ALL: 'Todos', PENDING: 'Pendiente', CONFIRMED: 'Confirmado', PAID: 'Pagado', ACTIVE: 'Activo', COMPLETED: 'Completado', CANCELLED: 'Cancelado' } as any)[s] ?? s;
  }
  statusClass(s: string): string {
    return ({
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    } as any)[s] ?? 'bg-gray-100 text-gray-600';
  }
  countByStatus(s: RentalStatus | 'ALL'): number {
    if (s === 'ALL') return this.rentals.length;
    return this.rentals.filter(r => r.status === s).length;
  }

  // ── Lifecycle ──────────────────────────────────────────────────────────
  ngOnInit(): void {
    if (this.isMaster) {
      this.loading = true;
      this.alquileresService.getAll().subscribe({
        next: (list) => { this.rentals = list; this.loading = false; },
        error: () => { this.loading = false; },
      });
    } else {
      this.tasaService.load();
      this.destinosService.getAll().subscribe({ next: (d) => { this.destinos = d; } });

      const saved = this.alquileresState.restore();
      if (saved) {
        this.destinoId     = saved.destinoId;
        this.startDate     = saved.startDate;
        this.endDate       = saved.endDate;
        this.adults        = saved.adults;
        this.children      = saved.children;
        this.embarcaciones = saved.embarcaciones;
        this.resultados    = saved.resultados;
        this.buscado       = saved.buscado;
      } else {
        this.cargar();
      }
    }
  }

  // ── Client methods ─────────────────────────────────────────────────────
  cargar(): void {
    this.loading = true;
    this.embarcacionesService.getCharterable(this.startDate || undefined, this.endDate || undefined).subscribe({
      next: (list) => {
        this.embarcaciones = list ?? [];
        this.filtrar();
        this.loading = false;
        this.buscado = true;
      },
      error: () => { this.loading = false; },
    });
  }
  buscar(): void { this.showPaxPanel = false; this.cargar(); }
  filtrar(): void {
    this.resultados = this.embarcaciones.filter(e => !this.totalPax || e.capacity >= this.totalPax);
    this.alquileresState.save({
      destinoId: this.destinoId, startDate: this.startDate, endDate: this.endDate,
      adults: this.adults, children: this.children,
      embarcaciones: this.embarcaciones, resultados: this.resultados, buscado: this.buscado,
    });
  }
  reservar(e: Embarcacion): void {
    this.router.navigate(['/alquileres/yate', e.id], {
      queryParams: {
        destinoId:  this.destinoId  || null,
        startDate:  this.startDate  || null,
        endDate:    this.endDate    || null,
        adults:     this.adults,
        children:   this.children,
      },
    });
  }
  togglePaxPanel(event: Event): void { event.stopPropagation(); this.showPaxPanel = !this.showPaxPanel; }
  @HostListener('document:click') closePaxPanel(): void { this.showPaxPanel = false; }
  addAdults(): void     { this.adults++; }
  removeAdults(): void  { if (this.adults > 1) this.adults--; }
  addChildren(): void   { this.children++; }
  removeChildren(): void { if (this.children > 0) this.children--; }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    return url.startsWith('http') ? url : `${environment.apiUrl.replace('/api', '')}${url}`;
  }
  typeLabel(t: string): string { return ({ YATE: 'Yate', CATAMARAN: 'Catamarán' } as any)[t] ?? t; }
  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : '🛥️'; }
  amenityLabel = amenityLabel;
  amenityIcon  = amenityIcon;
}
