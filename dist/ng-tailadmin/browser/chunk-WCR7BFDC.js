import {
  CurrencyType
} from "./chunk-ATFKHOYC.js";
import {
  TasasService
} from "./chunk-MEPPWYZC.js";
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
} from "./chunk-7NRIB5KE.js";
import {
  ActivatedRoute,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/tasas/pages/editar-tasas/editar-tasas.component.ts
function EditarTasasComponent_div_10_Template(rf, ctx) {
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
function EditarTasasComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " Cargando informaci\xF3n de la tasa... ");
    \u0275\u0275elementEnd();
  }
}
function EditarTasasComponent_form_12_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
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
function EditarTasasComponent_form_12_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moneda_r4 = ctx.$implicit;
    \u0275\u0275property("value", moneda_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", moneda_r4.label, " ");
  }
}
function EditarTasasComponent_form_12_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " La tasa es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function EditarTasasComponent_form_12_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " La tasa debe ser mayor a 0. ");
    \u0275\u0275elementEnd();
  }
}
function EditarTasasComponent_form_12_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " La fecha efectiva es obligatoria. ");
    \u0275\u0275elementEnd();
  }
}
function EditarTasasComponent_form_12_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " La fuente no puede superar 100 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function EditarTasasComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarTasasComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editarTasa());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4, " Moneda base ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 14);
    \u0275\u0275template(6, EditarTasasComponent_form_12_option_6_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "label", 13);
    \u0275\u0275text(9, " Moneda destino ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 16);
    \u0275\u0275template(11, EditarTasasComponent_form_12_option_11_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 13);
    \u0275\u0275text(14, " Tasa ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 17);
    \u0275\u0275template(16, EditarTasasComponent_form_12_p_16_Template, 2, 0, "p", 18)(17, EditarTasasComponent_form_12_p_17_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 13);
    \u0275\u0275text(20, " Fecha efectiva ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 19);
    \u0275\u0275template(22, EditarTasasComponent_form_12_p_22_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20)(24, "label", 21);
    \u0275\u0275element(25, "input", 22);
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27, " Marcar esta tasa como activa ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 20)(29, "label", 13);
    \u0275\u0275text(30, " Fuente ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 24);
    \u0275\u0275template(32, EditarTasasComponent_form_12_p_32_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 20)(34, "label", 13);
    \u0275\u0275text(35, " Observaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "textarea", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 26)(38, "a", 5);
    \u0275\u0275text(39, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 27);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.monedas);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.monedas);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.f.rate.touched && ctx_r0.f.rate.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f.rate.touched && ctx_r0.f.rate.hasError("min"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.f.effectiveDate.touched && ctx_r0.f.effectiveDate.invalid);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.f.source.touched && ctx_r0.f.source.hasError("maxlength"));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Actualizar tasa", " ");
  }
}
var EditarTasasComponent = class _EditarTasasComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  tasasService = inject(TasasService);
  loading = false;
  loadingRate = false;
  errorMessage = "";
  tasaId = 0;
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
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.errorMessage = "No se recibi\xF3 un id v\xE1lido para editar la tasa.";
      return;
    }
    this.tasaId = id;
    this.cargarTasa();
  }
  cargarTasa() {
    this.loadingRate = true;
    this.errorMessage = "";
    this.tasasService.obtenerPorId(this.tasaId).subscribe({
      next: (tasa) => {
        this.form.patchValue({
          baseCurrency: tasa.baseCurrency,
          targetCurrency: tasa.targetCurrency,
          rate: Number(tasa.rate),
          isActive: tasa.isActive,
          effectiveDate: tasa.effectiveDate,
          source: tasa.source ?? "",
          observacion: tasa.observacion ?? ""
        });
        this.loadingRate = false;
      },
      error: (error) => {
        console.error("Error cargando tasa:", error);
        this.errorMessage = "No se pudo cargar la informaci\xF3n de la tasa.";
        this.loadingRate = false;
      }
    });
  }
  editarTasa() {
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
    this.tasasService.editar(this.tasaId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/tasas"]);
      },
      error: (error) => {
        console.error("Error editando tasa:", error);
        const backendMessage = error?.error?.message;
        if (Array.isArray(backendMessage)) {
          this.errorMessage = backendMessage.join(", ");
        } else if (typeof backendMessage === "string") {
          this.errorMessage = backendMessage;
        } else {
          this.errorMessage = "No se pudo actualizar la tasa. Verifica los datos e int\xE9ntalo nuevamente.";
        }
        this.loading = false;
      }
    });
  }
  static \u0275fac = function EditarTasasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarTasasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarTasasComponent, selectors: [["app-editar-tasas"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/tasas", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", "dark:hover:bg-white/[0.03]"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", "dark:text-gray-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["formControlName", "baseCurrency", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "targetCurrency", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "0.0001", "formControlName", "rate", "placeholder", "Ej: 36.5000", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "date", "formControlName", "effectiveDate", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "md:col-span-2"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "border-gray-200", "px-4", "py-3", "dark:border-gray-700"], ["type", "checkbox", "formControlName", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500", "focus:ring-brand-500"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "source", "placeholder", "Ej: Tasa interna del d\xEDa", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "observacion", "rows", "4", "placeholder", "Ej: Tasa usada para caja del turno ma\xF1ana", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "mt-6", "flex", "flex-col", "gap-3", "sm:flex-row", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "shadow-theme-xs", "hover:bg-brand-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], [3, "value"], [1, "mt-1", "text-xs", "text-red-500"]], template: function EditarTasasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, " Editar tasa ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Actualiza la informaci\xF3n de la tasa seleccionada. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Volver ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, EditarTasasComponent_div_10_Template, 2, 1, "div", 6)(11, EditarTasasComponent_div_11_Template, 2, 0, "div", 7)(12, EditarTasasComponent_form_12_Template, 42, 9, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingRate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingRate);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarTasasComponent, [{
    type: Component,
    args: [{ selector: "app-editar-tasas", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <!-- Header -->
  <div
    class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div
      class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">
          Editar tasa
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Actualiza la informaci\xF3n de la tasa seleccionada.
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

  <!-- Error -->
  <div
    *ngIf="errorMessage"
    class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400"
  >
    {{ errorMessage }}
  </div>

  <!-- Loading -->
  <div
    *ngIf="loadingRate"
    class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
  >
    Cargando informaci\xF3n de la tasa...
  </div>

  <!-- Form -->
  <form
    *ngIf="!loadingRate"
    [formGroup]="form"
    (ngSubmit)="editarTasa()"
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
        {{ loading ? "Actualizando..." : "Actualizar tasa" }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarTasasComponent, { className: "EditarTasasComponent", filePath: "src/app/pages/tasas/pages/editar-tasas/editar-tasas.component.ts", lineNumber: 15 });
})();
export {
  EditarTasasComponent
};
//# sourceMappingURL=chunk-WCR7BFDC.js.map
