import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/tickets/services/tickets.service.ts
var TicketsService = class _TicketsService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/tickets`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll(params) {
    const p = {};
    if (params?.clientId)
      p["clientId"] = String(params.clientId);
    if (params?.vesselId)
      p["vesselId"] = String(params.vesselId);
    if (params?.status)
      p["status"] = params.status;
    return this.http.get(this.base, { params: p }).pipe(map((r) => this.extractArray(r)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`).pipe(map((r) => this.extractItem(r)));
  }
  getByTrip(tripId) {
    return this.http.get(`${this.base}/trip/${tripId}`).pipe(map((r) => this.extractArray(r)));
  }
  getByClient(clientId) {
    return this.http.get(`${this.base}/client/${clientId}`).pipe(map((r) => this.extractArray(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  changeStatus(id, dto) {
    return this.http.patch(`${this.base}/${id}/status`, dto).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function TicketsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketsService, factory: _TicketsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TicketsService
};
//# sourceMappingURL=chunk-K4CVTLBT.js.map
