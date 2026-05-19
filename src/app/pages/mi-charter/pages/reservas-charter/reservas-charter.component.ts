import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { AlquileresService } from '../../../alquileres/services/alquileres.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Alquiler, RentalStatus, ChangeStatusAlquilerDto } from '../../../alquileres/models/alquiler.model';

@Component({
  selector: 'app-reservas-charter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reservas-charter.component.html',
})
export class ReservasCharterComponent implements OnInit {
  private readonly alqService = inject(AlquileresService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);
  private readonly route = inject(ActivatedRoute);

  loading = true;
  updatingId: number | null = null;
  reservas: Alquiler[] = [];
  filtradas: Alquiler[] = [];
  filtroStatus = '';
  filtroBusqueda = '';

  get providerProfileId(): number | null {
    const user = this.authService.user();
    return (user as any)?.providerProfile?.id ?? null;
  }

  ngOnInit(): void {
    this.tasaService.load();
    const pid = this.providerProfileId;
    if (!pid) { this.loading = false; return; }

    this.alqService.getByProvider(pid).subscribe({
      next: (r) => { this.reservas = r; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  applyFilter(): void {
    let r = [...this.reservas];
    if (this.filtroStatus) r = r.filter(x => x.status === this.filtroStatus);
    if (this.filtroBusqueda) {
      const q = this.filtroBusqueda.toLowerCase();
      r = r.filter(x =>
        `${x.client?.firstName} ${x.client?.lastName}`.toLowerCase().includes(q) ||
        x.client?.email?.toLowerCase().includes(q) ||
        x.vessel?.name?.toLowerCase().includes(q)
      );
    }
    this.filtradas = r;
  }

  changeStatus(r: Alquiler, status: RentalStatus): void {
    this.updatingId = r.id;
    const dto: ChangeStatusAlquilerDto = { status };
    if (status === 'CANCELLED') dto.cancellationReason = 'Cancelado por el proveedor';

    this.alqService.changeStatus(r.id, dto).subscribe({
      next: (updated) => {
        const idx = this.reservas.findIndex(x => x.id === r.id);
        if (idx !== -1) this.reservas[idx] = updated;
        this.applyFilter();
        this.updatingId = null;
      },
      error: () => { this.updatingId = null; },
    });
  }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmada', ACTIVE: 'En curso',
      COMPLETED: 'Completada', CANCELLED: 'Cancelada',
    };
    return map[s] ?? s;
  }

  statusClass(s: string): string {
    const map: Record<string, string> = {
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      ACTIVE:    'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      COMPLETED: 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400',
      CANCELLED: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[s] ?? 'bg-gray-100 text-gray-600';
  }

  countByStatus(s: RentalStatus): number {
    return this.reservas.filter(r => r.status === s).length;
  }

  totalIngresos(): number {
    return this.reservas
      .filter(r => r.status !== 'CANCELLED')
      .reduce((sum, r) => sum + Number(r.totalPrice ?? 0), 0);
  }
}
