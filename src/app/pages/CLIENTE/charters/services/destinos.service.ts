import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Destino } from '../models/destino.model';

@Injectable({ providedIn: 'root' })
export class DestinosService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/destinations`;

  getAll(onlyActive = true): Observable<Destino[]> {
    const params: Record<string, string> = onlyActive ? { active: 'true' } : {};
    return this.http.get<{ data: Destino[] } | Destino[]>(this.base, { params }).pipe(
      map((r: any) => (Array.isArray(r) ? r : (Array.isArray(r?.data) ? r.data : []))),
    );
  }

  getById(id: number): Observable<Destino> {
    return this.http.get<{ data: Destino } | Destino>(`${this.base}/${id}`).pipe(
      map((r: any) => (r?.data !== undefined ? r.data : r)),
    );
  }
}
