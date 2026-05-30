import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/embarcaciones/pages/lista-embarcaciones/lista-embarcaciones.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/embarcaciones/editar", a0];
function ListaEmbarcacionesComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function ListaEmbarcacionesComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, ListaEmbarcacionesComponent_div_37_div_1_Template, 1, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ListaEmbarcacionesComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "No hay embarcaciones con ese criterio.");
    \u0275\u0275elementEnd()();
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(e_r1.photos[0]), \u0275\u0275sanitizeUrl)("alt", e_r1.name);
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeIcon(e_r1.type), " ");
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4F7} ", e_r1.photos.length, " ");
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3E2} ", e_r1.provider.companyName);
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sin proveedor");
    \u0275\u0275elementEnd();
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", e_r1.pricePerDay, "/d\xEDa ");
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2717 ", e_r1.rejectionReason, " ");
  }
}
function ListaEmbarcacionesComponent_div_39_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "div", 29);
    \u0275\u0275template(2, ListaEmbarcacionesComponent_div_39_a_1_img_2_Template, 1, 2, "img", 30)(3, ListaEmbarcacionesComponent_div_39_a_1_div_3_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ListaEmbarcacionesComponent_div_39_a_1_span_6_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35)(9, "div", 36)(10, "p", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 40)(17, "div", 38);
    \u0275\u0275template(18, ListaEmbarcacionesComponent_div_39_a_1_span_18_Template, 2, 1, "span", 41)(19, ListaEmbarcacionesComponent_div_39_a_1_span_19_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ListaEmbarcacionesComponent_div_39_a_1_span_20_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ListaEmbarcacionesComponent_div_39_a_1_div_21_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, e_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", e_r1.photos == null ? null : e_r1.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(e_r1.photos == null ? null : e_r1.photos[0]));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.verifClass(e_r1.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verifLabel(e_r1.verificationStatus), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((e_r1.photos == null ? null : e_r1.photos.length) ?? 0) > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(e_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.typeIcon(e_r1.type), " ", e_r1.type, " \xB7 ", e_r1.capacity, " pax");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(e_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(e_r1.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", e_r1.provider == null ? null : e_r1.provider.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(e_r1.provider == null ? null : e_r1.provider.companyName));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r1.pricePerDay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r1.verificationStatus === "REJECTED" && e_r1.rejectionReason);
  }
}
function ListaEmbarcacionesComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, ListaEmbarcacionesComponent_div_39_a_1_Template, 22, 18, "a", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginated);
  }
}
function ListaEmbarcacionesComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "p", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "button", 52);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_div_40_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = ctx_r1.page - 1);
    });
    \u0275\u0275text(5, " \u2190 Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275listener("click", function ListaEmbarcacionesComponent_div_40_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page = ctx_r1.page + 1);
    });
    \u0275\u0275text(7, " Siguiente \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r1.page, " de ", ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === ctx_r1.totalPages);
  }
}
var ListaEmbarcacionesComponent = class _ListaEmbarcacionesComponent {
  service = inject(EmbarcacionesService);
  loading = false;
  embarcaciones = [];
  search = "";
  filtroTipo = "";
  tab = "TODAS";
  page = 1;
  limit = 12;
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (d) => {
        this.embarcaciones = d ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get filtered() {
    const q = this.search.trim().toLowerCase();
    return this.embarcaciones.filter((e) => {
      const matchTab = this.tab === "TODAS" || e.verificationStatus === this.tab;
      const matchTipo = !this.filtroTipo || e.type === this.filtroTipo;
      const matchQ = !q || e.name.toLowerCase().includes(q) || (e.licensePlate ?? "").toLowerCase().includes(q) || (e.provider?.companyName ?? "").toLowerCase().includes(q);
      return matchTab && matchTipo && matchQ;
    });
  }
  get paginated() {
    return this.filtered.slice((this.page - 1) * this.limit, this.page * this.limit);
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.filtered.length / this.limit));
  }
  count(v) {
    if (v === "TODAS")
      return this.embarcaciones.length;
    return this.embarcaciones.filter((e) => e.verificationStatus === v).length;
  }
  setTab(t) {
    this.tab = t;
    this.page = 1;
  }
  // Helpers
  imageUrl(p) {
    return p?.startsWith("http") ? p : `${environment.apiUrl.replace("/api", "")}${p}`;
  }
  typeIcon(t) {
    return { LANCHA: "\u{1F6A4}", YATE: "\u26F5", CATAMARAN: "\u{1FAB8}", BOTE: "\u{1F6F6}" }[t] ?? "\u{1F6A2}";
  }
  statusClass(s) {
    return {
      ACTIVE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      MAINTENANCE: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      INACTIVE: "bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400"
    }[s] ?? "";
  }
  statusLabel(s) {
    return { ACTIVE: "Activa", MAINTENANCE: "Mantenimiento", INACTIVE: "Inactiva" }[s] ?? s;
  }
  verifClass(s) {
    return {
      APPROVED: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      REJECTED: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      PENDING: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
    }[s] ?? "";
  }
  verifLabel(s) {
    return { APPROVED: "\u2713 Aprobada", REJECTED: "\u2717 Rechazada", PENDING: "\u23F3 Pendiente" }[s] ?? s;
  }
  static \u0275fac = function ListaEmbarcacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaEmbarcacionesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaEmbarcacionesComponent, selectors: [["app-lista-embarcaciones"]], decls: 41, vars: 14, consts: [[1, "space-y-5"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "items-center", "gap-2", "rounded-full", "border", "px-4", "py-2", "text-sm", "font-semibold", "transition", 3, "click", "ngClass"], [1, "rounded-full", "bg-white/20", "px-1.5", "text-xs"], [1, "rounded-full", "bg-amber-600/20", "px-1.5", "text-xs"], [1, "rounded-full", "bg-green-600/20", "px-1.5", "text-xs"], [1, "rounded-full", "bg-red-600/20", "px-1.5", "text-xs"], [1, "flex", "flex-col", "gap-3", "sm:flex-row"], ["placeholder", "Buscar por nombre, matr\xEDcula, proveedor\u2026", 1, "flex-1", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "LANCHA"], ["value", "YATE"], ["value", "CATAMARAN"], ["value", "BOTE"], ["class", "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700", 4, "ngIf"], ["class", "flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-3.5 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "grid", "gap-4", "sm:grid-cols-2", "xl:grid-cols-3"], ["class", "h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]", 4, "ngFor", "ngForOf"], [1, "h-56", "animate-pulse", "rounded-2xl", "bg-gray-100", "dark:bg-white/[0.04]"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-200", "p-14", "text-center", "dark:border-gray-700"], [1, "mb-3", "text-5xl"], [1, "text-gray-500", "dark:text-gray-400"], ["class", "group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/40", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "group", "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "transition", "hover:border-brand-300", "hover:shadow-md", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:hover:border-brand-500/40", 3, "routerLink"], [1, "relative", "h-40", "overflow-hidden", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "dark:from-slate-800", "dark:to-slate-700"], ["class", "h-full w-full object-cover transition group-hover:scale-105", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-5xl opacity-30", 4, "ngIf"], [1, "absolute", "right-2", "top-2", "rounded-full", "px-2.5", "py-1", "text-[10px]", "font-bold", 3, "ngClass"], ["class", "absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white", 4, "ngIf"], [1, "p-4"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0"], [1, "truncate", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "flex-shrink-0", "rounded-full", "px-2.5", "py-1", "text-[10px]", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "items-center", "justify-between"], [4, "ngIf"], ["class", "text-sm font-bold text-brand-600 dark:text-brand-400", 4, "ngIf"], ["class", "mt-2 rounded-lg bg-red-50 p-2 text-[10px] text-red-600 dark:bg-red-500/10 dark:text-red-400 line-clamp-2", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", "transition", "group-hover:scale-105", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-5xl", "opacity-30"], [1, "absolute", "bottom-2", "left-2", "rounded-full", "bg-black/50", "px-2", "py-0.5", "text-[10px]", "text-white"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "mt-2", "rounded-lg", "bg-red-50", "p-2", "text-[10px]", "text-red-600", "dark:bg-red-500/10", "dark:text-red-400", "line-clamp-2"], [1, "flex", "items-center", "justify-between", "rounded-2xl", "border", "border-gray-200", "bg-white", "px-5", "py-3.5", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "disabled:opacity-40", "dark:border-gray-700", "dark:text-gray-400", 3, "click", "disabled"]], template: function ListaEmbarcacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u2693 Embarcaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestiona y supervisa toda la flota registrada");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function ListaEmbarcacionesComponent_Template_button_click_8_listener() {
        return ctx.setTab("TODAS");
      });
      \u0275\u0275text(9, " Todas ");
      \u0275\u0275elementStart(10, "span", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275listener("click", function ListaEmbarcacionesComponent_Template_button_click_12_listener() {
        return ctx.setTab("PENDING");
      });
      \u0275\u0275text(13, " \u23F3 Pendientes ");
      \u0275\u0275elementStart(14, "span", 7);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 5);
      \u0275\u0275listener("click", function ListaEmbarcacionesComponent_Template_button_click_16_listener() {
        return ctx.setTab("APPROVED");
      });
      \u0275\u0275text(17, " \u2713 Aprobadas ");
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 5);
      \u0275\u0275listener("click", function ListaEmbarcacionesComponent_Template_button_click_20_listener() {
        return ctx.setTab("REJECTED");
      });
      \u0275\u0275text(21, " \u2717 Rechazadas ");
      \u0275\u0275elementStart(22, "span", 9);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_input_ngModelChange_25_listener() {
        return ctx.page = 1;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroTipo, $event) || (ctx.filtroTipo = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaEmbarcacionesComponent_Template_select_ngModelChange_26_listener() {
        return ctx.page = 1;
      });
      \u0275\u0275elementStart(27, "option", 13);
      \u0275\u0275text(28, "Todos los tipos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 14);
      \u0275\u0275text(30, "\u{1F6A4} Lancha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 15);
      \u0275\u0275text(32, "\u26F5 Yate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 16);
      \u0275\u0275text(34, "\u{1FAB8} Catamar\xE1n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 17);
      \u0275\u0275text(36, "\u{1F6F6} Bote");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, ListaEmbarcacionesComponent_div_37_Template, 2, 2, "div", 18)(38, ListaEmbarcacionesComponent_div_38_Template, 5, 0, "div", 19)(39, ListaEmbarcacionesComponent_div_39_Template, 2, 1, "div", 18)(40, ListaEmbarcacionesComponent_div_40_Template, 8, 4, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", ctx.tab === "TODAS" ? "border-gray-800 bg-gray-800 text-white dark:border-white dark:bg-white dark:text-gray-900" : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.count("TODAS"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.tab === "PENDING" ? "border-amber-500 bg-amber-500 text-white" : "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.count("PENDING"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.tab === "APPROVED" ? "border-green-500 bg-green-500 text-white" : "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.count("APPROVED"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.tab === "REJECTED" ? "border-red-500 bg-red-500 text-white" : "border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.count("REJECTED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroTipo);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.paginated.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaEmbarcacionesComponent, [{
    type: Component,
    args: [{ selector: "app-lista-embarcaciones", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-5">

  <!-- Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">\u2693 Embarcaciones</h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona y supervisa toda la flota registrada</p>
    </div>
  </div>

  <!-- Stats chips -->
  <div class="flex flex-wrap gap-3">
    <button (click)="setTab('TODAS')"
      class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
      [ngClass]="tab === 'TODAS'
        ? 'border-gray-800 bg-gray-800 text-white dark:border-white dark:bg-white dark:text-gray-900'
        : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-white/[0.03] dark:text-gray-400'">
      Todas <span class="rounded-full bg-white/20 px-1.5 text-xs">{{ count('TODAS') }}</span>
    </button>
    <button (click)="setTab('PENDING')"
      class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
      [ngClass]="tab === 'PENDING'
        ? 'border-amber-500 bg-amber-500 text-white'
        : 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400'">
      \u23F3 Pendientes <span class="rounded-full bg-amber-600/20 px-1.5 text-xs">{{ count('PENDING') }}</span>
    </button>
    <button (click)="setTab('APPROVED')"
      class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
      [ngClass]="tab === 'APPROVED'
        ? 'border-green-500 bg-green-500 text-white'
        : 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400'">
      \u2713 Aprobadas <span class="rounded-full bg-green-600/20 px-1.5 text-xs">{{ count('APPROVED') }}</span>
    </button>
    <button (click)="setTab('REJECTED')"
      class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
      [ngClass]="tab === 'REJECTED'
        ? 'border-red-500 bg-red-500 text-white'
        : 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400'">
      \u2717 Rechazadas <span class="rounded-full bg-red-600/20 px-1.5 text-xs">{{ count('REJECTED') }}</span>
    </button>
  </div>

  <!-- Buscador -->
  <div class="flex flex-col gap-3 sm:flex-row">
    <input [(ngModel)]="search" (ngModelChange)="page=1" placeholder="Buscar por nombre, matr\xEDcula, proveedor\u2026"
      class="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
    <select [(ngModel)]="filtroTipo" (ngModelChange)="page=1"
      class="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <option value="">Todos los tipos</option>
      <option value="LANCHA">\u{1F6A4} Lancha</option>
      <option value="YATE">\u26F5 Yate</option>
      <option value="CATAMARAN">\u{1FAB8} Catamar\xE1n</option>
      <option value="BOTE">\u{1F6F6} Bote</option>
    </select>
  </div>

  <!-- Skeleton -->
  <div *ngIf="loading" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    <div *ngFor="let _ of [1,2,3,4,5,6]"
      class="h-56 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]"></div>
  </div>

  <!-- Vac\xEDo -->
  <div *ngIf="!loading && filtered.length === 0"
    class="rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700">
    <div class="mb-3 text-5xl">\u2693</div>
    <p class="text-gray-500 dark:text-gray-400">No hay embarcaciones con ese criterio.</p>
  </div>

  <!-- Grid de cards -->
  <div *ngIf="!loading && paginated.length > 0" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    <a *ngFor="let e of paginated" [routerLink]="['/embarcaciones/editar', e.id]"
      class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-500/40">

      <!-- Foto -->
      <div class="relative h-40 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
        <img *ngIf="e.photos?.[0]" [src]="imageUrl(e.photos![0])" [alt]="e.name"
          class="h-full w-full object-cover transition group-hover:scale-105" />
        <div *ngIf="!e.photos?.[0]"
          class="flex h-full items-center justify-center text-5xl opacity-30">
          {{ typeIcon(e.type) }}
        </div>
        <!-- Verificaci\xF3n badge -->
        <span class="absolute right-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold"
          [ngClass]="verifClass(e.verificationStatus)">
          {{ verifLabel(e.verificationStatus) }}
        </span>
        <!-- Fotos count -->
        <span *ngIf="(e.photos?.length ?? 0) > 1"
          class="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white">
          \u{1F4F7} {{ e.photos!.length }}
        </span>
      </div>

      <!-- Info -->
      <div class="p-4">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <p class="truncate font-bold text-gray-800 dark:text-white/90">{{ e.name }}</p>
            <p class="text-xs text-gray-400">{{ typeIcon(e.type) }} {{ e.type }} \xB7 {{ e.capacity }} pax</p>
          </div>
          <span class="flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold"
            [ngClass]="statusClass(e.status)">
            {{ statusLabel(e.status) }}
          </span>
        </div>

        <div class="mt-3 flex items-center justify-between">
          <div class="text-xs text-gray-400">
            <span *ngIf="e.provider?.companyName">\u{1F3E2} {{ e.provider!.companyName }}</span>
            <span *ngIf="!e.provider?.companyName">Sin proveedor</span>
          </div>
          <span *ngIf="e.pricePerDay" class="text-sm font-bold text-brand-600 dark:text-brand-400">
            \${{ e.pricePerDay }}/d\xEDa
          </span>
        </div>

        <!-- Rechazo reason -->
        <div *ngIf="e.verificationStatus === 'REJECTED' && e.rejectionReason"
          class="mt-2 rounded-lg bg-red-50 p-2 text-[10px] text-red-600 dark:bg-red-500/10 dark:text-red-400 line-clamp-2">
          \u2717 {{ e.rejectionReason }}
        </div>
      </div>

    </a>
  </div>

  <!-- Paginaci\xF3n -->
  <div *ngIf="!loading && totalPages > 1"
    class="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-3.5 dark:border-gray-800 dark:bg-white/[0.03]">
    <p class="text-sm text-gray-500">P\xE1gina {{ page }} de {{ totalPages }}</p>
    <div class="flex gap-2">
      <button (click)="page = page - 1" [disabled]="page === 1"
        class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
        \u2190 Anterior
      </button>
      <button (click)="page = page + 1" [disabled]="page === totalPages"
        class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:text-gray-400">
        Siguiente \u2192
      </button>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaEmbarcacionesComponent, { className: "ListaEmbarcacionesComponent", filePath: "src/app/pages/embarcaciones/pages/lista-embarcaciones/lista-embarcaciones.component.ts", lineNumber: 18 });
})();
export {
  ListaEmbarcacionesComponent
};
//# sourceMappingURL=chunk-YDNYRADC.js.map
