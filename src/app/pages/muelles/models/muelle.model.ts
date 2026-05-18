export interface Muelle {
  id: number;
  name: string;
  description?: string;
  photoUrl?: string;
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateMuelleDto {
  name: string;
  description?: string;
  photoUrl?: string;
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  isActive?: boolean;
}

export type UpdateMuelleDto = Partial<CreateMuelleDto>;
