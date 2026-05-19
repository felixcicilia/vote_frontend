import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IslandTripsService } from '../../../buscar/services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { DestinosService } from '../../../alquileres/services/destinos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { VesselSlot, PuertoSalida } from '../../../buscar/models/island-trip.model';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Destino } from '../../../alquileres/models/destino.model';

interface SlotForm {
  vesselId: number | null;
  departurePointId: number | null;
  destinationId: number | null;
  departureTime: string;
  direction: 'IDA' | 'REGRESO';
  pricePerPerson: number | null;
  durationMinutes: number | null;
  maxPassengers: number | null;
}

@Component({
  selector: 'app-itinerario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './itinerario.component.html',
})
export class ItinerarioComponent implements OnInit {
  private readonly tripsService = inject(IslandTripsService);
  private readonly embService   = inject(EmbarcacionesService);
  private readonly destService  = inject(DestinosService);
  readonly authService = inject(AuthService);

  loading = true;
  submitting = false;
  errorMessage = '';
  successMessage = '';

  vessels: Embarcacion[] = [];
  destinos: Destino[] = [];
  puertos: PuertoSalida[] = [];
  slots: VesselSlot[] = [];

  showForm = false;
  editingId: number | null = null;

  form: SlotForm = this.emptyForm();

  get providerId(): number | null {
    return (this.authService.user() as any)?.providerProfile?.id ?? null;
  }

  ngOnInit(): void {
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    this.embService.getByProvider(pid).subscribe({ next: v => { this.vessels = v; } });
    this.destService.getAll().subscribe({ next: d => { this.destinos = d; } });
    this.tripsService.getPuertos().subscribe({ next: p => { this.puertos = p; } });

    this.tripsService.getSlotsByProvider(pid).subscribe({
      next: s => { this.slots = s; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  openEdit(slot: VesselSlot): void {
    this.editingId = slot.id;
    this.form = {
      vesselId:        slot.vessel.id,
      departurePointId: slot.departurePoint.id,
      destinationId:   slot.destination.id,
      departureTime:   slot.departureTime,
      direction:       slot.direction,
      pricePerPerson:  Number(slot.pricePerPerson),
      durationMinutes: slot.durationMinutes ?? null,
      maxPassengers:   slot.maxPassengers ?? null,
    };
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  cancel(): void {
    this.showForm = false;
    this.editingId = null;
    this.form = this.emptyForm();
  }

  save(): void {
    if (!this.form.vesselId || !this.form.departurePointId || !this.form.destinationId || !this.form.departureTime || !this.form.pricePerPerson) {
      this.errorMessage = 'Completa todos los campos obligatorios.';
      return;
    }
    this.submitting = true;
    this.errorMessage = '';

    const dto: any = {
      vesselId:         this.form.vesselId,
      departurePointId: this.form.departurePointId,
      destinationId:    this.form.destinationId,
      departureTime:    this.form.departureTime,
      direction:        this.form.direction,
      pricePerPerson:   this.form.pricePerPerson,
    };
    if (this.form.durationMinutes) dto.durationMinutes = this.form.durationMinutes;
    if (this.form.maxPassengers)   dto.maxPassengers   = this.form.maxPassengers;

    const op$ = this.editingId
      ? this.tripsService.updateSlot(this.editingId, dto)
      : this.tripsService.createSlot(dto);

    op$.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.slots = this.slots.map(s => s.id === this.editingId ? saved : s);
        } else {
          this.slots = [saved, ...this.slots];
        }
        this.submitting = false;
        this.successMessage = this.editingId ? 'Horario actualizado.' : 'Horario creado.';
        this.cancel();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al guardar.';
        this.submitting = false;
      },
    });
  }

  deleteSlot(slot: VesselSlot): void {
    if (!confirm(`¿Eliminar el horario ${slot.departureTime} (${slot.direction})?`)) return;
    this.tripsService.deleteSlot(slot.id).subscribe({
      next: () => { this.slots = this.slots.filter(s => s.id !== slot.id); },
    });
  }

  toggleActive(slot: VesselSlot): void {
    this.tripsService.updateSlot(slot.id, { isActive: !slot.isActive }).subscribe({
      next: (updated) => { this.slots = this.slots.map(s => s.id === updated.id ? updated : s); },
    });
  }

  vesselName(id: number | null): string {
    return this.vessels.find(v => v.id === id)?.name ?? '';
  }

  private emptyForm(): SlotForm {
    return {
      vesselId: this.vessels[0]?.id ?? null,
      departurePointId: null,
      destinationId: null,
      departureTime: '',
      direction: 'IDA',
      pricePerPerson: null,
      durationMinutes: null,
      maxPassengers: null,
    };
  }
}
