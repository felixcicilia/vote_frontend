import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  AMENITIES
} from "./chunk-TTYATM5N.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7NRIB5KE.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/buscar/pages/detalle-lancha/detalle-lancha.component.ts
function DetalleLanchaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Cargando embarcaci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function DetalleLanchaComponent_ng_container_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Disponible");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "No disponible");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vessel.provider == null ? null : ctx_r1.vessel.provider.companyName);
  }
}
function DetalleLanchaComponent_ng_container_2_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", ctx_r1.llegadaSel.icon, " ", ctx_r1.llegadaSel.name, " \xB7 ", ctx_r1.llegadaSel.state);
  }
}
function DetalleLanchaComponent_ng_container_2_img_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(ctx_r1.vessel.photos[ctx_r1.activePhoto]), \u0275\u0275sanitizeUrl)("alt", ctx_r1.vessel.name);
  }
}
function DetalleLanchaComponent_ng_container_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(ctx_r1.vessel.type));
  }
}
function DetalleLanchaComponent_ng_container_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activePhoto = ctx_r1.activePhoto - 1);
    });
    \u0275\u0275text(1, "\u2039");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activePhoto = ctx_r1.activePhoto + 1);
    });
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.activePhoto + 1, " / ", ctx_r1.vessel.photos.length);
  }
}
function DetalleLanchaComponent_ng_container_2_div_26_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_div_26_button_1_Template_button_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activePhoto = i_r6);
    });
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-brand-500", ctx_r1.activePhoto === i_r6)("border-transparent", ctx_r1.activePhoto !== i_r6);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imageUrl(p_r7), \u0275\u0275sanitizeUrl);
  }
}
function DetalleLanchaComponent_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, DetalleLanchaComponent_ng_container_2_div_26_button_1_Template, 2, 5, "button", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vessel.photos);
  }
}
function DetalleLanchaComponent_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 30);
    \u0275\u0275text(2, "Cabinas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6, "habitaciones");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.rooms);
  }
}
function DetalleLanchaComponent_ng_container_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 30);
    \u0275\u0275text(2, "Ba\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6, "ba\xF1os");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.bathrooms);
  }
}
function DetalleLanchaComponent_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 30);
    \u0275\u0275text(2, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6, "modelo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.year);
  }
}
function DetalleLanchaComponent_ng_container_2_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vessel.description);
  }
}
function DetalleLanchaComponent_ng_container_2_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.label);
  }
}
function DetalleLanchaComponent_ng_container_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 27);
    \u0275\u0275text(2, "Servicios a bordo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 76);
    \u0275\u0275template(4, DetalleLanchaComponent_ng_container_2_div_42_div_4_Template, 5, 2, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.vesselAmenities);
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_button_6_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u23F1 ", s_r10.durationMinutes, " min");
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_button_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "LLENO");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_button_6_ng_container_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_button_6_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 94);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, "/ persona");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_43_button_6_ng_container_11_div_6_Template, 2, 0, "div", 95);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(3, 2, s_r10.pricePerPerson, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) === s_r10.id);
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_div_43_button_6_Template_button_click_0_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.slotIsFull(s_r10) && ctx_r1.selectIda(s_r10));
    });
    \u0275\u0275elementStart(1, "div")(2, "p", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_43_button_6_p_6_Template, 2, 1, "p", 88);
    \u0275\u0275elementStart(7, "p", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 90);
    \u0275\u0275template(10, DetalleLanchaComponent_ng_container_2_div_43_button_6_span_10_Template, 2, 0, "span", 91)(11, DetalleLanchaComponent_ng_container_2_div_43_button_6_ng_container_11_Template, 7, 5, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-brand-500", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) === s_r10.id)("bg-brand-50", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) === s_r10.id)("dark:bg-brand-500/10", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) === s_r10.id)("border-gray-200", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) !== s_r10.id && !ctx_r1.slotIsFull(s_r10))("hover:border-brand-300", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) !== s_r10.id && !ctx_r1.slotIsFull(s_r10))("dark:border-gray-700", (ctx_r1.selectedIda == null ? null : ctx_r1.selectedIda.id) !== s_r10.id)("opacity-50", ctx_r1.slotIsFull(s_r10))("cursor-not-allowed", ctx_r1.slotIsFull(s_r10));
    \u0275\u0275property("disabled", ctx_r1.slotIsFull(s_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r10.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", s_r10.departurePoint.icon ?? "\u2693", " ", s_r10.departurePoint.name, " \u2192 ", s_r10.arrivalPoint.icon ?? "\u2693", " ", s_r10.arrivalPoint.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green-600", ctx_r1.slotAvailable(s_r10) > 5)("text-amber-500", ctx_r1.slotAvailable(s_r10) > 0 && ctx_r1.slotAvailable(s_r10) <= 5)("text-red-500", ctx_r1.slotIsFull(s_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.slotIsFull(s_r10) ? "Agotado" : ctx_r1.slotAvailable(s_r10) + " cupo" + (ctx_r1.slotAvailable(s_r10) !== 1 ? "s" : "") + " disponible" + (ctx_r1.slotAvailable(s_r10) !== 1 ? "s" : ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.slotIsFull(s_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.slotIsFull(s_r10));
  }
}
function DetalleLanchaComponent_ng_container_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 81);
    \u0275\u0275text(2, "\u2192 Salidas disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Selecciona el horario de ida que prefieras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 83);
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_43_button_6_Template, 12, 32, "button", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.visibleIdaSlots);
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_button_6_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u23F1 ", s_r12.durationMinutes, " min");
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_button_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "LLENO");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_button_6_ng_container_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_button_6_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 98);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, "/ persona");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_44_button_6_ng_container_11_div_6_Template, 2, 0, "div", 99);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(3, 2, s_r12.pricePerPerson, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) === s_r12.id);
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_div_44_button_6_Template_button_click_0_listener() {
      const s_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.slotIsFull(s_r12) && ctx_r1.selectRegreso(s_r12));
    });
    \u0275\u0275elementStart(1, "div")(2, "p", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_44_button_6_p_6_Template, 2, 1, "p", 88);
    \u0275\u0275elementStart(7, "p", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 90);
    \u0275\u0275template(10, DetalleLanchaComponent_ng_container_2_div_44_button_6_span_10_Template, 2, 0, "span", 91)(11, DetalleLanchaComponent_ng_container_2_div_44_button_6_ng_container_11_Template, 7, 5, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-emerald-500", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) === s_r12.id)("bg-emerald-50", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) === s_r12.id)("dark:bg-emerald-500/10", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) === s_r12.id)("border-gray-200", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) !== s_r12.id && !ctx_r1.slotIsFull(s_r12))("hover:border-emerald-300", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) !== s_r12.id && !ctx_r1.slotIsFull(s_r12))("dark:border-gray-700", (ctx_r1.selectedRegreso == null ? null : ctx_r1.selectedRegreso.id) !== s_r12.id)("opacity-50", ctx_r1.slotIsFull(s_r12))("cursor-not-allowed", ctx_r1.slotIsFull(s_r12));
    \u0275\u0275property("disabled", ctx_r1.slotIsFull(s_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r12.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", s_r12.departurePoint.icon ?? "\u2693", " ", s_r12.departurePoint.name, " \u2192 ", s_r12.arrivalPoint.icon ?? "\u2693", " ", s_r12.arrivalPoint.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r12.durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green-600", ctx_r1.slotAvailable(s_r12) > 5)("text-amber-500", ctx_r1.slotAvailable(s_r12) > 0 && ctx_r1.slotAvailable(s_r12) <= 5)("text-red-500", ctx_r1.slotIsFull(s_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F465} ", ctx_r1.slotIsFull(s_r12) ? "Agotado" : ctx_r1.slotAvailable(s_r12) + " cupo" + (ctx_r1.slotAvailable(s_r12) !== 1 ? "s" : "") + " disponible" + (ctx_r1.slotAvailable(s_r12) !== 1 ? "s" : ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.slotIsFull(s_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.slotIsFull(s_r12));
  }
}
function DetalleLanchaComponent_ng_container_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 81);
    \u0275\u0275text(2, "\u2190 Regresos disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Selecciona el horario de regreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 83);
    \u0275\u0275template(6, DetalleLanchaComponent_ng_container_2_div_44_button_6_Template, 12, 32, "button", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.visibleRegresoSlots);
  }
}
function DetalleLanchaComponent_ng_container_2_div_45_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 103);
    \u0275\u0275text(2, "No quedan salidas disponibles para hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 104);
    \u0275\u0275text(4, "Todos los horarios de hoy ya salieron. Selecciona otra fecha para ver disponibilidad.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_45_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 103);
    \u0275\u0275text(2, "Sin horarios publicados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 104);
    \u0275\u0275text(4, "Esta lancha a\xFAn no tiene horarios disponibles.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DetalleLanchaComponent_ng_container_2_div_45_ng_container_3_Template, 5, 0, "ng-container", 2)(4, DetalleLanchaComponent_ng_container_2_div_45_ng_container_4_Template, 5, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.idaSlots.length > 0 || ctx_r1.regresoSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.idaSlots.length === 0 && ctx_r1.regresoSlots.length === 0);
  }
}
function DetalleLanchaComponent_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function DetalleLanchaComponent_ng_container_2_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div")(2, "p", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedIda.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedIda.departurePoint.name, " \u2192 ", ctx_r1.selectedIda.arrivalPoint.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedIda.pricePerPerson, "/pax");
  }
}
function DetalleLanchaComponent_ng_container_2_p_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 109);
    \u0275\u0275text(1, "Elige un horario de ida \u2191");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_80_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div")(2, "p", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 110);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedRegreso.departureTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedRegreso.departurePoint.name, " \u2192 ", ctx_r1.selectedRegreso.arrivalPoint.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", ctx_r1.selectedRegreso.pricePerPerson, "/pax");
  }
}
function DetalleLanchaComponent_ng_container_2_div_80_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 109);
    \u0275\u0275text(1, "Elige un horario de regreso \u2191");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275text(2, "\u2190 Regreso");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DetalleLanchaComponent_ng_container_2_div_80_div_3_Template, 8, 4, "div", 54)(4, DetalleLanchaComponent_ng_container_2_div_80_p_4_Template, 2, 0, "p", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRegreso);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedRegreso);
  }
}
function DetalleLanchaComponent_ng_container_2_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 106)(2, "span", 111);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 112);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.passengers, " pax \xD7 precio");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 3, ctx_r1.totalPrice, "1.2-2"), " USD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(ctx_r1.totalPrice));
  }
}
function DetalleLanchaComponent_ng_container_2_div_88_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275text(1, "\xB7 Selecciona un horario de ida");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_88_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275text(1, "\xB7 Indica la fecha del viaje");
    \u0275\u0275elementEnd();
  }
}
function DetalleLanchaComponent_ng_container_2_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, DetalleLanchaComponent_ng_container_2_div_88_p_1_Template, 2, 0, "p", 115)(2, DetalleLanchaComponent_ng_container_2_div_88_p_2_Template, 2, 0, "p", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedIda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fecha);
  }
}
function DetalleLanchaComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div")(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DetalleLanchaComponent_ng_container_2_span_9_Template, 2, 0, "span", 11)(10, DetalleLanchaComponent_ng_container_2_span_10_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, DetalleLanchaComponent_ng_container_2_p_13_Template, 2, 1, "p", 14)(14, DetalleLanchaComponent_ng_container_2_p_14_Template, 2, 3, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 16);
    \u0275\u0275text(16, " \u2190 Volver al buscador ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "div", 20);
    \u0275\u0275template(21, DetalleLanchaComponent_ng_container_2_img_21_Template, 1, 2, "img", 21)(22, DetalleLanchaComponent_ng_container_2_div_22_Template, 2, 1, "div", 22)(23, DetalleLanchaComponent_ng_container_2_button_23_Template, 2, 0, "button", 23)(24, DetalleLanchaComponent_ng_container_2_button_24_Template, 2, 0, "button", 24)(25, DetalleLanchaComponent_ng_container_2_div_25_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, DetalleLanchaComponent_ng_container_2_div_26_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 6)(28, "h2", 27);
    \u0275\u0275text(29, "Ficha t\xE9cnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28)(31, "div", 29)(32, "p", 30);
    \u0275\u0275text(33, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 31);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 32);
    \u0275\u0275text(37, "pasajeros m\xE1x.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, DetalleLanchaComponent_ng_container_2_div_38_Template, 7, 1, "div", 33)(39, DetalleLanchaComponent_ng_container_2_div_39_Template, 7, 1, "div", 33)(40, DetalleLanchaComponent_ng_container_2_div_40_Template, 7, 1, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, DetalleLanchaComponent_ng_container_2_p_41_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, DetalleLanchaComponent_ng_container_2_div_42_Template, 5, 1, "div", 35)(43, DetalleLanchaComponent_ng_container_2_div_43_Template, 7, 1, "div", 35)(44, DetalleLanchaComponent_ng_container_2_div_44_Template, 7, 1, "div", 35)(45, DetalleLanchaComponent_ng_container_2_div_45_Template, 5, 2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37)(47, "div", 38)(48, "div", 39)(49, "p", 40);
    \u0275\u0275text(50, "precio desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 41);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 40);
    \u0275\u0275text(55, "USD por persona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 42);
    \u0275\u0275template(57, DetalleLanchaComponent_ng_container_2_div_57_Template, 2, 1, "div", 43);
    \u0275\u0275elementStart(58, "div")(59, "label", 44);
    \u0275\u0275text(60, "\u{1F4C5} Fecha del viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function DetalleLanchaComponent_ng_container_2_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fecha, $event) || (ctx_r1.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DetalleLanchaComponent_ng_container_2_Template_input_ngModelChange_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFechaChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div")(63, "label", 44);
    \u0275\u0275text(64, "\u{1F465} Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 46)(66, "button", 47);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.passengers = ctx_r1.passengers > 1 ? ctx_r1.passengers - 1 : 1);
    });
    \u0275\u0275text(67, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 48);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 49);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.passengers = ctx_r1.passengers < ctx_r1.maxPassengers ? ctx_r1.passengers + 1 : ctx_r1.passengers);
    });
    \u0275\u0275text(71, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "p", 50);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 51)(75, "div", 52)(76, "p", 53);
    \u0275\u0275text(77, "\u2192 Ida");
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, DetalleLanchaComponent_ng_container_2_div_78_Template, 8, 4, "div", 54)(79, DetalleLanchaComponent_ng_container_2_p_79_Template, 2, 0, "p", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, DetalleLanchaComponent_ng_container_2_div_80_Template, 5, 2, "div", 56)(81, DetalleLanchaComponent_ng_container_2_div_81_Template, 9, 6, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div")(83, "label", 44);
    \u0275\u0275text(84, "\u{1F4DD} Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function DetalleLanchaComponent_ng_container_2_Template_textarea_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.specialRequests, $event) || (ctx_r1.specialRequests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "button", 58);
    \u0275\u0275listener("click", function DetalleLanchaComponent_ng_container_2_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reservar());
    });
    \u0275\u0275text(87);
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, DetalleLanchaComponent_ng_container_2_div_88_Template, 3, 2, "div", 59);
    \u0275\u0275elementStart(89, "p", 60);
    \u0275\u0275text(90, "Sin cargos ocultos \xB7 Confirmaci\xF3n inmediata");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(ctx_r1.vessel.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(ctx_r1.vessel.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vessel.isAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.provider == null ? null : ctx_r1.vessel.provider.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaSel);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos[ctx_r1.activePhoto]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos[0]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos.length) ?? 0) > 1 && ctx_r1.activePhoto > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos.length) ?? 0) > 1 && ctx_r1.activePhoto < ctx_r1.vessel.photos.length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos.length) ?? 0) > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.vessel.photos == null ? null : ctx_r1.vessel.photos.length) ?? 0) > 1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.vessel.capacity);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vessel.rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.bathrooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vesselAmenities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visibleIdaSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visibleRegresoSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visibleIdaSlots.length === 0 && ctx_r1.visibleRegresoSlots.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(53, 37, ctx_r1.selectedIda ? ctx_r1.selectedIda.pricePerPerson : ctx_r1.idaSlots[0] == null ? null : ctx_r1.idaSlots[0].pricePerPerson, "1.2-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fecha);
    \u0275\u0275property("min", ctx_r1.today);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.passengers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.passengers >= ctx_r1.maxPassengers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("M\xE1x. ", ctx_r1.maxPassengers, " pasajeros disponibles");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedIda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedIda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.regresoSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPrice > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.specialRequests);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canBook || ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Reservando..." : "\u2713 Reservar ahora \u2192", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.canBook);
  }
}
var DetalleLanchaComponent = class _DetalleLanchaComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  http = inject(HttpClient);
  tripsService = inject(IslandTripsService);
  embService = inject(EmbarcacionesService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  ALL_AMENITIES = AMENITIES;
  loading = true;
  submitting = false;
  errorMessage = "";
  vessel = null;
  idaSlots = [];
  regresoSlots = [];
  activePhoto = 0;
  // Parámetros heredados del buscador
  llegadaId = null;
  salidaId = null;
  fecha = "";
  passengers = 2;
  // Disponibilidad por slotId
  availability = /* @__PURE__ */ new Map();
  get tripType() {
    return this.selectedRegreso ? "IDA_VUELTA" : "IDA";
  }
  // Selección del cliente
  selectedIda = null;
  selectedRegreso = null;
  specialRequests = "";
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  get currentUser() {
    return this.authService.user();
  }
  get llegadaSel() {
    return this.idaSlots[0]?.arrivalPoint ?? this.regresoSlots[0]?.departurePoint ?? null;
  }
  get salidaSel() {
    return this.idaSlots[0]?.departurePoint ?? null;
  }
  get totalPrice() {
    const ida = this.selectedIda ? Number(this.selectedIda.pricePerPerson) * this.passengers : 0;
    const vuelta = this.selectedRegreso ? Number(this.selectedRegreso.pricePerPerson) * this.passengers : 0;
    return ida + vuelta;
  }
  get maxPassengers() {
    if (!this.selectedIda)
      return this.vessel?.capacity ?? 99;
    const avail = this.availability.get(this.selectedIda.id);
    if (avail)
      return avail.available;
    const cap = this.vessel?.capacity ?? 99;
    return Math.min(cap, this.selectedIda.maxPassengers ?? cap);
  }
  slotAvailable(slot) {
    const avail = this.availability.get(slot.id);
    if (avail)
      return avail.available;
    const cap = this.vessel?.capacity ?? 99;
    return slot.maxPassengers ?? cap;
  }
  slotIsFull(slot) {
    return this.slotAvailable(slot) <= 0;
  }
  loadAvailability() {
    if (!this.fecha)
      return;
    const allSlots = [...this.idaSlots, ...this.regresoSlots];
    allSlots.forEach((slot) => {
      this.http.get(`${environment.apiUrl}/island-bookings/availability?slotId=${slot.id}&date=${this.fecha}`).subscribe({ next: (a) => {
        this.availability = new Map(this.availability).set(slot.id, a);
      } });
    });
  }
  nowHHMM() {
    const n = /* @__PURE__ */ new Date();
    return `${n.getHours().toString().padStart(2, "0")}:${n.getMinutes().toString().padStart(2, "0")}`;
  }
  isToday(date) {
    return date === this.today;
  }
  isSlotVisible(slot) {
    const now = this.nowHHMM();
    if (slot.departureDate) {
      if (slot.departureDate < this.today)
        return false;
      if (slot.departureDate === this.today && slot.departureTime <= now)
        return false;
      if (this.fecha && slot.departureDate !== this.fecha)
        return false;
      return true;
    }
    if (this.fecha && this.isToday(this.fecha) && slot.departureTime <= now)
      return false;
    return true;
  }
  get visibleIdaSlots() {
    return this.idaSlots.filter((s) => this.isSlotVisible(s));
  }
  get visibleRegresoSlots() {
    return this.regresoSlots.filter((s) => this.isSlotVisible(s));
  }
  get canBook() {
    if (!this.selectedIda || !this.fecha)
      return false;
    if (this.slotIsFull(this.selectedIda))
      return false;
    if (this.passengers > this.maxPassengers)
      return false;
    return true;
  }
  get vesselAmenities() {
    if (!this.vessel?.amenities?.length)
      return [];
    return this.ALL_AMENITIES.filter((a) => this.vessel.amenities.includes(a.value));
  }
  ngOnInit() {
    this.tasaService.load();
    const snap = this.route.snapshot;
    const vesselId = Number(snap.paramMap.get("id"));
    this.llegadaId = Number(snap.queryParamMap.get("llegadaId")) || null;
    this.salidaId = Number(snap.queryParamMap.get("salidaId")) || null;
    this.fecha = snap.queryParamMap.get("fecha") ?? "";
    this.passengers = Number(snap.queryParamMap.get("passengers")) || 2;
    this.embService.getById(vesselId).subscribe({
      next: (v) => {
        this.vessel = v;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.tripsService.getSlots({ vesselId }).subscribe({
      next: (slots) => {
        this.idaSlots = slots.filter((s) => s.direction === "IDA").sort((a, b) => a.departureTime.localeCompare(b.departureTime));
        this.regresoSlots = slots.filter((s) => s.direction === "REGRESO").sort((a, b) => a.departureTime.localeCompare(b.departureTime));
        this.loadAvailability();
      }
    });
  }
  onFechaChange() {
    this.availability = /* @__PURE__ */ new Map();
    this.selectedIda = null;
    this.selectedRegreso = null;
    this.loadAvailability();
  }
  selectIda(slot) {
    this.selectedIda = this.selectedIda?.id === slot.id ? null : slot;
  }
  selectRegreso(slot) {
    this.selectedRegreso = this.selectedRegreso?.id === slot.id ? null : slot;
  }
  reservar() {
    if (!this.canBook || !this.vessel)
      return;
    const user = this.currentUser;
    if (!user) {
      this.router.navigate(["/login"]);
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    this.tripsService.createBooking({
      clientId: user.id,
      vesselId: this.vessel.id,
      destinationId: this.llegadaId ?? this.selectedIda.arrivalPoint.id,
      departurePointId: this.selectedIda.departurePoint.id,
      outboundSlotId: this.selectedIda.id,
      returnSlotId: this.selectedRegreso?.id,
      tripDate: this.fecha || this.today,
      tripType: this.tripType,
      passengers: this.passengers,
      specialRequests: this.specialRequests || void 0
    }).subscribe({
      next: (b) => {
        this.submitting = false;
        this.router.navigate(["/pagar-reserva"], { queryParams: { bookingId: b.id } });
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear la reserva.";
        this.submitting = false;
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
  typeIcon(t) {
    return t === "YATE" ? "\u26F5" : t === "CATAMARAN" ? "\u{1F6E5}\uFE0F" : "\u{1F6A4}";
  }
  typeLabel(t) {
    const m = { LANCHA: "Lancha", YATE: "Yate", CATAMARAN: "Catamar\xE1n", BOTE: "Bote" };
    return m[t] ?? t;
  }
  static \u0275fac = function DetalleLanchaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleLanchaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleLanchaComponent, selectors: [["app-detalle-lancha"]], decls: 3, vars: 2, consts: [[1, "mx-auto", "max-w-6xl", "space-y-6", "pb-12"], ["class", "flex flex-col items-center justify-center py-32 gap-4", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-32", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-2xl"], [1, "rounded-full", "bg-brand-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-brand-700", "dark:bg-brand-500/20", "dark:text-brand-300"], ["class", "rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "mt-1 text-sm text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "mt-0.5 text-sm text-brand-600 dark:text-brand-400", 4, "ngIf"], ["routerLink", "/buscar", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-start"], [1, "flex-1", "min-w-0", "space-y-5"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "relative", "h-72", "bg-gradient-to-br", "from-blue-900", "to-slate-900", "md:h-80"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-9xl opacity-20", 4, "ngIf"], ["class", "absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl", 3, "click", 4, "ngIf"], ["class", "absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl", 3, "click", 4, "ngIf"], ["class", "absolute bottom-3 right-3", 4, "ngIf"], ["class", "flex gap-2 overflow-x-auto p-3", 4, "ngIf"], [1, "mb-4", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "bg-gray-50", "p-3", "text-center", "dark:bg-white/[0.04]"], [1, "text-xs", "text-gray-400"], [1, "text-2xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "text-[10px]", "text-gray-400"], ["class", "rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]", 4, "ngIf"], ["class", "mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "w-full", "flex-shrink-0", "lg:sticky", "lg:top-6", "lg:w-96"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-xl", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-t-2xl", "bg-gradient-to-r", "from-blue-800", "to-blue-600", "px-5", "py-4"], [1, "text-xs", "text-blue-200"], [1, "text-3xl", "font-extrabold", "text-white"], [1, "p-5", "space-y-4"], ["class", "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "date", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "ngModelChange", "ngModel", "min"], [1, "flex", "h-10", "items-center", "justify-between", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "dark:border-gray-700", "dark:bg-slate-800"], ["type", "button", 1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "text-gray-500", "hover:bg-gray-200", "disabled:opacity-30", "dark:hover:bg-slate-700", 3, "click"], [1, "font-bold", "text-gray-800", "dark:text-white"], ["type", "button", 1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "text-gray-500", "hover:bg-gray-200", "disabled:opacity-30", "dark:hover:bg-slate-700", 3, "click", "disabled"], [1, "mt-1", "text-[10px]", "text-gray-400"], [1, "rounded-xl", "border", "border-gray-100", "bg-gray-50", "divide-y", "divide-gray-100", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:divide-gray-700"], [1, "px-4", "py-3"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-wide", "text-gray-400", "mb-1"], ["class", "flex items-center justify-between", 4, "ngIf"], ["class", "text-xs text-gray-400 italic", 4, "ngIf"], ["class", "px-4 py-3", 4, "ngIf"], ["rows", "2", "placeholder", "Snorkeling, comida a bordo, ocasi\xF3n especial...", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "py-2", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", "resize-none", 3, "ngModelChange", "ngModel"], [1, "w-full", "rounded-xl", "bg-brand-500", "py-4", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", "shadow-sm", 3, "click", "disabled"], ["class", "space-y-1", 4, "ngIf"], [1, "text-center", "text-[10px]", "text-gray-400"], [1, "rounded-full", "bg-green-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "rounded-full", "bg-red-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-red-600", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-0.5", "text-sm", "text-brand-600", "dark:text-brand-400"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-9xl", "opacity-20"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "text-xl", 3, "click"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "text-xl", 3, "click"], [1, "absolute", "bottom-3", "right-3"], [1, "rounded-full", "bg-black/60", "px-3", "py-1", "text-xs", "text-white"], [1, "flex", "gap-2", "overflow-x-auto", "p-3"], ["class", "h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition", 3, "border-brand-500", "border-transparent", "click", 4, "ngFor", "ngForOf"], [1, "h-16", "w-24", "flex-shrink-0", "overflow-hidden", "rounded-lg", "border-2", "transition", 3, "click"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "mt-4", "text-sm", "text-gray-500", "dark:text-gray-400", "leading-relaxed"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3"], ["class", "flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5 dark:bg-brand-500/10", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2.5", "rounded-xl", "bg-brand-50", "px-3", "py-2.5", "dark:bg-brand-500/10"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mb-1", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mb-4", "text-xs", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], ["type", "button", "class", "flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all", 3, "disabled", "border-brand-500", "bg-brand-50", "dark:bg-brand-500/10", "border-gray-200", "hover:border-brand-300", "dark:border-gray-700", "opacity-50", "cursor-not-allowed", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "flex", "items-center", "justify-between", "rounded-2xl", "border-2", "p-4", "text-left", "transition-all", 3, "click", "disabled"], [1, "text-base", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-gray-500", "dark:text-gray-400"], ["class", "mt-0.5 text-[10px] text-gray-400", 4, "ngIf"], [1, "mt-0.5", "text-[10px]", "font-semibold"], [1, "text-right", "ml-4", "flex-shrink-0"], ["class", "inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600", 4, "ngIf"], [1, "mt-0.5", "text-[10px]", "text-gray-400"], [1, "inline-flex", "rounded-full", "bg-red-100", "px-2.5", "py-1", "text-xs", "font-bold", "text-red-600"], [1, "text-lg", "font-extrabold", "text-brand-600", "dark:text-brand-400"], ["class", "mt-1 text-brand-500 text-lg", 4, "ngIf"], [1, "mt-1", "text-brand-500", "text-lg"], ["type", "button", "class", "flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all", 3, "disabled", "border-emerald-500", "bg-emerald-50", "dark:bg-emerald-500/10", "border-gray-200", "hover:border-emerald-300", "dark:border-gray-700", "opacity-50", "cursor-not-allowed", "click", 4, "ngFor", "ngForOf"], [1, "text-lg", "font-extrabold", "text-emerald-600", "dark:text-emerald-400"], ["class", "mt-1 text-emerald-500 text-lg", 4, "ngIf"], [1, "mt-1", "text-emerald-500", "text-lg"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-10", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-4xl", "mb-3"], [1, "text-sm", "font-semibold", "text-gray-600", "dark:text-gray-400"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-xs", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-gray-400", "italic"], [1, "text-sm", "font-bold", "text-emerald-600", "dark:text-emerald-400"], [1, "text-xs", "text-gray-500"], [1, "text-base", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "mt-0.5", "text-right", "text-xs", "font-semibold", "text-brand-500"], [1, "space-y-1"], ["class", "text-[10px] text-amber-500", 4, "ngIf"], [1, "text-[10px]", "text-amber-500"]], template: function DetalleLanchaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DetalleLanchaComponent_div_1_Template, 5, 0, "div", 1)(2, DetalleLanchaComponent_ng_container_2_Template, 91, 40, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessel);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleLanchaComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-lancha", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="mx-auto max-w-6xl space-y-6 pb-12">

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-32 gap-4">
    <div class="text-5xl animate-bounce">\u{1F6A4}</div>
    <p class="text-gray-500">Cargando embarcaci\xF3n...</p>
  </div>

  <ng-container *ngIf="!loading && vessel">

    <!-- Header -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-2xl">{{ typeIcon(vessel.type) }}</span>
            <span class="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">{{ typeLabel(vessel.type) }}</span>
            <span *ngIf="vessel.isAvailable" class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">Disponible</span>
            <span *ngIf="!vessel.isAvailable" class="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">No disponible</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">{{ vessel.name }}</h1>
          <p *ngIf="vessel.provider?.companyName" class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ vessel.provider?.companyName }}</p>
          <p *ngIf="llegadaSel" class="mt-0.5 text-sm text-brand-600 dark:text-brand-400">{{ llegadaSel.icon }} {{ llegadaSel.name }} \xB7 {{ llegadaSel.state }}</p>
        </div>
        <a routerLink="/buscar" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
          \u2190 Volver al buscador
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-6 lg:flex-row lg:items-start">

      <!-- \u2550\u2550 IZQUIERDA \u2550\u2550 -->
      <div class="flex-1 min-w-0 space-y-5">

        <!-- Galer\xEDa -->
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <div class="relative h-72 bg-gradient-to-br from-blue-900 to-slate-900 md:h-80">
            <img *ngIf="vessel.photos?.[activePhoto]"
              [src]="imageUrl(vessel.photos![activePhoto])"
              [alt]="vessel.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!vessel.photos?.[0]"
              class="flex h-full items-center justify-center text-9xl opacity-20">{{ typeIcon(vessel.type) }}</div>
            <button *ngIf="(vessel.photos?.length ?? 0) > 1 && activePhoto > 0"
              (click)="activePhoto = activePhoto - 1"
              class="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl">\u2039</button>
            <button *ngIf="(vessel.photos?.length ?? 0) > 1 && activePhoto < (vessel.photos!.length - 1)"
              (click)="activePhoto = activePhoto + 1"
              class="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl">\u203A</button>
            <div *ngIf="(vessel.photos?.length ?? 0) > 1" class="absolute bottom-3 right-3">
              <span class="rounded-full bg-black/60 px-3 py-1 text-xs text-white">{{ activePhoto + 1 }} / {{ vessel.photos!.length }}</span>
            </div>
          </div>
          <div *ngIf="(vessel.photos?.length ?? 0) > 1" class="flex gap-2 overflow-x-auto p-3">
            <button *ngFor="let p of vessel.photos; let i = index" (click)="activePhoto = i"
              class="h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition"
              [class.border-brand-500]="activePhoto === i"
              [class.border-transparent]="activePhoto !== i">
              <img [src]="imageUrl(p)" class="h-full w-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Ficha t\xE9cnica -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 font-semibold text-gray-800 dark:text-white/90">Ficha t\xE9cnica</h2>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
              <p class="text-xs text-gray-400">Capacidad</p>
              <p class="text-2xl font-extrabold text-gray-800 dark:text-white">{{ vessel.capacity }}</p>
              <p class="text-[10px] text-gray-400">pasajeros m\xE1x.</p>
            </div>
            <div *ngIf="vessel.rooms" class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
              <p class="text-xs text-gray-400">Cabinas</p>
              <p class="text-2xl font-extrabold text-gray-800 dark:text-white">{{ vessel.rooms }}</p>
              <p class="text-[10px] text-gray-400">habitaciones</p>
            </div>
            <div *ngIf="vessel.bathrooms" class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
              <p class="text-xs text-gray-400">Ba\xF1os</p>
              <p class="text-2xl font-extrabold text-gray-800 dark:text-white">{{ vessel.bathrooms }}</p>
              <p class="text-[10px] text-gray-400">ba\xF1os</p>
            </div>
            <div *ngIf="vessel.year" class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
              <p class="text-xs text-gray-400">A\xF1o</p>
              <p class="text-2xl font-extrabold text-gray-800 dark:text-white">{{ vessel.year }}</p>
              <p class="text-[10px] text-gray-400">modelo</p>
            </div>
          </div>
          <p *ngIf="vessel.description" class="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ vessel.description }}</p>
        </div>

        <!-- Amenidades -->
        <div *ngIf="vesselAmenities.length > 0" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 font-semibold text-gray-800 dark:text-white/90">Servicios a bordo</h2>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div *ngFor="let a of vesselAmenities"
              class="flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5 dark:bg-brand-500/10">
              <span class="text-xl">{{ a.icon }}</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ a.label }}</span>
            </div>
          </div>
        </div>

        <!-- Horarios IDA -->
        <div *ngIf="visibleIdaSlots.length > 0" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-1 font-semibold text-gray-800 dark:text-white/90">\u2192 Salidas disponibles</h2>
          <p class="mb-4 text-xs text-gray-400">Selecciona el horario de ida que prefieras</p>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button *ngFor="let s of visibleIdaSlots" type="button"
              (click)="!slotIsFull(s) && selectIda(s)"
              [disabled]="slotIsFull(s)"
              class="flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all"
              [class.border-brand-500]="selectedIda?.id === s.id"
              [class.bg-brand-50]="selectedIda?.id === s.id"
              [class.dark:bg-brand-500/10]="selectedIda?.id === s.id"
              [class.border-gray-200]="selectedIda?.id !== s.id && !slotIsFull(s)"
              [class.hover:border-brand-300]="selectedIda?.id !== s.id && !slotIsFull(s)"
              [class.dark:border-gray-700]="selectedIda?.id !== s.id"
              [class.opacity-50]="slotIsFull(s)"
              [class.cursor-not-allowed]="slotIsFull(s)">
              <div>
                <p class="text-base font-extrabold text-gray-800 dark:text-white">{{ s.departureTime }}</p>
                <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {{ s.departurePoint.icon ?? '\u2693' }} {{ s.departurePoint.name }}
                  \u2192 {{ s.arrivalPoint.icon ?? '\u2693' }} {{ s.arrivalPoint.name }}
                </p>
                <p *ngIf="s.durationMinutes" class="mt-0.5 text-[10px] text-gray-400">\u23F1 {{ s.durationMinutes }} min</p>
                <!-- Cupos disponibles reales -->
                <p class="mt-0.5 text-[10px] font-semibold"
                   [class.text-green-600]="slotAvailable(s) > 5"
                   [class.text-amber-500]="slotAvailable(s) > 0 && slotAvailable(s) <= 5"
                   [class.text-red-500]="slotIsFull(s)">
                  \u{1F465} {{ slotIsFull(s) ? 'Agotado' : slotAvailable(s) + ' cupo' + (slotAvailable(s) !== 1 ? 's' : '') + ' disponible' + (slotAvailable(s) !== 1 ? 's' : '') }}
                </p>
              </div>
              <div class="text-right ml-4 flex-shrink-0">
                <span *ngIf="slotIsFull(s)" class="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">LLENO</span>
                <ng-container *ngIf="!slotIsFull(s)">
                  <p class="text-lg font-extrabold text-brand-600 dark:text-brand-400">\${{ s.pricePerPerson | number:'1.2-2' }}</p>
                  <p class="text-[10px] text-gray-400">/ persona</p>
                  <div *ngIf="selectedIda?.id === s.id" class="mt-1 text-brand-500 text-lg">\u2713</div>
                </ng-container>
              </div>
            </button>
          </div>
        </div>

        <!-- Horarios REGRESO -->
        <div *ngIf="visibleRegresoSlots.length > 0" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-1 font-semibold text-gray-800 dark:text-white/90">\u2190 Regresos disponibles</h2>
          <p class="mb-4 text-xs text-gray-400">Selecciona el horario de regreso</p>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button *ngFor="let s of visibleRegresoSlots" type="button"
              (click)="!slotIsFull(s) && selectRegreso(s)"
              [disabled]="slotIsFull(s)"
              class="flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all"
              [class.border-emerald-500]="selectedRegreso?.id === s.id"
              [class.bg-emerald-50]="selectedRegreso?.id === s.id"
              [class.dark:bg-emerald-500/10]="selectedRegreso?.id === s.id"
              [class.border-gray-200]="selectedRegreso?.id !== s.id && !slotIsFull(s)"
              [class.hover:border-emerald-300]="selectedRegreso?.id !== s.id && !slotIsFull(s)"
              [class.dark:border-gray-700]="selectedRegreso?.id !== s.id"
              [class.opacity-50]="slotIsFull(s)"
              [class.cursor-not-allowed]="slotIsFull(s)">
              <div>
                <p class="text-base font-extrabold text-gray-800 dark:text-white">{{ s.departureTime }}</p>
                <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {{ s.departurePoint.icon ?? '\u2693' }} {{ s.departurePoint.name }}
                  \u2192 {{ s.arrivalPoint.icon ?? '\u2693' }} {{ s.arrivalPoint.name }}
                </p>
                <p *ngIf="s.durationMinutes" class="mt-0.5 text-[10px] text-gray-400">\u23F1 {{ s.durationMinutes }} min</p>
                <p class="mt-0.5 text-[10px] font-semibold"
                   [class.text-green-600]="slotAvailable(s) > 5"
                   [class.text-amber-500]="slotAvailable(s) > 0 && slotAvailable(s) <= 5"
                   [class.text-red-500]="slotIsFull(s)">
                  \u{1F465} {{ slotIsFull(s) ? 'Agotado' : slotAvailable(s) + ' cupo' + (slotAvailable(s) !== 1 ? 's' : '') + ' disponible' + (slotAvailable(s) !== 1 ? 's' : '') }}
                </p>
              </div>
              <div class="text-right ml-4 flex-shrink-0">
                <span *ngIf="slotIsFull(s)" class="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">LLENO</span>
                <ng-container *ngIf="!slotIsFull(s)">
                  <p class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">\${{ s.pricePerPerson | number:'1.2-2' }}</p>
                  <p class="text-[10px] text-gray-400">/ persona</p>
                  <div *ngIf="selectedRegreso?.id === s.id" class="mt-1 text-emerald-500 text-lg">\u2713</div>
                </ng-container>
              </div>
            </button>
          </div>
        </div>

        <!-- Aviso si no hay slots visibles -->
        <div *ngIf="visibleIdaSlots.length === 0 && visibleRegresoSlots.length === 0"
          class="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-white/[0.02]">
          <div class="text-4xl mb-3">\u{1F4CB}</div>
          <ng-container *ngIf="idaSlots.length > 0 || regresoSlots.length > 0">
            <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">No quedan salidas disponibles para hoy</p>
            <p class="mt-1 text-xs text-gray-400">Todos los horarios de hoy ya salieron. Selecciona otra fecha para ver disponibilidad.</p>
          </ng-container>
          <ng-container *ngIf="idaSlots.length === 0 && regresoSlots.length === 0">
            <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">Sin horarios publicados</p>
            <p class="mt-1 text-xs text-gray-400">Esta lancha a\xFAn no tiene horarios disponibles.</p>
          </ng-container>
        </div>

      </div>

      <!-- \u2550\u2550 DERECHA: Resumen y reserva \u2550\u2550 -->
      <div class="w-full flex-shrink-0 lg:sticky lg:top-6 lg:w-96">
        <div class="rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-white/[0.03]">

          <!-- Header precio -->
          <div class="rounded-t-2xl bg-gradient-to-r from-blue-800 to-blue-600 px-5 py-4">
            <p class="text-xs text-blue-200">precio desde</p>
            <p class="text-3xl font-extrabold text-white">
              \${{ (selectedIda ? selectedIda.pricePerPerson : idaSlots[0]?.pricePerPerson) | number:'1.2-2' }}
            </p>
            <p class="text-xs text-blue-200">USD por persona</p>
          </div>

          <div class="p-5 space-y-4">

            <div *ngIf="errorMessage" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
              \u26A0\uFE0F {{ errorMessage }}
            </div>

            <!-- Fecha -->
            <div>
              <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F4C5} Fecha del viaje</label>
              <input type="date" [(ngModel)]="fecha" [min]="today" (ngModelChange)="onFechaChange()"
                class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            </div>

            <!-- Pasajeros -->
            <div>
              <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F465} Pasajeros</label>
              <div class="flex h-10 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 dark:border-gray-700 dark:bg-slate-800">
                <button type="button" (click)="passengers = passengers > 1 ? passengers - 1 : 1"
                  class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-30 dark:hover:bg-slate-700">\u2212</button>
                <span class="font-bold text-gray-800 dark:text-white">{{ passengers }}</span>
                <button type="button" (click)="passengers = passengers < maxPassengers ? passengers + 1 : passengers"
                  [disabled]="passengers >= maxPassengers"
                  class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-30 dark:hover:bg-slate-700">+</button>
              </div>
              <p class="mt-1 text-[10px] text-gray-400">M\xE1x. {{ maxPassengers }} pasajeros disponibles</p>
            </div>

            <!-- Resumen selecci\xF3n -->
            <div class="rounded-xl border border-gray-100 bg-gray-50 divide-y divide-gray-100 dark:border-gray-700 dark:bg-white/[0.03] dark:divide-gray-700">

              <!-- Ida seleccionada -->
              <div class="px-4 py-3">
                <p class="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-1">\u2192 Ida</p>
                <div *ngIf="selectedIda" class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-bold text-gray-800 dark:text-white">{{ selectedIda.departureTime }}</p>
                    <p class="text-[10px] text-gray-400">{{ selectedIda.departurePoint.name }} \u2192 {{ selectedIda.arrivalPoint.name }}</p>
                  </div>
                  <p class="text-sm font-bold text-brand-600 dark:text-brand-400">\${{ selectedIda.pricePerPerson }}/pax</p>
                </div>
                <p *ngIf="!selectedIda" class="text-xs text-gray-400 italic">Elige un horario de ida \u2191</p>
              </div>

              <!-- Regreso seleccionado -->
              <div *ngIf="regresoSlots.length > 0" class="px-4 py-3">
                <p class="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-1">\u2190 Regreso</p>
                <div *ngIf="selectedRegreso" class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-bold text-gray-800 dark:text-white">{{ selectedRegreso.departureTime }}</p>
                    <p class="text-[10px] text-gray-400">{{ selectedRegreso.departurePoint.name }} \u2192 {{ selectedRegreso.arrivalPoint.name }}</p>
                  </div>
                  <p class="text-sm font-bold text-emerald-600 dark:text-emerald-400">\${{ selectedRegreso.pricePerPerson }}/pax</p>
                </div>
                <p *ngIf="!selectedRegreso" class="text-xs text-gray-400 italic">Elige un horario de regreso \u2191</p>
              </div>

              <!-- Total -->
              <div *ngIf="totalPrice > 0" class="px-4 py-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">{{ passengers }} pax \xD7 precio</span>
                  <span class="text-base font-extrabold text-brand-600 dark:text-brand-400">\${{ totalPrice | number:'1.2-2' }} USD</span>
                </div>
                <p class="mt-0.5 text-right text-xs font-semibold text-brand-500">{{ tasaService.formatBs(totalPrice) }}</p>
              </div>

            </div>

            <!-- Solicitudes especiales -->
            <div>
              <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F4DD} Solicitudes especiales</label>
              <textarea [(ngModel)]="specialRequests" rows="2"
                placeholder="Snorkeling, comida a bordo, ocasi\xF3n especial..."
                class="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white resize-none"></textarea>
            </div>

            <!-- CTA -->
            <button (click)="reservar()" [disabled]="!canBook || submitting"
              class="w-full rounded-xl bg-brand-500 py-4 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors shadow-sm">
              {{ submitting ? 'Reservando...' : '\u2713 Reservar ahora \u2192' }}
            </button>

            <!-- Hints de validaci\xF3n -->
            <div *ngIf="!canBook" class="space-y-1">
              <p *ngIf="!selectedIda" class="text-[10px] text-amber-500">\xB7 Selecciona un horario de ida</p>
              <p *ngIf="!fecha" class="text-[10px] text-amber-500">\xB7 Indica la fecha del viaje</p>
            </div>

            <p class="text-center text-[10px] text-gray-400">Sin cargos ocultos \xB7 Confirmaci\xF3n inmediata</p>

          </div>
        </div>
      </div>

    </div>
  </ng-container>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleLanchaComponent, { className: "DetalleLanchaComponent", filePath: "src/app/pages/buscar/pages/detalle-lancha/detalle-lancha.component.ts", lineNumber: 30 });
})();
export {
  DetalleLanchaComponent
};
//# sourceMappingURL=chunk-JPG32OYH.js.map
