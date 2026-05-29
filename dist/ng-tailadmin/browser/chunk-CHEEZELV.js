import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgIf,
  Output,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6L3J4MHE.js";

// src/app/shared/services/files.service.ts
var FilesService = class _FilesService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/files`;
  /** Full absolute URL for a stored file */
  absoluteUrl(relativeUrl) {
    if (!relativeUrl)
      return "";
    if (relativeUrl.startsWith("http"))
      return relativeUrl;
    const apiBase = environment.apiUrl.replace("/api", "");
    return `${apiBase}${relativeUrl}`;
  }
  upload(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.base}/upload`, fd);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static \u0275fac = function FilesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FilesService, factory: _FilesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/image-upload/image-upload.component.ts
function ImageUploadComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function ImageUploadComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.preview, \u0275\u0275sanitizeUrl);
  }
}
function ImageUploadComponent_label_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u{1F4F7}");
    \u0275\u0275elementEnd();
  }
}
function ImageUploadComponent_label_4__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "circle", 16)(2, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function ImageUploadComponent_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275template(1, ImageUploadComponent_label_4_span_1_Template, 2, 0, "span", 9)(2, ImageUploadComponent_label_4__svg_svg_2_Template, 3, 0, "svg", 10);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "PNG, JPG, WEBP \u2014 m\xE1x. 10 MB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 13);
    \u0275\u0275listener("change", function ImageUploadComponent_label_4_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r3);
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploading ? "Subiendo..." : "Haz clic para seleccionar una imagen", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r1.accept)("disabled", ctx_r1.uploading);
  }
}
function ImageUploadComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
var ImageUploadComponent = class _ImageUploadComponent {
  filesService;
  /** URL of the current image (to show preview on edit) */
  currentUrl = null;
  /** Label shown above the dropzone */
  label = "Imagen";
  /** Accept attribute for file input */
  accept = "image/*";
  /** Emits the relative URL (/api/files/:id) after a successful upload */
  uploaded = new EventEmitter();
  constructor(filesService) {
    this.filesService = filesService;
  }
  preview = null;
  uploading = false;
  error = "";
  ngOnChanges(changes) {
    if (changes["currentUrl"] && this.currentUrl && !this.preview) {
      this.preview = this.filesService.absoluteUrl(this.currentUrl);
    }
  }
  onFile(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.error = "";
    const reader = new FileReader();
    reader.onload = (e) => this.preview = e.target?.result;
    reader.readAsDataURL(file);
    this.uploading = true;
    this.filesService.upload(file).subscribe({
      next: (res) => {
        this.uploading = false;
        this.uploaded.emit(res.url);
      },
      error: () => {
        this.uploading = false;
        this.error = "Error al subir la imagen. Intenta de nuevo.";
        this.preview = null;
      }
    });
  }
  clear() {
    this.preview = null;
    this.uploaded.emit("");
  }
  static \u0275fac = function ImageUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageUploadComponent)(\u0275\u0275directiveInject(FilesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploadComponent, selectors: [["app-image-upload"]], inputs: { currentUrl: "currentUrl", label: "label", accept: "accept" }, outputs: { uploaded: "uploaded" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 4, consts: [[1, "space-y-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["class", "relative inline-block", 4, "ngIf"], ["class", "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center transition hover:border-brand-400 hover:bg-brand-50 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-brand-500", 4, "ngIf"], ["class", "text-xs text-red-500", 4, "ngIf"], [1, "relative", "inline-block"], ["alt", "preview", 1, "h-32", "w-32", "rounded-xl", "object-cover", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", 3, "src"], ["type", "button", 1, "absolute", "-top-2", "-right-2", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-red-500", "text-white", "text-xs", "hover:bg-red-600", 3, "click"], [1, "flex", "cursor-pointer", "flex-col", "items-center", "justify-center", "gap-2", "rounded-xl", "border-2", "border-dashed", "border-gray-300", "bg-gray-50", "px-6", "py-8", "text-center", "transition", "hover:border-brand-400", "hover:bg-brand-50", "dark:border-gray-700", "dark:bg-white/[0.02]", "dark:hover:border-brand-500"], ["class", "text-2xl text-gray-400", 4, "ngIf"], ["class", "h-6 w-6 animate-spin text-brand-500", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "text-gray-400"], ["type", "file", 1, "hidden", 3, "change", "accept", "disabled"], [1, "text-2xl", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "h-6", "w-6", "animate-spin", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8v8H4z", 1, "opacity-75"], [1, "text-xs", "text-red-500"]], template: function ImageUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ImageUploadComponent_div_3_Template, 4, 1, "div", 2)(4, ImageUploadComponent_label_4_Template, 8, 5, "label", 3)(5, ImageUploadComponent_p_5_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.preview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.preview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageUploadComponent, [{
    type: Component,
    args: [{ selector: "app-image-upload", standalone: true, imports: [CommonModule], template: `<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ label }}</label>

  <!-- Preview -->
  <div *ngIf="preview" class="relative inline-block">
    <img [src]="preview" alt="preview"
      class="h-32 w-32 rounded-xl object-cover border border-gray-200 dark:border-gray-700 shadow-sm" />
    <button type="button" (click)="clear()"
      class="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs hover:bg-red-600">\u2715</button>
  </div>

  <!-- Drop zone / file picker -->
  <label *ngIf="!preview"
    class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center transition hover:border-brand-400 hover:bg-brand-50 dark:border-gray-700 dark:bg-white/[0.02] dark:hover:border-brand-500">
    <span class="text-2xl text-gray-400" *ngIf="!uploading">\u{1F4F7}</span>
    <svg *ngIf="uploading" class="h-6 w-6 animate-spin text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    <span class="text-sm text-gray-500 dark:text-gray-400">
      {{ uploading ? 'Subiendo...' : 'Haz clic para seleccionar una imagen' }}
    </span>
    <span class="text-xs text-gray-400">PNG, JPG, WEBP \u2014 m\xE1x. 10 MB</span>
    <input type="file" [accept]="accept" (change)="onFile($event)" class="hidden" [disabled]="uploading" />
  </label>

  <p *ngIf="error" class="text-xs text-red-500">{{ error }}</p>
</div>
` }]
  }], () => [{ type: FilesService }], { currentUrl: [{
    type: Input
  }], label: [{
    type: Input
  }], accept: [{
    type: Input
  }], uploaded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploadComponent, { className: "ImageUploadComponent", filePath: "src/app/shared/components/image-upload/image-upload.component.ts", lineNumber: 11 });
})();

export {
  FilesService,
  ImageUploadComponent
};
//# sourceMappingURL=chunk-CHEEZELV.js.map
