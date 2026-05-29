import {
  AlquileresService
} from "./chunk-R5MJQUPH.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
import {
  TasaService
} from "./chunk-WSNZJFQG.js";
import {
  FormsModule
} from "./chunk-X6ED7CSN.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  ViewChild,
  environment,
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
} from "./chunk-6L3J4MHE.js";

// src/app/pages/inicio/inicio.component.ts
var _c0 = ["ofertasTrack"];
var _c1 = () => ({ tipo: "lancha" });
var _c2 = (a0, a1) => ["/alquileres", a0, a1];
var _c3 = () => ["/pagar-reserva"];
var _c4 = (a0) => ({ bookingId: a0 });
var _c5 = (a0, a1, a2, a3) => ({ "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400": a0, "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400": a1, "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400": a2, "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400": a3 });
var _c6 = (a0) => ["/mis-reservas", a0];
function InicioComponent_ng_container_0_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
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
    \u0275\u0275elementStart(0, "p", 38);
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
    \u0275\u0275elementStart(0, "a", 39);
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
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30)(2, "div", 31);
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275template(4, InicioComponent_ng_container_0_div_2_span_4_Template, 2, 3, "span", 33);
    \u0275\u0275elementStart(5, "h2", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InicioComponent_ng_container_0_div_2_p_7_Template, 2, 1, "p", 35)(8, InicioComponent_ng_container_0_div_2_a_8_Template, 2, 1, "a", 36);
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
    \u0275\u0275elementStart(0, "button", 40);
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
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.imageUrl(e_r8.photos[0]), \u0275\u0275sanitizeUrl)("alt", e_r8.name);
  }
}
function InicioComponent_ng_container_0_div_9_a_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
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
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 60);
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
    \u0275\u0275elementStart(0, "a", 49)(1, "div", 50);
    \u0275\u0275template(2, InicioComponent_ng_container_0_div_9_a_16_img_2_Template, 1, 2, "img", 51)(3, InicioComponent_ng_container_0_div_9_a_16_div_3_Template, 2, 1, "div", 52);
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "p", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InicioComponent_ng_container_0_div_9_a_16_p_11_Template, 4, 1, "p", 56);
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
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div")(3, "h2", 24);
    \u0275\u0275text(4, "Yates y Catamaranes disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "a", 45);
    \u0275\u0275text(9, "Ver todos \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 46);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.scrollOfertas(-1));
    });
    \u0275\u0275text(11, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 46);
    \u0275\u0275listener("click", function InicioComponent_ng_container_0_div_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.scrollOfertas(1));
    });
    \u0275\u0275text(13, " \u203A ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 47, 0);
    \u0275\u0275template(16, InicioComponent_ng_container_0_div_9_a_16_Template, 12, 10, "a", 48);
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
function InicioComponent_ng_container_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "p", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 65);
    \u0275\u0275text(7, "Completa el pago para confirmar tu lugar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 66);
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
function InicioComponent_ng_container_0_div_39_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "p", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 75);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((b_r9.destination == null ? null : b_r9.destination.name) ?? (b_r9.vessel == null ? null : b_r9.vessel.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r9.tripDate, " \xB7 ", b_r9.outboundSlot == null ? null : b_r9.outboundSlot.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r9.passengers, " pax \xB7 ", b_r9.vessel == null ? null : b_r9.vessel.name);
  }
}
function InicioComponent_ng_container_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2", 67);
    \u0275\u0275text(2, "\u{1F4C5} Pr\xF3ximas excursiones confirmadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275template(4, InicioComponent_ng_container_0_div_39_div_4_Template, 10, 5, "div", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.excursionesProximas);
  }
}
function InicioComponent_ng_container_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function InicioComponent_ng_container_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 79);
    \u0275\u0275text(4, "A\xFAn no tienes excursiones reservadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 80);
    \u0275\u0275text(6, " Buscar excursi\xF3n \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function InicioComponent_ng_container_0_div_48_div_1_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 94);
    \u0275\u0275text(1, " Pagar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c3))("queryParams", \u0275\u0275pureFunction1(3, _c4, b_r10.id));
  }
}
function InicioComponent_ng_container_0_div_48_div_1_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 95);
    \u0275\u0275text(1, " Ver ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c6, b_r10.id));
  }
}
function InicioComponent_ng_container_0_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "p", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 89)(11, "span", 90);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 91);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, InicioComponent_ng_container_0_div_48_div_1_a_16_Template, 2, 5, "a", 92)(17, InicioComponent_ng_container_0_div_48_div_1_a_17_Template, 2, 3, "a", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (b_r10.departurePoint == null ? null : b_r10.departurePoint.name) ?? "\u2014", " \u2192 ", (b_r10.destination == null ? null : b_r10.destination.name) ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", b_r10.tripDate, " \xB7 ", b_r10.outboundSlot == null ? null : b_r10.outboundSlot.departureTime, " \xB7 ", b_r10.passengers, " pax ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.vessel == null ? null : b_r10.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(14, _c5, b_r10.status === "PENDING", b_r10.status === "CONFIRMED", b_r10.status === "ACTIVE", b_r10.status === "COMPLETED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r10.status === "PENDING" ? "Pendiente de pago" : b_r10.status === "CONFIRMED" ? "Confirmada \u2713" : b_r10.status === "ACTIVE" ? "En curso \u{1F6A2}" : "Completada", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 11, b_r10.totalPrice, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r10.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r10.status !== "PENDING");
  }
}
function InicioComponent_ng_container_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, InicioComponent_ng_container_0_div_48_div_1_Template, 18, 19, "div", 82);
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
    \u0275\u0275template(9, InicioComponent_ng_container_0_div_9_Template, 17, 4, "div", 8);
    \u0275\u0275elementStart(10, "div", 9)(11, "h2", 10);
    \u0275\u0275text(12, "\xBFQu\xE9 necesitas?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "a", 12)(15, "div", 13);
    \u0275\u0275text(16, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "span", 15);
    \u0275\u0275text(19, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3", 16);
    \u0275\u0275text(21, "Lancha R\xE1pida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 17);
    \u0275\u0275text(23, "Viajes directos a las islas m\xE1s r\xE1pido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275text(25, " Ver precios \u2192 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "a", 19)(27, "div", 13);
    \u0275\u0275text(28, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3", 16);
    \u0275\u0275text(33, "Alquilar Yate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 17);
    \u0275\u0275text(35, "Yates y catamaranes exclusivos para grupos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18);
    \u0275\u0275text(37, " Ver disponibilidad \u2192 ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(38, InicioComponent_ng_container_0_div_38_Template, 10, 8, "div", 20)(39, InicioComponent_ng_container_0_div_39_Template, 5, 1, "div", 21);
    \u0275\u0275elementStart(40, "div", 22)(41, "div", 23)(42, "h2", 24);
    \u0275\u0275text(43, "Mis excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 25);
    \u0275\u0275text(45, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, InicioComponent_ng_container_0_div_46_Template, 2, 0, "div", 26)(47, InicioComponent_ng_container_0_div_47_Template, 7, 0, "div", 27)(48, InicioComponent_ng_container_0_div_48_Template, 2, 1, "div", 28);
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
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.excursionesPendientesPago.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.excursionesProximas.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.misExcursiones.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && ctx_r3.misExcursiones.length > 0);
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
  embarcacionesService = inject(EmbarcacionesService);
  islandService = inject(IslandTripsService);
  alquileresService = inject(AlquileresService);
  tasaService = inject(TasaService);
  loading = true;
  // Cliente
  misExcursiones = [];
  misCharters = [];
  yatesYCatamaranes = [];
  ofertasTrack;
  scrollOfertas(dir) {
    const el = this.ofertasTrack?.nativeElement;
    if (!el)
      return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  }
  // Slider de noticias
  noticias = NOTICIAS_MOCK;
  slideActual = signal(0, ...ngDevMode ? [{ debugName: "slideActual" }] : (
    /* istanbul ignore next */
    []
  ));
  sliderInterval;
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
  get excursionesPendientesPago() {
    return this.misExcursiones.filter((b) => b.status === "PENDING");
  }
  get excursionesProximas() {
    const hoy = this.hoy();
    return this.misExcursiones.filter((b) => b.status === "CONFIRMED" && b.tripDate >= hoy).sort((a, b) => a.tripDate.localeCompare(b.tripDate)).slice(0, 3);
  }
  ngOnInit() {
    this.tasaService.load();
    if (this.isCliente)
      this.loadCliente();
    else {
      this.loading = false;
    }
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
  loadCliente() {
    const userId = this.user?.id;
    this.embarcacionesService.getAll().subscribe({
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
    this.alquileresService.getByClient(userId).subscribe({
      next: (a) => {
        this.misCharters = a.filter((x) => x.status !== "CANCELLED").slice(0, 3);
      },
      error: () => {
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
  }, decls: 1, vars: 1, consts: [["ofertasTrack", ""], [4, "ngIf"], [1, "relative", "mb-6", "overflow-hidden", "rounded-3xl", "shadow-xl", 2, "height", "280px"], ["class", "absolute inset-0 transition-opacity duration-700", 3, "opacity", "z-index", 4, "ngFor", "ngForOf"], [1, "absolute", "left-4", "top-1/2", "z-20", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/30", "text-white", "backdrop-blur-sm", "hover:bg-black/50", "transition-colors", 3, "click"], [1, "absolute", "right-4", "top-1/2", "z-20", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/30", "text-white", "backdrop-blur-sm", "hover:bg-black/50", "transition-colors", 3, "click"], [1, "absolute", "bottom-4", "left-1/2", "z-20", "-translate-x-1/2", "flex", "gap-2"], ["class", "h-2 rounded-full transition-all duration-300", 3, "w-6", "w-2", "bg-white", "bg-white/40", "click", 4, "ngFor", "ngForOf"], ["class", "mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "mb-6"], [1, "mb-4", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], ["routerLink", "/buscar", 1, "group", "relative", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-blue-500", "to-blue-700", "p-7", "text-white", "shadow-lg", "hover:shadow-xl", "transition-all", "hover:-translate-y-1", "cursor-pointer", 3, "queryParams"], [1, "absolute", "-bottom-6", "-right-6", "text-9xl", "opacity-10", "group-hover:opacity-20", "transition-opacity", "select-none"], [1, "relative"], [1, "text-5xl"], [1, "mt-4", "text-2xl", "font-extrabold"], [1, "mt-1", "text-sm", "text-blue-100"], [1, "mt-5", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-white/20", "px-4", "py-1.5", "text-xs", "font-semibold", "hover:bg-white/30", "transition-colors"], ["routerLink", "/alquileres", 1, "group", "relative", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-blue-600", "to-cyan-600", "p-7", "text-white", "shadow-lg", "hover:shadow-xl", "transition-all", "hover:-translate-y-1", "cursor-pointer"], ["class", "mb-6 flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 shadow-sm dark:border-amber-500/20 dark:bg-amber-500/5", 4, "ngIf"], ["class", "mb-6", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "font-bold", "text-gray-800", "dark:text-white/90"], ["routerLink", "/mis-reservas", 1, "text-sm", "font-medium", "text-brand-500", "hover:text-brand-600"], ["class", "p-8 text-center text-sm text-gray-400", 4, "ngIf"], ["class", "p-10 text-center", 4, "ngIf"], ["class", "divide-y divide-gray-100 dark:divide-gray-800", 4, "ngIf"], [1, "absolute", "inset-0", "transition-opacity", "duration-700"], [1, "absolute", "inset-0", "bg-cover", "bg-center"], [1, "absolute", "inset-0", "bg-gradient-to-r", "from-black/70", "via-black/40", "to-transparent"], [1, "relative", "z-10", "flex", "h-full", "flex-col", "justify-end", "p-8", "md:p-10"], ["class", "mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold text-white", 3, "class", 4, "ngIf"], [1, "text-2xl", "font-extrabold", "text-white", "md:text-3xl", "leading-tight"], ["class", "mt-2 max-w-lg text-sm text-white/80", 4, "ngIf"], ["class", "mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors shadow", 3, "routerLink", 4, "ngIf"], [1, "mb-3", "inline-flex", "w-fit", "rounded-full", "px-3", "py-1", "text-xs", "font-bold", "text-white"], [1, "mt-2", "max-w-lg", "text-sm", "text-white/80"], [1, "mt-4", "inline-flex", "w-fit", "items-center", "gap-2", "rounded-xl", "bg-white", "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-900", "hover:bg-gray-50", "transition-colors", "shadow", 3, "routerLink"], [1, "h-2", "rounded-full", "transition-all", "duration-300", 3, "click"], [1, "mb-6", "overflow-hidden", "rounded-3xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "flex", "items-center", "gap-3"], ["routerLink", "/alquileres", 1, "text-sm", "font-semibold", "text-blue-500", "hover:text-blue-600"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-gray-200", "bg-white", "text-gray-600", "hover:border-blue-300", "hover:text-blue-600", "transition-colors", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-gray-300", 3, "click"], [1, "flex", "gap-4", "overflow-x-auto", "scroll-smooth", "px-6", "py-5", 2, "scrollbar-width", "none", "-ms-overflow-style", "none"], ["class", "group flex-shrink-0 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all dark:border-gray-700 dark:bg-gray-900", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "group", "flex-shrink-0", "w-56", "overflow-hidden", "rounded-2xl", "border", "border-gray-100", "bg-white", "shadow-sm", "hover:shadow-md", "hover:border-blue-200", "transition-all", "dark:border-gray-700", "dark:bg-gray-900", 3, "routerLink"], [1, "relative", "h-36", "overflow-hidden", "bg-gradient-to-br", "from-blue-50", "to-blue-100", "dark:from-blue-950", "dark:to-blue-900"], ["class", "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-4xl opacity-30", 4, "ngIf"], [1, "absolute", "top-2", "left-2", "rounded-full", "bg-blue-600", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-white"], [1, "p-3"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90", "truncate"], ["class", "mt-2 text-sm font-extrabold text-blue-600 dark:text-blue-400", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-4xl", "opacity-30"], [1, "mt-2", "text-sm", "font-extrabold", "text-blue-600", "dark:text-blue-400"], [1, "text-[10px]", "font-normal", "text-gray-400"], [1, "mb-6", "flex", "items-center", "gap-4", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "px-6", "py-4", "shadow-sm", "dark:border-amber-500/20", "dark:bg-amber-500/5"], [1, "text-2xl"], [1, "flex-1"], [1, "font-bold", "text-amber-800", "dark:text-amber-300"], [1, "text-sm", "text-amber-700", "dark:text-amber-400"], [1, "flex-shrink-0", "rounded-xl", "bg-amber-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-amber-600", "transition-colors", "shadow", 3, "routerLink", "queryParams"], [1, "mb-3", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "gap-3", "sm:grid-cols-3"], ["class", "flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-500/20 dark:bg-green-500/5", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-4", "rounded-2xl", "border", "border-green-200", "bg-green-50", "p-4", "dark:border-green-500/20", "dark:bg-green-500/5"], [1, "flex", "h-11", "w-11", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-green-500", "text-xl", "text-white"], [1, "min-w-0", "flex-1"], [1, "font-bold", "text-green-900", "dark:text-green-300", "truncate"], [1, "text-xs", "text-green-700", "dark:text-green-400", "mt-0.5"], [1, "text-xs", "text-green-600", "dark:text-green-500"], [1, "p-8", "text-center", "text-sm", "text-gray-400"], [1, "p-10", "text-center"], [1, "text-5xl", "mb-3"], [1, "text-gray-500", "dark:text-gray-400"], ["routerLink", "/buscar", 1, "mt-3", "inline-block", "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "shadow-md"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "px-6", "py-4", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", "transition-colors"], [1, "flex", "h-12", "w-12", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-blue-50", "text-2xl", "dark:bg-blue-500/10"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-gray-800", "dark:text-white/90", "truncate"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "text-gray-400"], [1, "flex", "flex-col", "items-end", "gap-1.5", "flex-shrink-0"], [1, "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "font-bold", "text-gray-700", "dark:text-white/80"], ["class", "ml-1 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600 transition-colors", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "ml-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 transition-colors", 3, "routerLink", 4, "ngIf"], [1, "ml-1", "rounded-lg", "bg-amber-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-amber-600", "transition-colors", 3, "routerLink", "queryParams"], [1, "ml-1", "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "dark:border-gray-700", "dark:text-gray-400", "transition-colors", 3, "routerLink"]], template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InicioComponent_ng_container_0_Template, 49, 10, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isCliente);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DecimalPipe], encapsulation: 2 });
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

  <!-- \u2550\u2550 PR\xD3XIMAS EXCURSIONES \u2550\u2550 -->
  <div *ngIf="!loading && excursionesProximas.length > 0" class="mb-6">
    <h2 class="mb-3 text-base font-bold text-gray-800 dark:text-white/90">\u{1F4C5} Pr\xF3ximas excursiones confirmadas</h2>
    <div class="grid gap-3 sm:grid-cols-3">
      <div *ngFor="let b of excursionesProximas"
        class="flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-500/20 dark:bg-green-500/5">
        <div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-xl text-white">\u{1F3DD}\uFE0F</div>
        <div class="min-w-0 flex-1">
          <p class="font-bold text-green-900 dark:text-green-300 truncate">{{ b.destination?.name ?? b.vessel?.name }}</p>
          <p class="text-xs text-green-700 dark:text-green-400 mt-0.5">{{ b.tripDate }} \xB7 {{ b.outboundSlot?.departureTime }}</p>
          <p class="text-xs text-green-600 dark:text-green-500">{{ b.passengers }} pax \xB7 {{ b.vessel?.name }}</p>
        </div>
      </div>
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
` }]
  }], null, { ofertasTrack: [{
    type: ViewChild,
    args: ["ofertasTrack"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InicioComponent, { className: "InicioComponent", filePath: "src/app/pages/inicio/inicio.component.ts", lineNumber: 62 });
})();
export {
  InicioComponent
};
//# sourceMappingURL=chunk-4V6JZQKY.js.map
