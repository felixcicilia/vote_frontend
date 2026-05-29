import {
  AlquileresService
} from "./chunk-R5MJQUPH.js";
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
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
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
} from "./chunk-6L3J4MHE.js";

// src/app/pages/mi-charter/pages/reservas-charter/reservas-charter.component.ts
function ReservasCharterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "p", 14);
    \u0275\u0275text(3, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "p", 14);
    \u0275\u0275text(8, "Confirmadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "p", 14);
    \u0275\u0275text(13, "En curso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "p", 14);
    \u0275\u0275text(18, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "p", 14);
    \u0275\u0275text(23, "Ingresos totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 21);
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
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 22)(2, "input", 23);
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
    \u0275\u0275elementStart(3, "select", 24);
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
    \u0275\u0275elementStart(4, "option", 25);
    \u0275\u0275text(5, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 26);
    \u0275\u0275text(7, "Pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 27);
    \u0275\u0275text(9, "Confirmadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 28);
    \u0275\u0275text(11, "En curso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 29);
    \u0275\u0275text(13, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 30);
    \u0275\u0275text(15, "Canceladas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 24);
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
    \u0275\u0275elementStart(17, "option", 25);
    \u0275\u0275text(18, "Todos los plazos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 31);
    \u0275\u0275text(20, "Por concluir (\u2264 3 d\xEDas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 32);
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
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd()();
  }
}
function ReservasCharterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 37);
    \u0275\u0275text(4, "Sin reservas a\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6, "Las reservas de tus embarcaciones aparecer\xE1n aqu\xED.");
    \u0275\u0275elementEnd()();
  }
}
function ReservasCharterComponent_div_14_tr_23_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3DD}\uFE0F ", r_r3.destination.name);
  }
}
function ReservasCharterComponent_div_14_tr_23_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', r_r3.specialRequests, '" ');
  }
}
function ReservasCharterComponent_div_14_tr_23_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275element(1, "span", 72)(2, "span", 73);
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_30_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F3D6}\uFE0F ", ctx_r0.daysRemaining(r_r3), "d restante", ctx_r0.daysRemaining(r_r3) !== 1 ? "s" : "", " ");
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_30_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, " \u2713 Per\xEDodo finalizado ");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservasCharterComponent_div_14_tr_23_ng_container_30_p_1_Template, 2, 2, "p", 74)(2, ReservasCharterComponent_div_14_tr_23_ng_container_30_p_2_Template, 2, 0, "p", 75);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasEnded(r_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasEnded(r_r3));
  }
}
function ReservasCharterComponent_div_14_tr_23_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F3 Inicia el ", r_r3.startDate, " ");
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79)(2, "button", 80);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_23_ng_container_34_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r3, "CONFIRMED"));
    });
    \u0275\u0275text(3, " \u2713 Confirmar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 81);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_23_ng_container_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r3, "CANCELLED"));
    });
    \u0275\u0275text(5, " \u2717 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r3.id);
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 81);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_23_ng_container_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r3, "CANCELLED"));
    });
    \u0275\u0275text(2, " \u2717 Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r3.id);
  }
}
function ReservasCharterComponent_div_14_tr_23_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 82);
    \u0275\u0275listener("click", function ReservasCharterComponent_div_14_tr_23_ng_container_36_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeStatus(r_r3, "COMPLETED"));
    });
    \u0275\u0275text(2, " \u2713 Completar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-gray-700", ctx_r0.hasEnded(r_r3))("hover:bg-gray-800", ctx_r0.hasEnded(r_r3))("bg-gray-400", !ctx_r0.hasEnded(r_r3));
    \u0275\u0275property("disabled", ctx_r0.updatingId === r_r3.id || !ctx_r0.hasEnded(r_r3))("title", !ctx_r0.hasEnded(r_r3) ? "Disponible el " + r_r3.endDate : "Cerrar reserva");
  }
}
function ReservasCharterComponent_div_14_tr_23_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Actualizando...");
    \u0275\u0275elementEnd();
  }
}
function ReservasCharterComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51)(2, "div", 52)(3, "div", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "p", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 51)(11, "p", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ReservasCharterComponent_div_14_tr_23_p_13_Template, 2, 1, "p", 58)(14, ReservasCharterComponent_div_14_tr_23_p_14_Template, 2, 1, "p", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 51)(16, "p", 60);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 61)(21, "span", 62);
    \u0275\u0275template(22, ReservasCharterComponent_div_14_tr_23_span_22_Template, 3, 0, "span", 63);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 64)(25, "p", 65);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 14);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ReservasCharterComponent_div_14_tr_23_ng_container_30_Template, 3, 2, "ng-container", 66)(31, ReservasCharterComponent_div_14_tr_23_p_31_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 51)(33, "div", 68);
    \u0275\u0275template(34, ReservasCharterComponent_div_14_tr_23_ng_container_34_Template, 6, 2, "ng-container", 66)(35, ReservasCharterComponent_div_14_tr_23_ng_container_35_Template, 3, 1, "ng-container", 66)(36, ReservasCharterComponent_div_14_tr_23_ng_container_36_Template, 3, 8, "ng-container", 66)(37, ReservasCharterComponent_div_14_tr_23_p_37_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", r_r3.client == null ? null : r_r3.client.firstName == null ? null : r_r3.client.firstName.charAt(0), "", r_r3.client == null ? null : r_r3.client.lastName == null ? null : r_r3.client.lastName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r3.client == null ? null : r_r3.client.firstName, " ", r_r3.client == null ? null : r_r3.client.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.client == null ? null : r_r3.client.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.vessel == null ? null : r_r3.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.destination);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.specialRequests);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", r_r3.startDate, " \u2192 ", r_r3.endDate, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" \u{1F319} ", r_r3.days, " ", r_r3.days === 1 ? "noche" : "noches", " \xB7 \u{1F465} ", r_r3.passengers, " pax ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusClass(r_r3.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(r_r3.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tasaService.formatBs(r_r3.totalPrice), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(29, 25, r_r3.totalPrice, "1.2-2"), " USD");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r3.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.status === "CONFIRMED" && !ctx_r0.hasStarted(r_r3));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r3.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.status === "CONFIRMED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r3.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.updatingId === r_r3.id);
  }
}
function ReservasCharterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3, "Lista de reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "table", 43)(8, "thead", 44)(9, "tr")(10, "th", 45);
    \u0275\u0275text(11, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 45);
    \u0275\u0275text(13, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275text(15, "Fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 46);
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 47);
    \u0275\u0275text(19, "Precio / Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 47);
    \u0275\u0275text(21, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 48);
    \u0275\u0275template(23, ReservasCharterComponent_div_14_tr_23_Template, 38, 28, "tr", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.filtradas.length, " resultado", ctx_r0.filtradas.length !== 1 ? "s" : "");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.filtradas);
  }
}
function ReservasCharterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "p", 84);
    \u0275\u0275text(2, "No hay reservas que coincidan con los filtros.");
    \u0275\u0275elementEnd()();
  }
}
var ReservasCharterComponent = class _ReservasCharterComponent {
  alqService = inject(AlquileresService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  route = inject(ActivatedRoute);
  loading = true;
  updatingId = null;
  reservas = [];
  filtradas = [];
  filtroStatus = "";
  filtroBusqueda = "";
  filtroConcluir = "";
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
  /** true when today >= startDate (charter has begun or starts today) */
  hasStarted(r) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return r.startDate <= today;
  }
  /** true when today > endDate (charter period is fully over) */
  hasEnded(r) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return r.endDate < today;
  }
  /** Days remaining in the charter (negative means it's over) */
  daysRemaining(r) {
    const today = /* @__PURE__ */ new Date();
    const end = /* @__PURE__ */ new Date(r.endDate + "T00:00:00");
    return Math.ceil((end.getTime() - today.getTime()) / 864e5);
  }
  static \u0275fac = function ReservasCharterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservasCharterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservasCharterComponent, selectors: [["app-reservas-charter"]], decls: 16, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mi-charter/yates", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "grid grid-cols-2 gap-4 lg:grid-cols-5", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-5"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-xs", "text-gray-400"], [1, "text-3xl", "font-extrabold", "text-amber-500"], [1, "text-3xl", "font-extrabold", "text-blue-500"], [1, "text-3xl", "font-extrabold", "text-green-500"], [1, "text-3xl", "font-extrabold", "text-gray-500"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "col-span-2", "lg:col-span-1"], [1, "text-2xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-[10px]", "text-gray-400"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center"], ["placeholder", "Buscar cliente o embarcaci\xF3n...", 1, "h-10", "flex-1", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-sm", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "h-10", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "text-sm", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELLED"], ["value", "ENDING_SOON"], ["value", "NOT_ENDING"], [1, "flex", "justify-center", "py-20"], [1, "text-5xl", "animate-bounce"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "group transition-colors hover:bg-gray-50/60 dark:hover:bg-white/[0.02]", 4, "ngFor", "ngForOf"], [1, "group", "transition-colors", "hover:bg-gray-50/60", "dark:hover:bg-white/[0.02]"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-2.5"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-brand-500", "text-xs", "font-bold", "text-white"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "truncate", "text-xs", "text-gray-400"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], ["class", "text-xs text-gray-400", 4, "ngIf"], ["class", "mt-0.5 max-w-[180px] truncate text-[11px] italic text-gray-400", 4, "ngIf"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4", "text-center"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-2.5", "py-1", "text-xs", "font-bold"], ["class", "relative flex h-1.5 w-1.5", 4, "ngIf"], [1, "px-5", "py-4", "text-right"], [1, "text-base", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [4, "ngIf"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400", 4, "ngIf"], [1, "flex", "flex-col", "items-end", "gap-1.5"], ["class", "text-[10px] text-gray-400", 4, "ngIf"], [1, "mt-0.5", "max-w-[180px]", "truncate", "text-[11px]", "italic", "text-gray-400"], [1, "relative", "flex", "h-1.5", "w-1.5"], [1, "absolute", "inline-flex", "h-full", "w-full", "animate-ping", "rounded-full", "bg-current", "opacity-75"], [1, "relative", "inline-flex", "h-1.5", "w-1.5", "rounded-full", "bg-current"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:bg-white/[0.06]", 4, "ngIf"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-green-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-gray-500", "dark:bg-white/[0.06]"], [1, "mt-1", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-blue-50", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-blue-600", "dark:bg-blue-500/10", "dark:text-blue-400"], [1, "flex", "gap-1.5"], [1, "rounded-lg", "bg-blue-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-blue-600", "disabled:opacity-50", "whitespace-nowrap", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-red-300", "px-3", "py-1.5", "text-xs", "font-bold", "text-red-500", "hover:bg-red-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "transition-colors", "disabled:cursor-not-allowed", "disabled:opacity-40", "whitespace-nowrap", 3, "click", "disabled", "title"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-200", "bg-white", "p-10", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-gray-500"]], template: function ReservasCharterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Reservas de charter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Gestiona las reservas de tus embarcaciones.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " \u26F5 Mis embarcaciones ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ReservasCharterComponent_div_10_Template, 29, 9, "div", 6)(11, ReservasCharterComponent_div_11_Template, 23, 3, "div", 7)(12, ReservasCharterComponent_div_12_Template, 3, 0, "div", 8)(13, ReservasCharterComponent_div_13_Template, 7, 0, "div", 9)(14, ReservasCharterComponent_div_14_Template, 24, 3, "div", 10)(15, ReservasCharterComponent_div_15_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd();
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
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservasCharterComponent, [{
    type: Component,
    args: [{ selector: "app-reservas-charter", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Reservas de charter</h1>
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
      <!-- Filtro especial: por concluir -->
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
      <span class="text-xs text-gray-400">{{ filtradas.length }} resultado{{ filtradas.length !== 1 ? 's' : '' }}</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="border-b border-gray-100 dark:border-gray-800">
          <tr>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Embarcaci\xF3n</th>
            <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">Fechas</th>
            <th class="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Precio / Estado</th>
            <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr *ngFor="let r of filtradas"
            class="group transition-colors hover:bg-gray-50/60 dark:hover:bg-white/[0.02]">

            <!-- Cliente -->
            <td class="px-5 py-4">
              <div class="flex items-center gap-2.5">
                <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {{ r.client?.firstName?.charAt(0) }}{{ r.client?.lastName?.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <p class="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                    {{ r.client?.firstName }} {{ r.client?.lastName }}
                  </p>
                  <p class="truncate text-xs text-gray-400">{{ r.client?.email }}</p>
                </div>
              </div>
            </td>

            <!-- Embarcaci\xF3n -->
            <td class="px-5 py-4">
              <p class="font-medium text-gray-800 dark:text-white/90">{{ r.vessel?.name }}</p>
              <p *ngIf="r.destination" class="text-xs text-gray-400">\u{1F3DD}\uFE0F {{ r.destination.name }}</p>
              <p *ngIf="r.specialRequests" class="mt-0.5 max-w-[180px] truncate text-[11px] italic text-gray-400">
                "{{ r.specialRequests }}"
              </p>
            </td>

            <!-- Fechas -->
            <td class="px-5 py-4">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                {{ r.startDate }} \u2192 {{ r.endDate }}
              </p>
              <p class="text-xs text-gray-400">
                \u{1F319} {{ r.days }} {{ r.days === 1 ? 'noche' : 'noches' }} \xB7
                \u{1F465} {{ r.passengers }} pax
              </p>
            </td>

            <!-- Estado badge -->
            <td class="px-5 py-4 text-center">
              <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold"
                [class]="statusClass(r.status)">
                <span *ngIf="r.status === 'ACTIVE'" class="relative flex h-1.5 w-1.5">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
                  <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-current"></span>
                </span>
                {{ statusLabel(r.status) }}
              </span>
            </td>

            <!-- Precio + indicador d\xEDas -->
            <td class="px-5 py-4 text-right">
              <p class="text-base font-extrabold text-brand-600 dark:text-brand-400">
                {{ tasaService.formatBs(r.totalPrice) }}
              </p>
              <p class="text-xs text-gray-400">\${{ r.totalPrice | number:'1.2-2' }} USD</p>

              <!-- D\xEDas restantes (ACTIVE) -->
              <ng-container *ngIf="r.status === 'ACTIVE'">
                <p *ngIf="!hasEnded(r)"
                  class="mt-1 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  \u{1F3D6}\uFE0F {{ daysRemaining(r) }}d restante{{ daysRemaining(r) !== 1 ? 's' : '' }}
                </p>
                <p *ngIf="hasEnded(r)"
                  class="mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 dark:bg-white/[0.06]">
                  \u2713 Per\xEDodo finalizado
                </p>
              </ng-container>

              <!-- D\xEDas para iniciar (CONFIRMED) -->
              <p *ngIf="r.status === 'CONFIRMED' && !hasStarted(r)"
                class="mt-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                \u23F3 Inicia el {{ r.startDate }}
              </p>
            </td>

            <!-- Acciones -->
            <td class="px-5 py-4">
              <div class="flex flex-col items-end gap-1.5">

                <!-- PENDING -->
                <ng-container *ngIf="r.status === 'PENDING'">
                  <div class="flex gap-1.5">
                    <button (click)="changeStatus(r, 'CONFIRMED')" [disabled]="updatingId === r.id"
                      class="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-600 disabled:opacity-50 whitespace-nowrap">
                      \u2713 Confirmar
                    </button>
                    <button (click)="changeStatus(r, 'CANCELLED')" [disabled]="updatingId === r.id"
                      class="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 disabled:opacity-50">
                      \u2717
                    </button>
                  </div>
                </ng-container>

                <!-- CONFIRMED -->
                <ng-container *ngIf="r.status === 'CONFIRMED'">
                  <button (click)="changeStatus(r, 'CANCELLED')" [disabled]="updatingId === r.id"
                    class="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 disabled:opacity-50">
                    \u2717 Cancelar
                  </button>
                </ng-container>

                <!-- ACTIVE -->
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
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservasCharterComponent, { className: "ReservasCharterComponent", filePath: "src/app/pages/mi-charter/pages/reservas-charter/reservas-charter.component.ts", lineNumber: 17 });
})();
export {
  ReservasCharterComponent
};
//# sourceMappingURL=chunk-AVDGSCAZ.js.map
