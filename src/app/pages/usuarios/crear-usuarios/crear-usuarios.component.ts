import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { CrearUsuarioPayload, UserRole } from "../models/usuarios.model";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "app-crear-usuarios",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./crear-usuarios.component.html",
})
export class CrearUsuariosComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly usuariosService = inject(UsuariosService);

  loading = false;
  errorMessage = "";

  readonly roles = [
    { label: "Cliente", value: UserRole.CLIENTE },
    { label: "Proveedor", value: UserRole.PROVEEDOR },
    { label: "Empleado", value: UserRole.EMPLEADO },
    { label: "Administrador", value: UserRole.ADMINISTRADOR },
    { label: "Master", value: UserRole.MASTER },
  ];

  form = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.maxLength(100)]],
      lastName: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.maxLength(20)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      role: [UserRole.CLIENTE, [Validators.required]],
    },
    { validators: this.passwordsMatchValidator },
  );

  get f() {
    return this.form.controls;
  }

  crearUsuario(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = "";

    const payload: CrearUsuarioPayload = {
      firstName: this.f.firstName.value?.trim() ?? "",
      lastName: this.f.lastName.value?.trim() ?? "",
      phone: this.f.phone.value?.trim() || null,
      email: this.f.email.value?.trim() ?? "",
      password: this.f.password.value ?? "",
      confirmPassword: this.f.confirmPassword.value ?? "",
      role: this.f.role.value ?? UserRole.CLIENTE,
    };

    this.usuariosService.crearUsuario(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/usuarios"]);
      },
      error: (error) => {
        const msg = error?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ")
          : typeof msg === "string" ? msg
          : "No se pudo crear el usuario.";
        this.loading = false;
      },
    });
  }

  private passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password")?.value?.trim();
    const confirmPassword = control.get("confirmPassword")?.value?.trim();
    if (!password && !confirmPassword) return null;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
