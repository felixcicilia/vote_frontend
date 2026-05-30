import {
  PagosService
} from "./chunk-OPFOKBHG.js";
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
  ɵɵclassProp,
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

// src/app/pages/pagos/pages/lista-pagos/lista-pagos.component.ts
var _c0 = (a0) => ["/pagos", a0];
function ListaPagosComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u23F3 ", ctx_r0.pendientesCount, " pendiente", ctx_r0.pendientesCount !== 1 ? "s" : "", " de verificar ");
  }
}
function ListaPagosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r0.successMessage, " ");
  }
}
function ListaPagosComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", m_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.methodLabels[m_r2]);
  }
}
function ListaPagosComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ListaPagosComponent_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.limpiar());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function ListaPagosComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Cargando pagos...");
    \u0275\u0275elementEnd()();
  }
}
function ListaPagosComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ListaPagosComponent_div_32_tr_30_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.transactionRef);
  }
}
function ListaPagosComponent_div_32_tr_30_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaPagosComponent_div_32_tr_30_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u{1F4F7}");
    \u0275\u0275elementEnd();
  }
}
function ListaPagosComponent_div_32_tr_30_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ListaPagosComponent_div_32_tr_30_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verificarPago(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.verifyingId === p_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.verifyingId === p_r5.id ? "..." : "\u2713 Verificar", " ");
  }
}
function ListaPagosComponent_div_32_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49)(4, "p", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 49)(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 49);
    \u0275\u0275template(16, ListaPagosComponent_div_32_tr_30_span_16_Template, 2, 1, "span", 54)(17, ListaPagosComponent_div_32_tr_30_span_17_Template, 2, 0, "span", 55)(18, ListaPagosComponent_div_32_tr_30_span_18_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 57)(22, "span", 58);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 49)(25, "div", 59);
    \u0275\u0275template(26, ListaPagosComponent_div_32_tr_30_button_26_Template, 2, 2, "button", 60);
    \u0275\u0275elementStart(27, "a", 61);
    \u0275\u0275text(28, " Ver ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-l-2", p_r5.status === "PENDING")("border-l-yellow-400", p_r5.status === "PENDING");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", p_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r5.client.firstName, " ", p_r5.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.client.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fmtAmount(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.methodLabels[p_r5.method] ?? p_r5.method, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabels[p_r5.referenceType] ?? p_r5.referenceType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r5.transactionRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r5.transactionRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.proofImageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDate(p_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClase(p_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(p_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r5.status === "PENDING" && ctx_r0.isMaster);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, p_r5.id));
  }
}
function ListaPagosComponent_div_32_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2, "No se encontraron pagos con esos filtros.");
    \u0275\u0275elementEnd()();
  }
}
function ListaPagosComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "h3", 33);
    \u0275\u0275text(4, "Lista de pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 35)(8, "table", 36)(9, "thead", 37)(10, "tr")(11, "th", 38);
    \u0275\u0275text(12, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 38);
    \u0275\u0275text(16, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 38);
    \u0275\u0275text(18, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 38);
    \u0275\u0275text(22, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 38);
    \u0275\u0275text(24, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 39);
    \u0275\u0275text(26, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 40);
    \u0275\u0275text(28, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody", 41);
    \u0275\u0275template(30, ListaPagosComponent_div_32_tr_30_Template, 29, 21, "tr", 42)(31, ListaPagosComponent_div_32_tr_31_Template, 3, 0, "tr", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 44)(33, "p", 34);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 45)(36, "button", 46);
    \u0275\u0275listener("click", function ListaPagosComponent_div_32_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(37, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 46);
    \u0275\u0275listener("click", function ListaPagosComponent_div_32_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(39, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(24);
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
var METHOD_LABELS = {
  PAGO_MOVIL: "\u{1F4F1} Pago M\xF3vil",
  TRANSFERENCIA: "\u{1F3E6} Transferencia Bs",
  ZELLE: "\u{1F49C} Zelle",
  BINANCE: "\u{1F7E1} Binance",
  CARD: "\u{1F4B3} Tarjeta",
  CASH: "\u{1F4B5} Efectivo"
};
var TYPE_LABELS = {
  TAXI_TRIP: "\u{1F6A4} Taxi acu\xE1tico",
  TICKET: "\u{1F3AB} Ticket ferry",
  RENTAL: "\u26F5 Alquiler charter",
  WALLET_TOPUP: "\u2693 Recarga de nudos"
};
var ListaPagosComponent = class _ListaPagosComponent {
  service = inject(PagosService);
  auth = inject(AuthService);
  get isMaster() {
    return this.auth.role() === "MASTER";
  }
  loading = false;
  errorMessage = "";
  pagos = [];
  filtrados = [];
  paginados = [];
  search = "";
  filtroEstado = "";
  filtroMetodo = "";
  page = 1;
  limit = 12;
  total = 0;
  totalPages = 0;
  verifyingId = null;
  successMessage = "";
  methodLabels = METHOD_LABELS;
  typeLabels = TYPE_LABELS;
  paymentMethods = Object.keys(METHOD_LABELS);
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.pagos = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar los pagos.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.pagos.filter((p) => {
      const busqueda = !t || (p.transactionRef ?? "").toLowerCase().includes(t) || p.client.firstName.toLowerCase().includes(t) || p.client.lastName.toLowerCase().includes(t) || p.client.email.toLowerCase().includes(t);
      const estado = !this.filtroEstado || p.status === this.filtroEstado;
      const metodo = !this.filtroMetodo || p.method === this.filtroMetodo;
      return busqueda && estado && metodo;
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
  limpiar() {
    this.search = "";
    this.filtroEstado = "";
    this.filtroMetodo = "";
    this.page = 1;
    this.aplicarFiltros();
  }
  get hayFiltros() {
    return !!(this.search || this.filtroEstado || this.filtroMetodo);
  }
  verificarPago(p) {
    const userId = this.auth.user()?.id;
    if (!userId)
      return;
    this.verifyingId = p.id;
    this.successMessage = "";
    this.service.verify(p.id, { verifiedById: userId }).subscribe({
      next: (updated) => {
        this.pagos = this.pagos.map((x) => x.id === updated.id ? updated : x);
        this.aplicarFiltros();
        this.verifyingId = null;
        this.successMessage = `Pago #${updated.id} verificado correctamente.`;
        setTimeout(() => this.successMessage = "", 4e3);
      },
      error: () => {
        this.verifyingId = null;
        alert("Error al verificar el pago.");
      }
    });
  }
  statusClase(s) {
    return s === "VERIFIED" ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400" : s === "REJECTED" ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400";
  }
  statusLabel(s) {
    return s === "VERIFIED" ? "\u2713 Verificado" : s === "REJECTED" ? "\u2717 Rechazado" : "\u23F3 Pendiente";
  }
  fmtAmount(p) {
    const n = Number(p.amount);
    if (p.currency === "VES" || p.currency === "BS") {
      return `Bs. ${n.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (p.currency === "USDT")
      return `${n.toFixed(2)} USDT`;
    return `$${n.toFixed(2)}`;
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("es-VE", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  get pendientesCount() {
    return this.pagos.filter((p) => p.status === "PENDING").length;
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, p) {
    return p.id;
  }
  static \u0275fac = function ListaPagosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaPagosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPagosComponent, selectors: [["app-lista-pagos"]], decls: 33, vars: 10, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "inline-flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700 dark:border-yellow-800/30 dark:bg-yellow-500/10 dark:text-yellow-400", 4, "ngIf"], ["class", "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-wrap", "gap-3"], [1, "relative", "min-w-[220px]", "flex-1"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400"], ["type", "text", "placeholder", "Cliente, email o referencia...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING"], ["value", "VERIFIED"], ["value", "REJECTED"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center py-16 gap-3", 4, "ngIf"], ["class", "rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "rounded-xl", "border", "border-yellow-200", "bg-yellow-50", "px-4", "py-2", "text-sm", "font-semibold", "text-yellow-700", "dark:border-yellow-800/30", "dark:bg-yellow-500/10", "dark:text-yellow-400"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "font-medium", "text-green-700", "dark:border-green-800/30", "dark:bg-green-500/10", "dark:text-green-400"], [3, "value"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "flex", "items-center", "justify-center", "py-16", "gap-3"], [1, "text-3xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "text-xs", "text-gray-400"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]", 3, "border-l-2", "border-l-yellow-400", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-3", "border-t", "border-gray-100", "px-5", "py-3", "dark:border-gray-800", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "disabled:opacity-40", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], [1, "hover:bg-gray-50/50", "dark:hover:bg-white/[0.02]"], [1, "px-5", "py-3.5", "text-xs", "text-gray-400"], [1, "px-5", "py-3.5"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-3.5", "text-xs", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-3.5", "text-xs", "text-gray-500", "dark:text-gray-400"], ["class", "font-mono text-xs text-gray-600 dark:text-gray-300", 4, "ngIf"], ["class", "text-xs text-gray-300 dark:text-gray-600", 4, "ngIf"], ["class", "ml-1.5 text-xs text-blue-500", "title", "Tiene captura", 4, "ngIf"], [1, "px-5", "py-3.5", "text-center"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-2"], ["class", "rounded-lg border border-green-300 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-100 disabled:opacity-50 dark:border-green-800/40 dark:bg-green-500/10 dark:text-green-400", 3, "disabled", "click", 4, "ngIf"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "routerLink"], [1, "font-mono", "text-xs", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "text-gray-300", "dark:text-gray-600"], ["title", "Tiene captura", 1, "ml-1.5", "text-xs", "text-blue-500"], [1, "rounded-lg", "border", "border-green-300", "bg-green-50", "px-3", "py-1.5", "text-xs", "font-semibold", "text-green-700", "hover:bg-green-100", "disabled:opacity-50", "dark:border-green-800/40", "dark:bg-green-500/10", "dark:text-green-400", 3, "click", "disabled"], ["colspan", "9", 1, "py-12", "text-center", "text-sm", "text-gray-400"]], template: function ListaPagosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u{1F4B3} Pagos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Verifica y gestiona todos los pagos de la plataforma.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ListaPagosComponent_div_8_Template, 2, 2, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ListaPagosComponent_div_9_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ListaPagosComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaPagosComponent_Template_input_ngModelChange_15_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ListaPagosComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaPagosComponent_Template_select_ngModelChange_16_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(17, "option", 13);
      \u0275\u0275text(18, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 14);
      \u0275\u0275text(20, "\u23F3 Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 15);
      \u0275\u0275text(22, "\u2713 Verificado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24, "\u2717 Rechazado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ListaPagosComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroMetodo, $event) || (ctx.filtroMetodo = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaPagosComponent_Template_select_ngModelChange_25_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(26, "option", 13);
      \u0275\u0275text(27, "Todos los m\xE9todos");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, ListaPagosComponent_option_28_Template, 2, 2, "option", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, ListaPagosComponent_button_29_Template, 2, 0, "button", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, ListaPagosComponent_div_30_Template, 5, 0, "div", 19)(31, ListaPagosComponent_div_31_Template, 2, 1, "div", 20)(32, ListaPagosComponent_div_32_Template, 40, 10, "div", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.pendientesCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroMetodo);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.paymentMethods);
      \u0275\u0275advance();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaPagosComponent, [{
    type: Component,
    args: [{ selector: "app-lista-pagos", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4B3} Pagos</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Verifica y gestiona todos los pagos de la plataforma.</p>
      </div>
      <div *ngIf="pendientesCount > 0"
        class="inline-flex items-center gap-2 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700 dark:border-yellow-800/30 dark:bg-yellow-500/10 dark:text-yellow-400">
        \u23F3 {{ pendientesCount }} pendiente{{ pendientesCount !== 1 ? 's' : '' }} de verificar
      </div>
    </div>
  </div>

  <!-- \xC9xito -->
  <div *ngIf="successMessage"
    class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400">
    \u2713 {{ successMessage }}
  </div>

  <!-- Filtros -->
  <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-wrap gap-3">
      <div class="relative min-w-[220px] flex-1">
        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">\u{1F50D}</span>
        <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()"
          placeholder="Cliente, email o referencia..."
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <select [(ngModel)]="filtroEstado" (ngModelChange)="onFilterChange()"
        class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los estados</option>
        <option value="PENDING">\u23F3 Pendiente</option>
        <option value="VERIFIED">\u2713 Verificado</option>
        <option value="REJECTED">\u2717 Rechazado</option>
      </select>
      <select [(ngModel)]="filtroMetodo" (ngModelChange)="onFilterChange()"
        class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los m\xE9todos</option>
        <option *ngFor="let m of paymentMethods" [value]="m">{{ methodLabels[m] }}</option>
      </select>
      <button *ngIf="hayFiltros" (click)="limpiar()"
        class="h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
        Limpiar
      </button>
    </div>
  </div>

  <!-- Loading / Error -->
  <div *ngIf="loading" class="flex items-center justify-center py-16 gap-3">
    <div class="text-3xl animate-bounce">\u{1F4B3}</div>
    <p class="text-sm text-gray-400">Cargando pagos...</p>
  </div>
  <div *ngIf="!loading && errorMessage"
    class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <!-- Tabla -->
  <div *ngIf="!loading && !errorMessage" class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="border-b border-gray-100 px-5 py-3 dark:border-gray-800">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Lista de pagos</h3>
        <span class="text-xs text-gray-400">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">#</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Monto</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">M\xE9todo</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Tipo</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Referencia</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Fecha</th>
            <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let p of paginados; trackBy: trackById"
            class="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
            [class.border-l-2]="p.status === 'PENDING'"
            [class.border-l-yellow-400]="p.status === 'PENDING'">

            <td class="px-5 py-3.5 text-xs text-gray-400">#{{ p.id }}</td>

            <td class="px-5 py-3.5">
              <p class="font-medium text-gray-800 dark:text-white/90">{{ p.client.firstName }} {{ p.client.lastName }}</p>
              <p class="text-xs text-gray-400">{{ p.client.email }}</p>
            </td>

            <td class="px-5 py-3.5">
              <span class="font-semibold text-gray-800 dark:text-white/90">{{ fmtAmount(p) }}</span>
            </td>

            <td class="px-5 py-3.5 text-xs text-gray-600 dark:text-gray-400">
              {{ methodLabels[p.method] ?? p.method }}
            </td>

            <td class="px-5 py-3.5 text-xs text-gray-500 dark:text-gray-400">
              {{ typeLabels[p.referenceType] ?? p.referenceType }}
            </td>

            <td class="px-5 py-3.5">
              <span *ngIf="p.transactionRef" class="font-mono text-xs text-gray-600 dark:text-gray-300">{{ p.transactionRef }}</span>
              <span *ngIf="!p.transactionRef" class="text-xs text-gray-300 dark:text-gray-600">\u2014</span>
              <span *ngIf="p.proofImageUrl" class="ml-1.5 text-xs text-blue-500" title="Tiene captura">\u{1F4F7}</span>
            </td>

            <td class="px-5 py-3.5 text-xs text-gray-400">{{ fmtDate(p.createdAt) }}</td>

            <td class="px-5 py-3.5 text-center">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="statusClase(p.status)">
                {{ statusLabel(p.status) }}
              </span>
            </td>

            <td class="px-5 py-3.5">
              <div class="flex items-center justify-end gap-2">
                <!-- Verificar r\xE1pido (solo PENDING, solo MASTER) -->
                <button *ngIf="p.status === 'PENDING' && isMaster" (click)="verificarPago(p)"
                  [disabled]="verifyingId === p.id"
                  class="rounded-lg border border-green-300 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-100 disabled:opacity-50 dark:border-green-800/40 dark:bg-green-500/10 dark:text-green-400">
                  {{ verifyingId === p.id ? '...' : '\u2713 Verificar' }}
                </button>
                <!-- Ver detalle -->
                <a [routerLink]="['/pagos', p.id]"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
                  Ver
                </a>
              </div>
            </td>

          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="9" class="py-12 text-center text-sm text-gray-400">No se encontraron pagos con esos filtros.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginaci\xF3n -->
    <div class="flex flex-col gap-3 border-t border-gray-100 px-5 py-3 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-xs text-gray-400">P\xE1gina {{ page }} de {{ totalPages }}</p>
      <div class="flex gap-2">
        <button (click)="cambiarPagina(page - 1)" [disabled]="page === 1"
          class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
          \u2190 Anterior
        </button>
        <button (click)="cambiarPagina(page + 1)" [disabled]="page === totalPages || total === 0"
          class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
          Siguiente \u2192
        </button>
      </div>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPagosComponent, { className: "ListaPagosComponent", filePath: "src/app/pages/pagos/pages/lista-pagos/lista-pagos.component.ts", lineNumber: 31 });
})();
export {
  ListaPagosComponent
};
//# sourceMappingURL=chunk-ES5RTE4Y.js.map
