import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedTripsService } from '../../services/shared-trips.service';
import { SharedTrip } from '../../models/shared-trip.model';

@Component({
  selector: 'app-detalle-viaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.scss'],
})
export class DetalleViajeComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sharedTripsService = inject(SharedTripsService);

  trip: SharedTrip | null = null;
  isLoading = true;
  errorMessage = '';

  ngOnInit() {
    this.loadTrip();
  }

  loadTrip() {
    const tripId = this.route.snapshot.paramMap.get('id');
    if (!tripId) {
      this.errorMessage = 'ID de viaje no encontrado';
      this.isLoading = false;
      return;
    }

    this.sharedTripsService.getById(parseInt(tripId)).subscribe({
      next: (data) => {
        this.trip = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error cargando viaje: ' + err.message;
        this.isLoading = false;
      },
    });
  }

  goToReservation() {
    if (this.trip) {
      this.router.navigate([
        '/lanchas-compartidas',
        this.trip.id,
        'reservar',
      ]);
    }
  }

  goBack() {
    this.router.navigate(['/lanchas-compartidas']);
  }

  get availableSeats(): number {
    if (!this.trip) return 0;
    const confirmed = this.trip.passengers.filter(
      (p) => p.status === 'CONFIRMED'
    ).length;
    return this.trip.maxPassengers - confirmed;
  }

  get canBook(): boolean {
    return (
      this.availableSeats > 0 &&
      this.trip?.status === 'SEARCHING_PASSENGERS'
    );
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  formatTime(date: string): string {
    return new Date(date).toLocaleTimeString('es-VE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-VE', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }
}
