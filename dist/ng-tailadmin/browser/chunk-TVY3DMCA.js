import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7NRIB5KE.js";
import {
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  LowerCasePipe,
  NgForOf,
  NgIf,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/resenas/services/resenas.service.ts
var ResenasService = class _ResenasService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/reviews`;
  extractArray(r) {
    if (Array.isArray(r))
      return r;
    return Array.isArray(r?.data) ? r.data : [];
  }
  extractItem(r) {
    return r?.data !== void 0 ? r.data : r;
  }
  getAll() {
    return this.http.get(this.base).pipe(map((r) => this.extractArray(r)));
  }
  getByUser(userId) {
    return this.http.get(`${this.base}/user/${userId}`).pipe(map((r) => this.extractArray(r)));
  }
  getByVessel(vesselId) {
    return this.http.get(`${this.base}/vessel/${vesselId}`).pipe(map((r) => this.extractArray(r)));
  }
  create(dto) {
    return this.http.post(this.base, dto).pipe(map((r) => this.extractItem(r)));
  }
  static \u0275fac = function ResenasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResenasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResenasService, factory: _ResenasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResenasService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/resenas/pages/lista-resenas/lista-resenas.component.ts
function ListaResenasComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Cargando rese\xF1as...");
    \u0275\u0275elementEnd();
  }
}
function ListaResenasComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ListaResenasComponent_div_11_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ListaResenasComponent_div_11_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ListaResenasComponent_div_11_div_7_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.comment);
  }
}
function ListaResenasComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275template(10, ListaResenasComponent_div_11_div_7_span_10_Template, 2, 0, "span", 27)(11, ListaResenasComponent_div_11_div_7_span_11_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ListaResenasComponent_div_11_div_7_p_12_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 30);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", r_r3.reviewer.firstName, " ", r_r3.reviewer.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 8, r_r3.referenceType), " #", r_r3.referenceId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.estrellas(r_r3.rating));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.estrellas(5 - r_r3.rating));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.comment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, r_r3.createdAt, "dd/MM/yyyy"));
  }
}
function ListaResenasComponent_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "No se encontraron rese\xF1as.");
    \u0275\u0275elementEnd();
  }
}
function ListaResenasComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3", 12);
    \u0275\u0275text(3, "Lista de rese\xF1as");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275template(7, ListaResenasComponent_div_11_div_7_Template, 16, 13, "div", 15)(8, ListaResenasComponent_div_11_div_8_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "p", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "button", 19);
    \u0275\u0275listener("click", function ListaResenasComponent_div_11_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(14, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275listener("click", function ListaResenasComponent_div_11_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(16, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.paginadas)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginadas.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
var ListaResenasComponent = class _ListaResenasComponent {
  service = inject(ResenasService);
  loading = false;
  errorMessage = "";
  resenas = [];
  filtradas = [];
  paginadas = [];
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
        this.resenas = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar las rese\xF1as.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtradas = this.resenas.filter((r) => r.reviewer.firstName.toLowerCase().includes(t) || (r.comment ?? "").toLowerCase().includes(t));
    this.total = this.filtradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages)
      this.page = this.totalPages;
    this.paginadas = this.filtradas.slice((this.page - 1) * this.limit, this.page * this.limit);
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
  estrellas(rating) {
    return Array.from({ length: rating }, (_, i) => i);
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, r) {
    return r.id;
  }
  static \u0275fac = function ListaResenasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaResenasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaResenasComponent, selectors: [["app-lista-resenas"]], decls: 12, vars: 4, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["type", "text", "placeholder", "Buscar por usuario o comentario...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "px-5 py-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "px-5 py-10 text-center text-sm text-gray-500", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "flex-1"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "mt-1", "flex", "gap-0.5"], ["class", "text-yellow-400 text-sm", 4, "ngFor", "ngForOf"], ["class", "text-gray-300 text-sm dark:text-gray-600", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-sm text-gray-600 dark:text-gray-400", 4, "ngIf"], [1, "text-xs", "text-gray-400", "whitespace-nowrap"], [1, "text-yellow-400", "text-sm"], [1, "text-gray-300", "text-sm", "dark:text-gray-600"], [1, "mt-1", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaResenasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Rese\xF1as");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Opiniones de los usuarios sobre los servicios.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 1)(8, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ListaResenasComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaResenasComponent_Template_input_ngModelChange_8_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ListaResenasComponent_div_9_Template, 2, 0, "div", 5)(10, ListaResenasComponent_div_10_Template, 2, 1, "div", 6)(11, ListaResenasComponent_div_11_Template, 17, 10, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, LowerCasePipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaResenasComponent, [{
    type: Component,
    args: [{ selector: "app-lista-resenas", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Rese\xF1as</h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Opiniones de los usuarios sobre los servicios.</p>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por usuario o comentario..."
      class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando rese\xF1as...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de rese\xF1as</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>

    <div class="divide-y divide-gray-100 dark:divide-gray-800">
      <div *ngFor="let r of paginadas; trackBy: trackById" class="px-5 py-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3">
              <span class="text-sm font-medium text-gray-800 dark:text-white/90">{{ r.reviewer.firstName }} {{ r.reviewer.lastName }}</span>
              <span class="text-xs text-gray-400">{{ r.referenceType | lowercase }} #{{ r.referenceId }}</span>
            </div>
            <div class="mt-1 flex gap-0.5">
              <span *ngFor="let s of estrellas(r.rating)" class="text-yellow-400 text-sm">\u2605</span>
              <span *ngFor="let s of estrellas(5 - r.rating)" class="text-gray-300 text-sm dark:text-gray-600">\u2605</span>
            </div>
            <p *ngIf="r.comment" class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ r.comment }}</p>
          </div>
          <span class="text-xs text-gray-400 whitespace-nowrap">{{ r.createdAt | date:'dd/MM/yyyy' }}</span>
        </div>
      </div>

      <div *ngIf="paginadas.length === 0" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron rese\xF1as.</div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaResenasComponent, { className: "ListaResenasComponent", filePath: "src/app/pages/resenas/pages/lista-resenas/lista-resenas.component.ts", lineNumber: 14 });
})();
export {
  ListaResenasComponent
};
//# sourceMappingURL=chunk-TVY3DMCA.js.map
