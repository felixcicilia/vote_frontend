import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { EditarUsuarioPayload, UserRole } from "../models/usuarios.model";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "app-editar-usuarios",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./editar-usuarios.component.html",
})
export class EditarUsuariosComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly usuariosService = inject(UsuariosService);

  loading = false;
  loadingUser = false;
  errorMessage = "";
  usuarioId = 0;

  readonly roles = [
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
      password: ["", [Validators.minLength(6)]],
      confirmPassword: [""],
      role: [UserRole.USUARIO, [Validators.required]],
    },
    {
      validators: this.passwordsMatchValidator,
    },
  );

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    if (!id) {
      this.errorMessage = "No se recibió un id válido para editar el usuario.";
      return;
    }

    this.usuarioId = id;
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.loadingUser = true;
    this.errorMessage = "";

    this.usuariosService.obtenerUsuarioPorId(this.usuarioId).subscribe({
      next: (usuario) => {
        this.form.patchValue({
          nombre: usuario.nombre ?? "",
          apellido: usuario.apellido ?? "",
          cedula: usuario.cedula ?? "",
          telefono: usuario.telefono ?? "",
          fechaNacimiento: usuario.fechaNacimiento ?? "",
          direccion: usuario.direccion ?? "",
          email: usuario.email ?? "",
          role: usuario.role ?? UserRole.USUARIO,
          password: "",
          confirmPassword: "",
        });

        this.loadingUser = false;
      },
      error: (error) => {
        console.error("Error cargando usuario:", error);
        this.errorMessage = "No se pudo cargar la información del usuario.";
        this.loadingUser = false;
      },
    });
  }

  editarUsuario(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = "";

    const payload: EditarUsuarioPayload = {
      nombre: this.f.nombre.value?.trim() || null,
      apellido: this.f.apellido.value?.trim() || null,
      cedula: this.f.cedula.value?.trim() ?? "",
      telefono: this.f.telefono.value?.trim() || null,
      fechaNacimiento: this.f.fechaNacimiento.value || null,
      direccion: this.f.direccion.value?.trim() || null,
      email: this.f.email.value?.trim() ?? "",
      role: this.f.role.value ?? UserRole.USUARIO,
    };

    const password = this.f.password.value?.trim() ?? "";
    const confirmPassword = this.f.confirmPassword.value?.trim() ?? "";

    if (password) {
      payload.password = password;
      payload.confirmPassword = confirmPassword;
    }

    this.usuariosService.editarUsuario(this.usuarioId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/usuarios"]);
      },
      error: (error) => {
        console.error("Error editando usuario:", error);

        const backendMessage = error?.error?.message;

        if (Array.isArray(backendMessage)) {
          this.errorMessage = backendMessage.join(", ");
        } else if (typeof backendMessage === "string") {
          this.errorMessage = backendMessage;
        } else {
          this.errorMessage =
            "No se pudo actualizar el usuario. Verifica los datos e inténtalo nuevamente.";
        }

        this.loading = false;
      },
    });
  }

  private passwordsMatchValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const password = control.get("password")?.value?.trim();
    const confirmPassword = control.get("confirmPassword")?.value?.trim();

    if (!password && !confirmPassword) {
      return null;
    }

    if (password && !confirmPassword) {
      return { passwordsMismatch: true };
    }

    if (!password && confirmPassword) {
      return { passwordsMismatch: true };
    }

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
