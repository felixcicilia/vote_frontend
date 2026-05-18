import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  private readonly route = inject(ActivatedRoute);

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
}
