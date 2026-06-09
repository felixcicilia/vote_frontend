import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { TasaService } from '../../../../shared/services/tasa.service';
import { Embarcacion } from '../../../embarcaciones/models/embarcacion.model';
import { amenityLabel, amenityIcon } from '../../../alquileres/data/amenities';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-lista-yates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-yates.component.html',
})
export class ListaYatesComponent implements OnInit {
  private readonly embService = inject(EmbarcacionesService);
  readonly authService = inject(AuthService);
  readonly tasaService = inject(TasaService);

  loading = true;
  toggling: number | null = null;
  vessels: Embarcacion[] = [];

  get providerProfileId(): number | null {
    const user = this.authService.user();
    return (user as any)?.providerProfile?.id ?? null;
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.load();
  }

  load(): void {
    const pid = this.providerProfileId;
    if (!pid) { this.loading = false; return; }

    this.embService.getByProvider(pid).subscribe({
      next: (v) => { this.vessels = v; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  toggleAvailability(v: Embarcacion, event: Event): void {
    event.stopPropagation();
    this.toggling = v.id;
    this.embService.toggleAvailability(v.id).subscribe({
      next: (updated) => {
        const idx = this.vessels.findIndex(x => x.id === updated.id);
        if (idx !== -1) this.vessels[idx] = updated;
        this.toggling = null;
      },
      error: () => { this.toggling = null; },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  typeIcon(t: string): string {
    const m: Record<string, string> = { LANCHA: '🚤', YATE: '⛵', CATAMARAN: '🛥️', BOTE: '🛶' };
    return m[t] ?? '🚤';
  }
  typeLabel(t: string): string {
    const m: Record<string, string> = { LANCHA: 'Lancha', YATE: 'Yate', CATAMARAN: 'Catamarán', BOTE: 'Bote' };
    return m[t] ?? t;
  }
  amenityLabel = amenityLabel;
  amenityIcon  = amenityIcon;
}
