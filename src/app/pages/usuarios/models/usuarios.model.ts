export enum UserRole {
  CLIENTE = "CLIENTE",
  ADMINISTRADOR = "ADMINISTRADOR",
  MASTER = "MASTER",
  USUARIO = "USUARIO",
}

export interface Usuario {
  id: number;
  nombre: string | null;
  apellido: string | null;
  cedula: string;
  telefono: string | null;
  fechaNacimiento: string | null;
  direccion: string | null;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface CrearUsuarioPayload {
  nombre?: string;
  apellido?: string;
  cedula: string;
  telefono?: string;
  fechaNacimiento?: string;
  direccion?: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: UserRole;
}

export interface EditarUsuarioPayload {
  nombre?: string | null;
  apellido?: string | null;
  cedula?: string;
  telefono?: string | null;
  fechaNacimiento?: string | null;
  direccion?: string | null;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: UserRole;
}
