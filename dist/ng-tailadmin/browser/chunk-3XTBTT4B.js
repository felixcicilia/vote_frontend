import {
  ViajesTaxiService
} from "./chunk-UHBJ7O66.js";
import {
  UsuariosService
} from "./chunk-VKINGFC2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/viajes-taxi/pages/solicitar-viaje/solicitar-viaje.component.ts
function SolicitarViajeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function SolicitarViajeComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r2.firstName, " ", c_r2.lastName);
  }
}
function SolicitarViajeComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Selecciona un cliente.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarViajeComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Ingresa el nombre de origen.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarViajeComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Ingresa la latitud.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarViajeComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Ingresa la longitud.");
    \u0275\u0275elementEnd();
  }
}
function SolicitarViajeComponent_p_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Ingresa el nombre de destino.");
    \u0275\u0275elementEnd();
  }
}
var SolicitarViajeComponent = class _SolicitarViajeComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  service = inject(ViajesTaxiService);
  usuariosService = inject(UsuariosService);
  loading = false;
  errorMessage = "";
  clientes = [];
  form = this.fb.group({
    clientId: [null, [Validators.required]],
    originName: ["", [Validators.required]],
    originLat: [null, [Validators.required]],
    originLng: [null, [Validators.required]],
    destinationName: ["", [Validators.required]],
    passengers: [1, [Validators.required, Validators.min(1)]],
    estimatedPrice: [null]
  });
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.usuariosService.obtenerUsuarios("CLIENTE").subscribe({ next: (u) => this.clientes = u });
  }
  solicitar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.service.create({
      clientId: Number(this.f.clientId.value),
      originName: this.f.originName.value.trim(),
      originLat: Number(this.f.originLat.value),
      originLng: Number(this.f.originLng.value),
      destinationName: this.f.destinationName.value.trim(),
      passengers: Number(this.f.passengers.value),
      estimatedPrice: this.f.estimatedPrice.value ? Number(this.f.estimatedPrice.value) : void 0
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/viajes-taxi"]);
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear la solicitud.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function SolicitarViajeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SolicitarViajeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SolicitarViajeComponent, selectors: [["app-solicitar-viaje"]], decls: 66, vars: 11, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/viajes-taxi", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "md:col-span-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["formControlName", "clientId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "text", "formControlName", "originName", "placeholder", "Nombre del lugar de origen", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "originLat", "step", "any", "placeholder", "Ej: 10.6346", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "originLng", "step", "any", "placeholder", "Ej: -71.6401", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "destinationName", "placeholder", "Nombre del lugar de destino", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "passengers", "min", "1", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "estimatedPrice", "min", "0", "step", "0.01", "placeholder", "Opcional", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"]], template: function SolicitarViajeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Solicitar viaje taxi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Crea una nueva solicitud de taxi acu\xE1tico.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, SolicitarViajeComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function SolicitarViajeComponent_Template_form_ngSubmit_11_listener() {
        return ctx.solicitar();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "Cliente ");
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "select", 12)(19, "option", 13);
      \u0275\u0275text(20, "Selecciona un cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, SolicitarViajeComponent_option_21_Template, 2, 3, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, SolicitarViajeComponent_p_22_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9)(24, "label", 10);
      \u0275\u0275text(25, "Origen ");
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275template(29, SolicitarViajeComponent_p_29_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "label", 10);
      \u0275\u0275text(32, "Latitud origen ");
      \u0275\u0275elementStart(33, "span", 11);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 17);
      \u0275\u0275template(36, SolicitarViajeComponent_p_36_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "label", 10);
      \u0275\u0275text(39, "Longitud origen ");
      \u0275\u0275elementStart(40, "span", 11);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "input", 18);
      \u0275\u0275template(43, SolicitarViajeComponent_p_43_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 9)(45, "label", 10);
      \u0275\u0275text(46, "Destino ");
      \u0275\u0275elementStart(47, "span", 11);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "input", 19);
      \u0275\u0275template(50, SolicitarViajeComponent_p_50_Template, 2, 0, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div")(52, "label", 10);
      \u0275\u0275text(53, "Pasajeros ");
      \u0275\u0275elementStart(54, "span", 11);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div")(58, "label", 10);
      \u0275\u0275text(59, "Precio estimado");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 22)(62, "a", 5);
      \u0275\u0275text(63, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 23);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.clientes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.clientId.touched && ctx.f.clientId.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.originName.touched && ctx.f.originName.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.originLat.touched && ctx.f.originLat.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.originLng.touched && ctx.f.originLng.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.destinationName.touched && ctx.f.destinationName.invalid);
      \u0275\u0275advance(14);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Solicitando..." : "Solicitar viaje", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitarViajeComponent, [{
    type: Component,
    args: [{ selector: "app-solicitar-viaje", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Solicitar viaje taxi</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Crea una nueva solicitud de taxi acu\xE1tico.</p>
      </div>
      <a routerLink="/viajes-taxi" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <form [formGroup]="form" (ngSubmit)="solicitar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Cliente <span class="text-red-500">*</span></label>
        <select formControlName="clientId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona un cliente</option>
          <option *ngFor="let c of clientes" [ngValue]="c.id">{{ c.firstName }} {{ c.lastName }}</option>
        </select>
        <p *ngIf="f.clientId.touched && f.clientId.invalid" class="mt-1 text-xs text-red-500">Selecciona un cliente.</p>
      </div>

      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Origen <span class="text-red-500">*</span></label>
        <input type="text" formControlName="originName" placeholder="Nombre del lugar de origen"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.originName.touched && f.originName.invalid" class="mt-1 text-xs text-red-500">Ingresa el nombre de origen.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Latitud origen <span class="text-red-500">*</span></label>
        <input type="number" formControlName="originLat" step="any" placeholder="Ej: 10.6346"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.originLat.touched && f.originLat.invalid" class="mt-1 text-xs text-red-500">Ingresa la latitud.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Longitud origen <span class="text-red-500">*</span></label>
        <input type="number" formControlName="originLng" step="any" placeholder="Ej: -71.6401"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.originLng.touched && f.originLng.invalid" class="mt-1 text-xs text-red-500">Ingresa la longitud.</p>
      </div>

      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Destino <span class="text-red-500">*</span></label>
        <input type="text" formControlName="destinationName" placeholder="Nombre del lugar de destino"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.destinationName.touched && f.destinationName.invalid" class="mt-1 text-xs text-red-500">Ingresa el nombre de destino.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Pasajeros <span class="text-red-500">*</span></label>
        <input type="number" formControlName="passengers" min="1"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Precio estimado</label>
        <input type="number" formControlName="estimatedPrice" min="0" step="0.01" placeholder="Opcional"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
    </div>
    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/viajes-taxi" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Solicitando...' : 'Solicitar viaje' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SolicitarViajeComponent, { className: "SolicitarViajeComponent", filePath: "src/app/pages/viajes-taxi/pages/solicitar-viaje/solicitar-viaje.component.ts", lineNumber: 16 });
})();
export {
  SolicitarViajeComponent
};
//# sourceMappingURL=chunk-3XTBTT4B.js.map
