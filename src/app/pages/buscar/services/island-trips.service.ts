import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PuertoSalida, VesselSlot, IslandBooking, CreateIslandBookingDto } from '../models/island-trip.model';

@Injectable({ providedIn: 'root' })
export class IslandTripsService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  private arr = (r: any) => Array.isArray(r) ? r : (Array.isArray(r?.data) ? r.data : []);
  private item = (r: any) => r?.data !== undefined ? r.data : r;

  getPuertos(onlyActive = true): Observable<PuertoSalida[]> {
    const params: Record<string, string> = onlyActive ? { active: 'true' } : {};
    return this.http.get<any>(`${this.base}/departure-points`, { params }).pipe(map(r => this.arr(r)));
  }

  getSlots(params: { destinationId?: number; departurePointId?: number; vesselId?: number }): Observable<VesselSlot[]> {
    const p: Record<string, string> = {};
    if (params.destinationId)    p['destinationId']    = String(params.destinationId);
    if (params.departurePointId) p['departurePointId'] = String(params.departurePointId);
    if (params.vesselId)         p['vesselId']         = String(params.vesselId);
    return this.http.get<any>(`${this.base}/vessel-slots`, { params: p }).pipe(map(r => this.arr(r)));
  }

  getSlotsByVessel(vesselId: number, all = false): Observable<VesselSlot[]> {
    const params: Record<string, string> = all ? { all: 'true' } : {};
    return this.http.get<any>(`${this.base}/vessel-slots/vessel/${vesselId}`, { params }).pipe(map(r => this.arr(r)));
  }

  getSlotsByProvider(providerId: number): Observable<VesselSlot[]> {
    return this.http.get<any>(`${this.base}/vessel-slots/provider/${providerId}`).pipe(map(r => this.arr(r)));
  }

  createSlot(dto: any): Observable<VesselSlot> {
    return this.http.post<any>(`${this.base}/vessel-slots`, dto).pipe(map(r => this.item(r)));
  }

  updateSlot(id: number, dto: any): Observable<VesselSlot> {
    return this.http.patch<any>(`${this.base}/vessel-slots/${id}`, dto).pipe(map(r => this.item(r)));
  }

  deleteSlot(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/vessel-slots/${id}`);
  }

  createBooking(dto: CreateIslandBookingDto): Observable<IslandBooking> {
    return this.http.post<any>(`${this.base}/island-bookings`, dto).pipe(map(r => this.item(r)));
  }

  getBookings(params: { clientId?: number; providerId?: number }): Observable<IslandBooking[]> {
    const p: Record<string, string> = {};
    if (params.clientId)  p['clientId']  = String(params.clientId);
    if (params.providerId) p['providerId'] = String(params.providerId);
    return this.http.get<any>(`${this.base}/island-bookings`, { params: p }).pipe(map(r => this.arr(r)));
  }

  getBookingById(id: number): Observable<IslandBooking> {
    return this.http.get<any>(`${this.base}/island-bookings/${id}`).pipe(map(r => this.item(r)));
  }

  updateBooking(id: number, dto: { status: string; cancellationReason?: string }): Observable<IslandBooking> {
    return this.http.patch<any>(`${this.base}/island-bookings/${id}`, dto).pipe(map(r => this.item(r)));
  }
}
