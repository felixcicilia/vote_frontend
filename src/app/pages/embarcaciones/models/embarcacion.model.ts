export type VesselType = 'LANCHA' | 'YATE' | 'CATAMARAN' | 'BOTE';
export type VesselStatus = 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';

export interface Embarcacion {
  id: number;
  name: string;
  type: VesselType;
  capacity: number;
  description?: string;
  photos: string[];
  features: string[];
  pricePerDay?: number | null;
  licensePlate?: string;
  year?: number;
  status: VesselStatus;
  provider?: {
    id: number;
    companyName?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateEmbarcacionDto {
  name: string;
  type: VesselType;
  capacity: number;
  description?: string;
  photos?: string[];
  features?: string[];
  pricePerDay?: number;
  licensePlate?: string;
  year?: number;
  providerId: number;
}

export interface UpdateEmbarcacionDto extends Partial<CreateEmbarcacionDto> {
  status?: VesselStatus;
}
