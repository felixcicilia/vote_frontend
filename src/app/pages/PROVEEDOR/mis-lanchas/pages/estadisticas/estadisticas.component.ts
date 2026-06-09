import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';

import { AuthService } from '../../../auth-pages/services/auth.service';
import { AlquileresService } from '../../../alquileres/services/alquileres.service';
import { IslandTripsService } from '../../../buscar/services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Alquiler } from '../../../alquileres/models/alquiler.model';
import { IslandBooking } from '../../../buscar/models/island-trip.model';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { environment } from '../../../../../environments/environment';

type Period = '3m' | '6m' | '12m';

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
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {
  private readonly auth         = inject(AuthService);
  private readonly alqService   = inject(AlquileresService);
  private readonly tripsService = inject(IslandTripsService);
  private readonly embService   = inject(EmbarcacionesService);
  readonly tasaService          = inject(TasaService);

  loading = true;
  period: Period = '6m';

  private allCharters: Alquiler[]      = [];
  private allBookings: IslandBooking[] = [];

  // ── Mi negocio data ──────────────────────────────────────────────────────────
  vessels: Embarcacion[]  = [];
  vesselStats: VesselStats[] = [];
  recentCharter: Alquiler[]     = [];
  recentIsland: IslandBooking[] = [];

  // ── KPIs (period-filtered) ───────────────────────────────────────────────────
  totalRevenue     = 0;
  charterRevenue   = 0;
  islandRevenue    = 0;
  totalBookings    = 0;
  cancelledCount   = 0;
  completedCount   = 0;
  avgPerBooking    = 0;
  cancellationRate = 0;

  // ── Charts ───────────────────────────────────────────────────────────────────
  revenueSeries:     ApexAxisChartSeries    = [];
  revenueChart:      ApexChart              = { type: 'bar', height: 260, fontFamily: 'Outfit, sans-serif', toolbar: { show: false } };
  revenueXAxis:      ApexXAxis             = { categories: [], axisBorder: { show: false }, axisTicks: { show: false } };
  revenueYAxis:      ApexYAxis             = { title: { text: undefined }, labels: { formatter: (v) => `$${v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v}` } };
  revenuePlot:       ApexPlotOptions       = { bar: { horizontal: false, columnWidth: '45%', borderRadius: 5, borderRadiusApplication: 'end' } };
  revenueDataLabels: ApexDataLabels        = { enabled: false };
  revenueStroke:     ApexStroke            = { show: true, width: 4, colors: ['transparent'] };
  revenueGrid:       ApexGrid              = { yaxis: { lines: { show: true } } };
  revenueFill:       ApexFill              = { opacity: 1 };
  revenueTooltip:    ApexTooltip           = { y: { formatter: (v) => `$${v.toLocaleString('es-VE', { minimumFractionDigits: 0 })}` } };
  revenueLegend:     ApexLegend            = { show: true, position: 'top', horizontalAlign: 'left', fontFamily: 'Outfit' };
  revenueColors:     string[]              = ['#7c3aed', '#3b82f6'];

  donutSeries:    ApexNonAxisChartSeries = [0, 0];
  donutChart:     ApexChart              = { type: 'donut', height: 240, fontFamily: 'Outfit, sans-serif' };
  donutLabels:    string[]               = ['Charters', 'Excursiones'];
  donutColors:    string[]               = ['#7c3aed', '#3b82f6'];
  donutResponsive: ApexResponsive[]      = [{ breakpoint: 480, options: { chart: { height: 200 } } }];

  statusSeries:    ApexNonAxisChartSeries = [];
  statusChart:     ApexChart              = { type: 'donut', height: 220, fontFamily: 'Outfit, sans-serif' };
  statusLabels:    string[]               = ['Completadas', 'Confirmadas', 'Pendientes', 'Canceladas'];
  statusColors:    string[]               = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'];
  statusResponsive: ApexResponsive[]      = [{ breakpoint: 480, options: { chart: { height: 180 } } }];

  get providerId(): number | null {
    return (this.auth.user() as any)?.providerProfile?.id ?? null;
  }

  get activeVessels(): number {
    return this.vessels.filter(v => v.verificationStatus === 'APPROVED' && v.isAvailable).length;
  }

  ngOnInit(): void {
    this.tasaService.load();
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    forkJoin({
      vessels:  this.embService.getByProvider(pid),
      charters: this.alqService.getByProvider(pid),
      bookings: this.tripsService.getBookings({ providerId: pid }),
    }).subscribe({
      next: ({ vessels, charters, bookings }) => {
        this.vessels     = vessels;
        this.allCharters = charters;
        this.allBookings = bookings;

        // Recent activity (all-time, not period-filtered)
        this.recentCharter = [...charters]
          .filter(a => a.status !== 'CANCELLED')
          .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
          .slice(0, 5);
        this.recentIsland = [...bookings]
          .filter(b => b.status !== 'CANCELLED')
          .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
          .slice(0, 5);

        // Vessel stats (all-time)
        this.vesselStats = vessels.map(v => {
          const vc = charters.filter(a => a.vessel?.id === v.id && a.status !== 'CANCELLED');
          const vi = bookings.filter(b => b.vessel?.id === v.id && b.status !== 'CANCELLED');
          const cr = vc.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
          const ir = vi.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
          return { vessel: v, charterRevenue: cr, charterCount: vc.length, islandRevenue: ir, islandCount: vi.length, totalRevenue: cr + ir, totalBookings: vc.length + vi.length };
        }).sort((a, b) => b.totalRevenue - a.totalRevenue);

        this.compute();
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  setPeriod(p: Period): void { this.period = p; this.compute(); }

  private compute(): void {
    const cutoff   = this.cutoffDate();
    const charters = this.allCharters.filter(a => new Date(a.createdAt ?? 0) >= cutoff);
    const bookings = this.allBookings.filter(b => new Date(b.createdAt ?? 0) >= cutoff);

    const activeC = charters.filter(a => a.status !== 'CANCELLED');
    const activeB = bookings.filter(b => b.status !== 'CANCELLED');

    this.charterRevenue   = activeC.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
    this.islandRevenue    = activeB.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
    this.totalRevenue     = this.charterRevenue + this.islandRevenue;
    this.totalBookings    = activeC.length + activeB.length;
    this.avgPerBooking    = this.totalBookings > 0 ? this.totalRevenue / this.totalBookings : 0;
    this.cancelledCount   = charters.filter(a => a.status === 'CANCELLED').length + bookings.filter(b => b.status === 'CANCELLED').length;
    const total           = charters.length + bookings.length;
    this.cancellationRate = total > 0 ? Math.round((this.cancelledCount / total) * 100) : 0;
    this.completedCount   = charters.filter(a => a.status === 'COMPLETED').length + bookings.filter(b => b.status === 'COMPLETED').length;

    const buckets = this.buildMonthBuckets();
    for (const a of activeC) { const b = buckets.find(x => x.key === this.monthKey(new Date(a.createdAt ?? 0))); if (b) b.charter += Number(a.totalPrice ?? 0); }
    for (const bk of activeB) { const b = buckets.find(x => x.key === this.monthKey(new Date(bk.createdAt ?? 0))); if (b) b.island  += Number(bk.totalPrice ?? 0); }

    this.revenueSeries = [
      { name: 'Charter',     data: buckets.map(b => Math.round(b.charter)) },
      { name: 'Excursiones', data: buckets.map(b => Math.round(b.island))  },
    ];
    this.revenueXAxis  = { ...this.revenueXAxis, categories: buckets.map(b => b.label) };
    this.donutSeries   = [activeC.length, activeB.length];

    const all = [...charters, ...bookings];
    this.statusSeries = [
      all.filter(x => x.status === 'COMPLETED').length,
      all.filter(x => x.status === 'CONFIRMED').length,
      all.filter(x => x.status === 'PENDING').length,
      all.filter(x => x.status === 'CANCELLED').length,
    ];
  }

  private cutoffDate(): Date {
    const d = new Date();
    d.setMonth(d.getMonth() - (this.period === '3m' ? 3 : this.period === '6m' ? 6 : 12));
    d.setDate(1); d.setHours(0, 0, 0, 0);
    return d;
  }

  private monthKey(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  private buildMonthBuckets(): Array<{ key: string; label: string; charter: number; island: number }> {
    const months = this.period === '3m' ? 3 : this.period === '6m' ? 6 : 12;
    const MONTHS_ES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const now = new Date();
    return Array.from({ length: months }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (months - 1 - i), 1);
      return { key: this.monthKey(d), label: `${MONTHS_ES[d.getMonth()]} ${String(d.getFullYear()).slice(-2)}`, charter: 0, island: 0 };
    });
  }

  // ── Vessel helpers (from mi-negocio) ──────────────────────────────────────
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
    const m: Record<string, string> = { PENDING: 'Pendiente', CONFIRMED: 'Confirmada', PAID: 'Pagada', ACTIVE: 'Activa', COMPLETED: 'Completada', CANCELLED: 'Cancelada' };
    return m[s] ?? s;
  }
}
