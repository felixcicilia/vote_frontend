import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-upload.component.html',
})
export class ImageUploadComponent implements OnChanges {
  /** URL of the current image (to show preview on edit) */
  @Input() currentUrl: string | null | undefined = null;
  /** Label shown above the dropzone */
  @Input() label = 'Imagen';
  /** Accept attribute for file input */
  @Input() accept = 'image/*';

  /** Emits the relative URL (/api/files/:id) after a successful upload */
  @Output() uploaded = new EventEmitter<string>();

  constructor(private readonly filesService: FilesService) {}

  preview: string | null = null;
  uploading = false;
  error = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentUrl'] && this.currentUrl && !this.preview) {
      this.preview = this.filesService.absoluteUrl(this.currentUrl);
    }
  }

  onFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.error = '';

    // local preview
    const reader = new FileReader();
    reader.onload = (e) => (this.preview = e.target?.result as string);
    reader.readAsDataURL(file);

    // upload
    this.uploading = true;
    this.filesService.upload(file).subscribe({
      next: (res) => {
        this.uploading = false;
        this.uploaded.emit(res.url);
      },
      error: () => {
        this.uploading = false;
        this.error = 'Error al subir la imagen. Intenta de nuevo.';
        this.preview = null;
      },
    });
  }

  clear(): void {
    this.preview = null;
    this.uploaded.emit('');
  }
}
