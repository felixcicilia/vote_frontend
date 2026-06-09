import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { HorariosService } from '../../services/horarios.service';
import { RutasService } from '../../../rutas/services/rutas.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { Ruta } from '../../../rutas/models/ruta.model';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';

@Component({
  selector: 'app-editar-horario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './editar-horario.component.html',
})
export class EditarHorarioComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(HorariosService);
  private readonly rutasService = inject(RutasService);
  private readonly embarcacionesService = inject(EmbarcacionesService);

  loading = false;
  loadingHorario = false;
  errorMessage = '';
  horarioId = 0;
  rutas: Ruta[] = [];
  embarcaciones: Embarcacion[] = [];

  readonly DAYS = [
    { label: 'Dom', value: '0' }, { label: 'Lun', value: '1' }, { label: 'Mar', value: '2' },
    { label: 'Mié', value: '3' }, { label: 'Jue', value: '4' }, { label: 'Vie', value: '5' },
    { label: 'Sáb', value: '6' },
  ];

  selectedDays: Set<string> = new Set();

  form = this.fb.group({
    routeId: [null as number | null, [Validators.required]],
    vesselId: [null as number | null, [Validators.required]],
    departureTime: ['', [Validators.required]],
    isActive: [true],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.errorMessage = 'ID inválido.'; return; }
    this.horarioId = id;
    this.rutasService.getAll().subscribe({ next: (r) => this.rutas = r });
    this.embarcacionesService.getAll().subscribe({ next: (e) => this.embarcaciones = e });
    this.loadingHorario = true;
    this.service.getById(id).subscribe({
      next: (h) => {
        this.form.patchValue({
          routeId: h.route.id,
          vesselId: h.vessel.id,
          departureTime: h.departureTime,
          isActive: h.isActive,
        });
        this.selectedDays = new Set((h.daysOfWeek as unknown as number[]).map(String));
        this.loadingHorario = false;
      },
      error: () => { this.errorMessage = 'No se pudo cargar el horario.'; this.loadingHorario = false; },
    });
  }

  toggleDay(day: string): void {
    if (this.selectedDays.has(day)) this.selectedDays.delete(day);
    else this.selectedDays.add(day);
  }

  guardar(): void {
    if (this.form.invalid || this.selectedDays.size === 0) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = '';

    this.service.update(this.horarioId, {
      routeId: Number(this.f.routeId.value),
      vesselId: Number(this.f.vesselId.value),
      departureTime: this.f.departureTime.value!,
      daysOfWeek: Array.from(this.selectedDays).map(Number).sort((a, b) => a - b),
      isActive: this.f.isActive.value ?? true,
    }).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/horarios']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'No se pudo actualizar el horario.';
        this.loading = false;
      },
    });
  }
}
