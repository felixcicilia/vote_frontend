import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import {
  CrearUsuarioPayload,
  EditarUsuarioPayload,
  Usuario,
} from "../models/usuarios.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/users`;

  private extractArray(response: any): Usuario[] {
    if (Array.isArray(response)) return response;
    return Array.isArray(response?.data) ? response.data : [];
  }

  private extractItem(response: any): Usuario {
    if (response?.data !== undefined) return response.data;
    return response;
  }

  obtenerUsuarios(role?: string): Observable<Usuario[]> {
    const params: Record<string, string> = {};
    if (role) params['role'] = role;
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(r => this.extractArray(r))
    );
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(r => this.extractItem(r))
    );
  }

  crearUsuario(payload: CrearUsuarioPayload): Observable<Usuario> {
    return this.http.post<any>(this.apiUrl, payload).pipe(
      map(r => this.extractItem(r))
    );
  }

  editarUsuario(id: number, payload: EditarUsuarioPayload): Observable<Usuario> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, payload).pipe(
      map(r => this.extractItem(r))
    );
  }

  eliminarUsuario(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
