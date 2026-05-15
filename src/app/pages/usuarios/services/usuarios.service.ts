import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  CrearUsuarioPayload,
  EditarUsuarioPayload,
  Usuario,
} from "../models/usuarios.model";
import { environment } from "../../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/users`;
  

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  obtenerClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/clientes`);
  }

  crearUsuario(payload: CrearUsuarioPayload): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, payload);
  }

  editarUsuario(
    id: number,
    payload: EditarUsuarioPayload,
  ): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/${id}`, payload);
  }

  eliminarUsuario(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
