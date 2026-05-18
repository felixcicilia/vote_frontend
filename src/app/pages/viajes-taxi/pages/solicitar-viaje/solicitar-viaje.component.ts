import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ViajesTaxiService } from '../../services/viajes-taxi.service';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';
import { Usuario } from '../../../usuarios/models/usuarios.model';

@Component({
  selector: 'app-solicitar-viaje',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './solicitar-viaje.component.html',
})
export class SolicitarViajeComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly service = inject(ViajesTaxiService);
  private readonly usuariosService = inject(UsuariosService);

  loading = false;
  errorMessage = '';
  clientes: Usuario[] = [];

  form = this.fb.group({
    clientId: [null as number | null, [Validators.required]],
    originName: ['', [Validators.required]],
    originLat: [null as number | null, [Validators.required]],
    originLng: [null as number | null, [Validators.required]],
    destinationName: ['', [Validators.required]],
    passengers: [1, [Validators.required, Validators.min(1)]],
    estimatedPrice: [null as number | null],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios('CLIENTE').subscribe({ next: (u) => this.clientes = u });
  }

  solicitar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.create({
      clientId: Number(this.f.clientId.value),
      originName: this.f.originName.value!.trim(),
      originLat: Number(this.f.originLat.value),
      originLng: Number(this.f.originLng.value),
      destinationName: this.f.destinationName.value!.trim(),
      passengers: Number(this.f.passengers.value),
      estimatedPrice: this.f.estimatedPrice.value ? Number(this.f.estimatedPrice.value) : undefined,
    }).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/viajes-taxi']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear la solicitud.';
        this.loading = false;
      },
    });
  }
}
