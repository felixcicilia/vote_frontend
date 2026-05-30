import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlquileresService } from '../../../alquileres/services/alquileres.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { CaptainsService } from '../../../mis-capitanes/services/captains.service';
import { Captain, CaptainWithAvailability } from '../../../mis-capitanes/models/captain.model';
import { Alquiler, RentalStatus, ChangeStatusAlquilerDto } from '../../../alquileres/models/alquiler.model';
import { ReservationChatComponent } from '../../../../shared/components/reservation-chat/reservation-chat.component';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-reservas-charter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReservationChatComponent],
  templateUrl: './reservas-charter.component.html',
})
export class ReservasCharterComponent implements OnInit {
  private readonly alqService      = inject(AlquileresService);
  private readonly captainsService = inject(CaptainsService);
  private readonly http            = inject(HttpClient);
  private readonly router          = inject(Router);
  readonly authService             = inject(AuthService);
  readonly tasaService             = inject(TasaService);

  loading = true;
  updatingId: number | null = null;
  reservas: Alquiler[] = [];
  filtradas: Alquiler[] = [];
  filtroStatus = '';
  filtroBusqueda = '';
  filtroConcluir = '';

  // Captain assignment (from approved Captain profiles)
  captains: CaptainWithAvailability[] = [];
  loadingCaptains = false;
  assigningId: number | null = null;   // charter being assigned
  selectedCaptainId: number | null = null;

  // Chat
  chatOpenId: number | null = null;   // id of the rental whose chat is open
  unreadCounts: Record<number, number> = {};

  get providerProfileId(): number | null {
    const user = this.authService.user();
    return (user as any)?.providerProfile?.id ?? null;
  }

  ngOnInit(): void {
    this.tasaService.load();
    const pid = this.providerProfileId;
    if (!pid) { this.loading = false; return; }

    this.alqService.getByProvider(pid).subscribe({
      next: (r) => {
        this.reservas = r;
        this.applyFilter();
        this.loading = false;
        this.loadUnreadCounts(r.map(x => x.id));
      },
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
    if (this.filtroConcluir === 'ENDING_SOON') {
      r = r.filter(x => x.status === 'ACTIVE' && !this.hasEnded(x) && this.daysRemaining(x) <= 3);
    } else if (this.filtroConcluir === 'NOT_ENDING') {
      r = r.filter(x => x.status === 'ACTIVE' && !this.hasEnded(x) && this.daysRemaining(x) > 3);
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

  // ── Captain assignment ─────────────────────────────────────────────────
  openAssign(r: Alquiler, event: Event): void {
    event.stopPropagation();
    if (this.assigningId === r.id) { this.closeAssign(); return; }
    this.assigningId = r.id;
    this.selectedCaptainId = r.captainProfile?.id ?? null;
    this.captains = [];

    const pid = this.providerProfileId;
    if (!pid) return;
    this.loadingCaptains = true;
    this.captainsService.getApproved(pid, r.id).subscribe({
      next: (c) => { this.captains = c; this.loadingCaptains = false; },
      error: () => { this.loadingCaptains = false; },
    });
  }

  closeAssign(): void { this.assigningId = null; this.selectedCaptainId = null; this.captains = []; }

  get selectedCaptainAvailable(): boolean {
    if (!this.selectedCaptainId) return false;
    const cap = this.captains.find(c => c.id === this.selectedCaptainId);
    return cap ? cap.isAvailable : true; // unknown = allow
  }

  saveAssign(r: Alquiler): void {
    if (!this.selectedCaptainId || !this.selectedCaptainAvailable) return;
    this.updatingId = r.id;
    this.alqService.assignCaptainProfile(r.id, this.selectedCaptainId).subscribe({
      next: (updated) => {
        const idx = this.reservas.findIndex(x => x.id === r.id);
        if (idx !== -1) this.reservas[idx] = updated;
        this.applyFilter();
        this.updatingId = null;
        this.closeAssign();
      },
      error: () => { this.updatingId = null; },
    });
  }

  // ── Navigation ─────────────────────────────────────────────────────────
  verDetalle(r: Alquiler): void {
    this.router.navigate(['/alquileres', r.id]);
  }

  // ── Helpers ────────────────────────────────────────────────────────────
  statusLabel(s: string): string {
    const map: Record<string, string> = {
      PENDING: 'Pendiente', CONFIRMED: 'Confirmada', PAID: 'Pagada', ACTIVE: 'En curso',
      COMPLETED: 'Completada', CANCELLED: 'Cancelada',
    };
    return map[s] ?? s;
  }

  statusClass(s: string): string {
    const map: Record<string, string> = {
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      PAID:      'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
      ACTIVE:    'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      COMPLETED: 'bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400',
      CANCELLED: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
    };
    return map[s] ?? 'bg-gray-100 text-gray-600';
  }

  countByStatus(s: RentalStatus): number { return this.reservas.filter(r => r.status === s).length; }

  totalIngresos(): number {
    return this.reservas.filter(r => r.status !== 'CANCELLED').reduce((sum, r) => sum + Number(r.totalPrice ?? 0), 0);
  }

  hasStarted(r: Alquiler): boolean { return r.startDate <= new Date().toISOString().split('T')[0]; }
  hasEnded(r: Alquiler): boolean   { return r.endDate < new Date().toISOString().split('T')[0]; }
  daysRemaining(r: Alquiler): number {
    return Math.ceil((new Date(r.endDate + 'T00:00:00').getTime() - new Date().getTime()) / 86400000);
  }

  captainName(r: Alquiler): string {
    if (r.captainProfile) return `${r.captainProfile.firstName} ${r.captainProfile.lastName}`;
    if (r.captain) return `${r.captain.firstName} ${r.captain.lastName}`;
    return '';
  }

  // ── Chat ───────────────────────────────────────────────────────────────────
  openChat(r: Alquiler, event: Event): void {
    event.stopPropagation();
    this.chatOpenId = r.id;
  }

  closeChat(): void {
    this.chatOpenId = null;
  }

  chatTitle(r: Alquiler): string {
    return r.client ? `${r.client.firstName} ${r.client.lastName}` : `Charter #${r.id}`;
  }

  clientUserId(r: Alquiler): number {
    return r.client?.id ?? 0;
  }

  get currentUserProviderUserId(): number {
    return this.authService.user()?.id ?? 0;
  }

  private loadUnreadCounts(ids: number[]): void {
    if (!ids.length) return;
    const me = this.authService.user()?.id;
    if (!me) return;
    this.http.get<Record<number, number>>(
      `${environment.apiUrl}/chat/booking-unread?ids=${ids.join(',')}&type=CHARTER`,
    ).subscribe({ next: (counts) => { this.unreadCounts = counts; } });
  }

  onUnreadChange(bookingId: number, count: number): void {
    this.unreadCounts = { ...this.unreadCounts, [bookingId]: count };
  }
}
