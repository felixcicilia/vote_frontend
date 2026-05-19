import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { ViajesService } from '../viajes/services/viajes.service';
import { MuellesService } from '../muelles/services/muelles.service';
import { Viaje } from '../viajes/models/viaje.model';
import { Muelle } from '../muelles/models/muelle.model';
import { TasaService } from '../../shared/services/tasa.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  private readonly viajesService = inject(ViajesService);
  private readonly muellesService = inject(MuellesService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly tasaService = inject(TasaService);

  muelles: Muelle[] = [];
  viajes: Viaje[] = [];
  resultados: Viaje[] = [];
  loading = false;
  buscado = false;

  searchOrigen = '';
  searchDestino = '';
  searchFecha = '';

  ngOnInit(): void {
    this.tasaService.load();
    this.muellesService.getAll(true).subscribe({ next: (m) => { this.muelles = m; } });

    // Leer params de query (desde el hero de inicio)
    this.route.queryParams.subscribe(p => {
      if (p['origen']) this.searchOrigen = p['origen'];
      if (p['destino']) this.searchDestino = p['destino'];
      if (p['fecha']) this.searchFecha = p['fecha'];
      // Siempre buscar al cargar (con o sin parámetros)
      this.buscar();
    });
  }

  buscar(): void {
    this.loading = true;
    this.buscado = true;
    this.resultados = [];

    // Fetch all SCHEDULED trips — date filtering happens client-side
    this.viajesService.getAll('SCHEDULED').subscribe({
      next: (viajes) => {
        this.viajes = viajes;
        this.resultados = viajes.filter(v => {
          // departureDate may come as "2026-05-19" or "2026-05-19T04:00:00.000Z"
          const tripDate = (v.departureDate ?? '').substring(0, 10);
          const fechaOk = !this.searchFecha || tripDate === this.searchFecha;
          const origenOk = !this.searchOrigen ||
            String(v.schedule?.route?.originPier?.id) === String(this.searchOrigen);
          const destinoOk = !this.searchDestino ||
            String(v.schedule?.route?.destinationPier?.id) === String(this.searchDestino);
          return fechaOk && origenOk && destinoOk;
        });
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  seleccionar(viaje: Viaje): void {
    this.router.navigate(['/checkout'], { queryParams: { viajeId: viaje.id } });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  nombreMuelle(id: string): string {
    const m = this.muelles.find(x => String(x.id) === String(id));
    return m?.name ?? '—';
  }

  duracion(mins?: number): string {
    if (!mins) return '';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m > 0 ? m + 'm' : ''}` : `${m}m`;
  }

  seatColor(available: number, total: number): string {
    const pct = available / total;
    if (pct > 0.5) return 'text-green-600 dark:text-green-400';
    if (pct > 0.2) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  }

}
