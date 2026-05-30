import {
  TicketsService
} from "./chunk-K4CVTLBT.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/tickets/pages/detalle-ticket/detalle-ticket.component.ts
function DetalleTicketComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function DetalleTicketComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function DetalleTicketComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 13);
    \u0275\u0275text(9, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "p", 13);
    \u0275\u0275text(16, "Viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "p", 13);
    \u0275\u0275text(23, "Asientos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "p", 13);
    \u0275\u0275text(28, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 14);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "p", 13);
    \u0275\u0275text(33, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 14);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 16)(37, "p", 13);
    \u0275\u0275text(38, "C\xF3digo QR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 17);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r0.ticket.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.ticket.client.firstName, " ", ctx_r0.ticket.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ticket.client.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.ticket.trip == null ? null : ctx_r0.ticket.trip.schedule == null ? null : ctx_r0.ticket.trip.schedule.route == null ? null : ctx_r0.ticket.trip.schedule.route.originPier == null ? null : ctx_r0.ticket.trip.schedule.route.originPier.name, " \u2192 ", ctx_r0.ticket.trip == null ? null : ctx_r0.ticket.trip.schedule == null ? null : ctx_r0.ticket.trip.schedule.route == null ? null : ctx_r0.ticket.trip.schedule.route.destinationPier == null ? null : ctx_r0.ticket.trip.schedule.route.destinationPier.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.ticket.trip == null ? null : ctx_r0.ticket.trip.departureDate, " ", ctx_r0.ticket.trip == null ? null : ctx_r0.ticket.trip.departureTime);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticket.seats);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$ ", ctx_r0.ticket.totalPrice);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticket.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticket.qrCode);
  }
}
var DetalleTicketComponent = class _DetalleTicketComponent {
  service = inject(TicketsService);
  route = inject(ActivatedRoute);
  loading = false;
  errorMessage = "";
  ticket = null;
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (t) => {
        this.ticket = t;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el ticket.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function DetalleTicketComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleTicketComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleTicketComponent, selectors: [["app-detalle-ticket"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/tickets", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2", "xl:grid-cols-3"], [1, "text-xs", "text-gray-500"], [1, "mt-1", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "md:col-span-2"], [1, "mt-1", "text-sm", "font-mono", "text-gray-700", "dark:text-gray-300", "break-all"]], template: function DetalleTicketComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Detalle del ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Informaci\xF3n del boleto de viaje.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DetalleTicketComponent_div_10_Template, 2, 0, "div", 6)(11, DetalleTicketComponent_div_11_Template, 2, 1, "div", 7)(12, DetalleTicketComponent_div_12_Template, 41, 12, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.ticket);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleTicketComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-ticket", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="space-y-6">\n  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">\n    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">\n      <div>\n        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Detalle del ticket</h1>\n        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Informaci\xF3n del boleto de viaje.</p>\n      </div>\n      <a routerLink="/tickets" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>\n    </div>\n  </div>\n\n  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando...</div>\n  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>\n\n  <div *ngIf="!loading && ticket" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">\n    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">\n      <div>\n        <p class="text-xs text-gray-500">ID</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">#{{ ticket.id }}</p>\n      </div>\n      <div>\n        <p class="text-xs text-gray-500">Cliente</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ ticket.client.firstName }} {{ ticket.client.lastName }}</p>\n        <p class="text-xs text-gray-400">{{ ticket.client.email }}</p>\n      </div>\n      <div>\n        <p class="text-xs text-gray-500">Viaje</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">\n          {{ ticket.trip?.schedule?.route?.originPier?.name }} \u2192 {{ ticket.trip?.schedule?.route?.destinationPier?.name }}\n        </p>\n        <p class="text-xs text-gray-400">{{ ticket.trip?.departureDate }} {{ ticket.trip?.departureTime }}</p>\n      </div>\n      <div>\n        <p class="text-xs text-gray-500">Asientos</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ ticket.seats }}</p>\n      </div>\n      <div>\n        <p class="text-xs text-gray-500">Total</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">$ {{ ticket.totalPrice }}</p>\n      </div>\n      <div>\n        <p class="text-xs text-gray-500">Estado</p>\n        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ ticket.status }}</p>\n      </div>\n      <div class="md:col-span-2">\n        <p class="text-xs text-gray-500">C\xF3digo QR</p>\n        <p class="mt-1 text-sm font-mono text-gray-700 dark:text-gray-300 break-all">{{ ticket.qrCode }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleTicketComponent, { className: "DetalleTicketComponent", filePath: "src/app/pages/tickets/pages/detalle-ticket/detalle-ticket.component.ts", lineNumber: 13 });
})();
export {
  DetalleTicketComponent
};
//# sourceMappingURL=chunk-IQNUUWMA.js.map
