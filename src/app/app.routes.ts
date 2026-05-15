import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./shared/layout/app-layout/app-layout.component";

// Dashboard
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AdministracionComponent } from "./pages/administracion/pages/administracion/administracion.component";

// Auth
import { authGuard } from "./pages/auth-pages/pages/components/auth.guard";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/auth-pages/pages/login/login.component";
import { ResetPasswordComponent } from "./pages/auth-pages/pages/reset-password/pages/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./pages/auth-pages/pages/forgot-password/pages/forgot-password/forgot-password.component";
import { RegisterComponent } from "./pages/auth-pages/pages/register/pages/register/register.component";

// Usuarios
import { ListaUsuariosComponent } from "./pages/usuarios/lista-usuarios/lista-usuarios.component";
import { CrearUsuariosComponent } from "./pages/usuarios/crear-usuarios/crear-usuarios.component";
import { EditarUsuariosComponent } from "./pages/usuarios/editar-usuarios/editar-usuarios.component";

// Tasas
import { ListaTasasComponent } from "./pages/tasas/pages/lista-tasas/lista-tasas.component";
import { CrearTasasComponent } from "./pages/tasas/pages/crear-tasas/crear-tasas.component";
import { EditarTasasComponent } from "./pages/tasas/pages/editar-tasas/editar-tasas.component";

// Productos
import { ListaProductosComponent } from "./pages/productos/pages/lista-productos/lista-productos.component";
import { CrearProductosComponent } from "./pages/productos/pages/crear-productos/crear-productos.component";
import { EditarProductosComponent } from "./pages/productos/pages/editar-productos/editar-productos.component";

// Pedidos
import { ListaPedidosComponent } from "./pages/pedidos/pages/lista-pedidos/lista-pedidos.component";
import { CrearPedidosComponent } from "./pages/pedidos/pages/crear-pedidos/crear-pedidos.component";
import { EditarPedidosComponent } from "./pages/pedidos/pages/editar-pedidos/editar-pedidos.component";
import { DetallePedidosComponent } from "./pages/pedidos/pages/detalle-pedidos/detalle-pedidos.component";
import { KioskoPedidosComponent } from "./pages/pedidos/pages/kiosko-pedidos/kiosko-pedidos.component";

// Pagos
import { ListaPagosComponent } from "./pages/pagos/pages/lista-pagos/lista-pagos.component";
import { CrearPagosComponent } from "./pages/pagos/pages/crear-pagos/crear-pagos.component";
import { EditarPagosComponent } from "./pages/pagos/pages/editar-pagos/editar-pagos.component";

// Ordenes
import { DetalleOrdenesComponent } from "./pages/ordenes/pages/detalle-ordenes/detalle-ordenes.component";
import { ListaOrdenesComponent } from "./pages/ordenes/pages/lista-ordenes/lista-ordenes.component";
import { CrearOrdenesComponent } from "./pages/ordenes/pages/crear-ordenes/crear-ordenes.component";

// Operación
import { ListaOperacionComponent } from "./pages/operacion/pages/lista-operacion/lista-operacion.component";

// Clientes
import { ListaClientesComponent } from "./pages/clientes/pages/lista-clientes/lista-clientes.component";

import { ListaNoticiasComponent } from "./pages/noticias/pages/lista-noticias/lista-noticias.component";
import { CrearNoticiaComponent } from "./pages/noticias/pages/crear-noticias/crear-noticias.component";
import { DetalleNoticiaComponent } from "./pages/noticias/pages/detalle-noticias/detalle-noticias.component";
import { EditarNoticiaComponent } from "./pages/noticias/pages/editar-noticias/editar-noticias.component";
import { ListaInventarioComponent } from "./pages/inventario/pages/lista-inventario/lista-inventario.component";
import { ListaFlujoCajaComponent } from "./pages/flujo-caja/pages/lista-flujo-caja/lista-flujo-caja.component";
import { SeccionNoticiasComponent } from "./pages/noticias/pages/seccion-noticias/seccion-noticias.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Iniciar sesión | TRIESCAL",
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    title: "Restablecer contraseña | TRIESCAL",
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    title: "Olvido de contraseña | TRIESCAL",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Registro en TRIESCAL | TRIESCAL",
  },
  {
    path: "",
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard | TRIESCAL",
      },
      {
        path: "noticias",
        component: ListaNoticiasComponent,
        title: "Noticias | TRIESCAL",
      },
      {
        path: "noticias/seccion",
        component: SeccionNoticiasComponent,
        title: "Sección Noticias | TRIESCAL",
      },
      {
        path: "noticias/crear",
        component: CrearNoticiaComponent,
        title: "Crear Noticias | TRIESCAL",
      },
      {
        path: "noticias/editar/:id",
        component: EditarNoticiaComponent,
        title: "Editar Noticias | TRIESCAL",
      },
      {
        path: "noticias/detalle/:id",
        component: DetalleNoticiaComponent,
        title: "Detalle Noticias | TRIESCAL",
      },
      {
        path: "clientes",
        component: ListaClientesComponent,
        title: "Clientes | TRIESCAL",
      },
      {
        path: "pedidos",
        component: ListaPedidosComponent,
        title: "Pedidos | TRIESCAL",
      },
      {
        path: "pedidos/crear",
        component: CrearPedidosComponent,
        title: "Crear Pedidos | TRIESCAL",
      },
      {
        path: "pedidos/editar/:id",
        component: EditarPedidosComponent,
        title: "Editar Pedidos | TRIESCAL",
      },
      {
        path: "pedidos/detalle/:id",
        component: DetallePedidosComponent,
        title: "Detalle Pedidos | TRIESCAL",
      },
      {
        path: "pedidos/kiosko",
        component: KioskoPedidosComponent,
        title: "Kiosko Pedidos | TRIESCAL",
      },
      {
        path: "productos",
        component: ListaProductosComponent,
        title: "Productos | TRIESCAL",
      },
      {
        path: "productos/crear",
        component: CrearProductosComponent,
        title: "Crear Productos | TRIESCAL",
      },
      {
        path: "productos/editar/:id",
        component: EditarProductosComponent,
        title: "Editar Productos | TRIESCAL",
      },
      {
        path: "ordenes",
        component: ListaOrdenesComponent,
        title: "Órdenes | TRIESCAL",
      },
      {
        path: "ordenes/crear",
        component: CrearOrdenesComponent,
        title: "Crear órdenes | TRIESCAL",
      },
      {
        path: "ordenes/detalle/:id",
        component: DetalleOrdenesComponent,
        title: "Detalle Órdenes | TRIESCAL",
      },
      {
        path: "pagos",
        component: ListaPagosComponent,
        title: "Pagos | TRIESCAL",
      },
      {
        path: "pagos/crear",
        component: CrearPagosComponent,
        title: "Crear Pagos | TRIESCAL",
      },
      {
        path: "pagos/editar/:id",
        component: EditarPagosComponent,
        title: "Editar Pagos | TRIESCAL",
      },
      {
        path: "operacion",
        component: ListaOperacionComponent,
        title: "Operación | TRIESCAL",
      },
      {
        path: "tasas",
        component: ListaTasasComponent,
        title: "Tasas | TRIESCAL",
      },
      {
        path: "tasas/crear",
        component: CrearTasasComponent,
        title: "Crear Tasas | TRIESCAL",
      },
      {
        path: "tasas/editar/:id",
        component: EditarTasasComponent,
        title: "Editar Tasas | TRIESCAL",
      },
      {
        path: "usuarios",
        component: ListaUsuariosComponent,
        title: "Usuarios | TRIESCAL",
      },
      {
        path: "usuarios/crear",
        component: CrearUsuariosComponent,
        title: "Crear usuario | TRIESCAL",
      },
      {
        path: "usuarios/editar/:id",
        component: EditarUsuariosComponent,
        title: "Editar usuario | TRIESCAL",
      },
      {
        path: "administracion",
        component: AdministracionComponent,
        title: "Administración | TRIESCAL",
      },
      {
        path: "inventario",
        component: ListaInventarioComponent,
        title: "Inventario | TRIESCAL",
      },
      {
        path: "caja",
        component: ListaFlujoCajaComponent,
        title: "Flujo de Caja | TRIESCAL",
      },
      {
        path: "profile",
        component: ProfileComponent,
        title: "Perfil | TRIESCAL",
      },
    ],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "login",
  },
];
