import {
  amenityIcon
} from "./chunk-TTYATM5N.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
import {
  TasaService
} from "./chunk-WSNZJFQG.js";
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
  Router,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/buscar/buscar.component.ts
var _c0 = () => [];
function BuscarComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngValue", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.puntoIcon(p_r1), " ", p_r1.name);
  }
}
function BuscarComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngValue", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.puntoIcon(p_r3), " ", p_r3.name);
  }
}
function BuscarComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngValue", p_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.puntoIcon(p_r4), " ", p_r4.name);
  }
}
function BuscarComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngValue", p_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.puntoIcon(p_r5), " ", p_r5.name);
  }
}
function BuscarComponent_div_86_div_7_button_4_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " \u2713 Destino ");
    \u0275\u0275elementEnd();
  }
}
function BuscarComponent_div_86_div_7_button_4_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function BuscarComponent_div_86_div_7_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275element(2, "img", 50)(3, "div", 51);
    \u0275\u0275elementStart(4, "div", 52)(5, "p", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, BuscarComponent_div_86_div_7_button_4_ng_container_1_span_9_Template, 2, 0, "span", 55)(10, BuscarComponent_div_86_div_7_button_4_ng_container_1_div_10_Template, 1, 0, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const punto_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(punto_r7.photoUrl), \u0275\u0275sanitizeUrl)("alt", punto_r7.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(punto_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", punto_r7.city, ", ", punto_r7.state);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaId === punto_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaId === punto_r7.id);
  }
}
function BuscarComponent_div_86_div_7_button_4_ng_template_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, " \u2713 Destino ");
    \u0275\u0275elementEnd();
  }
}
function BuscarComponent_div_86_div_7_button_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BuscarComponent_div_86_div_7_button_4_ng_template_2_span_7_Template, 2, 0, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const punto_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-brand-50", ctx_r1.llegadaId === punto_r7.id)("dark:bg-brand-500/10", ctx_r1.llegadaId === punto_r7.id)("bg-white", ctx_r1.llegadaId !== punto_r7.id)("dark:bg-white/[0", ctx_r1.llegadaId !== punto_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.puntoIcon(punto_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punto_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", punto_r7.city, ", ", punto_r7.state);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaId === punto_r7.id);
  }
}
function BuscarComponent_div_86_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function BuscarComponent_div_86_div_7_button_4_Template_button_click_0_listener() {
      const punto_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.elegirDestino(punto_r7));
    });
    \u0275\u0275template(1, BuscarComponent_div_86_div_7_button_4_ng_container_1_Template, 11, 7, "ng-container", 48)(2, BuscarComponent_div_86_div_7_button_4_ng_template_2_Template, 8, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const punto_r7 = ctx.$implicit;
    const sinFotoIsla_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-brand-400", ctx_r1.llegadaId === punto_r7.id)("border-transparent", ctx_r1.llegadaId !== punto_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", punto_r7.photoUrl)("ngIfElse", sinFotoIsla_r8);
  }
}
function BuscarComponent_div_86_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "h3", 44);
    \u0275\u0275text(2, "\u{1F3DD}\uFE0F Islas y cayos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, BuscarComponent_div_86_div_7_button_4_Template, 4, 6, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.islasPuntos);
  }
}
function BuscarComponent_div_86_div_8_button_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, " \u2713 Destino ");
    \u0275\u0275elementEnd();
  }
}
function BuscarComponent_div_86_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function BuscarComponent_div_86_div_8_button_4_Template_button_click_0_listener() {
      const punto_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.elegirDestino(punto_r10));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BuscarComponent_div_86_div_8_button_4_span_8_Template, 2, 0, "span", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const punto_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-brand-400", ctx_r1.llegadaId === punto_r10.id)("border-transparent", ctx_r1.llegadaId !== punto_r10.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-brand-50", ctx_r1.llegadaId === punto_r10.id)("dark:bg-brand-500/10", ctx_r1.llegadaId === punto_r10.id)("bg-white", ctx_r1.llegadaId !== punto_r10.id)("dark:bg-white/[0", ctx_r1.llegadaId !== punto_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.puntoIcon(punto_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(punto_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", punto_r10.city, ", ", punto_r10.state);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaId === punto_r10.id);
  }
}
function BuscarComponent_div_86_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 44);
    \u0275\u0275text(2, "\u2693 Muelles y puertos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, BuscarComponent_div_86_div_8_button_4_Template, 9, 17, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.muelles);
  }
}
function BuscarComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 39)(2, "div")(3, "h2", 40);
    \u0275\u0275text(4, "\u{1F4CD} Destinos y muelles disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6, "Haz click en cualquier punto para usarlo como destino");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, BuscarComponent_div_86_div_7_Template, 5, 1, "div", 42)(8, BuscarComponent_div_86_div_8_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.islasPuntos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.muelles.length > 0);
  }
}
function BuscarComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "h2", 65);
    \u0275\u0275text(2, "\xBFC\xF3mo funciona?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "div", 67)(5, "div", 68);
    \u0275\u0275text(6, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 69);
    \u0275\u0275text(8, "1. Busca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 70);
    \u0275\u0275text(10, "Elige tu puerto de salida, isla destino, fecha y cu\xE1ntos pasajeros van.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 67)(12, "div", 71);
    \u0275\u0275text(13, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 69);
    \u0275\u0275text(15, "2. Elige tu lancha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 70);
    \u0275\u0275text(17, "Compara embarcaciones, horarios, precios y comodidades disponibles.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 67)(19, "div", 72);
    \u0275\u0275text(20, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 69);
    \u0275\u0275text(22, "3. Reserva y disfruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 70);
    \u0275\u0275text(24, "Confirma tu reserva, paga y pres\xE9ntate en el puerto en la hora indicada.");
    \u0275\u0275elementEnd()()()();
  }
}
function BuscarComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275text(2, "\u{1F6A4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 75);
    \u0275\u0275text(4, "Buscando lanchas disponibles...");
    \u0275\u0275elementEnd()();
  }
}
function BuscarComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 78);
    \u0275\u0275text(4, "No hay lanchas disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 70);
    \u0275\u0275text(6, "Prueba otro puerto de salida o elige un destino diferente.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 79);
    \u0275\u0275listener("click", function BuscarComponent_div_89_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.buscado = false;
      return \u0275\u0275resetView(ctx_r1.vesselGroups = []);
    });
    \u0275\u0275text(8, " \u2190 Volver a destinos ");
    \u0275\u0275elementEnd()();
  }
}
function BuscarComponent_div_90_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2192 ", ctx_r1.llegadaSel.icon ?? "\u{1F3DD}\uFE0F", " ", ctx_r1.llegadaSel.name);
  }
}
function BuscarComponent_div_90_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Saliendo desde ", ctx_r1.salidaSel.icon ?? "\u2693", " ", ctx_r1.salidaSel.name);
  }
}
function BuscarComponent_div_90_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 114);
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(g_r14.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", g_r14.vessel.name);
  }
}
function BuscarComponent_div_90_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(g_r14.vessel.type));
  }
}
function BuscarComponent_div_90_div_9_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r14.vessel.provider == null ? null : g_r14.vessel.provider.companyName);
  }
}
function BuscarComponent_div_90_div_9_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F6CF}\uFE0F ", g_r14.vessel.rooms, " cabinas");
  }
}
function BuscarComponent_div_90_div_9_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F6BF} ", g_r14.vessel.bathrooms, " ba\xF1os");
  }
}
function BuscarComponent_div_90_div_9_div_21_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r15.departurePoint.icon ?? "\u2693", " ", s_r15.departurePoint.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r15.departureTime);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2192 ", s_r15.arrivalPoint.icon ?? "\u{1F3DD}\uFE0F", " ", s_r15.arrivalPoint.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", s_r15.pricePerPerson, "/pax");
  }
}
function BuscarComponent_div_90_div_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "p", 118);
    \u0275\u0275text(2, "\u2192 Salidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 119);
    \u0275\u0275template(4, BuscarComponent_div_90_div_9_div_21_span_4_Template, 7, 6, "span", 120);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", g_r14.idaSlots);
  }
}
function BuscarComponent_div_90_div_9_div_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 128);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r16.departurePoint.icon ?? "\u{1F3DD}\uFE0F", " ", s_r16.departurePoint.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r16.departureTime);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2192 ", s_r16.arrivalPoint.icon ?? "\u2693", " ", s_r16.arrivalPoint.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", s_r16.pricePerPerson, "/pax");
  }
}
function BuscarComponent_div_90_div_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "p", 118);
    \u0275\u0275text(2, "\u2190 Regresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 119);
    \u0275\u0275template(4, BuscarComponent_div_90_div_9_div_22_span_4_Template, 7, 6, "span", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", g_r14.regresoSlots);
  }
}
function BuscarComponent_div_90_div_9_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.amenityIcon(a_r17), " ");
  }
}
function BuscarComponent_div_90_div_9_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((g_r14.vessel.amenities == null ? null : g_r14.vessel.amenities.length) ?? 0) - 6, " m\xE1s ");
  }
}
function BuscarComponent_div_90_div_9_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275template(1, BuscarComponent_div_90_div_9_div_23_span_1_Template, 2, 1, "span", 130)(2, BuscarComponent_div_90_div_9_div_23_span_2_Template, 2, 1, "span", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (g_r14.vessel.amenities ?? \u0275\u0275pureFunction0(2, _c0)).slice(0, 6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((g_r14.vessel.amenities == null ? null : g_r14.vessel.amenities.length) ?? 0) > 6);
  }
}
function BuscarComponent_div_90_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91);
    \u0275\u0275template(3, BuscarComponent_div_90_div_9_img_3_Template, 1, 2, "img", 92)(4, BuscarComponent_div_90_div_9_div_4_Template, 2, 1, "div", 93);
    \u0275\u0275element(5, "div", 94);
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 96)(9, "div", 97)(10, "div", 98)(11, "h3", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BuscarComponent_div_90_div_9_p_13_Template, 2, 1, "p", 100);
    \u0275\u0275elementStart(14, "div", 101)(15, "span", 102);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, BuscarComponent_div_90_div_9_span_17_Template, 2, 1, "span", 103)(18, BuscarComponent_div_90_div_9_span_18_Template, 2, 1, "span", 103);
    \u0275\u0275elementStart(19, "span", 104);
    \u0275\u0275text(20, "\u2713 Disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, BuscarComponent_div_90_div_9_div_21_Template, 5, 1, "div", 105)(22, BuscarComponent_div_90_div_9_div_22_Template, 5, 1, "div", 106)(23, BuscarComponent_div_90_div_9_div_23_Template, 3, 3, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 108)(25, "p", 109);
    \u0275\u0275text(26, "desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 110);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 109);
    \u0275\u0275text(31, "USD por persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 111);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 112);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 113);
    \u0275\u0275listener("click", function BuscarComponent_div_90_div_9_Template_button_click_36_listener() {
      const g_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionar(g_r14));
    });
    \u0275\u0275text(37, " Ver y reservar \u2192 ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", g_r14.vessel.photos == null ? null : g_r14.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(g_r14.vessel.photos == null ? null : g_r14.vessel.photos[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.typeIcon(g_r14.vessel.type), " ", g_r14.vessel.type, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(g_r14.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r14.vessel.provider == null ? null : g_r14.vessel.provider.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F465} Hasta ", g_r14.vessel.capacity, " pasajeros");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r14.vessel.rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r14.vessel.bathrooms);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", g_r14.idaSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r14.regresoSlots.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r14.vessel.amenities == null ? null : g_r14.vessel.amenities.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(29, 15, ctx_r1.minPrice(g_r14), "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(ctx_r1.minPrice(g_r14) * ctx_r1.passengers));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("total ", ctx_r1.passengers, " pax");
  }
}
function BuscarComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div")(3, "h2", 82);
    \u0275\u0275text(4);
    \u0275\u0275template(5, BuscarComponent_div_90_span_5_Template, 2, 2, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BuscarComponent_div_90_p_6_Template, 2, 2, "p", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 85);
    \u0275\u0275listener("click", function BuscarComponent_div_90_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.buscado = false;
      return \u0275\u0275resetView(ctx_r1.vesselGroups = []);
    });
    \u0275\u0275text(8, " \u2190 Cambiar b\xFAsqueda ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, BuscarComponent_div_90_div_9_Template, 38, 18, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx_r1.vesselGroups.length, " lancha", ctx_r1.vesselGroups.length !== 1 ? "s" : "", " disponible", ctx_r1.vesselGroups.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.llegadaSel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.salidaSel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vesselGroups);
  }
}
var BuscarComponent = class _BuscarComponent {
  tripsService = inject(IslandTripsService);
  tasaService = inject(TasaService);
  router = inject(Router);
  puntos = [];
  loading = false;
  loadingPuntos = true;
  buscado = false;
  // Filtros
  salidaId = null;
  llegadaId = null;
  fecha = "";
  passengers = 2;
  vesselGroups = [];
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  amenityIcon = amenityIcon;
  get salidaSel() {
    return this.puntos.find((p) => p.id === this.salidaId) ?? null;
  }
  get llegadaSel() {
    return this.puntos.find((p) => p.id === this.llegadaId) ?? null;
  }
  get muelles() {
    return this.puntos.filter((p) => p.locationType === "MUELLE");
  }
  get islasPuntos() {
    return this.puntos.filter((p) => p.locationType === "ISLA");
  }
  puntoIcon(p) {
    return p.icon ?? (p.locationType === "ISLA" ? "\u{1F3DD}\uFE0F" : "\u2693");
  }
  ngOnInit() {
    this.tasaService.load();
    this.tripsService.getPuertos(true).subscribe({
      next: (puntos) => {
        this.puntos = puntos;
        this.loadingPuntos = false;
      },
      error: () => {
        this.loadingPuntos = false;
      }
    });
  }
  buscar() {
    this.loading = true;
    this.buscado = true;
    this.vesselGroups = [];
    const params = {};
    if (this.llegadaId)
      params.arrivalPointId = this.llegadaId;
    if (this.salidaId)
      params.departurePointId = this.salidaId;
    this.tripsService.getSlots(params).subscribe({
      next: (slots) => {
        this.vesselGroups = this.groupByVessel(slots);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  isSlotVisible(slot) {
    const now = /* @__PURE__ */ new Date();
    const hhmm = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    if (slot.departureDate) {
      if (slot.departureDate < this.today)
        return false;
      if (slot.departureDate === this.today && slot.departureTime <= hhmm)
        return false;
      if (this.fecha && slot.departureDate !== this.fecha)
        return false;
      return true;
    }
    if (this.fecha && this.fecha === this.today && slot.departureTime <= hhmm)
      return false;
    return true;
  }
  groupByVessel(slots) {
    const visible = slots.filter((s) => this.isSlotVisible(s));
    const map = /* @__PURE__ */ new Map();
    for (const s of visible) {
      const vid = s.vessel.id;
      if (!map.has(vid))
        map.set(vid, { vessel: s.vessel, idaSlots: [], regresoSlots: [] });
      const g = map.get(vid);
      if (s.direction === "IDA")
        g.idaSlots.push(s);
      else
        g.regresoSlots.push(s);
    }
    return [...map.values()].filter((g) => g.idaSlots.length > 0);
  }
  seleccionar(group) {
    this.router.navigate(["/buscar/lancha", group.vessel.id], {
      queryParams: {
        llegadaId: this.llegadaId,
        salidaId: this.salidaId,
        fecha: this.fecha,
        passengers: this.passengers
      }
    });
  }
  elegirDestino(punto) {
    this.llegadaId = punto.id;
    const el = document.getElementById("search-form");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  minPrice(group) {
    const all = [...group.idaSlots, ...group.regresoSlots];
    return all.length ? Math.min(...all.map((s) => Number(s.pricePerPerson))) : 0;
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
  static \u0275fac = function BuscarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BuscarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuscarComponent, selectors: [["app-buscar"]], decls: 91, vars: 24, consts: [["sinFotoIsla", ""], [1, "space-y-10"], [1, "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-[#0a1628]", "via-[#0d2240]", "to-[#0a3d62]", "shadow-2xl"], [1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden", "opacity-5", "select-none"], [1, "absolute", "-right-10", "-top-10", "text-[280px]", "leading-none"], [1, "relative", "px-6", "py-12", "md:px-12"], [1, "mb-8", "text-center"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-[0.2em]", "text-blue-400"], [1, "text-4xl", "font-black", "text-white", "md:text-5xl"], [1, "mt-3", "text-base", "text-slate-300"], ["id", "search-form", 1, "mx-auto", "max-w-5xl", "overflow-hidden", "rounded-2xl", "bg-white", "shadow-2xl", "dark:bg-slate-800"], [1, "grid", "grid-cols-1", "divide-y", "divide-gray-100", "dark:divide-slate-700", "sm:grid-cols-2", "sm:divide-x", "sm:divide-y-0", "lg:grid-cols-4"], [1, "group", "p-5", "transition", "hover:bg-blue-50/50", "dark:hover:bg-blue-900/10"], [1, "flex", "items-center", "gap-1.5", "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "mt-2", "w-full", "border-0", "bg-transparent", "text-sm", "font-semibold", "text-gray-800", "outline-none", "dark:text-white", "cursor-pointer", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["label", "Muelles"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["label", "Islas"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "group", "p-5", "transition", "hover:bg-emerald-50/50", "dark:hover:bg-emerald-900/10"], [1, "p-5"], ["type", "date", 1, "mt-2", "w-full", "border-0", "bg-transparent", "text-sm", "font-semibold", "text-gray-800", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel", "min"], [1, "mt-2", "text-xs", "text-gray-400"], [1, "flex", "flex-col", "justify-between", "p-5"], [1, "mt-2", "flex", "items-center", "gap-4"], ["type", "button", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border-2", "border-gray-200", "text-lg", "font-bold", "text-gray-500", "hover:border-blue-400", "hover:text-blue-600", "transition", "dark:border-slate-600", 3, "click"], [1, "text-2xl", "font-black", "text-gray-800", "dark:text-white"], [1, "mt-4", "w-full", "rounded-xl", "bg-brand-500", "py-3", "text-sm", "font-black", "text-white", "shadow-lg", "hover:bg-brand-600", "disabled:opacity-40", "transition-all", "hover:shadow-brand-500/30", "hover:shadow-xl", 3, "click", "disabled"], [1, "mt-6", "flex", "flex-wrap", "justify-center", "gap-6", "text-center"], [1, "text-white/70"], [1, "text-2xl", "font-black", "text-white"], [1, "ml-1", "text-sm"], [1, "text-white/30"], [4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-16 gap-4", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "mb-5", "flex", "items-center", "justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500"], ["class", "mb-6", 4, "ngIf"], [1, "mb-6"], [1, "mb-3", "text-sm", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-3", "lg:grid-cols-4"], ["class", "group relative overflow-hidden rounded-2xl border-2 text-left transition-all hover:shadow-xl", 3, "border-brand-400", "border-transparent", "click", 4, "ngFor", "ngForOf"], [1, "group", "relative", "overflow-hidden", "rounded-2xl", "border-2", "text-left", "transition-all", "hover:shadow-xl", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "relative", "h-36", "w-full", "sm:h-44"], [1, "h-full", "w-full", "object-cover", "transition-transform", "duration-500", "group-hover:scale-105", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/70", "via-black/20", "to-transparent"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-3"], [1, "text-sm", "font-bold", "text-white", "leading-tight"], [1, "text-[10px]", "text-white/70"], ["class", "absolute right-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white shadow", 4, "ngIf"], ["class", "absolute inset-0 ring-2 ring-inset ring-brand-400 rounded-2xl", 4, "ngIf"], [1, "absolute", "right-2", "top-2", "rounded-full", "bg-brand-500", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-white", "shadow"], [1, "absolute", "inset-0", "ring-2", "ring-inset", "ring-brand-400", "rounded-2xl"], [1, "mb-3", "text-4xl"], [1, "font-bold", "text-gray-800", "dark:text-white/90", "group-hover:text-brand-600", "transition-colors"], [1, "mt-0.5", "text-xs", "text-gray-400"], ["class", "absolute right-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white", 4, "ngIf"], [1, "absolute", "right-2", "top-2", "rounded-full", "bg-brand-500", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-white"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-8", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mb-8", "text-center", "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-8", "sm:grid-cols-3"], [1, "text-center"], [1, "mx-auto", "mb-4", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-blue-100", "text-3xl", "dark:bg-blue-500/15"], [1, "font-bold", "text-gray-700", "dark:text-gray-300"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "mx-auto", "mb-4", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-emerald-100", "text-3xl", "dark:bg-emerald-500/15"], [1, "mx-auto", "mb-4", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-amber-100", "text-3xl", "dark:bg-amber-500/15"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500", "dark:text-gray-400", "font-medium"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-5", "rounded-xl", "border", "border-gray-300", "px-6", "py-2.5", "text-sm", "font-semibold", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "text-brand-600 dark:text-brand-400", 4, "ngIf"], ["class", "text-sm text-gray-400", 4, "ngIf"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-500", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], ["class", "group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/30", 4, "ngFor", "ngForOf"], [1, "text-brand-600", "dark:text-brand-400"], [1, "text-sm", "text-gray-400"], [1, "group", "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "hover:shadow-xl", "hover:border-brand-200", "transition-all", "duration-300", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:hover:border-brand-500/30"], [1, "flex", "flex-col", "md:flex-row"], [1, "relative", "h-56", "w-full", "flex-shrink-0", "overflow-hidden", "bg-gradient-to-br", "from-blue-900", "to-slate-900", "md:h-auto", "md:w-72"], ["class", "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-8xl opacity-20", 4, "ngIf"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/40", "to-transparent"], [1, "absolute", "bottom-3", "left-3", "rounded-full", "bg-white/95", "px-3", "py-1", "text-xs", "font-black", "text-slate-800", "shadow-sm"], [1, "flex", "flex-1", "flex-col", "p-6"], [1, "flex", "flex-col", "gap-5", "lg:flex-row", "lg:items-start", "lg:justify-between"], [1, "flex-1", "min-w-0"], [1, "text-xl", "font-black", "text-gray-800", "dark:text-white/90"], ["class", "text-xs font-medium text-gray-400", 4, "ngIf"], [1, "mt-2", "flex", "flex-wrap", "gap-3", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-1"], ["class", "flex items-center gap-1", 4, "ngIf"], [1, "flex", "items-center", "gap-1", "font-semibold", "text-green-600", "dark:text-green-400"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["class", "mt-4 flex flex-wrap gap-1.5", 4, "ngIf"], [1, "flex-shrink-0", "rounded-2xl", "border", "border-gray-100", "bg-gray-50", "p-5", "text-center", "dark:border-gray-800", "dark:bg-white/[0.03]", "lg:min-w-[180px]"], [1, "text-xs", "text-gray-400"], [1, "mt-1", "text-4xl", "font-black", "text-brand-600", "dark:text-brand-400"], [1, "mt-1", "text-sm", "font-bold", "text-brand-500"], [1, "text-[10px]", "text-gray-400"], [1, "mt-4", "w-full", "rounded-xl", "bg-brand-500", "px-5", "py-3", "text-sm", "font-black", "text-white", "shadow-md", "hover:bg-brand-600", "transition-all", "hover:shadow-brand-500/30", "hover:shadow-lg", 3, "click"], [1, "h-full", "w-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-8xl", "opacity-20"], [1, "text-xs", "font-medium", "text-gray-400"], [1, "mt-4"], [1, "mb-2", "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-gray-400"], [1, "flex", "flex-wrap", "gap-2"], ["class", "flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800 dark:border-blue-700/30 dark:bg-blue-500/10 dark:text-blue-300", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-blue-200", "bg-blue-50", "px-3", "py-1.5", "text-xs", "font-bold", "text-blue-800", "dark:border-blue-700/30", "dark:bg-blue-500/10", "dark:text-blue-300"], [1, "text-blue-400"], [1, "ml-1", "rounded-full", "bg-blue-600", "px-2", "py-0.5", "text-[10px]", "text-white"], [1, "mt-3"], ["class", "flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:border-emerald-700/30 dark:bg-emerald-500/10 dark:text-emerald-300", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1.5", "text-xs", "font-bold", "text-emerald-800", "dark:border-emerald-700/30", "dark:bg-emerald-500/10", "dark:text-emerald-300"], [1, "text-emerald-500"], [1, "ml-1", "rounded-full", "bg-emerald-600", "px-2", "py-0.5", "text-[10px]", "text-white"], [1, "mt-4", "flex", "flex-wrap", "gap-1.5"], ["class", "rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-white/[0.06] dark:text-gray-400", 4, "ngFor", "ngForOf"], ["class", "rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-400 dark:bg-white/[0.06]", 4, "ngIf"], [1, "rounded-full", "bg-gray-100", "px-2.5", "py-1", "text-xs", "text-gray-500", "dark:bg-white/[0.06]", "dark:text-gray-400"], [1, "rounded-full", "bg-gray-100", "px-2.5", "py-1", "text-xs", "text-gray-400", "dark:bg-white/[0.06]"]], template: function BuscarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "\u{1F30A}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "p", 7);
      \u0275\u0275text(8, "Excursiones acu\xE1ticas \xB7 Venezuela");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 8);
      \u0275\u0275text(10, "\xBFA qu\xE9 cayo vas hoy?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12, "Elige tu punto de salida, tu destino y encuentra tu embarcaci\xF3n ideal.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "label", 13)(17, "span");
      \u0275\u0275text(18, "\u2693");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Sale desde ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function BuscarComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.salidaId, $event) || (ctx.salidaId = $event);
        return $event;
      });
      \u0275\u0275elementStart(21, "option", 15);
      \u0275\u0275text(22, "Cualquier punto de salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "optgroup", 16);
      \u0275\u0275template(24, BuscarComponent_option_24_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "optgroup", 18);
      \u0275\u0275template(26, BuscarComponent_option_26_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p", 19);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 20)(30, "label", 13)(31, "span");
      \u0275\u0275text(32, "\u{1F3DD}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Llega a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function BuscarComponent_Template_select_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.llegadaId, $event) || (ctx.llegadaId = $event);
        return $event;
      });
      \u0275\u0275elementStart(35, "option", 15);
      \u0275\u0275text(36, "Cualquier destino");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "optgroup", 16);
      \u0275\u0275template(38, BuscarComponent_option_38_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "optgroup", 18);
      \u0275\u0275template(40, BuscarComponent_option_40_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "p", 19);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 21)(44, "label", 13)(45, "span");
      \u0275\u0275text(46, "\u{1F4C5}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Fecha del viaje ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function BuscarComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fecha, $event) || (ctx.fecha = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 23);
      \u0275\u0275text(50, "Selecciona cu\xE1ndo viajas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 24)(52, "div")(53, "label", 13)(54, "span");
      \u0275\u0275text(55, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " Pasajeros ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 25)(58, "button", 26);
      \u0275\u0275listener("click", function BuscarComponent_Template_button_click_58_listener() {
        return ctx.passengers = ctx.passengers > 1 ? ctx.passengers - 1 : 1;
      });
      \u0275\u0275text(59, "\u2212");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 27);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 26);
      \u0275\u0275listener("click", function BuscarComponent_Template_button_click_62_listener() {
        return ctx.passengers = ctx.passengers + 1;
      });
      \u0275\u0275text(63, "+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "button", 28);
      \u0275\u0275listener("click", function BuscarComponent_Template_button_click_64_listener() {
        return ctx.buscar();
      });
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 29)(67, "div", 30)(68, "span", 31);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 32);
      \u0275\u0275text(71, "islas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 33);
      \u0275\u0275text(73, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 30)(75, "span", 31);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 32);
      \u0275\u0275text(78, "muelles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 33);
      \u0275\u0275text(80, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 30)(82, "span", 31);
      \u0275\u0275text(83, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 32);
      \u0275\u0275text(85, "verificadas");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(86, BuscarComponent_div_86_Template, 9, 2, "div", 34)(87, BuscarComponent_div_87_Template, 25, 0, "div", 35)(88, BuscarComponent_div_88_Template, 5, 0, "div", 36)(89, BuscarComponent_div_89_Template, 9, 0, "div", 37)(90, BuscarComponent_div_90_Template, 10, 6, "div", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.salidaId);
      \u0275\u0275property("disabled", ctx.loadingPuntos);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.muelles);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.islasPuntos);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.salidaSel ? ctx.salidaSel.city + ", " + ctx.salidaSel.state : "Muelle o isla de embarque");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.llegadaId);
      \u0275\u0275property("disabled", ctx.loadingPuntos);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.muelles);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.islasPuntos);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.llegadaSel ? ctx.llegadaSel.city + ", " + ctx.llegadaSel.state : "Muelle o isla destino");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.fecha);
      \u0275\u0275property("min", ctx.today);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.passengers);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Buscando..." : "\u{1F50D} Buscar lanchas", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.islasPuntos.length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.muelles.length);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.buscado && ctx.puntos.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.buscado);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.buscado && ctx.vesselGroups.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vesselGroups.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscarComponent, [{
    type: Component,
    args: [{ selector: "app-buscar", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-10">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 HERO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1628] via-[#0d2240] to-[#0a3d62] shadow-2xl">
    <!-- Fondo decorativo -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden opacity-5 select-none">
      <div class="absolute -right-10 -top-10 text-[280px] leading-none">\u{1F30A}</div>
    </div>

    <div class="relative px-6 py-12 md:px-12">
      <!-- T\xEDtulos -->
      <div class="mb-8 text-center">
        <p class="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Excursiones acu\xE1ticas \xB7 Venezuela</p>
        <h1 class="text-4xl font-black text-white md:text-5xl">\xBFA qu\xE9 cayo vas hoy?</h1>
        <p class="mt-3 text-base text-slate-300">Elige tu punto de salida, tu destino y encuentra tu embarcaci\xF3n ideal.</p>
      </div>

      <!-- Formulario -->
      <div id="search-form" class="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800">
        <div class="grid grid-cols-1 divide-y divide-gray-100 dark:divide-slate-700 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          <!-- Sale desde -->
          <div class="group p-5 transition hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
            <label class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>\u2693</span> Sale desde
            </label>
            <select [(ngModel)]="salidaId" [disabled]="loadingPuntos"
              class="mt-2 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white cursor-pointer">
              <option [ngValue]="null">Cualquier punto de salida</option>
              <optgroup label="Muelles">
                <option *ngFor="let p of muelles" [ngValue]="p.id">{{ puntoIcon(p) }} {{ p.name }}</option>
              </optgroup>
              <optgroup label="Islas">
                <option *ngFor="let p of islasPuntos" [ngValue]="p.id">{{ puntoIcon(p) }} {{ p.name }}</option>
              </optgroup>
            </select>
            <p class="mt-1 text-xs text-gray-400">{{ salidaSel ? salidaSel.city + ', ' + salidaSel.state : 'Muelle o isla de embarque' }}</p>
          </div>

          <!-- Llega a -->
          <div class="group p-5 transition hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10">
            <label class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>\u{1F3DD}\uFE0F</span> Llega a
            </label>
            <select [(ngModel)]="llegadaId" [disabled]="loadingPuntos"
              class="mt-2 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white cursor-pointer">
              <option [ngValue]="null">Cualquier destino</option>
              <optgroup label="Muelles">
                <option *ngFor="let p of muelles" [ngValue]="p.id">{{ puntoIcon(p) }} {{ p.name }}</option>
              </optgroup>
              <optgroup label="Islas">
                <option *ngFor="let p of islasPuntos" [ngValue]="p.id">{{ puntoIcon(p) }} {{ p.name }}</option>
              </optgroup>
            </select>
            <p class="mt-1 text-xs text-gray-400">{{ llegadaSel ? llegadaSel.city + ', ' + llegadaSel.state : 'Muelle o isla destino' }}</p>
          </div>

          <!-- Fecha -->
          <div class="p-5">
            <label class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>\u{1F4C5}</span> Fecha del viaje
            </label>
            <input type="date" [(ngModel)]="fecha" [min]="today"
              class="mt-2 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white" />
            <p class="mt-2 text-xs text-gray-400">Selecciona cu\xE1ndo viajas</p>
          </div>

          <!-- Pasajeros + bot\xF3n -->
          <div class="flex flex-col justify-between p-5">
            <div>
              <label class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>\u{1F465}</span> Pasajeros
              </label>
              <div class="mt-2 flex items-center gap-4">
                <button type="button" (click)="passengers = passengers > 1 ? passengers - 1 : 1"
                  class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 text-lg font-bold text-gray-500 hover:border-blue-400 hover:text-blue-600 transition dark:border-slate-600">\u2212</button>
                <span class="text-2xl font-black text-gray-800 dark:text-white">{{ passengers }}</span>
                <button type="button" (click)="passengers = passengers + 1"
                  class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 text-lg font-bold text-gray-500 hover:border-blue-400 hover:text-blue-600 transition dark:border-slate-600">+</button>
              </div>
            </div>
            <button (click)="buscar()" [disabled]="loading"
              class="mt-4 w-full rounded-xl bg-brand-500 py-3 text-sm font-black text-white shadow-lg hover:bg-brand-600 disabled:opacity-40 transition-all hover:shadow-brand-500/30 hover:shadow-xl">
              {{ loading ? 'Buscando...' : '\u{1F50D} Buscar lanchas' }}
            </button>
          </div>

        </div>
      </div>

      <!-- Stats r\xE1pidos -->
      <div class="mt-6 flex flex-wrap justify-center gap-6 text-center">
        <div class="text-white/70">
          <span class="text-2xl font-black text-white">{{ islasPuntos.length }}</span>
          <span class="ml-1 text-sm">islas</span>
        </div>
        <div class="text-white/30">|</div>
        <div class="text-white/70">
          <span class="text-2xl font-black text-white">{{ muelles.length }}</span>
          <span class="ml-1 text-sm">muelles</span>
        </div>
        <div class="text-white/30">|</div>
        <div class="text-white/70">
          <span class="text-2xl font-black text-white">100%</span>
          <span class="ml-1 text-sm">verificadas</span>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PUNTOS DISPONIBLES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="!buscado && puntos.length > 0">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4CD} Destinos y muelles disponibles</h2>
        <p class="mt-0.5 text-sm text-gray-500">Haz click en cualquier punto para usarlo como destino</p>
      </div>
    </div>

    <!-- Islas -->
    <div *ngIf="islasPuntos.length > 0" class="mb-6">
      <h3 class="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">\u{1F3DD}\uFE0F Islas y cayos</h3>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <button *ngFor="let punto of islasPuntos" (click)="elegirDestino(punto)"
          class="group relative overflow-hidden rounded-2xl border-2 text-left transition-all hover:shadow-xl"
          [class.border-brand-400]="llegadaId === punto.id"
          [class.border-transparent]="llegadaId !== punto.id">

          <ng-container *ngIf="punto.photoUrl; else sinFotoIsla">
            <div class="relative h-36 w-full sm:h-44">
              <img [src]="imageUrl(punto.photoUrl)" [alt]="punto.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3">
                <p class="text-sm font-bold text-white leading-tight">{{ punto.name }}</p>
                <p class="text-[10px] text-white/70">{{ punto.city }}, {{ punto.state }}</p>
              </div>
              <span *ngIf="llegadaId === punto.id"
                class="absolute right-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                \u2713 Destino
              </span>
              <div *ngIf="llegadaId === punto.id"
                class="absolute inset-0 ring-2 ring-inset ring-brand-400 rounded-2xl"></div>
            </div>
          </ng-container>

          <ng-template #sinFotoIsla>
            <div class="p-5"
              [class.bg-brand-50]="llegadaId === punto.id"
              [class.dark:bg-brand-500/10]="llegadaId === punto.id"
              [class.bg-white]="llegadaId !== punto.id"
              [class.dark:bg-white/[0.03]]="llegadaId !== punto.id">
              <div class="mb-3 text-4xl">{{ puntoIcon(punto) }}</div>
              <p class="font-bold text-gray-800 dark:text-white/90 group-hover:text-brand-600 transition-colors">{{ punto.name }}</p>
              <p class="mt-0.5 text-xs text-gray-400">{{ punto.city }}, {{ punto.state }}</p>
              <span *ngIf="llegadaId === punto.id"
                class="absolute right-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white">
                \u2713 Destino
              </span>
            </div>
          </ng-template>
        </button>
      </div>
    </div>

    <!-- Muelles -->
    <div *ngIf="muelles.length > 0">
      <h3 class="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">\u2693 Muelles y puertos</h3>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <button *ngFor="let punto of muelles" (click)="elegirDestino(punto)"
          class="group relative overflow-hidden rounded-2xl border-2 text-left transition-all hover:shadow-xl"
          [class.border-brand-400]="llegadaId === punto.id"
          [class.border-transparent]="llegadaId !== punto.id">
          <div class="p-5"
            [class.bg-brand-50]="llegadaId === punto.id"
            [class.dark:bg-brand-500/10]="llegadaId === punto.id"
            [class.bg-white]="llegadaId !== punto.id"
            [class.dark:bg-white/[0.03]]="llegadaId !== punto.id">
            <div class="mb-3 text-4xl">{{ puntoIcon(punto) }}</div>
            <p class="font-bold text-gray-800 dark:text-white/90 group-hover:text-brand-600 transition-colors">{{ punto.name }}</p>
            <p class="mt-0.5 text-xs text-gray-400">{{ punto.city }}, {{ punto.state }}</p>
            <span *ngIf="llegadaId === punto.id"
              class="absolute right-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white">
              \u2713 Destino
            </span>
          </div>
        </button>
      </div>
    </div>

  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 C\xD3MO FUNCIONA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="!buscado" class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <h2 class="mb-8 text-center text-xl font-bold text-gray-800 dark:text-white/90">\xBFC\xF3mo funciona?</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
      <div class="text-center">
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl dark:bg-blue-500/15">\u{1F50D}</div>
        <p class="font-bold text-gray-700 dark:text-gray-300">1. Busca</p>
        <p class="mt-2 text-sm text-gray-500">Elige tu puerto de salida, isla destino, fecha y cu\xE1ntos pasajeros van.</p>
      </div>
      <div class="text-center">
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl dark:bg-emerald-500/15">\u26F5</div>
        <p class="font-bold text-gray-700 dark:text-gray-300">2. Elige tu lancha</p>
        <p class="mt-2 text-sm text-gray-500">Compara embarcaciones, horarios, precios y comodidades disponibles.</p>
      </div>
      <div class="text-center">
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-500/15">\u{1F389}</div>
        <p class="font-bold text-gray-700 dark:text-gray-300">3. Reserva y disfruta</p>
        <p class="mt-2 text-sm text-gray-500">Confirma tu reserva, paga y pres\xE9ntate en el puerto en la hora indicada.</p>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 LOADING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-16 gap-4">
    <div class="text-5xl animate-bounce">\u{1F6A4}</div>
    <p class="text-gray-500 dark:text-gray-400 font-medium">Buscando lanchas disponibles...</p>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SIN RESULTADOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="!loading && buscado && vesselGroups.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u{1F50D}</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">No hay lanchas disponibles</h3>
    <p class="mt-2 text-sm text-gray-500">Prueba otro puerto de salida o elige un destino diferente.</p>
    <button (click)="buscado = false; vesselGroups = []"
      class="mt-5 rounded-xl border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
      \u2190 Volver a destinos
    </button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 RESULTADOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="!loading && vesselGroups.length > 0" class="space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-lg font-bold text-gray-800 dark:text-white/90">
          {{ vesselGroups.length }} lancha{{ vesselGroups.length !== 1 ? 's' : '' }} disponible{{ vesselGroups.length !== 1 ? 's' : '' }}
          <span *ngIf="llegadaSel" class="text-brand-600 dark:text-brand-400"> \u2192 {{ llegadaSel.icon ?? '\u{1F3DD}\uFE0F' }} {{ llegadaSel.name }}</span>
        </h2>
        <p *ngIf="salidaSel" class="text-sm text-gray-400">Saliendo desde {{ salidaSel.icon ?? '\u2693' }} {{ salidaSel.name }}</p>
      </div>
      <button (click)="buscado = false; vesselGroups = []"
        class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
        \u2190 Cambiar b\xFAsqueda
      </button>
    </div>

    <div *ngFor="let g of vesselGroups"
      class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/30">
      <div class="flex flex-col md:flex-row">

        <!-- Foto -->
        <div class="relative h-56 w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 md:h-auto md:w-72">
          <img *ngIf="g.vessel.photos?.[0]"
            [src]="imageUrl(g.vessel.photos![0])" [alt]="g.vessel.name"
            class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div *ngIf="!g.vessel.photos?.[0]"
            class="flex h-full items-center justify-center text-8xl opacity-20">{{ typeIcon(g.vessel.type) }}</div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <span class="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-sm">
            {{ typeIcon(g.vessel.type) }} {{ g.vessel.type }}
          </span>
        </div>

        <!-- Info -->
        <div class="flex flex-1 flex-col p-6">
          <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

            <div class="flex-1 min-w-0">
              <h3 class="text-xl font-black text-gray-800 dark:text-white/90">{{ g.vessel.name }}</h3>
              <p *ngIf="g.vessel.provider?.companyName" class="text-xs font-medium text-gray-400">{{ g.vessel.provider?.companyName }}</p>

              <div class="mt-2 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span class="flex items-center gap-1">\u{1F465} Hasta {{ g.vessel.capacity }} pasajeros</span>
                <span *ngIf="g.vessel.rooms" class="flex items-center gap-1">\u{1F6CF}\uFE0F {{ g.vessel.rooms }} cabinas</span>
                <span *ngIf="g.vessel.bathrooms" class="flex items-center gap-1">\u{1F6BF} {{ g.vessel.bathrooms }} ba\xF1os</span>
                <span class="flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">\u2713 Disponible</span>
              </div>

              <!-- Slots IDA -->
              <div *ngIf="g.idaSlots.length > 0" class="mt-4">
                <p class="mb-2 text-[11px] font-black uppercase tracking-widest text-gray-400">\u2192 Salidas</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let s of g.idaSlots"
                    class="flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800 dark:border-blue-700/30 dark:bg-blue-500/10 dark:text-blue-300">
                    {{ s.departurePoint.icon ?? '\u2693' }} {{ s.departurePoint.name }}
                    <span class="text-blue-400">{{ s.departureTime }}</span>
                    \u2192 {{ s.arrivalPoint.icon ?? '\u{1F3DD}\uFE0F' }} {{ s.arrivalPoint.name }}
                    <span class="ml-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] text-white">\${{ s.pricePerPerson }}/pax</span>
                  </span>
                </div>
              </div>

              <!-- Slots REGRESO -->
              <div *ngIf="g.regresoSlots.length > 0" class="mt-3">
                <p class="mb-2 text-[11px] font-black uppercase tracking-widest text-gray-400">\u2190 Regresos</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let s of g.regresoSlots"
                    class="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:border-emerald-700/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                    {{ s.departurePoint.icon ?? '\u{1F3DD}\uFE0F' }} {{ s.departurePoint.name }}
                    <span class="text-emerald-500">{{ s.departureTime }}</span>
                    \u2192 {{ s.arrivalPoint.icon ?? '\u2693' }} {{ s.arrivalPoint.name }}
                    <span class="ml-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] text-white">\${{ s.pricePerPerson }}/pax</span>
                  </span>
                </div>
              </div>

              <!-- Amenidades -->
              <div *ngIf="g.vessel.amenities?.length" class="mt-4 flex flex-wrap gap-1.5">
                <span *ngFor="let a of (g.vessel.amenities ?? []).slice(0, 6)"
                  class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-white/[0.06] dark:text-gray-400">
                  {{ amenityIcon(a) }}
                </span>
                <span *ngIf="(g.vessel.amenities?.length ?? 0) > 6"
                  class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-400 dark:bg-white/[0.06]">
                  +{{ (g.vessel.amenities?.length ?? 0) - 6 }} m\xE1s
                </span>
              </div>
            </div>

            <!-- Precio + CTA -->
            <div class="flex-shrink-0 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center dark:border-gray-800 dark:bg-white/[0.03] lg:min-w-[180px]">
              <p class="text-xs text-gray-400">desde</p>
              <p class="mt-1 text-4xl font-black text-brand-600 dark:text-brand-400">\${{ minPrice(g) | number:'1.0-0' }}</p>
              <p class="text-xs text-gray-400">USD por persona</p>
              <p class="mt-1 text-sm font-bold text-brand-500">{{ tasaService.formatBs(minPrice(g) * passengers) }}</p>
              <p class="text-[10px] text-gray-400">total {{ passengers }} pax</p>
              <button (click)="seleccionar(g)"
                class="mt-4 w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-black text-white shadow-md hover:bg-brand-600 transition-all hover:shadow-brand-500/30 hover:shadow-lg">
                Ver y reservar \u2192
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuscarComponent, { className: "BuscarComponent", filePath: "src/app/pages/buscar/buscar.component.ts", lineNumber: 25 });
})();
export {
  BuscarComponent
};
//# sourceMappingURL=chunk-DZAZNN7R.js.map
