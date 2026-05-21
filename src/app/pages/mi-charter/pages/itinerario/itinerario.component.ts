import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IslandTripsService } from '../../../buscar/services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { VesselSlot, PuertoSalida } from '../../../buscar/models/island-trip.model';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { environment } from '../../../../../environments/environment';
import { amenityIcon, amenityLabel } from '../../../alquileres/data/amenities';

interface SlotForm {
  vesselId: number | null;
  departurePointId: number | null;
  arrivalPointId: number | null;
  departureDate: string;
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
  readonly authService = inject(AuthService);

  loading = true;
  submitting = false;
  errorMessage = '';
  successMessage = '';

  vessels: Embarcacion[] = [];
  muelles: PuertoSalida[] = [];
  islaPiers: PuertoSalida[] = [];
  slots: VesselSlot[] = [];

  selectedVesselId: number | null = null;
  selectedDate: string = new Date().toISOString().split('T')[0];
  search = '';
  vesselSearch = '';
  showForm = false;
  editingId: number | null = null;

  form: SlotForm = this.emptyForm();

  get selectedVessel(): Embarcacion | null {
    return this.vessels.find(v => v.id === this.selectedVesselId) ?? null;
  }

  get filteredVessels(): Embarcacion[] {
    const t = this.vesselSearch.trim().toLowerCase();
    if (!t) return this.vessels;
    return this.vessels.filter(v => v.name.toLowerCase().includes(t));
  }

  get allSlots(): VesselSlot[] {
    return [...this.idaSlots, ...this.regresoSlots].sort((a, b) =>
      (a.departureDate ?? '').localeCompare(b.departureDate ?? '') || a.departureTime.localeCompare(b.departureTime));
  }

  get filteredSlots(): VesselSlot[] {
    if (!this.selectedVesselId) return [];
    return this.slots.filter(s => s.vessel.id === this.selectedVesselId);
  }

  private matchSearch(s: VesselSlot): boolean {
    if (!this.search.trim()) return true;
    const t = this.search.toLowerCase();
    return s.departurePoint.name.toLowerCase().includes(t)
        || s.arrivalPoint.name.toLowerCase().includes(t)
        || s.departureTime.includes(t)
        || (s.departureDate ?? '').includes(t);
  }

  get idaSlots(): VesselSlot[] {
    return this.filteredSlots.filter(s => s.direction === 'IDA' && this.matchSearch(s))
      .sort((a, b) => (a.departureDate ?? '').localeCompare(b.departureDate ?? '') || a.departureTime.localeCompare(b.departureTime));
  }
  get regresoSlots(): VesselSlot[] {
    return this.filteredSlots.filter(s => s.direction === 'REGRESO' && this.matchSearch(s))
      .sort((a, b) => (a.departureDate ?? '').localeCompare(b.departureDate ?? '') || a.departureTime.localeCompare(b.departureTime));
  }

  readonly today = new Date().toISOString().split('T')[0];

  isSlotPast(slot: VesselSlot): boolean {
    // Use the slot's own date if it has one; only fall back to the UI filter date
    // for recurring slots (no specific date assigned).
    const slotDate = slot.departureDate ?? this.selectedDate;
    if (slotDate > this.today) return false;   // future date → never past
    if (slotDate < this.today) return true;    // past date → always past
    // Same day as today → compare departure time against current time
    const now = new Date();
    const hhmm = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
    return slot.departureTime <= hhmm;
  }

  get providerId(): number | null {
    return (this.authService.user() as any)?.providerProfile?.id ?? null;
  }

  refresh(): void {
    const pid = this.providerId;
    if (!pid) return;
    this.loading = true;
    this.tripsService.getSlotsByProvider(pid).subscribe({
      next: s => { this.slots = s; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  ngOnInit(): void {
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    this.embService.getByProvider(pid).subscribe({
      next: v => { this.vessels = v; if (v.length > 0) this.selectedVesselId = v[0].id; },
    });
    this.tripsService.getMuelles().subscribe({ next: p => { this.muelles = p; } });
    this.tripsService.getIslasPiers().subscribe({ next: p => { this.islaPiers = p; } });

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
      vesselId:         slot.vessel.id,
      departurePointId: slot.departurePoint.id,
      arrivalPointId:   slot.arrivalPoint.id,
      departureDate:    slot.departureDate ?? '',
      departureTime:    slot.departureTime,
      direction:        slot.direction,
      pricePerPerson:   slot.pricePerPerson ? Number(slot.pricePerPerson) : null,
      durationMinutes:  slot.durationMinutes ?? null,
      maxPassengers:    slot.maxPassengers ?? null,
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
    if (!this.form.vesselId || !this.form.departurePointId || !this.form.arrivalPointId || !this.form.departureTime) {
      this.errorMessage = 'Completa todos los campos obligatorios.';
      return;
    }
    this.submitting = true;
    this.errorMessage = '';

    const dto: any = {
      vesselId:         this.form.vesselId,
      departurePointId: this.form.departurePointId,
      arrivalPointId:   this.form.arrivalPointId,
      departureTime:    this.form.departureTime,
      direction:        this.form.direction,
    };
    if (this.form.departureDate)   dto.departureDate   = this.form.departureDate;
    if (this.form.pricePerPerson)  dto.pricePerPerson  = this.form.pricePerPerson;
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

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string {
    return t === 'LANCHA' ? '🚤' : t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🛶';
  }
  typeLabel(t: string): string {
    const m: Record<string,string> = { LANCHA:'Lancha', YATE:'Yate', CATAMARAN:'Catamarán', BOTE:'Bote' };
    return m[t] ?? t;
  }
  amenityIcon  = amenityIcon;
  amenityLabel = amenityLabel;

  slotCountForVessel(vesselId: number): number {
    return this.slots.filter(s => s.vessel.id === vesselId).length;
  }

  private emptyForm(): SlotForm {
    return {
      vesselId:         this.selectedVesselId ?? this.vessels[0]?.id ?? null,
      departurePointId: null,
      arrivalPointId:   null,
      departureDate:    this.selectedDate ?? '',
      departureTime:    '',
      direction:        'IDA',
      pricePerPerson:   null,
      durationMinutes:  null,
      maxPassengers:    null,
    };
  }
}
