import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./shared/layout/app-layout/app-layout.component";
import { authGuard } from "./pages/auth-pages/pages/components/auth.guard";

// Auth
import { LoginComponent } from "./pages/auth-pages/pages/login/login.component";
import { ResetPasswordComponent } from "./pages/auth-pages/pages/reset-password/pages/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./pages/auth-pages/pages/forgot-password/pages/forgot-password/forgot-password.component";
import { RegisterComponent } from "./pages/auth-pages/pages/register/pages/register/register.component";

// Dashboard & Profile
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProfileComponent } from "./pages/profile/profile.component";

// Usuarios
import { ListaUsuariosComponent } from "./pages/usuarios/lista-usuarios/lista-usuarios.component";
import { CrearUsuariosComponent } from "./pages/usuarios/crear-usuarios/crear-usuarios.component";
import { EditarUsuariosComponent } from "./pages/usuarios/editar-usuarios/editar-usuarios.component";

export const routes: Routes = [
  // ─── Auth (sin layout) ──────────────────────────────────────────────────────
  {
    path: "login",
    component: LoginComponent,
    title: "Iniciar sesión | MARITIMO",
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    title: "Restablecer contraseña | MARITIMO",
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    title: "Olvidé mi contraseña | MARITIMO",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Registro | MARITIMO",
  },

  // ─── App con layout y guard ──────────────────────────────────────────────────
  {
    path: "",
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      // Dashboard
      {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard | MARITIMO",
      },

      // Perfil
      {
        path: "profile",
        component: ProfileComponent,
        title: "Perfil | MARITIMO",
      },

      // Usuarios (ADMINISTRADOR / MASTER)
      {
        path: "usuarios",
        component: ListaUsuariosComponent,
        title: "Usuarios | MARITIMO",
      },
      {
        path: "usuarios/crear",
        component: CrearUsuariosComponent,
        title: "Nuevo usuario | MARITIMO",
      },
      {
        path: "usuarios/editar/:id",
        component: EditarUsuariosComponent,
        title: "Editar usuario | MARITIMO",
      },

      // ── Embarcaciones ────────────────────────────────────────────────────────
      {
        path: "embarcaciones",
        loadComponent: () =>
          import("./pages/embarcaciones/pages/lista-embarcaciones/lista-embarcaciones.component").then(
            (m) => m.ListaEmbarcacionesComponent
          ),
        title: "Embarcaciones | MARITIMO",
      },
      {
        path: "embarcaciones/crear",
        loadComponent: () =>
          import("./pages/embarcaciones/pages/crear-embarcacion/crear-embarcacion.component").then(
            (m) => m.CrearEmbarcacionComponent
          ),
        title: "Nueva embarcación | MARITIMO",
      },
      {
        path: "embarcaciones/editar/:id",
        loadComponent: () =>
          import("./pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component").then(
            (m) => m.EditarEmbarcacionComponent
          ),
        title: "Editar embarcación | MARITIMO",
      },

      // ── Muelles ──────────────────────────────────────────────────────────────
      {
        path: "muelles",
        loadComponent: () =>
          import("./pages/muelles/pages/lista-muelles/lista-muelles.component").then(
            (m) => m.ListaMuellesComponent
          ),
        title: "Muelles | MARITIMO",
      },
      {
        path: "muelles/crear",
        loadComponent: () =>
          import("./pages/muelles/pages/crear-muelle/crear-muelle.component").then(
            (m) => m.CrearMuelleComponent
          ),
        title: "Nuevo muelle | MARITIMO",
      },
      {
        path: "muelles/editar/:id",
        loadComponent: () =>
          import("./pages/muelles/pages/editar-muelle/editar-muelle.component").then(
            (m) => m.EditarMuelleComponent
          ),
        title: "Editar muelle | MARITIMO",
      },

      // ── Rutas ────────────────────────────────────────────────────────────────
      {
        path: "rutas",
        loadComponent: () =>
          import("./pages/rutas/pages/lista-rutas/lista-rutas.component").then(
            (m) => m.ListaRutasComponent
          ),
        title: "Rutas | MARITIMO",
      },
      {
        path: "rutas/crear",
        loadComponent: () =>
          import("./pages/rutas/pages/crear-ruta/crear-ruta.component").then(
            (m) => m.CrearRutaComponent
          ),
        title: "Nueva ruta | MARITIMO",
      },
      {
        path: "rutas/editar/:id",
        loadComponent: () =>
          import("./pages/rutas/pages/editar-ruta/editar-ruta.component").then(
            (m) => m.EditarRutaComponent
          ),
        title: "Editar ruta | MARITIMO",
      },

      // ── Horarios ─────────────────────────────────────────────────────────────
      {
        path: "horarios",
        loadComponent: () =>
          import("./pages/horarios/pages/lista-horarios/lista-horarios.component").then(
            (m) => m.ListaHorariosComponent
          ),
        title: "Horarios | MARITIMO",
      },
      {
        path: "horarios/crear",
        loadComponent: () =>
          import("./pages/horarios/pages/crear-horario/crear-horario.component").then(
            (m) => m.CrearHorarioComponent
          ),
        title: "Nuevo horario | MARITIMO",
      },
      {
        path: "horarios/editar/:id",
        loadComponent: () =>
          import("./pages/horarios/pages/editar-horario/editar-horario.component").then(
            (m) => m.EditarHorarioComponent
          ),
        title: "Editar horario | MARITIMO",
      },

      // ── Viajes (Terminal) ─────────────────────────────────────────────────────
      {
        path: "viajes",
        loadComponent: () =>
          import("./pages/viajes/pages/lista-viajes/lista-viajes.component").then(
            (m) => m.ListaViajesComponent
          ),
        title: "Viajes | MARITIMO",
      },
      {
        path: "viajes/:id",
        loadComponent: () =>
          import("./pages/viajes/pages/detalle-viaje/detalle-viaje.component").then(
            (m) => m.DetalleViajeComponent
          ),
        title: "Detalle de viaje | MARITIMO",
      },

      // ── Tickets ───────────────────────────────────────────────────────────────
      {
        path: "tickets",
        loadComponent: () =>
          import("./pages/tickets/pages/lista-tickets/lista-tickets.component").then(
            (m) => m.ListaTicketsComponent
          ),
        title: "Tickets | MARITIMO",
      },
      {
        path: "tickets/:id",
        loadComponent: () =>
          import("./pages/tickets/pages/detalle-ticket/detalle-ticket.component").then(
            (m) => m.DetalleTicketComponent
          ),
        title: "Ticket | MARITIMO",
      },

      // ── Alquileres ────────────────────────────────────────────────────────────
      {
        path: "alquileres",
        loadComponent: () =>
          import("./pages/alquileres/pages/lista-alquileres/lista-alquileres.component").then(
            (m) => m.ListaAlquileresComponent
          ),
        title: "Alquileres | MARITIMO",
      },
      {
        path: "alquileres/crear",
        loadComponent: () =>
          import("./pages/alquileres/pages/crear-alquiler/crear-alquiler.component").then(
            (m) => m.CrearAlquilerComponent
          ),
        title: "Nuevo alquiler | MARITIMO",
      },
      {
        path: "alquileres/:id",
        loadComponent: () =>
          import("./pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component").then(
            (m) => m.DetalleAlquilerComponent
          ),
        title: "Alquiler | MARITIMO",
      },

      // ── Viajes Taxi ───────────────────────────────────────────────────────────
      {
        path: "viajes-taxi",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/lista-viajes-taxi/lista-viajes-taxi.component").then(
            (m) => m.ListaViajesTaxiComponent
          ),
        title: "Viajes Taxi | MARITIMO",
      },
      {
        path: "viajes-taxi/solicitar",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/solicitar-viaje/solicitar-viaje.component").then(
            (m) => m.SolicitarViajeComponent
          ),
        title: "Solicitar taxi | MARITIMO",
      },
      {
        path: "viajes-taxi/:id",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/detalle-viaje-taxi/detalle-viaje-taxi.component").then(
            (m) => m.DetalleViajeTaxiComponent
          ),
        title: "Viaje taxi | MARITIMO",
      },

      // ── Pagos ─────────────────────────────────────────────────────────────────
      {
        path: "pagos",
        loadComponent: () =>
          import("./pages/pagos/pages/lista-pagos/lista-pagos.component").then(
            (m) => m.ListaPagosComponent
          ),
        title: "Pagos | MARITIMO",
      },
      {
        path: "pagos/:id",
        loadComponent: () =>
          import("./pages/pagos/pages/detalle-pago/detalle-pago.component").then(
            (m) => m.DetallePagoComponent
          ),
        title: "Pago | MARITIMO",
      },

      // ── Reseñas ───────────────────────────────────────────────────────────────
      {
        path: "resenas",
        loadComponent: () =>
          import("./pages/resenas/pages/lista-resenas/lista-resenas.component").then(
            (m) => m.ListaResenasComponent
          ),
        title: "Reseñas | MARITIMO",
      },

      // ── Notificaciones ────────────────────────────────────────────────────────
      {
        path: "notificaciones",
        loadComponent: () =>
          import("./pages/notificaciones/pages/lista-notificaciones/lista-notificaciones.component").then(
            (m) => m.ListaNotificacionesComponent
          ),
        title: "Notificaciones | MARITIMO",
      },
    ],
  },

  // ─── Redirects ───────────────────────────────────────────────────────────────
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" },
];
