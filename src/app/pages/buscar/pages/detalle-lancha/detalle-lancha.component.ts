import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatePickerComponent } from '../../../../shared/components/form/date-picker/date-picker.component';
import { HttpClient } from '@angular/common/http';

import { IslandTripsService } from '../../services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { PuertoSalida, VesselSlot } from '../../models/island-trip.model';
import { AMENITIES } from '../../../alquileres/data/amenities';
import { environment } from '../../../../../environments/environment';

interface SlotAvailability {
  slotId: number;
  tripDate: string;
  maxPassengers: number;
  booked: number;
  available: number;
}

@Component({
  selector: 'app-detalle-lancha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DatePickerComponent],
  templateUrl: './detalle-lancha.component.html',
})
export class DetalleLanchaComponent implements OnInit {
  private readonly route        = inject(ActivatedRoute);
  private readonly router       = inject(Router);
  private readonly http         = inject(HttpClient);
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
  fecha = new Date().toISOString().split('T')[0];
  passengers = 2;

  // Disponibilidad por slotId
  availability: Map<number, SlotAvailability> = new Map();

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
    if (!this.selectedIda) return this.vessel?.capacity ?? 99;
    const avail = this.availability.get(this.selectedIda.id);
    if (avail) return avail.available;
    const cap = this.vessel?.capacity ?? 99;
    return Math.min(cap, this.selectedIda.maxPassengers ?? cap);
  }

  slotAvailable(slot: VesselSlot): number {
    const avail = this.availability.get(slot.id);
    if (avail) return avail.available;
    const cap = this.vessel?.capacity ?? 99;
    return slot.maxPassengers ?? cap;
  }

  slotIsFull(slot: VesselSlot): boolean {
    return this.slotAvailable(slot) <= 0;
  }

  private loadAvailability(): void {
    if (!this.fecha) return;
    const allSlots = [...this.idaSlots, ...this.regresoSlots];
    allSlots.forEach(slot => {
      this.http.get<SlotAvailability>(
        `${environment.apiUrl}/island-bookings/availability?slotId=${slot.id}&date=${this.fecha}`
      ).subscribe({ next: (a) => { this.availability = new Map(this.availability).set(slot.id, a); } });
    });
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
    if (!this.selectedIda || !this.fecha) return false;
    if (this.slotIsFull(this.selectedIda)) return false;
    if (this.passengers > this.maxPassengers) return false;
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
        this.loadAvailability();
      },
    });
  }

  onFechaChange(): void {
    this.availability = new Map();
    this.selectedIda = null;
    this.selectedRegreso = null;
    this.loadAvailability();
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
      destinationId:    this.llegadaId ?? this.selectedIda!.arrivalPoint.id,
      departurePointId: this.selectedIda!.departurePoint.id,
      outboundSlotId:   this.selectedIda!.id,
      returnSlotId:     this.selectedRegreso?.id,
      tripDate:         this.fecha || this.today,
      tripType:         this.tripType,
      passengers:       this.passengers,
      specialRequests:  this.specialRequests || undefined,
    }).subscribe({
      next: (b) => { this.submitting = false; this.router.navigate(['/pagar-reserva'], { queryParams: { bookingId: b.id } }); },
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
