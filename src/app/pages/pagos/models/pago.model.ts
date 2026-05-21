export type PaymentMethod = 'PAGO_MOVIL' | 'TRANSFERENCIA' | 'ZELLE' | 'BINANCE' | 'CARD' | 'CASH';
export type PaymentStatus = 'PENDING' | 'VERIFIED' | 'REJECTED';
export type PaymentCurrency = 'USD' | 'VES' | 'BS' | 'USDT';
export type PaymentReferenceType = 'TAXI_TRIP' | 'TICKET' | 'RENTAL' | 'WALLET_TOPUP';

export interface Pago {
  id: number;
  client: { id: number; firstName: string; lastName: string; email: string };
  verifiedBy?: { id: number; firstName: string; lastName: string } | null;
  amount: number;
  currency: PaymentCurrency;
  method: PaymentMethod;
  referenceType: PaymentReferenceType;
  referenceId: number;
  transactionRef?: string;
  proofImageUrl?: string;
  notes?: string;
  status: PaymentStatus;
  rejectionReason?: string;
  verifiedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePagoDto {
  clientId: number;
  amount: number;
  currency: PaymentCurrency;
  method: PaymentMethod;
  referenceType: PaymentReferenceType;
  referenceId: number;
  transactionRef?: string;
  proofImageUrl?: string;
  notes?: string;
}

export interface VerifyPagoDto {
  verifiedById: number;
}

export interface RejectPagoDto {
  rejectionReason: string;
}
