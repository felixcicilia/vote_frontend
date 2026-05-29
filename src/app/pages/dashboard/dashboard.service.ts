import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface DashboardStats {
  excursiones: {
    periodo: number; pending: number; confirmed: number;
    active: number; completed: number; cancelled: number;
  };
  charters: {
    periodo: number; pending: number; confirmed: number; completed: number;
  };
  pagos: {
    periodo: number; pendientes: number; verificados: number;
    rechazados: number; ingresoUsd: number; ingresoBs: number;
  };
  embarcaciones: { total: number; pendienteAprobacion: number; };
  usuarios: { total: number; clientes: number; proveedores: number; };
  reservasRecientes: {
    id: number; status: string; total: number; tripDate: string;
    passengers: number; client: string; vessel: string;
    desde: string; hasta: string; createdAt: string;
  }[];
  pagosRecientes: {
    id: number; status: string; amount: number; currency: string;
    method: string; client: string; referenceType: string; createdAt: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/dashboard`;

  getStats(startDate: string, endDate: string): Observable<DashboardStats> {
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.http.get<DashboardStats>(this.base, { params });
  }
}
