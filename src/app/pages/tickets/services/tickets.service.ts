import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Ticket, CreateTicketDto, ChangeStatusTicketDto } from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/tickets`;

  private extractArray(r: any): Ticket[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Ticket {
    return r?.data !== undefined ? r.data : r;
  }

  getAll(): Observable<Ticket[]> {
    return this.http.get<any>(this.base).pipe(map(r => this.extractArray(r)));
  }

  getById(id: number): Observable<Ticket> {
    return this.http.get<any>(`${this.base}/${id}`).pipe(map(r => this.extractItem(r)));
  }

  getByTrip(tripId: number): Observable<Ticket[]> {
    return this.http.get<any>(`${this.base}/trip/${tripId}`).pipe(map(r => this.extractArray(r)));
  }

  getByClient(clientId: number): Observable<Ticket[]> {
    return this.http.get<any>(`${this.base}/client/${clientId}`).pipe(map(r => this.extractArray(r)));
  }

  create(dto: CreateTicketDto): Observable<Ticket> {
    return this.http.post<any>(this.base, dto).pipe(map(r => this.extractItem(r)));
  }

  changeStatus(id: number, dto: ChangeStatusTicketDto): Observable<Ticket> {
    return this.http.patch<any>(`${this.base}/${id}/status`, dto).pipe(map(r => this.extractItem(r)));
  }
}
