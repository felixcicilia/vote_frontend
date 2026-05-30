import {
  TicketsService
} from "./chunk-K4CVTLBT.js";
import {
  ViajesService
} from "./chunk-MASKJEQ2.js";
import {
  PagosService
} from "./chunk-OPFOKBHG.js";
import {
  UsuariosService
} from "./chunk-VKINGFC2.js";
import {
  ImageUploadComponent
} from "./chunk-MF5I77NK.js";
import "./chunk-PFOQZ4L6.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
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
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
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

// src/app/pages/checkout/checkout.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0, a1, a2) => ({ "border-brand-400 dark:border-brand-600": a0, "border-gray-200 dark:border-gray-800": a1, "opacity-40 pointer-events-none": a2 });
var _c2 = (a0, a1, a2) => ({ "bg-brand-500 text-white shadow-sm shadow-brand-200": a0, "bg-green-500 text-white": a1, "border-2 border-gray-200 text-gray-400 dark:border-gray-700": a2 });
var _c3 = (a0) => ["/tickets", a0];
function CheckoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Cargando informaci\xF3n del viaje...");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 9);
    \u0275\u0275text(4, "\u2190 Volver a buscar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function CheckoutComponent_ng_container_3_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function CheckoutComponent_ng_container_3_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 51);
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.step > s_r2 ? "bg-green-400" : "bg-gray-200 dark:bg-gray-700");
  }
}
function CheckoutComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47);
    \u0275\u0275template(3, CheckoutComponent_ng_container_3_ng_container_2_span_3_Template, 2, 0, "span", 3)(4, CheckoutComponent_ng_container_3_ng_container_2_span_4_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48)(6, "p", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, CheckoutComponent_ng_container_3_ng_container_2_div_8_Template, 1, 1, "div", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c2, ctx_r0.step === s_r2, ctx_r0.step > s_r2, ctx_r0.step < s_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step > s_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step <= s_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.step === s_r2 ? "text-gray-900 dark:text-white" : "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2 === 1 ? "Tu reserva" : s_r2 === 2 ? "Pagar" : "Confirmaci\xF3n", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 < 2);
  }
}
function CheckoutComponent_ng_container_3_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.imageUrl(ctx_r0.viaje.schedule.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r0.viaje.schedule.vessel.name);
  }
}
function CheckoutComponent_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, "\u{1F6A4}");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 55);
    \u0275\u0275text(2, "Total a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.totalUsd));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("$", \u0275\u0275pipeBind2(7, 4, ctx_r0.totalUsd, "1.2-2"), " USD \xB7 ", ctx_r0.of.seats.value || 1, " ", (ctx_r0.of.seats.value || 1) === 1 ? "pasajero" : "pasajeros");
  }
}
function CheckoutComponent_ng_container_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "a", 59);
    \u0275\u0275text(2, " \u2190 Cambiar viaje ");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_ng_container_3_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.errorMsg, " ");
  }
}
function CheckoutComponent_ng_container_3_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_button_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.step = 1;
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(1, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.of.seats.value, " ", (ctx_r0.of.seats.value || 1) === 1 ? "pasajero" : "pasajeros", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 3, ctx_r0.totalUsd, "1.2-2"));
  }
}
function CheckoutComponent_ng_container_3_ng_container_63_div_2_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", c_r6.firstName, " ", c_r6.lastName, " \u2014 ", c_r6.email);
  }
}
function CheckoutComponent_ng_container_3_ng_container_63_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Selecciona un cliente.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_63_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 78);
    \u0275\u0275text(2, " Pasajero principal ");
    \u0275\u0275elementStart(3, "span", 79);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 80)(6, "option", 81);
    \u0275\u0275text(7, "Selecciona un cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CheckoutComponent_ng_container_3_ng_container_63_div_2_option_8_Template, 2, 4, "option", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CheckoutComponent_ng_container_3_ng_container_63_div_2_p_9_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r0.of.clientId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.clientes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.of.clientId.touched && ctx_r0.of.clientId.invalid);
  }
}
function CheckoutComponent_ng_container_3_ng_container_63_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.firstName == null ? null : ctx_r0.currentUser.firstName.charAt(0), "", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.lastName == null ? null : ctx_r0.currentUser.lastName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.email);
  }
}
function CheckoutComponent_ng_container_3_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275template(2, CheckoutComponent_ng_container_3_ng_container_63_div_2_Template, 10, 4, "div", 3)(3, CheckoutComponent_ng_container_3_ng_container_63_div_3_Template, 8, 5, "div", 66);
    \u0275\u0275elementStart(4, "div")(5, "label", 67);
    \u0275\u0275text(6, " N\xFAmero de pasajeros ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68)(8, "div")(9, "p", 69);
    \u0275\u0275text(10, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 70)(14, "button", 71);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_63_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSeat());
    });
    \u0275\u0275text(15, " \u2212 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 72);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 71);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_63_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addSeat());
    });
    \u0275\u0275text(19, " + ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 73)(21, "div", 74)(22, "p", 63);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 75);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "p", 76);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 77);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_63_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmarOrden());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isCliente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCliente);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("M\xE1x. ", ctx_r0.viaje.availableSeats, " disponibles");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (ctx_r0.of.seats.value ?? 1) <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.of.seats.value ?? 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r0.of.seats.value ?? 1) >= ctx_r0.viaje.availableSeats);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.of.seats.value ?? 1, " \xD7 ", ctx_r0.tasaService.formatBs(ctx_r0.pricePerSeat), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.totalUsd));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("= $", \u0275\u0275pipeBind2(28, 13, ctx_r0.totalUsd, "1.2-2"), " USD \xB7 Tasa: Bs ", \u0275\u0275pipeBind2(29, 16, ctx_r0.tasaService.rate(), "1.2-2"), "/$");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.loadingAction);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loadingAction ? "Procesando..." : "Continuar al pago \u2192", " ");
  }
}
function CheckoutComponent_ng_container_3_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_button_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.step = 2;
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(1, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.pf.method.value, " \xB7 ", ctx_r0.pf.currency.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displayAmount);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_74_button_6_Template_button_click_0_listener() {
      const m_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pf.method.setValue(m_r10.value));
    });
    \u0275\u0275elementStart(1, "span", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.pf.method.value === m_r10.value ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-gray-200 hover:border-gray-300 dark:border-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r10.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.pf.method.value === m_r10.value ? "text-brand-700 dark:text-brand-300" : "text-gray-600 dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r10.label, " ");
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "span", 108);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.value);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "p", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105);
    \u0275\u0275template(4, CheckoutComponent_ng_container_3_ng_container_74_div_7_div_4_Template, 5, 2, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedPaymentInfo.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.selectedPaymentInfo.fields);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_8_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Ingresa el n\xFAmero de tarjeta.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_8_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Ingresa el nombre del titular.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_8_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Ingresa la fecha.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_8_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "Ingresa el CVV.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275element(2, "div", 112);
    \u0275\u0275elementStart(3, "p", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 114)(6, "div")(7, "p", 115);
    \u0275\u0275text(8, "Titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 117)(12, "p", 115);
    \u0275\u0275text(13, "Vence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 118);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 119);
    \u0275\u0275element(17, "div", 120)(18, "div", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 122);
    \u0275\u0275text(21, " N\xFAmero de tarjeta ");
    \u0275\u0275elementStart(22, "span", 79);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 123);
    \u0275\u0275listener("input", function CheckoutComponent_ng_container_3_ng_container_74_div_8_Template_input_input_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.formatCardNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, CheckoutComponent_ng_container_3_ng_container_74_div_8_p_25_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 122);
    \u0275\u0275text(28, " Nombre del titular ");
    \u0275\u0275elementStart(29, "span", 79);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 124);
    \u0275\u0275template(32, CheckoutComponent_ng_container_3_ng_container_74_div_8_p_32_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 125)(34, "div")(35, "label", 122);
    \u0275\u0275text(36, " Fecha de vencimiento ");
    \u0275\u0275elementStart(37, "span", 79);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 126);
    \u0275\u0275listener("input", function CheckoutComponent_ng_container_3_ng_container_74_div_8_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.formatExpiry($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, CheckoutComponent_ng_container_3_ng_container_74_div_8_p_40_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "label", 122);
    \u0275\u0275text(43, " CVV ");
    \u0275\u0275elementStart(44, "span", 79);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "input", 127);
    \u0275\u0275listener("input", function CheckoutComponent_ng_container_3_ng_container_74_div_8_Template_input_input_46_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.formatCvv($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, CheckoutComponent_ng_container_3_ng_container_74_div_8_p_47_Template, 2, 0, "p", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "p", 128)(49, "span");
    \u0275\u0275text(50, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Tus datos est\xE1n protegidos con cifrado SSL. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.pf.cardNumber.value || "").padEnd(19, "\xB7").replace(/(.{4})/g, "$1 ").trim() || "\xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pf.cardName.value || "NOMBRE APELLIDO", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pf.cardExpiry.value || "MM/AA");
    \u0275\u0275advance(9);
    \u0275\u0275property("formControl", ctx_r0.pf.cardNumber)("ngClass", ctx_r0.pf.cardNumber.touched && ctx_r0.pf.cardNumber.invalid ? "border-red-400 bg-red-50 dark:bg-red-500/10" : "border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.cardNumber.touched && ctx_r0.pf.cardNumber.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r0.pf.cardName)("ngClass", ctx_r0.pf.cardName.touched && ctx_r0.pf.cardName.invalid ? "border-red-400 bg-red-50 dark:bg-red-500/10" : "border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.cardName.touched && ctx_r0.pf.cardName.invalid);
    \u0275\u0275advance(7);
    \u0275\u0275property("formControl", ctx_r0.pf.cardExpiry)("ngClass", ctx_r0.pf.cardExpiry.touched && ctx_r0.pf.cardExpiry.invalid ? "border-red-400 bg-red-50 dark:bg-red-500/10" : "border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.cardExpiry.touched && ctx_r0.pf.cardExpiry.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", ctx_r0.pf.cardCvv)("ngClass", ctx_r0.pf.cardCvv.touched && ctx_r0.pf.cardCvv.invalid ? "border-red-400 bg-red-50 dark:bg-red-500/10" : "border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.cardCvv.touched && ctx_r0.pf.cardCvv.invalid);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 $", \u0275\u0275pipeBind2(2, 1, ctx_r0.totalUsd, "1.2-2"), " USD");
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 REF ", \u0275\u0275pipeBind2(2, 1, ctx_r0.tasaService.toBs(ctx_r0.totalUsd), "1.2-2"));
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 78);
    \u0275\u0275text(2, " N\xFAmero de referencia / confirmaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r0.pf.transactionRef);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-image-upload", 130);
    \u0275\u0275listener("uploaded", function CheckoutComponent_ng_container_3_ng_container_74_div_27_Template_app_image_upload_uploaded_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onProofUploaded($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("currentUrl", ctx_r0.pf.proofImageUrl.value);
  }
}
function CheckoutComponent_ng_container_3_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 65)(2, "div")(3, "label", 67);
    \u0275\u0275text(4, "Selecciona tu m\xE9todo de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275template(6, CheckoutComponent_ng_container_3_ng_container_74_button_6_Template, 5, 4, "button", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CheckoutComponent_ng_container_3_ng_container_74_div_7_Template, 5, 2, "div", 91)(8, CheckoutComponent_ng_container_3_ng_container_74_div_8_Template, 52, 15, "div", 92);
    \u0275\u0275elementStart(9, "div")(10, "label", 78);
    \u0275\u0275text(11, "Moneda de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 93)(13, "button", 94);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_74_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pf.currency.setValue("BS"));
    });
    \u0275\u0275text(14, " \u{1F1FB}\u{1F1EA} Bol\xEDvar (REF) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 94);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_74_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pf.currency.setValue("USD"));
    });
    \u0275\u0275text(16, " \u{1F1FA}\u{1F1F8} D\xF3lar (USD) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 95)(18, "p", 96);
    \u0275\u0275text(19, "Monto total a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 97);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 98);
    \u0275\u0275text(23);
    \u0275\u0275template(24, CheckoutComponent_ng_container_3_ng_container_74_span_24_Template, 3, 4, "span", 3)(25, CheckoutComponent_ng_container_3_ng_container_74_span_25_Template, 3, 4, "span", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, CheckoutComponent_ng_container_3_ng_container_74_div_26_Template, 4, 1, "div", 3)(27, CheckoutComponent_ng_container_3_ng_container_74_div_27_Template, 2, 1, "div", 3);
    \u0275\u0275elementStart(28, "div")(29, "label", 78);
    \u0275\u0275text(30, "Notas adicionales (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 77);
    \u0275\u0275listener("click", function CheckoutComponent_ng_container_3_ng_container_74_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.registrarPago());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.PAYMENT_METHODS);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedPaymentInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCard);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.pf.currency.value === "BS" ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.pf.currency.value === "USD" ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.displayAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.of.seats.value, " ", (ctx_r0.of.seats.value || 1) === 1 ? "pasajero" : "pasajeros", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.currency.value === "BS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pf.currency.value === "USD");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedPaymentInfo == null ? null : ctx_r0.selectedPaymentInfo.showRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedPaymentInfo == null ? null : ctx_r0.selectedPaymentInfo.showProof);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r0.pf.notes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loadingAction);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loadingAction ? "Registrando pago..." : "\u2713 Confirmar pago \u2192", " ");
  }
}
function CheckoutComponent_ng_container_3_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 131)(2, "div", 132)(3, "div", 133);
    \u0275\u0275text(4, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 56);
    \u0275\u0275text(6, "\xA1Reserva confirmada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 134);
    \u0275\u0275text(8, "Tu pago ha sido registrado y est\xE1 pendiente de verificaci\xF3n.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 135)(10, "div", 136)(11, "div", 137)(12, "div")(13, "p", 138);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3", 139);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 140);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 141);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 142);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 143)(25, "div", 144)(26, "p", 31);
    \u0275\u0275text(27, "\u{1F4C5} Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 145);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 144)(32, "p", 31);
    \u0275\u0275text(33, "\u{1F550} Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 145);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 144)(37, "p", 31);
    \u0275\u0275text(38, "\u{1F465} Puestos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 145);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 146)(42, "p", 147);
    \u0275\u0275text(43, "\u{1F511} C\xF3digo QR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 148);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 149)(47, "div")(48, "p", 150);
    \u0275\u0275text(49, "Total pagado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 151);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "p", 152);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 153)(56, "a", 154);
    \u0275\u0275text(57, " Ver mi ticket completo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "a", 155);
    \u0275\u0275text(59, " Mis reservas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 156);
    \u0275\u0275text(61, " Reservar otro ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("TICKET #", ctx_r0.createdTicket.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdTicket.trip == null ? null : ctx_r0.createdTicket.trip.schedule == null ? null : ctx_r0.createdTicket.trip.schedule.route == null ? null : ctx_r0.createdTicket.trip.schedule.route.originPier == null ? null : ctx_r0.createdTicket.trip.schedule.route.originPier.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdTicket.trip == null ? null : ctx_r0.createdTicket.trip.schedule == null ? null : ctx_r0.createdTicket.trip.schedule.route == null ? null : ctx_r0.createdTicket.trip.schedule.route.destinationPier == null ? null : ctx_r0.createdTicket.trip.schedule.route.destinationPier.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.createdTicket.trip == null ? null : ctx_r0.createdTicket.trip.schedule == null ? null : ctx_r0.createdTicket.trip.schedule.vessel == null ? null : ctx_r0.createdTicket.trip.schedule.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(ctx_r0.createdTicket.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 13, ctx_r0.createdTicket.trip == null ? null : ctx_r0.createdTicket.trip.departureDate, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.createdTicket.trip == null ? null : ctx_r0.createdTicket.trip.departureTime);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.createdTicket.seats);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.createdTicket.qrCode);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.createdPago == null ? null : ctx_r0.createdPago.method, " \xB7 ", ctx_r0.createdPago == null ? null : ctx_r0.createdPago.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createdPago ? ctx_r0.pagoDisplay(ctx_r0.createdPago) : "$" + \u0275\u0275pipeBind2(54, 16, ctx_r0.createdTicket.totalPrice, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c3, ctx_r0.createdTicket.id));
  }
}
function CheckoutComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275template(2, CheckoutComponent_ng_container_3_ng_container_2_Template, 9, 10, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15);
    \u0275\u0275template(7, CheckoutComponent_ng_container_3_img_7_Template, 1, 2, "img", 16)(8, CheckoutComponent_ng_container_3_div_8_Template, 2, 0, "div", 17);
    \u0275\u0275element(9, "div", 18);
    \u0275\u0275elementStart(10, "div", 19)(11, "p", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 22)(16, "div", 23)(17, "div", 24);
    \u0275\u0275element(18, "div", 25)(19, "div", 26)(20, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28)(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 30)(27, "div")(28, "p", 31);
    \u0275\u0275text(29, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 32);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "p", 31);
    \u0275\u0275text(35, "Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 32);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "p", 31);
    \u0275\u0275text(40, "Disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 33);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "p", 31);
    \u0275\u0275text(45, "Precio/puesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 34);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, CheckoutComponent_ng_container_3_div_49_Template, 8, 7, "div", 35)(50, CheckoutComponent_ng_container_3_div_50_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 37);
    \u0275\u0275template(52, CheckoutComponent_ng_container_3_div_52_Template, 2, 1, "div", 38);
    \u0275\u0275elementStart(53, "div", 39)(54, "div", 40)(55, "div", 41)(56, "div", 42);
    \u0275\u0275template(57, CheckoutComponent_ng_container_3_span_57_Template, 2, 0, "span", 3)(58, CheckoutComponent_ng_container_3_span_58_Template, 2, 0, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "h2", 43);
    \u0275\u0275text(60, "Tu reserva");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, CheckoutComponent_ng_container_3_button_61_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, CheckoutComponent_ng_container_3_div_62_Template, 6, 6, "div", 45)(63, CheckoutComponent_ng_container_3_ng_container_63_Template, 32, 19, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 39)(65, "div", 40)(66, "div", 41)(67, "div", 42);
    \u0275\u0275template(68, CheckoutComponent_ng_container_3_span_68_Template, 2, 0, "span", 3)(69, CheckoutComponent_ng_container_3_span_69_Template, 2, 0, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h2", 43);
    \u0275\u0275text(71, "M\xE9todo de pago");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, CheckoutComponent_ng_container_3_button_72_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, CheckoutComponent_ng_container_3_div_73_Template, 5, 3, "div", 45)(74, CheckoutComponent_ng_container_3_ng_container_74_Template, 34, 15, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, CheckoutComponent_ng_container_3_ng_container_75_Template, 62, 21, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.vessel == null ? null : ctx_r0.viaje.schedule.vessel.photos == null ? null : ctx_r0.viaje.schedule.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.vessel == null ? null : ctx_r0.viaje.schedule.vessel.photos == null ? null : ctx_r0.viaje.schedule.vessel.photos[0]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.vessel == null ? null : ctx_r0.viaje.schedule.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.vessel == null ? null : ctx_r0.viaje.schedule.vessel.type);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.route == null ? null : ctx_r0.viaje.schedule.route.originPier == null ? null : ctx_r0.viaje.schedule.route.originPier.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.viaje.schedule == null ? null : ctx_r0.viaje.schedule.route == null ? null : ctx_r0.viaje.schedule.route.destinationPier == null ? null : ctx_r0.viaje.schedule.route.destinationPier.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 30, ctx_r0.viaje.departureDate, "dd MMM"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.viaje.departureTime);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.viaje.availableSeats > 5 ? "text-green-600" : "text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.viaje.availableSeats, " puestos ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(48, 33, ctx_r0.pricePerSeat, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.step < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step < 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorMsg && ctx_r0.step < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.step === 1 ? "border-brand-400 dark:border-brand-600" : "border-gray-200 dark:border-gray-800");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.step > 1 ? "bg-green-500 text-white" : "bg-brand-500 text-white");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.step > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(37, _c1, ctx_r0.step === 2, ctx_r0.step !== 2, ctx_r0.step < 2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.step > 2 ? "bg-green-500 text-white" : ctx_r0.step === 2 ? "bg-brand-500 text-white" : "border-2 border-gray-200 text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step <= 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.step > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.step === 3 && ctx_r0.createdTicket);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  viajesService = inject(ViajesService);
  ticketsService = inject(TicketsService);
  pagosService = inject(PagosService);
  usuariosService = inject(UsuariosService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  get isCliente() {
    return this.authService.role() === "CLIENTE";
  }
  get currentUser() {
    return this.authService.user();
  }
  step = 1;
  loadingData = true;
  loadingAction = false;
  errorMsg = "";
  viajeId = 0;
  viaje = null;
  clientes = [];
  createdTicket = null;
  createdPago = null;
  // ── Métodos de pago disponibles ─────────────────────────────────────────
  PAYMENT_METHODS = [
    { value: "PAGO_MOVIL", icon: "\u{1F4F1}", label: "Pago M\xF3vil" },
    { value: "TRANSFERENCIA", icon: "\u{1F3E6}", label: "Transferencia" },
    { value: "EFECTIVO", icon: "\u{1F4B5}", label: "Efectivo" },
    { value: "ZELLE", icon: "\u{1F49A}", label: "Zelle" },
    { value: "CARD", icon: "\u{1F4B3}", label: "Tarjeta" }
  ];
  // ── Datos de pago por método ─────────────────────────────────────────────
  // Actualiza estos campos con la información real de tu empresa
  PAYMENT_INFO = {
    PAGO_MOVIL: {
      title: "Realiza tu Pago M\xF3vil a:",
      showRef: true,
      showProof: true,
      fields: [
        { key: "Banco", value: "Banco de Venezuela (0102)" },
        { key: "Tel\xE9fono", value: "0414-0000000" },
        { key: "CI/RIF", value: "V-00.000.000" },
        { key: "Nombre", value: "Nombre Empresa C.A." }
      ]
    },
    TRANSFERENCIA: {
      title: "Realiza la transferencia a:",
      showRef: true,
      showProof: true,
      fields: [
        { key: "Banco", value: "Banco de Venezuela (0102)" },
        { key: "Cuenta", value: "0102-0000-00-0000000000" },
        { key: "RIF", value: "J-00000000-0" },
        { key: "Nombre", value: "Nombre Empresa C.A." }
      ]
    },
    EFECTIVO: {
      title: "Instrucciones para pago en efectivo:",
      showRef: false,
      showProof: false,
      fields: [
        { key: "Lugar", value: "Taquilla principal del muelle" },
        { key: "Horario", value: "Lun\u2013Vie 8:00 am \u2013 5:00 pm" },
        { key: "Nota", value: "Presentar este comprobante al llegar." }
      ]
    },
    ZELLE: {
      title: "Env\xEDa el pago por Zelle a:",
      showRef: true,
      showProof: true,
      fields: [
        { key: "Email", value: "pagos@empresa.com" },
        { key: "Nombre", value: "Nombre Empresa" }
      ]
    },
    CARD: {
      title: "Pago con Tarjeta de Cr\xE9dito / D\xE9bito",
      showRef: true,
      showProof: false,
      fields: [
        { key: "Aceptamos", value: "Visa, Mastercard, American Express" },
        { key: "Nota", value: "El cobro se procesar\xE1 al confirmar la reserva." }
      ]
    }
  };
  // ── Step 1 form ──────────────────────────────────────────────────────────
  orderForm = this.fb.group({
    clientId: [null, Validators.required],
    seats: [1, [Validators.required, Validators.min(1)]]
  });
  // ── Step 2 form ──────────────────────────────────────────────────────────
  payForm = this.fb.group({
    method: ["PAGO_MOVIL", Validators.required],
    currency: ["BS", Validators.required],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    transactionRef: [""],
    proofImageUrl: [""],
    notes: [""],
    // Campos de tarjeta (solo requeridos cuando method === 'CARD')
    cardNumber: [""],
    cardName: [""],
    cardExpiry: [""],
    cardCvv: [""]
  });
  get isCard() {
    return this.pf.method.value === "CARD";
  }
  get of() {
    return this.orderForm.controls;
  }
  get pf() {
    return this.payForm.controls;
  }
  get pricePerSeat() {
    return Number(this.viaje?.schedule?.route?.pricePerSeat ?? 0);
  }
  get totalUsd() {
    return this.pricePerSeat * Number(this.of.seats.value ?? 1);
  }
  get totalBs() {
    return this.tasaService.rate() > 0 ? this.totalUsd * this.tasaService.rate() : this.totalUsd;
  }
  /** Monto calculado para mostrar según moneda seleccionada */
  get displayAmount() {
    const currency = this.pf.currency.value;
    if (currency === "BS") {
      const bs = this.totalBs;
      return `REF ${bs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${this.totalUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  /** Info del método seleccionado */
  get selectedPaymentInfo() {
    return this.PAYMENT_INFO[this.pf.method.value ?? ""] ?? null;
  }
  /** Formato del monto del pago registrado para confirmación */
  pagoDisplay(pago) {
    if (pago.currency === "BS" || pago.currency === "VES") {
      return `REF ${Number(pago.amount).toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${Number(pago.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  ngOnInit() {
    this.tasaService.load();
    this.viajeId = Number(this.route.snapshot.queryParamMap.get("viajeId"));
    if (!this.viajeId) {
      this.errorMsg = "No se especific\xF3 un viaje v\xE1lido.";
      this.loadingData = false;
      return;
    }
    this.pf.currency.valueChanges.subscribe(() => this.syncAmount());
    this.pf.method.valueChanges.subscribe((method) => this.updateCardValidators(method));
    let pending = 2;
    const done = () => {
      if (--pending === 0)
        this.loadingData = false;
    };
    this.viajesService.getById(this.viajeId).subscribe({
      next: (v) => {
        this.viaje = v;
        this.syncAmount();
        done();
      },
      error: () => {
        this.errorMsg = "No se pudo cargar el viaje.";
        done();
      }
    });
    if (this.isCliente && this.currentUser) {
      this.orderForm.patchValue({ clientId: this.currentUser.id });
      this.clientes = [{
        id: this.currentUser.id,
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email
      }];
      done();
    } else {
      this.usuariosService.obtenerUsuarios("CLIENTE").subscribe({
        next: (u) => {
          this.clientes = u;
          done();
        },
        error: () => done()
      });
    }
  }
  updateCardValidators(method) {
    const cardFields = [this.pf.cardNumber, this.pf.cardName, this.pf.cardExpiry, this.pf.cardCvv];
    if (method === "CARD") {
      cardFields.forEach((c) => c.setValidators(Validators.required));
    } else {
      cardFields.forEach((c) => c.clearValidators());
    }
    cardFields.forEach((c) => c.updateValueAndValidity({ emitEvent: false }));
  }
  /** Formatea el número de tarjeta con espacios cada 4 dígitos */
  formatCardNumber(event) {
    const input = event.target;
    const digits = input.value.replace(/\D/g, "").substring(0, 16);
    const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
    this.pf.cardNumber.setValue(formatted, { emitEvent: false });
    input.value = formatted;
  }
  /** Formatea la fecha de expiración MM/AA */
  formatExpiry(event) {
    const input = event.target;
    const digits = input.value.replace(/\D/g, "").substring(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    this.pf.cardExpiry.setValue(formatted, { emitEvent: false });
    input.value = formatted;
  }
  /** Solo números para CVV */
  formatCvv(event) {
    const input = event.target;
    const digits = input.value.replace(/\D/g, "").substring(0, 4);
    this.pf.cardCvv.setValue(digits, { emitEvent: false });
    input.value = digits;
  }
  syncAmount() {
    const currency = this.pf.currency.value;
    const value = currency === "BS" ? this.totalBs : this.totalUsd;
    this.payForm.patchValue({ amount: value }, { emitEvent: false });
  }
  confirmarOrden() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    const seats = Number(this.of.seats.value);
    if (this.viaje && seats > this.viaje.availableSeats) {
      this.errorMsg = `Solo hay ${this.viaje.availableSeats} asientos disponibles.`;
      return;
    }
    this.errorMsg = "";
    this.loadingAction = true;
    this.ticketsService.create({
      tripId: this.viajeId,
      clientId: Number(this.of.clientId.value),
      seats
    }).subscribe({
      next: (ticket) => {
        this.createdTicket = ticket;
        this.loadingAction = false;
        this.syncAmount();
        this.step = 2;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al crear el ticket.";
        this.loadingAction = false;
      }
    });
  }
  registrarPago() {
    if (this.payForm.invalid) {
      this.payForm.markAllAsTouched();
      return;
    }
    if (!this.createdTicket)
      return;
    this.errorMsg = "";
    this.loadingAction = true;
    let transactionRef = this.pf.transactionRef.value?.trim() || void 0;
    let notes = this.pf.notes.value?.trim() || void 0;
    if (this.isCard) {
      const digits = this.pf.cardNumber.value?.replace(/\s/g, "") ?? "";
      transactionRef = digits.slice(-4) || void 0;
      const cardSummary = `Tarjeta: **** **** **** ${digits.slice(-4)} | Titular: ${this.pf.cardName.value} | Vence: ${this.pf.cardExpiry.value}`;
      notes = notes ? `${cardSummary} | ${notes}` : cardSummary;
    }
    this.pagosService.create({
      clientId: Number(this.of.clientId.value),
      amount: Number(this.pf.amount.value),
      currency: this.pf.currency.value,
      method: this.pf.method.value,
      referenceType: "TICKET",
      referenceId: this.createdTicket.id,
      transactionRef,
      proofImageUrl: this.pf.proofImageUrl.value?.trim() || void 0,
      notes
    }).subscribe({
      next: (pago) => {
        this.createdPago = pago;
        this.loadingAction = false;
        this.step = 3;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al registrar el pago.";
        this.loadingAction = false;
      }
    });
  }
  addSeat() {
    const cur = Number(this.of.seats.value ?? 1);
    const max = this.viaje?.availableSeats ?? 1;
    if (cur < max) {
      this.orderForm.patchValue({ seats: cur + 1 });
      this.syncAmount();
    }
  }
  removeSeat() {
    const cur = Number(this.of.seats.value ?? 1);
    if (cur > 1) {
      this.orderForm.patchValue({ seats: cur - 1 });
      this.syncAmount();
    }
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  onProofUploaded(url) {
    this.payForm.patchValue({ proofImageUrl: url });
  }
  get rangoInicio() {
    return 0;
  }
  statusLabel(s) {
    const map = {
      PENDING: "Pendiente",
      CONFIRMED: "Confirmado",
      USED: "Usado",
      CANCELLED: "Cancelado",
      VERIFIED: "Verificado",
      REJECTED: "Rechazado"
    };
    return map[s] ?? s;
  }
  seatColor(available, total) {
    const pct = available / total;
    if (pct > 0.5)
      return "text-green-600 dark:text-green-400";
    if (pct > 0.2)
      return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 4, vars: 3, consts: [[1, "mx-auto", "max-w-5xl", "space-y-6", "pb-12"], ["class", "flex flex-col items-center justify-center py-24 gap-4", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-500/10", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-8", "text-center", "dark:border-red-900/30", "dark:bg-red-500/10"], [1, "text-red-600", "dark:text-red-400"], ["routerLink", "/buscar", 1, "mt-3", "inline-block", "text-sm", "font-semibold", "text-brand-500", "hover:underline"], [1, "flex", "items-center", "rounded-2xl", "border", "border-gray-200", "bg-white", "px-6", "py-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-start"], [1, "w-full", "flex-shrink-0", "lg:sticky", "lg:top-6", "lg:w-80"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "relative", "h-44", "overflow-hidden", "bg-gradient-to-br", "from-blue-50", "to-slate-100", "dark:from-slate-800", "dark:to-slate-900"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-7xl opacity-20", 4, "ngIf"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/50", "to-transparent"], [1, "absolute", "bottom-3", "left-4"], [1, "text-lg", "font-bold", "text-white"], [1, "text-xs", "text-white/70"], [1, "p-4", "space-y-3"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "flex", "flex-col", "items-center", "gap-1"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-brand-500"], [1, "h-6", "w-px", "bg-gray-200"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-green-500"], [1, "flex", "flex-col", "gap-1.5"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-2", "gap-2", "rounded-xl", "bg-gray-50", "p-3", "dark:bg-white/[0.03]"], [1, "text-xs", "text-gray-400"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "font-bold", 3, "ngClass"], [1, "text-sm", "font-bold", "text-brand-600"], ["class", "rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 p-4 text-center", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "flex-1", "min-w-0", "space-y-4"], ["class", "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "overflow-hidden", "rounded-2xl", "border", "bg-white", "shadow-sm", "dark:bg-white/[0.03]", "transition-all", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], [1, "font-bold", "text-gray-800", "dark:text-white/90"], ["type", "button", "class", "rounded-lg border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500 hover:border-brand-300 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-between px-5 py-3", 4, "ngIf"], [1, "flex", "flex-1", "items-center", "gap-2.5", "min-w-0"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", "transition-all", 3, "ngClass"], [1, "min-w-0", "hidden", "sm:block"], [1, "text-sm", "font-semibold", "truncate", 3, "ngClass"], ["class", "mx-3 h-px w-10 flex-shrink-0", 3, "ngClass", 4, "ngIf"], [1, "mx-3", "h-px", "w-10", "flex-shrink-0", 3, "ngClass"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-7xl", "opacity-20"], [1, "rounded-xl", "bg-gradient-to-r", "from-brand-500", "to-brand-600", "p-4", "text-center"], [1, "text-xs", "font-medium", "text-brand-100"], [1, "text-2xl", "font-extrabold", "text-white"], [1, "text-xs", "text-brand-100", "mt-0.5"], [1, "text-center"], ["routerLink", "/buscar", 1, "text-xs", "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], ["type", "button", 1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1", "text-xs", "font-semibold", "text-gray-500", "hover:border-brand-300", "hover:text-brand-500", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "flex", "items-center", "justify-between", "px-5", "py-3"], [1, "text-sm", "text-gray-600", "dark:text-gray-300"], [1, "font-bold", "text-gray-800", "dark:text-white"], [1, "p-5", "space-y-5"], ["class", "flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 dark:border-brand-500/20 dark:bg-brand-500/10", 4, "ngIf"], [1, "mb-3", "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "p-4", "dark:border-gray-700", "dark:bg-slate-800"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-white"], [1, "flex", "items-center", "gap-4"], ["type", "button", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border", "border-gray-300", "text-lg", "font-bold", "text-gray-600", "hover:border-brand-400", "hover:text-brand-600", "disabled:opacity-30", "transition", "dark:border-gray-600", "dark:text-gray-300", 3, "click", "disabled"], [1, "w-8", "text-center", "text-2xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "rounded-xl", "bg-brand-50", "px-5", "py-4", "dark:bg-brand-500/10"], [1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-extrabold", "text-brand-700", "dark:text-brand-300"], [1, "text-xs", "text-gray-400", "mt-1"], ["type", "button", 1, "w-full", "rounded-xl", "bg-brand-500", "py-3.5", "text-sm", "font-bold", "text-white", "shadow-sm", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [1, "mb-2", "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], [1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "transition", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "formControl"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], [1, "mt-1", "text-xs", "text-red-500"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-brand-100", "bg-brand-50", "px-4", "py-3", "dark:border-brand-500/20", "dark:bg-brand-500/10"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-brand-500", "text-sm", "font-bold", "text-white"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "grid", "grid-cols-3", "gap-3", "sm:grid-cols-5"], ["type", "button", "class", "flex flex-col items-center gap-2 rounded-xl border-2 p-3 text-center transition-all", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/30 dark:bg-blue-500/10", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "rounded-xl", "border-2", "px-4", "py-3", "text-sm", "font-semibold", "transition-all", 3, "click", "ngClass"], [1, "rounded-2xl", "border-2", "border-brand-200", "bg-gradient-to-r", "from-brand-500", "to-brand-600", "p-5", "text-center", "shadow-sm", "dark:border-brand-500/40"], [1, "text-xs", "font-medium", "text-brand-100", "mb-1"], [1, "text-4xl", "font-extrabold", "text-white", "tracking-tight"], [1, "text-xs", "text-brand-100", "mt-1.5"], ["rows", "2", "placeholder", "Informaci\xF3n adicional...", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "py-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "transition", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "formControl"], ["type", "button", 1, "flex", "flex-col", "items-center", "gap-2", "rounded-xl", "border-2", "p-3", "text-center", "transition-all", 3, "click", "ngClass"], [1, "text-2xl"], [1, "text-xs", "font-semibold", "leading-tight", 3, "ngClass"], [1, "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-4", "dark:border-blue-500/30", "dark:bg-blue-500/10"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wide", "text-blue-700", "dark:text-blue-300"], [1, "space-y-2"], ["class", "flex items-start justify-between gap-3", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "text-xs", "text-blue-600/70", "dark:text-blue-400/70", "min-w-0", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-blue-800", "dark:text-blue-200", "text-right", "break-all"], [1, "space-y-4"], [1, "relative", "h-48", "w-full", "max-w-sm", "mx-auto", "rounded-2xl", "bg-gradient-to-br", "from-slate-700", "to-slate-900", "p-5", "shadow-xl", "text-white", "select-none", "overflow-hidden"], [1, "mb-4", "h-8", "w-12", "rounded-md", "bg-yellow-400/80"], [1, "font-mono", "text-lg", "tracking-widest", "text-white/90"], [1, "mt-3", "flex", "items-end", "justify-between"], [1, "text-[10px]", "text-white/50", "uppercase", "tracking-wider"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white/90", "uppercase"], [1, "text-right"], [1, "text-sm", "font-semibold", "font-mono", "text-white/90"], [1, "absolute", "top-4", "right-4", "flex", "gap-1", "opacity-80"], [1, "h-8", "w-8", "rounded-full", "bg-red-500/70"], [1, "h-8", "w-8", "rounded-full", "bg-yellow-500/70", "-ml-3"], [1, "mb-1.5", "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "text", "placeholder", "1234 5678 9012 3456", "maxlength", "19", 1, "h-11", "w-full", "rounded-xl", "border", "px-4", "font-mono", "text-sm", "text-gray-800", "outline-none", "transition", "dark:text-white", 3, "input", "formControl", "ngClass"], ["type", "text", "placeholder", "NOMBRE APELLIDO", 1, "h-11", "w-full", "rounded-xl", "border", "px-4", "text-sm", "uppercase", "tracking-wide", "text-gray-800", "outline-none", "transition", "dark:text-white", 3, "formControl", "ngClass"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", "placeholder", "MM/AA", "maxlength", "5", 1, "h-11", "w-full", "rounded-xl", "border", "px-4", "font-mono", "text-sm", "text-gray-800", "outline-none", "transition", "dark:text-white", 3, "input", "formControl", "ngClass"], ["type", "password", "placeholder", "\xB7\xB7\xB7", "maxlength", "4", 1, "h-11", "w-full", "rounded-xl", "border", "px-4", "font-mono", "text-sm", "text-gray-800", "outline-none", "transition", "dark:text-white", 3, "input", "formControl", "ngClass"], [1, "flex", "items-center", "gap-1.5", "text-xs", "text-gray-400"], ["type", "text", "placeholder", "Ej: 123456789", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "transition", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "formControl"], ["label", "Foto del comprobante de pago", 3, "uploaded", "currentUrl"], [1, "overflow-hidden", "rounded-2xl", "border-2", "border-green-400", "bg-white", "shadow-lg", "dark:bg-white/[0.03]"], [1, "bg-gradient-to-r", "from-green-500", "to-emerald-500", "p-6", "text-center"], [1, "text-5xl", "mb-2"], [1, "mt-1", "text-green-100", "text-sm"], [1, "p-6", "space-y-5"], [1, "rounded-2xl", "border", "border-green-100", "bg-green-50", "p-5", "dark:border-green-500/20", "dark:bg-green-500/5"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "text-xs", "text-gray-400", "font-mono"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white", "mt-1"], [1, "text-gray-400", "mx-1"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "rounded-full", "bg-yellow-100", "px-3", "py-1", "text-xs", "font-bold", "text-yellow-700", "dark:bg-yellow-500/10", "dark:text-yellow-400"], [1, "grid", "grid-cols-2", "gap-3", "text-sm", "sm:grid-cols-3"], [1, "rounded-xl", "bg-white", "p-3", "shadow-sm", "dark:bg-white/[0.05]"], [1, "font-bold", "text-gray-800", "dark:text-white", "mt-0.5"], [1, "rounded-xl", "bg-white", "p-3", "shadow-sm", "col-span-2", "sm:col-span-3", "dark:bg-white/[0.05]"], [1, "text-xs", "text-gray-400", "mb-1"], [1, "font-mono", "text-xs", "text-gray-700", "dark:text-gray-300", "break-all"], [1, "mt-4", "flex", "items-center", "justify-between", "rounded-xl", "bg-white", "p-4", "shadow-sm", "dark:bg-white/[0.05]"], [1, "text-sm", "text-gray-500"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "text-2xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "flex", "flex-col", "gap-3", "sm:flex-row"], [1, "flex-1", "rounded-xl", "border-2", "border-brand-500", "py-3", "text-center", "text-sm", "font-bold", "text-brand-600", "hover:bg-brand-50", "transition-colors", "dark:text-brand-400", "dark:hover:bg-brand-500/10", 3, "routerLink"], ["routerLink", "/mis-reservas", 1, "flex-1", "rounded-xl", "bg-brand-500", "py-3", "text-center", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "shadow-sm", "transition-colors"], ["routerLink", "/buscar", 1, "flex-1", "rounded-xl", "border", "border-gray-200", "py-3", "text-center", "text-sm", "font-semibold", "text-gray-600", "hover:border-gray-300", "transition-colors", "dark:border-gray-700", "dark:text-gray-400"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CheckoutComponent_div_1_Template, 5, 0, "div", 1)(2, CheckoutComponent_div_2_Template, 5, 1, "div", 2)(3, CheckoutComponent_ng_container_3_Template, 76, 41, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && !ctx.viaje && ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && ctx.viaje);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, FormControlDirective, RouterModule, RouterLink, ImageUploadComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="mx-auto max-w-5xl space-y-6 pb-12">

  <!-- Loading -->
  <div *ngIf="loadingData" class="flex flex-col items-center justify-center py-24 gap-4">
    <div class="text-5xl animate-bounce">\u2693</div>
    <p class="text-gray-500 dark:text-gray-400">Cargando informaci\xF3n del viaje...</p>
  </div>

  <!-- Error sin viaje -->
  <div *ngIf="!loadingData && !viaje && errorMsg"
    class="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-500/10">
    <p class="text-red-600 dark:text-red-400">{{ errorMsg }}</p>
    <a routerLink="/buscar" class="mt-3 inline-block text-sm font-semibold text-brand-500 hover:underline">\u2190 Volver a buscar</a>
  </div>

  <ng-container *ngIf="!loadingData && viaje">

    <!-- Stepper -->
    <div class="flex items-center rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <ng-container *ngFor="let s of [1,2,3]; let i = index">
        <div class="flex flex-1 items-center gap-2.5 min-w-0">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all"
            [ngClass]="{
              'bg-brand-500 text-white shadow-sm shadow-brand-200': step === s,
              'bg-green-500 text-white': step > s,
              'border-2 border-gray-200 text-gray-400 dark:border-gray-700': step < s
            }">
            <span *ngIf="step > s">\u2713</span>
            <span *ngIf="step <= s">{{ s }}</span>
          </div>
          <div class="min-w-0 hidden sm:block">
            <p class="text-sm font-semibold truncate" [ngClass]="step === s ? 'text-gray-900 dark:text-white' : 'text-gray-400'">
              {{ s === 1 ? 'Tu reserva' : s === 2 ? 'Pagar' : 'Confirmaci\xF3n' }}
            </p>
          </div>
        </div>
        <div *ngIf="i < 2" class="mx-3 h-px w-10 flex-shrink-0"
          [ngClass]="step > s ? 'bg-green-400' : 'bg-gray-200 dark:bg-gray-700'"></div>
      </ng-container>
    </div>

    <div class="flex flex-col gap-6 lg:flex-row lg:items-start">

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 IZQUIERDA: Trip summary \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="w-full flex-shrink-0 lg:sticky lg:top-6 lg:w-80">
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <!-- Vessel photo -->
          <div class="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
            <img *ngIf="viaje.schedule?.vessel?.photos?.[0]"
              [src]="imageUrl(viaje.schedule.vessel.photos![0])"
              [alt]="viaje.schedule.vessel.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!viaje.schedule?.vessel?.photos?.[0]"
              class="flex h-full items-center justify-center text-7xl opacity-20">\u{1F6A4}</div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-3 left-4">
              <p class="text-lg font-bold text-white">{{ viaje.schedule?.vessel?.name }}</p>
              <p class="text-xs text-white/70">{{ viaje.schedule?.vessel?.type }}</p>
            </div>
          </div>

          <div class="p-4 space-y-3">
            <!-- Ruta -->
            <div class="flex items-center gap-2 text-sm">
              <div class="flex flex-col items-center gap-1">
                <div class="h-2.5 w-2.5 rounded-full bg-brand-500"></div>
                <div class="h-6 w-px bg-gray-200"></div>
                <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              </div>
              <div class="flex flex-col gap-1.5">
                <span class="font-semibold text-gray-800 dark:text-white/90">{{ viaje.schedule?.route?.originPier?.name }}</span>
                <span class="font-semibold text-gray-800 dark:text-white/90">{{ viaje.schedule?.route?.destinationPier?.name }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 rounded-xl bg-gray-50 p-3 dark:bg-white/[0.03]">
              <div>
                <p class="text-xs text-gray-400">Fecha</p>
                <p class="text-sm font-bold text-gray-800 dark:text-white/90">{{ viaje.departureDate | date:'dd MMM' }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-400">Salida</p>
                <p class="text-sm font-bold text-gray-800 dark:text-white/90">{{ viaje.departureTime }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-400">Disponibles</p>
                <p class="text-sm font-bold" [ngClass]="viaje.availableSeats > 5 ? 'text-green-600' : 'text-red-500'">
                  {{ viaje.availableSeats }} puestos
                </p>
              </div>
              <div>
                <p class="text-xs text-gray-400">Precio/puesto</p>
                <p class="text-sm font-bold text-brand-600">\${{ pricePerSeat | number:'1.2-2' }}</p>
              </div>
            </div>

            <!-- Total din\xE1mico -->
            <div *ngIf="step < 3" class="rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 p-4 text-center">
              <p class="text-xs font-medium text-brand-100">Total a pagar</p>
              <p class="text-2xl font-extrabold text-white">{{ tasaService.formatBs(totalUsd) }}</p>
              <p class="text-xs text-brand-100 mt-0.5">\${{ totalUsd | number:'1.2-2' }} USD \xB7 {{ of.seats.value || 1 }} {{ (of.seats.value || 1) === 1 ? 'pasajero' : 'pasajeros' }}</p>
            </div>

            <div *ngIf="step < 3" class="text-center">
              <a routerLink="/buscar" class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                \u2190 Cambiar viaje
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 DERECHA: Pasos del checkout \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div class="flex-1 min-w-0 space-y-4">

        <!-- Error -->
        <div *ngIf="errorMsg && step < 3"
          class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
          \u26A0\uFE0F {{ errorMsg }}
        </div>

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 PASO 1: Tu reserva \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="overflow-hidden rounded-2xl border bg-white shadow-sm dark:bg-white/[0.03] transition-all"
          [ngClass]="step === 1 ? 'border-brand-400 dark:border-brand-600' : 'border-gray-200 dark:border-gray-800'">

          <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
            <div class="flex items-center gap-3">
              <div class="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                [ngClass]="step > 1 ? 'bg-green-500 text-white' : 'bg-brand-500 text-white'">
                <span *ngIf="step > 1">\u2713</span><span *ngIf="step <= 1">1</span>
              </div>
              <h2 class="font-bold text-gray-800 dark:text-white/90">Tu reserva</h2>
            </div>
            <button *ngIf="step > 1" type="button" (click)="step = 1; errorMsg = ''"
              class="rounded-lg border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500 hover:border-brand-300 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400">
              Editar
            </button>
          </div>

          <!-- Resumen colapsado -->
          <div *ngIf="step > 1" class="flex items-center justify-between px-5 py-3">
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ of.seats.value }} {{ (of.seats.value || 1) === 1 ? 'pasajero' : 'pasajeros' }}
            </p>
            <p class="font-bold text-gray-800 dark:text-white">\${{ totalUsd | number:'1.2-2' }}</p>
          </div>

          <!-- Form paso 1 -->
          <ng-container *ngIf="step === 1">
            <div class="p-5 space-y-5">

              <!-- Cliente (admin/empleado) -->
              <div *ngIf="!isCliente">
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Pasajero principal <span class="text-red-500">*</span>
                </label>
                <select [formControl]="of.clientId"
                  class="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none focus:border-brand-400 focus:bg-white transition dark:border-gray-700 dark:bg-slate-800 dark:text-white">
                  <option [ngValue]="null">Selecciona un cliente</option>
                  <option *ngFor="let c of clientes" [ngValue]="c.id">{{ c.firstName }} {{ c.lastName }} \u2014 {{ c.email }}</option>
                </select>
                <p *ngIf="of.clientId.touched && of.clientId.invalid" class="mt-1 text-xs text-red-500">Selecciona un cliente.</p>
              </div>

              <!-- Cliente (si es cliente, mostrar su nombre) -->
              <div *ngIf="isCliente" class="flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 dark:border-brand-500/20 dark:bg-brand-500/10">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {{ currentUser?.firstName?.charAt(0) }}{{ currentUser?.lastName?.charAt(0) }}
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-800 dark:text-white">{{ currentUser?.firstName }} {{ currentUser?.lastName }}</p>
                  <p class="text-xs text-gray-500">{{ currentUser?.email }}</p>
                </div>
              </div>

              <!-- Selector de pasajeros con +/- -->
              <div>
                <label class="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  N\xFAmero de pasajeros
                </label>
                <div class="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-slate-800">
                  <div>
                    <p class="text-sm font-semibold text-gray-700 dark:text-white">Pasajeros</p>
                    <p class="text-xs text-gray-400">M\xE1x. {{ viaje.availableSeats }} disponibles</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <button type="button" (click)="removeSeat()"
                      class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-bold text-gray-600 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 transition dark:border-gray-600 dark:text-gray-300"
                      [disabled]="(of.seats.value ?? 1) <= 1">
                      \u2212
                    </button>
                    <span class="w-8 text-center text-2xl font-extrabold text-gray-800 dark:text-white">
                      {{ of.seats.value ?? 1 }}
                    </span>
                    <button type="button" (click)="addSeat()"
                      class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-bold text-gray-600 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 transition dark:border-gray-600 dark:text-gray-300"
                      [disabled]="(of.seats.value ?? 1) >= viaje.availableSeats">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <!-- Precio total -->
              <div class="rounded-xl bg-brand-50 px-5 py-4 dark:bg-brand-500/10">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    {{ of.seats.value ?? 1 }} \xD7 {{ tasaService.formatBs(pricePerSeat) }}
                  </p>
                  <p class="text-xl font-extrabold text-brand-700 dark:text-brand-300">{{ tasaService.formatBs(totalUsd) }}</p>
                </div>
                <p class="text-xs text-gray-400 mt-1">= \${{ totalUsd | number:'1.2-2' }} USD \xB7 Tasa: Bs {{ tasaService.rate() | number:'1.2-2' }}/$</p>
              </div>

              <button type="button" (click)="confirmarOrden()" [disabled]="loadingAction"
                class="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50 transition-colors">
                {{ loadingAction ? 'Procesando...' : 'Continuar al pago \u2192' }}
              </button>
            </div>
          </ng-container>
        </div>

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 PASO 2: Pagar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="overflow-hidden rounded-2xl border bg-white shadow-sm dark:bg-white/[0.03] transition-all"
          [ngClass]="{
            'border-brand-400 dark:border-brand-600': step === 2,
            'border-gray-200 dark:border-gray-800': step !== 2,
            'opacity-40 pointer-events-none': step < 2
          }">

          <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
            <div class="flex items-center gap-3">
              <div class="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                [ngClass]="step > 2 ? 'bg-green-500 text-white' : step === 2 ? 'bg-brand-500 text-white' : 'border-2 border-gray-200 text-gray-400'">
                <span *ngIf="step > 2">\u2713</span><span *ngIf="step <= 2">2</span>
              </div>
              <h2 class="font-bold text-gray-800 dark:text-white/90">M\xE9todo de pago</h2>
            </div>
            <button *ngIf="step > 2" type="button" (click)="step = 2; errorMsg = ''"
              class="rounded-lg border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500 hover:border-brand-300 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400">
              Editar
            </button>
          </div>

          <!-- Resumen colapsado -->
          <div *ngIf="step > 2" class="flex items-center justify-between px-5 py-3">
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ pf.method.value }} \xB7 {{ pf.currency.value }}</p>
            <p class="font-bold text-gray-800 dark:text-white">{{ displayAmount }}</p>
          </div>

          <!-- Form paso 2 -->
          <ng-container *ngIf="step === 2">
            <div class="p-5 space-y-5">

              <!-- M\xE9todos de pago -->
              <div>
                <label class="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">Selecciona tu m\xE9todo de pago</label>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  <button *ngFor="let m of PAYMENT_METHODS" type="button" (click)="pf.method.setValue(m.value)"
                    class="flex flex-col items-center gap-2 rounded-xl border-2 p-3 text-center transition-all"
                    [ngClass]="pf.method.value === m.value
                      ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10'
                      : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'">
                    <span class="text-2xl">{{ m.icon }}</span>
                    <span class="text-xs font-semibold leading-tight" [ngClass]="pf.method.value === m.value ? 'text-brand-700 dark:text-brand-300' : 'text-gray-600 dark:text-gray-400'">
                      {{ m.label }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Datos del m\xE9todo seleccionado -->
              <div *ngIf="selectedPaymentInfo"
                class="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/30 dark:bg-blue-500/10">
                <p class="mb-3 text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  {{ selectedPaymentInfo.title }}
                </p>
                <div class="space-y-2">
                  <div *ngFor="let f of selectedPaymentInfo.fields" class="flex items-start justify-between gap-3">
                    <span class="text-xs text-blue-600/70 dark:text-blue-400/70 min-w-0 flex-shrink-0">{{ f.key }}</span>
                    <span class="text-xs font-bold text-blue-800 dark:text-blue-200 text-right break-all">{{ f.value }}</span>
                  </div>
                </div>
              </div>

              <!-- \u2500\u2500 Campos de Tarjeta (solo cuando method === CARD) \u2500\u2500 -->
              <div *ngIf="isCard" class="space-y-4">
                <!-- Preview visual de tarjeta -->
                <div class="relative h-48 w-full max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-5 shadow-xl text-white select-none overflow-hidden">
                  <!-- Chip -->
                  <div class="mb-4 h-8 w-12 rounded-md bg-yellow-400/80"></div>
                  <!-- N\xFAmero -->
                  <p class="font-mono text-lg tracking-widest text-white/90">
                    {{ (pf.cardNumber.value || '').padEnd(19, '\xB7').replace(/(.{4})/g, '$1 ').trim() || '\xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7 \xB7\xB7\xB7\xB7' }}
                  </p>
                  <!-- Nombre y fecha -->
                  <div class="mt-3 flex items-end justify-between">
                    <div>
                      <p class="text-[10px] text-white/50 uppercase tracking-wider">Titular</p>
                      <p class="text-sm font-semibold tracking-wide text-white/90 uppercase">
                        {{ pf.cardName.value || 'NOMBRE APELLIDO' }}
                      </p>
                    </div>
                    <div class="text-right">
                      <p class="text-[10px] text-white/50 uppercase tracking-wider">Vence</p>
                      <p class="text-sm font-semibold font-mono text-white/90">{{ pf.cardExpiry.value || 'MM/AA' }}</p>
                    </div>
                  </div>
                  <!-- Logo decorativo -->
                  <div class="absolute top-4 right-4 flex gap-1 opacity-80">
                    <div class="h-8 w-8 rounded-full bg-red-500/70"></div>
                    <div class="h-8 w-8 rounded-full bg-yellow-500/70 -ml-3"></div>
                  </div>
                </div>

                <!-- N\xFAmero de tarjeta -->
                <div>
                  <label class="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    N\xFAmero de tarjeta <span class="text-red-500">*</span>
                  </label>
                  <input type="text" [formControl]="pf.cardNumber" placeholder="1234 5678 9012 3456"
                    maxlength="19" (input)="formatCardNumber($event)"
                    class="h-11 w-full rounded-xl border px-4 font-mono text-sm text-gray-800 outline-none transition dark:text-white"
                    [ngClass]="pf.cardNumber.touched && pf.cardNumber.invalid
                      ? 'border-red-400 bg-red-50 dark:bg-red-500/10'
                      : 'border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800'" />
                  <p *ngIf="pf.cardNumber.touched && pf.cardNumber.invalid" class="mt-1 text-xs text-red-500">Ingresa el n\xFAmero de tarjeta.</p>
                </div>

                <!-- Nombre del titular -->
                <div>
                  <label class="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Nombre del titular <span class="text-red-500">*</span>
                  </label>
                  <input type="text" [formControl]="pf.cardName" placeholder="NOMBRE APELLIDO"
                    class="h-11 w-full rounded-xl border px-4 text-sm uppercase tracking-wide text-gray-800 outline-none transition dark:text-white"
                    [ngClass]="pf.cardName.touched && pf.cardName.invalid
                      ? 'border-red-400 bg-red-50 dark:bg-red-500/10'
                      : 'border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800'" />
                  <p *ngIf="pf.cardName.touched && pf.cardName.invalid" class="mt-1 text-xs text-red-500">Ingresa el nombre del titular.</p>
                </div>

                <!-- Fecha de vencimiento + CVV -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Fecha de vencimiento <span class="text-red-500">*</span>
                    </label>
                    <input type="text" [formControl]="pf.cardExpiry" placeholder="MM/AA"
                      maxlength="5" (input)="formatExpiry($event)"
                      class="h-11 w-full rounded-xl border px-4 font-mono text-sm text-gray-800 outline-none transition dark:text-white"
                      [ngClass]="pf.cardExpiry.touched && pf.cardExpiry.invalid
                        ? 'border-red-400 bg-red-50 dark:bg-red-500/10'
                        : 'border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800'" />
                    <p *ngIf="pf.cardExpiry.touched && pf.cardExpiry.invalid" class="mt-1 text-xs text-red-500">Ingresa la fecha.</p>
                  </div>
                  <div>
                    <label class="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      CVV <span class="text-red-500">*</span>
                    </label>
                    <input type="password" [formControl]="pf.cardCvv" placeholder="\xB7\xB7\xB7"
                      maxlength="4" (input)="formatCvv($event)"
                      class="h-11 w-full rounded-xl border px-4 font-mono text-sm text-gray-800 outline-none transition dark:text-white"
                      [ngClass]="pf.cardCvv.touched && pf.cardCvv.invalid
                        ? 'border-red-400 bg-red-50 dark:bg-red-500/10'
                        : 'border-gray-200 bg-gray-50 focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800'" />
                    <p *ngIf="pf.cardCvv.touched && pf.cardCvv.invalid" class="mt-1 text-xs text-red-500">Ingresa el CVV.</p>
                  </div>
                </div>

                <p class="flex items-center gap-1.5 text-xs text-gray-400">
                  <span>\u{1F512}</span> Tus datos est\xE1n protegidos con cifrado SSL.
                </p>
              </div>

              <!-- Moneda -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Moneda de pago</label>
                <div class="grid grid-cols-2 gap-3">
                  <button type="button" (click)="pf.currency.setValue('BS')"
                    class="flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all"
                    [ngClass]="pf.currency.value === 'BS'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400'">
                    \u{1F1FB}\u{1F1EA} Bol\xEDvar (REF)
                  </button>
                  <button type="button" (click)="pf.currency.setValue('USD')"
                    class="flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all"
                    [ngClass]="pf.currency.value === 'USD'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400'">
                    \u{1F1FA}\u{1F1F8} D\xF3lar (USD)
                  </button>
                </div>
              </div>

              <!-- Monto a pagar (solo lectura) -->
              <div class="rounded-2xl border-2 border-brand-200 bg-gradient-to-r from-brand-500 to-brand-600 p-5 text-center shadow-sm dark:border-brand-500/40">
                <p class="text-xs font-medium text-brand-100 mb-1">Monto total a pagar</p>
                <p class="text-4xl font-extrabold text-white tracking-tight">{{ displayAmount }}</p>
                <p class="text-xs text-brand-100 mt-1.5">
                  {{ of.seats.value }} {{ (of.seats.value || 1) === 1 ? 'pasajero' : 'pasajeros' }}
                  <span *ngIf="pf.currency.value === 'BS'"> \xB7 \${{ totalUsd | number:'1.2-2' }} USD</span>
                  <span *ngIf="pf.currency.value === 'USD'"> \xB7 REF {{ tasaService.toBs(totalUsd) | number:'1.2-2' }}</span>
                </p>
              </div>

              <!-- N\xFAmero de referencia (condicional) -->
              <div *ngIf="selectedPaymentInfo?.showRef">
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  N\xFAmero de referencia / confirmaci\xF3n
                </label>
                <input type="text" [formControl]="pf.transactionRef" placeholder="Ej: 123456789"
                  class="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-800 outline-none focus:border-brand-400 focus:bg-white transition dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
              </div>

              <!-- Comprobante (condicional) -->
              <div *ngIf="selectedPaymentInfo?.showProof">
                <app-image-upload
                  label="Foto del comprobante de pago"
                  [currentUrl]="pf.proofImageUrl.value"
                  (uploaded)="onProofUploaded($event)">
                </app-image-upload>
              </div>

              <!-- Notas -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Notas adicionales (opcional)</label>
                <textarea [formControl]="pf.notes" rows="2" placeholder="Informaci\xF3n adicional..."
                  class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand-400 focus:bg-white transition dark:border-gray-700 dark:bg-slate-800 dark:text-white"></textarea>
              </div>

              <button type="button" (click)="registrarPago()" [disabled]="loadingAction"
                class="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50 transition-colors">
                {{ loadingAction ? 'Registrando pago...' : '\u2713 Confirmar pago \u2192' }}
              </button>
            </div>
          </ng-container>
        </div>

        <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 PASO 3: Confirmaci\xF3n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <ng-container *ngIf="step === 3 && createdTicket">
          <div class="overflow-hidden rounded-2xl border-2 border-green-400 bg-white shadow-lg dark:bg-white/[0.03]">

            <!-- \xC9xito banner -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center">
              <div class="text-5xl mb-2">\u{1F389}</div>
              <h2 class="text-2xl font-extrabold text-white">\xA1Reserva confirmada!</h2>
              <p class="mt-1 text-green-100 text-sm">Tu pago ha sido registrado y est\xE1 pendiente de verificaci\xF3n.</p>
            </div>

            <div class="p-6 space-y-5">

              <!-- Ticket card -->
              <div class="rounded-2xl border border-green-100 bg-green-50 p-5 dark:border-green-500/20 dark:bg-green-500/5">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <p class="text-xs text-gray-400 font-mono">TICKET #{{ createdTicket.id }}</p>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white mt-1">
                      {{ createdTicket.trip?.schedule?.route?.originPier?.name }}
                      <span class="text-gray-400 mx-1">\u2192</span>
                      {{ createdTicket.trip?.schedule?.route?.destinationPier?.name }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ createdTicket.trip?.schedule?.vessel?.name }}</p>
                  </div>
                  <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                    {{ statusLabel(createdTicket.status) }}
                  </span>
                </div>

                <div class="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                  <div class="rounded-xl bg-white p-3 shadow-sm dark:bg-white/[0.05]">
                    <p class="text-xs text-gray-400">\u{1F4C5} Fecha</p>
                    <p class="font-bold text-gray-800 dark:text-white mt-0.5">{{ createdTicket.trip?.departureDate | date:'dd MMM yyyy' }}</p>
                  </div>
                  <div class="rounded-xl bg-white p-3 shadow-sm dark:bg-white/[0.05]">
                    <p class="text-xs text-gray-400">\u{1F550} Salida</p>
                    <p class="font-bold text-gray-800 dark:text-white mt-0.5">{{ createdTicket.trip?.departureTime }}</p>
                  </div>
                  <div class="rounded-xl bg-white p-3 shadow-sm dark:bg-white/[0.05]">
                    <p class="text-xs text-gray-400">\u{1F465} Puestos</p>
                    <p class="font-bold text-gray-800 dark:text-white mt-0.5">{{ createdTicket.seats }}</p>
                  </div>
                  <div class="rounded-xl bg-white p-3 shadow-sm col-span-2 sm:col-span-3 dark:bg-white/[0.05]">
                    <p class="text-xs text-gray-400 mb-1">\u{1F511} C\xF3digo QR</p>
                    <p class="font-mono text-xs text-gray-700 dark:text-gray-300 break-all">{{ createdTicket.qrCode }}</p>
                  </div>
                </div>

                <!-- Total pagado con moneda correcta -->
                <div class="mt-4 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm dark:bg-white/[0.05]">
                  <div>
                    <p class="text-sm text-gray-500">Total pagado</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ createdPago?.method }} \xB7 {{ createdPago?.currency }}</p>
                  </div>
                  <p class="text-2xl font-extrabold text-gray-800 dark:text-white">
                    {{ createdPago ? pagoDisplay(createdPago) : ('$' + (createdTicket.totalPrice | number:'1.2-2')) }}
                  </p>
                </div>
              </div>

              <!-- Acciones -->
              <div class="flex flex-col gap-3 sm:flex-row">
                <a [routerLink]="['/tickets', createdTicket.id]"
                  class="flex-1 rounded-xl border-2 border-brand-500 py-3 text-center text-sm font-bold text-brand-600 hover:bg-brand-50 transition-colors dark:text-brand-400 dark:hover:bg-brand-500/10">
                  Ver mi ticket completo
                </a>
                <a routerLink="/mis-reservas"
                  class="flex-1 rounded-xl bg-brand-500 py-3 text-center text-sm font-bold text-white hover:bg-brand-600 shadow-sm transition-colors">
                  Mis reservas
                </a>
                <a routerLink="/buscar"
                  class="flex-1 rounded-xl border border-gray-200 py-3 text-center text-sm font-semibold text-gray-600 hover:border-gray-300 transition-colors dark:border-gray-700 dark:text-gray-400">
                  Reservar otro
                </a>
              </div>
            </div>
          </div>
        </ng-container>

      </div>
    </div>
  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/checkout/checkout.component.ts", lineNumber: 46 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-4R75A6B7.js.map
