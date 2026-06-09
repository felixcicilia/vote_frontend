import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pago, PaymentStatus, PaymentMethod } from '../../models/pago.model';
import { PagosService } from '../../services/pagos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';

const METHOD_LABELS: Record<PaymentMethod, string> = {
  PAGO_MOVIL:    '📱 Pago Móvil',
  TRANSFERENCIA: '🏦 Transferencia Bs',
  ZELLE:         '💜 Zelle',
  BINANCE:       '🟡 Binance',
  CARD:          '💳 Tarjeta',
  CASH:          '💵 Efectivo',
};

const TYPE_LABELS: Record<string, string> = {
  TAXI_TRIP:    '🚤 Taxi acuático',
  TICKET:       '🎫 Ticket ferry',
  RENTAL:       '⛵ Alquiler charter',
  WALLET_TOPUP: '⚓ Recarga de nudos',
};

@Component({
  selector: 'app-lista-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-pagos.component.html',
})
export class ListaPagosComponent implements OnInit {
  private readonly service = inject(PagosService);
  private readonly auth = inject(AuthService);

  get isMaster(): boolean { return this.auth.role() === 'MASTER'; }

  loading = false;
  errorMessage = '';

  pagos: Pago[] = [];
  filtrados: Pago[] = [];
  paginados: Pago[] = [];

  search = '';
  filtroEstado: PaymentStatus | '' = '';
  filtroMetodo: PaymentMethod | '' = '';

  page = 1;
  readonly limit = 12;
  total = 0;
  totalPages = 0;

  verifyingId: number | null = null;
  successMessage = '';

  readonly methodLabels = METHOD_LABELS;
  readonly typeLabels = TYPE_LABELS;
  readonly paymentMethods = Object.keys(METHOD_LABELS) as PaymentMethod[];

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => { this.pagos = data ?? []; this.aplicarFiltros(); this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar los pagos.'; this.loading = false; },
    });
  }

  aplicarFiltros(): void {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.pagos.filter(p => {
      const busqueda = !t ||
        (p.transactionRef ?? '').toLowerCase().includes(t) ||
        p.client.firstName.toLowerCase().includes(t) ||
        p.client.lastName.toLowerCase().includes(t) ||
        p.client.email.toLowerCase().includes(t);
      const estado = !this.filtroEstado || p.status === this.filtroEstado;
      const metodo = !this.filtroMetodo || p.method === this.filtroMetodo;
      return busqueda && estado && metodo;
    });
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  onFilterChange(): void { this.page = 1; this.aplicarFiltros(); }
  cambiarPagina(p: number): void { if (p >= 1 && p <= this.totalPages) { this.page = p; this.aplicarFiltros(); } }

  limpiar(): void { this.search = ''; this.filtroEstado = ''; this.filtroMetodo = ''; this.page = 1; this.aplicarFiltros(); }
  get hayFiltros(): boolean { return !!(this.search || this.filtroEstado || this.filtroMetodo); }

  verificarPago(p: Pago): void {
    const userId = this.auth.user()?.id;
    if (!userId) return;
    this.verifyingId = p.id;
    this.successMessage = '';
    this.service.verify(p.id, { verifiedById: userId }).subscribe({
      next: (updated) => {
        this.pagos = this.pagos.map(x => x.id === updated.id ? updated : x);
        this.aplicarFiltros();
        this.verifyingId = null;
        this.successMessage = `Pago #${updated.id} verificado correctamente.`;
        setTimeout(() => this.successMessage = '', 4000);
      },
      error: () => { this.verifyingId = null; alert('Error al verificar el pago.'); },
    });
  }

  statusClase(s: PaymentStatus): string {
    return s === 'VERIFIED' ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
      : s === 'REJECTED' ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400'
      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400';
  }

  statusLabel(s: PaymentStatus): string {
    return s === 'VERIFIED' ? '✓ Verificado' : s === 'REJECTED' ? '✗ Rechazado' : '⏳ Pendiente';
  }

  fmtAmount(p: Pago): string {
    const n = Number(p.amount);
    if (p.currency === 'VES' || p.currency === 'BS') {
      return `Bs. ${n.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (p.currency === 'USDT') return `${n.toFixed(2)} USDT`;
    return `$${n.toFixed(2)}`;
  }

  fmtDate(d?: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  get pendientesCount(): number { return this.pagos.filter(p => p.status === 'PENDING').length; }

  get rangoInicio(): number { return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1; }
  get rangoFin(): number { return Math.min(this.page * this.limit, this.total); }
  trackById(_: number, p: Pago): number { return p.id; }
}
