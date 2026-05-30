import {
  ReservationChatComponent
} from "./chunk-RVJMCZTW.js";
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
import "./chunk-7NRIB5KE.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/mis-reservas/detalle-reserva/detalle-reserva.component.ts
function DetalleReservaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Cargando reserva...");
    \u0275\u0275elementEnd()();
  }
}
function DetalleReservaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function DetalleReservaComponent_ng_container_3_img_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imageUrl(b_r3.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", b_r3.vessel == null ? null : b_r3.vessel.name);
  }
}
function DetalleReservaComponent_ng_container_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "\u{1F6A4}");
    \u0275\u0275elementEnd();
  }
}
function DetalleReservaComponent_ng_container_3_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2693 Capacidad: ", b_r3.vessel.capacity);
  }
}
function DetalleReservaComponent_ng_container_3_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "Duraci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", b_r3.outboundSlot.durationMinutes, " min");
  }
}
function DetalleReservaComponent_ng_container_3_div_60_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "Duraci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", b_r3.returnSlot.durationMinutes, " min");
  }
}
function DetalleReservaComponent_ng_container_3_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 29);
    \u0275\u0275text(2, "\u2190 Regreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31)(5, "span", 32);
    \u0275\u0275text(6, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 31)(10, "span", 32);
    \u0275\u0275text(11, "Hacia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "span", 32);
    \u0275\u0275text(16, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, DetalleReservaComponent_ng_container_3_div_60_div_19_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((b_r3.returnSlot.departurePoint == null ? null : b_r3.returnSlot.departurePoint.name) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((b_r3.returnSlot.arrivalPoint == null ? null : b_r3.returnSlot.arrivalPoint.name) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r3.returnSlot.departureTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.returnSlot.durationMinutes);
  }
}
function DetalleReservaComponent_ng_container_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2, "\u2190 Regreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Solo ida \u2014 sin vuelta incluida.");
    \u0275\u0275elementEnd()();
  }
}
function DetalleReservaComponent_ng_container_3_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Precio por persona (regreso)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 1, b_r3.returnSlot.pricePerPerson, "1.2-2"));
  }
}
function DetalleReservaComponent_ng_container_3_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p", 49);
    \u0275\u0275text(2, "\u{1F4DD} Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r3.specialRequests);
  }
}
function DetalleReservaComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div")(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6, "\u{1F3DD}\uFE0F Excursi\xF3n a isla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h1", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "button", 17);
    \u0275\u0275listener("click", function DetalleReservaComponent_ng_container_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chatOpen = true);
    });
    \u0275\u0275element(15, "i", 18);
    \u0275\u0275text(16, " Chat ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 19);
    \u0275\u0275text(18, " \u2190 Volver ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 20)(20, "div", 21)(21, "div", 22);
    \u0275\u0275template(22, DetalleReservaComponent_ng_container_3_img_22_Template, 1, 2, "img", 23)(23, DetalleReservaComponent_ng_container_3_div_23_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25)(25, "h2", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 27)(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, DetalleReservaComponent_ng_container_3_span_30_Template, 2, 1, "span", 3);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 28)(34, "div", 9)(35, "p", 29);
    \u0275\u0275text(36, "\u2192 Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 30)(38, "div", 31)(39, "span", 32);
    \u0275\u0275text(40, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 33);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 31)(44, "span", 32);
    \u0275\u0275text(45, "Hacia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 33);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 31)(49, "span", 32);
    \u0275\u0275text(50, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 33);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 31)(55, "span", 32);
    \u0275\u0275text(56, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 33);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, DetalleReservaComponent_ng_container_3_div_59_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, DetalleReservaComponent_ng_container_3_div_60_Template, 20, 4, "div", 35)(61, DetalleReservaComponent_ng_container_3_div_61_Template, 5, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 9)(63, "p", 37);
    \u0275\u0275text(64, "Resumen de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 30)(66, "div", 38)(67, "span");
    \u0275\u0275text(68, "Precio por persona (ida)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, DetalleReservaComponent_ng_container_3_div_72_Template, 6, 4, "div", 39);
    \u0275\u0275elementStart(73, "div", 38)(74, "span");
    \u0275\u0275text(75, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 40)(79, "span");
    \u0275\u0275text(80, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 41);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 42);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(86, DetalleReservaComponent_ng_container_3_div_86_Template, 5, 1, "div", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r0.statusClase(b_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(b_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (b_r3.departurePoint == null ? null : b_r3.departurePoint.name) ?? "\u2014", " \u2192 ", (b_r3.destination == null ? null : b_r3.destination.name) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Reserva #", b_r3.id);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", b_r3.vessel == null ? null : b_r3.vessel.photos == null ? null : b_r3.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(b_r3.vessel == null ? null : b_r3.vessel.photos == null ? null : b_r3.vessel.photos[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r3.vessel == null ? null : b_r3.vessel.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F465} ", b_r3.passengers, " pasajero", b_r3.passengers !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.vessel == null ? null : b_r3.vessel.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.tripType === "IDA_VUELTA" ? "\u2194\uFE0F Ida y vuelta" : "\u2192 Solo ida");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((b_r3.outboundSlot == null ? null : b_r3.outboundSlot.departurePoint == null ? null : b_r3.outboundSlot.departurePoint.name) ?? (b_r3.departurePoint == null ? null : b_r3.departurePoint.name) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((b_r3.destination == null ? null : b_r3.destination.name) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 25, b_r3.tripDate, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(b_r3.outboundSlot == null ? null : b_r3.outboundSlot.departureTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.outboundSlot == null ? null : b_r3.outboundSlot.durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.returnSlot);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !b_r3.returnSlot);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(71, 28, b_r3.outboundSlot == null ? null : b_r3.outboundSlot.pricePerPerson, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r3.returnSlot);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xD7 ", b_r3.passengers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(83, 31, b_r3.totalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tasaService.formatBs(b_r3.totalPrice), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r3.specialRequests);
  }
}
function DetalleReservaComponent_app_reservation_chat_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reservation-chat", 51);
    \u0275\u0275listener("closeChat", function DetalleReservaComponent_app_reservation_chat_4_Template_app_reservation_chat_closeChat_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chatOpen = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("bookingId", ctx_r0.booking.id)("clientUserId", ctx_r0.currentUserId)("providerUserId", 0)("title", ctx_r0.chatTitle);
  }
}
var DetalleReservaComponent = class _DetalleReservaComponent {
  route = inject(ActivatedRoute);
  service = inject(IslandTripsService);
  auth = inject(AuthService);
  tasaService = inject(TasaService);
  booking = null;
  loading = true;
  error = "";
  chatOpen = false;
  get currentUserId() {
    return this.auth.user()?.id ?? 0;
  }
  get chatTitle() {
    return this.booking?.destination?.name ?? `Excursi\xF3n #${this.booking?.id}`;
  }
  ngOnInit() {
    this.tasaService.load();
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getBookingById(id).subscribe({
      next: (b) => {
        this.booking = b;
        this.loading = false;
      },
      error: () => {
        this.error = "No se pudo cargar la reserva.";
        this.loading = false;
      }
    });
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  statusLabel(s) {
    const m = {
      CONFIRMED: "Confirmado",
      PENDING: "Pendiente de pago",
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
      ACTIVE: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
      COMPLETED: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
    };
    return m[s] ?? "bg-gray-100 text-gray-600";
  }
  static \u0275fac = function DetalleReservaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleReservaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleReservaComponent, selectors: [["app-detalle-reserva"]], decls: 5, vars: 4, consts: [[1, "space-y-5", "max-w-3xl"], ["class", "flex flex-col items-center justify-center py-20 gap-3", 4, "ngIf"], ["class", "rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [4, "ngIf"], ["bookingType", "ISLAND", 3, "bookingId", "clientUserId", "providerUserId", "title", "closeChat", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-3"], [1, "text-4xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-5", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "rounded-full", "bg-teal-100", "px-2.5", "py-1", "text-xs", "font-bold", "text-teal-700", "dark:bg-teal-500/15", "dark:text-teal-400"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-bold", 3, "ngClass"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-0.5"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "hover:bg-brand-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition-colors", 3, "click"], [1, "fas", "fa-comment-dots"], ["routerLink", "/mis-reservas", 1, "inline-flex", "items-center", "gap-1", "rounded-lg", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "sm:flex-row"], [1, "relative", "h-44", "w-full", "flex-shrink-0", "overflow-hidden", "bg-gradient-to-br", "from-blue-900", "to-slate-900", "sm:h-auto", "sm:w-52"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-6xl opacity-20", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "justify-center", "gap-3", "p-6"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "flex", "flex-wrap", "gap-4", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "space-y-2", "text-sm"], [1, "flex", "justify-between"], [1, "text-gray-500"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], ["class", "flex justify-between", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-5 dark:border-gray-700 dark:bg-white/[0.01]", 4, "ngIf"], [1, "mb-4", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "flex", "justify-between", "text-gray-600", "dark:text-gray-400"], ["class", "flex justify-between text-gray-600 dark:text-gray-400", 4, "ngIf"], [1, "flex", "justify-between", "border-t", "border-gray-100", "pt-2", "font-bold", "text-gray-800", "dark:border-gray-700", "dark:text-white/90"], [1, "text-lg", "text-brand-600", "dark:text-brand-400"], [1, "text-right", "text-xs", "text-gray-400"], ["class", "rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/30 dark:bg-amber-500/5", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-6xl", "opacity-20"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-200", "bg-gray-50/50", "p-5", "dark:border-gray-700", "dark:bg-white/[0.01]"], [1, "mb-1", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-300", "dark:text-gray-600"], [1, "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-5", "dark:border-amber-800/30", "dark:bg-amber-500/5"], [1, "mb-1", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-amber-600", "dark:text-amber-400"], [1, "text-sm", "text-amber-800", "dark:text-amber-300"], ["bookingType", "ISLAND", 3, "closeChat", "bookingId", "clientUserId", "providerUserId", "title"]], template: function DetalleReservaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DetalleReservaComponent_div_1_Template, 5, 0, "div", 1)(2, DetalleReservaComponent_div_2_Template, 2, 1, "div", 2)(3, DetalleReservaComponent_ng_container_3_Template, 87, 34, "ng-container", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, DetalleReservaComponent_app_reservation_chat_4_Template, 1, 4, "app-reservation-chat", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.booking);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.chatOpen && ctx.booking);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, ReservationChatComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleReservaComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-reserva", standalone: true, imports: [CommonModule, RouterModule, ReservationChatComponent], template: `<div class="space-y-5 max-w-3xl">

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-20 gap-3">
    <div class="text-4xl animate-bounce">\u{1F3DD}\uFE0F</div>
    <p class="text-sm text-gray-400">Cargando reserva...</p>
  </div>

  <!-- Error -->
  <div *ngIf="!loading && error"
    class="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ error }}
  </div>

  <ng-container *ngIf="!loading && booking as b">

    <!-- Header -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-bold text-teal-700 dark:bg-teal-500/15 dark:text-teal-400">\u{1F3DD}\uFE0F Excursi\xF3n a isla</span>
            <span class="rounded-full px-2.5 py-1 text-xs font-bold" [ngClass]="statusClase(b.status)">
              {{ statusLabel(b.status) }}
            </span>
          </div>
          <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">
            {{ b.departurePoint?.name ?? '\u2014' }} \u2192 {{ b.destination?.name ?? '\u2014' }}
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Reserva #{{ b.id }}</p>
        </div>
        <div class="flex items-center gap-2">
          <button (click)="chatOpen = true"
            class="inline-flex items-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors">
            <i class="fas fa-comment-dots"></i> Chat
          </button>
          <a routerLink="/mis-reservas"
            class="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
            \u2190 Volver
          </a>
        </div>
      </div>
    </div>

    <!-- Embarcaci\xF3n -->
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col sm:flex-row">
        <div class="relative h-44 w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 sm:h-auto sm:w-52">
          <img *ngIf="b.vessel?.photos?.[0]" [src]="imageUrl(b.vessel.photos![0])" [alt]="b.vessel?.name"
            class="h-full w-full object-cover" />
          <div *ngIf="!b.vessel?.photos?.[0]" class="flex h-full items-center justify-center text-6xl opacity-20">\u{1F6A4}</div>
        </div>
        <div class="flex flex-1 flex-col justify-center gap-3 p-6">
          <h2 class="text-lg font-bold text-gray-800 dark:text-white/90">{{ b.vessel?.name }}</h2>
          <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>\u{1F465} {{ b.passengers }} pasajero{{ b.passengers !== 1 ? 's' : '' }}</span>
            <span *ngIf="b.vessel?.capacity">\u2693 Capacidad: {{ b.vessel.capacity }}</span>
            <span>{{ b.tripType === 'IDA_VUELTA' ? '\u2194\uFE0F Ida y vuelta' : '\u2192 Solo ida' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Detalles del viaje -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

      <!-- Slot de ida -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">\u2192 Salida</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">Desde</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.outboundSlot?.departurePoint?.name ?? b.departurePoint?.name ?? '\u2014' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Hacia</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.destination?.name ?? '\u2014' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Fecha</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.tripDate | date:'dd/MM/yyyy' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Hora</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.outboundSlot?.departureTime }}</span>
          </div>
          <div *ngIf="b.outboundSlot?.durationMinutes" class="flex justify-between">
            <span class="text-gray-500">Duraci\xF3n</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.outboundSlot!.durationMinutes }} min</span>
          </div>
        </div>
      </div>

      <!-- Slot de regreso (si aplica) -->
      <div *ngIf="b.returnSlot" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">\u2190 Regreso</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">Desde</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.returnSlot.departurePoint?.name ?? '\u2014' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Hacia</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.returnSlot.arrivalPoint?.name ?? '\u2014' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Hora</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.returnSlot.departureTime }}</span>
          </div>
          <div *ngIf="b.returnSlot.durationMinutes" class="flex justify-between">
            <span class="text-gray-500">Duraci\xF3n</span>
            <span class="font-semibold text-gray-800 dark:text-white/90">{{ b.returnSlot.durationMinutes }} min</span>
          </div>
        </div>
      </div>

      <!-- Sin regreso placeholder -->
      <div *ngIf="!b.returnSlot" class="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-5 dark:border-gray-700 dark:bg-white/[0.01]">
        <p class="mb-1 text-xs font-bold uppercase tracking-widest text-gray-300 dark:text-gray-600">\u2190 Regreso</p>
        <p class="text-sm text-gray-400">Solo ida \u2014 sin vuelta incluida.</p>
      </div>

    </div>

    <!-- Resumen de pago -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Resumen de pago</p>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Precio por persona (ida)</span>
          <span>\${{ b.outboundSlot?.pricePerPerson | number:'1.2-2' }}</span>
        </div>
        <div *ngIf="b.returnSlot" class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Precio por persona (regreso)</span>
          <span>\${{ b.returnSlot.pricePerPerson | number:'1.2-2' }}</span>
        </div>
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Pasajeros</span>
          <span>\xD7 {{ b.passengers }}</span>
        </div>
        <div class="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-800 dark:border-gray-700 dark:text-white/90">
          <span>Total</span>
          <span class="text-lg text-brand-600 dark:text-brand-400">\${{ b.totalPrice | number:'1.2-2' }}</span>
        </div>
        <div class="text-right text-xs text-gray-400">
          {{ tasaService.formatBs(b.totalPrice) }}
        </div>
      </div>
    </div>

    <!-- Notas especiales -->
    <div *ngIf="b.specialRequests"
      class="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/30 dark:bg-amber-500/5">
      <p class="mb-1 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">\u{1F4DD} Solicitudes especiales</p>
      <p class="text-sm text-amber-800 dark:text-amber-300">{{ b.specialRequests }}</p>
    </div>

  </ng-container>

</div>

<app-reservation-chat
  *ngIf="chatOpen && booking"
  [bookingId]="booking.id"
  bookingType="ISLAND"
  [clientUserId]="currentUserId"
  [providerUserId]="0"
  [title]="chatTitle"
  (closeChat)="chatOpen = false">
</app-reservation-chat>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleReservaComponent, { className: "DetalleReservaComponent", filePath: "src/app/pages/mis-reservas/detalle-reserva/detalle-reserva.component.ts", lineNumber: 18 });
})();
export {
  DetalleReservaComponent
};
//# sourceMappingURL=chunk-6XNXDGWG.js.map
