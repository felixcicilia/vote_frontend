import {
  DestinosService
} from "./chunk-BKB5UP3R.js";
import {
  amenityIcon,
  amenityLabel
} from "./chunk-TTYATM5N.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
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
  HostListener,
  NgForOf,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/pages/alquileres/pages/lista-alquileres/lista-alquileres.component.ts
var _c0 = () => [];
function ListaAlquileresComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", d_r1.icon, " ", d_r1.name, " \xB7 ", d_r1.state, " ");
  }
}
function ListaAlquileresComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.destinoSeleccionado.description);
  }
}
function ListaAlquileresComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.days, " ", ctx_r1.days === 1 ? "noche" : "noches");
  }
}
function ListaAlquileresComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Fecha de fin");
    \u0275\u0275elementEnd();
  }
}
function ListaAlquileresComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 ", ctx_r1.children, " ni\xF1o", ctx_r1.children !== 1 ? "s" : "");
  }
}
function ListaAlquileresComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "div")(3, "p", 33);
    \u0275\u0275text(4, "Adultos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
    \u0275\u0275text(6, "12 a\xF1os o m\xE1s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "button", 36);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAdults());
    });
    \u0275\u0275text(9, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAdults());
    });
    \u0275\u0275text(13, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "div", 39);
    \u0275\u0275elementStart(15, "div", 32)(16, "div")(17, "p", 33);
    \u0275\u0275text(18, "Ni\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 34);
    \u0275\u0275text(20, "2 \u2013 11 a\xF1os");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 35)(22, "button", 36);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeChildren());
    });
    \u0275\u0275text(23, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 38);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addChildren());
    });
    \u0275\u0275text(27, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 40);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_46_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buscar());
    });
    \u0275\u0275text(29, " Aplicar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.adults <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.adults);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.children <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.children);
  }
}
function ListaAlquileresComponent_div_50_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_50_button_4_Template_button_click_0_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.destinoId = "" + d_r5.id;
      return \u0275\u0275resetView(ctx_r1.buscar());
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.state);
  }
}
function ListaAlquileresComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 42);
    \u0275\u0275text(2, "Destinos populares en Venezuela");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275template(4, ListaAlquileresComponent_div_50_button_4_Template, 7, 3, "button", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.destinos);
  }
}
function ListaAlquileresComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 51);
    \u0275\u0275text(4, "Buscando embarcaciones disponibles...");
    \u0275\u0275elementEnd()();
  }
}
function ListaAlquileresComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 54);
    \u0275\u0275text(4, "Sin yates o catamaranes disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 55);
    \u0275\u0275text(6, "Intenta reducir el n\xFAmero de pasajeros o consulta otro destino.");
    \u0275\u0275elementEnd()();
  }
}
function ListaAlquileresComponent_div_53_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" en ", ctx_r1.destinoSeleccionado.name);
  }
}
function ListaAlquileresComponent_div_53_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 ", ctx_r1.days, " ", ctx_r1.days === 1 ? "noche" : "noches");
  }
}
function ListaAlquileresComponent_div_53_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 61);
    \u0275\u0275text(2, "+ Nuevo alquiler (admin)");
    \u0275\u0275elementEnd()();
  }
}
function ListaAlquileresComponent_div_53_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 85);
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(e_r7.photos[0]), \u0275\u0275sanitizeUrl)("alt", e_r7.name);
  }
}
function ListaAlquileresComponent_div_53_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(e_r7.type));
  }
}
function ListaAlquileresComponent_div_53_div_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r7.year, " ");
  }
}
function ListaAlquileresComponent_div_53_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "span", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4F7} ", e_r7.photos.length, " fotos ");
  }
}
function ListaAlquileresComponent_div_53_div_9_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, " \u{1FAAA} ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.licensePlate);
  }
}
function ListaAlquileresComponent_div_53_div_9_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 Caben ", ctx_r1.totalPax, " pasajeros ");
  }
}
function ListaAlquileresComponent_div_53_div_9_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r7.description, " ");
  }
}
function ListaAlquileresComponent_div_53_div_9_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.amenityIcon(a_r8), " ", ctx_r1.amenityLabel(a_r8), " ");
  }
}
function ListaAlquileresComponent_div_53_div_9_div_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((e_r7.amenities == null ? null : e_r7.amenities.length) ?? 0) - 5, " m\xE1s ");
  }
}
function ListaAlquileresComponent_div_53_div_9_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, ListaAlquileresComponent_div_53_div_9_div_26_span_1_Template, 2, 2, "span", 93)(2, ListaAlquileresComponent_div_53_div_9_div_26_span_2_Template, 2, 1, "span", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (e_r7.amenities ?? \u0275\u0275pureFunction0(2, _c0)).slice(0, 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((e_r7.amenities == null ? null : e_r7.amenities.length) ?? 0) > 5);
  }
}
function ListaAlquileresComponent_div_53_div_9_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 98);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.days, " ", ctx_r1.days === 1 ? "noche" : "noches");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tasaService.formatBs(ctx_r1.totalUsd(e_r7)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 5, ctx_r1.totalUsd(e_r7), "1.2-2"), " USD total");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 8, e_r7.pricePerDay, "1.2-2"), "/noche");
  }
}
function ListaAlquileresComponent_div_53_div_9_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 34);
    \u0275\u0275text(2, "desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 98);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tasaService.formatBs(e_r7.pricePerDay ?? 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 2, e_r7.pricePerDay, "1.2-2"), " USD/noche");
  }
}
function ListaAlquileresComponent_div_53_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div", 64);
    \u0275\u0275template(3, ListaAlquileresComponent_div_53_div_9_img_3_Template, 1, 2, "img", 65)(4, ListaAlquileresComponent_div_53_div_9_div_4_Template, 2, 1, "div", 66);
    \u0275\u0275elementStart(5, "div", 67)(6, "span", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ListaAlquileresComponent_div_53_div_9_span_8_Template, 2, 1, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ListaAlquileresComponent_div_53_div_9_div_9_Template, 3, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 71)(11, "div", 72)(12, "div", 73)(13, "h3", 74);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 75)(16, "span", 76);
    \u0275\u0275text(17, " \u{1F465} ");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Hasta ");
    \u0275\u0275elementStart(20, "strong", 77);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " pasajeros");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ListaAlquileresComponent_div_53_div_9_span_23_Template, 4, 1, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ListaAlquileresComponent_div_53_div_9_div_24_Template, 2, 1, "div", 79)(25, ListaAlquileresComponent_div_53_div_9_p_25_Template, 2, 1, "p", 80)(26, ListaAlquileresComponent_div_53_div_9_div_26_Template, 3, 3, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 82);
    \u0275\u0275template(28, ListaAlquileresComponent_div_53_div_9_ng_container_28_Template, 11, 11, "ng-container", 22)(29, ListaAlquileresComponent_div_53_div_9_ng_container_29_Template, 8, 5, "ng-container", 22);
    \u0275\u0275elementStart(30, "button", 83);
    \u0275\u0275listener("click", function ListaAlquileresComponent_div_53_div_9_Template_button_click_30_listener() {
      const e_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reservar(e_r7));
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 84);
    \u0275\u0275text(33, "Sin cargos ocultos");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", e_r7.photos == null ? null : e_r7.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(e_r7.photos == null ? null : e_r7.photos[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.typeIcon(e_r7.type), " ", ctx_r1.typeLabel(e_r7.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r7.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((e_r7.photos == null ? null : e_r7.photos.length) ?? 0) > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(e_r7.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(e_r7.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", e_r7.licensePlate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPax > 0 && e_r7.capacity >= ctx_r1.totalPax);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r7.amenities == null ? null : e_r7.amenities.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.days > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.days === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.days > 0 ? "Reservar" : "Ver disponibilidad \u2192", " ");
  }
}
function ListaAlquileresComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "p", 58)(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275template(6, ListaAlquileresComponent_div_53_ng_container_6_Template, 2, 1, "ng-container", 22)(7, ListaAlquileresComponent_div_53_ng_container_7_Template, 2, 2, "ng-container", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ListaAlquileresComponent_div_53_span_8_Template, 3, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ListaAlquileresComponent_div_53_div_9_Template, 34, 15, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultados.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" embarcacion", ctx_r1.resultados.length !== 1 ? "es" : "", " disponible", ctx_r1.resultados.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.destinoSeleccionado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.days > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.resultados);
  }
}
var ListaAlquileresComponent = class _ListaAlquileresComponent {
  embarcacionesService = inject(EmbarcacionesService);
  destinosService = inject(DestinosService);
  router = inject(Router);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  loading = false;
  embarcaciones = [];
  resultados = [];
  destinos = [];
  buscado = false;
  // Búsqueda
  destinoId = "";
  startDate = "";
  endDate = "";
  adults = 2;
  children = 0;
  showPaxPanel = false;
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  get isAdmin() {
    return this.authService.isAdmin();
  }
  get totalPax() {
    return this.adults + this.children;
  }
  get destinoSeleccionado() {
    return this.destinos.find((d) => String(d.id) === this.destinoId) ?? null;
  }
  get paxLabel() {
    const parts = [];
    if (this.adults > 0)
      parts.push(`${this.adults} adulto${this.adults !== 1 ? "s" : ""}`);
    if (this.children > 0)
      parts.push(`${this.children} ni\xF1o${this.children !== 1 ? "s" : ""}`);
    return parts.join(" \xB7 ") || "Pasajeros";
  }
  get days() {
    if (!this.startDate || !this.endDate)
      return 0;
    const diff = new Date(this.endDate).getTime() - new Date(this.startDate).getTime();
    return Math.max(0, Math.ceil(diff / 864e5));
  }
  totalUsd(e) {
    return (e.pricePerDay ?? 0) * (this.days || 1);
  }
  ngOnInit() {
    this.tasaService.load();
    this.destinosService.getAll().subscribe({ next: (d) => {
      this.destinos = d;
    } });
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.embarcacionesService.getCharterable().subscribe({
      next: (list) => {
        this.embarcaciones = list ?? [];
        this.filtrar();
        this.loading = false;
        this.buscado = true;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buscar() {
    this.showPaxPanel = false;
    this.filtrar();
  }
  filtrar() {
    this.resultados = this.embarcaciones.filter((e) => !this.totalPax || e.capacity >= this.totalPax);
  }
  reservar(e) {
    this.router.navigate(["/alquileres/yate", e.id]);
  }
  togglePaxPanel(event) {
    event.stopPropagation();
    this.showPaxPanel = !this.showPaxPanel;
  }
  closePaxPanel() {
    this.showPaxPanel = false;
  }
  addAdults() {
    this.adults++;
  }
  removeAdults() {
    if (this.adults > 1)
      this.adults--;
  }
  addChildren() {
    this.children++;
  }
  removeChildren() {
    if (this.children > 0)
      this.children--;
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  typeLabel(t) {
    const map = { YATE: "Yate", CATAMARAN: "Catamar\xE1n" };
    return map[t] ?? t;
  }
  typeIcon(t) {
    return t === "YATE" ? "\u26F5" : "\u{1F6E5}\uFE0F";
  }
  amenityLabel = amenityLabel;
  amenityIcon = amenityIcon;
  static \u0275fac = function ListaAlquileresComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaAlquileresComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaAlquileresComponent, selectors: [["app-lista-alquileres"]], hostBindings: function ListaAlquileresComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ListaAlquileresComponent_click_HostBindingHandler() {
        return ctx.closePaxPanel();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 54, vars: 20, consts: [[1, "space-y-6"], [1, "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-slate-800", "to-slate-900", "shadow-xl"], [1, "relative", "px-8", "py-10"], [1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden", "opacity-10"], [1, "absolute", "-right-10", "-top-10", "text-[200px]"], [1, "relative"], [1, "mb-1", "text-sm", "font-semibold", "uppercase", "tracking-widest", "text-brand-300"], [1, "text-3xl", "font-extrabold", "text-white", "md:text-4xl"], [1, "mt-2", "text-slate-300"], [1, "mt-6", "overflow-hidden", "rounded-2xl", "bg-white", "shadow-lg", "dark:bg-slate-800"], [1, "grid", "grid-cols-1", "divide-y", "divide-gray-100", "dark:divide-gray-700", "md:grid-cols-4", "md:divide-x", "md:divide-y-0"], [1, "p-4"], [1, "block", "text-[10px]", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "mt-1", "w-full", "border-0", "bg-transparent", "text-sm", "font-semibold", "text-gray-800", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-0.5 text-xs text-gray-400", 4, "ngIf"], ["type", "date", 1, "mt-1", "w-full", "border-0", "bg-transparent", "text-sm", "font-semibold", "text-gray-800", "outline-none", "dark:text-white", 3, "ngModelChange", "ngModel", "min"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "relative", "p-4"], ["type", "button", 1, "mt-1", "flex", "w-full", "items-center", "justify-between", "border-0", "bg-transparent", "text-left", "text-sm", "font-semibold", "text-gray-800", "outline-none", "dark:text-white", 3, "click"], [1, "text-gray-400", "text-xs"], [4, "ngIf"], ["class", "absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-slate-800", 3, "click", 4, "ngIf"], [1, "border-t", "border-gray-100", "px-4", "py-3", "dark:border-gray-700"], [1, "w-full", "rounded-xl", "bg-brand-500", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", "md:w-auto", "md:px-10", 3, "click", "disabled"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20 gap-4", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [3, "value"], [1, "absolute", "left-0", "right-0", "top-full", "z-50", "mt-1", "rounded-xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-xl", "dark:border-gray-700", "dark:bg-slate-800", 3, "click"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white"], [1, "text-xs", "text-gray-400"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-gray-300", "text-gray-600", "hover:border-brand-400", "hover:text-brand-600", "disabled:opacity-30", "dark:border-gray-600", "dark:text-gray-300", 3, "click", "disabled"], [1, "w-5", "text-center", "font-bold", "text-gray-800", "dark:text-white"], ["type", "button", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-gray-300", "text-gray-600", "hover:border-brand-400", "hover:text-brand-600", "dark:border-gray-600", "dark:text-gray-300", 3, "click"], [1, "my-1", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "mt-3", "w-full", "rounded-xl", "bg-brand-500", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mb-3", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3", "lg:grid-cols-5"], ["class", "flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 p-3 text-center transition hover:border-brand-300 hover:bg-brand-50 dark:border-gray-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "gap-1.5", "rounded-xl", "border", "border-gray-200", "p-3", "text-center", "transition", "hover:border-brand-300", "hover:bg-brand-50", "dark:border-gray-700", "dark:hover:border-brand-500/40", "dark:hover:bg-brand-500/10", 3, "click"], [1, "text-2xl"], [1, "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "leading-tight"], [1, "text-[10px]", "text-gray-400"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-bold", "text-gray-800", "dark:text-white"], ["class", "group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-brand-200 transition-all dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/30", 4, "ngFor", "ngForOf"], ["routerLink", "/alquileres/crear", 1, "text-xs", "font-medium", "text-brand-500", "hover:underline"], [1, "group", "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "hover:shadow-lg", "hover:border-brand-200", "transition-all", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:hover:border-brand-500/30"], [1, "flex", "flex-col", "md:flex-row"], [1, "relative", "h-56", "w-full", "flex-shrink-0", "overflow-hidden", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "dark:from-slate-800", "dark:to-slate-900", "md:h-auto", "md:w-72"], ["class", "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-7xl opacity-20", 4, "ngIf"], [1, "absolute", "top-3", "left-3", "flex", "gap-1.5"], [1, "rounded-full", "bg-white/95", "px-2.5", "py-1", "text-xs", "font-bold", "text-slate-700", "shadow-sm"], ["class", "rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm", 4, "ngIf"], ["class", "absolute bottom-3 right-3", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "p-5", "md:p-6"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-start", "md:justify-between"], [1, "flex-1", "min-w-0"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1.5", "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-1.5"], [1, "text-gray-700", "dark:text-gray-300"], ["class", "flex items-center gap-1.5", 4, "ngIf"], ["class", "mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-2", 4, "ngIf"], ["class", "mt-3 flex flex-wrap gap-1.5", 4, "ngIf"], [1, "flex-shrink-0", "md:min-w-[180px]", "md:text-right"], [1, "mt-4", "w-full", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", "shadow-sm", 3, "click"], [1, "mt-1.5", "text-center", "text-xs", "text-gray-400"], [1, "h-full", "w-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-7xl", "opacity-20"], [1, "rounded-full", "bg-white/95", "px-2.5", "py-1", "text-xs", "font-semibold", "text-slate-600", "shadow-sm"], [1, "absolute", "bottom-3", "right-3"], [1, "rounded-full", "bg-black/60", "px-2", "py-0.5", "text-xs", "text-white", "backdrop-blur-sm"], [1, "mt-2", "inline-flex", "items-center", "gap-1.5", "rounded-full", "bg-green-100", "px-3", "py-1", "text-xs", "font-semibold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mt-3", "text-sm", "text-gray-500", "dark:text-gray-400", "line-clamp-2"], [1, "mt-3", "flex", "flex-wrap", "gap-1.5"], ["class", "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/[0.06] dark:text-gray-300", 4, "ngFor", "ngForOf"], ["class", "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-400 dark:bg-white/[0.04]", 4, "ngIf"], [1, "inline-flex", "items-center", "rounded-full", "bg-slate-100", "px-2.5", "py-1", "text-xs", "font-medium", "text-slate-600", "dark:bg-white/[0.06]", "dark:text-gray-300"], [1, "inline-flex", "items-center", "rounded-full", "bg-slate-100", "px-2.5", "py-1", "text-xs", "text-gray-400", "dark:bg-white/[0.04]"], [1, "text-3xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-gray-400", "mt-0.5"]], template: function ListaAlquileresComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "\u26F5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
      \u0275\u0275text(8, "Charter privado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 7);
      \u0275\u0275text(10, "Tu yate o catamar\xE1n en Venezuela");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "Elige destino, fechas y pasajeros \u2014 nosotros ponemos la embarcaci\xF3n.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17, "Destino");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ListaAlquileresComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.destinoId, $event) || (ctx.destinoId = $event);
        return $event;
      });
      \u0275\u0275elementStart(19, "option", 14);
      \u0275\u0275text(20, "\xBFA d\xF3nde vas?");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ListaAlquileresComponent_option_21_Template, 2, 4, "option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ListaAlquileresComponent_p_22_Template, 2, 1, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "label", 12);
      \u0275\u0275text(25, "Llegada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ListaAlquileresComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 18);
      \u0275\u0275text(28, "Fecha de inicio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 11)(30, "label", 12);
      \u0275\u0275text(31, "Salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ListaAlquileresComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, ListaAlquileresComponent_p_33_Template, 2, 2, "p", 16)(34, ListaAlquileresComponent_p_34_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 19)(36, "label", 12);
      \u0275\u0275text(37, "Pasajeros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275listener("click", function ListaAlquileresComponent_Template_button_click_38_listener($event) {
        return ctx.togglePaxPanel($event);
      });
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 21);
      \u0275\u0275text(42, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p", 18);
      \u0275\u0275text(44);
      \u0275\u0275template(45, ListaAlquileresComponent_span_45_Template, 2, 2, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, ListaAlquileresComponent_div_46_Template, 30, 4, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 24)(48, "button", 25);
      \u0275\u0275listener("click", function ListaAlquileresComponent_Template_button_click_48_listener() {
        return ctx.buscar();
      });
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(50, ListaAlquileresComponent_div_50_Template, 5, 1, "div", 26)(51, ListaAlquileresComponent_div_51_Template, 5, 0, "div", 27)(52, ListaAlquileresComponent_div_52_Template, 7, 0, "div", 28)(53, ListaAlquileresComponent_div_53_Template, 10, 7, "div", 29);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.destinoId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.destinos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.destinoSeleccionado);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275property("min", ctx.today);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275property("min", ctx.startDate || ctx.today);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.days > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.days === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.paxLabel);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.adults, " adulto", ctx.adults !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.children > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaxPanel);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Buscando..." : "\u{1F50D} Buscar embarcaciones", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.destinoId && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.buscado && ctx.resultados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.resultados.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaAlquileresComponent, [{
    type: Component,
    args: [{ selector: "app-lista-alquileres", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- Hero header -->
  <div class="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl">
    <div class="relative px-8 py-10">
      <!-- Decoraci\xF3n de fondo -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <div class="absolute -right-10 -top-10 text-[200px]">\u26F5</div>
      </div>
      <div class="relative">
        <p class="mb-1 text-sm font-semibold uppercase tracking-widest text-brand-300">Charter privado</p>
        <h1 class="text-3xl font-extrabold text-white md:text-4xl">Tu yate o catamar\xE1n en Venezuela</h1>
        <p class="mt-2 text-slate-300">Elige destino, fechas y pasajeros \u2014 nosotros ponemos la embarcaci\xF3n.</p>
      </div>

      <!-- Buscador estilo vuelos -->
      <div class="mt-6 overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-800">
        <div class="grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-700 md:grid-cols-4 md:divide-x md:divide-y-0">

          <!-- Destino -->
          <div class="p-4">
            <label class="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Destino</label>
            <select [(ngModel)]="destinoId"
              class="mt-1 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white">
              <option value="">\xBFA d\xF3nde vas?</option>
              <option *ngFor="let d of destinos" [value]="d.id">
                {{ d.icon }} {{ d.name }} \xB7 {{ d.state }}
              </option>
            </select>
            <p *ngIf="destinoSeleccionado" class="mt-0.5 text-xs text-gray-400">{{ destinoSeleccionado.description }}</p>
          </div>

          <!-- Llegada -->
          <div class="p-4">
            <label class="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Llegada</label>
            <input type="date" [(ngModel)]="startDate" [min]="today"
              class="mt-1 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white" />
            <p class="mt-0.5 text-xs text-gray-400">Fecha de inicio</p>
          </div>

          <!-- Salida -->
          <div class="p-4">
            <label class="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Salida</label>
            <input type="date" [(ngModel)]="endDate" [min]="startDate || today"
              class="mt-1 w-full border-0 bg-transparent text-sm font-semibold text-gray-800 outline-none dark:text-white" />
            <p *ngIf="days > 0" class="mt-0.5 text-xs text-gray-400">{{ days }} {{ days === 1 ? 'noche' : 'noches' }}</p>
            <p *ngIf="days === 0" class="mt-0.5 text-xs text-gray-400">Fecha de fin</p>
          </div>

          <!-- Pasajeros + Buscar -->
          <div class="relative p-4">
            <label class="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Pasajeros</label>
            <button type="button" (click)="togglePaxPanel($event)"
              class="mt-1 flex w-full items-center justify-between border-0 bg-transparent text-left text-sm font-semibold text-gray-800 outline-none dark:text-white">
              <span>{{ paxLabel }}</span>
              <span class="text-gray-400 text-xs">\u25BE</span>
            </button>
            <p class="mt-0.5 text-xs text-gray-400">{{ adults }} adulto{{ adults !== 1 ? 's' : '' }}<span *ngIf="children > 0"> \xB7 {{ children }} ni\xF1o{{ children !== 1 ? 's' : '' }}</span></p>

            <!-- Panel pasajeros (dropdown) -->
            <div *ngIf="showPaxPanel" (click)="$event.stopPropagation()"
              class="absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-slate-800">

              <!-- Adultos -->
              <div class="flex items-center justify-between py-2">
                <div>
                  <p class="text-sm font-semibold text-gray-800 dark:text-white">Adultos</p>
                  <p class="text-xs text-gray-400">12 a\xF1os o m\xE1s</p>
                </div>
                <div class="flex items-center gap-3">
                  <button type="button" (click)="removeAdults()"
                    class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 dark:border-gray-600 dark:text-gray-300"
                    [disabled]="adults <= 1">\u2212</button>
                  <span class="w-5 text-center font-bold text-gray-800 dark:text-white">{{ adults }}</span>
                  <button type="button" (click)="addAdults()"
                    class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-400 hover:text-brand-600 dark:border-gray-600 dark:text-gray-300">+</button>
                </div>
              </div>

              <div class="my-1 border-t border-gray-100 dark:border-gray-700"></div>

              <!-- Ni\xF1os -->
              <div class="flex items-center justify-between py-2">
                <div>
                  <p class="text-sm font-semibold text-gray-800 dark:text-white">Ni\xF1os</p>
                  <p class="text-xs text-gray-400">2 \u2013 11 a\xF1os</p>
                </div>
                <div class="flex items-center gap-3">
                  <button type="button" (click)="removeChildren()"
                    class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 dark:border-gray-600 dark:text-gray-300"
                    [disabled]="children <= 0">\u2212</button>
                  <span class="w-5 text-center font-bold text-gray-800 dark:text-white">{{ children }}</span>
                  <button type="button" (click)="addChildren()"
                    class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-brand-400 hover:text-brand-600 dark:border-gray-600 dark:text-gray-300">+</button>
                </div>
              </div>

              <button type="button" (click)="buscar()"
                class="mt-3 w-full rounded-xl bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600">
                Aplicar
              </button>
            </div>
          </div>
        </div>

        <!-- Bot\xF3n buscar principal -->
        <div class="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
          <button (click)="buscar()" [disabled]="loading"
            class="w-full rounded-xl bg-brand-500 py-3 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition md:w-auto md:px-10">
            {{ loading ? 'Buscando...' : '\u{1F50D} Buscar embarcaciones' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Destinos populares (si no se ha seleccionado uno) -->
  <div *ngIf="!destinoId && !loading" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <p class="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Destinos populares en Venezuela</p>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      <button *ngFor="let d of destinos" (click)="destinoId = '' + d.id; buscar()"
        class="flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 p-3 text-center transition hover:border-brand-300 hover:bg-brand-50 dark:border-gray-700 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10">
        <span class="text-2xl">{{ d.icon }}</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">{{ d.name }}</span>
        <span class="text-[10px] text-gray-400">{{ d.state }}</span>
      </button>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-20 gap-4">
    <div class="text-5xl animate-bounce">\u26F5</div>
    <p class="text-gray-500 dark:text-gray-400">Buscando embarcaciones disponibles...</p>
  </div>

  <!-- Sin resultados -->
  <div *ngIf="!loading && buscado && resultados.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u{1F50D}</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin yates o catamaranes disponibles</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Intenta reducir el n\xFAmero de pasajeros o consulta otro destino.</p>
  </div>

  <!-- Resultados -->
  <div *ngIf="!loading && resultados.length > 0" class="space-y-4">
    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <span class="font-bold text-gray-800 dark:text-white">{{ resultados.length }}</span>
        embarcacion{{ resultados.length !== 1 ? 'es' : '' }} disponible{{ resultados.length !== 1 ? 's' : '' }}
        <ng-container *ngIf="destinoSeleccionado"> en {{ destinoSeleccionado.name }}</ng-container>
        <ng-container *ngIf="days > 0"> \xB7 {{ days }} {{ days === 1 ? 'noche' : 'noches' }}</ng-container>
      </p>
      <span *ngIf="isAdmin">
        <a routerLink="/alquileres/crear" class="text-xs font-medium text-brand-500 hover:underline">+ Nuevo alquiler (admin)</a>
      </span>
    </div>

    <div *ngFor="let e of resultados"
      class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-brand-200 transition-all dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/30">
      <div class="flex flex-col md:flex-row">

        <!-- Foto -->
        <div class="relative h-56 w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 md:h-auto md:w-72">
          <img *ngIf="e.photos?.[0]"
            [src]="imageUrl(e.photos![0])"
            [alt]="e.name"
            class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div *ngIf="!e.photos?.[0]"
            class="flex h-full items-center justify-center text-7xl opacity-20">{{ typeIcon(e.type) }}</div>
          <!-- Badge tipo -->
          <div class="absolute top-3 left-3 flex gap-1.5">
            <span class="rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm">
              {{ typeIcon(e.type) }} {{ typeLabel(e.type) }}
            </span>
            <span *ngIf="e.year" class="rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm">
              {{ e.year }}
            </span>
          </div>
          <!-- Galer\xEDa -->
          <div *ngIf="(e.photos?.length ?? 0) > 1" class="absolute bottom-3 right-3">
            <span class="rounded-full bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
              \u{1F4F7} {{ e.photos!.length }} fotos
            </span>
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-1 flex-col p-5 md:p-6">
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            <!-- Datos principales -->
            <div class="flex-1 min-w-0">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white/90">{{ e.name }}</h3>

              <!-- Capacidad y matr\xEDcula -->
              <div class="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span class="flex items-center gap-1.5">
                  \u{1F465} <span>Hasta <strong class="text-gray-700 dark:text-gray-300">{{ e.capacity }}</strong> pasajeros</span>
                </span>
                <span *ngIf="e.licensePlate" class="flex items-center gap-1.5">
                  \u{1FAAA} <span>{{ e.licensePlate }}</span>
                </span>
              </div>

              <!-- Alerta de capacidad -->
              <div *ngIf="totalPax > 0 && e.capacity >= totalPax"
                class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                \u2713 Caben {{ totalPax }} pasajeros
              </div>

              <!-- Descripci\xF3n -->
              <p *ngIf="e.description" class="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {{ e.description }}
              </p>

              <!-- Amenidades -->
              <div *ngIf="e.amenities?.length" class="mt-3 flex flex-wrap gap-1.5">
                <span *ngFor="let a of (e.amenities ?? []).slice(0, 5)"
                  class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/[0.06] dark:text-gray-300">
                  {{ amenityIcon(a) }} {{ amenityLabel(a) }}
                </span>
                <span *ngIf="(e.amenities?.length ?? 0) > 5"
                  class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-400 dark:bg-white/[0.04]">
                  +{{ (e.amenities?.length ?? 0) - 5 }} m\xE1s
                </span>
              </div>
            </div>

            <!-- Precio + CTA -->
            <div class="flex-shrink-0 md:min-w-[180px] md:text-right">
              <ng-container *ngIf="days > 0">
                <p class="text-xs text-gray-400">{{ days }} {{ days === 1 ? 'noche' : 'noches' }}</p>
                <p class="text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {{ tasaService.formatBs(totalUsd(e)) }}
                </p>
                <p class="text-xs text-gray-400 mt-0.5">\${{ totalUsd(e) | number:'1.2-2' }} USD total</p>
                <p class="text-xs text-gray-400">\${{ e.pricePerDay | number:'1.2-2' }}/noche</p>
              </ng-container>
              <ng-container *ngIf="days === 0">
                <p class="text-xs text-gray-400">desde</p>
                <p class="text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {{ tasaService.formatBs(e.pricePerDay ?? 0) }}
                </p>
                <p class="text-xs text-gray-400 mt-0.5">\${{ e.pricePerDay | number:'1.2-2' }} USD/noche</p>
              </ng-container>

              <button (click)="reservar(e)"
                class="mt-4 w-full rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors shadow-sm">
                {{ days > 0 ? 'Reservar' : 'Ver disponibilidad \u2192' }}
              </button>
              <p class="mt-1.5 text-center text-xs text-gray-400">Sin cargos ocultos</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</div>
` }]
  }], null, { closePaxPanel: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaAlquileresComponent, { className: "ListaAlquileresComponent", filePath: "src/app/pages/alquileres/pages/lista-alquileres/lista-alquileres.component.ts", lineNumber: 21 });
})();
export {
  ListaAlquileresComponent
};
//# sourceMappingURL=chunk-AJLI3ARQ.js.map
