import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ForgotPasswordPayload } from "../models/forgot-password.model";
import { environment } from "../../../../../../environments/environment.prod";

type ForgotPasswordResponse = {
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class ForgotPasswordService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/auth/forgot-password`;

  forgotPassword(
    payload: ForgotPasswordPayload,
  ): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(this.apiUrl, payload);
  }
}
