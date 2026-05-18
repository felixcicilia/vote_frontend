export interface Notificacion {
  id: number;
  user: { id: number };
  title: string;
  body: string;
  type: string;
  data?: Record<string, any>;
  isRead: boolean;
  readAt?: string;
  createdAt?: string;
}
