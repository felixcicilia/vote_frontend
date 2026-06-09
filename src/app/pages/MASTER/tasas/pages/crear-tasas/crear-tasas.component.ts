import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { CurrencyType, CrearTasaPayload } from "../../models/tasa.model";
import { TasasService } from "../../services/tasas.service";

@Component({
  selector: "app-crear-tasas",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./crear-tasas.component.html",
})
export class CrearTasasComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly tasasService = inject(TasasService);

  loading = false;
  errorMessage = "";

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

  crearTasa(): void {
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

    const payload: CrearTasaPayload = {
      baseCurrency: this.f.baseCurrency.value ?? CurrencyType.USD,
      targetCurrency: this.f.targetCurrency.value ?? CurrencyType.BS,
      rate: Number(this.f.rate.value ?? 0),
      isActive: Boolean(this.f.isActive.value),
      effectiveDate: this.f.effectiveDate.value ?? "",
      source: this.f.source.value?.trim() || undefined,
      observacion: this.f.observacion.value?.trim() || undefined,
    };

    this.tasasService.crear(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/tasas"]);
      },
      error: (error) => {
        console.error("Error creando tasa:", error);

        const backendMessage = error?.error?.message;

        if (Array.isArray(backendMessage)) {
          this.errorMessage = backendMessage.join(", ");
        } else if (typeof backendMessage === "string") {
          this.errorMessage = backendMessage;
        } else {
          this.errorMessage =
            "No se pudo crear la tasa. Verifica los datos e inténtalo nuevamente.";
        }

        this.loading = false;
      },
    });
  }
}
