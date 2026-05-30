import {
  DestinosService
} from "./chunk-2KR22MJT.js";
import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  AMENITIES
} from "./chunk-TTYATM5N.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵtextInterpolate3
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/alquileres/pages/detalle-yate/detalle-yate.component.ts
function DetalleYateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Cargando embarcaci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function DetalleYateComponent_ng_container_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "No disponible");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "Disponible");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_img_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 63);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(ctx_r1.vessel.photos[ctx_r1.activePhoto]), \u0275\u0275sanitizeUrl)("alt", ctx_r1.vessel.name);
  }
}
function DetalleYateComponent_ng_container_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(ctx_r1.vessel.type));
  }
}
function DetalleYateComponent_ng_container_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activePhoto = ctx_r1.activePhoto - 1);
    });
    \u0275\u0275text(1, "\u2039");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activePhoto = ctx_r1.activePhoto + 1);
    });
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.activePhoto + 1, " / ", ctx_r1.vessel.photos.length);
  }
}
function DetalleYateComponent_ng_container_2_div_26_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_div_26_button_1_Template_button_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activePhoto = i_r6);
    });
    \u0275\u0275element(1, "img", 72);
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
function DetalleYateComponent_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, DetalleYateComponent_ng_container_2_div_26_button_1_Template, 2, 5, "button", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vessel.photos);
  }
}
function DetalleYateComponent_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2, "Cabinas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "habitaciones");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.rooms);
  }
}
function DetalleYateComponent_ng_container_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2, "Ba\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "ba\xF1os");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.bathrooms);
  }
}
function DetalleYateComponent_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "modelo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vessel.year);
  }
}
function DetalleYateComponent_ng_container_2_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vessel.description);
  }
}
function DetalleYateComponent_ng_container_2_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
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
function DetalleYateComponent_ng_container_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 26);
    \u0275\u0275text(2, "Servicios y amenidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275template(4, DetalleYateComponent_ng_container_2_div_42_div_4_Template, 5, 2, "div", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.vesselAmenities);
  }
}
function DetalleYateComponent_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function DetalleYateComponent_ng_container_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1, " Esta embarcaci\xF3n no est\xE1 disponible actualmente. ");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", d_r9.icon, " ", d_r9.name, " \xB7 ", d_r9.state);
  }
}
function DetalleYateComponent_ng_container_2_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, "Requerido");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_p_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, "Requerido");
    \u0275\u0275elementEnd();
  }
}
function DetalleYateComponent_ng_container_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.days, " ", ctx_r1.days === 1 ? "noche" : "noches");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 3, ctx_r1.totalUsd, "1.2-2"), " USD");
  }
}
function DetalleYateComponent_ng_container_2_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 87)(9, "span", 29);
    \u0275\u0275text(10, "Total estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 88);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("$", \u0275\u0275pipeBind2(4, 5, ctx_r1.vessel.pricePerDay, "1.2-2"), " \xD7 ", ctx_r1.days, " ", ctx_r1.days === 1 ? "noche" : "noches");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 8, ctx_r1.totalUsd, "1.2-2"), " USD");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(ctx_r1.totalUsd));
  }
}
function DetalleYateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div")(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DetalleYateComponent_ng_container_2_span_9_Template, 2, 0, "span", 11)(10, DetalleYateComponent_ng_container_2_span_10_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 15);
    \u0275\u0275text(16, " \u2190 Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19);
    \u0275\u0275template(21, DetalleYateComponent_ng_container_2_img_21_Template, 1, 2, "img", 20)(22, DetalleYateComponent_ng_container_2_div_22_Template, 2, 1, "div", 21)(23, DetalleYateComponent_ng_container_2_button_23_Template, 2, 0, "button", 22)(24, DetalleYateComponent_ng_container_2_button_24_Template, 2, 0, "button", 23)(25, DetalleYateComponent_ng_container_2_div_25_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, DetalleYateComponent_ng_container_2_div_26_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 6)(28, "h2", 26);
    \u0275\u0275text(29, "Ficha t\xE9cnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27)(31, "div", 28)(32, "p", 29);
    \u0275\u0275text(33, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 31);
    \u0275\u0275text(37, "pasajeros m\xE1x.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, DetalleYateComponent_ng_container_2_div_38_Template, 7, 1, "div", 32)(39, DetalleYateComponent_ng_container_2_div_39_Template, 7, 1, "div", 32)(40, DetalleYateComponent_ng_container_2_div_40_Template, 7, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, DetalleYateComponent_ng_container_2_p_41_Template, 2, 1, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, DetalleYateComponent_ng_container_2_div_42_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 35)(44, "div", 36)(45, "div", 37)(46, "p", 38);
    \u0275\u0275text(47, "desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 39);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 38);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 40);
    \u0275\u0275template(54, DetalleYateComponent_ng_container_2_div_54_Template, 2, 1, "div", 41)(55, DetalleYateComponent_ng_container_2_div_55_Template, 2, 0, "div", 42);
    \u0275\u0275elementStart(56, "form", 43);
    \u0275\u0275listener("ngSubmit", function DetalleYateComponent_ng_container_2_Template_form_ngSubmit_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reservar());
    });
    \u0275\u0275elementStart(57, "div")(58, "label", 44);
    \u0275\u0275text(59, "\u{1F3DD}\uFE0F Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "select", 45)(61, "option", 46);
    \u0275\u0275text(62, "Sin destino espec\xEDfico");
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, DetalleYateComponent_ng_container_2_option_63_Template, 2, 4, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 48)(65, "div")(66, "label", 44);
    \u0275\u0275text(67, "\u{1F4C5} Llegada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 49);
    \u0275\u0275template(69, DetalleYateComponent_ng_container_2_p_69_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div")(71, "label", 44);
    \u0275\u0275text(72, "\u{1F4C5} Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 51);
    \u0275\u0275template(74, DetalleYateComponent_ng_container_2_p_74_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, DetalleYateComponent_ng_container_2_div_75_Template, 6, 6, "div", 52);
    \u0275\u0275elementStart(76, "div", 48)(77, "div")(78, "label", 44);
    \u0275\u0275text(79, "\u{1F468}\u200D\u{1F469}\u200D\u{1F467} Adultos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 53)(81, "button", 54);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.f.adults.setValue((ctx_r1.f.adults.value ?? 1) - 1));
    });
    \u0275\u0275text(82, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 55);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 56);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.f.adults.setValue((ctx_r1.f.adults.value ?? 1) + 1));
    });
    \u0275\u0275text(86, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div")(88, "label", 44);
    \u0275\u0275text(89, "\u{1F476} Ni\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 53)(91, "button", 54);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.f.children.setValue((ctx_r1.f.children.value ?? 0) - 1));
    });
    \u0275\u0275text(92, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 55);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 56);
    \u0275\u0275listener("click", function DetalleYateComponent_ng_container_2_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.f.children.setValue((ctx_r1.f.children.value ?? 0) + 1));
    });
    \u0275\u0275text(96, "+");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "p", 29);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div")(100, "label", 44);
    \u0275\u0275text(101, "\u{1F4DD} Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "textarea", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, DetalleYateComponent_ng_container_2_div_103_Template, 13, 11, "div", 58);
    \u0275\u0275elementStart(104, "button", 59);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p", 60);
    \u0275\u0275text(107, "Sin cargos ocultos \xB7 Confirmaci\xF3n inmediata");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(ctx_r1.vessel.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(ctx_r1.vessel.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vessel.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessel.isAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vessel.provider == null ? null : ctx_r1.vessel.provider.companyName);
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
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(ctx_r1.vessel.pricePerDay ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(52, 38, ctx_r1.vessel.pricePerDay, "1.2-2"), " USD / noche");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vessel.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.destinos);
    \u0275\u0275advance(5);
    \u0275\u0275property("min", ctx_r1.today);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.startDate.touched && ctx_r1.f.startDate.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", ctx_r1.f.startDate.value || ctx_r1.today);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f.endDate.touched && ctx_r1.f.endDate.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.days > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", (ctx_r1.f.adults.value ?? 0) <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.f.adults.value);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", (ctx_r1.f.children.value ?? 0) <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.f.children.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("M\xE1x. ", ctx_r1.vessel.capacity, " pasajeros en total");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.days > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting || !ctx_r1.vessel.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Reservando..." : "\u2713 Reservar ahora \u2192", " ");
  }
}
var DetalleYateComponent = class _DetalleYateComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);
  embService = inject(EmbarcacionesService);
  alqService = inject(AlquileresService);
  destService = inject(DestinosService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  loading = true;
  submitting = false;
  errorMessage = "";
  vessel = null;
  destinos = [];
  activePhoto = 0;
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  ALL_AMENITIES = AMENITIES;
  form = this.fb.group({
    destinationId: [null],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    adults: [2, [Validators.required, Validators.min(1)]],
    children: [0, [Validators.required, Validators.min(0)]],
    specialRequests: [""]
  });
  get f() {
    return this.form.controls;
  }
  get isCliente() {
    return this.authService.isCliente();
  }
  get currentUser() {
    return this.authService.user();
  }
  get days() {
    const s = this.f.startDate.value;
    const e = this.f.endDate.value;
    if (!s || !e)
      return 0;
    return Math.max(0, Math.ceil((new Date(e).getTime() - new Date(s).getTime()) / 864e5));
  }
  get totalPassengers() {
    return (this.f.adults.value ?? 0) + (this.f.children.value ?? 0);
  }
  get totalUsd() {
    return (this.vessel?.pricePerDay ?? 0) * (this.days || 1);
  }
  get vesselAmenities() {
    if (!this.vessel?.amenities?.length)
      return [];
    return this.ALL_AMENITIES.filter((a) => this.vessel.amenities.includes(a.value));
  }
  ngOnInit() {
    this.tasaService.load();
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.embService.getById(id).subscribe({
      next: (v) => {
        this.vessel = v;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.destService.getAll().subscribe({ next: (d) => {
      this.destinos = d;
    } });
  }
  reservar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.days <= 0) {
      this.errorMessage = "La fecha de fin debe ser posterior a la de inicio.";
      return;
    }
    if (!this.vessel)
      return;
    const capacity = this.vessel.capacity ?? 0;
    if (this.totalPassengers > capacity) {
      this.errorMessage = `La capacidad m\xE1xima es ${capacity} pasajeros.`;
      return;
    }
    const user = this.currentUser;
    if (!user) {
      this.router.navigate(["/login"]);
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    const destId = this.f.destinationId.value;
    const adults = this.f.adults.value ?? 2;
    const children = this.f.children.value ?? 0;
    const existingNotes = this.f.specialRequests.value?.trim() ?? "";
    const dest = this.destinos.find((d) => d.id === destId);
    const meta = [
      dest ? `Destino: ${dest.name} (${dest.state})` : "",
      `Pasajeros: ${adults} adulto${adults !== 1 ? "s" : ""}${children > 0 ? ` \xB7 ${children} ni\xF1o${children !== 1 ? "s" : ""}` : ""}`
    ].filter(Boolean).join(" | ");
    const notes = existingNotes ? `${meta} | ${existingNotes}` : meta;
    this.alqService.create({
      vesselId: this.vessel.id,
      clientId: user.id,
      destinationId: destId ?? void 0,
      startDate: this.f.startDate.value,
      endDate: this.f.endDate.value,
      passengers: this.totalPassengers,
      specialRequests: notes
    }).subscribe({
      next: (a) => {
        this.submitting = false;
        this.router.navigate(["/alquileres", a.id]);
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
    return t === "YATE" ? "\u26F5" : "\u{1F6E5}\uFE0F";
  }
  typeLabel(t) {
    return t === "YATE" ? "Yate" : "Catamar\xE1n";
  }
  static \u0275fac = function DetalleYateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleYateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleYateComponent, selectors: [["app-detalle-yate"]], decls: 3, vars: 2, consts: [[1, "mx-auto", "max-w-6xl", "space-y-6", "pb-12"], ["class", "flex flex-col items-center justify-center py-32 gap-4", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-32", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-2xl"], [1, "rounded-full", "bg-brand-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-brand-700", "dark:bg-brand-500/20", "dark:text-brand-300"], ["class", "rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/alquileres", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-start"], [1, "flex-1", "min-w-0", "space-y-5"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "relative", "h-72", "bg-gradient-to-br", "from-slate-700", "to-slate-900", "md:h-96"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-9xl opacity-20", 4, "ngIf"], ["class", "absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl", 3, "click", 4, "ngIf"], ["class", "absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl", 3, "click", 4, "ngIf"], ["class", "absolute bottom-3 right-3", 4, "ngIf"], ["class", "flex gap-2 overflow-x-auto p-3", 4, "ngIf"], [1, "mb-4", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "bg-gray-50", "p-3", "text-center", "dark:bg-white/[0.04]"], [1, "text-xs", "text-gray-400"], [1, "text-2xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "text-[10px]", "text-gray-400"], ["class", "rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]", 4, "ngIf"], ["class", "mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "w-full", "flex-shrink-0", "lg:sticky", "lg:top-6", "lg:w-96"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-xl", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-t-2xl", "bg-gradient-to-r", "from-brand-500", "to-brand-600", "px-5", "py-4"], [1, "text-xs", "text-brand-100"], [1, "text-3xl", "font-extrabold", "text-white"], [1, "p-5"], ["class", "mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400", 4, "ngIf"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["formControlName", "destinationId", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "date", "formControlName", "startDate", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "min"], ["class", "mt-1 text-[10px] text-red-500", 4, "ngIf"], ["type", "date", "formControlName", "endDate", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "min"], ["class", "flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]", 4, "ngIf"], [1, "flex", "h-10", "items-center", "justify-between", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-2", "dark:border-gray-700", "dark:bg-slate-800"], ["type", "button", 1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "text-gray-500", "hover:bg-gray-200", "disabled:opacity-30", "dark:hover:bg-slate-700", 3, "click", "disabled"], [1, "font-bold", "text-gray-800", "dark:text-white"], ["type", "button", 1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-lg", "text-gray-500", "hover:bg-gray-200", "dark:hover:bg-slate-700", 3, "click"], ["formControlName", "specialRequests", "rows", "2", "placeholder", "Catering, celebraci\xF3n, snorkeling...", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "py-2", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", "resize-none"], ["class", "rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]", 4, "ngIf"], ["type", "submit", 1, "w-full", "rounded-xl", "bg-brand-500", "py-4", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "disabled"], [1, "text-center", "text-[10px]", "text-gray-400"], [1, "rounded-full", "bg-red-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-red-600", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-full", "bg-green-100", "px-2.5", "py-0.5", "text-xs", "font-bold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-9xl", "opacity-20"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "text-xl", 3, "click"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "text-xl", 3, "click"], [1, "absolute", "bottom-3", "right-3"], [1, "rounded-full", "bg-black/60", "px-3", "py-1", "text-xs", "text-white"], [1, "flex", "gap-2", "overflow-x-auto", "p-3"], ["class", "h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition", 3, "border-brand-500", "border-transparent", "click", 4, "ngFor", "ngForOf"], [1, "h-16", "w-24", "flex-shrink-0", "overflow-hidden", "rounded-lg", "border-2", "transition", 3, "click"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "mt-4", "text-sm", "text-gray-500", "dark:text-gray-400", "leading-relaxed"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-3"], ["class", "flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5 dark:bg-brand-500/10", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2.5", "rounded-xl", "bg-brand-50", "px-3", "py-2.5", "dark:bg-brand-500/10"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mb-4", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-xs", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mb-4", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "px-4", "py-3", "text-xs", "text-amber-700", "dark:border-amber-500/30", "dark:bg-amber-500/10", "dark:text-amber-400"], [1, "mt-1", "text-[10px]", "text-red-500"], [1, "flex", "items-center", "justify-between", "rounded-xl", "bg-gray-50", "px-4", "py-2.5", "dark:bg-white/[0.04]"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "rounded-xl", "bg-gray-50", "px-4", "py-3", "dark:bg-white/[0.04]"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "mt-1", "flex", "items-center", "justify-between"], [1, "font-extrabold", "text-brand-600", "dark:text-brand-400"]], template: function DetalleYateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DetalleYateComponent_div_1_Template, 5, 0, "div", 1)(2, DetalleYateComponent_ng_container_2_Template, 108, 41, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessel);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleYateComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-yate", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="mx-auto max-w-6xl space-y-6 pb-12">

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-32 gap-4">
    <div class="text-5xl animate-bounce">\u26F5</div>
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
            <span *ngIf="!vessel.isAvailable" class="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">No disponible</span>
            <span *ngIf="vessel.isAvailable" class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">Disponible</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">{{ vessel.name }}</h1>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ vessel.provider?.companyName }}</p>
        </div>
        <a routerLink="/alquileres" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
          \u2190 Volver
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-6 lg:flex-row lg:items-start">

      <!-- \u2550\u2550 IZQUIERDA: Info del yate \u2550\u2550 -->
      <div class="flex-1 min-w-0 space-y-5">

        <!-- Galer\xEDa de fotos -->
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <div class="relative h-72 bg-gradient-to-br from-slate-700 to-slate-900 md:h-96">
            <img *ngIf="vessel.photos?.[activePhoto]"
              [src]="imageUrl(vessel.photos![activePhoto])"
              [alt]="vessel.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!vessel.photos?.[0]"
              class="flex h-full items-center justify-center text-9xl opacity-20">{{ typeIcon(vessel.type) }}</div>
            <!-- Nav flechas -->
            <button *ngIf="(vessel.photos?.length ?? 0) > 1 && activePhoto > 0"
              (click)="activePhoto = activePhoto - 1"
              class="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl">\u2039</button>
            <button *ngIf="(vessel.photos?.length ?? 0) > 1 && activePhoto < (vessel.photos!.length - 1)"
              (click)="activePhoto = activePhoto + 1"
              class="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 text-xl">\u203A</button>
            <!-- Counter -->
            <div *ngIf="(vessel.photos?.length ?? 0) > 1" class="absolute bottom-3 right-3">
              <span class="rounded-full bg-black/60 px-3 py-1 text-xs text-white">{{ activePhoto + 1 }} / {{ vessel.photos!.length }}</span>
            </div>
          </div>
          <!-- Thumbnails -->
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
          <h2 class="mb-4 font-semibold text-gray-800 dark:text-white/90">Servicios y amenidades</h2>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div *ngFor="let a of vesselAmenities"
              class="flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5 dark:bg-brand-500/10">
              <span class="text-xl">{{ a.icon }}</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ a.label }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- \u2550\u2550 DERECHA: Formulario de reserva \u2550\u2550 -->
      <div class="w-full flex-shrink-0 lg:sticky lg:top-6 lg:w-96">
        <div class="rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-white/[0.03]">

          <!-- Precio cabecera -->
          <div class="rounded-t-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-4">
            <p class="text-xs text-brand-100">desde</p>
            <p class="text-3xl font-extrabold text-white">{{ tasaService.formatBs(vessel.pricePerDay ?? 0) }}</p>
            <p class="text-xs text-brand-100">\${{ vessel.pricePerDay | number:'1.2-2' }} USD / noche</p>
          </div>

          <div class="p-5">

            <div *ngIf="errorMessage" class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
              \u26A0\uFE0F {{ errorMessage }}
            </div>

            <div *ngIf="!vessel.isAvailable" class="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
              Esta embarcaci\xF3n no est\xE1 disponible actualmente.
            </div>

            <form [formGroup]="form" (ngSubmit)="reservar()" class="space-y-4">

              <!-- Destino -->
              <div>
                <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F3DD}\uFE0F Destino</label>
                <select formControlName="destinationId"
                  class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white">
                  <option [ngValue]="null">Sin destino espec\xEDfico</option>
                  <option *ngFor="let d of destinos" [ngValue]="d.id">{{ d.icon }} {{ d.name }} \xB7 {{ d.state }}</option>
                </select>
              </div>

              <!-- Fechas -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F4C5} Llegada</label>
                  <input type="date" formControlName="startDate" [min]="today"
                    class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
                  <p *ngIf="f.startDate.touched && f.startDate.invalid" class="mt-1 text-[10px] text-red-500">Requerido</p>
                </div>
                <div>
                  <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F4C5} Salida</label>
                  <input type="date" formControlName="endDate" [min]="f.startDate.value || today"
                    class="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
                  <p *ngIf="f.endDate.touched && f.endDate.invalid" class="mt-1 text-[10px] text-red-500">Requerido</p>
                </div>
              </div>

              <!-- Noches calculadas -->
              <div *ngIf="days > 0" class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
                <span class="text-sm text-gray-500">{{ days }} {{ days === 1 ? 'noche' : 'noches' }}</span>
                <span class="text-sm font-bold text-brand-600 dark:text-brand-400">\${{ totalUsd | number:'1.2-2' }} USD</span>
              </div>

              <!-- Pasajeros -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F468}\u200D\u{1F469}\u200D\u{1F467} Adultos</label>
                  <div class="flex h-10 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-2 dark:border-gray-700 dark:bg-slate-800">
                    <button type="button" (click)="f.adults.setValue((f.adults.value ?? 1) - 1)"
                      [disabled]="(f.adults.value ?? 0) <= 1"
                      class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-30 dark:hover:bg-slate-700">\u2212</button>
                    <span class="font-bold text-gray-800 dark:text-white">{{ f.adults.value }}</span>
                    <button type="button" (click)="f.adults.setValue((f.adults.value ?? 1) + 1)"
                      class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700">+</button>
                  </div>
                </div>
                <div>
                  <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F476} Ni\xF1os</label>
                  <div class="flex h-10 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-2 dark:border-gray-700 dark:bg-slate-800">
                    <button type="button" (click)="f.children.setValue((f.children.value ?? 0) - 1)"
                      [disabled]="(f.children.value ?? 0) <= 0"
                      class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-30 dark:hover:bg-slate-700">\u2212</button>
                    <span class="font-bold text-gray-800 dark:text-white">{{ f.children.value }}</span>
                    <button type="button" (click)="f.children.setValue((f.children.value ?? 0) + 1)"
                      class="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700">+</button>
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-400">M\xE1x. {{ vessel.capacity }} pasajeros en total</p>

              <!-- Solicitudes -->
              <div>
                <label class="mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300">\u{1F4DD} Solicitudes especiales</label>
                <textarea formControlName="specialRequests" rows="2"
                  placeholder="Catering, celebraci\xF3n, snorkeling..."
                  class="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white resize-none"></textarea>
              </div>

              <!-- Total y CTA -->
              <div *ngIf="days > 0" class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-500">\${{ vessel.pricePerDay | number:'1.2-2' }} \xD7 {{ days }} {{ days === 1 ? 'noche' : 'noches' }}</span>
                  <span class="font-bold text-gray-800 dark:text-white">\${{ totalUsd | number:'1.2-2' }} USD</span>
                </div>
                <div class="mt-1 flex items-center justify-between">
                  <span class="text-xs text-gray-400">Total estimado</span>
                  <span class="font-extrabold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(totalUsd) }}</span>
                </div>
              </div>

              <button type="submit" [disabled]="submitting || !vessel.isAvailable"
                class="w-full rounded-xl bg-brand-500 py-4 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors">
                {{ submitting ? 'Reservando...' : '\u2713 Reservar ahora \u2192' }}
              </button>
              <p class="text-center text-[10px] text-gray-400">Sin cargos ocultos \xB7 Confirmaci\xF3n inmediata</p>
            </form>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleYateComponent, { className: "DetalleYateComponent", filePath: "src/app/pages/alquileres/pages/detalle-yate/detalle-yate.component.ts", lineNumber: 22 });
})();
export {
  DetalleYateComponent
};
//# sourceMappingURL=chunk-VSKRKBHZ.js.map
