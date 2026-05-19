import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { DestinosService } from '../../services/destinos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
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
  private readonly destinosService = inject(DestinosService);
  private readonly router = inject(Router);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  loading = false;
  embarcaciones: Embarcacion[] = [];
  resultados: Embarcacion[] = [];
  destinos: Destino[] = [];
  buscado = false;

  // Búsqueda
  destinoId = '';
  startDate = '';
  endDate = '';
  adults = 2;
  children = 0;
  showPaxPanel = false;

  readonly today = new Date().toISOString().split('T')[0];

  get isAdmin(): boolean { return this.authService.isAdmin(); }
  get totalPax(): number { return this.adults + this.children; }

  get destinoSeleccionado(): Destino | null {
    return this.destinos.find(d => String(d.id) === this.destinoId) ?? null;
  }

  get paxLabel(): string {
    const parts: string[] = [];
    if (this.adults > 0) parts.push(`${this.adults} adulto${this.adults !== 1 ? 's' : ''}`);
    if (this.children > 0) parts.push(`${this.children} niño${this.children !== 1 ? 's' : ''}`);
    return parts.join(' · ') || 'Pasajeros';
  }

  get days(): number {
    if (!this.startDate || !this.endDate) return 0;
    const diff = new Date(this.endDate).getTime() - new Date(this.startDate).getTime();
    return Math.max(0, Math.ceil(diff / 86400000));
  }

  totalUsd(e: Embarcacion): number {
    return (e.pricePerDay ?? 0) * (this.days || 1);
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.destinosService.getAll().subscribe({ next: (d) => { this.destinos = d; } });
    this.cargar();
  }

  cargar(): void {
    this.loading = true;
    this.embarcacionesService.getCharterable().subscribe({
      next: (list) => {
        this.embarcaciones = list ?? [];
        this.filtrar();
        this.loading = false;
        this.buscado = true;
      },
      error: () => { this.loading = false; },
    });
  }

  buscar(): void {
    this.showPaxPanel = false;
    this.filtrar();
  }

  filtrar(): void {
    this.resultados = this.embarcaciones.filter(e =>
      !this.totalPax || e.capacity >= this.totalPax
    );
  }

  reservar(e: Embarcacion): void {
    this.router.navigate(['/alquileres/yate', e.id]);
  }

  togglePaxPanel(event: Event): void {
    event.stopPropagation();
    this.showPaxPanel = !this.showPaxPanel;
  }

  @HostListener('document:click')
  closePaxPanel(): void { this.showPaxPanel = false; }

  addAdults(): void    { this.adults++; }
  removeAdults(): void { if (this.adults > 1) this.adults--; }
  addChildren(): void  { this.children++; }
  removeChildren(): void { if (this.children > 0) this.children--; }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeLabel(t: string): string {
    const map: Record<string, string> = { YATE: 'Yate', CATAMARAN: 'Catamarán' };
    return map[t] ?? t;
  }
  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : '🛥️'; }
  amenityLabel = amenityLabel;
  amenityIcon  = amenityIcon;
}
