import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./shared/layout/app-layout/app-layout.component";

// Dashboard
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

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

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Iniciar sesión | BRISA",
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    title: "Restablecer contraseña | BRISA",
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    title: "Olvido de contraseña | BRISA",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Registro en BRISA | BRISA",
  },
  {
    path: "",
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard | BRISA",
      },
      {
        path: "tasas",
        component: ListaTasasComponent,
        title: "Tasas | BRISA",
      },
      {
        path: "tasas/crear",
        component: CrearTasasComponent,
        title: "Crear Tasas | BRISA",
      },
      {
        path: "tasas/editar/:id",
        component: EditarTasasComponent,
        title: "Editar Tasas | BRISA",
      },
      {
        path: "usuarios",
        component: ListaUsuariosComponent,
        title: "Usuarios | BRISA",
      },
      {
        path: "usuarios/crear",
        component: CrearUsuariosComponent,
        title: "Crear usuario | BRISA",
      },
      {
        path: "usuarios/editar/:id",
        component: EditarUsuariosComponent,
        title: "Editar usuario | BRISA",
      },
      {
        path: "profile",
        component: ProfileComponent,
        title: "Perfil | BRISA",
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
