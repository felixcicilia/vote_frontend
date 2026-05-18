import { CommonModule } from "@angular/common";
import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { PageBreadcrumbComponent } from "../../shared/components/common/page-breadcrumb/page-breadcrumb.component";
import { ModalComponent } from "../../shared/components/ui/modal/modal.component";
import { ButtonComponent } from "../../shared/components/ui/button/button.component";
import { LabelComponent } from "../../shared/components/form/label/label.component";

import { AuthService } from "../../pages/auth-pages/services/auth.service";
import { AuthUser } from "../auth-pages/models/auth.model";
import { UsuariosService } from "../usuarios/services/usuarios.service";

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
    if (!user) return "Usuario";
    return `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Usuario";
  });

  readonly iniciales = computed(() => {
    const user = this.user();
    if (!user) return "U";
    const a = user.firstName?.charAt(0)?.toUpperCase() ?? "";
    const b = user.lastName?.charAt(0)?.toUpperCase() ?? "";
    return `${a}${b}` || "U";
  });

  readonly profileForm = this.fb.nonNullable.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
  });

  ngOnInit(): void {
    const currentUser = this.user();
    if (currentUser) { this.patchForm(currentUser); this.loadingProfile.set(false); return; }

    this.authService.restoreSession().subscribe({
      next: (user) => {
        if (user) this.patchForm(user);
        this.loadingProfile.set(false);
      },
      error: () => this.loadingProfile.set(false),
    });
  }

  openModal(): void {
    const u = this.user();
    if (u) this.patchForm(u);
    this.saveError.set(null);
    this.isOpen.set(true);
  }

  closeModal(): void {
    this.isOpen.set(false);
    this.saveError.set(null);
    const u = this.user();
    if (u) this.patchForm(u);
  }

  formatFecha(fecha: string | undefined | null): string {
    if (!fecha) return "-";
    try {
      return new Date(fecha).toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" });
    } catch { return "-"; }
  }

  getFieldError(field: string): string | null {
    const control = this.profileForm.get(field);
    if (!control || !control.touched || !control.errors) return null;
    if (control.errors["required"]) return "Este campo es obligatorio.";
    if (control.errors["email"]) return "El formato del correo no es válido.";
    return null;
  }

  handleSave(): void {
    if (this.profileForm.invalid) { this.profileForm.markAllAsTouched(); return; }

    const currentUser = this.user();
    if (!currentUser?.id) { this.saveError.set("No se pudo identificar el usuario."); return; }

    this.saving.set(true);
    this.saveError.set(null);

    const raw = this.profileForm.getRawValue();

    this.usuariosService.editarUsuario(currentUser.id, {
      firstName: raw.firstName.trim(),
      lastName: raw.lastName.trim(),
      email: raw.email.trim(),
      phone: raw.phone.trim() || null,
    }).subscribe({
      next: () => {
        this.saving.set(false);
        this.closeModal();
        window.location.reload();
      },
      error: (error) => {
        const msg = error?.error?.message;
        this.saveError.set(Array.isArray(msg) ? msg.join(", ") : typeof msg === "string" ? msg : "No se pudo actualizar el perfil.");
        this.saving.set(false);
      },
    });
  }

  private patchForm(user: AuthUser): void {
    this.profileForm.patchValue({
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      email: user.email ?? "",
      phone: user.phone ?? "",
    });
  }

  getRoleClasses(role: string | undefined | null): string {
    const map: Record<string, string> = {
      MASTER: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      ADMINISTRADOR: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
      EMPLEADO: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      PROVEEDOR: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
      CLIENTE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
    };
    return map[role ?? ""] ?? "bg-gray-100 text-gray-700 dark:bg-white/[0.05] dark:text-gray-300";
  }
}
