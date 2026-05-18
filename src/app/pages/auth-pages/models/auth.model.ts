// 🔥 Enum profesional para roles (mejor que string suelto)
export enum UserRole {
  MASTER = "MASTER",
  ADMINISTRADOR = "ADMINISTRADOR",
  EMPLEADO = "EMPLEADO",
  PROVEEDOR = "PROVEEDOR",
  CLIENTE = "CLIENTE",
}

export interface AuthUser {
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