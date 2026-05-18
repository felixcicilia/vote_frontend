import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Notificacion } from '../models/notificacion.model';

@Injectable({ providedIn: 'root' })
export class NotificacionesService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/notifications`;

  private extractArray(r: any): Notificacion[] {
    if (Array.isArray(r)) return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  private extractItem(r: any): Notificacion {
    return r?.data !== undefined ? r.data : r;
  }

  getByUser(userId: number, onlyUnread = false): Observable<Notificacion[]> {
    const params: Record<string, string> = {};
    if (onlyUnread) params['onlyUnread'] = 'true';
    return this.http.get<any>(`${this.base}/user/${userId}`, { params }).pipe(map(r => this.extractArray(r)));
  }

  countUnread(userId: number): Observable<{ count: number }> {
    return this.http.get<any>(`${this.base}/user/${userId}/unread-count`).pipe(
      map(r => r?.data ?? r)
    );
  }

  markAsRead(id: number, userId: number): Observable<Notificacion> {
    return this.http.patch<any>(`${this.base}/${id}/read/${userId}`, {}).pipe(map(r => this.extractItem(r)));
  }

  markAllAsRead(userId: number): Observable<any> {
    return this.http.patch<any>(`${this.base}/user/${userId}/read-all`, {});
  }

  delete(id: number, userId: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/${id}/user/${userId}`);
  }
}
