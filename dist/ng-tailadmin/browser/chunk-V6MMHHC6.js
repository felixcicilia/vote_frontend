import {
  ImageUploadComponent
} from "./chunk-CHEEZELV.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
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
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component.ts
function EditarEmbarcacionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " Cargando... ");
    \u0275\u0275elementEnd();
  }
}
function EditarEmbarcacionComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EditarEmbarcacionComponent_div_11_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "Sin fotos registradas.");
    \u0275\u0275elementEnd();
  }
}
function EditarEmbarcacionComponent_div_11_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-image-upload", 42);
    \u0275\u0275listener("uploaded", function EditarEmbarcacionComponent_div_11_div_58_Template_app_image_upload_uploaded_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoUploaded($event, i_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 43);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_div_11_div_58_Template_button_click_2_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePhoto(i_r4));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("label", "Foto " + (i_r4 + 1))("currentUrl", p_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Eliminar foto ", i_r4 + 1);
  }
}
function EditarEmbarcacionComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditarEmbarcacionComponent_div_11_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(2, EditarEmbarcacionComponent_div_11_div_2_Template, 2, 1, "div", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div")(5, "label", 14);
    \u0275\u0275text(6, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 14);
    \u0275\u0275text(10, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 16)(12, "option", 17);
    \u0275\u0275text(13, "Lancha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 18);
    \u0275\u0275text(15, "Yate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 19);
    \u0275\u0275text(17, "Catamar\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 20);
    \u0275\u0275text(19, "Bote");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div")(21, "label", 14);
    \u0275\u0275text(22, "Capacidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "label", 14);
    \u0275\u0275text(26, "Precio por d\xEDa (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "label", 14);
    \u0275\u0275text(30, "Matr\xEDcula");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "label", 14);
    \u0275\u0275text(34, "A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "label", 14);
    \u0275\u0275text(38, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 25)(40, "option", 26);
    \u0275\u0275text(41, "Activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 27);
    \u0275\u0275text(43, "Inactiva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 28);
    \u0275\u0275text(45, "Mantenimiento");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div")(47, "label", 14);
    \u0275\u0275text(48, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 30)(51, "div", 31)(52, "h3", 32);
    \u0275\u0275text(53, "Fotos de la embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 33);
    \u0275\u0275listener("click", function EditarEmbarcacionComponent_div_11_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPhotoSlot());
    });
    \u0275\u0275text(55, " + Agregar foto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, EditarEmbarcacionComponent_div_11_div_56_Template, 2, 0, "div", 34);
    \u0275\u0275elementStart(57, "div", 35);
    \u0275\u0275template(58, EditarEmbarcacionComponent_div_11_div_58_Template, 4, 3, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 37)(60, "a", 38);
    \u0275\u0275text(61, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 39);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-500", ctx_r1.isInvalid("name"))("border-gray-300", !ctx_r1.isInvalid("name"));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("border-red-500", ctx_r1.isInvalid("capacity"))("border-gray-300", !ctx_r1.isInvalid("capacity"));
    \u0275\u0275advance(33);
    \u0275\u0275property("ngIf", ctx_r1.photos.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.photos);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Guardando..." : "Actualizar", " ");
  }
}
var EditarEmbarcacionComponent = class _EditarEmbarcacionComponent {
  fb = inject(FormBuilder);
  service = inject(EmbarcacionesService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id;
  loading = false;
  saving = false;
  errorMessage = "";
  photos = [];
  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    type: ["LANCHA", Validators.required],
    capacity: [1, [Validators.required, Validators.min(1)]],
    description: [""],
    pricePerDay: [null],
    licensePlate: [""],
    year: [null],
    status: ["ACTIVE"]
  });
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;
    this.service.getById(this.id).subscribe({
      next: (e) => {
        this.form.patchValue({
          name: e.name,
          type: e.type,
          capacity: e.capacity,
          description: e.description ?? "",
          pricePerDay: e.pricePerDay ?? null,
          licensePlate: e.licensePlate ?? "",
          year: e.year ?? null,
          status: e.status
        });
        this.photos = [...e.photos ?? []];
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la embarcaci\xF3n.";
        this.loading = false;
      }
    });
  }
  onPhotoUploaded(url, index) {
    if (url) {
      this.photos[index] = url;
    } else {
      this.photos.splice(index, 1);
    }
  }
  addPhotoSlot() {
    this.photos.push("");
  }
  removePhoto(i) {
    this.photos.splice(i, 1);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const val = this.form.value;
    this.service.update(this.id, {
      name: val.name,
      type: val.type,
      capacity: Number(val.capacity),
      description: val.description || void 0,
      photos: this.photos.filter((p) => !!p),
      pricePerDay: val.pricePerDay ? Number(val.pricePerDay) : void 0,
      licensePlate: val.licensePlate || void 0,
      year: val.year ? Number(val.year) : void 0,
      status: val.status
    }).subscribe({
      next: () => this.router.navigate(["/embarcaciones"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Error al actualizar.";
        this.saving = false;
      }
    });
  }
  isInvalid(field) {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
  static \u0275fac = function EditarEmbarcacionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditarEmbarcacionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarEmbarcacionComponent, selectors: [["app-editar-embarcacion"]], decls: 12, vars: 2, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "gap-4"], ["routerLink", "/embarcaciones", 1, "text-gray-500", "hover:text-gray-700"], [1, "fas", "fa-arrow-left"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], ["class", "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-5", "md:grid-cols-2"], [1, "mb-1.5", "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["formControlName", "name", "type", "text", 1, "h-11", "w-full", "rounded-lg", "border", "px-4", "text-sm", "outline-none", "focus:border-brand-500"], ["formControlName", "type", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["value", "LANCHA"], ["value", "YATE"], ["value", "CATAMARAN"], ["value", "BOTE"], ["formControlName", "capacity", "type", "number", "min", "1", 1, "h-11", "w-full", "rounded-lg", "border", "px-4", "text-sm", "outline-none", "focus:border-brand-500"], ["formControlName", "pricePerDay", "type", "number", "min", "0", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "licensePlate", "type", "text", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "year", "type", "number", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["formControlName", "status", 1, "h-11", "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["value", "MAINTENANCE"], ["formControlName", "description", "rows", "3", 1, "w-full", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "py-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90"], [1, "border-t", "border-gray-100", "pt-5", "dark:border-gray-800"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "button", 1, "rounded-lg", "border", "border-brand-300", "px-3", "py-1.5", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", "dark:border-brand-700", "dark:text-brand-400", 3, "click"], ["class", "text-sm text-gray-400", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "md:grid-cols-3"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "gap-3", "pt-2"], ["routerLink", "/embarcaciones", 1, "rounded-lg", "border", "border-gray-300", "px-5", "py-2.5", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["type", "submit", 1, "rounded-lg", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-brand-600", "disabled:opacity-60", 3, "disabled"], [1, "rounded-lg", "border", "border-red-200", "bg-red-50", "p-3", "text-sm", "text-red-600"], [1, "text-sm", "text-gray-400"], [3, "uploaded", "label", "currentUrl"], ["type", "button", 1, "mt-1", "text-xs", "text-red-500", "hover:underline", 3, "click"]], template: function EditarEmbarcacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h1", 5);
      \u0275\u0275text(7, "Editar embarcaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Actualiza los datos de la embarcaci\xF3n.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, EditarEmbarcacionComponent_div_10_Template, 2, 0, "div", 7)(11, EditarEmbarcacionComponent_div_11_Template, 64, 14, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarEmbarcacionComponent, [{
    type: Component,
    args: [{ selector: "app-editar-embarcacion", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center gap-4">
      <a routerLink="/embarcaciones" class="text-gray-500 hover:text-gray-700">
        <i class="fas fa-arrow-left"></i>
      </a>
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Editar embarcaci\xF3n</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Actualiza los datos de la embarcaci\xF3n.</p>
      </div>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">
    Cargando...
  </div>

  <div *ngIf="!loading" class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-5">

      <div *ngIf="errorMessage" class="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">{{ errorMessage }}</div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre *</label>
          <input formControlName="name" type="text"
            class="h-11 w-full rounded-lg border px-4 text-sm outline-none focus:border-brand-500"
            [class.border-red-500]="isInvalid('name')" [class.border-gray-300]="!isInvalid('name')" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo *</label>
          <select formControlName="type"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="LANCHA">Lancha</option>
            <option value="YATE">Yate</option>
            <option value="CATAMARAN">Catamar\xE1n</option>
            <option value="BOTE">Bote</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Capacidad *</label>
          <input formControlName="capacity" type="number" min="1"
            class="h-11 w-full rounded-lg border px-4 text-sm outline-none focus:border-brand-500"
            [class.border-red-500]="isInvalid('capacity')" [class.border-gray-300]="!isInvalid('capacity')" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Precio por d\xEDa (USD)</label>
          <input formControlName="pricePerDay" type="number" min="0"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Matr\xEDcula</label>
          <input formControlName="licensePlate" type="text"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">A\xF1o</label>
          <input formControlName="year" type="number"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
          <select formControlName="status"
            class="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
            <option value="ACTIVE">Activa</option>
            <option value="INACTIVE">Inactiva</option>
            <option value="MAINTENANCE">Mantenimiento</option>
          </select>
        </div>
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
        <textarea formControlName="description" rows="3"
          class="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90"></textarea>
      </div>

      <!-- Fotos -->
      <div class="border-t border-gray-100 pt-5 dark:border-gray-800">
        <div class="mb-3 flex items-center justify-between">
          <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Fotos de la embarcaci\xF3n</h3>
          <button type="button" (click)="addPhotoSlot()"
            class="rounded-lg border border-brand-300 px-3 py-1.5 text-xs font-medium text-brand-600 hover:bg-brand-50 dark:border-brand-700 dark:text-brand-400">
            + Agregar foto
          </button>
        </div>
        <div *ngIf="photos.length === 0" class="text-sm text-gray-400">Sin fotos registradas.</div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div *ngFor="let p of photos; let i = index">
            <app-image-upload
              [label]="'Foto ' + (i + 1)"
              [currentUrl]="p"
              (uploaded)="onPhotoUploaded($event, i)">
            </app-image-upload>
            <button type="button" (click)="removePhoto(i)"
              class="mt-1 text-xs text-red-500 hover:underline">Eliminar foto {{ i + 1 }}</button>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-3 pt-2">
        <a routerLink="/embarcaciones"
          class="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
          Cancelar
        </a>
        <button type="submit" [disabled]="saving"
          class="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60">
          {{ saving ? 'Guardando...' : 'Actualizar' }}
        </button>
      </div>
    </form>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarEmbarcacionComponent, { className: "EditarEmbarcacionComponent", filePath: "src/app/pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component.ts", lineNumber: 14 });
})();
export {
  EditarEmbarcacionComponent
};
//# sourceMappingURL=chunk-V6MMHHC6.js.map
