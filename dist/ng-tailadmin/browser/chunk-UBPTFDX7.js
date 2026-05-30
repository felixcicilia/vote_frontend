import {
  MuellesService
} from "./chunk-OR23U6T3.js";
import {
  RutasService
} from "./chunk-BYNQAWK6.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/rutas/pages/editar-ruta/editar-ruta.component.ts
function EditarRutaComponent_div_10_Template(rf, ctx) {
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
function EditarRutaComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando informaci\xF3n...");
    \u0275\u0275elementEnd();
  }
}
function EditarRutaComponent_form_12_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
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
function EditarRutaComponent_form_12_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4.name);
  }
}
function EditarRutaComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarRutaComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div")(3, "label", 13);
    \u0275\u0275text(4, "Muelle origen ");
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 15)(8, "option", 16);
    \u0275\u0275text(9, "Selecciona un muelle");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EditarRutaComponent_form_12_option_10_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 13);
    \u0275\u0275text(13, "Muelle destino ");
    \u0275\u0275elementStart(14, "span", 14);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 18)(17, "option", 16);
    \u0275\u0275text(18, "Selecciona un muelle");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditarRutaComponent_form_12_option_19_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "label", 13);
    \u0275\u0275text(22, "Duraci\xF3n (min) ");
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 13);
    \u0275\u0275text(28, "Precio/asiento ($) ");
    \u0275\u0275elementStart(29, "span", 14);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21)(33, "label", 13);
    \u0275\u0275text(34, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "textarea", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 23);
    \u0275\u0275element(37, "input", 24);
    \u0275\u0275elementStart(38, "label", 25);
    \u0275\u0275text(39, "Ruta activa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 26)(41, "a", 5);
    \u0275\u0275text(42, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 27);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.muelles);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.muelles);
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Actualizar ruta", " ");
  }
}
var EditarRutaComponent = class _EditarRutaComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(RutasService);
  muellesService = inject(MuellesService);
  loading = false;
  loadingRuta = false;
  errorMessage = "";
  rutaId = 0;
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
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.errorMessage = "ID inv\xE1lido.";
      return;
    }
    this.rutaId = id;
    this.muellesService.getAll().subscribe({ next: (m) => this.muelles = m });
    this.loadingRuta = true;
    this.service.getById(id).subscribe({
      next: (r) => {
        this.form.patchValue({
          originPierId: r.originPier.id,
          destinationPierId: r.destinationPier.id,
          durationMinutes: r.durationMinutes,
          pricePerSeat: r.pricePerSeat,
          description: r.description ?? "",
          isActive: r.isActive
        });
        this.loadingRuta = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la ruta.";
        this.loadingRuta = false;
      }
    });
  }
  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.service.update(this.rutaId, {
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
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar la ruta.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function EditarRutaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarRutaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarRutaComponent, selectors: [["app-editar-ruta"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/rutas", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["formControlName", "originPierId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "destinationPierId", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "formControlName", "durationMinutes", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "0.01", "formControlName", "pricePerSeat", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "md:col-span-2"], ["formControlName", "description", "rows", "3", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"]], template: function EditarRutaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Editar ruta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Actualiza la informaci\xF3n de la ruta.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, EditarRutaComponent_div_10_Template, 2, 1, "div", 6)(11, EditarRutaComponent_div_11_Template, 2, 0, "div", 7)(12, EditarRutaComponent_form_12_Template, 45, 7, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingRuta);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingRuta);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarRutaComponent, [{
    type: Component,
    args: [{ selector: "app-editar-ruta", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Editar ruta</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Actualiza la informaci\xF3n de la ruta.</p>
      </div>
      <a routerLink="/rutas" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>
  <div *ngIf="loadingRuta" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando informaci\xF3n...</div>

  <form *ngIf="!loadingRuta" [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Muelle origen <span class="text-red-500">*</span></label>
        <select formControlName="originPierId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona un muelle</option>
          <option *ngFor="let m of muelles" [ngValue]="m.id">{{ m.name }}</option>
        </select>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Muelle destino <span class="text-red-500">*</span></label>
        <select formControlName="destinationPierId" class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
          <option [ngValue]="null">Selecciona un muelle</option>
          <option *ngFor="let m of muelles" [ngValue]="m.id">{{ m.name }}</option>
        </select>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Duraci\xF3n (min) <span class="text-red-500">*</span></label>
        <input type="number" formControlName="durationMinutes"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Precio/asiento ($) <span class="text-red-500">*</span></label>
        <input type="number" step="0.01" formControlName="pricePerSeat"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
        <textarea formControlName="description" rows="3"
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
        {{ loading ? 'Actualizando...' : 'Actualizar ruta' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarRutaComponent, { className: "EditarRutaComponent", filePath: "src/app/pages/rutas/pages/editar-ruta/editar-ruta.component.ts", lineNumber: 16 });
})();
export {
  EditarRutaComponent
};
//# sourceMappingURL=chunk-UBPTFDX7.js.map
