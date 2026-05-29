import {
  AlquileresService
} from "./chunk-R5MJQUPH.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-6L3J4MHE.js";

// src/app/pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component.ts
function DetalleAlquilerComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function DetalleAlquilerComponent_div_11_Template(rf, ctx) {
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
function DetalleAlquilerComponent_div_12_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 13);
    \u0275\u0275text(2, "Solicitudes especiales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.specialRequests);
  }
}
function DetalleAlquilerComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 13);
    \u0275\u0275text(9, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p", 13);
    \u0275\u0275text(14, "Capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 13);
    \u0275\u0275text(19, "Per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "p", 13);
    \u0275\u0275text(24, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "p", 13);
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "p", 13);
    \u0275\u0275text(34, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 14);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, DetalleAlquilerComponent_div_12_div_37_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.vessel.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.alquiler.client.firstName, " ", ctx_r0.alquiler.client.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.captain ? ctx_r0.alquiler.captain.firstName + " " + ctx_r0.alquiler.captain.lastName : "Sin asignar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.alquiler.startDate, " \u2192 ", ctx_r0.alquiler.endDate, " (", ctx_r0.alquiler.days, " d\xEDas)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.passengers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$ ", ctx_r0.alquiler.totalPrice);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.alquiler.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alquiler.specialRequests);
  }
}
var DetalleAlquilerComponent = class _DetalleAlquilerComponent {
  service = inject(AlquileresService);
  route = inject(ActivatedRoute);
  loading = false;
  errorMessage = "";
  alquiler = null;
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
  static \u0275fac = function DetalleAlquilerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleAlquilerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleAlquilerComponent, selectors: [["app-detalle-alquiler"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/alquileres", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2", "xl:grid-cols-3"], [1, "text-xs", "text-gray-500"], [1, "mt-1", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], ["class", "md:col-span-2", 4, "ngIf"], [1, "md:col-span-2"], [1, "mt-1", "text-sm", "text-gray-700", "dark:text-gray-300"]], template: function DetalleAlquilerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Detalle del alquiler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Informaci\xF3n del alquiler de embarcaci\xF3n.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DetalleAlquilerComponent_div_10_Template, 2, 0, "div", 6)(11, DetalleAlquilerComponent_div_11_Template, 2, 1, "div", 7)(12, DetalleAlquilerComponent_div_12_Template, 38, 11, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.alquiler);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleAlquilerComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-alquiler", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Detalle del alquiler</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Informaci\xF3n del alquiler de embarcaci\xF3n.</p>
      </div>
      <a routerLink="/alquileres" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && alquiler" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <div>
        <p class="text-xs text-gray-500">Embarcaci\xF3n</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.vessel.name }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Cliente</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.client.firstName }} {{ alquiler.client.lastName }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Capit\xE1n</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.captain ? (alquiler.captain.firstName + ' ' + alquiler.captain.lastName) : 'Sin asignar' }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Per\xEDodo</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.startDate }} \u2192 {{ alquiler.endDate }} ({{ alquiler.days }} d\xEDas)</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Pasajeros</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.passengers }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Total</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">$ {{ alquiler.totalPrice }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Estado</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ alquiler.status }}</p>
      </div>
      <div *ngIf="alquiler.specialRequests" class="md:col-span-2">
        <p class="text-xs text-gray-500">Solicitudes especiales</p>
        <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">{{ alquiler.specialRequests }}</p>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleAlquilerComponent, { className: "DetalleAlquilerComponent", filePath: "src/app/pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component.ts", lineNumber: 13 });
})();
export {
  DetalleAlquilerComponent
};
//# sourceMappingURL=chunk-CJ6U4Y27.js.map
