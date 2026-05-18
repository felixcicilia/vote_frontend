import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pago } from '../../models/pago.model';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-detalle-pago',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-pago.component.html',
})
export class DetallePagoComponent implements OnInit {
  private readonly service = inject(PagosService);
  private readonly route = inject(ActivatedRoute);

  loading = false;
  errorMessage = '';
  pago: Pago | null = null;
  saving = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (p) => { this.pago = p; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el pago.'; this.loading = false; },
    });
  }

  verificar(verifiedById: number): void {
    if (!this.pago) return;
    this.saving = true;
    this.service.verify(this.pago.id, { verifiedById }).subscribe({
      next: (p) => { this.pago = p; this.saving = false; },
      error: () => { alert('Error al verificar.'); this.saving = false; },
    });
  }

  rechazar(reason: string): void {
    if (!this.pago) return;
    this.saving = true;
    this.service.reject(this.pago.id, { rejectionReason: reason }).subscribe({
      next: (p) => { this.pago = p; this.saving = false; },
      error: () => { alert('Error al rechazar.'); this.saving = false; },
    });
  }
}
