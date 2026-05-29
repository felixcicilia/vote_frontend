import {
  RutasService
} from "./chunk-NBD3HIJ5.js";
import {
  MuellesService
} from "./chunk-4PXGVUHC.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-X6ED7CSN.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
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
  ɵɵtextInterpolate1
} from "./chunk-6L3J4MHE.js";

// src/app/pages/rutas/pages/crear-ruta/crear-ruta.component.ts
function CrearRutaComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CrearRutaComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.name);
  }
}
function CrearRutaComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Selecciona el muelle origen.");
    \u0275\u0275elementEnd();
  }
}
function CrearRutaComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.name);
  }
}
function CrearRutaComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Selecciona el muelle destino.");
    \u0275\u0275elementEnd();
  }
}
function CrearRutaComponent_p_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Ingresa la duraci\xF3n.");
    \u0275\u0275elementEnd();
  }
}
function CrearRutaComponent_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Ingresa el precio.");
    \u0275\u0275elementEnd();
  }
}
var CrearRutaComponent = class _CrearRutaComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  service = inject(RutasService);
  muellesService = inject(MuellesService);
  loading = false;
  errorMessage = "";
  muelles = [];
  form = this.fb.group({
    originPierId: [null, [Validators.required]],
    destinationPierId: [null, [Validators.required]],
    durationMinutes: [null, [Validators.required, Validators.min(1)]],
    pricePerSeat: [null, [Validators.required, Validators.min(0)]],
    description: [""],
    isActive: [true]
  });
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.muellesService.getAll(true).subscribe({ next: (m) => this.muelles = m });
  }
  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.service.create({
      originPierId: Number(this.f.originPierId.value),
      destinationPierId: Number(this.f.destinationPierId.value),
      durationMinutes: Number(this.f.durationMinutes.value),
      pricePerSeat: Number(this.f.pricePerSeat.value),
      description: this.f.description.value?.trim() || void 0,
      isActive: this.f.isActive.value ?? true
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/rutas"]);
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear la ruta.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function CrearRutaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearRutaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearRutaComponent, selectors: [["app-crear-ruta"]], decls: 60, vars: 12, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/rutas", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["formControlName", "originPierId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["formControlName", "destinationPierId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "durationMinutes", "placeholder", "Ej: 45", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "0.01", "formControlName", "pricePerSeat", "placeholder", "Ej: 5.00", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "md:col-span-2"], ["formControlName", "description", "rows", "3", "placeholder", "Descripci\xF3n opcional...", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"]], template: function CrearRutaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Nueva ruta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Crea una ruta entre dos muelles.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, CrearRutaComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function CrearRutaComponent_Template_form_ngSubmit_11_listener() {
        return ctx.guardar();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
      \u0275\u0275text(15, "Muelle origen ");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "select", 11)(19, "option", 12);
      \u0275\u0275text(20, "Selecciona un muelle");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, CrearRutaComponent_option_21_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, CrearRutaComponent_p_22_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 9);
      \u0275\u0275text(25, "Muelle destino ");
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "select", 15)(29, "option", 12);
      \u0275\u0275text(30, "Selecciona un muelle");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, CrearRutaComponent_option_31_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, CrearRutaComponent_p_32_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "label", 9);
      \u0275\u0275text(35, "Duraci\xF3n (min) ");
      \u0275\u0275elementStart(36, "span", 10);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "input", 16);
      \u0275\u0275template(39, CrearRutaComponent_p_39_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "label", 9);
      \u0275\u0275text(42, "Precio/asiento ($) ");
      \u0275\u0275elementStart(43, "span", 10);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "input", 17);
      \u0275\u0275template(46, CrearRutaComponent_p_46_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 18)(48, "label", 9);
      \u0275\u0275text(49, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "textarea", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 20);
      \u0275\u0275element(52, "input", 21);
      \u0275\u0275elementStart(53, "label", 22);
      \u0275\u0275text(54, "Ruta activa");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 23)(56, "a", 5);
      \u0275\u0275text(57, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 24);
      \u0275\u0275text(59);
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
      \u0275\u0275property("ngForOf", ctx.muelles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.originPierId.touched && ctx.f.originPierId.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.muelles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.destinationPierId.touched && ctx.f.destinationPierId.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.durationMinutes.touched && ctx.f.durationMinutes.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.pricePerSeat.touched && ctx.f.pricePerSeat.invalid);
      \u0275\u0275advance(12);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar ruta", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearRutaComponent, [{
    type: Component,
    args: [{ selector: "app-crear-ruta", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Nueva ruta</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Crea una ruta entre dos muelles.</p>
      </div>
      <a routerLink="/rutas" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <form [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Muelle origen <span class="text-red-500">*</span></label>
        <select formControlName="originPierId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona un muelle</option>
          <option *ngFor="let m of muelles" [ngValue]="m.id">{{ m.name }}</option>
        </select>
        <p *ngIf="f.originPierId.touched && f.originPierId.invalid" class="mt-1 text-xs text-red-500">Selecciona el muelle origen.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Muelle destino <span class="text-red-500">*</span></label>
        <select formControlName="destinationPierId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona un muelle</option>
          <option *ngFor="let m of muelles" [ngValue]="m.id">{{ m.name }}</option>
        </select>
        <p *ngIf="f.destinationPierId.touched && f.destinationPierId.invalid" class="mt-1 text-xs text-red-500">Selecciona el muelle destino.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Duraci\xF3n (min) <span class="text-red-500">*</span></label>
        <input type="number" formControlName="durationMinutes" placeholder="Ej: 45"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.durationMinutes.touched && f.durationMinutes.invalid" class="mt-1 text-xs text-red-500">Ingresa la duraci\xF3n.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Precio/asiento ($) <span class="text-red-500">*</span></label>
        <input type="number" step="0.01" formControlName="pricePerSeat" placeholder="Ej: 5.00"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.pricePerSeat.touched && f.pricePerSeat.invalid" class="mt-1 text-xs text-red-500">Ingresa el precio.</p>
      </div>
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
        <textarea formControlName="description" rows="3" placeholder="Descripci\xF3n opcional..."
          class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"></textarea>
      </div>
      <div class="flex items-center gap-3">
        <input type="checkbox" formControlName="isActive" id="isActive" class="h-4 w-4 rounded border-gray-300" />
        <label for="isActive" class="text-sm font-medium text-gray-700 dark:text-gray-300">Ruta activa</label>
      </div>
    </div>
    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/rutas" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Guardando...' : 'Guardar ruta' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearRutaComponent, { className: "CrearRutaComponent", filePath: "src/app/pages/rutas/pages/crear-ruta/crear-ruta.component.ts", lineNumber: 16 });
})();
export {
  CrearRutaComponent
};
//# sourceMappingURL=chunk-IPLCBS3V.js.map
