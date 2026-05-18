import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmbarcacionesService } from '../../services/embarcaciones.service';

@Component({
  selector: 'app-editar-embarcacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './editar-embarcacion.component.html',
})
export class EditarEmbarcacionComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(EmbarcacionesService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  id!: number;
  loading = false;
  saving = false;
  errorMessage = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: ['LANCHA', Validators.required],
    capacity: [1, [Validators.required, Validators.min(1)]],
    description: [''],
    pricePerDay: [null as number | null],
    licensePlate: [''],
    year: [null as number | null],
    status: ['ACTIVE'],
  });

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.service.getById(this.id).subscribe({
      next: (e) => {
        this.form.patchValue({
          name: e.name,
          type: e.type,
          capacity: e.capacity,
          description: e.description ?? '',
          pricePerDay: e.pricePerDay ?? null,
          licensePlate: e.licensePlate ?? '',
          year: e.year ?? null,
          status: e.status,
        });
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No se pudo cargar la embarcación.';
        this.loading = false;
      },
    });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.errorMessage = '';

    const val = this.form.value as any;
    this.service.update(this.id, {
      name: val.name,
      type: val.type,
      capacity: Number(val.capacity),
      description: val.description || undefined,
      pricePerDay: val.pricePerDay ? Number(val.pricePerDay) : undefined,
      licensePlate: val.licensePlate || undefined,
      year: val.year ? Number(val.year) : undefined,
      status: val.status,
    }).subscribe({
      next: () => this.router.navigate(['/embarcaciones']),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? 'Error al actualizar.';
        this.saving = false;
      },
    });
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }
}
