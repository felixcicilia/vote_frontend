import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Viaje, CreateViajeDto, ChangeStatusViajeDto, TripStatus } from '../models/viaje.model';

@Injectable({ providedIn: 'root' })
export class ViajesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/trips`;

  private extractArray(r: any): Viaje[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Viaje {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(status?: TripStatus): Observable<Viaje[]> {
    const params: Record<string, string> = {};
    if (status) params['status'] = status;
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Viaje> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  create(dto: CreateViajeDto): Observable<Viaje> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  changeStatus(id: number, dto: ChangeStatusViajeDto): Observable<Viaje> {
    return this.http.patch<any>(`${this.base}/${id}/status`, dto).pipe(map(r => this.extractItem(r)));
  }
}
