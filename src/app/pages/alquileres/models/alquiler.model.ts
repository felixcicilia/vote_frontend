import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';
import { Destino } from './destino.model';

export type RentalStatus = 'PENDING' | 'CONFIRMED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface Alquiler {
  id: number;
  vessel: Embarcacion;
  client: { id: number; firstName: string; lastName: string; email: string };
  captain?: { id: number; firstName: string; lastName: string } | null;
  destination?: Destino | null;
  startDate: string;
  endDate: string;
  days: number;
  passengers: number;
  totalPrice: number;
  specialRequests?: string | null;
  status: RentalStatus;
  cancellationReason?: string | null;
  confirmedAt?: string | null;
  startedAt?: string | null;
  completedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateAlquilerDto {
  vesselId: number;
  clientId: number;
  destinationId?: number;
  startDate: string;
  endDate: string;
  passengers: number;
  specialRequests?: string;
}

export interface ChangeStatusAlquilerDto {
  status: RentalStatus;
  captainId?: number;
  cancellationReason?: string;
}
