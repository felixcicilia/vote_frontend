import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Pago, CreatePagoDto, VerifyPagoDto, RejectPagoDto, PaymentStatus } from '../models/pago.model';

@Injectable({ providedIn: 'root' })
export class PagosService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/payments`;

  private extractArray(r: any): Pago[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Pago {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(status?: PaymentStatus): Observable<Pago[]> {
    const params: Record<string, string> = {};
    if (status) params['status'] = status;
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Pago> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByClient(clientId: number): Observable<Pago[]> {
    return this.http.get<any>(`${this.base}/client/${clientId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreatePagoDto): Observable<Pago> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  verify(id: number, dto: VerifyPagoDto): Observable<Pago> {
    return this.http.patch<any>(`${this.base}/${id}`, { status: 'VERIFIED', verifiedById: dto.verifiedById }).pipe(map(r => this.extractItem(r)));
  }

  reject(id: number, dto: RejectPagoDto): Observable<Pago> {
    return this.http.patch<any>(`${this.base}/${id}`, { status: 'REJECTED', rejectionReason: dto.rejectionReason }).pipe(map(r => this.extractItem(r)));
  }
}
