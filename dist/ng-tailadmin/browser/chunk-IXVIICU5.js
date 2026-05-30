import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7NRIB5KE.js";
import "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  environment,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/faq/faq.component.ts
var _c0 = () => [1, 2, 3, 4];
function FaqComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function FaqComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " + Nueva FAQ ");
    \u0275\u0275elementEnd();
  }
}
function FaqComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function FaqComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function FaqComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, FaqComponent_div_14_div_1_Template, 1, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function FaqComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.search ? "No hay FAQs que coincidan con tu b\xFAsqueda." : "A\xFAn no hay preguntas frecuentes.", " ");
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, " Inactiva ");
    \u0275\u0275elementEnd();
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openEdit(f_r5));
    });
    \u0275\u0275text(2, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleActive(f_r5));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.delete(f_r5));
    });
    \u0275\u0275text(6, " \u{1F5D1}\uFE0F Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", f_r5.isActive ? "border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-500/20" : "border-green-200 text-green-600 hover:bg-green-50 dark:border-green-500/20");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r5.isActive ? "\u{1F648} Desactivar" : "\u{1F441}\uFE0F Activar", " ");
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_div_3_Template, 7, 2, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r5.answer, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMaster);
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_Template_button_click_1_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggle(f_r5.id));
    });
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275template(5, FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_span_5_Template, 2, 0, "span", 31);
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7, " \u2193 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_div_8_Template, 4, 2, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("opacity-50", !f_r5.isActive && ctx_r1.isMaster);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.question);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isMaster && !f_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", ctx_r1.openId === f_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.openId === f_r5.id);
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275template(4, FaqComponent_div_16_ng_container_1_ng_container_1_div_1_div_4_Template, 9, 7, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const catFaqs_r7 = \u0275\u0275nextContext().ngIf;
    const cat_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", catFaqs_r7);
  }
}
function FaqComponent_div_16_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FaqComponent_div_16_ng_container_1_ng_container_1_div_1_Template, 5, 2, "div", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const catFaqs_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catFaqs_r7.length > 0);
  }
}
function FaqComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FaqComponent_div_16_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.byCat(cat_r8));
  }
}
function FaqComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, FaqComponent_div_16_ng_container_1_Template, 2, 1, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function FaqComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function FaqComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function FaqComponent_div_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h2", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "div")(6, "label", 46);
    \u0275\u0275text(7, "Pregunta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_div_17_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.question, $event) || (ctx_r1.form.question = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 46);
    \u0275\u0275text(11, "Respuesta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_div_17_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.answer, $event) || (ctx_r1.form.answer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 49)(14, "div")(15, "label", 46);
    \u0275\u0275text(16, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_div_17_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.category, $event) || (ctx_r1.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 51);
    \u0275\u0275text(19, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 52);
    \u0275\u0275text(21, "Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 53);
    \u0275\u0275text(23, "Reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 54);
    \u0275\u0275text(25, "Embarcaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 55);
    \u0275\u0275text(27, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 56);
    \u0275\u0275text(29, "Proveedores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div")(31, "label", 46);
    \u0275\u0275text(32, "Orden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_div_17_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sortOrder, $event) || (ctx_r1.form.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "label", 58)(35, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_div_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 60);
    \u0275\u0275text(37, "Visible para los usuarios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 61)(39, "button", 62);
    \u0275\u0275listener("click", function FaqComponent_div_17_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 63);
    \u0275\u0275listener("click", function FaqComponent_div_17_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(42, " Cancelar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editTarget ? "Editar FAQ" : "Nueva FAQ", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.question);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.answer);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.category);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.form.question.trim() || !ctx_r1.form.answer.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Guardando\u2026" : ctx_r1.editTarget ? "Guardar cambios" : "Crear FAQ", " ");
  }
}
var FaqComponent = class _FaqComponent {
  http = inject(HttpClient);
  auth = inject(AuthService);
  base = `${environment.apiUrl}/faqs`;
  get isMaster() {
    return this.auth.role() === "MASTER" || this.auth.role() === "ADMINISTRADOR";
  }
  faqs = [];
  loading = true;
  openId = null;
  search = "";
  filterCat = "";
  showForm = false;
  editTarget = null;
  form = { question: "", answer: "", category: "General", sortOrder: 0, isActive: true };
  saving = false;
  get categories() {
    return [...new Set(this.faqs.map((f) => f.category))].sort();
  }
  byCat(cat) {
    return this.filtered.filter((f) => f.category === cat);
  }
  get filtered() {
    const q = this.search.toLowerCase().trim();
    return this.faqs.filter((f) => {
      const matchCat = !this.filterCat || f.category === this.filterCat;
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCat && matchSearch && (this.isMaster || f.isActive);
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = this.isMaster ? "" : "?active=true";
    this.http.get(`${this.base}${params}`).subscribe({
      next: (f) => {
        this.faqs = f;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggle(id) {
    this.openId = this.openId === id ? null : id;
  }
  openCreate() {
    this.editTarget = null;
    this.form = { question: "", answer: "", category: "General", sortOrder: 0, isActive: true };
    this.showForm = true;
  }
  openEdit(f) {
    this.editTarget = f;
    this.form = { question: f.question, answer: f.answer, category: f.category, sortOrder: f.sortOrder, isActive: f.isActive };
    this.showForm = true;
  }
  save() {
    if (!this.form.question.trim() || !this.form.answer.trim())
      return;
    this.saving = true;
    const req = this.editTarget ? this.http.patch(`${this.base}/${this.editTarget.id}`, this.form) : this.http.post(this.base, this.form);
    req.subscribe({
      next: () => {
        this.load();
        this.showForm = false;
        this.saving = false;
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  delete(f) {
    if (!confirm(`\xBFEliminar "${f.question}"?`))
      return;
    this.http.delete(`${this.base}/${f.id}`).subscribe({ next: () => this.load() });
  }
  toggleActive(f) {
    this.http.patch(`${this.base}/${f.id}`, { isActive: !f.isActive }).subscribe({
      next: (updated) => {
        const idx = this.faqs.findIndex((x) => x.id === f.id);
        if (idx !== -1)
          this.faqs[idx] = updated;
      }
    });
  }
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 18, vars: 9, consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 shadow-md transition", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "gap-3", "sm:flex-row"], ["placeholder", "Buscar pregunta\u2026", 1, "flex-1", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "space-y-3", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4", 3, "click", 4, "ngIf"], [1, "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "shadow-md", "transition", 3, "click"], [3, "value"], [1, "space-y-3"], ["class", "h-16 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]", 4, "ngFor", "ngForOf"], [1, "h-16", "animate-pulse", "rounded-2xl", "bg-gray-100", "dark:bg-white/[0.04]"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-200", "p-14", "text-center", "dark:border-gray-700"], [1, "mb-3", "text-5xl"], [1, "text-gray-500", "dark:text-gray-400"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-gray-400"], [1, "space-y-2"], ["class", "overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]", 3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "w-full", "items-center", "justify-between", "gap-4", "px-6", "py-4", "text-left", "transition", "hover:bg-gray-50", "dark:hover:bg-white/[0.02]", 3, "click"], [1, "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "flex", "flex-shrink-0", "items-center", "gap-2"], ["class", "rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-400 dark:bg-gray-700", 4, "ngIf"], [1, "text-gray-400", "transition-transform", "duration-200", "text-xl"], ["class", "border-t border-gray-100 dark:border-gray-800", 4, "ngIf"], [1, "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-gray-400", "dark:bg-gray-700"], [1, "border-t", "border-gray-100", "dark:border-gray-800"], [1, "px-6", "py-4", "text-sm", "leading-relaxed", "text-gray-600", "dark:text-gray-300"], ["class", "flex gap-2 border-t border-gray-100 px-6 py-3 dark:border-gray-800", 4, "ngIf"], [1, "flex", "gap-2", "border-t", "border-gray-100", "px-6", "py-3", "dark:border-gray-800"], [1, "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "transition", 3, "click"], [1, "rounded-lg", "border", "px-3", "py-1.5", "text-xs", "font-medium", "transition", 3, "click", "ngClass"], [1, "rounded-lg", "border", "border-red-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:bg-red-50", "transition", "dark:border-red-500/20", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-sm", "p-4", 3, "click"], [1, "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "dark:bg-gray-900", 3, "click"], [1, "mb-5", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "space-y-4"], [1, "mb-1", "block", "text-xs", "font-semibold", "text-gray-500"], ["placeholder", "\xBFC\xF3mo puedo\u2026?", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Escribe la respuesta completa\u2026", 1, "w-full", "resize-none", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], [1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "ngModel"], ["value", "General"], ["value", "Pagos"], ["value", "Reservas"], ["value", "Embarcaciones"], ["value", "Cuenta"], ["value", "Proveedores"], ["type", "number", "min", "0", 1, "w-full", "rounded-xl", "border", "border-gray-200", "bg-white", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "flex", "cursor-pointer", "items-center", "gap-3"], ["type", "checkbox", 1, "h-4", "w-4", "rounded", "accent-brand-500", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "mt-6", "flex", "gap-3"], [1, "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-50", "transition", 3, "click", "disabled"], [1, "rounded-xl", "border", "border-gray-200", "px-6", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "transition", 3, "click"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u2753 Preguntas frecuentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, FaqComponent_button_7_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterCat, $event) || (ctx.filterCat = $event);
        return $event;
      });
      \u0275\u0275elementStart(11, "option", 8);
      \u0275\u0275text(12, "Todas las categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, FaqComponent_option_13_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, FaqComponent_div_14_Template, 2, 2, "div", 10)(15, FaqComponent_div_15_Template, 5, 1, "div", 11)(16, FaqComponent_div_16_Template, 2, 1, "div", 12)(17, FaqComponent_div_17_Template, 43, 8, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isMaster ? "Gestiona las preguntas y respuestas del sistema" : "Encuentra respuestas r\xE1pidas a tus dudas", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMaster);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterCat);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm && ctx.isMaster);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">\u2753 Preguntas frecuentes</h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ isMaster ? 'Gestiona las preguntas y respuestas del sistema' : 'Encuentra respuestas r\xE1pidas a tus dudas' }}
      </p>
    </div>
    <button *ngIf="isMaster" (click)="openCreate()"
      class="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 shadow-md transition">
      + Nueva FAQ
    </button>
  </div>

  <!-- Buscador + filtro -->
  <div class="flex flex-col gap-3 sm:flex-row">
    <input [(ngModel)]="search" placeholder="Buscar pregunta\u2026"
      class="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
    <select [(ngModel)]="filterCat"
      class="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <option value="">Todas las categor\xEDas</option>
      <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
    </select>
  </div>

  <!-- Skeleton -->
  <div *ngIf="loading" class="space-y-3">
    <div *ngFor="let _ of [1,2,3,4]" class="h-16 animate-pulse rounded-2xl bg-gray-100 dark:bg-white/[0.04]"></div>
  </div>

  <!-- Sin resultados -->
  <div *ngIf="!loading && filtered.length === 0"
    class="rounded-2xl border border-dashed border-gray-200 p-14 text-center dark:border-gray-700">
    <div class="mb-3 text-5xl">\u{1F50D}</div>
    <p class="text-gray-500 dark:text-gray-400">
      {{ search ? 'No hay FAQs que coincidan con tu b\xFAsqueda.' : 'A\xFAn no hay preguntas frecuentes.' }}
    </p>
  </div>

  <!-- Lista agrupada por categor\xEDa -->
  <div *ngIf="!loading && filtered.length > 0" class="space-y-6">
    <ng-container *ngFor="let cat of categories">
      <ng-container *ngIf="byCat(cat) as catFaqs">
        <div *ngIf="catFaqs.length > 0">
          <h3 class="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{{ cat }}</h3>
          <div class="space-y-2">
            <div *ngFor="let f of catFaqs"
              class="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
              [class.opacity-50]="!f.isActive && isMaster">
              <!-- Pregunta -->
              <button (click)="toggle(f.id)"
                class="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                <span class="font-semibold text-gray-800 dark:text-white/90">{{ f.question }}</span>
                <div class="flex flex-shrink-0 items-center gap-2">
                  <span *ngIf="isMaster && !f.isActive"
                    class="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-400 dark:bg-gray-700">
                    Inactiva
                  </span>
                  <span class="text-gray-400 transition-transform duration-200 text-xl"
                    [class.rotate-180]="openId === f.id">
                    \u2193
                  </span>
                </div>
              </button>
              <!-- Respuesta -->
              <div *ngIf="openId === f.id" class="border-t border-gray-100 dark:border-gray-800">
                <p class="px-6 py-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {{ f.answer }}
                </p>
                <!-- Acciones master -->
                <div *ngIf="isMaster" class="flex gap-2 border-t border-gray-100 px-6 py-3 dark:border-gray-800">
                  <button (click)="openEdit(f)"
                    class="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
                    \u270F\uFE0F Editar
                  </button>
                  <button (click)="toggleActive(f)"
                    class="rounded-lg border px-3 py-1.5 text-xs font-medium transition"
                    [ngClass]="f.isActive
                      ? 'border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-500/20'
                      : 'border-green-200 text-green-600 hover:bg-green-50 dark:border-green-500/20'">
                    {{ f.isActive ? '\u{1F648} Desactivar' : '\u{1F441}\uFE0F Activar' }}
                  </button>
                  <button (click)="delete(f)"
                    class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition dark:border-red-500/20">
                    \u{1F5D1}\uFE0F Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  </div>

  <!-- Modal crear/editar (MASTER) -->
  <div *ngIf="showForm && isMaster"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    (click)="showForm = false">
    <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
      (click)="$event.stopPropagation()">
      <h2 class="mb-5 text-lg font-bold text-gray-800 dark:text-white/90">
        {{ editTarget ? 'Editar FAQ' : 'Nueva FAQ' }}
      </h2>
      <div class="space-y-4">
        <div>
          <label class="mb-1 block text-xs font-semibold text-gray-500">Pregunta *</label>
          <input [(ngModel)]="form.question" placeholder="\xBFC\xF3mo puedo\u2026?"
            class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </div>
        <div>
          <label class="mb-1 block text-xs font-semibold text-gray-500">Respuesta *</label>
          <textarea [(ngModel)]="form.answer" rows="4" placeholder="Escribe la respuesta completa\u2026"
            class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"></textarea>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="mb-1 block text-xs font-semibold text-gray-500">Categor\xEDa</label>
            <select [(ngModel)]="form.category"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <option value="General">General</option>
              <option value="Pagos">Pagos</option>
              <option value="Reservas">Reservas</option>
              <option value="Embarcaciones">Embarcaciones</option>
              <option value="Cuenta">Cuenta</option>
              <option value="Proveedores">Proveedores</option>
            </select>
          </div>
          <div>
            <label class="mb-1 block text-xs font-semibold text-gray-500">Orden</label>
            <input type="number" [(ngModel)]="form.sortOrder" min="0"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
          </div>
        </div>
        <label class="flex cursor-pointer items-center gap-3">
          <input type="checkbox" [(ngModel)]="form.isActive" class="h-4 w-4 rounded accent-brand-500" />
          <span class="text-sm text-gray-700 dark:text-gray-300">Visible para los usuarios</span>
        </label>
      </div>
      <div class="mt-6 flex gap-3">
        <button (click)="save()" [disabled]="saving || !form.question.trim() || !form.answer.trim()"
          class="rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50 transition">
          {{ saving ? 'Guardando\u2026' : (editTarget ? 'Guardar cambios' : 'Crear FAQ') }}
        </button>
        <button (click)="showForm = false"
          class="rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 transition">
          Cancelar
        </button>
      </div>
    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/pages/faq/faq.component.ts", lineNumber: 23 });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-IXVIICU5.js.map
