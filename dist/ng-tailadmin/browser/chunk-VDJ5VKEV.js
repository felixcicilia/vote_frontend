import {
  HorariosService
} from "./chunk-V2G4YZUZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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

// src/app/pages/horarios/pages/lista-horarios/lista-horarios.component.ts
var _c0 = (a0) => ["/horarios/editar", a0];
function ListaHorariosComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando horarios...");
    \u0275\u0275elementEnd();
  }
}
function ListaHorariosComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ListaHorariosComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 28)(10, "span", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 28)(13, "div", 30)(14, "a", 31);
    \u0275\u0275text(15, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 32);
    \u0275\u0275listener("click", function ListaHorariosComponent_div_14_tr_23_Template_button_click_16_listener() {
      const h_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(h_r4));
    });
    \u0275\u0275text(17, "Borrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", h_r4.route.originPier.name, " \u2192 ", h_r4.route.destinationPier.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r4.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r4.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.diasLabel(h_r4.daysOfWeek));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", h_r4.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", h_r4.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, h_r4.id));
  }
}
function ListaHorariosComponent_div_14_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "No se encontraron horarios.");
    \u0275\u0275elementEnd()();
  }
}
function ListaHorariosComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h3", 14);
    \u0275\u0275text(3, "Lista de horarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "table", 17)(8, "thead")(9, "tr", 18)(10, "th", 19);
    \u0275\u0275text(11, "Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 19);
    \u0275\u0275text(13, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 19);
    \u0275\u0275text(15, "Hora salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 19);
    \u0275\u0275text(17, "D\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 19);
    \u0275\u0275text(19, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 20);
    \u0275\u0275text(21, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ListaHorariosComponent_div_14_tr_23_Template, 18, 10, "tr", 21)(24, ListaHorariosComponent_div_14_tr_24_Template, 3, 0, "tr", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 23)(26, "p", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 24)(29, "button", 25);
    \u0275\u0275listener("click", function ListaHorariosComponent_div_14_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(30, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 25);
    \u0275\u0275listener("click", function ListaHorariosComponent_div_14_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(32, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(18);
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
var ListaHorariosComponent = class _ListaHorariosComponent {
  service = inject(HorariosService);
  loading = false;
  errorMessage = "";
  horarios = [];
  filtrados = [];
  paginados = [];
  search = "";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  DAYS = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.horarios = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar los horarios.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.horarios.filter((h) => h.route.originPier.name.toLowerCase().includes(t) || h.route.destinationPier.name.toLowerCase().includes(t) || h.vessel.name.toLowerCase().includes(t));
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
  cambiarPagina(p) {
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
      this.aplicarFiltros();
    }
  }
  diasLabel(days) {
    return days.map((d) => this.DAYS[d] ?? d).join(", ");
  }
  eliminar(h) {
    if (!confirm(`\xBFEliminar horario #${h.id}?`))
      return;
    this.service.delete(h.id).subscribe({
      next: () => {
        this.horarios = this.horarios.filter((x) => x.id !== h.id);
        this.aplicarFiltros();
      },
      error: () => alert("No se pudo eliminar.")
    });
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, h) {
    return h.id;
  }
  static \u0275fac = function ListaHorariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaHorariosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaHorariosComponent, selectors: [["app-lista-horarios"]], decls: 15, vars: 4, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/horarios/crear", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600"], ["type", "text", "placeholder", "Buscar por ruta o embarcaci\xF3n...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4", "text-sm", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "routerLink"], [1, "rounded-lg", "border", "border-red-300", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "dark:border-red-800", "dark:text-red-400", 3, "click"], ["colspan", "6", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaHorariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Horarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Gestiona los horarios de rutas y embarcaciones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Nuevo horario");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 1)(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ListaHorariosComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaHorariosComponent_Template_input_ngModelChange_11_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, ListaHorariosComponent_div_12_Template, 2, 0, "div", 7)(13, ListaHorariosComponent_div_13_Template, 2, 1, "div", 8)(14, ListaHorariosComponent_div_14_Template, 33, 10, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaHorariosComponent, [{
    type: Component,
    args: [{ selector: "app-lista-horarios", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Horarios</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona los horarios de rutas y embarcaciones.</p>
      </div>
      <a routerLink="/horarios/crear" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600">Nuevo horario</a>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por ruta o embarcaci\xF3n..."
      class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando horarios...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de horarios</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Ruta</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Hora salida</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">D\xEDas</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let h of paginados; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4 text-sm text-gray-800 dark:text-white/90">
              {{ h.route.originPier.name }} \u2192 {{ h.route.destinationPier.name }}
            </td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ h.vessel.name }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ h.departureTime }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ diasLabel(h.daysOfWeek) }}</td>
            <td class="px-5 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="h.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                {{ h.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <a [routerLink]="['/horarios/editar', h.id]" class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Editar</a>
                <button (click)="eliminar(h)" class="rounded-lg border border-red-300 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400">Borrar</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="6" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron horarios.</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaHorariosComponent, { className: "ListaHorariosComponent", filePath: "src/app/pages/horarios/pages/lista-horarios/lista-horarios.component.ts", lineNumber: 14 });
})();
export {
  ListaHorariosComponent
};
//# sourceMappingURL=chunk-VDJ5VKEV.js.map
