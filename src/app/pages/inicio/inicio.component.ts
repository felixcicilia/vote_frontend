import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../auth-pages/services/auth.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { TasaService } from '../../shared/services/tasa.service';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { IslandBooking } from '../buscar/models/island-trip.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { environment } from '../../../environments/environment';

export interface Noticia {
  id: number;
  titulo: string;
  subtitulo?: string;
  imageUrl: string;
  badge?: string;
  badgeColor?: string;
  link?: string;
}

const NOTICIAS_MOCK: Noticia[] = [
  {
    id: 1,
    titulo: 'Nueva ruta directa Porlamar – Los Roques',
    subtitulo: 'Salidas todos los días a las 7:00 AM con lancha expresa.',
    imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
    badge: 'Nuevo',
    badgeColor: 'bg-green-500',
    link: '/buscar',
  },
  {
    id: 2,
    titulo: 'Temporada alta 2026 – Reserva con anticipación',
    subtitulo: 'Asegura tu lugar en los mejores yates y catamaranes.',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4aa8eda?w=1200&q=80',
    badge: 'Temporada',
    badgeColor: 'bg-amber-500',
    link: '/alquileres',
  },
  {
    id: 3,
    titulo: 'Recarga tu saldo y obtén descuentos exclusivos',
    subtitulo: 'Paga con nudos y viaja sin contratiempos.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
    badge: 'Promo',
    badgeColor: 'bg-brand-500',
    link: '/mis-metodos-pago',
  },
];

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit, OnDestroy {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly islandService = inject(IslandTripsService);
  private readonly alquileresService = inject(AlquileresService);
  readonly tasaService = inject(TasaService);

  loading = true;

  // Cliente
  misExcursiones: IslandBooking[] = [];
  misCharters: Alquiler[] = [];
  yatesYCatamaranes: Embarcacion[] = [];

  @ViewChild('ofertasTrack') ofertasTrack?: ElementRef<HTMLDivElement>;

  scrollOfertas(dir: 1 | -1): void {
    const el = this.ofertasTrack?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  }

  // Slider de noticias
  readonly noticias: Noticia[] = NOTICIAS_MOCK;
  readonly slideActual = signal(0);
  private sliderInterval?: ReturnType<typeof setInterval>;

  get user() { return this.auth.user(); }
  get role() { return this.auth.role(); }
  get isCliente() { return this.role === 'CLIENTE'; }
  get isProveedor() { return this.role === 'PROVEEDOR'; }

  get excursionesPendientesPago(): IslandBooking[] {
    return this.misExcursiones.filter(b => b.status === 'PENDING');
  }
  get excursionesProximas(): IslandBooking[] {
    const hoy = this.hoy();
    return this.misExcursiones
      .filter(b => b.status === 'CONFIRMED' && b.tripDate >= hoy)
      .sort((a, b) => a.tripDate.localeCompare(b.tripDate))
      .slice(0, 3);
  }

  ngOnInit(): void {
    this.tasaService.load();
    if (this.isCliente) this.loadCliente();
    else { this.loading = false; }
    this.startSlider();
  }

  ngOnDestroy(): void { clearInterval(this.sliderInterval); }

  private startSlider(): void {
    this.sliderInterval = setInterval(() => {
      this.slideActual.update(i => (i + 1) % this.noticias.length);
    }, 5000);
  }

  irASlide(i: number): void {
    this.slideActual.set(i);
    clearInterval(this.sliderInterval);
    this.startSlider();
  }

  prevSlide(): void { this.irASlide((this.slideActual() - 1 + this.noticias.length) % this.noticias.length); }
  nextSlide(): void { this.irASlide((this.slideActual() + 1) % this.noticias.length); }

  private loadCliente(): void {
    const userId = this.user?.id;

    this.embarcacionesService.getAll().subscribe({
      next: (emb) => {
        this.yatesYCatamaranes = emb
          .filter(e => (e.type === 'YATE' || e.type === 'CATAMARAN') && e.verificationStatus === 'APPROVED')
          .slice(0, 10);
      },
    });

    if (!userId) { this.loading = false; return; }

    this.islandService.getBookings({ clientId: userId }).subscribe({
      next: (b) => {
        this.misExcursiones = b
          .filter(x => x.status !== 'CANCELLED')
          .sort((x, y) => (y.createdAt ?? '').localeCompare(x.createdAt ?? ''))
          .slice(0, 6);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });

    this.alquileresService.getByClient(userId).subscribe({
      next: (a) => { this.misCharters = a.filter(x => x.status !== 'CANCELLED').slice(0, 3); },
      error: () => {},
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  private hoy(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
}
