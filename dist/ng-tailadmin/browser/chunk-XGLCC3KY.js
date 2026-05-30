import {
  HttpClient,
  Injectable,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/shared/services/tasa.service.ts
var TasaService = class _TasaService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/exchange-rates`;
  tasa = signal(null, ...ngDevMode ? [{ debugName: "tasa" }] : (
    /* istanbul ignore next */
    []
  ));
  rate = computed(() => Number(this.tasa()?.rate ?? 0), ...ngDevMode ? [{ debugName: "rate" }] : (
    /* istanbul ignore next */
    []
  ));
  loaded = signal(false, ...ngDevMode ? [{ debugName: "loaded" }] : (
    /* istanbul ignore next */
    []
  ));
  load() {
    if (this.loaded())
      return;
    this.http.get(`${this.base}/active/usd-bs`).subscribe({
      next: (r) => {
        const data = r?.data ?? r;
        this.tasa.set(data);
        this.loaded.set(true);
      }
    });
  }
  /** Convierte USD a Bs usando la tasa activa */
  toBs(usd) {
    return usd * this.rate();
  }
  /** Formatea valor en Bs */
  formatBs(usd) {
    const bs = this.toBs(usd);
    return `Bs ${bs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  formatBsDirect(bs) {
    return `Bs ${Number(bs).toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  static \u0275fac = function TasaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TasaService, factory: _TasaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TasaService
};
//# sourceMappingURL=chunk-XGLCC3KY.js.map
