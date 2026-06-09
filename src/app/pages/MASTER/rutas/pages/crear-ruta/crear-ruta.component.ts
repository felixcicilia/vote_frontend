import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { RutasService } from '../../services/rutas.service';
import { MuellesService } from '../../../muelles/services/muelles.service';
import { Muelle } from '../../../muelles/models/muelle.model';

@Component({
  selector: 'app-crear-ruta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-ruta.component.html',
})
export class CrearRutaComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly service = inject(RutasService);
  private readonly muellesService = inject(MuellesService);

  loading = false;
  errorMessage = '';
  muelles: Muelle[] = [];

  form = this.fb.group({
    originPierId: [null as number | null, [Validators.required]],
    destinationPierId: [null as number | null, [Validators.required]],
    durationMinutes: [null as number | null, [Validators.required, Validators.min(1)]],
    pricePerSeat: [null as number | null, [Validators.required, Validators.min(0)]],
    description: [''],
    isActive: [true],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.muellesService.getAll(true).subscribe({ next: (m) => this.muelles = m });
  }

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.create({
      originPierId: Number(this.f.originPierId.value),
      destinationPierId: Number(this.f.destinationPierId.value),
      durationMinutes: Number(this.f.durationMinutes.value),
      pricePerSeat: Number(this.f.pricePerSeat.value),
      description: this.f.description.value?.trim() || undefined,
      isActive: this.f.isActive.value ?? true,
    }).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/rutas']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear la ruta.';
        this.loading = false;
      },
    });
  }
}
