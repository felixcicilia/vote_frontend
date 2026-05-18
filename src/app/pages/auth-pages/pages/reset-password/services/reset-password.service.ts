import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ResetPasswordPayload } from "../models/reset-password.model";
import { environment } from "../../../../../../environments/environment";

type ResetPasswordResponse = {
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class ResetPasswordService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/auth/reset-password`;

  resetPassword(
    payload: ResetPasswordPayload,
  ): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(this.apiUrl, payload);
  }
}
