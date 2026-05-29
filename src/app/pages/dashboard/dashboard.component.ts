import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardService, DashboardStats } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private readonly service = inject(DashboardService);

  loading   = false;
  errorMsg  = '';
  stats: DashboardStats | null = null;

  today = this.toDateStr(new Date());
  filters = { startDate: this.today, endDate: this.today };

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.errorMsg = '';
    this.service.getStats(this.filters.startDate, this.filters.endDate).subscribe({
      next:  (s) => { this.stats = s; this.loading = false; },
      error: ()  => { this.errorMsg = 'No se pudo cargar el dashboard.'; this.loading = false; },
    });
  }

  statusLabel(s: string): string {
    const m: Record<string, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmado', ACTIVE: 'En curso',
      COMPLETED: 'Completado', CANCELLED: 'Cancelado',
      VERIFIED: 'Verificado', REJECTED: 'Rechazado',
    };
    return m[s] ?? s;
  }

  statusClass(s: string): string {
    const m: Record<string, string> = {
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
      VERIFIED:  'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      REJECTED:  'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    };
    return m[s] ?? 'bg-gray-100 text-gray-600';
  }

  methodLabel(m: string): string {
    const map: Record<string, string> = {
      ZELLE: 'Zelle', BINANCE: 'Binance', PAGO_MOVIL: 'Pago Móvil',
      CARD: 'Tarjeta', CASH: 'Efectivo', WALLET: 'Saldo', TRANSFERENCIA: 'Transferencia',
    };
    return map[m] ?? m;
  }

  refTypeLabel(t: string): string {
    const map: Record<string, string> = {
      ISLAND_BOOKING: '🏝️ Excursión', WALLET_TOPUP: '⚓ Recarga', RENTAL: '⛵ Charter',
    };
    return map[t] ?? t;
  }

  private toDateStr(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }
}
