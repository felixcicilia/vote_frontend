import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/buscar/services/island-trips.service.ts
var IslandTripsService = class _IslandTripsService {
  http = inject(HttpClient);
  base = environment.apiUrl;
  arr = (r) => Array.isArray(r) ? r : Array.isArray(r?.data) ? r.data : [];
  item = (r) => r?.data !== void 0 ? r.data : r;
  getPuertos(onlyActive = true) {
    const params = onlyActive ? { active: "true" } : {};
    return this.http.get(`${this.base}/departure-points`, { params }).pipe(map((r) => this.arr(r)));
  }
  getMuelles(onlyActive = true) {
    const params = onlyActive ? {} : { active: "false" };
    return this.http.get(`${this.base}/departure-points/muelles`, { params }).pipe(map((r) => this.arr(r)));
  }
  getIslasPiers(onlyActive = true) {
    const params = onlyActive ? {} : { active: "false" };
    return this.http.get(`${this.base}/departure-points/islas`, { params }).pipe(map((r) => this.arr(r)));
  }
  getSlots(params) {
    const p = {};
    if (params.arrivalPointId)
      p["arrivalPointId"] = String(params.arrivalPointId);
    if (params.departurePointId)
      p["departurePointId"] = String(params.departurePointId);
    if (params.vesselId)
      p["vesselId"] = String(params.vesselId);
    return this.http.get(`${this.base}/vessel-slots`, { params: p }).pipe(map((r) => this.arr(r)));
  }
  getSlotsByVessel(vesselId, all = false) {
    const params = all ? { all: "true" } : {};
    return this.http.get(`${this.base}/vessel-slots/vessel/${vesselId}`, { params }).pipe(map((r) => this.arr(r)));
  }
  getSlotsByProvider(providerId) {
    return this.http.get(`${this.base}/vessel-slots/provider/${providerId}`).pipe(map((r) => this.arr(r)));
  }
  createSlot(dto) {
    return this.http.post(`${this.base}/vessel-slots`, dto).pipe(map((r) => this.item(r)));
  }
  updateSlot(id, dto) {
    return this.http.patch(`${this.base}/vessel-slots/${id}`, dto).pipe(map((r) => this.item(r)));
  }
  deleteSlot(id) {
    return this.http.delete(`${this.base}/vessel-slots/${id}`);
  }
  createBooking(dto) {
    return this.http.post(`${this.base}/island-bookings`, dto).pipe(map((r) => this.item(r)));
  }
  getBookings(params) {
    const p = {};
    if (params.clientId)
      p["clientId"] = String(params.clientId);
    if (params.providerId)
      p["providerId"] = String(params.providerId);
    return this.http.get(`${this.base}/island-bookings`, { params: p }).pipe(map((r) => this.arr(r)));
  }
  getBookingById(id) {
    return this.http.get(`${this.base}/island-bookings/${id}`).pipe(map((r) => this.item(r)));
  }
  updateBooking(id, dto) {
    return this.http.patch(`${this.base}/island-bookings/${id}`, dto).pipe(map((r) => this.item(r)));
  }
  static \u0275fac = function IslandTripsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IslandTripsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IslandTripsService, factory: _IslandTripsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IslandTripsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  IslandTripsService
};
//# sourceMappingURL=chunk-NAARBNGA.js.map
