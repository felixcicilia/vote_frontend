import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Muelle, CreateMuelleDto, UpdateMuelleDto } from '../models/muelle.model';

@Injectable({ providedIn: 'root' })
export class MuellesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/piers`;

  private extractArray(r: any): Muelle[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Muelle {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(onlyActive?: boolean): Observable<Muelle[]> {
    const params: Record<string, string> = {};
    if (onlyActive !== undefined) params['onlyActive'] = String(onlyActive);
    return this.http.get<any>(this.base, { params }).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Muelle> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  create(dto: CreateMuelleDto): Observable<Muelle> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  update(id: number, dto: UpdateMuelleDto): Observable<Muelle> {
    return this.http.patch<any>(`${this.base}/${id}`, dto).pipe(map(r => this.extractItem(r)));
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/${id}`);
  }
}
