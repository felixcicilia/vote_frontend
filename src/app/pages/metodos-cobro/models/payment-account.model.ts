export interface PaymentAccount {
  id: number;
  label: string;
  icon: string;
  method: string;
  currency: 'USD' | 'BS' | 'USDT' | 'VES';
  description?: string;
  fields: { label: string; value: string }[];
  isActive: boolean;
  sortOrder: number;
  createdAt?: string;
}

export interface CreatePaymentAccountDto {
  label: string;
  icon: string;
  method: string;
  currency: string;
  description?: string;
  fields: { label: string; value: string }[];
  isActive?: boolean;
  sortOrder?: number;
}
