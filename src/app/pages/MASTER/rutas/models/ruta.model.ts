import { Muelle } from '../../muelles/models/muelle.model';

export interface Ruta {
  id: number;
  originPier: Muelle;
  destinationPier: Muelle;
  durationMinutes: number;
  pricePerSeat: number;
  description?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateRutaDto {
  originPierId: number;
  destinationPierId: number;
  durationMinutes: number;
  pricePerSeat: number;
  description?: string;
  isActive?: boolean;
}

export type UpdateRutaDto = Partial<CreateRutaDto>;
