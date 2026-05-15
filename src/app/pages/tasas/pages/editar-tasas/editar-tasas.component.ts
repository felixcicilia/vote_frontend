import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { CurrencyType, EditarTasaPayload } from "../../models/tasa.model";
import { TasasService } from "../../services/tasas.service";

@Component({
  selector: "app-editar-tasas",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./editar-tasas.component.html",
})
export class EditarTasasComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly tasasService = inject(TasasService);

  loading = false;
  loadingRate = false;
  errorMessage = "";
  tasaId = 0;

  readonly monedas = [
    { label: "USD", value: CurrencyType.USD },
    { label: "BS", value: CurrencyType.BS },
  ];

  form = this.fb.group({
    baseCurrency: [CurrencyType.USD, [Validators.required]],
    targetCurrency: [CurrencyType.BS, [Validators.required]],
    rate: [
      null as number | null,
      [Validators.required, Validators.min(0.0001)],
    ],
    isActive: [true],
    effectiveDate: ["", [Validators.required]],
    source: ["", [Validators.maxLength(100)]],
    observacion: [""],
  });

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    if (!id) {
      this.errorMessage = "No se recibió un id válido para editar la tasa.";
      return;
    }

    this.tasaId = id;
    this.cargarTasa();
  }

  cargarTasa(): void {
    this.loadingRate = true;
    this.errorMessage = "";

    this.tasasService.obtenerPorId(this.tasaId).subscribe({
      next: (tasa) => {
        this.form.patchValue({
          baseCurrency: tasa.baseCurrency,
          targetCurrency: tasa.targetCurrency,
          rate: Number(tasa.rate),
          isActive: tasa.isActive,
          effectiveDate: tasa.effectiveDate,
          source: tasa.source ?? "",
          observacion: tasa.observacion ?? "",
        });

        this.loadingRate = false;
      },
      error: (error) => {
        console.error("Error cargando tasa:", error);
        this.errorMessage = "No se pudo cargar la información de la tasa.";
        this.loadingRate = false;
      },
    });
  }

  editarTasa(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.f.baseCurrency.value === this.f.targetCurrency.value) {
      this.errorMessage =
        "La moneda base y la moneda destino no pueden ser iguales.";
      return;
    }

    this.loading = true;
    this.errorMessage = "";

    const payload: EditarTasaPayload = {
      baseCurrency: this.f.baseCurrency.value ?? CurrencyType.USD,
      targetCurrency: this.f.targetCurrency.value ?? CurrencyType.BS,
      rate: Number(this.f.rate.value ?? 0),
      isActive: Boolean(this.f.isActive.value),
      effectiveDate: this.f.effectiveDate.value ?? "",
      source: this.f.source.value?.trim() || undefined,
      observacion: this.f.observacion.value?.trim() || undefined,
    };

    this.tasasService.editar(this.tasaId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/tasas"]);
      },
      error: (error) => {
        console.error("Error editando tasa:", error);

        const backendMessage = error?.error?.message;

        if (Array.isArray(backendMessage)) {
          this.errorMessage = backendMessage.join(", ");
        } else if (typeof backendMessage === "string") {
          this.errorMessage = backendMessage;
        } else {
          this.errorMessage =
            "No se pudo actualizar la tasa. Verifica los datos e inténtalo nuevamente.";
        }

        this.loading = false;
      },
    });
  }
}
