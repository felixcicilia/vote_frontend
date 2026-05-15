// 🔥 Enum profesional para roles (mejor que string suelto)
export enum UserRole {
  MASTER = "MASTER",
  ADMINISTRADOR = "ADMINISTRADOR",
  USUARIO = "USUARIO",
  CLIENTE = "CLIENTE",
}

// 🔥 Modelo REAL del usuario (basado en tu backend)
export interface AuthUser {
  id: number;

  nombre: string;
  apellido: string;

  cedula: string;
  telefono: string;

  fechaNacimiento: string;
  direccion: string;

  email: string;
  role: UserRole;

  resetPasswordToken: string | null;
  resetPasswordExpiresAt: string | null;

  createdAt: string;
  updatedAt: string;
}

// 🔹 Payload login
export interface LoginPayload {
  email: string;
  password: string;
}

// 🔹 Response login
export interface LoginResponse {
  message: string;
  access_token: string;
  user: AuthUser;
}

// 🔹 Response profile
export interface ProfileResponse {
  message: string;
  data: AuthUser;
}