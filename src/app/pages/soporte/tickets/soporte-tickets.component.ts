import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../auth-pages/services/auth.service';

interface Ticket {
  id: number;
  subject: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  category: string;
  client: { id: number; firstName: string; lastName: string; email: string };
  messages: { id: number; message: string; isFromSupport: boolean; author: { firstName: string; lastName: string }; createdAt: string }[];
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-soporte-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-tickets.component.html',
})
export class SoporteTicketsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly base = `${environment.apiUrl}/support-tickets`;

  get isClient() { return this.auth.role() === 'CLIENTE'; }
  get isMaster() { return this.auth.role() === 'MASTER' || this.auth.role() === 'ADMINISTRADOR'; }
  get user()     { return this.auth.user(); }

  loading = true;
  tickets: Ticket[] = [];
  selected: Ticket | null = null;
  filterStatus = '';
  reply = '';
  sending = false;

  // Formulario nuevo ticket (cliente)
  showForm = false;
  newSubject = '';
  newDesc = '';
  newPriority = 'MEDIUM';
  newCategory = '';
  submitting = false;

  get filtered(): Ticket[] {
    if (!this.filterStatus) return this.tickets;
    return this.tickets.filter(t => t.status === this.filterStatus);
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const params = this.isClient ? `?clientId=${this.user?.id}` : '';
    this.http.get<Ticket[]>(`${this.base}${params}`).subscribe({
      next: (t) => { this.tickets = t; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  open(t: Ticket): void {
    this.http.get<Ticket>(`${this.base}/${t.id}`).subscribe({
      next: (full) => { this.selected = full; },
    });
  }

  close(): void { this.selected = null; this.reply = ''; }

  sendReply(): void {
    if (!this.reply.trim() || !this.selected) return;
    this.sending = true;
    this.http.post<Ticket>(`${this.base}/${this.selected.id}/messages`, {
      userId: this.user?.id,
      message: this.reply.trim(),
      isFromSupport: this.isMaster,
    }).subscribe({
      next: (updated) => {
        this.selected = updated;
        this.reply = '';
        this.sending = false;
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx !== -1) this.tickets[idx] = { ...this.tickets[idx], status: updated.status, updatedAt: updated.updatedAt };
      },
      error: () => { this.sending = false; },
    });
  }

  updateStatus(status: string): void {
    if (!this.selected) return;
    this.http.patch<Ticket>(`${this.base}/${this.selected.id}`, { status }).subscribe({
      next: (updated) => {
        this.selected = { ...this.selected!, status: updated.status };
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx !== -1) this.tickets[idx] = { ...this.tickets[idx], status: updated.status };
      },
    });
  }

  createTicket(): void {
    if (!this.newSubject.trim() || !this.newDesc.trim()) return;
    this.submitting = true;
    this.http.post<Ticket>(this.base, {
      clientId: this.user?.id,
      subject: this.newSubject.trim(),
      description: this.newDesc.trim(),
      priority: this.newPriority,
      category: this.newCategory || 'General',
    }).subscribe({
      next: (t) => {
        this.tickets.unshift(t);
        this.showForm = false;
        this.newSubject = ''; this.newDesc = ''; this.newPriority = 'MEDIUM'; this.newCategory = '';
        this.submitting = false;
      },
      error: () => { this.submitting = false; },
    });
  }

  onEnter(e: Event): void {
    if ((e as KeyboardEvent).shiftKey) return;
    e.preventDefault();
    this.sendReply();
  }

  countByStatus(s: string): number {
    return this.tickets.filter(t => t.status === s).length;
  }

  statusLabel(s: string) {
    return { OPEN: 'Abierto', IN_PROGRESS: 'En proceso', RESOLVED: 'Resuelto', CLOSED: 'Cerrado' }[s] ?? s;
  }
  statusClass(s: string) {
    return {
      OPEN:        'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      IN_PROGRESS: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
      RESOLVED:    'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CLOSED:      'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
    }[s] ?? 'bg-gray-100 text-gray-600';
  }
  priorityClass(p: string) {
    return {
      HIGH:   'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
      MEDIUM: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
      LOW:    'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
    }[p] ?? '';
  }
  priorityLabel(p: string) { return { HIGH: '🔴 Alta', MEDIUM: '🟡 Media', LOW: '🟢 Baja' }[p] ?? p; }
}
