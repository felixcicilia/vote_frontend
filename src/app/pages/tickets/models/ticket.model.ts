import { Viaje } from '../../viajes/models/viaje.model';

export type TicketStatus = 'PENDING' | 'CONFIRMED' | 'USED' | 'CANCELLED';

export interface Ticket {
  id: number;
  trip: Viaje;
  client: { id: number; firstName: string; lastName: string; email: string };
  seats: number;
  totalPrice: number;
  qrCode: string;
  status: TicketStatus;
  cancellationReason?: string;
  usedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTicketDto {
  tripId: number;
  clientId: number;
  seats: number;
}

export interface ChangeStatusTicketDto {
  status: TicketStatus;
  cancellationReason?: string;
}
