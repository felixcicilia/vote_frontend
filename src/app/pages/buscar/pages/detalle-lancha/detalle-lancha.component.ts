import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { IslandTripsService } from '../../services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { DestinosService } from '../../../alquileres/services/destinos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { Destino } from '../../../alquileres/models/destino.model';
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
  private readonly route      = inject(ActivatedRoute);
  private readonly router     = inject(Router);
  private readonly tripsService = inject(IslandTripsService);
  private readonly embService   = inject(EmbarcacionesService);
  private readonly destService  = inject(DestinosService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  readonly ALL_AMENITIES = AMENITIES;

  loading = true;
  submitting = false;
  errorMessage = '';
  vessel: Embarcacion | null = null;
  idaSlots:    VesselSlot[] = [];
  regresoSlots: VesselSlot[] = [];
  destino: Destino | null = null;
  activePhoto = 0;

  // Parámetros heredados del buscador
  destinoId: number | null = null;
  puertoId: number | null  = null;
  fecha = '';
  passengers = 2;
  tripType: 'IDA' | 'IDA_VUELTA' = 'IDA_VUELTA';

  // Selección del cliente
  selectedIda:    VesselSlot | null = null;
  selectedRegreso: VesselSlot | null = null;
  specialRequests = '';

  readonly today = new Date().toISOString().split('T')[0];

  get currentUser() { return this.authService.user(); }

  get totalPrice(): number {
    const ida    = this.selectedIda     ? Number(this.selectedIda.pricePerPerson)     * this.passengers : 0;
    const vuelta = this.selectedRegreso ? Number(this.selectedRegreso.pricePerPerson) * this.passengers : 0;
    return ida + vuelta;
  }

  get canBook(): boolean {
    if (!this.selectedIda) return false;
    if (this.tripType === 'IDA_VUELTA' && !this.selectedRegreso) return false;
    if (!this.fecha) return false;
    return true;
  }

  get vesselAmenities() {
    if (!this.vessel?.amenities?.length) return [];
    return this.ALL_AMENITIES.filter(a => this.vessel!.amenities!.includes(a.value));
  }

  ngOnInit(): void {
    this.tasaService.load();
    const p = this.route.snapshot;
    const vesselId = Number(p.paramMap.get('id'));

    this.destinoId = Number(p.queryParamMap.get('destinoId')) || null;
    this.puertoId  = Number(p.queryParamMap.get('puertoId'))  || null;
    this.fecha     = p.queryParamMap.get('fecha') ?? '';
    this.passengers = Number(p.queryParamMap.get('passengers')) || 2;
    this.tripType  = (p.queryParamMap.get('tripType') as any) ?? 'IDA_VUELTA';

    this.embService.getById(vesselId).subscribe({
      next: (v) => { this.vessel = v; this.loading = false; },
      error: () => { this.loading = false; },
    });

    const slotParams: any = { vesselId };
    if (this.destinoId) slotParams.destinationId = this.destinoId;
    if (this.puertoId)  slotParams.departurePointId = this.puertoId;

    this.tripsService.getSlots(slotParams).subscribe({
      next: (slots) => {
        this.idaSlots     = slots.filter(s => s.direction === 'IDA');
        this.regresoSlots = slots.filter(s => s.direction === 'REGRESO');
      },
    });

    if (this.destinoId) {
      this.destService.getById(this.destinoId).subscribe({
        next: (d) => { this.destino = d; },
      });
    }
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
      clientId:        user.id,
      vesselId:        this.vessel.id,
      destinationId:   this.destinoId!,
      departurePointId: this.selectedIda!.departurePoint.id,
      outboundSlotId:  this.selectedIda!.id,
      returnSlotId:    this.tripType === 'IDA_VUELTA' ? this.selectedRegreso?.id : undefined,
      tripDate:        this.fecha || this.today,
      tripType:        this.tripType,
      passengers:      this.passengers,
      specialRequests: this.specialRequests || undefined,
    }).subscribe({
      next: (b) => { this.submitting = false; this.router.navigate(['/mis-reservas']); },
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
