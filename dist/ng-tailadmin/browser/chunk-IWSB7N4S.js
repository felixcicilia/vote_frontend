import {
  ViajesTaxiService
} from "./chunk-UHBJ7O66.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/viajes-taxi/pages/lista-viajes-taxi/lista-viajes-taxi.component.ts
var _c0 = (a0) => ["/viajes-taxi", a0];
function ListaViajesTaxiComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Cargando viajes...");
    \u0275\u0275elementEnd();
  }
}
function ListaViajesTaxiComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ListaViajesTaxiComponent_div_28_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 37)(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 39)(15, "a", 40);
    \u0275\u0275text(16, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", v_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", v_r3.client.firstName, " ", v_r3.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.originName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.destinationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.passengers);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClase(v_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(v_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, v_r3.id));
  }
}
function ListaViajesTaxiComponent_div_28_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, "No se encontraron viajes.");
    \u0275\u0275elementEnd()();
  }
}
function ListaViajesTaxiComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h3", 22);
    \u0275\u0275text(3, "Lista de viajes taxi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24)(7, "table", 25)(8, "thead")(9, "tr", 26)(10, "th", 27);
    \u0275\u0275text(11, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 27);
    \u0275\u0275text(13, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 27);
    \u0275\u0275text(15, "Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 27);
    \u0275\u0275text(17, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 27);
    \u0275\u0275text(19, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 27);
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 28);
    \u0275\u0275text(23, "Detalle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, ListaViajesTaxiComponent_div_28_tr_25_Template, 17, 11, "tr", 29)(26, ListaViajesTaxiComponent_div_28_tr_26_Template, 3, 0, "tr", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 31)(28, "p", 23);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 32)(31, "button", 33);
    \u0275\u0275listener("click", function ListaViajesTaxiComponent_div_28_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(32, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 33);
    \u0275\u0275listener("click", function ListaViajesTaxiComponent_div_28_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(34, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.paginados)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
var ListaViajesTaxiComponent = class _ListaViajesTaxiComponent {
  service = inject(ViajesTaxiService);
  loading = false;
  errorMessage = "";
  viajes = [];
  filtrados = [];
  paginados = [];
  search = "";
  filtroEstado = "";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.viajes = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar los viajes taxi.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.viajes.filter((v) => {
      const busqueda = v.originName.toLowerCase().includes(t) || v.destinationName.toLowerCase().includes(t) || v.client.firstName.toLowerCase().includes(t);
      const estado = !this.filtroEstado || v.status === this.filtroEstado;
      return busqueda && estado;
    });
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages)
      this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
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
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
      this.aplicarFiltros();
    }
  }
  statusClase(s) {
    if (s === "SEARCHING")
      return "bg-yellow-100 text-yellow-700";
    if (s === "ACCEPTED" || s === "HEADING_TO_CLIENT" || s === "ARRIVED_AT_CLIENT")
      return "bg-blue-100 text-blue-700";
    if (s === "IN_PROGRESS")
      return "bg-purple-100 text-purple-700";
    if (s === "COMPLETED")
      return "bg-green-100 text-green-700";
    if (s === "CANCELLED")
      return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-600";
  }
  statusLabel(s) {
    const map = {
      SEARCHING: "Buscando",
      ACCEPTED: "Aceptado",
      HEADING_TO_CLIENT: "En camino",
      ARRIVED_AT_CLIENT: "Lleg\xF3",
      IN_PROGRESS: "En curso",
      COMPLETED: "Completado",
      CANCELLED: "Cancelado"
    };
    return map[s] ?? s;
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, v) {
    return v.id;
  }
  static \u0275fac = function ListaViajesTaxiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaViajesTaxiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaViajesTaxiComponent, selectors: [["app-lista-viajes-taxi"]], decls: 29, vars: 5, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/viajes-taxi/solicitar", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600"], [1, "flex", "flex-col", "gap-4", "lg:flex-row"], ["type", "text", "placeholder", "Buscar por origen, destino o cliente...", 1, "h-11", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "SEARCHING"], ["value", "ACCEPTED"], ["value", "IN_PROGRESS"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4", "text-sm", "text-gray-500"], [1, "px-5", "py-4", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "px-5", "py-4", "text-center"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "routerLink"], ["colspan", "7", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaViajesTaxiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Lancha Taxi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Solicitudes de viaje en lancha taxi.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Solicitar viaje");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 1)(11, "div", 6)(12, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ListaViajesTaxiComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaViajesTaxiComponent_Template_input_ngModelChange_12_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ListaViajesTaxiComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaViajesTaxiComponent_Template_select_ngModelChange_13_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Buscando");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Aceptado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "En curso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Completado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Cancelado");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(26, ListaViajesTaxiComponent_div_26_Template, 2, 0, "div", 15)(27, ListaViajesTaxiComponent_div_27_Template, 2, 1, "div", 16)(28, ListaViajesTaxiComponent_div_28_Template, 35, 10, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaViajesTaxiComponent, [{
    type: Component,
    args: [{ selector: "app-lista-viajes-taxi", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Lancha Taxi</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Solicitudes de viaje en lancha taxi.</p>
      </div>
      <a routerLink="/viajes-taxi/solicitar" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600">Solicitar viaje</a>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row">
      <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por origen, destino o cliente..."
        class="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      <select [(ngModel)]="filtroEstado" (ngModelChange)="onFilterChange()"
        class="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los estados</option>
        <option value="SEARCHING">Buscando</option>
        <option value="ACCEPTED">Aceptado</option>
        <option value="IN_PROGRESS">En curso</option>
        <option value="COMPLETED">Completado</option>
        <option value="CANCELLED">Cancelado</option>
      </select>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando viajes...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de viajes taxi</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">#</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Origen</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Destino</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Pasajeros</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let v of paginados; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4 text-sm text-gray-500">#{{ v.id }}</td>
            <td class="px-5 py-4 text-sm font-medium text-gray-800 dark:text-white/90">{{ v.client.firstName }} {{ v.client.lastName }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ v.originName }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ v.destinationName }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ v.passengers }}</td>
            <td class="px-5 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="statusClase(v.status)">
                {{ statusLabel(v.status) }}
              </span>
            </td>
            <td class="px-5 py-4 text-center">
              <a [routerLink]="['/viajes-taxi', v.id]" class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Ver</a>
            </td>
          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="7" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron viajes.</td>
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
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaViajesTaxiComponent, { className: "ListaViajesTaxiComponent", filePath: "src/app/pages/viajes-taxi/pages/lista-viajes-taxi/lista-viajes-taxi.component.ts", lineNumber: 14 });
})();
export {
  ListaViajesTaxiComponent
};
//# sourceMappingURL=chunk-IWSB7N4S.js.map
