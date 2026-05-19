import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth-pages/services/auth.service';
import { TicketsService } from '../tickets/services/tickets.service';
import { Ticket } from '../tickets/models/ticket.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-reservas.component.html',
})
export class MisReservasComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly ticketsService = inject(TicketsService);

  tickets: Ticket[] = [];
  loading = true;

  get user() { return this.auth.user(); }

  ngOnInit(): void {
    const id = this.user?.id;
    if (!id) { this.loading = false; return; }
    this.ticketsService.getAll({ clientId: id }).subscribe({
      next: (t) => { this.tickets = t; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  isUpcoming(t: Ticket): boolean {
    return new Date(t.trip?.departureDate) >= new Date();
  }

  statusConfig(status: string): { label: string; bg: string; dot: string } {
    const map: Record<string, { label: string; bg: string; dot: string }> = {
      CONFIRMED: { label: 'Confirmado', bg: 'bg-green-50 border-green-200 dark:bg-green-500/5 dark:border-green-500/20', dot: 'bg-green-500' },
      PENDING:   { label: 'Pendiente de pago', bg: 'bg-amber-50 border-amber-200 dark:bg-amber-500/5 dark:border-amber-500/20', dot: 'bg-amber-500' },
      USED:      { label: 'Viaje realizado', bg: 'bg-blue-50 border-blue-200 dark:bg-blue-500/5 dark:border-blue-500/20', dot: 'bg-blue-500' },
      CANCELLED: { label: 'Cancelado', bg: 'bg-red-50 border-red-200 dark:bg-red-500/5 dark:border-red-500/20', dot: 'bg-red-500' },
    };
    return map[status] ?? { label: status, bg: 'bg-gray-50 border-gray-200', dot: 'bg-gray-400' };
  }
}
