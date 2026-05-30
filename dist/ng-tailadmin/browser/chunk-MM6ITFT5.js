import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/alquileres/services/alquileres.service.ts
var AlquileresService = class _AlquileresService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/rentals`;
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
    return this.http.get(this.base, { params: { clientId } }).pipe(map((r) => this.extractArray(r)));
  }
  getByProvider(providerId) {
    return this.http.get(`${this.base}/provider/${providerId}`).pipe(map((r) => this.extractArray(r)));
  }
  getByVessel(vesselId) {
    return this.http.get(`${this.base}/vessel/${vesselId}`).pipe(map((r) => this.extractArray(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  changeStatus(id, dto) {
    return this.http.patch(`${this.base}/${id}`, dto).pipe(map((r) => this.extractItem(r)));
  }
  assignCaptain(id, captainId) {
    return this.http.patch(`${this.base}/${id}`, { captainId }).pipe(map((r) => this.extractItem(r)));
  }
  assignCaptainProfile(id, captainProfileId) {
    return this.http.patch(`${this.base}/${id}`, { captainProfileId }).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function AlquileresService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlquileresService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlquileresService, factory: _AlquileresService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlquileresService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AlquileresService
};
//# sourceMappingURL=chunk-MM6ITFT5.js.map
