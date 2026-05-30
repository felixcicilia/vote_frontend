export type CaptainVerificationStatus = 'PENDIENTE' | 'EN_REVISION' | 'APROBADO' | 'RECHAZADO';

export interface CaptainWithAvailability extends Captain {
  isAvailable: boolean;
  conflictInfo?: string;
}

export interface Captain {
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
  notes?: string | null;
  verificationStatus: CaptainVerificationStatus;
  verificationNotes?: string | null;
  isActive: boolean;
  providerProfile?: { id: number; companyName?: string };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCaptainDto {
  firstName: string;
  lastName: string;
  documentId?: string;
  licenseNumber?: string;
  phone?: string;
  photoUrl?: string;
  documentFrontUrl?: string;
  documentBackUrl?: string;
  licenseDocumentUrl?: string;
  notes?: string;
}
