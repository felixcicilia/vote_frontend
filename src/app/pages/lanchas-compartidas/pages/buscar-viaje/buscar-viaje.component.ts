import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedTripsService } from '../../services/shared-trips.service';
import { DeparturePointsService } from '../../../muelles/services/muelles.service';
import {
  SharedTrip,
  DeparturePoint,
  SearchSharedTripsDto,
} from '../../models/shared-trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-viaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.scss'],
})
export class BuscarViajeComponent implements OnInit {
  private readonly sharedTripsService = inject(SharedTripsService);
  private readonly departurePointsService = inject(DeparturePointsService);
  private readonly router = inject(Router);

  // Filtros
  originId: number | null = null;
  destinationId: number | null = null;
  selectedDate: string = this.getMinDate();
  selectedTime: string = '';
  passengers: number = 1;

  // Data
  ports: DeparturePoint[] = [];
  trips: SharedTrip[] = [];

  // Estados
  showResults = false;
  isLoading = false;
  isSearching = false;
  errorMessage = '';

  ngOnInit() {
    this.loadPorts();
  }

  getMinDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  loadPorts() {
    this.departurePointsService.getAll().subscribe({
      next: (data) => {
        this.ports = data;
      },
      error: (err) => {
        this.errorMessage = 'Error cargando puertos';
        console.error(err);
      },
    });
  }

  search() {
    if (!this.originId || !this.destinationId) {
      this.errorMessage = 'Selecciona puerto de salida y destino';
      return;
    }

    if (this.originId === this.destinationId) {
      this.errorMessage = 'Puertos no pueden ser iguales';
      return;
    }

    this.isSearching = true;
    this.errorMessage = '';

    const searchDto: SearchSharedTripsDto = {
      originId: this.originId,
      destinationId: this.destinationId,
      date: this.selectedDate,
      time: this.selectedTime || undefined,
      passengerCount: this.passengers,
    };

    this.sharedTripsService.search(searchDto).subscribe({
      next: (data) => {
        this.trips = data;
        this.showResults = true;
        this.isSearching = false;
      },
      error: (err) => {
        this.errorMessage = 'Error buscando viajes: ' + err.message;
        this.isSearching = false;
      },
    });
  }

  goToDetail(tripId: number) {
    this.router.navigate(['/lanchas-compartidas', tripId]);
  }

  resetSearch() {
    this.showResults = false;
    this.trips = [];
    this.errorMessage = '';
  }

  get availableSeats(trip: SharedTrip): number {
    const confirmed = trip.passengers.filter(
      (p) => p.status === 'CONFIRMED'
    ).length;
    return trip.maxPassengers - confirmed;
  }

  get canBook(trip: SharedTrip): boolean {
    return (
      this.availableSeats(trip) > 0 &&
      trip.status === 'SEARCHING_PASSENGERS'
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
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }
}
