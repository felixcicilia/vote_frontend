import { Ruta } from '../../rutas/models/ruta.model';
import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';

export interface Horario {
  id: number;
  route: Ruta;
  vessel: Embarcacion;
  departureTime: string; // HH:mm
  daysOfWeek: string[];  // ['1','2','3','4','5']
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateHorarioDto {
  routeId: number;
  vesselId: number;
  departureTime: string;
  daysOfWeek: string[];
  isActive?: boolean;
}

export type UpdateHorarioDto = Partial<CreateHorarioDto>;
