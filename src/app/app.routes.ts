import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./shared/layout/app-layout/app-layout.component";
import { authGuard } from "./pages/auth-pages/pages/components/auth.guard";
import { masterGuard } from "./pages/auth-pages/pages/components/master.guard";

// Auth
import { LoginComponent } from "./pages/auth-pages/pages/login/login.component";
import { ResetPasswordComponent } from "./pages/auth-pages/pages/reset-password/pages/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./pages/auth-pages/pages/forgot-password/pages/forgot-password/forgot-password.component";
import { RegisterComponent } from "./pages/auth-pages/pages/register/pages/register/register.component";

// Dashboard & Profile
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProfileComponent } from "./pages/profile/profile.component";

// Cliente / Proveedor pages
import { MiDashboardComponent } from "./pages/mi-dashboard/mi-dashboard.component";
import { MisMetodosPagoComponent } from "./pages/mis-metodos-pago/mis-metodos-pago.component";
import { MisCuentasRetiroComponent } from "./pages/mis-cuentas-retiro/mis-cuentas-retiro.component";

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
      // ── Inicio (role-based home) ──────────────────────────────────────────────
      {
        path: "inicio",
        loadComponent: () =>
          import("./pages/inicio/inicio.component").then(
            (m) => m.InicioComponent,
          ),
        title: "Inicio | MARITIMO",
      },

      // ── Buscar viajes ─────────────────────────────────────────────────────────
      {
        path: "buscar",
        loadComponent: () =>
          import("./pages/buscar/buscar.component").then(
            (m) => m.BuscarComponent,
          ),
        title: "Buscar viajes | MARITIMO",
      },
      {
        path: "buscar/lancha/:id",
        loadComponent: () =>
          import("./pages/buscar/pages/detalle-lancha/detalle-lancha.component").then(
            (m) => m.DetalleLanchaComponent,
          ),
        title: "Detalle lancha | MARITIMO",
      },

      // ── Mi Negocio → redirige a Estadísticas ─────────────────────────────────
      { path: "mi-negocio", redirectTo: "mi-charter/estadisticas", pathMatch: "full" },

      // Dashboard (legacy / admin)
      {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard | MARITIMO",
      },

      // ── Soporte ───────────────────────────────────────────────────────────────
      {
        path: "soporte/tickets",
        loadComponent: () =>
          import("./pages/soporte/tickets/soporte-tickets.component").then(
            (m) => m.SoporteTicketsComponent,
          ),
        title: "Tickets de soporte | MARITIMO",
      },
      { path: "soporte/chat", redirectTo: "/mensajes", pathMatch: "full" },

      // ── FAQ ───────────────────────────────────────────────────────────────────
      {
        path: "faq",
        loadComponent: () =>
          import("./pages/faq/faq.component").then(
            (m) => m.FaqComponent,
          ),
        title: "Preguntas frecuentes | MARITIMO",
      },

      // ── Mensajes / Chat general ───────────────────────────────────────────────
      {
        path: "mensajes",
        loadComponent: () =>
          import("./pages/mensajes/mensajes.component").then(
            (m) => m.MensajesComponent,
          ),
        title: "Mensajes | MARITIMO",
      },

      // ── Mis Reservas (cliente) ────────────────────────────────────────────────
      {
        path: "mis-reservas",
        loadComponent: () =>
          import("./pages/mis-reservas/mis-reservas.component").then(
            (m) => m.MisReservasComponent,
          ),
        title: "Mis Reservas | MARITIMO",
      },
      {
        path: "mis-reservas/:id",
        loadComponent: () =>
          import("./pages/mis-reservas/detalle-reserva/detalle-reserva.component").then(
            (m) => m.DetalleReservaComponent,
          ),
        title: "Detalle de Reserva | MARITIMO",
      },
      {
        path: "pagar-reserva",
        loadComponent: () =>
          import("./pages/mis-reservas/pagar-reserva/pagar-reserva.component").then(
            (m) => m.PagarReservaComponent,
          ),
        title: "Pagar Reserva | MARITIMO",
      },
      {
        path: "pagar-charter",
        loadComponent: () =>
          import("./pages/alquileres/pages/pagar-charter/pagar-charter.component").then(
            (m) => m.PagarCharterComponent,
          ),
        title: "Pagar Charter | MARITIMO",
      },

      // Perfil
      {
        path: "profile",
        component: ProfileComponent,
        title: "Perfil | MARITIMO",
      },

      // ── Dashboard cliente (redirect → inicio) ────────────────────────────────
      { path: "mi-dashboard", redirectTo: "inicio", pathMatch: "full" },

      // ── Métodos de pago (cliente) ─────────────────────────────────────────────
      {
        path: "mis-metodos-pago",
        component: MisMetodosPagoComponent,
        title: "Mis métodos de pago | MARITIMO",
      },

      // ── Cuentas de retiro (proveedor) ─────────────────────────────────────────
      {
        path: "mis-cuentas-retiro",
        component: MisCuentasRetiroComponent,
        title: "Datos bancarios | MARITIMO",
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
            (m) => m.ListaEmbarcacionesComponent,
          ),
        title: "Embarcaciones | MARITIMO",
      },

      { path: "embarcaciones/verificar", redirectTo: "/embarcaciones", pathMatch: "full" },
      {
        path: "embarcaciones/editar/:id",
        loadComponent: () =>
          import("./pages/embarcaciones/pages/editar-embarcacion/editar-embarcacion.component").then(
            (m) => m.EditarEmbarcacionComponent,
          ),
        title: "Editar embarcación | MARITIMO",
      },

      // ── Muelles ──────────────────────────────────────────────────────────────
      {
        path: "muelles",
        loadComponent: () =>
          import("./pages/muelles/pages/lista-muelles/lista-muelles.component").then(
            (m) => m.ListaMuellesComponent,
          ),
        title: "Muelles | MARITIMO",
      },
      {
        path: "muelles/crear",
        loadComponent: () =>
          import("./pages/muelles/pages/crear-muelle/crear-muelle.component").then(
            (m) => m.CrearMuelleComponent,
          ),
        title: "Nuevo muelle | MARITIMO",
      },
      {
        path: "muelles/editar/:id",
        loadComponent: () =>
          import("./pages/muelles/pages/editar-muelle/editar-muelle.component").then(
            (m) => m.EditarMuelleComponent,
          ),
        title: "Editar muelle | MARITIMO",
      },

      // ── Rutas ────────────────────────────────────────────────────────────────
      {
        path: "rutas",
        loadComponent: () =>
          import("./pages/rutas/pages/lista-rutas/lista-rutas.component").then(
            (m) => m.ListaRutasComponent,
          ),
        title: "Rutas | MARITIMO",
      },
      {
        path: "rutas/crear",
        loadComponent: () =>
          import("./pages/rutas/pages/crear-ruta/crear-ruta.component").then(
            (m) => m.CrearRutaComponent,
          ),
        title: "Nueva ruta | MARITIMO",
      },
      {
        path: "rutas/editar/:id",
        loadComponent: () =>
          import("./pages/rutas/pages/editar-ruta/editar-ruta.component").then(
            (m) => m.EditarRutaComponent,
          ),
        title: "Editar ruta | MARITIMO",
      },

      // ── Horarios ─────────────────────────────────────────────────────────────
      {
        path: "horarios",
        loadComponent: () =>
          import("./pages/horarios/pages/lista-horarios/lista-horarios.component").then(
            (m) => m.ListaHorariosComponent,
          ),
        title: "Horarios | MARITIMO",
      },
      {
        path: "horarios/crear",
        loadComponent: () =>
          import("./pages/horarios/pages/crear-horario/crear-horario.component").then(
            (m) => m.CrearHorarioComponent,
          ),
        title: "Nuevo horario | MARITIMO",
      },
      {
        path: "horarios/editar/:id",
        loadComponent: () =>
          import("./pages/horarios/pages/editar-horario/editar-horario.component").then(
            (m) => m.EditarHorarioComponent,
          ),
        title: "Editar horario | MARITIMO",
      },

      // ── Checkout ─────────────────────────────────────────────────────────────
      {
        path: "checkout",
        loadComponent: () =>
          import("./pages/checkout/checkout.component").then(
            (m) => m.CheckoutComponent,
          ),
        title: "Checkout | MARITIMO",
      },

      // ── Viajes (Terminal) ─────────────────────────────────────────────────────
      {
        path: "viajes",
        loadComponent: () =>
          import("./pages/viajes/pages/lista-viajes/lista-viajes.component").then(
            (m) => m.ListaViajesComponent,
          ),
        title: "Viajes | MARITIMO",
      },
      {
        path: "viajes/:id",
        loadComponent: () =>
          import("./pages/viajes/pages/detalle-viaje/detalle-viaje.component").then(
            (m) => m.DetalleViajeComponent,
          ),
        title: "Detalle de viaje | MARITIMO",
      },

      // ── Tickets ───────────────────────────────────────────────────────────────
      {
        path: "tickets",
        loadComponent: () =>
          import("./pages/tickets/pages/lista-tickets/lista-tickets.component").then(
            (m) => m.ListaTicketsComponent,
          ),
        title: "Tickets | MARITIMO",
      },
      {
        path: "tickets/:id",
        loadComponent: () =>
          import("./pages/tickets/pages/detalle-ticket/detalle-ticket.component").then(
            (m) => m.DetalleTicketComponent,
          ),
        title: "Ticket | MARITIMO",
      },

      // ── Alquileres (cliente) ─────────────────────────────────────────────────
      {
        path: "alquileres",
        loadComponent: () =>
          import("./pages/alquileres/pages/lista-alquileres/lista-alquileres.component").then(
            (m) => m.ListaAlquileresComponent,
          ),
        title: "Charter privado | MARITIMO",
      },
      {
        path: "alquileres/yate/:id",
        loadComponent: () =>
          import("./pages/alquileres/pages/detalle-yate/detalle-yate.component").then(
            (m) => m.DetalleYateComponent,
          ),
        title: "Detalle de embarcación | MARITIMO",
      },
      {
        path: "alquileres/:id",
        loadComponent: () =>
          import("./pages/alquileres/pages/detalle-alquiler/detalle-alquiler.component").then(
            (m) => m.DetalleAlquilerComponent,
          ),
        title: "Reserva de charter | MARITIMO",
      },

      // ── Mi Charter (proveedor) ────────────────────────────────────────────────
      {
        path: "mi-charter",
        redirectTo: "mi-charter/yates",
        pathMatch: "full",
      },
      {
        path: "mi-charter/yates",
        loadComponent: () =>
          import("./pages/mi-charter/pages/lista-yates/lista-yates.component").then(
            (m) => m.ListaYatesComponent,
          ),
        title: "Mis embarcaciones | MARITIMO",
      },
      {
        path: "mi-charter/yates/nuevo",
        loadComponent: () =>
          import("./pages/mi-charter/pages/form-yate/form-yate.component").then(
            (m) => m.FormYateComponent,
          ),
        title: "Nueva embarcación | MARITIMO",
      },
      {
        path: "mi-charter/yates/:id/editar",
        loadComponent: () =>
          import("./pages/mi-charter/pages/form-yate/form-yate.component").then(
            (m) => m.FormYateComponent,
          ),
        title: "Editar embarcación | MARITIMO",
      },
      {
        path: "mi-charter/reservas",
        loadComponent: () =>
          import("./pages/mi-charter/pages/reservas-charter/reservas-charter.component").then(
            (m) => m.ReservasCharterComponent,
          ),
        title: "Reservas de charter | MARITIMO",
      },
      {
        path: "mi-charter/itinerario",
        loadComponent: () =>
          import("./pages/mi-charter/pages/itinerario/itinerario.component").then(
            (m) => m.ItinerarioComponent,
          ),
        title: "Mi itinerario | MARITIMO",
      },
      {
        path: "mi-charter/calendario",
        loadComponent: () =>
          import("./pages/mi-charter/pages/calendario/calendario.component").then(
            (m) => m.CalendarioComponent,
          ),
        title: "Calendario | MARITIMO",
      },
      {
        path: "mis-capitanes",
        loadComponent: () =>
          import("./pages/mis-capitanes/mis-capitanes.component").then(
            (m) => m.MisCapitanesComponent,
          ),
        title: "Mis capitanes | MARITIMO",
      },
      {
        path: "mi-charter/estadisticas",
        loadComponent: () =>
          import("./pages/mi-charter/pages/estadisticas/estadisticas.component").then(
            (m) => m.EstadisticasComponent,
          ),
        title: "Estadísticas | MARITIMO",
      },

      // ── Viajes Taxi ───────────────────────────────────────────────────────────
      {
        path: "viajes-taxi",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/lista-viajes-taxi/lista-viajes-taxi.component").then(
            (m) => m.ListaViajesTaxiComponent,
          ),
        title: "Viajes Taxi | MARITIMO",
      },
      {
        path: "viajes-taxi/solicitar",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/solicitar-viaje/solicitar-viaje.component").then(
            (m) => m.SolicitarViajeComponent,
          ),
        title: "Solicitar taxi | MARITIMO",
      },
      {
        path: "viajes-taxi/:id",
        loadComponent: () =>
          import("./pages/viajes-taxi/pages/detalle-viaje-taxi/detalle-viaje-taxi.component").then(
            (m) => m.DetalleViajeTaxiComponent,
          ),
        title: "Viaje taxi | MARITIMO",
      },

      // ── Pagos ─────────────────────────────────────────────────────────────────
      {
        path: "pagos",
        loadComponent: () =>
          import("./pages/pagos/pages/lista-pagos/lista-pagos.component").then(
            (m) => m.ListaPagosComponent,
          ),
        title: "Pagos | MARITIMO",
      },
      {
        path: "pagos/:id",
        loadComponent: () =>
          import("./pages/pagos/pages/detalle-pago/detalle-pago.component").then(
            (m) => m.DetallePagoComponent,
          ),
        title: "Pago | MARITIMO",
      },

      // ── Reseñas ───────────────────────────────────────────────────────────────
      {
        path: "resenas",
        loadComponent: () =>
          import("./pages/resenas/pages/lista-resenas/lista-resenas.component").then(
            (m) => m.ListaResenasComponent,
          ),
        title: "Reseñas | MARITIMO",
      },

      // ── Tasas de cambio ───────────────────────────────────────────────────────
      {
        path: "tasas",
        loadComponent: () =>
          import("./pages/tasas/pages/lista-tasas/lista-tasas.component").then(
            (m) => m.ListaTasasComponent,
          ),
        title: "Tasas | MARITIMO",
      },
      {
        path: "tasas/crear",
        canActivate: [masterGuard],
        loadComponent: () =>
          import("./pages/tasas/pages/crear-tasas/crear-tasas.component").then(
            (m) => m.CrearTasasComponent,
          ),
        title: "Nueva tasa | MARITIMO",
      },
      {
        path: "tasas/editar/:id",
        canActivate: [masterGuard],
        loadComponent: () =>
          import("./pages/tasas/pages/editar-tasas/editar-tasas.component").then(
            (m) => m.EditarTasasComponent,
          ),
        title: "Editar tasa | MARITIMO",
      },

      // ── Notificaciones ────────────────────────────────────────────────────────
      {
        path: "notificaciones",
        loadComponent: () =>
          import("./pages/notificaciones/pages/lista-notificaciones/lista-notificaciones.component").then(
            (m) => m.ListaNotificacionesComponent,
          ),
        title: "Notificaciones | MARITIMO",
      },

      // ── Métodos de cobro (MASTER/ADMIN) ──────────────────────────────────────
      {
        path: "metodos-cobro",
        loadComponent: () =>
          import("./pages/metodos-cobro/metodos-cobro.component").then(
            (m) => m.MetodosCobroComponent,
          ),
        title: "Métodos de cobro | MARITIMO",
      },

      // ── Finanzas (MASTER only) ────────────────────────────────────────────────
      {
        path: "finanzas",
        canActivate: [masterGuard],
        loadComponent: () =>
          import("./pages/finanzas/finanzas.component").then(
            (m) => m.FinanzasComponent,
          ),
        title: "Finanzas | MARITIMO",
      },

      // ── Puntos de salida (admin) ──────────────────────────────────────────────
      {
        path: "puntos-salida",
        loadComponent: () =>
          import("./pages/puntos-salida/lista-puntos-salida.component").then(
            (m) => m.ListaPuntosSalidaComponent,
          ),
        title: "Puntos de salida | MARITIMO",
      },

      // ── Destinos (admin) ──────────────────────────────────────────────────────
      {
        path: "destinos",
        loadComponent: () =>
          import("./pages/destinos-admin/lista-destinos-admin.component").then(
            (m) => m.ListaDestinosAdminComponent,
          ),
        title: "Destinos | MARITIMO",
      },

      // ── Reservas de isla (admin) ──────────────────────────────────────────────
      {
        path: "reservas-isla",
        loadComponent: () =>
          import("./pages/reservas-isla/lista-reservas-isla.component").then(
            (m) => m.ListaReservasIslaComponent,
          ),
        title: "Reservas de isla | MARITIMO",
      },
      {
        path: "reservas-isla/:id",
        loadComponent: () =>
          import("./pages/reservas-isla/detalle-reserva-isla/detalle-reserva-isla.component").then(
            (m) => m.DetalleReservaIslaComponent,
          ),
        title: "Detalle de excursión | MARITIMO",
      },
    ],
  },

  // ─── Redirects ───────────────────────────────────────────────────────────────
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "inicio" },
];
