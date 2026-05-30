import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Embarcacion, CreateEmbarcacionDto, UpdateEmbarcacionDto, VesselType, VesselStatus, VesselVerificationStatus } from '../models/embarcacion.model';

@Injectable({ providedIn: 'root' })
export class EmbarcacionesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/vessels`;

  private extractArray(response: any): Embarcacion[] {
    if (Array.isArray(response)) return response;
    return Array.isArray(response?.data) ? response.data : [];
  }

  private extractItem(response: any): Embarcacion {
    if (response?.data !== undefined) return response.data;
    return response;
  }

  getCharterable(startDate?: string, endDate?: string): Observable<Embarcacion[]> {
    const params: Record<string, string> = {};
    if (startDate) params['startDate'] = startDate;
    if (endDate)   params['endDate']   = endDate;
    return this.http.get<any>(`${this.base}/charterable`, { params }).pipe(map(r => this.extractArray(r)));
  }

  toggleAvailability(id: number): Observable<Embarcacion> {
    return this.http.patch<any>(`${this.base}/${id}/availability`, {}).pipe(map(r => this.extractItem(r)));
  }

  getAll(type?: VesselType, status?: VesselStatus): Observable<Embarcacion[]> {
    const params: Record<string, string> = {};
    if (type) params['type'] = type;
    if (status) params['status'] = status;
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Embarcacion> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByProvider(providerId: number): Observable<Embarcacion[]> {
    return this.http.get<any>(`${this.base}/provider/${providerId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateEmbarcacionDto): Observable<Embarcacion> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  update(id: number, dto: UpdateEmbarcacionDto): Observable<Embarcacion> {
    return this.http.patch<any>(`${this.base}/${id}`, dto).pipe(map(r => this.extractItem(r)));
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/${id}`);
  }

  getPendingVerification(): Observable<Embarcacion[]> {
    return this.http.get<any>(`${this.base}/pending-verification`).pipe(map(r => this.extractArray(r)));
  }

  verify(id: number, status: VesselVerificationStatus, rejectionReason?: string): Observable<Embarcacion> {
    return this.http.patch<any>(`${this.base}/${id}/verify`, { status, rejectionReason }).pipe(map(r => this.extractItem(r)));
  }
}
