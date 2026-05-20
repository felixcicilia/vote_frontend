import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { AuthService } from '../auth-pages/services/auth.service';
import { EmbarcacionesService } from '../embarcaciones/services/embarcaciones.service';
import { AlquileresService } from '../alquileres/services/alquileres.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { TasaService } from '../../shared/services/tasa.service';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { Alquiler } from '../alquileres/models/alquiler.model';
import { IslandBooking } from '../buscar/models/island-trip.model';
import { environment } from '../../../environments/environment';

interface VesselStats {
  vessel: Embarcacion;
  charterRevenue: number;
  charterCount: number;
  islandRevenue: number;
  islandCount: number;
  totalRevenue: number;
  totalBookings: number;
}

@Component({
  selector: 'app-mi-negocio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mi-negocio.component.html',
})
export class MiNegocioComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly embService    = inject(EmbarcacionesService);
  private readonly alqService    = inject(AlquileresService);
  private readonly tripsService  = inject(IslandTripsService);
  readonly tasaService = inject(TasaService);

  loading = true;
  vessels: Embarcacion[] = [];
  vesselStats: VesselStats[] = [];
  recentCharter: Alquiler[] = [];
  recentIsland: IslandBooking[] = [];

  get user() { return this.auth.user(); }

  get providerId(): number | null {
    return (this.auth.user() as any)?.providerProfile?.id ?? null;
  }

  get totalRevenue(): number {
    return this.vesselStats.reduce((s, v) => s + v.totalRevenue, 0);
  }

  get totalBookings(): number {
    return this.vesselStats.reduce((s, v) => s + v.totalBookings, 0);
  }

  get totalCharterRevenue(): number {
    return this.vesselStats.reduce((s, v) => s + v.charterRevenue, 0);
  }

  get totalIslandRevenue(): number {
    return this.vesselStats.reduce((s, v) => s + v.islandRevenue, 0);
  }

  get activeVessels(): number {
    return this.vessels.filter(v => v.verificationStatus === 'APPROVED' && v.isAvailable).length;
  }

  ngOnInit(): void {
    this.tasaService.load();
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    forkJoin({
      vessels: this.embService.getByProvider(pid),
      charter: this.alqService.getByProvider(pid),
      island:  this.tripsService.getBookings({ providerId: pid }),
    }).subscribe({
      next: ({ vessels, charter, island }) => {
        this.vessels = vessels;
        this.recentCharter = charter
          .filter(a => a.status !== 'CANCELLED')
          .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
          .slice(0, 5);
        this.recentIsland = island
          .filter(b => b.status !== 'CANCELLED')
          .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
          .slice(0, 5);

        this.vesselStats = vessels.map(v => {
          const vc = charter.filter(a => a.vessel?.id === v.id && a.status !== 'CANCELLED');
          const vi = island.filter(b => b.vessel?.id === v.id && b.status !== 'CANCELLED');
          const cr = vc.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
          const ir = vi.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
          return {
            vessel: v,
            charterRevenue: cr,
            charterCount: vc.length,
            islandRevenue: ir,
            islandCount: vi.length,
            totalRevenue: cr + ir,
            totalBookings: vc.length + vi.length,
          };
        }).sort((a, b) => b.totalRevenue - a.totalRevenue);

        this.loading = false;
      },
      error: () => { this.loading = false },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🚤'; }

  verificationLabel(s: string): string {
    return s === 'APPROVED' ? 'Verificada' : s === 'PENDING' ? 'En revisión' : 'Rechazada';
  }

  verificationClass(s: string): string {
    return s === 'APPROVED'
      ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
      : s === 'PENDING'
        ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
        : 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400';
  }

  islandStatusLabel(s: string): string {
    const m: Record<string, string> = { PENDING: 'Pendiente', CONFIRMED: 'Confirmada', ACTIVE: 'Activa', COMPLETED: 'Completada', CANCELLED: 'Cancelada' };
    return m[s] ?? s;
  }
}
