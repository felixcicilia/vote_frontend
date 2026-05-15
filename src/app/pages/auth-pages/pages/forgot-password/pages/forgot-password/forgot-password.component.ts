import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { ForgotPasswordService } from "../../services/forgot-password.service";

@Component({
  selector: "app-forgot-password",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./forgot-password.component.html",
})
export class ForgotPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly forgotPasswordService = inject(ForgotPasswordService);
  private readonly router = inject(Router);

  readonly forgotPasswordImage = signal(this.getForgotPasswordImageByHour());

  readonly loading = signal(false);
  readonly errorMessage = signal("");
  readonly successMessage = signal("");

  readonly form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
  });

  private getForgotPasswordImageByHour(): string {
    const hour = new Date().getHours();

    if (hour < 17) {
      return "/images/logo/triescalday.png";
    }

    return "/images/logo/triescalnight.png";
  }

  submit(): void {
    if (this.loading()) {
      return;
    }

    this.errorMessage.set("");
    this.successMessage.set("");

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    this.forgotPasswordService
      .forgotPassword(this.form.getRawValue())
      .subscribe({
        next: (response) => {
          this.loading.set(false);
          this.successMessage.set(
            response.message ||
              "Si el correo existe en el sistema, se enviarán instrucciones de recuperación.",
          );
          this.form.reset({
            email: "",
          });
        },
        error: (error) => {
          this.loading.set(false);
          this.errorMessage.set(this.extractErrorMessage(error));
        },
      });
  }

  volverAlLogin(): void {
    this.router.navigate(["/login"]);
  }

  private extractErrorMessage(error: unknown): string {
    const err = error as {
      error?: {
        message?: string | string[];
      };
    };

    const message = err?.error?.message;

    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo procesar la solicitud";
    }

    if (typeof message === "string" && message.trim()) {
      return message;
    }

    return "No se pudo procesar la solicitud";
  }

  get email() {
    return this.form.controls.email;
  }
}
