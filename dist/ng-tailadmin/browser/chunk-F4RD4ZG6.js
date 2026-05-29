import {
  MuellesService
} from "./chunk-4PXGVUHC.js";
import {
  ImageUploadComponent
} from "./chunk-CHEEZELV.js";
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
} from "./chunk-X6ED7CSN.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
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
} from "./chunk-6L3J4MHE.js";

// src/app/pages/muelles/pages/editar-muelle/editar-muelle.component.ts
function EditarMuelleComponent_div_10_Template(rf, ctx) {
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
function EditarMuelleComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando informaci\xF3n...");
    \u0275\u0275elementEnd();
  }
}
function EditarMuelleComponent_form_12_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "El nombre es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function EditarMuelleComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarMuelleComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "label", 14);
    \u0275\u0275text(4, "Nombre ");
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275template(8, EditarMuelleComponent_form_12_p_8_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "label", 14);
    \u0275\u0275text(11, "Latitud ");
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 14);
    \u0275\u0275text(17, "Longitud ");
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "label", 14);
    \u0275\u0275text(23, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "label", 14);
    \u0275\u0275text(27, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "label", 14);
    \u0275\u0275text(31, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 13)(34, "label", 14);
    \u0275\u0275text(35, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "textarea", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 24);
    \u0275\u0275element(38, "input", 25);
    \u0275\u0275elementStart(39, "label", 26);
    \u0275\u0275text(40, "Muelle activo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "app-image-upload", 27);
    \u0275\u0275listener("uploaded", function EditarMuelleComponent_form_12_Template_app_image_upload_uploaded_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhotoUploaded($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 28)(44, "a", 5);
    \u0275\u0275text(45, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 29);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.f.name.touched && ctx_r0.f.name.invalid);
    \u0275\u0275advance(34);
    \u0275\u0275property("currentUrl", ctx_r0.photoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Actualizar muelle", " ");
  }
}
var EditarMuelleComponent = class _EditarMuelleComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(MuellesService);
  loading = false;
  loadingMuelle = false;
  errorMessage = "";
  muelleId = 0;
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
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.errorMessage = "ID inv\xE1lido.";
      return;
    }
    this.muelleId = id;
    this.loadingMuelle = true;
    this.service.getById(id).subscribe({
      next: (m) => {
        this.form.patchValue({
          name: m.name ?? "",
          description: m.description ?? "",
          latitude: m.latitude,
          longitude: m.longitude,
          address: m.address ?? "",
          city: m.city ?? "",
          state: m.state ?? "",
          isActive: m.isActive
        });
        this.photoUrl = m.photoUrl ?? "";
        this.loadingMuelle = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el muelle.";
        this.loadingMuelle = false;
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
    this.service.update(this.muelleId, {
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
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar el muelle.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function EditarMuelleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarMuelleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarMuelleComponent, selectors: [["app-editar-muelle"]], decls: 13, vars: 3, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/muelles", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "px-5", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "md:col-span-2"], [1, "mb-2", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["type", "text", "formControlName", "name", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["type", "number", "step", "any", "formControlName", "latitude", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "number", "step", "any", "formControlName", "longitude", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "address", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "city", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["type", "text", "formControlName", "state", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "description", "rows", "3", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "h-4", "w-4", "rounded", "border-gray-300", "text-brand-500"], ["for", "isActive", 1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["label", "Foto del muelle", 3, "uploaded", "currentUrl"], [1, "mt-6", "flex", "gap-3", "sm:justify-end"], ["type", "submit", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-brand-500", "px-5", "py-3", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "mt-1", "text-xs", "text-red-500"]], template: function EditarMuelleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Editar muelle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Actualiza la informaci\xF3n del punto de embarque.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Volver");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, EditarMuelleComponent_div_10_Template, 2, 1, "div", 6)(11, EditarMuelleComponent_div_11_Template, 2, 0, "div", 7)(12, EditarMuelleComponent_form_12_Template, 48, 5, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingMuelle);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingMuelle);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarMuelleComponent, [{
    type: Component,
    args: [{ selector: "app-editar-muelle", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Editar muelle</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Actualiza la informaci\xF3n del punto de embarque.</p>
      </div>
      <a routerLink="/muelles" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Volver</a>
    </div>
  </div>

  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>
  <div *ngIf="loadingMuelle" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando informaci\xF3n...</div>

  <form *ngIf="!loadingMuelle" [formGroup]="form" (ngSubmit)="guardar()" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre <span class="text-red-500">*</span></label>
        <input type="text" formControlName="name"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        <p *ngIf="f.name.touched && f.name.invalid" class="mt-1 text-xs text-red-500">El nombre es obligatorio.</p>
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Latitud <span class="text-red-500">*</span></label>
        <input type="number" step="any" formControlName="latitude"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Longitud <span class="text-red-500">*</span></label>
        <input type="number" step="any" formControlName="longitude"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Direcci\xF3n</label>
        <input type="text" formControlName="address"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Ciudad</label>
        <input type="text" formControlName="city"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
        <input type="text" formControlName="state"
          class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      </div>
      <div class="md:col-span-2">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
        <textarea formControlName="description" rows="3"
          class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"></textarea>
      </div>
      <div class="flex items-center gap-3">
        <input type="checkbox" formControlName="isActive" id="isActive" class="h-4 w-4 rounded border-gray-300 text-brand-500" />
        <label for="isActive" class="text-sm font-medium text-gray-700 dark:text-gray-300">Muelle activo</label>
      </div>

      <div class="md:col-span-2">
        <app-image-upload
          label="Foto del muelle"
          [currentUrl]="photoUrl"
          (uploaded)="onPhotoUploaded($event)">
        </app-image-upload>
      </div>
    </div>
    <div class="mt-6 flex gap-3 sm:justify-end">
      <a routerLink="/muelles" class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancelar</a>
      <button type="submit" [disabled]="loading" class="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
        {{ loading ? 'Actualizando...' : 'Actualizar muelle' }}
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarMuelleComponent, { className: "EditarMuelleComponent", filePath: "src/app/pages/muelles/pages/editar-muelle/editar-muelle.component.ts", lineNumber: 15 });
})();
export {
  EditarMuelleComponent
};
//# sourceMappingURL=chunk-F4RD4ZG6.js.map
