import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import {
  ApiResponse,
  CrearTasaPayload,
  EditarTasaPayload,
  Tasa,
} from "../models/tasa.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TasasService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/exchange-rates`;

  obtenerTodas(): Observable<Tasa[]> {
    return this.http
      .get<Tasa[] | ApiResponse<Tasa[]>>(this.apiUrl)
      .pipe(map((response) => this.extractArray(response)));
  }

  obtenerPorId(id: number): Observable<Tasa> {
    return this.http
      .get<Tasa | ApiResponse<Tasa>>(`${this.apiUrl}/${id}`)
      .pipe(map((response) => this.extractItem(response)));
  }

  obtenerActivaUsdBs(): Observable<Tasa> {
    return this.http
      .get<Tasa | ApiResponse<Tasa>>(`${this.apiUrl}/active/usd-bs`)
      .pipe(map((response) => this.extractItem(response)));
  }

  crear(payload: CrearTasaPayload): Observable<Tasa> {
    return this.http
      .post<Tasa | ApiResponse<Tasa>>(this.apiUrl, payload)
      .pipe(map((response) => this.extractItem(response)));
  }

  editar(id: number, payload: EditarTasaPayload): Observable<Tasa> {
    return this.http
      .patch<Tasa | ApiResponse<Tasa>>(`${this.apiUrl}/${id}`, payload)
      .pipe(map((response) => this.extractItem(response)));
  }

  activar(id: number): Observable<Tasa> {
    return this.http
      .patch<Tasa | ApiResponse<Tasa>>(`${this.apiUrl}/${id}/activate`, {})
      .pipe(map((response) => this.extractItem(response)));
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private extractArray(response: Tasa[] | ApiResponse<Tasa[]>): Tasa[] {
    if (Array.isArray(response)) {
      return response;
    }

    return Array.isArray(response?.data) ? response.data : [];
  }

  private extractItem(response: Tasa | ApiResponse<Tasa>): Tasa {
    if (this.isApiResponse<Tasa>(response)) {
      return response.data;
    }

    return response;
  }

  private isApiResponse<T>(value: unknown): value is ApiResponse<T> {
    return !!value && typeof value === "object" && "data" in value;
  }
}
