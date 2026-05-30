import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/muelles/services/muelles.service.ts
var MuellesService = class _MuellesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/piers`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll(onlyActive) {
    const params = {};
    if (onlyActive !== void 0)
      params["onlyActive"] = String(onlyActive);
    return this.http.get(this.base, { params }).pipe(map((r) => this.extractArray(r)));
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
  static \u0275fac = function MuellesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MuellesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MuellesService, factory: _MuellesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MuellesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MuellesService
};
//# sourceMappingURL=chunk-OR23U6T3.js.map
