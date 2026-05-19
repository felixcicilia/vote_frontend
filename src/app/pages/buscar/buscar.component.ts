import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { IslandTripsService } from './services/island-trips.service';
import { DestinosService } from '../alquileres/services/destinos.service';
import { TasaService } from '../../shared/services/tasa.service';
import { Destino } from '../alquileres/models/destino.model';
import { PuertoSalida, VesselSlot } from './models/island-trip.model';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { amenityIcon } from '../alquileres/data/amenities';
import { environment } from '../../../environments/environment';

interface VesselGroup {
  vessel: Embarcacion;
  idaSlots:    VesselSlot[];
  regresoSlots: VesselSlot[];
}

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  private readonly tripsService = inject(IslandTripsService);
  private readonly destinosService = inject(DestinosService);
  readonly tasaService = inject(TasaService);
  private readonly router = inject(Router);

  destinos: Destino[] = [];
  puertos: PuertoSalida[] = [];
  loading = false;
  buscado = false;

  // Filtros
  destinoId: number | null = null;
  puertoId: number | null  = null;
  fecha = '';
  passengers = 2;
  tripType: 'IDA' | 'IDA_VUELTA' = 'IDA_VUELTA';

  // Resultados agrupados por embarcación
  vesselGroups: VesselGroup[] = [];

  readonly today = new Date().toISOString().split('T')[0];
  amenityIcon = amenityIcon;

  get destinoSel(): Destino | null {
    return this.destinos.find(d => d.id === this.destinoId) ?? null;
  }
  get puertoSel(): PuertoSalida | null {
    return this.puertos.find(p => p.id === this.puertoId) ?? null;
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.destinosService.getAll().subscribe({ next: d => { this.destinos = d; } });
    this.tripsService.getPuertos().subscribe({ next: p => { this.puertos = p; } });
  }

  buscar(): void {
    if (!this.destinoId) return;
    this.loading = true;
    this.buscado = true;
    this.vesselGroups = [];

    const params: any = { destinationId: this.destinoId };
    if (this.puertoId) params.departurePointId = this.puertoId;

    this.tripsService.getSlots(params).subscribe({
      next: (slots) => {
        this.vesselGroups = this.groupByVessel(slots);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private groupByVessel(slots: VesselSlot[]): VesselGroup[] {
    const map = new Map<number, VesselGroup>();
    for (const s of slots) {
      const vid = s.vessel.id;
      if (!map.has(vid)) {
        map.set(vid, { vessel: s.vessel, idaSlots: [], regresoSlots: [] });
      }
      const g = map.get(vid)!;
      if (s.direction === 'IDA') g.idaSlots.push(s);
      else g.regresoSlots.push(s);
    }
    // Filter: if IDA_VUELTA, only show vessels that have both directions
    return [...map.values()].filter(g => {
      if (this.tripType === 'IDA_VUELTA') {
        return g.idaSlots.length > 0 && g.regresoSlots.length > 0;
      }
      return g.idaSlots.length > 0;
    });
  }

  seleccionar(group: VesselGroup): void {
    this.router.navigate(['/buscar/lancha', group.vessel.id], {
      queryParams: {
        destinoId:  this.destinoId,
        puertoId:   this.puertoId,
        fecha:      this.fecha,
        passengers: this.passengers,
        tripType:   this.tripType,
      },
    });
  }

  minPrice(group: VesselGroup): number {
    const allSlots = [...group.idaSlots, ...group.regresoSlots];
    if (!allSlots.length) return 0;
    return Math.min(...allSlots.map(s => Number(s.pricePerPerson)));
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🚤'; }
}
