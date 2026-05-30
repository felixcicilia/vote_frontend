import {
  ReservationChatComponent
} from "./chunk-RVJMCZTW.js";
import {
  IslandTripsService
} from "./chunk-NAARBNGA.js";
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
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  environment,
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

// src/app/pages/reservas-isla/detalle-reserva-isla/detalle-reserva-isla.component.ts
function DetalleReservaIslaComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Cargando reserva... ");
    \u0275\u0275elementEnd();
  }
}
function DetalleReservaIslaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span");
    \u0275\u0275text(2, "\u26D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 65);
    \u0275\u0275text(5, "Motivo de cancelaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.booking.cancellationReason);
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_9_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 74);
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.booking.status) > i_r2 ? "bg-brand-400" : "bg-gray-200 dark:bg-gray-700");
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 70)(2, "div", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DetalleReservaIslaComponent_ng_container_16_div_9_ng_container_2_div_6_Template, 1, 1, "div", 73);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r2 = ctx.index;
    const last_r4 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.booking.status) >= i_r2 ? "bg-brand-500 text-white shadow-md" : "bg-gray-100 text-gray-400 dark:bg-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r3.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.booking.status) >= i_r2 ? "text-brand-600 dark:text-brand-400" : "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r4);
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275template(2, DetalleReservaIslaComponent_ng_container_16_div_9_ng_container_2_Template, 7, 5, "ng-container", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.steps);
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl(ctx_r0.booking.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r0.booking.vessel.name);
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " \u{1F6A2} ");
    \u0275\u0275elementEnd();
  }
}
function DetalleReservaIslaComponent_ng_container_16_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F465} ", ctx_r0.booking.vessel.capacity, " pax");
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 78);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 43);
    \u0275\u0275text(5, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r0.booking.vessel.provider == null ? null : ctx_r0.booking.vessel.provider.companyName) ?? "\u2014");
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span");
    \u0275\u0275text(2, "\u23F1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Duraci\xF3n aprox. ", ctx_r0.durationLabel(ctx_r0.booking.outboundSlot.durationMinutes));
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_103_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span");
    \u0275\u0275text(2, "\u23F1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Duraci\xF3n aprox. ", ctx_r0.durationLabel(ctx_r0.booking.returnSlot.durationMinutes));
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p", 81);
    \u0275\u0275text(2, "\u2190 Regreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 5)(5, "span", 52);
    \u0275\u0275text(6, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 82);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 83)(10, "span");
    \u0275\u0275text(11, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, DetalleReservaIslaComponent_ng_container_16_div_103_div_14_Template, 5, 1, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(ctx_r0.booking.returnSlot == null ? null : ctx_r0.booking.returnSlot.departureTime));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.booking.returnSlot == null ? null : ctx_r0.booking.returnSlot.departurePoint == null ? null : ctx_r0.booking.returnSlot.departurePoint.name, " \u2192 ", ctx_r0.booking.returnSlot == null ? null : ctx_r0.booking.returnSlot.arrivalPoint == null ? null : ctx_r0.booking.returnSlot.arrivalPoint.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.returnSlot == null ? null : ctx_r0.booking.returnSlot.durationMinutes);
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 86);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "span", 61);
    \u0275\u0275text(5, "Pago confirmado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.booking.confirmedAt));
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 87);
    \u0275\u0275text(2, "\u{1F3C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "span", 61);
    \u0275\u0275text(5, "Viaje completado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.booking.completedAt));
  }
}
function DetalleReservaIslaComponent_ng_container_16_div_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "p", 89);
    \u0275\u0275text(2, "Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.booking.specialRequests);
  }
}
function DetalleReservaIslaComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 15)(3, "div", 16)(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DetalleReservaIslaComponent_ng_container_16_div_8_Template, 8, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DetalleReservaIslaComponent_ng_container_16_div_9_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "div", 23);
    \u0275\u0275template(13, DetalleReservaIslaComponent_ng_container_16_div_13_Template, 2, 2, "div", 24)(14, DetalleReservaIslaComponent_ng_container_16_div_14_Template, 2, 0, "div", 25);
    \u0275\u0275elementStart(15, "div", 26)(16, "p", 27);
    \u0275\u0275text(17, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 29)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, DetalleReservaIslaComponent_ng_container_16_span_23_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 30)(25, "p", 27);
    \u0275\u0275text(26, "Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 31)(28, "div", 5)(29, "span", 32);
    \u0275\u0275text(30, "\u{1F6A2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "p", 33);
    \u0275\u0275text(33, "Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 34);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 35);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(38, "div", 36);
    \u0275\u0275elementStart(39, "div", 5)(40, "span", 37);
    \u0275\u0275text(41, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "p", 33);
    \u0275\u0275text(44, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 34);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 35);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(49, "div", 38)(50, "div", 1)(51, "p", 39);
    \u0275\u0275text(52, "Partes involucradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 40)(54, "div", 41)(55, "div", 42);
    \u0275\u0275text(56, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "p", 43);
    \u0275\u0275text(59, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 34);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 35);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, DetalleReservaIslaComponent_ng_container_16_div_64_Template, 8, 1, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 1)(66, "p", 39);
    \u0275\u0275text(67, "Detalles del viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 45)(69, "div")(70, "p", 35);
    \u0275\u0275text(71, "Fecha del viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 46);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "p", 35);
    \u0275\u0275text(76, "Tipo de viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 47);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div")(80, "p", 35);
    \u0275\u0275text(81, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 46);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(84, "div", 1)(85, "p", 39);
    \u0275\u0275text(86, "Horarios de embarque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 48)(88, "div", 49)(89, "p", 50);
    \u0275\u0275text(90, "\u2192 Ida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 51)(92, "div", 5)(93, "span", 52);
    \u0275\u0275text(94, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 53);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 54)(98, "span");
    \u0275\u0275text(99, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(102, DetalleReservaIslaComponent_ng_container_16_div_102_Template, 5, 1, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(103, DetalleReservaIslaComponent_ng_container_16_div_103_Template, 15, 4, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 1)(105, "p", 39);
    \u0275\u0275text(106, "Resumen de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 45)(108, "div")(109, "p", 35);
    \u0275\u0275text(110, "Precio / persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p", 46);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div")(115, "p", 35);
    \u0275\u0275text(116, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p", 46);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div")(120, "p", 35);
    \u0275\u0275text(121, "Total pagado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p", 57);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(125, "div", 1)(126, "p", 39);
    \u0275\u0275text(127, "Historial de eventos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 58)(129, "div", 16)(130, "span", 59);
    \u0275\u0275text(131, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 60)(133, "span", 61);
    \u0275\u0275text(134, "Reserva creada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span", 35);
    \u0275\u0275text(136);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(137, DetalleReservaIslaComponent_ng_container_16_div_137_Template, 8, 1, "div", 62)(138, DetalleReservaIslaComponent_ng_container_16_div_138_Template, 8, 1, "div", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(139, DetalleReservaIslaComponent_ng_container_16_div_139_Template, 5, 1, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(ctx_r0.booking.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(ctx_r0.booking.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Creada el ", ctx_r0.formatDateTime(ctx_r0.booking.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.status === "CANCELLED" && ctx_r0.booking.cancellationReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.status !== "CANCELLED");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.booking.vessel == null ? null : ctx_r0.booking.vessel.photos == null ? null : ctx_r0.booking.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.booking.vessel == null ? null : ctx_r0.booking.vessel.photos == null ? null : ctx_r0.booking.vessel.photos[0]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.booking.vessel.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.booking.vessel.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.vessel.capacity);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2(" ", ctx_r0.booking.departurePoint == null ? null : ctx_r0.booking.departurePoint.icon, " ", ctx_r0.booking.departurePoint == null ? null : ctx_r0.booking.departurePoint.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.booking.departurePoint == null ? null : ctx_r0.booking.departurePoint.city, ", ", ctx_r0.booking.departurePoint == null ? null : ctx_r0.booking.departurePoint.state);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", ctx_r0.booking.destination == null ? null : ctx_r0.booking.destination.icon, " ", ctx_r0.booking.destination == null ? null : ctx_r0.booking.destination.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.booking.destination == null ? null : ctx_r0.booking.destination.city, ", ", ctx_r0.booking.destination == null ? null : ctx_r0.booking.destination.state);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate2("", ctx_r0.booking.client.firstName, " ", ctx_r0.booking.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.booking.client.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.vessel.provider);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.booking.tripDate));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.booking.tripType === "IDA" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400" : "bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.tripType === "IDA" ? "\u2192 Solo ida" : "\u21C4 Ida y vuelta", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.booking.passengers, " pax");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sm:grid-cols-2", ctx_r0.booking.returnSlot);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(ctx_r0.booking.outboundSlot == null ? null : ctx_r0.booking.outboundSlot.departureTime));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.booking.outboundSlot == null ? null : ctx_r0.booking.outboundSlot.departurePoint == null ? null : ctx_r0.booking.outboundSlot.departurePoint.name, " \u2192 ", ctx_r0.booking.outboundSlot == null ? null : ctx_r0.booking.outboundSlot.arrivalPoint == null ? null : ctx_r0.booking.outboundSlot.arrivalPoint.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.outboundSlot == null ? null : ctx_r0.booking.outboundSlot.durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.returnSlot);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(113, 40, ctx_r0.booking.passengers > 0 ? ctx_r0.booking.totalPrice / ctx_r0.booking.passengers : ctx_r0.booking.totalPrice, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xD7 ", ctx_r0.booking.passengers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(124, 43, ctx_r0.booking.totalPrice, "1.2-2"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.booking.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.confirmedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.specialRequests);
  }
}
function DetalleReservaIslaComponent_app_reservation_chat_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reservation-chat", 91);
    \u0275\u0275listener("closeChat", function DetalleReservaIslaComponent_app_reservation_chat_17_Template_app_reservation_chat_closeChat_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chatOpen = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("bookingId", ctx_r0.booking.id)("clientUserId", ctx_r0.chatClientId)("providerUserId", ctx_r0.chatProviderId)("title", ctx_r0.chatTitle);
  }
}
var DetalleReservaIslaComponent = class _DetalleReservaIslaComponent {
  service = inject(IslandTripsService);
  route = inject(ActivatedRoute);
  auth = inject(AuthService);
  loading = false;
  errorMessage = "";
  booking = null;
  chatOpen = false;
  get isMaster() {
    const r = this.auth.role();
    return r === "MASTER" || r === "ADMINISTRADOR";
  }
  get isProveedor() {
    return this.auth.role() === "PROVEEDOR";
  }
  get backRoute() {
    return "/reservas-isla";
  }
  get chatClientId() {
    return this.booking?.client?.id ?? 0;
  }
  get chatProviderId() {
    return this.auth.user()?.id ?? 0;
  }
  get chatTitle() {
    const c = this.booking?.client;
    return c ? `${c.firstName} ${c.lastName}` : `Excursi\xF3n #${this.booking?.id}`;
  }
  steps = [
    { key: "PENDING", label: "Pendiente", icon: "\u{1F550}" },
    { key: "CONFIRMED", label: "Confirmado", icon: "\u2705" },
    { key: "ACTIVE", label: "En curso", icon: "\u{1F6A2}" },
    { key: "COMPLETED", label: "Completado", icon: "\u{1F3C1}" }
  ];
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getBookingById(id).subscribe({
      next: (b) => {
        this.booking = b;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la reserva.";
        this.loading = false;
      }
    });
  }
  stepIndex(status) {
    const order = ["PENDING", "CONFIRMED", "ACTIVE", "COMPLETED"];
    return order.indexOf(status);
  }
  statusLabel(s) {
    return { PENDING: "Pendiente", CONFIRMED: "Confirmado", ACTIVE: "Activo", COMPLETED: "Completado", CANCELLED: "Cancelado" }[s] ?? s;
  }
  statusClass(s) {
    return {
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      ACTIVE: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    }[s] ?? "";
  }
  imageUrl(url) {
    if (!url)
      return "";
    return url.startsWith("http") ? url : `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("es-VE", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
  }
  formatDateTime(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("es-VE", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  formatTime(t) {
    if (!t)
      return "\u2014";
    return t.substring(0, 5);
  }
  durationLabel(minutes) {
    if (!minutes)
      return "\u2014";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h === 0)
      return `${m} min`;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  }
  static \u0275fac = function DetalleReservaIslaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleReservaIslaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleReservaIslaComponent, selectors: [["app-detalle-reserva-isla"]], decls: 18, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "hover:bg-brand-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition-colors", 3, "click"], [1, "fas", "fa-comment-dots"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.05]", 3, "routerLink"], ["class", "rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [4, "ngIf"], ["bookingType", "ISLAND", 3, "bookingId", "clientUserId", "providerUserId", "title", "closeChat", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-10", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "rounded-full", "px-3", "py-1.5", "text-sm", "font-semibold", 3, "ngClass"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "mt-6", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-3"], [1, "space-y-5", "lg:col-span-1"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["class", "h-40 w-full overflow-hidden", 4, "ngIf"], ["class", "flex h-32 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-5xl opacity-30 dark:from-slate-800 dark:to-slate-900", 4, "ngIf"], [1, "p-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "mt-1", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-2", "flex", "flex-wrap", "gap-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mt-3", "space-y-2"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-sm", "dark:bg-blue-500/20"], [1, "text-[10px]", "uppercase", "text-gray-400"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "ml-3.5", "h-5", "w-0.5", "bg-gray-200", "dark:bg-gray-700"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", "bg-green-100", "text-sm", "dark:bg-green-500/20"], [1, "space-y-5", "lg:col-span-2"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-lg", "dark:bg-blue-500/20"], [1, "text-[11px]", "uppercase", "tracking-widest", "text-gray-400"], ["class", "flex items-start gap-3", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-3"], [1, "mt-1", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "grid", "grid-cols-1", "gap-4"], [1, "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-4", "dark:border-blue-800/30", "dark:bg-blue-500/10"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-widest", "text-blue-600", "dark:text-blue-400"], [1, "mt-3", "space-y-1.5", "text-sm"], [1, "text-gray-400"], [1, "font-bold", "text-blue-700", "dark:text-blue-300", "text-lg"], [1, "flex", "items-center", "gap-2", "text-xs", "text-blue-600", "dark:text-blue-400"], ["class", "flex items-center gap-2 text-xs text-blue-500 dark:text-blue-400", 4, "ngIf"], ["class", "rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-800/30 dark:bg-purple-500/10", 4, "ngIf"], [1, "mt-1", "text-xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "space-y-3"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-sm", "dark:bg-gray-800"], [1, "flex", "flex-1", "items-center", "justify-between"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["class", "flex items-center gap-3", 4, "ngIf"], ["class", "rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/30 dark:bg-amber-500/10", 4, "ngIf"], [1, "flex", "items-start", "gap-2", "rounded-xl", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-700", "dark:bg-red-500/10", "dark:text-red-400"], [1, "font-semibold"], [1, "mt-0.5"], [1, "mt-6"], [1, "flex", "items-center", "gap-0"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "gap-1", "min-w-0"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "text-base", "transition", 3, "ngClass"], [1, "text-[10px]", "font-medium", "leading-tight", "text-center", 3, "ngClass"], ["class", "h-0.5 flex-1 mx-1", 3, "ngClass", 4, "ngIf"], [1, "h-0.5", "flex-1", "mx-1", 3, "ngClass"], [1, "h-40", "w-full", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-32", "items-center", "justify-center", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "text-5xl", "opacity-30", "dark:from-slate-800", "dark:to-slate-900"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-green-100", "text-lg", "dark:bg-green-500/20"], [1, "flex", "items-center", "gap-2", "text-xs", "text-blue-500", "dark:text-blue-400"], [1, "rounded-xl", "border", "border-purple-200", "bg-purple-50", "p-4", "dark:border-purple-800/30", "dark:bg-purple-500/10"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-widest", "text-purple-600", "dark:text-purple-400"], [1, "font-bold", "text-purple-700", "dark:text-purple-300", "text-lg"], [1, "flex", "items-center", "gap-2", "text-xs", "text-purple-600", "dark:text-purple-400"], ["class", "flex items-center gap-2 text-xs text-purple-500 dark:text-purple-400", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-xs", "text-purple-500", "dark:text-purple-400"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-sm", "dark:bg-blue-500/20"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-green-100", "text-sm", "dark:bg-green-500/20"], [1, "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-4", "dark:border-amber-800/30", "dark:bg-amber-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-amber-600", "dark:text-amber-400"], [1, "mt-2", "text-sm", "text-amber-700", "dark:text-amber-300"], ["bookingType", "ISLAND", 3, "closeChat", "bookingId", "clientUserId", "providerUserId", "title"]], template: function DetalleReservaIslaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Detalle del viaje a isla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function DetalleReservaIslaComponent_Template_button_click_9_listener() {
        return ctx.chatOpen = true;
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, " Chat ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13, " \u2190 Volver ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(14, DetalleReservaIslaComponent_div_14_Template, 2, 0, "div", 9)(15, DetalleReservaIslaComponent_div_15_Template, 2, 1, "div", 10)(16, DetalleReservaIslaComponent_ng_container_16_Template, 140, 46, "ng-container", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DetalleReservaIslaComponent_app_reservation_chat_17_Template, 1, 4, "app-reservation-chat", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Excursi\xF3n #", ctx.booking == null ? null : ctx.booking.id);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.backRoute);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.booking);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.chatOpen && ctx.booking);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReservationChatComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleReservaIslaComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-reserva-isla", standalone: true, imports: [CommonModule, RouterModule, ReservationChatComponent], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Excursi\xF3n #{{ booking?.id }}</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Detalle del viaje a isla.</p>
      </div>
      <div class="flex items-center gap-2">
        <button (click)="chatOpen = true"
          class="inline-flex items-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors">
          <i class="fas fa-comment-dots"></i> Chat
        </button>
        <a [routerLink]="backRoute"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.05]">
          \u2190 Volver
        </a>
      </div>
    </div>
  </div>

  <!-- Loading / Error -->
  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando reserva...
  </div>
  <div *ngIf="!loading && errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <ng-container *ngIf="!loading && booking">

    <!-- \u2500\u2500 Estado + Timeline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <span class="inline-flex rounded-full px-3 py-1.5 text-sm font-semibold" [ngClass]="statusClass(booking.status)">
            {{ statusLabel(booking.status) }}
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Creada el {{ formatDateTime(booking.createdAt) }}
          </span>
        </div>
        <div *ngIf="booking.status === 'CANCELLED' && booking.cancellationReason"
          class="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
          <span>\u26D4</span>
          <div>
            <p class="font-semibold">Motivo de cancelaci\xF3n</p>
            <p class="mt-0.5">{{ booking.cancellationReason }}</p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div *ngIf="booking.status !== 'CANCELLED'" class="mt-6">
        <div class="flex items-center gap-0">
          <ng-container *ngFor="let step of steps; let i = index; let last = last">
            <div class="flex flex-col items-center gap-1 min-w-0">
              <div class="flex h-9 w-9 items-center justify-center rounded-full text-base transition"
                [ngClass]="stepIndex(booking.status) >= i
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-400 dark:bg-gray-800'">
                {{ step.icon }}
              </div>
              <span class="text-[10px] font-medium leading-tight text-center"
                [ngClass]="stepIndex(booking.status) >= i ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400'">
                {{ step.label }}
              </span>
            </div>
            <div *ngIf="!last" class="h-0.5 flex-1 mx-1"
              [ngClass]="stepIndex(booking.status) > i ? 'bg-brand-400' : 'bg-gray-200 dark:bg-gray-700'">
            </div>
          </ng-container>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Grid principal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

      <!-- Columna izquierda -->
      <div class="space-y-5 lg:col-span-1">

        <!-- Embarcaci\xF3n -->
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <div *ngIf="booking.vessel?.photos?.[0]" class="h-40 w-full overflow-hidden">
            <img [src]="imageUrl(booking.vessel.photos![0])" [alt]="booking.vessel.name" class="h-full w-full object-cover" />
          </div>
          <div *ngIf="!booking.vessel?.photos?.[0]"
            class="flex h-32 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-5xl opacity-30 dark:from-slate-800 dark:to-slate-900">
            \u{1F6A2}
          </div>
          <div class="p-4">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Embarcaci\xF3n</p>
            <p class="mt-1 text-lg font-bold text-gray-800 dark:text-white/90">{{ booking.vessel.name }}</p>
            <div class="mt-2 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{{ booking.vessel.type }}</span>
              <span *ngIf="booking.vessel.capacity">\u{1F465} {{ booking.vessel.capacity }} pax</span>
            </div>
          </div>
        </div>

        <!-- Ruta -->
        <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Ruta</p>
          <div class="mt-3 space-y-2">
            <div class="flex items-center gap-2">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm dark:bg-blue-500/20">\u{1F6A2}</span>
              <div>
                <p class="text-[10px] uppercase text-gray-400">Salida</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {{ booking.departurePoint?.icon }} {{ booking.departurePoint?.name }}
                </p>
                <p class="text-xs text-gray-400">{{ booking.departurePoint?.city }}, {{ booking.departurePoint?.state }}</p>
              </div>
            </div>
            <div class="ml-3.5 h-5 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div class="flex items-center gap-2">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm dark:bg-green-500/20">\u{1F3DD}\uFE0F</span>
              <div>
                <p class="text-[10px] uppercase text-gray-400">Destino</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {{ booking.destination?.icon }} {{ booking.destination?.name }}
                </p>
                <p class="text-xs text-gray-400">{{ booking.destination?.city }}, {{ booking.destination?.state }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Columna derecha -->
      <div class="space-y-5 lg:col-span-2">

        <!-- Cliente + proveedor -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Partes involucradas</p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg dark:bg-blue-500/20">\u{1F464}</div>
              <div>
                <p class="text-[11px] uppercase tracking-widest text-gray-400">Cliente</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ booking.client.firstName }} {{ booking.client.lastName }}</p>
                <p class="text-xs text-gray-400">{{ booking.client.email }}</p>
              </div>
            </div>
            <div *ngIf="booking.vessel.provider" class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-lg dark:bg-green-500/20">\u{1F3E2}</div>
              <div>
                <p class="text-[11px] uppercase tracking-widest text-gray-400">Proveedor</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ booking.vessel.provider?.companyName ?? '\u2014' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Detalles del viaje -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Detalles del viaje</p>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p class="text-xs text-gray-400">Fecha del viaje</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ formatDate(booking.tripDate) }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Tipo de viaje</p>
              <span class="mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold"
                [ngClass]="booking.tripType === 'IDA' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-400'">
                {{ booking.tripType === 'IDA' ? '\u2192 Solo ida' : '\u21C4 Ida y vuelta' }}
              </span>
            </div>
            <div>
              <p class="text-xs text-gray-400">Pasajeros</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ booking.passengers }} pax</p>
            </div>
          </div>
        </div>

        <!-- Slots de salida / regreso -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Horarios de embarque</p>
          <div class="grid grid-cols-1 gap-4" [class.sm:grid-cols-2]="booking.returnSlot">

            <!-- Slot de ida -->
            <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800/30 dark:bg-blue-500/10">
              <p class="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">\u2192 Ida</p>
              <div class="mt-3 space-y-1.5 text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-gray-400">\u{1F550}</span>
                  <span class="font-bold text-blue-700 dark:text-blue-300 text-lg">{{ formatTime(booking.outboundSlot?.departureTime) }}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <span>\u{1F4CD}</span>
                  <span>{{ booking.outboundSlot?.departurePoint?.name }} \u2192 {{ booking.outboundSlot?.arrivalPoint?.name }}</span>
                </div>
                <div *ngIf="booking.outboundSlot?.durationMinutes" class="flex items-center gap-2 text-xs text-blue-500 dark:text-blue-400">
                  <span>\u23F1</span>
                  <span>Duraci\xF3n aprox. {{ durationLabel(booking.outboundSlot!.durationMinutes) }}</span>
                </div>
              </div>
            </div>

            <!-- Slot de regreso -->
            <div *ngIf="booking.returnSlot"
              class="rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-800/30 dark:bg-purple-500/10">
              <p class="text-[11px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">\u2190 Regreso</p>
              <div class="mt-3 space-y-1.5 text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-gray-400">\u{1F550}</span>
                  <span class="font-bold text-purple-700 dark:text-purple-300 text-lg">{{ formatTime(booking.returnSlot?.departureTime) }}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                  <span>\u{1F4CD}</span>
                  <span>{{ booking.returnSlot?.departurePoint?.name }} \u2192 {{ booking.returnSlot?.arrivalPoint?.name }}</span>
                </div>
                <div *ngIf="booking.returnSlot?.durationMinutes" class="flex items-center gap-2 text-xs text-purple-500 dark:text-purple-400">
                  <span>\u23F1</span>
                  <span>Duraci\xF3n aprox. {{ durationLabel(booking.returnSlot!.durationMinutes) }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Pago -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Resumen de pago</p>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p class="text-xs text-gray-400">Precio / persona</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                \${{ (booking.passengers > 0 ? booking.totalPrice / booking.passengers : booking.totalPrice) | number:'1.2-2' }}
              </p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Pasajeros</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">\xD7 {{ booking.passengers }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Total pagado</p>
              <p class="mt-1 text-xl font-extrabold text-brand-600 dark:text-brand-400">\${{ booking.totalPrice | number:'1.2-2' }}</p>
            </div>
          </div>
        </div>

        <!-- Historial de eventos -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Historial de eventos</p>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm dark:bg-gray-800">\u{1F4CB}</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Reserva creada</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(booking.createdAt) }}</span>
              </div>
            </div>
            <div *ngIf="booking.confirmedAt" class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm dark:bg-blue-500/20">\u2705</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Pago confirmado</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(booking.confirmedAt) }}</span>
              </div>
            </div>
            <div *ngIf="booking.completedAt" class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm dark:bg-green-500/20">\u{1F3C1}</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Viaje completado</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(booking.completedAt) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Solicitudes especiales -->
        <div *ngIf="booking.specialRequests"
          class="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/30 dark:bg-amber-500/10">
          <p class="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">Solicitudes especiales</p>
          <p class="mt-2 text-sm text-amber-700 dark:text-amber-300">{{ booking.specialRequests }}</p>
        </div>

      </div>
    </div>

  </ng-container>

</div>

<!-- Chat panel -->
<app-reservation-chat
  *ngIf="chatOpen && booking"
  [bookingId]="booking.id"
  bookingType="ISLAND"
  [clientUserId]="chatClientId"
  [providerUserId]="chatProviderId"
  [title]="chatTitle"
  (closeChat)="chatOpen = false">
</app-reservation-chat>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleReservaIslaComponent, { className: "DetalleReservaIslaComponent", filePath: "src/app/pages/reservas-isla/detalle-reserva-isla/detalle-reserva-isla.component.ts", lineNumber: 16 });
})();
export {
  DetalleReservaIslaComponent
};
//# sourceMappingURL=chunk-6ZNPUDXD.js.map
