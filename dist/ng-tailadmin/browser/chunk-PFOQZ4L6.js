import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/shared/services/files.service.ts
var FilesService = class _FilesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/files`;
  /** Full absolute URL for a stored file */
  absoluteUrl(relativeUrl) {
    if (!relativeUrl)
      return "";
    if (relativeUrl.startsWith("http"))
      return relativeUrl;
    const apiBase = environment.apiUrl.replace("/api", "");
    return `${apiBase}${relativeUrl}`;
  }
  upload(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.base}/upload`, fd);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static \u0275fac = function FilesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FilesService, factory: _FilesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FilesService
};
//# sourceMappingURL=chunk-PFOQZ4L6.js.map
