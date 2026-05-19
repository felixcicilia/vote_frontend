import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../../services/auth.service";



@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly loginImage = signal(this.getLoginImageByHour());

  readonly loading = signal(false);
  readonly errorMessage = signal("");
  readonly showPassword = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  });

  private getLoginImageByHour(): string {
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

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set("");

    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(["/inicio"]);
      },
      error: (error) => {
        this.loading.set(false);

        const backendMessage = this.extractErrorMessage(error);
        this.errorMessage.set(backendMessage);
      },
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword.update((value) => !value);
  }

  private extractErrorMessage(error: unknown): string {
    const err = error as {
      error?: {
        message?: string | string[];
      };
    };

    const message = err?.error?.message;

    if (Array.isArray(message)) {
      return message[0] ?? "No se pudo iniciar sesión";
    }

    if (typeof message === "string" && message.trim()) {
      return message;
    }

    return "No se pudo iniciar sesión";
  }

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }
}
