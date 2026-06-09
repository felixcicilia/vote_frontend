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
      password: ["", [Validators.minLength(6)]],
      confirmPassword: [""],
      role: [UserRole.CLIENTE, [Validators.required]],
      isActive: [true],
    },
    { validators: this.passwordsMatchValidator },
  );

  get f() { return this.form.controls; }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) { this.errorMessage = "ID inválido."; return; }
    this.usuarioId = id;
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.loadingUser = true;
    this.usuariosService.obtenerUsuarioPorId(this.usuarioId).subscribe({
      next: (u) => {
        this.form.patchValue({
          firstName: u.firstName ?? "",
          lastName: u.lastName ?? "",
          phone: u.phone ?? "",
          email: u.email ?? "",
          role: u.role ?? UserRole.CLIENTE,
          isActive: u.isActive ?? true,
          password: "",
          confirmPassword: "",
        });
        this.loadingUser = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar el usuario.";
        this.loadingUser = false;
      },
    });
  }

  editarUsuario(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMessage = "";

    const payload: EditarUsuarioPayload = {
      firstName: this.f.firstName.value?.trim(),
      lastName: this.f.lastName.value?.trim(),
      phone: this.f.phone.value?.trim() || null,
      email: this.f.email.value?.trim(),
      role: this.f.role.value ?? UserRole.CLIENTE,
      isActive: this.f.isActive.value ?? true,
    };

    const password = this.f.password.value?.trim() ?? "";
    if (password) {
      (payload as any).password = password;
      (payload as any).confirmPassword = this.f.confirmPassword.value?.trim();
    }

    this.usuariosService.editarUsuario(this.usuarioId, payload).subscribe({
      next: () => { this.loading = false; this.router.navigate(["/usuarios"]); },
      error: (error) => {
        const msg = error?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(", ")
          : typeof msg === "string" ? msg
          : "No se pudo actualizar el usuario.";
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
