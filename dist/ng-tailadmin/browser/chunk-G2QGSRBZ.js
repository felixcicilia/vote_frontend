import {
  TicketsService
} from "./chunk-4C5T4XRR.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
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
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  forkJoin,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/pages/mis-reservas/mis-reservas.component.ts
var _c0 = (a0) => ["/tickets", a0];
var _c1 = (a0) => ["/mis-reservas", a0];
var _c2 = () => ["/pagar-reserva"];
var _c3 = (a0) => ({ bookingId: a0 });
function MisReservasComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function MisReservasComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiar());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function MisReservasComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Cargando reservas...");
    \u0275\u0275elementEnd()();
  }
}
function MisReservasComponent_div_41_tr_29_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.extra);
  }
}
function MisReservasComponent_div_41_tr_29_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275text(1, " Ver \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, r_r4.id));
  }
}
function MisReservasComponent_div_41_tr_29_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275text(1, " Ver \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, r_r4.id));
  }
}
function MisReservasComponent_div_41_tr_29_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 62);
    \u0275\u0275text(1, " \u{1F4B3} Pagar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c2))("queryParams", \u0275\u0275pureFunction1(3, _c3, r_r4.id));
  }
}
function MisReservasComponent_div_41_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46)(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 46)(7, "p", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MisReservasComponent_div_41_tr_29_p_9_Template, 2, 1, "p", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 51)(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 52);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 50);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 53);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 54)(24, "span", 55);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 56)(27, "div", 57);
    \u0275\u0275template(28, MisReservasComponent_div_41_tr_29_a_28_Template, 2, 3, "a", 58)(29, MisReservasComponent_div_41_tr_29_a_29_Template, 2, 3, "a", 58)(30, MisReservasComponent_div_41_tr_29_a_30_Template, 2, 5, "a", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-l-2", r_r4.status === "PENDING")("border-l-amber-400", r_r4.status === "PENDING");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", r_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", r_r4.type === "TICKET")("text-blue-700", r_r4.type === "TICKET")("dark:bg-blue-500\\/10", r_r4.type === "TICKET")("dark:text-blue-400", r_r4.type === "TICKET")("bg-teal-100", r_r4.type === "ISLAND")("text-teal-700", r_r4.type === "ISLAND")("dark:bg-teal-500\\/10", r_r4.type === "ISLAND")("dark:text-teal-400", r_r4.type === "ISLAND");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.type === "TICKET" ? "\u{1F6A2} Ferry" : "\u{1F3DD}\uFE0F Isla", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r4.origen, " \u2192 ", r_r4.destino);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.extra);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.embarcacion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 35, r_r4.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.hora);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.pasajeros);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(22, 38, r_r4.total, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.statusClase(r_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(r_r4.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r4.type === "TICKET");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.type === "ISLAND");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.type === "ISLAND" && r_r4.status === "PENDING");
  }
}
function MisReservasComponent_div_41_tr_30_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 66);
    \u0275\u0275text(1, " \u{1F50D} Buscar lanchas ");
    \u0275\u0275elementEnd();
  }
}
function MisReservasComponent_div_41_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63)(2, "div", 64);
    \u0275\u0275text(3, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MisReservasComponent_div_41_tr_30_a_6_Template, 2, 0, "a", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hayFiltros ? "No hay reservas con esos filtros." : "A\xFAn no tienes reservas.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hayFiltros);
  }
}
function MisReservasComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h3", 31);
    \u0275\u0275text(3, "Lista de reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "table", 34)(8, "thead", 35)(9, "tr")(10, "th", 36);
    \u0275\u0275text(11, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 36);
    \u0275\u0275text(13, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 36);
    \u0275\u0275text(15, "Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 36);
    \u0275\u0275text(17, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 36);
    \u0275\u0275text(19, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 36);
    \u0275\u0275text(21, "Pax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 36);
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 37);
    \u0275\u0275text(25, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 38);
    \u0275\u0275text(27, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody", 39);
    \u0275\u0275template(29, MisReservasComponent_div_41_tr_29_Template, 31, 41, "tr", 40)(30, MisReservasComponent_div_41_tr_30_Template, 7, 2, "tr", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 42)(32, "p", 32);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 5)(35, "button", 43);
    \u0275\u0275listener("click", function MisReservasComponent_div_41_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page - 1));
    });
    \u0275\u0275text(36, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 43);
    \u0275\u0275listener("click", function MisReservasComponent_div_41_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page + 1));
    });
    \u0275\u0275text(38, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r1.rangoInicio, "-", ctx_r1.rangoFin, " de ", ctx_r1.total);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.paginados)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.paginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.page, " de ", ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.totalPages || ctx_r1.total === 0);
  }
}
var MisReservasComponent = class _MisReservasComponent {
  auth = inject(AuthService);
  ticketsService = inject(TicketsService);
  islandService = inject(IslandTripsService);
  rows = [];
  filtered = [];
  loading = true;
  search = "";
  filtroTipo = "";
  filtroEstado = "";
  // Paginación
  page = 1;
  pageSize = 10;
  get user() {
    return this.auth.user();
  }
  get total() {
    return this.filtered.length;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  get paginados() {
    const s = (this.page - 1) * this.pageSize;
    return this.filtered.slice(s, s + this.pageSize);
  }
  get rangoInicio() {
    return this.total ? (this.page - 1) * this.pageSize + 1 : 0;
  }
  get rangoFin() {
    return Math.min(this.page * this.pageSize, this.total);
  }
  ngOnInit() {
    this.load();
  }
  reload() {
    this.loading = true;
    this.rows = [];
    this.filtered = [];
    this.load();
  }
  load() {
    const id = this.user?.id;
    if (!id) {
      this.loading = false;
      return;
    }
    forkJoin({
      tickets: this.ticketsService.getAll({ clientId: id }),
      bookings: this.islandService.getBookings({ clientId: id })
    }).subscribe({
      next: ({ tickets, bookings }) => {
        const tRows = tickets.map((t) => ({
          type: "TICKET",
          id: t.id,
          status: t.status,
          fecha: t.trip?.departureDate ?? "",
          hora: t.trip?.departureTime ?? "",
          origen: t.trip?.schedule?.route?.originPier?.name ?? "\u2014",
          destino: t.trip?.schedule?.route?.destinationPier?.name ?? "\u2014",
          embarcacion: t.trip?.schedule?.vessel?.name ?? "\u2014",
          pasajeros: t.seats,
          total: Number(t.totalPrice),
          extra: t.qrCode ?? "",
          createdAt: t.createdAt ?? ""
        }));
        const bRows = bookings.map((b) => ({
          type: "ISLAND",
          id: b.id,
          status: b.status,
          fecha: b.tripDate ?? "",
          hora: b.outboundSlot?.departureTime ?? "",
          origen: b.departurePoint?.name ?? "\u2014",
          destino: b.destination?.name ?? "\u2014",
          embarcacion: b.vessel?.name ?? "\u2014",
          pasajeros: b.passengers,
          total: Number(b.totalPrice),
          extra: b.tripType === "IDA_VUELTA" ? "Ida y vuelta" : "Solo ida",
          createdAt: b.createdAt ?? ""
        }));
        this.rows = [...tRows, ...bRows].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase().trim();
    this.filtered = this.rows.filter((r) => {
      const matchSearch = !q || r.origen.toLowerCase().includes(q) || r.destino.toLowerCase().includes(q) || r.embarcacion.toLowerCase().includes(q) || r.extra.toLowerCase().includes(q);
      const matchTipo = !this.filtroTipo || r.type === this.filtroTipo;
      const matchEstado = !this.filtroEstado || r.status === this.filtroEstado;
      return matchSearch && matchTipo && matchEstado;
    });
    this.page = 1;
  }
  cambiarPagina(p) {
    if (p >= 1 && p <= this.totalPages)
      this.page = p;
  }
  trackById(_, r) {
    return r.type + r.id;
  }
  get hayFiltros() {
    return !!this.search || !!this.filtroTipo || !!this.filtroEstado;
  }
  limpiar() {
    this.search = "";
    this.filtroTipo = "";
    this.filtroEstado = "";
    this.applyFilter();
  }
  statusLabel(s) {
    const m = {
      CONFIRMED: "Confirmado",
      PENDING: "Pendiente",
      USED: "Realizado",
      ACTIVE: "En curso",
      COMPLETED: "Completado",
      CANCELLED: "Cancelado"
    };
    return m[s] ?? s;
  }
  statusClase(s) {
    const m = {
      CONFIRMED: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      USED: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      ACTIVE: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
      COMPLETED: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
    };
    return m[s] ?? "bg-gray-100 text-gray-600";
  }
  static \u0275fac = function MisReservasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisReservasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReservasComponent, selectors: [["app-mis-reservas"]], decls: 42, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-gray-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], ["routerLink", "/buscar", 1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "transition"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-wrap", "gap-3"], [1, "relative", "min-w-[200px]", "flex-1"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400"], ["type", "text", "placeholder", "Ruta, embarcaci\xF3n...", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-10", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "TICKET"], ["value", "ISLAND"], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "USED"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["class", "h-10 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center py-16 gap-3", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "h-10", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "flex", "items-center", "justify-center", "py-16", "gap-3"], [1, "text-3xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "text-xs", "text-gray-400"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]", 3, "border-l-2", "border-l-amber-400", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-3", "border-t", "border-gray-100", "px-5", "py-3", "dark:border-gray-800", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "disabled:opacity-40", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], [1, "hover:bg-gray-50/50", "dark:hover:bg-white/[0.02]"], [1, "px-5", "py-3.5", "text-xs", "text-gray-400"], [1, "px-5", "py-3.5"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], ["class", "text-xs text-gray-400 mt-0.5", 4, "ngIf"], [1, "px-5", "py-3.5", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-3.5", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-gray-400"], [1, "px-5", "py-3.5", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-3.5", "text-center"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "px-5", "py-3.5", "text-right"], [1, "flex", "items-center", "justify-end", "gap-2"], ["class", "rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition", 3, "routerLink", 4, "ngIf"], ["class", "rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "transition", 3, "routerLink"], [1, "rounded-lg", "bg-amber-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-amber-600", "transition", 3, "routerLink", "queryParams"], ["colspan", "9", 1, "py-14", "text-center"], [1, "text-4xl", "mb-3"], ["routerLink", "/buscar", "class", "mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 text-sm font-bold text-white hover:bg-brand-600", 4, "ngIf"], ["routerLink", "/buscar", 1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-5", "py-2", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"]], template: function MisReservasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u{1F3AB} Mis Reservas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Historial completo de tus viajes y excursiones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function MisReservasComponent_Template_button_click_9_listener() {
        return ctx.reload();
      });
      \u0275\u0275text(10, " \u21BB Actualizar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, " + Nueva reserva ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "span", 11);
      \u0275\u0275text(17, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_input_ngModelChange_18_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroTipo, $event) || (ctx.filtroTipo = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_19_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(20, "option", 14);
      \u0275\u0275text(21, "Todos los tipos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 15);
      \u0275\u0275text(23, "\u{1F6A2} Ruta de ferry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 16);
      \u0275\u0275text(25, "\u{1F3DD}\uFE0F Excursi\xF3n a isla");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_26_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(27, "option", 14);
      \u0275\u0275text(28, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 17);
      \u0275\u0275text(30, "\u23F3 Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 18);
      \u0275\u0275text(32, "\u2713 Confirmado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 19);
      \u0275\u0275text(34, "\u2708\uFE0F Realizado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 20);
      \u0275\u0275text(36, "\u2714 Completado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 21);
      \u0275\u0275text(38, "\u2717 Cancelado");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, MisReservasComponent_button_39_Template, 2, 0, "button", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, MisReservasComponent_div_40_Template, 5, 0, "div", 23)(41, MisReservasComponent_div_41_Template, 39, 10, "div", 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroTipo);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.hayFiltros);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReservasComponent, [{
    type: Component,
    args: [{ selector: "app-mis-reservas", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F3AB} Mis Reservas</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Historial completo de tus viajes y excursiones.</p>
      </div>
      <div class="flex gap-2">
        <button (click)="reload()"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-300">
          \u21BB Actualizar
        </button>
        <a routerLink="/buscar"
          class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">
          + Nueva reserva
        </a>
      </div>
    </div>
  </div>

  <!-- Filtros -->
  <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-wrap gap-3">
      <div class="relative min-w-[200px] flex-1">
        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">\u{1F50D}</span>
        <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()"
          placeholder="Ruta, embarcaci\xF3n..."
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <select [(ngModel)]="filtroTipo" (ngModelChange)="applyFilter()"
        class="h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los tipos</option>
        <option value="TICKET">\u{1F6A2} Ruta de ferry</option>
        <option value="ISLAND">\u{1F3DD}\uFE0F Excursi\xF3n a isla</option>
      </select>
      <select [(ngModel)]="filtroEstado" (ngModelChange)="applyFilter()"
        class="h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los estados</option>
        <option value="PENDING">\u23F3 Pendiente</option>
        <option value="CONFIRMED">\u2713 Confirmado</option>
        <option value="USED">\u2708\uFE0F Realizado</option>
        <option value="COMPLETED">\u2714 Completado</option>
        <option value="CANCELLED">\u2717 Cancelado</option>
      </select>
      <button *ngIf="hayFiltros" (click)="limpiar()"
        class="h-10 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
        Limpiar
      </button>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-16 gap-3">
    <div class="text-3xl animate-bounce">\u{1F6A4}</div>
    <p class="text-sm text-gray-400">Cargando reservas...</p>
  </div>

  <!-- Tabla -->
  <div *ngIf="!loading" class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-3 dark:border-gray-800">
      <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Lista de reservas</h3>
      <span class="text-xs text-gray-400">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">#</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Tipo</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Ruta</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Fecha</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Pax</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Total</th>
            <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let r of paginados; trackBy: trackById"
            class="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
            [class.border-l-2]="r.status === 'PENDING'"
            [class.border-l-amber-400]="r.status === 'PENDING'">

            <td class="px-5 py-3.5 text-xs text-gray-400">#{{ r.id }}</td>

            <td class="px-5 py-3.5">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold"
                [class.bg-blue-100]="r.type === 'TICKET'"
                [class.text-blue-700]="r.type === 'TICKET'"
                [class.dark:bg-blue-500\\/10]="r.type === 'TICKET'"
                [class.dark:text-blue-400]="r.type === 'TICKET'"
                [class.bg-teal-100]="r.type === 'ISLAND'"
                [class.text-teal-700]="r.type === 'ISLAND'"
                [class.dark:bg-teal-500\\/10]="r.type === 'ISLAND'"
                [class.dark:text-teal-400]="r.type === 'ISLAND'">
                {{ r.type === 'TICKET' ? '\u{1F6A2} Ferry' : '\u{1F3DD}\uFE0F Isla' }}
              </span>
            </td>

            <td class="px-5 py-3.5">
              <p class="font-medium text-gray-800 dark:text-white/90">{{ r.origen }} \u2192 {{ r.destino }}</p>
              <p *ngIf="r.extra" class="text-xs text-gray-400 mt-0.5">{{ r.extra }}</p>
            </td>

            <td class="px-5 py-3.5 text-gray-600 dark:text-gray-400">{{ r.embarcacion }}</td>

            <td class="px-5 py-3.5 text-xs text-gray-500 dark:text-gray-400">
              <div>{{ r.fecha | date:'dd/MM/yyyy' }}</div>
              <div class="text-gray-400">{{ r.hora }}</div>
            </td>

            <td class="px-5 py-3.5 text-gray-600 dark:text-gray-400">{{ r.pasajeros }}</td>

            <td class="px-5 py-3.5 font-semibold text-gray-800 dark:text-white/90">
              \${{ r.total | number:'1.2-2' }}
            </td>

            <td class="px-5 py-3.5 text-center">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="statusClase(r.status)">
                {{ statusLabel(r.status) }}
              </span>
            </td>

            <td class="px-5 py-3.5 text-right">
              <div class="flex items-center justify-end gap-2">
                <a *ngIf="r.type === 'TICKET'" [routerLink]="['/tickets', r.id]"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
                  Ver \u2192
                </a>
                <a *ngIf="r.type === 'ISLAND'" [routerLink]="['/mis-reservas', r.id]"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
                  Ver \u2192
                </a>
                <a *ngIf="r.type === 'ISLAND' && r.status === 'PENDING'"
                  [routerLink]="['/pagar-reserva']" [queryParams]="{ bookingId: r.id }"
                  class="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition">
                  \u{1F4B3} Pagar
                </a>
              </div>
            </td>

          </tr>
          <tr *ngIf="!loading && paginados.length === 0">
            <td colspan="9" class="py-14 text-center">
              <div class="text-4xl mb-3">\u{1F3AB}</div>
              <p class="text-sm text-gray-400">{{ hayFiltros ? 'No hay reservas con esos filtros.' : 'A\xFAn no tienes reservas.' }}</p>
              <a *ngIf="!hayFiltros" routerLink="/buscar"
                class="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 text-sm font-bold text-white hover:bg-brand-600">
                \u{1F50D} Buscar lanchas
              </a>
            </td>
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
        <button (click)="cambiarPagina(page + 1)" [disabled]="page >= totalPages || total === 0"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReservasComponent, { className: "MisReservasComponent", filePath: "src/app/pages/mis-reservas/mis-reservas.component.ts", lineNumber: 34 });
})();
export {
  MisReservasComponent
};
//# sourceMappingURL=chunk-G2QGSRBZ.js.map
