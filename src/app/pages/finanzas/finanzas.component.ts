import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { PagosService } from '../pagos/services/pagos.service';
import { IslandTripsService } from '../buscar/services/island-trips.service';
import { Pago, PaymentStatus, PaymentMethod, PaymentReferenceType } from '../pagos/models/pago.model';
import { IslandBooking } from '../buscar/models/island-trip.model';

type Tab = 'resumen' | 'pagos' | 'reservas';
type DateRange = 'hoy' | 'semana' | 'mes' | 'todo';

const METHOD_LABELS: Record<PaymentMethod, string> = {
  PAGO_MOVIL:    '📱 Pago Móvil',
  TRANSFERENCIA: '🏦 Transferencia Bs',
  ZELLE:         '💜 Zelle',
  BINANCE:       '🟡 Binance',
  CARD:          '💳 Tarjeta',
  CASH:          '💵 Efectivo',
};

const TYPE_LABELS: Record<PaymentReferenceType, string> = {
  TAXI_TRIP:    '🚤 Taxi acuático',
  TICKET:       '🎫 Ticket ferry',
  RENTAL:       '⛵ Alquiler charter',
  WALLET_TOPUP: '⚓ Recarga de nudos',
};

const STATUS_LABELS: Record<PaymentStatus, string> = {
  VERIFIED: '✓ Verificado',
  PENDING: '⏳ Pendiente',
  REJECTED: '✗ Rechazado',
};

@Component({
  selector: 'app-finanzas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './finanzas.component.html',
})
export class FinanzasComponent implements OnInit {
  private readonly pagosService = inject(PagosService);
  private readonly islandService = inject(IslandTripsService);

  // ── State ────────────────────────────────────────────────────────────────────
  loading = true;
  activeTab: Tab = 'resumen';

  allPagos: Pago[] = [];
  allBookings: IslandBooking[] = [];

  // ── Filters: Pagos ───────────────────────────────────────────────────────────
  pagoSearch = '';
  pagoStatus: PaymentStatus | '' = '';
  pagoMethod: PaymentMethod | '' = '';
  pagoType: PaymentReferenceType | '' = '';
  pagoDateRange: DateRange = 'todo';
  pagoPage = 1;
  readonly pagoLimit = 15;

  // ── Filters: Reservas ────────────────────────────────────────────────────────
  bookingSearch = '';
  bookingStatus = '';
  bookingDateRange: DateRange = 'todo';
  bookingPage = 1;
  readonly bookingLimit = 15;

  // ── Labels (exported for template) ──────────────────────────────────────────
  readonly methodLabels = METHOD_LABELS;
  readonly typeLabels = TYPE_LABELS;
  readonly statusLabels = STATUS_LABELS;

  readonly paymentMethods = Object.keys(METHOD_LABELS) as PaymentMethod[];
  readonly referenceTypes = Object.keys(TYPE_LABELS) as PaymentReferenceType[];

  // ── Init ─────────────────────────────────────────────────────────────────────
  ngOnInit(): void {
    forkJoin({
      pagos: this.pagosService.getAll(),
      bookings: this.islandService.getBookings({}),
    }).subscribe({
      next: ({ pagos, bookings }) => {
        this.allPagos = pagos;
        this.allBookings = bookings;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  // ── Date helpers ─────────────────────────────────────────────────────────────
  private startOfRange(range: DateRange): Date | null {
    const now = new Date();
    if (range === 'hoy') return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (range === 'semana') { const d = new Date(now); d.setDate(d.getDate() - 7); return d; }
    if (range === 'mes') { const d = new Date(now); d.setDate(d.getDate() - 30); return d; }
    return null;
  }

  private inRange(dateStr: string | undefined, range: DateRange): boolean {
    const from = this.startOfRange(range);
    if (!from || !dateStr) return true;
    return new Date(dateStr) >= from;
  }

  // ── Filtered pagos ───────────────────────────────────────────────────────────
  get filteredPagos(): Pago[] {
    const term = this.pagoSearch.trim().toLowerCase();
    return this.allPagos.filter(p => {
      if (this.pagoStatus && p.status !== this.pagoStatus) return false;
      if (this.pagoMethod && p.method !== this.pagoMethod) return false;
      if (this.pagoType && p.referenceType !== this.pagoType) return false;
      if (!this.inRange(p.createdAt, this.pagoDateRange)) return false;
      if (term) {
        const fullName = `${p.client.firstName} ${p.client.lastName}`.toLowerCase();
        const ref = (p.transactionRef ?? '').toLowerCase();
        if (!fullName.includes(term) && !ref.includes(term)) return false;
      }
      return true;
    });
  }

  get pagosTotalPages(): number { return Math.max(1, Math.ceil(this.filteredPagos.length / this.pagoLimit)); }
  get pagosPaginados(): Pago[] {
    const s = (this.pagoPage - 1) * this.pagoLimit;
    return this.filteredPagos.slice(s, s + this.pagoLimit);
  }
  get pagosRangoInicio(): number { return this.filteredPagos.length === 0 ? 0 : (this.pagoPage - 1) * this.pagoLimit + 1; }
  get pagosRangoFin(): number { return Math.min(this.pagoPage * this.pagoLimit, this.filteredPagos.length); }

  onPagoFilterChange(): void { this.pagoPage = 1; }
  limpiarPagos(): void {
    this.pagoSearch = ''; this.pagoStatus = ''; this.pagoMethod = '';
    this.pagoType = ''; this.pagoDateRange = 'todo'; this.pagoPage = 1;
  }
  get hayFiltrosPagos(): boolean {
    return !!(this.pagoSearch || this.pagoStatus || this.pagoMethod || this.pagoType || this.pagoDateRange !== 'todo');
  }

  // ── Filtered bookings ────────────────────────────────────────────────────────
  get filteredBookings(): IslandBooking[] {
    const term = this.bookingSearch.trim().toLowerCase();
    return this.allBookings.filter(b => {
      if (this.bookingStatus && b.status !== this.bookingStatus) return false;
      if (!this.inRange(b.tripDate, this.bookingDateRange)) return false;
      if (term) {
        const name = `${b.client.firstName} ${b.client.lastName}`.toLowerCase();
        if (!name.includes(term) && !(b.vessel?.name ?? '').toLowerCase().includes(term)) return false;
      }
      return true;
    });
  }

  get bookingsTotalPages(): number { return Math.max(1, Math.ceil(this.filteredBookings.length / this.bookingLimit)); }
  get bookingsPaginadas(): IslandBooking[] {
    const s = (this.bookingPage - 1) * this.bookingLimit;
    return this.filteredBookings.slice(s, s + this.bookingLimit);
  }
  get bookingsRangoInicio(): number { return this.filteredBookings.length === 0 ? 0 : (this.bookingPage - 1) * this.bookingLimit + 1; }
  get bookingsRangoFin(): number { return Math.min(this.bookingPage * this.bookingLimit, this.filteredBookings.length); }

  onBookingFilterChange(): void { this.bookingPage = 1; }
  limpiarBookings(): void { this.bookingSearch = ''; this.bookingStatus = ''; this.bookingDateRange = 'todo'; this.bookingPage = 1; }
  get hayFiltrosBookings(): boolean {
    return !!(this.bookingSearch || this.bookingStatus || this.bookingDateRange !== 'todo');
  }

  // ── KPIs (siempre sobre todos, sin filtros) ──────────────────────────────────
  get verificados(): Pago[] { return this.allPagos.filter(p => p.status === 'VERIFIED'); }
  get pendientes(): Pago[]  { return this.allPagos.filter(p => p.status === 'PENDING'); }
  get rechazados(): Pago[]  { return this.allPagos.filter(p => p.status === 'REJECTED'); }

  private normCurrency(c: string): string {
    return c === 'BS' ? 'VES' : c;
  }

  private totalsByCurrency(pagos: Pago[]): { currency: string; total: number }[] {
    const map: Record<string, number> = {};
    for (const p of pagos) {
      const c = this.normCurrency(p.currency);
      map[c] = (map[c] ?? 0) + Number(p.amount);
    }
    return Object.entries(map)
      .map(([currency, total]) => ({ currency, total }))
      .sort((a, b) => a.currency.localeCompare(b.currency));
  }

  get verificadosPorMoneda(): { currency: string; total: number }[] { return this.totalsByCurrency(this.verificados); }
  get pendientesPorMoneda(): { currency: string; total: number }[]  { return this.totalsByCurrency(this.pendientes); }

  get totalIslandRevenue(): number {
    return this.allBookings
      .filter(b => ['COMPLETED', 'CONFIRMED', 'ACTIVE'].includes(b.status))
      .reduce((s, b) => s + Number(b.totalPrice), 0);
  }

  get bookingsPendientesCount(): number   { return this.allBookings.filter(b => b.status === 'PENDING').length; }
  get bookingsActivosCount(): number      { return this.allBookings.filter(b => ['CONFIRMED','ACTIVE'].includes(b.status)).length; }
  get bookingsCompletadosCount(): number  { return this.allBookings.filter(b => b.status === 'COMPLETED').length; }
  get bookingsCanceladosCount(): number   { return this.allBookings.filter(b => b.status === 'CANCELLED').length; }

  // ── Breakdowns por método ────────────────────────────────────────────────────
  get pagosPorMetodo(): { key: PaymentMethod; label: string; count: number; monedas: { currency: string; total: number }[] }[] {
    const map: Partial<Record<PaymentMethod, { count: number; monedas: Record<string, number> }>> = {};
    for (const p of this.allPagos) {
      const c = this.normCurrency(p.currency);
      if (!map[p.method]) map[p.method] = { count: 0, monedas: {} };
      map[p.method]!.count++;
      map[p.method]!.monedas[c] = (map[p.method]!.monedas[c] ?? 0) + Number(p.amount);
    }
    return (Object.entries(map) as [PaymentMethod, { count: number; monedas: Record<string, number> }][])
      .map(([key, v]) => ({
        key,
        label: METHOD_LABELS[key] ?? key,
        count: v.count,
        monedas: Object.entries(v.monedas)
          .map(([currency, total]) => ({ currency, total }))
          .sort((a, b) => a.currency.localeCompare(b.currency)),
      }))
      .sort((a, b) => b.count - a.count);
  }

  get pagosPorTipo(): { key: string; label: string; count: number; total: number }[] {
    const map: Record<string, { count: number; total: number }> = {};
    for (const p of this.verificados) {
      if (!map[p.referenceType]) map[p.referenceType] = { count: 0, total: 0 };
      map[p.referenceType].count++;
      map[p.referenceType].total += Number(p.amount);
    }
    return Object.entries(map).map(([key, v]) => ({
      key, label: TYPE_LABELS[key as PaymentReferenceType] ?? key, ...v,
    })).sort((a, b) => b.total - a.total);
  }

  // ── Helpers de UI ────────────────────────────────────────────────────────────
  statusColor(status: string): string {
    const map: Record<string, string> = {
      VERIFIED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      PENDING:  'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      REJECTED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    };
    return map[status] ?? 'bg-gray-100 text-gray-600';
  }

  bookingStatusColor(status: string): string {
    const map: Record<string, string> = {
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    };
    return map[status] ?? 'bg-gray-100 text-gray-600';
  }

  fmtCurrency(n: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);
  }

  fmtAmount(amount: number, currency: string): string {
    const c = this.normCurrency(currency);
    if (c === 'VES') return `Bs. ${amount.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (c === 'USDT') return `${amount.toFixed(2)} USDT`;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(amount);
  }

  currencyLabel(c: string): string {
    const norm = this.normCurrency(c);
    return norm === 'VES' ? 'Bolívares (Bs.)' : norm === 'USDT' ? 'USDT' : 'Dólares (USD)';
  }

  fmtDate(d?: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  cambiarPaginaPagos(p: number): void {
    if (p < 1 || p > this.pagosTotalPages) return;
    this.pagoPage = p;
  }

  cambiarPaginaBookings(p: number): void {
    if (p < 1 || p > this.bookingsTotalPages) return;
    this.bookingPage = p;
  }

  setTab(t: Tab): void { this.activeTab = t; }
}
