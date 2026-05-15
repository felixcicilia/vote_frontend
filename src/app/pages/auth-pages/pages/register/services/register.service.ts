import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { RegisterPayload } from "../models/register.model";
import { environment } from "../../../../../../environments/environment";

type RegisterResponse = {
  message: string;
  user: {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    role: string;
    createdAt: string;
  };
};

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/auth/register`;

  register(payload: RegisterPayload): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, payload);
  }
}
