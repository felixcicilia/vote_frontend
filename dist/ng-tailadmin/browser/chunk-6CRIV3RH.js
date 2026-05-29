import {
  ViajesTaxiService
} from "./chunk-3B6NFSRE.js";
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
  ɵɵtextInterpolate2
} from "./chunk-6L3J4MHE.js";

// src/app/pages/viajes-taxi/pages/detalle-viaje-taxi/detalle-viaje-taxi.component.ts
function DetalleViajeTaxiComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function DetalleViajeTaxiComponent_div_11_Template(rf, ctx) {
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
function DetalleViajeTaxiComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 13);
    \u0275\u0275text(9, "Capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p", 13);
    \u0275\u0275text(14, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 13);
    \u0275\u0275text(19, "Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "p", 13);
    \u0275\u0275text(24, "Destino");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "p", 13);
    \u0275\u0275text(29, "Pasajeros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "p", 13);
    \u0275\u0275text(34, "Precio estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 14);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "p", 13);
    \u0275\u0275text(39, "Precio final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 14);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "p", 13);
    \u0275\u0275text(44, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 14);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r0.viaje.client.firstName, " ", ctx_r0.viaje.client.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.captain ? ctx_r0.viaje.captain.firstName + " " + ctx_r0.viaje.captain.lastName : "Sin asignar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.viaje.vessel == null ? null : ctx_r0.viaje.vessel.name) ?? "Sin asignar");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.originName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.destinationName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.passengers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.estimatedPrice ? "$ " + ctx_r0.viaje.estimatedPrice : "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.finalPrice ? "$ " + ctx_r0.viaje.finalPrice : "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viaje.status);
  }
}
var DetalleViajeTaxiComponent = class _DetalleViajeTaxiComponent {
  service = inject(ViajesTaxiService);
  route = inject(ActivatedRoute);
  loading = false;
  errorMessage = "";
  viaje = null;
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (v) => {
        this.viaje = v;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el viaje.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function DetalleViajeTaxiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleViajeTaxiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleViajeTaxiComponent, selectors: [["app-detalle-viaje-taxi"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/viajes-taxi", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2", "xl:grid-cols-3"], [1, "text-xs", "text-gray-500"], [1, "mt-1", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"]], template: function DetalleViajeTaxiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Detalle del viaje taxi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Informaci\xF3n de la solicitud de lancha taxi.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DetalleViajeTaxiComponent_div_10_Template, 2, 0, "div", 6)(11, DetalleViajeTaxiComponent_div_11_Template, 2, 1, "div", 7)(12, DetalleViajeTaxiComponent_div_12_Template, 47, 10, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viaje);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleViajeTaxiComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-viaje-taxi", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Detalle del viaje taxi</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Informaci\xF3n de la solicitud de lancha taxi.</p>
      </div>
      <a routerLink="/viajes-taxi" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && viaje" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <div>
        <p class="text-xs text-gray-500">Cliente</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.client.firstName }} {{ viaje.client.lastName }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Capit\xE1n</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.captain ? (viaje.captain.firstName + ' ' + viaje.captain.lastName) : 'Sin asignar' }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Embarcaci\xF3n</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.vessel?.name ?? 'Sin asignar' }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Origen</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.originName }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Destino</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.destinationName }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Pasajeros</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.passengers }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Precio estimado</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.estimatedPrice ? ('$ ' + viaje.estimatedPrice) : '-' }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Precio final</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.finalPrice ? ('$ ' + viaje.finalPrice) : '-' }}</p>
      </div>
      <div>
        <p class="text-xs text-gray-500">Estado</p>
        <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.status }}</p>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleViajeTaxiComponent, { className: "DetalleViajeTaxiComponent", filePath: "src/app/pages/viajes-taxi/pages/detalle-viaje-taxi/detalle-viaje-taxi.component.ts", lineNumber: 13 });
})();
export {
  DetalleViajeTaxiComponent
};
//# sourceMappingURL=chunk-6CRIV3RH.js.map
