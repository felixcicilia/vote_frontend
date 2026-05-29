import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/alquileres/services/destinos.service.ts
var DestinosService = class _DestinosService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/destinations`;
  getAll(onlyActive = true) {
    const params = onlyActive ? { active: "true" } : {};
    return this.http.get(this.base, { params }).pipe(map((r) => Array.isArray(r) ? r : Array.isArray(r?.data) ? r.data : []));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => r?.data !== void 0 ? r.data : r));
  }
  static \u0275fac = function DestinosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DestinosService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DestinosService, factory: _DestinosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DestinosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DestinosService
};
//# sourceMappingURL=chunk-BKB5UP3R.js.map
