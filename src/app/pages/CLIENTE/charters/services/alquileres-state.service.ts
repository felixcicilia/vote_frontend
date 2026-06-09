import { Injectable } from '@angular/core';
import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';

export interface AlquileresState {
  destinoId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  embarcaciones: Embarcacion[];
  resultados: Embarcacion[];
  buscado: boolean;
}

@Injectable({ providedIn: 'root' })
export class AlquileresStateService {
  private state: AlquileresState | null = null;

  save(s: AlquileresState): void { this.state = s; }
  restore(): AlquileresState | null { return this.state; }
  clear(): void { this.state = null; }
}
