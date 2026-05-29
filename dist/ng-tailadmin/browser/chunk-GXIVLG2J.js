import {
  PagosService
} from "./chunk-KAI4EMGQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  NgClass,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/pagos/pages/detalle-pago/detalle-pago.component.ts
function DetallePagoComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DetallePagoComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generarFactura());
    });
    \u0275\u0275text(1, " \u{1F9FE} Generar factura ");
    \u0275\u0275elementEnd();
  }
}
function DetallePagoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Cargando pago...");
    \u0275\u0275elementEnd()();
  }
}
function DetallePagoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function DetallePagoComponent_ng_container_14_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 26);
    \u0275\u0275text(2, "Verificado el");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ctx_r1.pago.verifiedAt));
  }
}
function DetallePagoComponent_ng_container_14_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 26);
    \u0275\u0275text(2, "Verificado por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.pago.verifiedBy.firstName, " ", ctx_r1.pago.verifiedBy.lastName);
  }
}
function DetallePagoComponent_ng_container_14_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p", 39);
    \u0275\u0275text(2, "Referencia / Nro. de transacci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5, "\u{1F522}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.pago.transactionRef);
  }
}
function DetallePagoComponent_ng_container_14_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " \u26A0\uFE0F Este pago no tiene n\xFAmero de referencia registrado. ");
    \u0275\u0275elementEnd();
  }
}
function DetallePagoComponent_ng_container_14_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p", 26);
    \u0275\u0275text(2, "Notas del cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pago.notes);
  }
}
function DetallePagoComponent_ng_container_14_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "p", 46);
    \u0275\u0275text(2, "Motivo de rechazo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pago.rejectionReason);
  }
}
function DetallePagoComponent_ng_container_14_div_60_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 51);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_60_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.verificar());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_60_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showRejectForm = true);
    });
    \u0275\u0275text(4, " \u2717 Rechazar pago ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Procesando..." : "\u2713 Verificar pago", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function DetallePagoComponent_ng_container_14_div_60_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 54);
    \u0275\u0275text(2, " Motivo del rechazo ");
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 56);
    \u0275\u0275twoWayListener("ngModelChange", function DetallePagoComponent_ng_container_14_div_60_div_4_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.rejectionReason, $event) || (ctx_r1.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 57)(7, "button", 58);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_60_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmarRechazo());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_60_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.showRejectForm = false;
      return \u0275\u0275resetView(ctx_r1.rejectionReason = "");
    });
    \u0275\u0275text(10, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rejectionReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.rejectionReason.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Procesando..." : "Confirmar rechazo", " ");
  }
}
function DetallePagoComponent_ng_container_14_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2", 27);
    \u0275\u0275text(2, "\u26A1 Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DetallePagoComponent_ng_container_14_div_60_div_3_Template, 5, 3, "div", 48)(4, DetallePagoComponent_ng_container_14_div_60_div_4_Template, 11, 3, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.showRejectForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRejectForm);
  }
}
function DetallePagoComponent_ng_container_14_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_ng_container_65_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imageZoom = true);
    });
    \u0275\u0275element(2, "img", 61);
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4, " \u{1F50D} Click para ampliar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 63);
    \u0275\u0275text(6, " \u2197 Abrir imagen completa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.proofImageUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.proofImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function DetallePagoComponent_ng_container_14_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 20);
    \u0275\u0275text(2, "\u{1F5BC}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 65);
    \u0275\u0275text(4, "Sin captura adjunta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6, "El cliente no subi\xF3 un comprobante.");
    \u0275\u0275elementEnd()();
  }
}
function DetallePagoComponent_ng_container_14_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_68_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imageZoom = false);
    });
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "button", 69);
    \u0275\u0275listener("click", function DetallePagoComponent_ng_container_14_div_68_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imageZoom = false);
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.proofImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function DetallePagoComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24)(12, "p", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 2)(17, "h2", 27);
    \u0275\u0275text(18, "\u{1F464} Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 28)(20, "div")(21, "p", 26);
    \u0275\u0275text(22, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 29);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "p", 26);
    \u0275\u0275text(27, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 29);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 2)(31, "h2", 27);
    \u0275\u0275text(32, "\u{1F4B3} Detalles del pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30)(34, "div")(35, "p", 26);
    \u0275\u0275text(36, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 29);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "p", 26);
    \u0275\u0275text(41, "Tipo de servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 29);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "p", 26);
    \u0275\u0275text(46, "ID de referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 29);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "p", 26);
    \u0275\u0275text(51, "Fecha de registro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 29);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, DetallePagoComponent_ng_container_14_div_54_Template, 5, 1, "div", 11)(55, DetallePagoComponent_ng_container_14_div_55_Template, 5, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, DetallePagoComponent_ng_container_14_div_56_Template, 8, 1, "div", 31)(57, DetallePagoComponent_ng_container_14_div_57_Template, 2, 0, "div", 32)(58, DetallePagoComponent_ng_container_14_div_58_Template, 5, 1, "div", 31)(59, DetallePagoComponent_ng_container_14_div_59_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, DetallePagoComponent_ng_container_14_div_60_Template, 5, 2, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 35)(62, "div", 2)(63, "h2", 27);
    \u0275\u0275text(64, "\u{1F4F7} Captura de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, DetallePagoComponent_ng_container_14_ng_container_65_Template, 7, 2, "ng-container", 36)(66, DetallePagoComponent_ng_container_14_ng_template_66_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(68, DetallePagoComponent_ng_container_14_div_68_Template, 4, 1, "div", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const sinCaptura_r7 = \u0275\u0275reference(67);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-green-500", ctx_r1.pago.status === "VERIFIED")("text-yellow-500", ctx_r1.pago.status === "PENDING")("text-red-500", ctx_r1.pago.status === "REJECTED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pago.status === "VERIFIED" ? "\u2705" : ctx_r1.pago.status === "REJECTED" ? "\u274C" : "\u23F3", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pago #", ctx_r1.pago.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClase(ctx_r1.pago.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.pago.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmtAmount(ctx_r1.pago));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pago.currency);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.pago.client.firstName, " ", ctx_r1.pago.client.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pago.client.email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.methodLabels[ctx_r1.pago.method] ?? ctx_r1.pago.method);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.typeLabels[ctx_r1.pago.referenceType] ?? ctx_r1.pago.referenceType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r1.pago.referenceId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(ctx_r1.pago.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.verifiedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.verifiedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.transactionRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pago.transactionRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.status === "REJECTED" && ctx_r1.pago.rejectionReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pago.status === "PENDING" && ctx_r1.isMaster);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.proofImageUrl())("ngIfElse", sinCaptura_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.imageZoom);
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
  WALLET_TOPUP: "\u2693 Recarga de nudos"
};
var DetallePagoComponent = class _DetallePagoComponent {
  service = inject(PagosService);
  route = inject(ActivatedRoute);
  auth = inject(AuthService);
  get isMaster() {
    return this.auth.role() === "MASTER";
  }
  loading = true;
  errorMessage = "";
  pago = null;
  saving = false;
  showRejectForm = false;
  rejectionReason = "";
  imageZoom = false;
  methodLabels = METHOD_LABELS;
  typeLabels = TYPE_LABELS;
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getById(id).subscribe({
      next: (p) => {
        this.pago = p;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el pago.";
        this.loading = false;
      }
    });
  }
  verificar() {
    if (!this.pago)
      return;
    const userId = this.auth.user()?.id;
    if (!userId)
      return;
    this.saving = true;
    this.service.verify(this.pago.id, { verifiedById: userId }).subscribe({
      next: (p) => {
        this.pago = p;
        this.saving = false;
      },
      error: () => {
        alert("Error al verificar el pago.");
        this.saving = false;
      }
    });
  }
  confirmarRechazo() {
    if (!this.pago || !this.rejectionReason.trim())
      return;
    this.saving = true;
    this.service.reject(this.pago.id, { rejectionReason: this.rejectionReason.trim() }).subscribe({
      next: (p) => {
        this.pago = p;
        this.saving = false;
        this.showRejectForm = false;
      },
      error: () => {
        alert("Error al rechazar el pago.");
        this.saving = false;
      }
    });
  }
  generarFactura() {
    if (!this.pago)
      return;
    const p = this.pago;
    const fecha = p.verifiedAt ? new Date(p.verifiedAt).toLocaleDateString("es-VE", { day: "2-digit", month: "long", year: "numeric" }) : (/* @__PURE__ */ new Date()).toLocaleDateString("es-VE", { day: "2-digit", month: "long", year: "numeric" });
    const monto = this.fmtAmount(p);
    const metodo = METHOD_LABELS[p.method] ?? p.method;
    const tipo = TYPE_LABELS[p.referenceType] ?? p.referenceType;
    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Factura #${p.id}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a2e; background: #fff; padding: 40px; }
          .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0070f3; padding-bottom: 24px; margin-bottom: 24px; }
          .brand { font-size: 24px; font-weight: 800; color: #0070f3; letter-spacing: -0.5px; }
          .brand span { color: #1a1a2e; }
          .invoice-num { text-align: right; }
          .invoice-num h2 { font-size: 22px; font-weight: 700; color: #0070f3; }
          .invoice-num p { font-size: 13px; color: #666; margin-top: 4px; }
          .badge { display: inline-block; background: #d1fae5; color: #065f46; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-top: 8px; }
          .section { margin-bottom: 20px; }
          .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 10px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .field label { font-size: 11px; color: #888; display: block; margin-bottom: 2px; }
          .field p { font-size: 14px; font-weight: 600; color: #1a1a2e; }
          .amount-box { background: #f0f7ff; border: 2px solid #0070f3; border-radius: 12px; padding: 20px 24px; text-align: center; margin: 24px 0; }
          .amount-box .label { font-size: 12px; color: #555; text-transform: uppercase; letter-spacing: 0.06em; }
          .amount-box .value { font-size: 36px; font-weight: 900; color: #0070f3; margin-top: 4px; }
          .ref-box { background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; font-family: monospace; font-size: 15px; font-weight: 700; color: #374151; text-align: center; }
          .footer { margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 11px; color: #aaa; text-align: center; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">MAR\xCDTI<span>MO</span></div>
            <p style="font-size:13px;color:#666;margin-top:4px;">Plataforma de turismo acu\xE1tico</p>
          </div>
          <div class="invoice-num">
            <h2>RECIBO DE PAGO</h2>
            <p>Nro. ${String(p.id).padStart(6, "0")}</p>
            <p>${fecha}</p>
            <span class="badge">\u2713 VERIFICADO</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Datos del cliente</div>
          <div class="grid">
            <div class="field"><label>Nombre</label><p>${p.client.firstName} ${p.client.lastName}</p></div>
            <div class="field"><label>Correo electr\xF3nico</label><p>${p.client.email}</p></div>
          </div>
        </div>

        <div class="amount-box">
          <div class="label">Monto pagado</div>
          <div class="value">${monto}</div>
        </div>

        <div class="section">
          <div class="section-title">Detalles del pago</div>
          <div class="grid">
            <div class="field"><label>M\xE9todo de pago</label><p>${metodo}</p></div>
            <div class="field"><label>Tipo de servicio</label><p>${tipo}</p></div>
            <div class="field"><label>ID de referencia</label><p>#${p.referenceId}</p></div>
            <div class="field"><label>Moneda</label><p>${p.currency}</p></div>
          </div>
        </div>

        ${p.transactionRef ? `
        <div class="section">
          <div class="section-title">Referencia de transacci\xF3n</div>
          <div class="ref-box">${p.transactionRef}</div>
        </div>` : ""}

        ${p.verifiedBy ? `
        <div class="section">
          <div class="section-title">Verificado por</div>
          <div class="field"><p>${p.verifiedBy.firstName} ${p.verifiedBy.lastName}</p></div>
        </div>` : ""}

        <div class="footer">
          Este documento es un comprobante oficial de pago emitido por la plataforma MAR\xCDTIMO.<br/>
          Para consultas: soporte@maritimo.com
        </div>
      </body>
      </html>
    `;
    const win = window.open("", "_blank", "width=800,height=900");
    if (!win)
      return;
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
  proofImageUrl() {
    const url = this.pago?.proofImageUrl;
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  statusClase(s) {
    return s === "VERIFIED" ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400" : s === "REJECTED" ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400";
  }
  statusLabel(s) {
    return s === "VERIFIED" ? "\u2713 Verificado" : s === "REJECTED" ? "\u2717 Rechazado" : "\u23F3 Pendiente";
  }
  fmtAmount(p) {
    const n = Number(p.amount);
    if (p.currency === "VES" || p.currency === "BS") {
      return `Bs. ${n.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (p.currency === "USDT")
      return `${n.toFixed(2)} USDT`;
    return `$${n.toFixed(2)}`;
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("es-VE", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  static \u0275fac = function DetallePagoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetallePagoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallePagoComponent, selectors: [["app-detalle-pago"]], decls: 15, vars: 4, consts: [["sinCaptura", ""], [1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-2"], ["class", "inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shadow-sm", 3, "click", 4, "ngIf"], ["routerLink", "/pagos", 1, "inline-flex", "items-center", "gap-1", "rounded-lg", "border", "border-gray-300", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "flex items-center justify-center py-16 gap-3", 4, "ngIf"], ["class", "rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-brand-600", "shadow-sm", 3, "click"], [1, "flex", "items-center", "justify-center", "py-16", "gap-3"], [1, "text-3xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-3"], [1, "space-y-5", "lg:col-span-2"], [1, "flex", "items-center", "gap-3", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-4xl"], [1, "flex-1"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-bold", 3, "ngClass"], [1, "text-right"], [1, "text-2xl", "font-black", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "mb-4", "text-sm", "font-semibold", "text-gray-600", "dark:text-gray-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "mt-1", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-3"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700 dark:border-yellow-800/30 dark:bg-yellow-500/10 dark:text-yellow-400", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/30 dark:bg-red-500/10", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "space-y-5"], [4, "ngIf", "ngIfElse"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "mt-4"], [1, "mb-2", "text-xs", "text-gray-400"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-brand-200", "bg-brand-50", "px-4", "py-3", "dark:border-brand-800/30", "dark:bg-brand-500/10"], [1, "text-lg"], [1, "font-mono", "text-base", "font-bold", "tracking-widest", "text-brand-700", "dark:text-brand-300"], [1, "mt-4", "rounded-xl", "border", "border-yellow-200", "bg-yellow-50", "px-4", "py-3", "text-sm", "text-yellow-700", "dark:border-yellow-800/30", "dark:bg-yellow-500/10", "dark:text-yellow-400"], [1, "mt-1", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "mt-4", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "dark:border-red-900/30", "dark:bg-red-500/10"], [1, "text-xs", "font-semibold", "text-red-600", "dark:text-red-400"], [1, "mt-1", "text-sm", "text-red-700", "dark:text-red-300"], ["class", "flex flex-wrap gap-3", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-green-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-green-600", "disabled:opacity-60", "shadow-sm", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-red-300", "px-6", "py-2.5", "text-sm", "font-bold", "text-red-600", "hover:bg-red-50", "disabled:opacity-60", "dark:border-red-800", "dark:text-red-400", 3, "click", "disabled"], [1, "space-y-3"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["rows", "3", "placeholder", "Describe el motivo del rechazo (referencia incorrecta, monto no coincide, captura ilegible...)", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-red-400", "focus:ring-2", "focus:ring-red-400/10", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "rounded-lg", "bg-red-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-red-600", "disabled:opacity-50", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-gray-300", "px-5", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "relative", "overflow-hidden", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "cursor-zoom-in", 3, "click"], ["alt", "Comprobante de pago", 1, "w-full", "object-cover", "transition-transform", "hover:scale-105", 2, "max-height", "380px", "object-fit", "contain", "background", "#f8f9fa", 3, "src"], [1, "absolute", "bottom-2", "right-2", "rounded-lg", "bg-black/50", "px-2", "py-1", "text-xs", "text-white", "backdrop-blur-sm"], ["target", "_blank", 1, "mt-3", "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "border", "border-gray-200", "py-2", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "href"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "border-2", "border-dashed", "border-gray-200", "py-10", "dark:border-gray-700"], [1, "mt-3", "text-sm", "font-medium", "text-gray-500"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "backdrop-blur-sm", 3, "click"], ["alt", "Comprobante ampliado", 1, "max-h-[90vh]", "max-w-[90vw]", "rounded-xl", "shadow-2xl", "object-contain", 3, "src"], [1, "absolute", "right-4", "top-4", "rounded-full", "bg-white/20", "p-2", "text-white", "hover:bg-white/30", 3, "click"]], template: function DetallePagoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "h1", 4);
      \u0275\u0275text(5, "\u{1F4B3} Detalle del pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Informaci\xF3n completa del comprobante.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275template(9, DetallePagoComponent_button_9_Template, 2, 0, "button", 7);
      \u0275\u0275elementStart(10, "a", 8);
      \u0275\u0275text(11, " \u2190 Volver ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, DetallePagoComponent_div_12_Template, 5, 0, "div", 9)(13, DetallePagoComponent_div_13_Template, 2, 1, "div", 10)(14, DetallePagoComponent_ng_container_14_Template, 69, 29, "ng-container", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", (ctx.pago == null ? null : ctx.pago.status) === "VERIFIED");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pago);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetallePagoComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-pago", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 dark:text-white/90">\u{1F4B3} Detalle del pago</h1>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Informaci\xF3n completa del comprobante.</p>
      </div>
      <div class="flex items-center gap-2">
        <button *ngIf="pago?.status === 'VERIFIED'" (click)="generarFactura()"
          class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 shadow-sm">
          \u{1F9FE} Generar factura
        </button>
        <a routerLink="/pagos"
          class="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
          \u2190 Volver
        </a>
      </div>
    </div>
  </div>

  <!-- Loading / Error -->
  <div *ngIf="loading" class="flex items-center justify-center py-16 gap-3">
    <div class="text-3xl animate-bounce">\u{1F4B3}</div>
    <p class="text-sm text-gray-400">Cargando pago...</p>
  </div>
  <div *ngIf="!loading && errorMessage"
    class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <ng-container *ngIf="!loading && pago">

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

      <!-- Columna izquierda: datos + acciones -->
      <div class="space-y-5 lg:col-span-2">

        <!-- Estado badge grande -->
        <div class="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <span class="text-4xl"
            [class.text-green-500]="pago.status === 'VERIFIED'"
            [class.text-yellow-500]="pago.status === 'PENDING'"
            [class.text-red-500]="pago.status === 'REJECTED'">
            {{ pago.status === 'VERIFIED' ? '\u2705' : pago.status === 'REJECTED' ? '\u274C' : '\u23F3' }}
          </span>
          <div class="flex-1">
            <p class="text-lg font-bold text-gray-800 dark:text-white/90">Pago #{{ pago.id }}</p>
            <span class="mt-1 inline-flex rounded-full px-3 py-1 text-xs font-bold" [ngClass]="statusClase(pago.status)">
              {{ statusLabel(pago.status) }}
            </span>
          </div>
          <div class="text-right">
            <p class="text-2xl font-black text-gray-800 dark:text-white/90">{{ fmtAmount(pago) }}</p>
            <p class="text-xs text-gray-400">{{ pago.currency }}</p>
          </div>
        </div>

        <!-- Datos del cliente -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">\u{1F464} Cliente</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="text-xs text-gray-400">Nombre completo</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ pago.client.firstName }} {{ pago.client.lastName }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Correo electr\xF3nico</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ pago.client.email }}</p>
            </div>
          </div>
        </div>

        <!-- Detalles del pago -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">\u{1F4B3} Detalles del pago</h2>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p class="text-xs text-gray-400">M\xE9todo</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ methodLabels[pago.method] ?? pago.method }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Tipo de servicio</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ typeLabels[pago.referenceType] ?? pago.referenceType }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">ID de referencia</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">#{{ pago.referenceId }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Fecha de registro</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ fmtDate(pago.createdAt) }}</p>
            </div>
            <div *ngIf="pago.verifiedAt">
              <p class="text-xs text-gray-400">Verificado el</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ fmtDate(pago.verifiedAt) }}</p>
            </div>
            <div *ngIf="pago.verifiedBy">
              <p class="text-xs text-gray-400">Verificado por</p>
              <p class="mt-1 font-semibold text-gray-800 dark:text-white/90">{{ pago.verifiedBy.firstName }} {{ pago.verifiedBy.lastName }}</p>
            </div>
          </div>

          <!-- Referencia bancaria destacada -->
          <div *ngIf="pago.transactionRef" class="mt-4">
            <p class="mb-2 text-xs text-gray-400">Referencia / Nro. de transacci\xF3n</p>
            <div class="flex items-center gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 dark:border-brand-800/30 dark:bg-brand-500/10">
              <span class="text-lg">\u{1F522}</span>
              <span class="font-mono text-base font-bold tracking-widest text-brand-700 dark:text-brand-300">{{ pago.transactionRef }}</span>
            </div>
          </div>
          <div *ngIf="!pago.transactionRef" class="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700 dark:border-yellow-800/30 dark:bg-yellow-500/10 dark:text-yellow-400">
            \u26A0\uFE0F Este pago no tiene n\xFAmero de referencia registrado.
          </div>

          <!-- Notas -->
          <div *ngIf="pago.notes" class="mt-4">
            <p class="text-xs text-gray-400">Notas del cliente</p>
            <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">{{ pago.notes }}</p>
          </div>

          <!-- Raz\xF3n de rechazo -->
          <div *ngIf="pago.status === 'REJECTED' && pago.rejectionReason" class="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/30 dark:bg-red-500/10">
            <p class="text-xs font-semibold text-red-600 dark:text-red-400">Motivo de rechazo</p>
            <p class="mt-1 text-sm text-red-700 dark:text-red-300">{{ pago.rejectionReason }}</p>
          </div>
        </div>

        <!-- Acciones (solo PENDING, solo MASTER) -->
        <div *ngIf="pago.status === 'PENDING' && isMaster" class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">\u26A1 Acciones</h2>

          <div *ngIf="!showRejectForm" class="flex flex-wrap gap-3">
            <button (click)="verificar()" [disabled]="saving"
              class="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-600 disabled:opacity-60 shadow-sm">
              {{ saving ? 'Procesando...' : '\u2713 Verificar pago' }}
            </button>
            <button (click)="showRejectForm = true" [disabled]="saving"
              class="inline-flex items-center gap-2 rounded-lg border border-red-300 px-6 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 disabled:opacity-60 dark:border-red-800 dark:text-red-400">
              \u2717 Rechazar pago
            </button>
          </div>

          <!-- Formulario de rechazo -->
          <div *ngIf="showRejectForm" class="space-y-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Motivo del rechazo <span class="text-red-500">*</span>
            </label>
            <textarea [(ngModel)]="rejectionReason" rows="3"
              placeholder="Describe el motivo del rechazo (referencia incorrecta, monto no coincide, captura ilegible...)"
              class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/10 dark:border-gray-700 dark:text-white/90"></textarea>
            <div class="flex gap-3">
              <button (click)="confirmarRechazo()" [disabled]="saving || !rejectionReason.trim()"
                class="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600 disabled:opacity-50">
                {{ saving ? 'Procesando...' : 'Confirmar rechazo' }}
              </button>
              <button (click)="showRejectForm = false; rejectionReason = ''"
                class="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
                Cancelar
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Columna derecha: captura de pantalla -->
      <div class="space-y-5">

        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-400">\u{1F4F7} Captura de pago</h2>

          <ng-container *ngIf="proofImageUrl(); else sinCaptura">
            <!-- Imagen -->
            <div class="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 cursor-zoom-in"
              (click)="imageZoom = true">
              <img [src]="proofImageUrl()" alt="Comprobante de pago"
                class="w-full object-cover transition-transform hover:scale-105"
                style="max-height: 380px; object-fit: contain; background: #f8f9fa;" />
              <div class="absolute bottom-2 right-2 rounded-lg bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                \u{1F50D} Click para ampliar
              </div>
            </div>
            <a [href]="proofImageUrl()" target="_blank"
              class="mt-3 flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
              \u2197 Abrir imagen completa
            </a>
          </ng-container>

          <ng-template #sinCaptura>
            <div class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 dark:border-gray-700">
              <span class="text-4xl">\u{1F5BC}\uFE0F</span>
              <p class="mt-3 text-sm font-medium text-gray-500">Sin captura adjunta</p>
              <p class="mt-1 text-xs text-gray-400">El cliente no subi\xF3 un comprobante.</p>
            </div>
          </ng-template>
        </div>

      </div>

    </div>

    <!-- Modal zoom imagen -->
    <div *ngIf="imageZoom"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      (click)="imageZoom = false">
      <img [src]="proofImageUrl()" alt="Comprobante ampliado"
        class="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain" />
      <button (click)="imageZoom = false"
        class="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30">\u2715</button>
    </div>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallePagoComponent, { className: "DetallePagoComponent", filePath: "src/app/pages/pagos/pages/detalle-pago/detalle-pago.component.ts", lineNumber: 32 });
})();
export {
  DetallePagoComponent
};
//# sourceMappingURL=chunk-GXIVLG2J.js.map
