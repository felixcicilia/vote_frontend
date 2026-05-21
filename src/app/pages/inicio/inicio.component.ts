import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../auth-pages/services/auth.service';
import { ViajesService } from '../viajes/services/viajes.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { MuellesService } from '../muelles/services/muelles.service';
import { Viaje } from '../viajes/models/viaje.model';
import { Ticket } from '../tickets/models/ticket.model';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { Muelle } from '../muelles/models/muelle.model';
import { environment } from '../../../environments/environment';
import { MapaMuellesComponent } from '../../shared/components/mapa-muelles/mapa-muelles.component';

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
  imports: [CommonModule, RouterModule, FormsModule, MapaMuellesComponent],
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit, OnDestroy {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly viajesService = inject(ViajesService);
  private readonly ticketsService = inject(TicketsService);
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly muellesService = inject(MuellesService);

  // Shared
  loading = true;

  // Client state
  misTickets: Ticket[] = [];
  muelles: Muelle[] = [];
  yatesYCatamaranes: Embarcacion[] = [];
  todasEmbarcaciones: Embarcacion[] = [];
  searchOrigen = '';
  searchDestino = '';
  searchFecha = this.hoy();

  @ViewChild('ofertasTrack') ofertasTrack?: ElementRef<HTMLDivElement>;

  scrollOfertas(dir: 1 | -1): void {
    const el = this.ofertasTrack?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  }

  // Provider state
  misEmbarcaciones: Embarcacion[] = [];
  misReservas: Ticket[] = [];

  // ── Slider de noticias ────────────────────────────────────────────────────
  readonly noticias: Noticia[] = NOTICIAS_MOCK;
  readonly slideActual = signal(0);
  private sliderInterval?: ReturnType<typeof setInterval>;

  get user() { return this.auth.user(); }
  get role() { return this.auth.role(); }
  get isCliente() { return this.role === 'CLIENTE'; }
  get isProveedor() { return this.role === 'PROVEEDOR'; }
  get isAdmin() { return this.role === 'MASTER' || this.role === 'ADMINISTRADOR'; }

  ngOnInit(): void {
    if (this.isCliente) this.loadCliente();
    else if (this.isProveedor) this.loadProveedor();
    else { this.loading = false; }

    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
  }

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
    const muelles$ = this.muellesService.getAll(true);
    const tickets$ = userId ? this.ticketsService.getAll({ clientId: userId }) : null;

    muelles$.subscribe({ next: (m) => { this.muelles = m; } });

    this.embarcacionesService.getAll().subscribe({
      next: (emb) => {
        const active = emb.filter(e => e.status === 'ACTIVE');
        this.todasEmbarcaciones = active;
        this.yatesYCatamaranes = active.filter(e => e.type === 'YATE' || e.type === 'CATAMARAN');
      },
    });

    if (tickets$) {
      tickets$.subscribe({
        next: (t) => { this.misTickets = t.slice(0, 5); this.loading = false; },
        error: () => { this.loading = false; },
      });
    } else {
      this.loading = false;
    }
  }

  private loadProveedor(): void {
    this.embarcacionesService.getAll().subscribe({
      next: (emb) => {
        this.misEmbarcaciones = emb;
        if (emb.length > 0) {
          this.ticketsService.getAll({ vesselId: emb[0].id }).subscribe({
            next: (t) => { this.misReservas = t.slice(0, 10); this.loading = false; },
            error: () => { this.loading = false; },
          });
        } else {
          this.loading = false;
        }
      },
      error: () => { this.loading = false; },
    });
  }

  buscar(): void {
    if (!this.searchOrigen || !this.searchDestino || !this.searchFecha) return;
    this.router.navigate(['/buscar'], {
      queryParams: {
        origen: this.searchOrigen,
        destino: this.searchDestino,
        fecha: this.searchFecha,
      },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  ticketStatusClass(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400',
      USED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[status] ?? 'bg-gray-100 text-gray-600';
  }

  ticketStatusLabel(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente', USED: 'Usado', CANCELLED: 'Cancelado',
    };
    return map[status] ?? status;
  }

  countByStatus(status: string): number {
    return this.misReservas.filter(r => r.status === status).length;
  }

  private hoy(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
}
