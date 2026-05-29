import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X6ED7CSN.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/destinos-admin/lista-destinos-admin.component.ts
function ListaDestinosAdminComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r0.successMessage, " ");
  }
}
function ListaDestinosAdminComponent_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.errorMessage, " ");
  }
}
function ListaDestinosAdminComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275template(5, ListaDestinosAdminComponent_div_11_div_5_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20)(8, "label", 21);
    \u0275\u0275text(9, "Nombre ");
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ListaDestinosAdminComponent_div_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 21);
    \u0275\u0275text(15, "Estado ");
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ListaDestinosAdminComponent_div_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.state, $event) || (ctx_r0.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 21);
    \u0275\u0275text(21, "\xCDcono (emoji)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ListaDestinosAdminComponent_div_11_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.icon, $event) || (ctx_r0.form.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 26)(24, "label", 21);
    \u0275\u0275text(25, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ListaDestinosAdminComponent_div_11_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 28)(28, "button", 29);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 30);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_11_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(31, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingId ? "Editar destino" : "Nuevo destino", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.icon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Guardando..." : ctx_r0.editingId ? "Actualizar" : "Crear destino", " ");
  }
}
function ListaDestinosAdminComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Cargando destinos...");
    \u0275\u0275elementEnd();
  }
}
function ListaDestinosAdminComponent_div_16_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 52)(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 47)(14, "div", 54)(15, "button", 55);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_16_tr_21_Template_button_click_15_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(d_r5));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 56);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_16_tr_21_Template_button_click_17_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(d_r5));
    });
    \u0275\u0275text(18, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 57);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_16_tr_21_Template_button_click_19_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(d_r5));
    });
    \u0275\u0275text(20, " Eliminar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275classProp("opacity-50", !d_r5.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r5.description ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-green-100", d_r5.isActive)("text-green-700", d_r5.isActive)("bg-gray-100", !d_r5.isActive)("text-gray-500", !d_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r5.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-amber-200", d_r5.isActive)("text-amber-600", d_r5.isActive)("border-green-200", !d_r5.isActive)("text-green-600", !d_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r5.isActive ? "Desactivar" : "Activar", " ");
  }
}
function ListaDestinosAdminComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3", 16);
    \u0275\u0275text(3, "Lista de destinos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "table", 37)(8, "thead", 38)(9, "tr")(10, "th", 39);
    \u0275\u0275text(11, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 39);
    \u0275\u0275text(13, "Estado (VE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 39);
    \u0275\u0275text(15, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17, "Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 41);
    \u0275\u0275text(19, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody", 42);
    \u0275\u0275template(21, ListaDestinosAdminComponent_div_16_tr_21_Template, 21, 24, "tr", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 44)(23, "p", 35);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 45)(26, "button", 46);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_16_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(27, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 46);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_16_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(29, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.paginados)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
function ListaDestinosAdminComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 60);
    \u0275\u0275text(4, "Sin destinos registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Agrega islas y destinos para que los clientes puedan buscar y reservar viajes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function ListaDestinosAdminComponent_div_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNew());
    });
    \u0275\u0275text(8, " + Agregar primer destino ");
    \u0275\u0275elementEnd()();
  }
}
var ListaDestinosAdminComponent = class _ListaDestinosAdminComponent {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/destinations`;
  loading = true;
  submitting = false;
  showForm = false;
  editingId = null;
  errorMessage = "";
  successMessage = "";
  destinos = [];
  search = "";
  page = 1;
  limit = 10;
  form = this.emptyForm();
  get filteredDestinos() {
    const term = this.search.trim().toLowerCase();
    if (!term)
      return this.destinos;
    return this.destinos.filter((d) => d.name.toLowerCase().includes(term) || d.state.toLowerCase().includes(term) || (d.description ?? "").toLowerCase().includes(term));
  }
  get total() {
    return this.filteredDestinos.length;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.limit));
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  get paginados() {
    return this.filteredDestinos.slice((this.page - 1) * this.limit, this.page * this.limit);
  }
  cambiarPagina(n) {
    if (n >= 1 && n <= this.totalPages)
      this.page = n;
  }
  onSearchChange() {
    this.page = 1;
  }
  trackById(_, d) {
    return d.id;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.http.get(this.base).pipe(map((r) => Array.isArray(r) ? r : r?.data ?? [])).subscribe({
      next: (d) => {
        this.destinos = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openNew() {
    this.editingId = null;
    this.form = this.emptyForm();
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  openEdit(d) {
    this.editingId = d.id;
    this.form = { name: d.name, state: d.state, icon: d.icon, description: d.description ?? "" };
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  cancel() {
    this.showForm = false;
    this.editingId = null;
    this.form = this.emptyForm();
  }
  save() {
    if (!this.form.name.trim() || !this.form.state.trim()) {
      this.errorMessage = "Nombre y estado son obligatorios.";
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    const body = __spreadProps(__spreadValues({}, this.form), { description: this.form.description || null });
    const req$ = this.editingId ? this.http.patch(`${this.base}/${this.editingId}`, body).pipe(map((r) => r?.data ?? r)) : this.http.post(this.base, body).pipe(map((r) => r?.data ?? r));
    req$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.destinos = this.destinos.map((d) => d.id === this.editingId ? saved : d);
          this.successMessage = "Destino actualizado.";
        } else {
          this.destinos = [saved, ...this.destinos];
          this.successMessage = "Destino creado.";
        }
        this.submitting = false;
        this.cancel();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al guardar.";
        this.submitting = false;
      }
    });
  }
  toggleActive(d) {
    this.http.patch(`${this.base}/${d.id}`, { isActive: !d.isActive }).pipe(map((r) => r?.data ?? r)).subscribe({
      next: (updated) => {
        this.destinos = this.destinos.map((x) => x.id === updated.id ? updated : x);
      }
    });
  }
  delete(d) {
    if (!confirm(`\xBFEliminar "${d.name}"?`))
      return;
    this.http.delete(`${this.base}/${d.id}`).subscribe({
      next: () => {
        this.destinos = this.destinos.filter((x) => x.id !== d.id);
      }
    });
  }
  emptyForm() {
    return { name: "", state: "", icon: "\u{1F3DD}\uFE0F", description: "" };
  }
  static \u0275fac = function ListaDestinosAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaDestinosAdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaDestinosAdminComponent, selectors: [["app-lista-destinos-admin"]], decls: 18, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-5", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"], ["class", "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "lg:flex-row"], ["type", "text", "placeholder", "Buscar por nombre, estado o descripci\xF3n...", 1, "h-11", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-800/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "p-6"], ["class", "mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2", "lg:grid-cols-4"], [1, "lg:col-span-2"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], ["type", "text", "placeholder", "ej. Morrocoy", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ej. Falc\xF3n", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u{1F3DD}\uFE0F", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "lg:col-span-4"], ["rows", "2", "placeholder", "Descripci\xF3n corta del destino...", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "mt-6", "flex", "gap-3"], [1, "rounded-lg", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "click"], [1, "mb-5", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-4", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-4", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-4", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], [3, "opacity-50", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "mr-2", "text-lg"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-4", "text-gray-400", "dark:text-gray-500", "text-xs", "max-w-xs", "truncate"], [1, "px-5", "py-4", "text-center"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "rounded-lg", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "click"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:border-red-300", "hover:bg-red-50", "transition", "dark:border-gray-700", 3, "click"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "mt-5", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"]], template: function ListaDestinosAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u{1F3DD}\uFE0F Destinos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Islas y destinos tur\xEDsticos disponibles en la plataforma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ListaDestinosAdminComponent_Template_button_click_8_listener() {
        return ctx.openNew();
      });
      \u0275\u0275text(9, " + Nuevo destino ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ListaDestinosAdminComponent_div_10_Template, 2, 1, "div", 6)(11, ListaDestinosAdminComponent_div_11_Template, 32, 8, "div", 7);
      \u0275\u0275elementStart(12, "div", 1)(13, "div", 8)(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ListaDestinosAdminComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaDestinosAdminComponent_Template_input_ngModelChange_14_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ListaDestinosAdminComponent_div_15_Template, 2, 0, "div", 10)(16, ListaDestinosAdminComponent_div_16_Template, 30, 9, "div", 11)(17, ListaDestinosAdminComponent_div_17_Template, 9, 0, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredDestinos.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredDestinos.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaDestinosAdminComponent, [{
    type: Component,
    args: [{ selector: "app-lista-destinos-admin", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F3DD}\uFE0F Destinos</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Islas y destinos tur\xEDsticos disponibles en la plataforma</p>
      </div>
      <button (click)="openNew()"
        class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
        + Nuevo destino
      </button>
    </div>
  </div>

  <!-- Success -->
  <div *ngIf="successMessage"
    class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400">
    \u2713 {{ successMessage }}
  </div>

  <!-- Form -->
  <div *ngIf="showForm" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
      <h2 class="text-base font-semibold text-gray-800 dark:text-white/90">
        {{ editingId ? 'Editar destino' : 'Nuevo destino' }}
      </h2>
    </div>
    <div class="p-6">
      <div *ngIf="errorMessage"
        class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
        \u26A0\uFE0F {{ errorMessage }}
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nombre <span class="text-red-500">*</span></label>
          <input type="text" [(ngModel)]="form.name" placeholder="ej. Morrocoy"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Estado <span class="text-red-500">*</span></label>
          <input type="text" [(ngModel)]="form.state" placeholder="ej. Falc\xF3n"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">\xCDcono (emoji)</label>
          <input type="text" [(ngModel)]="form.icon" placeholder="\u{1F3DD}\uFE0F"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div class="lg:col-span-4">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Descripci\xF3n</label>
          <textarea [(ngModel)]="form.description" rows="2" placeholder="Descripci\xF3n corta del destino..."
            class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"></textarea>
        </div>
      </div>

      <div class="mt-6 flex gap-3">
        <button (click)="save()" [disabled]="submitting"
          class="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:opacity-50 transition-colors">
          {{ submitting ? 'Guardando...' : (editingId ? 'Actualizar' : 'Crear destino') }}
        </button>
        <button (click)="cancel()" type="button"
          class="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]">
          Cancelar
        </button>
      </div>
    </div>
  </div>

  <!-- Filter -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row">
      <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por nombre, estado o descripci\xF3n..."
        class="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando destinos...</div>

  <!-- Table -->
  <div *ngIf="!loading && filteredDestinos.length > 0"
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de destinos</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-400">Destino</th>
            <th class="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-400">Estado (VE)</th>
            <th class="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-400">Descripci\xF3n</th>
            <th class="px-5 py-4 text-center text-xs font-semibold uppercase text-gray-400">Activo</th>
            <th class="px-5 py-4 text-right text-xs font-semibold uppercase text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let d of paginados; trackBy: trackById" [class.opacity-50]="!d.isActive">
            <td class="px-5 py-4">
              <span class="mr-2 text-lg">{{ d.icon }}</span>
              <span class="font-medium text-gray-800 dark:text-white/90">{{ d.name }}</span>
            </td>
            <td class="px-5 py-4 text-gray-500 dark:text-gray-400">{{ d.state }}</td>
            <td class="px-5 py-4 text-gray-400 dark:text-gray-500 text-xs max-w-xs truncate">
              {{ d.description ?? '\u2014' }}
            </td>
            <td class="px-5 py-4 text-center">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold"
                [class.bg-green-100]="d.isActive" [class.text-green-700]="d.isActive"
                [class.bg-gray-100]="!d.isActive" [class.text-gray-500]="!d.isActive">
                {{ d.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-end gap-2">
                <button (click)="toggleActive(d)"
                  class="rounded-lg border px-3 py-1.5 text-xs font-medium transition"
                  [class.border-amber-200]="d.isActive" [class.text-amber-600]="d.isActive"
                  [class.border-green-200]="!d.isActive" [class.text-green-600]="!d.isActive">
                  {{ d.isActive ? 'Desactivar' : 'Activar' }}
                </button>
                <button (click)="openEdit(d)"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
                  Editar
                </button>
                <button (click)="delete(d)"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:border-red-300 hover:bg-red-50 transition dark:border-gray-700">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-between border-t border-gray-100 px-5 py-4 dark:border-gray-800">
      <p class="text-sm text-gray-500">P\xE1gina {{ page }} de {{ totalPages }}</p>
      <div class="flex gap-2">
        <button (click)="cambiarPagina(page - 1)" [disabled]="page === 1" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Anterior</button>
        <button (click)="cambiarPagina(page + 1)" [disabled]="page === totalPages || total === 0" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Siguiente</button>
      </div>
    </div>
  </div>

  <div *ngIf="!loading && filteredDestinos.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u{1F3DD}\uFE0F</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin destinos registrados</h3>
    <p class="mt-2 text-sm text-gray-500">Agrega islas y destinos para que los clientes puedan buscar y reservar viajes.</p>
    <button (click)="openNew()" class="mt-5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
      + Agregar primer destino
    </button>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaDestinosAdminComponent, { className: "ListaDestinosAdminComponent", filePath: "src/app/pages/destinos-admin/lista-destinos-admin.component.ts", lineNumber: 30 });
})();
export {
  ListaDestinosAdminComponent
};
//# sourceMappingURL=chunk-5KNHTL5B.js.map
