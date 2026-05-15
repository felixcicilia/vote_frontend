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
      error: (error) => {
        console.error("Error cargando usuarios:", error);
        this.errorMessage = "No se pudo cargar la lista de usuarios.";
        this.loading = false;
      },
    });
  }

  aplicarFiltros(): void {
    const termino = this.search.trim().toLowerCase();

    this.usuariosFiltrados = this.usuarios.filter((usuario) => {
      const nombre = usuario.nombre ?? "";
      const apellido = usuario.apellido ?? "";
      const telefono = usuario.telefono ?? "";
      const nombreCompleto = `${nombre} ${apellido}`.trim().toLowerCase();

      return (
        nombreCompleto.includes(termino) ||
        nombre.toLowerCase().includes(termino) ||
        apellido.toLowerCase().includes(termino) ||
        usuario.email.toLowerCase().includes(termino) ||
        usuario.cedula.toLowerCase().includes(termino) ||
        telefono.toLowerCase().includes(termino) ||
        usuario.role.toLowerCase().includes(termino)
      );
    });

    this.total = this.usuariosFiltrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));

    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }

    if (this.page < 1) {
      this.page = 1;
    }

    this.actualizarPaginacion();
  }

  actualizarPaginacion(): void {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;

    this.usuariosPaginados = this.usuariosFiltrados.slice(start, end);
  }

  onSearchChange(): void {
    this.page = 1;
    this.aplicarFiltros();
  }

  cambiarPagina(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.page = page;
    this.actualizarPaginacion();
  }

  eliminarUsuario(usuario: Usuario): void {
    const confirmado = window.confirm(
      `¿Seguro que deseas eliminar a ${this.getNombreCompleto(usuario)}?`,
    );

    if (!confirmado) return;

    this.usuariosService.eliminarUsuario(usuario.id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((item) => item.id !== usuario.id);
        this.aplicarFiltros();
      },
      error: (error) => {
        console.error("Error eliminando usuario:", error);
        alert("No se pudo eliminar el usuario.");
      },
    });
  }

  limpiarBusqueda(): void {
    this.search = "";
    this.page = 1;
    this.aplicarFiltros();
  }

  getNombreCompleto(usuario: Usuario): string {
    const nombre = usuario.nombre ?? "";
    const apellido = usuario.apellido ?? "";
    const nombreCompleto = `${nombre} ${apellido}`.trim();

    return nombreCompleto || usuario.email || usuario.cedula;
  }

  getRoleLabel(role: string): string {
    switch (role) {
      case "MASTER":
        return "Master";
      case "ADMINISTRADOR":
        return "Administrador";
      case "USUARIO":
        return "Usuario";
      case "CLIENTE":
        return "Cliente";
      default:
        return role;
    }
  }

  getRoleClasses(role: string): string {
    switch (role) {
      case "MASTER":
        return "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400";
      case "ADMINISTRADOR":
        return "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
      case "USUARIO":
        return "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400";
      case "CLIENTE":
        return "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400";
    }
  }

  get rangoInicio(): number {
    if (this.total === 0) return 0;
    return (this.page - 1) * this.limit + 1;
  }

  get rangoFin(): number {
    const fin = this.page * this.limit;
    return fin > this.total ? this.total : fin;
  }

  trackByUsuario(_: number, usuario: Usuario): number {
    return usuario.id;
  }
}
