import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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

// src/app/pages/soporte/tickets/soporte-tickets.component.ts
var _c0 = () => ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"];
function SoporteTicketsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SoporteTicketsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = !ctx_r1.showForm);
    });
    \u0275\u0275text(1, " + Nuevo ticket ");
    \u0275\u0275elementEnd();
  }
}
function SoporteTicketsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h2", 16);
    \u0275\u0275text(2, "Nuevo ticket de soporte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "label", 19);
    \u0275\u0275text(6, "Asunto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function SoporteTicketsComponent_div_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSubject, $event) || (ctx_r1.newSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 19);
    \u0275\u0275text(10, "Prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function SoporteTicketsComponent_div_8_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPriority, $event) || (ctx_r1.newPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 22);
    \u0275\u0275text(13, "\u{1F7E2} Baja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 23);
    \u0275\u0275text(15, "\u{1F7E1} Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 24);
    \u0275\u0275text(17, "\u{1F534} Alta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "label", 19);
    \u0275\u0275text(20, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function SoporteTicketsComponent_div_8_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCategory, $event) || (ctx_r1.newCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 25);
    \u0275\u0275text(23, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 26);
    \u0275\u0275text(25, "Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 27);
    \u0275\u0275text(27, "Reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 28);
    \u0275\u0275text(29, "Embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 29);
    \u0275\u0275text(31, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 30);
    \u0275\u0275text(33, "Otro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 18)(35, "label", 19);
    \u0275\u0275text(36, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SoporteTicketsComponent_div_8_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newDesc, $event) || (ctx_r1.newDesc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 32)(39, "button", 33);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_8_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createTicket());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 34);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_8_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(42, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSubject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPriority);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCategory);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDesc);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting || !ctx_r1.newSubject.trim() || !ctx_r1.newDesc.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Enviando\u2026" : "Enviar ticket", " ");
  }
}
function SoporteTicketsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SoporteTicketsComponent_button_12_Template_button_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterStatus = s_r5);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.filterStatus === s_r5 ? "bg-gray-800 text-white dark:bg-white dark:text-gray-900" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/[0.06] dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.statusLabel(s_r5), " (", ctx_r1.countByStatus(s_r5), ") ");
  }
}
function SoporteTicketsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Cargando tickets\u2026");
    \u0275\u0275elementEnd();
  }
}
function SoporteTicketsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.filterStatus ? "Sin tickets con ese estado." : "No hay tickets todav\xEDa.");
  }
}
function SoporteTicketsComponent_div_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7.category);
  }
}
function SoporteTicketsComponent_div_16_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", t_r7.client == null ? null : t_r7.client.firstName, " ", t_r7.client == null ? null : t_r7.client.lastName, " \xB7 ", t_r7.client == null ? null : t_r7.client.email);
  }
}
function SoporteTicketsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_16_Template_div_click_0_listener() {
      const t_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.open(t_r7));
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SoporteTicketsComponent_div_16_span_8_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SoporteTicketsComponent_div_16_p_11_Template, 2, 3, "p", 47);
    \u0275\u0275elementStart(12, "p", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 50);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-brand-400", (ctx_r1.selected == null ? null : ctx_r1.selected.id) === t_r7.id)("dark:border-brand-400", (ctx_r1.selected == null ? null : ctx_r1.selected.id) === t_r7.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", t_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.priorityClass(t_r7.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.priorityLabel(t_r7.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.subject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMaster);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(t_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(t_r7.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 14, t_r7.updatedAt, "dd/MM/yyyy HH:mm"));
  }
}
function SoporteTicketsComponent_div_17_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.selected.client == null ? null : ctx_r1.selected.client.firstName, " ", ctx_r1.selected.client == null ? null : ctx_r1.selected.client.lastName, " ");
  }
}
function SoporteTicketsComponent_div_17_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 71);
    \u0275\u0275listener("change", function SoporteTicketsComponent_div_17_select_10_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStatus($event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 72);
    \u0275\u0275text(2, "Abierto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 73);
    \u0275\u0275text(4, "En proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 74);
    \u0275\u0275text(6, "Resuelto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 75);
    \u0275\u0275text(8, "Cerrado");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.selected.status);
  }
}
function SoporteTicketsComponent_div_17_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1, " Sin mensajes a\xFAn. S\xE9 el primero en responder. ");
    \u0275\u0275elementEnd();
  }
}
function SoporteTicketsComponent_div_17_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "div", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    \u0275\u0275classProp("flex-row-reverse", m_r10.isFromSupport);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", m_r10.isFromSupport ? "bg-brand-500 text-white" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r10.isFromSupport ? "\u{1F3A7}" : (m_r10.author == null ? null : m_r10.author.firstName == null ? null : m_r10.author.firstName.charAt(0)) ?? "?", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", m_r10.isFromSupport ? "rounded-tr-sm bg-brand-500 text-white" : "rounded-tl-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white/90");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r10.message, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-right", m_r10.isFromSupport);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", m_r10.author == null ? null : m_r10.author.firstName, " \xB7 ", \u0275\u0275pipeBind2(8, 10, m_r10.createdAt, "dd/MM HH:mm"), " ");
  }
}
function SoporteTicketsComponent_div_17_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 77)(2, "textarea", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SoporteTicketsComponent_div_17_div_23_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reply, $event) || (ctx_r1.reply = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SoporteTicketsComponent_div_17_div_23_Template_textarea_keydown_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEnter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 84);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_17_div_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 85);
    \u0275\u0275text(6, "Enter para enviar \xB7 Shift+Enter para nueva l\xEDnea");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reply);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sending || !ctx_r1.reply.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sending ? "\u2026" : "\u2192", " ");
  }
}
function SoporteTicketsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 54);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 55)(3, "div")(4, "p", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SoporteTicketsComponent_div_17_p_8_Template, 2, 2, "p", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275template(10, SoporteTicketsComponent_div_17_select_10_Template, 9, 1, "select", 60);
    \u0275\u0275elementStart(11, "button", 61);
    \u0275\u0275listener("click", function SoporteTicketsComponent_div_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 62)(14, "p", 63);
    \u0275\u0275text(15, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 64);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 65)(19, "p", 66);
    \u0275\u0275text(20, "Conversaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SoporteTicketsComponent_div_17_div_21_Template, 2, 0, "div", 67)(22, SoporteTicketsComponent_div_17_div_22_Template, 9, 13, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SoporteTicketsComponent_div_17_div_23_Template, 7, 3, "div", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("#", ctx_r1.selected.id, " \xB7 ", ctx_r1.selected.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selected.subject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMaster);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isMaster);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selected.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !(ctx_r1.selected.messages == null ? null : ctx_r1.selected.messages.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selected.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected.status !== "CLOSED");
  }
}
var SoporteTicketsComponent = class _SoporteTicketsComponent {
  http = inject(HttpClient);
  auth = inject(AuthService);
  base = `${environment.apiUrl}/support-tickets`;
  get isClient() {
    return this.auth.role() === "CLIENTE";
  }
  get isMaster() {
    return this.auth.role() === "MASTER" || this.auth.role() === "ADMINISTRADOR";
  }
  get user() {
    return this.auth.user();
  }
  loading = true;
  tickets = [];
  selected = null;
  filterStatus = "";
  reply = "";
  sending = false;
  // Formulario nuevo ticket (cliente)
  showForm = false;
  newSubject = "";
  newDesc = "";
  newPriority = "MEDIUM";
  newCategory = "";
  submitting = false;
  get filtered() {
    if (!this.filterStatus)
      return this.tickets;
    return this.tickets.filter((t) => t.status === this.filterStatus);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = this.isClient ? `?clientId=${this.user?.id}` : "";
    this.http.get(`${this.base}${params}`).subscribe({
      next: (t) => {
        this.tickets = t;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  open(t) {
    this.http.get(`${this.base}/${t.id}`).subscribe({
      next: (full) => {
        this.selected = full;
      }
    });
  }
  close() {
    this.selected = null;
    this.reply = "";
  }
  sendReply() {
    if (!this.reply.trim() || !this.selected)
      return;
    this.sending = true;
    this.http.post(`${this.base}/${this.selected.id}/messages`, {
      userId: this.user?.id,
      message: this.reply.trim(),
      isFromSupport: this.isMaster
    }).subscribe({
      next: (updated) => {
        this.selected = updated;
        this.reply = "";
        this.sending = false;
        const idx = this.tickets.findIndex((t) => t.id === updated.id);
        if (idx !== -1)
          this.tickets[idx] = __spreadProps(__spreadValues({}, this.tickets[idx]), { status: updated.status, updatedAt: updated.updatedAt });
      },
      error: () => {
        this.sending = false;
      }
    });
  }
  updateStatus(status) {
    if (!this.selected)
      return;
    this.http.patch(`${this.base}/${this.selected.id}`, { status }).subscribe({
      next: (updated) => {
        this.selected = __spreadProps(__spreadValues({}, this.selected), { status: updated.status });
        const idx = this.tickets.findIndex((t) => t.id === updated.id);
        if (idx !== -1)
          this.tickets[idx] = __spreadProps(__spreadValues({}, this.tickets[idx]), { status: updated.status });
      }
    });
  }
  createTicket() {
    if (!this.newSubject.trim() || !this.newDesc.trim())
      return;
    this.submitting = true;
    this.http.post(this.base, {
      clientId: this.user?.id,
      subject: this.newSubject.trim(),
      description: this.newDesc.trim(),
      priority: this.newPriority,
      category: this.newCategory || "General"
    }).subscribe({
      next: (t) => {
        this.tickets.unshift(t);
        this.showForm = false;
        this.newSubject = "";
        this.newDesc = "";
        this.newPriority = "MEDIUM";
        this.newCategory = "";
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
  onEnter(e) {
    if (e.shiftKey)
      return;
    e.preventDefault();
    this.sendReply();
  }
  countByStatus(s) {
    return this.tickets.filter((t) => t.status === s).length;
  }
  statusLabel(s) {
    return { OPEN: "Abierto", IN_PROGRESS: "En proceso", RESOLVED: "Resuelto", CLOSED: "Cerrado" }[s] ?? s;
  }
  statusClass(s) {
    return {
      OPEN: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      IN_PROGRESS: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
      RESOLVED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CLOSED: "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
    }[s] ?? "bg-gray-100 text-gray-600";
  }
  priorityClass(p) {
    return {
      HIGH: "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",
      MEDIUM: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
      LOW: "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
    }[p] ?? "";
  }
  priorityLabel(p) {
    return { HIGH: "\u{1F534} Alta", MEDIUM: "\u{1F7E1} Media", LOW: "\u{1F7E2} Baja" }[p] ?? p;
  }
  static \u0275fac = function SoporteTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SoporteTicketsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoporteTicketsComponent, selectors: [["app-soporte-tickets"]], decls: 18, vars: 11, consts: [[1, "space-y-5"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 shadow-md transition", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-brand-200 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/5", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-2"], [1, "rounded-full", "px-4", "py-1.5", "text-xs", "font-semibold", "transition", 3, "click", "ngClass"], ["class", "rounded-full px-4 py-1.5 text-xs font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "grid", "gap-3", "lg:grid-cols-2"], ["class", "col-span-2 py-16 text-center text-gray-400", 4, "ngIf"], ["class", "col-span-2 rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700", 4, "ngIf"], ["class", "cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-300 hover:shadow-md transition-all dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/40", 3, "border-brand-400", "dark:border-brand-400", "click", 4, "ngFor", "ngForOf"], ["class", "fixed inset-0 z-50 flex items-start justify-end bg-black/30 backdrop-blur-sm p-4", 3, "click", 4, "ngIf"], [1, "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "shadow-md", "transition", 3, "click"], [1, "rounded-2xl", "border", "border-brand-200", "bg-brand-50", "p-6", "dark:border-brand-500/20", "dark:bg-brand-500/5"], [1, "mb-4", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "gap-4", "sm:grid-cols-2"], [1, "sm:col-span-2"], [1, "mb-1", "block", "text-xs", "font-semibold", "text-gray-500"], ["placeholder", "\xBFEn qu\xE9 podemos ayudarte?", 1, "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", "LOW"], ["value", "MEDIUM"], ["value", "HIGH"], ["value", ""], ["value", "Pagos"], ["value", "Reservas"], ["value", "Embarcaciones"], ["value", "Cuenta"], ["value", "Otro"], ["rows", "4", "placeholder", "Describe tu problema con detalle...", 1, "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "resize-none", 3, "ngModelChange", "ngModel"], [1, "mt-4", "flex", "gap-3"], [1, "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", 3, "click", "disabled"], [1, "rounded-xl", "border", "border-gray-200", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "transition", 3, "click"], [1, "col-span-2", "py-16", "text-center", "text-gray-400"], [1, "col-span-2", "rounded-2xl", "border", "border-dashed", "border-gray-200", "p-14", "text-center", "dark:border-gray-700"], [1, "mb-3", "text-5xl"], [1, "text-gray-500", "dark:text-gray-400"], [1, "cursor-pointer", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "hover:border-brand-300", "hover:shadow-md", "transition-all", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:hover:border-brand-500/40", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-xs", "font-bold", "text-gray-400"], [1, "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], ["class", "rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 dark:bg-white/[0.06]", 4, "ngIf"], [1, "font-semibold", "text-gray-800", "dark:text-white/90", "truncate"], ["class", "mt-0.5 text-xs text-gray-400", 4, "ngIf"], [1, "mt-1", "text-xs", "text-gray-400", "line-clamp-1"], [1, "flex-shrink-0", "rounded-full", "px-2.5", "py-1", "text-[10px]", "font-bold", 3, "ngClass"], [1, "mt-3", "text-[10px]", "text-gray-400"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "text-gray-500", "dark:bg-white/[0.06]"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "fixed", "inset-0", "z-50", "flex", "items-start", "justify-end", "bg-black/30", "backdrop-blur-sm", "p-4", 3, "click"], [1, "relative", "h-full", "w-full", "max-w-xl", "overflow-y-auto", "rounded-2xl", "bg-white", "shadow-2xl", "dark:bg-gray-900", 3, "click"], [1, "sticky", "top-0", "z-10", "flex", "items-start", "justify-between", "border-b", "border-gray-100", "bg-white", "px-6", "py-4", "dark:border-gray-800", "dark:bg-gray-900"], [1, "text-xs", "text-gray-400", "mb-0.5"], [1, "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "text-xs text-gray-400 mt-0.5", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["class", "rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white", 3, "value", "change", 4, "ngIf"], [1, "rounded-lg", "p-2", "text-gray-400", "hover:bg-gray-100", "hover:text-gray-600", "dark:hover:bg-gray-800", 3, "click"], [1, "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400", "mb-2"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "flex", "flex-col", "gap-3", "px-6", "py-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], ["class", "py-6 text-center text-sm text-gray-400", 4, "ngIf"], ["class", "flex gap-3", 3, "flex-row-reverse", 4, "ngFor", "ngForOf"], ["class", "sticky bottom-0 border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900", 4, "ngIf"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "rounded-lg", "border", "border-gray-200", "bg-white", "px-3", "py-1.5", "text-xs", "font-semibold", "outline-none", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "change", "value"], ["value", "OPEN"], ["value", "IN_PROGRESS"], ["value", "RESOLVED"], ["value", "CLOSED"], [1, "py-6", "text-center", "text-sm", "text-gray-400"], [1, "flex", "gap-3"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], [1, "max-w-[75%]"], [1, "rounded-2xl", "px-4", "py-2.5", "text-sm", 3, "ngClass"], [1, "mt-1", "text-[10px]", "text-gray-400"], [1, "sticky", "bottom-0", "border-t", "border-gray-100", "bg-white", "px-6", "py-4", "dark:border-gray-800", "dark:bg-gray-900"], ["rows", "2", "placeholder", "Escribe tu respuesta\u2026", 1, "flex-1", "resize-none", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "self-end", "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-40", "transition", 3, "click", "disabled"], [1, "mt-1.5", "text-[10px]", "text-gray-400"]], template: function SoporteTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u{1F3AB} Tickets de soporte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SoporteTicketsComponent_button_7_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, SoporteTicketsComponent_div_8_Template, 43, 6, "div", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function SoporteTicketsComponent_Template_button_click_10_listener() {
        return ctx.filterStatus = "";
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, SoporteTicketsComponent_button_12_Template, 2, 3, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275template(14, SoporteTicketsComponent_div_14_Template, 2, 0, "div", 10)(15, SoporteTicketsComponent_div_15_Template, 5, 1, "div", 11)(16, SoporteTicketsComponent_div_16_Template, 19, 17, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, SoporteTicketsComponent_div_17_Template, 24, 9, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isMaster ? "Gestiona las solicitudes de clientes" : "Tus solicitudes de ayuda", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isClient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm && ctx.isClient);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.filterStatus === "" ? "bg-gray-800 text-white dark:bg-white dark:text-gray-900" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/[0.06] dark:text-gray-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Todos (", ctx.tickets.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filtered);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SoporteTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-soporte-tickets", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-5">

  <!-- Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">\u{1F3AB} Tickets de soporte</h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ isMaster ? 'Gestiona las solicitudes de clientes' : 'Tus solicitudes de ayuda' }}
      </p>
    </div>
    <button *ngIf="isClient" (click)="showForm = !showForm"
      class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 shadow-md transition">
      + Nuevo ticket
    </button>
  </div>

  <!-- Formulario nuevo ticket (CLIENTE) -->
  <div *ngIf="showForm && isClient"
    class="rounded-2xl border border-brand-200 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/5">
    <h2 class="mb-4 font-bold text-gray-800 dark:text-white/90">Nuevo ticket de soporte</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="sm:col-span-2">
        <label class="mb-1 block text-xs font-semibold text-gray-500">Asunto *</label>
        <input [(ngModel)]="newSubject" placeholder="\xBFEn qu\xE9 podemos ayudarte?"
          class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
      </div>
      <div>
        <label class="mb-1 block text-xs font-semibold text-gray-500">Prioridad</label>
        <select [(ngModel)]="newPriority"
          class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
          <option value="LOW">\u{1F7E2} Baja</option>
          <option value="MEDIUM">\u{1F7E1} Media</option>
          <option value="HIGH">\u{1F534} Alta</option>
        </select>
      </div>
      <div>
        <label class="mb-1 block text-xs font-semibold text-gray-500">Categor\xEDa</label>
        <select [(ngModel)]="newCategory"
          class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
          <option value="">General</option>
          <option value="Pagos">Pagos</option>
          <option value="Reservas">Reservas</option>
          <option value="Embarcaciones">Embarcaciones</option>
          <option value="Cuenta">Cuenta</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div class="sm:col-span-2">
        <label class="mb-1 block text-xs font-semibold text-gray-500">Descripci\xF3n *</label>
        <textarea [(ngModel)]="newDesc" rows="4" placeholder="Describe tu problema con detalle..."
          class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white resize-none"></textarea>
      </div>
    </div>
    <div class="mt-4 flex gap-3">
      <button (click)="createTicket()" [disabled]="submitting || !newSubject.trim() || !newDesc.trim()"
        class="rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition">
        {{ submitting ? 'Enviando\u2026' : 'Enviar ticket' }}
      </button>
      <button (click)="showForm = false"
        class="rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
        Cancelar
      </button>
    </div>
  </div>

  <!-- Filtros -->
  <div class="flex flex-wrap gap-2">
    <button (click)="filterStatus = ''"
      class="rounded-full px-4 py-1.5 text-xs font-semibold transition"
      [ngClass]="filterStatus === '' ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/[0.06] dark:text-gray-400'">
      Todos ({{ tickets.length }})
    </button>
    <button *ngFor="let s of ['OPEN','IN_PROGRESS','RESOLVED','CLOSED']" (click)="filterStatus = s"
      class="rounded-full px-4 py-1.5 text-xs font-semibold transition"
      [ngClass]="filterStatus === s ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/[0.06] dark:text-gray-400'">
      {{ statusLabel(s) }} ({{ countByStatus(s) }})
    </button>
  </div>

  <!-- Lista de tickets -->
  <div class="grid gap-3 lg:grid-cols-2">

    <div *ngIf="loading" class="col-span-2 py-16 text-center text-gray-400">Cargando tickets\u2026</div>

    <div *ngIf="!loading && filtered.length === 0" class="col-span-2 rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700">
      <div class="mb-3 text-5xl">\u{1F3AB}</div>
      <p class="text-gray-500 dark:text-gray-400">{{ filterStatus ? 'Sin tickets con ese estado.' : 'No hay tickets todav\xEDa.' }}</p>
    </div>

    <div *ngFor="let t of filtered"
      (click)="open(t)"
      class="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-300 hover:shadow-md transition-all dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/40"
      [class.border-brand-400]="selected?.id === t.id"
      [class.dark:border-brand-400]="selected?.id === t.id">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold text-gray-400">#{{ t.id }}</span>
            <span class="rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="priorityClass(t.priority)">
              {{ priorityLabel(t.priority) }}
            </span>
            <span *ngIf="t.category" class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 dark:bg-white/[0.06]">{{ t.category }}</span>
          </div>
          <p class="font-semibold text-gray-800 dark:text-white/90 truncate">{{ t.subject }}</p>
          <p *ngIf="isMaster" class="mt-0.5 text-xs text-gray-400">{{ t.client?.firstName }} {{ t.client?.lastName }} \xB7 {{ t.client?.email }}</p>
          <p class="mt-1 text-xs text-gray-400 line-clamp-1">{{ t.description }}</p>
        </div>
        <span class="flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold" [ngClass]="statusClass(t.status)">
          {{ statusLabel(t.status) }}
        </span>
      </div>
      <p class="mt-3 text-[10px] text-gray-400">{{ t.updatedAt | date:'dd/MM/yyyy HH:mm' }}</p>
    </div>
  </div>

  <!-- Detalle del ticket (panel lateral / modal) -->
  <div *ngIf="selected"
    class="fixed inset-0 z-50 flex items-start justify-end bg-black/30 backdrop-blur-sm p-4"
    (click)="close()">
    <div class="relative h-full w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
      (click)="$event.stopPropagation()">

      <!-- Cabecera -->
      <div class="sticky top-0 z-10 flex items-start justify-between border-b border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
        <div>
          <p class="text-xs text-gray-400 mb-0.5">#{{ selected.id }} \xB7 {{ selected.category }}</p>
          <h2 class="font-bold text-gray-800 dark:text-white/90">{{ selected.subject }}</h2>
          <p *ngIf="isMaster" class="text-xs text-gray-400 mt-0.5">
            {{ selected.client?.firstName }} {{ selected.client?.lastName }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <!-- Estado (solo master) -->
          <select *ngIf="isMaster" [value]="selected.status" (change)="updateStatus($any($event.target).value)"
            class="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <option value="OPEN">Abierto</option>
            <option value="IN_PROGRESS">En proceso</option>
            <option value="RESOLVED">Resuelto</option>
            <option value="CLOSED">Cerrado</option>
          </select>
          <button (click)="close()" class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800">\u2715</button>
        </div>
      </div>

      <!-- Descripci\xF3n -->
      <div class="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Descripci\xF3n</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">{{ selected.description }}</p>
      </div>

      <!-- Mensajes -->
      <div class="flex flex-col gap-3 px-6 py-4">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Conversaci\xF3n</p>

        <div *ngIf="!selected.messages?.length" class="py-6 text-center text-sm text-gray-400">
          Sin mensajes a\xFAn. S\xE9 el primero en responder.
        </div>

        <div *ngFor="let m of selected.messages"
          class="flex gap-3"
          [class.flex-row-reverse]="m.isFromSupport">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
            [ngClass]="m.isFromSupport ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'">
            {{ m.isFromSupport ? '\u{1F3A7}' : (m.author?.firstName?.charAt(0) ?? '?') }}
          </div>
          <div class="max-w-[75%]">
            <div class="rounded-2xl px-4 py-2.5 text-sm"
              [ngClass]="m.isFromSupport
                ? 'rounded-tr-sm bg-brand-500 text-white'
                : 'rounded-tl-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white/90'">
              {{ m.message }}
            </div>
            <p class="mt-1 text-[10px] text-gray-400"
              [class.text-right]="m.isFromSupport">
              {{ m.author?.firstName }} \xB7 {{ m.createdAt | date:'dd/MM HH:mm' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Reply box -->
      <div *ngIf="selected.status !== 'CLOSED'"
        class="sticky bottom-0 border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
        <div class="flex gap-3">
          <textarea [(ngModel)]="reply" rows="2" placeholder="Escribe tu respuesta\u2026"
            class="flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            (keydown.enter)="onEnter($event)"></textarea>
          <button (click)="sendReply()" [disabled]="sending || !reply.trim()"
            class="self-end rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-40 transition">
            {{ sending ? '\u2026' : '\u2192' }}
          </button>
        </div>
        <p class="mt-1.5 text-[10px] text-gray-400">Enter para enviar \xB7 Shift+Enter para nueva l\xEDnea</p>
      </div>

    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoporteTicketsComponent, { className: "SoporteTicketsComponent", filePath: "src/app/pages/soporte/tickets/soporte-tickets.component.ts", lineNumber: 27 });
})();
export {
  SoporteTicketsComponent
};
//# sourceMappingURL=chunk-XNH5XHDS.js.map
