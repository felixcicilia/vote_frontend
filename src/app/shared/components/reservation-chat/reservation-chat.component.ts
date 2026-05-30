import {
  Component, Input, Output, EventEmitter, OnInit, OnDestroy,
  inject, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../pages/auth-pages/services/auth.service';

export type BookingType = 'CHARTER' | 'ISLAND';

interface ChatMsg {
  id?: number;
  conversationId: number;
  senderId: number;
  sender?: { id: number; firstName: string; lastName: string };
  content: string;
  readByIds: number[];
  createdAt: string | Date;
}

interface Conversation {
  id: number;
  bookingId: number;
  bookingType: BookingType;
  participantIds: number[];
  lastMessage?: string;
}

@Component({
  selector: 'app-reservation-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-chat.component.html',
})
export class ReservationChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly http  = inject(HttpClient);
  private readonly auth  = inject(AuthService);
  private readonly cdr   = inject(ChangeDetectorRef);
  private readonly base  = `${environment.apiUrl}/chat`;
  private socket!: Socket;
  private shouldScroll = false;

  @Input() bookingId!: number;
  @Input() bookingType!: BookingType;
  /** ID del cliente para incluir como participante */
  @Input() clientUserId!: number;
  /** ID del proveedor (user) para incluir como participante */
  @Input() providerUserId!: number;
  /** Título del panel (ej. nombre del cliente o nro de reserva) */
  @Input() title = '';
  /** Nombre del proveedor/operador */
  @Input() providerName = '';

  @Output() closeChat = new EventEmitter<void>();
  /** Emitido cuando cambia el unread count (siempre 0 cuando se abre) */
  @Output() unreadChange = new EventEmitter<number>();

  @ViewChild('msgsEnd') msgsEnd?: ElementRef;

  loading = true;
  sending = false;
  input = '';
  messages: ChatMsg[] = [];
  conv: Conversation | null = null;
  convStatus: 'OPEN' | 'CLOSED' = 'OPEN';
  confirmClose = false; // muestra el diálogo de confirmación

  get user() { return this.auth.user(); }

  ngOnInit(): void {
    this.initConversation();
  }

  ngOnDestroy(): void {
    if (this.conv) {
      this.socket?.emit('conv:leave', { conversationId: this.conv.id });
    }
    this.socket?.disconnect();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.msgsEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
      this.shouldScroll = false;
    }
  }

  private initConversation(): void {
    const participants = [...new Set([this.clientUserId, this.providerUserId].filter(Boolean))];
    this.http.post<Conversation>(`${this.base}/conversations/booking/${this.bookingId}`, {
      participantIds: participants,
      bookingType: this.bookingType,
    }).subscribe({
      next: (conv) => {
        this.conv = conv;
        this.convStatus = (conv as any).status ?? 'OPEN';
        this.connectSocket(conv.id);
      },
      error: () => { this.loading = false; },
    });
  }

  setConvStatus(status: 'OPEN' | 'CLOSED'): void {
    if (!this.conv || !this.user) return;
    // Actualiza localmente de inmediato para respuesta instantánea
    this.convStatus = status;
    this.confirmClose = false;
    this.cdr.detectChanges();
    // Notifica al servidor y a los demás participantes
    this.socket.emit('conv:set-status', {
      conversationId: this.conv.id,
      status,
      userId: this.user.id,
    });
    // También persiste vía HTTP como respaldo
    this.http.patch(`${this.base}/conversations/${this.conv.id}/status`, { status }).subscribe();
  }

  private connectSocket(convId: number): void {
    const wsUrl = environment.apiUrl.replace('/api', '');
    this.socket = io(`${wsUrl}/maritime`, { transports: ['websocket'] });

    this.socket.on('connect', () => {
      this.socket.emit('conv:join', { conversationId: convId, userId: this.user?.id });
    });

    this.socket.on('conv:history', (msgs: ChatMsg[]) => {
      this.messages = msgs;
      this.loading = false;
      this.shouldScroll = true;
      this.unreadChange.emit(0);
      this.cdr.detectChanges();
    });

    this.socket.on('conv:message', (msg: ChatMsg) => {
      if (msg.conversationId === convId) {
        this.messages = [...this.messages, msg];
        this.shouldScroll = true;
        // Mark as read immediately if it's from the other person
        if (msg.senderId !== this.user?.id && this.user?.id) {
          this.http.post(`${this.base}/conversations/${convId}/read`, {}).subscribe();
          this.unreadChange.emit(0);
        }
        this.cdr.detectChanges();
      }
    });

    this.socket.on('conv:read', () => {
      this.cdr.detectChanges();
    });

    this.socket.on('conv:status-changed', (data: { conversationId: number; status: 'OPEN' | 'CLOSED' }) => {
      if (data.conversationId === convId) {
        this.convStatus = data.status;
        this.cdr.detectChanges();
      }
    });
  }

  send(): void {
    if (!this.input.trim() || !this.conv || !this.user) return;
    // Si el chat está cerrado, lo reanuda automáticamente antes de enviar
    if (this.convStatus === 'CLOSED') {
      this.setConvStatus('OPEN');
    }
    this.socket.emit('conv:send', {
      conversationId: this.conv.id,
      senderId: this.user.id,
      content: this.input.trim(),
    });
    this.input = '';
  }

  onEnter(e: Event): void {
    if ((e as KeyboardEvent).shiftKey) return;
    e.preventDefault();
    this.send();
  }

  isOwn(msg: ChatMsg): boolean {
    return msg.senderId === this.user?.id;
  }

  senderName(msg: ChatMsg): string {
    if (this.isOwn(msg)) return 'Tú';
    return msg.sender ? `${msg.sender.firstName} ${msg.sender.lastName}` : 'Usuario';
  }

  formatTime(d: string | Date): string {
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit' });
  }
}
