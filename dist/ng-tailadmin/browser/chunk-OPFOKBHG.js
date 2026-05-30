import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/pagos/services/pagos.service.ts
var PagosService = class _PagosService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/payments`;
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
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  verify(id, dto) {
    return this.http.patch(`${this.base}/${id}`, { status: "VERIFIED", verifiedById: dto.verifiedById }).pipe(map((r) => this.extractItem(r)));
  }
  reject(id, dto) {
    return this.http.patch(`${this.base}/${id}`, { status: "REJECTED", rejectionReason: dto.rejectionReason }).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function PagosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagosService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagosService, factory: _PagosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PagosService
};
//# sourceMappingURL=chunk-OPFOKBHG.js.map
