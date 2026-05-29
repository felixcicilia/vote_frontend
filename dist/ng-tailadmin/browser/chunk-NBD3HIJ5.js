import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/rutas/services/rutas.service.ts
var RutasService = class _RutasService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/routes`;
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
  getByPier(pierId) {
    return this.http.get(`${this.base}/pier/${pierId}`).pipe(map((r) => this.extractArray(r)));
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
  static \u0275fac = function RutasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RutasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RutasService, factory: _RutasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RutasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RutasService
};
//# sourceMappingURL=chunk-NBD3HIJ5.js.map
