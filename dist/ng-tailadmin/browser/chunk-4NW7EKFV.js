import {
  TasasService
} from "./chunk-MEPPWYZC.js";
import {
  UserRole
} from "./chunk-TD6O4IY7.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/tasas/pages/lista-tasas/lista-tasas.component.ts
var _c0 = (a0) => ["/tasas/editar", a0];
function ListaTasasComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " \u{1F441}\uFE0F Solo visualizaci\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasasComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, " Crear tasa ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasasComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getEstadoClase(ctx_r0.tasaActiva.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getEstadoTexto(ctx_r0.tasaActiva.isActive), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tasaActiva.source || "Sin fuente", " ");
  }
}
function ListaTasasComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ListaTasasComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.limpiarBusqueda());
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasasComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Cargando tasas... ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasasComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ListaTasasComponent_div_52_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, " Acciones ");
    \u0275\u0275elementEnd();
  }
}
function ListaTasasComponent_div_52_tr_23_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 50)(1, "div", 57)(2, "button", 58);
    \u0275\u0275listener("click", function ListaTasasComponent_div_52_tr_23_td_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const tasa_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activarTasa(tasa_r5));
    });
    \u0275\u0275text(3, " Activar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 59);
    \u0275\u0275text(5, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function ListaTasasComponent_div_52_tr_23_td_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const tasa_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminarTasa(tasa_r5));
    });
    \u0275\u0275text(7, " Borrar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tasa_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", tasa_r5.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, tasa_r5.id));
  }
}
function ListaTasasComponent_div_52_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 50)(13, "span", 55);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ListaTasasComponent_div_52_tr_23_td_15_Template, 8, 4, "td", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tasa_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", tasa_r5.baseCurrency, " \u2192 ", tasa_r5.targetCurrency, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ID: ", tasa_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatearNumero(tasa_r5.rate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatearFecha(tasa_r5.effectiveDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tasa_r5.source || "Sin fuente", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getEstadoClase(tasa_r5.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getEstadoTexto(tasa_r5.isActive), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isMaster);
  }
}
function ListaTasasComponent_div_52_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275text(2, " No se encontraron tasas registradas. ");
    \u0275\u0275elementEnd()();
  }
}
function ListaTasasComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "h3", 38);
    \u0275\u0275text(4, " Lista de tasas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 39)(8, "table", 40)(9, "thead")(10, "tr", 41)(11, "th", 42);
    \u0275\u0275text(12, " Monedas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 42);
    \u0275\u0275text(14, " Tasa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 42);
    \u0275\u0275text(16, " Fecha efectiva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 42);
    \u0275\u0275text(18, " Fuente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 42);
    \u0275\u0275text(20, " Estado ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ListaTasasComponent_div_52_th_21_Template, 2, 0, "th", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ListaTasasComponent_div_52_tr_23_Template, 16, 9, "tr", 44)(24, ListaTasasComponent_div_52_tr_24_Template, 3, 0, "tr", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 46)(26, "p", 8);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 47)(29, "button", 48);
    \u0275\u0275listener("click", function ListaTasasComponent_div_52_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(30, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 48);
    \u0275\u0275listener("click", function ListaTasasComponent_div_52_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(32, " Siguiente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Mostrando ", ctx_r0.rangoInicio, " - ", ctx_r0.rangoFin, " de ", ctx_r0.total, " registros ");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.isMaster);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tasasPaginadas)("ngForTrackBy", ctx_r0.trackByTasa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tasasPaginadas.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
var ListaTasasComponent = class _ListaTasasComponent {
  tasasService = inject(TasasService);
  auth = inject(AuthService);
  get isMaster() {
    return this.auth.hasRole(UserRole.MASTER);
  }
  loading = false;
  loadingActiva = false;
  errorMessage = "";
  tasas = [];
  tasasFiltradas = [];
  tasasPaginadas = [];
  tasaActiva = null;
  search = "";
  filtroEstado = "TODAS";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  ngOnInit() {
    this.cargarTasas();
    this.cargarTasaActiva();
  }
  cargarTasas() {
    this.loading = true;
    this.errorMessage = "";
    this.tasasService.obtenerTodas().subscribe({
      next: (response) => {
        this.tasas = response ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error cargando tasas:", error);
        this.errorMessage = "No se pudo cargar la lista de tasas.";
        this.loading = false;
      }
    });
  }
  cargarTasaActiva() {
    this.loadingActiva = true;
    this.tasasService.obtenerActivaUsdBs().subscribe({
      next: (response) => {
        this.tasaActiva = response;
        this.loadingActiva = false;
      },
      error: (error) => {
        console.error("No se pudo cargar la tasa activa:", error);
        this.tasaActiva = null;
        this.loadingActiva = false;
      }
    });
  }
  aplicarFiltros() {
    const termino = this.search.trim().toLowerCase();
    this.tasasFiltradas = this.tasas.filter((tasa) => {
      const coincideBusqueda = tasa.baseCurrency.toLowerCase().includes(termino) || tasa.targetCurrency.toLowerCase().includes(termino) || String(tasa.rate).toLowerCase().includes(termino) || (tasa.source ?? "").toLowerCase().includes(termino) || (tasa.observacion ?? "").toLowerCase().includes(termino) || tasa.effectiveDate.toLowerCase().includes(termino);
      const coincideEstado = this.filtroEstado === "TODAS" || this.filtroEstado === "ACTIVAS" && tasa.isActive || this.filtroEstado === "INACTIVAS" && !tasa.isActive;
      return coincideBusqueda && coincideEstado;
    });
    this.total = this.tasasFiltradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
    if (this.page < 1) {
      this.page = 1;
    }
    this.actualizarPaginacion();
  }
  actualizarPaginacion() {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    this.tasasPaginadas = this.tasasFiltradas.slice(start, end);
  }
  onSearchChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  onFilterChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  cambiarPagina(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.page = page;
    this.actualizarPaginacion();
  }
  activarTasa(tasa) {
    if (tasa.isActive)
      return;
    const confirmado = window.confirm(`\xBFSeguro que deseas activar la tasa #${tasa.id}? Esto desactivar\xE1 la anterior.`);
    if (!confirmado)
      return;
    this.tasasService.activar(tasa.id).subscribe({
      next: () => {
        this.cargarTasas();
        this.cargarTasaActiva();
      },
      error: (error) => {
        console.error("Error activando tasa:", error);
        alert("No se pudo activar la tasa.");
      }
    });
  }
  eliminarTasa(tasa) {
    const confirmado = window.confirm(`\xBFSeguro que deseas eliminar la tasa #${tasa.id}?`);
    if (!confirmado)
      return;
    this.tasasService.eliminar(tasa.id).subscribe({
      next: () => {
        this.tasas = this.tasas.filter((item) => item.id !== tasa.id);
        this.aplicarFiltros();
        if (this.tasaActiva?.id === tasa.id) {
          this.cargarTasaActiva();
        }
      },
      error: (error) => {
        console.error("Error eliminando tasa:", error);
        alert("No se pudo eliminar la tasa.");
      }
    });
  }
  limpiarBusqueda() {
    this.search = "";
    this.filtroEstado = "TODAS";
    this.page = 1;
    this.aplicarFiltros();
  }
  formatearFecha(value) {
    if (!value)
      return "-";
    return new Intl.DateTimeFormat("es-VE", {
      dateStyle: "medium"
    }).format(new Date(value));
  }
  formatearNumero(value) {
    const numericValue = Number(value ?? 0);
    return new Intl.NumberFormat("es-VE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    }).format(numericValue);
  }
  getEstadoClase(isActive) {
    return isActive ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400";
  }
  getEstadoTexto(isActive) {
    return isActive ? "Activa" : "Inactiva";
  }
  get rangoInicio() {
    if (this.total === 0)
      return 0;
    return (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    const fin = this.page * this.limit;
    return fin > this.total ? this.total : fin;
  }
  trackByTasa(_, tasa) {
    return tasa.id;
  }
  static \u0275fac = function ListaTasasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaTasasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTasasComponent, selectors: [["app-lista-tasas"]], decls: 53, vars: 16, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400", 4, "ngIf"], ["routerLink", "/tasas/crear", "class", "inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-2", "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "text-right", 4, "ngIf"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-end"], [1, "w-full", "lg:max-w-md"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "relative"], ["type", "text", "placeholder", "Buscar por moneda, tasa, fuente, observaci\xF3n o fecha", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "pr-10", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-red-500", 3, "click", 4, "ngIf"], [1, "w-full", "lg:w-56"], [1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", "TODAS"], ["value", "ACTIVAS"], ["value", "INACTIVAS"], [1, "w-full", "lg:w-48", "lg:ml-auto"], [3, "ngValue"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-amber-200", "bg-amber-50", "px-4", "py-2", "text-sm", "font-medium", "text-amber-700", "dark:border-amber-500/30", "dark:bg-amber-500/10", "dark:text-amber-400"], ["routerLink", "/tasas/crear", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600"], [1, "text-right"], [1, "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "mt-2", "text-xs", "text-gray-500", "dark:text-gray-400"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-sm", "text-gray-400", "hover:text-red-500", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], ["class", "px-5 py-3 text-center text-xs font-medium text-gray-500", 4, "ngIf"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4", "border-t", "border-gray-100", "px-5", "py-4", "md:flex-row", "md:items-center", "md:justify-between", "dark:border-gray-800"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-4"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-4", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], ["class", "px-5 py-4", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "justify-center", "gap-2"], ["type", "button", 1, "rounded-lg", "border", "border-green-300", "px-3", "py-2", "text-xs", "font-medium", "text-green-700", "hover:bg-green-50", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:border-green-800", "dark:text-green-400", "dark:hover:bg-green-500/10", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "routerLink"], ["type", "button", 1, "rounded-lg", "border", "border-red-300", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "dark:border-red-800", "dark:text-red-400", "dark:hover:bg-red-500/10", 3, "click"], ["colspan", "6", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500", "dark:text-gray-400"]], template: function ListaTasasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Tasas de cambio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Gestiona las tasas registradas para operaciones del sistema. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ListaTasasComponent_span_8_Template, 2, 0, "span", 5)(9, ListaTasasComponent_a_9_Template, 2, 0, "a", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 1)(11, "div", 7)(12, "div")(13, "p", 8);
      \u0275\u0275text(14, " Tasa activa USD \u2192 BS ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h3", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 4);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ListaTasasComponent_div_19_Template, 5, 3, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 1)(21, "div", 11)(22, "div", 12)(23, "label", 13);
      \u0275\u0275text(24, " Buscar tasa ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14)(26, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTasasComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaTasasComponent_Template_input_ngModelChange_26_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, ListaTasasComponent_button_27_Template, 2, 0, "button", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 17)(29, "label", 13);
      \u0275\u0275text(30, " Estado ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTasasComponent_Template_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaTasasComponent_Template_select_ngModelChange_31_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(32, "option", 19);
      \u0275\u0275text(33, "Todas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 20);
      \u0275\u0275text(35, "Activas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 21);
      \u0275\u0275text(37, "Inactivas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 22)(39, "label", 13);
      \u0275\u0275text(40, " Registros por p\xE1gina ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTasasComponent_Template_select_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.limit, $event) || (ctx.limit = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaTasasComponent_Template_select_ngModelChange_41_listener() {
        ctx.page = 1;
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementStart(42, "option", 23);
      \u0275\u0275text(43, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 23);
      \u0275\u0275text(45, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 23);
      \u0275\u0275text(47, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 23);
      \u0275\u0275text(49, "50");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(50, ListaTasasComponent_div_50_Template, 2, 0, "div", 24)(51, ListaTasasComponent_div_51_Template, 2, 1, "div", 25)(52, ListaTasasComponent_div_52_Template, 33, 11, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.isMaster);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMaster);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.loadingActiva ? "Cargando..." : ctx.tasaActiva ? ctx.formatearNumero(ctx.tasaActiva.rate) : "No disponible", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.tasaActiva ? "Fecha efectiva: " + ctx.formatearFecha(ctx.tasaActiva.effectiveDate) : "No hay una tasa activa registrada.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tasaActiva);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.search || ctx.filtroEstado !== "TODAS");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.limit);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", 5);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 50);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaTasasComponent, [{
    type: Component,
    args: [{ selector: "app-lista-tasas", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <!-- Header -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Tasas de cambio
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Gestiona las tasas registradas para operaciones del sistema.
        </p>
      </div>

      <span *ngIf="!isMaster"
        class="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
        \u{1F441}\uFE0F Solo visualizaci\xF3n
      </span>
      <a *ngIf="isMaster"
        routerLink="/tasas/crear"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600"
      >
        Crear tasa
      </a>
    </div>
  </div>

  <!-- Tasa activa -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Tasa activa USD \u2192 BS
        </p>
        <h3 class="mt-2 text-2xl font-bold text-gray-800 dark:text-white/90">
          {{
            loadingActiva
              ? "Cargando..."
              : tasaActiva
                ? formatearNumero(tasaActiva.rate)
                : "No disponible"
          }}
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{
            tasaActiva
              ? "Fecha efectiva: " + formatearFecha(tasaActiva.effectiveDate)
              : "No hay una tasa activa registrada."
          }}
        </p>
      </div>

      <div *ngIf="tasaActiva" class="text-right">
        <span
          class="inline-flex rounded-full px-3 py-1 text-xs font-medium"
          [ngClass]="getEstadoClase(tasaActiva.isActive)"
        >
          {{ getEstadoTexto(tasaActiva.isActive) }}
        </span>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {{ tasaActiva.source || "Sin fuente" }}
        </p>
      </div>
    </div>
  </div>

  <!-- Filtros -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end">
      <div class="w-full lg:max-w-md">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Buscar tasa
        </label>
        <div class="relative">
          <input
            type="text"
            [(ngModel)]="search"
            (ngModelChange)="onSearchChange()"
            placeholder="Buscar por moneda, tasa, fuente, observaci\xF3n o fecha"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
          />

          <button
            *ngIf="search || filtroEstado !== 'TODAS'"
            type="button"
            (click)="limpiarBusqueda()"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-red-500"
          >
            \u2715
          </button>
        </div>
      </div>

      <div class="w-full lg:w-56">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Estado
        </label>
        <select
          [(ngModel)]="filtroEstado"
          (ngModelChange)="onFilterChange()"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option value="TODAS">Todas</option>
          <option value="ACTIVAS">Activas</option>
          <option value="INACTIVAS">Inactivas</option>
        </select>
      </div>

      <div class="w-full lg:w-48 lg:ml-auto">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Registros por p\xE1gina
        </label>
        <select
          [(ngModel)]="limit"
          (ngModelChange)="page = 1; aplicarFiltros()"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option [ngValue]="5">5</option>
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="50">50</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div
    *ngIf="loading"
    class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
  >
    Cargando tasas...
  </div>

  <!-- Error -->
  <div
    *ngIf="!loading && errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
  >
    {{ errorMessage }}
  </div>

  <!-- Tabla -->
  <div
    *ngIf="!loading && !errorMessage"
    class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <div
        class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
      >
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">
          Lista de tasas
        </h3>

        <span class="text-sm text-gray-500 dark:text-gray-400">
          Mostrando {{ rangoInicio }} - {{ rangoFin }} de {{ total }} registros
        </span>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Monedas
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Tasa
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Fecha efectiva
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Fuente
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Estado
            </th>
            <th *ngIf="isMaster" class="px-5 py-3 text-center text-xs font-medium text-gray-500">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            *ngFor="let tasa of tasasPaginadas; trackBy: trackByTasa"
            class="border-b border-gray-100 dark:border-gray-800"
          >
            <td class="px-5 py-4">
              <div class="font-medium text-gray-800 dark:text-white/90">
                {{ tasa.baseCurrency }} \u2192 {{ tasa.targetCurrency }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                ID: {{ tasa.id }}
              </div>
            </td>

            <td
              class="px-5 py-4 text-sm font-semibold text-gray-800 dark:text-white/90"
            >
              {{ formatearNumero(tasa.rate) }}
            </td>

            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {{ formatearFecha(tasa.effectiveDate) }}
            </td>

            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {{ tasa.source || "Sin fuente" }}
            </td>

            <td class="px-5 py-4">
              <span
                class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
                [ngClass]="getEstadoClase(tasa.isActive)"
              >
                {{ getEstadoTexto(tasa.isActive) }}
              </span>
            </td>

            <td *ngIf="isMaster" class="px-5 py-4">
              <div class="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  (click)="activarTasa(tasa)"
                  [disabled]="tasa.isActive"
                  class="rounded-lg border border-green-300 px-3 py-2 text-xs font-medium text-green-700 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-500/10"
                >
                  Activar
                </button>

                <a
                  [routerLink]="['/tasas/editar', tasa.id]"
                  class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                >
                  Editar
                </a>

                <button
                  type="button"
                  (click)="eliminarTasa(tasa)"
                  class="rounded-lg border border-red-300 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-500/10"
                >
                  Borrar
                </button>
              </div>
            </td>
          </tr>

          <tr *ngIf="tasasPaginadas.length === 0">
            <td
              colspan="6"
              class="px-5 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
            >
              No se encontraron tasas registradas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginaci\xF3n -->
    <div
      class="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 md:flex-row md:items-center md:justify-between dark:border-gray-800"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        P\xE1gina {{ page }} de {{ totalPages }}
      </p>

      <div class="flex items-center gap-2">
        <button
          type="button"
          (click)="cambiarPagina(page - 1)"
          [disabled]="page === 1"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300"
        >
          Anterior
        </button>

        <button
          type="button"
          (click)="cambiarPagina(page + 1)"
          [disabled]="page === totalPages || total === 0"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300"
        >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTasasComponent, { className: "ListaTasasComponent", filePath: "src/app/pages/tasas/pages/lista-tasas/lista-tasas.component.ts", lineNumber: 17 });
})();
export {
  ListaTasasComponent
};
//# sourceMappingURL=chunk-4NW7EKFV.js.map
