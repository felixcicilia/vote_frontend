import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AlquileresService } from '../../services/alquileres.service';
import { DestinosService } from '../../services/destinos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Destino } from '../../models/destino.model';
import { AMENITIES, AmenityDef } from '../../data/amenities';
import { environment } from '../../../../../environments/environment';
import { DatePickerComponent } from '../../../../shared/components/form/date-picker/date-picker.component';

@Component({
  selector: 'app-detalle-yate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, DatePickerComponent],
  templateUrl: './detalle-yate.component.html',
})
export class DetalleYateComponent implements OnInit {
  private readonly route   = inject(ActivatedRoute);
  private readonly router  = inject(Router);
  private readonly fb      = inject(FormBuilder);
  private readonly embService   = inject(EmbarcacionesService);
  private readonly alqService   = inject(AlquileresService);
  private readonly destService  = inject(DestinosService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  loading = true;
  submitting = false;
  errorMessage = '';
  vessel: Embarcacion | null = null;
  destinos: Destino[] = [];
  activePhoto = 0;

  readonly today = new Date().toISOString().split('T')[0];
  readonly ALL_AMENITIES = AMENITIES;

  form = this.fb.group({
    destinationId: [null as number | null],
    startDate:     ['', Validators.required],
    endDate:       ['', Validators.required],
    adults:        [2, [Validators.required, Validators.min(1)]],
    children:      [0, [Validators.required, Validators.min(0)]],
    specialRequests: [''],
  });

  get f() { return this.form.controls; }
  get isCliente() { return this.authService.isCliente(); }
  get currentUser() { return this.authService.user(); }

  get days(): number {
    const s = this.f.startDate.value;
    const e = this.f.endDate.value;
    if (!s || !e) return 0;
    return Math.max(0, Math.ceil((new Date(e).getTime() - new Date(s).getTime()) / 86400000));
  }

  get totalPassengers(): number {
    return (this.f.adults.value ?? 0) + (this.f.children.value ?? 0);
  }

  get totalUsd(): number {
    return (this.vessel?.pricePerDay ?? 0) * (this.days || 1);
  }

  get vesselAmenities(): AmenityDef[] {
    if (!this.vessel?.amenities?.length) return [];
    return this.ALL_AMENITIES.filter(a => this.vessel!.amenities!.includes(a.value));
  }

  ngOnInit(): void {
    this.tasaService.load();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const q  = this.route.snapshot.queryParamMap;

    this.embService.getById(id).subscribe({
      next: (v) => { this.vessel = v; this.loading = false; },
      error: () => { this.loading = false; },
    });

    this.destService.getAll().subscribe({ next: (d) => { this.destinos = d; } });

    // Pre-llenar formulario con los parámetros de la búsqueda
    const startDate = q.get('startDate');
    const endDate   = q.get('endDate');
    const destinoId = q.get('destinoId');
    const adults    = q.get('adults');
    const children  = q.get('children');
    if (startDate)  this.form.patchValue({ startDate });
    if (endDate)    this.form.patchValue({ endDate });
    if (destinoId)  this.form.patchValue({ destinationId: Number(destinoId) });
    if (adults)     this.form.patchValue({ adults: Number(adults) });
    if (children)   this.form.patchValue({ children: Number(children) });
  }

  reservar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    if (this.days <= 0) { this.errorMessage = 'La fecha de fin debe ser posterior a la de inicio.'; return; }
    if (!this.vessel) return;

    const capacity = this.vessel.capacity ?? 0;
    if (this.totalPassengers > capacity) {
      this.errorMessage = `La capacidad máxima es ${capacity} pasajeros.`;
      return;
    }

    const user = this.currentUser;
    if (!user) { this.router.navigate(['/login']); return; }

    this.submitting = true;
    this.errorMessage = '';

    const destId = this.f.destinationId.value;
    const adults = this.f.adults.value ?? 2;
    const children = this.f.children.value ?? 0;
    const existingNotes = this.f.specialRequests.value?.trim() ?? '';
    const dest = this.destinos.find(d => d.id === destId);

    const meta = [
      dest ? `Destino: ${dest.name} (${dest.state})` : '',
      `Pasajeros: ${adults} adulto${adults !== 1 ? 's' : ''}${children > 0 ? ` · ${children} niño${children !== 1 ? 's' : ''}` : ''}`,
    ].filter(Boolean).join(' | ');
    const notes = existingNotes ? `${meta} | ${existingNotes}` : meta;

    this.alqService.create({
      vesselId:        this.vessel.id,
      clientId:        user.id,
      destinationId:   destId ?? undefined,
      startDate:       this.f.startDate.value!,
      endDate:         this.f.endDate.value!,
      passengers:      this.totalPassengers,
      specialRequests: notes,
    }).subscribe({
      next: (a) => { this.submitting = false; this.router.navigate(['/pagar-charter'], { queryParams: { rentalId: a.id } }); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo crear la reserva.';
        this.submitting = false;
      },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : '🛥️'; }
  typeLabel(t: string): string { return t === 'YATE' ? 'Yate' : 'Catamarán'; }
}
