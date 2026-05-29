import {
  MuellesService
} from "./chunk-4PXGVUHC.js";
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

// src/app/pages/muelles/pages/lista-muelles/lista-muelles.component.ts
var _c0 = (a0) => ["/muelles/editar", a0];
function ListaMuellesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function ListaMuellesComponent_div_13_Template(rf, ctx) {
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
function ListaMuellesComponent_div_14_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19)(1, "td", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27)(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 27)(14, "div", 33)(15, "a", 34);
    \u0275\u0275text(16, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function ListaMuellesComponent_div_14_tr_22_Template_button_click_17_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminar(m_r4));
    });
    \u0275\u0275text(18, "Eliminar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.address || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r4.city || "\u2014", ", ", m_r4.state || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r4.latitude, ", ", m_r4.longitude);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", m_r4.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r4.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, m_r4.id));
  }
}
function ListaMuellesComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "No se encontraron muelles.");
    \u0275\u0275elementEnd()();
  }
}
function ListaMuellesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "h3", 15);
    \u0275\u0275text(4, "Lista de muelles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 17)(8, "table", 18)(9, "thead")(10, "tr", 19)(11, "th", 20);
    \u0275\u0275text(12, "Muelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 20);
    \u0275\u0275text(14, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 20);
    \u0275\u0275text(16, "Coordenadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 20);
    \u0275\u0275text(18, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 21);
    \u0275\u0275text(20, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, ListaMuellesComponent_div_14_tr_22_Template, 19, 11, "tr", 22)(23, ListaMuellesComponent_div_14_tr_23_Template, 3, 0, "tr", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 24)(25, "p", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 25)(28, "button", 26);
    \u0275\u0275listener("click", function ListaMuellesComponent_div_14_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(29, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 26);
    \u0275\u0275listener("click", function ListaMuellesComponent_div_14_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(31, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(16);
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
var ListaMuellesComponent = class _ListaMuellesComponent {
  service = inject(MuellesService);
  loading = false;
  errorMessage = "";
  muelles = [];
  filtrados = [];
  paginados = [];
  search = "";
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
        this.muelles = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar los muelles.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.muelles.filter((m) => m.name.toLowerCase().includes(t) || (m.city ?? "").toLowerCase().includes(t));
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
  eliminar(m) {
    if (!confirm(`\xBFEliminar muelle "${m.name}"?`))
      return;
    this.service.delete(m.id).subscribe({
      next: () => {
        this.muelles = this.muelles.filter((x) => x.id !== m.id);
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
  trackById(_, m) {
    return m.id;
  }
  static \u0275fac = function ListaMuellesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaMuellesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaMuellesComponent, selectors: [["app-lista-muelles"]], decls: 15, vars: 4, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/muelles/crear", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600"], ["type", "text", "placeholder", "Buscar por nombre o ciudad...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-500"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4", "text-xs", "text-gray-500"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "routerLink"], [1, "rounded-lg", "border", "border-red-300", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", 3, "click"], ["colspan", "5", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaMuellesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Muelles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Gestiona los puntos de embarque y desembarque.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Nuevo muelle ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 1)(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ListaMuellesComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaMuellesComponent_Template_input_ngModelChange_11_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, ListaMuellesComponent_div_12_Template, 2, 0, "div", 7)(13, ListaMuellesComponent_div_13_Template, 2, 1, "div", 8)(14, ListaMuellesComponent_div_14_Template, 32, 10, "div", 9);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaMuellesComponent, [{
    type: Component,
    args: [{ selector: "app-lista-muelles", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Muelles</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona los puntos de embarque y desembarque.</p>
      </div>
      <a routerLink="/muelles/crear" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600">
        Nuevo muelle
      </a>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por nombre o ciudad..."
      class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de muelles</h3>
        <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Muelle</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Ubicaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Coordenadas</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let m of paginados; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4">
              <div class="font-medium text-gray-800 dark:text-white/90">{{ m.name }}</div>
              <div class="text-xs text-gray-500">{{ m.address || '\u2014' }}</div>
            </td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ m.city || '\u2014' }}, {{ m.state || '\u2014' }}</td>
            <td class="px-5 py-4 text-xs text-gray-500">{{ m.latitude }}, {{ m.longitude }}</td>
            <td class="px-5 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
                [ngClass]="m.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                {{ m.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <a [routerLink]="['/muelles/editar', m.id]" class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Editar</a>
                <button (click)="eliminar(m)" class="rounded-lg border border-red-300 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50">Eliminar</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="5" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron muelles.</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaMuellesComponent, { className: "ListaMuellesComponent", filePath: "src/app/pages/muelles/pages/lista-muelles/lista-muelles.component.ts", lineNumber: 14 });
})();
export {
  ListaMuellesComponent
};
//# sourceMappingURL=chunk-AAQD6CE3.js.map
