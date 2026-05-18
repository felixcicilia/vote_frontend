import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ViajeTaxi, CreateViajeTaxiDto, ChangeStatusViajeTaxiDto, TaxiTripStatus } from '../models/viaje-taxi.model';

@Injectable({ providedIn: 'root' })
export class ViajesTaxiService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/taxi-trips`;

  private extractArray(r: any): ViajeTaxi[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): ViajeTaxi {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(status?: TaxiTripStatus): Observable<ViajeTaxi[]> {
    const params: Record<string, string> = {};
    if (status) params['status'] = status;
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<ViajeTaxi> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByClient(clientId: number): Observable<ViajeTaxi[]> {
    return this.http.get<any>(`${this.base}/client/${clientId}`).pipe(map(r => this.extractArray(r)));
  }

  getByCaptain(captainId: number): Observable<ViajeTaxi[]> {
    return this.http.get<any>(`${this.base}/captain/${captainId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateViajeTaxiDto): Observable<ViajeTaxi> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  changeStatus(id: number, dto: ChangeStatusViajeTaxiDto): Observable<ViajeTaxi> {
    return this.http.patch<any>(`${this.base}/${id}/status`, dto).pipe(map(r => this.extractItem(r)));
  }
}
