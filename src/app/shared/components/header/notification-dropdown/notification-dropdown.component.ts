import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { DropdownItemComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component';
import { NotificacionesService } from '../../../../pages/notificaciones/services/notificaciones.service';
import { AuthService } from '../../../../pages/auth-pages/services/auth.service';
import { Notificacion } from '../../../../pages/notificaciones/models/notificacion.model';

@Component({
  selector: 'app-notification-dropdown',
  standalone: true,
  templateUrl: './notification-dropdown.component.html',
  imports: [CommonModule, RouterModule, DropdownComponent, DropdownItemComponent],
})
export class NotificationDropdownComponent implements OnInit {
  private readonly svc = inject(NotificacionesService);
  private readonly auth = inject(AuthService);

  isOpen = false;
  notifications: Notificacion[] = [];
  unreadCount = 0;
  loading = false;

  get userId() { return this.auth.user()?.id; }

  ngOnInit(): void {
    this.loadUnread();
  }

  loadUnread(): void {
    const uid = this.userId;
    if (!uid) return;
    this.svc.countUnread(uid).subscribe({
      next: (r) => { this.unreadCount = r.count ?? 0; },
    });
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.loadNotifications();
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  loadNotifications(): void {
    const uid = this.userId;
    if (!uid) return;
    this.loading = true;
    this.svc.getByUser(uid).subscribe({
      next: (n) => {
        this.notifications = n.slice(0, 10);
        this.unreadCount = n.filter(x => !x.isRead).length;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  markRead(n: Notificacion): void {
    if (n.isRead || !this.userId) return;
    this.svc.markAsRead(n.id, this.userId).subscribe({
      next: () => {
        n.isRead = true;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
      },
    });
    this.closeDropdown();
  }

  markAllRead(): void {
    const uid = this.userId;
    if (!uid) return;
    this.svc.markAllAsRead(uid).subscribe({
      next: () => {
        this.notifications.forEach(n => (n.isRead = true));
        this.unreadCount = 0;
      },
    });
  }

  typeIcon(type: string): string {
    const map: Record<string, string> = {
      RESERVA: '📋', PAGO: '💳', APROBACION: '✅', CANCELACION: '❌',
      MENSAJE: '💬', SISTEMA: '🔔', SOPORTE: '🎧',
    };
    return map[type] ?? '🔔';
  }
}
