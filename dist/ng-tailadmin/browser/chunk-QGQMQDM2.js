import {
  HorariosService
} from "./chunk-CEUIBPG6.js";
import {
  RutasService
} from "./chunk-BYNQAWK6.js";
import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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

// src/app/pages/horarios/pages/crear-horario/crear-horario.component.ts
function CrearHorarioComponent_div_10_Template(rf, ctx) {
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
function CrearHorarioComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", r_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r2.originPier.name, " \u2192 ", r_r2.destinationPier.name);
  }
}
function CrearHorarioComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Selecciona una ruta.");
    \u0275\u0275elementEnd();
  }
}
function CrearHorarioComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3.name);
  }
}
function CrearHorarioComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Selecciona una embarcaci\xF3n.");
    \u0275\u0275elementEnd();
  }
}
function CrearHorarioComponent_p_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Ingresa la hora de salida.");
    \u0275\u0275elementEnd();
  }
}
function CrearHorarioComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CrearHorarioComponent_button_46_Template_button_click_0_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleDay(d_r5.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.selectedDays.has(d_r5.value) ? "bg-brand-500 text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r5.label, " ");
  }
}
function CrearHorarioComponent_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Selecciona al menos un d\xEDa.");
    \u0275\u0275elementEnd();
  }
}
var CrearHorarioComponent = class _CrearHorarioComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  service = inject(HorariosService);
  rutasService = inject(RutasService);
  embarcacionesService = inject(EmbarcacionesService);
  loading = false;
  errorMessage = "";
  rutas = [];
  embarcaciones = [];
  DAYS = [
    { label: "Dom", value: "0" },
    { label: "Lun", value: "1" },
    { label: "Mar", value: "2" },
    { label: "Mi\xE9", value: "3" },
    { label: "Jue", value: "4" },
    { label: "Vie", value: "5" },
    { label: "S\xE1b", value: "6" }
  ];
  selectedDays = /* @__PURE__ */ new Set();
  form = this.fb.group({
    routeId: [null, [Validators.required]],
    vesselId: [null, [Validators.required]],
    departureTime: ["", [Validators.required]],
    isActive: [true]
  });
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.rutasService.getAll().subscribe({ next: (r) => this.rutas = r });
    this.embarcacionesService.getAll().subscribe({ next: (e) => this.embarcaciones = e });
  }
  toggleDay(day) {
    if (this.selectedDays.has(day))
      this.selectedDays.delete(day);
    else
      this.selectedDays.add(day);
  }
  guardar() {
    if (this.form.invalid || this.selectedDays.size === 0) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.service.create({
      routeId: Number(this.f.routeId.value),
      vesselId: Number(this.f.vesselId.value),
      departureTime: this.f.departureTime.value,
      daysOfWeek: Array.from(this.selectedDays).map(Number).sort((a, b) => a - b),
      isActive: this.f.isActive.value ?? true
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/horarios"]);
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear el horario.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function CrearHorarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearHorarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearHorarioComponent, selectors: [["app-crear-horario"]], decls: 57, vars: 13, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/horarios", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["formControlName", "routeId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["formControlName", "vesselId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "time", "formControlName", "departureTime", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "flex-wrap", "gap-2", "mt-2"], ["type", "button", "class", "rounded-full px-3 py-1.5 text-xs font-medium transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "mt-1 text-xs text-gray-400", 4, "ngIf"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"], [1, "mt-1", "text-xs", "text-gray-400"]], template: function CrearHorarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Nuevo horario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Configura un horario de salida para una ruta.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, CrearHorarioComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function CrearHorarioComponent_Template_form_ngSubmit_11_listener() {
        return ctx.guardar();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div")(14, "label", 9);
      \u0275\u0275text(15, "Ruta ");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "select", 11)(19, "option", 12);
      \u0275\u0275text(20, "Selecciona una ruta");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, CrearHorarioComponent_option_21_Template, 2, 3, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, CrearHorarioComponent_p_22_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "label", 9);
      \u0275\u0275text(25, "Embarcaci\xF3n ");
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "select", 15)(29, "option", 12);
      \u0275\u0275text(30, "Selecciona una embarcaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, CrearHorarioComponent_option_31_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, CrearHorarioComponent_p_32_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "label", 9);
      \u0275\u0275text(35, "Hora de salida ");
      \u0275\u0275elementStart(36, "span", 10);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "input", 16);
      \u0275\u0275template(39, CrearHorarioComponent_p_39_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "label", 9);
      \u0275\u0275text(42, "D\xEDas de operaci\xF3n ");
      \u0275\u0275elementStart(43, "span", 10);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 17);
      \u0275\u0275template(46, CrearHorarioComponent_button_46_Template, 2, 2, "button", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, CrearHorarioComponent_p_47_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 20);
      \u0275\u0275element(49, "input", 21);
      \u0275\u0275elementStart(50, "label", 22);
      \u0275\u0275text(51, "Horario activo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 23)(53, "a", 5);
      \u0275\u0275text(54, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 24);
      \u0275\u0275text(56);
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
      \u0275\u0275property("ngForOf", ctx.rutas);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.routeId.touched && ctx.f.routeId.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.embarcaciones);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f.vesselId.touched && ctx.f.vesselId.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.departureTime.touched && ctx.f.departureTime.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.DAYS);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDays.size === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar horario", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearHorarioComponent, [{
    type: Component,
    args: [{ selector: "app-crear-horario", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Nuevo horario</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Configura un horario de salida para una ruta.</p>
      </div>
      <a routerLink="/horarios" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <form [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Ruta <span class="text-red-500">*</span></label>
        <select formControlName="routeId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona una ruta</option>
          <option *ngFor="let r of rutas" [ngValue]="r.id">{{ r.originPier.name }} \u2192 {{ r.destinationPier.name }}</option>
        </select>
        <p *ngIf="f.routeId.touched && f.routeId.invalid" class="mt-1 text-xs text-red-500">Selecciona una ruta.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Embarcaci\xF3n <span class="text-red-500">*</span></label>
        <select formControlName="vesselId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona una embarcaci\xF3n</option>
          <option *ngFor="let e of embarcaciones" [ngValue]="e.id">{{ e.name }}</option>
        </select>
        <p *ngIf="f.vesselId.touched && f.vesselId.invalid" class="mt-1 text-xs text-red-500">Selecciona una embarcaci\xF3n.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Hora de salida <span class="text-red-500">*</span></label>
        <input type="time" formControlName="departureTime"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.departureTime.touched && f.departureTime.invalid" class="mt-1 text-xs text-red-500">Ingresa la hora de salida.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">D\xEDas de operaci\xF3n <span class="text-red-500">*</span></label>
        <div class="flex flex-wrap gap-2 mt-2">
          <button *ngFor="let d of DAYS" type="button" (click)="toggleDay(d.value)"
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            [ngClass]="selectedDays.has(d.value) ? 'bg-brand-500 text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300'">
            {{ d.label }}
          </button>
        </div>
        <p *ngIf="selectedDays.size === 0" class="mt-1 text-xs text-gray-400">Selecciona al menos un d\xEDa.</p>
      </div>
      <div class="flex items-center gap-3">
        <input type="checkbox" formControlName="isActive" id="isActive" class="h-4 w-4 rounded border-gray-300" />
        <label for="isActive" class="text-sm font-medium text-gray-700 dark:text-gray-300">Horario activo</label>
      </div>
    </div>
    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/horarios" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Guardando...' : 'Guardar horario' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearHorarioComponent, { className: "CrearHorarioComponent", filePath: "src/app/pages/horarios/pages/crear-horario/crear-horario.component.ts", lineNumber: 18 });
})();
export {
  CrearHorarioComponent
};
//# sourceMappingURL=chunk-QGQMQDM2.js.map
