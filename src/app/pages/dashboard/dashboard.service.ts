import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface DashboardRange {
  startDate: string;
  endDate: string;
}

export interface DashboardSummary {
  range: DashboardRange;
  ordersCount: number;
  paymentsCount: number;
  pendingOrderRequests: number;
  productsCount: number;
  lowStockCount: number;
  inventoryUnits: number;
  todayIncomeUsd: number;
  todayIncomeBs: number;
  todayOutflowUsd: number;
  todayOutflowBs: number;
  netUsd: number;
  netBs: number;
}

export interface DashboardPayment {
  id: number;
  codigo: string;
  paymentMethod: string;
  paymentCurrency: string;
  status: string;
  rateUsed: string;
  totalUsd: string;
  totalBs: string;
  amountReceived: string;
  changeUsd: string;
  changeBs: string;
  reference: string;
  observacion: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardOrderRequest {
  id: number;
  codigo: string;
  tipoAtencion: string;
  estado: string;
  clienteNombre: string;
  observacion: string;
  subtotal: string;
  total: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardProduct {
  id: number;
  nombre: string;
  descripcion?: string;
  codigo: string;
  tipo: string;
  categoria: string;
  precioVenta: string | number;
  costo?: string;
  stock: number;
  stockMinimo: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DashboardSaleItem {
  id: number;
  product: DashboardProduct;
  cantidad: number;
  precioUnitario: string;
  subtotal: string;
}

export interface DashboardRecentSale {
  id: number;
  codigo: string;
  payment: DashboardPayment;
  orderRequest: DashboardOrderRequest;
  status: string;
  subtotal: string;
  total: string;
  paymentMethod: string;
  paymentCurrency: string;
  rateUsed: string;
  observacion: string;
  items: DashboardSaleItem[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardExchangeRate {
  id: number;
  baseCurrency: string;
  targetCurrency: string;
  rate: string;
  isActive: boolean;
  effectiveDate: string;
  source: string;
  observacion: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardInventoryImage {
  id: number;
  url: string;
}

export interface DashboardInventoryItem {
  id: number;
  nombre: string;
  codigo: string;
  tipo: string;
  categoria: string;
  precioVenta: number;
  stock: number;
  stockMinimo: number;
  isActive: boolean;
  cantidadVendidaEnRango: number;
  images: DashboardInventoryImage[];
}

export interface DashboardCashFlow {
  range: DashboardRange;
  incomeUsd: number;
  incomeBs: number;
  outflowUsd: number;
  outflowBs: number;
  netUsd: number;
  netBs: number;
  raw: unknown[];
}

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/dashboard`;

  getSummary(startDate: string, endDate: string): Observable<DashboardSummary> {
    const params = this.buildRangeParams(startDate, endDate);
    return this.http.get<DashboardSummary>(`${this.apiUrl}/summary`, {
      params,
    });
  }

  getRecentSales(
    startDate: string,
    endDate: string,
    limit = 10,
  ): Observable<DashboardRecentSale[]> {
    const params = this.buildRangeParams(startDate, endDate).set(
      "limit",
      limit,
    );
    return this.http.get<DashboardRecentSale[]>(`${this.apiUrl}/recent-sales`, {
      params,
    });
  }

  getExchangeRate(date: string): Observable<DashboardExchangeRate> {
    const params = new HttpParams().set("date", date);
    return this.http.get<DashboardExchangeRate>(
      `${this.apiUrl}/exchange-rate`,
      { params },
    );
  }

  getInventory(
    startDate: string,
    endDate: string,
  ): Observable<DashboardInventoryItem[]> {
    const params = this.buildRangeParams(startDate, endDate);
    return this.http.get<DashboardInventoryItem[]>(`${this.apiUrl}/inventory`, {
      params,
    });
  }

  getCashFlow(
    startDate: string,
    endDate: string,
  ): Observable<DashboardCashFlow> {
    const params = this.buildRangeParams(startDate, endDate);
    return this.http.get<DashboardCashFlow>(`${this.apiUrl}/cash-flow`, {
      params,
    });
  }

  private buildRangeParams(startDate: string, endDate: string): HttpParams {
    return new HttpParams().set("startDate", startDate).set("endDate", endDate);
  }
}
