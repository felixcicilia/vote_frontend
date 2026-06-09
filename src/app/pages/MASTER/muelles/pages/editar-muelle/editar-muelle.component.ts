import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MuellesService } from '../../services/muelles.service';
import { ImageUploadComponent } from '../../../../shared/components/image-upload/image-upload.component';

@Component({
  selector: 'app-editar-muelle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './editar-muelle.component.html',
})
export class EditarMuelleComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(MuellesService);

  loading = false;
  loadingMuelle = false;
  errorMessage = '';
  muelleId = 0;
  photoUrl = '';

  onPhotoUploaded(url: string): void { this.photoUrl = url; }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    description: [''],
    latitude: [null as number | null, [Validators.required]],
    longitude: [null as number | null, [Validators.required]],
    address: [''],
    city: [''],
    state: [''],
    isActive: [true],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.errorMessage = 'ID inválido.'; return; }
    this.muelleId = id;
    this.loadingMuelle = true;
    this.service.getById(id).subscribe({
      next: (m) => {
        this.form.patchValue({
          name: m.name ?? '',
          description: m.description ?? '',
          latitude: m.latitude,
          longitude: m.longitude,
          address: m.address ?? '',
          city: m.city ?? '',
          state: m.state ?? '',
          isActive: m.isActive,
        });
        this.photoUrl = m.photoUrl ?? '';
        this.loadingMuelle = false;
      },
      error: () => { this.errorMessage = 'No se pudo cargar el muelle.'; this.loadingMuelle = false; },
    });
  }

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.update(this.muelleId, {
      name: this.f.name.value!.trim(),
      description: this.f.description.value?.trim() || undefined,
      photoUrl: this.photoUrl || undefined,
      latitude: Number(this.f.latitude.value),
      longitude: Number(this.f.longitude.value),
      address: this.f.address.value?.trim() || undefined,
      city: this.f.city.value?.trim() || undefined,
      state: this.f.state.value?.trim() || undefined,
      isActive: this.f.isActive.value ?? true,
    }).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/muelles']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo actualizar el muelle.';
        this.loading = false;
      },
    });
  }
}
