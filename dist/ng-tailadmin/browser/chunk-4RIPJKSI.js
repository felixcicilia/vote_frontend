import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X6ED7CSN.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/pages/embarcaciones/pages/lista-embarcaciones/lista-embarcaciones.component.ts
var _c0 = (a0) => ["/embarcaciones/editar", a0];
function ListaEmbarcacionesComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiar());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function ListaEmbarcacionesComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Cargando embarcaciones... ");
    \u0275\u0275elementEnd();
  }
}
function ListaEmbarcacionesComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ListaEmbarcacionesComponent_div_57_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 47)(13, "span", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 47)(16, "div", 52)(17, "span", 51);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td", 47)(22, "div", 53)(23, "a", 54);
    \u0275\u0275text(24, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 55);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_div_57_tr_26_Template_button_click_25_listener() {
      const e_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminar(e_r5));
    });
    \u0275\u0275text(26, " Eliminar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r5.licensePlate || "Sin matr\xEDcula", " \xB7 A\xF1o ", e_r5.year || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tipoLabel(e_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r5.capacity, " personas");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", e_r5.pricePerDay ? "$" + e_r5.pricePerDay + "/d\xEDa" : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.estadoClase(e_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estadoLabel(e_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.verificacionClase(e_r5.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verificacionLabel(e_r5.verificationStatus), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", e_r5.isAvailable ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" : "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r5.isAvailable ? "Disponible" : "No disponible", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, e_r5.id));
  }
}
function ListaEmbarcacionesComponent_div_57_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2, "No se encontraron embarcaciones.");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmbarcacionesComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "h3", 34);
    \u0275\u0275text(4, "Lista de embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 36)(8, "table", 37)(9, "thead")(10, "tr", 38)(11, "th", 39);
    \u0275\u0275text(12, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 39);
    \u0275\u0275text(14, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 39);
    \u0275\u0275text(16, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 39);
    \u0275\u0275text(18, "Precio/d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 39);
    \u0275\u0275text(20, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 39);
    \u0275\u0275text(22, "Verificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 40);
    \u0275\u0275text(24, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, ListaEmbarcacionesComponent_div_57_tr_26_Template, 27, 15, "tr", 41)(27, ListaEmbarcacionesComponent_div_57_tr_27_Template, 3, 0, "tr", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 43)(29, "p", 44);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 45)(32, "button", 46);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_div_57_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page - 1));
    });
    \u0275\u0275text(33, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 46);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_div_57_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page + 1));
    });
    \u0275\u0275text(35, " Siguiente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("Mostrando ", ctx_r1.rangoInicio, "-", ctx_r1.rangoFin, " de ", ctx_r1.total);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.paginadas)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginadas.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.page, " de ", ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === ctx_r1.totalPages || ctx_r1.total === 0);
  }
}
var ListaEmbarcacionesComponent = class _ListaEmbarcacionesComponent {
  service = inject(EmbarcacionesService);
  loading = false;
  errorMessage = "";
  embarcaciones = [];
  filtradas = [];
  paginadas = [];
  search = "";
  filtroTipo = "";
  filtroEstado = "";
  filtroVerificacion = "";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.errorMessage = "";
    this.service.getAll().subscribe({
      next: (data) => {
        this.embarcaciones = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la lista de embarcaciones.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const term = this.search.trim().toLowerCase();
    this.filtradas = this.embarcaciones.filter((e) => {
      const busqueda = e.name.toLowerCase().includes(term) || (e.licensePlate ?? "").toLowerCase().includes(term) || (e.description ?? "").toLowerCase().includes(term);
      const tipo = !this.filtroTipo || e.type === this.filtroTipo;
      const estado = !this.filtroEstado || e.status === this.filtroEstado;
      const verificacion = !this.filtroVerificacion || e.verificationStatus === this.filtroVerificacion;
      return busqueda && tipo && estado && verificacion;
    });
    this.total = this.filtradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages)
      this.page = this.totalPages;
    if (this.page < 1)
      this.page = 1;
    this.actualizarPaginacion();
  }
  actualizarPaginacion() {
    const start = (this.page - 1) * this.limit;
    this.paginadas = this.filtradas.slice(start, start + this.limit);
  }
  onSearchChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  onFilterChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  cambiarPagina(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.page = p;
    this.actualizarPaginacion();
  }
  limpiar() {
    this.search = "";
    this.filtroTipo = "";
    this.filtroEstado = "";
    this.filtroVerificacion = "";
    this.page = 1;
    this.aplicarFiltros();
  }
  eliminar(e) {
    if (!confirm(`\xBFEliminar "${e.name}"?`))
      return;
    this.service.delete(e.id).subscribe({
      next: () => {
        this.embarcaciones = this.embarcaciones.filter((x) => x.id !== e.id);
        this.aplicarFiltros();
      },
      error: () => alert("No se pudo eliminar la embarcaci\xF3n.")
    });
  }
  tipoLabel(t) {
    const map = {
      LANCHA: "Lancha",
      YATE: "Yate",
      CATAMARAN: "Catamar\xE1n",
      BOTE: "Bote"
    };
    return map[t] ?? t;
  }
  estadoClase(s) {
    return s === "ACTIVE" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : s === "MAINTENANCE" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400" : "bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400";
  }
  estadoLabel(s) {
    return s === "ACTIVE" ? "Activa" : s === "MAINTENANCE" ? "Mantenimiento" : "Inactiva";
  }
  verificacionClase(s) {
    return s === "APPROVED" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : s === "REJECTED" ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
  }
  verificacionLabel(s) {
    return s === "APPROVED" ? "\u2713 Aprobada" : s === "REJECTED" ? "\u2717 Rechazada" : "\u23F3 Pendiente";
  }
  get hayFiltros() {
    return !!(this.search || this.filtroTipo || this.filtroEstado || this.filtroVerificacion);
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, e) {
    return e.id;
  }
  static \u0275fac = function ListaEmbarcacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaEmbarcacionesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaEmbarcacionesComponent, selectors: [["app-lista-embarcaciones"]], decls: 58, vars: 8, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/embarcaciones/crear", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end"], [1, "w-full", "lg:max-w-md"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["type", "text", "placeholder", "Nombre, matr\xEDcula, descripci\xF3n...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "w-full", "lg:w-48"], [1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "LANCHA"], ["value", "YATE"], ["value", "CATAMARAN"], ["value", "BOTE"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["value", "MAINTENANCE"], [1, "w-full", "lg:w-52"], ["value", "PENDING"], ["value", "APPROVED"], ["value", "REJECTED"], ["class", "h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4", "border-t", "border-gray-100", "px-5", "py-4", "md:flex-row", "md:items-center", "md:justify-between", "dark:border-gray-800"], [1, "text-sm", "text-gray-500"], [1, "flex", "items-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-500"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "routerLink"], [1, "rounded-lg", "border", "border-red-300", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "dark:border-red-800", "dark:text-red-400", 3, "click"], ["colspan", "7", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaEmbarcacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Embarcaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Gestiona la flota de embarcaciones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Nueva embarcaci\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 1)(11, "div", 6)(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_input_ngModelChange_15_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "label", 8);
      \u0275\u0275text(18, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroTipo, $event) || (ctx.filtroTipo = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_19_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Lancha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Yate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 15);
      \u0275\u0275text(27, "Catamar\xE1n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 16);
      \u0275\u0275text(29, "Bote");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 10)(31, "label", 8);
      \u0275\u0275text(32, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_33_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(34, "option", 12);
      \u0275\u0275text(35, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 17);
      \u0275\u0275text(37, "Activa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 18);
      \u0275\u0275text(39, "Inactiva");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 19);
      \u0275\u0275text(41, "Mantenimiento");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 20)(43, "label", 8);
      \u0275\u0275text(44, "Verificaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroVerificacion, $event) || (ctx.filtroVerificacion = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_45_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(46, "option", 12);
      \u0275\u0275text(47, "Todas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 21);
      \u0275\u0275text(49, "\u23F3 Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 22);
      \u0275\u0275text(51, "\u2713 Aprobada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 23);
      \u0275\u0275text(53, "\u2717 Rechazada");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(54, ListaEmbarcacionesComponent_button_54_Template, 2, 0, "button", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, ListaEmbarcacionesComponent_div_55_Template, 2, 0, "div", 25)(56, ListaEmbarcacionesComponent_div_56_Template, 2, 1, "div", 26)(57, ListaEmbarcacionesComponent_div_57_Template, 36, 10, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroTipo);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroVerificacion);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.hayFiltros);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaEmbarcacionesComponent, [{
    type: Component,
    args: [{ selector: "app-lista-embarcaciones", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Embarcaciones</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona la flota de embarcaciones.</p>
      </div>
      <a routerLink="/embarcaciones/crear"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
        Nueva embarcaci\xF3n
      </a>
    </div>
  </div>

  <!-- Filtros -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end">
      <div class="w-full lg:max-w-md">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Buscar</label>
        <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()"
          placeholder="Nombre, matr\xEDcula, descripci\xF3n..."
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div class="w-full lg:w-48">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo</label>
        <select [(ngModel)]="filtroTipo" (ngModelChange)="onFilterChange()"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option value="">Todos</option>
          <option value="LANCHA">Lancha</option>
          <option value="YATE">Yate</option>
          <option value="CATAMARAN">Catamar\xE1n</option>
          <option value="BOTE">Bote</option>
        </select>
      </div>
      <div class="w-full lg:w-48">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
        <select [(ngModel)]="filtroEstado" (ngModelChange)="onFilterChange()"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option value="">Todos</option>
          <option value="ACTIVE">Activa</option>
          <option value="INACTIVE">Inactiva</option>
          <option value="MAINTENANCE">Mantenimiento</option>
        </select>
      </div>
      <div class="w-full lg:w-52">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Verificaci\xF3n</label>
        <select [(ngModel)]="filtroVerificacion" (ngModelChange)="onFilterChange()"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option value="">Todas</option>
          <option value="PENDING">\u23F3 Pendiente</option>
          <option value="APPROVED">\u2713 Aprobada</option>
          <option value="REJECTED">\u2717 Rechazada</option>
        </select>
      </div>
      <button *ngIf="hayFiltros" (click)="limpiar()"
        class="h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
        Limpiar
      </button>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando embarcaciones...
  </div>

  <!-- Error -->
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <!-- Tabla -->
  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de embarcaciones</h3>
        <span class="text-sm text-gray-500 dark:text-gray-400">Mostrando {{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Tipo</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Capacidad</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Precio/d\xEDa</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Verificaci\xF3n</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let e of paginadas; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4">
              <div class="font-medium text-gray-800 dark:text-white/90">{{ e.name }}</div>
              <div class="text-xs text-gray-500">{{ e.licensePlate || 'Sin matr\xEDcula' }} \xB7 A\xF1o {{ e.year || '-' }}</div>
            </td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ tipoLabel(e.type) }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ e.capacity }} personas</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {{ e.pricePerDay ? ('$' + e.pricePerDay + '/d\xEDa') : '\u2014' }}
            </td>
            <td class="px-5 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="estadoClase(e.status)">
                {{ estadoLabel(e.status) }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex flex-col gap-1">
                <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="verificacionClase(e.verificationStatus)">
                  {{ verificacionLabel(e.verificationStatus) }}
                </span>
                <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
                  [ngClass]="e.isAvailable ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400'">
                  {{ e.isAvailable ? 'Disponible' : 'No disponible' }}
                </span>
              </div>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <a [routerLink]="['/embarcaciones/editar', e.id]"
                  class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
                  Editar
                </a>
                <button (click)="eliminar(e)"
                  class="rounded-lg border border-red-300 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="paginadas.length === 0">
            <td colspan="7" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron embarcaciones.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginaci\xF3n -->
    <div class="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 md:flex-row md:items-center md:justify-between dark:border-gray-800">
      <p class="text-sm text-gray-500">P\xE1gina {{ page }} de {{ totalPages }}</p>
      <div class="flex items-center gap-2">
        <button (click)="cambiarPagina(page - 1)" [disabled]="page === 1"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">
          Anterior
        </button>
        <button (click)="cambiarPagina(page + 1)" [disabled]="page === totalPages || total === 0"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">
          Siguiente
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaEmbarcacionesComponent, { className: "ListaEmbarcacionesComponent", filePath: "src/app/pages/embarcaciones/pages/lista-embarcaciones/lista-embarcaciones.component.ts", lineNumber: 15 });
})();
export {
  ListaEmbarcacionesComponent
};
//# sourceMappingURL=chunk-4RIPJKSI.js.map
