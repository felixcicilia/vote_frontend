import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { IslandTripsService } from '../../services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { PuertoSalida, VesselSlot } from '../../models/island-trip.model';
import { AMENITIES } from '../../../alquileres/data/amenities';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-detalle-lancha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detalle-lancha.component.html',
})
export class DetalleLanchaComponent implements OnInit {
  private readonly route        = inject(ActivatedRoute);
  private readonly router       = inject(Router);
  private readonly tripsService = inject(IslandTripsService);
  private readonly embService   = inject(EmbarcacionesService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  readonly ALL_AMENITIES = AMENITIES;

  loading = true;
  submitting = false;
  errorMessage = '';
  vessel: Embarcacion | null = null;
  idaSlots: VesselSlot[] = [];
  regresoSlots: VesselSlot[] = [];
  activePhoto = 0;

  // Parámetros heredados del buscador
  llegadaId: number | null = null;
  salidaId: number | null  = null;
  fecha = '';
  passengers = 2;

  get tripType(): 'IDA' | 'IDA_VUELTA' {
    return this.selectedRegreso ? 'IDA_VUELTA' : 'IDA';
  }

  // Selección del cliente
  selectedIda: VesselSlot | null = null;
  selectedRegreso: VesselSlot | null = null;
  specialRequests = '';

  readonly today = new Date().toISOString().split('T')[0];

  get currentUser() { return this.authService.user(); }

  get llegadaSel(): PuertoSalida | null {
    return this.idaSlots[0]?.arrivalPoint ?? this.regresoSlots[0]?.departurePoint ?? null;
  }

  get salidaSel(): PuertoSalida | null {
    return this.idaSlots[0]?.departurePoint ?? null;
  }

  get totalPrice(): number {
    const ida    = this.selectedIda     ? Number(this.selectedIda.pricePerPerson)     * this.passengers : 0;
    const vuelta = this.selectedRegreso ? Number(this.selectedRegreso.pricePerPerson) * this.passengers : 0;
    return ida + vuelta;
  }

  get maxPassengers(): number {
    const cap = this.vessel?.capacity ?? 999;
    const slotMax = this.selectedIda?.maxPassengers ?? cap;
    return Math.min(cap, slotMax);
  }

  private nowHHMM(): string {
    const n = new Date();
    return `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}`;
  }

  private isToday(date: string): boolean {
    return date === this.today;
  }

  private isSlotVisible(slot: VesselSlot): boolean {
    const now = this.nowHHMM();
    if (slot.departureDate) {
      if (slot.departureDate < this.today) return false;                       // fecha pasada → ocultar
      if (slot.departureDate === this.today && slot.departureTime <= now) return false; // hoy y ya salió
      if (this.fecha && slot.departureDate !== this.fecha) return false;       // no coincide con la fecha elegida
      return true;
    }
    // slot sin fecha (recurrente): filtrar por hora solo si el cliente eligió hoy
    if (this.fecha && this.isToday(this.fecha) && slot.departureTime <= now) return false;
    return true;
  }

  get visibleIdaSlots(): VesselSlot[] {
    return this.idaSlots.filter(s => this.isSlotVisible(s));
  }

  get visibleRegresoSlots(): VesselSlot[] {
    return this.regresoSlots.filter(s => this.isSlotVisible(s));
  }

  get canBook(): boolean {
    if (!this.selectedIda) return false;
    if (!this.fecha) return false;
    return true;
  }

  get vesselAmenities() {
    if (!this.vessel?.amenities?.length) return [];
    return this.ALL_AMENITIES.filter(a => this.vessel!.amenities!.includes(a.value));
  }

  ngOnInit(): void {
    this.tasaService.load();
    const snap = this.route.snapshot;
    const vesselId = Number(snap.paramMap.get('id'));

    this.llegadaId  = Number(snap.queryParamMap.get('llegadaId'))  || null;
    this.salidaId   = Number(snap.queryParamMap.get('salidaId'))   || null;
    this.fecha      = snap.queryParamMap.get('fecha') ?? '';
    this.passengers = Number(snap.queryParamMap.get('passengers')) || 2;

    this.embService.getById(vesselId).subscribe({
      next: (v) => { this.vessel = v; this.loading = false; },
      error: () => { this.loading = false; },
    });

    this.tripsService.getSlots({ vesselId }).subscribe({
      next: (slots) => {
        this.idaSlots     = slots.filter(s => s.direction === 'IDA').sort((a, b) => a.departureTime.localeCompare(b.departureTime));
        this.regresoSlots = slots.filter(s => s.direction === 'REGRESO').sort((a, b) => a.departureTime.localeCompare(b.departureTime));
      },
    });
  }

  selectIda(slot: VesselSlot): void {
    this.selectedIda = this.selectedIda?.id === slot.id ? null : slot;
  }

  selectRegreso(slot: VesselSlot): void {
    this.selectedRegreso = this.selectedRegreso?.id === slot.id ? null : slot;
  }

  reservar(): void {
    if (!this.canBook || !this.vessel) return;
    const user = this.currentUser;
    if (!user) { this.router.navigate(['/login']); return; }

    this.submitting = true;
    this.errorMessage = '';

    this.tripsService.createBooking({
      clientId:         user.id,
      vesselId:         this.vessel.id,
      destinationId:    this.llegadaId!,
      departurePointId: this.selectedIda!.departurePoint.id,
      outboundSlotId:   this.selectedIda!.id,
      returnSlotId:     this.selectedRegreso?.id,
      tripDate:         this.fecha || this.today,
      tripType:         this.tripType,
      passengers:       this.passengers,
      specialRequests:  this.specialRequests || undefined,
    }).subscribe({
      next: () => { this.submitting = false; this.router.navigate(['/mis-reservas']); },
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

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🚤'; }
  typeLabel(t: string): string {
    const m: Record<string, string> = { LANCHA: 'Lancha', YATE: 'Yate', CATAMARAN: 'Catamarán', BOTE: 'Bote' };
    return m[t] ?? t;
  }
}
