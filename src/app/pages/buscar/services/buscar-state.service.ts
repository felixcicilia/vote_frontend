import { Injectable } from '@angular/core';
import { VesselSlot } from '../models/island-trip.model';
import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';

export interface BuscarState {
  salidaId: number | null;
  llegadaId: number | null;
  fecha: string;
  passengers: number;
  vesselGroups: { vessel: Embarcacion; idaSlots: VesselSlot[]; regresoSlots: VesselSlot[] }[];
  buscado: boolean;
}

@Injectable({ providedIn: 'root' })
export class BuscarStateService {
  private state: BuscarState | null = null;

  save(s: BuscarState): void { this.state = s; }
  restore(): BuscarState | null { return this.state; }
  clear(): void { this.state = null; }
}
