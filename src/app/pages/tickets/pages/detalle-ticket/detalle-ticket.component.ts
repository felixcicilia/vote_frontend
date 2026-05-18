import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Ticket } from '../../models/ticket.model';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-detalle-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-ticket.component.html',
})
export class DetalleTicketComponent implements OnInit {
  private readonly service = inject(TicketsService);
  private readonly route = inject(ActivatedRoute);

  loading = false;
  errorMessage = '';
  ticket: Ticket | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getById(id).subscribe({
      next: (t) => { this.ticket = t; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el ticket.'; this.loading = false; },
    });
  }
}
