import {
  NotificacionesService
} from "./chunk-N4MMPEOR.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵtextInterpolate1
} from "./chunk-6L3J4MHE.js";

// src/app/pages/notificaciones/pages/lista-notificaciones/lista-notificaciones.component.ts
var _c0 = (a0) => ({ "opacity-60": a0 });
var _c1 = (a0) => ({ "font-normal": a0 });
function ListaNotificacionesComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ListaNotificacionesComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.marcarTodasLeidas());
    });
    \u0275\u0275text(1, " Marcar todas como le\xEDdas ");
    \u0275\u0275elementEnd();
  }
}
function ListaNotificacionesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando notificaciones...");
    \u0275\u0275elementEnd();
  }
}
function ListaNotificacionesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ListaNotificacionesComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ListaNotificacionesComponent_div_11_div_7_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.marcarLeida(n_r4));
    });
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 25);
    \u0275\u0275listener("click", function ListaNotificacionesComponent_div_11_div_7_Template_button_click_10_listener($event) {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.eliminar(n_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, n_r4.isRead));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", n_r4.isRead ? "bg-gray-300" : "bg-brand-500");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c1, n_r4.isRead));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, n_r4.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function ListaNotificacionesComponent_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "No tienes notificaciones.");
    \u0275\u0275elementEnd();
  }
}
function ListaNotificacionesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h3", 14);
    \u0275\u0275text(3, "Bandeja de notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275template(7, ListaNotificacionesComponent_div_11_div_7_Template, 12, 13, "div", 17)(8, ListaNotificacionesComponent_div_11_div_8_Template, 2, 0, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.notificaciones.length, " total");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.notificaciones)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notificaciones.length === 0);
  }
}
var ListaNotificacionesComponent = class _ListaNotificacionesComponent {
  service = inject(NotificacionesService);
  authService = inject(AuthService);
  loading = false;
  errorMessage = "";
  notificaciones = [];
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    const userId = this.authService.user()?.id;
    if (!userId)
      return;
    this.loading = true;
    this.service.getByUser(userId).subscribe({
      next: (data) => {
        this.notificaciones = data ?? [];
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar las notificaciones.";
        this.loading = false;
      }
    });
  }
  marcarLeida(n) {
    const userId = this.authService.user()?.id;
    if (!userId || n.isRead)
      return;
    this.service.markAsRead(n.id, userId).subscribe({
      next: (updated) => {
        const idx = this.notificaciones.findIndex((x) => x.id === n.id);
        if (idx >= 0)
          this.notificaciones[idx] = updated;
      }
    });
  }
  marcarTodasLeidas() {
    const userId = this.authService.user()?.id;
    if (!userId)
      return;
    this.service.markAllAsRead(userId).subscribe({
      next: () => this.notificaciones.forEach((n) => n.isRead = true)
    });
  }
  eliminar(n) {
    const userId = this.authService.user()?.id;
    if (!userId)
      return;
    this.service.delete(n.id, userId).subscribe({
      next: () => {
        this.notificaciones = this.notificaciones.filter((x) => x.id !== n.id);
      }
    });
  }
  get noLeidas() {
    return this.notificaciones.filter((n) => !n.isRead).length;
  }
  trackById(_, n) {
    return n.id;
  }
  static \u0275fac = function ListaNotificacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaNotificacionesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaNotificacionesComponent, selectors: [["app-lista-notificaciones"]], decls: 12, vars: 5, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex items-start gap-4 px-5 py-4 transition cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02]", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "px-5 py-10 text-center text-sm text-gray-500", 4, "ngIf"], [1, "flex", "items-start", "gap-4", "px-5", "py-4", "transition", "cursor-pointer", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", 3, "click", "ngClass"], [1, "mt-1", "h-2.5", "w-2.5", "shrink-0", "rounded-full", 3, "ngClass"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90", 3, "ngClass"], [1, "mt-0.5", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "shrink-0", "text-xs", "text-gray-400", "hover:text-red-500", 3, "click"], [1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaNotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Notificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ListaNotificacionesComponent_button_8_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ListaNotificacionesComponent_div_9_Template, 2, 0, "div", 6)(10, ListaNotificacionesComponent_div_10_Template, 2, 1, "div", 7)(11, ListaNotificacionesComponent_div_11_Template, 9, 4, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.noLeidas, " sin leer");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.noLeidas > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaNotificacionesComponent, [{
    type: Component,
    args: [{ selector: "app-lista-notificaciones", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Notificaciones</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ noLeidas }} sin leer</p>
      </div>
      <button *ngIf="noLeidas > 0" (click)="marcarTodasLeidas()"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
        Marcar todas como le\xEDdas
      </button>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando notificaciones...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Bandeja de notificaciones</h3>
      <span class="text-sm text-gray-500">{{ notificaciones.length }} total</span>
    </div>
    <div class="divide-y divide-gray-100 dark:divide-gray-800">
      <div *ngFor="let n of notificaciones; trackBy: trackById"
        class="flex items-start gap-4 px-5 py-4 transition cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02]"
        [ngClass]="{'opacity-60': n.isRead}"
        (click)="marcarLeida(n)">
        <div class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" [ngClass]="n.isRead ? 'bg-gray-300' : 'bg-brand-500'"></div>
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-800 dark:text-white/90" [ngClass]="{'font-normal': n.isRead}">{{ n.title }}</p>
          <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{{ n.body }}</p>
          <p class="mt-1 text-xs text-gray-400">{{ n.createdAt | date:'dd/MM/yyyy HH:mm' }}</p>
        </div>
        <button (click)="eliminar(n); $event.stopPropagation()" class="shrink-0 text-xs text-gray-400 hover:text-red-500">\u2715</button>
      </div>

      <div *ngIf="notificaciones.length === 0" class="px-5 py-10 text-center text-sm text-gray-500">No tienes notificaciones.</div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaNotificacionesComponent, { className: "ListaNotificacionesComponent", filePath: "src/app/pages/notificaciones/pages/lista-notificaciones/lista-notificaciones.component.ts", lineNumber: 14 });
})();
export {
  ListaNotificacionesComponent
};
//# sourceMappingURL=chunk-GFWO34HR.js.map
