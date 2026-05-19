import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { AlquileresService } from '../../services/alquileres.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';
import { DestinosService } from '../../services/destinos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Usuario } from '../../../usuarios/models/usuarios.model';
import { Destino } from '../../models/destino.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-crear-alquiler',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-alquiler.component.html',
})
export class CrearAlquilerComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly router  = inject(Router);
  private readonly route   = inject(ActivatedRoute);
  private readonly service = inject(AlquileresService);
  private readonly embarcacionesService = inject(EmbarcacionesService);
  private readonly usuariosService      = inject(UsuariosService);
  private readonly destinosService      = inject(DestinosService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  loading = false;
  loadingData = true;
  errorMessage = '';
  embarcacion: Embarcacion | null = null;
  clientes: Usuario[] = [];
  destino: Destino | null = null;

  // Params de la búsqueda
  destinoId = '';
  adults = 2;
  children = 0;

  get isCliente(): boolean { return this.authService.isCliente(); }
  get isAdmin(): boolean   { return this.authService.isAdmin(); }
  get currentUser()        { return this.authService.user(); }

  get paxLabel(): string {
    const parts: string[] = [];
    if (this.adults > 0)   parts.push(`${this.adults} adulto${this.adults !== 1 ? 's' : ''}`);
    if (this.children > 0) parts.push(`${this.children} niño${this.children !== 1 ? 's' : ''}`);
    return parts.join(' · ');
  }

  form = this.fb.group({
    vesselId:        [null as number | null, Validators.required],
    clientId:        [null as number | null, Validators.required],
    startDate:       ['', Validators.required],
    endDate:         ['', Validators.required],
    passengers:      [1, [Validators.required, Validators.min(1)]],
    specialRequests: [''],
  });

  get f() { return this.form.controls; }

  get days(): number {
    const s = this.f.startDate.value;
    const e = this.f.endDate.value;
    if (!s || !e) return 0;
    const diff = new Date(e).getTime() - new Date(s).getTime();
    return Math.max(0, Math.ceil(diff / 86400000));
  }

  get totalUsd(): number {
    return (this.embarcacion?.pricePerDay ?? 0) * (this.days || 1);
  }

  ngOnInit(): void {
    this.tasaService.load();
    const p = this.route.snapshot.queryParamMap;

    this.destinoId = p.get('destino') ?? '';
    this.adults    = Number(p.get('adults'))   || 2;
    this.children  = Number(p.get('children')) || 0;

    const vesselId  = Number(p.get('vesselId'))  || null;
    const startDate = p.get('startDate') ?? '';
    const endDate   = p.get('endDate')   ?? '';
    const totalPax  = this.adults + this.children;

    this.form.patchValue({ vesselId, startDate, endDate, passengers: totalPax });

    if (this.isCliente && this.currentUser) {
      this.form.patchValue({ clientId: this.currentUser.id });
    }

    let pending = 1; // destinos always loads
    if (vesselId) pending++;
    if (this.isAdmin) pending++;

    const done = () => { if (--pending === 0) this.loadingData = false; };

    // Load destination from API
    if (this.destinoId) {
      pending++;
      this.destinosService.getById(Number(this.destinoId)).subscribe({
        next: (d) => { this.destino = d; done(); },
        error: () => done(),
      });
    }

    if (vesselId) {
      this.embarcacionesService.getById(vesselId).subscribe({
        next: (e) => { this.embarcacion = e; done(); },
        error: () => done(),
      });
    }

    if (this.isAdmin) {
      this.usuariosService.obtenerUsuarios('CLIENTE').subscribe({
        next: (u) => { this.clientes = u; done(); },
        error: () => done(),
      });
    }

    done(); // consume the base count of 1
  }

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (this.days <= 0) { this.errorMessage = 'La fecha de salida debe ser posterior a la de llegada.'; return; }

    this.loading = true;
    this.errorMessage = '';

    const existing = this.f.specialRequests.value?.trim() ?? '';
    const meta = [
      this.destino ? `Destino: ${this.destino.name} (${this.destino.state})` : '',
      `Pasajeros: ${this.adults} adulto${this.adults !== 1 ? 's' : ''}${this.children > 0 ? ` · ${this.children} niño${this.children !== 1 ? 's' : ''}` : ''}`,
    ].filter(Boolean).join(' | ');
    const notes = existing ? `${meta} | ${existing}` : meta;

    this.service.create({
      vesselId:        Number(this.f.vesselId.value),
      clientId:        Number(this.f.clientId.value),
      startDate:       this.f.startDate.value!,
      endDate:         this.f.endDate.value!,
      passengers:      Number(this.f.passengers.value),
      specialRequests: notes,
    }).subscribe({
      next: (a) => { this.loading = false; this.router.navigate(['/alquileres', a.id]); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear el alquiler.';
        this.loading = false;
      },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string {
    return t === 'YATE' ? '⛵' : '🛥️';
  }
}
