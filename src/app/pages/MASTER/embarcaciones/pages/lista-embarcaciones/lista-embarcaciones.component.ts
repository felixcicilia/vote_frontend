import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Embarcacion, VesselType, VesselStatus, VesselVerificationStatus } from '../../models/embarcacion.model';
import { EmbarcacionesService } from '../../services/embarcaciones.service';
import { environment } from '../../../../../environments/environment';

type Tab = 'TODAS' | 'PENDING' | 'APPROVED' | 'REJECTED';

@Component({
  selector: 'app-lista-embarcaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-embarcaciones.component.html',
})
export class ListaEmbarcacionesComponent implements OnInit {
  private readonly service = inject(EmbarcacionesService);

  loading = false;
  embarcaciones: Embarcacion[] = [];
  search = '';
  filtroTipo: VesselType | '' = '';
  tab: Tab = 'TODAS';

  page = 1;
  readonly limit = 12;

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (d) => { this.embarcaciones = d ?? []; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  get filtered(): Embarcacion[] {
    const q = this.search.trim().toLowerCase();
    return this.embarcaciones.filter(e => {
      const matchTab = this.tab === 'TODAS' || e.verificationStatus === this.tab;
      const matchTipo = !this.filtroTipo || e.type === this.filtroTipo;
      const matchQ = !q || e.name.toLowerCase().includes(q) ||
        (e.licensePlate ?? '').toLowerCase().includes(q) ||
        (e.provider?.companyName ?? '').toLowerCase().includes(q);
      return matchTab && matchTipo && matchQ;
    });
  }

  get paginated(): Embarcacion[] {
    return this.filtered.slice((this.page - 1) * this.limit, this.page * this.limit);
  }

  get totalPages(): number { return Math.max(1, Math.ceil(this.filtered.length / this.limit)); }

  count(v: Tab): number {
    if (v === 'TODAS') return this.embarcaciones.length;
    return this.embarcaciones.filter(e => e.verificationStatus === v).length;
  }

  setTab(t: Tab): void { this.tab = t; this.page = 1; }

  // Helpers
  imageUrl(p: string): string {
    return p?.startsWith('http') ? p : `${environment.apiUrl.replace('/api', '')}${p}`;
  }

  typeIcon(t: VesselType): string {
    return { LANCHA: '🚤', YATE: '⛵', CATAMARAN: '🪸', BOTE: '🛶' }[t] ?? '🚢';
  }

  statusClass(s: VesselStatus): string {
    return {
      ACTIVE: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      MAINTENANCE: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      INACTIVE: 'bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400',
    }[s] ?? '';
  }

  statusLabel(s: VesselStatus): string {
    return { ACTIVE: 'Activa', MAINTENANCE: 'Mantenimiento', INACTIVE: 'Inactiva' }[s] ?? s;
  }

  verifClass(s: VesselVerificationStatus): string {
    return {
      APPROVED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      REJECTED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
      PENDING:  'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    }[s] ?? '';
  }

  verifLabel(s: VesselVerificationStatus): string {
    return { APPROVED: '✓ Aprobada', REJECTED: '✗ Rechazada', PENDING: '⏳ Pendiente' }[s] ?? s;
  }
}
