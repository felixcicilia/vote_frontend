import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Usuario } from "../models/usuarios.model";
import { UsuariosService } from "../services/usuarios.service";

@Component({
  selector: "app-lista-usuarios",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./lista-usuarios.component.html",
})
export class ListaUsuariosComponent implements OnInit {
  private readonly usuariosService = inject(UsuariosService);

  loading = false;
  errorMessage = "";

  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  usuariosPaginados: Usuario[] = [];

  search = "";
  filtroRol = "";

  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.loading = true;
    this.errorMessage = "";

    this.usuariosService.obtenerUsuarios().subscribe({
      next: (response) => {
        this.usuarios = response ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar la lista de usuarios.";
        this.loading = false;
      },
    });
  }

  aplicarFiltros(): void {
    const termino = this.search.trim().toLowerCase();

    this.usuariosFiltrados = this.usuarios.filter((u) => {
      const nombreCompleto = `${u.firstName} ${u.lastName}`.toLowerCase();
      const busqueda =
        nombreCompleto.includes(termino) ||
        u.email.toLowerCase().includes(termino) ||
        (u.phone ?? "").toLowerCase().includes(termino) ||
        u.role.toLowerCase().includes(termino);
      const rol = !this.filtroRol || u.role === this.filtroRol;
      return busqueda && rol;
    });

    this.total = this.usuariosFiltrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages) this.page = this.totalPages;
    if (this.page < 1) this.page = 1;
    this.actualizarPaginacion();
  }

  actualizarPaginacion(): void {
    const start = (this.page - 1) * this.limit;
    this.usuariosPaginados = this.usuariosFiltrados.slice(start, start + this.limit);
  }

  onSearchChange(): void { this.page = 1; this.aplicarFiltros(); }
  onFilterChange(): void { this.page = 1; this.aplicarFiltros(); }

  cambiarPagina(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.page = page;
    this.actualizarPaginacion();
  }

  eliminarUsuario(usuario: Usuario): void {
    if (!confirm(`¿Eliminar a ${this.getNombreCompleto(usuario)}?`)) return;

    this.usuariosService.eliminarUsuario(usuario.id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((item) => item.id !== usuario.id);
        this.aplicarFiltros();
      },
      error: () => alert("No se pudo eliminar el usuario."),
    });
  }

  limpiarBusqueda(): void {
    this.search = "";
    this.filtroRol = "";
    this.page = 1;
    this.aplicarFiltros();
  }

  getNombreCompleto(u: Usuario): string {
    return `${u.firstName} ${u.lastName}`.trim() || u.email;
  }

  getRoleLabel(role: string): string {
    const map: Record<string, string> = {
      MASTER: "Master",
      ADMINISTRADOR: "Administrador",
      EMPLEADO: "Empleado",
      PROVEEDOR: "Proveedor",
      CLIENTE: "Cliente",
    };
    return map[role] ?? role;
  }

  getRoleClasses(role: string): string {
    const map: Record<string, string> = {
      MASTER: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      ADMINISTRADOR: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
      EMPLEADO: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      PROVEEDOR: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
      CLIENTE: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400",
    };
    return map[role] ?? "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400";
  }

  get rangoInicio(): number {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }

  get rangoFin(): number {
    return Math.min(this.page * this.limit, this.total);
  }

  trackByUsuario(_: number, u: Usuario): number {
    return u.id;
  }
}
