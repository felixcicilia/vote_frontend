import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IslandBooking, IslandBookingStatus } from '../../buscar/models/island-trip.model';
import { IslandTripsService } from '../../buscar/services/island-trips.service';
import { AuthService } from '../../auth-pages/services/auth.service';
import { ReservationChatComponent } from '../../../shared/components/reservation-chat/reservation-chat.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-detalle-reserva-isla',
  standalone: true,
  imports: [CommonModule, RouterModule, ReservationChatComponent],
  templateUrl: './detalle-reserva-isla.component.html',
})
export class DetalleReservaIslaComponent implements OnInit {
  private readonly service = inject(IslandTripsService);
  private readonly route   = inject(ActivatedRoute);
  readonly auth            = inject(AuthService);

  loading = false;
  errorMessage = '';
  booking: IslandBooking | null = null;
  chatOpen = false;

  get isMaster(): boolean { const r = this.auth.role(); return r === 'MASTER' || r === 'ADMINISTRADOR'; }
  get isProveedor(): boolean { return this.auth.role() === 'PROVEEDOR'; }
  get backRoute(): string { return '/reservas-isla'; }

  get chatClientId(): number  { return this.booking?.client?.id ?? 0; }
  get chatProviderId(): number { return this.auth.user()?.id ?? 0; }
  get chatTitle(): string {
    const c = this.booking?.client;
    return c ? `${c.firstName} ${c.lastName}` : `Excursión #${this.booking?.id}`;
  }

  readonly steps: { key: IslandBookingStatus; label: string; icon: string }[] = [
    { key: 'PENDING',   label: 'Pendiente',  icon: '🕐' },
    { key: 'CONFIRMED', label: 'Confirmado', icon: '✅' },
    { key: 'ACTIVE',    label: 'En curso',   icon: '🚢' },
    { key: 'COMPLETED', label: 'Completado', icon: '🏁' },
  ];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getBookingById(id).subscribe({
      next: (b) => { this.booking = b; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar la reserva.'; this.loading = false; },
    });
  }

  stepIndex(status: IslandBookingStatus): number {
    const order: IslandBookingStatus[] = ['PENDING', 'CONFIRMED', 'ACTIVE', 'COMPLETED'];
    return order.indexOf(status);
  }

  statusLabel(s: string): string {
    return ({ PENDING: 'Pendiente', CONFIRMED: 'Confirmado', ACTIVE: 'Activo', COMPLETED: 'Completado', CANCELLED: 'Cancelado' } as any)[s] ?? s;
  }

  statusClass(s: string): string {
    return ({
      PENDING:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    } as any)[s] ?? '';
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    return url.startsWith('http') ? url : `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  formatDate(d?: string | Date | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  }

  formatDateTime(d?: string | Date | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('es-VE', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  formatTime(t?: string | null): string {
    if (!t) return '—';
    // t can be "HH:MM:SS" or "HH:MM"
    return t.substring(0, 5);
  }

  durationLabel(minutes?: number | null): string {
    if (!minutes) return '—';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h === 0) return `${m} min`;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  }
}
