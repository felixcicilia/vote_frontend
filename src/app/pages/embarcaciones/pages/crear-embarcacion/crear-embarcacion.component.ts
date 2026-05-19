import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EmbarcacionesService } from '../../services/embarcaciones.service';
import { ImageUploadComponent } from '../../../../shared/components/image-upload/image-upload.component';

@Component({
  selector: 'app-crear-embarcacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './crear-embarcacion.component.html',
})
export class CrearEmbarcacionComponent {
  private readonly fb      = inject(FormBuilder);
  private readonly service = inject(EmbarcacionesService);
  private readonly router  = inject(Router);

  saving = false;
  errorMessage = '';
  photos: string[] = [];

  form = this.fb.group({
    name:        ['', [Validators.required, Validators.minLength(2)]],
    type:        ['LANCHA', Validators.required],
    capacity:    [1, [Validators.required, Validators.min(1)]],
    description: [''],
    pricePerDay: [null as number | null],
    licensePlate:[''],
    year:        [null as number | null],
    providerId:  [null as number | null, Validators.required],
  });

  onPhotoUploaded(url: string, index: number): void {
    if (url) {
      this.photos[index] = url;
    } else {
      this.photos.splice(index, 1);
    }
  }

  addPhotoSlot(): void { this.photos.push(''); }
  removePhoto(i: number): void { this.photos.splice(i, 1); }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.errorMessage = '';
    const val = this.form.value as any;
    this.service.create({
      name:         val.name,
      type:         val.type,
      capacity:     Number(val.capacity),
      description:  val.description || undefined,
      photos:       this.photos.filter(p => !!p),
      pricePerDay:  val.pricePerDay ? Number(val.pricePerDay) : undefined,
      licensePlate: val.licensePlate || undefined,
      year:         val.year ? Number(val.year) : undefined,
      providerId:   Number(val.providerId),
    }).subscribe({
      next: () => this.router.navigate(['/embarcaciones']),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? 'Error al crear la embarcación.';
        this.saving = false;
      },
    });
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
}
