export interface DeparturePoint {
  id: number;
  name: string;
  city: string;
  state: string;
  icon?: string;
  photoUrl?: string;
  locationType?: string;
  isActive: boolean;
}

export interface Vessel {
  id: number;
  name: string;
  capacity?: number;
  year?: number;
}

export interface User {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
}

export interface SharedTripPassenger {
  id: number;
  seatNumber: number;
  pricePaid: number;
  status: PassengerStatus;
  phoneNumber?: string;
  refundedAt?: string;
  passenger: User;
}

export enum SharedTripStatus {
  SEARCHING_PASSENGERS = 'SEARCHING_PASSENGERS',
  READY_TO_DEPART = 'READY_TO_DEPART',
  DEPARTED = 'DEPARTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum PassengerStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  EMBARKED = 'EMBARKED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

export interface SharedTrip {
  id: number;
  origin: DeparturePoint;
  destination: DeparturePoint;
  vessel: Vessel;
  provider: User;
  passengers: SharedTripPassenger[];
  scheduledDepartureTime: string; // ISO date
  actualDepartureTime?: string;
  arrivalTime?: string;
  maxPassengers: number;
  pricePerPassenger: number;
  estimatedDurationMinutes?: number;
  status: SharedTripStatus;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchSharedTripsDto {
  originId: number;
  destinationId: number;
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm
  passengerCount?: number;
}

export interface AddPassengerDto {
  passengerId: number;
  phoneNumber?: string;
}

export interface CreateSharedTripDto {
  originId: number;
  destinationId: number;
  vesselId: number;
  scheduledDepartureTime: string;
  maxPassengers: number;
  pricePerPassenger: number;
  estimatedDurationMinutes?: number;
}
