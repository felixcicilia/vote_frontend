import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/embarcaciones/services/embarcaciones.service.ts
var EmbarcacionesService = class _EmbarcacionesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/vessels`;
  extractArray(response) {
    if (Array.isArray(response))
      return response;
    return Array.isArray(response?.data) ? response.data : [];
  }
  extractItem(response) {
    if (response?.data !== void 0)
      return response.data;
    return response;
  }
  getCharterable() {
    return this.http.get(`${this.base}/charterable`).pipe(map((r) => this.extractArray(r)));
  }
  toggleAvailability(id) {
    return this.http.patch(`${this.base}/${id}/availability`, {}).pipe(map((r) => this.extractItem(r)));
  }
  getAll(type, status) {
    const params = {};
    if (type)
      params["type"] = type;
    if (status)
      params["status"] = status;
    return this.http.get(this.base, { params }).pipe(map((r) => this.extractArray(r)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => this.extractItem(r)));
  }
  getByProvider(providerId) {
    return this.http.get(`${this.base}/provider/${providerId}`).pipe(map((r) => this.extractArray(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  update(id, dto) {
    return this.http.patch(`${this.base}/${id}`, dto).pipe(map((r) => this.extractItem(r)));
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  getPendingVerification() {
    return this.http.get(`${this.base}/pending-verification`).pipe(map((r) => this.extractArray(r)));
  }
  verify(id, status, rejectionReason) {
    return this.http.patch(`${this.base}/${id}/verify`, { status, rejectionReason }).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function EmbarcacionesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmbarcacionesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmbarcacionesService, factory: _EmbarcacionesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmbarcacionesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EmbarcacionesService
};
//# sourceMappingURL=chunk-A6NA4AQE.js.map
