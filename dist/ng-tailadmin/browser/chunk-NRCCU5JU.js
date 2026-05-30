import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/mis-capitanes/services/captains.service.ts
var CaptainsService = class _CaptainsService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/captains`;
  getAll(providerProfileId) {
    const params = {};
    if (providerProfileId)
      params["providerProfileId"] = providerProfileId;
    return this.http.get(this.base, { params });
  }
  getApproved(providerProfileId, forRentalId) {
    const params = { providerProfileId };
    if (forRentalId)
      params["forRentalId"] = forRentalId;
    return this.http.get(`${this.base}/approved`, { params });
  }
  create(dto, providerProfileId) {
    return this.http.post(this.base, dto, {
      params: { providerProfileId }
    });
  }
  update(id, dto, providerProfileId) {
    const params = {};
    if (providerProfileId)
      params["providerProfileId"] = providerProfileId;
    return this.http.patch(`${this.base}/${id}`, dto, { params });
  }
  verify(id, status, verificationNotes) {
    return this.http.patch(`${this.base}/${id}/verify`, { status, verificationNotes });
  }
  remove(id, providerProfileId) {
    const params = {};
    if (providerProfileId)
      params["providerProfileId"] = providerProfileId;
    return this.http.delete(`${this.base}/${id}`, { params });
  }
  static \u0275fac = function CaptainsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaptainsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CaptainsService, factory: _CaptainsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaptainsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CaptainsService
};
//# sourceMappingURL=chunk-NRCCU5JU.js.map
