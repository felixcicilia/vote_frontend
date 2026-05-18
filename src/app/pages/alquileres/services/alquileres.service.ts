import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Alquiler, CreateAlquilerDto, ChangeStatusAlquilerDto, RentalStatus } from '../models/alquiler.model';

@Injectable({ providedIn: 'root' })
export class AlquileresService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/rentals`;

  private extractArray(r: any): Alquiler[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Alquiler {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(status?: RentalStatus): Observable<Alquiler[]> {
    const params: Record<string, string> = {};
    if (status) params['status'] = status;
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Alquiler> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByClient(clientId: number): Observable<Alquiler[]> {
    return this.http.get<any>(`${this.base}/client/${clientId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateAlquilerDto): Observable<Alquiler> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  changeStatus(id: number, dto: ChangeStatusAlquilerDto): Observable<Alquiler> {
    return this.http.patch<any>(`${this.base}/${id}/status`, dto).pipe(map(r => this.extractItem(r)));
  }
}
