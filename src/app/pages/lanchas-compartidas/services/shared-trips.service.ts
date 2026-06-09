import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  SharedTrip,
  SearchSharedTripsDto,
  AddPassengerDto,
  CreateSharedTripDto,
} from '../models/shared-trip.model';

@Injectable({ providedIn: 'root' })
export class SharedTripsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/shared-trips`;

  private extractArray(r: any): SharedTrip[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }

  private extractItem(r: any): SharedTrip {
    return r?.data !== undefined ? r.data : r;
  }

  /**
   * Buscar viajes compartidos disponibles
   */
  search(dto: SearchSharedTripsDto): Observable<SharedTrip[]> {
    const params: Record<string, any> = {
      originId: dto.originId,
      destinationId: dto.destinationId,
      date: dto.date,
    };

    if (dto.time) params['time'] = dto.time;
    if (dto.passengerCount) params['passengerCount'] = dto.passengerCount;

    return this.http
      .get<any>(`${this.base}/search`, { params })
      .pipe(map((r) => this.extractArray(r)));
  }

  /**
   * Obtener detalle de un viaje
   */
  getById(id: number): Observable<SharedTrip> {
    return this.http
      .get<any>(`${this.base}/${id}`)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Crear un nuevo viaje compartido (proveedor)
   */
  create(dto: CreateSharedTripDto): Observable<SharedTrip> {
    return this.http
      .post<any>(this.base, dto)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Agregar pasajero a un viaje
   */
  addPassenger(
    tripId: number,
    dto: AddPassengerDto
  ): Observable<SharedTrip> {
    return this.http
      .post<any>(`${this.base}/${tripId}/passengers`, dto)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Confirmar pasajero (después de pago)
   */
  confirmPassenger(
    tripId: number,
    passengerId: number
  ): Observable<SharedTrip> {
    return this.http
      .patch<any>(`${this.base}/${tripId}/passengers/${passengerId}/confirm`)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Verificar si viaje debe departar
   */
  checkAndDepart(tripId: number): Observable<SharedTrip> {
    return this.http
      .patch<any>(`${this.base}/${tripId}/check-departure`)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Completar viaje
   */
  completeTrip(tripId: number): Observable<SharedTrip> {
    return this.http
      .patch<any>(`${this.base}/${tripId}/complete`)
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Cancelar viaje
   */
  cancelTrip(tripId: number, reason: string): Observable<SharedTrip> {
    return this.http
      .patch<any>(`${this.base}/${tripId}/cancel`, { reason })
      .pipe(map((r) => this.extractItem(r)));
  }

  /**
   * Obtener viajes activos del proveedor
   */
  getActiveByProvider(providerId: number): Observable<SharedTrip[]> {
    return this.http
      .get<any>(`${this.base}/provider/${providerId}/active`)
      .pipe(map((r) => this.extractArray(r)));
  }
}
