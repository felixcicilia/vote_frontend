import {
  PaymentAccountsService
} from "./chunk-G77DX7AD.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import {
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/pages/metodos-cobro/metodos-cobro.component.ts
function MetodosCobroComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r0.successMsg, " ");
  }
}
function MetodosCobroComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 12);
    \u0275\u0275text(2, "Cargando m\xE9todos...");
    \u0275\u0275elementEnd()();
  }
}
function MetodosCobroComponent_div_12_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " Inactivo ");
    \u0275\u0275elementEnd();
  }
}
function MetodosCobroComponent_div_12_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(acc_r3.description);
  }
}
function MetodosCobroComponent_div_12_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r4.label, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r4.value, " ");
  }
}
function MetodosCobroComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "h3", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MetodosCobroComponent_div_12_div_1_span_12_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MetodosCobroComponent_div_12_div_1_p_13_Template, 2, 1, "p", 25);
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275template(15, MetodosCobroComponent_div_12_div_1_span_15_Template, 4, 2, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 28)(17, "div", 29)(18, "button", 30);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_12_div_1_Template_button_click_18_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.moveUp(acc_r3));
    });
    \u0275\u0275text(19, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_12_div_1_Template_button_click_20_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.moveDown(acc_r3));
    });
    \u0275\u0275text(21, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 32);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_12_div_1_Template_button_click_22_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(acc_r3));
    });
    \u0275\u0275text(23, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 33);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_12_div_1_Template_button_click_24_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(acc_r3));
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_12_div_1_Template_button_click_26_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(acc_r3));
    });
    \u0275\u0275text(27, " Eliminar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", acc_r3.isActive ? "border-gray-200 dark:border-gray-800" : "border-dashed border-gray-300 opacity-60 dark:border-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", acc_r3.icon, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(acc_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", acc_r3.currency === "USD" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : acc_r3.currency === "BS" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400" : "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r3.currency, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.methodLabel(acc_r3.method), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !acc_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", acc_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", acc_r3.fields);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", i_r5 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", i_r5 === ctx_r0.accounts.length - 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", acc_r3.isActive ? "border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-800/30 dark:text-amber-400" : "border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800/30 dark:text-green-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r3.isActive ? "Desactivar" : "Activar", " ");
  }
}
function MetodosCobroComponent_div_12_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " No hay m\xE9todos de cobro. Agrega uno con el bot\xF3n de arriba. ");
    \u0275\u0275elementEnd();
  }
}
function MetodosCobroComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, MetodosCobroComponent_div_12_div_1_Template, 28, 13, "div", 14)(2, MetodosCobroComponent_div_12_p_2_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.accounts.length === 0);
  }
}
function MetodosCobroComponent_div_13_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    \u0275\u0275property("value", m_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r7.label);
  }
}
function MetodosCobroComponent_div_13_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("value", c_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8);
  }
}
function MetodosCobroComponent_div_13_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_div_42_Template_input_ngModelChange_1_listener($event) {
      const f_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(f_r10.label, $event) || (f_r10.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_div_42_Template_input_ngModelChange_2_listener($event) {
      const f_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(f_r10.value, $event) || (f_r10.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 69);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_13_div_42_Template_button_click_3_listener() {
      const i_r11 = \u0275\u0275restoreView(_r9).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeField(i_r11));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", f_r10.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", f_r10.value);
  }
}
function MetodosCobroComponent_div_13_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, " Sin campos. Agrega los datos bancarios o instrucciones que ver\xE1 el cliente. ");
    \u0275\u0275elementEnd();
  }
}
function MetodosCobroComponent_div_13_p_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function MetodosCobroComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "h2", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "div")(5, "label", 43);
    \u0275\u0275text(6, "Nombre visible *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.label, $event) || (ctx_r0.form.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 43);
    \u0275\u0275text(10, "\xCDcono (emoji)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.icon, $event) || (ctx_r0.form.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 43);
    \u0275\u0275text(14, "Tipo de m\xE9todo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.method, $event) || (ctx_r0.form.method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(16, MetodosCobroComponent_div_13_option_16_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 43);
    \u0275\u0275text(19, "Moneda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.currency, $event) || (ctx_r0.form.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, MetodosCobroComponent_div_13_option_21_Template, 2, 2, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 48)(23, "label", 43);
    \u0275\u0275text(24, "Descripci\xF3n corta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 43);
    \u0275\u0275text(28, "Orden de aparici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.sortOrder, $event) || (ctx_r0.form.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 51)(31, "label", 52)(32, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function MetodosCobroComponent_div_13_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.isActive, $event) || (ctx_r0.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 54);
    \u0275\u0275text(34, "M\xE9todo activo (visible para clientes)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 55)(36, "div", 56)(37, "label", 54);
    \u0275\u0275text(38, "Datos de la cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 57);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_13_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addField());
    });
    \u0275\u0275text(40, " + Agregar campo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 58);
    \u0275\u0275template(42, MetodosCobroComponent_div_13_div_42_Template, 5, 2, "div", 59)(43, MetodosCobroComponent_div_13_p_43_Template, 2, 0, "p", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, MetodosCobroComponent_div_13_p_44_Template, 2, 1, "p", 61);
    \u0275\u0275elementStart(45, "div", 62)(46, "button", 63);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_13_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(47, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 64);
    \u0275\u0275listener("click", function MetodosCobroComponent_div_13_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingId ? "Editar m\xE9todo" : "Nuevo m\xE9todo de cobro", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.label);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.icon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.method);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.METHODS);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.CURRENCIES);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.sortOrder);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.isActive);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.form.fields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.fields.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMsg);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Guardando..." : ctx_r0.editingId ? "Actualizar" : "Crear m\xE9todo", " ");
  }
}
var METHODS = [
  { value: "PAGO_MOVIL", label: "Pago M\xF3vil" },
  { value: "TRANSFERENCIA", label: "Transferencia Bol\xEDvares" },
  { value: "ZELLE", label: "Zelle" },
  { value: "BINANCE", label: "Binance Pay" },
  { value: "CASH", label: "Efectivo USD" },
  { value: "CARD", label: "Tarjeta de cr\xE9dito" }
];
var MetodosCobroComponent = class _MetodosCobroComponent {
  service = inject(PaymentAccountsService);
  accounts = [];
  loading = true;
  saving = false;
  errorMsg = "";
  successMsg = "";
  METHODS = METHODS;
  CURRENCIES = ["USD", "BS", "USDT"];
  showForm = false;
  editingId = null;
  form = this.emptyForm();
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (a) => {
        this.accounts = a;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  emptyForm() {
    return { label: "", icon: "\u{1F4B3}", method: "PAGO_MOVIL", currency: "USD", description: "", fields: [], isActive: true, sortOrder: 0 };
  }
  openCreate() {
    this.form = this.emptyForm();
    this.editingId = null;
    this.showForm = true;
    this.errorMsg = "";
  }
  openEdit(acc) {
    this.form = {
      label: acc.label,
      icon: acc.icon,
      method: acc.method,
      currency: acc.currency,
      description: acc.description ?? "",
      fields: acc.fields.map((f) => __spreadValues({}, f)),
      isActive: acc.isActive,
      sortOrder: acc.sortOrder
    };
    this.editingId = acc.id;
    this.showForm = true;
    this.errorMsg = "";
  }
  cancel() {
    this.showForm = false;
    this.editingId = null;
  }
  addField() {
    this.form.fields = [...this.form.fields, { label: "", value: "" }];
  }
  removeField(i) {
    this.form.fields = this.form.fields.filter((_, idx) => idx !== i);
  }
  save() {
    if (!this.form.label.trim() || !this.form.method) {
      this.errorMsg = "Nombre y m\xE9todo son obligatorios.";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.editingId ? this.service.update(this.editingId, this.form) : this.service.create(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.successMsg = this.editingId ? "M\xE9todo actualizado." : "M\xE9todo creado.";
        setTimeout(() => this.successMsg = "", 3e3);
        this.load();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al guardar.";
        this.saving = false;
      }
    });
  }
  toggleActive(acc) {
    this.service.update(acc.id, { isActive: !acc.isActive }).subscribe({
      next: () => {
        acc.isActive = !acc.isActive;
      }
    });
  }
  moveUp(acc) {
    const idx = this.accounts.indexOf(acc);
    if (idx <= 0)
      return;
    const prev = this.accounts[idx - 1];
    this.service.update(acc.id, { sortOrder: prev.sortOrder }).subscribe();
    this.service.update(prev.id, { sortOrder: acc.sortOrder }).subscribe(() => this.load());
  }
  moveDown(acc) {
    const idx = this.accounts.indexOf(acc);
    if (idx >= this.accounts.length - 1)
      return;
    const next = this.accounts[idx + 1];
    this.service.update(acc.id, { sortOrder: next.sortOrder }).subscribe();
    this.service.update(next.id, { sortOrder: acc.sortOrder }).subscribe(() => this.load());
  }
  remove(acc) {
    if (!confirm(`\xBFEliminar "${acc.label}"?`))
      return;
    this.service.remove(acc.id).subscribe({ next: () => this.load() });
  }
  methodLabel(v) {
    return METHODS.find((m) => m.value === v)?.label ?? v;
  }
  static \u0275fac = function MetodosCobroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetodosCobroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetodosCobroComponent, selectors: [["app-metodos-cobro"]], decls: 14, vars: 4, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "transition", 3, "click"], ["class", "rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/5 dark:text-green-400", 4, "ngIf"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], ["class", "rounded-2xl border border-brand-200 bg-white p-6 shadow-sm dark:border-brand-800/30 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-xl", "border", "border-green-200", "bg-green-50", "p-4", "text-sm", "text-green-700", "dark:border-green-900/30", "dark:bg-green-500/5", "dark:text-green-400"], [1, "flex", "items-center", "justify-center", "py-16"], [1, "text-sm", "text-gray-400", "animate-pulse"], [1, "space-y-3"], ["class", "overflow-hidden rounded-2xl border bg-white shadow-sm transition dark:bg-white/[0.03]", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "py-12 text-center text-sm text-gray-400", 4, "ngIf"], [1, "overflow-hidden", "rounded-2xl", "border", "bg-white", "shadow-sm", "transition", "dark:bg-white/[0.03]", 3, "ngClass"], [1, "flex", "items-start", "gap-4", "p-5"], [1, "flex", "h-12", "w-12", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-gray-100", "text-2xl", "dark:bg-gray-800"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "rounded-full", "px-2", "py-0.5", "text-xs", "font-medium", 3, "ngClass"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-xs", "text-gray-500", "dark:bg-gray-800", "dark:text-gray-400"], ["class", "rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "mt-0.5 text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], [1, "mt-2", "flex", "flex-wrap", "gap-x-4", "gap-y-1"], ["class", "text-xs text-gray-600 dark:text-gray-400", 4, "ngFor", "ngForOf"], [1, "flex", "flex-shrink-0", "flex-col", "items-end", "gap-2"], [1, "flex", "gap-1"], ["title", "Subir", 1, "rounded-lg", "border", "border-gray-200", "p-1.5", "text-xs", "text-gray-500", "hover:bg-gray-50", "disabled:opacity-30", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], ["title", "Bajar", 1, "rounded-lg", "border", "border-gray-200", "p-1.5", "text-xs", "text-gray-500", "hover:bg-gray-50", "disabled:opacity-30", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "rounded-lg", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"], [1, "rounded-lg", "border", "border-red-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "dark:border-red-900/30", "dark:text-red-400", 3, "click"], [1, "rounded-full", "bg-red-100", "px-2", "py-0.5", "text-xs", "text-red-600", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-0.5", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "text-gray-600", "dark:text-gray-400"], [1, "font-medium"], [1, "py-12", "text-center", "text-sm", "text-gray-400"], [1, "rounded-2xl", "border", "border-brand-200", "bg-white", "p-6", "shadow-sm", "dark:border-brand-800/30", "dark:bg-white/[0.03]"], [1, "mb-5", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-400"], ["type", "text", "placeholder", "Ej: Pago M\xF3vil", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u{1F4F1}", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "sm:col-span-2"], ["type", "text", "placeholder", "Ej: Transferencias interbancarias \xB7 Pago en Bol\xEDvares", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "items-end", "pb-1"], [1, "flex", "cursor-pointer", "items-center", "gap-3"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "accent-brand-500", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "mt-5"], [1, "mb-3", "flex", "items-center", "justify-between"], ["type", "button", 1, "rounded-lg", "border", "border-brand-200", "px-3", "py-1", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", "dark:border-brand-800/30", "dark:text-brand-400", 3, "click"], [1, "space-y-2"], ["class", "flex gap-2", 4, "ngFor", "ngForOf"], ["class", "text-xs text-gray-400", 4, "ngIf"], ["class", "mt-3 text-sm text-red-600 dark:text-red-400", 4, "ngIf"], [1, "mt-5", "flex", "gap-3", "justify-end"], ["type", "button", 1, "rounded-lg", "border", "border-gray-200", "px-5", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "rounded-lg", "bg-brand-500", "px-6", "py-2", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", 3, "click", "disabled"], [3, "value"], [1, "flex", "gap-2"], ["type", "text", "placeholder", "Etiqueta (ej: Banco)", 1, "h-9", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Valor (ej: Banco de Venezuela)", 1, "h-9", "flex-[2]", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "h-9", "w-9", "flex-shrink-0", "rounded-lg", "border", "border-red-200", "text-xs", "text-red-500", "hover:bg-red-50", "dark:border-red-900/30", 3, "click"], [1, "text-xs", "text-gray-400"], [1, "mt-3", "text-sm", "text-red-600", "dark:text-red-400"]], template: function MetodosCobroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u{1F4B3} M\xE9todos de cobro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Configura las cuentas y m\xE9todos de pago que ver\xE1n los clientes al realizar sus reservas. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function MetodosCobroComponent_Template_button_click_8_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275text(9, " + Nuevo m\xE9todo ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, MetodosCobroComponent_div_10_Template, 2, 1, "div", 6)(11, MetodosCobroComponent_div_11_Template, 3, 0, "div", 7)(12, MetodosCobroComponent_div_12_Template, 3, 2, "div", 8)(13, MetodosCobroComponent_div_13_Template, 50, 15, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.successMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetodosCobroComponent, [{
    type: Component,
    args: [{ selector: "app-metodos-cobro", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4B3} M\xE9todos de cobro</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
          Configura las cuentas y m\xE9todos de pago que ver\xE1n los clientes al realizar sus reservas.
        </p>
      </div>
      <button (click)="openCreate()"
        class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">
        + Nuevo m\xE9todo
      </button>
    </div>
  </div>

  <!-- Success -->
  <div *ngIf="successMsg"
    class="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/5 dark:text-green-400">
    \u2713 {{ successMsg }}
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-16">
    <p class="text-sm text-gray-400 animate-pulse">Cargando m\xE9todos...</p>
  </div>

  <!-- List -->
  <div *ngIf="!loading" class="space-y-3">
    <div *ngFor="let acc of accounts; let i = index"
      class="overflow-hidden rounded-2xl border bg-white shadow-sm transition dark:bg-white/[0.03]"
      [ngClass]="acc.isActive ? 'border-gray-200 dark:border-gray-800' : 'border-dashed border-gray-300 opacity-60 dark:border-gray-700'">
      <div class="flex items-start gap-4 p-5">

        <!-- Icon -->
        <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl dark:bg-gray-800">
          {{ acc.icon }}
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="font-semibold text-gray-800 dark:text-white/90">{{ acc.label }}</h3>
            <span class="rounded-full px-2 py-0.5 text-xs font-medium"
              [ngClass]="acc.currency === 'USD' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
                       : acc.currency === 'BS'  ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                                                : 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'">
              {{ acc.currency }}
            </span>
            <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              {{ methodLabel(acc.method) }}
            </span>
            <span *ngIf="!acc.isActive" class="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-500/10 dark:text-red-400">
              Inactivo
            </span>
          </div>
          <p *ngIf="acc.description" class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{{ acc.description }}</p>
          <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span *ngFor="let f of acc.fields" class="text-xs text-gray-600 dark:text-gray-400">
              <span class="font-medium">{{ f.label }}:</span> {{ f.value }}
            </span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-shrink-0 flex-col items-end gap-2">
          <div class="flex gap-1">
            <button (click)="moveUp(acc)" [disabled]="i === 0"
              class="rounded-lg border border-gray-200 p-1.5 text-xs text-gray-500 hover:bg-gray-50 disabled:opacity-30 dark:border-gray-700 dark:text-gray-400"
              title="Subir">\u2191</button>
            <button (click)="moveDown(acc)" [disabled]="i === accounts.length - 1"
              class="rounded-lg border border-gray-200 p-1.5 text-xs text-gray-500 hover:bg-gray-50 disabled:opacity-30 dark:border-gray-700 dark:text-gray-400"
              title="Bajar">\u2193</button>
            <button (click)="openEdit(acc)"
              class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
              Editar
            </button>
            <button (click)="toggleActive(acc)"
              class="rounded-lg border px-3 py-1.5 text-xs font-medium transition"
              [ngClass]="acc.isActive
                ? 'border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-800/30 dark:text-amber-400'
                : 'border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800/30 dark:text-green-400'">
              {{ acc.isActive ? 'Desactivar' : 'Activar' }}
            </button>
            <button (click)="remove(acc)"
              class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-900/30 dark:text-red-400">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

    <p *ngIf="accounts.length === 0" class="py-12 text-center text-sm text-gray-400">
      No hay m\xE9todos de cobro. Agrega uno con el bot\xF3n de arriba.
    </p>
  </div>

  <!-- \u2500\u2500\u2500 FORM PANEL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div *ngIf="showForm" class="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm dark:border-brand-800/30 dark:bg-white/[0.03]">
    <h2 class="mb-5 text-base font-bold text-gray-800 dark:text-white/90">
      {{ editingId ? 'Editar m\xE9todo' : 'Nuevo m\xE9todo de cobro' }}
    </h2>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

      <!-- Label -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Nombre visible *</label>
        <input type="text" [(ngModel)]="form.label" placeholder="Ej: Pago M\xF3vil"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <!-- Icon -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">\xCDcono (emoji)</label>
        <input type="text" [(ngModel)]="form.icon" placeholder="\u{1F4F1}"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <!-- Method -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Tipo de m\xE9todo *</label>
        <select [(ngModel)]="form.method"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option *ngFor="let m of METHODS" [value]="m.value">{{ m.label }}</option>
        </select>
      </div>

      <!-- Currency -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Moneda</label>
        <select [(ngModel)]="form.currency"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option *ngFor="let c of CURRENCIES" [value]="c">{{ c }}</option>
        </select>
      </div>

      <!-- Description -->
      <div class="sm:col-span-2">
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Descripci\xF3n corta</label>
        <input type="text" [(ngModel)]="form.description" placeholder="Ej: Transferencias interbancarias \xB7 Pago en Bol\xEDvares"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <!-- Sort order + active -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Orden de aparici\xF3n</label>
        <input type="number" [(ngModel)]="form.sortOrder" min="0"
          class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <div class="flex items-end pb-1">
        <label class="flex cursor-pointer items-center gap-3">
          <input type="checkbox" [(ngModel)]="form.isActive" class="h-4 w-4 rounded accent-brand-500" />
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400">M\xE9todo activo (visible para clientes)</span>
        </label>
      </div>
    </div>

    <!-- Campos de la cuenta (datos bancarios / instrucciones) -->
    <div class="mt-5">
      <div class="mb-3 flex items-center justify-between">
        <label class="text-sm font-medium text-gray-600 dark:text-gray-400">Datos de la cuenta</label>
        <button (click)="addField()" type="button"
          class="rounded-lg border border-brand-200 px-3 py-1 text-xs font-medium text-brand-600 hover:bg-brand-50 dark:border-brand-800/30 dark:text-brand-400">
          + Agregar campo
        </button>
      </div>
      <div class="space-y-2">
        <div *ngFor="let f of form.fields; let i = index" class="flex gap-2">
          <input type="text" [(ngModel)]="f.label" placeholder="Etiqueta (ej: Banco)"
            class="h-9 flex-1 rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
          <input type="text" [(ngModel)]="f.value" placeholder="Valor (ej: Banco de Venezuela)"
            class="h-9 flex-[2] rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
          <button (click)="removeField(i)" type="button"
            class="h-9 w-9 flex-shrink-0 rounded-lg border border-red-200 text-xs text-red-500 hover:bg-red-50 dark:border-red-900/30">\u2715</button>
        </div>
        <p *ngIf="form.fields.length === 0" class="text-xs text-gray-400">
          Sin campos. Agrega los datos bancarios o instrucciones que ver\xE1 el cliente.
        </p>
      </div>
    </div>

    <!-- Error -->
    <p *ngIf="errorMsg" class="mt-3 text-sm text-red-600 dark:text-red-400">{{ errorMsg }}</p>

    <!-- Buttons -->
    <div class="mt-5 flex gap-3 justify-end">
      <button (click)="cancel()" type="button"
        class="rounded-lg border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
        Cancelar
      </button>
      <button (click)="save()" [disabled]="saving"
        class="rounded-lg bg-brand-500 px-6 py-2 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50">
        {{ saving ? 'Guardando...' : editingId ? 'Actualizar' : 'Crear m\xE9todo' }}
      </button>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetodosCobroComponent, { className: "MetodosCobroComponent", filePath: "src/app/pages/metodos-cobro/metodos-cobro.component.ts", lineNumber: 23 });
})();
export {
  MetodosCobroComponent
};
//# sourceMappingURL=chunk-MQ7BNKV2.js.map
