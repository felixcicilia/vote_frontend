import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/tasas/services/tasas.service.ts
var TasasService = class _TasasService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/exchange-rates`;
  obtenerTodas() {
    return this.http.get(this.apiUrl).pipe(map((response) => this.extractArray(response)));
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(map((response) => this.extractItem(response)));
  }
  obtenerActivaUsdBs() {
    return this.http.get(`${this.apiUrl}/active/usd-bs`).pipe(map((response) => this.extractItem(response)));
  }
  crear(payload) {
    return this.http.post(this.apiUrl, payload).pipe(map((response) => this.extractItem(response)));
  }
  editar(id, payload) {
    return this.http.patch(`${this.apiUrl}/${id}`, payload).pipe(map((response) => this.extractItem(response)));
  }
  activar(id) {
    return this.http.patch(`${this.apiUrl}/${id}/activate`, {}).pipe(map((response) => this.extractItem(response)));
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  extractArray(response) {
    if (Array.isArray(response)) {
      return response;
    }
    return Array.isArray(response?.data) ? response.data : [];
  }
  extractItem(response) {
    if (this.isApiResponse(response)) {
      return response.data;
    }
    return response;
  }
  isApiResponse(value) {
    return !!value && typeof value === "object" && "data" in value;
  }
  static \u0275fac = function TasasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TasasService, factory: _TasasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasasService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TasasService
};
//# sourceMappingURL=chunk-P6DGYE77.js.map
