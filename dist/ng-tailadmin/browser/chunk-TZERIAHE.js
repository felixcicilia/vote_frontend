import {
  amenityIcon,
  amenityLabel
} from "./chunk-TTYATM5N.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X6ED7CSN.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import "./chunk-AJH5TJUW.js";
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
  ɵɵinterpolate,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/mi-charter/pages/itinerario/itinerario.component.ts
function ItinerarioComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " Cargando itinerario... ");
    \u0275\u0275elementEnd();
  }
}
function ItinerarioComponent_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 13);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4, "Sin embarcaciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6, "Primero registra una embarcaci\xF3n para gestionar su itinerario.");
    \u0275\u0275elementEnd()();
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_div_10_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.imageUrl(v_r5.photos[0]), \u0275\u0275sanitizeUrl)("alt", v_r5.name);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeIcon(v_r5.type), " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " \u2713 ");
    \u0275\u0275elementEnd();
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_div_10_Template_div_click_0_listener() {
      const v_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectedVesselId = v_r5.id;
      ctx_r1.showForm = false;
      return \u0275\u0275resetView(ctx_r1.search = "");
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275template(2, ItinerarioComponent_ng_container_2_ng_container_14_div_10_img_2_Template, 1, 2, "img", 27)(3, ItinerarioComponent_ng_container_2_ng_container_14_div_10_div_3_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 31)(10, "span", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ItinerarioComponent_ng_container_2_ng_container_14_div_10_div_13_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-brand-400", ctx_r1.selectedVesselId === v_r5.id)("bg-brand-50", ctx_r1.selectedVesselId === v_r5.id)("dark:bg-brand-500\\/10", ctx_r1.selectedVesselId === v_r5.id)("ring-2", ctx_r1.selectedVesselId === v_r5.id)("ring-brand-400\\/30", ctx_r1.selectedVesselId === v_r5.id)("border-gray-200", ctx_r1.selectedVesselId !== v_r5.id)("dark:border-gray-800", ctx_r1.selectedVesselId !== v_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r5.photos == null ? null : v_r5.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(v_r5.photos == null ? null : v_r5.photos[0]));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-brand-600", ctx_r1.selectedVesselId === v_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.typeIcon(v_r5.type), " ", ctx_r1.typeLabel(v_r5.type), " \xB7 ", v_r5.capacity, " pax");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.slotCountForVessel(v_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" horario", ctx_r1.slotCountForVessel(v_r5.id) !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedVesselId === v_r5.id);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No se encontraron embarcaciones con "', ctx_r1.vesselSearch, '". ');
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r1.successMessage, " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r7.icon, " ", p_r7.name, " \xB7 ", p_r7.state);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r8.icon, " ", p_r8.name, " \xB7 ", p_r8.state);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r9.icon, " ", p_r9.name, " \xB7 ", p_r9.state);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r10.icon, " ", p_r10.name, " \xB7 ", p_r10.state);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div")(3, "h2", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6, "Completa los datos del horario de salida");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 46);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275template(10, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_div_10_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(11, "div", 49)(12, "div")(13, "label", 50);
    \u0275\u0275text(14, "Fecha de salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.departureDate, $event) || (ctx_r1.form.departureDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 50);
    \u0275\u0275text(18, "Hora de salida ");
    \u0275\u0275elementStart(19, "span", 52);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.departureTime, $event) || (ctx_r1.form.departureTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 50);
    \u0275\u0275text(24, "Direcci\xF3n ");
    \u0275\u0275elementStart(25, "span", 52);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 54)(28, "label", 55)(29, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.direction, $event) || (ctx_r1.form.direction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " \u2192 Ida ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 55)(32, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.direction, $event) || (ctx_r1.form.direction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " \u2190 Regreso ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div")(35, "label", 50);
    \u0275\u0275text(36, "Punto de salida ");
    \u0275\u0275elementStart(37, "span", 52);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.departurePointId, $event) || (ctx_r1.form.departurePointId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "option", 59);
    \u0275\u0275text(41, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "optgroup", 60);
    \u0275\u0275template(43, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_43_Template, 2, 4, "option", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "optgroup", 62);
    \u0275\u0275template(45, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_45_Template, 2, 4, "option", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div")(47, "label", 50);
    \u0275\u0275text(48, "Punto de llegada ");
    \u0275\u0275elementStart(49, "span", 52);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.arrivalPointId, $event) || (ctx_r1.form.arrivalPointId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(52, "option", 59);
    \u0275\u0275text(53, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "optgroup", 60);
    \u0275\u0275template(55, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_55_Template, 2, 4, "option", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "optgroup", 62);
    \u0275\u0275template(57, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_option_57_Template, 2, 4, "option", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div")(59, "label", 50);
    \u0275\u0275text(60, "Precio / persona (USD) ");
    \u0275\u0275elementStart(61, "span", 52);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 63)(64, "span", 64);
    \u0275\u0275text(65, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.pricePerPerson, $event) || (ctx_r1.form.pricePerPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div")(68, "label", 50);
    \u0275\u0275text(69, "Duraci\xF3n (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.durationMinutes, $event) || (ctx_r1.form.durationMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div")(72, "label", 50);
    \u0275\u0275text(73, "M\xE1x. pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxPassengers, $event) || (ctx_r1.form.maxPassengers = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 68)(76, "button", 69);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 70);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(79, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.editingId ? "Editar horario" : "Nuevo horario", " \u2014 ", ctx_r1.selectedVessel.name, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.departureDate);
    \u0275\u0275property("min", ctx_r1.today);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.departureTime);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-brand-500", ctx_r1.form.direction === "IDA")("bg-brand-50", ctx_r1.form.direction === "IDA")("text-brand-700", ctx_r1.form.direction === "IDA")("border-gray-300", ctx_r1.form.direction !== "IDA")("text-gray-500", ctx_r1.form.direction !== "IDA");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.direction);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-emerald-500", ctx_r1.form.direction === "REGRESO")("bg-emerald-50", ctx_r1.form.direction === "REGRESO")("text-emerald-700", ctx_r1.form.direction === "REGRESO")("border-gray-300", ctx_r1.form.direction !== "REGRESO")("text-gray-500", ctx_r1.form.direction !== "REGRESO");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.direction);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.departurePointId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.muelles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.islaPiers);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.arrivalPointId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.muelles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.islaPiers);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.pricePerPerson);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.durationMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxPassengers);
    \u0275\u0275property("placeholder", "Capacidad: " + ctx_r1.selectedVessel.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Guardando..." : ctx_r1.editingId ? "Actualizar" : "Crear horario", " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1, "Ya sali\xF3");
    \u0275\u0275elementEnd();
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r13.durationMinutes, " min");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(2, 1, s_r13.pricePerPerson, "1.2-2"), " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 102);
    \u0275\u0275text(1, "Sin precio");
    \u0275\u0275elementEnd();
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 80)(1, "td", 85)(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_4_Template, 2, 0, "p", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 85)(6, "span", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 85)(9, "p", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_11_Template, 2, 1, "p", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 90);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 91);
    \u0275\u0275template(15, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_15_Template, 3, 4, "p", 92)(16, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_p_16_Template, 2, 0, "p", 93);
    \u0275\u0275elementStart(17, "p", 94);
    \u0275\u0275text(18, "/ persona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 95);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 96)(22, "span", 87);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 85)(25, "div", 97)(26, "button", 98);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_Template_button_click_26_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleActive(s_r13));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 99);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_Template_button_click_28_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r13));
    });
    \u0275\u0275text(29, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 100);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_Template_button_click_30_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteSlot(s_r13));
    });
    \u0275\u0275text(31, " Borrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("opacity-50", ctx_r1.isSlotPast(s_r13) || !s_r13.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r13.departureTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSlotPast(s_r13));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", s_r13.direction === "IDA")("text-blue-700", s_r13.direction === "IDA")("bg-emerald-100", s_r13.direction === "REGRESO")("text-emerald-700", s_r13.direction === "REGRESO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r13.direction === "IDA" ? "\u2192 Ida" : "\u2190 Regreso", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", s_r13.departurePoint.name, " \u2192 ", s_r13.arrivalPoint.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r13.durationMinutes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r13.departureDate ?? "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r13.pricePerPerson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r13.pricePerPerson);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r13.maxPassengers ?? ctx_r1.selectedVessel.capacity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-green-100", s_r13.isActive)("text-green-700", s_r13.isActive)("bg-gray-100", !s_r13.isActive)("text-gray-500", !s_r13.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r13.isActive ? "Activo" : "Pausado", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-amber-200", s_r13.isActive)("text-amber-600", s_r13.isActive)("hover:bg-amber-50", s_r13.isActive)("border-green-200", !s_r13.isActive)("text-green-600", !s_r13.isActive)("hover:bg-green-50", !s_r13.isActive);
    \u0275\u0275property("title", \u0275\u0275interpolate(s_r13.isActive ? "Pausar" : "Activar"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r13.isActive ? "\u23F8" : "\u25B6", " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.search ? 'No se encontraron horarios con "' + ctx_r1.search + '".' : "No hay horarios para esta embarcaci\xF3n.", " ");
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 72)(2, "div")(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 74)(8, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 76)(10, "span", 31);
    \u0275\u0275text(11, "\u{1F4C5} Fecha ref.:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 78)(14, "table", 79)(15, "thead")(16, "tr", 80)(17, "th", 81);
    \u0275\u0275text(18, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 81);
    \u0275\u0275text(20, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 81);
    \u0275\u0275text(22, "Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 81);
    \u0275\u0275text(24, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 82);
    \u0275\u0275text(26, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 83);
    \u0275\u0275text(28, "Cupos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 83);
    \u0275\u0275text(30, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 83);
    \u0275\u0275text(32, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_34_Template, 32, 44, "tr", 84)(35, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_tr_35_Template, 3, 1, "tr", 2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.typeIcon(ctx_r1.selectedVessel.type), " ", ctx_r1.selectedVessel.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.allSlots.length, " horario", ctx_r1.allSlots.length !== 1 ? "s" : "", " en total");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDate);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.allSlots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allSlots.length === 0);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_1_Template, 2, 1, "div", 38)(2, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_2_Template, 80, 42, "div", 39)(3, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_div_3_Template, 36, 8, "div", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showForm);
  }
}
function ItinerarioComponent_ng_container_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 16)(3, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ItinerarioComponent_ng_container_2_ng_container_14_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vesselSearch, $event) || (ctx_r1.vesselSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19)(6, "h3", 20);
    \u0275\u0275text(7, "Selecciona una embarcaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22);
    \u0275\u0275template(10, ItinerarioComponent_ng_container_2_ng_container_14_div_10_Template, 14, 25, "div", 23)(11, ItinerarioComponent_ng_container_2_ng_container_14_div_11_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ItinerarioComponent_ng_container_2_ng_container_14_ng_container_12_Template, 4, 3, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vesselSearch);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.filteredVessels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredVessels.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedVessel);
  }
}
function ItinerarioComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div")(4, "h1", 6);
    \u0275\u0275text(5, "Itinerario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7, "Gestiona los horarios de salida y regreso de tus embarcaciones.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275text(10, " Actualizar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function ItinerarioComponent_ng_container_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275text(12, " + Nuevo horario ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, ItinerarioComponent_ng_container_2_div_13_Template, 7, 0, "div", 11)(14, ItinerarioComponent_ng_container_2_ng_container_14_Template, 13, 4, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedVessel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vessels.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vessels.length > 0);
  }
}
var ItinerarioComponent = class _ItinerarioComponent {
  tripsService = inject(IslandTripsService);
  embService = inject(EmbarcacionesService);
  authService = inject(AuthService);
  loading = true;
  submitting = false;
  errorMessage = "";
  successMessage = "";
  vessels = [];
  muelles = [];
  islaPiers = [];
  slots = [];
  selectedVesselId = null;
  selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  search = "";
  vesselSearch = "";
  showForm = false;
  editingId = null;
  form = this.emptyForm();
  get selectedVessel() {
    return this.vessels.find((v) => v.id === this.selectedVesselId) ?? null;
  }
  get filteredVessels() {
    const t = this.vesselSearch.trim().toLowerCase();
    if (!t)
      return this.vessels;
    return this.vessels.filter((v) => v.name.toLowerCase().includes(t));
  }
  get allSlots() {
    return [...this.idaSlots, ...this.regresoSlots].sort((a, b) => (a.departureDate ?? "").localeCompare(b.departureDate ?? "") || a.departureTime.localeCompare(b.departureTime));
  }
  get filteredSlots() {
    if (!this.selectedVesselId)
      return [];
    return this.slots.filter((s) => s.vessel.id === this.selectedVesselId);
  }
  matchSearch(s) {
    if (!this.search.trim())
      return true;
    const t = this.search.toLowerCase();
    return s.departurePoint.name.toLowerCase().includes(t) || s.arrivalPoint.name.toLowerCase().includes(t) || s.departureTime.includes(t) || (s.departureDate ?? "").includes(t);
  }
  get idaSlots() {
    return this.filteredSlots.filter((s) => s.direction === "IDA" && this.matchSearch(s)).sort((a, b) => (a.departureDate ?? "").localeCompare(b.departureDate ?? "") || a.departureTime.localeCompare(b.departureTime));
  }
  get regresoSlots() {
    return this.filteredSlots.filter((s) => s.direction === "REGRESO" && this.matchSearch(s)).sort((a, b) => (a.departureDate ?? "").localeCompare(b.departureDate ?? "") || a.departureTime.localeCompare(b.departureTime));
  }
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  isSlotPast(slot) {
    const slotDate = slot.departureDate ?? this.selectedDate;
    if (slotDate > this.today)
      return false;
    if (slotDate < this.today)
      return true;
    const now = /* @__PURE__ */ new Date();
    const hhmm = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return slot.departureTime <= hhmm;
  }
  get providerId() {
    return this.authService.user()?.providerProfile?.id ?? null;
  }
  refresh() {
    const pid = this.providerId;
    if (!pid)
      return;
    this.loading = true;
    this.tripsService.getSlotsByProvider(pid).subscribe({
      next: (s) => {
        this.slots = s;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  ngOnInit() {
    const pid = this.providerId;
    if (!pid) {
      this.loading = false;
      return;
    }
    this.embService.getByProvider(pid).subscribe({
      next: (v) => {
        this.vessels = v;
        if (v.length > 0)
          this.selectedVesselId = v[0].id;
      }
    });
    this.tripsService.getMuelles().subscribe({ next: (p) => {
      this.muelles = p;
    } });
    this.tripsService.getIslasPiers().subscribe({ next: (p) => {
      this.islaPiers = p;
    } });
    this.tripsService.getSlotsByProvider(pid).subscribe({
      next: (s) => {
        this.slots = s;
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
  openEdit(slot) {
    this.editingId = slot.id;
    this.form = {
      vesselId: slot.vessel.id,
      departurePointId: slot.departurePoint.id,
      arrivalPointId: slot.arrivalPoint.id,
      departureDate: slot.departureDate ?? "",
      departureTime: slot.departureTime,
      direction: slot.direction,
      pricePerPerson: slot.pricePerPerson ? Number(slot.pricePerPerson) : null,
      durationMinutes: slot.durationMinutes ?? null,
      maxPassengers: slot.maxPassengers ?? null
    };
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  cancel() {
    this.showForm = false;
    this.editingId = null;
    this.form = this.emptyForm();
  }
  save() {
    if (!this.form.vesselId || !this.form.departurePointId || !this.form.arrivalPointId || !this.form.departureTime) {
      this.errorMessage = "Completa todos los campos obligatorios.";
      return;
    }
    this.submitting = true;
    this.errorMessage = "";
    const dto = {
      vesselId: this.form.vesselId,
      departurePointId: this.form.departurePointId,
      arrivalPointId: this.form.arrivalPointId,
      departureTime: this.form.departureTime,
      direction: this.form.direction
    };
    if (this.form.departureDate)
      dto.departureDate = this.form.departureDate;
    if (this.form.pricePerPerson)
      dto.pricePerPerson = this.form.pricePerPerson;
    if (this.form.durationMinutes)
      dto.durationMinutes = this.form.durationMinutes;
    if (this.form.maxPassengers)
      dto.maxPassengers = this.form.maxPassengers;
    const op$ = this.editingId ? this.tripsService.updateSlot(this.editingId, dto) : this.tripsService.createSlot(dto);
    op$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.slots = this.slots.map((s) => s.id === this.editingId ? saved : s);
        } else {
          this.slots = [saved, ...this.slots];
        }
        this.submitting = false;
        this.successMessage = this.editingId ? "Horario actualizado." : "Horario creado.";
        this.cancel();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al guardar.";
        this.submitting = false;
      }
    });
  }
  deleteSlot(slot) {
    if (!confirm(`\xBFEliminar el horario ${slot.departureTime} (${slot.direction})?`))
      return;
    this.tripsService.deleteSlot(slot.id).subscribe({
      next: () => {
        this.slots = this.slots.filter((s) => s.id !== slot.id);
      }
    });
  }
  toggleActive(slot) {
    this.tripsService.updateSlot(slot.id, { isActive: !slot.isActive }).subscribe({
      next: (updated) => {
        this.slots = this.slots.map((s) => s.id === updated.id ? updated : s);
      }
    });
  }
  vesselName(id) {
    return this.vessels.find((v) => v.id === id)?.name ?? "";
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  typeIcon(t) {
    return t === "LANCHA" ? "\u{1F6A4}" : t === "YATE" ? "\u26F5" : t === "CATAMARAN" ? "\u{1F6E5}\uFE0F" : "\u{1F6F6}";
  }
  typeLabel(t) {
    const m = { LANCHA: "Lancha", YATE: "Yate", CATAMARAN: "Catamar\xE1n", BOTE: "Bote" };
    return m[t] ?? t;
  }
  amenityIcon = amenityIcon;
  amenityLabel = amenityLabel;
  slotCountForVessel(vesselId) {
    return this.slots.filter((s) => s.vessel.id === vesselId).length;
  }
  emptyForm() {
    return {
      vesselId: this.selectedVesselId ?? this.vessels[0]?.id ?? null,
      departurePointId: null,
      arrivalPointId: null,
      departureDate: this.selectedDate ?? "",
      departureTime: "",
      direction: "IDA",
      pricePerPerson: null,
      durationMinutes: null,
      maxPassengers: null
    };
  }
  static \u0275fac = function ItinerarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItinerarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItinerarioComponent, selectors: [["app-itinerario"]], decls: 3, vars: 2, consts: [[1, "space-y-6"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "click", "disabled"], [1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-50", 3, "click", "disabled"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-4xl", "mb-3"], [1, "text-base", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "flex", "flex-col", "gap-4", "lg:flex-row"], ["type", "text", "placeholder", "Buscar embarcaci\xF3n por nombre...", 1, "h-11", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "p-4"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "lg:grid-cols-3"], ["class", "group flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border p-3 transition-all hover:shadow-md", 3, "border-brand-400", "bg-brand-50", "dark:bg-brand-500\\/10", "ring-2", "ring-brand-400\\/30", "border-gray-200", "dark:border-gray-800", "click", 4, "ngFor", "ngForOf"], ["class", "col-span-full py-6 text-center text-sm text-gray-400", 4, "ngIf"], [1, "group", "flex", "cursor-pointer", "items-center", "gap-3", "overflow-hidden", "rounded-xl", "border", "p-3", "transition-all", "hover:shadow-md", 3, "click"], [1, "relative", "h-14", "w-14", "flex-shrink-0", "overflow-hidden", "rounded-lg", "bg-gray-100", "dark:bg-gray-800"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-2xl opacity-40", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "truncate", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "font-medium", "text-brand-500"], ["class", "flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-2xl", "opacity-40"], [1, "flex-shrink-0", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-brand-500", "text-white", "text-xs", "font-bold"], [1, "col-span-full", "py-6", "text-center", "text-sm", "text-gray-400"], ["class", "rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm dark:border-brand-800/30 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-800/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-brand-200", "bg-white", "shadow-sm", "dark:border-brand-800/30", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "text-gray-400", "hover:text-gray-600", "text-lg", "leading-none", 3, "click"], [1, "p-6"], ["class", "mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["type", "date", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel", "min"], [1, "text-red-500"], ["type", "time", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "h-11"], [1, "flex", "flex-1", "cursor-pointer", "items-center", "justify-center", "rounded-lg", "border-2", "text-sm", "font-semibold", "transition"], ["type", "radio", "value", "IDA", 1, "sr-only", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "REGRESO", 1, "sr-only", 3, "ngModelChange", "ngModel"], [1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["label", "\u2693 Muelles"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["label", "\u{1F3DD}\uFE0F Islas"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-gray-400"], ["type", "number", "min", "1", "step", "0.5", "placeholder", "0.00", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-7", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "placeholder", "ej. 90", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mt-6", "flex", "gap-3", "border-t", "border-gray-100", "pt-5", "dark:border-gray-800"], [1, "rounded-lg", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-50", 3, "click", "disabled"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "mb-5", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "text-gray-500"], [1, "flex", "flex-col", "gap-3", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:items-center"], ["type", "text", "placeholder", "Buscar por hora, ruta o fecha...", 1, "h-10", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2", "h-10", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "dark:border-gray-700", "shrink-0"], ["type", "date", 1, "border-0", "bg-transparent", "text-sm", "text-gray-700", "outline-none", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "px-5", "py-4"], ["class", "text-[10px] text-gray-400", 4, "ngIf"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "px-5", "py-4", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-4", "text-right"], ["class", "text-sm font-bold text-brand-600 dark:text-brand-400", 4, "ngIf"], ["class", "text-xs text-amber-500", 4, "ngIf"], [1, "text-[10px]", "text-gray-400"], [1, "px-5", "py-4", "text-center", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-4", "text-center"], [1, "flex", "items-center", "justify-center", "gap-1.5"], [1, "rounded-lg", "border", "px-2.5", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "title"], [1, "rounded-lg", "border", "border-gray-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "dark:border-gray-700", 3, "click"], [1, "rounded-lg", "border", "border-gray-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:border-red-300", "hover:bg-red-50", "dark:border-gray-700", 3, "click"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-amber-500"], ["colspan", "8", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ItinerarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ItinerarioComponent_div_1_Template, 2, 0, "div", 1)(2, ItinerarioComponent_ng_container_2_Template, 15, 4, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItinerarioComponent, [{
    type: Component,
    args: [{ selector: "app-itinerario", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <!-- Loading -->
  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando itinerario...
  </div>

  <ng-container *ngIf="!loading">

    <!-- \u2550\u2550\u2550 TARJETA 1: T\xCDTULO \u2550\u2550\u2550 -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Itinerario</h1>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona los horarios de salida y regreso de tus embarcaciones.</p>
        </div>
        <div class="flex items-center gap-2">
          <button (click)="refresh()" [disabled]="loading"
            class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]">
            Actualizar
          </button>
          <button (click)="openNew()" [disabled]="!selectedVessel"
            class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50">
            + Nuevo horario
          </button>
        </div>
      </div>
    </div>

    <!-- Sin embarcaciones -->
    <div *ngIf="vessels.length === 0"
      class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
      <p class="text-4xl mb-3">\u26F5</p>
      <h3 class="text-base font-bold text-gray-700 dark:text-white/80">Sin embarcaciones registradas</h3>
      <p class="mt-1 text-sm text-gray-500">Primero registra una embarcaci\xF3n para gestionar su itinerario.</p>
    </div>

    <ng-container *ngIf="vessels.length > 0">

      <!-- \u2550\u2550\u2550 TARJETA 2: FILTRO DE B\xDASQUEDA \u2550\u2550\u2550 -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-col gap-4 lg:flex-row">
          <input type="text" [(ngModel)]="vesselSearch" placeholder="Buscar embarcaci\xF3n por nombre..."
            class="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        </div>
      </div>

      <!-- \u2550\u2550\u2550 TARJETA 3: SELECTOR DE EMBARCACI\xD3N \u2550\u2550\u2550 -->
      <div class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Selecciona una embarcaci\xF3n</h3>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div *ngFor="let v of filteredVessels"
              (click)="selectedVesselId = v.id; showForm = false; search = ''"
              class="group flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border p-3 transition-all hover:shadow-md"
              [class.border-brand-400]="selectedVesselId === v.id"
              [class.bg-brand-50]="selectedVesselId === v.id"
              [class.dark:bg-brand-500\\/10]="selectedVesselId === v.id"
              [class.ring-2]="selectedVesselId === v.id"
              [class.ring-brand-400\\/30]="selectedVesselId === v.id"
              [class.border-gray-200]="selectedVesselId !== v.id"
              [class.dark:border-gray-800]="selectedVesselId !== v.id">

              <!-- Miniatura -->
              <div class="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <img *ngIf="v.photos?.[0]" [src]="imageUrl(v.photos![0])" [alt]="v.name"
                  class="h-full w-full object-cover" />
                <div *ngIf="!v.photos?.[0]" class="flex h-full items-center justify-center text-2xl opacity-40">
                  {{ typeIcon(v.type) }}
                </div>
              </div>

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <p class="truncate text-sm font-semibold text-gray-800 dark:text-white/90"
                  [class.text-brand-600]="selectedVesselId === v.id">{{ v.name }}</p>
                <p class="text-xs text-gray-400">{{ typeIcon(v.type) }} {{ typeLabel(v.type) }} \xB7 {{ v.capacity }} pax</p>
                <p class="text-xs text-gray-400">
                  <span class="font-medium text-brand-500">{{ slotCountForVessel(v.id) }}</span>
                  horario{{ slotCountForVessel(v.id) !== 1 ? 's' : '' }}
                </p>
              </div>

              <!-- Selected check -->
              <div *ngIf="selectedVesselId === v.id"
                class="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold">
                \u2713
              </div>
            </div>

            <!-- Sin resultados de b\xFAsqueda de embarcaci\xF3n -->
            <div *ngIf="filteredVessels.length === 0" class="col-span-full py-6 text-center text-sm text-gray-400">
              No se encontraron embarcaciones con "{{ vesselSearch }}".
            </div>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550 TARJETA 4: FILTRO + LISTA DE HORARIOS \u2550\u2550\u2550 -->
      <ng-container *ngIf="selectedVessel">

        <!-- Alerta de \xE9xito -->
        <div *ngIf="successMessage"
          class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400">
          \u2713 {{ successMessage }}
        </div>

        <!-- Formulario crear/editar -->
        <div *ngIf="showForm"
          class="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-sm dark:border-brand-800/30 dark:bg-white/[0.03]">
          <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
            <div>
              <h2 class="text-base font-bold text-gray-800 dark:text-white/90">
                {{ editingId ? 'Editar horario' : 'Nuevo horario' }} \u2014 {{ selectedVessel.name }}
              </h2>
              <p class="text-xs text-gray-400 mt-0.5">Completa los datos del horario de salida</p>
            </div>
            <button (click)="cancel()" class="text-gray-400 hover:text-gray-600 text-lg leading-none">\u2715</button>
          </div>
          <div class="p-6">
            <div *ngIf="errorMessage"
              class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
              \u26A0\uFE0F {{ errorMessage }}
            </div>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha de salida</label>
                <input type="date" [(ngModel)]="form.departureDate" [min]="today"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Hora de salida <span class="text-red-500">*</span></label>
                <input type="time" [(ngModel)]="form.departureTime"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Direcci\xF3n <span class="text-red-500">*</span></label>
                <div class="flex gap-2 h-11">
                  <label class="flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 text-sm font-semibold transition"
                    [class.border-brand-500]="form.direction === 'IDA'" [class.bg-brand-50]="form.direction === 'IDA'" [class.text-brand-700]="form.direction === 'IDA'"
                    [class.border-gray-300]="form.direction !== 'IDA'" [class.text-gray-500]="form.direction !== 'IDA'">
                    <input type="radio" [(ngModel)]="form.direction" value="IDA" class="sr-only" /> \u2192 Ida
                  </label>
                  <label class="flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 text-sm font-semibold transition"
                    [class.border-emerald-500]="form.direction === 'REGRESO'" [class.bg-emerald-50]="form.direction === 'REGRESO'" [class.text-emerald-700]="form.direction === 'REGRESO'"
                    [class.border-gray-300]="form.direction !== 'REGRESO'" [class.text-gray-500]="form.direction !== 'REGRESO'">
                    <input type="radio" [(ngModel)]="form.direction" value="REGRESO" class="sr-only" /> \u2190 Regreso
                  </label>
                </div>
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Punto de salida <span class="text-red-500">*</span></label>
                <select [(ngModel)]="form.departurePointId"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
                  <option [ngValue]="null">Seleccionar...</option>
                  <optgroup label="\u2693 Muelles">
                    <option *ngFor="let p of muelles" [ngValue]="p.id">{{ p.icon }} {{ p.name }} \xB7 {{ p.state }}</option>
                  </optgroup>
                  <optgroup label="\u{1F3DD}\uFE0F Islas">
                    <option *ngFor="let p of islaPiers" [ngValue]="p.id">{{ p.icon }} {{ p.name }} \xB7 {{ p.state }}</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Punto de llegada <span class="text-red-500">*</span></label>
                <select [(ngModel)]="form.arrivalPointId"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
                  <option [ngValue]="null">Seleccionar...</option>
                  <optgroup label="\u2693 Muelles">
                    <option *ngFor="let p of muelles" [ngValue]="p.id">{{ p.icon }} {{ p.name }} \xB7 {{ p.state }}</option>
                  </optgroup>
                  <optgroup label="\u{1F3DD}\uFE0F Islas">
                    <option *ngFor="let p of islaPiers" [ngValue]="p.id">{{ p.icon }} {{ p.name }} \xB7 {{ p.state }}</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Precio / persona (USD) <span class="text-red-500">*</span></label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input type="number" [(ngModel)]="form.pricePerPerson" min="1" step="0.5" placeholder="0.00"
                    class="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-7 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
                </div>
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Duraci\xF3n (min)</label>
                <input type="number" [(ngModel)]="form.durationMinutes" min="1" placeholder="ej. 90"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">M\xE1x. pasajeros</label>
                <input type="number" [(ngModel)]="form.maxPassengers" min="1" [placeholder]="'Capacidad: ' + selectedVessel.capacity"
                  class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
              </div>

            </div>
            <div class="mt-6 flex gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
              <button (click)="save()" [disabled]="submitting"
                class="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50">
                {{ submitting ? 'Guardando...' : (editingId ? 'Actualizar' : 'Crear horario') }}
              </button>
              <button (click)="cancel()" type="button"
                class="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <!-- Tarjeta de horarios -->
        <div *ngIf="!showForm" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

          <!-- Header -->
          <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
            <div>
              <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">
                {{ typeIcon(selectedVessel.type) }} {{ selectedVessel.name }}
              </h3>
              <p class="text-sm text-gray-500">{{ allSlots.length }} horario{{ allSlots.length !== 1 ? 's' : '' }} en total</p>
            </div>
          </div>

          <!-- Filtros internos: fecha + b\xFAsqueda -->
          <div class="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center">
            <input type="text" [(ngModel)]="search" placeholder="Buscar por hora, ruta o fecha..."
              class="h-10 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
            <div class="flex items-center gap-2 h-10 rounded-lg border border-gray-300 bg-transparent px-4 dark:border-gray-700 shrink-0">
              <span class="text-xs text-gray-400">\u{1F4C5} Fecha ref.:</span>
              <input type="date" [(ngModel)]="selectedDate"
                class="border-0 bg-transparent text-sm text-gray-700 outline-none dark:text-white/90" />
            </div>
          </div>

          <!-- Tabla de horarios -->
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Hora</th>
                  <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Direcci\xF3n</th>
                  <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Ruta</th>
                  <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Fecha</th>
                  <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Precio</th>
                  <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Cupos</th>
                  <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Estado</th>
                  <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let s of allSlots" class="border-b border-gray-100 dark:border-gray-800"
                  [class.opacity-50]="isSlotPast(s) || !s.isActive">
                  <td class="px-5 py-4">
                    <p class="text-base font-bold text-gray-800 dark:text-white/90">{{ s.departureTime }}</p>
                    <p *ngIf="isSlotPast(s)" class="text-[10px] text-gray-400">Ya sali\xF3</p>
                  </td>
                  <td class="px-5 py-4">
                    <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold"
                      [class.bg-blue-100]="s.direction === 'IDA'" [class.text-blue-700]="s.direction === 'IDA'"
                      [class.bg-emerald-100]="s.direction === 'REGRESO'" [class.text-emerald-700]="s.direction === 'REGRESO'">
                      {{ s.direction === 'IDA' ? '\u2192 Ida' : '\u2190 Regreso' }}
                    </span>
                  </td>
                  <td class="px-5 py-4">
                    <p class="text-sm text-gray-700 dark:text-gray-300">
                      {{ s.departurePoint.name }} \u2192 {{ s.arrivalPoint.name }}
                    </p>
                    <p *ngIf="s.durationMinutes" class="text-xs text-gray-400">{{ s.durationMinutes }} min</p>
                  </td>
                  <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {{ s.departureDate ?? '\u2014' }}
                  </td>
                  <td class="px-5 py-4 text-right">
                    <p *ngIf="s.pricePerPerson" class="text-sm font-bold text-brand-600 dark:text-brand-400">
                      \${{ s.pricePerPerson | number:'1.2-2' }}
                    </p>
                    <p *ngIf="!s.pricePerPerson" class="text-xs text-amber-500">Sin precio</p>
                    <p class="text-[10px] text-gray-400">/ persona</p>
                  </td>
                  <td class="px-5 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    {{ s.maxPassengers ?? selectedVessel.capacity }}
                  </td>
                  <td class="px-5 py-4 text-center">
                    <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold"
                      [class.bg-green-100]="s.isActive" [class.text-green-700]="s.isActive"
                      [class.bg-gray-100]="!s.isActive" [class.text-gray-500]="!s.isActive">
                      {{ s.isActive ? 'Activo' : 'Pausado' }}
                    </span>
                  </td>
                  <td class="px-5 py-4">
                    <div class="flex items-center justify-center gap-1.5">
                      <button (click)="toggleActive(s)" title="{{ s.isActive ? 'Pausar' : 'Activar' }}"
                        class="rounded-lg border px-2.5 py-1.5 text-xs font-medium transition"
                        [class.border-amber-200]="s.isActive" [class.text-amber-600]="s.isActive" [class.hover:bg-amber-50]="s.isActive"
                        [class.border-green-200]="!s.isActive" [class.text-green-600]="!s.isActive" [class.hover:bg-green-50]="!s.isActive">
                        {{ s.isActive ? '\u23F8' : '\u25B6' }}
                      </button>
                      <button (click)="openEdit(s)"
                        class="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 dark:border-gray-700">
                        Editar
                      </button>
                      <button (click)="deleteSlot(s)"
                        class="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-red-500 hover:border-red-300 hover:bg-red-50 dark:border-gray-700">
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
                <tr *ngIf="allSlots.length === 0">
                  <td colspan="8" class="px-5 py-10 text-center text-sm text-gray-500">
                    {{ search ? 'No se encontraron horarios con "' + search + '".' : 'No hay horarios para esta embarcaci\xF3n.' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </ng-container>

    </ng-container>
  </ng-container>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItinerarioComponent, { className: "ItinerarioComponent", filePath: "src/app/pages/mi-charter/pages/itinerario/itinerario.component.ts", lineNumber: 31 });
})();
export {
  ItinerarioComponent
};
//# sourceMappingURL=chunk-TZERIAHE.js.map
