import {
  HttpClient,
  Injectable,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6L3J4MHE.js";

// src/app/pages/usuarios/services/usuarios.service.ts
var UsuariosService = class _UsuariosService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/users`;
  extractArray(response) {
    if (Array.isArray(response))
      return response;
    return Array.isArray(response?.data) ? response.data : [];
  }
  extractItem(response) {
    if (response?.data !== void 0)
      return response.data;
    return response;
  }
  obtenerUsuarios(role) {
    const params = {};
    if (role)
      params["role"] = role;
    return this.http.get(this.apiUrl, { params }).pipe(map((r) => this.extractArray(r)));
  }
  obtenerUsuarioPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(map((r) => this.extractItem(r)));
  }
  crearUsuario(payload) {
    return this.http.post(this.apiUrl, payload).pipe(map((r) => this.extractItem(r)));
  }
  editarUsuario(id, payload) {
    return this.http.patch(`${this.apiUrl}/${id}`, payload).pipe(map((r) => this.extractItem(r)));
  }
  eliminarUsuario(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function UsuariosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuariosService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuariosService, factory: _UsuariosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  UsuariosService
};
//# sourceMappingURL=chunk-J3XAW4YV.js.map
