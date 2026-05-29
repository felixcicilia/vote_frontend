import {
  Router
} from "./chunk-AJH5TJUW.js";
import {
  HttpClient,
  Injectable,
  catchError,
  computed,
  environment,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/auth-pages/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = `${environment.apiUrl}/auth`;
  _token = signal(localStorage.getItem("access_token"), ...ngDevMode ? [{ debugName: "_token" }] : (
    /* istanbul ignore next */
    []
  ));
  _user = signal(this.getStoredUser(), ...ngDevMode ? [{ debugName: "_user" }] : (
    /* istanbul ignore next */
    []
  ));
  token = computed(() => this._token(), ...ngDevMode ? [{ debugName: "token" }] : (
    /* istanbul ignore next */
    []
  ));
  user = computed(() => this._user(), ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthenticated = computed(() => !!this._token(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  role = computed(() => this._user()?.role ?? null, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  isCliente = computed(() => this._user()?.role === "CLIENTE", ...ngDevMode ? [{ debugName: "isCliente" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = computed(() => {
    const role = this._user()?.role;
    return role === "ADMINISTRADOR" || role === "MASTER";
  }, ...ngDevMode ? [{ debugName: "isAdmin" }] : (
    /* istanbul ignore next */
    []
  ));
  login(payload) {
    return this.http.post(`${this.apiUrl}/login`, payload).pipe(tap((response) => {
      this.setSession(response.access_token, response.user);
    }), map((response) => response.user));
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`).pipe(map((response) => response.data), tap((user) => {
      this._user.set(user);
      localStorage.setItem("auth_user", JSON.stringify(user));
    }), catchError(() => {
      this.clearSession();
      return of(null);
    }));
  }
  restoreSession() {
    const token = this._token();
    if (!token) {
      return of(null);
    }
    return this.getProfile();
  }
  logout() {
    this.clearSession();
    this.router.navigate(["/login"]);
  }
  getToken() {
    return this._token();
  }
  setSession(token, user) {
    this._token.set(token);
    this._user.set(user);
    localStorage.setItem("access_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
  }
  clearSession() {
    this._token.set(null);
    this._user.set(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_user");
  }
  getStoredUser() {
    const rawUser = localStorage.getItem("auth_user");
    if (!rawUser) {
      return null;
    }
    try {
      return JSON.parse(rawUser);
    } catch (e) {
      return null;
    }
  }
  hasRole(...roles) {
    const role = this._user()?.role;
    return !!role && roles.includes(role);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-U2PDA3ZS.js.map
