export interface Destino {
  id: number;
  name: string;
  state: string;
  icon: string;
  description?: string | null;
  isActive: boolean;
}
