export type ReviewReferenceType = 'TAXI_TRIP' | 'TICKET' | 'RENTAL' | 'ISLAND_BOOKING';

export interface Resena {
  id: number;
  reviewer: { id: number; firstName: string; lastName: string };
  reviewedUser?: { id: number; firstName: string; lastName: string } | null;
  vessel?: { id: number; name: string } | null;
  referenceType: ReviewReferenceType;
  referenceId: number;
  rating: number; // 1-5
  comment?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateResenaDto {
  reviewerId: number;
  reviewedUserId?: number;
  vesselId?: number;
  referenceType: ReviewReferenceType;
  referenceId: number;
  rating: number;
  comment?: string;
}
