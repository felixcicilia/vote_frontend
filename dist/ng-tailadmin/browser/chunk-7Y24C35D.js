import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/viajes/services/viajes.service.ts
var ViajesService = class _ViajesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/trips`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll(status, date) {
    const params = {};
    if (status)
      params["status"] = status;
    if (date)
      params["date"] = date;
    return this.http.get(this.base, { params }).pipe(map((r) => this.extractArray(r)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => this.extractItem(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  changeStatus(id, dto) {
    return this.http.patch(`${this.base}/${id}/status`, dto).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function ViajesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViajesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViajesService, factory: _ViajesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViajesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ViajesService
};
//# sourceMappingURL=chunk-7Y24C35D.js.map
