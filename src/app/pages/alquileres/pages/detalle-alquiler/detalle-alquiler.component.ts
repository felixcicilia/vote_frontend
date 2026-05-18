import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alquiler } from '../../models/alquiler.model';
import { AlquileresService } from '../../services/alquileres.service';

@Component({
  selector: 'app-detalle-alquiler',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-alquiler.component.html',
})
export class DetalleAlquilerComponent implements OnInit {
  private readonly service = inject(AlquileresService);
  private readonly route = inject(ActivatedRoute);

  loading = false;
  errorMessage = '';
  alquiler: Alquiler | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (a) => { this.alquiler = a; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el alquiler.'; this.loading = false; },
    });
  }
}
