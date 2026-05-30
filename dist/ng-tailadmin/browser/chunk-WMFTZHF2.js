import {
  CaptainsService
} from "./chunk-NRCCU5JU.js";
import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import {
  IslandTripsService
} from "./chunk-NAARBNGA.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  FormsModule
} from "./chunk-7NRIB5KE.js";
import {
  Router,
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
  ViewChild,
  environment,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/inicio/inicio.component.ts
var _c0 = ["ofertasTrack"];
var _c1 = () => ({ tipo: "lancha" });
var _c2 = (a0, a1) => ["/alquileres", a0, a1];
var _c3 = () => ["/pagar-reserva"];
var _c4 = (a0) => ({ bookingId: a0 });
var _c5 = (a0) => ["/mis-reservas", a0];
var _c6 = (a0) => ["/alquileres", a0];
var _c7 = (a0, a1, a2, a3) => ({ "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400": a0, "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400": a1, "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400": a2, "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400": a3 });
function InicioComponent_ng_container_0_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(n_r2.badgeColor ?? "bg-blue-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r2.badge, " ");
  }
}
function InicioComponent_ng_container_0_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r2.subtitulo);
  }
}
function InicioComponent_ng_container_0_div_2_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1, " Ver m\xE1s \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", n_r2.link);
  }
}
function InicioComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32)(2, "div", 33);
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275template(4, InicioComponent_ng_container_0_div_2_span_4_Template, 2, 3, "span", 35);
    \u0275\u0275elementStart(5, "h2", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InicioComponent_ng_container_0_div_2_p_7_Template, 2, 1, "p", 37)(8, InicioComponent_ng_container_0_div_2_a_8_Template, 2, 1, "a", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("opacity", i_r3 === ctx_r3.slideActual() ? "1" : "0")("z-index", i_r3 === ctx_r3.slideActual() ? "1" : "0");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + n_r2.imageUrl + ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", n_r2.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r2.titulo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.subtitulo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.link);
  }
}
function InicioComponent_ng_container_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_button_8_Template_button_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.irASlide(i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("w-6", i_r6 === ctx_r3.slideActual())("w-2", i_r6 !== ctx_r3.slideActual())("bg-white", i_r6 === ctx_r3.slideActual())("bg-white/40", i_r6 !== ctx_r3.slideActual());
  }
}
function InicioComponent_ng_container_0_div_9_a_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 59);
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.imageUrl(e_r8.photos[0]), \u0275\u0275sanitizeUrl)("alt", e_r8.name);
  }
}
function InicioComponent_ng_container_0_div_9_a_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r8.type === "YATE" ? "\u26F5" : "\u{1F6E5}\uFE0F", " ");
  }
}
function InicioComponent_ng_container_0_div_9_a_16_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3, "/d\xEDa");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", e_r8.pricePerDay);
  }
}
function InicioComponent_ng_container_0_div_9_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "div", 52);
    \u0275\u0275template(2, InicioComponent_ng_container_0_div_9_a_16_img_2_Template, 1, 2, "img", 53)(3, InicioComponent_ng_container_0_div_9_a_16_div_3_Template, 2, 1, "div", 54);
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56)(7, "p", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InicioComponent_ng_container_0_div_9_a_16_p_11_Template, 4, 1, "p", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(7, _c2, e_r8.type === "YATE" ? "yate" : "catamaran", e_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", e_r8.photos == null ? null : e_r8.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(e_r8.photos == null ? null : e_r8.photos[0]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", e_r8.type === "YATE" ? "Yate" : "Catamar\xE1n", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} ", e_r8.capacity, " personas");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r8.pricePerDay);
  }
}
function InicioComponent_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div")(3, "h2", 26);
    \u0275\u0275text(4, "Yates y Catamaranes disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "a", 47);
    \u0275\u0275text(9, "Ver todos \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.scrollOfertas(-1));
    });
    \u0275\u0275text(11, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 48);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_div_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.scrollOfertas(1));
    });
    \u0275\u0275text(13, " \u203A ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 49, 0);
    \u0275\u0275template(16, InicioComponent_ng_container_0_div_9_a_16_Template, 12, 10, "a", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.yatesYCatamaranes.length, " embarcaciones \xB7 Alquiler exclusivo");
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("-webkit-overflow-scrolling", "touch");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.yatesYCatamaranes);
  }
}
function InicioComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "p", 65);
    \u0275\u0275text(3, "Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 67);
    \u0275\u0275text(7, "Ver \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 64)(9, "p", 65);
    \u0275\u0275text(10, "Charters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 68);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 69);
    \u0275\u0275text(14, "Ver \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "p", 65);
    \u0275\u0275text(17, "Pendientes de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 64)(21, "p", 65);
    \u0275\u0275text(22, "Total gastado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 71);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 72);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.clienteTotalExcursiones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.clienteTotalCharters);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("text-amber-500", ctx_r3.clientePendientePago > 0)("text-gray-400", ctx_r3.clientePendientePago === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.clientePendientePago, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.tasaService.formatBs(ctx_r3.clienteGastadoTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(27, 9, ctx_r3.clienteGastadoTotal, "1.2-2"), " USD");
  }
}
function InicioComponent_ng_container_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 74);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "p", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7, "Completa el pago para confirmar tu lugar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 78);
    \u0275\u0275text(9, " Pagar ahora \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" Tienes ", ctx_r3.excursionesPendientesPago.length, " reserva", ctx_r3.excursionesPendientesPago.length > 1 ? "s" : "", " pendiente", ctx_r3.excursionesPendientesPago.length > 1 ? "s" : "", " de pago ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c3))("queryParams", \u0275\u0275pureFunction1(6, _c4, ctx_r3.excursionesPendientesPago[0].id));
  }
}
function InicioComponent_ng_container_0_div_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "p", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 87);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 89);
    \u0275\u0275text(12, "Ver \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((b_r9.destination == null ? null : b_r9.destination.name) ?? (b_r9.vessel == null ? null : b_r9.vessel.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 5, b_r9.tripDate, "EEE dd MMM", "", "es"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", b_r9.passengers, " pax \xB7 ", b_r9.vessel == null ? null : b_r9.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c5, b_r9.id));
  }
}
function InicioComponent_ng_container_0_div_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "p", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 93);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 94);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 95);
    \u0275\u0275text(12, "Ver \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.proximoCharter.vessel == null ? null : ctx_r3.proximoCharter.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 5, ctx_r3.proximoCharter.startDate, "EEE dd MMM", "", "es"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.proximoCharter.passengers, " pax \xB7 ", ctx_r3.proximoCharter.days, " noches");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c6, ctx_r3.proximoCharter.id));
  }
}
function InicioComponent_ng_container_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 79);
    \u0275\u0275text(2, "\u{1F4C5} Pr\xF3ximos viajes confirmados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275template(4, InicioComponent_ng_container_0_div_40_div_4_Template, 13, 12, "div", 81)(5, InicioComponent_ng_container_0_div_40_div_5_Template, 13, 12, "div", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.excursionesProximas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.proximoCharter);
  }
}
function InicioComponent_ng_container_0_div_41_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 100)(1, "span", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102)(4, "p", 103);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 65);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 104)(10, "p", 105);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 106);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", a_r10.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r10.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r10.tipo, " \xB7 ", \u0275\u0275pipeBind2(8, 8, a_r10.fecha, "dd MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 11, a_r10.monto, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.statusClass(a_r10.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.statusLabel(a_r10.estado), " ");
  }
}
function InicioComponent_ng_container_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "h2", 26);
    \u0275\u0275text(3, "Actividad reciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 27);
    \u0275\u0275text(5, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 98);
    \u0275\u0275template(7, InicioComponent_ng_container_0_div_41_a_7_Template, 15, 14, "a", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.actividadReciente);
  }
}
function InicioComponent_ng_container_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function InicioComponent_ng_container_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 110);
    \u0275\u0275text(4, "A\xFAn no tienes excursiones reservadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 111);
    \u0275\u0275text(6, " Buscar excursi\xF3n \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function InicioComponent_ng_container_0_div_50_div_1_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 122);
    \u0275\u0275text(1, " Pagar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c3))("queryParams", \u0275\u0275pureFunction1(3, _c4, b_r11.id));
  }
}
function InicioComponent_ng_container_0_div_50_div_1_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 123);
    \u0275\u0275text(1, " Ver ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c5, b_r11.id));
  }
}
function InicioComponent_ng_container_0_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102)(4, "p", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 117)(11, "span", 118);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 119);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, InicioComponent_ng_container_0_div_50_div_1_a_16_Template, 2, 5, "a", 120)(17, InicioComponent_ng_container_0_div_50_div_1_a_17_Template, 2, 3, "a", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (b_r11.departurePoint == null ? null : b_r11.departurePoint.name) ?? "\u2014", " \u2192 ", (b_r11.destination == null ? null : b_r11.destination.name) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", b_r11.tripDate, " \xB7 ", b_r11.outboundSlot == null ? null : b_r11.outboundSlot.departureTime, " \xB7 ", b_r11.passengers, " pax ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r11.vessel == null ? null : b_r11.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(14, _c7, b_r11.status === "PENDING", b_r11.status === "CONFIRMED", b_r11.status === "ACTIVE", b_r11.status === "COMPLETED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r11.status === "PENDING" ? "Pendiente de pago" : b_r11.status === "CONFIRMED" ? "Confirmada \u2713" : b_r11.status === "ACTIVE" ? "En curso \u{1F6A2}" : "Completada", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 11, b_r11.totalPrice, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r11.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r11.status !== "PENDING");
  }
}
function InicioComponent_ng_container_0_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, InicioComponent_ng_container_0_div_50_div_1_Template, 18, 19, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.misExcursiones);
  }
}
function InicioComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, InicioComponent_ng_container_0_div_2_Template, 9, 10, "div", 3);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevSlide());
    });
    \u0275\u0275text(4, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextSlide());
    });
    \u0275\u0275text(6, " \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, InicioComponent_ng_container_0_button_8_Template, 1, 8, "button", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InicioComponent_ng_container_0_div_9_Template, 17, 4, "div", 8)(10, InicioComponent_ng_container_0_div_10_Template, 28, 12, "div", 9);
    \u0275\u0275elementStart(11, "div", 10)(12, "h2", 11);
    \u0275\u0275text(13, "\xBFQu\xE9 necesitas?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "a", 13)(16, "div", 14);
    \u0275\u0275text(17, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 17);
    \u0275\u0275text(22, "Lancha R\xE1pida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "Viajes directos a las islas m\xE1s r\xE1pido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275text(26, " Ver precios \u2192 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "a", 20)(28, "div", 14);
    \u0275\u0275text(29, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15)(31, "span", 16);
    \u0275\u0275text(32, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3", 17);
    \u0275\u0275text(34, "Alquilar Yate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 18);
    \u0275\u0275text(36, "Yates y catamaranes exclusivos para grupos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19);
    \u0275\u0275text(38, " Ver disponibilidad \u2192 ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(39, InicioComponent_ng_container_0_div_39_Template, 10, 8, "div", 21)(40, InicioComponent_ng_container_0_div_40_Template, 6, 2, "div", 22)(41, InicioComponent_ng_container_0_div_41_Template, 8, 1, "div", 23);
    \u0275\u0275elementStart(42, "div", 24)(43, "div", 25)(44, "h2", 26);
    \u0275\u0275text(45, "Mis excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 27);
    \u0275\u0275text(47, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, InicioComponent_ng_container_0_div_48_Template, 2, 0, "div", 28)(49, InicioComponent_ng_container_0_div_49_Template, 7, 0, "div", 29)(50, InicioComponent_ng_container_0_div_50_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.noticias);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.noticias);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.yatesYCatamaranes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading);
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c1));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.excursionesPendientesPago.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && (ctx_r3.excursionesProximas.length > 0 || ctx_r3.proximoCharter));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.actividadReciente.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.misExcursiones.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.misExcursiones.length > 0);
  }
}
function InicioComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126)(2, "div", 127);
    \u0275\u0275text(3, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 128);
    \u0275\u0275text(5, "Cargando tu panel...");
    \u0275\u0275elementEnd()()();
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 128);
    \u0275\u0275text(4, "Sin eventos en los pr\xF3ximos 60 d\xEDas");
    \u0275\u0275elementEnd()();
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_50_a_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F550} ", ev_r12.time);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_50_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 157)(1, "div", 158);
    \u0275\u0275element(2, "span", 159);
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 161);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 102)(9, "p", 162);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 163);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, InicioComponent_ng_container_1_ng_container_2_div_50_a_1_p_13_Template, 2, 1, "p", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 165);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", ev_r12.route);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.eventTypeColor(ev_r12.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 11, ev_r12.date, "dd MMM", "", "es"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ev_r12.daysFrom === 0 ? "bg-red-100 text-red-600" : ev_r12.daysFrom <= 2 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.daysLabel(ev_r12.daysFrom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u26F5 ", ev_r12.vessel, " \xB7 \u{1F464} ", ev_r12.client);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ev_r12.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.statusClass(ev_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.statusLabel(ev_r12.status), " ");
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, InicioComponent_ng_container_1_ng_container_2_div_50_a_1_Template, 16, 16, "a", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.upcomingEvents);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 128);
    \u0275\u0275text(4, "Sin embarcaciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 166);
    \u0275\u0275text(6, "Agregar \u2192");
    \u0275\u0275elementEnd()();
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_59_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 175);
  }
  if (rf & 2) {
    const va_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.imageUrl(va_r13.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", va_r13.vessel.name);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const va_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.typeIcon(va_r13.vessel.type));
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_59_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 177);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const va_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pr\xF3x: ", \u0275\u0275pipeBind4(2, 1, va_r13.nextDate, "dd MMM", "", "es"), " ");
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "div", 168);
    \u0275\u0275template(2, InicioComponent_ng_container_1_ng_container_2_div_59_img_2_Template, 1, 2, "img", 169)(3, InicioComponent_ng_container_1_ng_container_2_div_59_div_3_Template, 2, 1, "div", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 102)(5, "p", 171);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 172)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, InicioComponent_ng_container_1_ng_container_2_div_59_p_12_Template, 3, 6, "p", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 104)(14, "p", 174);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 72);
    \u0275\u0275text(17, "viajes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const va_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", va_r13.vessel.photos == null ? null : va_r13.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(va_r13.vessel.photos == null ? null : va_r13.vessel.photos[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(va_r13.vessel.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u26F5 ", va_r13.charterCount, "ch");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F3DD}\uFE0F ", va_r13.islandCount, "exc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", va_r13.nextDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(va_r13.totalTrips);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_60_div_7_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 175);
  }
  if (rf & 2) {
    const ca_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r3.captainPhotoUrl(ca_r14.captain), \u0275\u0275sanitizeUrl)("alt", ca_r14.captain.firstName);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_60_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ca_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.captainInitials(ca_r14.captain), " ");
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_60_div_7_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ca_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Lic. ", ca_r14.captain.licenseNumber);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_60_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183)(2, "div", 184);
    \u0275\u0275template(3, InicioComponent_ng_container_1_ng_container_2_div_60_div_7_img_3_Template, 1, 2, "img", 169)(4, InicioComponent_ng_container_1_ng_container_2_div_60_div_7_div_4_Template, 2, 1, "div", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 102)(7, "p", 187);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, InicioComponent_ng_container_1_ng_container_2_div_60_div_7_p_9_Template, 2, 1, "p", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 189)(11, "div")(12, "p", 190);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 72);
    \u0275\u0275text(15, "asignados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "p", 191);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 72);
    \u0275\u0275text(20, "completados");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ca_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.captainPhotoUrl(ca_r14.captain));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.captainPhotoUrl(ca_r14.captain));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ca_r14.captain.firstName, " ", ca_r14.captain.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ca_r14.captain.licenseNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ca_r14.assignedCharters);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ca_r14.completedTrips);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 97)(2, "h3", 146);
    \u0275\u0275text(3, "\u{1F468}\u200D\u2708\uFE0F Actividad por capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 179);
    \u0275\u0275text(5, "Ver capitanes \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 180);
    \u0275\u0275template(7, InicioComponent_ng_container_1_ng_container_2_div_60_div_7_Template, 21, 7, "div", 181);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.captainActivity);
  }
}
function InicioComponent_ng_container_1_ng_container_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "span", 194);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 195);
    \u0275\u0275text(5, "A\xFAn no tienes capitanes registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 196);
    \u0275\u0275text(7, "Registra los capitanes de tu flota para poder asignarlos a los charters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 197);
    \u0275\u0275text(9, " Ir a Mis capitanes \u2192 ");
    \u0275\u0275elementEnd()()();
  }
}
function InicioComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 129)(2, "div", 130)(3, "div")(4, "h1", 131);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 132);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 133)(9, "a", 134);
    \u0275\u0275text(10, " \u{1F4CB} Charters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 135);
    \u0275\u0275text(12, " \u{1F3DD}\uFE0F Excursiones ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 136)(14, "div", 137)(15, "p", 138);
    \u0275\u0275text(16, "Embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 139);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 140);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 137)(22, "p", 138);
    \u0275\u0275text(23, "Charters activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 141);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 140);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 137)(29, "p", 138);
    \u0275\u0275text(30, "Excursiones pend.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 142);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 140);
    \u0275\u0275text(34, "requieren confirmaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 137)(36, "p", 138);
    \u0275\u0275text(37, "Capitanes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 143);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 140);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 144)(43, "div", 145)(44, "div", 97)(45, "h3", 146);
    \u0275\u0275text(46, "\u{1F4C5} Pr\xF3ximas salidas y regresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 147);
    \u0275\u0275text(48, "Ver calendario \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, InicioComponent_ng_container_1_ng_container_2_div_49_Template, 5, 0, "div", 148)(50, InicioComponent_ng_container_1_ng_container_2_div_50_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 149)(52, "div", 97)(53, "h3", 146);
    \u0275\u0275text(54, "\u26F5 Actividad por embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "a", 150);
    \u0275\u0275text(56, "Ver stats \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, InicioComponent_ng_container_1_ng_container_2_div_57_Template, 7, 0, "div", 148);
    \u0275\u0275elementStart(58, "div", 98);
    \u0275\u0275template(59, InicioComponent_ng_container_1_ng_container_2_div_59_Template, 18, 7, "div", 151);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(60, InicioComponent_ng_container_1_ng_container_2_div_60_Template, 8, 1, "div", 152)(61, InicioComponent_ng_container_1_ng_container_2_div_61_Template, 10, 0, "div", 153);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \xA1Buen d\xEDa, ", ctx_r3.user == null ? null : ctx_r3.user.firstName, "! \u{1F44B} ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.companyName, " \xB7 Aqu\xED est\xE1 el resumen de actividad de hoy. ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.activeVessels);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("de ", ctx_r3.provVessels.length, " activas");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.activeCharters);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.confirmedCharters, " confirmados \xB7 ", ctx_r3.pendingCharters, " pendientes");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.pendingIsland);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.approvedCaptains);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("de ", ctx_r3.provCaptains.length, " verificados");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.upcomingEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.upcomingEvents.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.vesselActivity.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.vesselActivity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.captainActivity.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.provCaptains.length === 0);
  }
}
function InicioComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InicioComponent_ng_container_1_div_1_Template, 6, 0, "div", 124)(2, InicioComponent_ng_container_1_ng_container_2_Template, 62, 16, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading);
  }
}
var NOTICIAS_MOCK = [
  {
    id: 1,
    titulo: "Nueva ruta directa Porlamar \u2013 Los Roques",
    subtitulo: "Salidas todos los d\xEDas a las 7:00 AM con lancha expresa.",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
    badge: "Nuevo",
    badgeColor: "bg-green-500",
    link: "/buscar"
  },
  {
    id: 2,
    titulo: "Temporada alta 2026 \u2013 Reserva con anticipaci\xF3n",
    subtitulo: "Asegura tu lugar en los mejores yates y catamaranes.",
    imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4aa8eda?w=1200&q=80",
    badge: "Temporada",
    badgeColor: "bg-amber-500",
    link: "/alquileres"
  },
  {
    id: 3,
    titulo: "Recarga tu saldo y obt\xE9n descuentos exclusivos",
    subtitulo: "Paga con nudos y viaja sin contratiempos.",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    badge: "Promo",
    badgeColor: "bg-brand-500",
    link: "/mis-metodos-pago"
  }
];
var InicioComponent = class _InicioComponent {
  auth = inject(AuthService);
  router = inject(Router);
  embService = inject(EmbarcacionesService);
  islandService = inject(IslandTripsService);
  alqService = inject(AlquileresService);
  captainsService = inject(CaptainsService);
  tasaService = inject(TasaService);
  loading = true;
  // ── Cliente ─────────────────────────────────────────────────────────────
  misExcursiones = [];
  misCharters = [];
  yatesYCatamaranes = [];
  ofertasTrack;
  scrollOfertas(dir) {
    this.ofertasTrack?.nativeElement.scrollBy({ left: dir * 280, behavior: "smooth" });
  }
  noticias = NOTICIAS_MOCK;
  slideActual = signal(0, ...ngDevMode ? [{ debugName: "slideActual" }] : (
    /* istanbul ignore next */
    []
  ));
  sliderInterval;
  // ── Proveedor ────────────────────────────────────────────────────────────
  provVessels = [];
  provCharters = [];
  provBookings = [];
  provCaptains = [];
  upcomingEvents = [];
  vesselActivity = [];
  captainActivity = [];
  get pendingCharters() {
    return this.provCharters.filter((c) => c.status === "PENDING").length;
  }
  get activeCharters() {
    return this.provCharters.filter((c) => c.status === "ACTIVE").length;
  }
  get confirmedCharters() {
    return this.provCharters.filter((c) => c.status === "CONFIRMED").length;
  }
  get pendingIsland() {
    return this.provBookings.filter((b) => b.status === "PENDING").length;
  }
  get approvedCaptains() {
    return this.provCaptains.filter((c) => c.verificationStatus === "APROBADO").length;
  }
  get activeVessels() {
    return this.provVessels.filter((v) => v.verificationStatus === "APPROVED" && v.isAvailable).length;
  }
  // ── Role helpers ─────────────────────────────────────────────────────────
  get user() {
    return this.auth.user();
  }
  get role() {
    return this.auth.role();
  }
  get isCliente() {
    return this.role === "CLIENTE";
  }
  get isProveedor() {
    return this.role === "PROVEEDOR";
  }
  get companyName() {
    return this.auth.user()?.providerProfile?.companyName ?? this.user?.firstName ?? "";
  }
  get providerId() {
    return this.auth.user()?.providerProfile?.id ?? null;
  }
  get excursionesPendientesPago() {
    return this.misExcursiones.filter((b) => b.status === "PENDING");
  }
  get excursionesProximas() {
    const hoy = this.hoy();
    return this.misExcursiones.filter((b) => b.status === "CONFIRMED" && b.tripDate >= hoy).sort((a, b) => a.tripDate.localeCompare(b.tripDate)).slice(0, 3);
  }
  // ── KPIs cliente ─────────────────────────────────────────────────────────
  get clienteTotalExcursiones() {
    return this.misExcursiones.length;
  }
  get clienteTotalCharters() {
    return this.misCharters.length;
  }
  get clientePendientePago() {
    return this.misExcursiones.filter((b) => b.status === "PENDING").length + this.misCharters.filter((a) => a.status === "PENDING").length;
  }
  get clienteGastadoTotal() {
    const exc = this.misExcursiones.filter((b) => b.status !== "CANCELLED").reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
    const cha = this.misCharters.filter((a) => a.status !== "CANCELLED").reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
    return exc + cha;
  }
  get proximoCharter() {
    const hoy = this.hoy();
    return this.misCharters.filter((a) => a.status === "CONFIRMED" && a.startDate >= hoy).sort((a, b) => a.startDate.localeCompare(b.startDate))[0] ?? null;
  }
  get actividadReciente() {
    const items = [];
    this.misExcursiones.forEach((b) => items.push({
      icon: "\u{1F3DD}\uFE0F",
      tipo: "Excursi\xF3n",
      descripcion: b.destination?.name ?? "Excursi\xF3n isla",
      fecha: b.createdAt ?? "",
      monto: Number(b.totalPrice ?? 0),
      estado: b.status,
      link: `/mis-reservas/${b.id}`
    }));
    this.misCharters.forEach((a) => items.push({
      icon: "\u2693",
      tipo: "Charter",
      descripcion: a.vessel?.name ?? "Charter privado",
      fecha: a.createdAt ?? "",
      monto: Number(a.totalPrice ?? 0),
      estado: a.status,
      link: `/alquileres/${a.id}`
    }));
    return items.sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 8);
  }
  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit() {
    this.tasaService.load();
    if (this.isCliente)
      this.loadCliente();
    else if (this.isProveedor)
      this.loadProveedor();
    else
      this.loading = false;
    this.startSlider();
  }
  ngOnDestroy() {
    clearInterval(this.sliderInterval);
  }
  startSlider() {
    this.sliderInterval = setInterval(() => {
      this.slideActual.update((i) => (i + 1) % this.noticias.length);
    }, 5e3);
  }
  irASlide(i) {
    this.slideActual.set(i);
    clearInterval(this.sliderInterval);
    this.startSlider();
  }
  prevSlide() {
    this.irASlide((this.slideActual() - 1 + this.noticias.length) % this.noticias.length);
  }
  nextSlide() {
    this.irASlide((this.slideActual() + 1) % this.noticias.length);
  }
  // ── Load Cliente ──────────────────────────────────────────────────────────
  loadCliente() {
    const userId = this.user?.id;
    this.embService.getAll().subscribe({
      next: (emb) => {
        this.yatesYCatamaranes = emb.filter((e) => (e.type === "YATE" || e.type === "CATAMARAN") && e.verificationStatus === "APPROVED").slice(0, 10);
      }
    });
    if (!userId) {
      this.loading = false;
      return;
    }
    this.islandService.getBookings({ clientId: userId }).subscribe({
      next: (b) => {
        this.misExcursiones = b.filter((x) => x.status !== "CANCELLED").sort((x, y) => (y.createdAt ?? "").localeCompare(x.createdAt ?? "")).slice(0, 6);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.alqService.getByClient(userId).subscribe({
      next: (a) => {
        this.misCharters = a.filter((x) => x.status !== "CANCELLED").slice(0, 3);
      }
    });
  }
  // ── Load Proveedor ────────────────────────────────────────────────────────
  loadProveedor() {
    const pid = this.providerId;
    if (!pid) {
      this.loading = false;
      return;
    }
    forkJoin({
      vessels: this.embService.getByProvider(pid),
      charters: this.alqService.getByProvider(pid),
      bookings: this.islandService.getBookings({ providerId: pid }),
      captains: this.captainsService.getAll(pid)
    }).subscribe({
      next: ({ vessels, charters, bookings, captains }) => {
        this.provVessels = vessels;
        this.provCharters = charters;
        this.provBookings = bookings;
        this.provCaptains = captains;
        this.buildUpcomingEvents(charters, bookings);
        this.buildVesselActivity(vessels, charters, bookings);
        this.buildCaptainActivity(captains, charters);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buildUpcomingEvents(charters, bookings) {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const limit = new Date(today);
    limit.setDate(today.getDate() + 60);
    const events = [];
    for (const c of charters) {
      if (c.status === "CANCELLED")
        continue;
      const start = /* @__PURE__ */ new Date(c.startDate + "T00:00:00");
      const end = /* @__PURE__ */ new Date(c.endDate + "T00:00:00");
      if (start >= today && start <= limit) {
        events.push({
          type: "charter-start",
          date: c.startDate,
          title: `\u2693 Salida charter`,
          vessel: c.vessel?.name ?? "\u2014",
          client: `${c.client?.firstName} ${c.client?.lastName}`,
          status: c.status,
          route: `/alquileres/${c.id}`,
          daysFrom: Math.ceil((start.getTime() - today.getTime()) / 864e5)
        });
      }
      if (end >= today && end <= limit) {
        events.push({
          type: "charter-end",
          date: c.endDate,
          title: `\u{1F3C1} Regreso charter`,
          vessel: c.vessel?.name ?? "\u2014",
          client: `${c.client?.firstName} ${c.client?.lastName}`,
          status: c.status,
          route: `/alquileres/${c.id}`,
          daysFrom: Math.ceil((end.getTime() - today.getTime()) / 864e5)
        });
      }
    }
    for (const b of bookings) {
      if (b.status === "CANCELLED")
        continue;
      const d = /* @__PURE__ */ new Date(b.tripDate + "T00:00:00");
      if (d >= today && d <= limit) {
        events.push({
          type: "island",
          date: b.tripDate,
          time: b.outboundSlot?.departureTime?.slice(0, 5),
          title: `\u{1F6A2} Excursi\xF3n ${b.destination?.name ?? ""}`,
          vessel: b.vessel?.name ?? "\u2014",
          client: `${b.client?.firstName} ${b.client?.lastName}`,
          status: b.status,
          route: `/reservas-isla/${b.id}`,
          daysFrom: Math.ceil((d.getTime() - today.getTime()) / 864e5)
        });
      }
    }
    this.upcomingEvents = events.sort((a, b) => a.date.localeCompare(b.date)).slice(0, 10);
  }
  buildVesselActivity(vessels, charters, bookings) {
    const today = this.hoy();
    this.vesselActivity = vessels.map((v) => {
      const vc = charters.filter((c) => c.vessel?.id === v.id && c.status !== "CANCELLED");
      const vi = bookings.filter((b) => b.vessel?.id === v.id && b.status !== "CANCELLED");
      const upcoming = [
        ...vc.filter((c) => c.startDate >= today).map((c) => c.startDate),
        ...vi.filter((b) => b.tripDate >= today).map((b) => b.tripDate)
      ].sort();
      return {
        vessel: v,
        charterCount: vc.length,
        islandCount: vi.length,
        totalTrips: vc.length + vi.length,
        nextDate: upcoming[0]
      };
    }).sort((a, b) => b.totalTrips - a.totalTrips);
  }
  buildCaptainActivity(captains, charters) {
    this.captainActivity = captains.filter((c) => c.verificationStatus === "APROBADO").map((cap) => {
      const assigned = charters.filter((c) => c.captainProfile?.id === cap.id && c.status !== "CANCELLED");
      const completed = assigned.filter((c) => c.status === "COMPLETED");
      return { captain: cap, assignedCharters: assigned.length, completedTrips: completed.length };
    }).sort((a, b) => b.assignedCharters - a.assignedCharters);
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  typeIcon(t) {
    return t === "YATE" ? "\u26F5" : t === "CATAMARAN" ? "\u{1F6E5}\uFE0F" : "\u{1F6A4}";
  }
  eventTypeColor(type) {
    return type === "charter-start" ? "bg-brand-500" : type === "charter-end" ? "bg-green-500" : "bg-orange-400";
  }
  daysLabel(n) {
    if (n === 0)
      return "Hoy";
    if (n === 1)
      return "Ma\xF1ana";
    return `En ${n} d\xEDas`;
  }
  statusLabel(s) {
    return { PENDING: "Pendiente", CONFIRMED: "Confirmado", ACTIVE: "En curso", COMPLETED: "Completado", CANCELLED: "Cancelado" }[s] ?? s;
  }
  statusClass(s) {
    return {
      PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      ACTIVE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      COMPLETED: "bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400"
    }[s] ?? "bg-gray-100 text-gray-500";
  }
  captainInitials(c) {
    return `${c.firstName?.[0] ?? ""}${c.lastName?.[0] ?? ""}`.toUpperCase();
  }
  captainPhotoUrl(c) {
    return c.photoUrl ? this.imageUrl(c.photoUrl) : "";
  }
  hoy() {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  static \u0275fac = function InicioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InicioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InicioComponent, selectors: [["app-inicio"]], viewQuery: function InicioComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ofertasTrack = _t.first);
    }
  }, decls: 2, vars: 2, consts: [["ofertasTrack", ""], [4, "ngIf"], [1, "relative", "mb-6", "overflow-hidden", "rounded-3xl", "shadow-xl", 2, "height", "280px"], ["class", "absolute inset-0 transition-opacity duration-700", 3, "opacity", "z-index", 4, "ngFor", "ngForOf"], [1, "absolute", "left-4", "top-1/2", "z-20", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/30", "text-white", "backdrop-blur-sm", "hover:bg-black/50", "transition-colors", 3, "click"], [1, "absolute", "right-4", "top-1/2", "z-20", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/30", "text-white", "backdrop-blur-sm", "hover:bg-black/50", "transition-colors", 3, "click"], [1, "absolute", "bottom-4", "left-1/2", "z-20", "-translate-x-1/2", "flex", "gap-2"], ["class", "h-2 rounded-full transition-all duration-300", 3, "w-6", "w-2", "bg-white", "bg-white/40", "click", 4, "ngFor", "ngForOf"], ["class", "mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4", 4, "ngIf"], [1, "mb-6"], [1, "mb-4", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], ["routerLink", "/buscar", 1, "group", "relative", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-blue-500", "to-blue-700", "p-7", "text-white", "shadow-lg", "hover:shadow-xl", "transition-all", "hover:-translate-y-1", "cursor-pointer", 3, "queryParams"], [1, "absolute", "-bottom-6", "-right-6", "text-9xl", "opacity-10", "group-hover:opacity-20", "transition-opacity", "select-none"], [1, "relative"], [1, "text-5xl"], [1, "mt-4", "text-2xl", "font-extrabold"], [1, "mt-1", "text-sm", "text-blue-100"], [1, "mt-5", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-white/20", "px-4", "py-1.5", "text-xs", "font-semibold", "hover:bg-white/30", "transition-colors"], ["routerLink", "/alquileres", 1, "group", "relative", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-blue-600", "to-cyan-600", "p-7", "text-white", "shadow-lg", "hover:shadow-xl", "transition-all", "hover:-translate-y-1", "cursor-pointer"], ["class", "mb-6 flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 shadow-sm dark:border-amber-500/20 dark:bg-amber-500/5", 4, "ngIf"], ["class", "mb-6", 4, "ngIf"], ["class", "mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "font-bold", "text-gray-800", "dark:text-white/90"], ["routerLink", "/mis-reservas", 1, "text-sm", "font-medium", "text-brand-500", "hover:text-brand-600"], ["class", "p-8 text-center text-sm text-gray-400", 4, "ngIf"], ["class", "p-10 text-center", 4, "ngIf"], ["class", "divide-y divide-gray-100 dark:divide-gray-800", 4, "ngIf"], [1, "absolute", "inset-0", "transition-opacity", "duration-700"], [1, "absolute", "inset-0", "bg-cover", "bg-center"], [1, "absolute", "inset-0", "bg-gradient-to-r", "from-black/70", "via-black/40", "to-transparent"], [1, "relative", "z-10", "flex", "h-full", "flex-col", "justify-end", "p-8", "md:p-10"], ["class", "mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold text-white", 3, "class", 4, "ngIf"], [1, "text-2xl", "font-extrabold", "text-white", "md:text-3xl", "leading-tight"], ["class", "mt-2 max-w-lg text-sm text-white/80", 4, "ngIf"], ["class", "mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors shadow", 3, "routerLink", 4, "ngIf"], [1, "mb-3", "inline-flex", "w-fit", "rounded-full", "px-3", "py-1", "text-xs", "font-bold", "text-white"], [1, "mt-2", "max-w-lg", "text-sm", "text-white/80"], [1, "mt-4", "inline-flex", "w-fit", "items-center", "gap-2", "rounded-xl", "bg-white", "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-900", "hover:bg-gray-50", "transition-colors", "shadow", 3, "routerLink"], [1, "h-2", "rounded-full", "transition-all", "duration-300", 3, "click"], [1, "mb-6", "overflow-hidden", "rounded-3xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "flex", "items-center", "gap-3"], ["routerLink", "/alquileres", 1, "text-sm", "font-semibold", "text-blue-500", "hover:text-blue-600"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-gray-200", "bg-white", "text-gray-600", "hover:border-blue-300", "hover:text-blue-600", "transition-colors", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-gray-300", 3, "click"], [1, "flex", "gap-4", "overflow-x-auto", "scroll-smooth", "px-6", "py-5", 2, "scrollbar-width", "none", "-ms-overflow-style", "none"], ["class", "group flex-shrink-0 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all dark:border-gray-700 dark:bg-gray-900", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "group", "flex-shrink-0", "w-56", "overflow-hidden", "rounded-2xl", "border", "border-gray-100", "bg-white", "shadow-sm", "hover:shadow-md", "hover:border-blue-200", "transition-all", "dark:border-gray-700", "dark:bg-gray-900", 3, "routerLink"], [1, "relative", "h-36", "overflow-hidden", "bg-gradient-to-br", "from-blue-50", "to-blue-100", "dark:from-blue-950", "dark:to-blue-900"], ["class", "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-4xl opacity-30", 4, "ngIf"], [1, "absolute", "top-2", "left-2", "rounded-full", "bg-blue-600", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-white"], [1, "p-3"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90", "truncate"], ["class", "mt-2 text-sm font-extrabold text-blue-600 dark:text-blue-400", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-4xl", "opacity-30"], [1, "mt-2", "text-sm", "font-extrabold", "text-blue-600", "dark:text-blue-400"], [1, "text-[10px]", "font-normal", "text-gray-400"], [1, "mb-6", "grid", "grid-cols-2", "gap-4", "lg:grid-cols-4"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-xs", "text-gray-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-teal-600", "dark:text-teal-400"], ["routerLink", "/mis-reservas", 1, "text-[10px]", "text-gray-400", "hover:text-teal-500"], [1, "mt-1", "text-2xl", "font-extrabold", "text-purple-600", "dark:text-purple-400"], ["routerLink", "/mis-reservas", 1, "text-[10px]", "text-gray-400", "hover:text-purple-500"], [1, "mt-1", "text-2xl", "font-extrabold"], [1, "mt-1", "text-lg", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-[10px]", "text-gray-400"], [1, "mb-6", "flex", "items-center", "gap-4", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "px-6", "py-4", "shadow-sm", "dark:border-amber-500/20", "dark:bg-amber-500/5"], [1, "text-2xl"], [1, "flex-1"], [1, "font-bold", "text-amber-800", "dark:text-amber-300"], [1, "text-sm", "text-amber-700", "dark:text-amber-400"], [1, "flex-shrink-0", "rounded-xl", "bg-amber-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-amber-600", "transition-colors", "shadow", 3, "routerLink", "queryParams"], [1, "mb-3", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "gap-3", "sm:grid-cols-2", "lg:grid-cols-3"], ["class", "flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-500/20 dark:bg-teal-500/5", 4, "ngFor", "ngForOf"], ["class", "flex items-start gap-3 rounded-2xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-500/20 dark:bg-purple-500/5", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "border-teal-200", "bg-teal-50", "p-4", "dark:border-teal-500/20", "dark:bg-teal-500/5"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-teal-500", "text-lg", "text-white"], [1, "min-w-0", "flex-1"], [1, "font-bold", "text-teal-900", "dark:text-teal-300", "truncate"], [1, "text-xs", "text-teal-700", "dark:text-teal-400", "mt-0.5"], [1, "text-xs", "text-teal-600", "dark:text-teal-500"], [1, "text-xs", "font-semibold", "text-teal-600", "hover:text-teal-700", "flex-shrink-0", 3, "routerLink"], [1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "border-purple-200", "bg-purple-50", "p-4", "dark:border-purple-500/20", "dark:bg-purple-500/5"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-purple-500", "text-lg", "text-white"], [1, "font-bold", "text-purple-900", "dark:text-purple-300", "truncate"], [1, "text-xs", "text-purple-700", "dark:text-purple-400", "mt-0.5"], [1, "text-xs", "text-purple-600", "dark:text-purple-500"], [1, "text-xs", "font-semibold", "text-purple-600", "hover:text-purple-700", "flex-shrink-0", 3, "routerLink"], [1, "mb-6", "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex items-center gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3", "px-5", "py-3", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", "transition-colors", 3, "routerLink"], [1, "text-xl", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90", "truncate"], [1, "flex-shrink-0", "text-right"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "inline-flex", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-semibold", 3, "ngClass"], [1, "p-8", "text-center", "text-sm", "text-gray-400"], [1, "p-10", "text-center"], [1, "text-5xl", "mb-3"], [1, "text-gray-500", "dark:text-gray-400"], ["routerLink", "/buscar", 1, "mt-3", "inline-block", "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "shadow-md"], ["class", "flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "px-6", "py-4", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", "transition-colors"], [1, "flex", "h-12", "w-12", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-blue-50", "text-2xl", "dark:bg-blue-500/10"], [1, "font-semibold", "text-gray-800", "dark:text-white/90", "truncate"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-col", "items-end", "gap-1.5", "flex-shrink-0"], [1, "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "font-bold", "text-gray-700", "dark:text-white/80"], ["class", "ml-1 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition-colors", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "ml-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 transition-colors", 3, "routerLink", 4, "ngIf"], [1, "ml-1", "rounded-lg", "bg-amber-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-amber-600", "transition-colors", 3, "routerLink", "queryParams"], [1, "ml-1", "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "dark:border-gray-700", "dark:text-gray-400", "transition-colors", 3, "routerLink"], ["class", "flex items-center justify-center py-32", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-32"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "mb-5", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-wrap", "gap-2"], ["routerLink", "/mi-charter/reservas", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "bg-brand-500", "px-4", "py-2", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors"], ["routerLink", "/reservas-isla", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700"], [1, "mb-5", "grid", "grid-cols-2", "gap-4", "lg:grid-cols-4"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-amber-500"], [1, "mt-2", "text-3xl", "font-extrabold", "text-green-600", "dark:text-green-400"], [1, "mb-5", "grid", "grid-cols-1", "gap-5", "lg:grid-cols-5"], [1, "lg:col-span-3", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], ["routerLink", "/mi-charter/calendario", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], ["class", "flex flex-col items-center gap-2 py-12 text-center", 4, "ngIf"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["routerLink", "/mi-charter/estadisticas", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], ["class", "flex items-center gap-3 px-5 py-3.5", 4, "ngFor", "ngForOf"], ["class", "mb-5 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-700 dark:border-amber-800/30 dark:bg-amber-500/10 dark:text-amber-300", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "gap-2", "py-12", "text-center"], [1, "text-4xl"], ["class", "flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "px-5", "py-3.5", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", "transition-colors", 3, "routerLink"], [1, "flex", "w-14", "flex-shrink-0", "flex-col", "items-center", "gap-1"], [1, "h-2.5", "w-2.5", "rounded-full", 3, "ngClass"], [1, "text-center", "text-[10px]", "font-bold", "text-gray-500", "dark:text-gray-400", "leading-tight"], [1, "rounded-full", "px-1.5", "py-0.5", "text-[9px]", "font-bold", 3, "ngClass"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90", "truncate"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "truncate"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "flex-shrink-0", "rounded-full", "px-2.5", "py-0.5", "text-[11px]", "font-semibold", 3, "ngClass"], ["routerLink", "/mi-charter/yates", 1, "mt-1", "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], [1, "flex", "items-center", "gap-3", "px-5", "py-3.5"], [1, "h-11", "w-11", "flex-shrink-0", "overflow-hidden", "rounded-xl", "bg-gray-100", "dark:bg-gray-800"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-xl opacity-30", 4, "ngIf"], [1, "truncate", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "flex", "items-center", "gap-2", "text-xs", "text-gray-400"], ["class", "text-[10px] text-brand-500 mt-0.5", 4, "ngIf"], [1, "text-xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-xl", "opacity-30"], [1, "text-[10px]", "text-brand-500", "mt-0.5"], [1, "mb-5", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["routerLink", "/mis-capitanes", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], [1, "grid", "grid-cols-1", "divide-y", "divide-gray-100", "dark:divide-gray-800", "sm:grid-cols-2", "sm:divide-x", "sm:divide-y-0"], ["class", "flex items-center gap-4 px-5 py-4", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "px-5", "py-4"], [1, "relative", "flex-shrink-0"], [1, "h-12", "w-12", "overflow-hidden", "rounded-2xl", "bg-brand-100", "dark:bg-brand-500/10"], ["class", "flex h-full w-full items-center justify-center text-base font-bold text-brand-600 dark:text-brand-400", 4, "ngIf"], [1, "absolute", "-bottom-0.5", "-right-0.5", "h-3.5", "w-3.5", "rounded-full", "border-2", "border-white", "bg-green-500", "dark:border-gray-900"], [1, "truncate", "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "text-[10px] text-gray-400", 4, "ngIf"], [1, "flex-shrink-0", "flex", "items-center", "gap-4", "text-center"], [1, "text-xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-xl", "font-extrabold", "text-green-600", "dark:text-green-400"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-base", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "mb-5", "flex", "items-start", "gap-3", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "px-5", "py-4", "text-sm", "text-amber-700", "dark:border-amber-800/30", "dark:bg-amber-500/10", "dark:text-amber-300"], [1, "mt-0.5", "text-lg"], [1, "font-semibold"], [1, "text-xs", "mt-0.5"], ["routerLink", "/mis-capitanes", 1, "mt-2", "inline-flex", "items-center", "gap-1", "text-xs", "font-bold", "underline"]], template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InicioComponent_ng_container_0_Template, 51, 12, "ng-container", 1)(1, InicioComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isCliente);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProveedor);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InicioComponent, [{
    type: Component,
    args: [{ selector: "app-inicio", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<!-- \u2500\u2500\u2500 CLIENTE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ng-container *ngIf="isCliente">

  <!-- \u2550\u2550 SLIDER DE NOTICIAS \u2550\u2550 -->
  <div class="relative mb-6 overflow-hidden rounded-3xl shadow-xl" style="height:280px;">

    <!-- Slides -->
    <div *ngFor="let n of noticias; let i = index"
      class="absolute inset-0 transition-opacity duration-700"
      [style.opacity]="i === slideActual() ? '1' : '0'"
      [style.z-index]="i === slideActual() ? '1' : '0'">
      <!-- Background image -->
      <div class="absolute inset-0 bg-cover bg-center" [style.background-image]="'url(' + n.imageUrl + ')'"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <!-- Content -->
      <div class="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
        <span *ngIf="n.badge" class="mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold text-white" [class]="n.badgeColor ?? 'bg-blue-500'">
          {{ n.badge }}
        </span>
        <h2 class="text-2xl font-extrabold text-white md:text-3xl leading-tight">{{ n.titulo }}</h2>
        <p *ngIf="n.subtitulo" class="mt-2 max-w-lg text-sm text-white/80">{{ n.subtitulo }}</p>
        <a *ngIf="n.link" [routerLink]="n.link"
          class="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors shadow">
          Ver m\xE1s \u2192
        </a>
      </div>
    </div>

    <!-- Flechas -->
    <button (click)="prevSlide()"
      class="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors">
      \u2039
    </button>
    <button (click)="nextSlide()"
      class="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors">
      \u203A
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-2">
      <button *ngFor="let n of noticias; let i = index" (click)="irASlide(i)"
        class="h-2 rounded-full transition-all duration-300"
        [class.w-6]="i === slideActual()"
        [class.w-2]="i !== slideActual()"
        [class.bg-white]="i === slideActual()"
        [class.bg-white/40]="i !== slideActual()">
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 CARRUSEL CONTROLADO YATES & CATAMARANES \u2550\u2550 -->
  <div *ngIf="yatesYCatamaranes.length > 0" class="mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
      <div>
        <h2 class="font-bold text-gray-800 dark:text-white/90">Yates y Catamaranes disponibles</h2>
        <p class="text-xs text-gray-400 mt-0.5">{{ yatesYCatamaranes.length }} embarcaciones \xB7 Alquiler exclusivo</p>
      </div>
      <div class="flex items-center gap-3">
        <a routerLink="/alquileres" class="text-sm font-semibold text-blue-500 hover:text-blue-600">Ver todos \u2192</a>
        <!-- Botones navegaci\xF3n -->
        <button (click)="scrollOfertas(-1)"
          class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          \u2039
        </button>
        <button (click)="scrollOfertas(1)"
          class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          \u203A
        </button>
      </div>
    </div>

    <!-- Track scrollable -->
    <div #ofertasTrack
      class="flex gap-4 overflow-x-auto scroll-smooth px-6 py-5"
      style="scrollbar-width:none; -ms-overflow-style:none;"
      [style.-webkit-overflow-scrolling]="'touch'">
      <a *ngFor="let e of yatesYCatamaranes"
        [routerLink]="['/alquileres', e.type === 'YATE' ? 'yate' : 'catamaran', e.id]"
        class="group flex-shrink-0 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all dark:border-gray-700 dark:bg-gray-900">
        <!-- Foto -->
        <div class="relative h-36 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <img *ngIf="e.photos?.[0]" [src]="imageUrl(e.photos![0])" [alt]="e.name"
            class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div *ngIf="!e.photos?.[0]" class="flex h-full items-center justify-center text-4xl opacity-30">
            {{ e.type === 'YATE' ? '\u26F5' : '\u{1F6E5}\uFE0F' }}
          </div>
          <span class="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
            {{ e.type === 'YATE' ? 'Yate' : 'Catamar\xE1n' }}
          </span>
        </div>
        <!-- Info -->
        <div class="p-3">
          <p class="text-sm font-bold text-gray-800 dark:text-white/90 truncate">{{ e.name }}</p>
          <p class="text-xs text-gray-400 mt-0.5">\u{1F465} {{ e.capacity }} personas</p>
          <p *ngIf="e.pricePerDay" class="mt-2 text-sm font-extrabold text-blue-600 dark:text-blue-400">
            \${{ e.pricePerDay }}<span class="text-[10px] font-normal text-gray-400">/d\xEDa</span>
          </p>
        </div>
      </a>
    </div>
  </div>

  <!-- \u2550\u2550 KPIs CLIENTE \u2550\u2550 -->
  <div *ngIf="!loading" class="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Excursiones</p>
      <p class="mt-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400">{{ clienteTotalExcursiones }}</p>
      <a routerLink="/mis-reservas" class="text-[10px] text-gray-400 hover:text-teal-500">Ver \u2192</a>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Charters</p>
      <p class="mt-1 text-2xl font-extrabold text-purple-600 dark:text-purple-400">{{ clienteTotalCharters }}</p>
      <a routerLink="/mis-reservas" class="text-[10px] text-gray-400 hover:text-purple-500">Ver \u2192</a>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Pendientes de pago</p>
      <p class="mt-1 text-2xl font-extrabold" [class.text-amber-500]="clientePendientePago > 0" [class.text-gray-400]="clientePendientePago === 0">
        {{ clientePendientePago }}
      </p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Total gastado</p>
      <p class="mt-1 text-lg font-extrabold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(clienteGastadoTotal) }}</p>
      <p class="text-[10px] text-gray-400">\${{ clienteGastadoTotal | number:'1.2-2' }} USD</p>
    </div>
  </div>

  <!-- \u2550\u2550 \xBFQU\xC9 NECESITAS? \u2014 solo Lancha y Yate \u2550\u2550 -->
  <div class="mb-6">
    <h2 class="mb-4 text-lg font-bold text-gray-800 dark:text-white/90">\xBFQu\xE9 necesitas?</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

      <!-- Lancha r\xE1pida -->
      <a routerLink="/buscar" [queryParams]="{tipo: 'lancha'}"
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-7 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
        <div class="absolute -bottom-6 -right-6 text-9xl opacity-10 group-hover:opacity-20 transition-opacity select-none">\u{1F6A4}</div>
        <div class="relative">
          <span class="text-5xl">\u{1F6A4}</span>
          <h3 class="mt-4 text-2xl font-extrabold">Lancha R\xE1pida</h3>
          <p class="mt-1 text-sm text-blue-100">Viajes directos a las islas m\xE1s r\xE1pido</p>
          <div class="mt-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold hover:bg-white/30 transition-colors">
            Ver precios \u2192
          </div>
        </div>
      </a>

      <!-- Alquilar Yate -->
      <a routerLink="/alquileres"
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-7 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
        <div class="absolute -bottom-6 -right-6 text-9xl opacity-10 group-hover:opacity-20 transition-opacity select-none">\u26F5</div>
        <div class="relative">
          <span class="text-5xl">\u26F5</span>
          <h3 class="mt-4 text-2xl font-extrabold">Alquilar Yate</h3>
          <p class="mt-1 text-sm text-blue-100">Yates y catamaranes exclusivos para grupos</p>
          <div class="mt-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold hover:bg-white/30 transition-colors">
            Ver disponibilidad \u2192
          </div>
        </div>
      </a>

    </div>
  </div>

  <!-- \u2550\u2550 ALERTA: PAGO PENDIENTE \u2550\u2550 -->
  <div *ngIf="!loading && excursionesPendientesPago.length > 0"
    class="mb-6 flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 shadow-sm dark:border-amber-500/20 dark:bg-amber-500/5">
    <span class="text-2xl">\u23F3</span>
    <div class="flex-1">
      <p class="font-bold text-amber-800 dark:text-amber-300">
        Tienes {{ excursionesPendientesPago.length }} reserva{{ excursionesPendientesPago.length > 1 ? 's' : '' }} pendiente{{ excursionesPendientesPago.length > 1 ? 's' : '' }} de pago
      </p>
      <p class="text-sm text-amber-700 dark:text-amber-400">Completa el pago para confirmar tu lugar.</p>
    </div>
    <a [routerLink]="['/pagar-reserva']" [queryParams]="{ bookingId: excursionesPendientesPago[0].id }"
      class="flex-shrink-0 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600 transition-colors shadow">
      Pagar ahora \u2192
    </a>
  </div>

  <!-- \u2550\u2550 PR\xD3XIMOS VIAJES \u2550\u2550 -->
  <div *ngIf="!loading && (excursionesProximas.length > 0 || proximoCharter)" class="mb-6">
    <h2 class="mb-3 text-base font-bold text-gray-800 dark:text-white/90">\u{1F4C5} Pr\xF3ximos viajes confirmados</h2>
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

      <!-- Excursiones isla -->
      <div *ngFor="let b of excursionesProximas"
        class="flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-500/20 dark:bg-teal-500/5">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500 text-lg text-white">\u{1F3DD}\uFE0F</div>
        <div class="min-w-0 flex-1">
          <p class="font-bold text-teal-900 dark:text-teal-300 truncate">{{ b.destination?.name ?? b.vessel?.name }}</p>
          <p class="text-xs text-teal-700 dark:text-teal-400 mt-0.5">{{ b.tripDate | date:'EEE dd MMM':'':'es' }}</p>
          <p class="text-xs text-teal-600 dark:text-teal-500">{{ b.passengers }} pax \xB7 {{ b.vessel?.name }}</p>
        </div>
        <a [routerLink]="['/mis-reservas', b.id]" class="text-xs font-semibold text-teal-600 hover:text-teal-700 flex-shrink-0">Ver \u2192</a>
      </div>

      <!-- Pr\xF3ximo charter -->
      <div *ngIf="proximoCharter"
        class="flex items-start gap-3 rounded-2xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-500/20 dark:bg-purple-500/5">
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500 text-lg text-white">\u2693</div>
        <div class="min-w-0 flex-1">
          <p class="font-bold text-purple-900 dark:text-purple-300 truncate">{{ proximoCharter.vessel?.name }}</p>
          <p class="text-xs text-purple-700 dark:text-purple-400 mt-0.5">{{ proximoCharter.startDate | date:'EEE dd MMM':'':'es' }}</p>
          <p class="text-xs text-purple-600 dark:text-purple-500">{{ proximoCharter.passengers }} pax \xB7 {{ proximoCharter.days }} noches</p>
        </div>
        <a [routerLink]="['/alquileres', proximoCharter.id]" class="text-xs font-semibold text-purple-600 hover:text-purple-700 flex-shrink-0">Ver \u2192</a>
      </div>

    </div>
  </div>

  <!-- \u2550\u2550 ACTIVIDAD RECIENTE \u2550\u2550 -->
  <div *ngIf="!loading && actividadReciente.length > 0"
    class="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h2 class="font-bold text-gray-800 dark:text-white/90">Actividad reciente</h2>
      <a routerLink="/mis-reservas" class="text-sm font-medium text-brand-500 hover:text-brand-600">Ver todas \u2192</a>
    </div>
    <div class="divide-y divide-gray-100 dark:divide-gray-800">
      <a *ngFor="let a of actividadReciente" [routerLink]="a.link"
        class="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
        <span class="text-xl flex-shrink-0">{{ a.icon }}</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-800 dark:text-white/90 truncate">{{ a.descripcion }}</p>
          <p class="text-xs text-gray-400">{{ a.tipo }} \xB7 {{ a.fecha | date:'dd MMM yyyy' }}</p>
        </div>
        <div class="flex-shrink-0 text-right">
          <p class="text-sm font-bold text-brand-600 dark:text-brand-400">\${{ a.monto | number:'1.2-2' }}</p>
          <span class="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold" [ngClass]="statusClass(a.estado)">
            {{ statusLabel(a.estado) }}
          </span>
        </div>
      </a>
    </div>
  </div>

  <!-- \u2550\u2550 MIS EXCURSIONES RECIENTES \u2550\u2550 -->
  <div class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
      <h2 class="font-bold text-gray-800 dark:text-white/90">Mis excursiones</h2>
      <a routerLink="/mis-reservas" class="text-sm font-medium text-brand-500 hover:text-brand-600">Ver todas \u2192</a>
    </div>
    <div *ngIf="loading" class="p-8 text-center text-sm text-gray-400">Cargando...</div>
    <div *ngIf="!loading && misExcursiones.length === 0" class="p-10 text-center">
      <div class="text-5xl mb-3">\u{1F3DD}\uFE0F</div>
      <p class="text-gray-500 dark:text-gray-400">A\xFAn no tienes excursiones reservadas.</p>
      <a routerLink="/buscar" class="mt-3 inline-block rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 shadow-md">
        Buscar excursi\xF3n \u2192
      </a>
    </div>
    <div *ngIf="!loading && misExcursiones.length > 0" class="divide-y divide-gray-100 dark:divide-gray-800">
      <div *ngFor="let b of misExcursiones"
        class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
        <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-500/10">\u{1F3DD}\uFE0F</div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 dark:text-white/90 truncate">
            {{ b.departurePoint?.name ?? '\u2014' }} \u2192 {{ b.destination?.name ?? '\u2014' }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ b.tripDate }} \xB7 {{ b.outboundSlot?.departureTime }} \xB7 {{ b.passengers }} pax
          </p>
          <p class="text-xs text-gray-400">{{ b.vessel?.name }}</p>
        </div>
        <div class="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span class="rounded-full px-2.5 py-0.5 text-xs font-bold"
            [ngClass]="{
              'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400': b.status === 'PENDING',
              'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400': b.status === 'CONFIRMED',
              'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400': b.status === 'ACTIVE',
              'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400': b.status === 'COMPLETED'
            }">
            {{ b.status === 'PENDING' ? 'Pendiente de pago' : b.status === 'CONFIRMED' ? 'Confirmada \u2713' : b.status === 'ACTIVE' ? 'En curso \u{1F6A2}' : 'Completada' }}
          </span>
          <span class="text-sm font-bold text-gray-700 dark:text-white/80">\${{ b.totalPrice | number:'1.2-2' }}</span>
        </div>
        <a *ngIf="b.status === 'PENDING'" [routerLink]="['/pagar-reserva']" [queryParams]="{ bookingId: b.id }"
          class="ml-1 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition-colors">
          Pagar
        </a>
        <a *ngIf="b.status !== 'PENDING'" [routerLink]="['/mis-reservas', b.id]"
          class="ml-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 transition-colors">
          Ver
        </a>
      </div>
    </div>
  </div>
</ng-container>

<!-- \u2500\u2500\u2500 PROVEEDOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ng-container *ngIf="isProveedor">

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-32">
    <div class="flex flex-col items-center gap-4">
      <div class="text-5xl animate-bounce">\u2693</div>
      <p class="text-sm text-gray-400">Cargando tu panel...</p>
    </div>
  </div>

  <ng-container *ngIf="!loading">

    <!-- Greeting -->
    <div class="mb-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
            \xA1Buen d\xEDa, {{ user?.firstName }}! \u{1F44B}
          </h1>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ companyName }} \xB7 Aqu\xED est\xE1 el resumen de actividad de hoy.
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <a routerLink="/mi-charter/reservas"
            class="inline-flex items-center gap-1.5 rounded-xl bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
            \u{1F4CB} Charters
          </a>
          <a routerLink="/reservas-isla"
            class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
            \u{1F3DD}\uFE0F Excursiones
          </a>
        </div>
      </div>
    </div>

    <!-- KPI cards -->
    <div class="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Embarcaciones</p>
        <p class="mt-2 text-3xl font-extrabold text-gray-800 dark:text-white">{{ activeVessels }}</p>
        <p class="mt-0.5 text-xs text-gray-400">de {{ provVessels.length }} activas</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Charters activos</p>
        <p class="mt-2 text-3xl font-extrabold text-brand-600 dark:text-brand-400">{{ activeCharters }}</p>
        <p class="mt-0.5 text-xs text-gray-400">{{ confirmedCharters }} confirmados \xB7 {{ pendingCharters }} pendientes</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Excursiones pend.</p>
        <p class="mt-2 text-3xl font-extrabold text-amber-500">{{ pendingIsland }}</p>
        <p class="mt-0.5 text-xs text-gray-400">requieren confirmaci\xF3n</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Capitanes</p>
        <p class="mt-2 text-3xl font-extrabold text-green-600 dark:text-green-400">{{ approvedCaptains }}</p>
        <p class="mt-0.5 text-xs text-gray-400">de {{ provCaptains.length }} verificados</p>
      </div>
    </div>

    <!-- Main grid: upcoming + vessel activity -->
    <div class="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-5">

      <!-- Upcoming events (3 cols) -->
      <div class="lg:col-span-3 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">\u{1F4C5} Pr\xF3ximas salidas y regresos</h3>
          <a routerLink="/mi-charter/calendario" class="text-xs font-semibold text-brand-500 hover:text-brand-600">Ver calendario \u2192</a>
        </div>

        <!-- Empty -->
        <div *ngIf="upcomingEvents.length === 0" class="flex flex-col items-center gap-2 py-12 text-center">
          <span class="text-4xl">\u{1F4ED}</span>
          <p class="text-sm text-gray-400">Sin eventos en los pr\xF3ximos 60 d\xEDas</p>
        </div>

        <!-- Event list -->
        <div *ngIf="upcomingEvents.length > 0" class="divide-y divide-gray-100 dark:divide-gray-800">
          <a *ngFor="let ev of upcomingEvents" [routerLink]="ev.route"
            class="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
            <!-- Color dot + date -->
            <div class="flex w-14 flex-shrink-0 flex-col items-center gap-1">
              <span class="h-2.5 w-2.5 rounded-full" [ngClass]="eventTypeColor(ev.type)"></span>
              <span class="text-center text-[10px] font-bold text-gray-500 dark:text-gray-400 leading-tight">
                {{ ev.date | date:'dd MMM':'':'es' }}
              </span>
              <span class="rounded-full px-1.5 py-0.5 text-[9px] font-bold"
                [ngClass]="ev.daysFrom === 0 ? 'bg-red-100 text-red-600' : ev.daysFrom <= 2 ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'">
                {{ daysLabel(ev.daysFrom) }}
              </span>
            </div>
            <!-- Info -->
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 dark:text-white/90 truncate">{{ ev.title }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">\u26F5 {{ ev.vessel }} \xB7 \u{1F464} {{ ev.client }}</p>
              <p *ngIf="ev.time" class="text-xs text-gray-400">\u{1F550} {{ ev.time }}</p>
            </div>
            <!-- Status -->
            <span class="flex-shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold" [ngClass]="statusClass(ev.status)">
              {{ statusLabel(ev.status) }}
            </span>
          </a>
        </div>
      </div>

      <!-- Vessel activity (2 cols) -->
      <div class="lg:col-span-2 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">\u26F5 Actividad por embarcaci\xF3n</h3>
          <a routerLink="/mi-charter/estadisticas" class="text-xs font-semibold text-brand-500 hover:text-brand-600">Ver stats \u2192</a>
        </div>

        <div *ngIf="vesselActivity.length === 0" class="flex flex-col items-center gap-2 py-12 text-center">
          <span class="text-4xl">\u26F5</span>
          <p class="text-sm text-gray-400">Sin embarcaciones registradas</p>
          <a routerLink="/mi-charter/yates" class="mt-1 text-xs font-semibold text-brand-500 hover:text-brand-600">Agregar \u2192</a>
        </div>

        <div class="divide-y divide-gray-100 dark:divide-gray-800">
          <div *ngFor="let va of vesselActivity" class="flex items-center gap-3 px-5 py-3.5">
            <!-- Photo -->
            <div class="h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img *ngIf="va.vessel.photos?.[0]" [src]="imageUrl(va.vessel.photos![0])" [alt]="va.vessel.name"
                class="h-full w-full object-cover" />
              <div *ngIf="!va.vessel.photos?.[0]"
                class="flex h-full items-center justify-center text-xl opacity-30">{{ typeIcon(va.vessel.type) }}</div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate text-sm font-semibold text-gray-800 dark:text-white/90">{{ va.vessel.name }}</p>
              <div class="mt-0.5 flex items-center gap-2 text-xs text-gray-400">
                <span>\u26F5 {{ va.charterCount }}ch</span>
                <span>\u{1F3DD}\uFE0F {{ va.islandCount }}exc</span>
              </div>
              <p *ngIf="va.nextDate" class="text-[10px] text-brand-500 mt-0.5">
                Pr\xF3x: {{ va.nextDate | date:'dd MMM':'':'es' }}
              </p>
            </div>
            <!-- Total badge -->
            <div class="flex-shrink-0 text-right">
              <p class="text-xl font-extrabold text-gray-800 dark:text-white">{{ va.totalTrips }}</p>
              <p class="text-[10px] text-gray-400">viajes</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Captain activity -->
    <div *ngIf="captainActivity.length > 0"
      class="mb-5 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">\u{1F468}\u200D\u2708\uFE0F Actividad por capit\xE1n</h3>
        <a routerLink="/mis-capitanes" class="text-xs font-semibold text-brand-500 hover:text-brand-600">Ver capitanes \u2192</a>
      </div>
      <div class="grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div *ngFor="let ca of captainActivity" class="flex items-center gap-4 px-5 py-4">
          <!-- Avatar -->
          <div class="relative flex-shrink-0">
            <div class="h-12 w-12 overflow-hidden rounded-2xl bg-brand-100 dark:bg-brand-500/10">
              <img *ngIf="captainPhotoUrl(ca.captain)" [src]="captainPhotoUrl(ca.captain)" [alt]="ca.captain.firstName"
                class="h-full w-full object-cover" />
              <div *ngIf="!captainPhotoUrl(ca.captain)"
                class="flex h-full w-full items-center justify-center text-base font-bold text-brand-600 dark:text-brand-400">
                {{ captainInitials(ca.captain) }}
              </div>
            </div>
            <!-- Verified dot -->
            <span class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="truncate text-sm font-bold text-gray-800 dark:text-white/90">
              {{ ca.captain.firstName }} {{ ca.captain.lastName }}
            </p>
            <p *ngIf="ca.captain.licenseNumber" class="text-[10px] text-gray-400">Lic. {{ ca.captain.licenseNumber }}</p>
          </div>
          <!-- Stats -->
          <div class="flex-shrink-0 flex items-center gap-4 text-center">
            <div>
              <p class="text-xl font-extrabold text-brand-600 dark:text-brand-400">{{ ca.assignedCharters }}</p>
              <p class="text-[10px] text-gray-400">asignados</p>
            </div>
            <div>
              <p class="text-xl font-extrabold text-green-600 dark:text-green-400">{{ ca.completedTrips }}</p>
              <p class="text-[10px] text-gray-400">completados</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No captains tip -->
    <div *ngIf="provCaptains.length === 0"
      class="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-700 dark:border-amber-800/30 dark:bg-amber-500/10 dark:text-amber-300">
      <span class="mt-0.5 text-lg">\u26A0\uFE0F</span>
      <div>
        <p class="font-semibold">A\xFAn no tienes capitanes registrados</p>
        <p class="text-xs mt-0.5">Registra los capitanes de tu flota para poder asignarlos a los charters.</p>
        <a routerLink="/mis-capitanes" class="mt-2 inline-flex items-center gap-1 text-xs font-bold underline">
          Ir a Mis capitanes \u2192
        </a>
      </div>
    </div>

  </ng-container>
</ng-container>
` }]
  }], null, { ofertasTrack: [{
    type: ViewChild,
    args: ["ofertasTrack"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InicioComponent, { className: "InicioComponent", filePath: "src/app/pages/inicio/inicio.component.ts", lineNumber: 91 });
})();
export {
  InicioComponent
};
//# sourceMappingURL=chunk-WMFTZHF2.js.map
