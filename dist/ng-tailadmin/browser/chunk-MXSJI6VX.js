import {
  FilesService,
  ImageUploadComponent
} from "./chunk-CHEEZELV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-X6ED7CSN.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgForOf,
  NgIf,
  environment,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/puntos-salida/lista-puntos-salida.component.ts
var _c0 = () => ["ALL", "MUELLE", "ISLA"];
function ListaPuntosSalidaComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r0.successMessage, " ");
  }
}
function ListaPuntosSalidaComponent_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.errorMessage, " ");
  }
}
function ListaPuntosSalidaComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h2", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, ListaPuntosSalidaComponent_div_11_div_5_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(6, "div", 18)(7, "label", 19);
    \u0275\u0275text(8, "Tipo ");
    \u0275\u0275elementStart(9, "span", 20);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label", 22)(13, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.locationType, $event) || (ctx_r0.form.locationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " \u2693 Muelle (tierra) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 22)(16, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.locationType, $event) || (ctx_r0.form.locationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u{1F3DD}\uFE0F Isla / Cayo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 25)(19, "div", 26)(20, "label", 19);
    \u0275\u0275text(21, "Nombre ");
    \u0275\u0275elementStart(22, "span", 20);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 19);
    \u0275\u0275text(27, "Ciudad ");
    \u0275\u0275elementStart(28, "span", 20);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.city, $event) || (ctx_r0.form.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 19);
    \u0275\u0275text(33, "Estado ");
    \u0275\u0275elementStart(34, "span", 20);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.state, $event) || (ctx_r0.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "label", 19);
    \u0275\u0275text(39, "\xCDcono (emoji)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_11_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.icon, $event) || (ctx_r0.form.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 31)(42, "label", 32);
    \u0275\u0275text(43, " Imagen del lugar ");
    \u0275\u0275elementStart(44, "span", 33);
    \u0275\u0275text(45, "(se mostrar\xE1 en las tarjetas de destino del cliente)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "app-image-upload", 34);
    \u0275\u0275listener("uploaded", function ListaPuntosSalidaComponent_div_11_Template_app_image_upload_uploaded_46_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhotoUploaded($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 35)(48, "button", 36);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_11_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 37);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_11_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(51, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingId ? "Editar punto" : "Nuevo punto de salida", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-brand-500", ctx_r0.form.locationType === "MUELLE")("bg-brand-50", ctx_r0.form.locationType === "MUELLE")("text-brand-700", ctx_r0.form.locationType === "MUELLE")("border-gray-300", ctx_r0.form.locationType !== "MUELLE")("text-gray-500", ctx_r0.form.locationType !== "MUELLE");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.locationType);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-emerald-500", ctx_r0.form.locationType === "ISLA")("bg-emerald-50", ctx_r0.form.locationType === "ISLA")("text-emerald-700", ctx_r0.form.locationType === "ISLA")("border-gray-300", ctx_r0.form.locationType !== "ISLA")("text-gray-500", ctx_r0.form.locationType !== "ISLA");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.locationType);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.city);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.icon);
    \u0275\u0275advance(6);
    \u0275\u0275property("currentUrl", ctx_r0.form.photoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Guardando..." : ctx_r0.editingId ? "Actualizar" : "Crear punto", " ");
  }
}
function ListaPuntosSalidaComponent_div_12_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_12_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.search = "");
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function ListaPuntosSalidaComponent_div_12_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_12_button_8_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filterType = f_r6);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-brand-500", ctx_r0.filterType === f_r6)("text-white", ctx_r0.filterType === f_r6)("bg-gray-100", ctx_r0.filterType !== f_r6)("text-gray-600", ctx_r0.filterType !== f_r6)("dark:bg-gray-800", ctx_r0.filterType !== f_r6)("dark:text-gray-300", ctx_r0.filterType !== f_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r6 === "ALL" ? "\u{1F310} Todos" : f_r6 === "MUELLE" ? "\u2693 Muelles" : "\u{1F3DD}\uFE0F Islas", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.countByType(f_r6), ")");
  }
}
function ListaPuntosSalidaComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "span", 42);
    \u0275\u0275text(4, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ListaPuntosSalidaComponent_div_12_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.search, $event) || (ctx_r0.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ListaPuntosSalidaComponent_div_12_button_6_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275template(8, ListaPuntosSalidaComponent_div_12_button_8_Template, 4, 14, "button", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.search);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
  }
}
function ListaPuntosSalidaComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "Cargando puntos...");
    \u0275\u0275elementEnd()();
  }
}
function ListaPuntosSalidaComponent_div_14_tr_21_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 79);
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.imageUrl(p_r9.photoUrl), \u0275\u0275sanitizeUrl)("alt", p_r9.name);
  }
}
function ListaPuntosSalidaComponent_div_14_tr_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r9.icon || "\u{1F4CD}");
  }
}
function ListaPuntosSalidaComponent_div_14_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 66)(2, "div", 67)(3, "div", 68);
    \u0275\u0275template(4, ListaPuntosSalidaComponent_div_14_tr_21_img_4_Template, 1, 2, "img", 69)(5, ListaPuntosSalidaComponent_div_14_tr_21_div_5_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 73)(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 73)(14, "span", 74);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 66)(17, "div", 75)(18, "button", 76);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_14_tr_21_Template_button_click_18_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(p_r9));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 77);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_14_tr_21_Template_button_click_20_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(p_r9));
    });
    \u0275\u0275text(21, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 78);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_14_tr_21_Template_button_click_22_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(p_r9));
    });
    \u0275\u0275text(23, " Eliminar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275classProp("opacity-50", !p_r9.isActive);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", p_r9.photoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.photoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r9.city, ", ", p_r9.state);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", p_r9.locationType === "MUELLE")("text-blue-700", p_r9.locationType === "MUELLE")("bg-emerald-100", p_r9.locationType === "ISLA")("text-emerald-700", p_r9.locationType === "ISLA");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.locationType === "MUELLE" ? "\u2693 Muelle" : "\u{1F3DD}\uFE0F Isla", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-green-100", p_r9.isActive)("text-green-700", p_r9.isActive)("bg-gray-100", !p_r9.isActive)("text-gray-500", !p_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-amber-200", p_r9.isActive)("text-amber-600", p_r9.isActive)("hover:bg-amber-50", p_r9.isActive)("border-green-200", !p_r9.isActive)("text-green-600", !p_r9.isActive)("hover:bg-green-50", !p_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.isActive ? "Desactivar" : "Activar", " ");
  }
}
function ListaPuntosSalidaComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "h3", 15);
    \u0275\u0275text(3, "Lista de puntos de salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56)(7, "table", 57)(8, "thead", 58)(9, "tr")(10, "th", 59);
    \u0275\u0275text(11, "Punto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 59);
    \u0275\u0275text(13, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 60);
    \u0275\u0275text(15, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 60);
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 61);
    \u0275\u0275text(19, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody", 62);
    \u0275\u0275template(21, ListaPuntosSalidaComponent_div_14_tr_21_Template, 24, 38, "tr", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 64)(23, "p", 55);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 45)(26, "button", 65);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_14_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(27, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 65);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_14_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(29, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.paginatedPuntos);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
function ListaPuntosSalidaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 83);
    \u0275\u0275text(4, "Sin puntos de salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 84);
    \u0275\u0275text(6, "Agrega muelles e islas para que los proveedores configuren sus itinerarios.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 85);
    \u0275\u0275listener("click", function ListaPuntosSalidaComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openNew());
    });
    \u0275\u0275text(8, " + Agregar primer punto ");
    \u0275\u0275elementEnd()();
  }
}
var ListaPuntosSalidaComponent = class _ListaPuntosSalidaComponent {
  http = inject(HttpClient);
  filesService = inject(FilesService);
  base = `${environment.apiUrl}/departure-points`;
  loading = true;
  submitting = false;
  showForm = false;
  editingId = null;
  errorMessage = "";
  successMessage = "";
  puntos = [];
  filterType = "ALL";
  search = "";
  form = this.emptyForm();
  page = 1;
  limit = 15;
  get filteredPuntos() {
    const term = this.search.trim().toLowerCase();
    return this.puntos.filter((p) => {
      const matchType = this.filterType === "ALL" || p.locationType === this.filterType;
      const matchSearch = !term || p.name.toLowerCase().includes(term) || p.city.toLowerCase().includes(term) || p.state.toLowerCase().includes(term);
      return matchType && matchSearch;
    });
  }
  get total() {
    return this.filteredPuntos.length;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.limit));
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  get paginatedPuntos() {
    return this.filteredPuntos.slice((this.page - 1) * this.limit, this.page * this.limit);
  }
  cambiarPagina(n) {
    if (n >= 1 && n <= this.totalPages)
      this.page = n;
  }
  countByType(type) {
    const term = this.search.trim().toLowerCase();
    return this.puntos.filter((p) => {
      const matchType = type === "ALL" || p.locationType === type;
      const matchSearch = !term || p.name.toLowerCase().includes(term) || p.city.toLowerCase().includes(term) || p.state.toLowerCase().includes(term);
      return matchType && matchSearch;
    }).length;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.http.get(this.base).pipe(map((r) => Array.isArray(r) ? r : r?.data ?? [])).subscribe({
      next: (data) => {
        this.puntos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openNew() {
    this.editingId = null;
    this.form = this.emptyForm();
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  openEdit(p) {
    this.editingId = p.id;
    this.form = { name: p.name, city: p.city, state: p.state, icon: p.icon, photoUrl: p.photoUrl, locationType: p.locationType };
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  onPhotoUploaded(url) {
    this.form.photoUrl = url || null;
  }
  imageUrl(url) {
    if (!url)
      return "";
    return this.filesService.absoluteUrl(url);
  }
  cancel() {
    this.showForm = false;
    this.editingId = null;
    this.form = this.emptyForm();
  }
  save() {
    if (!this.form.name.trim() || !this.form.city.trim() || !this.form.state.trim()) {
      this.errorMessage = "Nombre, ciudad y estado son obligatorios.";
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    const req$ = this.editingId ? this.http.patch(`${this.base}/${this.editingId}`, this.form).pipe(map((r) => r?.data ?? r)) : this.http.post(this.base, this.form).pipe(map((r) => r?.data ?? r));
    req$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.puntos = this.puntos.map((p) => p.id === this.editingId ? saved : p);
          this.successMessage = "Punto actualizado.";
        } else {
          this.puntos = [saved, ...this.puntos];
          this.successMessage = "Punto creado.";
        }
        this.submitting = false;
        this.cancel();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al guardar.";
        this.submitting = false;
      }
    });
  }
  toggleActive(p) {
    this.http.patch(`${this.base}/${p.id}`, { isActive: !p.isActive }).pipe(map((r) => r?.data ?? r)).subscribe({
      next: (updated) => {
        this.puntos = this.puntos.map((x) => x.id === updated.id ? updated : x);
      }
    });
  }
  delete(p) {
    if (!confirm(`\xBFEliminar "${p.name}"?`))
      return;
    this.http.delete(`${this.base}/${p.id}`).subscribe({
      next: () => {
        this.puntos = this.puntos.filter((x) => x.id !== p.id);
      }
    });
  }
  emptyForm() {
    return { name: "", city: "", state: "", icon: "\u2693", photoUrl: null, locationType: "MUELLE" };
  }
  static \u0275fac = function ListaPuntosSalidaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaPuntosSalidaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPuntosSalidaComponent, selectors: [["app-lista-puntos-salida"]], decls: 16, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-5", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"], ["class", "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-16 gap-3", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-800/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "p-6"], ["class", "mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "mb-5"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], [1, "flex", "gap-3", "h-11"], [1, "flex", "flex-1", "cursor-pointer", "items-center", "justify-center", "gap-2", "rounded-lg", "border-2", "text-sm", "font-semibold", "transition"], ["type", "radio", "value", "MUELLE", 1, "sr-only", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "ISLA", 1, "sr-only", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2", "lg:grid-cols-4"], [1, "lg:col-span-2"], ["type", "text", "placeholder", "ej. Marina Chichiriviche", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ej. Chichiriviche", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "ej. Falc\xF3n", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u2693", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "placeholder:text-gray-400", "focus:border-brand-300", "focus:outline-hidden", "focus:ring-3", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "mt-5"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "ml-1", "text-xs", "text-gray-400", "font-normal"], ["label", "Foto del punto de salida", 3, "uploaded", "currentUrl"], [1, "mt-6", "flex", "gap-3"], [1, "rounded-lg", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "click"], [1, "mb-5", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "relative", "w-full", "sm:max-w-sm"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400"], ["type", "text", "placeholder", "Buscar por nombre, ciudad o estado...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["class", "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600", 3, "click", 4, "ngIf"], [1, "flex", "gap-2"], ["class", "rounded-lg px-4 py-2 text-sm font-medium transition", 3, "bg-brand-500", "text-white", "bg-gray-100", "text-gray-600", "dark:bg-gray-800", "dark:text-gray-300", "click", 4, "ngFor", "ngForOf"], [1, "absolute", "inset-y-0", "right-3", "flex", "items-center", "text-gray-400", "hover:text-gray-600", 3, "click"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "transition", 3, "click"], [1, "ml-1", "text-xs", "opacity-70"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "gap-3"], [1, "text-4xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-4", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-4", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-4", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], [3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "h-10", "w-14", "flex-shrink-0", "overflow-hidden", "rounded-lg", "bg-gray-100", "dark:bg-gray-800"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-xl", 4, "ngIf"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-4", "text-center"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "rounded-lg", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:border-red-300", "hover:bg-red-50", "transition", "dark:border-gray-700", 3, "click"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-xl"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "mt-5", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"]], template: function ListaPuntosSalidaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u{1F4CD} Puntos de salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Muelles de tierra firme e islas/cayos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ListaPuntosSalidaComponent_Template_button_click_8_listener() {
        return ctx.openNew();
      });
      \u0275\u0275text(9, " + Nuevo punto ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ListaPuntosSalidaComponent_div_10_Template, 2, 1, "div", 6)(11, ListaPuntosSalidaComponent_div_11_Template, 52, 31, "div", 7)(12, ListaPuntosSalidaComponent_div_12_Template, 9, 4, "div", 8)(13, ListaPuntosSalidaComponent_div_13_Template, 5, 0, "div", 9)(14, ListaPuntosSalidaComponent_div_14_Template, 30, 8, "div", 10)(15, ListaPuntosSalidaComponent_div_15_Template, 9, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredPuntos.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredPuntos.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaPuntosSalidaComponent, [{
    type: Component,
    args: [{ selector: "app-lista-puntos-salida", standalone: true, imports: [CommonModule, FormsModule, ImageUploadComponent], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4CD} Puntos de salida</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Muelles de tierra firme e islas/cayos</p>
      </div>
      <button (click)="openNew()"
        class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
        + Nuevo punto
      </button>
    </div>
  </div>

  <!-- Success -->
  <div *ngIf="successMessage"
    class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400">
    \u2713 {{ successMessage }}
  </div>

  <!-- Form -->
  <div *ngIf="showForm" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
      <h2 class="text-base font-semibold text-gray-800 dark:text-white/90">
        {{ editingId ? 'Editar punto' : 'Nuevo punto de salida' }}
      </h2>
    </div>
    <div class="p-6">
      <div *ngIf="errorMessage"
        class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
        \u26A0\uFE0F {{ errorMessage }}
      </div>

      <!-- Tipo -->
      <div class="mb-5">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo <span class="text-red-500">*</span></label>
        <div class="flex gap-3 h-11">
          <label class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 text-sm font-semibold transition"
            [class.border-brand-500]="form.locationType === 'MUELLE'" [class.bg-brand-50]="form.locationType === 'MUELLE'"
            [class.text-brand-700]="form.locationType === 'MUELLE'" [class.border-gray-300]="form.locationType !== 'MUELLE'"
            [class.text-gray-500]="form.locationType !== 'MUELLE'">
            <input type="radio" [(ngModel)]="form.locationType" value="MUELLE" class="sr-only" />
            \u2693 Muelle (tierra)
          </label>
          <label class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 text-sm font-semibold transition"
            [class.border-emerald-500]="form.locationType === 'ISLA'" [class.bg-emerald-50]="form.locationType === 'ISLA'"
            [class.text-emerald-700]="form.locationType === 'ISLA'" [class.border-gray-300]="form.locationType !== 'ISLA'"
            [class.text-gray-500]="form.locationType !== 'ISLA'">
            <input type="radio" [(ngModel)]="form.locationType" value="ISLA" class="sr-only" />
            \u{1F3DD}\uFE0F Isla / Cayo
          </label>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nombre <span class="text-red-500">*</span></label>
          <input type="text" [(ngModel)]="form.name" placeholder="ej. Marina Chichiriviche"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Ciudad <span class="text-red-500">*</span></label>
          <input type="text" [(ngModel)]="form.city" placeholder="ej. Chichiriviche"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Estado <span class="text-red-500">*</span></label>
          <input type="text" [(ngModel)]="form.state" placeholder="ej. Falc\xF3n"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">\xCDcono (emoji)</label>
          <input type="text" [(ngModel)]="form.icon" placeholder="\u2693"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
      </div>

      <!-- Imagen del punto -->
      <div class="mt-5">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Imagen del lugar
          <span class="ml-1 text-xs text-gray-400 font-normal">(se mostrar\xE1 en las tarjetas de destino del cliente)</span>
        </label>
        <app-image-upload
          [currentUrl]="form.photoUrl"
          label="Foto del punto de salida"
          (uploaded)="onPhotoUploaded($event)">
        </app-image-upload>
      </div>

      <div class="mt-6 flex gap-3">
        <button (click)="save()" [disabled]="submitting"
          class="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:opacity-50 transition-colors">
          {{ submitting ? 'Guardando...' : (editingId ? 'Actualizar' : 'Crear punto') }}
        </button>
        <button (click)="cancel()" type="button"
          class="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]">
          Cancelar
        </button>
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div *ngIf="!loading" class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <!-- Search -->
      <div class="relative w-full sm:max-w-sm">
        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">\u{1F50D}</span>
        <input type="text" [(ngModel)]="search" placeholder="Buscar por nombre, ciudad o estado..."
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <button *ngIf="search" (click)="search = ''"
          class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600">\u2715</button>
      </div>
      <!-- Type pills -->
      <div class="flex gap-2">
        <button *ngFor="let f of ['ALL','MUELLE','ISLA']" (click)="filterType = $any(f)"
          class="rounded-lg px-4 py-2 text-sm font-medium transition"
          [class.bg-brand-500]="filterType === f" [class.text-white]="filterType === f"
          [class.bg-gray-100]="filterType !== f" [class.text-gray-600]="filterType !== f"
          [class.dark:bg-gray-800]="filterType !== f" [class.dark:text-gray-300]="filterType !== f">
          {{ f === 'ALL' ? '\u{1F310} Todos' : f === 'MUELLE' ? '\u2693 Muelles' : '\u{1F3DD}\uFE0F Islas' }}
          <span class="ml-1 text-xs opacity-70">({{ countByType($any(f)) }})</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-16 gap-3">
    <div class="text-4xl animate-bounce">\u{1F4CD}</div>
    <p class="text-sm text-gray-400">Cargando puntos...</p>
  </div>

  <!-- Table -->
  <div *ngIf="!loading && filteredPuntos.length > 0"
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de puntos de salida</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-400">Punto</th>
            <th class="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-400">Ubicaci\xF3n</th>
            <th class="px-5 py-4 text-center text-xs font-semibold uppercase text-gray-400">Tipo</th>
            <th class="px-5 py-4 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
            <th class="px-5 py-4 text-right text-xs font-semibold uppercase text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let p of paginatedPuntos" [class.opacity-50]="!p.isActive">
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                <div class="h-10 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img *ngIf="p.photoUrl" [src]="imageUrl(p.photoUrl)" [alt]="p.name"
                    class="h-full w-full object-cover" />
                  <div *ngIf="!p.photoUrl" class="flex h-full items-center justify-center text-xl">{{ p.icon || '\u{1F4CD}' }}</div>
                </div>
                <span class="font-medium text-gray-800 dark:text-white/90">{{ p.name }}</span>
              </div>
            </td>
            <td class="px-5 py-4 text-gray-500 dark:text-gray-400">{{ p.city }}, {{ p.state }}</td>
            <td class="px-5 py-4 text-center">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold"
                [class.bg-blue-100]="p.locationType === 'MUELLE'" [class.text-blue-700]="p.locationType === 'MUELLE'"
                [class.bg-emerald-100]="p.locationType === 'ISLA'" [class.text-emerald-700]="p.locationType === 'ISLA'">
                {{ p.locationType === 'MUELLE' ? '\u2693 Muelle' : '\u{1F3DD}\uFE0F Isla' }}
              </span>
            </td>
            <td class="px-5 py-4 text-center">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold"
                [class.bg-green-100]="p.isActive" [class.text-green-700]="p.isActive"
                [class.bg-gray-100]="!p.isActive" [class.text-gray-500]="!p.isActive">
                {{ p.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex items-center justify-end gap-2">
                <button (click)="toggleActive(p)"
                  class="rounded-lg border px-3 py-1.5 text-xs font-medium transition"
                  [class.border-amber-200]="p.isActive" [class.text-amber-600]="p.isActive" [class.hover:bg-amber-50]="p.isActive"
                  [class.border-green-200]="!p.isActive" [class.text-green-600]="!p.isActive" [class.hover:bg-green-50]="!p.isActive">
                  {{ p.isActive ? 'Desactivar' : 'Activar' }}
                </button>
                <button (click)="openEdit(p)"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-400">
                  Editar
                </button>
                <button (click)="delete(p)"
                  class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:border-red-300 hover:bg-red-50 transition dark:border-gray-700">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-between border-t border-gray-100 px-5 py-4 dark:border-gray-800">
      <p class="text-sm text-gray-500">P\xE1gina {{ page }} de {{ totalPages }}</p>
      <div class="flex gap-2">
        <button (click)="cambiarPagina(page - 1)" [disabled]="page === 1" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Anterior</button>
        <button (click)="cambiarPagina(page + 1)" [disabled]="page === totalPages || total === 0" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Siguiente</button>
      </div>
    </div>
  </div>

  <div *ngIf="!loading && filteredPuntos.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u{1F4CD}</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin puntos de salida</h3>
    <p class="mt-2 text-sm text-gray-500">Agrega muelles e islas para que los proveedores configuren sus itinerarios.</p>
    <button (click)="openNew()" class="mt-5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
      + Agregar primer punto
    </button>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPuntosSalidaComponent, { className: "ListaPuntosSalidaComponent", filePath: "src/app/pages/puntos-salida/lista-puntos-salida.component.ts", lineNumber: 36 });
})();
export {
  ListaPuntosSalidaComponent
};
//# sourceMappingURL=chunk-MXSJI6VX.js.map
