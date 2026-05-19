import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface TasaActiva {
  id: number;
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  isActive: boolean;
  effectiveDate: string;
  source?: string;
}

@Injectable({ providedIn: 'root' })
export class TasaService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/exchange-rates`;

  readonly tasa = signal<TasaActiva | null>(null);
  readonly rate = computed(() => Number(this.tasa()?.rate ?? 0));
  readonly loaded = signal(false);

  load(): void {
    if (this.loaded()) return;
    this.http.get<any>(`${this.base}/active/usd-bs`).subscribe({
      next: (r) => {
        const data = r?.data ?? r;
        this.tasa.set(data);
        this.loaded.set(true);
      },
    });
  }

  /** Convierte USD a Bs usando la tasa activa */
  toBs(usd: number): number {
    return usd * this.rate();
  }

  /** Formatea valor en Bs */
  formatBs(usd: number): string {
    const bs = this.toBs(usd);
    return `Bs ${bs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  formatBsDirect(bs: number): string {
    return `Bs ${Number(bs).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
