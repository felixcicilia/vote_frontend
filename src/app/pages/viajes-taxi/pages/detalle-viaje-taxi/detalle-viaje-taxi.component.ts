import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ViajeTaxi } from '../../models/viaje-taxi.model';
import { ViajesTaxiService } from '../../services/viajes-taxi.service';

@Component({
  selector: 'app-detalle-viaje-taxi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-viaje-taxi.component.html',
})
export class DetalleViajeTaxiComponent implements OnInit {
  private readonly service = inject(ViajesTaxiService);
  private readonly route = inject(ActivatedRoute);

  loading = false;
  errorMessage = '';
  viaje: ViajeTaxi | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (v) => { this.viaje = v; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el viaje.'; this.loading = false; },
    });
  }
}
