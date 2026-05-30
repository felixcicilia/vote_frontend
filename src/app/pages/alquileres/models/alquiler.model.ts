import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';
import { Destino } from './destino.model';

export type RentalStatus = 'PENDING' | 'CONFIRMED' | 'PAID' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface Alquiler {
  id: number;
  vessel: Embarcacion;
  client: { id: number; firstName: string; lastName: string; email: string };
  captain?: { id: number; firstName: string; lastName: string } | null;
  captainProfile?: {
    id: number;
    firstName: string;
    lastName: string;
    documentId?: string | null;
    licenseNumber?: string | null;
    phone?: string | null;
    photoUrl?: string | null;
    documentFrontUrl?: string | null;
    documentBackUrl?: string | null;
    licenseDocumentUrl?: string | null;
    verificationStatus?: string | null;
  } | null;
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
  paidAt?: string | null;
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
  status?: RentalStatus;
  captainId?: number;
  captainProfileId?: number;
  cancellationReason?: string;
}
