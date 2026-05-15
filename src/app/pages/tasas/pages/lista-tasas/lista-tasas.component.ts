import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Tasa } from "../../models/tasa.model";
import { TasasService } from "../../services/tasas.service";

@Component({
  selector: "app-lista-tasas",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./lista-tasas.component.html",
})
export class ListaTasasComponent implements OnInit {
  private readonly tasasService = inject(TasasService);

  loading = false;
  loadingActiva = false;
  errorMessage = "";

  tasas: Tasa[] = [];
  tasasFiltradas: Tasa[] = [];
  tasasPaginadas: Tasa[] = [];

  tasaActiva: Tasa | null = null;

  search = "";
  filtroEstado = "TODAS";

  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void {
    this.cargarTasas();
    this.cargarTasaActiva();
  }

  cargarTasas(): void {
    this.loading = true;
    this.errorMessage = "";

    this.tasasService.obtenerTodas().subscribe({
      next: (response) => {
        this.tasas = response ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error cargando tasas:", error);
        this.errorMessage = "No se pudo cargar la lista de tasas.";
        this.loading = false;
      },
    });
  }

  cargarTasaActiva(): void {
    this.loadingActiva = true;

    this.tasasService.obtenerActivaUsdBs().subscribe({
      next: (response) => {
        this.tasaActiva = response;
        this.loadingActiva = false;
      },
      error: (error) => {
        console.error("No se pudo cargar la tasa activa:", error);
        this.tasaActiva = null;
        this.loadingActiva = false;
      },
    });
  }

  aplicarFiltros(): void {
    const termino = this.search.trim().toLowerCase();

    this.tasasFiltradas = this.tasas.filter((tasa) => {
      const coincideBusqueda =
        tasa.baseCurrency.toLowerCase().includes(termino) ||
        tasa.targetCurrency.toLowerCase().includes(termino) ||
        String(tasa.rate).toLowerCase().includes(termino) ||
        (tasa.source ?? "").toLowerCase().includes(termino) ||
        (tasa.observacion ?? "").toLowerCase().includes(termino) ||
        tasa.effectiveDate.toLowerCase().includes(termino);

      const coincideEstado =
        this.filtroEstado === "TODAS" ||
        (this.filtroEstado === "ACTIVAS" && tasa.isActive) ||
        (this.filtroEstado === "INACTIVAS" && !tasa.isActive);

      return coincideBusqueda && coincideEstado;
    });

    this.total = this.tasasFiltradas.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));

    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }

    if (this.page < 1) {
      this.page = 1;
    }

    this.actualizarPaginacion();
  }

  actualizarPaginacion(): void {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    this.tasasPaginadas = this.tasasFiltradas.slice(start, end);
  }

  onSearchChange(): void {
    this.page = 1;
    this.aplicarFiltros();
  }

  onFilterChange(): void {
    this.page = 1;
    this.aplicarFiltros();
  }

  cambiarPagina(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.page = page;
    this.actualizarPaginacion();
  }

  activarTasa(tasa: Tasa): void {
    if (tasa.isActive) return;

    const confirmado = window.confirm(
      `¿Seguro que deseas activar la tasa #${tasa.id}? Esto desactivará la anterior.`,
    );

    if (!confirmado) return;

    this.tasasService.activar(tasa.id).subscribe({
      next: () => {
        this.cargarTasas();
        this.cargarTasaActiva();
      },
      error: (error) => {
        console.error("Error activando tasa:", error);
        alert("No se pudo activar la tasa.");
      },
    });
  }

  eliminarTasa(tasa: Tasa): void {
    const confirmado = window.confirm(
      `¿Seguro que deseas eliminar la tasa #${tasa.id}?`,
    );

    if (!confirmado) return;

    this.tasasService.eliminar(tasa.id).subscribe({
      next: () => {
        this.tasas = this.tasas.filter((item) => item.id !== tasa.id);
        this.aplicarFiltros();

        if (this.tasaActiva?.id === tasa.id) {
          this.cargarTasaActiva();
        }
      },
      error: (error) => {
        console.error("Error eliminando tasa:", error);
        alert("No se pudo eliminar la tasa.");
      },
    });
  }

  limpiarBusqueda(): void {
    this.search = "";
    this.filtroEstado = "TODAS";
    this.page = 1;
    this.aplicarFiltros();
  }

  formatearFecha(value: string): string {
    if (!value) return "-";

    return new Intl.DateTimeFormat("es-VE", {
      dateStyle: "medium",
    }).format(new Date(value));
  }

  formatearNumero(value: number | string): string {
    const numericValue = Number(value ?? 0);

    return new Intl.NumberFormat("es-VE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(numericValue);
  }

  getEstadoClase(isActive: boolean): string {
    return isActive
      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
      : "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400";
  }

  getEstadoTexto(isActive: boolean): string {
    return isActive ? "Activa" : "Inactiva";
  }

  get rangoInicio(): number {
    if (this.total === 0) return 0;
    return (this.page - 1) * this.limit + 1;
  }

  get rangoFin(): number {
    const fin = this.page * this.limit;
    return fin > this.total ? this.total : fin;
  }

  trackByTasa(_: number, tasa: Tasa): number {
    return tasa.id;
  }
}
