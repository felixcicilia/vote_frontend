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
import "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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

// src/app/pages/reservas-isla/lista-reservas-isla.component.ts
function ListaReservasIslaComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Cargando reservas...");
    \u0275\u0275elementEnd();
  }
}
function ListaReservasIslaComponent_div_25_tr_29_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_tr_29_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const b_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStatus(b_r3, "CONFIRMED"));
    });
    \u0275\u0275text(1, "\u2713 Confirmar pago");
    \u0275\u0275elementEnd();
  }
}
function ListaReservasIslaComponent_div_25_tr_29_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_tr_29_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const b_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStatus(b_r3, "ACTIVE"));
    });
    \u0275\u0275text(1, "\u{1F6A2} Iniciar viaje");
    \u0275\u0275elementEnd();
  }
}
function ListaReservasIslaComponent_div_25_tr_29_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_tr_29_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const b_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStatus(b_r3, "COMPLETED"));
    });
    \u0275\u0275text(1, "\u{1F3C1} Completar");
    \u0275\u0275elementEnd();
  }
}
function ListaReservasIslaComponent_div_25_tr_29_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_tr_29_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const b_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancel(b_r3));
    });
    \u0275\u0275text(1, "Cancelar");
    \u0275\u0275elementEnd();
  }
}
function ListaReservasIslaComponent_div_25_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 33)(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 37)(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 37)(20, "span", 41);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 33)(23, "div", 42);
    \u0275\u0275template(24, ListaReservasIslaComponent_div_25_tr_29_button_24_Template, 2, 0, "button", 43)(25, ListaReservasIslaComponent_div_25_tr_29_button_25_Template, 2, 0, "button", 44)(26, ListaReservasIslaComponent_div_25_tr_29_button_26_Template, 2, 0, "button", 45)(27, ListaReservasIslaComponent_div_25_tr_29_button_27_Template, 2, 0, "button", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", b_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", b_r3.client.firstName, " ", b_r3.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.client.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((b_r3.vessel == null ? null : b_r3.vessel.name) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.tripDate);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", b_r3.tripType === "IDA")("text-blue-700", b_r3.tripType === "IDA")("bg-purple-100", b_r3.tripType === "IDA_VUELTA")("text-purple-700", b_r3.tripType === "IDA_VUELTA");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r3.tripType === "IDA" ? "\u2192 Ida" : "\u21C4 Ida y vuelta", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.passengers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", b_r3.totalPrice);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.statusClass(b_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.statusLabel(b_r3.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", b_r3.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.status === "CONFIRMED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.status === "PENDING" || b_r3.status === "CONFIRMED");
  }
}
function ListaReservasIslaComponent_div_25_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "No se encontraron reservas.");
    \u0275\u0275elementEnd()();
  }
}
function ListaReservasIslaComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h3", 19);
    \u0275\u0275text(3, "Lista de reservas de isla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "table", 22)(8, "thead")(9, "tr", 23)(10, "th", 24);
    \u0275\u0275text(11, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 24);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21, "Pax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 26);
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 25);
    \u0275\u0275text(25, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 26);
    \u0275\u0275text(27, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, ListaReservasIslaComponent_div_25_tr_29_Template, 28, 23, "tr", 27)(30, ListaReservasIslaComponent_div_25_tr_30_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 29)(32, "p", 20);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 30)(35, "button", 31);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cambiarPagina(ctx_r3.page - 1));
    });
    \u0275\u0275text(36, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 31);
    \u0275\u0275listener("click", function ListaReservasIslaComponent_div_25_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cambiarPagina(ctx_r3.page + 1));
    });
    \u0275\u0275text(38, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r3.rangoInicio, "-", ctx_r3.rangoFin, " de ", ctx_r3.total);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r3.paginados)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.paginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r3.page, " de ", ctx_r3.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.page === ctx_r3.totalPages || ctx_r3.total === 0);
  }
}
var ListaReservasIslaComponent = class _ListaReservasIslaComponent {
  service = inject(IslandTripsService);
  auth = inject(AuthService);
  get isProveedor() {
    return this.auth.role() === "PROVEEDOR";
  }
  get pageTitle() {
    return this.isProveedor ? "Mis reservas de excursi\xF3n" : "Reservas de isla";
  }
  get pageSubtitle() {
    return this.isProveedor ? "Reservas recibidas para tus embarcaciones." : "Gestiona las reservas de viajes a islas y cayos.";
  }
  loading = true;
  bookings = [];
  filterStatus = "ALL";
  search = "";
  page = 1;
  limit = 10;
  get filtered() {
    const term = this.search.trim().toLowerCase();
    return this.bookings.filter((b) => {
      const matchStatus = this.filterStatus === "ALL" || b.status === this.filterStatus;
      const matchSearch = !term || `${b.client.firstName} ${b.client.lastName}`.toLowerCase().includes(term) || b.client.email.toLowerCase().includes(term) || (b.vessel?.name ?? "").toLowerCase().includes(term) || b.tripDate.includes(term);
      return matchStatus && matchSearch;
    });
  }
  get total() {
    return this.filtered.length;
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
    return this.filtered.slice((this.page - 1) * this.limit, this.page * this.limit);
  }
  cambiarPagina(n) {
    if (n >= 1 && n <= this.totalPages)
      this.page = n;
  }
  onSearchChange() {
    this.page = 1;
  }
  onFilterChange() {
    this.page = 1;
  }
  trackById(_, b) {
    return b.id;
  }
  statuses = ["ALL", "PENDING", "CONFIRMED", "ACTIVE", "COMPLETED", "CANCELLED"];
  ngOnInit() {
    const user = this.auth.user();
    const params = this.isProveedor && user?.id ? { providerId: user.id } : {};
    this.service.getBookings(params).subscribe({
      next: (b) => {
        this.bookings = b;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  updateStatus(booking, status) {
    this.service.updateBooking(booking.id, { status }).subscribe({
      next: () => {
        const idx = this.bookings.findIndex((b) => b.id === booking.id);
        if (idx !== -1)
          this.bookings[idx] = __spreadProps(__spreadValues({}, this.bookings[idx]), { status });
      },
      error: (err) => {
        const msg = err?.error?.message;
        alert("Error: " + (typeof msg === "string" ? msg : "No se pudo actualizar el estado"));
      }
    });
  }
  cancel(booking) {
    const reason = prompt("Motivo de cancelaci\xF3n (opcional):") ?? "";
    this.service.updateBooking(booking.id, { status: "CANCELLED", cancellationReason: reason || void 0 }).subscribe({
      next: () => {
        const idx = this.bookings.findIndex((b) => b.id === booking.id);
        if (idx !== -1)
          this.bookings[idx] = __spreadProps(__spreadValues({}, this.bookings[idx]), { status: "CANCELLED", cancellationReason: reason || null });
      },
      error: (err) => {
        const msg = err?.error?.message;
        alert("Error: " + (typeof msg === "string" ? msg : "No se pudo cancelar"));
      }
    });
  }
  count(status) {
    if (status === "ALL")
      return this.bookings.length;
    return this.bookings.filter((b) => b.status === status).length;
  }
  statusLabel(s) {
    const map = {
      ALL: "Todos",
      PENDING: "Pendiente",
      CONFIRMED: "Confirmado",
      ACTIVE: "Activo",
      COMPLETED: "Completado",
      CANCELLED: "Cancelado"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    const map = {
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      ACTIVE: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    };
    return map[s] ?? "bg-gray-100 text-gray-600";
  }
  static \u0275fac = function ListaReservasIslaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaReservasIslaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaReservasIslaComponent, selectors: [["app-lista-reservas-isla"]], decls: 26, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-col", "gap-4", "lg:flex-row"], ["type", "text", "placeholder", "Buscar por cliente, email, embarcaci\xF3n o fecha...", 1, "h-11", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4", "text-sm", "text-gray-500"], [1, "px-5", "py-4"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4", "text-center"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium"], [1, "px-5", "py-4", "text-center", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4", "text-right", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/80"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1.5"], ["class", "rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50", 3, "click", 4, "ngIf"], ["class", "rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-50", 3, "click", 4, "ngIf"], ["class", "rounded-lg border border-green-200 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50", 3, "click", 4, "ngIf"], ["class", "rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50", 3, "click", 4, "ngIf"], [1, "rounded-lg", "border", "border-blue-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:bg-blue-50", 3, "click"], [1, "rounded-lg", "border", "border-brand-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", 3, "click"], [1, "rounded-lg", "border", "border-green-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-green-600", "hover:bg-green-50", 3, "click"], [1, "rounded-lg", "border", "border-red-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:bg-red-50", 3, "click"], ["colspan", "9", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaReservasIslaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 1)(9, "div", 5)(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ListaReservasIslaComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaReservasIslaComponent_Template_input_ngModelChange_10_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ListaReservasIslaComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaReservasIslaComponent_Template_select_ngModelChange_11_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Confirmado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Activo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "Completado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Cancelado");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, ListaReservasIslaComponent_div_24_Template, 2, 0, "div", 14)(25, ListaReservasIslaComponent_div_25_Template, 39, 10, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.pageTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageSubtitle);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaReservasIslaComponent, [{
    type: Component,
    args: [{ selector: "app-lista-reservas-isla", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">{{ pageTitle }}</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ pageSubtitle }}</p>
      </div>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row">
      <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por cliente, email, embarcaci\xF3n o fecha..."
        class="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      <select [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()"
        class="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="ALL">Todos los estados</option>
        <option value="PENDING">Pendiente</option>
        <option value="CONFIRMED">Confirmado</option>
        <option value="ACTIVE">Activo</option>
        <option value="COMPLETED">Completado</option>
        <option value="CANCELLED">Cancelado</option>
      </select>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando reservas...</div>

  <div *ngIf="!loading" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de reservas de isla</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">#</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Fecha</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Tipo</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Pax</th>
            <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Total</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let b of paginados; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4 text-sm text-gray-500">#{{ b.id }}</td>
            <td class="px-5 py-4">
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ b.client.firstName }} {{ b.client.lastName }}</p>
              <p class="text-xs text-gray-400">{{ b.client.email }}</p>
            </td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ b.vessel?.name ?? '\u2014' }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ b.tripDate }}</td>
            <td class="px-5 py-4 text-center">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
                [class.bg-blue-100]="b.tripType === 'IDA'" [class.text-blue-700]="b.tripType === 'IDA'"
                [class.bg-purple-100]="b.tripType === 'IDA_VUELTA'" [class.text-purple-700]="b.tripType === 'IDA_VUELTA'">
                {{ b.tripType === 'IDA' ? '\u2192 Ida' : '\u21C4 Ida y vuelta' }}
              </span>
            </td>
            <td class="px-5 py-4 text-center text-sm text-gray-700 dark:text-gray-300">{{ b.passengers }}</td>
            <td class="px-5 py-4 text-right text-sm font-semibold text-gray-800 dark:text-white/80">\${{ b.totalPrice }}</td>
            <td class="px-5 py-4 text-center">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="statusClass(b.status)">
                {{ statusLabel(b.status) }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-end gap-1.5">
                <button *ngIf="b.status === 'PENDING'" (click)="updateStatus(b, 'CONFIRMED')"
                  class="rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50">\u2713 Confirmar pago</button>
                <button *ngIf="b.status === 'CONFIRMED'" (click)="updateStatus(b, 'ACTIVE')"
                  class="rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-50">\u{1F6A2} Iniciar viaje</button>
                <button *ngIf="b.status === 'ACTIVE'" (click)="updateStatus(b, 'COMPLETED')"
                  class="rounded-lg border border-green-200 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50">\u{1F3C1} Completar</button>
                <button *ngIf="b.status === 'PENDING' || b.status === 'CONFIRMED'" (click)="cancel(b)"
                  class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50">Cancelar</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="9" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron reservas.</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaReservasIslaComponent, { className: "ListaReservasIslaComponent", filePath: "src/app/pages/reservas-isla/lista-reservas-isla.component.ts", lineNumber: 14 });
})();
export {
  ListaReservasIslaComponent
};
//# sourceMappingURL=chunk-UBJIIBHG.js.map
