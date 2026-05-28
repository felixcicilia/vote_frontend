import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { IslandTripsService } from './services/island-trips.service';
import { TasaService } from '../../shared/services/tasa.service';
import { PuertoSalida, VesselSlot } from './models/island-trip.model';
import { Embarcacion } from '../embarcaciones/models/embarcacion.model';
import { amenityIcon } from '../alquileres/data/amenities';
import { environment } from '../../../environments/environment';

interface VesselGroup {
  vessel: Embarcacion;
  idaSlots: VesselSlot[];
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
  readonly tasaService = inject(TasaService);
  private readonly router = inject(Router);

  muelles: PuertoSalida[] = [];
  islas: PuertoSalida[] = [];

  loading = false;
  loadingPuntos = true;
  buscado = false;

  // Filtros
  salidaId: number | null = null;
  llegadaId: number | null = null;
  fecha = '';
  passengers = 2;

  vesselGroups: VesselGroup[] = [];

  readonly today = new Date().toISOString().split('T')[0];
  amenityIcon = amenityIcon;

  get salidaSel(): PuertoSalida | null { return this.muelles.find(p => p.id === this.salidaId) ?? null; }
  get llegadaSel(): PuertoSalida | null { return this.islas.find(p => p.id === this.llegadaId) ?? null; }

  ngOnInit(): void {
    this.tasaService.load();
    forkJoin({
      muelles: this.tripsService.getMuelles(),
      islas: this.tripsService.getPuertos(true),
    }).subscribe({
      next: ({ muelles, islas }) => {
        this.muelles = muelles;
        this.islas = islas;
        this.loadingPuntos = false;
      },
      error: () => { this.loadingPuntos = false; },
    });
  }

  buscar(): void {
    this.loading = true;
    this.buscado = true;
    this.vesselGroups = [];

    const params: any = {};
    if (this.llegadaId)  params.arrivalPointId   = this.llegadaId;
    if (this.salidaId)   params.departurePointId = this.salidaId;

    this.tripsService.getSlots(params).subscribe({
      next: (slots) => {
        this.vesselGroups = this.groupByVessel(slots);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private isSlotVisible(slot: VesselSlot): boolean {
    const now = new Date();
    const hhmm = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
    if (slot.departureDate) {
      if (slot.departureDate < this.today) return false;
      if (slot.departureDate === this.today && slot.departureTime <= hhmm) return false;
      if (this.fecha && slot.departureDate !== this.fecha) return false;
      return true;
    }
    if (this.fecha && this.fecha === this.today && slot.departureTime <= hhmm) return false;
    return true;
  }

  private groupByVessel(slots: VesselSlot[]): VesselGroup[] {
    const visible = slots.filter(s => this.isSlotVisible(s));
    const map = new Map<number, VesselGroup>();
    for (const s of visible) {
      const vid = s.vessel.id;
      if (!map.has(vid)) map.set(vid, { vessel: s.vessel, idaSlots: [], regresoSlots: [] });
      const g = map.get(vid)!;
      if (s.direction === 'IDA') g.idaSlots.push(s);
      else g.regresoSlots.push(s);
    }
    return [...map.values()].filter(g => g.idaSlots.length > 0);
  }

  seleccionar(group: VesselGroup): void {
    this.router.navigate(['/buscar/lancha', group.vessel.id], {
      queryParams: {
        llegadaId:  this.llegadaId,
        salidaId:   this.salidaId,
        fecha:      this.fecha,
        passengers: this.passengers,
      },
    });
  }

  elegirDestino(isla: PuertoSalida): void {
    this.llegadaId = isla.id;
    const el = document.getElementById('search-form');
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  minPrice(group: VesselGroup): number {
    const all = [...group.idaSlots, ...group.regresoSlots];
    return all.length ? Math.min(...all.map(s => Number(s.pricePerPerson))) : 0;
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : '🚤'; }
}
