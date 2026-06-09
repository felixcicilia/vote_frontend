export enum UserRole {
  MASTER = "MASTER",
  ADMINISTRADOR = "ADMINISTRADOR",
  EMPLEADO = "EMPLEADO",
  PROVEEDOR = "PROVEEDOR",
  CLIENTE = "CLIENTE",
}

export interface Usuario {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  photoUrl?: string | null;
  gender?: string | null;
  isActive: boolean;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface CrearUsuarioPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string | null;
  gender?: string;
  role?: UserRole;
}

export interface EditarUsuarioPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string | null;
  gender?: string | null;
  isActive?: boolean;
  role?: UserRole;
}
