import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Ruta, CreateRutaDto, UpdateRutaDto } from '../models/ruta.model';

@Injectable({ providedIn: 'root' })
export class RutasService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/routes`;

  private extractArray(r: any): Ruta[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Ruta {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(): Observable<Ruta[]> {
    return this.http.get<any>(this.base).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Ruta> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByPier(pierId: number): Observable<Ruta[]> {
    return this.http.get<any>(`${this.base}/pier/${pierId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateRutaDto): Observable<Ruta> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  update(id: number, dto: UpdateRutaDto): Observable<Ruta> {
    return this.http.patch<any>(`${this.base}/${id}`, dto).pipe(map(r => this.extractItem(r)));
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/${id}`);
  }
}
