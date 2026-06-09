import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Horario, CreateHorarioDto, UpdateHorarioDto } from '../models/horario.model';

@Injectable({ providedIn: 'root' })
export class HorariosService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/schedules`;

  private extractArray(r: any): Horario[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Horario {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(): Observable<Horario[]> {
    return this.http.get<any>(this.base).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Horario> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  create(dto: CreateHorarioDto): Observable<Horario> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  update(id: number, dto: UpdateHorarioDto): Observable<Horario> {
    return this.http.patch<any>(`${this.base}/${id}`, dto).pipe(map(r => this.extractItem(r)));
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/${id}`);
  }
}
