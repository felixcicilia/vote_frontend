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

  roles = [
    { label: "Cliente", value: UserRole.CLIENTE },
    { label: "Administrador", value: UserRole.ADMINISTRADOR },
    { label: "Master", value: UserRole.MASTER },
    { label: "Usuario", value: UserRole.USUARIO },
  ];

  form = this.fb.group(
    {
      nombre: ["", [Validators.maxLength(100)]],
      apellido: ["", [Validators.maxLength(100)]],
      cedula: ["", [Validators.required, Validators.maxLength(20)]],
      telefono: ["", [Validators.maxLength(20)]],
      fechaNacimiento: [""],
      direccion: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      role: [UserRole.USUARIO],
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
      nombre: this.f.nombre.value?.trim() || undefined,
      apellido: this.f.apellido.value?.trim() || undefined,
      cedula: this.f.cedula.value?.trim() ?? "",
      telefono: this.f.telefono.value?.trim() || undefined,
      fechaNacimiento: this.f.fechaNacimiento.value || undefined,
      direccion: this.f.direccion.value?.trim() || undefined,
      email: this.f.email.value?.trim() ?? "",
      password: this.f.password.value ?? "",
      confirmPassword: this.f.confirmPassword.value ?? "",
      role: this.f.role.value ?? UserRole.USUARIO,
    };

    this.usuariosService.crearUsuario(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/usuarios"]);
      },
      error: (error) => {
        console.error("Error creando usuario:", error);
        this.errorMessage =
          error?.error?.message ||
          "No se pudo crear el usuario. Verifica los datos.";
        this.loading = false;
      },
    });
  }

  private passwordsMatchValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const password = control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
