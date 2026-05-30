import {
  FilesService
} from "./chunk-PFOQZ4L6.js";
import {
  CaptainsService
} from "./chunk-NRCCU5JU.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7NRIB5KE.js";
import "./chunk-DNRCO4H6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VNQE6XX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/shared/components/doc-upload/doc-upload.component.ts
function DocUploadComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function DocUploadComponent_div_3_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275text(5, " Ver \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.absUrl(ctx_r1.currentUrl), \u0275\u0275sanitizeUrl)("alt", ctx_r1.label);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.absUrl(ctx_r1.currentUrl), \u0275\u0275sanitizeUrl);
  }
}
function DocUploadComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8, "Documento adjunto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 17)(10, "a", 18);
    \u0275\u0275text(11, " Abrir \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function DocUploadComponent_div_3_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(13, " \u2715 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.label);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r1.absUrl(ctx_r1.currentUrl), \u0275\u0275sanitizeUrl);
  }
}
function DocUploadComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, DocUploadComponent_div_3_div_1_Template, 6, 3, "div", 6)(2, DocUploadComponent_div_3_div_2_Template, 14, 2, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImage(ctx_r1.currentUrl));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImage(ctx_r1.currentUrl));
  }
}
function DocUploadComponent_label_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4, "Haz clic para seleccionar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hint);
  }
}
function DocUploadComponent_label_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "circle", 26)(3, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5, "Subiendo...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function DocUploadComponent_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 20);
    \u0275\u0275template(1, DocUploadComponent_label_4_ng_container_1_Template, 7, 2, "ng-container", 21)(2, DocUploadComponent_label_4_ng_container_2_Template, 6, 0, "ng-container", 21);
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275listener("change", function DocUploadComponent_label_4_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFile($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("accept", ctx_r1.accept)("disabled", ctx_r1.uploading);
  }
}
function DocUploadComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
var DocUploadComponent = class _DocUploadComponent {
  filesService = inject(FilesService);
  /** Relative URL of already-stored file (for edit mode) */
  currentUrl = null;
  label = "Documento";
  /** 'image' | 'document' | 'any' */
  type = "any";
  uploaded = new EventEmitter();
  uploading = false;
  error = "";
  _resolvedUrl = null;
  get accept() {
    if (this.type === "image")
      return "image/*";
    if (this.type === "document")
      return "image/*,application/pdf";
    return "image/*,application/pdf";
  }
  get icon() {
    return this.type === "image" ? "\u{1F4F7}" : "\u{1F4C4}";
  }
  get hint() {
    return this.type === "image" ? "PNG, JPG, WEBP \u2014 m\xE1x. 10 MB" : "PNG, JPG, PDF \u2014 m\xE1x. 10 MB";
  }
  ngOnChanges(changes) {
    if (changes["currentUrl"]) {
      this._resolvedUrl = this.currentUrl ?? null;
    }
  }
  /** True when the current file should be previewed as an image */
  isImage(url) {
    if (!url)
      return false;
    if (this.type === "image")
      return true;
    return this._mimeIsImage && this._uploadedThisSession;
  }
  _mimeIsImage = true;
  _uploadedThisSession = false;
  absUrl(url) {
    return this.filesService.absoluteUrl(url);
  }
  onFile(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.error = "";
    this._mimeIsImage = file.type.startsWith("image/");
    this._uploadedThisSession = true;
    this.uploading = true;
    this.filesService.upload(file).subscribe({
      next: (res) => {
        this.uploading = false;
        this._resolvedUrl = res.url;
        this.currentUrl = res.url;
        this.uploaded.emit(res.url);
      },
      error: () => {
        this.uploading = false;
        this.error = "Error al subir. Intenta de nuevo.";
      }
    });
  }
  clear() {
    this._resolvedUrl = null;
    this.currentUrl = null;
    this._mimeIsImage = true;
    this._uploadedThisSession = false;
    this.uploaded.emit("");
  }
  static \u0275fac = function DocUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocUploadComponent, selectors: [["app-doc-upload"]], inputs: { currentUrl: "currentUrl", label: "label", type: "type" }, outputs: { uploaded: "uploaded" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 4, consts: [[1, "space-y-1.5"], [1, "block", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], ["class", "relative", 4, "ngIf"], ["class", "flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-5 text-center transition hover:border-brand-400 hover:bg-brand-50 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-brand-500", 4, "ngIf"], ["class", "text-[10px] text-red-500", 4, "ngIf"], [1, "relative"], ["class", "group relative inline-block", 4, "ngIf"], ["class", "flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 dark:border-gray-700 dark:bg-white/[0.04]", 4, "ngIf"], [1, "group", "relative", "inline-block"], [1, "h-24", "w-full", "rounded-xl", "object-cover", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", 3, "src", "alt"], ["type", "button", 1, "absolute", "-top-2", "-right-2", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-red-500", "text-white", "text-xs", "hover:bg-red-600", "shadow", 3, "click"], ["target", "_blank", 1, "absolute", "bottom-1.5", "right-1.5", "rounded-lg", "bg-black/50", "px-2", "py-0.5", "text-[10px]", "text-white", "hover:bg-black/70", 3, "href"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-3", "py-2.5", "dark:border-gray-700", "dark:bg-white/[0.04]"], [1, "flex", "items-center", "gap-2.5"], [1, "text-2xl"], [1, "text-xs", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-[10px]", "text-gray-400"], [1, "flex", "items-center", "gap-2"], ["target", "_blank", 1, "rounded-lg", "border", "border-brand-300", "px-2.5", "py-1", "text-[10px]", "font-medium", "text-brand-600", "hover:bg-brand-50", "dark:border-brand-600", "dark:text-brand-400", 3, "href"], ["type", "button", 1, "rounded-lg", "border", "border-red-300", "px-2.5", "py-1", "text-[10px]", "font-medium", "text-red-500", "hover:bg-red-50", "dark:border-red-700", 3, "click"], [1, "flex", "cursor-pointer", "flex-col", "items-center", "justify-center", "gap-1.5", "rounded-xl", "border-2", "border-dashed", "border-gray-300", "bg-gray-50", "px-4", "py-5", "text-center", "transition", "hover:border-brand-400", "hover:bg-brand-50", "dark:border-gray-700", "dark:bg-white/[0.02]", "dark:hover:border-brand-500"], [4, "ngIf"], ["type", "file", 1, "hidden", 3, "change", "accept", "disabled"], [1, "text-xl", "text-gray-400"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "animate-spin", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "text-xs", "text-gray-400"], [1, "text-[10px]", "text-red-500"]], template: function DocUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, DocUploadComponent_div_3_Template, 3, 2, "div", 2)(4, DocUploadComponent_label_4_Template, 4, 4, "label", 3)(5, DocUploadComponent_p_5_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentUrl && !ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentUrl || ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocUploadComponent, [{
    type: Component,
    args: [{
      selector: "app-doc-upload",
      standalone: true,
      imports: [CommonModule],
      template: `
<div class="space-y-1.5">
  <label class="block text-xs font-medium text-gray-600 dark:text-gray-400">{{ label }}</label>

  <!-- Existing / uploaded preview -->
  <div *ngIf="currentUrl && !uploading" class="relative">
    <!-- Image preview -->
    <div *ngIf="isImage(currentUrl)" class="group relative inline-block">
      <img [src]="absUrl(currentUrl)" [alt]="label"
        class="h-24 w-full rounded-xl object-cover border border-gray-200 dark:border-gray-700 shadow-sm" />
      <button type="button" (click)="clear()"
        class="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs hover:bg-red-600 shadow">\u2715</button>
      <a [href]="absUrl(currentUrl)" target="_blank"
        class="absolute bottom-1.5 right-1.5 rounded-lg bg-black/50 px-2 py-0.5 text-[10px] text-white hover:bg-black/70">
        Ver \u2192
      </a>
    </div>
    <!-- PDF preview -->
    <div *ngIf="!isImage(currentUrl)"
      class="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 dark:border-gray-700 dark:bg-white/[0.04]">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">\u{1F4C4}</span>
        <div>
          <p class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ label }}</p>
          <p class="text-[10px] text-gray-400">Documento adjunto</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a [href]="absUrl(currentUrl)" target="_blank"
          class="rounded-lg border border-brand-300 px-2.5 py-1 text-[10px] font-medium text-brand-600 hover:bg-brand-50 dark:border-brand-600 dark:text-brand-400">
          Abrir \u2192
        </a>
        <button type="button" (click)="clear()"
          class="rounded-lg border border-red-300 px-2.5 py-1 text-[10px] font-medium text-red-500 hover:bg-red-50 dark:border-red-700">
          \u2715
        </button>
      </div>
    </div>
  </div>

  <!-- Drop zone \u2014 shown when no file yet OR uploading -->
  <label *ngIf="!currentUrl || uploading"
    class="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-5 text-center transition hover:border-brand-400 hover:bg-brand-50 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-brand-500">
    <ng-container *ngIf="!uploading">
      <span class="text-xl text-gray-400">{{ icon }}</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">Haz clic para seleccionar</span>
      <span class="text-[10px] text-gray-400">{{ hint }}</span>
    </ng-container>
    <ng-container *ngIf="uploading">
      <svg class="h-5 w-5 animate-spin text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      <span class="text-xs text-gray-400">Subiendo...</span>
    </ng-container>
    <input type="file" [accept]="accept" (change)="onFile($event)" class="hidden" [disabled]="uploading" />
  </label>

  <p *ngIf="error" class="text-[10px] text-red-500">{{ error }}</p>
</div>
  `
    }]
  }], null, { currentUrl: [{
    type: Input
  }], label: [{
    type: Input
  }], type: [{
    type: Input
  }], uploaded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocUploadComponent, { className: "DocUploadComponent", filePath: "src/app/shared/components/doc-upload/doc-upload.component.ts", lineNumber: 77 });
})();

// src/app/pages/mis-capitanes/mis-capitanes.component.ts
var _c0 = () => ({ v: "APROBADO", l: "\u2705 Aprobar", c: "border-green-400 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 dark:border-green-700" });
var _c1 = () => ({ v: "EN_REVISION", l: "\u{1F50D} En revisi\xF3n", c: "border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-700" });
var _c2 = () => ({ v: "PENDIENTE", l: "\u23F3 Pendiente", c: "border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-700" });
var _c3 = () => ({ v: "RECHAZADO", l: "\u274C Rechazar", c: "border-red-400 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 dark:border-red-700" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0, a1) => [a0, a1];
function MisCapitanesComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function MisCapitanesComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Agregar capit\xE1n ");
    \u0275\u0275elementEnd();
  }
}
function MisCapitanesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function MisCapitanesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function MisCapitanesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Adjunta la foto del capit\xE1n y sus documentos (c\xE9dula, licencia n\xE1utica). El equipo MARITIMO revisar\xE1 la informaci\xF3n. Solo los capitanes ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Aprobados");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " pueden ser asignados a un charter.");
    \u0275\u0275elementEnd()();
  }
}
function MisCapitanesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, "Cargando capitanes...");
    \u0275\u0275elementEnd()()();
  }
}
function MisCapitanesComponent_div_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_13_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, " Agregar capit\xE1n \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function MisCapitanesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u2693");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MisCapitanesComponent_div_13_button_7_Template, 2, 0, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isProvider ? "A\xFAn no tienes capitanes registrados" : "No hay capitanes registrados", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isProvider ? "Agrega tu primer capit\xE1n y adjunta sus documentos." : "Los proveedores a\xFAn no han registrado capitanes.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProvider);
  }
}
function MisCapitanesComponent_div_14_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoSrc(c_r5), \u0275\u0275sanitizeUrl)("alt", c_r5.firstName);
  }
}
function MisCapitanesComponent_div_14_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(c_r5), " ");
  }
}
function MisCapitanesComponent_div_14_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Lic. ", c_r5.licenseNumber);
  }
}
function MisCapitanesComponent_div_14_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.providerProfile.companyName);
  }
}
function MisCapitanesComponent_div_14_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CE} ", (c_r5.documentFrontUrl ? 1 : 0) + (c_r5.documentBackUrl ? 1 : 0) + (c_r5.licenseDocumentUrl ? 1 : 0), " ");
  }
}
function MisCapitanesComponent_div_14_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r5.documentId);
  }
}
function MisCapitanesComponent_div_14_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r5.phone);
  }
}
function MisCapitanesComponent_div_14_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2, "Notas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r5.notes);
  }
}
function MisCapitanesComponent_div_14_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 64);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_ng_container_21_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r5, $event));
    });
    \u0275\u0275text(2, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_ng_container_21_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deactivate(c_r5, $event));
    });
    \u0275\u0275text(4, " Eliminar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function MisCapitanesComponent_div_14_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 64);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_ng_container_22_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openDetail(c_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2, " Ver detalle \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_ng_container_22_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openVerify(c_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(4, " Verificar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function MisCapitanesComponent_div_14_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "strong");
    \u0275\u0275text(2, "Motivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r5.verificationNotes, " ");
  }
}
function MisCapitanesComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_Template_div_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMaster ? ctx_r1.openDetail(c_r5) : null);
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "div", 36);
    \u0275\u0275template(4, MisCapitanesComponent_div_14_div_1_img_4_Template, 1, 2, "img", 37)(5, MisCapitanesComponent_div_14_div_1_div_5_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 40)(8, "h3", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MisCapitanesComponent_div_14_div_1_p_10_Template, 2, 1, "p", 42)(11, MisCapitanesComponent_div_14_div_1_p_11_Template, 2, 1, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MisCapitanesComponent_div_14_div_1_div_12_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 45);
    \u0275\u0275template(14, MisCapitanesComponent_div_14_div_1_div_14_Template, 5, 1, "div", 46)(15, MisCapitanesComponent_div_14_div_1_div_15_Template, 5, 1, "div", 46)(16, MisCapitanesComponent_div_14_div_1_div_16_Template, 5, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48)(18, "span", 49);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 50);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_14_div_1_Template_div_click_20_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(21, MisCapitanesComponent_div_14_div_1_ng_container_21_Template, 5, 0, "ng-container", 51)(22, MisCapitanesComponent_div_14_div_1_ng_container_22_Template, 5, 0, "ng-container", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, MisCapitanesComponent_div_14_div_1_div_23_Template, 4, 1, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cursor-pointer", ctx_r1.isMaster)("hover:shadow-md", ctx_r1.isMaster);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.photoSrc(c_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoSrc(c_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusDot(c_r5.verificationStatus));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", c_r5.firstName, " ", c_r5.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r5.licenseNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMaster && (c_r5.providerProfile == null ? null : c_r5.providerProfile.companyName));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasAnyDoc(c_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r5.documentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r5.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r5.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(c_r5.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(c_r5.verificationStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isProvider);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMaster);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r5.verificationStatus === "RECHAZADO" && c_r5.verificationNotes);
  }
}
function MisCapitanesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, MisCapitanesComponent_div_14_div_1_Template, 24, 20, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.captains);
  }
}
function MisCapitanesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71)(4, "h3", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 74);
    \u0275\u0275element(8, "path", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 76);
    \u0275\u0275listener("ngSubmit", function MisCapitanesComponent_div_15_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(10, "div")(11, "h4", 77);
    \u0275\u0275text(12, "Datos personales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 78)(14, "div")(15, "label", 79);
    \u0275\u0275text(16, "Nombre ");
    \u0275\u0275elementStart(17, "span", 80);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 79);
    \u0275\u0275text(22, "Apellido ");
    \u0275\u0275elementStart(23, "span", 80);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 79);
    \u0275\u0275text(28, "C\xE9dula / Pasaporte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "label", 79);
    \u0275\u0275text(32, "N\xFAmero de licencia n\xE1utica");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 85)(35, "label", 79);
    \u0275\u0275text(36, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 85)(39, "label", 79);
    \u0275\u0275text(40, "Notas adicionales");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "textarea", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div")(43, "h4", 77);
    \u0275\u0275text(44, "Foto del capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 88)(46, "app-doc-upload", 89);
    \u0275\u0275listener("uploaded", function MisCapitanesComponent_div_15_Template_app_doc_upload_uploaded_46_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.photoUrl = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div")(48, "h4", 77);
    \u0275\u0275text(49, "Documentos adjuntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 90)(51, "app-doc-upload", 91);
    \u0275\u0275listener("uploaded", function MisCapitanesComponent_div_15_Template_app_doc_upload_uploaded_51_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.documentFrontUrl = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "app-doc-upload", 92);
    \u0275\u0275listener("uploaded", function MisCapitanesComponent_div_15_Template_app_doc_upload_uploaded_52_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.documentBackUrl = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "app-doc-upload", 93);
    \u0275\u0275listener("uploaded", function MisCapitanesComponent_div_15_Template_app_doc_upload_uploaded_53_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.licenseDocumentUrl = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 94)(55, "button", 95);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_15_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(56, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 96);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editTarget() ? "Editar capit\xE1n" : "Registrar capit\xE1n", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.touched) ? "border-red-400 bg-red-50" : "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ((tmp_4_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_4_0.touched) ? "border-red-400 bg-red-50" : "");
    \u0275\u0275advance(21);
    \u0275\u0275property("currentUrl", ctx_r1.photoUrl);
    \u0275\u0275advance(5);
    \u0275\u0275property("currentUrl", ctx_r1.documentFrontUrl);
    \u0275\u0275advance();
    \u0275\u0275property("currentUrl", ctx_r1.documentBackUrl);
    \u0275\u0275advance();
    \u0275\u0275property("currentUrl", ctx_r1.licenseDocumentUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Guardando..." : ctx_r1.editTarget() ? "Actualizar capit\xE1n" : "Registrar capit\xE1n", " ");
  }
}
function MisCapitanesComponent_div_16_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoSrc(ctx_r1.detailTarget()), \u0275\u0275sanitizeUrl)("alt", ctx_r1.detailTarget().firstName);
  }
}
function MisCapitanesComponent_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(ctx_r1.detailTarget()), " ");
  }
}
function MisCapitanesComponent_div_16_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailTarget().providerProfile.companyName);
  }
}
function MisCapitanesComponent_div_16_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "p", 121);
    \u0275\u0275text(2, "C\xE9dula / Pasaporte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.detailTarget().documentId);
  }
}
function MisCapitanesComponent_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "p", 121);
    \u0275\u0275text(2, "Licencia n\xE1utica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.detailTarget().licenseNumber);
  }
}
function MisCapitanesComponent_div_16_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "p", 121);
    \u0275\u0275text(2, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.detailTarget().phone);
  }
}
function MisCapitanesComponent_div_16_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "p", 121);
    \u0275\u0275text(2, "Registrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 122);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.detailTarget().createdAt, "dd MMM yyyy"));
  }
}
function MisCapitanesComponent_div_16_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "p", 124);
    \u0275\u0275text(2, "Notas del proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailTarget().notes, " ");
  }
}
function MisCapitanesComponent_div_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1, " Sin documentos adjuntos ");
    \u0275\u0275elementEnd();
  }
}
function MisCapitanesComponent_div_16_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275element(2, "img", 128);
    \u0275\u0275elementStart(3, "a", 129)(4, "span", 130);
    \u0275\u0275text(5, "Abrir \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 131)(7, "p", 132);
    \u0275\u0275text(8, "C\xE9dula \u2014 frente");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().documentFrontUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().documentFrontUrl), \u0275\u0275sanitizeUrl);
  }
}
function MisCapitanesComponent_div_16_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275element(2, "img", 133);
    \u0275\u0275elementStart(3, "a", 129)(4, "span", 130);
    \u0275\u0275text(5, "Abrir \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 131)(7, "p", 132);
    \u0275\u0275text(8, "C\xE9dula \u2014 reverso");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().documentBackUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().documentBackUrl), \u0275\u0275sanitizeUrl);
  }
}
function MisCapitanesComponent_div_16_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275element(2, "img", 134);
    \u0275\u0275elementStart(3, "a", 129)(4, "span", 130);
    \u0275\u0275text(5, "Abrir \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 131)(7, "p", 132);
    \u0275\u0275text(8, "Licencia n\xE1utica");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().licenseDocumentUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.filesService.absoluteUrl(ctx_r1.detailTarget().licenseDocumentUrl), \u0275\u0275sanitizeUrl);
  }
}
function MisCapitanesComponent_div_16_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "p", 124);
    \u0275\u0275text(2, "Notas de verificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.detailTarget().verificationStatus === "RECHAZADO" ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800/30 dark:bg-red-500/10 dark:text-red-400" : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/30 dark:bg-blue-500/10 dark:text-blue-300");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailTarget().verificationNotes, " ");
  }
}
function MisCapitanesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 97)(4, "button", 98);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 74);
    \u0275\u0275element(6, "path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 99)(8, "div", 100);
    \u0275\u0275template(9, MisCapitanesComponent_div_16_img_9_Template, 1, 2, "img", 37)(10, MisCapitanesComponent_div_16_div_10_Template, 2, 1, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 102)(12, "h2", 103);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MisCapitanesComponent_div_16_p_14_Template, 2, 1, "p", 104);
    \u0275\u0275elementStart(15, "span", 105);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 106)(18, "div")(19, "h4", 107);
    \u0275\u0275text(20, "Informaci\xF3n personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 108);
    \u0275\u0275template(22, MisCapitanesComponent_div_16_div_22_Template, 5, 1, "div", 109)(23, MisCapitanesComponent_div_16_div_23_Template, 5, 1, "div", 109)(24, MisCapitanesComponent_div_16_div_24_Template, 5, 1, "div", 109)(25, MisCapitanesComponent_div_16_div_25_Template, 6, 4, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, MisCapitanesComponent_div_16_div_26_Template, 4, 1, "div", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "h4", 107);
    \u0275\u0275text(29, "Documentos adjuntos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, MisCapitanesComponent_div_16_div_30_Template, 2, 0, "div", 111);
    \u0275\u0275elementStart(31, "div", 112);
    \u0275\u0275template(32, MisCapitanesComponent_div_16_div_32_Template, 9, 2, "div", 113)(33, MisCapitanesComponent_div_16_div_33_Template, 9, 2, "div", 113)(34, MisCapitanesComponent_div_16_div_34_Template, 9, 2, "div", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, MisCapitanesComponent_div_16_div_35_Template, 4, 2, "div", 114);
    \u0275\u0275elementStart(36, "div", 115)(37, "button", 116);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_16_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275text(38, " Cerrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 117);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_16_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openVerifyFromDetail());
    });
    \u0275\u0275text(40, " \u2705 Verificar capit\xE1n ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.photoSrc(ctx_r1.detailTarget()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoSrc(ctx_r1.detailTarget()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.detailTarget().firstName, " ", ctx_r1.detailTarget().lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.detailTarget().providerProfile) == null ? null : tmp_4_0.companyName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(ctx_r1.detailTarget().verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(ctx_r1.detailTarget().verificationStatus), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().documentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().licenseNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.hasAnyDoc(ctx_r1.detailTarget()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().documentFrontUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().documentBackUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().licenseDocumentUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailTarget().verificationNotes);
  }
}
function MisCapitanesComponent_div_17_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 147);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_17_button_11_Template_button_click_0_listener() {
      const opt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verifyStatus.set(opt_r12.v));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c5, opt_r12.c, ctx_r1.verifyStatus() === opt_r12.v ? "ring-2 ring-offset-1" : "opacity-70 hover:opacity-100"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r12.l, " ");
  }
}
function MisCapitanesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 69);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_17_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVerify());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 137)(3, "button", 138);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVerify());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 74);
    \u0275\u0275element(5, "path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 139);
    \u0275\u0275text(7, "Verificar capit\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 140);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 141);
    \u0275\u0275template(11, MisCapitanesComponent_div_17_button_11_Template, 2, 5, "button", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 143)(13, "label", 79);
    \u0275\u0275text(14, " Notas (motivo de rechazo o comentarios) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 144);
    \u0275\u0275twoWayListener("ngModelChange", function MisCapitanesComponent_div_17_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.verifyNotes, $event) || (ctx_r1.verifyNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 145)(17, "button", 116);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVerify());
    });
    \u0275\u0275text(18, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 146);
    \u0275\u0275listener("click", function MisCapitanesComponent_div_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitVerify());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.verifyTarget().firstName, " ", ctx_r1.verifyTarget().lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(10, _c4, \u0275\u0275pureFunction0(6, _c0), \u0275\u0275pureFunction0(7, _c1), \u0275\u0275pureFunction0(8, _c2), \u0275\u0275pureFunction0(9, _c3)));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verifyNotes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.verifying);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verifying ? "Guardando..." : "Confirmar", " ");
  }
}
var MisCapitanesComponent = class _MisCapitanesComponent {
  auth = inject(AuthService);
  service = inject(CaptainsService);
  filesService = inject(FilesService);
  fb = inject(FormBuilder);
  loading = true;
  saving = false;
  captains = [];
  // ── Create / edit modal ──────────────────────────────────────────────────
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  editTarget = signal(null, ...ngDevMode ? [{ debugName: "editTarget" }] : (
    /* istanbul ignore next */
    []
  ));
  // File URLs (managed outside reactive form — uploads are async)
  photoUrl = "";
  documentFrontUrl = "";
  documentBackUrl = "";
  licenseDocumentUrl = "";
  // ── Verify modal (master) ────────────────────────────────────────────────
  verifyTarget = signal(null, ...ngDevMode ? [{ debugName: "verifyTarget" }] : (
    /* istanbul ignore next */
    []
  ));
  verifyStatus = signal("APROBADO", ...ngDevMode ? [{ debugName: "verifyStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  verifyNotes = "";
  verifying = false;
  // ── Detail modal (master) ────────────────────────────────────────────────
  detailTarget = signal(null, ...ngDevMode ? [{ debugName: "detailTarget" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = "";
  errorMessage = "";
  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    documentId: [""],
    licenseNumber: [""],
    phone: [""],
    notes: [""]
  });
  // ── Role helpers ─────────────────────────────────────────────────────────
  get isMaster() {
    const r = this.auth.role();
    return r === "MASTER" || r === "ADMINISTRADOR";
  }
  get isProvider() {
    return this.auth.role() === "PROVEEDOR";
  }
  get providerId() {
    return this.auth.user()?.providerProfile?.id ?? null;
  }
  get pageTitle() {
    return this.isMaster ? "Verificaci\xF3n de capitanes" : "Mis capitanes";
  }
  get pageSubtitle() {
    return this.isMaster ? "Revisa y aprueba los capitanes registrados por los proveedores." : "Registra los capitanes de tu flota. El equipo MARITIMO los verificar\xE1.";
  }
  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const pid = this.isMaster ? void 0 : this.providerId ?? void 0;
    this.service.getAll(pid).subscribe({
      next: (list) => {
        this.captains = list;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ── Create / Edit modal ───────────────────────────────────────────────────
  openCreate() {
    this.editTarget.set(null);
    this.form.reset();
    this.photoUrl = this.documentFrontUrl = this.documentBackUrl = this.licenseDocumentUrl = "";
    this.showForm.set(true);
  }
  openEdit(c, event) {
    event.stopPropagation();
    this.editTarget.set(c);
    this.form.patchValue({
      firstName: c.firstName,
      lastName: c.lastName,
      documentId: c.documentId ?? "",
      licenseNumber: c.licenseNumber ?? "",
      phone: c.phone ?? "",
      notes: c.notes ?? ""
    });
    this.photoUrl = c.photoUrl ?? "";
    this.documentFrontUrl = c.documentFrontUrl ?? "";
    this.documentBackUrl = c.documentBackUrl ?? "";
    this.licenseDocumentUrl = c.licenseDocumentUrl ?? "";
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
    this.editTarget.set(null);
  }
  submit() {
    if (this.form.invalid)
      return;
    if (!this.providerId && !this.isMaster)
      return;
    this.saving = true;
    const dto = __spreadProps(__spreadValues({}, this.form.value), {
      photoUrl: this.photoUrl || void 0,
      documentFrontUrl: this.documentFrontUrl || void 0,
      documentBackUrl: this.documentBackUrl || void 0,
      licenseDocumentUrl: this.licenseDocumentUrl || void 0
    });
    const target = this.editTarget();
    const req$ = target ? this.service.update(target.id, dto, this.providerId ?? void 0) : this.service.create(dto, this.providerId);
    req$.subscribe({
      next: () => {
        this.saving = false;
        this.closeForm();
        this.showSuccess(target ? "Capit\xE1n actualizado." : "Capit\xE1n registrado. Pendiente de verificaci\xF3n.");
        this.load();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = "Error al guardar. Intente de nuevo.";
      }
    });
  }
  deactivate(c, event) {
    event.stopPropagation();
    if (!confirm(`\xBFDesactivar a ${c.firstName} ${c.lastName}?`))
      return;
    this.service.remove(c.id, this.providerId ?? void 0).subscribe({
      next: () => {
        this.showSuccess("Capit\xE1n desactivado.");
        this.load();
      }
    });
  }
  // ── Detail modal (master) ─────────────────────────────────────────────────
  openDetail(c) {
    if (!this.isMaster)
      return;
    this.detailTarget.set(c);
  }
  closeDetail() {
    this.detailTarget.set(null);
  }
  openVerifyFromDetail() {
    const c = this.detailTarget();
    if (!c)
      return;
    this.closeDetail();
    this.openVerify(c);
  }
  // ── Verify modal (master) ─────────────────────────────────────────────────
  openVerify(c) {
    this.verifyTarget.set(c);
    this.verifyStatus.set(c.verificationStatus ?? "APROBADO");
    this.verifyNotes = c.verificationNotes ?? "";
  }
  closeVerify() {
    this.verifyTarget.set(null);
  }
  submitVerify() {
    const c = this.verifyTarget();
    if (!c)
      return;
    this.verifying = true;
    this.service.verify(c.id, this.verifyStatus(), this.verifyNotes || void 0).subscribe({
      next: () => {
        this.verifying = false;
        this.closeVerify();
        this.showSuccess("Estado de verificaci\xF3n actualizado.");
        this.load();
      },
      error: () => {
        this.verifying = false;
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  statusLabel(s) {
    return { PENDIENTE: "Pendiente", EN_REVISION: "En revisi\xF3n", APROBADO: "Aprobado", RECHAZADO: "Rechazado" }[s] ?? s;
  }
  statusClass(s) {
    return {
      PENDIENTE: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      EN_REVISION: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      APROBADO: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
      RECHAZADO: "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
    }[s] ?? "";
  }
  statusDot(s) {
    return { PENDIENTE: "bg-amber-400", EN_REVISION: "bg-blue-500", APROBADO: "bg-green-500", RECHAZADO: "bg-red-500" }[s] ?? "bg-gray-400";
  }
  photoSrc(c) {
    return c.photoUrl ? this.filesService.absoluteUrl(c.photoUrl) : "";
  }
  initials(c) {
    return `${c.firstName?.[0] ?? ""}${c.lastName?.[0] ?? ""}`.toUpperCase();
  }
  hasAnyDoc(c) {
    return !!(c.documentFrontUrl || c.documentBackUrl || c.licenseDocumentUrl);
  }
  showSuccess(msg) {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = "", 4e3);
  }
  static \u0275fac = function MisCapitanesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MisCapitanesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MisCapitanesComponent, selectors: [["app-mis-capitanes"]], decls: 18, vars: 12, consts: [[1, "space-y-5"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["class", "inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors", 3, "click", 4, "ngIf"], ["class", "rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-800/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-700 dark:border-blue-800/30 dark:bg-blue-500/10 dark:text-blue-300", 4, "ngIf"], ["class", "flex items-center justify-center py-24", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", 4, "ngIf"], ["class", "fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto p-4 py-8", 4, "ngIf"], ["class", "fixed inset-0 z-[99999] flex items-center justify-center p-4", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-brand-500", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"], [1, "rounded-2xl", "border", "border-green-200", "bg-green-50", "px-5", "py-4", "text-sm", "font-medium", "text-green-700", "dark:border-green-800/30", "dark:bg-green-500/10", "dark:text-green-400"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "px-5", "py-4", "text-sm", "text-red-600", "dark:border-red-800/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "border-blue-200", "bg-blue-50", "px-5", "py-4", "text-sm", "text-blue-700", "dark:border-blue-800/30", "dark:bg-blue-500/10", "dark:text-blue-300"], [1, "text-lg", "mt-0.5"], [1, "flex", "items-center", "justify-center", "py-24"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], ["class", "mt-5 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600", 3, "click", 4, "ngIf"], [1, "mt-5", "inline-flex", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", 3, "click"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], ["class", "flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden", 3, "cursor-pointer", "hover:shadow-md", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "transition", "dark:border-gray-800", "dark:bg-white/[0.03]", "overflow-hidden", 3, "click"], [1, "flex", "items-center", "gap-4", "p-5"], [1, "relative", "flex-shrink-0"], [1, "h-14", "w-14", "overflow-hidden", "rounded-2xl", "bg-brand-100", "dark:bg-brand-500/10"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full w-full items-center justify-center text-xl font-bold text-brand-600 dark:text-brand-400", 4, "ngIf"], [1, "absolute", "-bottom-1", "-right-1", "h-4", "w-4", "rounded-full", "border-2", "border-white", "dark:border-gray-900", 3, "ngClass"], [1, "flex-1", "min-w-0"], [1, "truncate", "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], ["class", "text-xs text-gray-400", 4, "ngIf"], ["class", "text-xs text-brand-500 font-medium mt-0.5", 4, "ngIf"], ["class", "flex-shrink-0 flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-white/[0.07]", 4, "ngIf"], [1, "border-t", "border-gray-100", "dark:border-gray-800", "px-5", "py-3", "space-y-1.5"], ["class", "flex items-center justify-between text-xs", 4, "ngIf"], ["class", "flex items-start gap-2 text-xs", 4, "ngIf"], [1, "mt-auto", "border-t", "border-gray-100", "dark:border-gray-800", "flex", "items-center", "justify-between", "px-5", "py-3"], [1, "inline-flex", "items-center", "rounded-full", "px-2.5", "py-1", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "gap-2", 3, "click"], [4, "ngIf"], ["class", "border-t border-red-100 bg-red-50 px-5 py-2.5 text-xs text-red-600 dark:border-red-800/20 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-xl", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-gray-400"], [1, "text-xs", "text-brand-500", "font-medium", "mt-0.5"], [1, "flex-shrink-0", "flex", "items-center", "gap-1", "rounded-full", "bg-gray-100", "px-2", "py-0.5", "text-[10px]", "font-medium", "text-gray-500", "dark:bg-white/[0.07]"], [1, "flex", "items-center", "justify-between", "text-xs"], [1, "text-gray-400"], [1, "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "flex", "items-start", "gap-2", "text-xs"], [1, "text-gray-400", "flex-shrink-0"], [1, "text-right", "text-gray-600", "dark:text-gray-400", "ml-auto"], [1, "rounded-lg", "border", "border-gray-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "click"], [1, "rounded-lg", "border", "border-red-200", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-red-500", "hover:bg-red-50", "transition", "dark:border-red-800/30", 3, "click"], [1, "rounded-lg", "bg-brand-500", "px-3", "py-1.5", "text-xs", "font-bold", "text-white", "hover:bg-brand-600", "transition", 3, "click"], [1, "border-t", "border-red-100", "bg-red-50", "px-5", "py-2.5", "text-xs", "text-red-600", "dark:border-red-800/20", "dark:bg-red-500/10", "dark:text-red-400"], [1, "fixed", "inset-0", "z-[99999]", "flex", "items-start", "justify-center", "overflow-y-auto", "p-4", "py-8"], [1, "absolute", "inset-0", "bg-gray-400/50", "backdrop-blur-sm", 3, "click"], [1, "relative", "z-10", "w-full", "max-w-2xl", "rounded-3xl", "bg-white", "shadow-2xl", "dark:bg-gray-900"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-6", "py-5", "dark:border-gray-800"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-gray-400", "hover:bg-gray-200", "dark:bg-white/[0.07]", "dark:text-gray-300", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z", "fill", "currentColor"], [1, "p-6", "space-y-6", 3, "ngSubmit", "formGroup"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2"], [1, "mb-1.5", "block", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-red-500"], ["type", "text", "formControlName", "firstName", "placeholder", "Juan", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90", 3, "ngClass"], ["type", "text", "formControlName", "lastName", "placeholder", "P\xE9rez", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90", 3, "ngClass"], ["type", "text", "formControlName", "documentId", "placeholder", "V-12345678", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90"], ["type", "text", "formControlName", "licenseNumber", "placeholder", "LN-001234", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90"], [1, "sm:col-span-2"], ["type", "text", "formControlName", "phone", "placeholder", "+58 412 000 0000", 1, "h-10", "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90"], ["formControlName", "notes", "rows", "2", "placeholder", "Experiencia, especialidad...", 1, "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "py-2", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90"], [1, "max-w-xs"], ["type", "image", "label", "Foto de perfil", 3, "uploaded", "currentUrl"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-3"], ["type", "document", "label", "C\xE9dula \u2014 frente", 3, "uploaded", "currentUrl"], ["type", "document", "label", "C\xE9dula \u2014 reverso", 3, "uploaded", "currentUrl"], ["type", "document", "label", "Licencia n\xE1utica", 3, "uploaded", "currentUrl"], [1, "flex", "gap-3", "border-t", "border-gray-100", "pt-5", "dark:border-gray-800"], ["type", "button", 1, "flex-1", "rounded-xl", "border", "border-gray-200", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", "dark:hover:bg-white/[0.04]", 3, "click"], ["type", "submit", 1, "flex-1", "rounded-xl", "bg-brand-500", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-60", "transition-colors", 3, "disabled"], [1, "relative", "overflow-hidden", "rounded-t-3xl", "bg-gradient-to-r", "from-brand-600", "to-brand-500", "px-6", "py-6"], [1, "absolute", "right-4", "top-4", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-white/20", "text-white", "hover:bg-white/30", 3, "click"], [1, "flex", "items-center", "gap-4"], [1, "h-16", "w-16", "flex-shrink-0", "overflow-hidden", "rounded-2xl", "border-2", "border-white/30", "bg-white/20"], ["class", "flex h-full w-full items-center justify-center text-2xl font-bold text-white", 4, "ngIf"], [1, "flex-1"], [1, "text-xl", "font-bold", "text-white"], ["class", "text-sm text-white/70", 4, "ngIf"], [1, "mt-1", "inline-flex", "items-center", "rounded-full", "px-2.5", "py-0.5", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "p-6", "space-y-6"], [1, "mb-3", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-gray-400"], [1, "grid", "grid-cols-2", "gap-3"], ["class", "rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]", 4, "ngIf"], ["class", "mt-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-700 dark:border-amber-800/30 dark:bg-amber-500/10 dark:text-amber-400", 4, "ngIf"], ["class", "rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400 dark:border-gray-700", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-3"], ["class", "group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-white/[0.04]", 4, "ngIf"], ["class", "rounded-xl border px-4 py-3 text-sm", 3, "ngClass", 4, "ngIf"], [1, "flex", "gap-3", "border-t", "border-gray-100", "pt-4", "dark:border-gray-800"], [1, "flex-1", "rounded-xl", "border", "border-gray-200", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-400", 3, "click"], [1, "flex-1", "rounded-xl", "bg-brand-500", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "transition-colors", 3, "click"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-2xl", "font-bold", "text-white"], [1, "text-sm", "text-white/70"], [1, "rounded-xl", "bg-gray-50", "px-4", "py-3", "dark:bg-white/[0.04]"], [1, "text-[10px]", "text-gray-400"], [1, "mt-0.5", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "mt-3", "rounded-xl", "bg-amber-50", "border", "border-amber-200", "px-4", "py-3", "text-sm", "text-amber-700", "dark:border-amber-800/30", "dark:bg-amber-500/10", "dark:text-amber-400"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "mb-0.5"], [1, "rounded-xl", "border", "border-dashed", "border-gray-300", "p-6", "text-center", "text-sm", "text-gray-400", "dark:border-gray-700"], [1, "group", "relative", "overflow-hidden", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "dark:border-gray-700", "dark:bg-white/[0.04]"], [1, "relative", "h-40", "w-full", "bg-gray-100", "dark:bg-gray-800"], ["alt", "C\xE9dula frente", 1, "h-full", "w-full", "object-cover", 3, "src"], ["target", "_blank", 1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-black/0", "opacity-0", "transition", "group-hover:bg-black/30", "group-hover:opacity-100", 3, "href"], [1, "rounded-xl", "bg-white", "px-3", "py-1.5", "text-xs", "font-bold", "text-gray-800", "shadow"], [1, "px-3", "py-2"], [1, "text-[10px]", "font-semibold", "text-gray-400"], ["alt", "C\xE9dula reverso", 1, "h-full", "w-full", "object-cover", 3, "src"], ["alt", "Licencia", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "rounded-xl", "border", "px-4", "py-3", "text-sm", 3, "ngClass"], [1, "fixed", "inset-0", "z-[99999]", "flex", "items-center", "justify-center", "p-4"], [1, "relative", "z-10", "w-full", "max-w-md", "rounded-3xl", "bg-white", "p-6", "shadow-2xl", "dark:bg-gray-900"], [1, "absolute", "right-4", "top-4", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-gray-100", "text-gray-400", "hover:bg-gray-200", "dark:bg-white/[0.07]", "dark:text-gray-300", 3, "click"], [1, "mb-1", "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mb-5", "text-sm", "text-gray-500"], [1, "mb-4", "grid", "grid-cols-2", "gap-3"], ["class", "rounded-xl border px-3 py-2.5 text-sm font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mb-5"], ["rows", "3", "placeholder", "Ej. Licencia vencida, foto ilegible...", 1, "w-full", "rounded-xl", "border", "border-gray-300", "bg-white", "px-3", "py-2", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-white/[0.03]", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "flex-1", "rounded-xl", "bg-brand-500", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-60", "transition-colors", 3, "click", "disabled"], [1, "rounded-xl", "border", "px-3", "py-2.5", "text-sm", "font-semibold", "transition", 3, "click", "ngClass"]], template: function MisCapitanesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, MisCapitanesComponent_button_8_Template, 4, 0, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MisCapitanesComponent_div_9_Template, 2, 1, "div", 6)(10, MisCapitanesComponent_div_10_Template, 2, 1, "div", 7)(11, MisCapitanesComponent_div_11_Template, 8, 0, "div", 8)(12, MisCapitanesComponent_div_12_Template, 6, 0, "div", 9)(13, MisCapitanesComponent_div_13_Template, 8, 3, "div", 10)(14, MisCapitanesComponent_div_14_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, MisCapitanesComponent_div_15_Template, 59, 10, "div", 12)(16, MisCapitanesComponent_div_16_Template, 41, 17, "div", 12)(17, MisCapitanesComponent_div_17_Template, 21, 15, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.pageTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageSubtitle);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProvider);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProvider);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.captains.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.captains.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.detailTarget());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.verifyTarget());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, DocUploadComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MisCapitanesComponent, [{
    type: Component,
    args: [{ selector: "app-mis-capitanes", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, DocUploadComponent], template: `<div class="space-y-5">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">{{ pageTitle }}</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ pageSubtitle }}</p>
      </div>
      <button *ngIf="isProvider" (click)="openCreate()"
        class="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
        </svg>
        Agregar capit\xE1n
      </button>
    </div>
  </div>

  <!-- Alerts -->
  <div *ngIf="successMessage" class="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700 dark:border-green-800/30 dark:bg-green-500/10 dark:text-green-400">
    {{ successMessage }}
  </div>
  <div *ngIf="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-800/30 dark:bg-red-500/10 dark:text-red-400">
    {{ errorMessage }}
  </div>

  <!-- Info banner (provider) -->
  <div *ngIf="isProvider"
    class="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-700 dark:border-blue-800/30 dark:bg-blue-500/10 dark:text-blue-300">
    <span class="text-lg mt-0.5">\u2139\uFE0F</span>
    <p>Adjunta la foto del capit\xE1n y sus documentos (c\xE9dula, licencia n\xE1utica). El equipo MARITIMO revisar\xE1 la informaci\xF3n. Solo los capitanes <strong>Aprobados</strong> pueden ser asignados a un charter.</p>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-24">
    <div class="flex flex-col items-center gap-4">
      <div class="text-5xl animate-bounce">\u2693</div>
      <p class="text-sm text-gray-400">Cargando capitanes...</p>
    </div>
  </div>

  <!-- Empty state -->
  <div *ngIf="!loading && captains.length === 0"
    class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
    <div class="text-5xl mb-4">\u2693</div>
    <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">
      {{ isProvider ? 'A\xFAn no tienes capitanes registrados' : 'No hay capitanes registrados' }}
    </h3>
    <p class="mt-2 text-sm text-gray-500">
      {{ isProvider ? 'Agrega tu primer capit\xE1n y adjunta sus documentos.' : 'Los proveedores a\xFAn no han registrado capitanes.' }}
    </p>
    <button *ngIf="isProvider" (click)="openCreate()"
      class="mt-5 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
      Agregar capit\xE1n \u2192
    </button>
  </div>

  <!-- Grid -->
  <div *ngIf="!loading && captains.length > 0"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

    <div *ngFor="let c of captains"
      (click)="isMaster ? openDetail(c) : null"
      [class.cursor-pointer]="isMaster"
      [class.hover:shadow-md]="isMaster"
      class="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">

      <!-- Header -->
      <div class="flex items-center gap-4 p-5">
        <div class="relative flex-shrink-0">
          <div class="h-14 w-14 overflow-hidden rounded-2xl bg-brand-100 dark:bg-brand-500/10">
            <img *ngIf="photoSrc(c)" [src]="photoSrc(c)" [alt]="c.firstName"
              class="h-full w-full object-cover" />
            <div *ngIf="!photoSrc(c)"
              class="flex h-full w-full items-center justify-center text-xl font-bold text-brand-600 dark:text-brand-400">
              {{ initials(c) }}
            </div>
          </div>
          <span class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-gray-900"
            [ngClass]="statusDot(c.verificationStatus)"></span>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="truncate text-base font-bold text-gray-800 dark:text-white/90">
            {{ c.firstName }} {{ c.lastName }}
          </h3>
          <p *ngIf="c.licenseNumber" class="text-xs text-gray-400">Lic. {{ c.licenseNumber }}</p>
          <p *ngIf="isMaster && c.providerProfile?.companyName"
            class="text-xs text-brand-500 font-medium mt-0.5">{{ c.providerProfile!.companyName }}</p>
        </div>
        <!-- Doc count badge -->
        <div *ngIf="hasAnyDoc(c)"
          class="flex-shrink-0 flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-white/[0.07]">
          \u{1F4CE} {{ (c.documentFrontUrl ? 1 : 0) + (c.documentBackUrl ? 1 : 0) + (c.licenseDocumentUrl ? 1 : 0) }}
        </div>
      </div>

      <!-- Details row -->
      <div class="border-t border-gray-100 dark:border-gray-800 px-5 py-3 space-y-1.5">
        <div *ngIf="c.documentId" class="flex items-center justify-between text-xs">
          <span class="text-gray-400">Documento</span>
          <span class="font-medium text-gray-700 dark:text-gray-300">{{ c.documentId }}</span>
        </div>
        <div *ngIf="c.phone" class="flex items-center justify-between text-xs">
          <span class="text-gray-400">Tel\xE9fono</span>
          <span class="font-medium text-gray-700 dark:text-gray-300">{{ c.phone }}</span>
        </div>
        <div *ngIf="c.notes" class="flex items-start gap-2 text-xs">
          <span class="text-gray-400 flex-shrink-0">Notas</span>
          <span class="text-right text-gray-600 dark:text-gray-400 ml-auto">{{ c.notes }}</span>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center justify-between px-5 py-3">
        <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
          [ngClass]="statusClass(c.verificationStatus)">
          {{ statusLabel(c.verificationStatus) }}
        </span>
        <div class="flex items-center gap-2" (click)="$event.stopPropagation()">
          <ng-container *ngIf="isProvider">
            <button (click)="openEdit(c, $event)"
              class="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
              \u270F\uFE0F Editar
            </button>
            <button (click)="deactivate(c, $event)"
              class="rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition dark:border-red-800/30">
              Eliminar
            </button>
          </ng-container>
          <ng-container *ngIf="isMaster">
            <button (click)="openDetail(c); $event.stopPropagation()"
              class="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
              Ver detalle \u2192
            </button>
            <button (click)="openVerify(c); $event.stopPropagation()"
              class="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-600 transition">
              Verificar
            </button>
          </ng-container>
        </div>
      </div>

      <!-- Rejection note -->
      <div *ngIf="c.verificationStatus === 'RECHAZADO' && c.verificationNotes"
        class="border-t border-red-100 bg-red-50 px-5 py-2.5 text-xs text-red-600 dark:border-red-800/20 dark:bg-red-500/10 dark:text-red-400">
        <strong>Motivo:</strong> {{ c.verificationNotes }}
      </div>
    </div>

  </div>
</div>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- MODAL: Add / Edit captain                                               -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="showForm()" class="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto p-4 py-8">
  <div class="absolute inset-0 bg-gray-400/50 backdrop-blur-sm" (click)="closeForm()"></div>

  <div class="relative z-10 w-full max-w-2xl rounded-3xl bg-white shadow-2xl dark:bg-gray-900">

    <!-- Header -->
    <div class="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-gray-800">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white/90">
        {{ editTarget() ? 'Editar capit\xE1n' : 'Registrar capit\xE1n' }}
      </h3>
      <button (click)="closeForm()"
        class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 dark:bg-white/[0.07] dark:text-gray-300">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z" fill="currentColor"/></svg>
      </button>
    </div>

    <form [formGroup]="form" (ngSubmit)="submit()" class="p-6 space-y-6">

      <!-- Section: Datos b\xE1sicos -->
      <div>
        <h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Datos personales</h4>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Nombre <span class="text-red-500">*</span></label>
            <input type="text" formControlName="firstName" placeholder="Juan"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90"
              [ngClass]="form.get('firstName')?.invalid && form.get('firstName')?.touched ? 'border-red-400 bg-red-50' : ''" />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Apellido <span class="text-red-500">*</span></label>
            <input type="text" formControlName="lastName" placeholder="P\xE9rez"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90"
              [ngClass]="form.get('lastName')?.invalid && form.get('lastName')?.touched ? 'border-red-400 bg-red-50' : ''" />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">C\xE9dula / Pasaporte</label>
            <input type="text" formControlName="documentId" placeholder="V-12345678"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90" />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">N\xFAmero de licencia n\xE1utica</label>
            <input type="text" formControlName="licenseNumber" placeholder="LN-001234"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90" />
          </div>
          <div class="sm:col-span-2">
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Tel\xE9fono</label>
            <input type="text" formControlName="phone" placeholder="+58 412 000 0000"
              class="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90" />
          </div>
          <div class="sm:col-span-2">
            <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">Notas adicionales</label>
            <textarea formControlName="notes" rows="2" placeholder="Experiencia, especialidad..."
              class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90"></textarea>
          </div>
        </div>
      </div>

      <!-- Section: Foto -->
      <div>
        <h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Foto del capit\xE1n</h4>
        <div class="max-w-xs">
          <app-doc-upload
            type="image"
            label="Foto de perfil"
            [currentUrl]="photoUrl"
            (uploaded)="photoUrl = $event">
          </app-doc-upload>
        </div>
      </div>

      <!-- Section: Documentos -->
      <div>
        <h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Documentos adjuntos</h4>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <app-doc-upload
            type="document"
            label="C\xE9dula \u2014 frente"
            [currentUrl]="documentFrontUrl"
            (uploaded)="documentFrontUrl = $event">
          </app-doc-upload>
          <app-doc-upload
            type="document"
            label="C\xE9dula \u2014 reverso"
            [currentUrl]="documentBackUrl"
            (uploaded)="documentBackUrl = $event">
          </app-doc-upload>
          <app-doc-upload
            type="document"
            label="Licencia n\xE1utica"
            [currentUrl]="licenseDocumentUrl"
            (uploaded)="licenseDocumentUrl = $event">
          </app-doc-upload>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
        <button type="button" (click)="closeForm()"
          class="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.04]">
          Cancelar
        </button>
        <button type="submit" [disabled]="saving || form.invalid"
          class="flex-1 rounded-xl bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors">
          {{ saving ? 'Guardando...' : editTarget() ? 'Actualizar capit\xE1n' : 'Registrar capit\xE1n' }}
        </button>
      </div>

    </form>
  </div>
</div>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- MODAL: Master detail view                                               -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="detailTarget()" class="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto p-4 py-8">
  <div class="absolute inset-0 bg-gray-400/50 backdrop-blur-sm" (click)="closeDetail()"></div>

  <div class="relative z-10 w-full max-w-2xl rounded-3xl bg-white shadow-2xl dark:bg-gray-900">

    <!-- Header -->
    <div class="relative overflow-hidden rounded-t-3xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-6">
      <button (click)="closeDetail()"
        class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z" fill="currentColor"/></svg>
      </button>
      <div class="flex items-center gap-4">
        <!-- Photo -->
        <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white/30 bg-white/20">
          <img *ngIf="photoSrc(detailTarget()!)" [src]="photoSrc(detailTarget()!)" [alt]="detailTarget()!.firstName"
            class="h-full w-full object-cover" />
          <div *ngIf="!photoSrc(detailTarget()!)"
            class="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
            {{ initials(detailTarget()!) }}
          </div>
        </div>
        <div class="flex-1">
          <h2 class="text-xl font-bold text-white">{{ detailTarget()!.firstName }} {{ detailTarget()!.lastName }}</h2>
          <p *ngIf="detailTarget()!.providerProfile?.companyName" class="text-sm text-white/70">{{ detailTarget()!.providerProfile!.companyName }}</p>
          <span class="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
            [ngClass]="statusClass(detailTarget()!.verificationStatus)">
            {{ statusLabel(detailTarget()!.verificationStatus) }}
          </span>
        </div>
      </div>
    </div>

    <div class="p-6 space-y-6">

      <!-- Info grid -->
      <div>
        <h4 class="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Informaci\xF3n personal</h4>
        <div class="grid grid-cols-2 gap-3">
          <div *ngIf="detailTarget()!.documentId" class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
            <p class="text-[10px] text-gray-400">C\xE9dula / Pasaporte</p>
            <p class="mt-0.5 text-sm font-semibold text-gray-800 dark:text-white/90">{{ detailTarget()!.documentId }}</p>
          </div>
          <div *ngIf="detailTarget()!.licenseNumber" class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
            <p class="text-[10px] text-gray-400">Licencia n\xE1utica</p>
            <p class="mt-0.5 text-sm font-semibold text-gray-800 dark:text-white/90">{{ detailTarget()!.licenseNumber }}</p>
          </div>
          <div *ngIf="detailTarget()!.phone" class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
            <p class="text-[10px] text-gray-400">Tel\xE9fono</p>
            <p class="mt-0.5 text-sm font-semibold text-gray-800 dark:text-white/90">{{ detailTarget()!.phone }}</p>
          </div>
          <div *ngIf="detailTarget()!.createdAt" class="rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
            <p class="text-[10px] text-gray-400">Registrado</p>
            <p class="mt-0.5 text-sm font-semibold text-gray-800 dark:text-white/90">{{ detailTarget()!.createdAt | date:'dd MMM yyyy' }}</p>
          </div>
        </div>
        <div *ngIf="detailTarget()!.notes"
          class="mt-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-700 dark:border-amber-800/30 dark:bg-amber-500/10 dark:text-amber-400">
          <p class="text-[10px] font-semibold uppercase tracking-wide mb-0.5">Notas del proveedor</p>
          {{ detailTarget()!.notes }}
        </div>
      </div>

      <!-- Documents -->
      <div>
        <h4 class="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Documentos adjuntos</h4>

        <div *ngIf="!hasAnyDoc(detailTarget()!)"
          class="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-400 dark:border-gray-700">
          Sin documentos adjuntos
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <!-- Document front -->
          <div *ngIf="detailTarget()!.documentFrontUrl" class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-white/[0.04]">
            <div class="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
              <img [src]="filesService.absoluteUrl(detailTarget()!.documentFrontUrl!)" alt="C\xE9dula frente"
                class="h-full w-full object-cover" />
              <a [href]="filesService.absoluteUrl(detailTarget()!.documentFrontUrl!)" target="_blank"
                class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                <span class="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow">Abrir \u2192</span>
              </a>
            </div>
            <div class="px-3 py-2">
              <p class="text-[10px] font-semibold text-gray-400">C\xE9dula \u2014 frente</p>
            </div>
          </div>

          <!-- Document back -->
          <div *ngIf="detailTarget()!.documentBackUrl" class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-white/[0.04]">
            <div class="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
              <img [src]="filesService.absoluteUrl(detailTarget()!.documentBackUrl!)" alt="C\xE9dula reverso"
                class="h-full w-full object-cover" />
              <a [href]="filesService.absoluteUrl(detailTarget()!.documentBackUrl!)" target="_blank"
                class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                <span class="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow">Abrir \u2192</span>
              </a>
            </div>
            <div class="px-3 py-2">
              <p class="text-[10px] font-semibold text-gray-400">C\xE9dula \u2014 reverso</p>
            </div>
          </div>

          <!-- License document -->
          <div *ngIf="detailTarget()!.licenseDocumentUrl" class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-white/[0.04]">
            <div class="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
              <img [src]="filesService.absoluteUrl(detailTarget()!.licenseDocumentUrl!)" alt="Licencia"
                class="h-full w-full object-cover" />
              <a [href]="filesService.absoluteUrl(detailTarget()!.licenseDocumentUrl!)" target="_blank"
                class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                <span class="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow">Abrir \u2192</span>
              </a>
            </div>
            <div class="px-3 py-2">
              <p class="text-[10px] font-semibold text-gray-400">Licencia n\xE1utica</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Verification notes (if any) -->
      <div *ngIf="detailTarget()!.verificationNotes"
        class="rounded-xl border px-4 py-3 text-sm"
        [ngClass]="detailTarget()!.verificationStatus === 'RECHAZADO'
          ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-800/30 dark:bg-red-500/10 dark:text-red-400'
          : 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/30 dark:bg-blue-500/10 dark:text-blue-300'">
        <p class="text-[10px] font-semibold uppercase tracking-wide mb-0.5">Notas de verificaci\xF3n</p>
        {{ detailTarget()!.verificationNotes }}
      </div>

      <!-- Actions -->
      <div class="flex gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
        <button (click)="closeDetail()"
          class="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
          Cerrar
        </button>
        <button (click)="openVerifyFromDetail()"
          class="flex-1 rounded-xl bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors">
          \u2705 Verificar capit\xE1n
        </button>
      </div>

    </div>
  </div>
</div>


<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- MODAL: Verify captain (master)                                          -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div *ngIf="verifyTarget()" class="fixed inset-0 z-[99999] flex items-center justify-center p-4">
  <div class="absolute inset-0 bg-gray-400/50 backdrop-blur-sm" (click)="closeVerify()"></div>
  <div class="relative z-10 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-gray-900">

    <button (click)="closeVerify()"
      class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 dark:bg-white/[0.07] dark:text-gray-300">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z" fill="currentColor"/></svg>
    </button>

    <h3 class="mb-1 text-lg font-bold text-gray-800 dark:text-white/90">Verificar capit\xE1n</h3>
    <p class="mb-5 text-sm text-gray-500">{{ verifyTarget()!.firstName }} {{ verifyTarget()!.lastName }}</p>

    <!-- Status picker -->
    <div class="mb-4 grid grid-cols-2 gap-3">
      <button *ngFor="let opt of [
        {v:'APROBADO',     l:'\u2705 Aprobar',      c:'border-green-400 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 dark:border-green-700'},
        {v:'EN_REVISION',  l:'\u{1F50D} En revisi\xF3n',  c:'border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-700'},
        {v:'PENDIENTE',    l:'\u23F3 Pendiente',    c:'border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-700'},
        {v:'RECHAZADO',    l:'\u274C Rechazar',     c:'border-red-400 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 dark:border-red-700'}
      ]"
        (click)="verifyStatus.set($any(opt.v))"
        [ngClass]="[opt.c, verifyStatus() === opt.v ? 'ring-2 ring-offset-1' : 'opacity-70 hover:opacity-100']"
        class="rounded-xl border px-3 py-2.5 text-sm font-semibold transition">
        {{ opt.l }}
      </button>
    </div>

    <div class="mb-5">
      <label class="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
        Notas (motivo de rechazo o comentarios)
      </label>
      <textarea [(ngModel)]="verifyNotes" rows="3" placeholder="Ej. Licencia vencida, foto ilegible..."
        class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-white/[0.03] dark:text-white/90"></textarea>
    </div>

    <div class="flex gap-3">
      <button (click)="closeVerify()"
        class="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">
        Cancelar
      </button>
      <button (click)="submitVerify()" [disabled]="verifying"
        class="flex-1 rounded-xl bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors">
        {{ verifying ? 'Guardando...' : 'Confirmar' }}
      </button>
    </div>

  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MisCapitanesComponent, { className: "MisCapitanesComponent", filePath: "src/app/pages/mis-capitanes/mis-capitanes.component.ts", lineNumber: 17 });
})();
export {
  MisCapitanesComponent
};
//# sourceMappingURL=chunk-RMGADWUS.js.map
