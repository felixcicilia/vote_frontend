import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../auth-pages/services/auth.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { CaptainsService } from '../mis-capitanes/services/captains.service';
import { TasaService } from '../../shared/services/tasa.service';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { IslandBooking } from '../buscar/models/island-trip.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { Captain } from '../mis-capitanes/models/captain.model';
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

export interface UpcomingEvent {
  type: 'charter-start' | 'charter-end' | 'island';
  date: string;
  time?: string;
  title: string;
  vessel: string;
  client: string;
  status: string;
  route: string;
  daysFrom: number;
}

export interface VesselActivity {
  vessel: Embarcacion;
  charterCount: number;
  islandCount: number;
  totalTrips: number;
  nextDate?: string;
}

export interface CaptainActivity {
  captain: Captain;
  assignedCharters: number;
  completedTrips: number;
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
  readonly auth                  = inject(AuthService);
  private readonly router        = inject(Router);
  private readonly embService    = inject(EmbarcacionesService);
  private readonly islandService = inject(IslandTripsService);
  private readonly alqService    = inject(AlquileresService);
  private readonly captainsService = inject(CaptainsService);
  readonly tasaService           = inject(TasaService);

  loading = true;

  // ── Cliente ─────────────────────────────────────────────────────────────
  misExcursiones: IslandBooking[] = [];
  misCharters: Alquiler[] = [];
  yatesYCatamaranes: Embarcacion[] = [];

  @ViewChild('ofertasTrack') ofertasTrack?: ElementRef<HTMLDivElement>;
  scrollOfertas(dir: 1 | -1): void {
    this.ofertasTrack?.nativeElement.scrollBy({ left: dir * 280, behavior: 'smooth' });
  }

  readonly noticias: Noticia[] = NOTICIAS_MOCK;
  readonly slideActual = signal(0);
  private sliderInterval?: ReturnType<typeof setInterval>;

  // ── Proveedor ────────────────────────────────────────────────────────────
  provVessels: Embarcacion[]     = [];
  provCharters: Alquiler[]       = [];
  provBookings: IslandBooking[]  = [];
  provCaptains: Captain[]        = [];

  upcomingEvents: UpcomingEvent[]   = [];
  vesselActivity: VesselActivity[]  = [];
  captainActivity: CaptainActivity[] = [];

  get pendingCharters(): number  { return this.provCharters.filter(c => c.status === 'PENDING').length; }
  get activeCharters(): number   { return this.provCharters.filter(c => c.status === 'ACTIVE').length; }
  get confirmedCharters(): number { return this.provCharters.filter(c => c.status === 'CONFIRMED').length; }
  get pendingIsland(): number    { return this.provBookings.filter(b => b.status === 'PENDING').length; }
  get approvedCaptains(): number { return this.provCaptains.filter(c => c.verificationStatus === 'APROBADO').length; }
  get activeVessels(): number    { return this.provVessels.filter(v => v.verificationStatus === 'APPROVED' && v.isAvailable).length; }

  // ── Role helpers ─────────────────────────────────────────────────────────
  get user()        { return this.auth.user(); }
  get role()        { return this.auth.role(); }
  get isCliente()   { return this.role === 'CLIENTE'; }
  get isProveedor() { return this.role === 'PROVEEDOR'; }

  get companyName(): string {
    return (this.auth.user() as any)?.providerProfile?.companyName ?? this.user?.firstName ?? '';
  }

  get providerId(): number | null {
    return (this.auth.user() as any)?.providerProfile?.id ?? null;
  }

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

  // ── KPIs cliente ─────────────────────────────────────────────────────────
  get clienteTotalExcursiones(): number { return this.misExcursiones.length; }
  get clienteTotalCharters(): number    { return this.misCharters.length; }
  get clientePendientePago(): number {
    return this.misExcursiones.filter(b => b.status === 'PENDING').length +
           this.misCharters.filter(a => a.status === 'PENDING').length;
  }
  get clienteGastadoTotal(): number {
    const exc = this.misExcursiones.filter(b => b.status !== 'CANCELLED').reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
    const cha = this.misCharters.filter(a => a.status !== 'CANCELLED').reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
    return exc + cha;
  }
  get proximoCharter(): Alquiler | null {
    const hoy = this.hoy();
    return this.misCharters
      .filter(a => a.status === 'CONFIRMED' && a.startDate >= hoy)
      .sort((a, b) => a.startDate.localeCompare(b.startDate))[0] ?? null;
  }
  get actividadReciente(): { icon: string; tipo: string; descripcion: string; fecha: string; monto: number; estado: string; link: string }[] {
    const items: { icon: string; tipo: string; descripcion: string; fecha: string; monto: number; estado: string; link: string }[] = [];
    this.misExcursiones.forEach(b => items.push({
      icon: '🏝️', tipo: 'Excursión',
      descripcion: b.destination?.name ?? 'Excursión isla',
      fecha: b.createdAt ?? '', monto: Number(b.totalPrice ?? 0),
      estado: b.status, link: `/mis-reservas/${b.id}`,
    }));
    this.misCharters.forEach(a => items.push({
      icon: '⚓', tipo: 'Charter',
      descripcion: a.vessel?.name ?? 'Charter privado',
      fecha: a.createdAt ?? '', monto: Number(a.totalPrice ?? 0),
      estado: a.status, link: `/alquileres/${a.id}`,
    }));
    return items.sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 8);
  }


  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.tasaService.load();
    if (this.isCliente)   this.loadCliente();
    else if (this.isProveedor) this.loadProveedor();
    else this.loading = false;
    this.startSlider();
  }

  ngOnDestroy(): void { clearInterval(this.sliderInterval); }

  private startSlider(): void {
    this.sliderInterval = setInterval(() => {
      this.slideActual.update(i => (i + 1) % this.noticias.length);
    }, 5000);
  }

  irASlide(i: number): void { this.slideActual.set(i); clearInterval(this.sliderInterval); this.startSlider(); }
  prevSlide(): void { this.irASlide((this.slideActual() - 1 + this.noticias.length) % this.noticias.length); }
  nextSlide(): void { this.irASlide((this.slideActual() + 1) % this.noticias.length); }

  // ── Load Cliente ──────────────────────────────────────────────────────────
  private loadCliente(): void {
    const userId = this.user?.id;
    this.embService.getAll().subscribe({
      next: (emb) => {
        this.yatesYCatamaranes = emb
          .filter(e => (e.type === 'YATE' || e.type === 'CATAMARAN') && e.verificationStatus === 'APPROVED')
          .slice(0, 10);
      },
    });
    if (!userId) { this.loading = false; return; }
    this.islandService.getBookings({ clientId: userId }).subscribe({
      next: (b) => {
        this.misExcursiones = b.filter(x => x.status !== 'CANCELLED')
          .sort((x, y) => (y.createdAt ?? '').localeCompare(x.createdAt ?? '')).slice(0, 6);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
    this.alqService.getByClient(userId).subscribe({
      next: (a) => { this.misCharters = a.filter(x => x.status !== 'CANCELLED').slice(0, 3); },
    });
  }

  // ── Load Proveedor ────────────────────────────────────────────────────────
  private loadProveedor(): void {
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    forkJoin({
      vessels:  this.embService.getByProvider(pid),
      charters: this.alqService.getByProvider(pid),
      bookings: this.islandService.getBookings({ providerId: pid }),
      captains: this.captainsService.getAll(pid),
    }).subscribe({
      next: ({ vessels, charters, bookings, captains }) => {
        this.provVessels  = vessels;
        this.provCharters = charters;
        this.provBookings = bookings;
        this.provCaptains = captains;

        this.buildUpcomingEvents(charters, bookings);
        this.buildVesselActivity(vessels, charters, bookings);
        this.buildCaptainActivity(captains, charters);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private buildUpcomingEvents(charters: Alquiler[], bookings: IslandBooking[]): void {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const limit = new Date(today); limit.setDate(today.getDate() + 60);
    const events: UpcomingEvent[] = [];

    for (const c of charters) {
      if (c.status === 'CANCELLED') continue;
      const start = new Date(c.startDate + 'T00:00:00');
      const end   = new Date(c.endDate   + 'T00:00:00');
      if (start >= today && start <= limit) {
        events.push({
          type: 'charter-start', date: c.startDate, title: `⚓ Salida charter`,
          vessel: c.vessel?.name ?? '—', client: `${c.client?.firstName} ${c.client?.lastName}`,
          status: c.status, route: `/alquileres/${c.id}`,
          daysFrom: Math.ceil((start.getTime() - today.getTime()) / 86400000),
        });
      }
      if (end >= today && end <= limit) {
        events.push({
          type: 'charter-end', date: c.endDate, title: `🏁 Regreso charter`,
          vessel: c.vessel?.name ?? '—', client: `${c.client?.firstName} ${c.client?.lastName}`,
          status: c.status, route: `/alquileres/${c.id}`,
          daysFrom: Math.ceil((end.getTime() - today.getTime()) / 86400000),
        });
      }
    }

    for (const b of bookings) {
      if (b.status === 'CANCELLED') continue;
      const d = new Date(b.tripDate + 'T00:00:00');
      if (d >= today && d <= limit) {
        events.push({
          type: 'island', date: b.tripDate,
          time: b.outboundSlot?.departureTime?.slice(0, 5),
          title: `🚢 Excursión ${b.destination?.name ?? ''}`,
          vessel: b.vessel?.name ?? '—',
          client: `${b.client?.firstName} ${b.client?.lastName}`,
          status: b.status, route: `/reservas-isla/${b.id}`,
          daysFrom: Math.ceil((d.getTime() - today.getTime()) / 86400000),
        });
      }
    }

    this.upcomingEvents = events
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 10);
  }

  private buildVesselActivity(vessels: Embarcacion[], charters: Alquiler[], bookings: IslandBooking[]): void {
    const today = this.hoy();
    this.vesselActivity = vessels.map(v => {
      const vc = charters.filter(c => c.vessel?.id === v.id && c.status !== 'CANCELLED');
      const vi = bookings.filter(b => b.vessel?.id === v.id && b.status !== 'CANCELLED');
      const upcoming = [
        ...vc.filter(c => c.startDate >= today).map(c => c.startDate),
        ...vi.filter(b => b.tripDate >= today).map(b => b.tripDate),
      ].sort();
      return {
        vessel: v,
        charterCount: vc.length,
        islandCount: vi.length,
        totalTrips: vc.length + vi.length,
        nextDate: upcoming[0],
      };
    }).sort((a, b) => b.totalTrips - a.totalTrips);
  }

  private buildCaptainActivity(captains: Captain[], charters: Alquiler[]): void {
    this.captainActivity = captains
      .filter(c => c.verificationStatus === 'APROBADO')
      .map(cap => {
        const assigned  = charters.filter(c => c.captainProfile?.id === cap.id && c.status !== 'CANCELLED');
        const completed = assigned.filter(c => c.status === 'COMPLETED');
        return { captain: cap, assignedCharters: assigned.length, completedTrips: completed.length };
      })
      .sort((a, b) => b.assignedCharters - a.assignedCharters);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🚤'; }

  eventTypeColor(type: string): string {
    return type === 'charter-start' ? 'bg-brand-500' : type === 'charter-end' ? 'bg-green-500' : 'bg-orange-400';
  }

  daysLabel(n: number): string {
    if (n === 0) return 'Hoy';
    if (n === 1) return 'Mañana';
    return `En ${n} días`;
  }

  statusLabel(s: string): string {
    return ({ PENDING: 'Pendiente', CONFIRMED: 'Confirmado', ACTIVE: 'En curso', COMPLETED: 'Completado', CANCELLED: 'Cancelado' } as any)[s] ?? s;
  }

  statusClass(s: string): string {
    return ({
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      ACTIVE:    'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      COMPLETED: 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400',
    } as any)[s] ?? 'bg-gray-100 text-gray-500';
  }

  captainInitials(c: Captain): string {
    return `${c.firstName?.[0] ?? ''}${c.lastName?.[0] ?? ''}`.toUpperCase();
  }

  captainPhotoUrl(c: Captain): string {
    return c.photoUrl ? this.imageUrl(c.photoUrl) : '';
  }

  private hoy(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
}
