import { Embarcacion } from '../../embarcaciones/models/embarcacion.model';
import { Destino } from '../../alquileres/models/destino.model';

export interface PuertoSalida {
  id: number;
  name: string;
  city: string;
  state: string;
  icon?: string | null;
  photoUrl?: string | null;
  locationType?: 'MUELLE' | 'ISLA';
  isActive: boolean;
}

export type TripDirection = 'IDA' | 'REGRESO';

export interface VesselSlot {
  id: number;
  vessel: Embarcacion;
  departurePoint: PuertoSalida;
  arrivalPoint: PuertoSalida;
  departureDate?: string | null;
  departureTime: string;
  direction: TripDirection;
  pricePerPerson: number;
  durationMinutes?: number | null;
  maxPassengers?: number | null;
  isActive: boolean;
}

export type IslandBookingStatus = 'PENDING' | 'CONFIRMED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface IslandBooking {
  id: number;
  client: { id: number; firstName: string; lastName: string; email: string };
  vessel: Embarcacion;
  destination: Destino;
  departurePoint: PuertoSalida;
  outboundSlot: VesselSlot;
  returnSlot?: VesselSlot | null;
  tripDate: string;
  tripType: 'IDA' | 'IDA_VUELTA';
  passengers: number;
  totalPrice: number;
  specialRequests?: string | null;
  status: IslandBookingStatus;
  cancellationReason?: string | null;
  confirmedAt?: string | null;
  completedAt?: string | null;
  createdAt?: string;
}

export interface CreateIslandBookingDto {
  clientId: number;
  vesselId: number;
  destinationId: number;
  departurePointId: number;
  outboundSlotId: number;
  returnSlotId?: number;
  tripDate: string;
  tripType: 'IDA' | 'IDA_VUELTA';
  passengers: number;
  specialRequests?: string;
}
