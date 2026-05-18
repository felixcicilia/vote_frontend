import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AlquileresService } from '../../services/alquileres.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Usuario } from '../../../usuarios/models/usuarios.model';

@Component({
  selector: 'app-crear-alquiler',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-alquiler.component.html',
})
export class CrearAlquilerComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly service = inject(AlquileresService);
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly usuariosService = inject(UsuariosService);

  loading = false;
  errorMessage = '';
  embarcaciones: Embarcacion[] = [];
  clientes: Usuario[] = [];

  form = this.fb.group({
    vesselId: [null as number | null, [Validators.required]],
    clientId: [null as number | null, [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    passengers: [1, [Validators.required, Validators.min(1)]],
    specialRequests: [''],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.embarcacionesService.getAll().subscribe({ next: (e) => this.embarcaciones = e });
    this.usuariosService.obtenerUsuarios('CLIENTE').subscribe({ next: (u) => this.clientes = u });
  }

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.create({
      vesselId: Number(this.f.vesselId.value),
      clientId: Number(this.f.clientId.value),
      startDate: this.f.startDate.value!,
      endDate: this.f.endDate.value!,
      passengers: Number(this.f.passengers.value),
      specialRequests: this.f.specialRequests.value?.trim() || undefined,
    }).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/alquileres']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear el alquiler.';
        this.loading = false;
      },
    });
  }
}
