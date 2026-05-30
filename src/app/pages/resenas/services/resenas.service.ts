import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Resena, CreateResenaDto, ReviewReferenceType } from '../models/resena.model';

@Injectable({ providedIn: 'root' })
export class ResenasService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/reviews`;

  private extractArray(r: any): Resena[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Resena {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(): Observable<Resena[]> {
    return this.http.get<any>(this.base).pipe(map(r => this.extractArray(r)));
  }

  getByUser(userId: number): Observable<Resena[]> {
    return this.http.get<any>(`${this.base}/user/${userId}`).pipe(map(r => this.extractArray(r)));
  }

  getByVessel(vesselId: number): Observable<Resena[]> {
    return this.http.get<any>(`${this.base}/vessel/${vesselId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateResenaDto): Observable<Resena> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  /** Verifica si el usuario ya reseñó esta referencia */
  hasReviewed(reviewerId: number, referenceType: ReviewReferenceType, referenceId: number): Observable<boolean> {
    return this.http.get<any>(
      `${this.base}/check?reviewerId=${reviewerId}&referenceType=${referenceType}&referenceId=${referenceId}`
    ).pipe(map(r => r?.exists ?? r?.data?.exists ?? false));
  }
}
