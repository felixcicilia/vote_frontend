export type VesselType = 'LANCHA' | 'YATE' | 'CATAMARAN' | 'BOTE';
export type VesselStatus = 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
export type VesselVerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type VesselAmenity =
  | 'WIFI' | 'SOUND_SYSTEM' | 'AIR_CONDITIONING' | 'KITCHEN'
  | 'BATHROOM' | 'REFRIGERATOR' | 'DRINKING_WATER' | 'SNORKELING'
  | 'FISHING_EQUIPMENT' | 'KAYAK' | 'LIFE_JACKETS' | 'FIRST_AID_KIT'
  | 'SUN_DECK' | 'DINING_AREA' | 'CAPTAIN_INCLUDED' | 'FUEL_INCLUDED'
  | 'PARKING' | 'GENERATOR';

export interface Embarcacion {
  id: number;
  name: string;
  type: VesselType;
  capacity: number;
  rooms?: number | null;
  bathrooms?: number | null;
  description?: string | null;
  photos?: string[] | null;
  amenities?: VesselAmenity[] | null;
  pricePerDay?: number | null;
  pricePerPerson?: number | null;
  licensePlate?: string | null;
  year?: number | null;
  isAvailable: boolean;
  verificationStatus: VesselVerificationStatus;
  rejectionReason?: string | null;
  status: VesselStatus;
  provider?: {
    id: number;
    companyName?: string;
    pagoMovilPhone?: string | null;
    zelleEmail?: string | null;
    bankName?: string | null;
    bankAccount?: string | null;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateEmbarcacionDto {
  name: string;
  type: VesselType;
  capacity: number;
  rooms?: number;
  bathrooms?: number;
  description?: string;
  photos?: string[];
  amenities?: VesselAmenity[];
  pricePerDay?: number;
  licensePlate?: string;
  year?: number;
  isAvailable?: boolean;
  providerId: number;
}

export interface UpdateEmbarcacionDto extends Partial<CreateEmbarcacionDto> {
  status?: VesselStatus;
  verificationStatus?: VesselVerificationStatus;
  rejectionReason?: string;
  pricePerPerson?: number;
}
