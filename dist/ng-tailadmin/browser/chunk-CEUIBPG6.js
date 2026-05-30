import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/horarios/services/horarios.service.ts
var HorariosService = class _HorariosService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/schedules`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll() {
    return this.http.get(this.base).pipe(map((r) => this.extractArray(r)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => this.extractItem(r)));
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
  static \u0275fac = function HorariosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HorariosService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HorariosService, factory: _HorariosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HorariosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HorariosService
};
//# sourceMappingURL=chunk-CEUIBPG6.js.map
