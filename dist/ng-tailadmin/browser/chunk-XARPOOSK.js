import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/metodos-cobro/services/payment-accounts.service.ts
var PaymentAccountsService = class _PaymentAccountsService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/payment-accounts`;
  getActive() {
    return this.http.get(this.base);
  }
  getAll() {
    return this.http.get(`${this.base}?all=true`);
  }
  create(dto) {
    return this.http.post(this.base, dto);
  }
  update(id, dto) {
    return this.http.patch(`${this.base}/${id}`, dto);
  }
  remove(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static \u0275fac = function PaymentAccountsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentAccountsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentAccountsService, factory: _PaymentAccountsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentAccountsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PaymentAccountsService
};
//# sourceMappingURL=chunk-XARPOOSK.js.map
