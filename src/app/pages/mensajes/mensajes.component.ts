import {
  Component, OnInit, OnDestroy, inject, ViewChild, ElementRef,
  AfterViewChecked, ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth-pages/services/auth.service';

export type ConvType = 'SUPPORT' | 'BOOKING' | 'DIRECT';

interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl?: string | null;
}

interface Conversation {
  id: number;
  type: ConvType;
  bookingId?: number;
  participantIds: number[];
  participants: Participant[];
  lastMessage?: string;
  lastSenderId?: number;
  updatedAt: string;
}

interface ChatMsg {
  id?: number;
  conversationId: number;
  senderId: number;
  sender?: { id: number; firstName: string; lastName: string };
  content: string;
  createdAt: string | Date;
}

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensajes.component.html',
})
export class MensajesComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly base = `${environment.apiUrl}/chat`;
  private socket!: Socket;

  @ViewChild('msgsEnd') msgsEnd?: ElementRef;

  get user()     { return this.auth.user(); }
  get isMaster() { return ['MASTER', 'ADMINISTRADOR'].includes(this.auth.role() ?? ''); }

  loading = true;
  conversations: Conversation[] = [];
  selected: Conversation | null = null;
  messages: ChatMsg[] = [];
  loadingMsgs = false;
  input = '';
  sending = false;

  ngOnInit(): void {
    this.loadConversations();
    this.connectSocket();

    // Si viene con ?bookingId=X o ?convId=X desde la página de reservas
    this.route.queryParams.subscribe(params => {
      const convId = params['convId'];
      if (convId) {
        // Esperar a que carguen las conversaciones, luego seleccionar
        const timer = setInterval(() => {
          const conv = this.conversations.find(c => c.id === +convId);
          if (conv) { this.selectConv(conv); clearInterval(timer); }
        }, 300);
        setTimeout(() => clearInterval(timer), 5000);
      }
    });
  }

  ngOnDestroy(): void {
    this.socket?.disconnect();
  }

  ngAfterViewChecked(): void {
    this.msgsEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }

  // ── Data ────────────────────────────────────────────────────────────────────

  loadConversations(): void {
    this.loading = true;
    this.http.get<Conversation[]>(`${this.base}/conversations`).subscribe({
      next: (c) => { this.conversations = c; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  selectConv(conv: Conversation): void {
    if (this.selected) {
      this.socket.emit('conv:leave', { conversationId: this.selected.id });
    }
    this.selected = conv;
    this.messages = [];
    this.loadingMsgs = true;
    this.socket.emit('conv:join', { conversationId: conv.id });
  }

  // ── Socket ──────────────────────────────────────────────────────────────────

  private connectSocket(): void {
    const wsUrl = environment.apiUrl.replace('/api', '');
    this.socket = io(`${wsUrl}/maritime`, { transports: ['websocket'] });

    this.socket.on('conv:history', (msgs: ChatMsg[]) => {
      this.messages = msgs;
      this.loadingMsgs = false;
      this.cdr.detectChanges();
    });

    this.socket.on('conv:message', (msg: ChatMsg) => {
      if (msg.conversationId === this.selected?.id) {
        this.messages = [...this.messages, msg];
      }
      // Actualiza preview en lista
      const conv = this.conversations.find(c => c.id === msg.conversationId);
      if (conv) {
        conv.lastMessage = msg.content;
        conv.lastSenderId = msg.senderId;
        conv.updatedAt = new Date().toISOString();
        this.conversations = [conv, ...this.conversations.filter(c => c.id !== conv.id)];
      }
      this.cdr.detectChanges();
    });
  }

  // ── Actions ─────────────────────────────────────────────────────────────────

  send(): void {
    if (!this.input.trim() || !this.selected || !this.user) return;
    this.socket.emit('conv:send', {
      conversationId: this.selected.id,
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

  /** Abrir/crear conversación de soporte */
  openSupport(): void {
    this.http.post<Conversation>(`${this.base}/conversations/support`, {}).subscribe({
      next: (conv) => {
        const exists = this.conversations.find(c => c.id === conv.id);
        if (!exists) this.conversations = [conv, ...this.conversations];
        this.selectConv(conv);
      },
    });
  }

  // ── Display helpers ─────────────────────────────────────────────────────────

  convTitle(c: Conversation): string {
    if (c.type === 'SUPPORT') {
      if (this.isMaster) {
        // El master ve el nombre del cliente/proveedor que abrió el chat
        const client = c.participants?.[0];
        return client ? `${client.firstName} ${client.lastName}` : '🎧 Chat de soporte';
      }
      return '🎧 Soporte MARITIMO';
    }
    if (c.type === 'BOOKING') return `⚓ Reserva #${c.bookingId}`;
    const other = c.participants?.find(p => p.id !== this.user?.id);
    return other ? `${other.firstName} ${other.lastName}` : 'Chat directo';
  }

  convSubtitle(c: Conversation): string {
    if (c.type === 'SUPPORT') {
      if (this.isMaster) {
        const client = c.participants?.[0];
        return client ? `Soporte · ${client.firstName}` : 'Chat de soporte';
      }
      return 'Atención al cliente';
    }
    if (c.type === 'BOOKING') return 'Chat de reserva';
    const other = c.participants?.find(p => p.id !== this.user?.id);
    return other ? 'Conversación privada' : 'Chat directo';
  }

  convIcon(c: Conversation): string {
    if (c.type === 'SUPPORT') return '🎧';
    if (c.type === 'BOOKING') return '⚓';
    return '💬';
  }

  isOwnMsg(msg: ChatMsg): boolean {
    return msg.senderId === this.user?.id;
  }

  senderName(msg: ChatMsg): string {
    if (this.isOwnMsg(msg)) return 'Tú';
    return msg.sender ? `${msg.sender.firstName} ${msg.sender.lastName}` : 'Usuario';
  }
}
