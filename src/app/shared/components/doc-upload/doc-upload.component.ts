import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FilesService } from '../../services/files.service';

/**
 * Generic file uploader for images AND PDFs.
 * - Images: shows inline preview thumbnail.
 * - PDFs: shows a PDF-icon card with filename + "Open" link.
 * Emits the relative URL (/api/files/:id) on success, or '' on clear.
 */
@Component({
  selector: 'app-doc-upload',
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
        class="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs hover:bg-red-600 shadow">✕</button>
      <a [href]="absUrl(currentUrl)" target="_blank"
        class="absolute bottom-1.5 right-1.5 rounded-lg bg-black/50 px-2 py-0.5 text-[10px] text-white hover:bg-black/70">
        Ver →
      </a>
    </div>
    <!-- PDF preview -->
    <div *ngIf="!isImage(currentUrl)"
      class="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 dark:border-gray-700 dark:bg-white/[0.04]">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">📄</span>
        <div>
          <p class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ label }}</p>
          <p class="text-[10px] text-gray-400">Documento adjunto</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a [href]="absUrl(currentUrl)" target="_blank"
          class="rounded-lg border border-brand-300 px-2.5 py-1 text-[10px] font-medium text-brand-600 hover:bg-brand-50 dark:border-brand-600 dark:text-brand-400">
          Abrir →
        </a>
        <button type="button" (click)="clear()"
          class="rounded-lg border border-red-300 px-2.5 py-1 text-[10px] font-medium text-red-500 hover:bg-red-50 dark:border-red-700">
          ✕
        </button>
      </div>
    </div>
  </div>

  <!-- Drop zone — shown when no file yet OR uploading -->
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
  `,
})
export class DocUploadComponent implements OnChanges {
  private readonly filesService = inject(FilesService);

  /** Relative URL of already-stored file (for edit mode) */
  @Input() currentUrl: string | null | undefined = null;
  @Input() label = 'Documento';
  /** 'image' | 'document' | 'any' */
  @Input() type: 'image' | 'document' | 'any' = 'any';

  @Output() uploaded = new EventEmitter<string>();

  uploading = false;
  error = '';
  private _resolvedUrl: string | null = null;

  get accept(): string {
    if (this.type === 'image') return 'image/*';
    if (this.type === 'document') return 'image/*,application/pdf';
    return 'image/*,application/pdf';
  }

  get icon(): string {
    return this.type === 'image' ? '📷' : '📄';
  }

  get hint(): string {
    return this.type === 'image' ? 'PNG, JPG, WEBP — máx. 10 MB' : 'PNG, JPG, PDF — máx. 10 MB';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentUrl']) {
      this._resolvedUrl = this.currentUrl ?? null;
    }
  }

  /** True when the current file should be previewed as an image */
  isImage(url: string): boolean {
    if (!url) return false;
    // For photo-only fields (type='image'), always preview as image.
    // For document fields (type='document'/'any'), only preview if the last upload was an image.
    // For existing DB-loaded files in document fields, show the card view (safer).
    if (this.type === 'image') return true;
    return this._mimeIsImage && this._uploadedThisSession;
  }

  private _mimeIsImage = true;
  private _uploadedThisSession = false;

  absUrl(url: string): string {
    return this.filesService.absoluteUrl(url);
  }

  onFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.error = '';
    this._mimeIsImage = file.type.startsWith('image/');
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
        this.error = 'Error al subir. Intenta de nuevo.';
      },
    });
  }

  clear(): void {
    this._resolvedUrl = null;
    this.currentUrl = null;
    this._mimeIsImage = true;
    this._uploadedThisSession = false;
    this.uploaded.emit('');
  }
}
