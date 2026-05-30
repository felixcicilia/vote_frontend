import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VNQE6XX7.js";

// src/app/pages/notificaciones/services/notificaciones.service.ts
var NotificacionesService = class _NotificacionesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/notifications`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getByUser(userId, onlyUnread = false) {
    const params = {};
    if (onlyUnread)
      params["onlyUnread"] = "true";
    return this.http.get(`${this.base}/user/${userId}`, { params }).pipe(map((r) => this.extractArray(r)));
  }
  countUnread(userId) {
    return this.http.get(`${this.base}/user/${userId}/unread-count`).pipe(map((r) => r?.data ?? r));
  }
  markAsRead(id, userId) {
    return this.http.patch(`${this.base}/${id}/read/${userId}`, {}).pipe(map((r) => this.extractItem(r)));
  }
  markAllAsRead(userId) {
    return this.http.patch(`${this.base}/user/${userId}/read-all`, {});
  }
  delete(id, userId) {
    return this.http.delete(`${this.base}/${id}/user/${userId}`);
  }
  static \u0275fac = function NotificacionesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificacionesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificacionesService, factory: _NotificacionesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificacionesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificacionesService
};
//# sourceMappingURL=chunk-RIYDTRC3.js.map
