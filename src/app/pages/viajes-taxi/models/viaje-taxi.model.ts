export type TaxiTripStatus =
  | 'SEARCHING'
  | 'ACCEPTED'
  | 'HEADING_TO_CLIENT'
  | 'ARRIVED_AT_CLIENT'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED';

export interface ViajeTaxi {
  id: number;
  client: { id: number; firstName: string; lastName: string; email: string };
  captain?: { id: number; firstName: string; lastName: string } | null;
  vessel?: { id: number; name: string; type: string } | null;
  originName: string;
  originLat: number;
  originLng: number;
  destinationName: string;
  destinationLat?: number;
  destinationLng?: number;
  passengers: number;
  estimatedPrice?: number;
  finalPrice?: number;
  distanceKm?: number;
  status: TaxiTripStatus;
  cancellationReason?: string;
  requestedAt?: string;
  acceptedAt?: string;
  departureFromPierAt?: string;
  arrivedAtClientAt?: string;
  tripStartedAt?: string;
  completedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateViajeTaxiDto {
  clientId: number;
  originName: string;
  originLat: number;
  originLng: number;
  destinationName: string;
  passengers: number;
  estimatedPrice?: number;
}

export interface ChangeStatusViajeTaxiDto {
  status: TaxiTripStatus;
  captainId?: number;
  vesselId?: number;
  finalPrice?: number;
  cancellationReason?: string;
}
