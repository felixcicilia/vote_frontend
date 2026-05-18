import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Notificacion } from '../../models/notificacion.model';
import { NotificacionesService } from '../../services/notificaciones.service';
import { AuthService } from '../../../../pages/auth-pages/services/auth.service';

@Component({
  selector: 'app-lista-notificaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-notificaciones.component.html',
})
export class ListaNotificacionesComponent implements OnInit {
  private readonly service = inject(NotificacionesService);
  private readonly authService = inject(AuthService);

  loading = false;
  errorMessage = '';
  notificaciones: Notificacion[] = [];

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    const userId = this.authService.user()?.id;
    if (!userId) return;
    this.loading = true;
    this.service.getByUser(userId).subscribe({
      next: (data) => { this.notificaciones = data ?? []; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar las notificaciones.'; this.loading = false; },
    });
  }

  marcarLeida(n: Notificacion): void {
    const userId = this.authService.user()?.id;
    if (!userId || n.isRead) return;
    this.service.markAsRead(n.id, userId).subscribe({
      next: (updated) => {
        const idx = this.notificaciones.findIndex(x => x.id === n.id);
        if (idx >= 0) this.notificaciones[idx] = updated;
      },
    });
  }

  marcarTodasLeidas(): void {
    const userId = this.authService.user()?.id;
    if (!userId) return;
    this.service.markAllAsRead(userId).subscribe({
      next: () => this.notificaciones.forEach(n => n.isRead = true),
    });
  }

  eliminar(n: Notificacion): void {
    const userId = this.authService.user()?.id;
    if (!userId) return;
    this.service.delete(n.id, userId).subscribe({
      next: () => { this.notificaciones = this.notificaciones.filter(x => x.id !== n.id); },
    });
  }

  get noLeidas(): number { return this.notificaciones.filter(n => !n.isRead).length; }
  trackById(_: number, n: Notificacion): number { return n.id; }
}
