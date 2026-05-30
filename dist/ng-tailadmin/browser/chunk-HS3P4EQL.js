import {
  PagosService
} from "./chunk-OPFOKBHG.js";
import {
  PaymentAccountsService
} from "./chunk-G77DX7AD.js";
import {
  ImageUploadComponent
} from "./chunk-MF5I77NK.js";
import "./chunk-PFOQZ4L6.js";
import {
  IslandTripsService
} from "./chunk-NAARBNGA.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
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
  DatePipe,
  DecimalPipe,
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
  ɵɵpureFunction1,
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
import "./chunk-XWLXMCJQ.js";

// src/app/pages/mis-reservas/pagar-reserva/pagar-reserva.component.ts
var _c0 = (a0) => ["/mis-reservas", a0];
function PagarReservaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Cargando reserva...");
    \u0275\u0275elementEnd()();
  }
}
function PagarReservaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 9);
    \u0275\u0275text(4, "\u2190 Mis reservas");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 12);
    \u0275\u0275text(5, "\xA1Pago registrado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7, " Tu pago de ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " fue enviado correctamente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 14);
    \u0275\u0275text(12, "Ser\xE1 verificado por el equipo en breve.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "a", 16);
    \u0275\u0275text(15, " Ver detalle de reserva \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 17);
    \u0275\u0275text(17, " Mis Reservas ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.pagoDisplay(ctx_r0.createdPago));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.bookingId));
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Cargando saldo\u2026");
    \u0275\u0275elementContainerEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_ng_container_50_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "(saldo insuficiente)");
    \u0275\u0275elementEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PagarReservaComponent_ng_container_3_ng_container_2_ng_container_50_span_4_Template, 2, 0, "span", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green-600", ctx_r0.hasEnoughBalance)("text-red-500", !ctx_r0.hasEnoughBalance);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, ctx_r0.walletBalance, "1.2-2"), " nudos disponibles ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.hasEnoughBalance);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_button_52_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PagarReservaComponent_ng_container_3_ng_container_2_button_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectMethod("tdc"));
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "p", 34);
    \u0275\u0275text(5, "Tarjeta guardada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PagarReservaComponent_ng_container_3_ng_container_2_button_52_div_8_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.isTdc ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-gray-200 hover:border-gray-300 dark:border-gray-700");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r0.savedCards.length, " tarjeta", ctx_r0.savedCards.length !== 1 ? "s" : "", " en tu cuenta");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTdc);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_button_53_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function PagarReservaComponent_ng_container_3_ng_container_2_button_53_Template_button_click_0_listener() {
      const acc_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectMethod(acc_r5.id.toString()));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PagarReservaComponent_ng_container_3_ng_container_2_button_53_div_8_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.selectedAccountId === acc_r5.id.toString() ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-gray-200 hover:border-gray-300 dark:border-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAccountId === acc_r5.id.toString());
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_54_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "dt", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r6.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.value);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 55);
    \u0275\u0275text(2, " Realiza el pago de ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " a: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 56);
    \u0275\u0275template(7, PagarReservaComponent_ng_container_3_ng_container_2_div_54_div_7_Template, 5, 2, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.displayAmount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.selectedAccount.fields);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_55_label_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_55_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 64)(1, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function PagarReservaComponent_ng_container_3_ng_container_2_div_55_label_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedCardId, $event) || (ctx_r0.selectedCardId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 67)(5, "p", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PagarReservaComponent_ng_container_3_ng_container_2_div_55_label_4_div_9_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r0.selectedCardId === card_r8.id ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-gray-200 hover:border-gray-300 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("value", card_r8.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedCardId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.maskedCard(card_r8.numero));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", card_r8.titular, " \xB7 Vence ", card_r8.vencimiento);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCardId === card_r8.id);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 23);
    \u0275\u0275text(2, "Selecciona una tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275template(4, PagarReservaComponent_ng_container_3_ng_container_2_div_55_label_4_Template, 10, 7, "label", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6, " Cargo de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " a la tarjeta seleccionada. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.savedCards);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 2, ctx_r0.booking.totalPrice, "1.2-2"), " USD");
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 73);
    \u0275\u0275text(2, "\u2713 Saldo suficiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 74);
    \u0275\u0275text(4, " Se descontar\xE1n ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " de tu saldo de ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 75);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 3, ctx_r0.booking.totalPrice, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 6, ctx_r0.walletBalance, "1.2-2"), " nudos");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Saldo restante: ", \u0275\u0275pipeBind2(15, 9, ctx_r0.walletBalance - ctx_r0.totalUsd, "1.2-2"), " nudos ");
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 76);
    \u0275\u0275text(2, "\u2717 Saldo insuficiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 77);
    \u0275\u0275text(4, " Necesitas ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " pero solo tienes ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 78);
    \u0275\u0275text(14, " + Recargar saldo \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 2, ctx_r0.booking.totalPrice, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 5, ctx_r0.walletBalance, "1.2-2"), " nudos");
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, PagarReservaComponent_ng_container_3_ng_container_2_div_56_div_1_Template, 16, 12, "div", 3)(2, PagarReservaComponent_ng_container_3_ng_container_2_div_56_div_2_Template, 15, 8, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.hasEnoughBalance ? "border border-teal-200 bg-teal-50 dark:border-teal-900/30 dark:bg-teal-500/5" : "border border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-500/5");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasEnoughBalance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasEnoughBalance);
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_form_57_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 82);
    \u0275\u0275text(2, "Comprobante (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-image-upload", 91);
    \u0275\u0275listener("uploaded", function PagarReservaComponent_ng_container_3_ng_container_2_form_57_div_30_Template_app_image_upload_uploaded_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onProofUploaded($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_form_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 79)(1, "div", 18)(2, "p", 29);
    \u0275\u0275text(3, "Datos del pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "div", 81)(6, "div")(7, "label", 82);
    \u0275\u0275text(8, "Moneda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 83)(10, "option", 84);
    \u0275\u0275text(11, "USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 85);
    \u0275\u0275text(13, "Bol\xEDvares (REF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 86);
    \u0275\u0275text(15, "USDT");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div")(17, "label", 82);
    \u0275\u0275text(18, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 88);
    \u0275\u0275text(21, " \u{1F4A1} Si pagas m\xE1s de ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, ", el excedente se abonar\xE1 autom\xE1ticamente a tu saldo de nudos una vez verificado el pago. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 82);
    \u0275\u0275text(28, "N\xB0 de referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, PagarReservaComponent_ng_container_3_ng_container_2_form_57_div_30_Template, 4, 0, "div", 3);
    \u0275\u0275elementStart(31, "div")(32, "label", 82);
    \u0275\u0275text(33, "Notas (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r0.payForm);
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(24, 3, ctx_r0.booking.totalPrice, "1.2-2"), " USD");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.selectedAccount.method !== "CASH");
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function PagarReservaComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "div")(4, "h1", 20);
    \u0275\u0275text(5, "\u{1F4B3} Pagar Reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 22);
    \u0275\u0275text(9, " \u2190 Volver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18)(11, "p", 23);
    \u0275\u0275text(12, "Resumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "div", 25)(15, "span");
    \u0275\u0275text(16, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25)(20, "span");
    \u0275\u0275text(21, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 25)(26, "span");
    \u0275\u0275text(27, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 26)(31, "span");
    \u0275\u0275text(32, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 27);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 28);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 18)(39, "p", 29);
    \u0275\u0275text(40, "Selecciona c\xF3mo pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 30)(42, "button", 31);
    \u0275\u0275listener("click", function PagarReservaComponent_ng_container_3_ng_container_2_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectMethod("wallet"));
    });
    \u0275\u0275elementStart(43, "div", 32);
    \u0275\u0275text(44, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 33)(46, "p", 34);
    \u0275\u0275text(47, "Saldo de Nudos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 35);
    \u0275\u0275template(49, PagarReservaComponent_ng_container_3_ng_container_2_ng_container_49_Template, 2, 0, "ng-container", 3)(50, PagarReservaComponent_ng_container_3_ng_container_2_ng_container_50_Template, 5, 9, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, PagarReservaComponent_ng_container_3_ng_container_2_div_51_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, PagarReservaComponent_ng_container_3_ng_container_2_button_52_Template, 9, 4, "button", 37)(53, PagarReservaComponent_ng_container_3_ng_container_2_button_53_Template, 9, 5, "button", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, PagarReservaComponent_ng_container_3_ng_container_2_div_54_Template, 8, 2, "div", 39)(55, PagarReservaComponent_ng_container_3_ng_container_2_div_55_Template, 11, 5, "div", 40)(56, PagarReservaComponent_ng_container_3_ng_container_2_div_56_Template, 3, 3, "div", 41)(57, PagarReservaComponent_ng_container_3_ng_container_2_form_57_Template, 35, 6, "form", 42)(58, PagarReservaComponent_ng_container_3_ng_container_2_div_58_Template, 2, 1, "div", 43);
    \u0275\u0275elementStart(59, "div", 44)(60, "a", 45);
    \u0275\u0275text(61, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 46);
    \u0275\u0275listener("click", function PagarReservaComponent_ng_container_3_ng_container_2_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.registrarPago());
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3(" ", (ctx_r0.booking.departurePoint == null ? null : ctx_r0.booking.departurePoint.name) ?? "\u2014", " \u2192 ", (ctx_r0.booking.destination == null ? null : ctx_r0.booking.destination.name) ?? "\u2014", " \xB7 #", ctx_r0.booking.id, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r0.booking.vessel == null ? null : ctx_r0.booking.vessel.name) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 21, ctx_r0.booking.tripDate, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.booking.passengers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(35, 24, ctx_r0.booking.totalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.booking.totalPrice));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.isWallet ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-gray-200 hover:border-gray-300 dark:border-gray-700");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.loadingWallet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingWallet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isWallet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savedCards.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTdc && ctx_r0.savedCards.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isWallet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMsg);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.submitting || !ctx_r0.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Procesando..." : "Confirmar pago", " ");
  }
}
function PagarReservaComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PagarReservaComponent_ng_container_3_ng_container_1_Template, 18, 4, "ng-container", 3)(2, PagarReservaComponent_ng_container_3_ng_container_2_Template, 64, 27, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.done && ctx_r0.createdPago);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.done);
  }
}
var STORAGE_TDC = "maritimo_tdcs";
var PagarReservaComponent = class _PagarReservaComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  http = inject(HttpClient);
  service = inject(IslandTripsService);
  pagosService = inject(PagosService);
  accountsService = inject(PaymentAccountsService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  bookingId = 0;
  booking = null;
  loading = true;
  submitting = false;
  errorMsg = "";
  done = false;
  createdPago = null;
  // Wallet
  walletBalance = 0;
  loadingWallet = true;
  // Saved cards from localStorage
  savedCards = [];
  selectedCardId = "";
  // Payment accounts loaded from backend
  accounts = [];
  // Currently selected account (null = wallet or TDC)
  selectedAccountId = null;
  // 'wallet' | 'tdc' | account.id (as string)
  payForm = this.fb.group({
    currency: ["USD", Validators.required],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    transactionRef: [""],
    proofImageUrl: [""],
    notes: [""]
  });
  get pf() {
    return this.payForm.controls;
  }
  get selectedAccount() {
    return this.accounts.find((a) => String(a.id) === this.selectedAccountId) ?? null;
  }
  get isWallet() {
    return this.selectedAccountId === "wallet";
  }
  get isTdc() {
    return this.selectedAccountId === "tdc";
  }
  get selectedCard() {
    return this.savedCards.find((c) => c.id === this.selectedCardId) ?? null;
  }
  get hasEnoughBalance() {
    return this.walletBalance >= this.totalUsd;
  }
  get totalUsd() {
    return Number(this.booking?.totalPrice ?? 0);
  }
  get totalBs() {
    const r = this.tasaService.rate();
    return r > 0 ? this.totalUsd * r : this.totalUsd;
  }
  get displayAmount() {
    return this.pf.currency.value === "BS" ? `REF ${this.totalBs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : `$${this.totalUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  ngOnInit() {
    this.tasaService.load();
    this.bookingId = Number(this.route.snapshot.queryParamMap.get("bookingId"));
    if (!this.bookingId) {
      this.errorMsg = "Reserva no v\xE1lida.";
      this.loading = false;
      return;
    }
    this.pf.currency.valueChanges.subscribe(() => this.syncAmount());
    try {
      const raw = localStorage.getItem(STORAGE_TDC);
      if (raw) {
        const p = JSON.parse(raw);
        this.savedCards = Array.isArray(p) ? p : [];
      }
    } catch (e) {
    }
    this.service.getBookingById(this.bookingId).subscribe({
      next: (b) => {
        this.booking = b;
        this.syncAmount();
        this.loading = false;
      },
      error: () => {
        this.errorMsg = "No se pudo cargar la reserva.";
        this.loading = false;
      }
    });
    this.accountsService.getActive().subscribe({ next: (a) => {
      this.accounts = a;
    } });
    const uid = this.authService.user()?.id;
    if (uid) {
      this.http.get(`${environment.apiUrl}/payments/wallet-balance/${uid}`).subscribe({
        next: (r) => {
          this.walletBalance = Number(r?.balance ?? r?.data?.balance ?? 0);
          this.loadingWallet = false;
        },
        error: () => {
          this.loadingWallet = false;
        }
      });
    } else {
      this.loadingWallet = false;
    }
  }
  selectMethod(id) {
    this.selectedAccountId = id;
    if (id === "wallet" || id === "tdc") {
      this.payForm.patchValue({ currency: "USD" });
    } else {
      const acc = this.accounts.find((a) => String(a.id) === id);
      if (acc)
        this.payForm.patchValue({ currency: acc.currency });
    }
    this.syncAmount();
  }
  syncAmount() {
    const v = this.pf.currency.value === "BS" ? this.totalBs : this.totalUsd;
    this.payForm.patchValue({ amount: v }, { emitEvent: false });
  }
  maskedCard(n) {
    if (!n || n.length < 4)
      return "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ????";
    return `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${n.slice(-4)}`;
  }
  onProofUploaded(url) {
    this.payForm.patchValue({ proofImageUrl: url });
  }
  canSubmit() {
    if (!this.selectedAccountId)
      return false;
    if (this.isWallet)
      return this.hasEnoughBalance;
    if (this.isTdc)
      return !!this.selectedCardId;
    return true;
  }
  registrarPago() {
    if (!this.canSubmit())
      return;
    const user = this.authService.user();
    if (!user) {
      this.router.navigate(["/login"]);
      return;
    }
    this.errorMsg = "";
    this.submitting = true;
    let method;
    let notes = this.pf.notes.value?.trim() || void 0;
    let transactionRef = this.pf.transactionRef.value?.trim() || void 0;
    if (this.isWallet) {
      method = "WALLET";
      notes = notes ?? `Pago con saldo de nudos. Saldo disponible: $${this.walletBalance.toFixed(2)}`;
    } else if (this.isTdc) {
      method = "CARD";
      const card = this.selectedCard;
      if (card) {
        const last4 = card.numero.replace(/\s/g, "").slice(-4);
        transactionRef = last4;
        const s = `Tarjeta: \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${last4} | Titular: ${card.titular} | Vence: ${card.vencimiento}`;
        notes = notes ? `${s} | ${notes}` : s;
      }
    } else {
      method = this.selectedAccount.method;
    }
    this.pagosService.create({
      clientId: user.id,
      amount: Number(this.pf.amount.value),
      currency: this.pf.currency.value,
      method,
      referenceType: "ISLAND_BOOKING",
      referenceId: this.bookingId,
      transactionRef,
      proofImageUrl: this.pf.proofImageUrl.value?.trim() || void 0,
      notes
    }).subscribe({
      next: (pago) => {
        this.createdPago = pago;
        this.submitting = false;
        this.done = true;
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al registrar el pago.";
        this.submitting = false;
      }
    });
  }
  pagoDisplay(p) {
    if (p.currency === "BS" || p.currency === "VES")
      return `REF ${Number(p.amount).toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${Number(p.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  static \u0275fac = function PagarReservaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagarReservaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagarReservaComponent, selectors: [["app-pagar-reserva"]], decls: 4, vars: 3, consts: [[1, "mx-auto", "max-w-3xl", "space-y-6", "pb-12"], ["class", "flex flex-col items-center justify-center py-24 gap-4", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-500/10", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-8", "text-center", "dark:border-red-900/30", "dark:bg-red-500/10"], [1, "text-red-600", "dark:text-red-400"], ["routerLink", "/mis-reservas", 1, "mt-3", "inline-block", "text-sm", "font-semibold", "text-brand-500", "hover:underline"], [1, "rounded-2xl", "border", "border-green-200", "bg-green-50", "p-8", "text-center", "dark:border-green-900/30", "dark:bg-green-500/5"], [1, "text-5xl", "mb-4"], [1, "text-xl", "font-bold", "text-green-800", "dark:text-green-300", "mb-2"], [1, "text-sm", "text-green-700", "dark:text-green-400", "mb-1"], [1, "text-xs", "text-green-600", "dark:text-green-500", "mb-6"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "justify-center"], [1, "rounded-xl", "border", "border-green-300", "px-5", "py-2.5", "text-sm", "font-semibold", "text-green-700", "hover:bg-green-100", "dark:border-green-700", "dark:text-green-400", 3, "routerLink"], ["routerLink", "/mis-reservas", 1, "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-600"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mis-reservas", 1, "inline-flex", "items-center", "gap-1", "rounded-lg", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "space-y-1.5", "text-sm"], [1, "flex", "justify-between", "text-gray-600", "dark:text-gray-400"], [1, "flex", "justify-between", "border-t", "border-gray-100", "pt-2", "font-bold", "text-gray-800", "dark:border-gray-700", "dark:text-white/90"], [1, "text-lg", "text-brand-600", "dark:text-brand-400"], [1, "text-right", "text-xs", "text-gray-400"], [1, "mb-4", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "space-y-3"], ["type", "button", 1, "w-full", "flex", "items-center", "gap-4", "rounded-xl", "border", "px-4", "py-3.5", "text-left", "transition-all", 3, "click", "ngClass"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-teal-100", "text-xl", "dark:bg-teal-500/15"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-gray-800", "dark:text-white/90", "text-sm"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "mt-0.5"], ["class", "h-5 w-5 flex-shrink-0 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs", 4, "ngIf"], ["type", "button", "class", "w-full flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "w-full flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-500/5", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl p-5", 3, "ngClass", 4, "ngIf"], ["class", "space-y-4", 3, "formGroup", 4, "ngIf"], ["class", "rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "flex", "gap-3", "justify-end"], ["routerLink", "/mis-reservas", 1, "rounded-xl", "border", "border-gray-200", "px-5", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["type", "button", 1, "rounded-xl", "bg-brand-500", "px-7", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", 3, "click", "disabled"], [1, "dark:text-inherit", "font-medium"], ["class", "ml-1 text-red-400", 4, "ngIf"], [1, "ml-1", "text-red-400"], [1, "h-5", "w-5", "flex-shrink-0", "rounded-full", "bg-brand-500", "text-white", "flex", "items-center", "justify-center", "text-xs"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-indigo-100", "text-xl", "dark:bg-indigo-500/15"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-gray-100", "text-xl", "dark:bg-gray-800"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "truncate", "mt-0.5"], [1, "rounded-2xl", "border", "border-blue-100", "bg-blue-50", "p-5", "dark:border-blue-900/30", "dark:bg-blue-500/5"], [1, "mb-3", "text-sm", "font-semibold", "text-blue-800", "dark:text-blue-300"], [1, "space-y-1"], ["class", "flex gap-2 text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "text-sm"], [1, "w-28", "flex-shrink-0", "font-medium", "text-blue-700", "dark:text-blue-400"], [1, "text-blue-800", "dark:text-blue-300"], [1, "space-y-2"], ["class", "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-xs", "text-gray-400"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-xl", "border", "p-3.5", "transition-all", 3, "ngClass"], ["type", "radio", "name", "savedCard", 1, "sr-only", 3, "ngModelChange", "value", "ngModel"], [1, "text-xl"], [1, "flex-1"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], ["class", "h-5 w-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs", 4, "ngIf"], [1, "h-5", "w-5", "rounded-full", "bg-brand-500", "text-white", "flex", "items-center", "justify-center", "text-xs"], [1, "rounded-2xl", "p-5", 3, "ngClass"], [1, "text-sm", "font-semibold", "text-teal-800", "dark:text-teal-300"], [1, "text-sm", "text-teal-700", "dark:text-teal-400", "mt-1"], [1, "text-xs", "text-teal-600", "dark:text-teal-500", "mt-1"], [1, "text-sm", "font-semibold", "text-red-700", "dark:text-red-400"], [1, "text-sm", "text-red-600", "dark:text-red-400", "mt-1"], ["routerLink", "/mis-metodos-pago", 1, "mt-2", "inline-block", "text-xs", "font-semibold", "text-brand-500", "hover:underline"], [1, "space-y-4", 3, "formGroup"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-400"], ["formControlName", "currency", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["value", "USD"], ["value", "BS"], ["value", "USDT"], ["type", "number", "formControlName", "amount", "step", "0.01", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "rounded-lg", "bg-amber-50", "border", "border-amber-200", "px-4", "py-3", "text-xs", "text-amber-700", "dark:bg-amber-500/5", "dark:border-amber-800/30", "dark:text-amber-400"], ["type", "text", "formControlName", "transactionRef", "placeholder", "N\xFAmero de confirmaci\xF3n de la transferencia", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "notes", "rows", "2", "placeholder", "Alguna observaci\xF3n...", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-3", "py-2", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "uploaded"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"]], template: function PagarReservaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PagarReservaComponent_div_1_Template, 5, 0, "div", 1)(2, PagarReservaComponent_div_2_Template, 5, 1, "div", 2)(3, PagarReservaComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMsg && !ctx.booking);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.booking);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, ImageUploadComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagarReservaComponent, [{
    type: Component,
    args: [{ selector: "app-pagar-reserva", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="mx-auto max-w-3xl space-y-6 pb-12">

  <!-- Loading -->
  <div *ngIf="loading" class="flex flex-col items-center justify-center py-24 gap-4">
    <div class="text-5xl animate-bounce">\u2693</div>
    <p class="text-gray-500 dark:text-gray-400">Cargando reserva...</p>
  </div>

  <!-- Error fatal -->
  <div *ngIf="!loading && errorMsg && !booking"
    class="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-500/10">
    <p class="text-red-600 dark:text-red-400">{{ errorMsg }}</p>
    <a routerLink="/mis-reservas" class="mt-3 inline-block text-sm font-semibold text-brand-500 hover:underline">\u2190 Mis reservas</a>
  </div>

  <ng-container *ngIf="!loading && booking">

    <!-- \u2500\u2500\u2500 CONFIRMACI\xD3N FINAL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="done && createdPago">
      <div class="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/30 dark:bg-green-500/5">
        <div class="text-5xl mb-4">\u{1F389}</div>
        <h2 class="text-xl font-bold text-green-800 dark:text-green-300 mb-2">\xA1Pago registrado!</h2>
        <p class="text-sm text-green-700 dark:text-green-400 mb-1">
          Tu pago de <strong>{{ pagoDisplay(createdPago) }}</strong> fue enviado correctamente.
        </p>
        <p class="text-xs text-green-600 dark:text-green-500 mb-6">Ser\xE1 verificado por el equipo en breve.</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a [routerLink]="['/mis-reservas', bookingId]"
            class="rounded-xl border border-green-300 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-400">
            Ver detalle de reserva \u2192
          </a>
          <a routerLink="/mis-reservas"
            class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
            Mis Reservas
          </a>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500\u2500 FORMULARIO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!done">

      <!-- Header -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4B3} Pagar Reserva</h1>
            <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              {{ booking.departurePoint?.name ?? '\u2014' }} \u2192 {{ booking.destination?.name ?? '\u2014' }} \xB7 #{{ booking.id }}
            </p>
          </div>
          <a routerLink="/mis-reservas"
            class="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
            \u2190 Volver
          </a>
        </div>
      </div>

      <!-- Resumen -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Resumen</p>
        <div class="space-y-1.5 text-sm">
          <div class="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Embarcaci\xF3n</span><span>{{ booking.vessel?.name ?? '\u2014' }}</span>
          </div>
          <div class="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Fecha</span><span>{{ booking.tripDate | date:'dd/MM/yyyy' }}</span>
          </div>
          <div class="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Pasajeros</span><span>{{ booking.passengers }}</span>
          </div>
          <div class="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-800 dark:border-gray-700 dark:text-white/90">
            <span>Total</span>
            <span class="text-lg text-brand-600 dark:text-brand-400">\${{ booking.totalPrice | number:'1.2-2' }}</span>
          </div>
          <div class="text-right text-xs text-gray-400">{{ tasaService.formatBs(booking.totalPrice) }}</div>
        </div>
      </div>

      <!-- M\xE9todos de pago -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Selecciona c\xF3mo pagar</p>
        <div class="space-y-3">

          <!-- Saldo / Nudos -->
          <button type="button" (click)="selectMethod('wallet')"
            class="w-full flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all"
            [ngClass]="isWallet
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10'
              : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-100 text-xl dark:bg-teal-500/15">\u2693</div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 dark:text-white/90 text-sm">Saldo de Nudos</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                <ng-container *ngIf="loadingWallet">Cargando saldo\u2026</ng-container>
                <ng-container *ngIf="!loadingWallet">
                  <span [class.text-green-600]="hasEnoughBalance" [class.text-red-500]="!hasEnoughBalance" class="dark:text-inherit font-medium">
                    {{ walletBalance | number:'1.2-2' }} nudos disponibles
                  </span>
                  <span *ngIf="!hasEnoughBalance" class="ml-1 text-red-400">(saldo insuficiente)</span>
                </ng-container>
              </p>
            </div>
            <div *ngIf="isWallet" class="h-5 w-5 flex-shrink-0 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">\u2713</div>
          </button>

          <!-- Tarjetas guardadas -->
          <button *ngIf="savedCards.length > 0" type="button" (click)="selectMethod('tdc')"
            class="w-full flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all"
            [ngClass]="isTdc
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10'
              : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-xl dark:bg-indigo-500/15">\u{1F4B3}</div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 dark:text-white/90 text-sm">Tarjeta guardada</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ savedCards.length }} tarjeta{{ savedCards.length !== 1 ? 's' : '' }} en tu cuenta</p>
            </div>
            <div *ngIf="isTdc" class="h-5 w-5 flex-shrink-0 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">\u2713</div>
          </button>

          <!-- Backend payment accounts -->
          <button *ngFor="let acc of accounts" type="button" (click)="selectMethod(acc.id.toString())"
            class="w-full flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all"
            [ngClass]="selectedAccountId === acc.id.toString()
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10'
              : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl dark:bg-gray-800">{{ acc.icon }}</div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-800 dark:text-white/90 text-sm">{{ acc.label }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{{ acc.description }}</p>
            </div>
            <div *ngIf="selectedAccountId === acc.id.toString()" class="h-5 w-5 flex-shrink-0 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">\u2713</div>
          </button>
        </div>
      </div>

      <!-- \u2500\u2500\u2500 Detalles seg\xFAn m\xE9todo seleccionado \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->

      <!-- Instrucciones de cuenta normal -->
      <div *ngIf="selectedAccount"
        class="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-500/5">
        <p class="mb-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          Realiza el pago de <strong>{{ displayAmount }}</strong> a:
        </p>
        <dl class="space-y-1">
          <div *ngFor="let f of selectedAccount.fields" class="flex gap-2 text-sm">
            <dt class="w-28 flex-shrink-0 font-medium text-blue-700 dark:text-blue-400">{{ f.label }}:</dt>
            <dd class="text-blue-800 dark:text-blue-300">{{ f.value }}</dd>
          </div>
        </dl>
      </div>

      <!-- Selecci\xF3n de tarjeta guardada -->
      <div *ngIf="isTdc && savedCards.length > 0"
        class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Selecciona una tarjeta</p>
        <div class="space-y-2">
          <label *ngFor="let card of savedCards"
            class="flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all"
            [ngClass]="selectedCardId === card.id
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10'
              : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'">
            <input type="radio" name="savedCard" [value]="card.id" [(ngModel)]="selectedCardId"
              class="sr-only" />
            <span class="text-xl">\u{1F4B3}</span>
            <div class="flex-1">
              <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ maskedCard(card.numero) }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ card.titular }} \xB7 Vence {{ card.vencimiento }}</p>
            </div>
            <div *ngIf="selectedCardId === card.id" class="h-5 w-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">\u2713</div>
          </label>
        </div>
        <p class="mt-3 text-xs text-gray-400">
          Cargo de <strong>\${{ booking.totalPrice | number:'1.2-2' }} USD</strong> a la tarjeta seleccionada.
        </p>
      </div>

      <!-- Mensaje de saldo -->
      <div *ngIf="isWallet"
        class="rounded-2xl p-5"
        [ngClass]="hasEnoughBalance
          ? 'border border-teal-200 bg-teal-50 dark:border-teal-900/30 dark:bg-teal-500/5'
          : 'border border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-500/5'">
        <div *ngIf="hasEnoughBalance">
          <p class="text-sm font-semibold text-teal-800 dark:text-teal-300">\u2713 Saldo suficiente</p>
          <p class="text-sm text-teal-700 dark:text-teal-400 mt-1">
            Se descontar\xE1n <strong>\${{ booking.totalPrice | number:'1.2-2' }}</strong> de tu saldo de
            <strong>{{ walletBalance | number:'1.2-2' }} nudos</strong>.
          </p>
          <p class="text-xs text-teal-600 dark:text-teal-500 mt-1">
            Saldo restante: {{ (walletBalance - totalUsd) | number:'1.2-2' }} nudos
          </p>
        </div>
        <div *ngIf="!hasEnoughBalance">
          <p class="text-sm font-semibold text-red-700 dark:text-red-400">\u2717 Saldo insuficiente</p>
          <p class="text-sm text-red-600 dark:text-red-400 mt-1">
            Necesitas <strong>\${{ booking.totalPrice | number:'1.2-2' }}</strong> pero solo tienes
            <strong>{{ walletBalance | number:'1.2-2' }} nudos</strong>.
          </p>
          <a routerLink="/mis-metodos-pago"
            class="mt-2 inline-block text-xs font-semibold text-brand-500 hover:underline">
            + Recargar saldo \u2192
          </a>
        </div>
      </div>

      <!-- Formulario extra (referencia / comprobante) para m\xE9todos que lo requieren -->
      <form *ngIf="selectedAccount" [formGroup]="payForm" class="space-y-4">
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Datos del pago</p>
          <div class="space-y-4">

            <!-- Moneda + Monto -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Moneda</label>
                <select formControlName="currency"
                  class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
                  <option value="USD">USD</option>
                  <option value="BS">Bol\xEDvares (REF)</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Monto</label>
                <input type="number" formControlName="amount" step="0.01"
                  class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
              </div>
            </div>

            <!-- Nota de pago en exceso -->
            <div class="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-700 dark:bg-amber-500/5 dark:border-amber-800/30 dark:text-amber-400">
              \u{1F4A1} Si pagas m\xE1s de <strong>\${{ booking.totalPrice | number:'1.2-2' }} USD</strong>, el excedente se abonar\xE1 autom\xE1ticamente a tu saldo de nudos una vez verificado el pago.
            </div>

            <!-- Referencia -->
            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">N\xB0 de referencia</label>
              <input type="text" formControlName="transactionRef" placeholder="N\xFAmero de confirmaci\xF3n de la transferencia"
                class="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
            </div>

            <!-- Comprobante -->
            <div *ngIf="selectedAccount.method !== 'CASH'">
              <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Comprobante (opcional)</label>
              <app-image-upload (uploaded)="onProofUploaded($event)" />
            </div>

            <!-- Notas -->
            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-600 dark:text-gray-400">Notas (opcional)</label>
              <textarea formControlName="notes" rows="2" placeholder="Alguna observaci\xF3n..."
                class="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"></textarea>
            </div>
          </div>
        </div>
      </form>

      <!-- Error -->
      <div *ngIf="errorMsg"
        class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
        {{ errorMsg }}
      </div>

      <!-- Submit -->
      <div class="flex gap-3 justify-end">
        <a routerLink="/mis-reservas"
          class="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
          Cancelar
        </a>
        <button type="button" (click)="registrarPago()"
          [disabled]="submitting || !canSubmit()"
          class="rounded-xl bg-brand-500 px-7 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition">
          {{ submitting ? 'Procesando...' : 'Confirmar pago' }}
        </button>
      </div>

    </ng-container>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagarReservaComponent, { className: "PagarReservaComponent", filePath: "src/app/pages/mis-reservas/pagar-reserva/pagar-reserva.component.ts", lineNumber: 35 });
})();
export {
  PagarReservaComponent
};
//# sourceMappingURL=chunk-HS3P4EQL.js.map
