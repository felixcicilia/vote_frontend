import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { RegisterService } from "../../services/register.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./register.component.html",
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly registerService = inject(RegisterService);
  private readonly router = inject(Router);

  readonly registerImage = signal(this.getRegisterImageByHour());

  readonly loading = signal(false);
  readonly errorMessage = signal("");
  readonly successMessage = signal("");
  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);

  readonly form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required]],
    apellido: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    telefono: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
  });

  private getRegisterImageByHour(): string {
    const hour = new Date().getHours();

    if (hour < 17) {
      return "/images/logo/day.jpg";
    }

    return "/images/logo/night.jpg";
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

    const { password, confirmPassword } = this.form.getRawValue();

    if (password !== confirmPassword) {
      this.errorMessage.set("Las contraseñas no coinciden.");
      return;
    }

    this.loading.set(true);

    this.registerService.register(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.loading.set(false);

        this.successMessage.set(
          response.message || "Usuario registrado correctamente.",
        );

        this.form.reset({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          password: "",
          confirmPassword: "",
        });

        // Redirige al login después de 2 segundos
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

  togglePasswordVisibility(): void {
    this.showPassword.update((value) => !value);
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
      return message[0] ?? "No se pudo registrar el usuario";
    }

    if (typeof message === "string" && message.trim()) {
      return message;
    }

    return "No se pudo registrar el usuario. Inténtalo nuevamente.";
  }

  get f() {
    return this.form.controls;
  }
}
