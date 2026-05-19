import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-detalle-viaje',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-viaje.component.html',
})
export class DetalleViajeComponent implements OnInit {
  private readonly service = inject(ViajesService);
  private readonly route   = inject(ActivatedRoute);
  private readonly router  = inject(Router);

  loading = false;
  errorMessage = '';
  viaje: Viaje | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (v) => { this.viaje = v; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el viaje.'; this.loading = false; },
    });
  }

  comprar(): void {
    if (!this.viaje) return;
    this.router.navigate(['/checkout'], { queryParams: { viajeId: this.viaje.id } });
  }

  statusClass(s: string): string {
    return {
      SCHEDULED:   'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      IN_PROGRESS: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      COMPLETED:   'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      CANCELLED:   'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    }[s] ?? 'bg-gray-100 text-gray-600';
  }

  statusLabel(s: string): string {
    return { SCHEDULED:'Programado', IN_PROGRESS:'En curso', COMPLETED:'Completado', CANCELLED:'Cancelado' }[s] ?? s;
  }
}
