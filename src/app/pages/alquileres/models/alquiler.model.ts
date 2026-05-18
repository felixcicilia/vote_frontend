import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';

export type RentalStatus = 'PENDING' | 'CONFIRMED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface Alquiler {
  id: number;
  vessel: Embarcacion;
  client: { id: number; firstName: string; lastName: string; email: string };
  captain?: { id: number; firstName: string; lastName: string } | null;
  startDate: string;
  endDate: string;
  days: number;
  passengers: number;
  totalPrice: number;
  specialRequests?: string;
  status: RentalStatus;
  cancellationReason?: string;
  confirmedAt?: string;
  startedAt?: string;
  completedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateAlquilerDto {
  vesselId: number;
  clientId: number;
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
