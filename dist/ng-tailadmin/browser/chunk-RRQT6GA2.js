import {
  MuellesService
} from "./chunk-OR23U6T3.js";
import {
  ImageUploadComponent
} from "./chunk-MF5I77NK.js";
import "./chunk-PFOQZ4L6.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7NRIB5KE.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
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
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/muelles/pages/crear-muelle/crear-muelle.component.ts
function CrearMuelleComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CrearMuelleComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function CrearMuelleComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "La latitud es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function CrearMuelleComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "La longitud es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
var CrearMuelleComponent = class _CrearMuelleComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  service = inject(MuellesService);
  loading = false;
  errorMessage = "";
  photoUrl = "";
  onPhotoUploaded(url) {
    this.photoUrl = url;
  }
  form = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(100)]],
    description: [""],
    latitude: [null, [Validators.required]],
    longitude: [null, [Validators.required]],
    address: [""],
    city: [""],
    state: [""],
    isActive: [true]
  });
  get f() {
    return this.form.controls;
  }
  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.service.create({
      name: this.f.name.value.trim(),
      description: this.f.description.value?.trim() || void 0,
      photoUrl: this.photoUrl || void 0,
      latitude: Number(this.f.latitude.value),
      longitude: Number(this.f.longitude.value),
      address: this.f.address.value?.trim() || void 0,
      city: this.f.city.value?.trim() || void 0,
      state: this.f.state.value?.trim() || void 0,
      isActive: this.f.isActive.value ?? true
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/muelles"]);
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo crear el muelle.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function CrearMuelleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrearMuelleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearMuelleComponent, selectors: [["app-crear-muelle"]], decls: 61, vars: 7, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/muelles", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "md:col-span-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "Ej: Muelle Puerto Cabello", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "number", "step", "any", "formControlName", "latitude", "placeholder", "Ej: 10.4696", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "any", "formControlName", "longitude", "placeholder", "Ej: -68.0042", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "address", "placeholder", "Ej: Av. Principal s/n", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "city", "placeholder", "Ej: Puerto Cabello", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "state", "placeholder", "Ej: Carabobo", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "description", "rows", "3", "placeholder", "Descripci\xF3n del muelle...", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["label", "Foto del muelle", 3, "uploaded"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"]], template: function CrearMuelleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Nuevo muelle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Registra un nuevo punto de embarque.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, CrearMuelleComponent_div_10_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function CrearMuelleComponent_Template_form_ngSubmit_11_listener() {
        return ctx.guardar();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "Nombre ");
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275template(19, CrearMuelleComponent_p_19_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div")(21, "label", 10);
      \u0275\u0275text(22, "Latitud ");
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "input", 14);
      \u0275\u0275template(26, CrearMuelleComponent_p_26_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 10);
      \u0275\u0275text(29, "Longitud ");
      \u0275\u0275elementStart(30, "span", 11);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "input", 15);
      \u0275\u0275template(33, CrearMuelleComponent_p_33_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div")(35, "label", 10);
      \u0275\u0275text(36, "Direcci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div")(39, "label", 10);
      \u0275\u0275text(40, "Ciudad");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "label", 10);
      \u0275\u0275text(44, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 9)(47, "label", 10);
      \u0275\u0275text(48, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "textarea", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 20);
      \u0275\u0275element(51, "input", 21);
      \u0275\u0275elementStart(52, "label", 22);
      \u0275\u0275text(53, "Muelle activo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 9)(55, "app-image-upload", 23);
      \u0275\u0275listener("uploaded", function CrearMuelleComponent_Template_app_image_upload_uploaded_55_listener($event) {
        return ctx.onPhotoUploaded($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 24)(57, "a", 5);
      \u0275\u0275text(58, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 25);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.f.name.touched && ctx.f.name.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.latitude.touched && ctx.f.latitude.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f.longitude.touched && ctx.f.longitude.invalid);
      \u0275\u0275advance(26);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar muelle", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearMuelleComponent, [{
    type: Component,
    args: [{ selector: "app-crear-muelle", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Nuevo muelle</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Registra un nuevo punto de embarque.</p>
      </div>
      <a routerLink="/muelles" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <form [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre <span class="text-red-500">*</span></label>
        <input type="text" formControlName="name" placeholder="Ej: Muelle Puerto Cabello"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.name.touched && f.name.invalid" class="mt-1 text-xs text-red-500">El nombre es obligatorio.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Latitud <span class="text-red-500">*</span></label>
        <input type="number" step="any" formControlName="latitude" placeholder="Ej: 10.4696"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.latitude.touched && f.latitude.invalid" class="mt-1 text-xs text-red-500">La latitud es obligatoria.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Longitud <span class="text-red-500">*</span></label>
        <input type="number" step="any" formControlName="longitude" placeholder="Ej: -68.0042"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.longitude.touched && f.longitude.invalid" class="mt-1 text-xs text-red-500">La longitud es obligatoria.</p>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Direcci\xF3n</label>
        <input type="text" formControlName="address" placeholder="Ej: Av. Principal s/n"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Ciudad</label>
        <input type="text" formControlName="city" placeholder="Ej: Puerto Cabello"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
        <input type="text" formControlName="state" placeholder="Ej: Carabobo"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>

      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
        <textarea formControlName="description" rows="3" placeholder="Descripci\xF3n del muelle..."
          class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"></textarea>
      </div>

      <div class="flex items-center gap-3">
        <input type="checkbox" formControlName="isActive" id="isActive" class="h-4 w-4 rounded border-gray-300 text-brand-500" />
        <label for="isActive" class="text-sm font-medium text-gray-700 dark:text-gray-300">Muelle activo</label>
      </div>

      <div class="md:col-span-2">
        <app-image-upload
          label="Foto del muelle"
          (uploaded)="onPhotoUploaded($event)">
        </app-image-upload>
      </div>
    </div>

    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/muelles" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Guardando...' : 'Guardar muelle' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearMuelleComponent, { className: "CrearMuelleComponent", filePath: "src/app/pages/muelles/pages/crear-muelle/crear-muelle.component.ts", lineNumber: 15 });
})();
export {
  CrearMuelleComponent
};
//# sourceMappingURL=chunk-RRQT6GA2.js.map
