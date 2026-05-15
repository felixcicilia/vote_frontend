import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { ResetPasswordService } from "../../services/reset-password.service";

@Component({
  selector: "app-reset-password",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./reset-password.component.html",
})
export class ResetPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly resetPasswordService = inject(ResetPasswordService);

  readonly resetPasswordImage = signal(this.getResetPasswordImageByHour());

  readonly loading = signal(false);
  readonly successMessage = signal("");
  readonly errorMessage = signal("");
  readonly showNewPassword = signal(false);
  readonly showConfirmPassword = signal(false);

  readonly token = this.route.snapshot.queryParamMap.get("token") ?? "";

  readonly form = this.fb.nonNullable.group({
    newPassword: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
  });

  private getResetPasswordImageByHour(): string {
    const hour = new Date().getHours();

    if (hour < 17) {
      return "/images/logo/triescalday.png";
    }

    return "/images/logo/triescalnight.png";
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.loading()) {
      return;
    }

    this.errorMessage.set("");
    this.successMessage.set("");

    if (!this.token) {
      this.errorMessage.set("El enlace de recuperación no es válido.");
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { newPassword, confirmPassword } = this.form.getRawValue();

    if (newPassword !== confirmPassword) {
      this.errorMessage.set("Las contraseñas no coinciden.");
      return;
    }

    this.loading.set(true);

    this.resetPasswordService
      .resetPassword({
        token: this.token,
        newPassword,
        confirmPassword,
      })
      .subscribe({
        next: (response) => {
          this.loading.set(false);
          this.successMessage.set(
            response.message || "Contraseña actualizada correctamente.",
          );

          this.form.reset({
            newPassword: "",
            confirmPassword: "",
          });

          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 2000);
        },
        error: (error) => {
          this.loading.set(false);
          this.errorMessage.set(this.extractErrorMessage(error));
        },
      });
  }

  toggleNewPasswordVisibility(): void {
    this.showNewPassword.update((value) => !value);
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.update((value) => !value);
  }

  private extractErrorMessage(error: unknown): string {
    const err = error as {
      error?: {
        message?: string | string[];
      };
    };

    const message = err?.error?.message;

    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo restablecer la contraseña";
    }

    if (typeof message === "string" && message.trim()) {
      return message;
    }

    return "No se pudo restablecer la contraseña. Inténtalo nuevamente.";
  }
}
