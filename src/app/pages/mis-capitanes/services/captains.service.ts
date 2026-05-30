import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Captain, CaptainWithAvailability, CreateCaptainDto, CaptainVerificationStatus } from '../models/captain.model';

@Injectable({ providedIn: 'root' })
export class CaptainsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/captains`;

  getAll(providerProfileId?: number): Observable<Captain[]> {
    const params: any = {};
    if (providerProfileId) params['providerProfileId'] = providerProfileId;
    return this.http.get<Captain[]>(this.base, { params });
  }

  getApproved(providerProfileId: number, forRentalId?: number): Observable<CaptainWithAvailability[]> {
    const params: any = { providerProfileId };
    if (forRentalId) params['forRentalId'] = forRentalId;
    return this.http.get<CaptainWithAvailability[]>(`${this.base}/approved`, { params });
  }

  create(dto: CreateCaptainDto, providerProfileId: number): Observable<Captain> {
    return this.http.post<Captain>(this.base, dto, {
      params: { providerProfileId },
    });
  }

  update(id: number, dto: Partial<CreateCaptainDto>, providerProfileId?: number): Observable<Captain> {
    const params: any = {};
    if (providerProfileId) params['providerProfileId'] = providerProfileId;
    return this.http.patch<Captain>(`${this.base}/${id}`, dto, { params });
  }

  verify(id: number, status: CaptainVerificationStatus, verificationNotes?: string): Observable<Captain> {
    return this.http.patch<Captain>(`${this.base}/${id}/verify`, { status, verificationNotes });
  }

  remove(id: number, providerProfileId?: number): Observable<void> {
    const params: any = {};
    if (providerProfileId) params['providerProfileId'] = providerProfileId;
    return this.http.delete<void>(`${this.base}/${id}`, { params });
  }
}
