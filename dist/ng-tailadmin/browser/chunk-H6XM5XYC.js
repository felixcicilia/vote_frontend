import {
  ViajesService
} from "./chunk-MASKJEQ2.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgClass,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/viajes/pages/detalle-viaje/detalle-viaje.component.ts
function DetalleViajeComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DetalleViajeComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.comprar());
    });
    \u0275\u0275text(1, " \u{1F3AB} Comprar ticket ");
    \u0275\u0275elementEnd();
  }
}
function DetalleViajeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " Cargando... ");
    \u0275\u0275elementEnd();
  }
}
function DetalleViajeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function DetalleViajeComponent_div_11_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 16);
    \u0275\u0275text(2, "Motivo de cancelaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.viaje.cancellationReason);
  }
}
function DetalleViajeComponent_div_11_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " No hay asientos disponibles en este viaje. ");
    \u0275\u0275elementEnd();
  }
}
function DetalleViajeComponent_div_11_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "p", 27);
    \u0275\u0275text(2, "\xBFListo para reservar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, " Quedan ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " asientos a ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " c/u. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 29);
    \u0275\u0275listener("click", function DetalleViajeComponent_div_11_div_41_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.comprar());
    });
    \u0275\u0275text(13, " \u{1F3AB} Comprar ticket ahora ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.viaje.availableSeats);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 2, ctx_r1.viaje.schedule == null ? null : ctx_r1.viaje.schedule.route == null ? null : ctx_r1.viaje.schedule.route.pricePerSeat, "1.2-2"));
  }
}
function DetalleViajeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div")(4, "p", 16);
    \u0275\u0275text(5, "Ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "p", 16);
    \u0275\u0275text(10, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "p", 16);
    \u0275\u0275text(15, "Fecha de salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "p", 16);
    \u0275\u0275text(20, "Hora de salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "p", 16);
    \u0275\u0275text(25, "Precio por asiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 18);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "p", 16);
    \u0275\u0275text(31, "Asientos disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "p", 16);
    \u0275\u0275text(36, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 20);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, DetalleViajeComponent_div_11_div_39_Template, 5, 1, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, DetalleViajeComponent_div_11_div_40_Template, 2, 0, "div", 22)(41, DetalleViajeComponent_div_11_div_41_Template, 14, 5, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.viaje.schedule == null ? null : ctx_r1.viaje.schedule.route == null ? null : ctx_r1.viaje.schedule.route.originPier == null ? null : ctx_r1.viaje.schedule.route.originPier.name, " \u2192 ", ctx_r1.viaje.schedule == null ? null : ctx_r1.viaje.schedule.route == null ? null : ctx_r1.viaje.schedule.route.destinationPier == null ? null : ctx_r1.viaje.schedule.route.destinationPier.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.viaje.schedule == null ? null : ctx_r1.viaje.schedule.vessel == null ? null : ctx_r1.viaje.schedule.vessel.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.viaje.departureDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.viaje.departureTime);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(28, 14, ctx_r1.viaje.schedule == null ? null : ctx_r1.viaje.schedule.route == null ? null : ctx_r1.viaje.schedule.route.pricePerSeat, "1.2-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.viaje.availableSeats > 0 ? "text-green-600 dark:text-green-400" : "text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.viaje.availableSeats, " / ", ctx_r1.viaje.totalSeats, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(ctx_r1.viaje.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.viaje.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viaje.cancellationReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viaje.availableSeats === 0 && ctx_r1.viaje.status === "SCHEDULED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viaje.status === "SCHEDULED" && ctx_r1.viaje.availableSeats > 0);
  }
}
var DetalleViajeComponent = class _DetalleViajeComponent {
  service = inject(ViajesService);
  route = inject(ActivatedRoute);
  router = inject(Router);
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
  comprar() {
    if (!this.viaje)
      return;
    this.router.navigate(["/checkout"], { queryParams: { viajeId: this.viaje.id } });
  }
  statusClass(s) {
    return {
      SCHEDULED: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      IN_PROGRESS: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
    }[s] ?? "bg-gray-100 text-gray-600";
  }
  statusLabel(s) {
    return { SCHEDULED: "Programado", IN_PROGRESS: "En curso", COMPLETED: "Completado", CANCELLED: "Cancelado" }[s] ?? s;
  }
  static \u0275fac = function DetalleViajeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleViajeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleViajeComponent, selectors: [["app-detalle-viaje"]], decls: 12, vars: 4, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-4"], ["routerLink", "/viajes", 1, "text-gray-500", "hover:text-gray-700", "dark:text-gray-400"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-brand-600", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-10", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "space-y-4"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2", "xl:grid-cols-3"], [1, "text-xs", "text-gray-500"], [1, "mt-1", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "font-semibold", "text-brand-600", "dark:text-brand-400"], [1, "mt-1", "text-sm", "font-semibold", 3, "ngClass"], [1, "mt-1", "inline-block", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-medium", 3, "ngClass"], [4, "ngIf"], ["class", "rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700 dark:border-yellow-800 dark:bg-yellow-900/10 dark:text-yellow-300", 4, "ngIf"], ["class", "rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center dark:border-brand-800 dark:bg-brand-900/10", 4, "ngIf"], [1, "mt-1", "text-sm", "text-red-600", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-yellow-200", "bg-yellow-50", "p-4", "text-sm", "text-yellow-700", "dark:border-yellow-800", "dark:bg-yellow-900/10", "dark:text-yellow-300"], [1, "rounded-2xl", "border", "border-brand-200", "bg-brand-50", "p-6", "text-center", "dark:border-brand-800", "dark:bg-brand-900/10"], [1, "text-base", "font-semibold", "text-brand-700", "dark:text-brand-300", "mb-2"], [1, "text-sm", "text-brand-600", "dark:text-brand-400", "mb-4"], [1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-500", "px-8", "py-3", "text-sm", "font-semibold", "text-white", "hover:bg-brand-600", 3, "click"]], template: function DetalleViajeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275text(5, "\u2190 Volver");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, "Detalle del viaje");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, DetalleViajeComponent_button_8_Template, 2, 0, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, DetalleViajeComponent_div_9_Template, 2, 0, "div", 7)(10, DetalleViajeComponent_div_10_Template, 2, 1, "div", 8)(11, DetalleViajeComponent_div_11_Template, 42, 17, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", (ctx.viaje == null ? null : ctx.viaje.status) === "SCHEDULED" && ctx.viaje.availableSeats > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viaje);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleViajeComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-viaje", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">
  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-4">
        <a routerLink="/viajes" class="text-gray-500 hover:text-gray-700 dark:text-gray-400">\u2190 Volver</a>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Detalle del viaje</h1>
      </div>
      <button *ngIf="viaje?.status === 'SCHEDULED' && viaje!.availableSeats > 0"
        (click)="comprar()"
        class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
        \u{1F3AB} Comprar ticket
      </button>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando...
  </div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <div *ngIf="!loading && viaje" class="space-y-4">
    <!-- Info principal -->
    <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div>
          <p class="text-xs text-gray-500">Ruta</p>
          <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">
            {{ viaje.schedule?.route?.originPier?.name }} \u2192 {{ viaje.schedule?.route?.destinationPier?.name }}
          </p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Embarcaci\xF3n</p>
          <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.schedule?.vessel?.name }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Fecha de salida</p>
          <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.departureDate }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Hora de salida</p>
          <p class="mt-1 text-sm font-medium text-gray-800 dark:text-white/90">{{ viaje.departureTime }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Precio por asiento</p>
          <p class="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
            \${{ viaje.schedule?.route?.pricePerSeat | number:'1.2-2' }}
          </p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Asientos disponibles</p>
          <p class="mt-1 text-sm font-semibold"
            [ngClass]="viaje.availableSeats > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500'">
            {{ viaje.availableSeats }} / {{ viaje.totalSeats }}
          </p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Estado</p>
          <span class="mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium" [ngClass]="statusClass(viaje.status)">
            {{ statusLabel(viaje.status) }}
          </span>
        </div>
        <div *ngIf="viaje.cancellationReason">
          <p class="text-xs text-gray-500">Motivo de cancelaci\xF3n</p>
          <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ viaje.cancellationReason }}</p>
        </div>
      </div>
    </div>

    <!-- Aviso sin asientos -->
    <div *ngIf="viaje.availableSeats === 0 && viaje.status === 'SCHEDULED'"
      class="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700 dark:border-yellow-800 dark:bg-yellow-900/10 dark:text-yellow-300">
      No hay asientos disponibles en este viaje.
    </div>

    <!-- CTA -->
    <div *ngIf="viaje.status === 'SCHEDULED' && viaje.availableSeats > 0"
      class="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center dark:border-brand-800 dark:bg-brand-900/10">
      <p class="text-base font-semibold text-brand-700 dark:text-brand-300 mb-2">\xBFListo para reservar?</p>
      <p class="text-sm text-brand-600 dark:text-brand-400 mb-4">
        Quedan <strong>{{ viaje.availableSeats }}</strong> asientos a
        <strong>\${{ viaje.schedule?.route?.pricePerSeat | number:'1.2-2' }}</strong> c/u.
      </p>
      <button (click)="comprar()"
        class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-600">
        \u{1F3AB} Comprar ticket ahora
      </button>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleViajeComponent, { className: "DetalleViajeComponent", filePath: "src/app/pages/viajes/pages/detalle-viaje/detalle-viaje.component.ts", lineNumber: 13 });
})();
export {
  DetalleViajeComponent
};
//# sourceMappingURL=chunk-H6XM5XYC.js.map
