import {
  ReservationChatComponent
} from "./chunk-RVJMCZTW.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import "./chunk-YL27M2LI.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import "./chunk-7NRIB5KE.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
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
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate2
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component.ts
function DetalleAlquilerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Cargando detalle del charter... ");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function DetalleAlquilerComponent_ng_container_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Reserva creada el ", ctx_r0.formatDateTime(ctx_r0.alquiler.createdAt), " ");
  }
}
function DetalleAlquilerComponent_ng_container_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span");
    \u0275\u0275text(2, "\u26D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 54);
    \u0275\u0275text(5, "Motivo de cancelaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.cancellationReason);
  }
}
function DetalleAlquilerComponent_ng_container_16_div_8_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 63);
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.alquiler.status) > i_r2 ? "bg-brand-400" : "bg-gray-200 dark:bg-gray-700");
  }
}
function DetalleAlquilerComponent_ng_container_16_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DetalleAlquilerComponent_ng_container_16_div_8_ng_container_2_div_6_Template, 1, 1, "div", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r2 = ctx.index;
    const last_r4 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.alquiler.status) >= i_r2 ? "bg-brand-500 text-white shadow-md" : "bg-gray-100 text-gray-400 dark:bg-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r3.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.stepIndex(ctx_r0.alquiler.status) >= i_r2 ? "text-brand-600 dark:text-brand-400" : "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r4);
  }
}
function DetalleAlquilerComponent_ng_container_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275template(2, DetalleAlquilerComponent_ng_container_16_div_8_ng_container_2_Template, 7, 5, "ng-container", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.steps);
  }
}
function DetalleAlquilerComponent_ng_container_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl(ctx_r0.alquiler.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r0.alquiler.vessel.name);
  }
}
function DetalleAlquilerComponent_ng_container_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u26F5 ");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_ng_container_16_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F465} ", ctx_r0.alquiler.vessel.capacity, " pax");
  }
}
function DetalleAlquilerComponent_ng_container_16_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1FAAA} ", ctx_r0.alquiler.vessel.licensePlate);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 80);
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.imageUrl(cap_r5.photoUrl), \u0275\u0275sanitizeUrl);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cap_r5.firstName[0], "", cap_r5.lastName[0], " ");
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verificado ");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1FAAA} Lic. ", cap_r5.licenseNumber);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", cap_r5.phone);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85)(1, "span", 86);
    \u0275\u0275text(2, "\u{1FAAA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "p", 88);
    \u0275\u0275text(5, "C\xE9dula (frente)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.imageUrl(cap_r5.documentFrontUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(cap_r5.documentId ?? "Ver documento");
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85)(1, "span", 86);
    \u0275\u0275text(2, "\u{1FAAA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "p", 88);
    \u0275\u0275text(5, "C\xE9dula (reverso)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 91);
    \u0275\u0275text(7, "Ver documento");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.imageUrl(cap_r5.documentBackUrl), \u0275\u0275sanitizeUrl);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85)(1, "span", 92);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "p", 88);
    \u0275\u0275text(5, "Licencia n\xE1utica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.imageUrl(cap_r5.licenseDocumentUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(cap_r5.licenseNumber ?? "Ver documento");
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93);
    \u0275\u0275text(1, "Sin documentos adjuntos.");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "div", 68);
    \u0275\u0275template(3, DetalleAlquilerComponent_ng_container_16_ng_container_27_img_3_Template, 1, 1, "img", 69)(4, DetalleAlquilerComponent_ng_container_16_ng_container_27_span_4_Template, 2, 2, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 71)(7, "p", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DetalleAlquilerComponent_ng_container_16_ng_container_27_span_9_Template, 4, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DetalleAlquilerComponent_ng_container_16_ng_container_27_p_10_Template, 2, 1, "p", 74)(11, DetalleAlquilerComponent_ng_container_16_ng_container_27_p_11_Template, 2, 1, "p", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 75)(13, "p", 76);
    \u0275\u0275text(14, "Documentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 77);
    \u0275\u0275template(16, DetalleAlquilerComponent_ng_container_16_ng_container_27_a_16_Template, 9, 2, "a", 78)(17, DetalleAlquilerComponent_ng_container_16_ng_container_27_a_17_Template, 9, 1, "a", 78)(18, DetalleAlquilerComponent_ng_container_16_ng_container_27_a_18_Template, 9, 2, "a", 78)(19, DetalleAlquilerComponent_ng_container_16_ng_container_27_p_19_Template, 2, 0, "p", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cap_r5 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cap_r5.photoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cap_r5.photoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", cap_r5.firstName, " ", cap_r5.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cap_r5.verificationStatus === "APROBADO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cap_r5.licenseNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cap_r5.phone);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", cap_r5.documentFrontUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cap_r5.documentBackUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cap_r5.licenseDocumentUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cap_r5.documentFrontUrl && !cap_r5.documentBackUrl && !cap_r5.licenseDocumentUrl);
  }
}
function DetalleAlquilerComponent_ng_container_16_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "div", 94);
    \u0275\u0275text(3, "\u{1F468}\u200D\u2708\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.alquiler.captain.firstName, " ", ctx_r0.alquiler.captain.lastName, " ");
  }
}
function DetalleAlquilerComponent_ng_container_16_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1, " Sin capit\xE1n asignado ");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_ng_container_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p", 27);
    \u0275\u0275text(2, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", ctx_r0.alquiler.destination.name, " ");
  }
}
function DetalleAlquilerComponent_ng_container_16_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 97);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 38);
    \u0275\u0275text(5, "Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r0.alquiler.vessel.provider == null ? null : ctx_r0.alquiler.vessel.provider.companyName) ?? "\u2014");
  }
}
function DetalleAlquilerComponent_ng_container_16_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 98);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5, "Pago confirmado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.alquiler.confirmedAt));
  }
}
function DetalleAlquilerComponent_ng_container_16_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 99);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5, "Charter iniciado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.alquiler.startedAt));
  }
}
function DetalleAlquilerComponent_ng_container_16_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 100);
    \u0275\u0275text(2, "\u{1F3C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5, "Charter completado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.alquiler.completedAt));
  }
}
function DetalleAlquilerComponent_ng_container_16_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "p", 102);
    \u0275\u0275text(2, "Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.specialRequests);
  }
}
function DetalleAlquilerComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 15)(3, "div", 16)(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DetalleAlquilerComponent_ng_container_16_span_6_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DetalleAlquilerComponent_ng_container_16_div_7_Template, 8, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DetalleAlquilerComponent_ng_container_16_div_8_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "div", 22)(11, "div", 23);
    \u0275\u0275template(12, DetalleAlquilerComponent_ng_container_16_div_12_Template, 2, 2, "div", 24)(13, DetalleAlquilerComponent_ng_container_16_div_13_Template, 2, 0, "div", 25);
    \u0275\u0275elementStart(14, "div", 26)(15, "p", 27);
    \u0275\u0275text(16, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29)(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, DetalleAlquilerComponent_ng_container_16_span_22_Template, 2, 1, "span", 11)(23, DetalleAlquilerComponent_ng_container_16_span_23_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 30)(25, "p", 27);
    \u0275\u0275text(26, "Capit\xE1n asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, DetalleAlquilerComponent_ng_container_16_ng_container_27_Template, 20, 11, "ng-container", 11)(28, DetalleAlquilerComponent_ng_container_16_ng_container_28_Template, 6, 2, "ng-container", 11)(29, DetalleAlquilerComponent_ng_container_16_p_29_Template, 2, 0, "p", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, DetalleAlquilerComponent_ng_container_16_div_30_Template, 5, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 33)(32, "div", 1)(33, "p", 34);
    \u0275\u0275text(34, "Partes involucradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 36)(37, "div", 37);
    \u0275\u0275text(38, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "p", 38);
    \u0275\u0275text(41, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 39);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 40);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, DetalleAlquilerComponent_ng_container_16_div_46_Template, 8, 1, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 1)(48, "p", 34);
    \u0275\u0275text(49, "Per\xEDodo del charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 42)(51, "div")(52, "p", 40);
    \u0275\u0275text(53, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 43);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "p", 40);
    \u0275\u0275text(58, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 43);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "p", 40);
    \u0275\u0275text(63, "Duraci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 43);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "p", 40);
    \u0275\u0275text(68, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 43);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 1)(72, "p", 34);
    \u0275\u0275text(73, "Resumen de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 44)(75, "div")(76, "p", 40);
    \u0275\u0275text(77, "Precio / noche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 43);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div")(82, "p", 40);
    \u0275\u0275text(83, "Noches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 43);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div")(87, "p", 40);
    \u0275\u0275text(88, "Total pagado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "p", 45);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 1)(93, "p", 34);
    \u0275\u0275text(94, "Historial de eventos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 46)(96, "div", 16)(97, "span", 47);
    \u0275\u0275text(98, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 48)(100, "span", 49);
    \u0275\u0275text(101, "Reserva creada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 40);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(104, DetalleAlquilerComponent_ng_container_16_div_104_Template, 8, 1, "div", 50)(105, DetalleAlquilerComponent_ng_container_16_div_105_Template, 8, 1, "div", 50)(106, DetalleAlquilerComponent_ng_container_16_div_106_Template, 8, 1, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(107, DetalleAlquilerComponent_ng_container_16_div_107_Template, 5, 1, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(ctx_r0.alquiler.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(ctx_r0.alquiler.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.status !== "CANCELLED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.status === "CANCELLED" && ctx_r0.alquiler.cancellationReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.status !== "CANCELLED");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.alquiler.vessel == null ? null : ctx_r0.alquiler.vessel.photos == null ? null : ctx_r0.alquiler.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.alquiler.vessel == null ? null : ctx_r0.alquiler.vessel.photos == null ? null : ctx_r0.alquiler.vessel.photos[0]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.vessel.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.vessel.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.vessel.capacity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.vessel.licensePlate);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.alquiler.captainProfile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.alquiler.captainProfile && ctx_r0.alquiler.captain);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.alquiler.captainProfile && !ctx_r0.alquiler.captain);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.destination);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate2("", ctx_r0.alquiler.client.firstName, " ", ctx_r0.alquiler.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.client.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.vessel.provider);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.alquiler.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.alquiler.endDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.durationLabel(ctx_r0.alquiler.days));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.alquiler.passengers, " pax");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(80, 31, ctx_r0.alquiler.days > 0 ? ctx_r0.alquiler.totalPrice / ctx_r0.alquiler.days : ctx_r0.alquiler.totalPrice, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.days);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(91, 34, ctx_r0.alquiler.totalPrice, "1.2-2"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.alquiler.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.confirmedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.startedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.specialRequests);
  }
}
function DetalleAlquilerComponent_app_reservation_chat_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reservation-chat", 104);
    \u0275\u0275listener("closeChat", function DetalleAlquilerComponent_app_reservation_chat_17_Template_app_reservation_chat_closeChat_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.chatOpen = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("bookingId", ctx_r0.alquiler.id)("clientUserId", ctx_r0.chatClientId)("providerUserId", ctx_r0.chatProviderId)("title", ctx_r0.chatTitle);
  }
}
var DetalleAlquilerComponent = class _DetalleAlquilerComponent {
  service = inject(AlquileresService);
  route = inject(ActivatedRoute);
  auth = inject(AuthService);
  loading = false;
  errorMessage = "";
  alquiler = null;
  chatOpen = false;
  get isMaster() {
    const r = this.auth.role();
    return r === "MASTER" || r === "ADMINISTRADOR";
  }
  get backRoute() {
    return this.isMaster ? "/alquileres" : "/mi-charter/reservas";
  }
  get chatClientId() {
    return this.alquiler?.client?.id ?? 0;
  }
  get chatProviderId() {
    return this.auth.user()?.id ?? 0;
  }
  get chatTitle() {
    const c = this.alquiler?.client;
    return c ? `${c.firstName} ${c.lastName}` : `Charter #${this.alquiler?.id}`;
  }
  steps = [
    { key: "PENDING", label: "Pendiente", icon: "\u{1F550}" },
    { key: "CONFIRMED", label: "Confirmado", icon: "\u2705" },
    { key: "ACTIVE", label: "En curso", icon: "\u26F5" },
    { key: "COMPLETED", label: "Completado", icon: "\u{1F3C1}" }
  ];
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (a) => {
        this.alquiler = a;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el alquiler.";
        this.loading = false;
      }
    });
  }
  stepIndex(status) {
    const order = ["PENDING", "CONFIRMED", "ACTIVE", "COMPLETED"];
    return order.indexOf(status);
  }
  statusLabel(s) {
    return { PENDING: "Pendiente", CONFIRMED: "Confirmado", ACTIVE: "Activo", COMPLETED: "Completado", CANCELLED: "Cancelado" }[s] ?? s;
  }
  statusClass(s) {
    return {
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      ACTIVE: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    }[s] ?? "";
  }
  imageUrl(url) {
    if (!url)
      return "";
    return url.startsWith("http") ? url : `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("es-VE", { day: "2-digit", month: "short", year: "numeric" });
  }
  formatDateTime(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("es-VE", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  durationLabel(days) {
    if (days === 1)
      return "1 noche";
    return `${days} noches`;
  }
  static \u0275fac = function DetalleAlquilerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleAlquilerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleAlquilerComponent, selectors: [["app-detalle-alquiler"]], decls: 18, vars: 6, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-brand-500", "hover:bg-brand-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition-colors", 3, "click"], [1, "fas", "fa-comment-dots"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.05]", 3, "routerLink"], ["class", "rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [4, "ngIf"], ["bookingType", "CHARTER", 3, "bookingId", "clientUserId", "providerUserId", "title", "closeChat", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-10", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "rounded-full", "px-3", "py-1.5", "text-sm", "font-semibold", 3, "ngClass"], ["class", "text-sm text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "mt-6", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-3"], [1, "space-y-5", "lg:col-span-1"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["class", "h-40 w-full overflow-hidden", 4, "ngIf"], ["class", "flex h-32 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-5xl opacity-30 dark:from-slate-800 dark:to-slate-900", 4, "ngIf"], [1, "p-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "mt-1", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-2", "flex", "flex-wrap", "gap-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["class", "mt-2 text-sm text-gray-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "space-y-5", "lg:col-span-2"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-lg", "dark:bg-blue-500/20"], [1, "text-[11px]", "uppercase", "tracking-widest", "text-gray-400"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], ["class", "flex items-start gap-3", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-4"], [1, "mt-1", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-3"], [1, "mt-1", "text-xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "space-y-3"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-sm", "dark:bg-gray-800"], [1, "flex", "flex-1", "items-center", "justify-between"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["class", "flex items-center gap-3", 4, "ngIf"], ["class", "rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/30 dark:bg-amber-500/10", 4, "ngIf"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-start", "gap-2", "rounded-xl", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-700", "dark:bg-red-500/10", "dark:text-red-400"], [1, "font-semibold"], [1, "mt-0.5"], [1, "mt-6"], [1, "flex", "items-center", "gap-0"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "items-center", "gap-1", "min-w-0"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "text-base", "transition", 3, "ngClass"], [1, "text-[10px]", "font-medium", "leading-tight", "text-center", 3, "ngClass"], ["class", "h-0.5 flex-1 mx-1", 3, "ngClass", 4, "ngIf"], [1, "h-0.5", "flex-1", "mx-1", 3, "ngClass"], [1, "h-40", "w-full", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "text-5xl", "opacity-30", "dark:from-slate-800", "dark:to-slate-900"], [1, "mt-3", "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "flex-shrink-0", "rounded-full", "overflow-hidden", "bg-brand-100", "dark:bg-brand-500/20", "flex", "items-center", "justify-center"], ["class", "h-full w-full object-cover", "alt", "foto", 3, "src", 4, "ngIf"], ["class", "text-lg font-bold text-brand-600 dark:text-brand-400", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], ["class", "inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-500/15 dark:text-green-400", 4, "ngIf"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "mt-4", "space-y-2"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-2"], ["target", "_blank", "class", "flex items-center gap-2.5 rounded-xl border border-gray-200 p-2.5 hover:border-brand-400 hover:bg-brand-50 transition-colors dark:border-gray-700 dark:hover:bg-brand-500/10", 3, "href", 4, "ngIf"], ["class", "text-xs text-gray-400 italic", 4, "ngIf"], ["alt", "foto", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "text-lg", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-green-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-green-700", "dark:bg-green-500/15", "dark:text-green-400"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], ["target", "_blank", 1, "flex", "items-center", "gap-2.5", "rounded-xl", "border", "border-gray-200", "p-2.5", "hover:border-brand-400", "hover:bg-brand-50", "transition-colors", "dark:border-gray-700", "dark:hover:bg-brand-500/10", 3, "href"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-lg", "bg-blue-100", "text-sm", "dark:bg-blue-500/20"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-[10px]", "text-gray-400", "truncate"], [1, "fas", "fa-external-link-alt", "text-xs", "text-gray-400"], [1, "text-[10px]", "text-gray-400"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-lg", "bg-green-100", "text-sm", "dark:bg-green-500/20"], [1, "text-xs", "text-gray-400", "italic"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-brand-100", "text-xl", "dark:bg-brand-500/20"], [1, "mt-2", "text-sm", "text-gray-400"], [1, "mt-2", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-green-100", "text-lg", "dark:bg-green-500/20"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-sm", "dark:bg-blue-500/20"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-brand-100", "text-sm", "dark:bg-brand-500/20"], [1, "flex", "h-7", "w-7", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-green-100", "text-sm", "dark:bg-green-500/20"], [1, "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-4", "dark:border-amber-800/30", "dark:bg-amber-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-amber-600", "dark:text-amber-400"], [1, "mt-2", "text-sm", "text-amber-700", "dark:text-amber-300"], ["bookingType", "CHARTER", 3, "closeChat", "bookingId", "clientUserId", "providerUserId", "title"]], template: function DetalleAlquilerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Detalle completo del alquiler privado de embarcaci\xF3n.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function DetalleAlquilerComponent_Template_button_click_9_listener() {
        return ctx.chatOpen = true;
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, " Chat ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13, " \u2190 Volver ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(14, DetalleAlquilerComponent_div_14_Template, 2, 0, "div", 9)(15, DetalleAlquilerComponent_div_15_Template, 2, 1, "div", 10)(16, DetalleAlquilerComponent_ng_container_16_Template, 108, 37, "ng-container", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DetalleAlquilerComponent_app_reservation_chat_17_Template, 1, 4, "app-reservation-chat", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Charter #", ctx.alquiler == null ? null : ctx.alquiler.id);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.backRoute);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.alquiler);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.chatOpen && ctx.alquiler);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReservationChatComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleAlquilerComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-alquiler", standalone: true, imports: [CommonModule, RouterModule, ReservationChatComponent], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Charter #{{ alquiler?.id }}</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Detalle completo del alquiler privado de embarcaci\xF3n.</p>
      </div>
      <div class="flex items-center gap-2">
        <button (click)="chatOpen = true"
          class="inline-flex items-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors">
          <i class="fas fa-comment-dots"></i> Chat
        </button>
        <a [routerLink]="backRoute"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.05]">
          \u2190 Volver
        </a>
      </div>
    </div>
  </div>

  <!-- Loading / Error -->
  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando detalle del charter...
  </div>
  <div *ngIf="!loading && errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <ng-container *ngIf="!loading && alquiler">

    <!-- \u2500\u2500 Status badge + cancelaci\xF3n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <span class="inline-flex rounded-full px-3 py-1.5 text-sm font-semibold" [ngClass]="statusClass(alquiler.status)">
            {{ statusLabel(alquiler.status) }}
          </span>
          <span *ngIf="alquiler.status !== 'CANCELLED'" class="text-sm text-gray-500 dark:text-gray-400">
            Reserva creada el {{ formatDateTime(alquiler.createdAt) }}
          </span>
        </div>
        <div *ngIf="alquiler.status === 'CANCELLED' && alquiler.cancellationReason"
          class="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
          <span>\u26D4</span>
          <div>
            <p class="font-semibold">Motivo de cancelaci\xF3n</p>
            <p class="mt-0.5">{{ alquiler.cancellationReason }}</p>
          </div>
        </div>
      </div>

      <!-- Timeline de estados -->
      <div *ngIf="alquiler.status !== 'CANCELLED'" class="mt-6">
        <div class="flex items-center gap-0">
          <ng-container *ngFor="let step of steps; let i = index; let last = last">
            <!-- Paso -->
            <div class="flex flex-col items-center gap-1 min-w-0">
              <div class="flex h-9 w-9 items-center justify-center rounded-full text-base transition"
                [ngClass]="stepIndex(alquiler.status) >= i
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-400 dark:bg-gray-800'">
                {{ step.icon }}
              </div>
              <span class="text-[10px] font-medium leading-tight text-center"
                [ngClass]="stepIndex(alquiler.status) >= i ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400'">
                {{ step.label }}
              </span>
            </div>
            <!-- L\xEDnea conectora -->
            <div *ngIf="!last" class="h-0.5 flex-1 mx-1"
              [ngClass]="stepIndex(alquiler.status) > i ? 'bg-brand-400' : 'bg-gray-200 dark:bg-gray-700'">
            </div>
          </ng-container>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Grid principal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">

      <!-- Columna izquierda: embarcaci\xF3n + capit\xE1n -->
      <div class="space-y-5 lg:col-span-1">

        <!-- Embarcaci\xF3n -->
        <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <div *ngIf="alquiler.vessel?.photos?.[0]"
            class="h-40 w-full overflow-hidden">
            <img [src]="imageUrl(alquiler.vessel.photos![0])" [alt]="alquiler.vessel.name"
              class="h-full w-full object-cover" />
          </div>
          <div *ngIf="!alquiler.vessel?.photos?.[0]"
            class="flex h-32 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-5xl opacity-30 dark:from-slate-800 dark:to-slate-900">
            \u26F5
          </div>
          <div class="p-4">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Embarcaci\xF3n</p>
            <p class="mt-1 text-lg font-bold text-gray-800 dark:text-white/90">{{ alquiler.vessel.name }}</p>
            <div class="mt-2 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{{ alquiler.vessel.type }}</span>
              <span *ngIf="alquiler.vessel.capacity">\u{1F465} {{ alquiler.vessel.capacity }} pax</span>
              <span *ngIf="alquiler.vessel.licensePlate">\u{1FAAA} {{ alquiler.vessel.licensePlate }}</span>
            </div>
          </div>
        </div>

        <!-- Capit\xE1n -->
        <div class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Capit\xE1n asignado</p>

          <!-- captainProfile (nuevo sistema) -->
          <ng-container *ngIf="alquiler.captainProfile as cap">
            <div class="mt-3 flex items-center gap-3">
              <!-- Foto o iniciales -->
              <div class="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center">
                <img *ngIf="cap.photoUrl" [src]="imageUrl(cap.photoUrl)" class="h-full w-full object-cover" alt="foto">
                <span *ngIf="!cap.photoUrl" class="text-lg font-bold text-brand-600 dark:text-brand-400">
                  {{ cap.firstName[0] }}{{ cap.lastName[0] }}
                </span>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <p class="font-semibold text-gray-800 dark:text-white/90">
                    {{ cap.firstName }} {{ cap.lastName }}
                  </p>
                  <span *ngIf="cap.verificationStatus === 'APROBADO'"
                    class="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-500/15 dark:text-green-400">
                    <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    Verificado
                  </span>
                </div>
                <p *ngIf="cap.licenseNumber" class="text-xs text-gray-400">\u{1FAAA} Lic. {{ cap.licenseNumber }}</p>
                <p *ngIf="cap.phone" class="text-xs text-gray-400">\u{1F4DE} {{ cap.phone }}</p>
              </div>
            </div>

            <!-- Documentos del capit\xE1n -->
            <div class="mt-4 space-y-2">
              <p class="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Documentos</p>
              <div class="grid grid-cols-1 gap-2">

                <!-- C\xE9dula frontal -->
                <a *ngIf="cap.documentFrontUrl" [href]="imageUrl(cap.documentFrontUrl)" target="_blank"
                  class="flex items-center gap-2.5 rounded-xl border border-gray-200 p-2.5 hover:border-brand-400 hover:bg-brand-50 transition-colors dark:border-gray-700 dark:hover:bg-brand-500/10">
                  <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm dark:bg-blue-500/20">\u{1FAAA}</span>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-medium text-gray-700 dark:text-gray-300">C\xE9dula (frente)</p>
                    <p class="text-[10px] text-gray-400 truncate">{{ cap.documentId ?? 'Ver documento' }}</p>
                  </div>
                  <i class="fas fa-external-link-alt text-xs text-gray-400"></i>
                </a>

                <!-- C\xE9dula trasera -->
                <a *ngIf="cap.documentBackUrl" [href]="imageUrl(cap.documentBackUrl)" target="_blank"
                  class="flex items-center gap-2.5 rounded-xl border border-gray-200 p-2.5 hover:border-brand-400 hover:bg-brand-50 transition-colors dark:border-gray-700 dark:hover:bg-brand-500/10">
                  <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm dark:bg-blue-500/20">\u{1FAAA}</span>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-medium text-gray-700 dark:text-gray-300">C\xE9dula (reverso)</p>
                    <p class="text-[10px] text-gray-400">Ver documento</p>
                  </div>
                  <i class="fas fa-external-link-alt text-xs text-gray-400"></i>
                </a>

                <!-- Licencia n\xE1utica -->
                <a *ngIf="cap.licenseDocumentUrl" [href]="imageUrl(cap.licenseDocumentUrl)" target="_blank"
                  class="flex items-center gap-2.5 rounded-xl border border-gray-200 p-2.5 hover:border-brand-400 hover:bg-brand-50 transition-colors dark:border-gray-700 dark:hover:bg-brand-500/10">
                  <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm dark:bg-green-500/20">\u2693</span>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-medium text-gray-700 dark:text-gray-300">Licencia n\xE1utica</p>
                    <p class="text-[10px] text-gray-400 truncate">{{ cap.licenseNumber ?? 'Ver documento' }}</p>
                  </div>
                  <i class="fas fa-external-link-alt text-xs text-gray-400"></i>
                </a>

                <!-- Sin documentos -->
                <p *ngIf="!cap.documentFrontUrl && !cap.documentBackUrl && !cap.licenseDocumentUrl"
                  class="text-xs text-gray-400 italic">Sin documentos adjuntos.</p>

              </div>
            </div>
          </ng-container>

          <!-- Capit\xE1n legacy (tipo usuario) -->
          <ng-container *ngIf="!alquiler.captainProfile && alquiler.captain">
            <div class="mt-3 flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-xl dark:bg-brand-500/20">\u{1F468}\u200D\u2708\uFE0F</div>
              <p class="text-sm font-semibold text-gray-800 dark:text-white/90">
                {{ alquiler.captain.firstName }} {{ alquiler.captain.lastName }}
              </p>
            </div>
          </ng-container>

          <!-- Sin capit\xE1n -->
          <p *ngIf="!alquiler.captainProfile && !alquiler.captain" class="mt-2 text-sm text-gray-400">
            Sin capit\xE1n asignado
          </p>
        </div>

        <!-- Destino -->
        <div *ngIf="alquiler.destination" class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Destino</p>
          <p class="mt-2 text-sm font-semibold text-gray-800 dark:text-white/90">
            \u{1F4CD} {{ alquiler.destination.name }}
          </p>
        </div>

      </div>

      <!-- Columna derecha: detalles -->
      <div class="space-y-5 lg:col-span-2">

        <!-- Partes involucradas -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Partes involucradas</p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg dark:bg-blue-500/20">\u{1F464}</div>
              <div>
                <p class="text-[11px] uppercase tracking-widest text-gray-400">Cliente</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ alquiler.client.firstName }} {{ alquiler.client.lastName }}</p>
                <p class="text-xs text-gray-400">{{ alquiler.client.email }}</p>
              </div>
            </div>
            <div *ngIf="alquiler.vessel.provider" class="flex items-start gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-lg dark:bg-green-500/20">\u{1F3E2}</div>
              <div>
                <p class="text-[11px] uppercase tracking-widest text-gray-400">Proveedor</p>
                <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ alquiler.vessel.provider?.companyName ?? '\u2014' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fechas y duraci\xF3n -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Per\xEDodo del charter</p>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p class="text-xs text-gray-400">Inicio</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ formatDate(alquiler.startDate) }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Fin</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ formatDate(alquiler.endDate) }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Duraci\xF3n</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ durationLabel(alquiler.days) }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Pasajeros</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ alquiler.passengers }} pax</p>
            </div>
          </div>
        </div>

        <!-- Pago -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Resumen de pago</p>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p class="text-xs text-gray-400">Precio / noche</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                \${{ (alquiler.days > 0 ? alquiler.totalPrice / alquiler.days : alquiler.totalPrice) | number:'1.2-2' }}
              </p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Noches</p>
              <p class="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90">{{ alquiler.days }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Total pagado</p>
              <p class="mt-1 text-xl font-extrabold text-brand-600 dark:text-brand-400">\${{ alquiler.totalPrice | number:'1.2-2' }}</p>
            </div>
          </div>
        </div>

        <!-- Historial de tiempos -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Historial de eventos</p>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm dark:bg-gray-800">\u{1F4CB}</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Reserva creada</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(alquiler.createdAt) }}</span>
              </div>
            </div>
            <div *ngIf="alquiler.confirmedAt" class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm dark:bg-blue-500/20">\u2705</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Pago confirmado</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(alquiler.confirmedAt) }}</span>
              </div>
            </div>
            <div *ngIf="alquiler.startedAt" class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm dark:bg-brand-500/20">\u26F5</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Charter iniciado</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(alquiler.startedAt) }}</span>
              </div>
            </div>
            <div *ngIf="alquiler.completedAt" class="flex items-center gap-3">
              <span class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm dark:bg-green-500/20">\u{1F3C1}</span>
              <div class="flex flex-1 items-center justify-between">
                <span class="text-sm text-gray-700 dark:text-gray-300">Charter completado</span>
                <span class="text-xs text-gray-400">{{ formatDateTime(alquiler.completedAt) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Solicitudes especiales -->
        <div *ngIf="alquiler.specialRequests"
          class="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/30 dark:bg-amber-500/10">
          <p class="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">Solicitudes especiales</p>
          <p class="mt-2 text-sm text-amber-700 dark:text-amber-300">{{ alquiler.specialRequests }}</p>
        </div>

      </div>
    </div>

  </ng-container>

</div>

<!-- Chat panel -->
<app-reservation-chat
  *ngIf="chatOpen && alquiler"
  [bookingId]="alquiler.id"
  bookingType="CHARTER"
  [clientUserId]="chatClientId"
  [providerUserId]="chatProviderId"
  [title]="chatTitle"
  (closeChat)="chatOpen = false">
</app-reservation-chat>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleAlquilerComponent, { className: "DetalleAlquilerComponent", filePath: "src/app/pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component.ts", lineNumber: 16 });
})();
export {
  DetalleAlquilerComponent
};
//# sourceMappingURL=chunk-66DK5AYB.js.map
