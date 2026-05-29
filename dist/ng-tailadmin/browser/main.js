import {
  UserRole
} from "./chunk-TD6O4IY7.js";
import {
  NotificacionesService
} from "./chunk-N4MMPEOR.js";
import {
  UsuariosService
} from "./chunk-J3XAW4YV.js";
import {
  TicketsService
} from "./chunk-4C5T4XRR.js";
import {
  PaymentAccountsService
} from "./chunk-XARPOOSK.js";
import {
  PagosService
} from "./chunk-KAI4EMGQ.js";
import {
  ImageUploadComponent
} from "./chunk-CHEEZELV.js";
import {
  AlquileresService
} from "./chunk-R5MJQUPH.js";
import {
  TasaService
} from "./chunk-WSNZJFQG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-X6ED7CSN.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  ActivatedRoute,
  DomSanitizer,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-AJH5TJUW.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  HostListener,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Output,
  Pipe,
  Subscription,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  combineLatest,
  computed,
  environment,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  take,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-6L3J4MHE.js";

// src/app/shared/pipe/safe-html.pipe.ts
var SafeHtmlPipe = class _SafeHtmlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeHtml", type: _SafeHtmlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{ name: "safeHtml" }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/shared/layout/app-sidebar/app-sidebar-widget.component.ts
var SidebarWidgetComponent = class _SidebarWidgetComponent {
  static \u0275fac = function SidebarWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarWidgetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarWidgetComponent, selectors: [["app-sidebar-widget"]], decls: 7, vars: 0, consts: [[1, "mx-auto", "mb-10", "w-full", "max-w-60", "rounded-2xl", "bg-gray-50", "px-4", "py-5", "text-center", "dark:bg-white/[0.03]"], [1, "mb-2", "font-semibold", "text-gray-900", "dark:text-white"], [1, "mb-4", "text-gray-500", "text-theme-sm", "dark:text-gray-400"], ["href", "pedidos/kiosko", "target", "_blank", "rel", "nofollow", 1, "flex", "items-center", "justify-center", "p-3", "font-medium", "text-white", "rounded-lg", "bg-brand-500", "text-theme-sm", "hover:bg-brand-600"]], template: function SidebarWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, " Brisa C.A. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p", 2);
      \u0275\u0275text(4, " Repuestos Industriales, Tecnolog\xEDa, Servicios y mucho m\xE1s... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "a", 3);
      \u0275\u0275text(6, " Crea tu cotizacion aqui! ");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarWidgetComponent, [{
    type: Component,
    args: [{
      selector: "app-sidebar-widget",
      template: `
    <div
      class="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]"
    >
      <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
        Brisa C.A.
      </h3>
      <p class="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Repuestos Industriales, Tecnolog\xEDa, Servicios y mucho m\xE1s...
      </p>
      <a
        href="pedidos/kiosko"
        target="_blank"
        rel="nofollow"
        class="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Crea tu cotizacion aqui!
      </a>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarWidgetComponent, { className: "SidebarWidgetComponent", filePath: "src/app/shared/layout/app-sidebar/app-sidebar-widget.component.ts", lineNumber: 26 });
})();

// src/app/shared/services/sidebar.service.ts
var SidebarService = class _SidebarService {
  isExpandedSubject = new BehaviorSubject(true);
  isMobileOpenSubject = new BehaviorSubject(false);
  isHoveredSubject = new BehaviorSubject(false);
  isExpanded$ = this.isExpandedSubject.asObservable();
  isMobileOpen$ = this.isMobileOpenSubject.asObservable();
  isHovered$ = this.isHoveredSubject.asObservable();
  setExpanded(val) {
    this.isExpandedSubject.next(val);
  }
  toggleExpanded() {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }
  setMobileOpen(val) {
    this.isMobileOpenSubject.next(val);
  }
  toggleMobileOpen() {
    this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value);
  }
  setHovered(val) {
    this.isHoveredSubject.next(val);
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/layout/app-sidebar/app-sidebar.component.ts
var _c0 = ["subMenu"];
var _c1 = (a0, a1, a2, a3) => ({ "w-[290px]": a0, "w-[90px]": a1, "translate-x-0": a2, "-translate-x-full": a3, "xl:translate-x-0": true });
var _c2 = (a0, a1) => ({ "justify-start": a0, "justify-center": a1 });
var _c3 = (a0, a1) => ({ "justify-start": a0, "xl:justify-center": a1 });
var _c4 = (a0, a1) => ({ "xl:justify-center": a0, "xl:justify-start": a1 });
var _c5 = (a0) => ({ height: a0 });
var _c6 = (a0, a1) => ({ "menu-dropdown-badge-active": a0, "menu-dropdown-badge-inactive": a1 });
var _c7 = (a0) => ({ "rotate-180 text-brand-500": a0 });
var _c8 = (a0, a1) => ({ "menu-dropdown-item-inactive": a0, "menu-dropdown-item-active": a1 });
var _c9 = (a0, a1) => ({ "menu-dropdown-badge-pro-active": a0, "menu-dropdown-badge-pro-inactive": a1 });
var _c10 = (a0, a1, a2) => ({ "menu-item-inactive": a0, "xl:justify-center": a1, "xl:justify-start": a2 });
var _c11 = (a0, a1) => ({ "menu-item-icon-active": a0, "menu-item-icon-inactive": a1 });
var _c12 = (a0, a1, a2, a3) => ({ "menu-item-active": a0, "menu-item-inactive": a1, "xl:justify-center": a2, "xl:justify-start": a3 });
function AppSidebarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10)(1, "img", 11);
  }
}
function AppSidebarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
}
function AppSidebarComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.authService.role() === "MASTER" || ctx_r0.authService.role() === "ADMINISTRADOR" ? "Monitoreo" : "Principal", " ");
  }
}
function AppSidebarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function AppSidebarComponent_For_36_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", nav_r4.name, " ");
  }
}
function AppSidebarComponent_For_36_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, " new ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_56_r3 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c6, ctx_r0.openSubmenu === "main-" + \u0275$index_56_r3, ctx_r0.openSubmenu !== "main-" + \u0275$index_56_r3));
  }
}
function AppSidebarComponent_For_36_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_56_r3 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c7, ctx_r0.openSubmenu === "main-" + \u0275$index_56_r3));
  }
}
function AppSidebarComponent_For_36_Conditional_1_For_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, " new ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subItem_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c6, ctx_r0.isActive(subItem_r6.path), !ctx_r0.isActive(subItem_r6.path)));
  }
}
function AppSidebarComponent_For_36_Conditional_1_For_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, " pro ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subItem_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c9, ctx_r0.isActive(subItem_r6.path), !ctx_r0.isActive(subItem_r6.path)));
  }
}
function AppSidebarComponent_For_36_Conditional_1_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275listener("click", function AppSidebarComponent_For_36_Conditional_1_For_25_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSubmenuClick());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275conditionalCreate(4, AppSidebarComponent_For_36_Conditional_1_For_25_Conditional_4_Template, 2, 4, "span", 23);
    \u0275\u0275conditionalCreate(5, AppSidebarComponent_For_36_Conditional_1_For_25_Conditional_5_Template, 2, 4, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subItem_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subItem_r6.path)("ngClass", \u0275\u0275pureFunction2(5, _c8, !ctx_r0.isActive(subItem_r6.path), ctx_r0.isActive(subItem_r6.path)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subItem_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(subItem_r6.new ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(subItem_r6.pro ? 5 : -1);
  }
}
function AppSidebarComponent_For_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function AppSidebarComponent_For_36_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const \u0275$index_56_r3 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSubmenu("main", \u0275$index_56_r3));
    });
    \u0275\u0275element(5, "span", 14);
    \u0275\u0275pipe(6, "safeHtml");
    \u0275\u0275conditionalCreate(7, AppSidebarComponent_For_36_Conditional_1_Conditional_7_Template, 2, 1, "span", 15);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275conditionalCreate(11, AppSidebarComponent_For_36_Conditional_1_Conditional_11_Template, 2, 4, "span", 16);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, AppSidebarComponent_For_36_Conditional_1_Conditional_15_Template, 2, 3, ":svg:svg", 17);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementStart(23, "ul", 19);
    \u0275\u0275repeaterCreate(24, AppSidebarComponent_For_36_Conditional_1_For_25_Template, 6, 8, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const nav_r4 = ctx_r6.$implicit;
    const \u0275$index_56_r3 = ctx_r6.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("menu-item-active", ctx_r0.openSubmenu === "main-" + \u0275$index_56_r3)("menu-item-inactive", ctx_r0.openSubmenu !== "main-" + \u0275$index_56_r3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(51, _c4, !(\u0275\u0275pipeBind1(1, 17, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(2, 19, ctx_r0.isHovered$)), \u0275\u0275pipeBind1(3, 21, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(4, 23, ctx_r0.isHovered$)));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("menu-item-icon-active", ctx_r0.openSubmenu === "main-" + \u0275$index_56_r3)("menu-item-icon-inactive", ctx_r0.openSubmenu !== "main-" + \u0275$index_56_r3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 25, nav_r4.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 27, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(9, 29, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(10, 31, ctx_r0.isMobileOpen$) ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(nav_r4.new && (\u0275\u0275pipeBind1(12, 33, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(13, 35, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(14, 37, ctx_r0.isMobileOpen$)) ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(16, 39, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(17, 41, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(18, 43, ctx_r0.isMobileOpen$) ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("display", \u0275\u0275pipeBind1(20, 45, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(21, 47, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(22, 49, ctx_r0.isMobileOpen$) ? "block" : "none");
    \u0275\u0275property("id", "main-" + \u0275$index_56_r3)("ngStyle", \u0275\u0275pureFunction1(54, _c5, ctx_r0.openSubmenu === "main-" + \u0275$index_56_r3 ? (ctx_r0.subMenuHeights["main-" + \u0275$index_56_r3] || 0) + "px" : "0px"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(nav_r4.subItems);
  }
}
function AppSidebarComponent_For_36_Conditional_2_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", nav_r4.name, " ");
  }
}
function AppSidebarComponent_For_36_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function AppSidebarComponent_For_36_Conditional_2_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSubmenuClick());
    });
    \u0275\u0275element(5, "span", 27);
    \u0275\u0275pipe(6, "safeHtml");
    \u0275\u0275conditionalCreate(7, AppSidebarComponent_For_36_Conditional_2_Conditional_0_Conditional_7_Template, 2, 1, "span", 15);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", nav_r4.path)("ngClass", \u0275\u0275pureFunction3(21, _c10, !ctx_r0.isActive(nav_r4.path), !(\u0275\u0275pipeBind1(1, 5, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(2, 7, ctx_r0.isHovered$)), \u0275\u0275pipeBind1(3, 9, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(4, 11, ctx_r0.isHovered$)));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c11, ctx_r0.isActive(nav_r4.path), !ctx_r0.isActive(nav_r4.path)))("innerHTML", \u0275\u0275pipeBind1(6, 13, nav_r4.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 15, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(9, 17, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(10, 19, ctx_r0.isMobileOpen$) ? 7 : -1);
  }
}
function AppSidebarComponent_For_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppSidebarComponent_For_36_Conditional_2_Conditional_0_Template, 11, 28, "a", 25);
  }
  if (rf & 2) {
    const nav_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(nav_r4.path ? 0 : -1);
  }
}
function AppSidebarComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, AppSidebarComponent_For_36_Conditional_1_Template, 26, 56)(2, AppSidebarComponent_For_36_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(nav_r4.subItems ? 1 : 2);
  }
}
function AppSidebarComponent_Conditional_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Administraci\xF3n ");
  }
}
function AppSidebarComponent_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", nav_r11.name, " ");
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, " new ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_153_r10 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c6, ctx_r0.openSubmenu === "others-" + \u0275$index_153_r10, ctx_r0.openSubmenu !== "others-" + \u0275$index_153_r10));
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_153_r10 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c7, ctx_r0.openSubmenu === "others-" + \u0275$index_153_r10));
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, " new ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subItem_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c6, ctx_r0.isActive(subItem_r13.path), !ctx_r0.isActive(subItem_r13.path)));
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, " pro ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subItem_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c9, ctx_r0.isActive(subItem_r13.path), !ctx_r0.isActive(subItem_r13.path)));
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275listener("click", function AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onSubmenuClick());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275conditionalCreate(4, AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Conditional_4_Template, 2, 4, "span", 23);
    \u0275\u0275conditionalCreate(5, AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Conditional_5_Template, 2, 4, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subItem_r13.path)("ngClass", \u0275\u0275pureFunction2(5, _c8, !ctx_r0.isActive(subItem_r13.path), ctx_r0.isActive(subItem_r13.path)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subItem_r13.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(subItem_r13.new ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(subItem_r13.pro ? 5 : -1);
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function AppSidebarComponent_Conditional_37_For_13_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_153_r10 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSubmenu("others", \u0275$index_153_r10));
    });
    \u0275\u0275element(5, "span", 27);
    \u0275\u0275pipe(6, "safeHtml");
    \u0275\u0275conditionalCreate(7, AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_7_Template, 2, 1, "span", 15);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275conditionalCreate(11, AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_11_Template, 2, 4, "span", 16);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, AppSidebarComponent_Conditional_37_For_13_Conditional_1_Conditional_15_Template, 2, 3, ":svg:svg", 17);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementStart(23, "ul", 19);
    \u0275\u0275repeaterCreate(24, AppSidebarComponent_Conditional_37_For_13_Conditional_1_For_25_Template, 6, 8, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    const nav_r11 = ctx_r13.$implicit;
    const \u0275$index_153_r10 = ctx_r13.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(44, _c12, ctx_r0.openSubmenu === "others-" + \u0275$index_153_r10, ctx_r0.openSubmenu !== "others-" + \u0275$index_153_r10, !(\u0275\u0275pipeBind1(1, 10, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(2, 12, ctx_r0.isHovered$)), \u0275\u0275pipeBind1(3, 14, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(4, 16, ctx_r0.isHovered$)));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(49, _c11, ctx_r0.openSubmenu === "others-" + \u0275$index_153_r10, ctx_r0.openSubmenu !== "others-" + \u0275$index_153_r10))("innerHTML", \u0275\u0275pipeBind1(6, 18, nav_r11.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 20, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(9, 22, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(10, 24, ctx_r0.isMobileOpen$) ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(nav_r11.new && (\u0275\u0275pipeBind1(12, 26, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(13, 28, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(14, 30, ctx_r0.isMobileOpen$)) ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(16, 32, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(17, 34, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(18, 36, ctx_r0.isMobileOpen$) ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("display", \u0275\u0275pipeBind1(20, 38, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(21, 40, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(22, 42, ctx_r0.isMobileOpen$) ? "block" : "none");
    \u0275\u0275property("id", "others-" + \u0275$index_153_r10)("ngStyle", \u0275\u0275pureFunction1(52, _c5, ctx_r0.openSubmenu === "others-" + \u0275$index_153_r10 ? (ctx_r0.subMenuHeights["others-" + \u0275$index_153_r10] || 0) + "px" : "0px"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(nav_r11.subItems);
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_2_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r11 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", nav_r11.name, " ");
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function AppSidebarComponent_Conditional_37_For_13_Conditional_2_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onSubmenuClick());
    });
    \u0275\u0275element(5, "span", 27);
    \u0275\u0275pipe(6, "safeHtml");
    \u0275\u0275conditionalCreate(7, AppSidebarComponent_Conditional_37_For_13_Conditional_2_Conditional_0_Conditional_7_Template, 2, 1, "span", 15);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", nav_r11.path)("ngClass", \u0275\u0275pureFunction3(21, _c10, !ctx_r0.isActive(nav_r11.path), !(\u0275\u0275pipeBind1(1, 5, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(2, 7, ctx_r0.isHovered$)), \u0275\u0275pipeBind1(3, 9, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(4, 11, ctx_r0.isHovered$)));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c11, ctx_r0.isActive(nav_r11.path), !ctx_r0.isActive(nav_r11.path)))("innerHTML", \u0275\u0275pipeBind1(6, 13, nav_r11.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 15, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(9, 17, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(10, 19, ctx_r0.isMobileOpen$) ? 7 : -1);
  }
}
function AppSidebarComponent_Conditional_37_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppSidebarComponent_Conditional_37_For_13_Conditional_2_Conditional_0_Template, 11, 28, "a", 25);
  }
  if (rf & 2) {
    const nav_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(nav_r11.path ? 0 : -1);
  }
}
function AppSidebarComponent_Conditional_37_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, AppSidebarComponent_Conditional_37_For_13_Conditional_1_Template, 26, 54)(2, AppSidebarComponent_Conditional_37_For_13_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(nav_r11.subItems ? 1 : 2);
  }
}
function AppSidebarComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275conditionalCreate(6, AppSidebarComponent_Conditional_37_Conditional_6_Template, 1, 0);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, AppSidebarComponent_Conditional_37_Conditional_10_Template, 2, 0, ":svg:svg", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 9);
    \u0275\u0275repeaterCreate(12, AppSidebarComponent_Conditional_37_For_13_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c3, \u0275\u0275pipeBind1(2, 2, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(3, 4, ctx_r0.isHovered$), !(\u0275\u0275pipeBind1(4, 6, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(5, 8, ctx_r0.isHovered$))));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(7, 10, ctx_r0.isExpanded$) || \u0275\u0275pipeBind1(8, 12, ctx_r0.isHovered$) || \u0275\u0275pipeBind1(9, 14, ctx_r0.isMobileOpen$) ? 6 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.filteredOthersItems);
  }
}
function AppSidebarComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sidebar-widget");
  }
}
var AppSidebarComponent = class _AppSidebarComponent {
  sidebarService;
  authService;
  router;
  cdr;
  // ─── Items visibles para CLIENTE ────────────────────────────────────────────
  // Modelo 1: Excursión colectiva a isla  (como Uber — varios clientes, un proveedor)
  // Modelo 2: Charter privado             (como Airbnb — cliente reserva toda la embarcación)
  clienteItems = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio"
    },
    {
      icon: `<i class="fas fa-chart-pie fa-lg"></i>`,
      name: "Mi Dashboard",
      path: "/mi-dashboard"
    },
    // ── Modelo 1 ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones a isla",
      path: "/buscar"
    },
    // ── Modelo 2 ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Alquilar embarcaci\xF3n",
      path: "/alquileres"
    },
    // ── Mis reservas ────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-calendar-check fa-lg"></i>`,
      name: "Mis reservas",
      path: "/mis-reservas"
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Mis pagos",
      path: "/pagos"
    },
    {
      icon: `<i class="fas fa-wallet fa-lg"></i>`,
      name: "Mi billetera",
      path: "/mis-metodos-pago"
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Mis rese\xF1as",
      path: "/resenas"
    },
    {
      icon: `<i class="fas fa-circle-question fa-lg"></i>`,
      name: "FAQ",
      path: "/faq"
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes"
    },
    {
      icon: `<i class="fas fa-headset fa-lg"></i>`,
      name: "Soporte",
      path: "/soporte/tickets"
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones"
    }
  ];
  // ─── Items visibles para PROVEEDOR ──────────────────────────────────────────
  // El proveedor es el dueño de la embarcación.
  // Gestiona su flota, define sus horarios de excursión y atiende las reservas recibidas.
  proveedorItems = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio"
    },
    {
      icon: `<i class="fas fa-chart-line fa-lg"></i>`,
      name: "Mi negocio",
      path: "/mi-negocio"
    },
    // ── Mi flota ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Mis embarcaciones",
      path: "/mi-charter/yates"
    },
    {
      icon: `<i class="fas fa-calendar-days fa-lg"></i>`,
      name: "Mis horarios",
      path: "/mi-charter/itinerario"
    },
    // ── Reservas recibidas ──────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones recibidas",
      path: "/reservas-isla"
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Charters contratados",
      path: "/mi-charter/reservas"
    },
    // ── Mi cuenta ───────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-university fa-lg"></i>`,
      name: "Datos bancarios",
      path: "/mis-cuentas-retiro"
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Rese\xF1as",
      path: "/resenas"
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes"
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones"
    }
  ];
  // ─── Items visibles para EMPLEADO ───────────────────────────────────────────
  empleadoItems = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones",
      path: "/reservas-isla"
    },
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Charters",
      path: "/alquileres"
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Verificar pagos",
      path: "/pagos"
    },
    {
      icon: `<i class="fas fa-coins fa-lg"></i>`,
      name: "Tasa del d\xEDa",
      path: "/tasas"
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones"
    }
  ];
  // ─── OPERACIONES: Items del día a día para ADMINISTRADOR y MASTER ─────────────
  // El master/admin es el soporte de la empresa:
  // aprueba pagos, aprueba proveedores, aprueba embarcaciones, monitorea todo.
  navItems = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      icon: `<i class="fas fa-chart-line fa-lg"></i>`,
      name: "Finanzas",
      path: "/finanzas",
      masterOnly: true
    },
    // ── Modelo 1: Excursiones a isla ────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones",
      path: "/reservas-isla"
    },
    // ── Modelo 2: Charters privados ─────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Charters",
      path: "/alquileres"
    },
    // ── Pagos y verificaciones ──────────────────────────────────────────────
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Pagos",
      path: "/pagos"
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Rese\xF1as",
      path: "/resenas"
    },
    {
      icon: `<i class="fas fa-headset fa-lg"></i>`,
      name: "Soporte",
      subItems: [
        { name: "Tickets", path: "/soporte/tickets" },
        { name: "Chat / Mensajes", path: "/mensajes" }
      ]
    },
    {
      icon: `<i class="fas fa-circle-question fa-lg"></i>`,
      name: "FAQ",
      path: "/faq"
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes"
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones"
    }
  ];
  // ─── ADMINISTRACIÓN: Catálogo y configuración del sistema ────────────────────
  othersItems = [
    // ── Aprobaciones ────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Embarcaciones",
      subItems: [
        { name: "Todas las embarcaciones", path: "/embarcaciones" },
        { name: "Pendientes de aprobaci\xF3n", path: "/embarcaciones/verificar" }
      ]
    },
    {
      icon: `<i class="fas fa-users fa-lg"></i>`,
      name: "Usuarios",
      subItems: [
        { name: "Lista de usuarios", path: "/usuarios" },
        { name: "Nuevo usuario", path: "/usuarios/crear" }
      ]
    },
    // ── Configuración ────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-map-pin fa-lg"></i>`,
      name: "Puntos de salida",
      path: "/puntos-salida"
    },
    {
      icon: `<i class="fas fa-credit-card fa-lg"></i>`,
      name: "M\xE9todos de cobro",
      path: "/metodos-cobro"
    },
    {
      icon: `<i class="fas fa-coins fa-lg"></i>`,
      name: "Tasas de cambio",
      path: "/tasas"
    }
  ];
  openSubmenu = null;
  subMenuHeights = {};
  subMenuRefs;
  isExpanded$;
  isMobileOpen$;
  isHovered$;
  subscription = new Subscription();
  constructor(sidebarService, authService, router, cdr) {
    this.sidebarService = sidebarService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.isHovered$ = this.sidebarService.isHovered$;
  }
  ngOnInit() {
    this.subscription.add(this.router.events.subscribe((event2) => {
      if (event2 instanceof NavigationEnd) {
        this.setActiveMenuFromRoute(this.router.url);
      }
    }));
    this.subscription.add(combineLatest([
      this.isExpanded$,
      this.isMobileOpen$,
      this.isHovered$
    ]).subscribe(([isExpanded, isMobileOpen, isHovered]) => {
      if (!isExpanded && !isMobileOpen && !isHovered) {
        this.cdr.detectChanges();
      }
    }));
    this.setActiveMenuFromRoute(this.router.url);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  isActive(path) {
    return this.router.url === path;
  }
  toggleSubmenu(section, index) {
    const key = `${section}-${index}`;
    if (this.openSubmenu === key) {
      this.openSubmenu = null;
      this.subMenuHeights[key] = 0;
      return;
    }
    this.openSubmenu = key;
    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        this.subMenuHeights[key] = el.scrollHeight;
        this.cdr.detectChanges();
      }
    });
  }
  onSidebarMouseEnter() {
    this.isExpanded$.subscribe((expanded) => {
      if (!expanded) {
        this.sidebarService.setHovered(true);
      }
    }).unsubscribe();
  }
  onSubmenuClick() {
    this.isMobileOpen$.subscribe((isMobile) => {
      if (isMobile) {
        this.sidebarService.setMobileOpen(false);
      }
    }).unsubscribe();
  }
  filterNavItemsByRole(items) {
    const role = this.authService.role();
    if (!role)
      return [];
    if (role === "MASTER" || role === "ADMINISTRADOR") {
      return items.filter((item) => !item.masterOnly || role === "MASTER");
    }
    if (role === "EMPLEADO") {
      return this.empleadoItems;
    }
    if (role === "PROVEEDOR") {
      return this.proveedorItems;
    }
    if (role === "CLIENTE") {
      return this.clienteItems;
    }
    return [];
  }
  filterOthersItemsByRole(items) {
    const role = this.authService.role();
    if (!role)
      return [];
    if (role === "MASTER" || role === "ADMINISTRADOR") {
      return items;
    }
    return [];
  }
  get filteredNavItems() {
    return this.filterNavItemsByRole(this.navItems);
  }
  get filteredOthersItems() {
    return this.filterOthersItemsByRole(this.othersItems);
  }
  setActiveMenuFromRoute(currentUrl) {
    const menuGroups = [
      { items: this.filteredNavItems, prefix: "main" },
      { items: this.filteredOthersItems, prefix: "others" }
    ];
    menuGroups.forEach((group) => {
      group.items.forEach((nav, i) => {
        if (nav.path && currentUrl === nav.path) {
          this.openSubmenu = null;
        }
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (currentUrl === subItem.path) {
              const key = `${group.prefix}-${i}`;
              this.openSubmenu = key;
              setTimeout(() => {
                const el = document.getElementById(key);
                if (el) {
                  this.subMenuHeights[key] = el.scrollHeight;
                  this.cdr.detectChanges();
                }
              });
            }
          });
        }
      });
    });
  }
  static \u0275fac = function AppSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebarComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebarComponent, selectors: [["app-sidebar"]], viewQuery: function AppSidebarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subMenuRefs = _t);
    }
  }, decls: 42, vars: 68, consts: [[1, "fixed", "top-0", "left-0", "z-50", "flex", "h-screen", "flex-col", "border-r", "border-gray-200", "bg-white", "px-5", "text-gray-900", "transition-all", "duration-300", "ease-in-out", "dark:border-gray-800", "dark:bg-gray-900", 3, "mouseenter", "mouseleave", "ngClass"], [1, "flex", "items-center", "w-full", "duration-300", "ease-linear", 3, "ngClass"], ["routerLink", "/dashboard", 1, "flex", "items-center", "justify-center", "w-full"], ["src", "/images/logo/logo-icon.jpg", "alt", "Logo", "width", "32", "height", "32"], [1, "no-scrollbar", "flex", "flex-col", "overflow-y-auto", "duration-300", "ease-linear"], [1, "mb-6"], [1, "flex", "flex-col", "gap-4"], [1, "mb-4", "flex", "text-xs", "uppercase", "leading-[20px]", "text-gray-400", 3, "ngClass"], ["width", "1em", "height", "1em", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "size-6"], [1, "flex", "flex-col", "gap-1"], ["src", "/images/logo/logo.png", "alt", "Logo", "width", "300", "height", "40", "padding", "10", "margin-bottom", "10", 1, "dark:hidden"], ["src", "/images/logo/logo.png", "alt", "Logo", "width", "300", "height", "40", "padding", "10", "margin-bottom", "10", 1, "hidden", "dark:block"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z", "fill", "currentColor"], ["type", "button", 1, "menu-item", "group", "cursor-pointer", 3, "click", "ngClass"], [1, "menu-item-icon-size", 3, "innerHTML"], [1, "menu-item-text"], [1, "menu-dropdown-badge", "absolute", "right-10", "ml-auto", 3, "ngClass"], ["width", "1em", "height", "1em", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "ml-auto", "h-5", "w-5", "transition-transform", "duration-200", 3, "ngClass"], [1, "overflow-hidden", "transition-all", "duration-300", 3, "id", "ngStyle"], [1, "ml-9", "mt-2", "space-y-1"], ["d", "M4.79175 7.396L10.0001 12.6043L15.2084 7.396", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLinkActive", "", 1, "menu-dropdown-item", 3, "click", "routerLink", "ngClass"], [1, "ml-auto", "flex", "items-center", "gap-1"], [1, "menu-dropdown-badge", 3, "ngClass"], [1, "menu-dropdown-badge-pro", "ml-auto", 3, "ngClass"], ["routerLinkActive", "menu-item-active", 1, "menu-item", "group", 3, "routerLink", "ngClass"], ["routerLinkActive", "menu-item-active", 1, "menu-item", "group", 3, "click", "routerLink", "ngClass"], [1, "menu-item-icon-size", 3, "ngClass", "innerHTML"]], template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "async");
      \u0275\u0275pipe(4, "async");
      \u0275\u0275pipe(5, "async");
      \u0275\u0275pipe(6, "async");
      \u0275\u0275pipe(7, "async");
      \u0275\u0275pipe(8, "async");
      \u0275\u0275listener("mouseenter", function AppSidebarComponent_Template_aside_mouseenter_0_listener() {
        return ctx.onSidebarMouseEnter();
      })("mouseleave", function AppSidebarComponent_Template_aside_mouseleave_0_listener() {
        return ctx.sidebarService.setHovered(false);
      });
      \u0275\u0275elementStart(9, "div", 1);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275pipe(11, "async");
      \u0275\u0275pipe(12, "async");
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementStart(14, "a", 2);
      \u0275\u0275conditionalCreate(15, AppSidebarComponent_Conditional_15_Template, 2, 0);
      \u0275\u0275pipe(16, "async");
      \u0275\u0275pipe(17, "async");
      \u0275\u0275pipe(18, "async");
      \u0275\u0275conditionalBranchCreate(19, AppSidebarComponent_Conditional_19_Template, 1, 0, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 4)(21, "nav", 5)(22, "div", 6)(23, "div")(24, "h2", 7);
      \u0275\u0275pipe(25, "async");
      \u0275\u0275pipe(26, "async");
      \u0275\u0275pipe(27, "async");
      \u0275\u0275pipe(28, "async");
      \u0275\u0275conditionalCreate(29, AppSidebarComponent_Conditional_29_Template, 1, 1);
      \u0275\u0275pipe(30, "async");
      \u0275\u0275pipe(31, "async");
      \u0275\u0275pipe(32, "async");
      \u0275\u0275conditionalBranchCreate(33, AppSidebarComponent_Conditional_33_Template, 2, 0, ":svg:svg", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 9);
      \u0275\u0275repeaterCreate(35, AppSidebarComponent_For_36_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, AppSidebarComponent_Conditional_37_Template, 14, 19, "div");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, AppSidebarComponent_Conditional_38_Template, 1, 0, "app-sidebar-widget");
      \u0275\u0275pipe(39, "async");
      \u0275\u0275pipe(40, "async");
      \u0275\u0275pipe(41, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(57, _c1, \u0275\u0275pipeBind1(1, 7, ctx.isExpanded$) || \u0275\u0275pipeBind1(2, 9, ctx.isMobileOpen$) || \u0275\u0275pipeBind1(3, 11, ctx.isHovered$), !(\u0275\u0275pipeBind1(4, 13, ctx.isExpanded$) || \u0275\u0275pipeBind1(5, 15, ctx.isMobileOpen$) || \u0275\u0275pipeBind1(6, 17, ctx.isHovered$)), \u0275\u0275pipeBind1(7, 19, ctx.isMobileOpen$), !\u0275\u0275pipeBind1(8, 21, ctx.isMobileOpen$)));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(62, _c2, \u0275\u0275pipeBind1(10, 23, ctx.isExpanded$) || \u0275\u0275pipeBind1(11, 25, ctx.isHovered$), !(\u0275\u0275pipeBind1(12, 27, ctx.isExpanded$) || \u0275\u0275pipeBind1(13, 29, ctx.isHovered$))));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(16, 31, ctx.isExpanded$) || \u0275\u0275pipeBind1(17, 33, ctx.isHovered$) || \u0275\u0275pipeBind1(18, 35, ctx.isMobileOpen$) ? 15 : 19);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(65, _c3, \u0275\u0275pipeBind1(25, 37, ctx.isExpanded$) || \u0275\u0275pipeBind1(26, 39, ctx.isHovered$), !(\u0275\u0275pipeBind1(27, 41, ctx.isExpanded$) || \u0275\u0275pipeBind1(28, 43, ctx.isHovered$))));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(30, 45, ctx.isExpanded$) || \u0275\u0275pipeBind1(31, 47, ctx.isHovered$) || \u0275\u0275pipeBind1(32, 49, ctx.isMobileOpen$) ? 29 : 33);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.filteredNavItems);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredOthersItems.length > 0 ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(39, 51, ctx.isExpanded$) || \u0275\u0275pipeBind1(40, 53, ctx.isHovered$) || \u0275\u0275pipeBind1(41, 55, ctx.isMobileOpen$) ? 38 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, RouterModule, RouterLink, RouterLinkActive, SidebarWidgetComponent, AsyncPipe, SafeHtmlPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule, SafeHtmlPipe, SidebarWidgetComponent], template: `<aside
  class="fixed top-0 left-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900"
  [ngClass]="{
    'w-[290px]':
      (isExpanded$ | async) || (isMobileOpen$ | async) || (isHovered$ | async),
    'w-[90px]': !(
      (isExpanded$ | async) ||
      (isMobileOpen$ | async) ||
      (isHovered$ | async)
    ),
    'translate-x-0': isMobileOpen$ | async,
    '-translate-x-full': !(isMobileOpen$ | async),
    'xl:translate-x-0': true,
  }"
  (mouseenter)="onSidebarMouseEnter()"
  (mouseleave)="sidebarService.setHovered(false)"
>
  <!-- Logo -->
  <div
    class="flex items-center w-full duration-300 ease-linear"
    [ngClass]="{
      'justify-start': (isExpanded$ | async) || (isHovered$ | async),
      'justify-center': !((isExpanded$ | async) || (isHovered$ | async)),
    }"
  >
    <a routerLink="/dashboard" class="flex items-center justify-center w-full">
      @if (
        (isExpanded$ | async) || (isHovered$ | async) || (isMobileOpen$ | async)
      ) {
        <img
          class="dark:hidden"
          src="/images/logo/logo.png"
          alt="Logo"
          width="300"
          height="40"
          padding="10"
          margin-bottom="10"
        />
        <img
          class="hidden dark:block"
          src="/images/logo/logo.png"
          alt="Logo"
          width="300"
          height="40"
          padding="10"
          margin-bottom="10"
        />
      } @else {
        <img
          src="/images/logo/logo-icon.jpg"
          alt="Logo"
          width="32"
          height="32"
        />
      }
    </a>
  </div>

  <div
    class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"
  >
    <nav class="mb-6">
      <div class="flex flex-col gap-4">
        <!-- PRINCIPAL -->
        <div>
          <h2
            class="mb-4 flex text-xs uppercase leading-[20px] text-gray-400"
            [ngClass]="{
              'justify-start': (isExpanded$ | async) || (isHovered$ | async),
              'xl:justify-center': !(
                (isExpanded$ | async) || (isHovered$ | async)
              ),
            }"
          >
            @if (
              (isExpanded$ | async) ||
              (isHovered$ | async) ||
              (isMobileOpen$ | async)
            ) {
              {{ (authService.role() === 'MASTER' || authService.role() === 'ADMINISTRADOR') ? 'Monitoreo' : 'Principal' }}
            } @else {
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
          </h2>

          <ul class="flex flex-col gap-1">
            @for (nav of filteredNavItems; track $index; let i = $index) {
              <li>
                @if (nav.subItems) {
                  <button
                    type="button"
                    (click)="toggleSubmenu('main', i)"
                    class="menu-item group cursor-pointer"
                    [class.menu-item-active]="openSubmenu === 'main-' + i"
                    [class.menu-item-inactive]="openSubmenu !== 'main-' + i"
                    [ngClass]="{
                      'xl:justify-center': !(
                        (isExpanded$ | async) || (isHovered$ | async)
                      ),
                      'xl:justify-start':
                        (isExpanded$ | async) || (isHovered$ | async),
                    }"
                  >
                    <span
                      class="menu-item-icon-size"
                      [class.menu-item-icon-active]="
                        openSubmenu === 'main-' + i
                      "
                      [class.menu-item-icon-inactive]="
                        openSubmenu !== 'main-' + i
                      "
                      [innerHTML]="nav.icon | safeHtml"
                    >
                    </span>

                    @if (
                      (isExpanded$ | async) ||
                      (isHovered$ | async) ||
                      (isMobileOpen$ | async)
                    ) {
                      <span class="menu-item-text">
                        {{ nav.name }}
                      </span>
                    }

                    @if (
                      nav.new &&
                      ((isExpanded$ | async) ||
                        (isHovered$ | async) ||
                        (isMobileOpen$ | async))
                    ) {
                      <span
                        class="menu-dropdown-badge absolute right-10 ml-auto"
                        [ngClass]="{
                          'menu-dropdown-badge-active':
                            openSubmenu === 'main-' + i,
                          'menu-dropdown-badge-inactive':
                            openSubmenu !== 'main-' + i,
                        }"
                      >
                        new
                      </span>
                    }

                    @if (
                      (isExpanded$ | async) ||
                      (isHovered$ | async) ||
                      (isMobileOpen$ | async)
                    ) {
                      <svg
                        [ngClass]="{
                          'rotate-180 text-brand-500':
                            openSubmenu === 'main-' + i,
                        }"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-auto h-5 w-5 transition-transform duration-200"
                      >
                        <path
                          d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    }
                  </button>

                  <div
                    class="overflow-hidden transition-all duration-300"
                    [id]="'main-' + i"
                    [style.display]="
                      (isExpanded$ | async) ||
                      (isHovered$ | async) ||
                      (isMobileOpen$ | async)
                        ? 'block'
                        : 'none'
                    "
                    [ngStyle]="{
                      height:
                        openSubmenu === 'main-' + i
                          ? (subMenuHeights['main-' + i] || 0) + 'px'
                          : '0px',
                    }"
                  >
                    <ul class="ml-9 mt-2 space-y-1">
                      @for (subItem of nav.subItems; track $index) {
                        <li>
                          <a
                            [routerLink]="subItem.path"
                            routerLinkActive=""
                            (click)="onSubmenuClick()"
                            class="menu-dropdown-item"
                            [ngClass]="{
                              'menu-dropdown-item-inactive': !isActive(
                                subItem.path
                              ),
                              'menu-dropdown-item-active': isActive(
                                subItem.path
                              ),
                            }"
                          >
                            {{ subItem.name }}

                            <span class="ml-auto flex items-center gap-1">
                              @if (subItem.new) {
                                <span
                                  class="menu-dropdown-badge"
                                  [ngClass]="{
                                    'menu-dropdown-badge-active': isActive(
                                      subItem.path
                                    ),
                                    'menu-dropdown-badge-inactive': !isActive(
                                      subItem.path
                                    ),
                                  }"
                                >
                                  new
                                </span>
                              }

                              @if (subItem.pro) {
                                <span
                                  class="menu-dropdown-badge-pro ml-auto"
                                  [ngClass]="{
                                    'menu-dropdown-badge-pro-active': isActive(
                                      subItem.path
                                    ),
                                    'menu-dropdown-badge-pro-inactive':
                                      !isActive(subItem.path),
                                  }"
                                >
                                  pro
                                </span>
                              }
                            </span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                } @else {
                  @if (nav.path) {
                    <a
                      [routerLink]="nav.path"
                      routerLinkActive="menu-item-active"
                      class="menu-item group"
                      [ngClass]="{
                        'menu-item-inactive': !isActive(nav.path),
                        'xl:justify-center': !(
                          (isExpanded$ | async) || (isHovered$ | async)
                        ),
                        'xl:justify-start':
                          (isExpanded$ | async) || (isHovered$ | async),
                      }"
                      (click)="onSubmenuClick()"
                    >
                      <span
                        class="menu-item-icon-size"
                        [ngClass]="{
                          'menu-item-icon-active': isActive(nav.path),
                          'menu-item-icon-inactive': !isActive(nav.path),
                        }"
                        [innerHTML]="nav.icon | safeHtml"
                      >
                      </span>

                      @if (
                        (isExpanded$ | async) ||
                        (isHovered$ | async) ||
                        (isMobileOpen$ | async)
                      ) {
                        <span class="menu-item-text">
                          {{ nav.name }}
                        </span>
                      }
                    </a>
                  }
                }
              </li>
            }
          </ul>
        </div>

        <!-- ADMINISTRACI\xD3N -->
        @if (filteredOthersItems.length > 0) {
          <div>
            <h2
              class="mb-4 flex text-xs uppercase leading-[20px] text-gray-400"
              [ngClass]="{
                'justify-start': (isExpanded$ | async) || (isHovered$ | async),
                'xl:justify-center': !(
                  (isExpanded$ | async) || (isHovered$ | async)
                ),
              }"
            >
              @if (
                (isExpanded$ | async) ||
                (isHovered$ | async) ||
                (isMobileOpen$ | async)
              ) {
                Administraci\xF3n
              } @else {
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            </h2>

            <ul class="flex flex-col gap-1">
              @for (nav of filteredOthersItems; track $index; let i = $index) {
                <li>
                  @if (nav.subItems) {
                    <button
                      type="button"
                      (click)="toggleSubmenu('others', i)"
                      class="menu-item group cursor-pointer"
                      [ngClass]="{
                        'menu-item-active': openSubmenu === 'others-' + i,
                        'menu-item-inactive': openSubmenu !== 'others-' + i,
                        'xl:justify-center': !(
                          (isExpanded$ | async) || (isHovered$ | async)
                        ),
                        'xl:justify-start':
                          (isExpanded$ | async) || (isHovered$ | async),
                      }"
                    >
                      <span
                        class="menu-item-icon-size"
                        [ngClass]="{
                          'menu-item-icon-active':
                            openSubmenu === 'others-' + i,
                          'menu-item-icon-inactive':
                            openSubmenu !== 'others-' + i,
                        }"
                        [innerHTML]="nav.icon | safeHtml"
                      >
                      </span>

                      @if (
                        (isExpanded$ | async) ||
                        (isHovered$ | async) ||
                        (isMobileOpen$ | async)
                      ) {
                        <span class="menu-item-text">
                          {{ nav.name }}
                        </span>
                      }

                      @if (
                        nav.new &&
                        ((isExpanded$ | async) ||
                          (isHovered$ | async) ||
                          (isMobileOpen$ | async))
                      ) {
                        <span
                          class="menu-dropdown-badge absolute right-10 ml-auto"
                          [ngClass]="{
                            'menu-dropdown-badge-active':
                              openSubmenu === 'others-' + i,
                            'menu-dropdown-badge-inactive':
                              openSubmenu !== 'others-' + i,
                          }"
                        >
                          new
                        </span>
                      }

                      @if (
                        (isExpanded$ | async) ||
                        (isHovered$ | async) ||
                        (isMobileOpen$ | async)
                      ) {
                        <svg
                          [ngClass]="{
                            'rotate-180 text-brand-500':
                              openSubmenu === 'others-' + i,
                          }"
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-auto h-5 w-5 transition-transform duration-200"
                        >
                          <path
                            d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      }
                    </button>

                    <div
                      class="overflow-hidden transition-all duration-300"
                      [id]="'others-' + i"
                      [style.display]="
                        (isExpanded$ | async) ||
                        (isHovered$ | async) ||
                        (isMobileOpen$ | async)
                          ? 'block'
                          : 'none'
                      "
                      [ngStyle]="{
                        height:
                          openSubmenu === 'others-' + i
                            ? (subMenuHeights['others-' + i] || 0) + 'px'
                            : '0px',
                      }"
                    >
                      <ul class="ml-9 mt-2 space-y-1">
                        @for (subItem of nav.subItems; track $index) {
                          <li>
                            <a
                              [routerLink]="subItem.path"
                              routerLinkActive=""
                              (click)="onSubmenuClick()"
                              class="menu-dropdown-item"
                              [ngClass]="{
                                'menu-dropdown-item-inactive': !isActive(
                                  subItem.path
                                ),
                                'menu-dropdown-item-active': isActive(
                                  subItem.path
                                ),
                              }"
                            >
                              {{ subItem.name }}

                              <span class="ml-auto flex items-center gap-1">
                                @if (subItem.new) {
                                  <span
                                    class="menu-dropdown-badge"
                                    [ngClass]="{
                                      'menu-dropdown-badge-active': isActive(
                                        subItem.path
                                      ),
                                      'menu-dropdown-badge-inactive': !isActive(
                                        subItem.path
                                      ),
                                    }"
                                  >
                                    new
                                  </span>
                                }

                                @if (subItem.pro) {
                                  <span
                                    class="menu-dropdown-badge-pro ml-auto"
                                    [ngClass]="{
                                      'menu-dropdown-badge-pro-active':
                                        isActive(subItem.path),
                                      'menu-dropdown-badge-pro-inactive':
                                        !isActive(subItem.path),
                                    }"
                                  >
                                    pro
                                  </span>
                                }
                              </span>
                            </a>
                          </li>
                        }
                      </ul>
                    </div>
                  } @else {
                    @if (nav.path) {
                      <a
                        [routerLink]="nav.path"
                        routerLinkActive="menu-item-active"
                        class="menu-item group"
                        [ngClass]="{
                          'menu-item-inactive': !isActive(nav.path),
                          'xl:justify-center': !(
                            (isExpanded$ | async) || (isHovered$ | async)
                          ),
                          'xl:justify-start':
                            (isExpanded$ | async) || (isHovered$ | async),
                        }"
                        (click)="onSubmenuClick()"
                      >
                        <span
                          class="menu-item-icon-size"
                          [ngClass]="{
                            'menu-item-icon-active': isActive(nav.path),
                            'menu-item-icon-inactive': !isActive(nav.path),
                          }"
                          [innerHTML]="nav.icon | safeHtml"
                        >
                        </span>

                        @if (
                          (isExpanded$ | async) ||
                          (isHovered$ | async) ||
                          (isMobileOpen$ | async)
                        ) {
                          <span class="menu-item-text">
                            {{ nav.name }}
                          </span>
                        }
                      </a>
                    }
                  }
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </nav>

    @if (
      (isExpanded$ | async) || (isHovered$ | async) || (isMobileOpen$ | async)
    ) {
      <app-sidebar-widget />
    }
  </div>
</aside>
` }]
  }], () => [{ type: SidebarService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }], { subMenuRefs: [{
    type: ViewChildren,
    args: ["subMenu"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebarComponent, { className: "AppSidebarComponent", filePath: "src/app/shared/layout/app-sidebar/app-sidebar.component.ts", lineNumber: 39 });
})();

// src/app/shared/layout/backdrop/backdrop.component.ts
function BackdropComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function BackdropComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275domElementEnd();
  }
}
var BackdropComponent = class _BackdropComponent {
  sidebarService;
  isMobileOpen$;
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }
  closeSidebar() {
    this.sidebarService.setMobileOpen(false);
  }
  static \u0275fac = function BackdropComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackdropComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BackdropComponent, selectors: [["app-backdrop"]], decls: 2, vars: 3, consts: [[1, "fixed", "inset-0", "z-40", "bg-gray-900/50", "lg:hidden"], [1, "fixed", "inset-0", "z-40", "bg-gray-900/50", "lg:hidden", 3, "click"]], template: function BackdropComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BackdropComponent_Conditional_0_Template, 1, 0, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.isMobileOpen$) ? 0 : -1);
    }
  }, dependencies: [CommonModule, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackdropComponent, [{
    type: Component,
    args: [{ selector: "app-backdrop", imports: [
      CommonModule
    ], template: '@if (isMobileOpen$ | async) {\n<div\n  class="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"\n  (click)="closeSidebar()"\n></div>\n}\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BackdropComponent, { className: "BackdropComponent", filePath: "src/app/shared/layout/backdrop/backdrop.component.ts", lineNumber: 13 });
})();

// src/app/shared/services/theme.service.ts
var ThemeService = class _ThemeService {
  themeSubject = new BehaviorSubject("light");
  theme$ = this.themeSubject.asObservable();
  constructor() {
    const savedTheme = localStorage.getItem("theme") || "light";
    this.setTheme(savedTheme);
  }
  toggleTheme() {
    const newTheme = this.themeSubject.value === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  setTheme(theme) {
    this.themeSubject.next(theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-gray-900");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark:bg-gray-900");
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/components/common/theme-toggle/theme-toggle-button.component.ts
function ThemeToggleButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 1);
    \u0275\u0275domElement(1, "path", 2);
    \u0275\u0275domElementEnd();
  }
}
function ThemeToggleButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 1);
    \u0275\u0275domElement(1, "path", 3);
    \u0275\u0275domElementEnd();
  }
}
var ThemeToggleButtonComponent = class _ThemeToggleButtonComponent {
  themeService;
  theme$;
  constructor(themeService) {
    this.themeService = themeService;
    this.theme$ = this.themeService.theme$;
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  static \u0275fac = function ThemeToggleButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeToggleButtonComponent)(\u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeToggleButtonComponent, selectors: [["app-theme-toggle-button"]], decls: 4, vars: 3, consts: [[1, "relative", "flex", "items-center", "justify-center", "text-gray-500", "transition-colors", "bg-white", "border", "border-gray-200", "rounded-full", "hover:text-dark-900", "h-11", "w-11", "hover:bg-gray-100", "hover:text-gray-700", "dark:border-gray-800", "dark:bg-gray-900", "dark:text-gray-400", "dark:hover:bg-gray-800", "dark:hover:text-white", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z", "fill", "currentColor"], ["d", "M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z", "fill", "currentColor"]], template: function ThemeToggleButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function ThemeToggleButtonComponent_Template_button_click_0_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275conditionalCreate(1, ThemeToggleButtonComponent_Conditional_1_Template, 2, 0, ":svg:svg", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275conditionalBranchCreate(3, ThemeToggleButtonComponent_Conditional_3_Template, 2, 0, ":svg:svg", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 1, ctx.theme$) === "dark" ? 1 : 3);
    }
  }, dependencies: [CommonModule, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleButtonComponent, [{
    type: Component,
    args: [{ selector: "app-theme-toggle-button", imports: [CommonModule], template: `<button
  (click)="toggleTheme()"
  class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
>
  <!-- Dark icon (moon) -->
  @if ((theme$ | async) === 'dark') {
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z"
      fill="currentColor"
    />
  </svg>
  } @else {
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z"
        fill="currentColor"
      />
    </svg>
  }
</button>` }]
  }], () => [{ type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeToggleButtonComponent, { className: "ThemeToggleButtonComponent", filePath: "src/app/shared/components/common/theme-toggle/theme-toggle-button.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/ui/dropdown/dropdown.component.ts
var _c02 = ["dropdownRef"];
var _c13 = ["*"];
function DropdownComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark " + ctx_r0.className);
  }
}
var DropdownComponent = class _DropdownComponent {
  isOpen = false;
  close = new EventEmitter();
  className = "";
  dropdownRef;
  handleClickOutside = (event2) => {
    if (this.isOpen && this.dropdownRef && this.dropdownRef.nativeElement && !this.dropdownRef.nativeElement.contains(event2.target) && !event2.target.closest(".dropdown-toggle")) {
      this.close.emit();
    }
  };
  ngAfterViewInit() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  ngOnDestroy() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  static \u0275fac = function DropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownComponent, selectors: [["app-dropdown"]], viewQuery: function DropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownRef = _t.first);
    }
  }, inputs: { isOpen: "isOpen", className: "className" }, outputs: { close: "close" }, ngContentSelectors: _c13, decls: 1, vars: 1, consts: [["dropdownRef", ""], [3, "ngClass"]], template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, DropdownComponent_Conditional_0_Template, 3, 1, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{ selector: "app-dropdown", imports: [CommonModule], template: `@if (isOpen) {
<div
  #dropdownRef
  [ngClass]="'absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ' + className"
>
  <ng-content></ng-content>
</div>
}` }]
  }], null, { isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], className: [{
    type: Input
  }], dropdownRef: [{
    type: ViewChild,
    args: ["dropdownRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownComponent, { className: "DropdownComponent", filePath: "src/app/shared/components/ui/dropdown/dropdown.component.ts", lineNumber: 9 });
})();

// src/app/shared/components/ui/dropdown/dropdown-item/dropdown-item.component.ts
var _c03 = ["*"];
var DropdownItemComponent = class _DropdownItemComponent {
  to;
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  className = "";
  itemClick = new EventEmitter();
  click = new EventEmitter();
  get combinedClasses() {
    return `${this.baseClassName} ${this.className}`.trim();
  }
  handleClick(event2) {
    event2.preventDefault();
    this.click.emit();
    this.itemClick.emit();
  }
  static \u0275fac = function DropdownItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownItemComponent, selectors: [["app-dropdown-item"]], inputs: { to: "to", baseClassName: "baseClassName", className: "className" }, outputs: { itemClick: "itemClick", click: "click" }, ngContentSelectors: _c03, decls: 2, vars: 1, consts: [["type", "button", 3, "click", "ngClass"]], template: function DropdownItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function DropdownItemComponent_Template_button_click_0_listener($event) {
        return ctx.handleClick($event);
      });
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.combinedClasses);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemComponent, [{
    type: Component,
    args: [{ selector: "app-dropdown-item", imports: [CommonModule, RouterModule], template: '<button type="button" [ngClass]="combinedClasses" (click)="handleClick($event)">\n  <ng-content></ng-content>\n</button>' }]
  }], null, { to: [{
    type: Input
  }], baseClassName: [{
    type: Input
  }], className: [{
    type: Input
  }], itemClick: [{
    type: Output
  }], click: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownItemComponent, { className: "DropdownItemComponent", filePath: "src/app/shared/components/ui/dropdown/dropdown-item/dropdown-item.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/header/notification-dropdown/notification-dropdown.component.ts
function NotificationDropdownComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount > 9 ? "9+" : ctx_r0.unreadCount, " ");
  }
}
function NotificationDropdownComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount, " nuevas ");
  }
}
function NotificationDropdownComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function NotificationDropdownComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, " Marcar todo le\xEDdo ");
    \u0275\u0275elementEnd();
  }
}
function NotificationDropdownComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 23);
    \u0275\u0275text(2, "Cargando\u2026");
    \u0275\u0275elementEnd()();
  }
}
function NotificationDropdownComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "No tienes notificaciones");
    \u0275\u0275elementEnd()();
  }
}
function NotificationDropdownComponent_ul_18_li_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function NotificationDropdownComponent_ul_18_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 29);
    \u0275\u0275listener("click", function NotificationDropdownComponent_ul_18_li_1_Template_button_click_1_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markRead(n_r4));
    });
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, NotificationDropdownComponent_ul_18_li_1_span_12_Template, 1, 0, "span", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-brand-50", !n_r4.isRead)("dark:bg-brand-500/5", !n_r4.isRead);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeIcon(n_r4.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-normal", n_r4.isRead);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 11, n_r4.createdAt, "dd/MM HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !n_r4.isRead);
  }
}
function NotificationDropdownComponent_ul_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 27);
    \u0275\u0275template(1, NotificationDropdownComponent_ul_18_li_1_Template, 13, 14, "li", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
var NotificationDropdownComponent = class _NotificationDropdownComponent {
  svc = inject(NotificacionesService);
  auth = inject(AuthService);
  isOpen = false;
  notifications = [];
  unreadCount = 0;
  loading = false;
  get userId() {
    return this.auth.user()?.id;
  }
  ngOnInit() {
    this.loadUnread();
  }
  loadUnread() {
    const uid = this.userId;
    if (!uid)
      return;
    this.svc.countUnread(uid).subscribe({
      next: (r) => {
        this.unreadCount = r.count ?? 0;
      }
    });
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen)
      this.loadNotifications();
  }
  closeDropdown() {
    this.isOpen = false;
  }
  loadNotifications() {
    const uid = this.userId;
    if (!uid)
      return;
    this.loading = true;
    this.svc.getByUser(uid).subscribe({
      next: (n) => {
        this.notifications = n.slice(0, 10);
        this.unreadCount = n.filter((x) => !x.isRead).length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  markRead(n) {
    if (n.isRead || !this.userId)
      return;
    this.svc.markAsRead(n.id, this.userId).subscribe({
      next: () => {
        n.isRead = true;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
      }
    });
    this.closeDropdown();
  }
  markAllRead() {
    const uid = this.userId;
    if (!uid)
      return;
    this.svc.markAllAsRead(uid).subscribe({
      next: () => {
        this.notifications.forEach((n) => n.isRead = true);
        this.unreadCount = 0;
      }
    });
  }
  typeIcon(type) {
    const map = {
      RESERVA: "\u{1F4CB}",
      PAGO: "\u{1F4B3}",
      APROBACION: "\u2705",
      CANCELACION: "\u274C",
      MENSAJE: "\u{1F4AC}",
      SISTEMA: "\u{1F514}",
      SOPORTE: "\u{1F3A7}"
    };
    return map[type] ?? "\u{1F514}";
  }
  static \u0275fac = function NotificationDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationDropdownComponent, selectors: [["app-notification-dropdown"]], decls: 22, vars: 7, consts: [[1, "relative"], [1, "relative", "flex", "items-center", "justify-center", "text-gray-500", "transition-colors", "bg-white", "border", "border-gray-200", "rounded-full", "hover:text-gray-700", "h-11", "w-11", "hover:bg-gray-100", "dark:border-gray-800", "dark:bg-gray-900", "dark:text-gray-400", "dark:hover:bg-gray-800", "dark:hover:text-white", 3, "click"], ["class", "absolute -right-0.5 -top-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "fill-current"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z", "fill", "currentColor"], ["className", "absolute -right-[200px] mt-[17px] flex h-auto max-h-[480px] w-[340px] flex-col rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:w-[360px] lg:right-0", 3, "close", "isOpen"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-3.5", "dark:border-gray-800"], [1, "flex", "items-center", "gap-2"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], ["class", "rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/15 dark:text-red-400", 4, "ngIf"], ["class", "text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400", 3, "click", 4, "ngIf"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-200", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "fill-current"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z", "fill", "currentColor"], ["class", "flex items-center justify-center py-10", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-3 py-10 px-5 text-center", 4, "ngIf"], ["class", "flex flex-col overflow-y-auto", 4, "ngIf"], [1, "border-t", "border-gray-100", "p-3", "dark:border-gray-800"], ["routerLink", "/notificaciones", 1, "block", "rounded-xl", "border", "border-gray-200", "py-2", "text-center", "text-sm", "font-medium", "text-gray-600", "transition", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "dark:hover:bg-white/[0.03]", 3, "click"], [1, "absolute", "-right-0.5", "-top-0.5", "z-10", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "bg-red-500", "text-[10px]", "font-bold", "text-white"], [1, "rounded-full", "bg-red-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-red-600", "dark:bg-red-500/15", "dark:text-red-400"], [1, "text-xs", "font-medium", "text-brand-500", "hover:text-brand-600", "dark:text-brand-400", 3, "click"], [1, "flex", "items-center", "justify-center", "py-10"], [1, "text-sm", "text-gray-400", "animate-pulse"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-10", "px-5", "text-center"], [1, "text-4xl"], [1, "text-sm", "text-gray-400"], [1, "flex", "flex-col", "overflow-y-auto"], [4, "ngFor", "ngForOf"], [1, "flex", "w-full", "items-start", "gap-3", "border-b", "border-gray-100", "px-4", "py-3", "text-left", "transition", "hover:bg-gray-50", "dark:border-gray-800", "dark:hover:bg-white/[0.03]", 3, "click"], [1, "flex", "h-9", "w-9", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-base", "dark:bg-gray-800"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "line-clamp-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "mt-1", "text-[10px]", "text-gray-400"], ["class", "mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500", 4, "ngIf"], [1, "mt-1.5", "h-2", "w-2", "flex-shrink-0", "rounded-full", "bg-brand-500"]], template: function NotificationDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275template(2, NotificationDropdownComponent_span_2_Template, 2, 1, "span", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "app-dropdown", 5);
      \u0275\u0275listener("close", function NotificationDropdownComponent_Template_app_dropdown_close_5_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h5", 8);
      \u0275\u0275text(9, "Notificaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, NotificationDropdownComponent_span_10_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275template(12, NotificationDropdownComponent_button_12_Template, 2, 0, "button", 10);
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_button_click_13_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 12);
      \u0275\u0275element(15, "path", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, NotificationDropdownComponent_div_16_Template, 3, 0, "div", 14)(17, NotificationDropdownComponent_div_17_Template, 5, 0, "div", 15)(18, NotificationDropdownComponent_ul_18_Template, 2, 1, "ul", 16);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 17)(20, "a", 18);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_a_click_20_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275text(21, " Ver todas las notificaciones ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("isOpen", ctx.isOpen);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, DropdownComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-notification-dropdown", standalone: true, imports: [CommonModule, RouterModule, DropdownComponent, DropdownItemComponent], template: `<div class="relative">
  <!-- Bot\xF3n campana -->
  <button
    (click)="toggleDropdown()"
    class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">

    <!-- Badge contador -->
    <span *ngIf="unreadCount > 0"
      class="absolute -right-0.5 -top-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
      {{ unreadCount > 9 ? '9+' : unreadCount }}
    </span>

    <!-- Icono campana -->
    <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
        fill="currentColor" />
    </svg>
  </button>

  <app-dropdown
    [isOpen]="isOpen"
    (close)="closeDropdown()"
    className="absolute -right-[200px] mt-[17px] flex h-auto max-h-[480px] w-[340px] flex-col rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:w-[360px] lg:right-0">

    <!-- Cabecera -->
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-3.5 dark:border-gray-800">
      <div class="flex items-center gap-2">
        <h5 class="font-semibold text-gray-800 dark:text-white/90">Notificaciones</h5>
        <span *ngIf="unreadCount > 0"
          class="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/15 dark:text-red-400">
          {{ unreadCount }} nuevas
        </span>
      </div>
      <div class="flex items-center gap-2">
        <button *ngIf="unreadCount > 0" (click)="markAllRead()"
          class="text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          Marcar todo le\xEDdo
        </button>
        <button (click)="closeDropdown()"
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <svg class="fill-current" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
              fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div *ngIf="loading" class="flex items-center justify-center py-10">
      <p class="text-sm text-gray-400 animate-pulse">Cargando\u2026</p>
    </div>

    <!-- Sin notificaciones -->
    <div *ngIf="!loading && notifications.length === 0"
      class="flex flex-col items-center justify-center gap-3 py-10 px-5 text-center">
      <div class="text-4xl">\u{1F514}</div>
      <p class="text-sm text-gray-400">No tienes notificaciones</p>
    </div>

    <!-- Lista -->
    <ul *ngIf="!loading && notifications.length > 0"
      class="flex flex-col overflow-y-auto">
      <li *ngFor="let n of notifications">
        <button
          (click)="markRead(n)"
          class="flex w-full items-start gap-3 border-b border-gray-100 px-4 py-3 text-left transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/[0.03]"
          [class.bg-brand-50]="!n.isRead"
          [class.dark:bg-brand-500/5]="!n.isRead">

          <!-- Icono tipo -->
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-base dark:bg-gray-800">
            {{ typeIcon(n.type) }}
          </div>

          <!-- Texto -->
          <div class="min-w-0 flex-1">
            <p class="text-sm font-semibold text-gray-800 dark:text-white/90"
               [class.font-normal]="n.isRead">{{ n.title }}</p>
            <p class="mt-0.5 line-clamp-2 text-xs text-gray-500 dark:text-gray-400">{{ n.body }}</p>
            <p class="mt-1 text-[10px] text-gray-400">
              {{ n.createdAt | date:'dd/MM HH:mm' }}
            </p>
          </div>

          <!-- Punto no le\xEDda -->
          <span *ngIf="!n.isRead"
            class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500"></span>
        </button>
      </li>
    </ul>

    <!-- Ver todas -->
    <div class="border-t border-gray-100 p-3 dark:border-gray-800">
      <a routerLink="/notificaciones" (click)="closeDropdown()"
        class="block rounded-xl border border-gray-200 py-2 text-center text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]">
        Ver todas las notificaciones
      </a>
    </div>

  </app-dropdown>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationDropdownComponent, { className: "NotificationDropdownComponent", filePath: "src/app/shared/components/header/notification-dropdown/notification-dropdown.component.ts", lineNumber: 16 });
})();

// src/app/shared/components/ui/dropdown/dropdown-item/dropdown-item.component-two.ts
var _c04 = ["*"];
var DropdownItemTwoComponent = class _DropdownItemTwoComponent {
  to;
  // Required route path
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  className = "";
  itemClick = new EventEmitter();
  click = new EventEmitter();
  get combinedClasses() {
    return `${this.baseClassName} ${this.className}`.trim();
  }
  handleClick(event2) {
    this.click.emit();
    this.itemClick.emit();
  }
  static \u0275fac = function DropdownItemTwoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownItemTwoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownItemTwoComponent, selectors: [["app-dropdown-item-two"]], inputs: { to: "to", baseClassName: "baseClassName", className: "className" }, outputs: { itemClick: "itemClick", click: "click" }, ngContentSelectors: _c04, decls: 2, vars: 2, consts: [[3, "click", "routerLink", "ngClass"]], template: function DropdownItemTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275listener("click", function DropdownItemTwoComponent_Template_a_click_0_listener($event) {
        return ctx.handleClick($event);
      });
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", ctx.to)("ngClass", ctx.combinedClasses);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItemTwoComponent, [{
    type: Component,
    args: [{
      selector: "app-dropdown-item-two",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <a
      [routerLink]="to"
      [ngClass]="combinedClasses"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </a>
  `
    }]
  }], null, { to: [{
    type: Input
  }], baseClassName: [{
    type: Input
  }], className: [{
    type: Input
  }], itemClick: [{
    type: Output
  }], click: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownItemTwoComponent, { className: "DropdownItemTwoComponent", filePath: "src/app/shared/components/ui/dropdown/dropdown-item/dropdown-item.component-two.ts", lineNumber: 19 });
})();

// src/app/shared/components/header/user-dropdown/user-dropdown.component.ts
var _c05 = (a0) => ({ "stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200": true, "rotate-180": a0 });
var UserDropdownComponent = class _UserDropdownComponent {
  authService = inject(AuthService);
  isOpen = false;
  authUser = computed(() => this.authService.user(), ...ngDevMode ? [{ debugName: "authUser" }] : (
    /* istanbul ignore next */
    []
  ));
  nombreCompleto = computed(() => {
    const user = this.authUser();
    if (!user)
      return "Usuario";
    return `${user.firstName} ${user.lastName}`.trim();
  }, ...ngDevMode ? [{ debugName: "nombreCompleto" }] : (
    /* istanbul ignore next */
    []
  ));
  email = computed(() => {
    return this.authUser()?.email ?? "Sin correo";
  }, ...ngDevMode ? [{ debugName: "email" }] : (
    /* istanbul ignore next */
    []
  ));
  role = computed(() => {
    return this.authUser()?.role ?? "SIN ROL";
  }, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  iniciales = computed(() => {
    const user = this.authUser();
    if (!user) {
      return "U";
    }
    const inicialNombre = user.firstName?.charAt(0)?.toUpperCase() ?? "";
    const inicialApellido = user.lastName?.charAt(0)?.toUpperCase() ?? "";
    return `${inicialNombre}${inicialApellido}` || "U";
  }, ...ngDevMode ? [{ debugName: "iniciales" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  closeDropdown() {
    this.isOpen = false;
  }
  logout() {
    this.closeDropdown();
    this.authService.logout();
  }
  getRoleClasses(role) {
    switch (role) {
      case "MASTER":
        return "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400";
      case "ADMINISTRADOR":
        return "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400";
      case "USUARIO":
        return "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
      case "CLIENTE":
        return "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-white/[0.05] dark:text-gray-300";
    }
  }
  static \u0275fac = function UserDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDropdownComponent, selectors: [["app-user-dropdown"]], decls: 32, vars: 14, consts: [[1, "relative"], [1, "flex", "items-center", "text-gray-700", "dropdown-toggle", "dark:text-gray-400", 3, "click"], [1, "mr-3", "flex", "h-11", "w-11", "items-center", "justify-center", "overflow-hidden", "rounded-full", "bg-brand-100", "text-sm", "font-semibold", "text-brand-700", "dark:bg-brand-500/10", "dark:text-brand-400"], [1, "mr-1", "hidden", "text-left", "sm:block"], [1, "block", "font-medium", "text-theme-sm", "text-gray-800", "dark:text-white/90"], [1, "block", "text-xs", "text-gray-500", "dark:text-gray-400"], ["width", "18", "height", "20", "viewBox", "0 0 18 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M4.3125 8.65625L9 13.3437L13.6875 8.65625", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["className", "absolute right-0 mt-[17px] flex w-[280px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark", 3, "close", "isOpen"], [1, "border-b", "border-gray-200", "pb-3", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "bg-brand-100", "text-sm", "font-semibold", "text-brand-700", "dark:bg-brand-500/10", "dark:text-brand-400"], [1, "min-w-0"], [1, "block", "truncate", "font-medium", "text-gray-800", "text-theme-sm", "dark:text-white/90"], [1, "mt-0.5", "block", "truncate", "text-theme-xs", "text-gray-500", "dark:text-gray-400"], [1, "mt-2", "inline-flex", "rounded-full", "px-2.5", "py-1", "text-[11px]", "font-medium", 3, "ngClass"], [1, "flex", "flex-col", "gap-1", "border-b", "border-gray-200", "pt-4", "pb-3", "dark:border-gray-800"], ["tag", "a", "className", "flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300", 3, "itemClick", "to"], ["type", "button", 1, "mt-3", "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "font-medium", "text-red-600", "group", "text-theme-sm", "hover:bg-red-50", "dark:text-red-400", "dark:hover:bg-red-500/10", 3, "click"]], template: function UserDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function UserDropdownComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3)(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "app-dropdown", 8);
      \u0275\u0275listener("close", function UserDropdownComponent_Template_app_dropdown_close_11_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "span", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "ul", 16)(24, "li")(25, "app-dropdown-item-two", 17);
      \u0275\u0275listener("itemClick", function UserDropdownComponent_Template_app_dropdown_item_two_itemClick_25_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275text(26, " Ver perfil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "app-dropdown-item-two", 17);
      \u0275\u0275listener("itemClick", function UserDropdownComponent_Template_app_dropdown_item_two_itemClick_28_listener() {
        return ctx.closeDropdown();
      });
      \u0275\u0275text(29, " Configuraci\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "button", 18);
      \u0275\u0275listener("click", function UserDropdownComponent_Template_button_click_30_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(31, " Cerrar sesi\xF3n ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.iniciales(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.nombreCompleto(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.role(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c05, ctx.isOpen));
      \u0275\u0275advance(2);
      \u0275\u0275property("isOpen", ctx.isOpen);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.iniciales(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.nombreCompleto(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.email(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getRoleClasses(ctx.role()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.role(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("to", "/profile");
      \u0275\u0275advance(3);
      \u0275\u0275property("to", "/profile");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    DropdownComponent,
    DropdownItemTwoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-user-dropdown", standalone: true, imports: [
      CommonModule,
      RouterModule,
      DropdownComponent,
      DropdownItemTwoComponent
    ], template: `<div class="relative">
  <button
    (click)="toggleDropdown()"
    class="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
  >
    <span
      class="mr-3 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
    >
      {{ iniciales() }}
    </span>

    <span class="mr-1 hidden text-left sm:block">
      <span
        class="block font-medium text-theme-sm text-gray-800 dark:text-white/90"
      >
        {{ nombreCompleto() }}
      </span>
      <span class="block text-xs text-gray-500 dark:text-gray-400">
        {{ role() }}
      </span>
    </span>

    <svg
      [ngClass]="{
        'stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200': true,
        'rotate-180': isOpen,
      }"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>

  <app-dropdown
    [isOpen]="isOpen"
    (close)="closeDropdown()"
    className="absolute right-0 mt-[17px] flex w-[280px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
  >
    <div class="border-b border-gray-200 pb-3 dark:border-gray-800">
      <div class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
        >
          {{ iniciales() }}
        </div>

        <div class="min-w-0">
          <span
            class="block truncate font-medium text-gray-800 text-theme-sm dark:text-white/90"
          >
            {{ nombreCompleto() }}
          </span>

          <span
            class="mt-0.5 block truncate text-theme-xs text-gray-500 dark:text-gray-400"
          >
            {{ email() }}
          </span>

          <span
            class="mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium"
            [ngClass]="getRoleClasses(role())"
          >
            {{ role() }}
          </span>
        </div>
      </div>
    </div>

    <ul
      class="flex flex-col gap-1 border-b border-gray-200 pt-4 pb-3 dark:border-gray-800"
    >
      <li>
        <app-dropdown-item-two
          (itemClick)="closeDropdown()"
          tag="a"
          [to]="'/profile'"
          className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          Ver perfil
        </app-dropdown-item-two>
      </li>

      <li>
        <app-dropdown-item-two
          (itemClick)="closeDropdown()"
          tag="a"
          [to]="'/profile'"
          className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          Configuraci\xF3n
        </app-dropdown-item-two>
      </li>
    </ul>

    <button
      type="button"
      (click)="logout()"
      class="mt-3 flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-red-600 group text-theme-sm hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
    >
      Cerrar sesi\xF3n
    </button>
  </app-dropdown>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDropdownComponent, { className: "UserDropdownComponent", filePath: "src/app/shared/components/header/user-dropdown/user-dropdown.component.ts", lineNumber: 21 });
})();

// src/app/shared/layout/app-header/app-header.component.ts
var _c06 = ["searchInput"];
var _c14 = (a0) => ({ "bg-gray-100 dark:bg-white/[0.03]": a0 });
function AppHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function AppHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function AppHeaderComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Tasa: Bs ", \u0275\u0275pipeBind2(2, 1, ctx_r0.tasaService.rate(), "1.2-2"), "/$ ");
  }
}
function AppHeaderComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Tasa \u2014");
    \u0275\u0275elementEnd();
  }
}
var AppHeaderComponent = class _AppHeaderComponent {
  sidebarService;
  isApplicationMenuOpen = false;
  isMobileOpen$;
  tasaService = inject(TasaService);
  searchInput;
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }
  ngOnInit() {
    this.tasaService.load();
  }
  handleToggle() {
    if (window.innerWidth >= 1280) {
      this.sidebarService.toggleExpanded();
    } else {
      this.sidebarService.toggleMobileOpen();
    }
  }
  toggleApplicationMenu() {
    this.isApplicationMenuOpen = !this.isApplicationMenuOpen;
  }
  ngAfterViewInit() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  ngOnDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event2) => {
    if ((event2.metaKey || event2.ctrlKey) && event2.key === "k") {
      event2.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  };
  static \u0275fac = function AppHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppHeaderComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppHeaderComponent, selectors: [["app-header"]], viewQuery: function AppHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
    }
  }, decls: 23, vars: 11, consts: [[1, "sticky", "top-0", "flex", "w-full", "bg-white", "border-gray-200", "z-99999", "dark:border-gray-800", "dark:bg-gray-900", "xl:border-b"], [1, "flex", "flex-col", "items-center", "justify-between", "grow", "xl:flex-row", "xl:px-6"], [1, "flex", "items-center", "justify-between", "w-full", "gap-2", "px-3", "py-3", "border-b", "border-gray-200", "dark:border-gray-800", "sm:gap-4", "xl:justify-normal", "xl:border-b-0", "xl:px-0", "lg:py-4"], ["aria-label", "Toggle Sidebar", 1, "items-center", "justify-center", "w-10", "h-10", "text-gray-500", "border-gray-200", "rounded-lg", "z-99999", "dark:border-gray-800", "flex", "dark:text-gray-400", "lg:h-11", "lg:w-11", "xl:border", 3, "click", "ngClass"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["width", "16", "height", "12", "viewBox", "0 0 16 12", "fill", "none"], ["routerLink", "/", 1, "xl:hidden"], ["src", "/images/logo/logo.png", "alt", "Logo", 1, "dark:hidden"], ["src", "/images/logo/logo.png", "alt", "Logo", 1, "hidden", "dark:block"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-gray-700", "rounded-lg", "z-99999", "hover:bg-gray-100", "dark:text-gray-400", "dark:hover:bg-gray-800", "xl:hidden", 3, "click"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z", "fill", "currentColor"], [1, "items-center", "justify-between", "w-full", "gap-4", "px-5", "py-4", "xl:flex", "shadow-theme-md", "xl:justify-end", "xl:px-0", "xl:shadow-none", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "2xsm:gap-3"], ["routerLink", "/tasas", 1, "hidden", "sm:flex", "items-center", "gap-1.5", "rounded-full", "border", "border-green-200", "bg-green-50", "px-3", "py-1.5", "text-xs", "font-bold", "text-green-700", "hover:bg-green-100", "transition-colors", "dark:border-green-500/20", "dark:bg-green-500/10", "dark:text-green-400"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-green-500", "animate-pulse"], [4, "ngIf"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z", "fill", "currentColor"]], template: function AppHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275listener("click", function AppHeaderComponent_Template_button_click_3_listener() {
        return ctx.handleToggle();
      });
      \u0275\u0275conditionalCreate(5, AppHeaderComponent_Conditional_5_Template, 2, 0, ":svg:svg", 4);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275conditionalBranchCreate(7, AppHeaderComponent_Conditional_7_Template, 2, 0, ":svg:svg", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275element(9, "img", 7)(10, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function AppHeaderComponent_Template_button_click_11_listener() {
        return ctx.toggleApplicationMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 4);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "a", 13);
      \u0275\u0275element(17, "span", 14);
      \u0275\u0275template(18, AppHeaderComponent_span_18_Template, 3, 4, "span", 15)(19, AppHeaderComponent_span_19_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-theme-toggle-button")(21, "app-notification-dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "app-user-dropdown");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c14, \u0275\u0275pipeBind1(4, 5, ctx.isMobileOpen$)));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 7, ctx.isMobileOpen$) ? 5 : 7);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", ctx.isApplicationMenuOpen ? "flex" : "hidden");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.tasaService.tasa());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.tasaService.tasa());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    RouterModule,
    RouterLink,
    ThemeToggleButtonComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    AsyncPipe,
    DecimalPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ThemeToggleButtonComponent,
      NotificationDropdownComponent,
      UserDropdownComponent
    ], template: `<header
  class="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b">
  <div class="flex flex-col items-center justify-between grow xl:flex-row xl:px-6">
    <div
      class="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
      <button
        class="items-center justify-center  w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 flex dark:text-gray-400 lg:h-11 lg:w-11 xl:border"
        [ngClass]="{
          'bg-gray-100 dark:bg-white/[0.03]': isMobileOpen$ | async
        }"
        (click)="handleToggle()" aria-label="Toggle Sidebar">
        @if (isMobileOpen$ | async) {
          <!-- Cross Icon -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
              fill="currentColor" />
          </svg>
        } @else {
          <!-- Hamburger Icon -->
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
              fill="currentColor" />
          </svg>
        }
      </button>
      <!-- Logo (placeholder) -->
      <a routerLink="/" class="xl:hidden">
        <img class="dark:hidden" src="/images/logo/logo.png" alt="Logo" />
        <img class="hidden dark:block" src="/images/logo/logo.png" alt="Logo" />
      </a>
      <button (click)="toggleApplicationMenu()"
        class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 xl:hidden">
        <!-- Dots Icon -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
            fill="currentColor" />
        </svg>
      </button>
    </div>
    <div [ngClass]="isApplicationMenuOpen ? 'flex' : 'hidden'"
      class="items-center justify-between w-full gap-4 px-5 py-4 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none">
      <div class="flex items-center gap-2 2xsm:gap-3">
        <!-- Tasa BCV chip \u2014 always visible -->
        <a routerLink="/tasas"
          class="hidden sm:flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700 hover:bg-green-100 transition-colors dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
          <span class="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span *ngIf="tasaService.tasa()">
            Tasa: Bs {{ tasaService.rate() | number:'1.2-2' }}/$
          </span>
          <span *ngIf="!tasaService.tasa()">Tasa \u2014</span>
        </a>
        <!-- ThemeToggleButton -->
        <app-theme-toggle-button />
        <!-- Notificaciones -->
        <app-notification-dropdown />
      </div>
      <!-- UserDropdown -->
      <app-user-dropdown />
    </div>
  </div>
</header>` }]
  }], () => [{ type: SidebarService }], { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppHeaderComponent, { className: "AppHeaderComponent", filePath: "src/app/shared/layout/app-header/app-header.component.ts", lineNumber: 22 });
})();

// src/app/shared/layout/app-layout/app-layout.component.ts
var _c07 = (a0, a1, a2) => ({ "xl:ml-[290px]": a0, "xl:ml-[90px]": a1, "ml-0": a2 });
var AppLayoutComponent = class _AppLayoutComponent {
  sidebarService;
  isExpanded$;
  isHovered$;
  isMobileOpen$;
  constructor(sidebarService) {
    this.sidebarService = sidebarService;
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isHovered$ = this.sidebarService.isHovered$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }
  get containerClasses() {
    return [
      "flex-1",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.isExpanded$ || this.isHovered$ ? "xl:ml-[290px]" : "xl:ml-[90px]",
      this.isMobileOpen$ ? "ml-0" : ""
    ];
  }
  static \u0275fac = function AppLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayoutComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayoutComponent, selectors: [["app-layout"]], decls: 13, vars: 15, consts: [[1, "min-h-screen", "xl:flex"], [1, "flex-1", "transition-all", "duration-300", "ease-in-out", 3, "ngClass"], [1, "p-4", "mx-auto", "max-w-(--breakpoint-2xl)", "md:p-6"]], template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275element(2, "app-sidebar")(3, "app-backdrop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275pipe(5, "async");
      \u0275\u0275pipe(6, "async");
      \u0275\u0275pipe(7, "async");
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "async");
      \u0275\u0275element(10, "app-header");
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275element(12, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c07, \u0275\u0275pipeBind1(5, 1, ctx.isExpanded$) || \u0275\u0275pipeBind1(6, 3, ctx.isHovered$), !\u0275\u0275pipeBind1(7, 5, ctx.isExpanded$) && !\u0275\u0275pipeBind1(8, 7, ctx.isHovered$), \u0275\u0275pipeBind1(9, 9, ctx.isMobileOpen$)));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    RouterOutlet,
    AppHeaderComponent,
    AppSidebarComponent,
    BackdropComponent,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [
      CommonModule,
      RouterModule,
      AppHeaderComponent,
      AppSidebarComponent,
      BackdropComponent
    ], template: `<div class="min-h-screen xl:flex">
  <div>
    <app-sidebar></app-sidebar>
    <app-backdrop></app-backdrop>
  </div>
  <div
      class="flex-1 transition-all duration-300 ease-in-out"
      [ngClass]="{
        'xl:ml-[290px]': (isExpanded$ | async) || (isHovered$ | async),
        'xl:ml-[90px]': !(isExpanded$ | async) && !(isHovered$ | async),
        'ml-0': (isMobileOpen$ | async)
      }"
  >
    <!-- app header start -->
    <app-header/>
    <!-- app header end -->
    <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayoutComponent, { className: "AppLayoutComponent", filePath: "src/app/shared/layout/app-layout/app-layout.component.ts", lineNumber: 21 });
})();

// src/app/pages/auth-pages/pages/components/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/pages/auth-pages/pages/components/master.guard.ts
var masterGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.hasRole(UserRole.MASTER))
    return true;
  router.navigate(["/tasas"]);
  return false;
};

// src/app/pages/auth-pages/pages/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 32)(2, "circle", 33);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 34)(2, "path", 35)(3, "path", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " La contrase\xF1a es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Entrar al sistema");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Ingresando...");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  loginImage = signal(this.getLoginImageByHour(), ...ngDevMode ? [{ debugName: "loginImage" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  getLoginImageByHour() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 17) {
      return "/images/logo/day.jpg";
    }
    return "/images/logo/night.jpg";
  }
  submit() {
    if (this.loading()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        const role = this.authService.role();
        if (role === "MASTER" || role === "ADMINISTRADOR") {
          this.router.navigate(["/dashboard"]);
        } else if (role === "PROVEEDOR") {
          this.router.navigate(["/mi-negocio"]);
        } else {
          this.router.navigate(["/inicio"]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        const backendMessage = this.extractErrorMessage(error);
        this.errorMessage.set(backendMessage);
      }
    });
  }
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
  extractErrorMessage(error) {
    const err = error;
    const message = err?.error?.message;
    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo iniciar sesi\xF3n";
    }
    if (typeof message === "string" && message.trim()) {
      return message;
    }
    return "No se pudo iniciar sesi\xF3n";
  }
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 52, vars: 9, consts: [[1, "relative", "min-h-screen", "bg-white", "dark:bg-gray-900"], [1, "relative", "flex", "min-h-screen", "flex-col", "lg:flex-row"], [1, "flex", "w-full", "flex-1", "items-center", "justify-center", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "w-full", "max-w-md"], [1, "mb-8"], ["routerLink", "/register", 1, "inline-flex", "items-center", "gap-2", "text-sm", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M12.5 5L7.5 10L12.5 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mb-2", "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90", "sm:text-3xl"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mb-6", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], ["type", "email", "formControlName", "email", "placeholder", "admin@brisa.com", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "outline-none", "transition", "placeholder:text-gray-400", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", "dark:placeholder:text-white/30", "dark:focus:border-brand-800"], [1, "mt-1.5", "text-xs", "text-red-500"], [1, "relative"], ["formControlName", "password", "placeholder", "Ingresa tu contrase\xF1a", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "pr-11", "text-sm", "text-gray-800", "shadow-theme-xs", "outline-none", "transition", "placeholder:text-gray-400", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", "dark:placeholder:text-white/30", "dark:focus:border-brand-800", 3, "type"], ["type", "button", "aria-label", "Mostrar u ocultar contrase\xF1a", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "size-5"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-600", "dark:text-gray-400"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500", "focus:ring-brand-500", "dark:border-gray-700"], ["routerLink", "/forgot-password", 1, "text-sm", "text-brand-500", "transition", "hover:text-brand-600", "dark:text-brand-400"], ["type", "submit", 1, "inline-flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-500", "px-4", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "transition", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:bg-brand-300", 3, "disabled"], [1, "relative", "hidden", "w-full", "overflow-hidden", "lg:flex", "lg:w-1/2", "lg:items-center", "lg:justify-center"], ["alt", "brisa", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-black/35"], [1, "relative", "z-10", "flex", "max-w-lg", "flex-col", "items-center", "px-8", "text-center"], ["src", "/images/logo/logo.png", "alt", "brisa", 1, "mb-6", "max-h-24", "w-auto"], [1, "mb-3", "text-3xl", "font-bold", "text-white"], [1, "text-base", "leading-7", "text-white/90"], ["d", "M2.5 10C3.6 6.9 6.5 4.75 10 4.75C13.5 4.75 16.4 6.9 17.5 10C16.4 13.1 13.5 15.25 10 15.25C6.5 15.25 3.6 13.1 2.5 10Z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "10", "cy", "10", "r", "2.5", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M3.33398 3.33325L16.6673 16.6666", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M8.82031 8.82031C8.51198 9.12864 8.33398 9.54681 8.33398 9.99998C8.33398 10.4531 8.51198 10.8713 8.82031 11.1796C9.12865 11.488 9.54681 11.666 10 11.666C10.4531 11.666 10.8713 11.488 11.1796 11.1796", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M6.10091 6.1001C4.59793 6.90978 3.39348 8.26438 2.5 9.99998C3.6 13.1 6.5 15.25 10 15.25C11.5506 15.25 12.9831 14.8279 14.1991 14.0999", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M17.5 10C16.9874 8.55559 16.0224 7.30415 14.7607 6.43884C13.4989 5.57353 12.0009 5.11884 10.4667 5.13644", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Unete a brisa ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 4)(10, "h1", 8);
      \u0275\u0275text(11, " Iniciar sesi\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, " Ingresa tus credenciales para acceder al sistema brisa. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, LoginComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(16, "div")(17, "label", 12);
      \u0275\u0275text(18, " Correo electr\xF3nico ");
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275conditionalCreate(22, LoginComponent_Conditional_22_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 12);
      \u0275\u0275text(25, " Contrase\xF1a ");
      \u0275\u0275elementStart(26, "span", 13);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 16);
      \u0275\u0275element(29, "input", 17);
      \u0275\u0275elementStart(30, "button", 18);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_30_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275conditionalCreate(31, LoginComponent_Conditional_31_Template, 3, 0, ":svg:svg", 19)(32, LoginComponent_Conditional_32_Template, 5, 0, ":svg:svg", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(33, LoginComponent_Conditional_33_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20)(35, "label", 21);
      \u0275\u0275element(36, "input", 22);
      \u0275\u0275text(37, " Mantener sesi\xF3n iniciada ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 23);
      \u0275\u0275text(39, " \xBFOlvidaste tu contrase\xF1a? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "button", 24);
      \u0275\u0275conditionalCreate(41, LoginComponent_Conditional_41_Template, 2, 0, "span")(42, LoginComponent_Conditional_42_Template, 3, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 25);
      \u0275\u0275element(44, "img", 26)(45, "div", 27);
      \u0275\u0275elementStart(46, "div", 28);
      \u0275\u0275element(47, "img", 29);
      \u0275\u0275elementStart(48, "h2", 30);
      \u0275\u0275text(49, "Bienvenido de nuevo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 31);
      \u0275\u0275text(51, " Gestiona pedidos, noticias y operaciones del sistema desde un solo lugar. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.errorMessage() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.email.touched && ctx.email.invalid ? 22 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showPassword() ? 31 : 32);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.password.touched && ctx.password.invalid ? 33 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 41 : 42);
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.loginImage(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="relative min-h-screen bg-white dark:bg-gray-900">
  <div class="relative flex min-h-screen flex-col lg:flex-row">
    <!-- PANEL IZQUIERDO -->
    <div
      class="flex w-full flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <!-- VOLVER -->
        <div class="mb-8">
          <a
            routerLink="/register"
            class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Unete a brisa
          </a>
        </div>

        <!-- CABECERA -->
        <div class="mb-8">
          <h1
            class="mb-2 text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl"
          >
            Iniciar sesi\xF3n
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Ingresa tus credenciales para acceder al sistema brisa.
          </p>
        </div>

        <!-- ERROR -->
        @if (errorMessage()) {
          <div
            class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
          >
            {{ errorMessage() }}
          </div>
        }

        <!-- FORM -->
        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-6">
          <!-- EMAIL -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Correo electr\xF3nico <span class="text-red-500">*</span>
            </label>

            <input
              type="email"
              formControlName="email"
              placeholder="admin@brisa.com"
              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs outline-none transition placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />

            @if (email.touched && email.invalid) {
              <p class="mt-1.5 text-xs text-red-500">
                Ingresa un correo v\xE1lido.
              </p>
            }
          </div>

          <!-- PASSWORD -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Contrase\xF1a <span class="text-red-500">*</span>
            </label>

            <div class="relative">
              <input
                [type]="showPassword() ? 'text' : 'password'"
                formControlName="password"
                placeholder="Ingresa tu contrase\xF1a"
                class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs outline-none transition placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              />

              <button
                type="button"
                (click)="togglePasswordVisibility()"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="Mostrar u ocultar contrase\xF1a"
              >
                @if (!showPassword()) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M2.5 10C3.6 6.9 6.5 4.75 10 4.75C13.5 4.75 16.4 6.9 17.5 10C16.4 13.1 13.5 15.25 10 15.25C6.5 15.25 3.6 13.1 2.5 10Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                } @else {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M3.33398 3.33325L16.6673 16.6666"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.82031 8.82031C8.51198 9.12864 8.33398 9.54681 8.33398 9.99998C8.33398 10.4531 8.51198 10.8713 8.82031 11.1796C9.12865 11.488 9.54681 11.666 10 11.666C10.4531 11.666 10.8713 11.488 11.1796 11.1796"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.10091 6.1001C4.59793 6.90978 3.39348 8.26438 2.5 9.99998C3.6 13.1 6.5 15.25 10 15.25C11.5506 15.25 12.9831 14.8279 14.1991 14.0999"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.5 10C16.9874 8.55559 16.0224 7.30415 14.7607 6.43884C13.4989 5.57353 12.0009 5.11884 10.4667 5.13644"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                }
              </button>
            </div>

            @if (password.touched && password.invalid) {
              <p class="mt-1.5 text-xs text-red-500">
                La contrase\xF1a es obligatoria.
              </p>
            }
          </div>

          <!-- EXTRA -->
          <div class="flex items-center justify-between gap-3">
            <label
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-700"
              />
              Mantener sesi\xF3n iniciada
            </label>

            <a
              routerLink="/forgot-password"
              class="text-sm text-brand-500 transition hover:text-brand-600 dark:text-brand-400"
            >
              \xBFOlvidaste tu contrase\xF1a?
            </a>
          </div>

          <!-- BOT\xD3N -->
          <button
            type="submit"
            [disabled]="loading()"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"
          >
            @if (!loading()) {
              <span>Entrar al sistema</span>
            } @else {
              <span
                class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              ></span>
              <span>Ingresando...</span>
            }
          </button>
        </form>
      </div>
    </div>

    <!-- PANEL DERECHO -->
    <div
      class="relative hidden w-full overflow-hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center"
    >
      <!-- Imagen de fondo completa -->
      <img
        [src]="loginImage()"
        alt="brisa"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Capa oscura para legibilidad -->
      <div class="absolute inset-0 bg-black/35"></div>

      <!-- Contenido encima -->
      <div
        class="relative z-10 flex max-w-lg flex-col items-center px-8 text-center"
      >
        <img
          src="/images/logo/logo.png"
          alt="brisa"
          class="mb-6 max-h-24 w-auto"
        />

        <h2 class="mb-3 text-3xl font-bold text-white">Bienvenido de nuevo</h2>

        <p class="text-base leading-7 text-white/90">
          Gestiona pedidos, noticias y operaciones del sistema desde un solo
          lugar.
        </p>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth-pages/pages/login/login.component.ts", lineNumber: 15 });
})();

// src/app/pages/auth-pages/pages/reset-password/services/reset-password.service.ts
var ResetPasswordService = class _ResetPasswordService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/auth/reset-password`;
  resetPassword(payload) {
    return this.http.post(this.apiUrl, payload);
  }
  static \u0275fac = function ResetPasswordService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResetPasswordService, factory: _ResetPasswordService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/auth-pages/pages/reset-password/pages/reset-password/reset-password.component.ts
function ResetPasswordComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function ResetPasswordComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function ResetPasswordComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 32)(2, "circle", 33);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 34)(2, "path", 35)(3, "path", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 32)(2, "circle", 33);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 34)(2, "path", 35)(3, "path", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " La confirmaci\xF3n debe tener al menos 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardar nueva contrase\xF1a");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Actualizando...");
    \u0275\u0275elementEnd();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  resetPasswordService = inject(ResetPasswordService);
  resetPasswordImage = signal(this.getResetPasswordImageByHour(), ...ngDevMode ? [{ debugName: "resetPasswordImage" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  showNewPassword = signal(false, ...ngDevMode ? [{ debugName: "showNewPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  showConfirmPassword = signal(false, ...ngDevMode ? [{ debugName: "showConfirmPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  token = this.route.snapshot.queryParamMap.get("token") ?? "";
  form = this.fb.nonNullable.group({
    newPassword: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
  });
  getResetPasswordImageByHour() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 17) {
      return "/images/logo/day.jpg";
    }
    return "/images/logo/night.jpg";
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    if (this.loading()) {
      return;
    }
    this.errorMessage.set("");
    this.successMessage.set("");
    if (!this.token) {
      this.errorMessage.set("El enlace de recuperaci\xF3n no es v\xE1lido.");
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { newPassword, confirmPassword } = this.form.getRawValue();
    if (newPassword !== confirmPassword) {
      this.errorMessage.set("Las contrase\xF1as no coinciden.");
      return;
    }
    this.loading.set(true);
    this.resetPasswordService.resetPassword({
      token: this.token,
      newPassword,
      confirmPassword
    }).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.successMessage.set(response.message || "Contrase\xF1a actualizada correctamente.");
        this.form.reset({
          newPassword: "",
          confirmPassword: ""
        });
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 2e3);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(this.extractErrorMessage(error));
      }
    });
  }
  toggleNewPasswordVisibility() {
    this.showNewPassword.update((value) => !value);
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.update((value) => !value);
  }
  extractErrorMessage(error) {
    const err = error;
    const message = err?.error?.message;
    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo restablecer la contrase\xF1a";
    }
    if (typeof message === "string" && message.trim()) {
      return message;
    }
    return "No se pudo restablecer la contrase\xF1a. Int\xE9ntalo nuevamente.";
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 54, vars: 12, consts: [[1, "relative", "min-h-screen", "bg-white", "dark:bg-gray-900"], [1, "relative", "flex", "min-h-screen", "flex-col", "lg:flex-row"], [1, "flex", "w-full", "flex-1", "items-center", "justify-center", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "w-full", "max-w-md"], [1, "mb-8"], ["routerLink", "/login", 1, "inline-flex", "items-center", "gap-2", "text-sm", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M12.5 5L7.5 10L12.5 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mb-2", "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90", "sm:text-3xl"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mb-6", "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-900/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mb-6", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], [1, "relative"], ["formControlName", "newPassword", "placeholder", "Ingresa tu nueva contrase\xF1a", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "pr-11", "text-sm", "text-gray-800", "shadow-theme-xs", "outline-none", "transition", "placeholder:text-gray-400", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", "dark:placeholder:text-white/30", "dark:focus:border-brand-800", 3, "type"], ["type", "button", "aria-label", "Mostrar u ocultar nueva contrase\xF1a", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "size-5"], [1, "mt-1.5", "text-xs", "text-red-500"], ["formControlName", "confirmPassword", "placeholder", "Confirma tu nueva contrase\xF1a", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "pr-11", "text-sm", "text-gray-800", "shadow-theme-xs", "outline-none", "transition", "placeholder:text-gray-400", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", "dark:placeholder:text-white/30", "dark:focus:border-brand-800", 3, "type"], ["type", "button", "aria-label", "Mostrar u ocultar confirmaci\xF3n de contrase\xF1a", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300", 3, "click"], ["type", "submit", 1, "inline-flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-500", "px-4", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "transition", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:bg-brand-300", 3, "disabled"], [1, "mt-6", "text-center"], ["routerLink", "/login", 1, "text-sm", "text-brand-500", "transition", "hover:text-brand-600", "dark:text-brand-400"], [1, "relative", "hidden", "w-full", "overflow-hidden", "lg:flex", "lg:w-1/2", "lg:items-center", "lg:justify-center"], ["alt", "brisa", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-black/35"], [1, "relative", "z-10", "flex", "max-w-lg", "flex-col", "items-center", "px-8", "text-center"], ["src", "/images/logo/logo.png", "alt", "brisa", 1, "mb-6", "max-h-24", "w-auto"], [1, "mb-3", "text-3xl", "font-bold", "text-white"], [1, "text-base", "leading-7", "text-white/90"], ["d", "M2.5 10C3.6 6.9 6.5 4.75 10 4.75C13.5 4.75 16.4 6.9 17.5 10C16.4 13.1 13.5 15.25 10 15.25C6.5 15.25 3.6 13.1 2.5 10Z", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "10", "cy", "10", "r", "2.5", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M3.33398 3.33325L16.6673 16.6666", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M8.82031 8.82031C8.51198 9.12864 8.33398 9.54681 8.33398 9.99998C8.33398 10.4531 8.51198 10.8713 8.82031 11.1796C9.12865 11.488 9.54681 11.666 10 11.666C10.4531 11.666 10.8713 11.488 11.1796 11.1796", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M6.10091 6.1001C4.59793 6.90978 3.39348 8.26438 2.5 9.99998C3.6 13.1 6.5 15.25 10 15.25C11.5506 15.25 12.9831 14.8279 14.1991 14.0999", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M17.5 10C16.9874 8.55559 16.0224 7.30415 14.7607 6.43884C13.4989 5.57353 12.0009 5.11884 10.4667 5.13644", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Volver al login ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 4)(10, "h1", 8);
      \u0275\u0275text(11, " Restablecer contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, " Escribe tu nueva contrase\xF1a y confirma el cambio para recuperar el acceso a tu cuenta. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, ResetPasswordComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275conditionalCreate(15, ResetPasswordComponent_Conditional_15_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(17, "div")(18, "label", 13);
      \u0275\u0275text(19, " Nueva contrase\xF1a ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_24_listener() {
        return ctx.toggleNewPasswordVisibility();
      });
      \u0275\u0275conditionalCreate(25, ResetPasswordComponent_Conditional_25_Template, 3, 0, ":svg:svg", 18)(26, ResetPasswordComponent_Conditional_26_Template, 5, 0, ":svg:svg", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, ResetPasswordComponent_Conditional_27_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div")(29, "label", 13);
      \u0275\u0275text(30, " Confirmar contrase\xF1a ");
      \u0275\u0275elementStart(31, "span", 14);
      \u0275\u0275text(32, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 15);
      \u0275\u0275element(34, "input", 20);
      \u0275\u0275elementStart(35, "button", 21);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_35_listener() {
        return ctx.toggleConfirmPasswordVisibility();
      });
      \u0275\u0275conditionalCreate(36, ResetPasswordComponent_Conditional_36_Template, 3, 0, ":svg:svg", 18)(37, ResetPasswordComponent_Conditional_37_Template, 5, 0, ":svg:svg", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, ResetPasswordComponent_Conditional_38_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 22);
      \u0275\u0275conditionalCreate(40, ResetPasswordComponent_Conditional_40_Template, 2, 0, "span")(41, ResetPasswordComponent_Conditional_41_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 23)(43, "a", 24);
      \u0275\u0275text(44, " Volver al login ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 25);
      \u0275\u0275element(46, "img", 26)(47, "div", 27);
      \u0275\u0275elementStart(48, "div", 28);
      \u0275\u0275element(49, "img", 29);
      \u0275\u0275elementStart(50, "h2", 30);
      \u0275\u0275text(51, " Crea una nueva contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 31);
      \u0275\u0275text(53, " Protege tu cuenta con una contrase\xF1a segura y vuelve a entrar al sistema con tranquilidad. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.successMessage() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showNewPassword() ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showNewPassword() ? 25 : 26);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.f.newPassword.touched && ctx.f.newPassword.invalid ? 27 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showConfirmPassword() ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showConfirmPassword() ? 36 : 37);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.f.confirmPassword.touched && ctx.f.confirmPassword.invalid ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 40 : 41);
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.resetPasswordImage(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="relative min-h-screen bg-white dark:bg-gray-900">
  <div class="relative flex min-h-screen flex-col lg:flex-row">
    <!-- PANEL IZQUIERDO -->
    <div
      class="flex w-full flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <!-- VOLVER -->
        <div class="mb-8">
          <a
            routerLink="/login"
            class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Volver al login
          </a>
        </div>

        <!-- CABECERA -->
        <div class="mb-8">
          <h1
            class="mb-2 text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl"
          >
            Restablecer contrase\xF1a
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Escribe tu nueva contrase\xF1a y confirma el cambio para recuperar el
            acceso a tu cuenta.
          </p>
        </div>

        <!-- SUCCESS -->
        @if (successMessage()) {
          <div
            class="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/10 dark:text-green-400"
          >
            {{ successMessage() }}
          </div>
        }

        <!-- ERROR -->
        @if (errorMessage()) {
          <div
            class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
          >
            {{ errorMessage() }}
          </div>
        }

        <!-- FORM -->
        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-6">
          <!-- NUEVA CONTRASE\xD1A -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Nueva contrase\xF1a <span class="text-red-500">*</span>
            </label>

            <div class="relative">
              <input
                [type]="showNewPassword() ? 'text' : 'password'"
                formControlName="newPassword"
                placeholder="Ingresa tu nueva contrase\xF1a"
                class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs outline-none transition placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              />

              <button
                type="button"
                (click)="toggleNewPasswordVisibility()"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="Mostrar u ocultar nueva contrase\xF1a"
              >
                @if (!showNewPassword()) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M2.5 10C3.6 6.9 6.5 4.75 10 4.75C13.5 4.75 16.4 6.9 17.5 10C16.4 13.1 13.5 15.25 10 15.25C6.5 15.25 3.6 13.1 2.5 10Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                } @else {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M3.33398 3.33325L16.6673 16.6666"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.82031 8.82031C8.51198 9.12864 8.33398 9.54681 8.33398 9.99998C8.33398 10.4531 8.51198 10.8713 8.82031 11.1796C9.12865 11.488 9.54681 11.666 10 11.666C10.4531 11.666 10.8713 11.488 11.1796 11.1796"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.10091 6.1001C4.59793 6.90978 3.39348 8.26438 2.5 9.99998C3.6 13.1 6.5 15.25 10 15.25C11.5506 15.25 12.9831 14.8279 14.1991 14.0999"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.5 10C16.9874 8.55559 16.0224 7.30415 14.7607 6.43884C13.4989 5.57353 12.0009 5.11884 10.4667 5.13644"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                }
              </button>
            </div>

            @if (f.newPassword.touched && f.newPassword.invalid) {
              <p class="mt-1.5 text-xs text-red-500">
                La contrase\xF1a debe tener al menos 8 caracteres.
              </p>
            }
          </div>

          <!-- CONFIRMAR CONTRASE\xD1A -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Confirmar contrase\xF1a <span class="text-red-500">*</span>
            </label>

            <div class="relative">
              <input
                [type]="showConfirmPassword() ? 'text' : 'password'"
                formControlName="confirmPassword"
                placeholder="Confirma tu nueva contrase\xF1a"
                class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs outline-none transition placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              />

              <button
                type="button"
                (click)="toggleConfirmPasswordVisibility()"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="Mostrar u ocultar confirmaci\xF3n de contrase\xF1a"
              >
                @if (!showConfirmPassword()) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M2.5 10C3.6 6.9 6.5 4.75 10 4.75C13.5 4.75 16.4 6.9 17.5 10C16.4 13.1 13.5 15.25 10 15.25C6.5 15.25 3.6 13.1 2.5 10Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                } @else {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="size-5"
                  >
                    <path
                      d="M3.33398 3.33325L16.6673 16.6666"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.82031 8.82031C8.51198 9.12864 8.33398 9.54681 8.33398 9.99998C8.33398 10.4531 8.51198 10.8713 8.82031 11.1796C9.12865 11.488 9.54681 11.666 10 11.666C10.4531 11.666 10.8713 11.488 11.1796 11.1796"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.10091 6.1001C4.59793 6.90978 3.39348 8.26438 2.5 9.99998C3.6 13.1 6.5 15.25 10 15.25C11.5506 15.25 12.9831 14.8279 14.1991 14.0999"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.5 10C16.9874 8.55559 16.0224 7.30415 14.7607 6.43884C13.4989 5.57353 12.0009 5.11884 10.4667 5.13644"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                }
              </button>
            </div>

            @if (f.confirmPassword.touched && f.confirmPassword.invalid) {
              <p class="mt-1.5 text-xs text-red-500">
                La confirmaci\xF3n debe tener al menos 8 caracteres.
              </p>
            }
          </div>

          <!-- BOT\xD3N -->
          <button
            type="submit"
            [disabled]="loading()"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"
          >
            @if (!loading()) {
              <span>Guardar nueva contrase\xF1a</span>
            } @else {
              <span
                class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              ></span>
              <span>Actualizando...</span>
            }
          </button>
        </form>

        <!-- EXTRA -->
        <div class="mt-6 text-center">
          <a
            routerLink="/login"
            class="text-sm text-brand-500 transition hover:text-brand-600 dark:text-brand-400"
          >
            Volver al login
          </a>
        </div>
      </div>
    </div>

    <!-- PANEL DERECHO -->
    <div
      class="relative hidden w-full overflow-hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center"
    >
      <img
        [src]="resetPasswordImage()"
        alt="brisa"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-black/35"></div>

      <div
        class="relative z-10 flex max-w-lg flex-col items-center px-8 text-center"
      >
        <img
          src="/images/logo/logo.png"
          alt="brisa"
          class="mb-6 max-h-24 w-auto"
        />

        <h2 class="mb-3 text-3xl font-bold text-white">
          Crea una nueva contrase\xF1a
        </h2>

        <p class="text-base leading-7 text-white/90">
          Protege tu cuenta con una contrase\xF1a segura y vuelve a entrar al
          sistema con tranquilidad.
        </p>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/pages/auth-pages/pages/reset-password/pages/reset-password/reset-password.component.ts", lineNumber: 14 });
})();

// src/app/pages/auth-pages/pages/forgot-password/services/forgot-password.service.ts
var ForgotPasswordService = class _ForgotPasswordService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/auth/forgot-password`;
  forgotPassword(payload) {
    return this.http.post(this.apiUrl, payload);
  }
  static \u0275fac = function ForgotPasswordService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ForgotPasswordService, factory: _ForgotPasswordService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/auth-pages/pages/forgot-password/pages/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function ForgotPasswordComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function ForgotPasswordComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, " Ingresa un correo v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar enlace de recuperaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Enviando...");
    \u0275\u0275elementEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb = inject(FormBuilder);
  forgotPasswordService = inject(ForgotPasswordService);
  router = inject(Router);
  forgotPasswordImage = signal(this.getForgotPasswordImageByHour(), ...ngDevMode ? [{ debugName: "forgotPasswordImage" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]]
  });
  getForgotPasswordImageByHour() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 17) {
      return "/images/logo/day.jpg";
    }
    return "/images/logo/night.jpg";
  }
  submit() {
    if (this.loading()) {
      return;
    }
    this.errorMessage.set("");
    this.successMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.forgotPasswordService.forgotPassword(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.successMessage.set(response.message || "Si el correo existe en el sistema, se enviar\xE1n instrucciones de recuperaci\xF3n.");
        this.form.reset({
          email: ""
        });
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(this.extractErrorMessage(error));
      }
    });
  }
  volverAlLogin() {
    this.router.navigate(["/login"]);
  }
  extractErrorMessage(error) {
    const err = error;
    const message = err?.error?.message;
    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo procesar la solicitud";
    }
    if (typeof message === "string" && message.trim()) {
      return message;
    }
    return "No se pudo procesar la solicitud";
  }
  get email() {
    return this.form.controls.email;
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 39, vars: 7, consts: [[1, "relative", "min-h-screen", "bg-white", "dark:bg-gray-900"], [1, "relative", "flex", "min-h-screen", "flex-col", "lg:flex-row"], [1, "flex", "w-full", "flex-1", "items-center", "justify-center", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "w-full", "max-w-md"], [1, "mb-8"], ["routerLink", "/login", 1, "inline-flex", "items-center", "gap-2", "text-sm", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M12.5 5L7.5 10L12.5 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mb-2", "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90", "sm:text-3xl"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mb-6", "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-900/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mb-6", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], ["type", "email", "formControlName", "email", "placeholder", "usuario@brisa.com", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "shadow-theme-xs", "outline-none", "transition", "placeholder:text-gray-400", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", "dark:placeholder:text-white/30", "dark:focus:border-brand-800"], [1, "mt-1.5", "text-xs", "text-red-500"], ["type", "submit", 1, "inline-flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-brand-500", "px-4", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "transition", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:bg-brand-300", 3, "disabled"], [1, "mt-6", "text-center"], ["routerLink", "/login", 1, "text-sm", "text-brand-500", "transition", "hover:text-brand-600", "dark:text-brand-400"], [1, "relative", "hidden", "w-full", "overflow-hidden", "lg:flex", "lg:w-1/2", "lg:items-center", "lg:justify-center"], ["alt", "brisa", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-black/35"], [1, "relative", "z-10", "flex", "max-w-lg", "flex-col", "items-center", "px-8", "text-center"], ["src", "/images/logo/logo.png", "alt", "brisa", 1, "mb-6", "max-h-24", "w-auto"], [1, "mb-3", "text-3xl", "font-bold", "text-white"], [1, "text-base", "leading-7", "text-white/90"], [1, "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Volver al login ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 4)(10, "h1", 8);
      \u0275\u0275text(11, " Recuperar contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, " Ingresa tu correo electr\xF3nico y te enviaremos un enlace para restablecer tu contrase\xF1a. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, ForgotPasswordComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275conditionalCreate(15, ForgotPasswordComponent_Conditional_15_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(17, "div")(18, "label", 13);
      \u0275\u0275text(19, " Correo electr\xF3nico ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275conditionalCreate(23, ForgotPasswordComponent_Conditional_23_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275conditionalCreate(25, ForgotPasswordComponent_Conditional_25_Template, 2, 0, "span")(26, ForgotPasswordComponent_Conditional_26_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 18)(28, "a", 19);
      \u0275\u0275text(29, " Volver al inicio de sesi\xF3n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275element(31, "img", 21)(32, "div", 22);
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275element(34, "img", 24);
      \u0275\u0275elementStart(35, "h2", 25);
      \u0275\u0275text(36, "Recupera tu acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 26);
      \u0275\u0275text(38, " Te ayudamos a restablecer tu contrase\xF1a de forma r\xE1pida y segura para que vuelvas al sistema sin complicaciones. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.successMessage() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.email.touched && ctx.email.invalid ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 25 : 26);
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.forgotPasswordImage(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: '<div class="relative min-h-screen bg-white dark:bg-gray-900">\n  <div class="relative flex min-h-screen flex-col lg:flex-row">\n    <!-- PANEL IZQUIERDO -->\n    <div\n      class="flex w-full flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8"\n    >\n      <div class="w-full max-w-md">\n        <!-- VOLVER -->\n        <div class="mb-8">\n          <a\n            routerLink="/login"\n            class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="18"\n              height="18"\n              viewBox="0 0 20 20"\n              fill="none"\n            >\n              <path\n                d="M12.5 5L7.5 10L12.5 15"\n                stroke="currentColor"\n                stroke-width="1.5"\n                stroke-linecap="round"\n                stroke-linejoin="round"\n              />\n            </svg>\n            Volver al login\n          </a>\n        </div>\n\n        <!-- CABECERA -->\n        <div class="mb-8">\n          <h1\n            class="mb-2 text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl"\n          >\n            Recuperar contrase\xF1a\n          </h1>\n          <p class="text-sm text-gray-500 dark:text-gray-400">\n            Ingresa tu correo electr\xF3nico y te enviaremos un enlace para\n            restablecer tu contrase\xF1a.\n          </p>\n        </div>\n\n        <!-- SUCCESS -->\n        @if (successMessage()) {\n          <div\n            class="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/10 dark:text-green-400"\n          >\n            {{ successMessage() }}\n          </div>\n        }\n\n        <!-- ERROR -->\n        @if (errorMessage()) {\n          <div\n            class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"\n          >\n            {{ errorMessage() }}\n          </div>\n        }\n\n        <!-- FORM -->\n        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-6">\n          <!-- EMAIL -->\n          <div>\n            <label\n              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"\n            >\n              Correo electr\xF3nico <span class="text-red-500">*</span>\n            </label>\n\n            <input\n              type="email"\n              formControlName="email"\n              placeholder="usuario@brisa.com"\n              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs outline-none transition placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"\n            />\n\n            @if (email.touched && email.invalid) {\n              <p class="mt-1.5 text-xs text-red-500">\n                Ingresa un correo v\xE1lido.\n              </p>\n            }\n          </div>\n\n          <!-- BOT\xD3N -->\n          <button\n            type="submit"\n            [disabled]="loading()"\n            class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"\n          >\n            @if (!loading()) {\n              <span>Enviar enlace de recuperaci\xF3n</span>\n            } @else {\n              <span\n                class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"\n              ></span>\n              <span>Enviando...</span>\n            }\n          </button>\n        </form>\n\n        <!-- EXTRA -->\n        <div class="mt-6 text-center">\n          <a\n            routerLink="/login"\n            class="text-sm text-brand-500 transition hover:text-brand-600 dark:text-brand-400"\n          >\n            Volver al inicio de sesi\xF3n\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <!-- PANEL DERECHO -->\n    <div\n      class="relative hidden w-full overflow-hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center"\n    >\n      <!-- Imagen de fondo completa -->\n      <img\n        [src]="forgotPasswordImage()"\n        alt="brisa"\n        class="absolute inset-0 h-full w-full object-cover"\n      />\n\n      <!-- Capa oscura para legibilidad -->\n      <div class="absolute inset-0 bg-black/35"></div>\n\n      <!-- Contenido encima -->\n      <div\n        class="relative z-10 flex max-w-lg flex-col items-center px-8 text-center"\n      >\n        <img\n          src="/images/logo/logo.png"\n          alt="brisa"\n          class="mb-6 max-h-24 w-auto"\n        />\n\n        <h2 class="mb-3 text-3xl font-bold text-white">Recupera tu acceso</h2>\n\n        <p class="text-base leading-7 text-white/90">\n          Te ayudamos a restablecer tu contrase\xF1a de forma r\xE1pida y segura para\n          que vuelvas al sistema sin complicaciones.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/pages/auth-pages/pages/forgot-password/pages/forgot-password/forgot-password.component.ts", lineNumber: 14 });
})();

// src/app/pages/auth-pages/pages/register/services/register.service.ts
var RegisterService = class _RegisterService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/auth/register`;
  register(payload) {
    return this.http.post(this.apiUrl, payload);
  }
  static \u0275fac = function RegisterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegisterService, factory: _RegisterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/auth-pages/pages/register/pages/register/register.component.ts
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function RegisterComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function RegisterComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear cuenta ");
  }
}
function RegisterComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Registrando... ");
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  registerService = inject(RegisterService);
  router = inject(Router);
  registerImage = signal(this.getRegisterImageByHour(), ...ngDevMode ? [{ debugName: "registerImage" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  showConfirmPassword = signal(false, ...ngDevMode ? [{ debugName: "showConfirmPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
  });
  getRegisterImageByHour() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 17) {
      return "/images/logo/day.jpg";
    }
    return "/images/logo/night.jpg";
  }
  submit() {
    if (this.loading()) {
      return;
    }
    this.errorMessage.set("");
    this.successMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { password, confirmPassword } = this.form.getRawValue();
    if (password !== confirmPassword) {
      this.errorMessage.set("Las contrase\xF1as no coinciden.");
      return;
    }
    this.loading.set(true);
    this.registerService.register(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.successMessage.set(response.message || "Usuario registrado correctamente.");
        this.form.reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        });
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 2e3);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(this.extractErrorMessage(error));
      }
    });
  }
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.update((value) => !value);
  }
  extractErrorMessage(error) {
    const err = error;
    const message = err?.error?.message;
    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo registrar el usuario";
    }
    if (typeof message === "string" && message.trim()) {
      return message;
    }
    return "No se pudo registrar el usuario. Int\xE9ntalo nuevamente.";
  }
  get f() {
    return this.form.controls;
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 72, vars: 8, consts: [[1, "relative", "min-h-screen", "bg-white", "dark:bg-gray-900"], [1, "relative", "flex", "min-h-screen", "flex-col", "lg:flex-row"], [1, "flex", "w-full", "flex-1", "items-center", "justify-center", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "w-full", "max-w-md"], [1, "mb-8"], ["routerLink", "/login", 1, "inline-flex", "items-center", "gap-2", "text-sm", "text-gray-500", "transition", "hover:text-gray-700", "dark:text-gray-400", "dark:hover:text-gray-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M12.5 5L7.5 10L12.5 15", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mb-2", "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90", "sm:text-3xl"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mb-6", "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-900/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "mb-6", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "text-red-500"], ["type", "text", "formControlName", "firstName", "placeholder", "Felix", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], ["type", "text", "formControlName", "lastName", "placeholder", "Gonz\xE1lez", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], ["type", "email", "formControlName", "email", "placeholder", "correo@gmail.com", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], ["type", "text", "formControlName", "phone", "placeholder", "+58412...", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], [1, "relative"], ["formControlName", "password", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "pr-10", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "type"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-500", 3, "click"], ["formControlName", "confirmPassword", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "px-4", "pr-10", "text-sm", "focus:border-brand-300", "focus:ring-3", "focus:ring-brand-500/20", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "type"], ["type", "submit", 1, "w-full", "rounded-lg", "bg-brand-500", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "mt-6", "text-center"], ["routerLink", "/login", 1, "text-sm", "text-brand-500", "hover:text-brand-600"], [1, "relative", "hidden", "w-1/2", "items-center", "justify-center", "lg:flex"], [1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-black/40"], [1, "relative", "z-10", "text-center", "text-white", "px-8"], ["src", "/images/logo/logo.png", 1, "mb-6", "max-h-24", "mx-auto"], [1, "text-3xl", "font-bold", "mb-3"], [1, "text-white/90"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Volver al login ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 4)(10, "h1", 8);
      \u0275\u0275text(11, " Crear cuenta ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, " Reg\xEDstrate para comenzar a realizar pedidos en brisa. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, RegisterComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275conditionalCreate(15, RegisterComponent_Conditional_15_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(17, "div")(18, "label", 13);
      \u0275\u0275text(19, " Nombre ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 13);
      \u0275\u0275text(25, " Apellido ");
      \u0275\u0275elementStart(26, "span", 14);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "label", 13);
      \u0275\u0275text(31, " Correo electr\xF3nico ");
      \u0275\u0275elementStart(32, "span", 14);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "label", 13);
      \u0275\u0275text(37, " Tel\xE9fono ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "label", 13);
      \u0275\u0275text(41, " Contrase\xF1a ");
      \u0275\u0275elementStart(42, "span", 14);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275element(45, "input", 20);
      \u0275\u0275elementStart(46, "button", 21);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_46_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275text(47, " \u{1F441} ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div")(49, "label", 13);
      \u0275\u0275text(50, " Confirmar contrase\xF1a ");
      \u0275\u0275elementStart(51, "span", 14);
      \u0275\u0275text(52, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 19);
      \u0275\u0275element(54, "input", 22);
      \u0275\u0275elementStart(55, "button", 21);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_55_listener() {
        return ctx.toggleConfirmPasswordVisibility();
      });
      \u0275\u0275text(56, " \u{1F441} ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "button", 23);
      \u0275\u0275conditionalCreate(58, RegisterComponent_Conditional_58_Template, 1, 0)(59, RegisterComponent_Conditional_59_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 24)(61, "a", 25);
      \u0275\u0275text(62, " \xBFYa tienes cuenta? Inicia sesi\xF3n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 26);
      \u0275\u0275element(64, "img", 27)(65, "div", 28);
      \u0275\u0275elementStart(66, "div", 29);
      \u0275\u0275element(67, "img", 30);
      \u0275\u0275elementStart(68, "h2", 31);
      \u0275\u0275text(69, "\xDAnete a brisa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 32);
      \u0275\u0275text(71, " Disfruta de una experiencia r\xE1pida, moderna y deliciosa al gestionar tus pedidos en l\xEDnea. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.successMessage() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(29);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275advance(9);
      \u0275\u0275property("type", ctx.showConfirmPassword() ? "text" : "password");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 58 : 59);
      \u0275\u0275advance(6);
      \u0275\u0275property("src", ctx.registerImage(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="relative min-h-screen bg-white dark:bg-gray-900">
  <div class="relative flex min-h-screen flex-col lg:flex-row">
    <!-- PANEL IZQUIERDO -->
    <div
      class="flex w-full flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <!-- VOLVER -->
        <div class="mb-8">
          <a
            routerLink="/login"
            class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Volver al login
          </a>
        </div>

        <!-- CABECERA -->
        <div class="mb-8">
          <h1
            class="mb-2 text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl"
          >
            Crear cuenta
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Reg\xEDstrate para comenzar a realizar pedidos en brisa.
          </p>
        </div>

        <!-- SUCCESS -->
        @if (successMessage()) {
          <div
            class="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/10 dark:text-green-400"
          >
            {{ successMessage() }}
          </div>
        }

        <!-- ERROR -->
        @if (errorMessage()) {
          <div
            class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
          >
            {{ errorMessage() }}
          </div>
        }

        <!-- FORM -->
        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-6">
          <!-- NOMBRE -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Nombre <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              formControlName="firstName"
              placeholder="Felix"
              class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <!-- APELLIDO -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Apellido <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              formControlName="lastName"
              placeholder="Gonz\xE1lez"
              class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <!-- EMAIL -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Correo electr\xF3nico <span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              formControlName="email"
              placeholder="correo@gmail.com"
              class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <!-- TEL\xC9FONO -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Tel\xE9fono
            </label>
            <input
              type="text"
              formControlName="phone"
              placeholder="+58412..."
              class="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <!-- PASSWORD -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Contrase\xF1a <span class="text-red-500">*</span>
            </label>

            <div class="relative">
              <input
                [type]="showPassword() ? 'text' : 'password'"
                formControlName="password"
                class="h-11 w-full rounded-lg border border-gray-300 px-4 pr-10 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <button
                type="button"
                (click)="togglePasswordVisibility()"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                \u{1F441}
              </button>
            </div>
          </div>

          <!-- CONFIRM PASSWORD -->
          <div>
            <label
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Confirmar contrase\xF1a <span class="text-red-500">*</span>
            </label>

            <div class="relative">
              <input
                [type]="showConfirmPassword() ? 'text' : 'password'"
                formControlName="confirmPassword"
                class="h-11 w-full rounded-lg border border-gray-300 px-4 pr-10 text-sm focus:border-brand-300 focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <button
                type="button"
                (click)="toggleConfirmPasswordVisibility()"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                \u{1F441}
              </button>
            </div>
          </div>

          <!-- BOT\xD3N -->
          <button
            type="submit"
            [disabled]="loading()"
            class="w-full rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
          >
            @if (!loading()) {
              Crear cuenta
            } @else {
              Registrando...
            }
          </button>
        </form>

        <!-- LINK -->
        <div class="mt-6 text-center">
          <a
            routerLink="/login"
            class="text-sm text-brand-500 hover:text-brand-600"
          >
            \xBFYa tienes cuenta? Inicia sesi\xF3n
          </a>
        </div>
      </div>
    </div>

    <!-- PANEL DERECHO -->
    <div class="relative hidden w-1/2 items-center justify-center lg:flex">
      <img
        [src]="registerImage()"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 text-center text-white px-8">
        <img src="/images/logo/logo.png" class="mb-6 max-h-24 mx-auto" />

        <h2 class="text-3xl font-bold mb-3">\xDAnete a brisa</h2>

        <p class="text-white/90">
          Disfruta de una experiencia r\xE1pida, moderna y deliciosa al gestionar
          tus pedidos en l\xEDnea.
        </p>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/pages/auth-pages/pages/register/pages/register/register.component.ts", lineNumber: 14 });
})();

// src/app/pages/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/dashboard`;
  getStats(startDate, endDate) {
    const params = new HttpParams().set("startDate", startDate).set("endDate", endDate);
    return this.http.get(this.base, { params });
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/dashboard/dashboard.component.ts
var _c08 = () => [1, 2, 3, 4];
function DashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function DashboardComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function DashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, DashboardComponent_div_20_div_1_Template, 1, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c08));
  }
}
function DashboardComponent_ng_container_21_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats.embarcaciones.pendienteAprobacion, " por aprobar ");
  }
}
function DashboardComponent_ng_container_21_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "Sin reservas recientes");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_container_21_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "p", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51)(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", r_r2.vessel, " \xB7 ", r_r2.desde, " \u2192 ", r_r2.hasta, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r2.passengers, " pax \xB7 ", r_r2.tripDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(r_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(r_r2.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 9, r_r2.total, "1.2-2"));
  }
}
function DashboardComponent_ng_container_21_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "Sin pagos recientes");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_ng_container_21_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "p", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 53);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.methodLabel(p_r3.method), " \xB7 ", ctx_r0.refTypeLabel(p_r3.referenceType), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(p_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(p_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r3.currency === "VES" || p_r3.currency === "BS" ? "Bs " : "$", "", \u0275\u0275pipeBind2(11, 7, p_r3.amount, "1.2-2"), " ");
  }
}
function DashboardComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 1)(3, "p", 17);
    \u0275\u0275text(4, "Ingresos per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 20);
    \u0275\u0275text(11, "Pagos verificados en el rango seleccionado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21)(13, "p", 22);
    \u0275\u0275text(14, " Pagos por verificar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 24);
    \u0275\u0275text(18, " Ir a verificar \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 1)(20, "p", 17);
    \u0275\u0275text(21, "Excursiones (per\xEDodo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 18);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25)(25, "span", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 27);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 28);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 1)(32, "p", 17);
    \u0275\u0275text(33, "Charters (per\xEDodo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 18);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 25)(37, "span", 26);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 29);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 30)(42, "div", 1)(43, "div", 31)(44, "p", 17);
    \u0275\u0275text(45, "Embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, DashboardComponent_ng_container_21_span_46_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 18);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "a", 33);
    \u0275\u0275text(50, "Ver flota \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 1)(52, "p", 17);
    \u0275\u0275text(53, "Proveedores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 18);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 20);
    \u0275\u0275text(57, "due\xF1os de embarcaciones activos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 1)(59, "p", 17);
    \u0275\u0275text(60, "Clientes registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 18);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "a", 34);
    \u0275\u0275text(64, "Ver usuarios \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 35)(66, "div", 36)(67, "div", 37)(68, "h2", 38);
    \u0275\u0275text(69, "\u{1F3DD}\uFE0F \xDAltimas excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "a", 39);
    \u0275\u0275text(71, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, DashboardComponent_ng_container_21_div_72_Template, 2, 0, "div", 40);
    \u0275\u0275elementStart(73, "div", 41);
    \u0275\u0275template(74, DashboardComponent_ng_container_21_div_74_Template, 14, 12, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 36)(76, "div", 37)(77, "h2", 38);
    \u0275\u0275text(78, "\u{1F4B0} \xDAltimos pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 43);
    \u0275\u0275text(80, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(81, DashboardComponent_ng_container_21_div_81_Template, 2, 0, "div", 40);
    \u0275\u0275elementStart(82, "div", 41);
    \u0275\u0275template(83, DashboardComponent_ng_container_21_div_83_Template, 12, 10, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(7, 20, ctx_r0.stats.pagos.ingresoUsd, "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r0.stats.pagos.pendientes > 0 ? "border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/5" : "border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.stats.pagos.pendientes > 0 ? "text-amber-500" : "text-gray-400");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.stats.pagos.pendientes > 0 ? "text-amber-700 dark:text-amber-400" : "text-gray-800 dark:text-white/90");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats.pagos.pendientes, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.excursiones.periodo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.excursiones.pending, " pend.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.excursiones.confirmed, " conf.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.excursiones.active, " activas");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.charters.periodo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.charters.pending, " pend.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.charters.confirmed, " conf.");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.stats.embarcaciones.pendienteAprobacion > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.stats.embarcaciones.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.usuarios.proveedores);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.usuarios.clientes);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.stats.reservasRecientes.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.stats.reservasRecientes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.stats.pagosRecientes.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.stats.pagosRecientes);
  }
}
var DashboardComponent = class _DashboardComponent {
  service = inject(DashboardService);
  loading = false;
  errorMsg = "";
  stats = null;
  today = this.toDateStr(/* @__PURE__ */ new Date());
  filters = { startDate: this.today, endDate: this.today };
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.errorMsg = "";
    this.service.getStats(this.filters.startDate, this.filters.endDate).subscribe({
      next: (s) => {
        this.stats = s;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = "No se pudo cargar el dashboard.";
        this.loading = false;
      }
    });
  }
  statusLabel(s) {
    const m = {
      PENDING: "Pendiente",
      CONFIRMED: "Confirmado",
      ACTIVE: "En curso",
      COMPLETED: "Completado",
      CANCELLED: "Cancelado",
      VERIFIED: "Verificado",
      REJECTED: "Rechazado"
    };
    return m[s] ?? s;
  }
  statusClass(s) {
    const m = {
      PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
      CONFIRMED: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
      ACTIVE: "bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400",
      COMPLETED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      CANCELLED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
      VERIFIED: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400",
      REJECTED: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
    };
    return m[s] ?? "bg-gray-100 text-gray-600";
  }
  methodLabel(m) {
    const map = {
      ZELLE: "Zelle",
      BINANCE: "Binance",
      PAGO_MOVIL: "Pago M\xF3vil",
      CARD: "Tarjeta",
      CASH: "Efectivo",
      WALLET: "Saldo",
      TRANSFERENCIA: "Transferencia"
    };
    return map[m] ?? m;
  }
  refTypeLabel(t) {
    const map = {
      ISLAND_BOOKING: "\u{1F3DD}\uFE0F Excursi\xF3n",
      WALLET_TOPUP: "\u2693 Recarga",
      RENTAL: "\u26F5 Charter"
    };
    return map[t] ?? t;
  }
  toDateStr(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 22, vars: 7, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-medium", "text-gray-500", "dark:text-gray-400"], ["type", "date", 1, "h-9", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-9", "rounded-lg", "bg-brand-500", "px-5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-60", "transition", 3, "click", "disabled"], ["class", "rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", 4, "ngIf"], [4, "ngIf"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-5", "py-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "grid", "gap-4", "sm:grid-cols-2", "lg:grid-cols-4"], ["class", "h-28 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]", 4, "ngFor", "ngForOf"], [1, "h-28", "animate-pulse", "rounded-2xl", "bg-gray-100", "dark:bg-white/[0.04]"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "mt-2", "text-3xl", "font-black", "text-gray-800", "dark:text-white/90"], [1, "text-base", "font-medium", "text-gray-400"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "rounded-2xl", "border", "p-5", "shadow-sm", 3, "ngClass"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", 3, "ngClass"], [1, "mt-2", "text-3xl", "font-black", 3, "ngClass"], ["routerLink", "/pagos", 1, "mt-0.5", "inline-block", "text-xs", "font-semibold", "text-brand-500", "hover:underline"], [1, "mt-1.5", "flex", "flex-wrap", "gap-1.5", "text-[10px]"], [1, "rounded-full", "bg-yellow-100", "px-2", "py-0.5", "font-bold", "text-yellow-700", "dark:bg-yellow-500/15", "dark:text-yellow-400"], [1, "rounded-full", "bg-blue-100", "px-2", "py-0.5", "font-bold", "text-blue-700", "dark:bg-blue-500/15", "dark:text-blue-400"], [1, "rounded-full", "bg-brand-100", "px-2", "py-0.5", "font-bold", "text-brand-700", "dark:bg-brand-500/15", "dark:text-brand-400"], [1, "rounded-full", "bg-green-100", "px-2", "py-0.5", "font-bold", "text-green-700", "dark:bg-green-500/15", "dark:text-green-400"], [1, "grid", "gap-4", "sm:grid-cols-3"], [1, "flex", "items-center", "justify-between"], ["class", "rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/15 dark:text-red-400", 4, "ngIf"], ["routerLink", "/embarcaciones", 1, "mt-0.5", "inline-block", "text-xs", "font-semibold", "text-brand-500", "hover:underline"], ["routerLink", "/usuarios", 1, "mt-0.5", "inline-block", "text-xs", "font-semibold", "text-brand-500", "hover:underline"], [1, "grid", "gap-4", "lg:grid-cols-2"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"], ["routerLink", "/reservas-isla", 1, "text-xs", "font-semibold", "text-brand-500", "hover:underline"], ["class", "px-5 py-10 text-center text-sm text-gray-400", 4, "ngIf"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex items-start justify-between px-5 py-3.5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition", 4, "ngFor", "ngForOf"], ["routerLink", "/pagos", 1, "text-xs", "font-semibold", "text-brand-500", "hover:underline"], [1, "rounded-full", "bg-red-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-red-600", "dark:bg-red-500/15", "dark:text-red-400"], [1, "px-5", "py-10", "text-center", "text-sm", "text-gray-400"], [1, "flex", "items-start", "justify-between", "px-5", "py-3.5", "hover:bg-gray-50/50", "dark:hover:bg-white/[0.02]", "transition"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90", "truncate"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "truncate", "mt-0.5"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "ml-3", "flex", "flex-col", "items-end", "gap-1", "flex-shrink-0"], [1, "inline-flex", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "text-xs", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "mt-0.5"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Resumen operativo de MARITIMO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11, "Desde");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.startDate, $event) || (ctx.filters.startDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6)(14, "label", 7);
      \u0275\u0275text(15, "Hasta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.endDate, $event) || (ctx.filters.endDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_17_listener() {
        return ctx.load();
      });
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(19, DashboardComponent_div_19_Template, 2, 1, "div", 10)(20, DashboardComponent_div_20_Template, 2, 2, "div", 11)(21, DashboardComponent_ng_container_21_Template, 84, 23, "ng-container", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.startDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.endDate);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Cargando\u2026" : "Actualizar", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading && !ctx.stats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Dashboard</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Resumen operativo de MARITIMO</p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2">
          <label class="text-xs font-medium text-gray-500 dark:text-gray-400">Desde</label>
          <input type="date" [(ngModel)]="filters.startDate"
            class="h-9 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <div class="flex items-center gap-2">
          <label class="text-xs font-medium text-gray-500 dark:text-gray-400">Hasta</label>
          <input type="date" [(ngModel)]="filters.endDate"
            class="h-9 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>
        <button (click)="load()" [disabled]="loading"
          class="h-9 rounded-lg bg-brand-500 px-5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-60 transition">
          {{ loading ? 'Cargando\u2026' : 'Actualizar' }}
        </button>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div *ngIf="errorMsg"
    class="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMsg }}
  </div>

  <!-- \u2500\u2500 Skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div *ngIf="loading && !stats" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div *ngFor="let _ of [1,2,3,4]"
      class="h-28 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]"></div>
  </div>

  <ng-container *ngIf="stats">

    <!-- \u2500\u2500 KPIs fila 1 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <!-- Ingresos USD -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Ingresos per\xEDodo</p>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">
          \${{ stats.pagos.ingresoUsd | number:'1.0-0' }} <span class="text-base font-medium text-gray-400">USD</span>
        </p>
        <p class="mt-0.5 text-xs text-gray-400">Pagos verificados en el rango seleccionado</p>
      </div>

      <!-- Pagos pendientes -->
      <div class="rounded-2xl border p-5 shadow-sm"
        [ngClass]="stats.pagos.pendientes > 0
          ? 'border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/5'
          : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'">
        <p class="text-xs font-semibold uppercase tracking-widest"
          [ngClass]="stats.pagos.pendientes > 0 ? 'text-amber-500' : 'text-gray-400'">
          Pagos por verificar
        </p>
        <p class="mt-2 text-3xl font-black"
          [ngClass]="stats.pagos.pendientes > 0 ? 'text-amber-700 dark:text-amber-400' : 'text-gray-800 dark:text-white/90'">
          {{ stats.pagos.pendientes }}
        </p>
        <a routerLink="/pagos" class="mt-0.5 inline-block text-xs font-semibold text-brand-500 hover:underline">
          Ir a verificar \u2192
        </a>
      </div>

      <!-- Excursiones -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Excursiones (per\xEDodo)</p>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">{{ stats.excursiones.periodo }}</p>
        <div class="mt-1.5 flex flex-wrap gap-1.5 text-[10px]">
          <span class="rounded-full bg-yellow-100 px-2 py-0.5 font-bold text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400">{{ stats.excursiones.pending }} pend.</span>
          <span class="rounded-full bg-blue-100 px-2 py-0.5 font-bold text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">{{ stats.excursiones.confirmed }} conf.</span>
          <span class="rounded-full bg-brand-100 px-2 py-0.5 font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-400">{{ stats.excursiones.active }} activas</span>
        </div>
      </div>

      <!-- Charters -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Charters (per\xEDodo)</p>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">{{ stats.charters.periodo }}</p>
        <div class="mt-1.5 flex flex-wrap gap-1.5 text-[10px]">
          <span class="rounded-full bg-yellow-100 px-2 py-0.5 font-bold text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400">{{ stats.charters.pending }} pend.</span>
          <span class="rounded-full bg-green-100 px-2 py-0.5 font-bold text-green-700 dark:bg-green-500/15 dark:text-green-400">{{ stats.charters.confirmed }} conf.</span>
        </div>
      </div>

    </div>

    <!-- \u2500\u2500 KPIs fila 2: Flota + Usuarios \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid gap-4 sm:grid-cols-3">

      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Embarcaciones</p>
          <span *ngIf="stats.embarcaciones.pendienteAprobacion > 0"
            class="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/15 dark:text-red-400">
            {{ stats.embarcaciones.pendienteAprobacion }} por aprobar
          </span>
        </div>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">{{ stats.embarcaciones.total }}</p>
        <a routerLink="/embarcaciones" class="mt-0.5 inline-block text-xs font-semibold text-brand-500 hover:underline">Ver flota \u2192</a>
      </div>

      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Proveedores</p>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">{{ stats.usuarios.proveedores }}</p>
        <p class="mt-0.5 text-xs text-gray-400">due\xF1os de embarcaciones activos</p>
      </div>

      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Clientes registrados</p>
        <p class="mt-2 text-3xl font-black text-gray-800 dark:text-white/90">{{ stats.usuarios.clientes }}</p>
        <a routerLink="/usuarios" class="mt-0.5 inline-block text-xs font-semibold text-brand-500 hover:underline">Ver usuarios \u2192</a>
      </div>

    </div>

    <!-- \u2500\u2500 Actividad reciente \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid gap-4 lg:grid-cols-2">

      <!-- \xDAltimas excursiones -->
      <div class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h2 class="text-sm font-bold text-gray-800 dark:text-white/90">\u{1F3DD}\uFE0F \xDAltimas excursiones</h2>
          <a routerLink="/reservas-isla" class="text-xs font-semibold text-brand-500 hover:underline">Ver todas \u2192</a>
        </div>
        <div *ngIf="stats.reservasRecientes.length === 0"
          class="px-5 py-10 text-center text-sm text-gray-400">Sin reservas recientes</div>
        <div class="divide-y divide-gray-100 dark:divide-gray-800">
          <div *ngFor="let r of stats.reservasRecientes"
            class="flex items-start justify-between px-5 py-3.5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition">
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-gray-800 dark:text-white/90 truncate">{{ r.client }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                {{ r.vessel }} \xB7 {{ r.desde }} \u2192 {{ r.hasta }}
              </p>
              <p class="text-xs text-gray-400 mt-0.5">{{ r.passengers }} pax \xB7 {{ r.tripDate }}</p>
            </div>
            <div class="ml-3 flex flex-col items-end gap-1 flex-shrink-0">
              <span class="inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="statusClass(r.status)">
                {{ statusLabel(r.status) }}
              </span>
              <span class="text-xs font-bold text-gray-700 dark:text-white/80">\${{ r.total | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- \xDAltimos pagos -->
      <div class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h2 class="text-sm font-bold text-gray-800 dark:text-white/90">\u{1F4B0} \xDAltimos pagos</h2>
          <a routerLink="/pagos" class="text-xs font-semibold text-brand-500 hover:underline">Ver todos \u2192</a>
        </div>
        <div *ngIf="stats.pagosRecientes.length === 0"
          class="px-5 py-10 text-center text-sm text-gray-400">Sin pagos recientes</div>
        <div class="divide-y divide-gray-100 dark:divide-gray-800">
          <div *ngFor="let p of stats.pagosRecientes"
            class="flex items-start justify-between px-5 py-3.5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition">
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-gray-800 dark:text-white/90 truncate">{{ p.client }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {{ methodLabel(p.method) }} \xB7 {{ refTypeLabel(p.referenceType) }}
              </p>
            </div>
            <div class="ml-3 flex flex-col items-end gap-1 flex-shrink-0">
              <span class="inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="statusClass(p.status)">
                {{ statusLabel(p.status) }}
              </span>
              <span class="text-xs font-bold text-gray-700 dark:text-white/80">
                {{ p.currency === 'VES' || p.currency === 'BS' ? 'Bs ' : '$' }}{{ p.amount | number:'1.2-2' }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </ng-container>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/common/page-breadcrumb/page-breadcrumb.component.ts
var PageBreadcrumbComponent = class _PageBreadcrumbComponent {
  pageTitle = "";
  static \u0275fac = function PageBreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageBreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageBreadcrumbComponent, selectors: [["app-page-breadcrumb"]], inputs: { pageTitle: "pageTitle" }, decls: 12, vars: 2, consts: [[1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "mb-6"], [1, "text-xl", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "flex", "items-center", "gap-1.5"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "text-gray-500", "dark:text-gray-400"], ["width", "17", "height", "16", "viewBox", "0 0 17 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "stroke-current"], ["d", "M6.0765 12.667L10.2432 8.50033L6.0765 4.33366", "stroke", "", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-sm", "text-gray-800", "dark:text-white/90"]], template: function PageBreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "nav")(4, "ol", 2)(5, "li")(6, "a", 3);
      \u0275\u0275text(7, " Home ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 4);
      \u0275\u0275element(9, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "li", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.pageTitle, " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.pageTitle, " ");
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageBreadcrumbComponent, [{
    type: Component,
    args: [{ selector: "app-page-breadcrumb", imports: [
      RouterModule
    ], template: '<div class="flex flex-wrap items-center justify-between gap-3 mb-6">\n  <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">\n    {{ pageTitle }}\n  </h2>\n  <nav>\n    <ol class="flex items-center gap-1.5">\n      <li>\n        <a\n          class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"\n          routerLink="/"\n        >\n          Home\n          <svg\n            class="stroke-current"\n            width="17"\n            height="16"\n            viewBox="0 0 17 16"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"\n              stroke=""\n              stroke-width="1.2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </svg>\n        </a>\n      </li>\n      <li class="text-sm text-gray-800 dark:text-white/90">\n        {{ pageTitle }}\n      </li>\n    </ol>\n  </nav>\n</div>' }]
  }], null, { pageTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageBreadcrumbComponent, { className: "PageBreadcrumbComponent", filePath: "src/app/shared/components/common/page-breadcrumb/page-breadcrumb.component.ts", lineNumber: 12 });
})();

// src/app/shared/components/ui/modal/modal.component.ts
var _c09 = ["*"];
function ModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ModalComponent_Conditional_0_Conditional_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onBackdropClick($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ModalComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ModalComponent_Conditional_0_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.close.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "path", 7);
    \u0275\u0275elementEnd()();
  }
}
function ModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ModalComponent_Conditional_0_Conditional_1_Template, 1, 0, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275listener("click", function ModalComponent_Conditional_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContentClick($event));
    });
    \u0275\u0275conditionalCreate(3, ModalComponent_Conditional_0_Conditional_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFullscreen ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.className);
    \u0275\u0275property("ngClass", ctx_r2.isFullscreen ? "w-full h-full" : "relative w-full rounded-3xl bg-white dark:bg-gray-900");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showCloseButton ? 3 : -1);
  }
}
var ModalComponent = class _ModalComponent {
  el;
  isOpen = false;
  close = new EventEmitter();
  className = "";
  showCloseButton = true;
  isFullscreen = false;
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    if (this.isOpen) {
      document.body.style.overflow = "hidden";
    }
  }
  ngOnDestroy() {
    document.body.style.overflow = "unset";
  }
  ngOnChanges() {
    document.body.style.overflow = this.isOpen ? "hidden" : "unset";
  }
  onBackdropClick(event2) {
    if (!this.isFullscreen) {
      this.close.emit();
    }
  }
  onContentClick(event2) {
    event2.stopPropagation();
  }
  onEscape() {
    if (this.isOpen) {
      this.close.emit();
    }
  }
  static \u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ModalComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { isOpen: "isOpen", className: "className", showCloseButton: "showCloseButton", isFullscreen: "isFullscreen" }, outputs: { close: "close" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c09, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "flex", "items-center", "justify-center", "overflow-y-auto", "modal", "z-99999"], [1, "fixed", "inset-0", "h-full", "w-full", "bg-gray-400/50", "backdrop-blur-[32px]"], [3, "click", "ngClass"], [1, "absolute", "right-3", "top-3", "z-999", "flex", "h-9.5", "w-9.5", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-gray-400", "transition-colors", "hover:bg-gray-200", "hover:text-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:hover:text-white", "sm:right-6", "sm:top-6", "sm:h-11", "sm:w-11"], [1, "fixed", "inset-0", "h-full", "w-full", "bg-gray-400/50", "backdrop-blur-[32px]", 3, "click"], [1, "absolute", "right-3", "top-3", "z-999", "flex", "h-9.5", "w-9.5", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-gray-400", "transition-colors", "hover:bg-gray-200", "hover:text-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:hover:text-white", "sm:right-6", "sm:top-6", "sm:h-11", "sm:w-11", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fillRule", "evenodd", "clipRule", "evenodd", "d", "M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z", "fill", "currentColor"]], template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, ModalComponent_Conditional_0_Template, 6, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{ selector: "app-modal", imports: [
      CommonModule
    ], template: `<!-- Only render if open -->
@if (isOpen) {
<div class="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999">
  <!-- Backdrop -->
  @if (!isFullscreen) {
  <div
    class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
    (click)="onBackdropClick($event)"
  ></div>
  }
  <!-- Modal Content -->
  <div
    [ngClass]="isFullscreen ? 'w-full h-full' : 'relative w-full rounded-3xl bg-white dark:bg-gray-900'"
    [class]="className"
    (click)="onContentClick($event)"
  >
    @if (showCloseButton) {
    <button
      (click)="close.emit()"
      class="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z"
          fill="currentColor"
        />
      </svg>
    </button>
    }
    <div>
      <ng-content></ng-content>
    </div>
  </div>
</div>
}` }]
  }], () => [{ type: ElementRef }], { isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], className: [{
    type: Input
  }], showCloseButton: [{
    type: Input
  }], isFullscreen: [{
    type: Input
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/shared/components/ui/modal/modal.component.ts", lineNumber: 19 });
})();

// src/app/shared/components/ui/button/button.component.ts
var _c010 = ["*"];
function ButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.startIcon), \u0275\u0275sanitizeHtml);
  }
}
function ButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.endIcon), \u0275\u0275sanitizeHtml);
  }
}
var ButtonComponent = class _ButtonComponent {
  size = "md";
  variant = "primary";
  disabled = false;
  className = "";
  startIcon;
  // SVG or icon class, or use ng-content for more flexibility
  endIcon;
  btnClick = new EventEmitter();
  get sizeClasses() {
    return this.size === "sm" ? "px-4 py-3 text-sm" : "px-5 py-3.5 text-sm";
  }
  get variantClasses() {
    return this.variant === "primary" ? "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300" : "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300";
  }
  get disabledClasses() {
    return this.disabled ? "cursor-not-allowed opacity-50" : "";
  }
  onClick(event2) {
    if (!this.disabled) {
      this.btnClick.emit(event2);
    }
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { size: "size", variant: "variant", disabled: "disabled", className: "className", startIcon: "startIcon", endIcon: "endIcon" }, outputs: { btnClick: "btnClick" }, ngContentSelectors: _c010, decls: 4, vars: 4, consts: [["type", "button", 3, "click", "ngClass", "disabled"], [1, "flex", "items-center", 3, "innerHTML"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ButtonComponent_Template_button_click_0_listener($event) {
        return ctx.onClick($event);
      });
      \u0275\u0275conditionalCreate(1, ButtonComponent_Conditional_1_Template, 2, 3, "span", 1);
      \u0275\u0275projection(2);
      \u0275\u0275conditionalCreate(3, ButtonComponent_Conditional_3_Template, 2, 3, "span", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", "inline-flex items-center justify-center gap-2 rounded-lg transition " + ctx.className + " " + ctx.sizeClasses + " " + ctx.variantClasses + " " + ctx.disabledClasses)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.startIcon ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.endIcon ? 3 : -1);
    }
  }, dependencies: [CommonModule, NgClass, SafeHtmlPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", imports: [
      CommonModule,
      SafeHtmlPipe
    ], host: {}, template: `<button
  type="button"
  [ngClass]="
    'inline-flex items-center justify-center gap-2 rounded-lg transition ' +
    className + ' ' +
    sizeClasses + ' ' +
    variantClasses + ' ' +
    disabledClasses
  "
  [disabled]="disabled"
  (click)="onClick($event)"
>
  @if (startIcon) {
  <span class="flex items-center" [innerHTML]="startIcon | safeHtml"></span>
  }
  <ng-content></ng-content>
  @if (endIcon) {
  <span class="flex items-center" [innerHTML]="endIcon | safeHtml"></span>
  }
</button>` }]
  }], null, { size: [{
    type: Input
  }], variant: [{
    type: Input
  }], disabled: [{
    type: Input
  }], className: [{
    type: Input
  }], startIcon: [{
    type: Input
  }], endIcon: [{
    type: Input
  }], btnClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/shared/components/ui/button/button.component.ts", lineNumber: 17 });
})();

// src/app/shared/components/form/label/label.component.ts
var _c011 = ["*"];
var LabelComponent = class _LabelComponent {
  for;
  className = "";
  static \u0275fac = function LabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabelComponent, selectors: [["app-label"]], inputs: { for: "for", className: "className" }, ngContentSelectors: _c011, decls: 2, vars: 2, consts: [[3, "ngClass"]], template: function LabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "label", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 " + ctx.className);
      \u0275\u0275attribute("for", ctx.for);
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{ selector: "app-label", imports: [CommonModule], template: `<label
  [attr.for]="for"
  [ngClass]="
    'mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 ' + className
  "
>
  <ng-content></ng-content>
</label>` }]
  }], null, { for: [{
    type: Input
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabelComponent, { className: "LabelComponent", filePath: "src/app/shared/components/form/label/label.component.ts", lineNumber: 10 });
})();

// src/app/pages/profile/profile.component.ts
function ProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, " Cargando informaci\xF3n del perfil... ");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_Conditional_7_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveError(), " ");
  }
}
function ProfileComponent_Conditional_7_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveSuccess(), " ");
  }
}
function ProfileComponent_Conditional_7_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("firstName"), " ");
  }
}
function ProfileComponent_Conditional_7_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("lastName"), " ");
  }
}
function ProfileComponent_Conditional_7_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("email"), " ");
  }
}
function ProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "h3", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 14);
    \u0275\u0275elementStart(13, "p", 4);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275element(19, "i", 18);
    \u0275\u0275text(20, " Editar perfil ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 6)(22, "h4", 19);
    \u0275\u0275text(23, " Informaci\xF3n personal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "div")(26, "p", 21);
    \u0275\u0275text(27, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 22);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "p", 21);
    \u0275\u0275text(32, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 22);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "p", 21);
    \u0275\u0275text(37, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 23);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "p", 21);
    \u0275\u0275text(42, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 22);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 24)(46, "div", 6)(47, "h4", 25);
    \u0275\u0275text(48, " Informaci\xF3n del sistema ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 26)(50, "div")(51, "p", 21);
    \u0275\u0275text(52, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 13);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "p", 21);
    \u0275\u0275text(57, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 22);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "p", 21);
    \u0275\u0275text(62, " \xDAltima actualizaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 22);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(65, "app-modal", 27);
    \u0275\u0275listener("close", function ProfileComponent_Conditional_7_Template_app_modal_close_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(66, "div", 28);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_7_Template_div_click_66_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(67, "div", 29)(68, "h4", 11);
    \u0275\u0275text(69, " Editar perfil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 15);
    \u0275\u0275text(71, " Actualiza la informaci\xF3n principal de tu perfil. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(72, ProfileComponent_Conditional_7_Conditional_72_Template, 2, 1, "div", 30);
    \u0275\u0275conditionalCreate(73, ProfileComponent_Conditional_7_Conditional_73_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(74, "form", 32);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_Conditional_7_Template_form_ngSubmit_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSave());
    });
    \u0275\u0275elementStart(75, "div", 33)(76, "div")(77, "app-label");
    \u0275\u0275text(78, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 34);
    \u0275\u0275conditionalCreate(80, ProfileComponent_Conditional_7_Conditional_80_Template, 2, 1, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div")(82, "app-label");
    \u0275\u0275text(83, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 36);
    \u0275\u0275conditionalCreate(85, ProfileComponent_Conditional_7_Conditional_85_Template, 2, 1, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div")(87, "app-label");
    \u0275\u0275text(88, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 37);
    \u0275\u0275conditionalCreate(90, ProfileComponent_Conditional_7_Conditional_90_Template, 2, 1, "p", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div")(92, "app-label");
    \u0275\u0275text(93, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 39)(96, "button", 40);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_7_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(97, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 41);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iniciales(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nombreCompleto(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getRoleClasses(u_r3.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.role, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r3.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Miembro desde ", ctx_r1.formatFecha(u_r3.createdAt), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", u_r3.firstName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", u_r3.lastName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", u_r3.email, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", u_r3.phone || "-", " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r1.getRoleClasses(u_r3.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.role, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatFecha(u_r3.createdAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatFecha(u_r3.updatedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.isOpen());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.saveError() ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveSuccess() ? 73 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.getFieldError("firstName") ? 80 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.getFieldError("lastName") ? 85 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.getFieldError("email") ? 90 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Guardando..." : "Guardar cambios", " ");
  }
}
function ProfileComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, " No se pudo cargar la informaci\xF3n del perfil. ");
    \u0275\u0275elementEnd()();
  }
}
var ProfileComponent = class _ProfileComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  usuariosService = inject(UsuariosService);
  saveSuccess = signal(null, ...ngDevMode ? [{ debugName: "saveSuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingProfile = signal(true, ...ngDevMode ? [{ debugName: "loadingProfile" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  saveError = signal(null, ...ngDevMode ? [{ debugName: "saveError" }] : (
    /* istanbul ignore next */
    []
  ));
  user = computed(() => this.authService.user(), ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
  nombreCompleto = computed(() => {
    const user = this.user();
    if (!user)
      return "Usuario";
    return `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Usuario";
  }, ...ngDevMode ? [{ debugName: "nombreCompleto" }] : (
    /* istanbul ignore next */
    []
  ));
  iniciales = computed(() => {
    const user = this.user();
    if (!user)
      return "U";
    const a = user.firstName?.charAt(0)?.toUpperCase() ?? "";
    const b = user.lastName?.charAt(0)?.toUpperCase() ?? "";
    return `${a}${b}` || "U";
  }, ...ngDevMode ? [{ debugName: "iniciales" }] : (
    /* istanbul ignore next */
    []
  ));
  profileForm = this.fb.nonNullable.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: [""]
  });
  ngOnInit() {
    const currentUser = this.user();
    if (currentUser) {
      this.patchForm(currentUser);
      this.loadingProfile.set(false);
      return;
    }
    this.authService.restoreSession().subscribe({
      next: (user) => {
        if (user)
          this.patchForm(user);
        this.loadingProfile.set(false);
      },
      error: () => this.loadingProfile.set(false)
    });
  }
  openModal() {
    const u = this.user();
    if (u)
      this.patchForm(u);
    this.saveError.set(null);
    this.isOpen.set(true);
  }
  closeModal() {
    this.isOpen.set(false);
    this.saveError.set(null);
    const u = this.user();
    if (u)
      this.patchForm(u);
  }
  formatFecha(fecha) {
    if (!fecha)
      return "-";
    try {
      return new Date(fecha).toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" });
    } catch (e) {
      return "-";
    }
  }
  getFieldError(field) {
    const control = this.profileForm.get(field);
    if (!control || !control.touched || !control.errors)
      return null;
    if (control.errors["required"])
      return "Este campo es obligatorio.";
    if (control.errors["email"])
      return "El formato del correo no es v\xE1lido.";
    return null;
  }
  handleSave() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const currentUser = this.user();
    if (!currentUser?.id) {
      this.saveError.set("No se pudo identificar el usuario.");
      return;
    }
    this.saving.set(true);
    this.saveError.set(null);
    const raw = this.profileForm.getRawValue();
    this.usuariosService.editarUsuario(currentUser.id, {
      firstName: raw.firstName.trim(),
      lastName: raw.lastName.trim(),
      email: raw.email.trim(),
      phone: raw.phone.trim() || null
    }).subscribe({
      next: () => {
        this.saving.set(false);
        this.closeModal();
        window.location.reload();
      },
      error: (error) => {
        const msg = error?.error?.message;
        this.saveError.set(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar el perfil.");
        this.saving.set(false);
      }
    });
  }
  patchForm(user) {
    this.profileForm.patchValue({
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      email: user.email ?? "",
      phone: user.phone ?? ""
    });
  }
  getRoleClasses(role) {
    const map = {
      MASTER: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      ADMINISTRADOR: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
      EMPLEADO: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      PROVEEDOR: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
      CLIENTE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
    };
    return map[role ?? ""] ?? "bg-gray-100 text-gray-700 dark:bg-white/[0.05] dark:text-gray-300";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 1, consts: [[1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "px-5", "py-10", "text-center", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "dark:border-gray-800", "dark:bg-white/[0.03]", "lg:p-6"], [1, "flex", "flex-col", "gap-6", "xl:flex-row", "xl:items-center", "xl:justify-between"], [1, "flex", "flex-col", "items-center", "gap-6", "xl:flex-row"], [1, "flex", "h-24", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border", "border-gray-200", "bg-brand-100", "text-2xl", "font-semibold", "text-brand-700", "dark:border-gray-800", "dark:bg-brand-500/10", "dark:text-brand-400"], [1, "text-center", "xl:text-left"], [1, "text-2xl", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-2", "flex", "flex-col", "items-center", "gap-2", "xl:flex-row", "xl:gap-3"], [1, "inline-flex", "rounded-full", "px-3", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "hidden", "h-4", "w-px", "bg-gray-300", "dark:bg-gray-700", "xl:block"], [1, "mt-2", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "justify-center", "xl:justify-end"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-full", "border", "border-gray-300", "bg-white", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "shadow-theme-xs", "transition", "hover:bg-gray-50", "hover:text-gray-800", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:hover:bg-white/[0.03]", "dark:hover:text-gray-200", 3, "click"], [1, "mdi", "mdi-pencil-outline"], [1, "mb-6", "text-lg", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "xl:grid-cols-3", "xl:gap-6"], [1, "mb-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "break-all", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "grid", "grid-cols-1", "gap-6", "xl:grid-cols-2"], [1, "mb-5", "text-lg", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "space-y-4"], ["className", "max-w-[760px] m-4", 3, "close", "isOpen"], [1, "no-scrollbar", "relative", "w-full", "max-w-[760px]", "overflow-y-auto", "rounded-3xl", "bg-white", "p-4", "dark:bg-gray-900", "lg:p-8", 3, "click"], [1, "mb-6", "px-1"], [1, "mb-4", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mb-4", "rounded-xl", "border", "border-green-200", "bg-green-50", "px-4", "py-3", "text-sm", "text-green-700", "dark:border-green-900/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "flex", "flex-col", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-x-6", "gap-y-5", "px-2", "lg:grid-cols-2"], ["type", "text", "formControlName", "firstName", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "outline-none", "transition", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "text", "formControlName", "lastName", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "outline-none", "transition", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90"], ["type", "email", "formControlName", "email", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "outline-none", "transition", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90"], ["type", "text", "formControlName", "phone", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-2.5", "text-sm", "text-gray-800", "outline-none", "transition", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90"], [1, "mt-8", "flex", "items-center", "gap-3", "px-2", "lg:justify-end"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "bg-white", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "transition", "hover:bg-gray-50", "disabled:cursor-not-allowed", "disabled:opacity-60", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "click", "disabled"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-4", "py-2.5", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "transition", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Gestiona tu informaci\xF3n personal y preferencias.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, ProfileComponent_Conditional_6_Template, 3, 0, "div", 3)(7, ProfileComponent_Conditional_7_Template, 100, 24)(8, ProfileComponent_Conditional_8_Template, 3, 0, "div", 3);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadingProfile() ? 6 : (tmp_0_0 = ctx.user()) ? 7 : 8, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ModalComponent,
    LabelComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      PageBreadcrumbComponent,
      ModalComponent,
      ButtonComponent,
      LabelComponent
    ], template: '<div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">\n  <div>\n    <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Perfil</h1>\n    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona tu informaci\xF3n personal y preferencias.</p>\n  </div>\n</div>\n\n@if (loadingProfile()) {\n  <div\n    class="rounded-2xl border border-gray-200 bg-white px-5 py-10 text-center dark:border-gray-800 dark:bg-white/[0.03]"\n  >\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      Cargando informaci\xF3n del perfil...\n    </p>\n  </div>\n} @else if (user(); as u) {\n  <div class="space-y-6">\n    <div\n      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"\n    >\n      <div\n        class="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between"\n      >\n        <div class="flex flex-col items-center gap-6 xl:flex-row">\n          <div\n            class="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-brand-100 text-2xl font-semibold text-brand-700 dark:border-gray-800 dark:bg-brand-500/10 dark:text-brand-400"\n          >\n            {{ iniciales() }}\n          </div>\n\n          <div class="text-center xl:text-left">\n            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white/90">\n              {{ nombreCompleto() }}\n            </h3>\n\n            <div\n              class="mt-2 flex flex-col items-center gap-2 xl:flex-row xl:gap-3"\n            >\n              <span\n                class="inline-flex rounded-full px-3 py-1 text-xs font-medium"\n                [ngClass]="getRoleClasses(u.role)"\n              >\n                {{ u.role }}\n              </span>\n\n              <div\n                class="hidden h-4 w-px bg-gray-300 dark:bg-gray-700 xl:block"\n              ></div>\n\n              <p class="text-sm text-gray-500 dark:text-gray-400">\n                {{ u.email }}\n              </p>\n            </div>\n\n            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">\n              Miembro desde {{ formatFecha(u.createdAt) }}\n            </p>\n          </div>\n        </div>\n\n        <div class="flex justify-center xl:justify-end">\n          <button\n            type="button"\n            (click)="openModal()"\n            class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"\n          >\n            <i class="mdi mdi-pencil-outline"></i>\n            Editar perfil\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"\n    >\n      <h4 class="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">\n        Informaci\xF3n personal\n      </h4>\n\n      <div\n        class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"\n      >\n        <div>\n          <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Nombre</p>\n          <p class="text-sm font-medium text-gray-800 dark:text-white/90">\n            {{ u.firstName || "-" }}\n          </p>\n        </div>\n\n        <div>\n          <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Apellido</p>\n          <p class="text-sm font-medium text-gray-800 dark:text-white/90">\n            {{ u.lastName || "-" }}\n          </p>\n        </div>\n\n        <div>\n          <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Correo</p>\n          <p\n            class="break-all text-sm font-medium text-gray-800 dark:text-white/90"\n          >\n            {{ u.email }}\n          </p>\n        </div>\n\n        <div>\n          <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Tel\xE9fono</p>\n          <p class="text-sm font-medium text-gray-800 dark:text-white/90">\n            {{ u.phone || "-" }}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">\n      <div\n        class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"\n      >\n        <h4 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">\n          Informaci\xF3n del sistema\n        </h4>\n\n        <div class="space-y-4">\n          <div>\n            <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Rol</p>\n            <span\n              class="inline-flex rounded-full px-3 py-1 text-xs font-medium"\n              [ngClass]="getRoleClasses(u.role)"\n            >\n              {{ u.role }}\n            </span>\n          </div>\n\n          <div>\n            <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">Creado</p>\n            <p class="text-sm font-medium text-gray-800 dark:text-white/90">\n              {{ formatFecha(u.createdAt) }}\n            </p>\n          </div>\n\n          <div>\n            <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">\n              \xDAltima actualizaci\xF3n\n            </p>\n            <p class="text-sm font-medium text-gray-800 dark:text-white/90">\n              {{ formatFecha(u.updatedAt) }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-modal\n    [isOpen]="isOpen()"\n    (close)="closeModal()"\n    className="max-w-[760px] m-4"\n  >\n    <div\n      class="no-scrollbar relative w-full max-w-[760px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-8"\n      (click)="$event.stopPropagation()"\n    >\n      <div class="mb-6 px-1">\n        <h4 class="text-2xl font-semibold text-gray-800 dark:text-white/90">\n          Editar perfil\n        </h4>\n        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">\n          Actualiza la informaci\xF3n principal de tu perfil.\n        </p>\n      </div>\n\n      @if (saveError()) {\n        <div\n          class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"\n        >\n          {{ saveError() }}\n        </div>\n      }\n\n      @if (saveSuccess()) {\n        <div\n          class="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/30 dark:bg-green-500/10 dark:text-green-400"\n        >\n          {{ saveSuccess() }}\n        </div>\n      }\n\n      <form\n        [formGroup]="profileForm"\n        (ngSubmit)="handleSave()"\n        class="flex flex-col"\n      >\n        <div class="grid grid-cols-1 gap-x-6 gap-y-5 px-2 lg:grid-cols-2">\n          <div>\n            <app-label>Nombre</app-label>\n            <input\n              type="text"\n              formControlName="firstName"\n              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"\n            />\n            @if (getFieldError("firstName")) {\n              <p class="mt-1 text-xs text-red-500">\n                {{ getFieldError("firstName") }}\n              </p>\n            }\n          </div>\n\n          <div>\n            <app-label>Apellido</app-label>\n            <input\n              type="text"\n              formControlName="lastName"\n              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"\n            />\n            @if (getFieldError("lastName")) {\n              <p class="mt-1 text-xs text-red-500">\n                {{ getFieldError("lastName") }}\n              </p>\n            }\n          </div>\n\n          <div>\n            <app-label>Correo electr\xF3nico</app-label>\n            <input\n              type="email"\n              formControlName="email"\n              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"\n            />\n            @if (getFieldError("email")) {\n              <p class="mt-1 text-xs text-red-500">\n                {{ getFieldError("email") }}\n              </p>\n            }\n          </div>\n\n          <div>\n            <app-label>Tel\xE9fono</app-label>\n            <input\n              type="text"\n              formControlName="phone"\n              class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"\n            />\n          </div>\n        </div>\n\n        <div class="mt-8 flex items-center gap-3 px-2 lg:justify-end">\n          <button\n            type="button"\n            [disabled]="saving()"\n            (click)="closeModal()"\n            class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"\n          >\n            Cancelar\n          </button>\n\n          <button\n            type="submit"\n            [disabled]="saving()"\n            class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"\n          >\n            {{ saving() ? "Guardando..." : "Guardar cambios" }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </app-modal>\n} @else {\n  <div\n    class="rounded-2xl border border-gray-200 bg-white px-5 py-10 text-center dark:border-gray-800 dark:bg-white/[0.03]"\n  >\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      No se pudo cargar la informaci\xF3n del perfil.\n    </p>\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/profile/profile.component.ts", lineNumber: 27 });
})();

// src/app/pages/mi-dashboard/mi-dashboard.component.ts
function MiDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd()();
  }
}
function MiDashboardComponent_ng_container_14_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 35);
    \u0275\u0275text(2, " Viaje programado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.proximoViaje.trip == null ? null : ctx_r0.proximoViaje.trip.departureDate, "dd MMM yyyy"));
  }
}
function MiDashboardComponent_ng_container_14_ng_template_40_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.proximoAlquiler.vessel == null ? null : ctx_r0.proximoAlquiler.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Charter \xB7 ", \u0275\u0275pipeBind2(5, 2, ctx_r0.proximoAlquiler.startDate, "dd MMM"));
  }
}
function MiDashboardComponent_ng_container_14_ng_template_40_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "Sin viajes pr\xF3ximos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 38);
    \u0275\u0275text(3, "Buscar \u2192");
    \u0275\u0275elementEnd();
  }
}
function MiDashboardComponent_ng_container_14_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MiDashboardComponent_ng_container_14_ng_template_40_ng_container_0_Template, 6, 5, "ng-container", 25)(1, MiDashboardComponent_ng_container_14_ng_template_40_ng_template_1_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const sinNada_r2 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.proximoAlquiler)("ngIfElse", sinNada_r2);
  }
}
function MiDashboardComponent_ng_container_14_div_42_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 53);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 55)(12, "span", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, a_r3.fecha, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(10, 9, a_r3.monto, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(a_r3.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(a_r3.estado), " ");
  }
}
function MiDashboardComponent_ng_container_14_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3, "Actividad reciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "a", 42);
    \u0275\u0275text(6, "Ver reservas \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 43)(8, "table", 44)(9, "thead")(10, "tr", 45)(11, "th", 46);
    \u0275\u0275text(12, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 46);
    \u0275\u0275text(14, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 46);
    \u0275\u0275text(16, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 47);
    \u0275\u0275text(18, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 48);
    \u0275\u0275text(20, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, MiDashboardComponent_ng_container_14_div_42_tr_22_Template, 14, 12, "tr", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.actividadReciente);
  }
}
function MiDashboardComponent_ng_container_14_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 59);
    \u0275\u0275text(4, "Sin actividad todav\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 60);
    \u0275\u0275text(6, "Reserva tu primer viaje o charter para comenzar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 61);
    \u0275\u0275text(8, " Buscar viajes \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function MiDashboardComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 3)(3, "div", 15)(4, "p", 16);
    \u0275\u0275text(5, "Total reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7, "\u{1F3AB}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 3)(13, "div", 15)(14, "p", 16);
    \u0275\u0275text(15, "Total pagado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17, "\u{1F4B3}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 22);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 3)(24, "div", 15)(25, "p", 16);
    \u0275\u0275text(26, "Activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 23);
    \u0275\u0275text(28, "\u23F3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p", 18);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 19);
    \u0275\u0275text(32, "en curso o confirmadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 3)(34, "div", 15)(35, "p", 16);
    \u0275\u0275text(36, "Pr\xF3ximo viaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 24);
    \u0275\u0275text(38, "\u{1F4C5}");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, MiDashboardComponent_ng_container_14_ng_container_39_Template, 6, 4, "ng-container", 25)(40, MiDashboardComponent_ng_container_14_ng_template_40_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, MiDashboardComponent_ng_container_14_div_42_Template, 23, 1, "div", 26)(43, MiDashboardComponent_ng_container_14_div_43_Template, 9, 0, "div", 27);
    \u0275\u0275elementStart(44, "div", 28)(45, "a", 29)(46, "span", 30);
    \u0275\u0275text(47, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 31);
    \u0275\u0275text(49, "Buscar viaje");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "a", 32)(51, "span", 30);
    \u0275\u0275text(52, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 31);
    \u0275\u0275text(54, "Charter privado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "a", 33)(56, "span", 30);
    \u0275\u0275text(57, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 31);
    \u0275\u0275text(59, "Mis reservas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a", 34)(61, "span", 30);
    \u0275\u0275text(62, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 31);
    \u0275\u0275text(64, "M\xE9todos de pago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const sinProximo_r4 = \u0275\u0275reference(41);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.totalReservas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.totalTickets, " terminal \xB7 ", ctx_r0.totalAlquileres, " charter");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(20, 10, ctx_r0.gastadoPagos, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tasaService.formatBs(ctx_r0.gastadoPagos));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.alquileresActivos.length + ctx_r0.ticketsPendientes.length, " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.proximoViaje)("ngIfElse", sinProximo_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.actividadReciente.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.actividadReciente.length === 0);
  }
}
var MiDashboardComponent = class _MiDashboardComponent {
  auth = inject(AuthService);
  ticketsService = inject(TicketsService);
  alquileresService = inject(AlquileresService);
  pagosService = inject(PagosService);
  tasaService = inject(TasaService);
  loading = true;
  tickets = [];
  alquileres = [];
  pagos = [];
  get user() {
    return this.auth.user();
  }
  ngOnInit() {
    const id = this.user?.id;
    if (!id) {
      this.loading = false;
      return;
    }
    let done = 0;
    const check = () => {
      if (++done === 3)
        this.loading = false;
    };
    this.ticketsService.getAll({ clientId: id }).subscribe({
      next: (t) => {
        this.tickets = t;
        check();
      },
      error: () => check()
    });
    this.alquileresService.getByClient(id).subscribe({
      next: (a) => {
        this.alquileres = a;
        check();
      },
      error: () => check()
    });
    this.pagosService.getByClient(id).subscribe({
      next: (p) => {
        this.pagos = p;
        check();
      },
      error: () => check()
    });
  }
  // ── KPIs ────────────────────────────────────────────────────────────────────
  get totalTickets() {
    return this.tickets.length;
  }
  get totalAlquileres() {
    return this.alquileres.length;
  }
  get totalReservas() {
    return this.totalTickets + this.totalAlquileres;
  }
  get gastadoPagos() {
    return this.pagos.filter((p) => p.status === "VERIFIED").reduce((s, p) => s + (p.amount || 0), 0);
  }
  get alquileresActivos() {
    return this.alquileres.filter((a) => ["PENDING", "CONFIRMED", "ACTIVE"].includes(a.status));
  }
  get ticketsPendientes() {
    return this.tickets.filter((t) => t.status === "CONFIRMED" || t.status === "PENDING");
  }
  get proximoViaje() {
    const upcoming = this.tickets.filter((t) => t.status === "CONFIRMED" && new Date(t.trip?.departureDate) >= /* @__PURE__ */ new Date()).sort((a, b) => new Date(a.trip?.departureDate).getTime() - new Date(b.trip?.departureDate).getTime());
    return upcoming[0] ?? null;
  }
  get proximoAlquiler() {
    const upcoming = this.alquileres.filter((a) => a.status === "CONFIRMED" && new Date(a.startDate) >= /* @__PURE__ */ new Date()).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    return upcoming[0] ?? null;
  }
  // ── Actividad reciente ───────────────────────────────────────────────────────
  get actividadReciente() {
    const items = [];
    this.tickets.slice(0, 5).forEach((t) => items.push({
      tipo: "\u26F5 Terminal",
      descripcion: `Viaje ${t.trip?.departureDate ?? ""}`,
      fecha: t.createdAt ?? "",
      monto: t.totalPrice ?? 0,
      estado: t.status
    }));
    this.alquileres.slice(0, 5).forEach((a) => items.push({
      tipo: "\u{1F6E5}\uFE0F Charter",
      descripcion: a.vessel?.name ?? "Embarcaci\xF3n",
      fecha: a.createdAt ?? "",
      monto: a.totalPrice ?? 0,
      estado: a.status
    }));
    return items.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()).slice(0, 8);
  }
  statusLabel(s) {
    const map = {
      CONFIRMED: "Confirmado",
      PENDING: "Pendiente",
      USED: "Realizado",
      CANCELLED: "Cancelado",
      ACTIVE: "Activo",
      COMPLETED: "Completado"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    const map = {
      CONFIRMED: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      PENDING: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      USED: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      COMPLETED: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      ACTIVE: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400",
      CANCELLED: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400"
    };
    return map[s] ?? "bg-gray-100 text-gray-500";
  }
  static \u0275fac = function MiDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiDashboardComponent, selectors: [["app-mi-dashboard"]], decls: 15, vars: 3, consts: [["sinProximo", ""], ["sinNada", ""], [1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "gap-2"], ["routerLink", "/buscar", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-4", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors"], ["routerLink", "/alquileres", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "border", "border-gray-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-300"], ["class", "flex justify-center py-20", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "text-5xl", "animate-bounce"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-4"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "inline-flex", "size-9", "items-center", "justify-center", "rounded-lg", "bg-brand-500/10", "text-xl"], [1, "text-3xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "mt-1", "text-xs", "text-gray-400"], [1, "inline-flex", "size-9", "items-center", "justify-center", "rounded-lg", "bg-green-500/10", "text-xl"], [1, "text-3xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "mt-1", "text-xs", "text-brand-500"], [1, "inline-flex", "size-9", "items-center", "justify-center", "rounded-lg", "bg-amber-500/10", "text-xl"], [1, "inline-flex", "size-9", "items-center", "justify-center", "rounded-lg", "bg-blue-500/10", "text-xl"], [4, "ngIf", "ngIfElse"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-4"], ["routerLink", "/buscar", 1, "flex", "flex-col", "items-center", "gap-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "text-center", "hover:border-brand-300", "hover:shadow-sm", "transition", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-3xl"], [1, "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["routerLink", "/alquileres", 1, "flex", "flex-col", "items-center", "gap-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "text-center", "hover:border-brand-300", "hover:shadow-sm", "transition", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["routerLink", "/mis-reservas", 1, "flex", "flex-col", "items-center", "gap-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "text-center", "hover:border-brand-300", "hover:shadow-sm", "transition", "dark:border-gray-800", "dark:bg-white/[0.03]"], ["routerLink", "/mis-metodos-pago", 1, "flex", "flex-col", "items-center", "gap-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "text-center", "hover:border-brand-300", "hover:shadow-sm", "transition", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white", "truncate"], [1, "mt-1", "text-xs", "text-purple-500"], [1, "text-sm", "text-gray-400"], ["routerLink", "/buscar", 1, "mt-1", "block", "text-xs", "text-brand-500", "hover:underline"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], ["routerLink", "/mis-reservas", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 last:border-0 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "border-b", "border-gray-100", "last:border-0", "dark:border-gray-800"], [1, "px-5", "py-4", "text-sm", "text-gray-600", "dark:text-gray-400", "whitespace-nowrap"], [1, "px-5", "py-4", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90", "max-w-[200px]", "truncate"], [1, "px-5", "py-4", "text-xs", "text-gray-400", "whitespace-nowrap"], [1, "px-5", "py-4", "text-right", "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400", "whitespace-nowrap"], [1, "px-5", "py-4", "text-center", "whitespace-nowrap"], [1, "inline-flex", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-medium", 3, "ngClass"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], ["routerLink", "/buscar", 1, "mt-5", "inline-flex", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"]], template: function MiDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div")(4, "h1", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, " Resumen de tu actividad en MARITIMO ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "a", 8);
      \u0275\u0275text(10, " \u{1F50D} Buscar viaje ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275text(12, " \u2693 Charter ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, MiDashboardComponent_div_13_Template, 3, 0, "div", 10)(14, MiDashboardComponent_ng_container_14_Template, 65, 13, "ng-container", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Hola, ", ctx.user == null ? null : ctx.user.firstName, " \u{1F44B} ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-mi-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Hola, {{ user?.firstName }} \u{1F44B}
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Resumen de tu actividad en MARITIMO
        </p>
      </div>
      <div class="flex gap-2">
        <a routerLink="/buscar"
          class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
          \u{1F50D} Buscar viaje
        </a>
        <a routerLink="/alquileres"
          class="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-300">
          \u2693 Charter
        </a>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-5xl animate-bounce">\u26F5</div>
  </div>

  <ng-container *ngIf="!loading">

    <!-- KPIs -->
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">

      <!-- Total reservas -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Total reservas</p>
          <span class="inline-flex size-9 items-center justify-center rounded-lg bg-brand-500/10 text-xl">\u{1F3AB}</span>
        </div>
        <p class="text-3xl font-extrabold text-gray-800 dark:text-white">{{ totalReservas }}</p>
        <p class="mt-1 text-xs text-gray-400">{{ totalTickets }} terminal \xB7 {{ totalAlquileres }} charter</p>
      </div>

      <!-- Total gastado -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Total pagado</p>
          <span class="inline-flex size-9 items-center justify-center rounded-lg bg-green-500/10 text-xl">\u{1F4B3}</span>
        </div>
        <p class="text-3xl font-extrabold text-brand-600 dark:text-brand-400">\${{ gastadoPagos | number:'1.0-0' }}</p>
        <p class="mt-1 text-xs text-brand-500">{{ tasaService.formatBs(gastadoPagos) }}</p>
      </div>

      <!-- Reservas activas -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Activas</p>
          <span class="inline-flex size-9 items-center justify-center rounded-lg bg-amber-500/10 text-xl">\u23F3</span>
        </div>
        <p class="text-3xl font-extrabold text-gray-800 dark:text-white">
          {{ alquileresActivos.length + ticketsPendientes.length }}
        </p>
        <p class="mt-1 text-xs text-gray-400">en curso o confirmadas</p>
      </div>

      <!-- Pr\xF3ximo viaje -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Pr\xF3ximo viaje</p>
          <span class="inline-flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-xl">\u{1F4C5}</span>
        </div>
        <ng-container *ngIf="proximoViaje; else sinProximo">
          <p class="text-sm font-bold text-gray-800 dark:text-white truncate">
            Viaje programado
          </p>
          <p class="mt-1 text-xs text-brand-500">{{ proximoViaje.trip?.departureDate | date:'dd MMM yyyy' }}</p>
        </ng-container>
        <ng-template #sinProximo>
          <ng-container *ngIf="proximoAlquiler; else sinNada">
            <p class="text-sm font-bold text-gray-800 dark:text-white truncate">{{ proximoAlquiler.vessel?.name }}</p>
            <p class="mt-1 text-xs text-purple-500">Charter \xB7 {{ proximoAlquiler.startDate | date:'dd MMM' }}</p>
          </ng-container>
          <ng-template #sinNada>
            <p class="text-sm text-gray-400">Sin viajes pr\xF3ximos</p>
            <a routerLink="/buscar" class="mt-1 block text-xs text-brand-500 hover:underline">Buscar \u2192</a>
          </ng-template>
        </ng-template>
      </div>

    </div>

    <!-- Actividad reciente -->
    <div *ngIf="actividadReciente.length > 0"
      class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Actividad reciente</h3>
        <div class="flex gap-2">
          <a routerLink="/mis-reservas" class="text-xs font-semibold text-brand-500 hover:text-brand-600">Ver reservas \u2192</a>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-100 dark:border-gray-800">
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Tipo</th>
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Descripci\xF3n</th>
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Fecha</th>
              <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Monto</th>
              <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let a of actividadReciente"
              class="border-b border-gray-100 last:border-0 dark:border-gray-800">
              <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{{ a.tipo }}</td>
              <td class="px-5 py-4 text-sm font-medium text-gray-800 dark:text-white/90 max-w-[200px] truncate">{{ a.descripcion }}</td>
              <td class="px-5 py-4 text-xs text-gray-400 whitespace-nowrap">{{ a.fecha | date:'dd MMM yyyy' }}</td>
              <td class="px-5 py-4 text-right text-sm font-bold text-brand-600 dark:text-brand-400 whitespace-nowrap">
                \${{ a.monto | number:'1.2-2' }}
              </td>
              <td class="px-5 py-4 text-center whitespace-nowrap">
                <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium" [ngClass]="statusClass(a.estado)">
                  {{ statusLabel(a.estado) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sin actividad -->
    <div *ngIf="actividadReciente.length === 0"
      class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
      <div class="text-5xl mb-4">\u26F5</div>
      <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin actividad todav\xEDa</h3>
      <p class="mt-2 text-sm text-gray-500">Reserva tu primer viaje o charter para comenzar.</p>
      <a routerLink="/buscar"
        class="mt-5 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
        Buscar viajes \u2192
      </a>
    </div>

    <!-- Accesos r\xE1pidos -->
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <a routerLink="/buscar"
        class="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 text-center hover:border-brand-300 hover:shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03]">
        <span class="text-3xl">\u{1F50D}</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Buscar viaje</span>
      </a>
      <a routerLink="/alquileres"
        class="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 text-center hover:border-brand-300 hover:shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03]">
        <span class="text-3xl">\u2693</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Charter privado</span>
      </a>
      <a routerLink="/mis-reservas"
        class="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 text-center hover:border-brand-300 hover:shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03]">
        <span class="text-3xl">\u{1F3AB}</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Mis reservas</span>
      </a>
      <a routerLink="/mis-metodos-pago"
        class="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 text-center hover:border-brand-300 hover:shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03]">
        <span class="text-3xl">\u{1F4B3}</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">M\xE9todos de pago</span>
      </a>
    </div>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiDashboardComponent, { className: "MiDashboardComponent", filePath: "src/app/pages/mi-dashboard/mi-dashboard.component.ts", lineNumber: 20 });
})();

// src/app/pages/mis-metodos-pago/mis-metodos-pago.component.ts
function MisMetodosPagoComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, "nudos");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.saldoNudos, "1.2-2"));
  }
}
function MisMetodosPagoComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function MisMetodosPagoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 29);
    \u0275\u0275text(5, "\xA1Recarga reportada con \xE9xito!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 30);
    \u0275\u0275text(7, " El equipo verificar\xE1 tu transferencia y acreditar\xE1 tus nudos en m\xE1ximo 24 horas h\xE1biles. ");
    \u0275\u0275elementEnd()()();
  }
}
function MisMetodosPagoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p", 32);
    \u0275\u0275text(2, " \u{1F4B1} Tasa del d\xEDa: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7, "1 nudo = 1 USD");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("1 USD = Bs ", \u0275\u0275pipeBind2(5, 1, ctx_r0.tasa, "1.2-2"));
  }
}
function MisMetodosPagoComponent_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "p", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 43);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_18_div_14_Template_button_click_6_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(f_r5.value));
    });
    \u0275\u0275text(7, " Copiar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.value);
  }
}
function MisMetodosPagoComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 34)(2, "div", 14)(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 36);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_18_Template_button_click_10_listener() {
      const acc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal(acc_r3));
    });
    \u0275\u0275text(11, " Recargar con este m\xE9todo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "div", 38);
    \u0275\u0275template(14, MisMetodosPagoComponent_div_18_div_14_Template, 8, 2, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", acc_r3.currency === "BS" ? "bg-amber-100 dark:bg-amber-500/10" : "bg-blue-100 dark:bg-blue-500/10");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r3.icon, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r3.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", acc_r3.fields);
  }
}
function MisMetodosPagoComponent_div_31_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2, "VENCIDA");
    \u0275\u0275elementEnd()();
  }
}
function MisMetodosPagoComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, MisMetodosPagoComponent_div_31_div_1_div_1_Template, 3, 0, "div", 47);
    \u0275\u0275elementStart(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4, "MARITIMO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6, "\u{1F4B3}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 52)(10, "div")(11, "p", 53);
    \u0275\u0275text(12, "Titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "p", 53);
    \u0275\u0275text(17, "Vence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 55);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "p", 53);
    \u0275\u0275text(22, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 56);
    \u0275\u0275text(24, "\u2022\u2022\u2022");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 57)(26, "button", 58);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_31_div_1_Template_button_click_26_listener() {
      const card_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTdcModal(card_r7));
    });
    \u0275\u0275text(27, " Recargar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 59);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_31_div_1_Template_button_click_28_listener() {
      const card_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeCard(card_r7.id));
    });
    \u0275\u0275text(29, " \u{1F5D1} ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isExpired(card_r7));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.maskedCard(card_r7.numero));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r7.titular);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-red-400", ctx_r0.isExpired(card_r7))("text-white", !ctx_r0.isExpired(card_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r7.vencimiento);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.isExpired(card_r7));
  }
}
function MisMetodosPagoComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, MisMetodosPagoComponent_div_31_div_1_Template, 30, 9, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.tarjetas);
  }
}
function MisMetodosPagoComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Agrega tu tarjeta para poder recargar con un solo clic. ");
    \u0275\u0275elementEnd();
  }
}
function MisMetodosPagoComponent_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.cardError, " ");
  }
}
function MisMetodosPagoComponent_div_33_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "VISA");
    \u0275\u0275elementContainerEnd();
  }
}
function MisMetodosPagoComponent_div_33_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "MC");
    \u0275\u0275elementContainerEnd();
  }
}
function MisMetodosPagoComponent_div_33_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "AMEX");
    \u0275\u0275elementContainerEnd();
  }
}
function MisMetodosPagoComponent_div_33_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xB7\xB7\xB7\xB7");
    \u0275\u0275elementContainerEnd();
  }
}
function MisMetodosPagoComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "p", 64);
    \u0275\u0275text(2, "Nueva tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MisMetodosPagoComponent_div_33_div_3_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(4, "div", 66)(5, "div", 67)(6, "label", 68);
    \u0275\u0275text(7, "N\xFAmero de tarjeta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 69)(9, "input", 70);
    \u0275\u0275listener("input", function MisMetodosPagoComponent_div_33_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatCardNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 71);
    \u0275\u0275template(11, MisMetodosPagoComponent_div_33_ng_container_11_Template, 2, 0, "ng-container", 72)(12, MisMetodosPagoComponent_div_33_ng_container_12_Template, 2, 0, "ng-container", 72)(13, MisMetodosPagoComponent_div_33_ng_container_13_Template, 2, 0, "ng-container", 72)(14, MisMetodosPagoComponent_div_33_ng_container_14_Template, 2, 0, "ng-container", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div")(16, "label", 68);
    \u0275\u0275text(17, "Nombre del titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 73);
    \u0275\u0275listener("input", function MisMetodosPagoComponent_div_33_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatTitular($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 74)(20, "div")(21, "label", 68);
    \u0275\u0275text(22, "Vencimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 75);
    \u0275\u0275listener("input", function MisMetodosPagoComponent_div_33_Template_input_input_23_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatExpiry($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 68);
    \u0275\u0275text(26, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function MisMetodosPagoComponent_div_33_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newCard.cvv, $event) || (ctx_r0.newCard.cvv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 77)(29, "button", 78);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_33_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showAddCard.set(false);
      return \u0275\u0275resetView(ctx_r0.cardError = "");
    });
    \u0275\u0275text(30, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 79);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_33_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCard());
    });
    \u0275\u0275text(32, " Guardar tarjeta ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.cardError);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.newCard.numero);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-blue-600", ctx_r0.cardBrand === "visa")("text-red-500", ctx_r0.cardBrand === "mastercard")("text-teal-600", ctx_r0.cardBrand === "amex")("text-gray-300", !ctx_r0.cardBrand);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cardBrand === "visa");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cardBrand === "mastercard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cardBrand === "amex");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cardBrand);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.newCard.titular);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.newCard.vencimiento);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newCard.cvv);
  }
}
function MisMetodosPagoComponent_div_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.maskedCard(ctx_r0.selectedCard.numero));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedCard.titular, " \xB7 ", ctx_r0.selectedCard.vencimiento);
  }
}
function MisMetodosPagoComponent_div_34_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.tdcError, " ");
  }
}
function MisMetodosPagoComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTdcModal());
    });
    \u0275\u0275elementStart(1, "div", 82);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_34_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div", 84)(4, "span", 85);
    \u0275\u0275text(5, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 86);
    \u0275\u0275text(7, "Recargar con TDC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 87);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTdcModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 88);
    \u0275\u0275template(11, MisMetodosPagoComponent_div_34_div_11_Template, 8, 3, "div", 89)(12, MisMetodosPagoComponent_div_34_div_12_Template, 2, 1, "div", 65);
    \u0275\u0275elementStart(13, "div")(14, "label", 90);
    \u0275\u0275text(15, " \xBFCu\xE1nto quieres recargar? ");
    \u0275\u0275elementStart(16, "span", 91);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 69)(19, "span", 92);
    \u0275\u0275text(20, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function MisMetodosPagoComponent_div_34_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tdcMonto, $event) || (ctx_r0.tdcMonto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 94);
    \u0275\u0275text(23, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 95);
    \u0275\u0275text(25, " Recibir\xE1s ");
    \u0275\u0275elementStart(26, "strong", 96);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " acreditados tras la verificaci\xF3n. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 97)(31, "button", 98);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_34_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitTdcRecharge());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 99);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_34_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTdcModal());
    });
    \u0275\u0275text(34, " Cancelar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.selectedCard);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tdcError);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tdcMonto);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 6, ctx_r0.tdcMonto ?? 0, "1.2-2"), " nudos");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.tdcSubmitting || !ctx_r0.tdcMonto || ctx_r0.tdcMonto <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.tdcSubmitting ? "Procesando..." : "\u2713 Recargar $" + (ctx_r0.tdcMonto ?? 0) + " USD", " ");
  }
}
function MisMetodosPagoComponent_div_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.errorMsg, " ");
  }
}
function MisMetodosPagoComponent_div_35_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 84)(4, "p", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 130);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_div_16_Template_button_click_6_listener() {
      const f_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(f_r12.value));
    });
    \u0275\u0275text(7, " Copiar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r12.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r12.value);
  }
}
function MisMetodosPagoComponent_div_35_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F4B1} ", ctx_r0.nudos || 0, " nudos \xD7 Bs ", \u0275\u0275pipeBind2(2, 3, ctx_r0.tasa, "1.2-2"), " = ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.montoLabel);
  }
}
function MisMetodosPagoComponent_div_35_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " \u{1F4B5} 1 nudo = $1 USD \u2014 transferir\xE1s ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.montoLabel);
  }
}
function MisMetodosPagoComponent_div_35_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "p", 132);
    \u0275\u0275text(2, "Resumen de recarga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 134);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.nudos, " nudos via ", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.montoLabel);
  }
}
function MisMetodosPagoComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 104);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div", 84)(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 105);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(9, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 88);
    \u0275\u0275template(11, MisMetodosPagoComponent_div_35_div_11_Template, 2, 1, "div", 106);
    \u0275\u0275elementStart(12, "div", 107)(13, "p", 108);
    \u0275\u0275text(14, " 1. Transfiere a esta cuenta de MARITIMO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 109);
    \u0275\u0275template(16, MisMetodosPagoComponent_div_35_div_16_Template, 8, 2, "div", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 111);
    \u0275\u0275text(19, " 2. \xBFCu\xE1ntos nudos quieres comprar? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "div", 112)(22, "span", 113);
    \u0275\u0275text(23, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function MisMetodosPagoComponent_div_35_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nudos, $event) || (ctx_r0.nudos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 115);
    \u0275\u0275text(26, "nudos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "span", 116);
    \u0275\u0275text(28, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 117)(30, "p", 41);
    \u0275\u0275text(31, "Debes transferir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 118);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "p", 119);
    \u0275\u0275template(35, MisMetodosPagoComponent_div_35_ng_container_35_Template, 5, 6, "ng-container", 72)(36, MisMetodosPagoComponent_div_35_ng_container_36_Template, 4, 1, "ng-container", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "p", 111);
    \u0275\u0275text(39, " 3. Confirma tu transferencia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 120)(41, "label", 68);
    \u0275\u0275text(42, " N\xBA de referencia / confirmaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function MisMetodosPagoComponent_div_35_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.referencia, $event) || (ctx_r0.referencia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "label", 122);
    \u0275\u0275text(46, " Comprobante de pago ");
    \u0275\u0275elementStart(47, "span", 123);
    \u0275\u0275text(48, "(recomendado)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "app-image-upload", 124);
    \u0275\u0275listener("uploaded", function MisMetodosPagoComponent_div_35_Template_app_image_upload_uploaded_49_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onProofUploaded($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, MisMetodosPagoComponent_div_35_div_50_Template, 8, 3, "div", 125);
    \u0275\u0275elementStart(51, "div", 97)(52, "button", 98);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitReport());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 126);
    \u0275\u0275listener("click", function MisMetodosPagoComponent_div_35_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(55, " Cancelar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Recargar v\xEDa ", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.errorMsg);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.fields);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nudos);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-amber-300", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS")("bg-amber-50", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS")("dark:bg-amber-500/10", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS")("border-green-300", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS")("bg-green-50", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS")("dark:bg-green-500/10", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-amber-700", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS")("dark:text-amber-400", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS")("text-green-700", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS")("dark:text-green-400", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nudos ? ctx_r0.montoLabel : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) === "BS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.currency) !== "BS");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.referencia);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.nudos && ctx_r0.nudos > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.submitting || !ctx_r0.nudos || ctx_r0.nudos <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Enviando..." : "\u2713 Reportar recarga", " ");
  }
}
var MisMetodosPagoComponent = class _MisMetodosPagoComponent {
  auth = inject(AuthService);
  http = inject(HttpClient);
  accountsService = inject(PaymentAccountsService);
  tasaService = inject(TasaService);
  accounts = [];
  // ── Saldo ───────────────────────────────────────────────────────────────────
  saldoNudos = 0;
  loadingSaldo = true;
  // ── Tarjetas (múltiples) ────────────────────────────────────────────────────
  STORAGE_TDC = "maritimo_tdcs";
  tarjetas = [];
  showAddCard = signal(false, ...ngDevMode ? [{ debugName: "showAddCard" }] : (
    /* istanbul ignore next */
    []
  ));
  cardError = "";
  newCard = this.emptyCard();
  // ── Modal transferencias (Pago Móvil, Zelle, etc.) ──────────────────────────
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
    /* istanbul ignore next */
    []
  ));
  submitting = false;
  reportSent = signal(false, ...ngDevMode ? [{ debugName: "reportSent" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMsg = "";
  // ── Modal TDC (cobro directo) ────────────────────────────────────────────────
  showTdcModal = signal(false, ...ngDevMode ? [{ debugName: "showTdcModal" }] : (
    /* istanbul ignore next */
    []
  ));
  tdcMonto = null;
  tdcSubmitting = false;
  tdcReportSent = signal(false, ...ngDevMode ? [{ debugName: "tdcReportSent" }] : (
    /* istanbul ignore next */
    []
  ));
  tdcError = "";
  selectedCardId = "";
  // Campos del formulario
  selectedAccount = null;
  nudos = null;
  referencia = "";
  proofUrl = "";
  get user() {
    return this.auth.user();
  }
  // ── Conversión ──────────────────────────────────────────────────────────────
  get montoATransferir() {
    if (!this.nudos)
      return 0;
    if (this.selectedAccount?.currency === "BS") {
      return this.tasaService.toBs(this.nudos);
    }
    return this.nudos;
  }
  get montoLabel() {
    if (!this.nudos || !this.selectedAccount)
      return "\u2014";
    if (this.selectedAccount.currency === "BS") {
      return this.tasaService.formatBsDirect(this.montoATransferir);
    }
    return `$${this.montoATransferir.toFixed(2)} USD`;
  }
  get tasa() {
    return this.tasaService.rate();
  }
  // ── Helpers tarjetas ────────────────────────────────────────────────────────
  get selectedCard() {
    return this.tarjetas.find((c) => c.id === this.selectedCardId) ?? null;
  }
  get cardBrand() {
    const n = this.newCard.numero.replace(/\s/g, "");
    if (!n)
      return null;
    if (n.startsWith("4"))
      return "visa";
    if (/^(5[1-5]|2[2-7])/.test(n))
      return "mastercard";
    if (/^3[47]/.test(n))
      return "amex";
    return null;
  }
  formatCardNumber(event2) {
    const input = event2.target;
    const digits = input.value.replace(/\D/g, "");
    const isAmex = digits.startsWith("34") || digits.startsWith("37");
    let formatted;
    if (isAmex) {
      const d = digits.substring(0, 15);
      formatted = d.replace(/^(\d{1,4})(\d{1,6})?(\d{1,5})?$/, (_, a, b, c) => [a, b, c].filter(Boolean).join(" "));
    } else {
      const d = digits.substring(0, 16);
      formatted = d.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
    this.newCard.numero = formatted.trim();
    input.value = this.newCard.numero;
  }
  formatExpiry(event2) {
    const input = event2.target;
    let digits = input.value.replace(/\D/g, "").substring(0, 4);
    if (digits.length >= 2) {
      let month = parseInt(digits.substring(0, 2), 10);
      if (month > 12)
        month = 12;
      if (month === 0)
        month = 1;
      digits = month.toString().padStart(2, "0") + digits.substring(2);
    }
    const formatted = digits.length > 2 ? digits.substring(0, 2) + "/" + digits.substring(2) : digits;
    this.newCard.vencimiento = formatted;
    input.value = formatted;
  }
  formatTitular(event2) {
    const input = event2.target;
    this.newCard.titular = input.value.toUpperCase();
    input.value = this.newCard.titular;
  }
  maskedCard(n) {
    if (!n || n.length < 4)
      return "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ????";
    return `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${n.slice(-4)}`;
  }
  ngOnInit() {
    this.tasaService.load();
    this.loadSaldo();
    this.accountsService.getActive().subscribe({ next: (a) => {
      this.accounts = a;
    } });
    try {
      const raw = localStorage.getItem(this.STORAGE_TDC);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.tarjetas = Array.isArray(parsed) ? parsed : [];
      }
    } catch (e) {
    }
  }
  loadSaldo() {
    const uid = this.user?.id;
    if (!uid) {
      this.loadingSaldo = false;
      return;
    }
    this.http.get(`${environment.apiUrl}/payments/wallet-balance/${uid}`).subscribe({
      next: (r) => {
        this.saldoNudos = Number(r?.balance ?? r?.data?.balance ?? 0);
        this.loadingSaldo = false;
      },
      error: () => {
        this.loadingSaldo = false;
      }
    });
  }
  // ── Acciones ─────────────────────────────────────────────────────────────────
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(() => {
    });
  }
  // ── TDC ─────────────────────────────────────────────────────────────────────
  emptyCard() {
    return { id: crypto.randomUUID(), numero: "", titular: "", vencimiento: "", cvv: "" };
  }
  isExpired(card) {
    const parts = card.vencimiento.split("/");
    if (parts.length !== 2)
      return false;
    const month = parseInt(parts[0], 10);
    const year = parseInt("20" + parts[1], 10);
    if (isNaN(month) || isNaN(year))
      return false;
    const now2 = /* @__PURE__ */ new Date();
    if (year < now2.getFullYear())
      return true;
    if (year === now2.getFullYear() && month < now2.getMonth() + 1)
      return true;
    return false;
  }
  saveCard() {
    const c = this.newCard;
    if (!c.numero || !c.titular || !c.vencimiento) {
      this.cardError = "Completa n\xFAmero, titular y vencimiento.";
      return;
    }
    if (this.isExpired(c)) {
      this.cardError = "La tarjeta est\xE1 vencida. Ingresa una tarjeta vigente.";
      return;
    }
    this.cardError = "";
    this.tarjetas = [...this.tarjetas, __spreadValues({}, c)];
    try {
      localStorage.setItem(this.STORAGE_TDC, JSON.stringify(this.tarjetas));
    } catch (e) {
    }
    this.newCard = this.emptyCard();
    this.showAddCard.set(false);
  }
  removeCard(id) {
    this.tarjetas = this.tarjetas.filter((c) => c.id !== id);
    try {
      localStorage.setItem(this.STORAGE_TDC, JSON.stringify(this.tarjetas));
    } catch (e) {
    }
  }
  openTdcModal(card) {
    this.selectedCardId = card.id;
    this.tdcMonto = null;
    this.tdcError = "";
    this.tdcReportSent.set(false);
    this.showTdcModal.set(true);
  }
  closeTdcModal() {
    this.showTdcModal.set(false);
  }
  submitTdcRecharge() {
    if (!this.tdcMonto || this.tdcMonto <= 0) {
      this.tdcError = "Ingresa un monto v\xE1lido.";
      return;
    }
    const uid = this.user?.id;
    if (!uid)
      return;
    this.tdcSubmitting = true;
    this.tdcError = "";
    const dto = {
      clientId: uid,
      amount: this.tdcMonto,
      currency: "USD",
      method: "CARD",
      referenceType: "WALLET_TOPUP",
      referenceId: uid,
      notes: `Recarga TDC $${this.tdcMonto} USD \xB7 Tarjeta: **** ${(this.selectedCard?.numero ?? "").slice(-4)}`
    };
    this.http.post(`${environment.apiUrl}/payments`, dto).subscribe({
      next: () => {
        this.tdcSubmitting = false;
        this.tdcReportSent.set(true);
        this.showTdcModal.set(false);
        this.loadSaldo();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.tdcError = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al procesar.";
        this.tdcSubmitting = false;
      }
    });
  }
  openModal(acc) {
    this.selectedAccount = acc;
    this.nudos = null;
    this.referencia = "";
    this.proofUrl = "";
    this.errorMsg = "";
    this.reportSent.set(false);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  onProofUploaded(url) {
    this.proofUrl = url;
  }
  submitReport() {
    if (!this.nudos || this.nudos <= 0 || !this.selectedAccount) {
      this.errorMsg = "Ingresa una cantidad v\xE1lida de nudos.";
      return;
    }
    const uid = this.user?.id;
    if (!uid)
      return;
    this.submitting = true;
    this.errorMsg = "";
    const dto = {
      clientId: uid,
      amount: this.nudos,
      // nudos = unidades a acreditar
      currency: this.selectedAccount.currency === "BS" ? "VES" : "USD",
      method: this.selectedAccount.method,
      referenceType: "WALLET_TOPUP",
      referenceId: uid,
      notes: `Recarga de ${this.nudos} nudos via ${this.selectedAccount.label} \xB7 Monto: ${this.montoLabel}`
    };
    if (this.referencia)
      dto.transactionRef = this.referencia;
    if (this.proofUrl)
      dto.proofImageUrl = this.proofUrl;
    this.http.post(`${environment.apiUrl}/payments`, dto).subscribe({
      next: () => {
        this.submitting = false;
        this.reportSent.set(true);
        this.showModal.set(false);
        this.loadSaldo();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al reportar el pago.";
        this.submitting = false;
      }
    });
  }
  static \u0275fac = function MisMetodosPagoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisMetodosPagoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisMetodosPagoComponent, selectors: [["app-mis-metodos-pago"]], decls: 36, vars: 14, consts: [[1, "space-y-6"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "p-5", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex-shrink-0", "rounded-2xl", "border", "border-brand-200", "bg-brand-50", "px-6", "py-4", "text-center", "dark:border-brand-500/20", "dark:bg-brand-500/10"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-brand-500", "dark:text-brand-400"], ["class", "mt-1 text-3xl font-black text-brand-700 dark:text-brand-300", 4, "ngIf"], ["class", "mt-1 text-xl text-brand-400 animate-pulse", 4, "ngIf"], [1, "mt-0.5", "text-[10px]", "text-brand-400"], ["class", "flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 dark:border-green-800/30 dark:bg-green-500/10", 4, "ngIf"], ["class", "flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 dark:border-amber-500/20 dark:bg-amber-500/10", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "size-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "bg-gray-900", "dark:bg-white/10", "text-xl"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "click"], ["class", "grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3", 4, "ngIf"], ["class", "px-5 py-6 text-center text-sm text-gray-400", 4, "ngIf"], ["class", "border-t border-gray-100 dark:border-gray-800 px-5 py-4 space-y-4", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center", 3, "click", 4, "ngIf"], [1, "mt-1", "text-3xl", "font-black", "text-brand-700", "dark:text-brand-300"], [1, "ml-1", "text-lg", "font-bold"], [1, "mt-1", "text-xl", "text-brand-400", "animate-pulse"], [1, "flex", "items-center", "gap-3", "rounded-2xl", "border", "border-green-200", "bg-green-50", "px-5", "py-4", "dark:border-green-800/30", "dark:bg-green-500/10"], [1, "text-2xl"], [1, "text-sm", "font-bold", "text-green-700", "dark:text-green-400"], [1, "text-xs", "text-green-600", "dark:text-green-500"], [1, "flex", "items-center", "justify-between", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "px-5", "py-3", "dark:border-amber-500/20", "dark:bg-amber-500/10"], [1, "text-sm", "text-amber-700", "dark:text-amber-400"], [1, "text-xs", "text-amber-600", "dark:text-amber-500"], [1, "flex", "items-center", "justify-between", "px-5", "py-4"], [1, "inline-flex", "size-10", "flex-shrink-0", "items-center", "justify-center", "rounded-xl", "text-xl", 3, "ngClass"], [1, "flex-shrink-0", "rounded-xl", "bg-brand-500", "px-4", "py-2", "text-xs", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", "shadow-sm", 3, "click"], [1, "border-t", "border-gray-100", "dark:border-gray-800"], [1, "flex", "flex-wrap"], ["class", "group flex min-w-[140px] flex-1 items-center justify-between gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] border-r border-gray-100 dark:border-gray-800 last:border-r-0", 4, "ngFor", "ngForOf"], [1, "group", "flex", "min-w-[140px]", "flex-1", "items-center", "justify-between", "gap-3", "px-5", "py-3", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", "border-r", "border-gray-100", "dark:border-gray-800", "last:border-r-0"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "mt-0.5", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], ["title", "Copiar", 1, "flex-shrink-0", "rounded-lg", "border", "border-gray-200", "px-2", "py-1", "text-[10px]", "font-bold", "text-gray-400", "opacity-0", "group-hover:opacity-100", "transition", "hover:border-brand-300", "hover:text-brand-500", "dark:border-gray-700", 3, "click"], [1, "grid", "gap-4", "p-5", "sm:grid-cols-2", "lg:grid-cols-3"], ["class", "relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-gray-900 p-5 shadow-lg", 4, "ngFor", "ngForOf"], [1, "relative", "flex", "flex-col", "gap-3", "overflow-hidden", "rounded-2xl", "bg-gray-900", "p-5", "shadow-lg"], ["class", "absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[2px]", 4, "ngIf"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-extrabold", "tracking-widest", "text-white"], [1, "text-xl"], [1, "font-mono", "text-sm", "tracking-widest", "text-white"], [1, "flex", "items-end", "justify-between"], [1, "text-[9px]", "uppercase", "tracking-widest", "text-white/40"], [1, "text-xs", "font-bold", "uppercase", "text-white"], [1, "text-xs", "font-bold"], [1, "text-xs", "font-bold", "text-white"], [1, "flex", "gap-2", "pt-1"], [1, "flex-1", "rounded-lg", "bg-brand-500", "py-2", "text-xs", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], [1, "rounded-lg", "border", "border-red-400/50", "px-3", "py-2", "text-xs", "font-bold", "text-red-400", "hover:bg-red-500", "hover:border-red-500", "hover:text-white", "transition-colors", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "rounded-2xl", "bg-black/60", "backdrop-blur-[2px]"], [1, "rounded-full", "bg-red-500", "px-3", "py-1", "text-xs", "font-bold", "text-white"], [1, "px-5", "py-6", "text-center", "text-sm", "text-gray-400"], [1, "border-t", "border-gray-100", "dark:border-gray-800", "px-5", "py-4", "space-y-4"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-white/80"], ["class", "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "sm:col-span-2"], [1, "mb-1.5", "block", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "relative"], ["type", "text", "inputmode", "numeric", "placeholder", "0000 0000 0000 0000", "maxlength", "19", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "pr-20", "font-mono", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "input", "value"], [1, "pointer-events-none", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-extrabold", "tracking-widest"], [4, "ngIf"], ["type", "text", "placeholder", "NOMBRE APELLIDO", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "uppercase", "tracking-wide", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "input", "value"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "text", "inputmode", "numeric", "placeholder", "MM/YY", "maxlength", "5", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "font-mono", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "input", "value"], ["type", "password", "inputmode", "numeric", "placeholder", "\u2022\u2022\u2022", "maxlength", "4", 1, "h-11", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2"], [1, "rounded-xl", "border", "border-gray-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", 3, "click"], [1, "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/50", "p-4", "backdrop-blur-sm", 3, "click"], [1, "w-full", "max-w-sm", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-2xl", "dark:border-gray-800", "dark:bg-gray-950", 3, "click"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "flex", "items-center", "gap-2"], [1, "text-lg"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "text-gray-400", "hover:bg-gray-100", "dark:hover:bg-white/[0.06]", 3, "click"], [1, "space-y-5", "p-6"], ["class", "flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3", 4, "ngIf"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-500", "dark:text-gray-400"], [1, "text-red-500"], [1, "pointer-events-none", "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-lg", "font-bold", "text-gray-400"], ["type", "number", "min", "1", "placeholder", "0", 1, "h-14", "w-full", "rounded-xl", "border-2", "border-gray-300", "bg-white", "pl-10", "pr-4", "text-2xl", "font-extrabold", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:ring-2", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "pointer-events-none", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-sm", "font-bold", "text-gray-400"], [1, "mt-1.5", "text-xs", "text-gray-400"], [1, "text-brand-600", "dark:text-brand-400"], [1, "flex", "gap-3"], [1, "flex-1", "rounded-xl", "bg-brand-500", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click"], [1, "flex", "items-center", "gap-3", "rounded-xl", "bg-gray-900", "px-4", "py-3"], [1, "font-mono", "text-sm", "font-bold", "text-white"], [1, "text-[11px]", "text-white/50"], [1, "fixed", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-black/50", "p-4", "backdrop-blur-sm", "sm:items-center", 3, "click"], [1, "w-full", "max-w-lg", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-2xl", "dark:border-gray-800", "dark:bg-gray-950", 3, "click"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "text-gray-400", "hover:bg-gray-100", "hover:text-gray-600", "dark:hover:bg-white/[0.06]", 3, "click"], ["class", "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-xl", "border", "border-brand-100", "bg-brand-50", "p-4", "dark:border-brand-500/20", "dark:bg-brand-500/10"], [1, "mb-2.5", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-brand-600", "dark:text-brand-400"], [1, "grid", "grid-cols-2", "gap-y-2.5", "gap-x-4"], [4, "ngFor", "ngForOf"], [1, "mb-3", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-gray-500", "dark:text-gray-400"], [1, "relative", "flex-1"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-bold", "text-gray-400"], ["type", "number", "min", "1", "placeholder", "0", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "pl-8", "pr-3", "text-lg", "font-bold", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:ring-2", "focus:ring-brand-500/10", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "pointer-events-none", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "text-gray-400"], [1, "text-2xl", "text-gray-300"], [1, "flex-1", "rounded-xl", "border-2", "p-3", "text-center"], [1, "mt-0.5", "text-lg", "font-extrabold"], [1, "mt-2", "text-xs", "text-gray-400"], [1, "mb-3"], ["type", "text", "placeholder", "ej. 00123456789", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "mb-2", "block", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-gray-400"], ["label", "Adjuntar comprobante", 3, "uploaded"], ["class", "rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.04]", 3, "click"], [1, "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "text-[10px]", "text-brand-400", "dark:text-brand-500"], [1, "text-sm", "font-bold", "text-brand-800", "dark:text-brand-200"], [1, "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "text-brand-500", "hover:bg-brand-100", "dark:hover:bg-brand-500/20", "transition", 3, "click"], [1, "rounded-xl", "bg-gray-50", "px-4", "py-3", "dark:bg-white/[0.04]"], [1, "text-xs", "text-gray-400", "mb-1"], [1, "text-sm", "text-gray-600", "dark:text-gray-300"], [1, "text-sm", "font-bold", "text-gray-800", "dark:text-white/90"]], template: function MisMetodosPagoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Recargar nudos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Elige un m\xE9todo, transfiere a las cuentas de MARITIMO y acumula nudos para pagar tus reservas. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "p", 6);
      \u0275\u0275text(10, "Tu saldo");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, MisMetodosPagoComponent_p_11_Template, 5, 4, "p", 7)(12, MisMetodosPagoComponent_p_12_Template, 2, 0, "p", 8);
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, MisMetodosPagoComponent_div_16_Template, 8, 0, "div", 10)(17, MisMetodosPagoComponent_div_17_Template, 8, 4, "div", 11)(18, MisMetodosPagoComponent_div_18_Template, 15, 5, "div", 12);
      \u0275\u0275elementStart(19, "div", 1)(20, "div", 13)(21, "div", 14)(22, "span", 15);
      \u0275\u0275text(23, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "h3", 16);
      \u0275\u0275text(26, "Tarjeta de Cr\xE9dito / D\xE9bito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 17);
      \u0275\u0275text(28, "Visa \xB7 Mastercard \xB7 Amex \xB7 Cobro directo en USD");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "button", 18);
      \u0275\u0275listener("click", function MisMetodosPagoComponent_Template_button_click_29_listener() {
        return ctx.showAddCard.set(true);
      });
      \u0275\u0275text(30, " + Agregar tarjeta ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, MisMetodosPagoComponent_div_31_Template, 2, 1, "div", 19)(32, MisMetodosPagoComponent_div_32_Template, 2, 0, "div", 20)(33, MisMetodosPagoComponent_div_33_Template, 33, 17, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, MisMetodosPagoComponent_div_34_Template, 35, 9, "div", 22)(35, MisMetodosPagoComponent_div_35_Template, 56, 32, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.loadingSaldo);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingSaldo);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2248 $", \u0275\u0275pipeBind2(15, 11, ctx.saldoNudos, "1.2-2"), " USD");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.reportSent());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tasa > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.accounts);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.tarjetas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tarjetas.length === 0 && !ctx.showAddCard());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddCard());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTdcModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel, ImageUploadComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisMetodosPagoComponent, [{
    type: Component,
    args: [{ selector: "app-mis-metodos-pago", standalone: true, imports: [CommonModule, FormsModule, ImageUploadComponent], template: `<div class="space-y-6">

  <!-- Header con saldo de nudos -->
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Recargar nudos</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Elige un m\xE9todo, transfiere a las cuentas de MARITIMO y acumula nudos para pagar tus reservas.
        </p>
      </div>
      <!-- Saldo -->
      <div class="flex-shrink-0 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-4 text-center dark:border-brand-500/20 dark:bg-brand-500/10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">Tu saldo</p>
        <p *ngIf="!loadingSaldo" class="mt-1 text-3xl font-black text-brand-700 dark:text-brand-300">
          {{ saldoNudos | number:'1.2-2' }}<span class="ml-1 text-lg font-bold">nudos</span>
        </p>
        <p *ngIf="loadingSaldo" class="mt-1 text-xl text-brand-400 animate-pulse">Cargando...</p>
        <p class="mt-0.5 text-[10px] text-brand-400">\u2248 \${{ saldoNudos | number:'1.2-2' }} USD</p>
      </div>
    </div>
  </div>

  <!-- Aviso recarga reportada -->
  <div *ngIf="reportSent()"
    class="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 dark:border-green-800/30 dark:bg-green-500/10">
    <span class="text-2xl">\u2705</span>
    <div>
      <p class="text-sm font-bold text-green-700 dark:text-green-400">\xA1Recarga reportada con \xE9xito!</p>
      <p class="text-xs text-green-600 dark:text-green-500">
        El equipo verificar\xE1 tu transferencia y acreditar\xE1 tus nudos en m\xE1ximo 24 horas h\xE1biles.
      </p>
    </div>
  </div>

  <!-- Tasa del d\xEDa -->
  <div *ngIf="tasa > 0"
    class="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 dark:border-amber-500/20 dark:bg-amber-500/10">
    <p class="text-sm text-amber-700 dark:text-amber-400">
      \u{1F4B1} Tasa del d\xEDa: <strong>1 USD = Bs {{ tasa | number:'1.2-2' }}</strong>
    </p>
    <p class="text-xs text-amber-600 dark:text-amber-500">1 nudo = 1 USD</p>
  </div>

  <!-- Cuentas de MARITIMO -->
  <div *ngFor="let acc of accounts"
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

    <!-- Cabecera -->
    <div class="flex items-center justify-between px-5 py-4">
      <div class="flex items-center gap-3">
        <span class="inline-flex size-10 flex-shrink-0 items-center justify-center rounded-xl text-xl"
          [ngClass]="acc.currency === 'BS' ? 'bg-amber-100 dark:bg-amber-500/10' : 'bg-blue-100 dark:bg-blue-500/10'">
          {{ acc.icon }}
        </span>
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ acc.label }}</h3>
          <p class="text-xs text-gray-400">{{ acc.description }}</p>
        </div>
      </div>
      <button (click)="openModal(acc)"
        class="flex-shrink-0 rounded-xl bg-brand-500 px-4 py-2 text-xs font-bold text-white hover:bg-brand-600 transition-colors shadow-sm">
        Recargar con este m\xE9todo
      </button>
    </div>

    <!-- Datos de la cuenta -->
    <div class="border-t border-gray-100 dark:border-gray-800">
      <div class="flex flex-wrap">
        <div *ngFor="let f of acc.fields"
          class="group flex min-w-[140px] flex-1 items-center justify-between gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] border-r border-gray-100 dark:border-gray-800 last:border-r-0">
          <div>
            <p class="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{{ f.label }}</p>
            <p class="mt-0.5 text-sm font-semibold text-gray-800 dark:text-white/90">{{ f.value }}</p>
          </div>
          <button (click)="copyToClipboard(f.value)" title="Copiar"
            class="flex-shrink-0 rounded-lg border border-gray-200 px-2 py-1 text-[10px] font-bold text-gray-400
                   opacity-0 group-hover:opacity-100 transition hover:border-brand-300 hover:text-brand-500
                   dark:border-gray-700">
            Copiar
          </button>
        </div>
      </div>
    </div>

  </div>

  <!-- \u2500\u2500 Tarjeta de Cr\xE9dito / D\xE9bito (cobro directo) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

    <!-- Cabecera -->
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex items-center gap-3">
        <span class="inline-flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 dark:bg-white/10 text-xl">\u{1F4B3}</span>
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Tarjeta de Cr\xE9dito / D\xE9bito</h3>
          <p class="text-xs text-gray-400">Visa \xB7 Mastercard \xB7 Amex \xB7 Cobro directo en USD</p>
        </div>
      </div>
      <button (click)="showAddCard.set(true)"
        class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
        + Agregar tarjeta
      </button>
    </div>

    <!-- Grid de tarjetas guardadas -->
    <div *ngIf="tarjetas.length > 0" class="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
      <div *ngFor="let card of tarjetas"
        class="relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-gray-900 p-5 shadow-lg">

        <!-- Overlay vencida -->
        <div *ngIf="isExpired(card)"
          class="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[2px]">
          <span class="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">VENCIDA</span>
        </div>

        <!-- Contenido tarjeta -->
        <div class="flex items-center justify-between">
          <span class="text-base font-extrabold tracking-widest text-white">MARITIMO</span>
          <span class="text-xl">\u{1F4B3}</span>
        </div>
        <p class="font-mono text-sm tracking-widest text-white">{{ maskedCard(card.numero) }}</p>
        <div class="flex items-end justify-between">
          <div>
            <p class="text-[9px] uppercase tracking-widest text-white/40">Titular</p>
            <p class="text-xs font-bold uppercase text-white">{{ card.titular }}</p>
          </div>
          <div>
            <p class="text-[9px] uppercase tracking-widest text-white/40">Vence</p>
            <p class="text-xs font-bold" [class.text-red-400]="isExpired(card)" [class.text-white]="!isExpired(card)">{{ card.vencimiento }}</p>
          </div>
          <div>
            <p class="text-[9px] uppercase tracking-widest text-white/40">CVV</p>
            <p class="text-xs font-bold text-white">\u2022\u2022\u2022</p>
          </div>
        </div>

        <!-- Acciones -->
        <div class="flex gap-2 pt-1">
          <button (click)="openTdcModal(card)" [disabled]="isExpired(card)"
            class="flex-1 rounded-lg bg-brand-500 py-2 text-xs font-bold text-white hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            Recargar
          </button>
          <button (click)="removeCard(card.id)"
            class="rounded-lg border border-red-400/50 px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors">
            \u{1F5D1}
          </button>
        </div>
      </div>
    </div>

    <!-- Sin tarjetas -->
    <div *ngIf="tarjetas.length === 0 && !showAddCard()"
      class="px-5 py-6 text-center text-sm text-gray-400">
      Agrega tu tarjeta para poder recargar con un solo clic.
    </div>

    <!-- Formulario agregar tarjeta -->
    <div *ngIf="showAddCard()" class="border-t border-gray-100 dark:border-gray-800 px-5 py-4 space-y-4">
      <p class="text-sm font-semibold text-gray-700 dark:text-white/80">Nueva tarjeta</p>

      <div *ngIf="cardError"
        class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10">
        \u26A0\uFE0F {{ cardError }}
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <!-- N\xFAmero de tarjeta -->
        <div class="sm:col-span-2">
          <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">N\xFAmero de tarjeta</label>
          <div class="relative">
            <input type="text" inputmode="numeric" [value]="newCard.numero" (input)="formatCardNumber($event)"
              placeholder="0000 0000 0000 0000" maxlength="19"
              class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 pr-20 font-mono text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
            <!-- Brand badge -->
            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-extrabold tracking-widest"
              [class.text-blue-600]="cardBrand === 'visa'"
              [class.text-red-500]="cardBrand === 'mastercard'"
              [class.text-teal-600]="cardBrand === 'amex'"
              [class.text-gray-300]="!cardBrand">
              <ng-container *ngIf="cardBrand === 'visa'">VISA</ng-container>
              <ng-container *ngIf="cardBrand === 'mastercard'">MC</ng-container>
              <ng-container *ngIf="cardBrand === 'amex'">AMEX</ng-container>
              <ng-container *ngIf="!cardBrand">\xB7\xB7\xB7\xB7</ng-container>
            </span>
          </div>
        </div>

        <!-- Titular -->
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Nombre del titular</label>
          <input type="text" [value]="newCard.titular" (input)="formatTitular($event)"
            placeholder="NOMBRE APELLIDO"
            class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm uppercase tracking-wide text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
        </div>

        <!-- Vencimiento + CVV -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Vencimiento</label>
            <input type="text" inputmode="numeric" [value]="newCard.vencimiento" (input)="formatExpiry($event)"
              placeholder="MM/YY" maxlength="5"
              class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 font-mono text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">CVV</label>
            <input type="password" inputmode="numeric" [(ngModel)]="newCard.cvv" placeholder="\u2022\u2022\u2022" maxlength="4"
              class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none focus:border-brand-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
          </div>
        </div>

      </div>
      <div class="flex justify-end gap-2">
        <button (click)="showAddCard.set(false); cardError = ''"
          class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700">
          Cancelar
        </button>
        <button (click)="saveCard()"
          class="rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
          Guardar tarjeta
        </button>
      </div>
    </div>

  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL TDC \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="showTdcModal()"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    (click)="closeTdcModal()">
    <div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
      (click)="$event.stopPropagation()">

      <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <span class="text-lg">\u{1F4B3}</span>
          <h2 class="text-base font-bold text-gray-800 dark:text-white/90">Recargar con TDC</h2>
        </div>
        <button (click)="closeTdcModal()"
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.06]">\u2715</button>
      </div>

      <div class="space-y-5 p-6">
        <!-- Tarjeta visual mini -->
        <div *ngIf="selectedCard" class="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3">
          <span class="text-xl">\u{1F4B3}</span>
          <div>
            <p class="font-mono text-sm font-bold text-white">{{ maskedCard(selectedCard!.numero) }}</p>
            <p class="text-[11px] text-white/50">{{ selectedCard!.titular }} \xB7 {{ selectedCard!.vencimiento }}</p>
          </div>
        </div>

        <!-- Error -->
        <div *ngIf="tdcError"
          class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10">
          \u26A0\uFE0F {{ tdcError }}
        </div>

        <!-- Monto -->
        <div>
          <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            \xBFCu\xE1nto quieres recargar? <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-gray-400">$</span>
            <input type="number" [(ngModel)]="tdcMonto" min="1" placeholder="0"
              class="h-14 w-full rounded-xl border-2 border-gray-300 bg-white pl-10 pr-4 text-2xl font-extrabold text-gray-800 outline-none
                     focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
            <span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">USD</span>
          </div>
          <p class="mt-1.5 text-xs text-gray-400">
            Recibir\xE1s <strong class="text-brand-600 dark:text-brand-400">{{ (tdcMonto ?? 0) | number:'1.2-2' }} nudos</strong>
            acreditados tras la verificaci\xF3n.
          </p>
        </div>

        <!-- Botones -->
        <div class="flex gap-3">
          <button (click)="submitTdcRecharge()"
            [disabled]="tdcSubmitting || !tdcMonto || tdcMonto <= 0"
            class="flex-1 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors">
            {{ tdcSubmitting ? 'Procesando...' : '\u2713 Recargar $' + (tdcMonto ?? 0) + ' USD' }}
          </button>
          <button (click)="closeTdcModal()" type="button"
            class="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="showModal()"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
    (click)="closeModal()">
    <div class="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
      (click)="$event.stopPropagation()">

      <!-- Header -->
      <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <span class="text-xl">{{ selectedAccount?.icon }}</span>
          <h2 class="text-base font-bold text-gray-800 dark:text-white/90">
            Recargar v\xEDa {{ selectedAccount?.label }}
          </h2>
        </div>
        <button (click)="closeModal()"
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/[0.06]">
          \u2715
        </button>
      </div>

      <div class="space-y-5 p-6">

        <!-- Error -->
        <div *ngIf="errorMsg"
          class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
          \u26A0\uFE0F {{ errorMsg }}
        </div>

        <!-- PASO 1: Datos de la cuenta seleccionada -->
        <div class="rounded-xl border border-brand-100 bg-brand-50 p-4 dark:border-brand-500/20 dark:bg-brand-500/10">
          <p class="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            1. Transfiere a esta cuenta de MARITIMO
          </p>
          <div class="grid grid-cols-2 gap-y-2.5 gap-x-4">
            <div *ngFor="let f of selectedAccount?.fields">
              <p class="text-[10px] text-brand-400 dark:text-brand-500">{{ f.label }}</p>
              <div class="flex items-center gap-2">
                <p class="text-sm font-bold text-brand-800 dark:text-brand-200">{{ f.value }}</p>
                <button (click)="copyToClipboard(f.value)"
                  class="rounded px-1.5 py-0.5 text-[10px] font-bold text-brand-500 hover:bg-brand-100 dark:hover:bg-brand-500/20 transition">
                  Copiar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- PASO 2: Cu\xE1ntos nudos quieres comprar -->
        <div>
          <p class="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            2. \xBFCu\xE1ntos nudos quieres comprar?
          </p>

          <div class="flex items-center gap-3">
            <!-- Input nudos -->
            <div class="relative flex-1">
              <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">\u2693</span>
              <input type="number" [(ngModel)]="nudos" min="1" placeholder="0"
                class="h-12 w-full rounded-xl border border-gray-300 bg-white pl-8 pr-3 text-lg font-bold text-gray-800 outline-none
                       focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">nudos</span>
            </div>

            <span class="text-2xl text-gray-300">=</span>

            <!-- Monto a transferir -->
            <div class="flex-1 rounded-xl border-2 p-3 text-center"
              [class.border-amber-300]="selectedAccount?.currency === 'BS'"
              [class.bg-amber-50]="selectedAccount?.currency === 'BS'"
              [class.dark:bg-amber-500/10]="selectedAccount?.currency === 'BS'"
              [class.border-green-300]="selectedAccount?.currency !== 'BS'"
              [class.bg-green-50]="selectedAccount?.currency !== 'BS'"
              [class.dark:bg-green-500/10]="selectedAccount?.currency !== 'BS'">
              <p class="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Debes transferir</p>
              <p class="mt-0.5 text-lg font-extrabold"
                [class.text-amber-700]="selectedAccount?.currency === 'BS'"
                [class.dark:text-amber-400]="selectedAccount?.currency === 'BS'"
                [class.text-green-700]="selectedAccount?.currency !== 'BS'"
                [class.dark:text-green-400]="selectedAccount?.currency !== 'BS'">
                {{ nudos ? montoLabel : '\u2014' }}
              </p>
            </div>
          </div>

          <!-- Explicaci\xF3n de la tasa -->
          <p class="mt-2 text-xs text-gray-400">
            <ng-container *ngIf="selectedAccount?.currency === 'BS'">
              \u{1F4B1} {{ nudos || 0 }} nudos \xD7 Bs {{ tasa | number:'1.2-2' }} = <strong>{{ montoLabel }}</strong>
            </ng-container>
            <ng-container *ngIf="selectedAccount?.currency !== 'BS'">
              \u{1F4B5} 1 nudo = $1 USD \u2014 transferir\xE1s <strong>{{ montoLabel }}</strong>
            </ng-container>
          </p>
        </div>

        <!-- PASO 3: Referencia y comprobante -->
        <div>
          <p class="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            3. Confirma tu transferencia
          </p>

          <!-- Referencia -->
          <div class="mb-3">
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
              N\xBA de referencia / confirmaci\xF3n
            </label>
            <input type="text" [(ngModel)]="referencia" placeholder="ej. 00123456789"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none
                     focus:border-brand-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
          </div>

          <!-- Comprobante -->
          <div>
            <label class="mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400">
              Comprobante de pago <span class="text-gray-400">(recomendado)</span>
            </label>
            <app-image-upload
              label="Adjuntar comprobante"
              (uploaded)="onProofUploaded($event)">
            </app-image-upload>
          </div>
        </div>

        <!-- Resumen antes de enviar -->
        <div *ngIf="nudos && nudos > 0"
          class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
          <p class="text-xs text-gray-400 mb-1">Resumen de recarga</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ nudos }} nudos via {{ selectedAccount?.label }}</span>
            <span class="text-sm font-bold text-gray-800 dark:text-white/90">{{ montoLabel }}</span>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex gap-3">
          <button (click)="submitReport()"
            [disabled]="submitting || !nudos || nudos <= 0"
            class="flex-1 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors">
            {{ submitting ? 'Enviando...' : '\u2713 Reportar recarga' }}
          </button>
          <button (click)="closeModal()" type="button"
            class="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50
                   dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.04]">
            Cancelar
          </button>
        </div>

      </div>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisMetodosPagoComponent, { className: "MisMetodosPagoComponent", filePath: "src/app/pages/mis-metodos-pago/mis-metodos-pago.component.ts", lineNumber: 92 });
})();

// src/app/pages/mis-cuentas-retiro/mis-cuentas-retiro.component.ts
function MisCuentasRetiroComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2713 Registrada");
    \u0275\u0275elementEnd();
  }
}
function MisCuentasRetiroComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2713 Guardada");
    \u0275\u0275elementEnd();
  }
}
function MisCuentasRetiroComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div")(2, "p", 11);
    \u0275\u0275text(3, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 11);
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "p", 11);
    \u0275\u0275text(13, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "p", 11);
    \u0275\u0275text(18, "Titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "p", 11);
    \u0275\u0275text(23, "C\xE9dula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 22);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cuentaVen.banco);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cuentaVen.tipoCuenta);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.maskedAccount(ctx_r0.cuentaVen.numeroCuenta));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cuentaVen.titular);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cuentaVen.cedula);
  }
}
function MisCuentasRetiroComponent_div_27_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r3);
  }
}
function MisCuentasRetiroComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div")(3, "label", 25);
    \u0275\u0275text(4, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_27_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cuentaVen.banco, $event) || (ctx_r0.cuentaVen.banco = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 27);
    \u0275\u0275text(7, "Seleccionar banco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MisCuentasRetiroComponent_div_27_option_8_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 25);
    \u0275\u0275text(11, "Tipo de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_27_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cuentaVen.tipoCuenta, $event) || (ctx_r0.cuentaVen.tipoCuenta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 29);
    \u0275\u0275text(14, "Corriente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 30);
    \u0275\u0275text(16, "Ahorro");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 25);
    \u0275\u0275text(19, "N\xFAmero de cuenta (20 d\xEDgitos)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_27_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cuentaVen.numeroCuenta, $event) || (ctx_r0.cuentaVen.numeroCuenta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 25);
    \u0275\u0275text(23, "Nombre del titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_27_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cuentaVen.titular, $event) || (ctx_r0.cuentaVen.titular = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 25);
    \u0275\u0275text(27, "C\xE9dula del titular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_27_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.cuentaVen.cedula, $event) || (ctx_r0.cuentaVen.cedula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 34)(30, "button", 35);
    \u0275\u0275listener("click", function MisCuentasRetiroComponent_div_27_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save("cuentaVen"));
    });
    \u0275\u0275text(31, " Guardar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cuentaVen.banco);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.bancos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cuentaVen.tipoCuenta);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cuentaVen.numeroCuenta);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cuentaVen.titular);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.cuentaVen.cedula);
  }
}
function MisCuentasRetiroComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2713 Registrado");
    \u0275\u0275elementEnd();
  }
}
function MisCuentasRetiroComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2713 Guardado");
    \u0275\u0275elementEnd();
  }
}
function MisCuentasRetiroComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div")(2, "p", 11);
    \u0275\u0275text(3, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 11);
    \u0275\u0275text(8, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "p", 11);
    \u0275\u0275text(13, "C\xE9dula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pagoMovil.banco);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pagoMovil.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pagoMovil.cedula);
  }
}
function MisCuentasRetiroComponent_div_43_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275property("value", b_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r5);
  }
}
function MisCuentasRetiroComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 38)(2, "div")(3, "label", 25);
    \u0275\u0275text(4, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_43_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pagoMovil.banco, $event) || (ctx_r0.pagoMovil.banco = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 27);
    \u0275\u0275text(7, "Seleccionar banco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MisCuentasRetiroComponent_div_43_option_8_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 25);
    \u0275\u0275text(11, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_43_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pagoMovil.telefono, $event) || (ctx_r0.pagoMovil.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 25);
    \u0275\u0275text(15, "C\xE9dula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function MisCuentasRetiroComponent_div_43_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pagoMovil.cedula, $event) || (ctx_r0.pagoMovil.cedula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 34)(18, "button", 35);
    \u0275\u0275listener("click", function MisCuentasRetiroComponent_div_43_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save("pagoMovil"));
    });
    \u0275\u0275text(19, " Guardar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pagoMovil.banco);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.bancos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pagoMovil.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pagoMovil.cedula);
  }
}
var STORAGE_KEY = "maritimo_cuentas_retiro";
var MisCuentasRetiroComponent = class _MisCuentasRetiroComponent {
  editing = signal(null, ...ngDevMode ? [{ debugName: "editing" }] : (
    /* istanbul ignore next */
    []
  ));
  saved = signal(null, ...ngDevMode ? [{ debugName: "saved" }] : (
    /* istanbul ignore next */
    []
  ));
  cuentaVen = { banco: "", tipoCuenta: "CORRIENTE", numeroCuenta: "", titular: "", cedula: "" };
  pagoMovil = { banco: "", telefono: "", cedula: "" };
  bancos = [
    "Banco de Venezuela",
    "Banesco",
    "Mercantil",
    "BNC",
    "Bicentenario",
    "BOD",
    "Bancamiga",
    "Banplus",
    "Sofitasa",
    "Banco Exterior",
    "Otro"
  ];
  ngOnInit() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.cuentaVen)
          this.cuentaVen = __spreadValues(__spreadValues({}, this.cuentaVen), d.cuentaVen);
        if (d.pagoMovil)
          this.pagoMovil = __spreadValues(__spreadValues({}, this.pagoMovil), d.pagoMovil);
      }
    } catch (e) {
    }
  }
  toggleEdit(section) {
    this.editing.set(this.editing() === section ? null : section);
    this.saved.set(null);
  }
  save(section) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const current = raw ? JSON.parse(raw) : {};
      current[section] = this[section];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
    }
    this.editing.set(null);
    this.saved.set(section);
    setTimeout(() => this.saved.set(null), 3e3);
  }
  isComplete(section) {
    if (section === "cuentaVen")
      return !!(this.cuentaVen.banco && this.cuentaVen.numeroCuenta && this.cuentaVen.titular && this.cuentaVen.cedula);
    if (section === "pagoMovil")
      return !!(this.pagoMovil.banco && this.pagoMovil.telefono && this.pagoMovil.cedula);
    return false;
  }
  maskedAccount(num) {
    if (!num || num.length < 4)
      return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return "\u2022".repeat(Math.max(0, num.length - 4)) + num.slice(-4);
  }
  static \u0275fac = function MisCuentasRetiroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisCuentasRetiroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisCuentasRetiroComponent, selectors: [["app-mis-cuentas-retiro"]], decls: 44, vars: 10, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-4", "dark:border-amber-500/20", "dark:bg-amber-500/10"], [1, "text-sm", "text-amber-700", "dark:text-amber-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-gray-100", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "size-10", "items-center", "justify-center", "rounded-xl", "bg-amber-100", "dark:bg-amber-500/10", "text-xl"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-400"], ["class", "ml-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-700", 4, "ngIf"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "click"], ["class", "grid grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-5", 4, "ngIf"], ["class", "px-5 py-4 space-y-4", 4, "ngIf"], [1, "inline-flex", "size-10", "items-center", "justify-center", "rounded-xl", "bg-green-100", "dark:bg-green-500/10", "text-xl"], ["class", "grid grid-cols-3 gap-4 px-5 py-4", 4, "ngIf"], [1, "ml-2", "rounded-full", "bg-green-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-green-700", "dark:bg-green-500/10", "dark:text-green-400"], [1, "ml-2", "rounded-full", "bg-brand-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-brand-700"], [1, "grid", "grid-cols-2", "gap-4", "px-5", "py-4", "sm:grid-cols-5"], [1, "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "space-y-4"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "mb-1.5", "block", "text-xs", "font-medium", "text-gray-700", "dark:text-gray-400"], [1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "CORRIENTE"], ["value", "AHORRO"], ["type", "text", "placeholder", "01020000000000000000", "maxlength", "20", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "font-mono", "text-sm", "text-gray-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nombre Apellido", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "V-00000000", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end"], [1, "rounded-xl", "bg-brand-500", "px-5", "py-2", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition", 3, "click"], [3, "value"], [1, "grid", "grid-cols-3", "gap-4", "px-5", "py-4"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-3"], ["type", "text", "placeholder", "0412-0000000", 1, "h-10", "w-full", "rounded-lg", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "text-gray-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white/90", 3, "ngModelChange", "ngModel"]], template: function MisCuentasRetiroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Datos bancarios de retiro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Registra tus cuentas para recibir los pagos de tus reservas en Bol\xEDvares. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "p", 5);
      \u0275\u0275text(8, " \u26A0\uFE0F Los retiros se procesan manualmente por el equipo de MARITIMO dentro de las ");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10, "72 horas h\xE1biles");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " siguientes a la solicitud. Aseg\xFArate de que los datos sean correctos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "span", 9);
      \u0275\u0275text(16, "\u{1F3E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h3", 10);
      \u0275\u0275text(19, "Cuenta bancaria Venezuela");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 11);
      \u0275\u0275text(21, "Retiros en Bol\xEDvares (Bs)");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, MisCuentasRetiroComponent_span_22_Template, 2, 0, "span", 12)(23, MisCuentasRetiroComponent_span_23_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function MisCuentasRetiroComponent_Template_button_click_24_listener() {
        return ctx.toggleEdit("cuentaVen");
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, MisCuentasRetiroComponent_div_26_Template, 26, 5, "div", 15)(27, MisCuentasRetiroComponent_div_27_Template, 32, 6, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 6)(29, "div", 7)(30, "div", 8)(31, "span", 17);
      \u0275\u0275text(32, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "h3", 10);
      \u0275\u0275text(35, "Pago M\xF3vil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 11);
      \u0275\u0275text(37, "Retiros r\xE1pidos en Bs");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, MisCuentasRetiroComponent_span_38_Template, 2, 0, "span", 12)(39, MisCuentasRetiroComponent_span_39_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 14);
      \u0275\u0275listener("click", function MisCuentasRetiroComponent_Template_button_click_40_listener() {
        return ctx.toggleEdit("pagoMovil");
      });
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, MisCuentasRetiroComponent_div_42_Template, 16, 3, "div", 18)(43, MisCuentasRetiroComponent_div_43_Template, 20, 4, "div", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.isComplete("cuentaVen"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved() === "cuentaVen");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editing() === "cuentaVen" ? "Cancelar" : ctx.isComplete("cuentaVen") ? "Editar" : "Agregar", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing() !== "cuentaVen" && ctx.isComplete("cuentaVen"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing() === "cuentaVen");
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isComplete("pagoMovil"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved() === "pagoMovil");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editing() === "pagoMovil" ? "Cancelar" : ctx.isComplete("pagoMovil") ? "Editar" : "Agregar", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing() !== "pagoMovil" && ctx.isComplete("pagoMovil"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing() === "pagoMovil");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisCuentasRetiroComponent, [{
    type: Component,
    args: [{ selector: "app-mis-cuentas-retiro", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Datos bancarios de retiro</h1>
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      Registra tus cuentas para recibir los pagos de tus reservas en Bol\xEDvares.
    </p>
  </div>

  <!-- Nota -->
  <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
    <p class="text-sm text-amber-700 dark:text-amber-400">
      \u26A0\uFE0F Los retiros se procesan manualmente por el equipo de MARITIMO dentro de las <strong>72 horas h\xE1biles</strong> siguientes a la solicitud. Aseg\xFArate de que los datos sean correctos.
    </p>
  </div>

  <!-- \u2500\u2500 Cuenta Venezuela (Bs) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex items-center gap-3">
        <span class="inline-flex size-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-500/10 text-xl">\u{1F3E6}</span>
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Cuenta bancaria Venezuela</h3>
          <p class="text-xs text-gray-400">Retiros en Bol\xEDvares (Bs)</p>
        </div>
        <span *ngIf="isComplete('cuentaVen')" class="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">\u2713 Registrada</span>
        <span *ngIf="saved() === 'cuentaVen'" class="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-700">\u2713 Guardada</span>
      </div>
      <button (click)="toggleEdit('cuentaVen')"
        class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
        {{ editing() === 'cuentaVen' ? 'Cancelar' : (isComplete('cuentaVen') ? 'Editar' : 'Agregar') }}
      </button>
    </div>

    <!-- Vista -->
    <div *ngIf="editing() !== 'cuentaVen' && isComplete('cuentaVen')" class="grid grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-5">
      <div><p class="text-xs text-gray-400">Banco</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ cuentaVen.banco }}</p></div>
      <div><p class="text-xs text-gray-400">Tipo</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ cuentaVen.tipoCuenta }}</p></div>
      <div><p class="text-xs text-gray-400">N\xFAmero</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ maskedAccount(cuentaVen.numeroCuenta) }}</p></div>
      <div><p class="text-xs text-gray-400">Titular</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ cuentaVen.titular }}</p></div>
      <div><p class="text-xs text-gray-400">C\xE9dula</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ cuentaVen.cedula }}</p></div>
    </div>

    <!-- Formulario -->
    <div *ngIf="editing() === 'cuentaVen'" class="px-5 py-4 space-y-4">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">Banco</label>
          <select [(ngModel)]="cuentaVen.banco"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
            <option value="">Seleccionar banco</option>
            <option *ngFor="let b of bancos" [value]="b">{{ b }}</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">Tipo de cuenta</label>
          <select [(ngModel)]="cuentaVen.tipoCuenta"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
            <option value="CORRIENTE">Corriente</option>
            <option value="AHORRO">Ahorro</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">N\xFAmero de cuenta (20 d\xEDgitos)</label>
          <input type="text" [(ngModel)]="cuentaVen.numeroCuenta" placeholder="01020000000000000000" maxlength="20"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 font-mono text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">Nombre del titular</label>
          <input type="text" [(ngModel)]="cuentaVen.titular" placeholder="Nombre Apellido"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">C\xE9dula del titular</label>
          <input type="text" [(ngModel)]="cuentaVen.cedula" placeholder="V-00000000"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        </div>
      </div>
      <div class="flex justify-end">
        <button (click)="save('cuentaVen')"
          class="rounded-xl bg-brand-500 px-5 py-2 text-sm font-bold text-white hover:bg-brand-600 transition">
          Guardar
        </button>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Pago M\xF3vil \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex items-center gap-3">
        <span class="inline-flex size-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-500/10 text-xl">\u{1F4F1}</span>
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Pago M\xF3vil</h3>
          <p class="text-xs text-gray-400">Retiros r\xE1pidos en Bs</p>
        </div>
        <span *ngIf="isComplete('pagoMovil')" class="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">\u2713 Registrado</span>
        <span *ngIf="saved() === 'pagoMovil'" class="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-700">\u2713 Guardado</span>
      </div>
      <button (click)="toggleEdit('pagoMovil')"
        class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
        {{ editing() === 'pagoMovil' ? 'Cancelar' : (isComplete('pagoMovil') ? 'Editar' : 'Agregar') }}
      </button>
    </div>

    <!-- Vista -->
    <div *ngIf="editing() !== 'pagoMovil' && isComplete('pagoMovil')" class="grid grid-cols-3 gap-4 px-5 py-4">
      <div><p class="text-xs text-gray-400">Banco</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ pagoMovil.banco }}</p></div>
      <div><p class="text-xs text-gray-400">Tel\xE9fono</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ pagoMovil.telefono }}</p></div>
      <div><p class="text-xs text-gray-400">C\xE9dula</p><p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ pagoMovil.cedula }}</p></div>
    </div>

    <!-- Formulario -->
    <div *ngIf="editing() === 'pagoMovil'" class="px-5 py-4 space-y-4">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">Banco</label>
          <select [(ngModel)]="pagoMovil.banco"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
            <option value="">Seleccionar banco</option>
            <option *ngFor="let b of bancos" [value]="b">{{ b }}</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">Tel\xE9fono</label>
          <input type="text" [(ngModel)]="pagoMovil.telefono" placeholder="0412-0000000"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">C\xE9dula</label>
          <input type="text" [(ngModel)]="pagoMovil.cedula" placeholder="V-00000000"
            class="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        </div>
      </div>
      <div class="flex justify-end">
        <button (click)="save('pagoMovil')"
          class="rounded-xl bg-brand-500 px-5 py-2 text-sm font-bold text-white hover:bg-brand-600 transition">
          Guardar
        </button>
      </div>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisCuentasRetiroComponent, { className: "MisCuentasRetiroComponent", filePath: "src/app/pages/mis-cuentas-retiro/mis-cuentas-retiro.component.ts", lineNumber: 27 });
})();

// src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.ts
var _c012 = (a0) => ["/usuarios/editar", a0];
function ListaUsuariosComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ListaUsuariosComponent_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiarBusqueda());
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function ListaUsuariosComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Cargando usuarios... ");
    \u0275\u0275elementEnd();
  }
}
function ListaUsuariosComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ListaUsuariosComponent_div_32_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 36)(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 36)(15, "span", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 36)(18, "div", 43)(19, "a", 44);
    \u0275\u0275text(20, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 45);
    \u0275\u0275listener("click", function ListaUsuariosComponent_div_32_tr_22_Template_button_click_21_listener() {
      const usuario_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminarUsuario(usuario_r5));
    });
    \u0275\u0275text(22, " Borrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const usuario_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((usuario_r5.firstName == null ? null : usuario_r5.firstName.charAt(0)) || (usuario_r5.lastName == null ? null : usuario_r5.lastName.charAt(0)) || usuario_r5.email.charAt(0) || "?").toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getNombreCompleto(usuario_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ID: ", usuario_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", usuario_r5.phone || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", usuario_r5.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getRoleClasses(usuario_r5.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleLabel(usuario_r5.role), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c012, usuario_r5.id));
  }
}
function ListaUsuariosComponent_div_32_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, " No se encontraron usuarios. ");
    \u0275\u0275elementEnd()();
  }
}
function ListaUsuariosComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "h3", 24);
    \u0275\u0275text(4, " Lista de usuarios ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 26)(8, "table", 27)(9, "thead")(10, "tr", 28)(11, "th", 29);
    \u0275\u0275text(12, " Usuario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 29);
    \u0275\u0275text(14, " Tel\xE9fono ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 29);
    \u0275\u0275text(16, " Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 29);
    \u0275\u0275text(18, " Rol ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 30);
    \u0275\u0275text(20, " Acciones ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, ListaUsuariosComponent_div_32_tr_22_Template, 23, 10, "tr", 31)(23, ListaUsuariosComponent_div_32_tr_23_Template, 3, 0, "tr", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 33)(25, "p", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 34)(28, "button", 35);
    \u0275\u0275listener("click", function ListaUsuariosComponent_div_32_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page - 1));
    });
    \u0275\u0275text(29, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 35);
    \u0275\u0275listener("click", function ListaUsuariosComponent_div_32_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiarPagina(ctx_r1.page + 1));
    });
    \u0275\u0275text(31, " Siguiente ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Mostrando ", ctx_r1.rangoInicio, " - ", ctx_r1.rangoFin, " de ", ctx_r1.total, " registros ");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.usuariosPaginados)("ngForTrackBy", ctx_r1.trackByUsuario);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.usuariosPaginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r1.page, " de ", ctx_r1.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page === ctx_r1.totalPages || ctx_r1.total === 0);
  }
}
var ListaUsuariosComponent = class _ListaUsuariosComponent {
  usuariosService = inject(UsuariosService);
  loading = false;
  errorMessage = "";
  usuarios = [];
  usuariosFiltrados = [];
  usuariosPaginados = [];
  search = "";
  filtroRol = "";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.loading = true;
    this.errorMessage = "";
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (response) => {
        this.usuarios = response ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la lista de usuarios.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const termino = this.search.trim().toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter((u) => {
      const nombreCompleto = `${u.firstName} ${u.lastName}`.toLowerCase();
      const busqueda = nombreCompleto.includes(termino) || u.email.toLowerCase().includes(termino) || (u.phone ?? "").toLowerCase().includes(termino) || u.role.toLowerCase().includes(termino);
      const rol = !this.filtroRol || u.role === this.filtroRol;
      return busqueda && rol;
    });
    this.total = this.usuariosFiltrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages)
      this.page = this.totalPages;
    if (this.page < 1)
      this.page = 1;
    this.actualizarPaginacion();
  }
  actualizarPaginacion() {
    const start = (this.page - 1) * this.limit;
    this.usuariosPaginados = this.usuariosFiltrados.slice(start, start + this.limit);
  }
  onSearchChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  onFilterChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  cambiarPagina(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.page = page;
    this.actualizarPaginacion();
  }
  eliminarUsuario(usuario) {
    if (!confirm(`\xBFEliminar a ${this.getNombreCompleto(usuario)}?`))
      return;
    this.usuariosService.eliminarUsuario(usuario.id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((item) => item.id !== usuario.id);
        this.aplicarFiltros();
      },
      error: () => alert("No se pudo eliminar el usuario.")
    });
  }
  limpiarBusqueda() {
    this.search = "";
    this.filtroRol = "";
    this.page = 1;
    this.aplicarFiltros();
  }
  getNombreCompleto(u) {
    return `${u.firstName} ${u.lastName}`.trim() || u.email;
  }
  getRoleLabel(role) {
    const map = {
      MASTER: "Master",
      ADMINISTRADOR: "Administrador",
      EMPLEADO: "Empleado",
      PROVEEDOR: "Proveedor",
      CLIENTE: "Cliente"
    };
    return map[role] ?? role;
  }
  getRoleClasses(role) {
    const map = {
      MASTER: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      ADMINISTRADOR: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
      EMPLEADO: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      PROVEEDOR: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
      CLIENTE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
    };
    return map[role] ?? "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400";
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackByUsuario(_, u) {
    return u.id;
  }
  static \u0275fac = function ListaUsuariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaUsuariosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaUsuariosComponent, selectors: [["app-lista-usuarios"]], decls: 33, vars: 10, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/usuarios/crear", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600"], [1, "flex", "flex-col", "gap-4", "lg:flex-row", "lg:items-center"], [1, "w-full", "lg:max-w-md"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "relative"], ["type", "text", "placeholder", "Buscar por nombre, apellido, email, tel\xE9fono o rol", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "pr-10", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-red-500", 3, "click", 4, "ngIf"], [1, "lg:ml-auto"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-sm", "text-gray-400", "hover:text-red-500", 3, "click"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4", "border-t", "border-gray-100", "px-5", "py-4", "md:flex-row", "md:items-center", "md:justify-between", "dark:border-gray-800"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-brand-100", "text-sm", "font-semibold", "text-brand-700", "dark:bg-brand-500/10", "dark:text-brand-400"], [1, "font-medium", "text-gray-800", "dark:text-white/90"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]", 3, "routerLink"], ["type", "button", 1, "rounded-lg", "border", "border-red-300", "px-3", "py-2", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "dark:border-red-800", "dark:text-red-400", "dark:hover:bg-red-500/10", 3, "click"], ["colspan", "5", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500", "dark:text-gray-400"]], template: function ListaUsuariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Usuarios ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Administra los usuarios registrados en el sistema. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Crear usuario ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 1)(11, "div", 6)(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14, " Buscar usuario ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaUsuariosComponent_Template_input_ngModelChange_16_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, ListaUsuariosComponent_button_17_Template, 2, 0, "button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12)(19, "label", 8);
      \u0275\u0275text(20, " Registros por p\xE1gina ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ListaUsuariosComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.limit, $event) || (ctx.limit = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaUsuariosComponent_Template_select_ngModelChange_21_listener() {
        ctx.page = 1;
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementStart(22, "option", 14);
      \u0275\u0275text(23, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 14);
      \u0275\u0275text(27, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 14);
      \u0275\u0275text(29, "50");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(30, ListaUsuariosComponent_div_30_Template, 2, 0, "div", 15)(31, ListaUsuariosComponent_div_31_Template, 2, 1, "div", 16)(32, ListaUsuariosComponent_div_32_Template, 32, 10, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.limit);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", 5);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", 50);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaUsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-lista-usuarios", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <!-- Header -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Usuarios
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Administra los usuarios registrados en el sistema.
        </p>
      </div>

      <a
        routerLink="/usuarios/crear"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600"
      >
        Crear usuario
      </a>
    </div>
  </div>

  <!-- Filtros -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
      <div class="w-full lg:max-w-md">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Buscar usuario
        </label>
        <div class="relative">
          <input
            type="text"
            [(ngModel)]="search"
            (ngModelChange)="onSearchChange()"
            placeholder="Buscar por nombre, apellido, email, tel\xE9fono o rol"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
          />

          <button
            *ngIf="search"
            type="button"
            (click)="limpiarBusqueda()"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-red-500"
          >
            \u2715
          </button>
        </div>
      </div>

      <div class="lg:ml-auto">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Registros por p\xE1gina
        </label>
        <select
          [(ngModel)]="limit"
          (ngModelChange)="page = 1; aplicarFiltros()"
          class="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option [ngValue]="5">5</option>
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="50">50</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div
    *ngIf="loading"
    class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
  >
    Cargando usuarios...
  </div>

  <!-- Error -->
  <div
    *ngIf="!loading && errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
  >
    {{ errorMessage }}
  </div>

  <!-- Tabla -->
  <div
    *ngIf="!loading && !errorMessage"
    class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <div
        class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
      >
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">
          Lista de usuarios
        </h3>

        <span class="text-sm text-gray-500 dark:text-gray-400">
          Mostrando {{ rangoInicio }} - {{ rangoFin }} de {{ total }} registros
        </span>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Usuario
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Tel\xE9fono
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Email
            </th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">
              Rol
            </th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            *ngFor="let usuario of usuariosPaginados; trackBy: trackByUsuario"
            class="border-b border-gray-100 dark:border-gray-800"
          >
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                >
                  {{
                    (
                      usuario.firstName?.charAt(0) ||
                      usuario.lastName?.charAt(0) ||
                      usuario.email.charAt(0) ||
                      "?"
                    ).toUpperCase()
                  }}
                </div>

                <div>
                  <div class="font-medium text-gray-800 dark:text-white/90">
                    {{ getNombreCompleto(usuario) }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    ID: {{ usuario.id }}
                  </div>
                </div>
              </div>
            </td>

            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {{ usuario.phone || "-" }}
            </td>

            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
              {{ usuario.email }}
            </td>

            <td class="px-5 py-4">
              <span
                class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium"
                [ngClass]="getRoleClasses(usuario.role)"
              >
                {{ getRoleLabel(usuario.role) }}
              </span>
            </td>

            <td class="px-5 py-4">
              <div class="flex items-center justify-center gap-2">
                <a
                  [routerLink]="['/usuarios/editar', usuario.id]"
                  class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                >
                  Editar
                </a>

                <button
                  type="button"
                  (click)="eliminarUsuario(usuario)"
                  class="rounded-lg border border-red-300 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-500/10"
                >
                  Borrar
                </button>
              </div>
            </td>
          </tr>

          <tr *ngIf="usuariosPaginados.length === 0">
            <td
              colspan="5"
              class="px-5 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
            >
              No se encontraron usuarios.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginaci\xF3n -->
    <div
      class="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 md:flex-row md:items-center md:justify-between dark:border-gray-800"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        P\xE1gina {{ page }} de {{ totalPages }}
      </p>

      <div class="flex items-center gap-2">
        <button
          type="button"
          (click)="cambiarPagina(page - 1)"
          [disabled]="page === 1"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300"
        >
          Anterior
        </button>

        <button
          type="button"
          (click)="cambiarPagina(page + 1)"
          [disabled]="page === totalPages || total === 0"
          class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaUsuariosComponent, { className: "ListaUsuariosComponent", filePath: "src/app/pages/usuarios/lista-usuarios/lista-usuarios.component.ts", lineNumber: 15 });
})();

// src/app/pages/usuarios/models/usuarios.model.ts
var UserRole2;
(function(UserRole3) {
  UserRole3["MASTER"] = "MASTER";
  UserRole3["ADMINISTRADOR"] = "ADMINISTRADOR";
  UserRole3["EMPLEADO"] = "EMPLEADO";
  UserRole3["PROVEEDOR"] = "PROVEEDOR";
  UserRole3["CLIENTE"] = "CLIENTE";
})(UserRole2 || (UserRole2 = {}));

// src/app/pages/usuarios/crear-usuarios/crear-usuarios.component.ts
function CrearUsuariosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CrearUsuariosComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " El nombre es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " El apellido es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r2 = ctx.$implicit;
    \u0275\u0275property("value", rol_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rol_r2.label, " ");
  }
}
function CrearUsuariosComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " El rol es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " El correo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " El formato del correo no es v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " La contrase\xF1a es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 6 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " Debes confirmar la contrase\xF1a. ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuariosComponent_p_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden. ");
    \u0275\u0275elementEnd();
  }
}
var CrearUsuariosComponent = class _CrearUsuariosComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  usuariosService = inject(UsuariosService);
  loading = false;
  errorMessage = "";
  roles = [
    { label: "Cliente", value: UserRole2.CLIENTE },
    { label: "Proveedor", value: UserRole2.PROVEEDOR },
    { label: "Empleado", value: UserRole2.EMPLEADO },
    { label: "Administrador", value: UserRole2.ADMINISTRADOR },
    { label: "Master", value: UserRole2.MASTER }
  ];
  form = this.fb.group({
    firstName: ["", [Validators.required, Validators.maxLength(100)]],
    lastName: ["", [Validators.required, Validators.maxLength(100)]],
    phone: ["", [Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]],
    role: [UserRole2.CLIENTE, [Validators.required]]
  }, { validators: this.passwordsMatchValidator });
  get f() {
    return this.form.controls;
  }
  crearUsuario() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const payload = {
      firstName: this.f.firstName.value?.trim() ?? "",
      lastName: this.f.lastName.value?.trim() ?? "",
      phone: this.f.phone.value?.trim() || null,
      email: this.f.email.value?.trim() ?? "",
      password: this.f.password.value ?? "",
      confirmPassword: this.f.confirmPassword.value ?? "",
      role: this.f.role.value ?? UserRole2.CLIENTE
    };
    this.usuariosService.crearUsuario(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/usuarios"]);
      },
      error: (error) => {
        const msg = error?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear el usuario.";
        this.loading = false;
      }
    });
  }
  passwordsMatchValidator(control) {
    const password = control.get("password")?.value?.trim();
    const confirmPassword = control.get("confirmPassword")?.value?.trim();
    if (!password && !confirmPassword)
      return null;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
  static \u0275fac = function CrearUsuariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearUsuariosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearUsuariosComponent, selectors: [["app-crear-usuarios"]], decls: 56, vars: 14, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/usuarios", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "firstName", "placeholder", "Ej: Felix", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Ej: Cicilia", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "phone", "placeholder", "Ej: 04141234567", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "role", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "value", 4, "ngFor", "ngForOf"], [1, "md:col-span-2"], ["type", "email", "formControlName", "email", "placeholder", "Ej: usuario@maritimo.com", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Repite la contrase\xF1a", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "mt-6", "flex", "flex-col", "gap-3", "sm:flex-row", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"], [3, "value"]], template: function CrearUsuariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Crear usuario ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Registra un nuevo usuario en el sistema. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Volver ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, CrearUsuariosComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function CrearUsuariosComponent_Template_form_ngSubmit_11_listener() {
        return ctx.crearUsuario();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
      \u0275\u0275text(15, " Nombre ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 10);
      \u0275\u0275template(17, CrearUsuariosComponent_p_17_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "label", 9);
      \u0275\u0275text(20, " Apellido ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275template(22, CrearUsuariosComponent_p_22_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 9);
      \u0275\u0275text(25, " Tel\xE9fono ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 9);
      \u0275\u0275text(29, " Rol ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 14);
      \u0275\u0275template(31, CrearUsuariosComponent_option_31_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, CrearUsuariosComponent_p_32_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 16)(34, "label", 9);
      \u0275\u0275text(35, " Correo electr\xF3nico ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 17);
      \u0275\u0275template(37, CrearUsuariosComponent_p_37_Template, 2, 0, "p", 11)(38, CrearUsuariosComponent_p_38_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "label", 9);
      \u0275\u0275text(41, " Contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 18);
      \u0275\u0275template(43, CrearUsuariosComponent_p_43_Template, 2, 0, "p", 11)(44, CrearUsuariosComponent_p_44_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div")(46, "label", 9);
      \u0275\u0275text(47, " Confirmar contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 19);
      \u0275\u0275template(49, CrearUsuariosComponent_p_49_Template, 2, 0, "p", 11)(50, CrearUsuariosComponent_p_50_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 20)(52, "a", 5);
      \u0275\u0275text(53, " Cancelar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 21);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.f.firstName.touched && ctx.f.firstName.invalid);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.lastName.touched && ctx.f.lastName.invalid);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.role.touched && ctx.f.role.invalid);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.email.touched && ctx.f.email.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.email.touched && ctx.f.email.hasError("email"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.password.touched && ctx.f.password.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.password.touched && ctx.f.password.hasError("minlength"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.confirmPassword.touched && ctx.f.confirmPassword.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.touched && ctx.form.hasError("passwordsMismatch"));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar usuario", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearUsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-crear-usuarios", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Crear usuario
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Registra un nuevo usuario en el sistema.
        </p>
      </div>

      <a
        routerLink="/usuarios"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
      >
        Volver
      </a>
    </div>
  </div>

  <div
    *ngIf="errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
  >
    {{ errorMessage }}
  </div>

  <form
    [formGroup]="form"
    (ngSubmit)="crearUsuario()"
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nombre
        </label>
        <input
          type="text"
          formControlName="firstName"
          placeholder="Ej: Felix"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.firstName.touched && f.firstName.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El nombre es obligatorio.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Apellido
        </label>
        <input
          type="text"
          formControlName="lastName"
          placeholder="Ej: Cicilia"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.lastName.touched && f.lastName.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El apellido es obligatorio.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Tel\xE9fono
        </label>
        <input
          type="text"
          formControlName="phone"
          placeholder="Ej: 04141234567"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Rol
        </label>
        <select
          formControlName="role"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option *ngFor="let rol of roles" [value]="rol.value">
            {{ rol.label }}
          </option>
        </select>
        <p
          *ngIf="f.role.touched && f.role.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El rol es obligatorio.
        </p>
      </div>

      <div class="md:col-span-2">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Correo electr\xF3nico
        </label>
        <input
          type="email"
          formControlName="email"
          placeholder="Ej: usuario@maritimo.com"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.email.touched && f.email.hasError('required')"
          class="mt-1 text-xs text-red-500"
        >
          El correo es obligatorio.
        </p>
        <p
          *ngIf="f.email.touched && f.email.hasError('email')"
          class="mt-1 text-xs text-red-500"
        >
          El formato del correo no es v\xE1lido.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Contrase\xF1a
        </label>
        <input
          type="password"
          formControlName="password"
          placeholder="M\xEDnimo 6 caracteres"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.password.touched && f.password.hasError('required')"
          class="mt-1 text-xs text-red-500"
        >
          La contrase\xF1a es obligatoria.
        </p>
        <p
          *ngIf="f.password.touched && f.password.hasError('minlength')"
          class="mt-1 text-xs text-red-500"
        >
          La contrase\xF1a debe tener al menos 6 caracteres.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Confirmar contrase\xF1a
        </label>
        <input
          type="password"
          formControlName="confirmPassword"
          placeholder="Repite la contrase\xF1a"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.confirmPassword.touched && f.confirmPassword.hasError('required')"
          class="mt-1 text-xs text-red-500"
        >
          Debes confirmar la contrase\xF1a.
        </p>
        <p
          *ngIf="form.touched && form.hasError('passwordsMismatch')"
          class="mt-1 text-xs text-red-500"
        >
          Las contrase\xF1as no coinciden.
        </p>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
      <a
        routerLink="/usuarios"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
      >
        Cancelar
      </a>

      <button
        type="submit"
        [disabled]="loading"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ loading ? "Guardando..." : "Guardar usuario" }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearUsuariosComponent, { className: "CrearUsuariosComponent", filePath: "src/app/pages/usuarios/crear-usuarios/crear-usuarios.component.ts", lineNumber: 21 });
})();

// src/app/pages/usuarios/editar-usuarios/editar-usuarios.component.ts
function EditarUsuariosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function EditarUsuariosComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " Cargando informaci\xF3n del usuario... ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " El nombre es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " El apellido es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r3 = ctx.$implicit;
    \u0275\u0275property("value", rol_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rol_r3.label, " ");
  }
}
function EditarUsuariosComponent_form_12_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " El rol es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " El correo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " El formato del correo no es v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " La contrase\xF1a debe tener al menos 6 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden. ");
    \u0275\u0275elementEnd();
  }
}
function EditarUsuariosComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarUsuariosComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editarUsuario());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4, " Nombre ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 14);
    \u0275\u0275template(6, EditarUsuariosComponent_form_12_p_6_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 13);
    \u0275\u0275text(9, " Apellido ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 16);
    \u0275\u0275template(11, EditarUsuariosComponent_form_12_p_11_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "label", 13);
    \u0275\u0275text(14, " Tel\xE9fono ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 13);
    \u0275\u0275text(18, " Rol ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 18);
    \u0275\u0275template(20, EditarUsuariosComponent_form_12_option_20_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EditarUsuariosComponent_form_12_p_21_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 20)(23, "label", 13);
    \u0275\u0275text(24, " Correo electr\xF3nico ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 21);
    \u0275\u0275template(26, EditarUsuariosComponent_form_12_p_26_Template, 2, 0, "p", 15)(27, EditarUsuariosComponent_form_12_p_27_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 22);
    \u0275\u0275element(29, "input", 23);
    \u0275\u0275elementStart(30, "label", 24);
    \u0275\u0275text(31, " Usuario activo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 13);
    \u0275\u0275text(34, " Nueva contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 25);
    \u0275\u0275template(36, EditarUsuariosComponent_form_12_p_36_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "label", 13);
    \u0275\u0275text(39, " Confirmar nueva contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 26);
    \u0275\u0275template(41, EditarUsuariosComponent_form_12_p_41_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 27)(43, "a", 5);
    \u0275\u0275text(44, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 28);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.f.firstName.touched && ctx_r0.f.firstName.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.f.lastName.touched && ctx_r0.f.lastName.invalid);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.role.touched && ctx_r0.f.role.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.f.email.touched && ctx_r0.f.email.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.email.touched && ctx_r0.f.email.hasError("email"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.f.password.touched && ctx_r0.f.password.hasError("minlength"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.form.touched && ctx_r0.form.hasError("passwordsMismatch"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Actualizar usuario", " ");
  }
}
var EditarUsuariosComponent = class _EditarUsuariosComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  loading = false;
  loadingUser = false;
  errorMessage = "";
  usuarioId = 0;
  roles = [
    { label: "Cliente", value: UserRole2.CLIENTE },
    { label: "Proveedor", value: UserRole2.PROVEEDOR },
    { label: "Empleado", value: UserRole2.EMPLEADO },
    { label: "Administrador", value: UserRole2.ADMINISTRADOR },
    { label: "Master", value: UserRole2.MASTER }
  ];
  form = this.fb.group({
    firstName: ["", [Validators.required, Validators.maxLength(100)]],
    lastName: ["", [Validators.required, Validators.maxLength(100)]],
    phone: ["", [Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.minLength(6)]],
    confirmPassword: [""],
    role: [UserRole2.CLIENTE, [Validators.required]],
    isActive: [true]
  }, { validators: this.passwordsMatchValidator });
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.errorMessage = "ID inv\xE1lido.";
      return;
    }
    this.usuarioId = id;
    this.cargarUsuario();
  }
  cargarUsuario() {
    this.loadingUser = true;
    this.usuariosService.obtenerUsuarioPorId(this.usuarioId).subscribe({
      next: (u) => {
        this.form.patchValue({
          firstName: u.firstName ?? "",
          lastName: u.lastName ?? "",
          phone: u.phone ?? "",
          email: u.email ?? "",
          role: u.role ?? UserRole2.CLIENTE,
          isActive: u.isActive ?? true,
          password: "",
          confirmPassword: ""
        });
        this.loadingUser = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el usuario.";
        this.loadingUser = false;
      }
    });
  }
  editarUsuario() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const payload = {
      firstName: this.f.firstName.value?.trim(),
      lastName: this.f.lastName.value?.trim(),
      phone: this.f.phone.value?.trim() || null,
      email: this.f.email.value?.trim(),
      role: this.f.role.value ?? UserRole2.CLIENTE,
      isActive: this.f.isActive.value ?? true
    };
    const password = this.f.password.value?.trim() ?? "";
    if (password) {
      payload.password = password;
      payload.confirmPassword = this.f.confirmPassword.value?.trim();
    }
    this.usuariosService.editarUsuario(this.usuarioId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/usuarios"]);
      },
      error: (error) => {
        const msg = error?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar el usuario.";
        this.loading = false;
      }
    });
  }
  passwordsMatchValidator(control) {
    const password = control.get("password")?.value?.trim();
    const confirmPassword = control.get("confirmPassword")?.value?.trim();
    if (!password && !confirmPassword)
      return null;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
  static \u0275fac = function EditarUsuariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarUsuariosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarUsuariosComponent, selectors: [["app-editar-usuarios"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/usuarios", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "firstName", "placeholder", "Ej: Felix", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Ej: Cicilia", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "phone", "placeholder", "Ej: 04141234567", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "role", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "value", 4, "ngFor", "ngForOf"], [1, "md:col-span-2"], ["type", "email", "formControlName", "email", "placeholder", "Ej: usuario@maritimo.com", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "items-center", "gap-3", "md:col-span-2"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500", "focus:ring-brand-500"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["type", "password", "formControlName", "password", "placeholder", "D\xE9jala vac\xEDa si no cambiar\xE1", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirma la nueva contrase\xF1a", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "mt-6", "flex", "flex-col", "gap-3", "sm:flex-row", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], [1, "mt-1", "text-xs", "text-red-500"], [3, "value"]], template: function EditarUsuariosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Editar usuario ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Actualiza la informaci\xF3n del usuario seleccionado. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Volver ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, EditarUsuariosComponent_div_10_Template, 2, 1, "div", 6)(11, EditarUsuariosComponent_div_11_Template, 2, 0, "div", 7)(12, EditarUsuariosComponent_form_12_Template, 47, 11, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingUser);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingUser);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarUsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-editar-usuarios", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Editar usuario
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Actualiza la informaci\xF3n del usuario seleccionado.
        </p>
      </div>

      <a
        routerLink="/usuarios"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
      >
        Volver
      </a>
    </div>
  </div>

  <div
    *ngIf="errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
  >
    {{ errorMessage }}
  </div>

  <div
    *ngIf="loadingUser"
    class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
  >
    Cargando informaci\xF3n del usuario...
  </div>

  <form
    *ngIf="!loadingUser"
    [formGroup]="form"
    (ngSubmit)="editarUsuario()"
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nombre
        </label>
        <input
          type="text"
          formControlName="firstName"
          placeholder="Ej: Felix"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.firstName.touched && f.firstName.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El nombre es obligatorio.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Apellido
        </label>
        <input
          type="text"
          formControlName="lastName"
          placeholder="Ej: Cicilia"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.lastName.touched && f.lastName.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El apellido es obligatorio.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Tel\xE9fono
        </label>
        <input
          type="text"
          formControlName="phone"
          placeholder="Ej: 04141234567"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Rol
        </label>
        <select
          formControlName="role"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option *ngFor="let rol of roles" [value]="rol.value">
            {{ rol.label }}
          </option>
        </select>
        <p
          *ngIf="f.role.touched && f.role.invalid"
          class="mt-1 text-xs text-red-500"
        >
          El rol es obligatorio.
        </p>
      </div>

      <div class="md:col-span-2">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Correo electr\xF3nico
        </label>
        <input
          type="email"
          formControlName="email"
          placeholder="Ej: usuario@maritimo.com"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.email.touched && f.email.hasError('required')"
          class="mt-1 text-xs text-red-500"
        >
          El correo es obligatorio.
        </p>
        <p
          *ngIf="f.email.touched && f.email.hasError('email')"
          class="mt-1 text-xs text-red-500"
        >
          El formato del correo no es v\xE1lido.
        </p>
      </div>

      <div class="flex items-center gap-3 md:col-span-2">
        <input
          type="checkbox"
          formControlName="isActive"
          id="isActive"
          class="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
        />
        <label
          for="isActive"
          class="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Usuario activo
        </label>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nueva contrase\xF1a
        </label>
        <input
          type="password"
          formControlName="password"
          placeholder="D\xE9jala vac\xEDa si no cambiar\xE1"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.password.touched && f.password.hasError('minlength')"
          class="mt-1 text-xs text-red-500"
        >
          La contrase\xF1a debe tener al menos 6 caracteres.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Confirmar nueva contrase\xF1a
        </label>
        <input
          type="password"
          formControlName="confirmPassword"
          placeholder="Confirma la nueva contrase\xF1a"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="form.touched && form.hasError('passwordsMismatch')"
          class="mt-1 text-xs text-red-500"
        >
          Las contrase\xF1as no coinciden.
        </p>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
      <a
        routerLink="/usuarios"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
      >
        Cancelar
      </a>

      <button
        type="submit"
        [disabled]="loading"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ loading ? "Actualizando..." : "Actualizar usuario" }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarUsuariosComponent, { className: "EditarUsuariosComponent", filePath: "src/app/pages/usuarios/editar-usuarios/editar-usuarios.component.ts", lineNumber: 21 });
})();

// src/app/app.routes.ts
var routes = [
  // ─── Auth (sin layout) ──────────────────────────────────────────────────────
  {
    path: "login",
    component: LoginComponent,
    title: "Iniciar sesi\xF3n | MARITIMO"
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    title: "Restablecer contrase\xF1a | MARITIMO"
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    title: "Olvid\xE9 mi contrase\xF1a | MARITIMO"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Registro | MARITIMO"
  },
  // ─── App con layout y guard ──────────────────────────────────────────────────
  {
    path: "",
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      // ── Inicio (role-based home) ──────────────────────────────────────────────
      {
        path: "inicio",
        loadComponent: () => import("./chunk-4V6JZQKY.js").then((m) => m.InicioComponent),
        title: "Inicio | MARITIMO"
      },
      // ── Buscar viajes ─────────────────────────────────────────────────────────
      {
        path: "buscar",
        loadComponent: () => import("./chunk-DZAZNN7R.js").then((m) => m.BuscarComponent),
        title: "Buscar viajes | MARITIMO"
      },
      {
        path: "buscar/lancha/:id",
        loadComponent: () => import("./chunk-DGBRGYZK.js").then((m) => m.DetalleLanchaComponent),
        title: "Detalle lancha | MARITIMO"
      },
      // ── Mi Negocio (proveedor) ────────────────────────────────────────────────
      {
        path: "mi-negocio",
        loadComponent: () => import("./chunk-K5KEHIEJ.js").then((m) => m.MiNegocioComponent),
        title: "Mi Negocio | MARITIMO"
      },
      // Dashboard (legacy / admin)
      {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard | MARITIMO"
      },
      // ── Soporte ───────────────────────────────────────────────────────────────
      {
        path: "soporte/tickets",
        loadComponent: () => import("./chunk-OQDFO3FL.js").then((m) => m.SoporteTicketsComponent),
        title: "Tickets de soporte | MARITIMO"
      },
      { path: "soporte/chat", redirectTo: "/mensajes", pathMatch: "full" },
      // ── FAQ ───────────────────────────────────────────────────────────────────
      {
        path: "faq",
        loadComponent: () => import("./chunk-DET2W352.js").then((m) => m.FaqComponent),
        title: "Preguntas frecuentes | MARITIMO"
      },
      // ── Mensajes / Chat general ───────────────────────────────────────────────
      {
        path: "mensajes",
        loadComponent: () => import("./chunk-SV3AXX2P.js").then((m) => m.MensajesComponent),
        title: "Mensajes | MARITIMO"
      },
      // ── Mis Reservas (cliente) ────────────────────────────────────────────────
      {
        path: "mis-reservas",
        loadComponent: () => import("./chunk-G2QGSRBZ.js").then((m) => m.MisReservasComponent),
        title: "Mis Reservas | MARITIMO"
      },
      {
        path: "mis-reservas/:id",
        loadComponent: () => import("./chunk-3IWFSVDX.js").then((m) => m.DetalleReservaComponent),
        title: "Detalle de Reserva | MARITIMO"
      },
      {
        path: "pagar-reserva",
        loadComponent: () => import("./chunk-JHOXNKEP.js").then((m) => m.PagarReservaComponent),
        title: "Pagar Reserva | MARITIMO"
      },
      // Perfil
      {
        path: "profile",
        component: ProfileComponent,
        title: "Perfil | MARITIMO"
      },
      // ── Dashboard cliente ─────────────────────────────────────────────────────
      {
        path: "mi-dashboard",
        component: MiDashboardComponent,
        title: "Mi Dashboard | MARITIMO"
      },
      // ── Métodos de pago (cliente) ─────────────────────────────────────────────
      {
        path: "mis-metodos-pago",
        component: MisMetodosPagoComponent,
        title: "Mis m\xE9todos de pago | MARITIMO"
      },
      // ── Cuentas de retiro (proveedor) ─────────────────────────────────────────
      {
        path: "mis-cuentas-retiro",
        component: MisCuentasRetiroComponent,
        title: "Datos bancarios | MARITIMO"
      },
      // Usuarios (ADMINISTRADOR / MASTER)
      {
        path: "usuarios",
        component: ListaUsuariosComponent,
        title: "Usuarios | MARITIMO"
      },
      {
        path: "usuarios/crear",
        component: CrearUsuariosComponent,
        title: "Nuevo usuario | MARITIMO"
      },
      {
        path: "usuarios/editar/:id",
        component: EditarUsuariosComponent,
        title: "Editar usuario | MARITIMO"
      },
      // ── Embarcaciones ────────────────────────────────────────────────────────
      {
        path: "embarcaciones",
        loadComponent: () => import("./chunk-4RIPJKSI.js").then((m) => m.ListaEmbarcacionesComponent),
        title: "Embarcaciones | MARITIMO"
      },
      {
        path: "embarcaciones/verificar",
        loadComponent: () => import("./chunk-ZNFHFK2S.js").then((m) => m.VerificarEmbarcacionesComponent),
        title: "Verificar embarcaciones | MARITIMO"
      },
      {
        path: "embarcaciones/editar/:id",
        loadComponent: () => import("./chunk-V6MMHHC6.js").then((m) => m.EditarEmbarcacionComponent),
        title: "Editar embarcaci\xF3n | MARITIMO"
      },
      // ── Muelles ──────────────────────────────────────────────────────────────
      {
        path: "muelles",
        loadComponent: () => import("./chunk-AAQD6CE3.js").then((m) => m.ListaMuellesComponent),
        title: "Muelles | MARITIMO"
      },
      {
        path: "muelles/crear",
        loadComponent: () => import("./chunk-NUKVAR24.js").then((m) => m.CrearMuelleComponent),
        title: "Nuevo muelle | MARITIMO"
      },
      {
        path: "muelles/editar/:id",
        loadComponent: () => import("./chunk-F4RD4ZG6.js").then((m) => m.EditarMuelleComponent),
        title: "Editar muelle | MARITIMO"
      },
      // ── Rutas ────────────────────────────────────────────────────────────────
      {
        path: "rutas",
        loadComponent: () => import("./chunk-NHBSM5SP.js").then((m) => m.ListaRutasComponent),
        title: "Rutas | MARITIMO"
      },
      {
        path: "rutas/crear",
        loadComponent: () => import("./chunk-IPLCBS3V.js").then((m) => m.CrearRutaComponent),
        title: "Nueva ruta | MARITIMO"
      },
      {
        path: "rutas/editar/:id",
        loadComponent: () => import("./chunk-LVQWVSKC.js").then((m) => m.EditarRutaComponent),
        title: "Editar ruta | MARITIMO"
      },
      // ── Horarios ─────────────────────────────────────────────────────────────
      {
        path: "horarios",
        loadComponent: () => import("./chunk-VDJ5VKEV.js").then((m) => m.ListaHorariosComponent),
        title: "Horarios | MARITIMO"
      },
      {
        path: "horarios/crear",
        loadComponent: () => import("./chunk-6S2KQAHJ.js").then((m) => m.CrearHorarioComponent),
        title: "Nuevo horario | MARITIMO"
      },
      {
        path: "horarios/editar/:id",
        loadComponent: () => import("./chunk-VFKTQ7SL.js").then((m) => m.EditarHorarioComponent),
        title: "Editar horario | MARITIMO"
      },
      // ── Checkout ─────────────────────────────────────────────────────────────
      {
        path: "checkout",
        loadComponent: () => import("./chunk-YEURDYH7.js").then((m) => m.CheckoutComponent),
        title: "Checkout | MARITIMO"
      },
      // ── Viajes (Terminal) ─────────────────────────────────────────────────────
      {
        path: "viajes",
        loadComponent: () => import("./chunk-ORXDDFAL.js").then((m) => m.ListaViajesComponent),
        title: "Viajes | MARITIMO"
      },
      {
        path: "viajes/:id",
        loadComponent: () => import("./chunk-SHKNVLNG.js").then((m) => m.DetalleViajeComponent),
        title: "Detalle de viaje | MARITIMO"
      },
      // ── Tickets ───────────────────────────────────────────────────────────────
      {
        path: "tickets",
        loadComponent: () => import("./chunk-RUTJEUH5.js").then((m) => m.ListaTicketsComponent),
        title: "Tickets | MARITIMO"
      },
      {
        path: "tickets/:id",
        loadComponent: () => import("./chunk-HX3ATREC.js").then((m) => m.DetalleTicketComponent),
        title: "Ticket | MARITIMO"
      },
      // ── Alquileres (cliente) ─────────────────────────────────────────────────
      {
        path: "alquileres",
        loadComponent: () => import("./chunk-AJLI3ARQ.js").then((m) => m.ListaAlquileresComponent),
        title: "Charter privado | MARITIMO"
      },
      {
        path: "alquileres/yate/:id",
        loadComponent: () => import("./chunk-NGHEPC5K.js").then((m) => m.DetalleYateComponent),
        title: "Detalle de embarcaci\xF3n | MARITIMO"
      },
      {
        path: "alquileres/:id",
        loadComponent: () => import("./chunk-CJ6U4Y27.js").then((m) => m.DetalleAlquilerComponent),
        title: "Reserva de charter | MARITIMO"
      },
      // ── Mi Charter (proveedor) ────────────────────────────────────────────────
      {
        path: "mi-charter",
        redirectTo: "mi-charter/yates",
        pathMatch: "full"
      },
      {
        path: "mi-charter/yates",
        loadComponent: () => import("./chunk-YK2IVZDA.js").then((m) => m.ListaYatesComponent),
        title: "Mis embarcaciones | MARITIMO"
      },
      {
        path: "mi-charter/yates/nuevo",
        loadComponent: () => import("./chunk-DKTJ22ES.js").then((m) => m.FormYateComponent),
        title: "Nueva embarcaci\xF3n | MARITIMO"
      },
      {
        path: "mi-charter/yates/:id/editar",
        loadComponent: () => import("./chunk-DKTJ22ES.js").then((m) => m.FormYateComponent),
        title: "Editar embarcaci\xF3n | MARITIMO"
      },
      {
        path: "mi-charter/reservas",
        loadComponent: () => import("./chunk-AVDGSCAZ.js").then((m) => m.ReservasCharterComponent),
        title: "Reservas de charter | MARITIMO"
      },
      {
        path: "mi-charter/itinerario",
        loadComponent: () => import("./chunk-TZERIAHE.js").then((m) => m.ItinerarioComponent),
        title: "Mi itinerario | MARITIMO"
      },
      // ── Viajes Taxi ───────────────────────────────────────────────────────────
      {
        path: "viajes-taxi",
        loadComponent: () => import("./chunk-Y5LE3HA2.js").then((m) => m.ListaViajesTaxiComponent),
        title: "Viajes Taxi | MARITIMO"
      },
      {
        path: "viajes-taxi/solicitar",
        loadComponent: () => import("./chunk-P3WXMB2T.js").then((m) => m.SolicitarViajeComponent),
        title: "Solicitar taxi | MARITIMO"
      },
      {
        path: "viajes-taxi/:id",
        loadComponent: () => import("./chunk-6CRIV3RH.js").then((m) => m.DetalleViajeTaxiComponent),
        title: "Viaje taxi | MARITIMO"
      },
      // ── Pagos ─────────────────────────────────────────────────────────────────
      {
        path: "pagos",
        loadComponent: () => import("./chunk-SWNJQ4FC.js").then((m) => m.ListaPagosComponent),
        title: "Pagos | MARITIMO"
      },
      {
        path: "pagos/:id",
        loadComponent: () => import("./chunk-GXIVLG2J.js").then((m) => m.DetallePagoComponent),
        title: "Pago | MARITIMO"
      },
      // ── Reseñas ───────────────────────────────────────────────────────────────
      {
        path: "resenas",
        loadComponent: () => import("./chunk-2ZG6NBHF.js").then((m) => m.ListaResenasComponent),
        title: "Rese\xF1as | MARITIMO"
      },
      // ── Tasas de cambio ───────────────────────────────────────────────────────
      {
        path: "tasas",
        loadComponent: () => import("./chunk-B6RIOGE5.js").then((m) => m.ListaTasasComponent),
        title: "Tasas | MARITIMO"
      },
      {
        path: "tasas/crear",
        canActivate: [masterGuard],
        loadComponent: () => import("./chunk-L7NDNQOJ.js").then((m) => m.CrearTasasComponent),
        title: "Nueva tasa | MARITIMO"
      },
      {
        path: "tasas/editar/:id",
        canActivate: [masterGuard],
        loadComponent: () => import("./chunk-CS7W3T2K.js").then((m) => m.EditarTasasComponent),
        title: "Editar tasa | MARITIMO"
      },
      // ── Notificaciones ────────────────────────────────────────────────────────
      {
        path: "notificaciones",
        loadComponent: () => import("./chunk-GFWO34HR.js").then((m) => m.ListaNotificacionesComponent),
        title: "Notificaciones | MARITIMO"
      },
      // ── Métodos de cobro (MASTER/ADMIN) ──────────────────────────────────────
      {
        path: "metodos-cobro",
        loadComponent: () => import("./chunk-GOA7BUCW.js").then((m) => m.MetodosCobroComponent),
        title: "M\xE9todos de cobro | MARITIMO"
      },
      // ── Finanzas (MASTER only) ────────────────────────────────────────────────
      {
        path: "finanzas",
        canActivate: [masterGuard],
        loadComponent: () => import("./chunk-6PQMSUQI.js").then((m) => m.FinanzasComponent),
        title: "Finanzas | MARITIMO"
      },
      // ── Puntos de salida (admin) ──────────────────────────────────────────────
      {
        path: "puntos-salida",
        loadComponent: () => import("./chunk-MXSJI6VX.js").then((m) => m.ListaPuntosSalidaComponent),
        title: "Puntos de salida | MARITIMO"
      },
      // ── Destinos (admin) ──────────────────────────────────────────────────────
      {
        path: "destinos",
        loadComponent: () => import("./chunk-5KNHTL5B.js").then((m) => m.ListaDestinosAdminComponent),
        title: "Destinos | MARITIMO"
      },
      // ── Reservas de isla (admin) ──────────────────────────────────────────────
      {
        path: "reservas-isla",
        loadComponent: () => import("./chunk-UBJIIBHG.js").then((m) => m.ListaReservasIslaComponent),
        title: "Reservas de isla | MARITIMO"
      }
    ]
  },
  // ─── Redirects ───────────────────────────────────────────────────────────────
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "inicio" }
];

// src/app/pages/auth-pages/pages/components/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (!token) {
    return next(req);
  }
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(authReq);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.component.ts
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, " Cargando aplicaci\xF3n... ");
    \u0275\u0275elementEnd()()();
  }
}
var AppComponent = class _AppComponent {
  authService = inject(AuthService);
  router = inject(Router);
  title = "Angular Ecommerce Dashboard | TailAdmin";
  appReady = signal(false, ...ngDevMode ? [{ debugName: "appReady" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthenticated = computed(() => this.authService.isAuthenticated(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initAuth();
  }
  initAuth() {
    this.appReady.set(false);
    this.authService.restoreSession().pipe(take(1)).subscribe({
      next: (user) => {
        this.appReady.set(true);
        const currentUrl = this.router.url;
        if (user && (currentUrl === "/login" || currentUrl === "/")) {
          this.router.navigate(["/dashboard"]);
          return;
        }
        if (!user && currentUrl.startsWith("/dashboard")) {
          this.router.navigate(["/login"]);
        }
      },
      error: (error) => {
        console.error("Error restaurando sesi\xF3n:", error);
        this.appReady.set(true);
        if (this.router.url.startsWith("/dashboard")) {
          this.router.navigate(["/login"]);
        }
      }
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "flex", "min-h-screen", "items-center", "justify-center", "bg-gray-50", "dark:bg-gray-900"], [1, "text-center"], [1, "mx-auto", "mb-4", "h-12", "w-12", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-brand-500"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppComponent_Conditional_0_Template, 1, 0, "router-outlet")(1, AppComponent_Conditional_1_Template, 5, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.appReady() ? 0 : 1);
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterModule], template: '@if (appReady()) {\n  <router-outlet></router-outlet>\n} @else {\n  <div\n    class="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900"\n  >\n    <div class="text-center">\n      <div\n        class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-brand-500"\n      ></div>\n      <p class="text-sm text-gray-500 dark:text-gray-400">\n        Cargando aplicaci\xF3n...\n      </p>\n    </div>\n  </div>\n}' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 });
})();

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent2() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const window2 = getWindow();
  const children = [...element.children];
  if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
  }
}
function elementIsChildOf(el, parent) {
  const window2 = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
  return (v) => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 1e-3;
    }
    return v;
  };
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = "";
  }
  if (typeof trustedTypes !== "undefined") {
    el.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (s) => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event2) => {
      if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
      self.eventsListeners[event2][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach((event2) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event2] = [];
      } else if (self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event2].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event2) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event2, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slides);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
var toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
var toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
      nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
      prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  const browser2 = getBrowser();
  const isSafari = browser2.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach((el) => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next",
    initial
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop) c.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      }));
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event2, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event2.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event2) {
  const swiper = this;
  const document2 = getDocument();
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event2.pointerType === "mouse") return;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  (/* @__PURE__ */ new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event2) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const document2 = getDocument();
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class _Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new _Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === "column") {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === "row") {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate(void 0, true);
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
    const modules2 = _Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
      modules2.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => _Swiper.installModule(m));
      return _Swiper;
    }
    _Swiper.installModule(module);
    return _Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// node_modules/swiper/modules/virtual.mjs
function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document2 = getDocument();
  swiper.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document2.createElement("div");
  function renderSlide(slide2, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide2, index);
      if (typeof slideEl === "string") {
        setInnerHTML(tempDOM, slideEl);
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement("swiper-slide");
    } else {
      slideEl = createElement("div", swiper.params.slideClass);
    }
    slideEl.setAttribute("data-swiper-slide-index", index);
    if (!params.renderSlide) {
      setInnerHTML(slideEl, slide2);
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update2(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = "right";
    else offsetProp = swiper.isHorizontal() ? "left" : "top";
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit("virtualUpdate");
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach((slideEl) => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit("virtualUpdate");
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        })()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit("virtualUpdate");
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = (index) => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === "undefined" || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach((index) => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide2(slides) {
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update2(true);
  }
  function prependSlide2(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
        if (cachedElIndex) {
          cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update2(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide2(slidesIndexes) {
    if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        Object.keys(swiper.virtual.cache).forEach((key) => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update2(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides2() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update2(true);
    swiper.slideTo(0, 0);
  }
  on("beforeInit", () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === "undefined") {
      const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute("data-swiper-slide-index", slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update2(false, true);
  });
  on("setTranslate", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update2();
      }, 100);
    } else {
      update2();
    }
  });
  on("init update resize", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide: appendSlide2,
    prependSlide: prependSlide2,
    removeSlide: removeSlide2,
    removeAllSlides: removeAllSlides2,
    update: update2
  });
}

// node_modules/swiper/modules/keyboard.mjs
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  const window2 = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event2) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return void 0;
    }
    if (document2.activeElement && (document2.activeElement.isContentEditable || document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea"))) {
      return void 0;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return void 0;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window2.innerWidth;
      const windowHeight = window2.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      if (!inView) return void 0;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit("keyPress", kc);
    return void 0;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document2.addEventListener("keydown", handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document2.removeEventListener("keydown", handle);
    swiper.keyboard.enabled = false;
  }
  on("init", () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events2(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events2("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events2("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

// node_modules/swiper/modules/navigation.mjs
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination.mjs
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        setInnerHTML(subEl, paginationHTML || "");
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.find((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/scrollbar.mjs
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();
    else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on("changeDirection", () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize2();
      setTranslate2();
    }
  });
  on("update resize observerUpdate lock unlock changeDirection", () => {
    updateSize2();
  });
  on("setTranslate", () => {
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/parallax.mjs
function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute("data-swiper-parallax") || "0";
    let x = el.getAttribute("data-swiper-parallax-x");
    let y = el.getAttribute("data-swiper-parallax-y");
    const scale = el.getAttribute("data-swiper-parallax-scale");
    const opacity = el.getAttribute("data-swiper-parallax-opacity");
    const rotate = el.getAttribute("data-swiper-parallax-rotate");
    if (x || y) {
      x = x || "0";
      y = y || "0";
    } else if (swiper.isHorizontal()) {
      x = p;
      y = "0";
    } else {
      y = p;
      x = "0";
    }
    if (x.indexOf("%") >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf("%") >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== "undefined" && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== "undefined" && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== "undefined" && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate2 = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach((subEl) => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl) => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition2 = function(duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach((parallaxEl) => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on("beforeInit", () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on("init", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTranslate", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate2();
  });
  on("setTransition", (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition2(duration);
  });
}

// node_modules/swiper/modules/zoom.mjs
function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  };
  const image = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, "scale", {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit("zoomChange", value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function onGestureStart(e) {
    if (e.pointerType === "mouse") {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = void 0;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = "0ms";
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === "mouse" && e.type === "pointerout") return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = void 0;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart2(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event2 = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event2.pageX;
    image.touchesStart.y = event2.pageY;
  }
  function onTouchMove2(e) {
    const isMouseEvent = e.pointerType === "mouse";
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
      image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = "0ms";
    }
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd2() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = void 0;
      gesture.imageEl = void 0;
      gesture.imageWrapEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window2.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window2.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = "0ms";
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.touchAction = "none";
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === "undefined" && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === "number" ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = void 0;
      touchY = void 0;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === "number" && typeof image.currentY === "number") {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "";
      swiper.wrapperEl.style.touchAction = "";
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = void 0;
    image.currentY = void 0;
    image.touchesStart.x = void 0;
    image.touchesStart.y = void 0;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = void 0;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      zoomOut();
    } else {
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  on("init", () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    disable();
  });
  on("touchStart", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart2(e);
  });
  on("touchEnd", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd2();
  });
  on("doubleTap", (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on("transitionEnd", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on("slideChange", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

// node_modules/swiper/modules/controller.mjs
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
      // or 'container'
    }
  });
  swiper.controller = {
    control: void 0
  };
  function LinearSpline(x, y) {
    const binarySearch = /* @__PURE__ */ (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    })();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate2(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper2 = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;
      const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === "slide") {
        getInterpolateFunction(c);
        controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
      }
      if (!controlledTranslate || swiper.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition2(duration, byController) {
    const Swiper2 = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper2 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = void 0;
      delete swiper.controller.spline;
    }
  }
  on("beforeInit", () => {
    if (typeof window !== "undefined" && // eslint-disable-line
    (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach((controlElement) => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = (e) => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on("update", () => {
    removeSpline();
  });
  on("resize", () => {
    removeSpline();
  });
  on("observerUpdate", () => {
    removeSpline();
  });
  on("setTranslate", (_s, translate2, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate2, byController);
  });
  on("setTransition", (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate: setTranslate2,
    setTransition: setTransition2
  });
}

// node_modules/swiper/modules/a11y.mjs
function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    setInnerHTML(notification, message);
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "0");
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "-1");
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("role", role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-roledescription", description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-controls", controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-label", label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("id", id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-live", live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = makeElementsArray(swiper.navigation.prevEl);
      const nextEls = makeElementsArray(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach((bulletEl) => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, "button");
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute("aria-current", "true");
      } else {
        bulletEl.removeAttribute("aria-current");
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== "BUTTON") {
      addElRole(el, "button");
      el.addEventListener("keydown", onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = (e) => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = (e) => {
    visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
  };
  const handleFocus = (e) => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"))), 0);
      } else {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);
    initSlides();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.addEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("pointerdown", handlePointerDown, true);
    swiper.el.addEventListener("pointerup", handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (hasClickablePagination()) {
      const paginationEl = makeElementsArray(swiper.pagination.el);
      paginationEl.forEach((el) => {
        el.removeEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("focus", handleFocus, true);
      swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
      swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
  }
  on("beforeInit", () => {
    liveRegion = createElement("span", swiper.params.a11y.notificationClass);
    liveRegion.setAttribute("aria-live", "assertive");
    liveRegion.setAttribute("aria-atomic", "true");
  });
  on("afterInit", () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on("fromEdge toEdge afterInit lock unlock", () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on("paginationUpdate", () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on("destroy", () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

// node_modules/swiper/modules/history.mjs
function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: "",
      replaceState: false,
      key: "slides",
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = (text) => {
    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  const getPathValues = (urlOverride) => {
    const window2 = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window2.location;
    }
    const pathArray = location.pathname.slice(1).split("/").filter((part) => part !== "");
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window2 = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window2.location;
    }
    const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide2.getAttribute("data-history"));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ""}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ""}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window2.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window2.history.replaceState({
        value
      }, null, value);
    } else {
      window2.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide2 = swiper.slides[i];
        const slideHistory = slugify(slide2.getAttribute("data-history"));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide2);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window2 = getWindow();
    if (!swiper.params.history) return;
    if (!window2.history || !window2.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window2.addEventListener("popstate", setHistoryPopState);
    }
  };
  const destroy = () => {
    const window2 = getWindow();
    if (!swiper.params.history.replaceState) {
      window2.removeEventListener("popstate", setHistoryPopState);
    }
  };
  on("init", () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

// node_modules/swiper/modules/hash-navigation.mjs
function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document2 = getDocument();
  const window2 = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute("data-hash") === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit("hashChange");
    const newHash = document2.location.hash.replace("#", "");
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
    if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
      window2.history.replaceState(null, null, `#${activeSlideHash}` || "");
      emit("hashSet");
    } else {
      document2.location.hash = activeSlideHash || "";
      emit("hashSet");
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document2.location.hash.replace("#", "");
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window2.addEventListener("hashchange", onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window2.removeEventListener("hashchange", onHashChange);
    }
  };
  on("init", () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHash();
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

// node_modules/swiper/modules/autoplay.mjs
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

// node_modules/swiper/modules/thumbs.mjs
function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject2(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update2(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
      const document2 = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update2(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = (e) => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update2(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update2(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update2();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update: update2
  });
}

// node_modules/swiper/modules/free-mode.mjs
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart2() {
    if (swiper.params.cssMode) return;
    const translate2 = swiper.getTranslate();
    swiper.setTranslate(translate2);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove2() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd2(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit("_freeModeStaticRelease");
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart: onTouchStart2,
      onTouchMove: onTouchMove2,
      onTouchEnd: onTouchEnd2
    }
  });
}

// node_modules/swiper/modules/grid.mjs
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = (slides) => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== "auto" && fill === "row") {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach((slide2) => {
        if (slide2.swiperSlideGridSet) {
          slide2.style.height = "";
          slide2.style[swiper.getDirectionLabel("margin-top")] = "";
        }
      });
    }
  };
  const updateSlide = (i, slide2, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === "row" && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide2.style.order = newSlideOrderIndex;
    } else if (fill === "column") {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide2.row = row;
    slide2.column = column;
    slide2.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
    slide2.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on("init", onInit);
  on("update", onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}

// node_modules/swiper/modules/manipulation.mjs
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      setInnerHTML(tempDOM, slideEl);
      slidesEl.append(tempDOM.children[0]);
      setInnerHTML(tempDOM, "");
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = (slideEl) => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      setInnerHTML(tempDOM, slideEl);
      slidesEl.prepend(tempDOM.children[0]);
      setInnerHTML(tempDOM, "");
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide2;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/modules/effect-fade.mjs
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate2 = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cube.mjs
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach((slideEl) => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate2 = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser: browser2
    } = swiper;
    const r = getRotateFix(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
  };
  const setTransition2 = (duration) => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector(".swiper-cube-shadow");
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-flip.mjs
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (!shadowAfter) {
      shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    swiper.params.flipEffect;
    swiper.slides.forEach((slideEl) => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate2 = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = getRotateFix(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-coverflow.mjs
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate2 = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate2 = params.depth;
    const r = getRotateFix(swiper);
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate2 * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

// node_modules/swiper/modules/effect-creative.mjs
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = (value) => {
    if (typeof value === "string") return value;
    return `${value}px`;
  };
  const setTranslate2 = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = getRotateFix(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow("creative", slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate2 = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/swiper-bundle.mjs
var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
Swiper.use(modules);

// node_modules/swiper/shared/update-swiper.mjs
var paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function isObject3(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
}
function extend3(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];
      else extend3(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function attrToProp(attrName) {
  if (attrName === void 0) {
    attrName = "";
  }
  return attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace("-", ""));
}
function updateSwiper(_ref) {
  let {
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  } = _ref;
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
      Object.assign(currentParams[key], passedParams[key]);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
    if (slides) virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      paginationEl = document.createElement("div");
      paginationEl.classList.add("swiper-pagination");
      paginationEl.part.add("pagination");
      swiper.el.appendChild(paginationEl);
    }
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      scrollbarEl = document.createElement("div");
      scrollbarEl.classList.add("swiper-scrollbar");
      scrollbarEl.part.add("scrollbar");
      swiper.el.appendChild(scrollbarEl);
    }
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        nextEl = document.createElement("div");
        nextEl.classList.add("swiper-button-next");
        setInnerHTML(nextEl, swiper.hostEl.constructor.nextButtonSvg);
        nextEl.part.add("button-next");
        swiper.el.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === "string") {
        prevEl = document.createElement("div");
        prevEl.classList.add("swiper-button-prev");
        setInnerHTML(prevEl, swiper.hostEl.constructor.prevButtonSvg);
        prevEl.part.add("button-prev");
        swiper.el.appendChild(prevEl);
      }
    }
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}

// node_modules/swiper/shared/get-element-params.mjs
var formatValue = (val) => {
  if (parseFloat(val) === Number(val)) return Number(val);
  if (val === "true") return true;
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "null") return null;
  if (val === "undefined") return void 0;
  if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
    let v;
    try {
      v = JSON.parse(val);
    } catch (err) {
      v = val;
    }
    return v;
  }
  return val;
};
var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function getParams(element, propName, propValue) {
  const params = {};
  const passedParams = {};
  extend3(params, defaults);
  const localParamsList = [...paramsList, "on"];
  const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
  localParamsList.forEach((paramName) => {
    paramName = paramName.replace("_", "");
    if (typeof element[paramName] !== "undefined") {
      passedParams[paramName] = element[paramName];
    }
  });
  const attrsList = [...element.attributes];
  if (typeof propName === "string" && typeof propValue !== "undefined") {
    attrsList.push({
      name: propName,
      value: isObject3(propValue) ? __spreadValues({}, propValue) : propValue
    });
  }
  attrsList.forEach((attr) => {
    const moduleParam = modulesParamsList.find((mParam) => attr.name.startsWith(`${mParam}-`));
    if (moduleParam) {
      const parentObjName = attrToProp(moduleParam);
      const subObjName = attrToProp(attr.name.split(`${moduleParam}-`)[1]);
      if (typeof passedParams[parentObjName] === "undefined") {
        passedParams[parentObjName] = {};
      }
      if (passedParams[parentObjName] === true) {
        passedParams[parentObjName] = {
          enabled: true
        };
      }
      if (passedParams[parentObjName] === false) {
        passedParams[parentObjName] = {
          enabled: false
        };
      }
      passedParams[parentObjName][subObjName] = formatValue(attr.value);
    } else {
      const name = attrToProp(attr.name);
      if (!allowedParams.includes(name)) return;
      const value = formatValue(attr.value);
      if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
        if (passedParams[name].constructor !== Object) {
          passedParams[name] = {};
        }
        passedParams[name].enabled = !!value;
      } else {
        passedParams[name] = value;
      }
    }
  });
  extend3(params, passedParams);
  if (params.navigation) {
    params.navigation = __spreadValues({
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    }, params.navigation !== true ? params.navigation : {});
  } else if (params.navigation === false) {
    delete params.navigation;
  }
  if (params.scrollbar) {
    params.scrollbar = __spreadValues({
      el: ".swiper-scrollbar"
    }, params.scrollbar !== true ? params.scrollbar : {});
  } else if (params.scrollbar === false) {
    delete params.scrollbar;
  }
  if (params.pagination) {
    params.pagination = __spreadValues({
      el: ".swiper-pagination"
    }, params.pagination !== true ? params.pagination : {});
  } else if (params.pagination === false) {
    delete params.pagination;
  }
  return {
    params,
    passedParams
  };
}

// node_modules/swiper/swiper-element-bundle.mjs
var SwiperCSS = `:host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}`;
var SwiperSlideCSS = `::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}`;
var DummyHTMLElement = class {
};
var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
var arrowSvg = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `;
var addStyle = (shadowRoot, styles) => {
  if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(styles);
    shadowRoot.adoptedStyleSheets = [styleSheet];
  } else {
    const style = document.createElement("style");
    style.rel = "stylesheet";
    style.textContent = styles;
    shadowRoot.appendChild(style);
  }
};
var SwiperContainer = class extends ClassToExtend {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  static get nextButtonSvg() {
    return arrowSvg;
  }
  static get prevButtonSvg() {
    return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
  }
  cssStyles() {
    return [
      SwiperCSS,
      // eslint-disable-line
      ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
    ].join("\n");
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const currentSideSlots = this.slideSlots || 0;
    const slideSlotChildren = [...this.querySelectorAll(`[slot^=slide-]`)].map((child) => {
      return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
    });
    this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
    if (!this.rendered) return;
    if (this.slideSlots > currentSideSlots) {
      for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
        const slideEl = document.createElement("swiper-slide");
        slideEl.setAttribute("part", `slide slide-${i + 1}`);
        const slotEl = document.createElement("slot");
        slotEl.setAttribute("name", `slide-${i + 1}`);
        slideEl.appendChild(slotEl);
        this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
      }
    } else if (this.slideSlots < currentSideSlots) {
      const slides = this.swiper.slides;
      for (let i = slides.length - 1; i >= 0; i -= 1) {
        if (i > this.slideSlots) {
          slides[i].remove();
        }
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let localStyles = this.cssStyles();
    if (this.slideSlots > 0) {
      localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
    }
    if (localStyles.length) {
      addStyle(this.shadowRoot, localStyles);
    }
    this.cssLinks().forEach((url) => {
      const linkExists = this.shadowRoot.querySelector(`link[href="${url}"]`);
      if (linkExists) return;
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = url;
      this.shadowRoot.appendChild(linkEl);
    });
    const el = document.createElement("div");
    el.classList.add("swiper");
    el.part = "container";
    setInnerHTML(el, `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
      length: this.slideSlots
    }).map((_, index) => `
        <swiper-slide part="slide slide-${index}">
          <slot name="slide-${index}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${needsNavigation(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${needsPagination(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${needsScrollbar(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `);
    this.shadowRoot.appendChild(el);
    this.rendered = true;
  }
  initialize() {
    var _this = this;
    if (this.swiper && this.swiper.initialized) return;
    const {
      params: swiperParams,
      passedParams
    } = getParams(this);
    this.swiperParams = swiperParams;
    this.passedParams = passedParams;
    delete this.swiperParams.init;
    this.render();
    this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), __spreadProps(__spreadValues(__spreadValues({}, swiperParams.virtual ? {} : {
      observer: true
    }), swiperParams), {
      touchEventsTarget: "container",
      onAny: function(name) {
        if (name === "observerUpdate") {
          _this.calcSlideSlots();
        }
        const eventName = swiperParams.eventsPrefix ? `${swiperParams.eventsPrefix}${name.toLowerCase()}` : name.toLowerCase();
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        const event2 = new CustomEvent(eventName, {
          detail: args,
          bubbles: name !== "hashChange",
          cancelable: true
        });
        _this.dispatchEvent(event2);
      }
    }));
  }
  connectedCallback() {
    if (this.swiper && this.swiper.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
      return;
    }
    if (this.init === false || this.getAttribute("init") === "false") {
      return;
    }
    this.initialize();
  }
  disconnectedCallback() {
    if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
      return;
    }
    if (this.swiper && this.swiper.destroy) {
      this.swiper.destroy();
    }
  }
  updateSwiperOnPropChange(propName, propValue) {
    const {
      params: swiperParams,
      passedParams
    } = getParams(this, propName, propValue);
    this.passedParams = passedParams;
    this.swiperParams = swiperParams;
    if (this.swiper && this.swiper.params[propName] === propValue) {
      return;
    }
    updateSwiper(__spreadValues(__spreadValues(__spreadValues({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [attrToProp(propName)]
    }, propName === "navigation" && passedParams[propName] ? {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    } : {}), propName === "pagination" && passedParams[propName] ? {
      paginationEl: ".swiper-pagination"
    } : {}), propName === "scrollbar" && passedParams[propName] ? {
      scrollbarEl: ".swiper-scrollbar"
    } : {}));
  }
  attributeChangedCallback(attr, prevValue, newValue) {
    if (!(this.swiper && this.swiper.initialized)) return;
    if (prevValue === "true" && newValue === null) {
      newValue = false;
    }
    this.updateSwiperOnPropChange(attr, newValue);
  }
  static get observedAttributes() {
    const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v) => `-${v}`).replace("_", "").toLowerCase());
    return attrs;
  }
};
paramsList.forEach((paramName) => {
  if (paramName === "init") return;
  paramName = paramName.replace("_", "");
  Object.defineProperty(SwiperContainer.prototype, paramName, {
    configurable: true,
    get() {
      return (this.passedParams || {})[paramName];
    },
    set(value) {
      if (!this.passedParams) this.passedParams = {};
      this.passedParams[paramName] = value;
      if (!(this.swiper && this.swiper.initialized)) return;
      this.updateSwiperOnPropChange(paramName, value);
    }
  });
});
var SwiperSlide = class extends ClassToExtend {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  render() {
    const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    addStyle(this.shadowRoot, SwiperSlideCSS);
    this.shadowRoot.appendChild(document.createElement("slot"));
    if (lazy) {
      const lazyDiv = document.createElement("div");
      lazyDiv.classList.add("swiper-lazy-preloader");
      lazyDiv.part.add("preloader");
      this.shadowRoot.appendChild(lazyDiv);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    if (this.swiperLoopMoveDOM) {
      return;
    }
    this.initialize();
  }
};
var register = () => {
  if (typeof window === "undefined") return;
  if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
  if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
};
if (typeof window !== "undefined") {
  window.SwiperElementRegisterParams = (params) => {
    paramsList.push(...params);
  };
}

// src/main.ts
register();
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
