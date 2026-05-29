import {
  amenityIcon,
  amenityLabel
} from "./chunk-TTYATM5N.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  TasaService
} from "./chunk-WSNZJFQG.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6L3J4MHE.js";

// src/app/pages/mi-charter/pages/lista-yates/lista-yates.component.ts
var _c0 = (a0) => ["/mi-charter/yates", a0, "editar"];
var _c1 = () => ["/mi-charter/reservas"];
var _c2 = (a0) => ({ vesselId: a0 });
function ListaYatesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd()();
  }
}
function ListaYatesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4, "No tienes embarcaciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6, "Registra tu primer yate o catamar\xE1n para comenzar a recibir reservas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 15);
    \u0275\u0275text(8, " + Nueva embarcaci\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
function ListaYatesComponent_div_12_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " \u23F3 En revisi\xF3n \u2014 No visible para clientes hasta ser verificada. ");
    \u0275\u0275elementEnd();
  }
}
function ListaYatesComponent_div_12_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u274C Rechazada \u2014 ", v_r1.rejectionReason || "Contacta al administrador.", " ");
  }
}
function ListaYatesComponent_div_12_div_18_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(v_r1.photos[0]), \u0275\u0275sanitizeUrl)("alt", v_r1.name);
  }
}
function ListaYatesComponent_div_12_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(v_r1.type));
  }
}
function ListaYatesComponent_div_12_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "\u23F3 EN REVISI\xD3N");
    \u0275\u0275elementEnd();
  }
}
function ListaYatesComponent_div_12_div_18_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2713 VERIFICADA");
    \u0275\u0275elementEnd();
  }
}
function ListaYatesComponent_div_12_div_18_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "\u2717 RECHAZADA");
    \u0275\u0275elementEnd();
  }
}
function ListaYatesComponent_div_12_div_18_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4C5} ", v_r1.year);
  }
}
function ListaYatesComponent_div_12_div_18_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(v_r1.pricePerPerson ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 2, v_r1.pricePerPerson, "1.2-2"), " / persona");
  }
}
function ListaYatesComponent_div_12_div_18_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(v_r1.pricePerDay ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 2, v_r1.pricePerDay, "1.2-2"), " / noche");
  }
}
function ListaYatesComponent_div_12_div_18_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ListaYatesComponent_div_12_div_18_button_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const v_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAvailability(v_r1, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-green-100", v_r1.isAvailable)("text-green-700", v_r1.isAvailable)("bg-gray-100", !v_r1.isAvailable)("text-gray-500", !v_r1.isAvailable);
    \u0275\u0275property("disabled", ctx_r1.toggling === v_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.toggling === v_r1.id ? "..." : v_r1.isAvailable ? "Activa" : "Pausada", " ");
  }
}
function ListaYatesComponent_div_12_div_18_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ListaYatesComponent_div_12_div_18_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275text(1, " Reservas ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c1))("queryParams", \u0275\u0275pureFunction1(3, _c2, v_r1.id));
  }
}
function ListaYatesComponent_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ListaYatesComponent_div_12_div_18_div_1_Template, 2, 0, "div", 28)(2, ListaYatesComponent_div_12_div_18_div_2_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31)(5, "div", 32);
    \u0275\u0275template(6, ListaYatesComponent_div_12_div_18_img_6_Template, 1, 2, "img", 33)(7, ListaYatesComponent_div_12_div_18_div_7_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35)(9, "p", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275template(12, ListaYatesComponent_div_12_div_18_span_12_Template, 2, 0, "span", 38)(13, ListaYatesComponent_div_12_div_18_span_13_Template, 2, 0, "span", 39)(14, ListaYatesComponent_div_12_div_18_span_14_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 41)(16, "p", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ListaYatesComponent_div_12_div_18_p_20_Template, 2, 1, "p", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 45);
    \u0275\u0275template(22, ListaYatesComponent_div_12_div_18_ng_container_22_Template, 6, 5, "ng-container", 46)(23, ListaYatesComponent_div_12_div_18_ng_container_23_Template, 6, 5, "ng-container", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 47);
    \u0275\u0275template(25, ListaYatesComponent_div_12_div_18_button_25_Template, 2, 10, "button", 48)(26, ListaYatesComponent_div_12_div_18_span_26_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49)(28, "a", 50);
    \u0275\u0275text(29, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ListaYatesComponent_div_12_div_18_a_30_Template, 2, 5, "a", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "REJECTED");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", v_r1.photos == null ? null : v_r1.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(v_r1.photos == null ? null : v_r1.photos[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "REJECTED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.typeIcon(v_r1.type), " ", ctx_r1.typeLabel(v_r1.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F465} ", v_r1.capacity, " pax");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.year);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r1.type === "LANCHA");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.type !== "LANCHA");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "APPROVED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r1.verificationStatus !== "APPROVED");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, v_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r1.verificationStatus === "APPROVED");
  }
}
function ListaYatesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h3", 18);
    \u0275\u0275text(3, "Lista de embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "div", 21);
    \u0275\u0275text(8, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275text(10, "Tipo / Capacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275text(12, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25);
    \u0275\u0275text(16, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26);
    \u0275\u0275template(18, ListaYatesComponent_div_12_div_18_Template, 31, 20, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.vessels.length, " embarcacion", ctx_r1.vessels.length !== 1 ? "es" : "");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.vessels);
  }
}
var ListaYatesComponent = class _ListaYatesComponent {
  embService = inject(EmbarcacionesService);
  authService = inject(AuthService);
  tasaService = inject(TasaService);
  loading = true;
  toggling = null;
  vessels = [];
  get providerProfileId() {
    const user = this.authService.user();
    return user?.providerProfile?.id ?? null;
  }
  ngOnInit() {
    this.tasaService.load();
    this.load();
  }
  load() {
    const pid = this.providerProfileId;
    if (!pid) {
      this.loading = false;
      return;
    }
    this.embService.getByProvider(pid).subscribe({
      next: (v) => {
        this.vessels = v;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggleAvailability(v, event) {
    event.stopPropagation();
    this.toggling = v.id;
    this.embService.toggleAvailability(v.id).subscribe({
      next: (updated) => {
        const idx = this.vessels.findIndex((x) => x.id === updated.id);
        if (idx !== -1)
          this.vessels[idx] = updated;
        this.toggling = null;
      },
      error: () => {
        this.toggling = null;
      }
    });
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  typeIcon(t) {
    const m = { LANCHA: "\u{1F6A4}", YATE: "\u26F5", CATAMARAN: "\u{1F6E5}\uFE0F", BOTE: "\u{1F6F6}" };
    return m[t] ?? "\u{1F6A4}";
  }
  typeLabel(t) {
    const m = { LANCHA: "Lancha", YATE: "Yate", CATAMARAN: "Catamar\xE1n", BOTE: "Bote" };
    return m[t] ?? t;
  }
  amenityLabel = amenityLabel;
  amenityIcon = amenityIcon;
  static \u0275fac = function ListaYatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaYatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaYatesComponent, selectors: [["app-lista-yates"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mi-charter/yates/nuevo", 1, "inline-flex", "items-center", "gap-2", "justify-center", "rounded-xl", "bg-brand-500", "px-5", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "text-5xl", "animate-bounce"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-16", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], ["routerLink", "/mi-charter/yates/nuevo", 1, "mt-6", "inline-flex", "items-center", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "grid", "grid-cols-12", "border-b", "border-gray-100", "px-5", "py-3", "dark:border-gray-800"], [1, "col-span-5", "text-xs", "font-medium", "text-gray-500"], [1, "col-span-2", "text-xs", "font-medium", "text-gray-500"], [1, "col-span-2", "text-xs", "font-medium", "text-gray-500", "text-right"], [1, "col-span-1", "text-xs", "font-medium", "text-gray-500", "text-center"], [1, "col-span-2", "text-xs", "font-medium", "text-gray-500", "text-center"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], [4, "ngFor", "ngForOf"], ["class", "flex items-center gap-2 bg-amber-50 px-5 py-2 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400", 4, "ngIf"], ["class", "flex items-center gap-2 bg-red-50 px-5 py-2 text-xs font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "grid", "grid-cols-12", "items-center", "gap-3", "px-5", "py-4"], [1, "col-span-5", "flex", "items-center", "gap-3", "min-w-0"], [1, "h-14", "w-14", "flex-shrink-0", "overflow-hidden", "rounded-xl", "bg-gray-100", "dark:bg-gray-800"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-2xl opacity-30", 4, "ngIf"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], ["class", "rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700", 4, "ngIf"], ["class", "rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700", 4, "ngIf"], ["class", "rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600", 4, "ngIf"], [1, "col-span-2"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "text-xs", "text-gray-400"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "col-span-2", "text-right"], [4, "ngIf"], [1, "col-span-1", "flex", "justify-center"], ["class", "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors", 3, "disabled", "bg-green-100", "text-green-700", "bg-gray-100", "text-gray-500", "click", 4, "ngIf"], [1, "col-span-2", "flex", "items-center", "justify-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "routerLink"], ["class", "rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-50 transition dark:border-brand-500/30", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "bg-amber-50", "px-5", "py-2", "text-xs", "font-semibold", "text-amber-700", "dark:bg-amber-500/10", "dark:text-amber-400"], [1, "flex", "items-center", "gap-2", "bg-red-50", "px-5", "py-2", "text-xs", "font-semibold", "text-red-700", "dark:bg-red-500/10", "dark:text-red-400"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-2xl", "opacity-30"], [1, "rounded-full", "bg-amber-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-amber-700"], [1, "rounded-full", "bg-green-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-green-700"], [1, "rounded-full", "bg-red-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-red-600"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "rounded-full", "px-2.5", "py-1", "text-xs", "font-semibold", "transition-colors", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-brand-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", "transition", "dark:border-brand-500/30", 3, "routerLink", "queryParams"]], template: function ListaYatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Mis embarcaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Gestiona tus yates y catamaranes \xB7 Las nuevas deben pasar por verificaci\xF3n antes de ser visibles para los clientes. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " + Nueva embarcaci\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ListaYatesComponent_div_10_Template, 3, 0, "div", 6)(11, ListaYatesComponent_div_11_Template, 9, 0, "div", 7)(12, ListaYatesComponent_div_12_Template, 19, 3, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessels.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.vessels.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaYatesComponent, [{
    type: Component,
    args: [{ selector: "app-lista-yates", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Mis embarcaciones</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Gestiona tus yates y catamaranes \xB7 Las nuevas deben pasar por verificaci\xF3n antes de ser visibles para los clientes.
        </p>
      </div>
      <a routerLink="/mi-charter/yates/nuevo"
        class="inline-flex items-center gap-2 justify-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
        + Nueva embarcaci\xF3n
      </a>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-5xl animate-bounce">\u26F5</div>
  </div>

  <!-- Sin embarcaciones -->
  <div *ngIf="!loading && vessels.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u26F5</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">No tienes embarcaciones registradas</h3>
    <p class="mt-2 text-sm text-gray-500">Registra tu primer yate o catamar\xE1n para comenzar a recibir reservas.</p>
    <a routerLink="/mi-charter/yates/nuevo"
      class="mt-6 inline-flex items-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
      + Nueva embarcaci\xF3n
    </a>
  </div>

  <!-- Lista -->
  <div *ngIf="!loading && vessels.length > 0"
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de embarcaciones</h3>
      <span class="text-sm text-gray-500">{{ vessels.length }} embarcacion{{ vessels.length !== 1 ? 'es' : '' }}</span>
    </div>

    <!-- Cabecera tabla -->
    <div class="grid grid-cols-12 border-b border-gray-100 px-5 py-3 dark:border-gray-800">
      <div class="col-span-5 text-xs font-medium text-gray-500">Embarcaci\xF3n</div>
      <div class="col-span-2 text-xs font-medium text-gray-500">Tipo / Capacidad</div>
      <div class="col-span-2 text-xs font-medium text-gray-500 text-right">Precio</div>
      <div class="col-span-1 text-xs font-medium text-gray-500 text-center">Estado</div>
      <div class="col-span-2 text-xs font-medium text-gray-500 text-center">Acciones</div>
    </div>

    <div class="divide-y divide-gray-100 dark:divide-gray-800">
    <div *ngFor="let v of vessels">

      <!-- Banner alerta verificaci\xF3n -->
      <div *ngIf="v.verificationStatus === 'PENDING'"
        class="flex items-center gap-2 bg-amber-50 px-5 py-2 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
        \u23F3 En revisi\xF3n \u2014 No visible para clientes hasta ser verificada.
      </div>
      <div *ngIf="v.verificationStatus === 'REJECTED'"
        class="flex items-center gap-2 bg-red-50 px-5 py-2 text-xs font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-400">
        \u274C Rechazada \u2014 {{ v.rejectionReason || 'Contacta al administrador.' }}
      </div>

      <!-- Fila -->
      <div class="grid grid-cols-12 items-center gap-3 px-5 py-4">

        <!-- Embarcaci\xF3n: foto + nombre + badges -->
        <div class="col-span-5 flex items-center gap-3 min-w-0">
          <div class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            <img *ngIf="v.photos?.[0]" [src]="imageUrl(v.photos![0])" [alt]="v.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!v.photos?.[0]"
              class="flex h-full items-center justify-center text-2xl opacity-30">{{ typeIcon(v.type) }}</div>
          </div>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-gray-800 dark:text-white/90">{{ v.name }}</p>
            <div class="mt-1 flex flex-wrap gap-1">
              <span *ngIf="v.verificationStatus === 'PENDING'"
                class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">\u23F3 EN REVISI\xD3N</span>
              <span *ngIf="v.verificationStatus === 'APPROVED'"
                class="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">\u2713 VERIFICADA</span>
              <span *ngIf="v.verificationStatus === 'REJECTED'"
                class="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">\u2717 RECHAZADA</span>
            </div>
          </div>
        </div>

        <!-- Tipo / Capacidad -->
        <div class="col-span-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ typeIcon(v.type) }} {{ typeLabel(v.type) }}</p>
          <p class="text-xs text-gray-400">\u{1F465} {{ v.capacity }} pax</p>
          <p *ngIf="v.year" class="text-xs text-gray-400">\u{1F4C5} {{ v.year }}</p>
        </div>

        <!-- Precio -->
        <div class="col-span-2 text-right">
          <ng-container *ngIf="v.type === 'LANCHA'">
            <p class="text-sm font-bold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(v.pricePerPerson ?? 0) }}</p>
            <p class="text-xs text-gray-400">\${{ v.pricePerPerson | number:'1.2-2' }} / persona</p>
          </ng-container>
          <ng-container *ngIf="v.type !== 'LANCHA'">
            <p class="text-sm font-bold text-brand-600 dark:text-brand-400">{{ tasaService.formatBs(v.pricePerDay ?? 0) }}</p>
            <p class="text-xs text-gray-400">\${{ v.pricePerDay | number:'1.2-2' }} / noche</p>
          </ng-container>
        </div>

        <!-- Estado -->
        <div class="col-span-1 flex justify-center">
          <button *ngIf="v.verificationStatus === 'APPROVED'"
            (click)="toggleAvailability(v, $event)" [disabled]="toggling === v.id"
            class="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
            [class.bg-green-100]="v.isAvailable" [class.text-green-700]="v.isAvailable"
            [class.bg-gray-100]="!v.isAvailable" [class.text-gray-500]="!v.isAvailable">
            {{ toggling === v.id ? '...' : (v.isAvailable ? 'Activa' : 'Pausada') }}
          </button>
          <span *ngIf="v.verificationStatus !== 'APPROVED'" class="text-xs text-gray-400">\u2014</span>
        </div>

        <!-- Acciones -->
        <div class="col-span-2 flex items-center justify-center gap-2">
          <a [routerLink]="['/mi-charter/yates', v.id, 'editar']"
            class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
            Editar
          </a>
          <a *ngIf="v.verificationStatus === 'APPROVED'"
            [routerLink]="['/mi-charter/reservas']" [queryParams]="{ vesselId: v.id }"
            class="rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-50 transition dark:border-brand-500/30">
            Reservas
          </a>
        </div>

      </div>
    </div>
    </div><!-- /divide-y -->
  </div><!-- /card -->

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaYatesComponent, { className: "ListaYatesComponent", filePath: "src/app/pages/mi-charter/pages/lista-yates/lista-yates.component.ts", lineNumber: 18 });
})();
export {
  ListaYatesComponent
};
//# sourceMappingURL=chunk-YK2IVZDA.js.map
