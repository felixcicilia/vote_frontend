import { Horario } from '../../horarios/models/horario.model';

export type TripStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface Viaje {
  id: number;
  schedule: Horario;
  departureDate: string; // YYYY-MM-DD
  departureTime: string; // HH:mm
  totalSeats: number;
  availableSeats: number;
  status: TripStatus;
  cancellationReason?: string;
  departedAt?: string;
  completedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateViajeDto {
  scheduleId: number;
  departureDate: string;
}

export interface ChangeStatusViajeDto {
  status: TripStatus;
  cancellationReason?: string;
}
