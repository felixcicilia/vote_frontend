import { Injectable, computed, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, map, of, tap } from "rxjs";

import {
  AuthUser,
  LoginPayload,
  LoginResponse,
  ProfileResponse,
} from "../models/auth.model";
import { environment } from "../../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly apiUrl = `${environment.apiUrl}/auth`;

  private readonly _token = signal<string | null>(
    localStorage.getItem("access_token"),
  );

  private readonly _user = signal<AuthUser | null>(this.getStoredUser());

  readonly token = computed(() => this._token());
  readonly user = computed(() => this._user());
  readonly isAuthenticated = computed(() => !!this._token());

  readonly role = computed(() => this._user()?.role ?? null);

  readonly isCliente = computed(() => this._user()?.role === "CLIENTE");

  readonly isAdmin = computed(() => {
    const role = this._user()?.role;
    return role === "ADMINISTRADOR" || role === "MASTER";
  });

  login(payload: LoginPayload): Observable<AuthUser> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, payload).pipe(
      tap((response) => {
        this.setSession(response.access_token, response.user);
      }),
      map((response) => response.user),
    );
  }

  getProfile(): Observable<AuthUser | null> {
    return this.http.get<ProfileResponse>(`${this.apiUrl}/profile`).pipe(
      map((response) => response.data),
      tap((user) => {
        this._user.set(user);
        localStorage.setItem("auth_user", JSON.stringify(user));
      }),
      catchError(() => {
        this.clearSession();
        return of(null);
      }),
    );
  }

  restoreSession(): Observable<AuthUser | null> {
    const token = this._token();

    if (!token) {
      return of(null);
    }

    return this.getProfile();
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return this._token();
  }

  private setSession(token: string, user: AuthUser): void {
    this._token.set(token);
    this._user.set(user);

    localStorage.setItem("access_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
  }

  private clearSession(): void {
    this._token.set(null);
    this._user.set(null);

    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_user");
  }

  private getStoredUser(): AuthUser | null {
    const rawUser = localStorage.getItem("auth_user");

    if (!rawUser) {
      return null;
    }

    try {
      return JSON.parse(rawUser) as AuthUser;
    } catch {
      return null;
    }
  }

  hasRole(...roles: AuthUser["role"][]): boolean {
    const role = this._user()?.role;
    return !!role && roles.includes(role);
  }
}
