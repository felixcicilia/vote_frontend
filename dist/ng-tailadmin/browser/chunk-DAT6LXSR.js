import {
  ImageUploadComponent
} from "./chunk-MF5I77NK.js";
import "./chunk-PFOQZ4L6.js";
import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => ["ACTIVE", "MAINTENANCE", "INACTIVE"];
var _c2 = () => ["APPROVED", "PENDING", "REJECTED"];
var arrowFn0 = (ctx, view) => (p) => !!p;
function EditarEmbarcacionComponent_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 \u{1F3E2} ", ctx_r0.vessel.provider.companyName);
  }
}
function EditarEmbarcacionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h1", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275template(5, EditarEmbarcacionComponent_div_4_span_5_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.typeIcon(ctx_r0.vessel.type), " ", ctx_r0.vessel.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Ficha de embarcaci\xF3n \xB7 ID #", ctx_r0.vessel.id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vessel.provider == null ? null : ctx_r0.vessel.provider.companyName);
  }
}
function EditarEmbarcacionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Cargando\u2026");
    \u0275\u0275elementEnd();
  }
}
function EditarEmbarcacionComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function EditarEmbarcacionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, EditarEmbarcacionComponent_div_6_div_1_Template, 1, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_button_17_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.newStatus = s_r4);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.newStatus === s_r4 ? s_r4 === "ACTIVE" ? "border-green-500 bg-green-500 text-white" : s_r4 === "MAINTENANCE" ? "border-amber-500 bg-amber-500 text-white" : "border-gray-500 bg-gray-500 text-white" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4 === "ACTIVE" ? "\u{1F7E2} Activa" : s_r4 === "MAINTENANCE" ? "\u{1F7E1} Mantenimiento" : "\u26AB Inactiva", " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_button_26_Template_button_click_0_listener() {
      const v_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.newVerifStatus = v_r6);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.newVerifStatus === v_r6 ? v_r6 === "APPROVED" ? "border-green-500 bg-green-500 text-white" : v_r6 === "REJECTED" ? "border-red-500 bg-red-500 text-white" : "border-amber-500 bg-amber-500 text-white" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r6 === "APPROVED" ? "\u2713 Aprobar" : v_r6 === "REJECTED" ? "\u2717 Rechazar" : "\u23F3 Pendiente", " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_31_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Motivo anterior: ", ctx_r0.vessel.rejectionReason, " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 65);
    \u0275\u0275text(2, "Motivo del rechazo (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EditarEmbarcacionComponent_ng_container_7_div_31_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectionReason, $event) || (ctx_r0.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4, "          ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EditarEmbarcacionComponent_ng_container_7_div_31_p_5_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectionReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.vessel.rejectionReason);
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_38_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_div_38_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.activePhotoIdx = (ctx_r0.activePhotoIdx - 1 + ctx_r0.photos.filter((p) => !!p).length) % ctx_r0.photos.filter((p) => !!p).length);
    });
    \u0275\u0275text(1, "\u2039");
    \u0275\u0275elementEnd();
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_38_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_div_38_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.activePhotoIdx = (ctx_r0.activePhotoIdx + 1) % ctx_r0.photos.filter((p) => !!p).length);
    });
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275template(2, EditarEmbarcacionComponent_ng_container_7_div_38_button_2_Template, 2, 0, "button", 71)(3, EditarEmbarcacionComponent_ng_container_7_div_38_button_3_Template, 2, 0, "button", 72);
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl(ctx_r0.photos[ctx_r0.activePhotoIdx]), \u0275\u0275sanitizeUrl)("alt", ctx_r0.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.photos.filter(\u0275\u0275arrowFunction(6, arrowFn0, ctx)).length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.photos.filter(\u0275\u0275arrowFunction(7, arrowFn0, ctx)).length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.activePhotoIdx + 1, " / ", ctx_r0.photos.filter(\u0275\u0275arrowFunction(8, arrowFn0, ctx)).length, " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "app-image-upload", 77);
    \u0275\u0275listener("uploaded", function EditarEmbarcacionComponent_ng_container_7_div_40_Template_app_image_upload_uploaded_1_listener($event) {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPhotoUploaded($event, i_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 78);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_div_40_Template_button_click_2_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePhoto(i_r11));
    });
    \u0275\u0275text(3, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("currentUrl", photo_r12 || null);
  }
}
function EditarEmbarcacionComponent_ng_container_7_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_button_104_Template_button_click_0_listener() {
      const a_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAmenity(a_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.selectedAmenities.includes(a_r14) ? "border-brand-400 bg-brand-500 text-white" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.amenityLabels[a_r14], " ");
  }
}
function EditarEmbarcacionComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EditarEmbarcacionComponent_ng_container_7_div_1_Template, 2, 1, "div", 12)(2, EditarEmbarcacionComponent_ng_container_7_div_2_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h2", 17);
    \u0275\u0275text(9, "Panel de control maestro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 18);
    \u0275\u0275text(11, "Estado operativo y verificaci\xF3n \u2014 solo t\xFA puedes modificar esto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 19)(13, "div")(14, "label", 20);
    \u0275\u0275text(15, "Estado operativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275template(17, EditarEmbarcacionComponent_ng_container_7_button_17_Template, 2, 2, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 23);
    \u0275\u0275text(19, " Actual: ");
    \u0275\u0275elementStart(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "label", 20);
    \u0275\u0275text(24, "Verificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275template(26, EditarEmbarcacionComponent_ng_container_7_button_26_Template, 2, 2, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 23);
    \u0275\u0275text(28, " Actual: ");
    \u0275\u0275elementStart(29, "span", 24);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, EditarEmbarcacionComponent_ng_container_7_div_31_Template, 6, 2, "div", 25);
    \u0275\u0275elementStart(32, "div", 26)(33, "button", 27);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveStatus());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 28)(36, "h2", 29);
    \u0275\u0275text(37, "\u{1F4F7} Fotos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EditarEmbarcacionComponent_ng_container_7_div_38_Template, 6, 9, "div", 30);
    \u0275\u0275elementStart(39, "div", 31);
    \u0275\u0275template(40, EditarEmbarcacionComponent_ng_container_7_div_40_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(41, "button", 33);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_ng_container_7_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addPhotoSlot());
    });
    \u0275\u0275text(42, " + A\xF1adir ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "form", 34);
    \u0275\u0275listener("ngSubmit", function EditarEmbarcacionComponent_ng_container_7_Template_form_ngSubmit_43_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(44, "h2", 35);
    \u0275\u0275text(45, "\u{1F4CB} Datos de la embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 37)(48, "label", 38);
    \u0275\u0275text(49, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div")(52, "label", 38);
    \u0275\u0275text(53, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 40)(55, "option", 41);
    \u0275\u0275text(56, "\u{1F6A4} Lancha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 42);
    \u0275\u0275text(58, "\u26F5 Yate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 43);
    \u0275\u0275text(60, "\u{1FAB8} Catamar\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 44);
    \u0275\u0275text(62, "\u{1F6F6} Bote");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div")(64, "label", 38);
    \u0275\u0275text(65, "Capacidad (pax) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div")(68, "label", 38);
    \u0275\u0275text(69, "Cabinas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div")(72, "label", 38);
    \u0275\u0275text(73, "Ba\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div")(76, "label", 38);
    \u0275\u0275text(77, "Precio por d\xEDa ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div")(80, "label", 38);
    \u0275\u0275text(81, "Precio por persona ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div")(84, "label", 38);
    \u0275\u0275text(85, "Matr\xEDcula");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div")(88, "label", 38);
    \u0275\u0275text(89, "A\xF1o de fabricaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 52);
    \u0275\u0275element(92, "input", 53);
    \u0275\u0275elementStart(93, "label", 54);
    \u0275\u0275text(94, " Disponible para reservas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 55)(96, "label", 38);
    \u0275\u0275text(97, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "textarea", 56);
    \u0275\u0275text(99, "          ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 57)(101, "label", 20);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 21);
    \u0275\u0275template(104, EditarEmbarcacionComponent_ng_container_7_button_104_Template, 2, 2, "button", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 59)(106, "button", 60);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "a", 61);
    \u0275\u0275text(109, " Cancelar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(27, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(ctx_r0.vessel.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(ctx_r0.vessel.status));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(28, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.verifClass(ctx_r0.vessel.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.verifLabel(ctx_r0.vessel.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newVerifStatus === "REJECTED");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingStatus ? "Guardando\u2026" : "\u{1F4BE} Guardar estado y verificaci\xF3n", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.photos.filter(\u0275\u0275arrowFunction(26, arrowFn0, ctx)).length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.photos);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r0.isInvalid("name"))("border-gray-200", !ctx_r0.isInvalid("name"))("dark:border-red-500", ctx_r0.isInvalid("name"))("dark:border-gray-700", !ctx_r0.isInvalid("name"));
    \u0275\u0275advance(52);
    \u0275\u0275textInterpolate1(" Amenidades (", ctx_r0.selectedAmenities.length, " seleccionadas) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.allAmenities);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Guardando\u2026" : "\u{1F4BE} Guardar datos", " ");
  }
}
var AMENITY_LABELS = {
  WIFI: "\u{1F4F6} WiFi",
  SOUND_SYSTEM: "\u{1F50A} Sonido",
  AIR_CONDITIONING: "\u2744\uFE0F A/C",
  KITCHEN: "\u{1F373} Cocina",
  BATHROOM: "\u{1F6BF} Ba\xF1o",
  REFRIGERATOR: "\u{1F9CA} Nevera",
  DRINKING_WATER: "\u{1F4A7} Agua potable",
  SNORKELING: "\u{1F93F} Snorkel",
  FISHING_EQUIPMENT: "\u{1F3A3} Pesca",
  KAYAK: "\u{1F6F6} Kayak",
  LIFE_JACKETS: "\u{1F9BA} Chalecos",
  FIRST_AID_KIT: "\u{1FA7A} Botiqu\xEDn",
  SUN_DECK: "\u2600\uFE0F Cubierta sol",
  DINING_AREA: "\u{1F37D}\uFE0F Comedor",
  CAPTAIN_INCLUDED: "\u{1F468}\u200D\u2708\uFE0F Capit\xE1n",
  FUEL_INCLUDED: "\u26FD Combustible",
  PARKING: "\u{1F17F}\uFE0F Estacionamiento",
  GENERATOR: "\u26A1 Generador"
};
var ALL_AMENITIES = Object.keys(AMENITY_LABELS);
var EditarEmbarcacionComponent = class _EditarEmbarcacionComponent {
  fb = inject(FormBuilder);
  service = inject(EmbarcacionesService);
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);
  amenityLabels = AMENITY_LABELS;
  allAmenities = ALL_AMENITIES;
  id;
  vessel = null;
  loading = false;
  saving = false;
  savingStatus = false;
  errorMessage = "";
  successMessage = "";
  photos = [];
  selectedAmenities = [];
  activePhotoIdx = 0;
  // Campos de verificación / estado (panel master)
  newVerifStatus = "PENDING";
  newStatus = "ACTIVE";
  rejectionReason = "";
  showRejectInput = false;
  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    type: ["LANCHA", Validators.required],
    capacity: [1, [Validators.required, Validators.min(1)]],
    rooms: [null],
    bathrooms: [null],
    description: [""],
    pricePerDay: [null],
    pricePerPerson: [null],
    licensePlate: [""],
    year: [null],
    isAvailable: [true]
  });
  get apiBase() {
    return environment.apiUrl.replace("/api", "");
  }
  imageUrl(p) {
    return p?.startsWith("http") ? p : `${this.apiBase}${p}`;
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.load();
  }
  load() {
    this.loading = true;
    this.service.getById(this.id).subscribe({
      next: (e) => {
        this.vessel = e;
        this.newVerifStatus = e.verificationStatus;
        this.newStatus = e.status;
        this.rejectionReason = e.rejectionReason ?? "";
        this.photos = [...e.photos ?? []];
        this.selectedAmenities = [...e.amenities ?? []];
        this.form.patchValue({
          name: e.name,
          type: e.type,
          capacity: e.capacity,
          rooms: e.rooms ?? null,
          bathrooms: e.bathrooms ?? null,
          description: e.description ?? "",
          pricePerDay: e.pricePerDay ?? null,
          pricePerPerson: e.pricePerPerson ?? null,
          licensePlate: e.licensePlate ?? "",
          year: e.year ?? null,
          isAvailable: e.isAvailable
        });
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la embarcaci\xF3n.";
        this.loading = false;
      }
    });
  }
  // ── Amenidades ─────────────────────────────────────────────────────────────
  toggleAmenity(a) {
    if (this.selectedAmenities.includes(a)) {
      this.selectedAmenities = this.selectedAmenities.filter((x) => x !== a);
    } else {
      this.selectedAmenities = [...this.selectedAmenities, a];
    }
  }
  // ── Fotos ──────────────────────────────────────────────────────────────────
  onPhotoUploaded(url, index) {
    if (url) {
      this.photos[index] = url;
    } else {
      this.photos.splice(index, 1);
    }
  }
  addPhotoSlot() {
    this.photos.push("");
  }
  removePhoto(i) {
    this.photos.splice(i, 1);
    if (this.activePhotoIdx >= this.photos.length)
      this.activePhotoIdx = 0;
  }
  // ── Guardar datos ──────────────────────────────────────────────────────────
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const v = this.form.value;
    this.service.update(this.id, {
      name: v.name,
      type: v.type,
      capacity: Number(v.capacity),
      rooms: v.rooms ? Number(v.rooms) : void 0,
      bathrooms: v.bathrooms ? Number(v.bathrooms) : void 0,
      description: v.description || void 0,
      photos: this.photos.filter((p) => !!p),
      amenities: this.selectedAmenities,
      pricePerDay: v.pricePerDay ? Number(v.pricePerDay) : void 0,
      pricePerPerson: v.pricePerPerson ? Number(v.pricePerPerson) : void 0,
      licensePlate: v.licensePlate || void 0,
      year: v.year ? Number(v.year) : void 0,
      isAvailable: v.isAvailable
    }).subscribe({
      next: () => {
        this.successMessage = "\u2705 Cambios guardados correctamente.";
        this.saving = false;
        this.load();
      },
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Error al guardar.";
        this.saving = false;
      }
    });
  }
  // ── Panel de estado maestro ────────────────────────────────────────────────
  saveStatus() {
    this.savingStatus = true;
    this.errorMessage = "";
    const payload = {
      status: this.newStatus,
      verificationStatus: this.newVerifStatus,
      rejectionReason: this.newVerifStatus === "REJECTED" ? this.rejectionReason || void 0 : void 0
    };
    this.service.update(this.id, payload).subscribe({
      next: (updated) => {
        const data = updated?.data ?? updated;
        if (this.vessel) {
          this.vessel.status = data.status ?? this.newStatus;
          this.vessel.verificationStatus = data.verificationStatus ?? this.newVerifStatus;
          this.vessel.rejectionReason = data.rejectionReason ?? null;
        }
        this.savingStatus = false;
        this.successMessage = "\u2705 Estado actualizado correctamente.";
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Error.";
        this.savingStatus = false;
      }
    });
  }
  isInvalid(f) {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }
  // ── Labels ─────────────────────────────────────────────────────────────────
  typeIcon(t) {
    return { LANCHA: "\u{1F6A4}", YATE: "\u26F5", CATAMARAN: "\u{1FAB8}", BOTE: "\u{1F6F6}" }[t] ?? "\u{1F6A2}";
  }
  statusLabel(s) {
    return { ACTIVE: "Activa", MAINTENANCE: "En mantenimiento", INACTIVE: "Inactiva" }[s] ?? s;
  }
  statusClass(s) {
    return {
      ACTIVE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      MAINTENANCE: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      INACTIVE: "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400"
    }[s] ?? "";
  }
  verifLabel(s) {
    return { APPROVED: "\u2713 Aprobada", REJECTED: "\u2717 Rechazada", PENDING: "\u23F3 Pendiente" }[s] ?? s;
  }
  verifClass(s) {
    return {
      APPROVED: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      REJECTED: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
    }[s] ?? "";
  }
  static \u0275fac = function EditarEmbarcacionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarEmbarcacionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarEmbarcacionComponent, selectors: [["app-editar-embarcacion"]], decls: 8, vars: 4, consts: [[1, "space-y-6"], [1, "flex", "items-center", "gap-3"], ["routerLink", "/embarcaciones", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "border", "border-gray-200", "text-gray-500", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "dark:hover:bg-white/[0.04]"], [4, "ngIf"], ["class", "text-sm text-gray-400 animate-pulse", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "text-sm", "text-gray-400", "animate-pulse"], [1, "space-y-4"], ["class", "h-32 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]", 4, "ngFor", "ngForOf"], [1, "h-32", "animate-pulse", "rounded-2xl", "bg-gray-100", "dark:bg-white/[0.04]"], ["class", "rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], [1, "overflow-hidden", "rounded-2xl", "border-2", "border-brand-200", "bg-white", "shadow-sm", "dark:border-brand-500/30", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "gap-3", "border-b", "border-brand-100", "bg-brand-50", "px-6", "py-4", "dark:border-brand-500/20", "dark:bg-brand-500/5"], [1, "text-xl"], [1, "font-bold", "text-brand-700", "dark:text-brand-300"], [1, "text-xs", "text-brand-500", "dark:text-brand-400"], [1, "grid", "gap-6", "p-6", "md:grid-cols-2"], [1, "mb-3", "block", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "flex", "flex-wrap", "gap-2"], ["class", "rounded-xl border px-4 py-2.5 text-sm font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-2", "text-xs", "text-gray-400"], [1, "font-medium", "rounded-full", "px-2", "py-0.5", 3, "ngClass"], ["class", "md:col-span-2", 4, "ngIf"], [1, "md:col-span-2"], [1, "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", 3, "click", "disabled"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mb-4", "text-sm", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], ["class", "relative mb-4 h-56 overflow-hidden rounded-xl bg-gray-900", 4, "ngIf"], [1, "grid", "gap-3", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4"], ["class", "relative", 4, "ngFor", "ngForOf"], [1, "flex", "h-24", "items-center", "justify-center", "rounded-xl", "border-2", "border-dashed", "border-gray-200", "text-gray-400", "hover:border-brand-400", "hover:text-brand-500", "dark:border-gray-700", "transition", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "mb-5", "text-sm", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "gap-5", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "lg:col-span-2"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "text-gray-500"], ["formControlName", "name", "type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "type", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["value", "LANCHA"], ["value", "YATE"], ["value", "CATAMARAN"], ["value", "BOTE"], ["formControlName", "capacity", "type", "number", "min", "1", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "rooms", "type", "number", "min", "0", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "bathrooms", "type", "number", "min", "0", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "pricePerDay", "type", "number", "min", "0", "step", "0.01", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "pricePerPerson", "type", "number", "min", "0", "step", "0.01", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "licensePlate", "type", "text", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], ["formControlName", "year", "type", "number", "min", "1980", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], [1, "flex", "items-center", "gap-3", "pt-5"], ["type", "checkbox", "formControlName", "isAvailable", "id", "isAvail", 1, "h-5", "w-5", "rounded", "accent-brand-500"], ["for", "isAvail", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "cursor-pointer"], [1, "sm:col-span-2", "lg:col-span-3"], ["formControlName", "description", "rows", "3", 1, "w-full", "resize-none", "rounded-xl", "border", "border-gray-200", "px-4", "py-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white"], [1, "mt-6"], ["type", "button", "class", "rounded-full border px-3 py-1.5 text-xs font-medium transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-6", "flex", "items-center", "gap-3"], ["type", "submit", 1, "rounded-xl", "bg-brand-500", "px-8", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", 3, "disabled"], ["routerLink", "/embarcaciones", 1, "rounded-xl", "border", "border-gray-200", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "transition"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-3", "text-sm", "text-red-600", "dark:border-red-500/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "p-3", "text-sm", "text-green-700", "dark:border-green-500/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "rounded-xl", "border", "px-4", "py-2.5", "text-sm", "font-semibold", "transition", 3, "click", "ngClass"], [1, "mb-2", "block", "text-xs", "font-semibold", "text-gray-500"], ["rows", "2", "placeholder", "Ej: Las fotos no son claras, falta documentaci\xF3n\u2026", 1, "w-full", "resize-none", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "ngModel"], ["class", "mt-1 text-xs text-gray-400", 4, "ngIf"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "relative", "mb-4", "h-56", "overflow-hidden", "rounded-xl", "bg-gray-900"], [1, "h-full", "w-full", "object-contain", 3, "src", "alt"], ["class", "absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70", 3, "click", 4, "ngIf"], ["class", "absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70", 3, "click", 4, "ngIf"], [1, "absolute", "bottom-2", "right-2", "rounded-full", "bg-black/50", "px-2", "py-0.5", "text-[10px]", "text-white"], [1, "absolute", "left-2", "top-1/2", "-translate-y-1/2", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", 3, "click"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", 3, "click"], [1, "relative"], [3, "uploaded", "currentUrl"], [1, "absolute", "-right-1", "-top-1", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "bg-red-500", "text-[10px]", "text-white", "hover:bg-red-600", 3, "click"], ["type", "button", 1, "rounded-full", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"]], template: function EditarEmbarcacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, " \u2190 ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, EditarEmbarcacionComponent_div_4_Template, 6, 4, "div", 3)(5, EditarEmbarcacionComponent_div_5_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, EditarEmbarcacionComponent_div_6_Template, 2, 2, "div", 5)(7, EditarEmbarcacionComponent_ng_container_7_Template, 110, 29, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.vessel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessel);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, RouterModule, RouterLink, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarEmbarcacionComponent, [{
    type: Component,
    args: [{ selector: "app-editar-embarcacion", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, ImageUploadComponent], template: `<div class="space-y-6">

  <!-- Breadcrumb / Header -->
  <div class="flex items-center gap-3">
    <a routerLink="/embarcaciones"
      class="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.04]">
      \u2190
    </a>
    <div *ngIf="vessel">
      <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">
        {{ typeIcon(vessel.type) }} {{ vessel.name }}
      </h1>
      <p class="text-xs text-gray-400">
        Ficha de embarcaci\xF3n \xB7 ID #{{ vessel.id }}
        <span *ngIf="vessel.provider?.companyName"> \xB7 \u{1F3E2} {{ vessel.provider!.companyName }}</span>
      </p>
    </div>
    <div *ngIf="loading" class="text-sm text-gray-400 animate-pulse">Cargando\u2026</div>
  </div>

  <div *ngIf="loading" class="space-y-4">
    <div *ngFor="let _ of [1,2,3]" class="h-32 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]"></div>
  </div>

  <ng-container *ngIf="!loading && vessel">

    <!-- Alertas -->
    <div *ngIf="errorMessage" class="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
      {{ errorMessage }}
    </div>
    <div *ngIf="successMessage" class="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400">
      {{ successMessage }}
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         PANEL MASTER \u2014 Estado y Verificaci\xF3n
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="overflow-hidden rounded-2xl border-2 border-brand-200 bg-white shadow-sm dark:border-brand-500/30 dark:bg-white/[0.03]">
      <div class="flex items-center gap-3 border-b border-brand-100 bg-brand-50 px-6 py-4 dark:border-brand-500/20 dark:bg-brand-500/5">
        <span class="text-xl">\u{1F6E1}\uFE0F</span>
        <div>
          <h2 class="font-bold text-brand-700 dark:text-brand-300">Panel de control maestro</h2>
          <p class="text-xs text-brand-500 dark:text-brand-400">Estado operativo y verificaci\xF3n \u2014 solo t\xFA puedes modificar esto</p>
        </div>
      </div>

      <div class="grid gap-6 p-6 md:grid-cols-2">

        <!-- Estado operativo -->
        <div>
          <label class="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Estado operativo</label>
          <div class="flex flex-wrap gap-2">
            <button *ngFor="let s of ['ACTIVE', 'MAINTENANCE', 'INACTIVE']"
              (click)="newStatus = $any(s)"
              class="rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
              [ngClass]="newStatus === s
                ? (s === 'ACTIVE' ? 'border-green-500 bg-green-500 text-white' : s === 'MAINTENANCE' ? 'border-amber-500 bg-amber-500 text-white' : 'border-gray-500 bg-gray-500 text-white')
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400'">
              {{ s === 'ACTIVE' ? '\u{1F7E2} Activa' : s === 'MAINTENANCE' ? '\u{1F7E1} Mantenimiento' : '\u26AB Inactiva' }}
            </button>
          </div>
          <p class="mt-2 text-xs text-gray-400">
            Actual: <span class="font-medium rounded-full px-2 py-0.5" [ngClass]="statusClass(vessel.status)">{{ statusLabel(vessel.status) }}</span>
          </p>
        </div>

        <!-- Verificaci\xF3n -->
        <div>
          <label class="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Verificaci\xF3n</label>
          <div class="flex flex-wrap gap-2">
            <button *ngFor="let v of ['APPROVED', 'PENDING', 'REJECTED']"
              (click)="newVerifStatus = $any(v)"
              class="rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
              [ngClass]="newVerifStatus === v
                ? (v === 'APPROVED' ? 'border-green-500 bg-green-500 text-white' : v === 'REJECTED' ? 'border-red-500 bg-red-500 text-white' : 'border-amber-500 bg-amber-500 text-white')
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400'">
              {{ v === 'APPROVED' ? '\u2713 Aprobar' : v === 'REJECTED' ? '\u2717 Rechazar' : '\u23F3 Pendiente' }}
            </button>
          </div>
          <p class="mt-2 text-xs text-gray-400">
            Actual: <span class="font-medium rounded-full px-2 py-0.5" [ngClass]="verifClass(vessel.verificationStatus)">{{ verifLabel(vessel.verificationStatus) }}</span>
          </p>
        </div>

        <!-- Motivo rechazo -->
        <div *ngIf="newVerifStatus === 'REJECTED'" class="md:col-span-2">
          <label class="mb-2 block text-xs font-semibold text-gray-500">Motivo del rechazo (opcional)</label>
          <textarea [(ngModel)]="rejectionReason" rows="2"
            placeholder="Ej: Las fotos no son claras, falta documentaci\xF3n\u2026"
            class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          </textarea>
          <p *ngIf="vessel.rejectionReason" class="mt-1 text-xs text-gray-400">
            Motivo anterior: {{ vessel.rejectionReason }}
          </p>
        </div>

        <!-- Bot\xF3n guardar estado -->
        <div class="md:col-span-2">
          <button (click)="saveStatus()" [disabled]="savingStatus"
            class="rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition">
            {{ savingStatus ? 'Guardando\u2026' : '\u{1F4BE} Guardar estado y verificaci\xF3n' }}
          </button>
        </div>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         GALER\xCDA DE FOTOS
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <h2 class="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">\u{1F4F7} Fotos</h2>

      <!-- Viewer -->
      <div *ngIf="photos.filter(p => !!p).length > 0"
        class="relative mb-4 h-56 overflow-hidden rounded-xl bg-gray-900">
        <img [src]="imageUrl(photos[activePhotoIdx])" [alt]="vessel.name"
          class="h-full w-full object-contain" />
        <button *ngIf="photos.filter(p=>!!p).length > 1"
          (click)="activePhotoIdx = (activePhotoIdx - 1 + photos.filter(p=>!!p).length) % photos.filter(p=>!!p).length"
          class="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">\u2039</button>
        <button *ngIf="photos.filter(p=>!!p).length > 1"
          (click)="activePhotoIdx = (activePhotoIdx + 1) % photos.filter(p=>!!p).length"
          class="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">\u203A</button>
        <div class="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white">
          {{ activePhotoIdx + 1 }} / {{ photos.filter(p => !!p).length }}
        </div>
      </div>

      <!-- Slots de carga -->
      <div class="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div *ngFor="let photo of photos; let i = index" class="relative">
          <app-image-upload
            [currentUrl]="photo || null"
            (uploaded)="onPhotoUploaded($event, i)">
          </app-image-upload>
          <button (click)="removePhoto(i)"
            class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white hover:bg-red-600">
            \xD7
          </button>
        </div>
        <button (click)="addPhotoSlot()"
          class="flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-brand-400 hover:text-brand-500 dark:border-gray-700 transition">
          + A\xF1adir
        </button>
      </div>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         FORMULARIO DATOS
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <form [formGroup]="form" (ngSubmit)="submit()"
      class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

      <h2 class="mb-5 text-sm font-bold uppercase tracking-widest text-gray-400">\u{1F4CB} Datos de la embarcaci\xF3n</h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Nombre -->
        <div class="lg:col-span-2">
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Nombre *</label>
          <input formControlName="name" type="text"
            class="h-11 w-full rounded-xl border px-4 text-sm outline-none focus:border-brand-500 dark:bg-gray-800 dark:text-white"
            [class.border-red-400]="isInvalid('name')" [class.border-gray-200]="!isInvalid('name')"
            [class.dark:border-red-500]="isInvalid('name')" [class.dark:border-gray-700]="!isInvalid('name')" />
        </div>

        <!-- Tipo -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Tipo *</label>
          <select formControlName="type"
            class="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <option value="LANCHA">\u{1F6A4} Lancha</option>
            <option value="YATE">\u26F5 Yate</option>
            <option value="CATAMARAN">\u{1FAB8} Catamar\xE1n</option>
            <option value="BOTE">\u{1F6F6} Bote</option>
          </select>
        </div>

        <!-- Capacidad -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Capacidad (pax) *</label>
          <input formControlName="capacity" type="number" min="1"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Cabinas -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Cabinas</label>
          <input formControlName="rooms" type="number" min="0"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Ba\xF1os -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Ba\xF1os</label>
          <input formControlName="bathrooms" type="number" min="0"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Precio/d\xEDa -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Precio por d\xEDa ($)</label>
          <input formControlName="pricePerDay" type="number" min="0" step="0.01"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Precio/persona -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Precio por persona ($)</label>
          <input formControlName="pricePerPerson" type="number" min="0" step="0.01"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Matr\xEDcula -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Matr\xEDcula</label>
          <input formControlName="licensePlate" type="text"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- A\xF1o -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">A\xF1o de fabricaci\xF3n</label>
          <input formControlName="year" type="number" min="1980"
            class="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>

        <!-- Disponibilidad -->
        <div class="flex items-center gap-3 pt-5">
          <input type="checkbox" formControlName="isAvailable" id="isAvail"
            class="h-5 w-5 rounded accent-brand-500" />
          <label for="isAvail" class="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
            Disponible para reservas
          </label>
        </div>

        <!-- Descripci\xF3n -->
        <div class="sm:col-span-2 lg:col-span-3">
          <label class="mb-1.5 block text-xs font-semibold text-gray-500">Descripci\xF3n</label>
          <textarea formControlName="description" rows="3"
            class="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          </textarea>
        </div>
      </div>

      <!-- Amenidades -->
      <div class="mt-6">
        <label class="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">
          Amenidades ({{ selectedAmenities.length }} seleccionadas)
        </label>
        <div class="flex flex-wrap gap-2">
          <button *ngFor="let a of allAmenities" type="button"
            (click)="toggleAmenity(a)"
            class="rounded-full border px-3 py-1.5 text-xs font-medium transition"
            [ngClass]="selectedAmenities.includes(a)
              ? 'border-brand-400 bg-brand-500 text-white'
              : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-400'">
            {{ amenityLabels[a] }}
          </button>
        </div>
      </div>

      <!-- Guardar -->
      <div class="mt-6 flex items-center gap-3">
        <button type="submit" [disabled]="saving || form.invalid"
          class="rounded-xl bg-brand-500 px-8 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition">
          {{ saving ? 'Guardando\u2026' : '\u{1F4BE} Guardar datos' }}
        </button>
        <a routerLink="/embarcaciones"
          class="rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
          Cancelar
        </a>
      </div>
    </form>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarEmbarcacionComponent, { className: "EditarEmbarcacionComponent", filePath: "src/app/pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component.ts", lineNumber: 29 });
})();
export {
  EditarEmbarcacionComponent
};
//# sourceMappingURL=chunk-DAT6LXSR.js.map
