import {
  ImageUploadComponent
} from "./chunk-CHEEZELV.js";
import {
  AMENITIES
} from "./chunk-TTYATM5N.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X6ED7CSN.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
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
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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

// src/app/pages/mi-charter/pages/form-yate/form-yate.component.ts
function FormYateComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd()();
  }
}
function FormYateComponent_form_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function FormYateComponent_form_13_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, "Nombre requerido.");
    \u0275\u0275elementEnd();
  }
}
function FormYateComponent_form_13_label_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 55);
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-brand-500", ctx_r1.f.type.value === t_r3.value)("bg-brand-50", ctx_r1.f.type.value === t_r3.value)("dark:bg-brand-500\\/10", ctx_r1.f.type.value === t_r3.value)("border-gray-200", ctx_r1.f.type.value !== t_r3.value)("dark:border-gray-700", ctx_r1.f.type.value !== t_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.value === "YATE" ? "Ideal para charter privado" : "Para grupos grandes");
  }
}
function FormYateComponent_form_13_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, "Requerido.");
    \u0275\u0275elementEnd();
  }
}
function FormYateComponent_form_13_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 17);
    \u0275\u0275text(2, "\u{1F4B5} Precio / d\xEDa (USD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 60);
    \u0275\u0275elementContainerEnd();
  }
}
function FormYateComponent_form_13_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 17);
    \u0275\u0275text(2, "\u{1F4B5} Precio / persona (USD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 61);
    \u0275\u0275elementContainerEnd();
  }
}
function FormYateComponent_form_13_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275text(2, "\u{1F4F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4, "Sin fotos todav\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 65);
    \u0275\u0275text(6, 'Haz clic en "+ Agregar foto" para subir im\xE1genes');
    \u0275\u0275elementEnd()();
  }
}
function FormYateComponent_form_13_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-image-upload", 66);
    \u0275\u0275listener("uploaded", function FormYateComponent_form_13_div_62_Template_app_image_upload_uploaded_1_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoUploaded($event, i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 67);
    \u0275\u0275listener("click", function FormYateComponent_form_13_div_62_Template_button_click_2_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePhoto(i_r5));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("label", "Foto " + (i_r5 + 1))("currentUrl", p_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Eliminar foto ", i_r5 + 1, " ");
  }
}
function FormYateComponent_form_13_label_83_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function FormYateComponent_form_13_label_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 68);
    \u0275\u0275listener("click", function FormYateComponent_form_13_label_83_Template_label_click_0_listener() {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAmenity(a_r8.value));
    });
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FormYateComponent_form_13_label_83_span_5_Template, 2, 0, "span", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-brand-400", ctx_r1.hasAmenity(a_r8.value))("bg-brand-50", ctx_r1.hasAmenity(a_r8.value))("dark:bg-brand-500\\/10", ctx_r1.hasAmenity(a_r8.value))("dark:border-brand-500", ctx_r1.hasAmenity(a_r8.value))("border-gray-100", !ctx_r1.hasAmenity(a_r8.value))("dark:border-gray-700", !ctx_r1.hasAmenity(a_r8.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasAmenity(a_r8.value));
  }
}
function FormYateComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function FormYateComponent_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardar());
    });
    \u0275\u0275template(1, FormYateComponent_form_13_div_1_Template, 2, 1, "div", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "div", 1)(5, "h2", 15);
    \u0275\u0275text(6, "Informaci\xF3n b\xE1sica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16)(8, "label", 17);
    \u0275\u0275text(9, " Nombre de la embarcaci\xF3n ");
    \u0275\u0275elementStart(10, "span", 18);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "input", 19);
    \u0275\u0275template(13, FormYateComponent_form_13_p_13_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "label", 17);
    \u0275\u0275text(16, "Tipo ");
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 21);
    \u0275\u0275template(20, FormYateComponent_form_13_label_20_Template, 9, 14, "label", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "div")(23, "label", 17);
    \u0275\u0275text(24, "\u{1F465} Capacidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 24);
    \u0275\u0275template(26, FormYateComponent_form_13_p_26_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "label", 17);
    \u0275\u0275text(29, "\u{1F6CF}\uFE0F Cabinas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "label", 17);
    \u0275\u0275text(33, "\u{1F6BF} Ba\xF1os");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23)(36, "div");
    \u0275\u0275template(37, FormYateComponent_form_13_ng_container_37_Template, 4, 0, "ng-container", 27)(38, FormYateComponent_form_13_ng_container_38_Template, 4, 0, "ng-container", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "label", 17);
    \u0275\u0275text(41, "\u{1F4C5} A\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div")(44, "label", 17);
    \u0275\u0275text(45, "\u{1FAAA} Matr\xEDcula");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div")(48, "label", 17);
    \u0275\u0275text(49, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 1)(52, "div", 31)(53, "div")(54, "h2", 32);
    \u0275\u0275text(55, "Fotos de la embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 33);
    \u0275\u0275text(57, "Las fotos aumentan significativamente las reservas. Agrega al menos 3.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 34);
    \u0275\u0275listener("click", function FormYateComponent_form_13_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPhotoSlot());
    });
    \u0275\u0275text(59, " + Agregar foto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, FormYateComponent_form_13_div_60_Template, 7, 0, "div", 35);
    \u0275\u0275elementStart(61, "div", 36);
    \u0275\u0275template(62, FormYateComponent_form_13_div_62_Template, 4, 3, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 38)(64, "div", 1)(65, "h2", 39);
    \u0275\u0275text(66, "Disponibilidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "label", 40)(68, "div", 41);
    \u0275\u0275element(69, "input", 42)(70, "div", 43)(71, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div")(73, "p", 45);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 46);
    \u0275\u0275text(76, "Los clientes solo ver\xE1n embarcaciones disponibles y verificadas.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "div", 1)(78, "h2", 47);
    \u0275\u0275text(79, "Servicios y amenidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 48);
    \u0275\u0275text(81, "Selecciona todo lo que ofrece tu embarcaci\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 49);
    \u0275\u0275template(83, FormYateComponent_form_13_label_83_Template, 6, 15, "label", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "button", 51);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 52);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.f.name.touched && ctx_r1.f.name.invalid);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.TYPES);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.f.capacity.touched && ctx_r1.f.capacity.invalid);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r1.isPricePerPerson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPricePerPerson);
    \u0275\u0275advance(4);
    \u0275\u0275property("max", 2026);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.photos.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.photos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.f.isAvailable.value ? "\u2713 Disponible para reservas" : "\u2717 No disponible", " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.ALL_AMENITIES);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Guardando..." : ctx_r1.isEdit ? "\u2713 Guardar cambios" : "\u2713 Registrar embarcaci\xF3n", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEdit ? "Los cambios pueden requerir nueva verificaci\xF3n." : "Tu embarcaci\xF3n ser\xE1 revisada antes de aparecer a los clientes.", " ");
  }
}
var FormYateComponent = class _FormYateComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  embService = inject(EmbarcacionesService);
  authService = inject(AuthService);
  ALL_AMENITIES = AMENITIES;
  TYPES = [
    { value: "LANCHA", label: "Lancha", icon: "\u{1F6A4}" },
    { value: "YATE", label: "Yate", icon: "\u26F5" },
    { value: "CATAMARAN", label: "Catamar\xE1n", icon: "\u{1F6E5}\uFE0F" },
    { value: "BOTE", label: "Bote", icon: "\u{1F6F6}" }
  ];
  editId = null;
  loading = false;
  saving = false;
  errorMessage = "";
  selectedAmenities = [];
  photos = [];
  get isEdit() {
    return this.editId !== null;
  }
  get providerProfileId() {
    const user = this.authService.user();
    return user?.providerProfile?.id ?? null;
  }
  LANCHA_TYPES = ["LANCHA"];
  get isPricePerPerson() {
    return this.LANCHA_TYPES.includes(this.f?.type?.value ?? "");
  }
  form = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(150)]],
    type: ["YATE", Validators.required],
    capacity: [10, [Validators.required, Validators.min(1), Validators.max(200)]],
    rooms: [null],
    bathrooms: [null],
    pricePerDay: [null],
    pricePerPerson: [null],
    year: [null],
    licensePlate: [""],
    description: [""],
    isAvailable: [true]
  });
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId = Number(id);
      this.loading = true;
      this.embService.getById(this.editId).subscribe({
        next: (v) => {
          this.form.patchValue({
            name: v.name,
            type: v.type,
            capacity: v.capacity,
            rooms: v.rooms ?? null,
            bathrooms: v.bathrooms ?? null,
            pricePerDay: v.pricePerDay ?? null,
            pricePerPerson: v.pricePerPerson ?? null,
            year: v.year ?? null,
            licensePlate: v.licensePlate ?? "",
            description: v.description ?? "",
            isAvailable: v.isAvailable
          });
          this.selectedAmenities = [...v.amenities ?? []];
          this.photos = [...v.photos ?? []];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }
  onPhotoUploaded(url, index) {
    if (url)
      this.photos[index] = url;
    else
      this.photos.splice(index, 1);
  }
  addPhotoSlot() {
    this.photos.push("");
  }
  removePhoto(i) {
    this.photos.splice(i, 1);
  }
  toggleAmenity(value) {
    const idx = this.selectedAmenities.indexOf(value);
    if (idx === -1)
      this.selectedAmenities.push(value);
    else
      this.selectedAmenities.splice(idx, 1);
  }
  hasAmenity(value) {
    return this.selectedAmenities.includes(value);
  }
  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const pid = this.providerProfileId;
    if (!pid && !this.isEdit) {
      this.errorMessage = "No se encontr\xF3 tu perfil de proveedor.";
      return;
    }
    const isLancha = this.isPricePerPerson;
    const price = isLancha ? this.f.pricePerPerson.value : this.f.pricePerDay.value;
    if (!price || Number(price) < 1) {
      this.errorMessage = "Debes ingresar un precio v\xE1lido.";
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const payload = __spreadValues({
      name: this.f.name.value,
      type: this.f.type.value,
      capacity: Number(this.f.capacity.value),
      rooms: this.f.rooms.value ?? void 0,
      bathrooms: this.f.bathrooms.value ?? void 0,
      pricePerDay: isLancha ? void 0 : Number(this.f.pricePerDay.value),
      pricePerPerson: isLancha ? Number(this.f.pricePerPerson.value) : void 0,
      year: this.f.year.value ?? void 0,
      licensePlate: this.f.licensePlate.value ?? void 0,
      description: this.f.description.value ?? void 0,
      isAvailable: this.f.isAvailable.value ?? true,
      amenities: this.selectedAmenities,
      photos: this.photos.filter((p) => !!p)
    }, this.isEdit ? {} : { providerId: pid });
    const req$ = this.isEdit ? this.embService.update(this.editId, payload) : this.embService.create(payload);
    req$.subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(["/mi-charter/yates"]);
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "Error al guardar.";
        this.saving = false;
      }
    });
  }
  static \u0275fac = function FormYateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormYateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormYateComponent, selectors: [["app-form-yate"]], decls: 14, vars: 4, consts: [[1, "space-y-6", "pb-12"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-4", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-brand-500"], [1, "mt-1", "text-3xl", "font-extrabold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mi-charter/yates", 1, "inline-flex", "items-center", "gap-2", "justify-center", "rounded-xl", "border", "border-gray-300", "px-6", "py-3", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300"], ["class", "flex justify-center py-20", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "text-6xl", "animate-bounce"], [3, "ngSubmit", "formGroup"], ["class", "mb-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "flex", "flex-col", "gap-6", "lg:flex-row", "lg:items-start"], [1, "flex-1", "min-w-0", "space-y-6"], [1, "mb-5", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mb-5"], [1, "mb-2", "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "Ej: La Gaviota Blanca", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "transition", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], ["class", "flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition", 3, "border-brand-500", "bg-brand-50", "dark:bg-brand-500\\/10", "border-gray-200", "dark:border-gray-700", 4, "ngFor", "ngForOf"], [1, "mb-5", "grid", "grid-cols-3", "gap-4"], ["type", "number", "formControlName", "capacity", "min", "1", "max", "200", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], ["type", "number", "formControlName", "rooms", "min", "0", "placeholder", "Opcional", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], ["type", "number", "formControlName", "bathrooms", "min", "0", "placeholder", "Opcional", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], [4, "ngIf"], ["type", "number", "formControlName", "year", "min", "1980", "placeholder", "2022", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", 3, "max"], ["type", "text", "formControlName", "licensePlate", "placeholder", "AB-1234", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], ["formControlName", "description", "rows", "4", "placeholder", "Describe tu embarcaci\xF3n, la experiencia a bordo, rutas favoritas, caracter\xEDsticas destacadas...", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "py-3", "text-sm", "text-gray-800", "outline-none", "focus:border-brand-400", "focus:bg-white", "transition", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white", "resize-none"], [1, "mb-5", "flex", "items-center", "justify-between"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-sm", "text-gray-400"], ["type", "button", 1, "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition", 3, "click"], ["class", "rounded-2xl border-2 border-dashed border-gray-200 py-14 text-center dark:border-gray-700", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "sm:grid-cols-3"], [4, "ngFor", "ngForOf"], [1, "w-full", "flex-shrink-0", "space-y-5", "lg:sticky", "lg:top-6", "lg:w-80", "xl:w-96"], [1, "mb-4", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "flex", "cursor-pointer", "items-center", "gap-4"], [1, "relative", "flex-shrink-0"], ["type", "checkbox", "formControlName", "isAvailable", 1, "sr-only", "peer"], [1, "h-7", "w-14", "rounded-full", "bg-gray-200", "peer-checked:bg-brand-500", "dark:bg-gray-700", "transition-colors"], [1, "absolute", "left-0.5", "top-0.5", "h-6", "w-6", "rounded-full", "bg-white", "shadow", "transition-transform", "peer-checked:translate-x-7"], [1, "font-semibold", "text-gray-800", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "mb-1", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mb-4", "text-xs", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-2"], ["class", "flex cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2.5 transition select-none", 3, "border-brand-400", "bg-brand-50", "dark:bg-brand-500\\/10", "dark:border-brand-500", "border-gray-100", "dark:border-gray-700", "click", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "w-full", "rounded-2xl", "bg-brand-500", "py-5", "text-base", "font-extrabold", "text-white", "shadow-lg", "hover:bg-brand-600", "disabled:opacity-50", "transition-colors", 3, "disabled"], [1, "text-center", "text-xs", "text-gray-400"], [1, "mb-5", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-5", "py-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-500"], [1, "flex", "cursor-pointer", "items-center", "gap-4", "rounded-2xl", "border-2", "p-5", "transition"], ["type", "radio", "formControlName", "type", 1, "sr-only", 3, "value"], [1, "text-4xl"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-white"], [1, "text-xs", "text-gray-400"], ["type", "number", "formControlName", "pricePerDay", "min", "1", "placeholder", "250", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], ["type", "number", "formControlName", "pricePerPerson", "min", "1", "placeholder", "35", 1, "h-12", "w-full", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "text-base", "outline-none", "focus:border-brand-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-slate-800", "dark:text-white"], [1, "rounded-2xl", "border-2", "border-dashed", "border-gray-200", "py-14", "text-center", "dark:border-gray-700"], [1, "text-5xl", "mb-3", "opacity-30"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "text-xs", "text-gray-400", "mt-1"], [3, "uploaded", "label", "currentUrl"], ["type", "button", 1, "mt-1.5", "w-full", "rounded-lg", "border", "border-red-200", "py-1", "text-xs", "font-medium", "text-red-500", "hover:bg-red-50", "transition", 3, "click"], [1, "flex", "cursor-pointer", "items-center", "gap-3", "rounded-xl", "border-2", "px-3", "py-2.5", "transition", "select-none", 3, "click"], [1, "text-lg"], [1, "flex-1", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["class", "text-brand-500 text-sm font-bold", 4, "ngIf"], [1, "text-brand-500", "text-sm", "font-bold"]], template: function FormYateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "p", 3);
      \u0275\u0275text(5, "Mi Charter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, " \u2190 Volver a mis embarcaciones ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, FormYateComponent_div_12_Template, 3, 0, "div", 7)(13, FormYateComponent_form_13_Template, 88, 15, "form", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Editar embarcaci\xF3n" : "Nueva embarcaci\xF3n", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Actualiza los datos de tu yate o catamar\xE1n." : "Registra tu yate o catamar\xE1n para recibir reservas de los clientes.", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink, ImageUploadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormYateComponent, [{
    type: Component,
    args: [{ selector: "app-form-yate", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent], template: `<div class="space-y-6 pb-12">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-500">Mi Charter</p>
        <h1 class="mt-1 text-3xl font-extrabold text-gray-800 dark:text-white/90">
          {{ isEdit ? 'Editar embarcaci\xF3n' : 'Nueva embarcaci\xF3n' }}
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ isEdit ? 'Actualiza los datos de tu yate o catamar\xE1n.' : 'Registra tu yate o catamar\xE1n para recibir reservas de los clientes.' }}
        </p>
      </div>
      <a routerLink="/mi-charter/yates"
        class="inline-flex items-center gap-2 justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">
        \u2190 Volver a mis embarcaciones
      </a>
    </div>
  </div>

  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-6xl animate-bounce">\u26F5</div>
  </div>

  <form *ngIf="!loading" [formGroup]="form" (ngSubmit)="guardar()">

    <div *ngIf="errorMessage"
      class="mb-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">
      \u26A0\uFE0F {{ errorMessage }}
    </div>

    <!-- Layout 2 columnas -->
    <div class="flex flex-col gap-6 lg:flex-row lg:items-start">

      <!-- \u2550\u2550 COLUMNA IZQUIERDA \u2550\u2550 -->
      <div class="flex-1 min-w-0 space-y-6">

        <!-- Informaci\xF3n b\xE1sica -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-5 text-lg font-bold text-gray-800 dark:text-white/90">Informaci\xF3n b\xE1sica</h2>

          <!-- Nombre -->
          <div class="mb-5">
            <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Nombre de la embarcaci\xF3n <span class="text-red-500">*</span>
            </label>
            <input type="text" formControlName="name" placeholder="Ej: La Gaviota Blanca"
              class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base text-gray-800 outline-none focus:border-brand-400 focus:bg-white transition dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            <p *ngIf="f.name.touched && f.name.invalid" class="mt-1 text-xs text-red-500">Nombre requerido.</p>
          </div>

          <!-- Tipo -->
          <div class="mb-5">
            <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Tipo <span class="text-red-500">*</span></label>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <label *ngFor="let t of TYPES"
                class="flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition"
                [class.border-brand-500]="f.type.value === t.value"
                [class.bg-brand-50]="f.type.value === t.value"
                [class.dark:bg-brand-500\\/10]="f.type.value === t.value"
                [class.border-gray-200]="f.type.value !== t.value"
                [class.dark:border-gray-700]="f.type.value !== t.value">
                <input type="radio" formControlName="type" [value]="t.value" class="sr-only" />
                <span class="text-4xl">{{ t.icon }}</span>
                <div>
                  <p class="text-base font-bold text-gray-800 dark:text-white">{{ t.label }}</p>
                  <p class="text-xs text-gray-400">{{ t.value === 'YATE' ? 'Ideal para charter privado' : 'Para grupos grandes' }}</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Capacidad, Cabinas, Ba\xF1os -->
          <div class="mb-5 grid grid-cols-3 gap-4">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F465} Capacidad *</label>
              <input type="number" formControlName="capacity" min="1" max="200"
                class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
              <p *ngIf="f.capacity.touched && f.capacity.invalid" class="mt-1 text-xs text-red-500">Requerido.</p>
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F6CF}\uFE0F Cabinas</label>
              <input type="number" formControlName="rooms" min="0" placeholder="Opcional"
                class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F6BF} Ba\xF1os</label>
              <input type="number" formControlName="bathrooms" min="0" placeholder="Opcional"
                class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            </div>
          </div>

          <!-- Precio, A\xF1o, Matr\xEDcula -->
          <div class="mb-5 grid grid-cols-3 gap-4">
            <div>
              <ng-container *ngIf="!isPricePerPerson">
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F4B5} Precio / d\xEDa (USD) *</label>
                <input type="number" formControlName="pricePerDay" min="1" placeholder="250"
                  class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
              </ng-container>
              <ng-container *ngIf="isPricePerPerson">
                <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F4B5} Precio / persona (USD) *</label>
                <input type="number" formControlName="pricePerPerson" min="1" placeholder="35"
                  class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
              </ng-container>
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1F4C5} A\xF1o</label>
              <input type="number" formControlName="year" min="1980" [max]="2026" placeholder="2022"
                class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">\u{1FAAA} Matr\xEDcula</label>
              <input type="text" formControlName="licensePlate" placeholder="AB-1234"
                class="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-base outline-none focus:border-brand-400 focus:bg-white dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
            </div>
          </div>

          <!-- Descripci\xF3n -->
          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Descripci\xF3n</label>
            <textarea formControlName="description" rows="4"
              placeholder="Describe tu embarcaci\xF3n, la experiencia a bordo, rutas favoritas, caracter\xEDsticas destacadas..."
              class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand-400 focus:bg-white transition dark:border-gray-700 dark:bg-slate-800 dark:text-white resize-none"></textarea>
          </div>
        </div>

        <!-- Fotos -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <div class="mb-5 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-gray-800 dark:text-white/90">Fotos de la embarcaci\xF3n</h2>
              <p class="mt-0.5 text-sm text-gray-400">Las fotos aumentan significativamente las reservas. Agrega al menos 3.</p>
            </div>
            <button type="button" (click)="addPhotoSlot()"
              class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition">
              + Agregar foto
            </button>
          </div>
          <div *ngIf="photos.length === 0"
            class="rounded-2xl border-2 border-dashed border-gray-200 py-14 text-center dark:border-gray-700">
            <div class="text-5xl mb-3 opacity-30">\u{1F4F7}</div>
            <p class="text-sm font-medium text-gray-500">Sin fotos todav\xEDa</p>
            <p class="text-xs text-gray-400 mt-1">Haz clic en "+ Agregar foto" para subir im\xE1genes</p>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div *ngFor="let p of photos; let i = index">
              <app-image-upload
                [label]="'Foto ' + (i + 1)"
                [currentUrl]="p"
                (uploaded)="onPhotoUploaded($event, i)">
              </app-image-upload>
              <button type="button" (click)="removePhoto(i)"
                class="mt-1.5 w-full rounded-lg border border-red-200 py-1 text-xs font-medium text-red-500 hover:bg-red-50 transition">
                Eliminar foto {{ i + 1 }}
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- \u2550\u2550 COLUMNA DERECHA (sticky) \u2550\u2550 -->
      <div class="w-full flex-shrink-0 space-y-5 lg:sticky lg:top-6 lg:w-80 xl:w-96">

        <!-- Disponibilidad -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-4 text-base font-bold text-gray-800 dark:text-white/90">Disponibilidad</h2>
          <label class="flex cursor-pointer items-center gap-4">
            <div class="relative flex-shrink-0">
              <input type="checkbox" formControlName="isAvailable" class="sr-only peer" />
              <div class="h-7 w-14 rounded-full bg-gray-200 peer-checked:bg-brand-500 dark:bg-gray-700 transition-colors"></div>
              <div class="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform peer-checked:translate-x-7"></div>
            </div>
            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                {{ f.isAvailable.value ? '\u2713 Disponible para reservas' : '\u2717 No disponible' }}
              </p>
              <p class="mt-0.5 text-xs text-gray-400">Los clientes solo ver\xE1n embarcaciones disponibles y verificadas.</p>
            </div>
          </label>
        </div>

        <!-- Amenidades -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
          <h2 class="mb-1 text-base font-bold text-gray-800 dark:text-white/90">Servicios y amenidades</h2>
          <p class="mb-4 text-xs text-gray-400">Selecciona todo lo que ofrece tu embarcaci\xF3n.</p>
          <div class="grid grid-cols-1 gap-2">
            <label *ngFor="let a of ALL_AMENITIES"
              (click)="toggleAmenity(a.value)"
              class="flex cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2.5 transition select-none"
              [class.border-brand-400]="hasAmenity(a.value)"
              [class.bg-brand-50]="hasAmenity(a.value)"
              [class.dark:bg-brand-500\\/10]="hasAmenity(a.value)"
              [class.dark:border-brand-500]="hasAmenity(a.value)"
              [class.border-gray-100]="!hasAmenity(a.value)"
              [class.dark:border-gray-700]="!hasAmenity(a.value)">
              <span class="text-lg">{{ a.icon }}</span>
              <span class="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">{{ a.label }}</span>
              <span *ngIf="hasAmenity(a.value)" class="text-brand-500 text-sm font-bold">\u2713</span>
            </label>
          </div>
        </div>

        <!-- CTA -->
        <button type="submit" [disabled]="saving"
          class="w-full rounded-2xl bg-brand-500 py-5 text-base font-extrabold text-white shadow-lg hover:bg-brand-600 disabled:opacity-50 transition-colors">
          {{ saving ? 'Guardando...' : (isEdit ? '\u2713 Guardar cambios' : '\u2713 Registrar embarcaci\xF3n') }}
        </button>

        <p class="text-center text-xs text-gray-400">
          {{ isEdit ? 'Los cambios pueden requerir nueva verificaci\xF3n.' : 'Tu embarcaci\xF3n ser\xE1 revisada antes de aparecer a los clientes.' }}
        </p>

      </div>
    </div>

  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormYateComponent, { className: "FormYateComponent", filePath: "src/app/pages/mi-charter/pages/form-yate/form-yate.component.ts", lineNumber: 18 });
})();
export {
  FormYateComponent
};
//# sourceMappingURL=chunk-DKTJ22ES.js.map
