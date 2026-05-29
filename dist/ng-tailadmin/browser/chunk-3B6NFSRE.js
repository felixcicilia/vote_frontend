import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/viajes-taxi/services/viajes-taxi.service.ts
var ViajesTaxiService = class _ViajesTaxiService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/taxi-trips`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll(status) {
    const params = {};
    if (status)
      params["status"] = status;
    return this.http.get(this.base, { params }).pipe(map((r) => this.extractArray(r)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => this.extractItem(r)));
  }
  getByClient(clientId) {
    return this.http.get(`${this.base}/client/${clientId}`).pipe(map((r) => this.extractArray(r)));
  }
  getByCaptain(captainId) {
    return this.http.get(`${this.base}/captain/${captainId}`).pipe(map((r) => this.extractArray(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  changeStatus(id, dto) {
    return this.http.patch(`${this.base}/${id}/status`, dto).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function ViajesTaxiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViajesTaxiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViajesTaxiService, factory: _ViajesTaxiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViajesTaxiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ViajesTaxiService
};
//# sourceMappingURL=chunk-3B6NFSRE.js.map
