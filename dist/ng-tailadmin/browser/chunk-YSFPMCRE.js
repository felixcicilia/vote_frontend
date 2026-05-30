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
  ActivatedRoute,
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

// src/app/pages/horarios/pages/editar-horario/editar-horario.component.ts
function EditarHorarioComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function EditarHorarioComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando informaci\xF3n...");
    \u0275\u0275elementEnd();
  }
}
function EditarHorarioComponent_form_12_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", r_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r3.originPier.name, " \u2192 ", r_r3.destinationPier.name);
  }
}
function EditarHorarioComponent_form_12_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.name);
  }
}
function EditarHorarioComponent_form_12_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function EditarHorarioComponent_form_12_button_32_Template_button_click_0_listener() {
      const d_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDay(d_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.selectedDays.has(d_r6.value) ? "bg-brand-500 text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r6.label, " ");
  }
}
function EditarHorarioComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarHorarioComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4, "Ruta ");
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 15)(8, "option", 16);
    \u0275\u0275text(9, "Selecciona una ruta");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EditarHorarioComponent_form_12_option_10_Template, 2, 3, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 13);
    \u0275\u0275text(13, "Embarcaci\xF3n ");
    \u0275\u0275elementStart(14, "span", 14);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 18)(17, "option", 16);
    \u0275\u0275text(18, "Selecciona una embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditarHorarioComponent_form_12_option_19_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 13);
    \u0275\u0275text(22, "Hora de salida ");
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 13);
    \u0275\u0275text(28, "D\xEDas de operaci\xF3n ");
    \u0275\u0275elementStart(29, "span", 14);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 20);
    \u0275\u0275template(32, EditarHorarioComponent_form_12_button_32_Template, 2, 2, "button", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 22);
    \u0275\u0275element(34, "input", 23);
    \u0275\u0275elementStart(35, "label", 24);
    \u0275\u0275text(36, "Horario activo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 25)(38, "a", 5);
    \u0275\u0275text(39, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 26);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.rutas);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.embarcaciones);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.DAYS);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Actualizar horario", " ");
  }
}
var EditarHorarioComponent = class _EditarHorarioComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(HorariosService);
  rutasService = inject(RutasService);
  embarcacionesService = inject(EmbarcacionesService);
  loading = false;
  loadingHorario = false;
  errorMessage = "";
  horarioId = 0;
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
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.errorMessage = "ID inv\xE1lido.";
      return;
    }
    this.horarioId = id;
    this.rutasService.getAll().subscribe({ next: (r) => this.rutas = r });
    this.embarcacionesService.getAll().subscribe({ next: (e) => this.embarcaciones = e });
    this.loadingHorario = true;
    this.service.getById(id).subscribe({
      next: (h) => {
        this.form.patchValue({
          routeId: h.route.id,
          vesselId: h.vessel.id,
          departureTime: h.departureTime,
          isActive: h.isActive
        });
        this.selectedDays = new Set(h.daysOfWeek.map(String));
        this.loadingHorario = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el horario.";
        this.loadingHorario = false;
      }
    });
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
    this.service.update(this.horarioId, {
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
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar el horario.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function EditarHorarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarHorarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarHorarioComponent, selectors: [["app-editar-horario"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/horarios", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["formControlName", "routeId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "vesselId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "time", "formControlName", "departureTime", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "flex-wrap", "gap-2", "mt-2"], ["type", "button", "class", "rounded-full px-3 py-1.5 text-xs font-medium transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"]], template: function EditarHorarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Editar horario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Modifica el horario de salida.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, EditarHorarioComponent_div_10_Template, 2, 1, "div", 6)(11, EditarHorarioComponent_div_11_Template, 2, 0, "div", 7)(12, EditarHorarioComponent_form_12_Template, 42, 8, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingHorario);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingHorario);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarHorarioComponent, [{
    type: Component,
    args: [{ selector: "app-editar-horario", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Editar horario</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Modifica el horario de salida.</p>
      </div>
      <a routerLink="/horarios" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>
  <div *ngIf="loadingHorario" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando informaci\xF3n...</div>

  <form *ngIf="!loadingHorario" [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Ruta <span class="text-red-500">*</span></label>
        <select formControlName="routeId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona una ruta</option>
          <option *ngFor="let r of rutas" [ngValue]="r.id">{{ r.originPier.name }} \u2192 {{ r.destinationPier.name }}</option>
        </select>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Embarcaci\xF3n <span class="text-red-500">*</span></label>
        <select formControlName="vesselId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona una embarcaci\xF3n</option>
          <option *ngFor="let e of embarcaciones" [ngValue]="e.id">{{ e.name }}</option>
        </select>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Hora de salida <span class="text-red-500">*</span></label>
        <input type="time" formControlName="departureTime"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
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
      </div>
      <div class="flex items-center gap-3">
        <input type="checkbox" formControlName="isActive" id="isActive" class="h-4 w-4 rounded border-gray-300" />
        <label for="isActive" class="text-sm font-medium text-gray-700 dark:text-gray-300">Horario activo</label>
      </div>
    </div>
    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/horarios" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Actualizando...' : 'Actualizar horario' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarHorarioComponent, { className: "EditarHorarioComponent", filePath: "src/app/pages/horarios/pages/editar-horario/editar-horario.component.ts", lineNumber: 18 });
})();
export {
  EditarHorarioComponent
};
//# sourceMappingURL=chunk-YSFPMCRE.js.map
