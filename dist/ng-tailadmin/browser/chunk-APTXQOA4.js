import {
  ReservationChatComponent
} from "./chunk-RVJMCZTW.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import {
  IslandTripsService
} from "./chunk-NAARBNGA.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import "./chunk-YL27M2LI.js";
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
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
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/mis-reservas/mis-reservas.component.ts
var _c0 = () => ["/pagar-reserva"];
var _c1 = (a0) => ({ bookingId: a0 });
function MisReservasComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 11)(2, "p", 30);
    \u0275\u0275text(3, "Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "p", 30);
    \u0275\u0275text(8, "Charters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "p", 30);
    \u0275\u0275text(13, "Pendientes de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "p", 30);
    \u0275\u0275text(18, "Total gastado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 34);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 35);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalIsland);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalCharter);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pendingCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.gastadoTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(23, 5, ctx_r0.gastadoTotal, "1.2-2"), " USD");
  }
}
function MisReservasComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function MisReservasComponent_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.limpiar());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function MisReservasComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4, "Cargando reservas...");
    \u0275\u0275elementEnd()();
  }
}
function MisReservasComponent_div_43_tr_25_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r5.origen, " \u2192 ");
  }
}
function MisReservasComponent_div_43_tr_25_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.extra);
  }
}
function MisReservasComponent_div_43_tr_25_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F550} ", r_r5.hora);
  }
}
function MisReservasComponent_div_43_tr_25_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "span", 79)(2, "span", 80);
    \u0275\u0275elementEnd();
  }
}
function MisReservasComponent_div_43_tr_25_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2, " Pagar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0))("queryParams", \u0275\u0275pureFunction1(3, _c1, r_r5.id));
  }
}
function MisReservasComponent_div_43_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 55)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 55)(5, "p", 57);
    \u0275\u0275template(6, MisReservasComponent_div_43_tr_25_ng_container_6_Template, 2, 1, "ng-container", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MisReservasComponent_div_43_tr_25_p_8_Template, 2, 1, "p", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 59)(10, "p", 60);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 61)(15, "p", 62);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MisReservasComponent_div_43_tr_25_p_18_Template, 2, 1, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 64)(20, "span", 65);
    \u0275\u0275template(21, MisReservasComponent_div_43_tr_25_span_21_Template, 3, 0, "span", 66);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 67)(24, "p", 68);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 30);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 69);
    \u0275\u0275listener("click", function MisReservasComponent_div_43_tr_25_Template_td_click_29_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(30, "div", 70);
    \u0275\u0275template(31, MisReservasComponent_div_43_tr_25_a_31_Template, 3, 5, "a", 71);
    \u0275\u0275elementStart(32, "button", 72);
    \u0275\u0275listener("click", function MisReservasComponent_div_43_tr_25_Template_button_click_32_listener($event) {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChat(r_r5, $event));
    });
    \u0275\u0275element(33, "i", 73);
    \u0275\u0275elementStart(34, "span", 74);
    \u0275\u0275text(35, "Chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "a", 75);
    \u0275\u0275text(37, " Ver ");
    \u0275\u0275element(38, "i", 76);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-l-2", r_r5.status === "PENDING")("border-l-amber-400", r_r5.status === "PENDING");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.typeClase(r_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(r_r5.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r5.origen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r5.destino, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.extra);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.embarcacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} ", r_r5.pasajeros, " pax");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 20, r_r5.fecha, "dd MMM yyyy", "", "es"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r5.hora);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClase(r_r5.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(r_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(r_r5.total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(28, 25, r_r5.total, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r5.type === "ISLAND" && r_r5.status === "PENDING");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.detailRoute(r_r5));
  }
}
function MisReservasComponent_div_43_tr_26_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 87);
    \u0275\u0275text(1, " \u{1F50D} Buscar excursiones ");
    \u0275\u0275elementEnd();
  }
}
function MisReservasComponent_div_43_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83)(2, "div", 84);
    \u0275\u0275text(3, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MisReservasComponent_div_43_tr_26_a_6_Template, 2, 0, "a", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hayFiltros ? "No hay reservas con esos filtros." : "A\xFAn no tienes reservas.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hayFiltros);
  }
}
function MisReservasComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h3", 42);
    \u0275\u0275text(3, "Lista de reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "table", 44)(8, "thead", 45)(9, "tr")(10, "th", 46);
    \u0275\u0275text(11, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 46);
    \u0275\u0275text(13, "Destino / Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 47);
    \u0275\u0275text(19, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 48);
    \u0275\u0275text(21, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 48);
    \u0275\u0275text(23, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody", 49);
    \u0275\u0275template(25, MisReservasComponent_div_43_tr_25_Template, 39, 28, "tr", 50)(26, MisReservasComponent_div_43_tr_26_Template, 7, 2, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 52)(28, "p", 30);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 5)(31, "button", 53);
    \u0275\u0275listener("click", function MisReservasComponent_div_43_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(32, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 53);
    \u0275\u0275listener("click", function MisReservasComponent_div_43_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(34, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "\u2013", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.paginados)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page >= ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
function MisReservasComponent_app_reservation_chat_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reservation-chat", 88);
    \u0275\u0275listener("closeChat", function MisReservasComponent_app_reservation_chat_44_Template_app_reservation_chat_closeChat_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeChat());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("bookingId", ctx_r0.chatRow.id)("bookingType", ctx_r0.chatRow.type === "ISLAND" ? "ISLAND" : "CHARTER")("clientUserId", ctx_r0.currentUserId)("providerUserId", 0)("title", ctx_r0.chatRow.destino);
  }
}
var MisReservasComponent = class _MisReservasComponent {
  auth = inject(AuthService);
  tasaService = inject(TasaService);
  islandService = inject(IslandTripsService);
  alquileresService = inject(AlquileresService);
  rows = [];
  filtered = [];
  loading = true;
  search = "";
  filtroTipo = "";
  filtroEstado = "";
  // Chat
  chatRow = null;
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
    this.tasaService.load();
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
      bookings: this.islandService.getBookings({ clientId: id }),
      charters: this.alquileresService.getByClient(id)
    }).subscribe({
      next: ({ bookings, charters }) => {
        const bRows = bookings.map((b) => ({
          type: "ISLAND",
          id: b.id,
          status: b.status,
          fecha: b.tripDate ?? "",
          hora: b.outboundSlot?.departureTime?.slice(0, 5),
          origen: b.departurePoint?.name,
          destino: b.destination?.name ?? "\u2014",
          embarcacion: b.vessel?.name ?? "\u2014",
          pasajeros: b.passengers,
          total: Number(b.totalPrice),
          extra: b.tripType === "IDA_VUELTA" ? "Ida y vuelta" : "Solo ida",
          createdAt: b.createdAt ?? "",
          clientId: id
        }));
        const cRows = charters.map((a) => ({
          type: "CHARTER",
          id: a.id,
          status: a.status,
          fecha: a.startDate,
          destino: a.destination?.name ?? a.vessel?.name ?? "\u2014",
          embarcacion: a.vessel?.name ?? "\u2014",
          pasajeros: a.passengers,
          total: Number(a.totalPrice),
          extra: `${a.days} ${a.days === 1 ? "noche" : "noches"}`,
          createdAt: a.createdAt ?? "",
          clientId: id
        }));
        this.rows = [...bRows, ...cRows].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
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
      const matchSearch = !q || (r.origen ?? "").toLowerCase().includes(q) || r.destino.toLowerCase().includes(q) || r.embarcacion.toLowerCase().includes(q);
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
  // Stats
  get totalIsland() {
    return this.rows.filter((r) => r.type === "ISLAND").length;
  }
  get totalCharter() {
    return this.rows.filter((r) => r.type === "CHARTER").length;
  }
  get pendingCount() {
    return this.rows.filter((r) => r.status === "PENDING").length;
  }
  get gastadoTotal() {
    return this.rows.filter((r) => !["CANCELLED"].includes(r.status)).reduce((s, r) => s + r.total, 0);
  }
  // Chat
  openChat(r, e) {
    e.stopPropagation();
    this.chatRow = r;
  }
  closeChat() {
    this.chatRow = null;
  }
  get currentUserId() {
    return this.user?.id ?? 0;
  }
  // Helpers
  detailRoute(r) {
    if (r.type === "ISLAND")
      return ["/mis-reservas", String(r.id)];
    if (r.type === "CHARTER")
      return ["/alquileres", String(r.id)];
    return ["/mis-reservas"];
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
      COMPLETED: "bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
    };
    return m[s] ?? "bg-gray-100 text-gray-600";
  }
  typeLabel(t) {
    return t === "ISLAND" ? "\u{1F3DD}\uFE0F Excursi\xF3n" : "\u2693 Charter";
  }
  typeClase(t) {
    return t === "ISLAND" ? "bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400" : "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400";
  }
  static \u0275fac = function MisReservasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisReservasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisReservasComponent, selectors: [["app-mis-reservas"]], decls: 45, vars: 8, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "fas", "fa-rotate-right", "text-xs"], ["routerLink", "/buscar", 1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-brand-600", "transition"], [1, "fas", "fa-plus", "text-xs"], ["class", "grid grid-cols-2 gap-4 sm:grid-cols-4", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-wrap", "gap-3"], [1, "relative", "min-w-[200px]", "flex-1"], [1, "fas", "fa-search", "pointer-events-none", "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400", "text-xs", 2, "top", "50%", "transform", "translateY(-50%)"], ["type", "text", "placeholder", "Destino, embarcaci\xF3n...", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-10", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ISLAND"], ["value", "CHARTER"], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["class", "h-10 rounded-lg border border-gray-300 px-4 text-sm text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center py-16 gap-3", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [3, "bookingId", "bookingType", "clientUserId", "providerUserId", "title", "closeChat", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-4"], [1, "text-xs", "text-gray-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-teal-600", "dark:text-teal-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-purple-600", "dark:text-purple-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-amber-500"], [1, "mt-1", "text-lg", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-[10px]", "text-gray-400"], [1, "h-10", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "text-gray-500", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "flex", "items-center", "justify-center", "py-16", "gap-3"], [1, "text-3xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "group hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors", 3, "border-l-2", "border-l-amber-400", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-3", "border-t", "border-gray-100", "px-5", "py-3", "dark:border-gray-800", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "disabled:opacity-40", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], [1, "group", "hover:bg-gray-50/50", "dark:hover:bg-white/[0.02]", "transition-colors"], [1, "px-5", "py-4"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-medium", "text-gray-800", "dark:text-white/90", "truncate", "max-w-[180px]"], ["class", "text-xs text-gray-400 mt-0.5", 4, "ngIf"], [1, "px-5", "py-4", "text-gray-600", "dark:text-gray-400"], [1, "truncate", "max-w-[140px]"], [1, "px-5", "py-4", "text-sm"], [1, "text-gray-700", "dark:text-gray-300"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "px-5", "py-4", "text-center"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["class", "relative flex h-1.5 w-1.5", 4, "ngIf"], [1, "px-5", "py-4", "text-right"], [1, "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "px-5", "py-4", 3, "click"], [1, "flex", "items-center", "justify-end", "gap-1.5"], ["class", "inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "relative", "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-gray-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-400", "hover:text-brand-600", "dark:border-gray-700", "dark:text-gray-300", "transition", 3, "click"], [1, "fas", "fa-comment-dots", "text-xs"], [1, "hidden", "sm:inline"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "transition", 3, "routerLink"], [1, "fas", "fa-arrow-right", "text-[10px]"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "relative", "flex", "h-1.5", "w-1.5"], [1, "absolute", "inline-flex", "h-full", "w-full", "animate-ping", "rounded-full", "bg-current", "opacity-75"], [1, "relative", "inline-flex", "h-1.5", "w-1.5", "rounded-full", "bg-current"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-lg", "bg-amber-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-amber-600", "transition", 3, "routerLink", "queryParams"], [1, "fas", "fa-credit-card", "text-[10px]"], ["colspan", "7", 1, "py-16", "text-center"], [1, "text-5xl", "mb-3"], [1, "text-sm", "font-medium", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/buscar", "class", "mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600", 4, "ngIf"], ["routerLink", "/buscar", 1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"], [3, "closeChat", "bookingId", "bookingType", "clientUserId", "providerUserId", "title"]], template: function MisReservasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Mis Reservas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Excursiones a isla y charters privados.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function MisReservasComponent_Template_button_click_9_listener() {
        return ctx.reload();
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, " Actualizar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " Nueva reserva ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(15, MisReservasComponent_div_15_Template, 24, 8, "div", 10);
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13);
      \u0275\u0275element(19, "i", 14);
      \u0275\u0275elementStart(20, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_input_ngModelChange_20_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroTipo, $event) || (ctx.filtroTipo = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_21_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(22, "option", 17);
      \u0275\u0275text(23, "Todos los tipos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 18);
      \u0275\u0275text(25, "\u{1F3DD}\uFE0F Excursi\xF3n a isla");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 19);
      \u0275\u0275text(27, "\u2693 Charter privado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MisReservasComponent_Template_select_ngModelChange_28_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(29, "option", 17);
      \u0275\u0275text(30, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 20);
      \u0275\u0275text(32, "\u23F3 Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 21);
      \u0275\u0275text(34, "\u2713 Confirmado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 22);
      \u0275\u0275text(36, "\u{1F6A2} En curso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 23);
      \u0275\u0275text(38, "\u2714 Completado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 24);
      \u0275\u0275text(40, "\u2717 Cancelado");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, MisReservasComponent_button_41_Template, 2, 0, "button", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, MisReservasComponent_div_42_Template, 5, 0, "div", 26)(43, MisReservasComponent_div_43_Template, 35, 10, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, MisReservasComponent_app_reservation_chat_44_Template, 1, 5, "app-reservation-chat", 28);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(5);
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
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.chatRow);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ReservationChatComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisReservasComponent, [{
    type: Component,
    args: [{ selector: "app-mis-reservas", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReservationChatComponent], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">Mis Reservas</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Excursiones a isla y charters privados.</p>
      </div>
      <div class="flex gap-2">
        <button (click)="reload()"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-300">
          <i class="fas fa-rotate-right text-xs"></i> Actualizar
        </button>
        <a routerLink="/buscar"
          class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition">
          <i class="fas fa-plus text-xs"></i> Nueva reserva
        </a>
      </div>
    </div>
  </div>

  <!-- KPIs -->
  <div *ngIf="!loading" class="grid grid-cols-2 gap-4 sm:grid-cols-4">
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Excursiones</p>
      <p class="mt-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400">{{ totalIsland }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Charters</p>
      <p class="mt-1 text-2xl font-extrabold text-purple-600 dark:text-purple-400">{{ totalCharter }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Pendientes de pago</p>
      <p class="mt-1 text-2xl font-extrabold text-amber-500">{{ pendingCount }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Total gastado</p>
      <p class="mt-1 text-lg font-extrabold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(gastadoTotal) }}</p>
      <p class="text-[10px] text-gray-400">\${{ gastadoTotal | number:'1.2-2' }} USD</p>
    </div>
  </div>

  <!-- Filtros -->
  <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-wrap gap-3">
      <div class="relative min-w-[200px] flex-1">
        <i class="fas fa-search pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400 text-xs" style="top:50%;transform:translateY(-50%)"></i>
        <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()"
          placeholder="Destino, embarcaci\xF3n..."
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <select [(ngModel)]="filtroTipo" (ngModelChange)="applyFilter()"
        class="h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los tipos</option>
        <option value="ISLAND">\u{1F3DD}\uFE0F Excursi\xF3n a isla</option>
        <option value="CHARTER">\u2693 Charter privado</option>
      </select>
      <select [(ngModel)]="filtroEstado" (ngModelChange)="applyFilter()"
        class="h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los estados</option>
        <option value="PENDING">\u23F3 Pendiente</option>
        <option value="CONFIRMED">\u2713 Confirmado</option>
        <option value="ACTIVE">\u{1F6A2} En curso</option>
        <option value="COMPLETED">\u2714 Completado</option>
        <option value="CANCELLED">\u2717 Cancelado</option>
      </select>
      <button *ngIf="hayFiltros" (click)="limpiar()"
        class="h-10 rounded-lg border border-gray-300 px-4 text-sm text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
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
      <span class="text-xs text-gray-400">{{ rangoInicio }}\u2013{{ rangoFin }} de {{ total }}</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Tipo</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Destino / Ruta</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Fecha</th>
            <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Total</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">

          <tr *ngFor="let r of paginados; trackBy: trackById"
            class="group hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
            [class.border-l-2]="r.status === 'PENDING'"
            [class.border-l-amber-400]="r.status === 'PENDING'">

            <!-- Tipo -->
            <td class="px-5 py-4">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="typeClase(r.type)">
                {{ typeLabel(r.type) }}
              </span>
            </td>

            <!-- Destino -->
            <td class="px-5 py-4">
              <p class="font-medium text-gray-800 dark:text-white/90 truncate max-w-[180px]">
                <ng-container *ngIf="r.origen">{{ r.origen }} \u2192 </ng-container>{{ r.destino }}
              </p>
              <p *ngIf="r.extra" class="text-xs text-gray-400 mt-0.5">{{ r.extra }}</p>
            </td>

            <!-- Embarcaci\xF3n -->
            <td class="px-5 py-4 text-gray-600 dark:text-gray-400">
              <p class="truncate max-w-[140px]">{{ r.embarcacion }}</p>
              <p class="text-xs text-gray-400">\u{1F465} {{ r.pasajeros }} pax</p>
            </td>

            <!-- Fecha -->
            <td class="px-5 py-4 text-sm">
              <p class="text-gray-700 dark:text-gray-300">{{ r.fecha | date:'dd MMM yyyy':'':'es' }}</p>
              <p *ngIf="r.hora" class="text-xs text-gray-400">\u{1F550} {{ r.hora }}</p>
            </td>

            <!-- Estado -->
            <td class="px-5 py-4 text-center">
              <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="statusClase(r.status)">
                <span *ngIf="r.status === 'ACTIVE'" class="relative flex h-1.5 w-1.5">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
                  <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-current"></span>
                </span>
                {{ statusLabel(r.status) }}
              </span>
            </td>

            <!-- Total -->
            <td class="px-5 py-4 text-right">
              <p class="font-bold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(r.total) }}</p>
              <p class="text-xs text-gray-400">\${{ r.total | number:'1.2-2' }}</p>
            </td>

            <!-- Acciones -->
            <td class="px-5 py-4" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-end gap-1.5">

                <!-- Pagar (solo PENDING island) -->
                <a *ngIf="r.type === 'ISLAND' && r.status === 'PENDING'"
                  [routerLink]="['/pagar-reserva']" [queryParams]="{ bookingId: r.id }"
                  class="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition">
                  <i class="fas fa-credit-card text-[10px]"></i> Pagar
                </a>

                <!-- Chat -->
                <button (click)="openChat(r, $event)"
                  class="relative inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-300 transition">
                  <i class="fas fa-comment-dots text-xs"></i>
                  <span class="hidden sm:inline">Chat</span>
                </button>

                <!-- Ver detalle -->
                <a [routerLink]="detailRoute(r)"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 transition">
                  Ver <i class="fas fa-arrow-right text-[10px]"></i>
                </a>

              </div>
            </td>

          </tr>

          <!-- Vac\xEDo -->
          <tr *ngIf="paginados.length === 0">
            <td colspan="7" class="py-16 text-center">
              <div class="text-5xl mb-3">\u{1F3DD}\uFE0F</div>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                {{ hayFiltros ? 'No hay reservas con esos filtros.' : 'A\xFAn no tienes reservas.' }}
              </p>
              <a *ngIf="!hayFiltros" routerLink="/buscar"
                class="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600">
                \u{1F50D} Buscar excursiones
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

<!-- Chat panel -->
<app-reservation-chat
  *ngIf="chatRow"
  [bookingId]="chatRow.id"
  [bookingType]="chatRow.type === 'ISLAND' ? 'ISLAND' : 'CHARTER'"
  [clientUserId]="currentUserId"
  [providerUserId]="0"
  [title]="chatRow.destino"
  (closeChat)="closeChat()">
</app-reservation-chat>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisReservasComponent, { className: "MisReservasComponent", filePath: "src/app/pages/mis-reservas/mis-reservas.component.ts", lineNumber: 40 });
})();
export {
  MisReservasComponent
};
//# sourceMappingURL=chunk-APTXQOA4.js.map
