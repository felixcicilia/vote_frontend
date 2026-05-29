import {
  PagosService
} from "./chunk-KAI4EMGQ.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
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
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  __spreadValues,
  forkJoin,
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
  ɵɵpureFunction3,
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

// src/app/pages/finanzas/finanzas.component.ts
var _c0 = () => ["resumen", "\u{1F4CA} Resumen"];
var _c1 = () => ["pagos", "\u{1F4B3} Pagos"];
var _c2 = () => ["reservas", "\u{1F3DD}\uFE0F Reservas de isla"];
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function FinanzasComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Cargando datos financieros...");
    \u0275\u0275elementEnd()();
  }
}
function FinanzasComponent_ng_container_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currencyLabel(m_r1.currency));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtAmount(m_r1.total, m_r1.currency));
  }
}
function FinanzasComponent_ng_container_8_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Sin pagos verificados");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currencyLabel(m_r3.currency));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtAmount(m_r3.total, m_r3.currency));
  }
}
function FinanzasComponent_ng_container_8_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, "Sin pagos pendientes");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_button_33_Template_button_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(tab_r5[0]));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-white", ctx_r1.activeTab === tab_r5[0])("text-gray-800", ctx_r1.activeTab === tab_r5[0])("shadow-sm", ctx_r1.activeTab === tab_r5[0])("dark:bg-gray-900", ctx_r1.activeTab === tab_r5[0])("dark:text-white", ctx_r1.activeTab === tab_r5[0])("text-gray-500", ctx_r1.activeTab !== tab_r5[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r5[1], " ");
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "Sin pagos");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 63);
    \u0275\u0275element(2, "span", 64);
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-brand-500", c_r7.currency === "USD" || c_r7.currency === "USDT")("bg-amber-400", c_r7.currency === "VES" || c_r7.currency === "BS");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtAmount(c_r7.total, c_r7.currency));
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 31)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275template(7, FinanzasComponent_ng_container_8_ng_container_34_div_7_div_7_Template, 7, 6, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r8.count, " pagos");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", m_r8.monedas);
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "Sin pagos verificados");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r9.label.split(" ")[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r9.label.split(" ").slice(1).join(" "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r9.count, " transacciones");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtCurrency(t_r9.total));
  }
}
function FinanzasComponent_ng_container_8_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 1)(3, "h2", 38);
    \u0275\u0275text(4, "Pagos por m\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FinanzasComponent_ng_container_8_ng_container_34_div_5_Template, 2, 0, "div", 39);
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275template(7, FinanzasComponent_ng_container_8_ng_container_34_div_7_Template, 8, 3, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h2", 38);
    \u0275\u0275text(10, "Ingresos verificados por tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FinanzasComponent_ng_container_8_ng_container_34_div_11_Template, 2, 0, "div", 39);
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275template(13, FinanzasComponent_ng_container_8_ng_container_34_div_13_Template, 11, 4, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 1)(15, "div", 44)(16, "h2", 45);
    \u0275\u0275text(17, "\u{1F3DD}\uFE0F Reservas de isla \u2014 resumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 46);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_34_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab("reservas"));
    });
    \u0275\u0275text(19, "Ver detalle \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 47)(21, "div", 48)(22, "p", 49);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 50);
    \u0275\u0275text(25, "Pendientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 51)(27, "p", 52);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 53);
    \u0275\u0275text(30, "Activas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 54)(32, "p", 55);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 56);
    \u0275\u0275text(35, "Completadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 57)(37, "p", 58);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 59);
    \u0275\u0275text(40, "Canceladas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.pagosPorMetodo.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagosPorMetodo);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.pagosPorTipo.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagosPorTipo);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.bookingsPendientesCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bookingsActivosCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bookingsCompletadosCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bookingsCanceladosCount);
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", m_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.methodLabels[m_r11]);
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", t_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabels[t_r12]);
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_35_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.limpiarPagos());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 101)(1, "td", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 103)(4, "p", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 105);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 106);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 107);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 105);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 108)(19, "span", 109);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", p_r14.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r14.client.firstName, " ", p_r14.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.client.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabels[p_r14.referenceType] ?? p_r14.referenceType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.methodLabels[p_r14.method] ?? p_r14.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.transactionRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r14.currency, " ", (+p_r14.amount).toFixed(2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(p_r14.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusColor(p_r14.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabels[p_r14.status] ?? p_r14.status, " ");
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2, "No se encontraron pagos con esos filtros.");
    \u0275\u0275elementEnd()();
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 112)(4, "button", 113);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_35_div_64_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaPagos(ctx_r1.pagoPage - 1));
    });
    \u0275\u0275text(5, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 113);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_35_div_64_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaPagos(ctx_r1.pagoPage + 1));
    });
    \u0275\u0275text(7, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.pagoPage, " de ", ctx_r1.pagosTotalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pagoPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pagoPage === ctx_r1.pagosTotalPages);
  }
}
function FinanzasComponent_ng_container_8_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "span", 75);
    \u0275\u0275text(5, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pagoSearch, $event) || (ctx_r1.pagoSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPagoFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pagoStatus, $event) || (ctx_r1.pagoStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPagoFilterChange());
    });
    \u0275\u0275elementStart(8, "option", 78);
    \u0275\u0275text(9, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 79);
    \u0275\u0275text(11, "\u23F3 Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 80);
    \u0275\u0275text(13, "\u2713 Verificado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 81);
    \u0275\u0275text(15, "\u2717 Rechazado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pagoMethod, $event) || (ctx_r1.pagoMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPagoFilterChange());
    });
    \u0275\u0275elementStart(17, "option", 78);
    \u0275\u0275text(18, "Todos los m\xE9todos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FinanzasComponent_ng_container_8_ng_container_35_option_19_Template, 2, 2, "option", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pagoType, $event) || (ctx_r1.pagoType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPagoFilterChange());
    });
    \u0275\u0275elementStart(21, "option", 78);
    \u0275\u0275text(22, "Todos los tipos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, FinanzasComponent_ng_container_8_ng_container_35_option_23_Template, 2, 2, "option", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pagoDateRange, $event) || (ctx_r1.pagoDateRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_35_Template_select_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPagoFilterChange());
    });
    \u0275\u0275elementStart(25, "option", 83);
    \u0275\u0275text(26, "Todos los tiempos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 84);
    \u0275\u0275text(28, "Hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 85);
    \u0275\u0275text(30, "\xDAltimos 7 d\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 86);
    \u0275\u0275text(32, "\xDAltimos 30 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, FinanzasComponent_ng_container_8_ng_container_35_button_33_Template, 2, 0, "button", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 88)(35, "div", 89)(36, "div", 31)(37, "h3", 45);
    \u0275\u0275text(38, "Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 65);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 90)(42, "table", 91)(43, "thead", 92)(44, "tr")(45, "th", 93);
    \u0275\u0275text(46, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 93);
    \u0275\u0275text(48, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 93);
    \u0275\u0275text(50, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 93);
    \u0275\u0275text(52, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 93);
    \u0275\u0275text(54, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 94);
    \u0275\u0275text(56, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 93);
    \u0275\u0275text(58, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 95);
    \u0275\u0275text(60, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "tbody", 96);
    \u0275\u0275template(62, FinanzasComponent_ng_container_8_ng_container_35_tr_62_Template, 21, 12, "tr", 97)(63, FinanzasComponent_ng_container_8_ng_container_35_tr_63_Template, 3, 0, "tr", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, FinanzasComponent_ng_container_8_ng_container_35_div_64_Template, 8, 4, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagoSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagoStatus);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagoMethod);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagoType);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.referenceTypes);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagoDateRange);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.hayFiltrosPagos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3("", ctx_r1.pagosRangoInicio, "-", ctx_r1.pagosRangoFin, " de ", ctx_r1.filteredPagos.length);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.pagosPaginados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagosPaginados.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredPagos.length > ctx_r1.pagoLimit);
  }
}
function FinanzasComponent_ng_container_8_ng_container_36_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_36_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.limpiarBookings());
    });
    \u0275\u0275text(1, " Limpiar ");
    \u0275\u0275elementEnd();
  }
}
function FinanzasComponent_ng_container_8_ng_container_36_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 101)(1, "td", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 103)(4, "p", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 120);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 107);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 108)(15, "span", 109);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", b_r18.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", b_r18.client.firstName, " ", b_r18.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((b_r18.vessel == null ? null : b_r18.vessel.name) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(b_r18.tripDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r18.passengers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtCurrency(+b_r18.totalPrice));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.bookingStatusColor(b_r18.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r18.status, " ");
  }
}
function FinanzasComponent_ng_container_8_ng_container_36_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
    \u0275\u0275text(2, "No se encontraron reservas con esos filtros.");
    \u0275\u0275elementEnd()();
  }
}
function FinanzasComponent_ng_container_8_ng_container_36_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 112)(4, "button", 113);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_36_div_58_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaBookings(ctx_r1.bookingPage - 1));
    });
    \u0275\u0275text(5, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 113);
    \u0275\u0275listener("click", function FinanzasComponent_ng_container_8_ng_container_36_div_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cambiarPaginaBookings(ctx_r1.bookingPage + 1));
    });
    \u0275\u0275text(7, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.bookingPage, " de ", ctx_r1.bookingsTotalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.bookingPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.bookingPage === ctx_r1.bookingsTotalPages);
  }
}
function FinanzasComponent_ng_container_8_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "span", 75);
    \u0275\u0275text(5, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.bookingSearch, $event) || (ctx_r1.bookingSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBookingFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.bookingStatus, $event) || (ctx_r1.bookingStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBookingFilterChange());
    });
    \u0275\u0275elementStart(8, "option", 78);
    \u0275\u0275text(9, "Todos los estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 79);
    \u0275\u0275text(11, "\u23F3 Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 115);
    \u0275\u0275text(13, "\u2705 Confirmada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 116);
    \u0275\u0275text(15, "\u{1F7E2} Activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 117);
    \u0275\u0275text(17, "\u{1F3C6} Completada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 118);
    \u0275\u0275text(19, "\u274C Cancelada");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.bookingDateRange, $event) || (ctx_r1.bookingDateRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FinanzasComponent_ng_container_8_ng_container_36_Template_select_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBookingFilterChange());
    });
    \u0275\u0275elementStart(21, "option", 83);
    \u0275\u0275text(22, "Todos los tiempos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 84);
    \u0275\u0275text(24, "Hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 85);
    \u0275\u0275text(26, "\xDAltimos 7 d\xEDas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 86);
    \u0275\u0275text(28, "\xDAltimos 30 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, FinanzasComponent_ng_container_8_ng_container_36_button_29_Template, 2, 0, "button", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 88)(31, "div", 89)(32, "div", 31)(33, "h3", 45);
    \u0275\u0275text(34, "Reservas de isla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 65);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 90)(38, "table", 91)(39, "thead", 92)(40, "tr")(41, "th", 93);
    \u0275\u0275text(42, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 93);
    \u0275\u0275text(44, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 93);
    \u0275\u0275text(46, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 93);
    \u0275\u0275text(48, "Fecha viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 95);
    \u0275\u0275text(50, "Pax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 94);
    \u0275\u0275text(52, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 95);
    \u0275\u0275text(54, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "tbody", 96);
    \u0275\u0275template(56, FinanzasComponent_ng_container_8_ng_container_36_tr_56_Template, 17, 9, "tr", 97)(57, FinanzasComponent_ng_container_8_ng_container_36_tr_57_Template, 3, 0, "tr", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, FinanzasComponent_ng_container_8_ng_container_36_div_58_Template, 8, 4, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bookingSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bookingStatus);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bookingDateRange);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.hayFiltrosBookings);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3("", ctx_r1.bookingsRangoInicio, "-", ctx_r1.bookingsRangoFin, " de ", ctx_r1.filteredBookings.length);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.bookingsPaginadas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookingsPaginadas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredBookings.length > ctx_r1.bookingLimit);
  }
}
function FinanzasComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "p", 12);
    \u0275\u0275text(4, "Ingresos verificados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275template(8, FinanzasComponent_ng_container_8_div_8_Template, 5, 2, "div", 15)(9, FinanzasComponent_ng_container_8_p_9_Template, 2, 0, "p", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "p", 18);
    \u0275\u0275text(12, "Por verificar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275template(16, FinanzasComponent_ng_container_8_div_16_Template, 5, 2, "div", 15)(17, FinanzasComponent_ng_container_8_p_17_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "p", 22);
    \u0275\u0275text(20, "Reservas activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 24);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 25)(26, "p", 26);
    \u0275\u0275text(27, "Ingresos isla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 27);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 28);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 29);
    \u0275\u0275template(33, FinanzasComponent_ng_container_8_button_33_Template, 2, 13, "button", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, FinanzasComponent_ng_container_8_ng_container_34_Template, 41, 8, "ng-container", 6)(35, FinanzasComponent_ng_container_8_ng_container_35_Template, 65, 14, "ng-container", 6)(36, FinanzasComponent_ng_container_8_ng_container_36_Template, 59, 10, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.verificados.length, " pagos");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.verificadosPorMoneda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.verificadosPorMoneda.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.pendientes.length, " pagos");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pendientesPorMoneda);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pendientesPorMoneda.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bookingsActivosCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.bookingsPendientesCount, " pendientes de confirmar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmtCurrency(ctx_r1.totalIslandRevenue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.bookingsCompletadosCount, " completadas \xB7 ", ctx_r1.bookingsCanceladosCount, " canceladas");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction3(18, _c3, \u0275\u0275pureFunction0(15, _c0), \u0275\u0275pureFunction0(16, _c1), \u0275\u0275pureFunction0(17, _c2)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "resumen");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "pagos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "reservas");
  }
}
var METHOD_LABELS = {
  PAGO_MOVIL: "\u{1F4F1} Pago M\xF3vil",
  TRANSFERENCIA: "\u{1F3E6} Transferencia Bs",
  ZELLE: "\u{1F49C} Zelle",
  BINANCE: "\u{1F7E1} Binance",
  CARD: "\u{1F4B3} Tarjeta",
  CASH: "\u{1F4B5} Efectivo"
};
var TYPE_LABELS = {
  TAXI_TRIP: "\u{1F6A4} Taxi acu\xE1tico",
  TICKET: "\u{1F3AB} Ticket ferry",
  RENTAL: "\u26F5 Alquiler charter",
  ISLAND_BOOKING: "\u{1F3DD}\uFE0F Excursi\xF3n isla",
  WALLET_TOPUP: "\u2693 Recarga de nudos"
};
var STATUS_LABELS = {
  VERIFIED: "\u2713 Verificado",
  PENDING: "\u23F3 Pendiente",
  REJECTED: "\u2717 Rechazado"
};
var FinanzasComponent = class _FinanzasComponent {
  pagosService = inject(PagosService);
  islandService = inject(IslandTripsService);
  // ── State ────────────────────────────────────────────────────────────────────
  loading = true;
  activeTab = "resumen";
  allPagos = [];
  allBookings = [];
  // ── Filters: Pagos ───────────────────────────────────────────────────────────
  pagoSearch = "";
  pagoStatus = "";
  pagoMethod = "";
  pagoType = "";
  pagoDateRange = "todo";
  pagoPage = 1;
  pagoLimit = 15;
  // ── Filters: Reservas ────────────────────────────────────────────────────────
  bookingSearch = "";
  bookingStatus = "";
  bookingDateRange = "todo";
  bookingPage = 1;
  bookingLimit = 15;
  // ── Labels (exported for template) ──────────────────────────────────────────
  methodLabels = METHOD_LABELS;
  typeLabels = TYPE_LABELS;
  statusLabels = STATUS_LABELS;
  paymentMethods = Object.keys(METHOD_LABELS);
  referenceTypes = Object.keys(TYPE_LABELS);
  // ── Init ─────────────────────────────────────────────────────────────────────
  ngOnInit() {
    forkJoin({
      pagos: this.pagosService.getAll(),
      bookings: this.islandService.getBookings({})
    }).subscribe({
      next: ({ pagos, bookings }) => {
        this.allPagos = pagos;
        this.allBookings = bookings;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ── Date helpers ─────────────────────────────────────────────────────────────
  startOfRange(range) {
    const now = /* @__PURE__ */ new Date();
    if (range === "hoy")
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (range === "semana") {
      const d = new Date(now);
      d.setDate(d.getDate() - 7);
      return d;
    }
    if (range === "mes") {
      const d = new Date(now);
      d.setDate(d.getDate() - 30);
      return d;
    }
    return null;
  }
  inRange(dateStr, range) {
    const from = this.startOfRange(range);
    if (!from || !dateStr)
      return true;
    return new Date(dateStr) >= from;
  }
  // ── Filtered pagos ───────────────────────────────────────────────────────────
  get filteredPagos() {
    const term = this.pagoSearch.trim().toLowerCase();
    return this.allPagos.filter((p) => {
      if (this.pagoStatus && p.status !== this.pagoStatus)
        return false;
      if (this.pagoMethod && p.method !== this.pagoMethod)
        return false;
      if (this.pagoType && p.referenceType !== this.pagoType)
        return false;
      if (!this.inRange(p.createdAt, this.pagoDateRange))
        return false;
      if (term) {
        const fullName = `${p.client.firstName} ${p.client.lastName}`.toLowerCase();
        const ref = (p.transactionRef ?? "").toLowerCase();
        if (!fullName.includes(term) && !ref.includes(term))
          return false;
      }
      return true;
    });
  }
  get pagosTotalPages() {
    return Math.max(1, Math.ceil(this.filteredPagos.length / this.pagoLimit));
  }
  get pagosPaginados() {
    const s = (this.pagoPage - 1) * this.pagoLimit;
    return this.filteredPagos.slice(s, s + this.pagoLimit);
  }
  get pagosRangoInicio() {
    return this.filteredPagos.length === 0 ? 0 : (this.pagoPage - 1) * this.pagoLimit + 1;
  }
  get pagosRangoFin() {
    return Math.min(this.pagoPage * this.pagoLimit, this.filteredPagos.length);
  }
  onPagoFilterChange() {
    this.pagoPage = 1;
  }
  limpiarPagos() {
    this.pagoSearch = "";
    this.pagoStatus = "";
    this.pagoMethod = "";
    this.pagoType = "";
    this.pagoDateRange = "todo";
    this.pagoPage = 1;
  }
  get hayFiltrosPagos() {
    return !!(this.pagoSearch || this.pagoStatus || this.pagoMethod || this.pagoType || this.pagoDateRange !== "todo");
  }
  // ── Filtered bookings ────────────────────────────────────────────────────────
  get filteredBookings() {
    const term = this.bookingSearch.trim().toLowerCase();
    return this.allBookings.filter((b) => {
      if (this.bookingStatus && b.status !== this.bookingStatus)
        return false;
      if (!this.inRange(b.tripDate, this.bookingDateRange))
        return false;
      if (term) {
        const name = `${b.client.firstName} ${b.client.lastName}`.toLowerCase();
        if (!name.includes(term) && !(b.vessel?.name ?? "").toLowerCase().includes(term))
          return false;
      }
      return true;
    });
  }
  get bookingsTotalPages() {
    return Math.max(1, Math.ceil(this.filteredBookings.length / this.bookingLimit));
  }
  get bookingsPaginadas() {
    const s = (this.bookingPage - 1) * this.bookingLimit;
    return this.filteredBookings.slice(s, s + this.bookingLimit);
  }
  get bookingsRangoInicio() {
    return this.filteredBookings.length === 0 ? 0 : (this.bookingPage - 1) * this.bookingLimit + 1;
  }
  get bookingsRangoFin() {
    return Math.min(this.bookingPage * this.bookingLimit, this.filteredBookings.length);
  }
  onBookingFilterChange() {
    this.bookingPage = 1;
  }
  limpiarBookings() {
    this.bookingSearch = "";
    this.bookingStatus = "";
    this.bookingDateRange = "todo";
    this.bookingPage = 1;
  }
  get hayFiltrosBookings() {
    return !!(this.bookingSearch || this.bookingStatus || this.bookingDateRange !== "todo");
  }
  // ── KPIs (siempre sobre todos, sin filtros) ──────────────────────────────────
  get verificados() {
    return this.allPagos.filter((p) => p.status === "VERIFIED");
  }
  get pendientes() {
    return this.allPagos.filter((p) => p.status === "PENDING");
  }
  get rechazados() {
    return this.allPagos.filter((p) => p.status === "REJECTED");
  }
  normCurrency(c) {
    return c === "BS" ? "VES" : c;
  }
  totalsByCurrency(pagos) {
    const map = {};
    for (const p of pagos) {
      const c = this.normCurrency(p.currency);
      map[c] = (map[c] ?? 0) + Number(p.amount);
    }
    return Object.entries(map).map(([currency, total]) => ({ currency, total })).sort((a, b) => a.currency.localeCompare(b.currency));
  }
  get verificadosPorMoneda() {
    return this.totalsByCurrency(this.verificados);
  }
  get pendientesPorMoneda() {
    return this.totalsByCurrency(this.pendientes);
  }
  get totalIslandRevenue() {
    return this.allBookings.filter((b) => ["COMPLETED", "CONFIRMED", "ACTIVE"].includes(b.status)).reduce((s, b) => s + Number(b.totalPrice), 0);
  }
  get bookingsPendientesCount() {
    return this.allBookings.filter((b) => b.status === "PENDING").length;
  }
  get bookingsActivosCount() {
    return this.allBookings.filter((b) => ["CONFIRMED", "ACTIVE"].includes(b.status)).length;
  }
  get bookingsCompletadosCount() {
    return this.allBookings.filter((b) => b.status === "COMPLETED").length;
  }
  get bookingsCanceladosCount() {
    return this.allBookings.filter((b) => b.status === "CANCELLED").length;
  }
  // ── Breakdowns por método ────────────────────────────────────────────────────
  get pagosPorMetodo() {
    const map = {};
    for (const p of this.allPagos) {
      const c = this.normCurrency(p.currency);
      if (!map[p.method])
        map[p.method] = { count: 0, monedas: {} };
      map[p.method].count++;
      map[p.method].monedas[c] = (map[p.method].monedas[c] ?? 0) + Number(p.amount);
    }
    return Object.entries(map).map(([key, v]) => ({
      key,
      label: METHOD_LABELS[key] ?? key,
      count: v.count,
      monedas: Object.entries(v.monedas).map(([currency, total]) => ({ currency, total })).sort((a, b) => a.currency.localeCompare(b.currency))
    })).sort((a, b) => b.count - a.count);
  }
  get pagosPorTipo() {
    const map = {};
    for (const p of this.verificados) {
      if (!map[p.referenceType])
        map[p.referenceType] = { count: 0, total: 0 };
      map[p.referenceType].count++;
      map[p.referenceType].total += Number(p.amount);
    }
    return Object.entries(map).map(([key, v]) => __spreadValues({
      key,
      label: TYPE_LABELS[key] ?? key
    }, v)).sort((a, b) => b.total - a.total);
  }
  // ── Helpers de UI ────────────────────────────────────────────────────────────
  statusColor(status) {
    const map = {
      VERIFIED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      REJECTED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    };
    return map[status] ?? "bg-gray-100 text-gray-600";
  }
  bookingStatusColor(status) {
    const map = {
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      ACTIVE: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    };
    return map[status] ?? "bg-gray-100 text-gray-600";
  }
  fmtCurrency(n) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
  }
  fmtAmount(amount, currency) {
    const c = this.normCurrency(currency);
    if (c === "VES")
      return `Bs. ${amount.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (c === "USDT")
      return `${amount.toFixed(2)} USDT`;
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(amount);
  }
  currencyLabel(c) {
    const norm = this.normCurrency(c);
    return norm === "VES" ? "Bol\xEDvares (Bs.)" : norm === "USDT" ? "USDT" : "D\xF3lares (USD)";
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("es-VE", { day: "2-digit", month: "short", year: "numeric" });
  }
  cambiarPaginaPagos(p) {
    if (p < 1 || p > this.pagosTotalPages)
      return;
    this.pagoPage = p;
  }
  cambiarPaginaBookings(p) {
    if (p < 1 || p > this.bookingsTotalPages)
      return;
    this.bookingPage = p;
  }
  setTab(t) {
    this.activeTab = t;
  }
  static \u0275fac = function FinanzasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanzasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanzasComponent, selectors: [["app-finanzas"]], decls: 9, vars: 2, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-1"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "flex flex-col items-center justify-center py-20 gap-3", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-3"], [1, "text-4xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "grid", "grid-cols-2", "gap-4", "xl:grid-cols-4"], [1, "rounded-2xl", "border", "border-green-200", "bg-green-50", "p-5", "dark:border-green-800/30", "dark:bg-green-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-green-600", "dark:text-green-400"], [1, "mt-2", "text-sm", "font-semibold", "text-green-700", "dark:text-green-400"], [1, "mt-2", "space-y-1"], ["class", "flex items-center justify-between", 4, "ngFor", "ngForOf"], ["class", "text-xs text-green-600 dark:text-green-500", 4, "ngIf"], [1, "rounded-2xl", "border", "border-yellow-200", "bg-yellow-50", "p-5", "dark:border-yellow-800/30", "dark:bg-yellow-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-yellow-600", "dark:text-yellow-400"], [1, "mt-2", "text-sm", "font-semibold", "text-yellow-700", "dark:text-yellow-400"], ["class", "text-xs text-yellow-600 dark:text-yellow-500", 4, "ngIf"], [1, "rounded-2xl", "border", "border-blue-200", "bg-blue-50", "p-5", "dark:border-blue-800/30", "dark:bg-blue-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-blue-600", "dark:text-blue-400"], [1, "mt-2", "text-2xl", "font-bold", "text-blue-800", "dark:text-blue-200"], [1, "mt-1", "text-xs", "text-blue-600", "dark:text-blue-500"], [1, "rounded-2xl", "border", "border-purple-200", "bg-purple-50", "p-5", "dark:border-purple-800/30", "dark:bg-purple-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-purple-600", "dark:text-purple-400"], [1, "mt-2", "text-2xl", "font-bold", "text-purple-800", "dark:text-purple-200"], [1, "mt-1", "text-xs", "text-purple-600", "dark:text-purple-500"], [1, "flex", "gap-1", "rounded-xl", "border", "border-gray-200", "bg-gray-100", "p-1", "dark:border-gray-800", "dark:bg-gray-800/60"], ["class", "flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all", 3, "bg-white", "text-gray-800", "shadow-sm", "dark:bg-gray-900", "dark:text-white", "text-gray-500", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "text-green-600", "dark:text-green-500"], [1, "text-sm", "font-bold", "text-green-800", "dark:text-green-200"], [1, "text-xs", "text-yellow-600", "dark:text-yellow-500"], [1, "text-sm", "font-bold", "text-yellow-800", "dark:text-yellow-200"], [1, "flex-1", "rounded-lg", "py-2.5", "text-sm", "font-semibold", "transition-all", 3, "click"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "mb-5", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["class", "py-8 text-center text-sm text-gray-400", 4, "ngIf"], [1, "space-y-4"], ["class", "rounded-xl border border-gray-100 p-3 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "space-y-3"], ["class", "flex items-center justify-between rounded-xl border border-gray-100 p-3 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "text-xs", "font-medium", "text-brand-600", "hover:underline", "dark:text-brand-400", 3, "click"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "border", "border-yellow-200", "bg-yellow-50", "p-3", "text-center", "dark:border-yellow-800/30", "dark:bg-yellow-500/10"], [1, "text-2xl", "font-bold", "text-yellow-700", "dark:text-yellow-300"], [1, "text-xs", "text-yellow-600", "dark:text-yellow-400"], [1, "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-3", "text-center", "dark:border-blue-800/30", "dark:bg-blue-500/10"], [1, "text-2xl", "font-bold", "text-blue-700", "dark:text-blue-300"], [1, "text-xs", "text-blue-600", "dark:text-blue-400"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "p-3", "text-center", "dark:border-green-800/30", "dark:bg-green-500/10"], [1, "text-2xl", "font-bold", "text-green-700", "dark:text-green-300"], [1, "text-xs", "text-green-600", "dark:text-green-400"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-3", "text-center", "dark:border-red-800/30", "dark:bg-red-500/10"], [1, "text-2xl", "font-bold", "text-red-700", "dark:text-red-300"], [1, "text-xs", "text-red-600", "dark:text-red-400"], [1, "py-8", "text-center", "text-sm", "text-gray-400"], [1, "rounded-xl", "border", "border-gray-100", "p-3", "dark:border-gray-800"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-xs", "text-gray-500", "dark:bg-gray-800"], [1, "inline-flex", "items-center", "gap-1.5"], [1, "h-1.5", "w-1.5", "rounded-full"], [1, "text-xs", "text-gray-400"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "border-gray-100", "p-3", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "text-xl"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-wrap", "gap-3"], [1, "relative", "min-w-[200px]", "flex-1"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-gray-400", "text-sm"], ["type", "text", "placeholder", "Cliente o referencia...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING"], ["value", "VERIFIED"], ["value", "REJECTED"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "todo"], ["value", "hoy"], ["value", "semana"], ["value", "mes"], ["class", "h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "px-5", "py-3", "text-center", "text-xs", "font-semibold", "uppercase", "text-gray-400"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]", 4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-gray-800", 4, "ngIf"], [3, "value"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "hover:bg-gray-50/50", "dark:hover:bg-white/[0.02]"], [1, "px-5", "py-3", "text-xs", "text-gray-400"], [1, "px-5", "py-3"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-3", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-3", "text-xs", "font-mono", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-3", "text-right", "font-semibold", "text-gray-800", "dark:text-white/80"], [1, "px-5", "py-3", "text-center"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["colspan", "8", 1, "py-12", "text-center", "text-sm", "text-gray-400"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "disabled:opacity-40", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], ["type", "text", "placeholder", "Cliente o embarcaci\xF3n...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "pl-9", "pr-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", "CONFIRMED"], ["value", "ACTIVE"], ["value", "COMPLETED"], ["value", "CANCELLED"], [1, "px-5", "py-3", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-3", "text-center", "text-gray-600", "dark:text-gray-400"], ["colspan", "7", 1, "py-12", "text-center", "text-sm", "text-gray-400"]], template: function FinanzasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "\u{1F4B0} Finanzas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Panel financiero completo \xB7 Solo visible para MASTER");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, FinanzasComponent_div_7_Template, 5, 0, "div", 5)(8, FinanzasComponent_ng_container_8_Template, 37, 22, "ng-container", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanzasComponent, [{
    type: Component,
    args: [{ selector: "app-finanzas", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-1">
      <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4B0} Finanzas</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">Panel financiero completo \xB7 Solo visible para MASTER</p>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-20 gap-3">
    <div class="text-4xl animate-bounce">\u{1F4CA}</div>
    <p class="text-sm text-gray-400">Cargando datos financieros...</p>
  </div>

  <ng-container *ngIf="!loading">

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 gap-4 xl:grid-cols-4">

      <div class="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800/30 dark:bg-green-500/10">
        <p class="text-xs font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">Ingresos verificados</p>
        <p class="mt-2 text-sm font-semibold text-green-700 dark:text-green-400">{{ verificados.length }} pagos</p>
        <div class="mt-2 space-y-1">
          <div *ngFor="let m of verificadosPorMoneda" class="flex items-center justify-between">
            <span class="text-xs text-green-600 dark:text-green-500">{{ currencyLabel(m.currency) }}</span>
            <span class="text-sm font-bold text-green-800 dark:text-green-200">{{ fmtAmount(m.total, m.currency) }}</span>
          </div>
          <p *ngIf="verificadosPorMoneda.length === 0" class="text-xs text-green-600 dark:text-green-500">Sin pagos verificados</p>
        </div>
      </div>

      <div class="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 dark:border-yellow-800/30 dark:bg-yellow-500/10">
        <p class="text-xs font-semibold uppercase tracking-wide text-yellow-600 dark:text-yellow-400">Por verificar</p>
        <p class="mt-2 text-sm font-semibold text-yellow-700 dark:text-yellow-400">{{ pendientes.length }} pagos</p>
        <div class="mt-2 space-y-1">
          <div *ngFor="let m of pendientesPorMoneda" class="flex items-center justify-between">
            <span class="text-xs text-yellow-600 dark:text-yellow-500">{{ currencyLabel(m.currency) }}</span>
            <span class="text-sm font-bold text-yellow-800 dark:text-yellow-200">{{ fmtAmount(m.total, m.currency) }}</span>
          </div>
          <p *ngIf="pendientesPorMoneda.length === 0" class="text-xs text-yellow-600 dark:text-yellow-500">Sin pagos pendientes</p>
        </div>
      </div>

      <div class="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800/30 dark:bg-blue-500/10">
        <p class="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Reservas activas</p>
        <p class="mt-2 text-2xl font-bold text-blue-800 dark:text-blue-200">{{ bookingsActivosCount }}</p>
        <p class="mt-1 text-xs text-blue-600 dark:text-blue-500">{{ bookingsPendientesCount }} pendientes de confirmar</p>
      </div>

      <div class="rounded-2xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-800/30 dark:bg-purple-500/10">
        <p class="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">Ingresos isla</p>
        <p class="mt-2 text-2xl font-bold text-purple-800 dark:text-purple-200">{{ fmtCurrency(totalIslandRevenue) }}</p>
        <p class="mt-1 text-xs text-purple-600 dark:text-purple-500">{{ bookingsCompletadosCount }} completadas \xB7 {{ bookingsCanceladosCount }} canceladas</p>
      </div>

    </div>

    <!-- Tabs -->
    <div class="flex gap-1 rounded-xl border border-gray-200 bg-gray-100 p-1 dark:border-gray-800 dark:bg-gray-800/60">
      <button *ngFor="let tab of [['resumen','\u{1F4CA} Resumen'],['pagos','\u{1F4B3} Pagos'],['reservas','\u{1F3DD}\uFE0F Reservas de isla']]"
        (click)="setTab($any(tab[0]))"
        class="flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all"
        [class.bg-white]="activeTab === tab[0]"
        [class.text-gray-800]="activeTab === tab[0]"
        [class.shadow-sm]="activeTab === tab[0]"
        [class.dark:bg-gray-900]="activeTab === tab[0]"
        [class.dark:text-white]="activeTab === tab[0]"
        [class.text-gray-500]="activeTab !== tab[0]">
        {{ tab[1] }}
      </button>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: RESUMEN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngIf="activeTab === 'resumen'">

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <!-- Por m\xE9todo -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Pagos por m\xE9todo</h2>
          <div *ngIf="pagosPorMetodo.length === 0" class="py-8 text-center text-sm text-gray-400">Sin pagos</div>
          <div class="space-y-4">
            <div *ngFor="let m of pagosPorMetodo" class="rounded-xl border border-gray-100 p-3 dark:border-gray-800">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ m.label }}</span>
                <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800">{{ m.count }} pagos</span>
              </div>
              <div class="mt-2 space-y-1">
                <div *ngFor="let c of m.monedas" class="flex items-center justify-between">
                  <span class="inline-flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full"
                      [class.bg-brand-500]="c.currency === 'USD' || c.currency === 'USDT'"
                      [class.bg-amber-400]="c.currency === 'VES' || c.currency === 'BS'"></span>
                    <span class="text-xs text-gray-400">{{ c.currency }}</span>
                  </span>
                  <span class="text-sm font-bold text-gray-800 dark:text-white/90">{{ fmtAmount(c.total, c.currency) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Por tipo (verificados) -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Ingresos verificados por tipo</h2>
          <div *ngIf="pagosPorTipo.length === 0" class="py-8 text-center text-sm text-gray-400">Sin pagos verificados</div>
          <div class="space-y-3">
            <div *ngFor="let t of pagosPorTipo" class="flex items-center justify-between rounded-xl border border-gray-100 p-3 dark:border-gray-800">
              <div class="flex items-center gap-3">
                <span class="text-xl">{{ t.label.split(' ')[0] }}</span>
                <div>
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t.label.split(' ').slice(1).join(' ') }}</p>
                  <p class="text-xs text-gray-400">{{ t.count }} transacciones</p>
                </div>
              </div>
              <span class="text-base font-bold text-gray-800 dark:text-white/90">{{ fmtCurrency(t.total) }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Resumen reservas de isla -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F3DD}\uFE0F Reservas de isla \u2014 resumen</h2>
          <button (click)="setTab('reservas')" class="text-xs font-medium text-brand-600 hover:underline dark:text-brand-400">Ver detalle \u2192</button>
        </div>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="rounded-xl border border-yellow-200 bg-yellow-50 p-3 text-center dark:border-yellow-800/30 dark:bg-yellow-500/10">
            <p class="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{{ bookingsPendientesCount }}</p>
            <p class="text-xs text-yellow-600 dark:text-yellow-400">Pendientes</p>
          </div>
          <div class="rounded-xl border border-blue-200 bg-blue-50 p-3 text-center dark:border-blue-800/30 dark:bg-blue-500/10">
            <p class="text-2xl font-bold text-blue-700 dark:text-blue-300">{{ bookingsActivosCount }}</p>
            <p class="text-xs text-blue-600 dark:text-blue-400">Activas</p>
          </div>
          <div class="rounded-xl border border-green-200 bg-green-50 p-3 text-center dark:border-green-800/30 dark:bg-green-500/10">
            <p class="text-2xl font-bold text-green-700 dark:text-green-300">{{ bookingsCompletadosCount }}</p>
            <p class="text-xs text-green-600 dark:text-green-400">Completadas</p>
          </div>
          <div class="rounded-xl border border-red-200 bg-red-50 p-3 text-center dark:border-red-800/30 dark:bg-red-500/10">
            <p class="text-2xl font-bold text-red-700 dark:text-red-300">{{ bookingsCanceladosCount }}</p>
            <p class="text-xs text-red-600 dark:text-red-400">Canceladas</p>
          </div>
        </div>
      </div>

    </ng-container>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: PAGOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngIf="activeTab === 'pagos'">

      <!-- Filtros pagos -->
      <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-wrap gap-3">

          <!-- Search -->
          <div class="relative min-w-[200px] flex-1">
            <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">\u{1F50D}</span>
            <input type="text" [(ngModel)]="pagoSearch" (ngModelChange)="onPagoFilterChange()"
              placeholder="Cliente o referencia..."
              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
          </div>

          <!-- Estado -->
          <select [(ngModel)]="pagoStatus" (ngModelChange)="onPagoFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="">Todos los estados</option>
            <option value="PENDING">\u23F3 Pendiente</option>
            <option value="VERIFIED">\u2713 Verificado</option>
            <option value="REJECTED">\u2717 Rechazado</option>
          </select>

          <!-- M\xE9todo -->
          <select [(ngModel)]="pagoMethod" (ngModelChange)="onPagoFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="">Todos los m\xE9todos</option>
            <option *ngFor="let m of paymentMethods" [value]="m">{{ methodLabels[m] }}</option>
          </select>

          <!-- Tipo -->
          <select [(ngModel)]="pagoType" (ngModelChange)="onPagoFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="">Todos los tipos</option>
            <option *ngFor="let t of referenceTypes" [value]="t">{{ typeLabels[t] }}</option>
          </select>

          <!-- Rango fecha -->
          <select [(ngModel)]="pagoDateRange" (ngModelChange)="onPagoFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="todo">Todos los tiempos</option>
            <option value="hoy">Hoy</option>
            <option value="semana">\xDAltimos 7 d\xEDas</option>
            <option value="mes">\xDAltimos 30 d\xEDas</option>
          </select>

          <button *ngIf="hayFiltrosPagos" (click)="limpiarPagos()"
            class="h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
            Limpiar
          </button>

        </div>
      </div>

      <!-- Tabla pagos -->
      <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="border-b border-gray-100 px-5 py-3 dark:border-gray-800">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Pagos</h3>
            <span class="text-xs text-gray-400">{{ pagosRangoInicio }}-{{ pagosRangoFin }} de {{ filteredPagos.length }}</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">#</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Cliente</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Tipo</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">M\xE9todo</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Referencia</th>
                <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Monto</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Fecha</th>
                <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
              <tr *ngFor="let p of pagosPaginados" class="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                <td class="px-5 py-3 text-xs text-gray-400">#{{ p.id }}</td>
                <td class="px-5 py-3">
                  <p class="font-medium text-gray-800 dark:text-white/90">{{ p.client.firstName }} {{ p.client.lastName }}</p>
                  <p class="text-xs text-gray-400">{{ p.client.email }}</p>
                </td>
                <td class="px-5 py-3 text-xs text-gray-500 dark:text-gray-400">{{ typeLabels[p.referenceType] ?? p.referenceType }}</td>
                <td class="px-5 py-3 text-xs text-gray-500 dark:text-gray-400">{{ methodLabels[p.method] ?? p.method }}</td>
                <td class="px-5 py-3 text-xs font-mono text-gray-500 dark:text-gray-400">{{ p.transactionRef || '\u2014' }}</td>
                <td class="px-5 py-3 text-right font-semibold text-gray-800 dark:text-white/80">
                  {{ p.currency }} {{ (+p.amount).toFixed(2) }}
                </td>
                <td class="px-5 py-3 text-xs text-gray-500 dark:text-gray-400">{{ fmtDate(p.createdAt) }}</td>
                <td class="px-5 py-3 text-center">
                  <span class="rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="statusColor(p.status)">
                    {{ statusLabels[p.status] ?? p.status }}
                  </span>
                </td>
              </tr>
              <tr *ngIf="pagosPaginados.length === 0">
                <td colspan="8" class="py-12 text-center text-sm text-gray-400">No se encontraron pagos con esos filtros.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginaci\xF3n pagos -->
        <div *ngIf="filteredPagos.length > pagoLimit" class="flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-gray-800">
          <p class="text-xs text-gray-400">P\xE1gina {{ pagoPage }} de {{ pagosTotalPages }}</p>
          <div class="flex gap-2">
            <button (click)="cambiarPaginaPagos(pagoPage - 1)" [disabled]="pagoPage === 1"
              class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
              \u2190 Anterior
            </button>
            <button (click)="cambiarPaginaPagos(pagoPage + 1)" [disabled]="pagoPage === pagosTotalPages"
              class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
              Siguiente \u2192
            </button>
          </div>
        </div>
      </div>

    </ng-container>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: RESERVAS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngIf="activeTab === 'reservas'">

      <!-- Filtros reservas -->
      <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-wrap gap-3">

          <div class="relative min-w-[200px] flex-1">
            <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">\u{1F50D}</span>
            <input type="text" [(ngModel)]="bookingSearch" (ngModelChange)="onBookingFilterChange()"
              placeholder="Cliente o embarcaci\xF3n..."
              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
          </div>

          <select [(ngModel)]="bookingStatus" (ngModelChange)="onBookingFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="">Todos los estados</option>
            <option value="PENDING">\u23F3 Pendiente</option>
            <option value="CONFIRMED">\u2705 Confirmada</option>
            <option value="ACTIVE">\u{1F7E2} Activa</option>
            <option value="COMPLETED">\u{1F3C6} Completada</option>
            <option value="CANCELLED">\u274C Cancelada</option>
          </select>

          <select [(ngModel)]="bookingDateRange" (ngModelChange)="onBookingFilterChange()"
            class="h-11 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="todo">Todos los tiempos</option>
            <option value="hoy">Hoy</option>
            <option value="semana">\xDAltimos 7 d\xEDas</option>
            <option value="mes">\xDAltimos 30 d\xEDas</option>
          </select>

          <button *ngIf="hayFiltrosBookings" (click)="limpiarBookings()"
            class="h-11 rounded-lg border border-gray-300 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
            Limpiar
          </button>

        </div>
      </div>

      <!-- Tabla reservas -->
      <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="border-b border-gray-100 px-5 py-3 dark:border-gray-800">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Reservas de isla</h3>
            <span class="text-xs text-gray-400">{{ bookingsRangoInicio }}-{{ bookingsRangoFin }} de {{ filteredBookings.length }}</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">#</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Cliente</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Embarcaci\xF3n</th>
                <th class="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-400">Fecha viaje</th>
                <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Pax</th>
                <th class="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-400">Total</th>
                <th class="px-5 py-3 text-center text-xs font-semibold uppercase text-gray-400">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
              <tr *ngFor="let b of bookingsPaginadas" class="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                <td class="px-5 py-3 text-xs text-gray-400">#{{ b.id }}</td>
                <td class="px-5 py-3">
                  <p class="font-medium text-gray-800 dark:text-white/90">{{ b.client.firstName }} {{ b.client.lastName }}</p>
                </td>
                <td class="px-5 py-3 text-gray-600 dark:text-gray-400">{{ b.vessel?.name ?? '\u2014' }}</td>
                <td class="px-5 py-3 text-xs text-gray-500 dark:text-gray-400">{{ fmtDate(b.tripDate) }}</td>
                <td class="px-5 py-3 text-center text-gray-600 dark:text-gray-400">{{ b.passengers }}</td>
                <td class="px-5 py-3 text-right font-semibold text-gray-800 dark:text-white/80">{{ fmtCurrency(+b.totalPrice) }}</td>
                <td class="px-5 py-3 text-center">
                  <span class="rounded-full px-2.5 py-1 text-xs font-semibold" [ngClass]="bookingStatusColor(b.status)">
                    {{ b.status }}
                  </span>
                </td>
              </tr>
              <tr *ngIf="bookingsPaginadas.length === 0">
                <td colspan="7" class="py-12 text-center text-sm text-gray-400">No se encontraron reservas con esos filtros.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginaci\xF3n reservas -->
        <div *ngIf="filteredBookings.length > bookingLimit" class="flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-gray-800">
          <p class="text-xs text-gray-400">P\xE1gina {{ bookingPage }} de {{ bookingsTotalPages }}</p>
          <div class="flex gap-2">
            <button (click)="cambiarPaginaBookings(bookingPage - 1)" [disabled]="bookingPage === 1"
              class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
              \u2190 Anterior
            </button>
            <button (click)="cambiarPaginaBookings(bookingPage + 1)" [disabled]="bookingPage === bookingsTotalPages"
              class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
              Siguiente \u2192
            </button>
          </div>
        </div>
      </div>

    </ng-container>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanzasComponent, { className: "FinanzasComponent", filePath: "src/app/pages/finanzas/finanzas.component.ts", lineNumber: 44 });
})();
export {
  FinanzasComponent
};
//# sourceMappingURL=chunk-6PQMSUQI.js.map
