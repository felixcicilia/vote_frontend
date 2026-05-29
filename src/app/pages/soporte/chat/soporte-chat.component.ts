import { Component, OnInit, OnDestroy, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../auth-pages/services/auth.service';

interface ChatMsg {
  userId: number;
  userName: string;
  message: string;
  isFromSupport: boolean;
  timestamp: Date | string;
  room?: string;
}

interface ChatSession {
  userId: number;
  userName: string;
  room: string;
  lastMsg?: string;
  unread: number;
  timestamp: Date | string;
}

@Component({
  selector: 'app-soporte-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soporte-chat.component.html',
})
export class SoporteChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly auth = inject(AuthService);
  private socket!: Socket;

  @ViewChild('messagesEnd') messagesEnd?: ElementRef;

  get user()     { return this.auth.user(); }
  get isMaster() { return this.auth.role() === 'MASTER' || this.auth.role() === 'ADMINISTRADOR'; }
  get isClient() { return this.auth.role() === 'CLIENTE'; }

  // Estado cliente
  connected = false;
  clientMessages: ChatMsg[] = [];
  clientInput = '';
  chatClosed = false;
  room = '';

  // Estado agente (master)
  sessions: ChatSession[] = [];
  activeSession: ChatSession | null = null;
  sessionMessages: Map<string, ChatMsg[]> = new Map();
  agentInput = '';
  agentReady = false;

  ngOnInit(): void {
    const wsUrl = environment.apiUrl.replace('/api', '');
    this.socket = io(`${wsUrl}/maritime`, { transports: ['websocket'] });

    if (this.isClient) this.initClient();
    else if (this.isMaster) this.initAgent();
  }

  ngOnDestroy(): void { this.socket?.disconnect(); }

  ngAfterViewChecked(): void {
    this.messagesEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }

  // ── CLIENTE ────────────────────────────────────────────────────────────────
  private initClient(): void {
    const user = this.user!;
    this.room = `chat:${user.id}`;

    const joinFn = () => {
      this.socket.emit('chat:join', { userId: user.id, userName: `${user.firstName} ${user.lastName}` });
    };

    if (this.socket.connected) {
      joinFn();
    } else {
      this.socket.on('connect', joinFn);
    }

    this.socket.on('chat:joined', () => { this.connected = true; });

    this.socket.on('chat:message', (msg: ChatMsg) => {
      this.clientMessages = [...this.clientMessages, msg];
    });

    this.socket.on('chat:closed', () => { this.chatClosed = true; });
  }

  sendClientMsg(): void {
    if (!this.clientInput.trim() || this.chatClosed) return;
    const msg: ChatMsg = {
      room: this.room,
      userId: this.user!.id,
      userName: `${this.user!.firstName} ${this.user!.lastName}`,
      message: this.clientInput.trim(),
      isFromSupport: false,
      timestamp: new Date(),
    };
    this.socket.emit('chat:message', msg);
    this.clientInput = '';
  }

  // ── AGENTE (MASTER) ────────────────────────────────────────────────────────
  private initAgent(): void {
    const joinFn = () => { this.socket.emit('chat:agent-join'); };
    if (this.socket.connected) {
      joinFn();
    } else {
      this.socket.on('connect', joinFn);
    }
    this.socket.on('chat:agent-ready', () => { this.agentReady = true; });

    this.socket.on('chat:new-session', (payload: ChatSession) => {
      const exists = this.sessions.find(s => s.userId === payload.userId);
      if (!exists) {
        this.sessions = [{ ...payload, unread: 1 }, ...this.sessions];
        this.sessionMessages.set(payload.room, []);
      }
    });

    this.socket.on('chat:message', (msg: ChatMsg) => {
      if (!msg.room) return;
      const msgs = this.sessionMessages.get(msg.room) ?? [];
      this.sessionMessages.set(msg.room, [...msgs, msg]);
      if (!msg.isFromSupport) {
        const s = this.sessions.find(s => s.room === msg.room);
        if (s) {
          s.lastMsg = msg.message;
          s.unread = this.activeSession?.room === msg.room ? 0 : (s.unread + 1);
          this.sessions = [...this.sessions];
        }
      }
    });

    this.socket.on('chat:session-closed', ({ userId }: { userId: number }) => {
      this.sessions = this.sessions.filter(s => s.userId !== userId);
      if (this.activeSession?.userId === userId) this.activeSession = null;
    });
  }

  selectSession(s: ChatSession): void {
    this.activeSession = s;
    s.unread = 0;
    this.sessions = [...this.sessions];
    this.socket.emit('chat:agent-join-room', { room: s.room });
  }

  sendAgentMsg(): void {
    if (!this.agentInput.trim() || !this.activeSession) return;
    const user = this.user!;
    const msg: ChatMsg = {
      room: this.activeSession.room,
      userId: user.id,
      userName: `Soporte · ${user.firstName}`,
      message: this.agentInput.trim(),
      isFromSupport: true,
      timestamp: new Date(),
    };
    this.socket.emit('chat:message', msg);
    this.agentInput = '';
  }

  closeSession(s: ChatSession): void {
    this.socket.emit('chat:close', { room: s.room, userId: s.userId });
    this.sessions = this.sessions.filter(x => x.userId !== s.userId);
    if (this.activeSession?.userId === s.userId) this.activeSession = null;
  }

  get activeMessages(): ChatMsg[] {
    if (!this.activeSession) return [];
    return this.sessionMessages.get(this.activeSession.room) ?? [];
  }
}
