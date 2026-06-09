export enum CurrencyType {
  USD = "USD",
  BS = "BS",
}

export interface Tasa {
  id: number;
  baseCurrency: CurrencyType;
  targetCurrency: CurrencyType;
  rate: number | string;
  isActive: boolean;
  effectiveDate: string;
  source?: string | null;
  observacion?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CrearTasaPayload {
  baseCurrency: CurrencyType;
  targetCurrency: CurrencyType;
  rate: number;
  isActive?: boolean;
  effectiveDate: string;
  source?: string;
  observacion?: string;
}

export interface EditarTasaPayload {
  baseCurrency?: CurrencyType;
  targetCurrency?: CurrencyType;
  rate?: number;
  isActive?: boolean;
  effectiveDate?: string;
  source?: string;
  observacion?: string;
}

export interface ApiResponse<T> {
  message?: string;
  data: T;
}
