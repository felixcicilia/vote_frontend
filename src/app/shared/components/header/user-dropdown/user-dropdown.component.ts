import { Component, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DropdownComponent } from "../../ui/dropdown/dropdown.component";
import { DropdownItemTwoComponent } from "../../ui/dropdown/dropdown-item/dropdown-item.component-two";
import { AuthService } from "../../../../pages/auth-pages/services/auth.service";


@Component({
  selector: "app-user-dropdown",
  standalone: true,
  templateUrl: "./user-dropdown.component.html",
  imports: [
    CommonModule,
    RouterModule,
    DropdownComponent,
    DropdownItemTwoComponent,
  ],
})
export class UserDropdownComponent {
  private readonly authService = inject(AuthService);

  isOpen = false;

  readonly authUser = computed(() => this.authService.user());

  readonly nombreCompleto = computed(() => {
    const user = this.authUser();
    if (!user) return "Usuario";
    return `${user.firstName} ${user.lastName}`.trim();
  });

  readonly email = computed(() => {
    return this.authUser()?.email ?? "Sin correo";
  });

  readonly role = computed(() => {
    return this.authUser()?.role ?? "SIN ROL";
  });

  readonly iniciales = computed(() => {
    const user = this.authUser();

    if (!user) {
      return "U";
    }

    const inicialNombre = user.firstName?.charAt(0)?.toUpperCase() ?? "";
    const inicialApellido = user.lastName?.charAt(0)?.toUpperCase() ?? "";

    return `${inicialNombre}${inicialApellido}` || "U";
  });

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  logout(): void {
    this.closeDropdown();
    this.authService.logout();
  }

  getRoleClasses(role: string): string {
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
}
