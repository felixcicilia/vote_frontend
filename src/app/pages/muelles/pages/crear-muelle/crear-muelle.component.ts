import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MuellesService } from '../../services/muelles.service';

@Component({
  selector: 'app-crear-muelle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-muelle.component.html',
})
export class CrearMuelleComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly service = inject(MuellesService);

  loading = false;
  errorMessage = '';

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

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.create({
      name: this.f.name.value!.trim(),
      description: this.f.description.value?.trim() || undefined,
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
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear el muelle.';
        this.loading = false;
      },
    });
  }
}
