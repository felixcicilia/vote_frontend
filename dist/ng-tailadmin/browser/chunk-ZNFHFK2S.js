import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X6ED7CSN.js";
import {
  CommonModule,
  Component,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/embarcaciones/pages/verificar-embarcaciones/verificar-embarcaciones.component.ts
var _c0 = () => [];
function VerificarEmbarcacionesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd()();
  }
}
function VerificarEmbarcacionesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4, "Sin pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6, "No hay embarcaciones esperando verificaci\xF3n.");
    \u0275\u0275elementEnd()();
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "p", 40);
    \u0275\u0275text(2, "Motivo del rechazo (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function VerificarEmbarcacionesComponent_div_8_div_5_div_1_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.rejectionReason, $event) || (ctx_r2.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "button", 43);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_8_div_5_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const v_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmReject(v_r4));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_8_div_5_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelReject());
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rejectionReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing === v_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.processing === v_r4.id ? "Rechazando..." : "Confirmar rechazo", " ");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.imageUrl(v_r4.photos[0]), \u0275\u0275sanitizeUrl)("alt", v_r4.name);
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.typeIcon(v_r4.type));
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((v_r4.photos == null ? null : v_r4.photos.length) ?? 1) - 1, " fotos ");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Proveedor: ", v_r4.provider == null ? null : v_r4.provider.companyName);
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F6CF}\uFE0F ", v_r4.rooms, " cabinas");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F6BF} ", v_r4.bathrooms, " ba\xF1os");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4C5} ", v_r4.year);
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", v_r4.pricePerDay, "/d\xEDa");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r4.description);
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.amenityLabel(a_r5));
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ((v_r4.amenities == null ? null : v_r4.amenities.length) ?? 0) - 5, " m\xE1s ");
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, VerificarEmbarcacionesComponent_div_8_div_5_div_23_span_1_Template, 2, 1, "span", 51)(2, VerificarEmbarcacionesComponent_div_8_div_5_div_23_span_2_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (v_r4.amenities ?? \u0275\u0275pureFunction0(2, _c0)).slice(0, 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((v_r4.amenities == null ? null : v_r4.amenities.length) ?? 0) > 5);
  }
}
function VerificarEmbarcacionesComponent_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, VerificarEmbarcacionesComponent_div_8_div_5_div_1_Template, 9, 3, "div", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "div", 22);
    \u0275\u0275template(4, VerificarEmbarcacionesComponent_div_8_div_5_img_4_Template, 1, 2, "img", 23)(5, VerificarEmbarcacionesComponent_div_8_div_5_div_5_Template, 2, 1, "div", 24)(6, VerificarEmbarcacionesComponent_div_8_div_5_div_6_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "div")(9, "div", 27)(10, "h3", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, VerificarEmbarcacionesComponent_div_8_div_5_p_14_Template, 2, 1, "p", 30);
    \u0275\u0275elementStart(15, "div", 31)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, VerificarEmbarcacionesComponent_div_8_div_5_span_18_Template, 2, 1, "span", 32)(19, VerificarEmbarcacionesComponent_div_8_div_5_span_19_Template, 2, 1, "span", 32)(20, VerificarEmbarcacionesComponent_div_8_div_5_span_20_Template, 2, 1, "span", 32)(21, VerificarEmbarcacionesComponent_div_8_div_5_span_21_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, VerificarEmbarcacionesComponent_div_8_div_5_p_22_Template, 2, 1, "p", 33)(23, VerificarEmbarcacionesComponent_div_8_div_5_div_23_Template, 3, 3, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 35)(25, "button", 36);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_8_div_5_Template_button_click_25_listener() {
      const v_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(v_r4));
    });
    \u0275\u0275text(26, " \u{1F50D} Ver detalle completo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 37);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_8_div_5_Template_button_click_27_listener() {
      const v_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approve(v_r4));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 38);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_8_div_5_Template_button_click_29_listener() {
      const v_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openReject(v_r4));
    });
    \u0275\u0275text(30, " \u2717 Rechazar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rejectingId === v_r4.id && (ctx_r2.detailVessel == null ? null : ctx_r2.detailVessel.id) !== v_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", v_r4.photos == null ? null : v_r4.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(v_r4.photos == null ? null : v_r4.photos[0]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((v_r4.photos == null ? null : v_r4.photos.length) ?? 0) > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(v_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.typeIcon(v_r4.type), " ", v_r4.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.provider == null ? null : v_r4.provider.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F465} ", v_r4.capacity, " pax");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.bathrooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.pricePerDay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r4.amenities == null ? null : v_r4.amenities.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.processing === v_r4.id || ctx_r2.rejectingId === v_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.processing === v_r4.id ? "Aprobando..." : "\u2713 Aprobar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.processing === v_r4.id);
  }
}
function VerificarEmbarcacionesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, VerificarEmbarcacionesComponent_div_8_div_5_Template, 31, 18, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.vessels.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" embarcaci\xF3n", ctx_r2.vessels.length !== 1 ? "es" : "", " pendiente", ctx_r2.vessels.length !== 1 ? "s" : "", " de revisi\xF3n ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vessels);
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_container_12_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_ng_container_12_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.prevPhoto());
    });
    \u0275\u0275text(1, " \u2039 ");
    \u0275\u0275elementEnd();
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_container_12_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_ng_container_12_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.nextPhoto());
    });
    \u0275\u0275text(1, " \u203A ");
    \u0275\u0275elementEnd();
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_container_12_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_ng_container_12_div_6_button_1_Template_button_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.activePhotoIndex = i_r10);
    });
    \u0275\u0275element(1, "img", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-white", ctx_r2.activePhotoIndex === i_r10)("border-transparent", ctx_r2.activePhotoIndex !== i_r10);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imageUrl(p_r11), \u0275\u0275sanitizeUrl);
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_container_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, VerificarEmbarcacionesComponent_div_9_ng_container_12_div_6_button_1_Template, 2, 5, "button", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.detailVessel.photos);
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275template(2, VerificarEmbarcacionesComponent_div_9_ng_container_12_button_2_Template, 2, 0, "button", 77)(3, VerificarEmbarcacionesComponent_div_9_ng_container_12_button_3_Template, 2, 0, "button", 78);
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VerificarEmbarcacionesComponent_div_9_ng_container_12_div_6_Template, 2, 1, "div", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imageUrl(ctx_r2.detailVessel.photos[ctx_r2.activePhotoIndex]), \u0275\u0275sanitizeUrl)("alt", ctx_r2.detailVessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r2.detailVessel.photos == null ? null : ctx_r2.detailVessel.photos.length) ?? 0) > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r2.detailVessel.photos == null ? null : ctx_r2.detailVessel.photos.length) ?? 0) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.activePhotoIndex + 1, " / ", ctx_r2.detailVessel.photos.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r2.detailVessel.photos == null ? null : ctx_r2.detailVessel.photos.length) ?? 0) > 1);
  }
}
function VerificarEmbarcacionesComponent_div_9_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.typeIcon(ctx_r2.detailVessel.type));
  }
}
function VerificarEmbarcacionesComponent_div_9_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 58);
    \u0275\u0275text(2, "Cabinas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 68);
    \u0275\u0275text(6, "habitaciones");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.rooms);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 58);
    \u0275\u0275text(2, "Ba\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 68);
    \u0275\u0275text(6, "unidades");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.bathrooms);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 58);
    \u0275\u0275text(2, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.year);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 58);
    \u0275\u0275text(2, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 68);
    \u0275\u0275text(6, "por d\xEDa");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", ctx_r2.detailVessel.pricePerDay);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 58);
    \u0275\u0275text(2, "Matr\xEDcula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.licensePlate);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 89);
    \u0275\u0275text(2, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.description);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_33_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.amenityLabel(a_r12), " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275template(4, VerificarEmbarcacionesComponent_div_9_div_33_span_4_Template, 2, 1, "span", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Amenidades (", ctx_r2.detailVessel.amenities.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.detailVessel.amenities);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 95);
    \u0275\u0275text(2, "Empresa:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailVessel.provider.companyName, " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 95);
    \u0275\u0275text(2, "\u{1F4F1} Pago M\xF3vil:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailVessel.provider.pagoMovilPhone, " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 95);
    \u0275\u0275text(2, "\u{1F4B8} Zelle:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailVessel.provider.zelleEmail, " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 95);
    \u0275\u0275text(2, "\u{1F3E6} Banco:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailVessel.provider.bankName, " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 95);
    \u0275\u0275text(2, "Cuenta:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailVessel.provider.bankAccount, " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h3", 64);
    \u0275\u0275text(2, "Datos del proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 94);
    \u0275\u0275template(4, VerificarEmbarcacionesComponent_div_9_div_34_div_4_Template, 4, 1, "div", 32)(5, VerificarEmbarcacionesComponent_div_9_div_34_div_5_Template, 4, 1, "div", 32)(6, VerificarEmbarcacionesComponent_div_9_div_34_div_6_Template, 4, 1, "div", 32)(7, VerificarEmbarcacionesComponent_div_9_div_34_div_7_Template, 4, 1, "div", 32)(8, VerificarEmbarcacionesComponent_div_9_div_34_div_8_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider.pagoMovilPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider.zelleEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider.bankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider.bankAccount);
  }
}
function VerificarEmbarcacionesComponent_div_9_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "p", 40);
    \u0275\u0275text(2, "Motivo del rechazo (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 97);
    \u0275\u0275twoWayListener("ngModelChange", function VerificarEmbarcacionesComponent_div_9_div_35_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.rejectionReason, $event) || (ctx_r2.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "button", 98);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmReject(ctx_r2.detailVessel));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 99);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_div_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelReject());
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rejectionReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing === ctx_r2.detailVessel.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.processing === ctx_r2.detailVessel.id ? "Rechazando..." : "Confirmar rechazo", " ");
  }
}
function VerificarEmbarcacionesComponent_div_9_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openReject(ctx_r2.detailVessel));
    });
    \u0275\u0275text(1, " \u2717 Rechazar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.processing === ctx_r2.detailVessel.id);
  }
}
function VerificarEmbarcacionesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div")(4, "h2", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 59);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "div", 61);
    \u0275\u0275template(12, VerificarEmbarcacionesComponent_div_9_ng_container_12_Template, 7, 7, "ng-container", 62)(13, VerificarEmbarcacionesComponent_div_9_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 63)(16, "div")(17, "h3", 64);
    \u0275\u0275text(18, "Ficha t\xE9cnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 65)(20, "div", 66)(21, "p", 58);
    \u0275\u0275text(22, "Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 67);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 68);
    \u0275\u0275text(26, "pasajeros");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, VerificarEmbarcacionesComponent_div_9_div_27_Template, 7, 1, "div", 69)(28, VerificarEmbarcacionesComponent_div_9_div_28_Template, 7, 1, "div", 69)(29, VerificarEmbarcacionesComponent_div_9_div_29_Template, 5, 1, "div", 69)(30, VerificarEmbarcacionesComponent_div_9_div_30_Template, 7, 1, "div", 69)(31, VerificarEmbarcacionesComponent_div_9_div_31_Template, 5, 1, "div", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, VerificarEmbarcacionesComponent_div_9_div_32_Template, 5, 1, "div", 32)(33, VerificarEmbarcacionesComponent_div_9_div_33_Template, 5, 2, "div", 32)(34, VerificarEmbarcacionesComponent_div_9_div_34_Template, 9, 5, "div", 70)(35, VerificarEmbarcacionesComponent_div_9_div_35_Template, 9, 3, "div", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 72)(37, "button", 73);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(38, " Cerrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, VerificarEmbarcacionesComponent_div_9_button_39_Template, 2, 1, "button", 74);
    \u0275\u0275elementStart(40, "button", 75);
    \u0275\u0275listener("click", function VerificarEmbarcacionesComponent_div_9_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(ctx_r2.detailVessel));
    });
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const noPhotos_r15 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r2.typeIcon(ctx_r2.detailVessel.type), " ", ctx_r2.detailVessel.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.detailVessel.type, " \xB7 Proveedor: ", (ctx_r2.detailVessel.provider == null ? null : ctx_r2.detailVessel.provider.companyName) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.photos == null ? null : ctx_r2.detailVessel.photos.length)("ngIfElse", noPhotos_r15);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.detailVessel.capacity);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.bathrooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.pricePerDay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.licensePlate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.amenities == null ? null : ctx_r2.detailVessel.amenities.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailVessel.provider);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rejectingId === ctx_r2.detailVessel.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.rejectingId !== ctx_r2.detailVessel.id);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.processing === ctx_r2.detailVessel.id || ctx_r2.rejectingId === ctx_r2.detailVessel.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.processing === ctx_r2.detailVessel.id ? "Aprobando..." : "\u2713 Aprobar embarcaci\xF3n", " ");
  }
}
var AMENITY_LABELS = {
  WIFI: "\u{1F4F6} Wi-Fi",
  SOUND_SYSTEM: "\u{1F50A} Sonido",
  AIR_CONDITIONING: "\u2744\uFE0F A/C",
  KITCHEN: "\u{1F373} Cocina",
  BATHROOM: "\u{1F6BF} Ba\xF1o",
  REFRIGERATOR: "\u{1F9CA} Refrigerador",
  DRINKING_WATER: "\u{1F4A7} Agua potable",
  SNORKELING: "\u{1F93F} Snorkeling",
  FISHING_EQUIPMENT: "\u{1F3A3} Pesca",
  KAYAK: "\u{1F6F6} Kayak",
  LIFE_JACKETS: "\u{1F9BA} Chalecos",
  FIRST_AID_KIT: "\u{1FA79} Botiqu\xEDn",
  SUN_DECK: "\u2600\uFE0F Cubierta solar",
  DINING_AREA: "\u{1F37D}\uFE0F Comedor",
  CAPTAIN_INCLUDED: "\u{1F468}\u200D\u2708\uFE0F Capit\xE1n incluido",
  FUEL_INCLUDED: "\u26FD Combustible",
  PARKING: "\u{1F17F}\uFE0F Estacionamiento",
  GENERATOR: "\u{1F50B} Generador"
};
var VerificarEmbarcacionesComponent = class _VerificarEmbarcacionesComponent {
  embService = inject(EmbarcacionesService);
  loading = true;
  vessels = [];
  processing = null;
  rejectionReason = "";
  rejectingId = null;
  // Modal
  detailVessel = null;
  activePhotoIndex = 0;
  ngOnInit() {
    this.load();
  }
  load() {
    this.embService.getPendingVerification().subscribe({
      next: (v) => {
        this.vessels = v;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  approve(v) {
    this.processing = v.id;
    this.embService.verify(v.id, "APPROVED").subscribe({
      next: () => {
        this.vessels = this.vessels.filter((x) => x.id !== v.id);
        this.processing = null;
        if (this.detailVessel?.id === v.id)
          this.closeDetail();
      },
      error: () => {
        this.processing = null;
      }
    });
  }
  openReject(v) {
    this.rejectingId = v.id;
    this.rejectionReason = "";
  }
  confirmReject(v) {
    this.processing = v.id;
    this.embService.verify(v.id, "REJECTED", this.rejectionReason || void 0).subscribe({
      next: () => {
        this.vessels = this.vessels.filter((x) => x.id !== v.id);
        this.processing = null;
        this.rejectingId = null;
        if (this.detailVessel?.id === v.id)
          this.closeDetail();
      },
      error: () => {
        this.processing = null;
      }
    });
  }
  cancelReject() {
    this.rejectingId = null;
    this.rejectionReason = "";
  }
  openDetail(v) {
    this.detailVessel = v;
    this.activePhotoIndex = 0;
    this.rejectingId = null;
    this.rejectionReason = "";
  }
  closeDetail() {
    this.detailVessel = null;
  }
  prevPhoto() {
    const len = this.detailVessel?.photos?.length ?? 0;
    this.activePhotoIndex = (this.activePhotoIndex - 1 + len) % len;
  }
  nextPhoto() {
    const len = this.detailVessel?.photos?.length ?? 0;
    this.activePhotoIndex = (this.activePhotoIndex + 1) % len;
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  amenityLabel(a) {
    return AMENITY_LABELS[a] ?? a;
  }
  typeIcon(t) {
    return t === "YATE" ? "\u26F5" : t === "CATAMARAN" ? "\u{1F6E5}\uFE0F" : t === "BOTE" ? "\u{1F6F6}" : "\u{1F6A4}";
  }
  static \u0275fac = function VerificarEmbarcacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerificarEmbarcacionesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificarEmbarcacionesComponent, selectors: [["app-verificar-embarcaciones"]], decls: 10, vars: 4, consts: [["noPhotos", ""], [1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "text-4xl", "animate-bounce"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "space-y-4"], [1, "text-sm", "text-gray-500"], [1, "font-bold", "text-amber-600"], ["class", "overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm dark:border-amber-500/30 dark:bg-white/[0.03]", 4, "ngFor", "ngForOf"], [1, "overflow-hidden", "rounded-2xl", "border", "border-amber-200", "bg-white", "shadow-sm", "dark:border-amber-500/30", "dark:bg-white/[0.03]"], ["class", "bg-red-50 border-b border-red-200 p-5 dark:bg-red-500/10 dark:border-red-500/30", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row"], [1, "h-44", "w-full", "flex-shrink-0", "overflow-hidden", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "dark:from-slate-800", "dark:to-slate-900", "sm:h-auto", "sm:w-48"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full min-h-[176px] items-center justify-center text-6xl opacity-20", 4, "ngIf"], ["class", "absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "justify-between", "p-5", "gap-4"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-xs", "text-gray-500", "dark:bg-white/[0.06]"], ["class", "mt-0.5 text-xs text-gray-400", 4, "ngIf"], [1, "mt-2", "flex", "flex-wrap", "gap-3", "text-sm", "text-gray-500", "dark:text-gray-400"], [4, "ngIf"], ["class", "mt-2 text-xs text-gray-400 line-clamp-2", 4, "ngIf"], ["class", "mt-2 flex flex-wrap gap-1", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-2"], [1, "rounded-xl", "border", "border-brand-300", "px-5", "py-2.5", "text-sm", "font-bold", "text-brand-600", "hover:bg-brand-50", "transition-colors", "dark:border-brand-500/40", "dark:text-brand-400", 3, "click"], [1, "rounded-xl", "bg-green-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-green-600", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [1, "rounded-xl", "border", "border-red-300", "px-5", "py-2.5", "text-sm", "font-bold", "text-red-600", "hover:bg-red-50", "disabled:opacity-50", "transition-colors", "dark:border-red-500/40", "dark:text-red-400", 3, "click", "disabled"], [1, "bg-red-50", "border-b", "border-red-200", "p-5", "dark:bg-red-500/10", "dark:border-red-500/30"], [1, "mb-2", "text-sm", "font-semibold", "text-red-700", "dark:text-red-400"], ["rows", "2", "placeholder", "Ej: Las fotos no son claras, falta documentaci\xF3n...", 1, "w-full", "rounded-xl", "border", "border-red-200", "bg-white", "px-3", "py-2", "text-sm", "outline-none", "focus:border-red-400", "dark:border-red-500/30", "dark:bg-slate-800", "dark:text-white", "resize-none", 3, "ngModelChange", "ngModel"], [1, "mt-3", "flex", "gap-2"], [1, "rounded-xl", "bg-red-500", "px-4", "py-2", "text-xs", "font-bold", "text-white", "hover:bg-red-600", "disabled:opacity-50", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "border", "border-gray-300", "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "min-h-[176px]", "items-center", "justify-center", "text-6xl", "opacity-20"], [1, "absolute", "bottom-2", "right-2", "rounded-full", "bg-black/50", "px-2", "py-0.5", "text-[10px]", "text-white"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "mt-2", "text-xs", "text-gray-400", "line-clamp-2"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], ["class", "rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 dark:bg-white/[0.06]", 4, "ngFor", "ngForOf"], ["class", "rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-400 dark:bg-white/[0.06]", 4, "ngIf"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "text-gray-500", "dark:bg-white/[0.06]"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "text-gray-400", "dark:bg-white/[0.06]"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/60", "p-4", "backdrop-blur-sm", 3, "click"], [1, "relative", "flex", "max-h-[92vh]", "w-full", "max-w-3xl", "flex-col", "overflow-hidden", "rounded-2xl", "bg-white", "shadow-2xl", "dark:bg-gray-900", 3, "click"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "text-xs", "text-gray-400"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-white", "transition", "text-xl", 3, "click"], [1, "flex-1", "overflow-y-auto"], [1, "relative", "bg-gray-900", 2, "height", "280px"], [4, "ngIf", "ngIfElse"], [1, "p-6", "space-y-5"], [1, "mb-3", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "border", "border-gray-100", "bg-gray-50", "p-3", "text-center", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mt-0.5", "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-[10px]", "text-gray-400"], ["class", "rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/30 dark:bg-red-500/10", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "gap-3", "border-t", "border-gray-100", "bg-white", "px-6", "py-4", "dark:border-gray-800", "dark:bg-gray-900"], [1, "rounded-xl", "border", "border-gray-300", "px-5", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], ["class", "rounded-xl border border-red-300 px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 disabled:opacity-50 dark:border-red-500/40 dark:text-red-400", 3, "disabled", "click", 4, "ngIf"], [1, "rounded-xl", "bg-green-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-green-600", "disabled:opacity-50", 3, "click", "disabled"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], ["class", "absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition", 3, "click", 4, "ngIf"], ["class", "absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition", 3, "click", 4, "ngIf"], [1, "absolute", "bottom-3", "right-3", "rounded-full", "bg-black/50", "px-3", "py-1", "text-xs", "text-white"], ["class", "absolute bottom-3 left-3 flex gap-1.5", 4, "ngIf"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "transition", 3, "click"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "transition", 3, "click"], [1, "absolute", "bottom-3", "left-3", "flex", "gap-1.5"], ["class", "h-8 w-8 overflow-hidden rounded border-2 transition", 3, "border-white", "border-transparent", "click", 4, "ngFor", "ngForOf"], [1, "h-8", "w-8", "overflow-hidden", "rounded", "border-2", "transition", 3, "click"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "h-full", "items-center", "justify-center", "text-8xl", "opacity-20"], [1, "mt-0.5", "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "text-sm", "text-gray-600", "dark:text-gray-300", "leading-relaxed"], ["class", "rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-white/[0.04] dark:text-gray-300", 4, "ngFor", "ngForOf"], [1, "rounded-full", "border", "border-gray-200", "bg-gray-50", "px-3", "py-1", "text-xs", "font-medium", "text-gray-600", "dark:border-gray-700", "dark:bg-white/[0.04]", "dark:text-gray-300"], [1, "rounded-xl", "border", "border-gray-100", "bg-gray-50", "p-4", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "grid", "grid-cols-1", "gap-2", "sm:grid-cols-2", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-4", "dark:border-red-500/30", "dark:bg-red-500/10"], ["rows", "3", "placeholder", "Ej: Las fotos no son claras, falta documentaci\xF3n oficial...", 1, "w-full", "rounded-xl", "border", "border-red-200", "bg-white", "px-3", "py-2", "text-sm", "outline-none", "focus:border-red-400", "dark:border-red-500/30", "dark:bg-slate-800", "dark:text-white", "resize-none", 3, "ngModelChange", "ngModel"], [1, "rounded-xl", "bg-red-500", "px-5", "py-2", "text-sm", "font-bold", "text-white", "hover:bg-red-600", "disabled:opacity-50", 3, "click", "disabled"], [1, "rounded-xl", "border", "border-gray-300", "px-5", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "rounded-xl", "border", "border-red-300", "px-5", "py-2.5", "text-sm", "font-bold", "text-red-600", "hover:bg-red-50", "disabled:opacity-50", "dark:border-red-500/40", "dark:text-red-400", 3, "click", "disabled"]], template: function VerificarEmbarcacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3, "Verificar embarcaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, "Revisa y aprueba o rechaza las embarcaciones enviadas por los proveedores.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, VerificarEmbarcacionesComponent_div_6_Template, 3, 0, "div", 5)(7, VerificarEmbarcacionesComponent_div_7_Template, 7, 0, "div", 6)(8, VerificarEmbarcacionesComponent_div_8_Template, 6, 4, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, VerificarEmbarcacionesComponent_div_9_Template, 42, 19, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessels.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessels.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.detailVessel);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificarEmbarcacionesComponent, [{
    type: Component,
    args: [{ selector: "app-verificar-embarcaciones", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">Verificar embarcaciones</h1>
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Revisa y aprueba o rechaza las embarcaciones enviadas por los proveedores.</p>
  </div>

  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-4xl animate-bounce">\u{1F50D}</div>
  </div>

  <div *ngIf="!loading && vessels.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u2705</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin pendientes</h3>
    <p class="mt-2 text-sm text-gray-500">No hay embarcaciones esperando verificaci\xF3n.</p>
  </div>

  <div *ngIf="!loading && vessels.length > 0" class="space-y-4">
    <p class="text-sm text-gray-500">
      <span class="font-bold text-amber-600">{{ vessels.length }}</span>
      embarcaci\xF3n{{ vessels.length !== 1 ? 'es' : '' }} pendiente{{ vessels.length !== 1 ? 's' : '' }} de revisi\xF3n
    </p>

    <div *ngFor="let v of vessels"
      class="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm dark:border-amber-500/30 dark:bg-white/[0.03]">

      <!-- Panel rechazar (en lista) -->
      <div *ngIf="rejectingId === v.id && detailVessel?.id !== v.id"
        class="bg-red-50 border-b border-red-200 p-5 dark:bg-red-500/10 dark:border-red-500/30">
        <p class="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">Motivo del rechazo (opcional)</p>
        <textarea [(ngModel)]="rejectionReason" rows="2"
          placeholder="Ej: Las fotos no son claras, falta documentaci\xF3n..."
          class="w-full rounded-xl border border-red-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-400 dark:border-red-500/30 dark:bg-slate-800 dark:text-white resize-none"></textarea>
        <div class="mt-3 flex gap-2">
          <button (click)="confirmReject(v)" [disabled]="processing === v.id"
            class="rounded-xl bg-red-500 px-4 py-2 text-xs font-bold text-white hover:bg-red-600 disabled:opacity-50">
            {{ processing === v.id ? 'Rechazando...' : 'Confirmar rechazo' }}
          </button>
          <button (click)="cancelReject()" type="button"
            class="rounded-xl border border-gray-300 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
            Cancelar
          </button>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row">
        <!-- Foto -->
        <div class="h-44 w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 sm:h-auto sm:w-48">
          <img *ngIf="v.photos?.[0]" [src]="imageUrl(v.photos![0])" [alt]="v.name"
            class="h-full w-full object-cover" />
          <div *ngIf="!v.photos?.[0]"
            class="flex h-full min-h-[176px] items-center justify-center text-6xl opacity-20">{{ typeIcon(v.type) }}</div>
          <!-- indicador de fotos extra -->
          <div *ngIf="(v.photos?.length ?? 0) > 1"
            class="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white">
            +{{ (v.photos?.length ?? 1) - 1 }} fotos
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-1 flex-col justify-between p-5 gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white/90">{{ v.name }}</h3>
              <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-white/[0.06]">{{ typeIcon(v.type) }} {{ v.type }}</span>
            </div>
            <p *ngIf="v.provider?.companyName" class="mt-0.5 text-xs text-gray-400">Proveedor: {{ v.provider?.companyName }}</p>

            <div class="mt-2 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>\u{1F465} {{ v.capacity }} pax</span>
              <span *ngIf="v.rooms">\u{1F6CF}\uFE0F {{ v.rooms }} cabinas</span>
              <span *ngIf="v.bathrooms">\u{1F6BF} {{ v.bathrooms }} ba\xF1os</span>
              <span *ngIf="v.year">\u{1F4C5} {{ v.year }}</span>
              <span *ngIf="v.pricePerDay">\${{ v.pricePerDay }}/d\xEDa</span>
            </div>

            <p *ngIf="v.description" class="mt-2 text-xs text-gray-400 line-clamp-2">{{ v.description }}</p>

            <div *ngIf="v.amenities?.length" class="mt-2 flex flex-wrap gap-1">
              <span *ngFor="let a of (v.amenities ?? []).slice(0, 5)"
                class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 dark:bg-white/[0.06]">{{ amenityLabel(a) }}</span>
              <span *ngIf="(v.amenities?.length ?? 0) > 5"
                class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-400 dark:bg-white/[0.06]">
                +{{ (v.amenities?.length ?? 0) - 5 }} m\xE1s
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <!-- Ver detalle -->
            <button (click)="openDetail(v)"
              class="rounded-xl border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-colors dark:border-brand-500/40 dark:text-brand-400">
              \u{1F50D} Ver detalle completo
            </button>
            <button (click)="approve(v)" [disabled]="processing === v.id || rejectingId === v.id"
              class="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-600 disabled:opacity-50 transition-colors">
              {{ processing === v.id ? 'Aprobando...' : '\u2713 Aprobar' }}
            </button>
            <button (click)="openReject(v)" [disabled]="processing === v.id"
              class="rounded-xl border border-red-300 px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 disabled:opacity-50 transition-colors dark:border-red-500/40 dark:text-red-400">
              \u2717 Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL DETALLE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="detailVessel"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
  (click)="closeDetail()">

  <div class="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
    (click)="$event.stopPropagation()">

    <!-- Header modal -->
    <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
      <div>
        <h2 class="text-lg font-bold text-gray-800 dark:text-white/90">
          {{ typeIcon(detailVessel.type) }} {{ detailVessel.name }}
        </h2>
        <p class="text-xs text-gray-400">{{ detailVessel.type }} \xB7 Proveedor: {{ detailVessel.provider?.companyName ?? '\u2014' }}</p>
      </div>
      <button (click)="closeDetail()" class="text-gray-400 hover:text-gray-600 dark:hover:text-white transition text-xl">\u2715</button>
    </div>

    <!-- Contenido scrollable -->
    <div class="flex-1 overflow-y-auto">

      <!-- Galer\xEDa de fotos -->
      <div class="relative bg-gray-900" style="height: 280px;">
        <ng-container *ngIf="detailVessel.photos?.length; else noPhotos">
          <img [src]="imageUrl(detailVessel.photos![activePhotoIndex])" [alt]="detailVessel.name"
            class="h-full w-full object-contain" />

          <!-- Navegaci\xF3n galer\xEDa -->
          <button *ngIf="(detailVessel.photos?.length ?? 0) > 1"
            (click)="prevPhoto()"
            class="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition">
            \u2039
          </button>
          <button *ngIf="(detailVessel.photos?.length ?? 0) > 1"
            (click)="nextPhoto()"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition">
            \u203A
          </button>

          <!-- Contador -->
          <div class="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
            {{ activePhotoIndex + 1 }} / {{ detailVessel.photos!.length }}
          </div>

          <!-- Miniaturas -->
          <div *ngIf="(detailVessel.photos?.length ?? 0) > 1"
            class="absolute bottom-3 left-3 flex gap-1.5">
            <button *ngFor="let p of detailVessel.photos; let i = index"
              (click)="activePhotoIndex = i"
              class="h-8 w-8 overflow-hidden rounded border-2 transition"
              [class.border-white]="activePhotoIndex === i"
              [class.border-transparent]="activePhotoIndex !== i">
              <img [src]="imageUrl(p)" class="h-full w-full object-cover" />
            </button>
          </div>
        </ng-container>
        <ng-template #noPhotos>
          <div class="flex h-full items-center justify-center text-8xl opacity-20">{{ typeIcon(detailVessel.type) }}</div>
        </ng-template>
      </div>

      <div class="p-6 space-y-5">

        <!-- Ficha t\xE9cnica -->
        <div>
          <h3 class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Ficha t\xE9cnica</h3>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">Capacidad</p>
              <p class="mt-0.5 text-xl font-bold text-gray-800 dark:text-white/90">{{ detailVessel.capacity }}</p>
              <p class="text-[10px] text-gray-400">pasajeros</p>
            </div>
            <div *ngIf="detailVessel.rooms" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">Cabinas</p>
              <p class="mt-0.5 text-xl font-bold text-gray-800 dark:text-white/90">{{ detailVessel.rooms }}</p>
              <p class="text-[10px] text-gray-400">habitaciones</p>
            </div>
            <div *ngIf="detailVessel.bathrooms" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">Ba\xF1os</p>
              <p class="mt-0.5 text-xl font-bold text-gray-800 dark:text-white/90">{{ detailVessel.bathrooms }}</p>
              <p class="text-[10px] text-gray-400">unidades</p>
            </div>
            <div *ngIf="detailVessel.year" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">A\xF1o</p>
              <p class="mt-0.5 text-xl font-bold text-gray-800 dark:text-white/90">{{ detailVessel.year }}</p>
            </div>
            <div *ngIf="detailVessel.pricePerDay" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">Precio</p>
              <p class="mt-0.5 text-xl font-bold text-gray-800 dark:text-white/90">\${{ detailVessel.pricePerDay }}</p>
              <p class="text-[10px] text-gray-400">por d\xEDa</p>
            </div>
            <div *ngIf="detailVessel.licensePlate" class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-white/[0.03]">
              <p class="text-xs text-gray-400">Matr\xEDcula</p>
              <p class="mt-0.5 text-sm font-bold text-gray-800 dark:text-white/90">{{ detailVessel.licensePlate }}</p>
            </div>
          </div>
        </div>

        <!-- Descripci\xF3n -->
        <div *ngIf="detailVessel.description">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Descripci\xF3n</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ detailVessel.description }}</p>
        </div>

        <!-- Amenidades -->
        <div *ngIf="detailVessel.amenities?.length">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Amenidades ({{ detailVessel.amenities!.length }})
          </h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let a of detailVessel.amenities"
              class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-white/[0.04] dark:text-gray-300">
              {{ amenityLabel(a) }}
            </span>
          </div>
        </div>

        <!-- Proveedor -->
        <div *ngIf="detailVessel.provider" class="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Datos del proveedor</h3>
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-gray-600 dark:text-gray-400">
            <div *ngIf="detailVessel.provider.companyName">
              <span class="font-medium text-gray-700 dark:text-gray-300">Empresa:</span> {{ detailVessel.provider.companyName }}
            </div>
            <div *ngIf="detailVessel.provider.pagoMovilPhone">
              <span class="font-medium text-gray-700 dark:text-gray-300">\u{1F4F1} Pago M\xF3vil:</span> {{ detailVessel.provider.pagoMovilPhone }}
            </div>
            <div *ngIf="detailVessel.provider.zelleEmail">
              <span class="font-medium text-gray-700 dark:text-gray-300">\u{1F4B8} Zelle:</span> {{ detailVessel.provider.zelleEmail }}
            </div>
            <div *ngIf="detailVessel.provider.bankName">
              <span class="font-medium text-gray-700 dark:text-gray-300">\u{1F3E6} Banco:</span> {{ detailVessel.provider.bankName }}
            </div>
            <div *ngIf="detailVessel.provider.bankAccount">
              <span class="font-medium text-gray-700 dark:text-gray-300">Cuenta:</span> {{ detailVessel.provider.bankAccount }}
            </div>
          </div>
        </div>

        <!-- Panel rechazo dentro del modal -->
        <div *ngIf="rejectingId === detailVessel.id"
          class="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/30 dark:bg-red-500/10">
          <p class="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">Motivo del rechazo (opcional)</p>
          <textarea [(ngModel)]="rejectionReason" rows="3"
            placeholder="Ej: Las fotos no son claras, falta documentaci\xF3n oficial..."
            class="w-full rounded-xl border border-red-200 bg-white px-3 py-2 text-sm outline-none focus:border-red-400 dark:border-red-500/30 dark:bg-slate-800 dark:text-white resize-none"></textarea>
          <div class="mt-3 flex gap-2">
            <button (click)="confirmReject(detailVessel)" [disabled]="processing === detailVessel.id"
              class="rounded-xl bg-red-500 px-5 py-2 text-sm font-bold text-white hover:bg-red-600 disabled:opacity-50">
              {{ processing === detailVessel.id ? 'Rechazando...' : 'Confirmar rechazo' }}
            </button>
            <button (click)="cancelReject()"
              class="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
              Cancelar
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer de acciones -->
    <div class="flex items-center justify-end gap-3 border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <button (click)="closeDetail()"
        class="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
        Cerrar
      </button>
      <button *ngIf="rejectingId !== detailVessel.id"
        (click)="openReject(detailVessel)"
        [disabled]="processing === detailVessel.id"
        class="rounded-xl border border-red-300 px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 disabled:opacity-50 dark:border-red-500/40 dark:text-red-400">
        \u2717 Rechazar
      </button>
      <button (click)="approve(detailVessel)"
        [disabled]="processing === detailVessel.id || rejectingId === detailVessel.id"
        class="rounded-xl bg-green-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-600 disabled:opacity-50">
        {{ processing === detailVessel.id ? 'Aprobando...' : '\u2713 Aprobar embarcaci\xF3n' }}
      </button>
    </div>

  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificarEmbarcacionesComponent, { className: "VerificarEmbarcacionesComponent", filePath: "src/app/pages/embarcaciones/pages/verificar-embarcaciones/verificar-embarcaciones.component.ts", lineNumber: 24 });
})();
export {
  VerificarEmbarcacionesComponent
};
//# sourceMappingURL=chunk-ZNFHFK2S.js.map
