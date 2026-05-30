import {
  CaptainsService
} from "./chunk-NRCCU5JU.js";
import {
  ReservationChatComponent
} from "./chunk-RVJMCZTW.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import "./chunk-YL27M2LI.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import {
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/pages/mi-charter/pages/reservas-charter/reservas-charter.component.ts
function ReservasCharterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "p", 15);
    \u0275\u0275text(3, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "p", 15);
    \u0275\u0275text(8, "Confirmadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "p", 15);
    \u0275\u0275text(13, "En curso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14)(17, "p", 15);
    \u0275\u0275text(18, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "p", 15);
    \u0275\u0275text(23, "Ingresos totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 22);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("PENDING"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("CONFIRMED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("ACTIVE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("COMPLETED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.totalIngresos()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(28, 6, ctx_r0.totalIngresos(), "1.2-2"), " USD");
  }
}
function ReservasCharterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 23)(2, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ReservasCharterComponent_div_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filtroBusqueda, $event) || (ctx_r0.filtroBusqueda = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReservasCharterComponent_div_11_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ReservasCharterComponent_div_11_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filtroStatus, $event) || (ctx_r0.filtroStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReservasCharterComponent_div_11_Template_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementStart(4, "option", 26);
    \u0275\u0275text(5, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 27);
    \u0275\u0275text(7, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 28);
    \u0275\u0275text(9, "Confirmadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 29);
    \u0275\u0275text(11, "En curso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 30);
    \u0275\u0275text(13, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 31);
    \u0275\u0275text(15, "Canceladas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ReservasCharterComponent_div_11_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filtroConcluir, $event) || (ctx_r0.filtroConcluir = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReservasCharterComponent_div_11_Template_select_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementStart(17, "option", 26);
    \u0275\u0275text(18, "Todos los plazos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 32);
    \u0275\u0275text(20, "Por concluir (\u2264 3 d\xEDas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 33);
    \u0275\u0275text(22, "Sin vencer pronto");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filtroBusqueda);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filtroStatus);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filtroConcluir);
  }
}
function ReservasCharterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd()();
  }
}
function ReservasCharterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 38);
    \u0275\u0275text(4, "Sin reservas a\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6, "Las reservas de tus embarcaciones aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
}
function ReservasCharterComponent_div_14_tr_25_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3DD}\uFE0F ", r_r4.destination.name);
  }
}
function ReservasCharterComponent_div_14_tr_25_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', r_r4.specialRequests, '"');
  }
}
function ReservasCharterComponent_div_14_tr_25_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 80);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_div_22_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAssign(r_r4, $event));
    });
    \u0275\u0275text(4, " \u270F\uFE0F ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F468}\u200D\u2708\uFE0F ", ctx_r0.captainName(r_r4));
  }
}
function ReservasCharterComponent_div_14_tr_25_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_button_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openAssign(r_r4, $event));
    });
    \u0275\u0275text(1, " + Asignar capit\xE1n ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1, " No tienes capitanes aprobados. ");
    \u0275\u0275elementStart(2, "a", 93);
    \u0275\u0275text(3, "Reg\xEDstralos aqu\xED");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 105);
    \u0275\u0275text(1, " \u{1F534} Ocupado en esas fechas ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 106);
    \u0275\u0275text(1, " \u{1F7E2} Disponible ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 99)(1, "input", 100);
    \u0275\u0275listener("ngModelChange", function ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.selectedCaptainId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 101)(3, "p", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_p_5_Template, 2, 0, "p", 103)(6, ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_p_6_Template, 2, 0, "p", 104);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("hover:bg-gray-50", c_r10.isAvailable)("dark:hover:bg-white/[0", c_r10.isAvailable)("opacity-50", !c_r10.isAvailable)("cursor-not-allowed", !c_r10.isAvailable);
    \u0275\u0275property("title", c_r10.isAvailable ? "" : "Ocupado: " + (c_r10.conflictInfo ?? ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.selectedCaptainId)("value", c_r10.id)("disabled", !c_r10.isAvailable);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", c_r10.firstName, " ", c_r10.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r10.isAvailable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.isAvailable);
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "label", 95)(2, "input", 96);
    \u0275\u0275listener("ngModelChange", function ReservasCharterComponent_div_14_tr_25_div_24_div_5_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectedCaptainId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 97);
    \u0275\u0275text(4, "\u2014 Sin capit\xE1n \u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ReservasCharterComponent_div_14_tr_25_div_24_div_5_label_5_Template, 7, 16, "label", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.selectedCaptainId)("value", null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.captains);
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 107);
    \u0275\u0275text(1, " \u26A0\uFE0F Este capit\xE1n ya tiene un charter en esas fechas. ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "p", 83);
    \u0275\u0275text(2, " Capitanes aprobados ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReservasCharterComponent_div_14_tr_25_div_24_p_3_Template, 2, 0, "p", 84)(4, ReservasCharterComponent_div_14_tr_25_div_24_p_4_Template, 5, 0, "p", 85)(5, ReservasCharterComponent_div_14_tr_25_div_24_div_5_Template, 6, 3, "div", 86)(6, ReservasCharterComponent_div_14_tr_25_div_24_p_6_Template, 2, 0, "p", 87);
    \u0275\u0275elementStart(7, "div", 88)(8, "button", 89);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_div_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAssign(r_r4));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 90);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_div_24_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeAssign());
    });
    \u0275\u0275text(11, " \u2715 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingCaptains);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingCaptains && ctx_r0.captains.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingCaptains && ctx_r0.captains.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCaptainId && !ctx_r0.selectedCaptainAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.selectedCaptainId || ctx_r0.updatingId === r_r4.id || !ctx_r0.selectedCaptainAvailable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.updatingId === r_r4.id ? "Guardando..." : "Guardar", " ");
  }
}
function ReservasCharterComponent_div_14_tr_25_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275element(1, "span", 109)(2, "span", 110);
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_35_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F3D6}\uFE0F ", ctx_r0.daysRemaining(r_r4), "d restante", ctx_r0.daysRemaining(r_r4) !== 1 ? "s" : "", " ");
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_35_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 114);
    \u0275\u0275text(1, " \u2713 Per\xEDodo finalizado ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservasCharterComponent_div_14_tr_25_ng_container_35_p_1_Template, 2, 2, "p", 111)(2, ReservasCharterComponent_div_14_tr_25_ng_container_35_p_2_Template, 2, 0, "p", 112);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasEnded(r_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasEnded(r_r4));
  }
}
function ReservasCharterComponent_div_14_tr_25_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F3 Inicia el ", r_r4.startDate, " ");
  }
}
function ReservasCharterComponent_div_14_tr_25_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCounts[r_r4.id] > 9 ? "9+" : ctx_r0.unreadCounts[r_r4.id], " ");
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "button", 118);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_ng_container_43_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r4, "CONFIRMED"));
    });
    \u0275\u0275text(3, " \u2713 Confirmar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 119);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_ng_container_43_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r4, "CANCELLED"));
    });
    \u0275\u0275text(5, "\u2717");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r4.id);
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 119);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_ng_container_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r4, "CANCELLED"));
    });
    \u0275\u0275text(2, " \u2717 Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r4.id);
  }
}
function ReservasCharterComponent_div_14_tr_25_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 120);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_ng_container_45_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r4, "COMPLETED"));
    });
    \u0275\u0275text(2, " \u2713 Completar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-gray-700", ctx_r0.hasEnded(r_r4))("hover:bg-gray-800", ctx_r0.hasEnded(r_r4))("bg-gray-400", !ctx_r0.hasEnded(r_r4));
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r4.id || !ctx_r0.hasEnded(r_r4))("title", !ctx_r0.hasEnded(r_r4) ? "Disponible el " + r_r4.endDate : "Cerrar reserva");
  }
}
function ReservasCharterComponent_div_14_tr_25_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Actualizando...");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_Template_tr_click_0_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verDetalle(r_r4));
    });
    \u0275\u0275elementStart(1, "td", 52)(2, "div", 53)(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "p", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 52)(11, "p", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ReservasCharterComponent_div_14_tr_25_p_13_Template, 2, 1, "p", 59)(14, ReservasCharterComponent_div_14_tr_25_p_14_Template, 2, 1, "p", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 52)(16, "p", 61);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 62);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_Template_td_click_20_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(21, "div", 63);
    \u0275\u0275template(22, ReservasCharterComponent_div_14_tr_25_div_22_Template, 5, 1, "div", 64)(23, ReservasCharterComponent_div_14_tr_25_button_23_Template, 2, 0, "button", 65)(24, ReservasCharterComponent_div_14_tr_25_div_24_Template, 12, 6, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 67)(26, "span", 68);
    \u0275\u0275template(27, ReservasCharterComponent_div_14_tr_25_span_27_Template, 3, 0, "span", 69);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 70)(30, "p", 71);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ReservasCharterComponent_div_14_tr_25_ng_container_35_Template, 3, 2, "ng-container", 12)(36, ReservasCharterComponent_div_14_tr_25_p_36_Template, 2, 1, "p", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 62);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_Template_td_click_37_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(38, "div", 73)(39, "button", 74);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_25_Template_button_click_39_listener($event) {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChat(r_r4, $event));
    });
    \u0275\u0275element(40, "i", 75);
    \u0275\u0275text(41, " Chat ");
    \u0275\u0275template(42, ReservasCharterComponent_div_14_tr_25_span_42_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ReservasCharterComponent_div_14_tr_25_ng_container_43_Template, 6, 2, "ng-container", 12)(44, ReservasCharterComponent_div_14_tr_25_ng_container_44_Template, 3, 1, "ng-container", 12)(45, ReservasCharterComponent_div_14_tr_25_ng_container_45_Template, 3, 8, "ng-container", 12)(46, ReservasCharterComponent_div_14_tr_25_p_46_Template, 2, 0, "p", 77);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", r_r4.client == null ? null : r_r4.client.firstName == null ? null : r_r4.client.firstName.charAt(0), "", r_r4.client == null ? null : r_r4.client.lastName == null ? null : r_r4.client.lastName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r4.client == null ? null : r_r4.client.firstName, " ", r_r4.client == null ? null : r_r4.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.client == null ? null : r_r4.client.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.vessel == null ? null : r_r4.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.destination);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.specialRequests);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r4.startDate, " \u2192 ", r_r4.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("\u{1F319} ", r_r4.days, " ", r_r4.days === 1 ? "noche" : "noches", " \xB7 \u{1F465} ", r_r4.passengers, " pax");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (r_r4.captainProfile || r_r4.captain) && ctx_r0.assigningId !== r_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r4.captainProfile && !r_r4.captain && ctx_r0.assigningId !== r_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.assigningId === r_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusClass(r_r4.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(r_r4.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(r_r4.totalPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(34, 29, r_r4.totalPrice, "1.2-2"), " USD");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r4.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.status === "CONFIRMED" && !ctx_r0.hasStarted(r_r4));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (ctx_r0.unreadCounts[r_r4.id] ?? 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.status === "CONFIRMED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.updatingId === r_r4.id);
  }
}
function ReservasCharterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h3", 42);
    \u0275\u0275text(3, "Lista de reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "table", 44)(8, "thead", 45)(9, "tr")(10, "th", 46);
    \u0275\u0275text(11, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 46);
    \u0275\u0275text(13, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "Fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 47);
    \u0275\u0275text(19, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 48);
    \u0275\u0275text(21, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 48);
    \u0275\u0275text(23, "Chat / Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody", 49);
    \u0275\u0275template(25, ReservasCharterComponent_div_14_tr_25_Template, 47, 32, "tr", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.filtradas.length, " resultado", ctx_r0.filtradas.length !== 1 ? "s" : "", " \xB7 clic en fila para ver detalle");
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.filtradas);
  }
}
function ReservasCharterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "p", 122);
    \u0275\u0275text(2, "No hay reservas que coincidan con los filtros.");
    \u0275\u0275elementEnd()();
  }
}
function ReservasCharterComponent_ng_container_16_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-reservation-chat", 124);
    \u0275\u0275listener("closeChat", function ReservasCharterComponent_ng_container_16_ng_container_1_ng_container_1_Template_app_reservation_chat_closeChat_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeChat());
    })("unreadChange", function ReservasCharterComponent_ng_container_16_ng_container_1_ng_container_1_Template_app_reservation_chat_unreadChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const r_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onUnreadChange(r_r15.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("bookingId", r_r15.id)("clientUserId", ctx_r0.clientUserId(r_r15))("providerUserId", ctx_r0.currentUserProviderUserId)("title", ctx_r0.chatTitle(r_r15));
  }
}
function ReservasCharterComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservasCharterComponent_ng_container_16_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r15.id === ctx_r0.chatOpenId);
  }
}
function ReservasCharterComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservasCharterComponent_ng_container_16_ng_container_1_Template, 2, 1, "ng-container", 123);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.reservas);
  }
}
var ReservasCharterComponent = class _ReservasCharterComponent {
  alqService = inject(AlquileresService);
  captainsService = inject(CaptainsService);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  loading = true;
  updatingId = null;
  reservas = [];
  filtradas = [];
  filtroStatus = "";
  filtroBusqueda = "";
  filtroConcluir = "";
  // Captain assignment (from approved Captain profiles)
  captains = [];
  loadingCaptains = false;
  assigningId = null;
  // charter being assigned
  selectedCaptainId = null;
  // Chat
  chatOpenId = null;
  // id of the rental whose chat is open
  unreadCounts = {};
  get providerProfileId() {
    const user = this.authService.user();
    return user?.providerProfile?.id ?? null;
  }
  ngOnInit() {
    this.tasaService.load();
    const pid = this.providerProfileId;
    if (!pid) {
      this.loading = false;
      return;
    }
    this.alqService.getByProvider(pid).subscribe({
      next: (r) => {
        this.reservas = r;
        this.applyFilter();
        this.loading = false;
        this.loadUnreadCounts(r.map((x) => x.id));
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    let r = [...this.reservas];
    if (this.filtroStatus)
      r = r.filter((x) => x.status === this.filtroStatus);
    if (this.filtroBusqueda) {
      const q = this.filtroBusqueda.toLowerCase();
      r = r.filter((x) => `${x.client?.firstName} ${x.client?.lastName}`.toLowerCase().includes(q) || x.client?.email?.toLowerCase().includes(q) || x.vessel?.name?.toLowerCase().includes(q));
    }
    if (this.filtroConcluir === "ENDING_SOON") {
      r = r.filter((x) => x.status === "ACTIVE" && !this.hasEnded(x) && this.daysRemaining(x) <= 3);
    } else if (this.filtroConcluir === "NOT_ENDING") {
      r = r.filter((x) => x.status === "ACTIVE" && !this.hasEnded(x) && this.daysRemaining(x) > 3);
    }
    this.filtradas = r;
  }
  changeStatus(r, status) {
    this.updatingId = r.id;
    const dto = { status };
    if (status === "CANCELLED")
      dto.cancellationReason = "Cancelado por el proveedor";
    this.alqService.changeStatus(r.id, dto).subscribe({
      next: (updated) => {
        const idx = this.reservas.findIndex((x) => x.id === r.id);
        if (idx !== -1)
          this.reservas[idx] = updated;
        this.applyFilter();
        this.updatingId = null;
      },
      error: () => {
        this.updatingId = null;
      }
    });
  }
  // ── Captain assignment ─────────────────────────────────────────────────
  openAssign(r, event) {
    event.stopPropagation();
    if (this.assigningId === r.id) {
      this.closeAssign();
      return;
    }
    this.assigningId = r.id;
    this.selectedCaptainId = r.captainProfile?.id ?? null;
    this.captains = [];
    const pid = this.providerProfileId;
    if (!pid)
      return;
    this.loadingCaptains = true;
    this.captainsService.getApproved(pid, r.id).subscribe({
      next: (c) => {
        this.captains = c;
        this.loadingCaptains = false;
      },
      error: () => {
        this.loadingCaptains = false;
      }
    });
  }
  closeAssign() {
    this.assigningId = null;
    this.selectedCaptainId = null;
    this.captains = [];
  }
  get selectedCaptainAvailable() {
    if (!this.selectedCaptainId)
      return false;
    const cap = this.captains.find((c) => c.id === this.selectedCaptainId);
    return cap ? cap.isAvailable : true;
  }
  saveAssign(r) {
    if (!this.selectedCaptainId || !this.selectedCaptainAvailable)
      return;
    this.updatingId = r.id;
    this.alqService.assignCaptainProfile(r.id, this.selectedCaptainId).subscribe({
      next: (updated) => {
        const idx = this.reservas.findIndex((x) => x.id === r.id);
        if (idx !== -1)
          this.reservas[idx] = updated;
        this.applyFilter();
        this.updatingId = null;
        this.closeAssign();
      },
      error: () => {
        this.updatingId = null;
      }
    });
  }
  // ── Navigation ─────────────────────────────────────────────────────────
  verDetalle(r) {
    this.router.navigate(["/alquileres", r.id]);
  }
  // ── Helpers ────────────────────────────────────────────────────────────
  statusLabel(s) {
    const map = {
      PENDING: "Pendiente",
      CONFIRMED: "Confirmada",
      ACTIVE: "En curso",
      COMPLETED: "Completada",
      CANCELLED: "Cancelada"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    const map = {
      PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      ACTIVE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      COMPLETED: "bg-gray-100 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400",
      CANCELLED: "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
    };
    return map[s] ?? "bg-gray-100 text-gray-600";
  }
  countByStatus(s) {
    return this.reservas.filter((r) => r.status === s).length;
  }
  totalIngresos() {
    return this.reservas.filter((r) => r.status !== "CANCELLED").reduce((sum, r) => sum + Number(r.totalPrice ?? 0), 0);
  }
  hasStarted(r) {
    return r.startDate <= (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  hasEnded(r) {
    return r.endDate < (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  daysRemaining(r) {
    return Math.ceil(((/* @__PURE__ */ new Date(r.endDate + "T00:00:00")).getTime() - (/* @__PURE__ */ new Date()).getTime()) / 864e5);
  }
  captainName(r) {
    if (r.captainProfile)
      return `${r.captainProfile.firstName} ${r.captainProfile.lastName}`;
    if (r.captain)
      return `${r.captain.firstName} ${r.captain.lastName}`;
    return "";
  }
  // ── Chat ───────────────────────────────────────────────────────────────────
  openChat(r, event) {
    event.stopPropagation();
    this.chatOpenId = r.id;
  }
  closeChat() {
    this.chatOpenId = null;
  }
  chatTitle(r) {
    return r.client ? `${r.client.firstName} ${r.client.lastName}` : `Charter #${r.id}`;
  }
  clientUserId(r) {
    return r.client?.id ?? 0;
  }
  get currentUserProviderUserId() {
    return this.authService.user()?.id ?? 0;
  }
  loadUnreadCounts(ids) {
    if (!ids.length)
      return;
    const me = this.authService.user()?.id;
    if (!me)
      return;
    this.http.get(`${environment.apiUrl}/chat/booking-unread?ids=${ids.join(",")}&type=CHARTER`).subscribe({ next: (counts) => {
      this.unreadCounts = counts;
    } });
  }
  onUnreadChange(bookingId, count) {
    this.unreadCounts = __spreadProps(__spreadValues({}, this.unreadCounts), { [bookingId]: count });
  }
  static \u0275fac = function ReservasCharterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservasCharterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservasCharterComponent, selectors: [["app-reservas-charter"]], decls: 17, vars: 7, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mi-charter/yates", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "grid grid-cols-2 gap-4 lg:grid-cols-5", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-5"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-xs", "text-gray-400"], [1, "text-3xl", "font-extrabold", "text-amber-500"], [1, "text-3xl", "font-extrabold", "text-blue-500"], [1, "text-3xl", "font-extrabold", "text-green-500"], [1, "text-3xl", "font-extrabold", "text-gray-500"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "col-span-2", "lg:col-span-1"], [1, "text-2xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-[10px]", "text-gray-400"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center"], ["placeholder", "Buscar cliente o embarcaci\xF3n...", 1, "h-10", "flex-1", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-sm", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "h-10", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["value", "ENDING_SOON"], ["value", "NOT_ENDING"], [1, "flex", "justify-center", "py-20"], [1, "text-5xl", "animate-bounce"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "group cursor-pointer transition-colors hover:bg-gray-50/60 dark:hover:bg-white/[0.02]", 3, "click", 4, "ngFor", "ngForOf"], [1, "group", "cursor-pointer", "transition-colors", "hover:bg-gray-50/60", "dark:hover:bg-white/[0.02]", 3, "click"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-2.5"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-brand-500", "text-xs", "font-bold", "text-white"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "truncate", "text-xs", "text-gray-400"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], ["class", "text-xs text-gray-400", 4, "ngIf"], ["class", "mt-0.5 max-w-[180px] truncate text-[11px] italic text-gray-400", 4, "ngIf"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4", 3, "click"], [1, "relative"], ["class", "flex items-center gap-1.5", 4, "ngIf"], ["class", "inline-flex items-center gap-1 rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-xs text-gray-400 hover:border-brand-400 hover:text-brand-500 dark:border-gray-700", 3, "click", 4, "ngIf"], ["class", "absolute left-0 top-0 z-20 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-slate-800", 4, "ngIf"], [1, "px-5", "py-4", "text-center"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-bold"], ["class", "relative flex h-1.5 w-1.5", 4, "ngIf"], [1, "px-5", "py-4", "text-right"], [1, "text-base", "font-extrabold", "text-brand-600", "dark:text-brand-400"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400", 4, "ngIf"], [1, "flex", "flex-col", "items-end", "gap-1.5"], [1, "relative", "inline-flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-gray-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-400", "hover:text-brand-600", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:border-brand-400", "dark:hover:text-brand-400", "transition-colors", 3, "click"], [1, "fas", "fa-comment-dots"], ["class", "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white", 4, "ngIf"], ["class", "text-[10px] text-gray-400", 4, "ngIf"], [1, "mt-0.5", "max-w-[180px]", "truncate", "text-[11px]", "italic", "text-gray-400"], [1, "flex", "items-center", "gap-1.5"], [1, "ml-1", "rounded", "px-1.5", "py-0.5", "text-[10px]", "text-gray-400", "hover:bg-gray-100", "dark:hover:bg-white/10", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "rounded-lg", "border", "border-dashed", "border-gray-300", "px-2.5", "py-1", "text-xs", "text-gray-400", "hover:border-brand-400", "hover:text-brand-500", "dark:border-gray-700", 3, "click"], [1, "absolute", "left-0", "top-0", "z-20", "w-64", "rounded-xl", "border", "border-gray-200", "bg-white", "p-3", "shadow-xl", "dark:border-gray-700", "dark:bg-slate-800"], [1, "mb-2", "px-1", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], ["class", "mb-2 px-1 text-xs text-gray-400 animate-pulse", 4, "ngIf"], ["class", "mb-2 px-1 text-[11px] text-amber-600", 4, "ngIf"], ["class", "mb-2 space-y-1 max-h-40 overflow-y-auto", 4, "ngIf"], ["class", "mb-2 rounded-lg bg-red-50 px-2 py-1.5 text-[11px] text-red-600 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "flex", "gap-1.5", "pt-1", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "flex-1", "rounded-lg", "bg-brand-500", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "text-gray-500", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "mb-2", "px-1", "text-xs", "text-gray-400", "animate-pulse"], [1, "mb-2", "px-1", "text-[11px]", "text-amber-600"], ["routerLink", "/mis-capitanes", 1, "underline", "font-medium"], [1, "mb-2", "space-y-1", "max-h-40", "overflow-y-auto"], [1, "flex", "items-center", "gap-2", "rounded-lg", "px-2", "py-1.5", "cursor-pointer", "hover:bg-gray-50", "dark:hover:bg-white/[0.05]"], ["type", "radio", 1, "accent-brand-500", 3, "ngModelChange", "ngModel", "value"], [1, "text-sm", "text-gray-500"], ["class", "flex items-center gap-2 rounded-lg px-2 py-1.5 cursor-pointer transition-colors", 3, "hover:bg-gray-50", "dark:hover:bg-white/[0", "opacity-50", "cursor-not-allowed", "title", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "rounded-lg", "px-2", "py-1.5", "cursor-pointer", "transition-colors", 3, "title"], ["type", "radio", 1, "accent-brand-500", 3, "ngModelChange", "ngModel", "value", "disabled"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90", "truncate"], ["class", "text-[10px] text-red-500 font-semibold", 4, "ngIf"], ["class", "text-[10px] text-green-600", 4, "ngIf"], [1, "text-[10px]", "text-red-500", "font-semibold"], [1, "text-[10px]", "text-green-600"], [1, "mb-2", "rounded-lg", "bg-red-50", "px-2", "py-1.5", "text-[11px]", "text-red-600", "dark:bg-red-500/10", "dark:text-red-400"], [1, "relative", "flex", "h-1.5", "w-1.5"], [1, "absolute", "inline-flex", "h-full", "w-full", "animate-ping", "rounded-full", "bg-current", "opacity-75"], [1, "relative", "inline-flex", "h-1.5", "w-1.5", "rounded-full", "bg-current"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:bg-white/[0.06]", 4, "ngIf"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-green-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-gray-500", "dark:bg-white/[0.06]"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-blue-50", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-blue-600", "dark:bg-blue-500/10", "dark:text-blue-400"], [1, "absolute", "-top-1.5", "-right-1.5", "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-red-500", "text-[9px]", "font-bold", "text-white"], [1, "flex", "gap-1.5"], [1, "rounded-lg", "bg-blue-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-blue-600", "disabled:opacity-50", "whitespace-nowrap", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-red-300", "px-3", "py-1.5", "text-xs", "font-bold", "text-red-500", "hover:bg-red-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "transition-colors", "disabled:cursor-not-allowed", "disabled:opacity-40", "whitespace-nowrap", 3, "click", "disabled", "title"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-200", "bg-white", "p-10", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-gray-500"], [4, "ngFor", "ngForOf"], ["bookingType", "CHARTER", 3, "closeChat", "unreadChange", "bookingId", "clientUserId", "providerUserId", "title"]], template: function ReservasCharterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Charters contratados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Gestiona las reservas de tus embarcaciones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " \u26F5 Mis embarcaciones ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ReservasCharterComponent_div_10_Template, 29, 9, "div", 6)(11, ReservasCharterComponent_div_11_Template, 23, 3, "div", 7)(12, ReservasCharterComponent_div_12_Template, 3, 0, "div", 8)(13, ReservasCharterComponent_div_13_Template, 7, 0, "div", 9)(14, ReservasCharterComponent_div_14_Template, 26, 3, "div", 10)(15, ReservasCharterComponent_div_15_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ReservasCharterComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.reservas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.reservas.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtradas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.reservas.length > 0 && ctx.filtradas.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.chatOpenId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, ReservationChatComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservasCharterComponent, [{
    type: Component,
    args: [{ selector: "app-reservas-charter", standalone: true, imports: [CommonModule, FormsModule, RouterModule, ReservationChatComponent], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Charters contratados</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona las reservas de tus embarcaciones.</p>
      </div>
      <a routerLink="/mi-charter/yates"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
        \u26F5 Mis embarcaciones
      </a>
    </div>
  </div>

  <!-- M\xE9tricas -->
  <div *ngIf="!loading" class="grid grid-cols-2 gap-4 lg:grid-cols-5">
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Pendientes</p>
      <p class="text-3xl font-extrabold text-amber-500">{{ countByStatus('PENDING') }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Confirmadas</p>
      <p class="text-3xl font-extrabold text-blue-500">{{ countByStatus('CONFIRMED') }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">En curso</p>
      <p class="text-3xl font-extrabold text-green-500">{{ countByStatus('ACTIVE') }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <p class="text-xs text-gray-400">Completadas</p>
      <p class="text-3xl font-extrabold text-gray-500">{{ countByStatus('COMPLETED') }}</p>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] col-span-2 lg:col-span-1">
      <p class="text-xs text-gray-400">Ingresos totales</p>
      <p class="text-2xl font-extrabold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(totalIngresos()) }}</p>
      <p class="text-[10px] text-gray-400">\${{ totalIngresos() | number:'1.2-2' }} USD</p>
    </div>
  </div>

  <!-- Filtros -->
  <div *ngIf="!loading && reservas.length > 0"
    class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input [(ngModel)]="filtroBusqueda" (ngModelChange)="applyFilter()"
        placeholder="Buscar cliente o embarcaci\xF3n..."
        class="h-10 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
      <select [(ngModel)]="filtroStatus" (ngModelChange)="applyFilter()"
        class="h-10 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white">
        <option value="">Todos los estados</option>
        <option value="PENDING">Pendientes</option>
        <option value="CONFIRMED">Confirmadas</option>
        <option value="ACTIVE">En curso</option>
        <option value="COMPLETED">Completadas</option>
        <option value="CANCELLED">Canceladas</option>
      </select>
      <select [(ngModel)]="filtroConcluir" (ngModelChange)="applyFilter()"
        class="h-10 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-slate-800 dark:text-white">
        <option value="">Todos los plazos</option>
        <option value="ENDING_SOON">Por concluir (\u2264 3 d\xEDas)</option>
        <option value="NOT_ENDING">Sin vencer pronto</option>
      </select>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-5xl animate-bounce">\u26F5</div>
  </div>

  <!-- Sin reservas -->
  <div *ngIf="!loading && reservas.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u{1F4CB}</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin reservas a\xFAn</h3>
    <p class="mt-2 text-sm text-gray-500">Las reservas de tus embarcaciones aparecer\xE1n aqu\xED.</p>
  </div>

  <!-- Tabla -->
  <div *ngIf="!loading && filtradas.length > 0"
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Lista de reservas</h3>
      <span class="text-xs text-gray-400">{{ filtradas.length }} resultado{{ filtradas.length !== 1 ? 's' : '' }} \xB7 clic en fila para ver detalle</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Fechas</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Capit\xE1n</th>
            <th class="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Total</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Chat / Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let r of filtradas"
            (click)="verDetalle(r)"
            class="group cursor-pointer transition-colors hover:bg-gray-50/60 dark:hover:bg-white/[0.02]">

            <!-- Cliente -->
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {{ r.client?.firstName?.charAt(0) }}{{ r.client?.lastName?.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <p class="truncate text-sm font-medium text-gray-800 dark:text-white/90">{{ r.client?.firstName }} {{ r.client?.lastName }}</p>
                  <p class="truncate text-xs text-gray-400">{{ r.client?.email }}</p>
                </div>
              </div>
            </td>

            <!-- Embarcaci\xF3n -->
            <td class="px-5 py-4">
              <p class="font-medium text-gray-800 dark:text-white/90">{{ r.vessel?.name }}</p>
              <p *ngIf="r.destination" class="text-xs text-gray-400">\u{1F3DD}\uFE0F {{ r.destination.name }}</p>
              <p *ngIf="r.specialRequests" class="mt-0.5 max-w-[180px] truncate text-[11px] italic text-gray-400">"{{ r.specialRequests }}"</p>
            </td>

            <!-- Fechas -->
            <td class="px-5 py-4">
              <p class="text-sm text-gray-700 dark:text-gray-300">{{ r.startDate }} \u2192 {{ r.endDate }}</p>
              <p class="text-xs text-gray-400">\u{1F319} {{ r.days }} {{ r.days === 1 ? 'noche' : 'noches' }} \xB7 \u{1F465} {{ r.passengers }} pax</p>
            </td>

            <!-- Capit\xE1n -->
            <td class="px-5 py-4" (click)="$event.stopPropagation()">
              <div class="relative">
                <!-- Capit\xE1n asignado -->
                <div *ngIf="(r.captainProfile || r.captain) && assigningId !== r.id" class="flex items-center gap-1.5">
                  <span class="text-sm text-gray-700 dark:text-gray-300">\u{1F468}\u200D\u2708\uFE0F {{ captainName(r) }}</span>
                  <button (click)="openAssign(r, $event)"
                    class="ml-1 rounded px-1.5 py-0.5 text-[10px] text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10">
                    \u270F\uFE0F
                  </button>
                </div>

                <!-- Sin capit\xE1n -->
                <button *ngIf="!r.captainProfile && !r.captain && assigningId !== r.id"
                  (click)="openAssign(r, $event)"
                  class="inline-flex items-center gap-1 rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-xs text-gray-400 hover:border-brand-400 hover:text-brand-500 dark:border-gray-700">
                  + Asignar capit\xE1n
                </button>

                <!-- Dropdown de selecci\xF3n -->
                <div *ngIf="assigningId === r.id"
                  class="absolute left-0 top-0 z-20 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-slate-800">
                  <p class="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    Capitanes aprobados
                  </p>

                  <!-- Loading -->
                  <p *ngIf="loadingCaptains" class="mb-2 px-1 text-xs text-gray-400 animate-pulse">Cargando...</p>

                  <!-- Sin capitanes -->
                  <p *ngIf="!loadingCaptains && captains.length === 0" class="mb-2 px-1 text-[11px] text-amber-600">
                    No tienes capitanes aprobados.
                    <a routerLink="/mis-capitanes" class="underline font-medium">Reg\xEDstralos aqu\xED</a>.
                  </p>

                  <!-- Lista de capitanes con disponibilidad -->
                  <div *ngIf="!loadingCaptains && captains.length > 0" class="mb-2 space-y-1 max-h-40 overflow-y-auto">
                    <!-- Opci\xF3n vac\xEDa -->
                    <label class="flex items-center gap-2 rounded-lg px-2 py-1.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.05]">
                      <input type="radio" [ngModel]="selectedCaptainId" (ngModelChange)="selectedCaptainId = $event" [value]="null" class="accent-brand-500">
                      <span class="text-sm text-gray-500">\u2014 Sin capit\xE1n \u2014</span>
                    </label>

                    <label *ngFor="let c of captains"
                      class="flex items-center gap-2 rounded-lg px-2 py-1.5 cursor-pointer transition-colors"
                      [class.hover:bg-gray-50]="c.isAvailable"
                      [class.dark:hover:bg-white/[0.05]]="c.isAvailable"
                      [class.opacity-50]="!c.isAvailable"
                      [class.cursor-not-allowed]="!c.isAvailable"
                      [title]="c.isAvailable ? '' : ('Ocupado: ' + (c.conflictInfo ?? ''))">
                      <input type="radio" [ngModel]="selectedCaptainId" (ngModelChange)="selectedCaptainId = $event"
                        [value]="c.id" [disabled]="!c.isAvailable" class="accent-brand-500">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-800 dark:text-white/90 truncate">
                          {{ c.firstName }} {{ c.lastName }}
                        </p>
                        <p *ngIf="!c.isAvailable" class="text-[10px] text-red-500 font-semibold">
                          \u{1F534} Ocupado en esas fechas
                        </p>
                        <p *ngIf="c.isAvailable" class="text-[10px] text-green-600">
                          \u{1F7E2} Disponible
                        </p>
                      </div>
                    </label>
                  </div>

                  <!-- Alerta si el seleccionado est\xE1 ocupado -->
                  <p *ngIf="selectedCaptainId && !selectedCaptainAvailable"
                    class="mb-2 rounded-lg bg-red-50 px-2 py-1.5 text-[11px] text-red-600 dark:bg-red-500/10 dark:text-red-400">
                    \u26A0\uFE0F Este capit\xE1n ya tiene un charter en esas fechas.
                  </p>

                  <div class="flex gap-1.5 pt-1 border-t border-gray-100 dark:border-gray-700">
                    <button (click)="saveAssign(r)"
                      [disabled]="!selectedCaptainId || updatingId === r.id || !selectedCaptainAvailable"
                      class="flex-1 rounded-lg bg-brand-500 py-1.5 text-xs font-bold text-white hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed">
                      {{ updatingId === r.id ? 'Guardando...' : 'Guardar' }}
                    </button>
                    <button (click)="closeAssign()"
                      class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
                      \u2715
                    </button>
                  </div>
                </div>
              </div>
            </td>

            <!-- Estado badge -->
            <td class="px-5 py-4 text-center">
              <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold" [class]="statusClass(r.status)">
                <span *ngIf="r.status === 'ACTIVE'" class="relative flex h-1.5 w-1.5">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
                  <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-current"></span>
                </span>
                {{ statusLabel(r.status) }}
              </span>
            </td>

            <!-- Precio -->
            <td class="px-5 py-4 text-right">
              <p class="text-base font-extrabold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(r.totalPrice) }}</p>
              <p class="text-xs text-gray-400">\${{ r.totalPrice | number:'1.2-2' }} USD</p>
              <ng-container *ngIf="r.status === 'ACTIVE'">
                <p *ngIf="!hasEnded(r)" class="mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  \u{1F3D6}\uFE0F {{ daysRemaining(r) }}d restante{{ daysRemaining(r) !== 1 ? 's' : '' }}
                </p>
                <p *ngIf="hasEnded(r)" class="mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:bg-white/[0.06]">
                  \u2713 Per\xEDodo finalizado
                </p>
              </ng-container>
              <p *ngIf="r.status === 'CONFIRMED' && !hasStarted(r)" class="mt-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                \u23F3 Inicia el {{ r.startDate }}
              </p>
            </td>

            <!-- Acciones -->
            <td class="px-5 py-4" (click)="$event.stopPropagation()">
              <div class="flex flex-col items-end gap-1.5">
                <!-- Chat button -->
                <button (click)="openChat(r, $event)"
                  class="relative inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-400 dark:hover:text-brand-400 transition-colors">
                  <i class="fas fa-comment-dots"></i> Chat
                  <span *ngIf="(unreadCounts[r.id] ?? 0) > 0"
                    class="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                    {{ unreadCounts[r.id] > 9 ? '9+' : unreadCounts[r.id] }}
                  </span>
                </button>
                <ng-container *ngIf="r.status === 'PENDING'">
                  <div class="flex gap-1.5">
                    <button (click)="changeStatus(r, 'CONFIRMED')" [disabled]="updatingId === r.id"
                      class="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-600 disabled:opacity-50 whitespace-nowrap">
                      \u2713 Confirmar
                    </button>
                    <button (click)="changeStatus(r, 'CANCELLED')" [disabled]="updatingId === r.id"
                      class="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 disabled:opacity-50">\u2717</button>
                  </div>
                </ng-container>
                <ng-container *ngIf="r.status === 'CONFIRMED'">
                  <button (click)="changeStatus(r, 'CANCELLED')" [disabled]="updatingId === r.id"
                    class="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 disabled:opacity-50">
                    \u2717 Cancelar
                  </button>
                </ng-container>
                <ng-container *ngIf="r.status === 'ACTIVE'">
                  <button (click)="changeStatus(r, 'COMPLETED')"
                    [disabled]="updatingId === r.id || !hasEnded(r)"
                    [title]="!hasEnded(r) ? 'Disponible el ' + r.endDate : 'Cerrar reserva'"
                    class="rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap"
                    [class.bg-gray-700]="hasEnded(r)" [class.hover:bg-gray-800]="hasEnded(r)"
                    [class.bg-gray-400]="!hasEnded(r)">
                    \u2713 Completar
                  </button>
                </ng-container>
                <p *ngIf="updatingId === r.id" class="text-[10px] text-gray-400">Actualizando...</p>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Sin resultados filtro -->
  <div *ngIf="!loading && reservas.length > 0 && filtradas.length === 0"
    class="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <p class="text-gray-500">No hay reservas que coincidan con los filtros.</p>
  </div>

</div>

<!-- Reservation Chat Panel -->
<ng-container *ngIf="chatOpenId">
  <ng-container *ngFor="let r of reservas">
    <ng-container *ngIf="r.id === chatOpenId">
      <app-reservation-chat
        [bookingId]="r.id"
        bookingType="CHARTER"
        [clientUserId]="clientUserId(r)"
        [providerUserId]="currentUserProviderUserId"
        [title]="chatTitle(r)"
        (closeChat)="closeChat()"
        (unreadChange)="onUnreadChange(r.id, $event)">
      </app-reservation-chat>
    </ng-container>
  </ng-container>
</ng-container>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservasCharterComponent, { className: "ReservasCharterComponent", filePath: "src/app/pages/mi-charter/pages/reservas-charter/reservas-charter.component.ts", lineNumber: 22 });
})();
export {
  ReservasCharterComponent
};
//# sourceMappingURL=chunk-M5TEQY34.js.map
