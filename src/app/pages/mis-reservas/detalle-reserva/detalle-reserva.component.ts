import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { IslandTripsService } from '../../buscar/services/island-trips.service';
import { AuthService } from '../../auth-pages/services/auth.service';
import { TasaService } from '../../../shared/services/tasa.service';
import { ResenasService } from '../../resenas/services/resenas.service';
import { IslandBooking } from '../../buscar/models/island-trip.model';
import { ReservationChatComponent } from '../../../shared/components/reservation-chat/reservation-chat.component';
import { ReviewModalComponent } from '../../../shared/components/review-modal/review-modal.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-detalle-reserva',
  standalone: true,
  imports: [CommonModule, RouterModule, ReservationChatComponent, ReviewModalComponent],
  templateUrl: './detalle-reserva.component.html',
})
export class DetalleReservaComponent implements OnInit {
  private readonly route   = inject(ActivatedRoute);
  private readonly service = inject(IslandTripsService);
  private readonly auth    = inject(AuthService);
  private readonly resenas = inject(ResenasService);
  readonly tasaService     = inject(TasaService);

  booking: IslandBooking | null = null;
  loading = true;
  error = '';
  chatOpen = false;
  reviewOpen = false;
  alreadyReviewed = false;

  get currentUserId(): number { return this.auth.user()?.id ?? 0; }
  get chatTitle(): string {
    return this.booking?.destination?.name ?? `Excursión #${this.booking?.id}`;
  }

  ngOnInit(): void {
    this.tasaService.load();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getBookingById(id).subscribe({
      next: (b) => {
        this.booking = b;
        this.loading = false;
        if (b.status === 'COMPLETED') this.checkReview(b.id);
      },
      error: () => { this.error = 'No se pudo cargar la reserva.'; this.loading = false; },
    });
  }

  private checkReview(bookingId: number): void {
    const uid = this.auth.user()?.id;
    if (!uid) return;
    this.resenas.hasReviewed(uid, 'ISLAND_BOOKING', bookingId).subscribe({
      next: (exists) => { this.alreadyReviewed = exists; },
    });
  }

  onReviewSent(): void { this.alreadyReviewed = true; this.reviewOpen = false; }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  statusLabel(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'Confirmado', PENDING: 'Pendiente de pago',
      ACTIVE: 'En curso', COMPLETED: 'Completado', CANCELLED: 'Cancelado',
    };
    return m[s] ?? s;
  }

  statusClase(s: string): string {
    const m: Record<string,string> = {
      CONFIRMED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      ACTIVE:    'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400',
      COMPLETED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
    };
    return m[s] ?? 'bg-gray-100 text-gray-600';
  }
}
