import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { forkJoin } from "rxjs";

import {
  DashboardCashFlow,
  DashboardExchangeRate,
  DashboardInventoryItem,
  DashboardRecentSale,
  DashboardService,
  DashboardSummary,
} from "./dashboard.service";
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  private readonly dashboardService = inject(DashboardService);
  private readonly baseUrl = "https://backend.triescal.com";

  loading = false;
  errorMessage = "";

  today = this.formatDate(new Date());

  filters = {
    startDate: this.today,
    endDate: this.today,
  };

  summary: DashboardSummary | null = null;
  recentSales: DashboardRecentSale[] = [];
  exchangeRate: DashboardExchangeRate | null = null;
  inventory: DashboardInventoryItem[] = [];
  cashFlow: DashboardCashFlow | null = null;

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.errorMessage = "";

    const { startDate, endDate } = this.filters;

    forkJoin({
      summary: this.dashboardService.getSummary(startDate, endDate),
      recentSales: this.dashboardService.getRecentSales(startDate, endDate, 10),
      exchangeRate: this.dashboardService.getExchangeRate(endDate),
      inventory: this.dashboardService.getInventory(startDate, endDate),
      cashFlow: this.dashboardService.getCashFlow(startDate, endDate),
    }).subscribe({
      next: ({ summary, recentSales, exchangeRate, inventory, cashFlow }) => {
        this.summary = summary;
        this.recentSales = recentSales;
        this.exchangeRate = exchangeRate;
        this.inventory = inventory;
        this.cashFlow = cashFlow;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error cargando dashboard:", error);
        this.errorMessage = "No se pudo cargar la información del dashboard.";
        this.loading = false;
      },
    });
  }

  getProductImage(url?: string): string {
    if (!url || url.trim() === "") {
      return "assets/images/placeholder-product.png";
    }

    // Si ya viene completa
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    return `${this.baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  }

  trackBySale(_: number, sale: DashboardRecentSale): number {
    return sale.id;
  }

  trackByInventory(_: number, item: DashboardInventoryItem): number {
    return item.id;
  }

  formatMoney(
    value: number | string | null | undefined,
    currency = "USD",
  ): string {
    const numericValue = Number(value ?? 0);

    return new Intl.NumberFormat("es-VE", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(numericValue);
  }

  formatDateTime(value: string | null | undefined): string {
    if (!value) return "-";

    return new Intl.DateTimeFormat("es-VE", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(value));
  }

  isLowStock(stock: number, stockMinimo: number): boolean {
    return stock <= stockMinimo;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}
