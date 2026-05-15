import { CommonModule } from "@angular/common";
import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { PageBreadcrumbComponent } from "../../shared/components/common/page-breadcrumb/page-breadcrumb.component";
import { ModalComponent } from "../../shared/components/ui/modal/modal.component";
import { ButtonComponent } from "../../shared/components/ui/button/button.component";
import { LabelComponent } from "../../shared/components/form/label/label.component";

import { AuthService } from "../../pages/auth-pages/services/auth.service";
import { UsuariosService } from "../usuarios/services/usuarios.service";

type ProfileFormUser = {
  id?: number | null;
  nombre?: string | null;
  apellido?: string | null;
  email?: string | null;
  telefono?: string | null;
  cedula?: string | null;
  fechaNacimiento?: string | null;
  direccion?: string | null;
  role?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageBreadcrumbComponent,
    ModalComponent,
    ButtonComponent,
    LabelComponent,
  ],
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly usuariosService = inject(UsuariosService);
  
  readonly saveSuccess = signal<string | null>(null);
  readonly isOpen = signal(false);
  readonly loadingProfile = signal(true);
  readonly saving = signal(false);
  readonly saveError = signal<string | null>(null);

  readonly user = computed(() => this.authService.user());

  readonly nombreCompleto = computed(() => {
    const user = this.user();

    if (!user) {
      return "Usuario";
    }

    return `${user.nombre ?? ""} ${user.apellido ?? ""}`.trim() || "Usuario";
  });

  readonly iniciales = computed(() => {
    const user = this.user();

    if (!user) {
      return "U";
    }

    const inicialNombre = user.nombre?.charAt(0)?.toUpperCase() ?? "";
    const inicialApellido = user.apellido?.charAt(0)?.toUpperCase() ?? "";

    return `${inicialNombre}${inicialApellido}` || "U";
  });

  readonly profileForm = this.fb.nonNullable.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    telefono: [""],
    cedula: [""],
    fechaNacimiento: [""],
    direccion: [""],
  });

  ngOnInit(): void {
    const currentUser = this.user();

    if (currentUser) {
      this.patchForm(currentUser);
      this.loadingProfile.set(false);
      return;
    }

    this.authService.restoreSession().subscribe({
      next: (user) => {
        if (user) {
          this.patchForm(user);
        }
        this.loadingProfile.set(false);
      },
      error: (error) => {
        console.error("Error restaurando sesión:", error);
        this.loadingProfile.set(false);
      },
    });
  }

  openModal(): void {
    const currentUser = this.user();

    if (currentUser) {
      this.patchForm(currentUser);
    }

    this.saveError.set(null);
    this.isOpen.set(true);
  }

  closeModal(): void {
    this.isOpen.set(false);
    this.saveError.set(null);

    const currentUser = this.user();
    if (currentUser) {
      this.patchForm(currentUser);
    }
  }

  handleSave(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const currentUser = this.user();

    if (!currentUser?.id) {
      this.saveError.set("No se pudo identificar el usuario actual.");
      return;
    }

    this.saving.set(true);
    this.saveError.set(null);

    const raw = this.profileForm.getRawValue();

    const payload = {
      nombre: raw.nombre.trim(),
      apellido: raw.apellido.trim(),
      email: raw.email.trim(),
      telefono: raw.telefono.trim() || undefined,
      cedula: raw.cedula.trim() || undefined,
      fechaNacimiento: raw.fechaNacimiento || undefined,
      direccion: raw.direccion.trim() || undefined,
    };

    this.usuariosService.editarUsuario(currentUser.id, payload).subscribe({
      next: (usuarioActualizado) => {
        localStorage.setItem("user", JSON.stringify(usuarioActualizado));

        this.patchForm(usuarioActualizado);
        this.saving.set(false);
        this.closeModal();

        window.location.reload();
      },
      error: (error) => {
        console.error("Error actualizando perfil:", error);

        const backendMessage = error?.error?.message;

        if (Array.isArray(backendMessage)) {
          this.saveError.set(backendMessage.join(", "));
        } else if (typeof backendMessage === "string") {
          this.saveError.set(backendMessage);
        } else {
          this.saveError.set("No se pudo actualizar el perfil.");
        }

        this.saving.set(false);
      },
    });
  }

  private patchForm(user: ProfileFormUser): void {
    this.profileForm.patchValue({
      nombre: user.nombre ?? "",
      apellido: user.apellido ?? "",
      email: user.email ?? "",
      telefono: user.telefono ?? "",
      cedula: user.cedula ?? "",
      fechaNacimiento: this.toDateInputValue(user.fechaNacimiento),
      direccion: user.direccion ?? "",
    });
  }

  private toDateInputValue(value: string | null | undefined): string {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return date.toISOString().split("T")[0] ?? "";
  }

  getRoleClasses(role: string | undefined | null): string {
    switch (role) {
      case "MASTER":
        return "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400";
      case "ADMINISTRADOR":
        return "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400";
      case "USUARIO":
        return "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
      case "CLIENTE":
        return "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-white/[0.05] dark:text-gray-300";
    }
  }

  formatFecha(fecha: string | null | undefined): string {
    if (!fecha) {
      return "-";
    }

    const date = new Date(fecha);

    if (Number.isNaN(date.getTime())) {
      return fecha;
    }

    return new Intl.DateTimeFormat("es-VE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }

  getFieldError(fieldName: keyof typeof this.profileForm.controls): string {
    const field = this.profileForm.controls[fieldName];

    if (!field.touched || !field.errors) {
      return "";
    }

    if (field.errors["required"]) {
      return "Este campo es obligatorio.";
    }

    if (field.errors["email"]) {
      return "Correo inválido.";
    }

    return "Campo inválido.";
  }
}
