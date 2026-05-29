import {
  CurrencyType
} from "./chunk-ATFKHOYC.js";
import {
  TasasService
} from "./chunk-P6DGYE77.js";
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
  ɵɵtextInterpolate1
} from "./chunk-6L3J4MHE.js";

// src/app/pages/tasas/pages/crear-tasas/crear-tasas.component.ts
function CrearTasasComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CrearTasasComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moneda_r2 = ctx.$implicit;
    \u0275\u0275property("value", moneda_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", moneda_r2.label, " ");
  }
}
function CrearTasasComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moneda_r3 = ctx.$implicit;
    \u0275\u0275property("value", moneda_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", moneda_r3.label, " ");
  }
}
function CrearTasasComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " La tasa es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function CrearTasasComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " La tasa debe ser mayor a 0. ");
    \u0275\u0275elementEnd();
  }
}
function CrearTasasComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " La fecha efectiva es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function CrearTasasComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " La fuente no puede superar 100 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
var CrearTasasComponent = class _CrearTasasComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  tasasService = inject(TasasService);
  loading = false;
  errorMessage = "";
  monedas = [
    { label: "USD", value: CurrencyType.USD },
    { label: "BS", value: CurrencyType.BS }
  ];
  form = this.fb.group({
    baseCurrency: [CurrencyType.USD, [Validators.required]],
    targetCurrency: [CurrencyType.BS, [Validators.required]],
    rate: [
      null,
      [Validators.required, Validators.min(1e-4)]
    ],
    isActive: [true],
    effectiveDate: ["", [Validators.required]],
    source: ["", [Validators.maxLength(100)]],
    observacion: [""]
  });
  get f() {
    return this.form.controls;
  }
  crearTasa() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.f.baseCurrency.value === this.f.targetCurrency.value) {
      this.errorMessage = "La moneda base y la moneda destino no pueden ser iguales.";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const payload = {
      baseCurrency: this.f.baseCurrency.value ?? CurrencyType.USD,
      targetCurrency: this.f.targetCurrency.value ?? CurrencyType.BS,
      rate: Number(this.f.rate.value ?? 0),
      isActive: Boolean(this.f.isActive.value),
      effectiveDate: this.f.effectiveDate.value ?? "",
      source: this.f.source.value?.trim() || void 0,
      observacion: this.f.observacion.value?.trim() || void 0
    };
    this.tasasService.crear(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/tasas"]);
      },
      error: (error) => {
        console.error("Error creando tasa:", error);
        const backendMessage = error?.error?.message;
        if (Array.isArray(backendMessage)) {
          this.errorMessage = backendMessage.join(", ");
        } else if (typeof backendMessage === "string") {
          this.errorMessage = backendMessage;
        } else {
          this.errorMessage = "No se pudo crear la tasa. Verifica los datos e int\xE9ntalo nuevamente.";
        }
        this.loading = false;
      }
    });
  }
  static \u0275fac = function CrearTasasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearTasasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearTasasComponent, selectors: [["app-crear-tasas"]], decls: 53, vars: 10, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/tasas", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["formControlName", "baseCurrency", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "targetCurrency", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "0.0001", "formControlName", "rate", "placeholder", "Ej: 36.5000", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "date", "formControlName", "effectiveDate", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "md:col-span-2"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "border-gray-200", "px-4", "py-3", "dark:border-gray-700"], ["type", "checkbox", "formControlName", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500", "focus:ring-brand-500"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "source", "placeholder", "Ej: Tasa interna del d\xEDa", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "observacion", "rows", "4", "placeholder", "Ej: Tasa usada para caja del turno ma\xF1ana", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "mt-6", "flex", "flex-col", "gap-3", "sm:flex-row", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [3, "value"], [1, "mt-1", "text-xs", "text-red-500"]], template: function CrearTasasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Crear tasa ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Registra una nueva tasa de cambio en el sistema. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Volver ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, CrearTasasComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function CrearTasasComponent_Template_form_ngSubmit_11_listener() {
        return ctx.crearTasa();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
      \u0275\u0275text(15, " Moneda base ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 10);
      \u0275\u0275template(17, CrearTasasComponent_option_17_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div")(19, "label", 9);
      \u0275\u0275text(20, " Moneda destino ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 12);
      \u0275\u0275template(22, CrearTasasComponent_option_22_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div")(24, "label", 9);
      \u0275\u0275text(25, " Tasa ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 13);
      \u0275\u0275template(27, CrearTasasComponent_p_27_Template, 2, 0, "p", 14)(28, CrearTasasComponent_p_28_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "label", 9);
      \u0275\u0275text(31, " Fecha efectiva ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275template(33, CrearTasasComponent_p_33_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 16)(35, "label", 17);
      \u0275\u0275element(36, "input", 18);
      \u0275\u0275elementStart(37, "span", 19);
      \u0275\u0275text(38, " Marcar esta tasa como activa ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 16)(40, "label", 9);
      \u0275\u0275text(41, " Fuente ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 20);
      \u0275\u0275template(43, CrearTasasComponent_p_43_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 16)(45, "label", 9);
      \u0275\u0275text(46, " Observaci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "textarea", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 22)(49, "a", 5);
      \u0275\u0275text(50, " Cancelar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 23);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.monedas);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.monedas);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.rate.touched && ctx.f.rate.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.rate.touched && ctx.f.rate.hasError("min"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.f.effectiveDate.touched && ctx.f.effectiveDate.invalid);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.f.source.touched && ctx.f.source.hasError("maxlength"));
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar tasa", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearTasasComponent, [{
    type: Component,
    args: [{ selector: "app-crear-tasas", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Crear tasa
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Registra una nueva tasa de cambio en el sistema.
        </p>
      </div>

      <a
        routerLink="/tasas"
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
    (ngSubmit)="crearTasa()"
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Moneda base
        </label>
        <select
          formControlName="baseCurrency"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option *ngFor="let moneda of monedas" [value]="moneda.value">
            {{ moneda.label }}
          </option>
        </select>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Moneda destino
        </label>
        <select
          formControlName="targetCurrency"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        >
          <option *ngFor="let moneda of monedas" [value]="moneda.value">
            {{ moneda.label }}
          </option>
        </select>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Tasa
        </label>
        <input
          type="number"
          step="0.0001"
          formControlName="rate"
          placeholder="Ej: 36.5000"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.rate.touched && f.rate.hasError('required')"
          class="mt-1 text-xs text-red-500"
        >
          La tasa es obligatoria.
        </p>
        <p
          *ngIf="f.rate.touched && f.rate.hasError('min')"
          class="mt-1 text-xs text-red-500"
        >
          La tasa debe ser mayor a 0.
        </p>
      </div>

      <div>
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Fecha efectiva
        </label>
        <input
          type="date"
          formControlName="effectiveDate"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.effectiveDate.touched && f.effectiveDate.invalid"
          class="mt-1 text-xs text-red-500"
        >
          La fecha efectiva es obligatoria.
        </p>
      </div>

      <div class="md:col-span-2">
        <label
          class="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 dark:border-gray-700"
        >
          <input
            type="checkbox"
            formControlName="isActive"
            class="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">
            Marcar esta tasa como activa
          </span>
        </label>
      </div>

      <div class="md:col-span-2">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Fuente
        </label>
        <input
          type="text"
          formControlName="source"
          placeholder="Ej: Tasa interna del d\xEDa"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        />
        <p
          *ngIf="f.source.touched && f.source.hasError('maxlength')"
          class="mt-1 text-xs text-red-500"
        >
          La fuente no puede superar 100 caracteres.
        </p>
      </div>

      <div class="md:col-span-2">
        <label
          class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Observaci\xF3n
        </label>
        <textarea
          formControlName="observacion"
          rows="4"
          placeholder="Ej: Tasa usada para caja del turno ma\xF1ana"
          class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"
        ></textarea>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
      <a
        routerLink="/tasas"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/[0.03]"
      >
        Cancelar
      </a>

      <button
        type="submit"
        [disabled]="loading"
        class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ loading ? "Guardando..." : "Guardar tasa" }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearTasasComponent, { className: "CrearTasasComponent", filePath: "src/app/pages/tasas/pages/crear-tasas/crear-tasas.component.ts", lineNumber: 15 });
})();
export {
  CrearTasasComponent
};
//# sourceMappingURL=chunk-L7NDNQOJ.js.map
