import {
  lookup
} from "./chunk-YL27M2LI.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7NRIB5KE.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  UpperCasePipe,
  ViewChild,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VNQE6XX7.js";

// src/app/shared/components/reservation-chat/reservation-chat.component.ts
var _c0 = ["msgsEnd"];
var _c1 = () => [1, 2, 3];
function ReservationChatComponent_ng_container_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275element(3, "div", 27)(4, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275classProp("flex-row-reverse", i_r2 % 2 === 0);
  }
}
function ReservationChatComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275template(2, ReservationChatComponent_ng_container_16_div_2_Template, 5, 2, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function ReservationChatComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3, " \u{1F4AC} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5, "Sin mensajes a\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 32);
    \u0275\u0275text(7, "Escribe el primer mensaje");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ReservationChatComponent_ng_container_18_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-brand-100", true)("text-brand-700", true)("dark:bg-brand-500/20", true)("dark:text-brand-400", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, (msg_r3.sender == null ? null : msg_r3.sender.firstName == null ? null : msg_r3.sender.firstName[0]) ?? "?"), " ");
  }
}
function ReservationChatComponent_ng_container_18_div_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.senderName(msg_r3), " ");
  }
}
function ReservationChatComponent_ng_container_18_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, (ctx_r3.user == null ? null : ctx_r3.user.firstName == null ? null : ctx_r3.user.firstName[0]) ?? "Y"), " ");
  }
}
function ReservationChatComponent_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, ReservationChatComponent_ng_container_18_div_1_div_1_Template, 3, 11, "div", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275template(3, ReservationChatComponent_ng_container_18_div_1_p_3_Template, 2, 1, "p", 36);
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ReservationChatComponent_ng_container_18_div_1_div_8_Template, 3, 3, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const first_r5 = ctx.first;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("justify-end", ctx_r3.isOwn(msg_r3))("justify-start", !ctx_r3.isOwn(msg_r3))("mt-3", !first_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isOwn(msg_r3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.isOwn(msg_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.isOwn(msg_r3) ? "bg-brand-500 text-white rounded-2xl rounded-br-sm shadow-sm" : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r3.content, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-right", ctx_r3.isOwn(msg_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatTime(msg_r3.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isOwn(msg_r3));
  }
}
function ReservationChatComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReservationChatComponent_ng_container_18_div_1_Template, 9, 14, "div", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.messages);
  }
}
var ReservationChatComponent = class _ReservationChatComponent {
  http = inject(HttpClient);
  auth = inject(AuthService);
  cdr = inject(ChangeDetectorRef);
  base = `${environment.apiUrl}/chat`;
  socket;
  shouldScroll = false;
  bookingId;
  bookingType;
  /** ID del cliente para incluir como participante */
  clientUserId;
  /** ID del proveedor (user) para incluir como participante */
  providerUserId;
  /** Título del panel (ej. nombre del cliente o nro de reserva) */
  title = "";
  closeChat = new EventEmitter();
  /** Emitido cuando cambia el unread count (siempre 0 cuando se abre) */
  unreadChange = new EventEmitter();
  msgsEnd;
  loading = true;
  sending = false;
  input = "";
  messages = [];
  conv = null;
  get user() {
    return this.auth.user();
  }
  ngOnInit() {
    this.initConversation();
  }
  ngOnDestroy() {
    if (this.conv) {
      this.socket?.emit("conv:leave", { conversationId: this.conv.id });
    }
    this.socket?.disconnect();
  }
  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.msgsEnd?.nativeElement?.scrollIntoView({ behavior: "smooth" });
      this.shouldScroll = false;
    }
  }
  initConversation() {
    const participants = [...new Set([this.clientUserId, this.providerUserId].filter(Boolean))];
    this.http.post(`${this.base}/conversations/booking/${this.bookingId}`, {
      participantIds: participants,
      bookingType: this.bookingType
    }).subscribe({
      next: (conv) => {
        this.conv = conv;
        this.connectSocket(conv.id);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  connectSocket(convId) {
    const wsUrl = environment.apiUrl.replace("/api", "");
    this.socket = lookup(`${wsUrl}/maritime`, { transports: ["websocket"] });
    this.socket.on("connect", () => {
      this.socket.emit("conv:join", { conversationId: convId, userId: this.user?.id });
    });
    this.socket.on("conv:history", (msgs) => {
      this.messages = msgs;
      this.loading = false;
      this.shouldScroll = true;
      this.unreadChange.emit(0);
      this.cdr.detectChanges();
    });
    this.socket.on("conv:message", (msg) => {
      if (msg.conversationId === convId) {
        this.messages = [...this.messages, msg];
        this.shouldScroll = true;
        if (msg.senderId !== this.user?.id && this.user?.id) {
          this.http.post(`${this.base}/conversations/${convId}/read`, {}).subscribe();
          this.unreadChange.emit(0);
        }
        this.cdr.detectChanges();
      }
    });
    this.socket.on("conv:read", () => {
      this.cdr.detectChanges();
    });
  }
  send() {
    if (!this.input.trim() || !this.conv || !this.user)
      return;
    this.socket.emit("conv:send", {
      conversationId: this.conv.id,
      senderId: this.user.id,
      content: this.input.trim()
    });
    this.input = "";
  }
  onEnter(e) {
    if (e.shiftKey)
      return;
    e.preventDefault();
    this.send();
  }
  isOwn(msg) {
    return msg.senderId === this.user?.id;
  }
  senderName(msg) {
    if (this.isOwn(msg))
      return "T\xFA";
    return msg.sender ? `${msg.sender.firstName} ${msg.sender.lastName}` : "Usuario";
  }
  formatTime(d) {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleTimeString("es-VE", { hour: "2-digit", minute: "2-digit" });
  }
  static \u0275fac = function ReservationChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservationChatComponent, selectors: [["app-reservation-chat"]], viewQuery: function ReservationChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.msgsEnd = _t.first);
    }
  }, inputs: { bookingId: "bookingId", bookingType: "bookingType", clientUserId: "clientUserId", providerUserId: "providerUserId", title: "title" }, outputs: { closeChat: "closeChat", unreadChange: "unreadChange" }, decls: 29, vars: 12, consts: [["msgsEnd", ""], [1, "fixed", "inset-0", "z-[9999]", "bg-black/50", "md:hidden", 3, "click"], [1, "fixed", "z-[10000]", "flex", "flex-col", "shadow-2xl", "overflow-hidden", "bottom-0", "left-0", "right-0", "h-[85vh]", "rounded-t-2xl", "bg-white", "dark:bg-gray-900", "md:top-4", "md:bottom-4", "md:right-4", "md:left-auto", "md:h-auto", "md:w-[380px]", "md:rounded-2xl", "md:border", "md:border-gray-200", "md:dark:border-gray-700"], [1, "flex", "justify-center", "pt-2", "pb-1", "md:hidden"], [1, "w-10", "h-1", "rounded-full", "bg-gray-300", "dark:bg-gray-600"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "bg-brand-600", "text-white", "flex-shrink-0"], [1, "w-8", "h-8", "rounded-full", "bg-white/20", "flex", "items-center", "justify-center", "flex-shrink-0", "text-base"], [1, "flex-1", "min-w-0"], [1, "font-semibold", "text-sm", "truncate", "leading-tight"], [1, "text-[11px]", "opacity-70", "leading-tight"], [1, "p-1.5", "rounded-lg", "hover:bg-white/20", "transition-colors", "flex-shrink-0", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "px-4", "py-3", "space-y-2", "bg-gray-50", "dark:bg-gray-900/50", 2, "min-height", "0"], [4, "ngIf"], [1, "px-3", "py-2.5", "border-t", "border-gray-200", "dark:border-white/10", "bg-white", "dark:bg-gray-900", "flex-shrink-0"], [1, "flex", "gap-2", "items-end"], ["rows", "1", "placeholder", "Escribe un mensaje...", 1, "flex-1", "resize-none", "rounded-xl", "px-3", "py-2", "text-sm", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-white/10", "text-gray-800", "dark:text-gray-100", "placeholder-gray-400", "focus:outline-none", "focus:border-brand-400", "focus:ring-1", "focus:ring-brand-400/30", "max-h-24", "overflow-y-auto", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "flex-shrink-0", "w-9", "h-9", "rounded-xl", "bg-brand-500", "hover:bg-brand-600", "active:scale-95", "disabled:opacity-40", "disabled:cursor-not-allowed", "text-white", "flex", "items-center", "justify-center", "transition-all", "shadow-sm", 3, "click", "disabled"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "rotate-90"], ["d", "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"], [1, "text-[9px]", "text-gray-400", "mt-1", "text-center"], [1, "flex", "flex-col", "gap-3", "py-4", "animate-pulse"], ["class", "flex gap-2", 3, "flex-row-reverse", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2"], [1, "w-6", "h-6", "rounded-full", "bg-gray-200", "dark:bg-white/10", "flex-shrink-0"], [1, "flex-1", "max-w-[60%]", "space-y-1"], [1, "h-3", "bg-gray-200", "dark:bg-white/10", "rounded", "w-16"], [1, "h-8", "bg-gray-200", "dark:bg-white/10", "rounded"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "min-h-[200px]", "text-center", "py-8", "text-gray-400"], [1, "w-14", "h-14", "rounded-2xl", "bg-brand-50", "dark:bg-brand-500/10", "flex", "items-center", "justify-center", "mb-3", "text-2xl"], [1, "text-sm", "font-semibold", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "mt-1", "text-gray-400"], ["class", "flex gap-2", 3, "justify-end", "justify-start", "mt-3", 4, "ngFor", "ngForOf"], ["class", "w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center self-end text-[10px] font-bold", 3, "bg-brand-100", "text-brand-700", "dark:bg-brand-500/20", "dark:text-brand-400", 4, "ngIf"], [1, "max-w-[72%]"], ["class", "text-[10px] text-gray-400 mb-0.5 ml-1", 4, "ngIf"], [1, "px-3", "py-2", "text-sm", "leading-relaxed", "break-words", 3, "ngClass"], [1, "text-[9px]", "text-gray-400", "mt-0.5", "px-1"], ["class", "w-6 h-6 rounded-full bg-brand-500 flex-shrink-0 flex items-center justify-center self-end text-[10px] font-bold text-white", 4, "ngIf"], [1, "w-6", "h-6", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center", "self-end", "text-[10px]", "font-bold"], [1, "text-[10px]", "text-gray-400", "mb-0.5", "ml-1"], [1, "w-6", "h-6", "rounded-full", "bg-brand-500", "flex-shrink-0", "flex", "items-center", "justify-center", "self-end", "text-[10px]", "font-bold", "text-white"]], template: function ReservationChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function ReservationChatComponent_Template_div_click_0_listener() {
        return ctx.closeChat.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
      \u0275\u0275element(3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function ReservationChatComponent_Template_button_click_12_listener() {
        return ctx.closeChat.emit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 11);
      \u0275\u0275element(14, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275template(16, ReservationChatComponent_ng_container_16_Template, 3, 2, "ng-container", 14)(17, ReservationChatComponent_ng_container_17_Template, 8, 0, "ng-container", 14)(18, ReservationChatComponent_ng_container_18_Template, 2, 1, "ng-container", 14);
      \u0275\u0275element(19, "div", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ReservationChatComponent_Template_textarea_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.input, $event) || (ctx.input = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown.enter", function ReservationChatComponent_Template_textarea_keydown_enter_23_listener($event) {
        return ctx.onEnter($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275listener("click", function ReservationChatComponent_Template_button_click_24_listener() {
        return ctx.send();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 19);
      \u0275\u0275element(26, "path", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "p", 21);
      \u0275\u0275text(28, "Enter para enviar \xB7 Shift+Enter nueva l\xEDnea");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("rounded-t-2xl", true)("md:rounded-2xl", false);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.bookingType === "CHARTER" ? "\u2693" : "\u{1F3DD}\uFE0F", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.title || "Reserva #" + ctx.bookingId, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Chat con ", ctx.bookingType === "CHARTER" ? "el proveedor" : "el operador");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.messages.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.messages.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.input);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.input.trim() || !ctx.conv);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, UpperCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservationChatComponent, [{
    type: Component,
    args: [{ selector: "app-reservation-chat", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Mobile backdrop only -->
<div class="fixed inset-0 z-[9999] bg-black/50 md:hidden" (click)="closeChat.emit()"></div>

<!-- Panel -->
<div class="fixed z-[10000] flex flex-col shadow-2xl overflow-hidden
            bottom-0 left-0 right-0 h-[85vh] rounded-t-2xl bg-white dark:bg-gray-900
            md:top-4 md:bottom-4 md:right-4 md:left-auto md:h-auto md:w-[380px] md:rounded-2xl md:border md:border-gray-200 md:dark:border-gray-700">

  <!-- Drag handle (mobile only) -->
  <div class="flex justify-center pt-2 pb-1 md:hidden">
    <div class="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
  </div>

  <!-- Header -->
  <div class="flex items-center gap-3 px-4 py-3 bg-brand-600 text-white flex-shrink-0"
       [class.rounded-t-2xl]="true" [class.md:rounded-2xl]="false">
    <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-base">
      {{ bookingType === 'CHARTER' ? '\u2693' : '\u{1F3DD}\uFE0F' }}
    </div>
    <div class="flex-1 min-w-0">
      <p class="font-semibold text-sm truncate leading-tight">
        {{ title || ('Reserva #' + bookingId) }}
      </p>
      <p class="text-[11px] opacity-70 leading-tight">Chat con {{ bookingType === 'CHARTER' ? 'el proveedor' : 'el operador' }}</p>
    </div>
    <button class="p-1.5 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
            (click)="closeChat.emit()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>

  <!-- Messages -->
  <div class="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50 dark:bg-gray-900/50"
       style="min-height: 0;">

    <!-- Loading -->
    <ng-container *ngIf="loading">
      <div class="flex flex-col gap-3 py-4 animate-pulse">
        <div *ngFor="let i of [1,2,3]" class="flex gap-2" [class.flex-row-reverse]="i % 2 === 0">
          <div class="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex-shrink-0"></div>
          <div class="flex-1 max-w-[60%] space-y-1">
            <div class="h-3 bg-gray-200 dark:bg-white/10 rounded w-16"></div>
            <div class="h-8 bg-gray-200 dark:bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- Empty -->
    <ng-container *ngIf="!loading && messages.length === 0">
      <div class="flex flex-col items-center justify-center h-full min-h-[200px] text-center py-8 text-gray-400">
        <div class="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-3 text-2xl">
          \u{1F4AC}
        </div>
        <p class="text-sm font-semibold text-gray-600 dark:text-gray-300">Sin mensajes a\xFAn</p>
        <p class="text-xs mt-1 text-gray-400">Escribe el primer mensaje</p>
      </div>
    </ng-container>

    <!-- Messages list -->
    <ng-container *ngIf="!loading && messages.length > 0">
      <div *ngFor="let msg of messages; let first = first"
           class="flex gap-2"
           [class.justify-end]="isOwn(msg)"
           [class.justify-start]="!isOwn(msg)"
           [class.mt-3]="!first">

        <!-- Avatar other -->
        <div *ngIf="!isOwn(msg)"
             class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center self-end text-[10px] font-bold"
             [class.bg-brand-100]="true"
             [class.text-brand-700]="true"
             [class.dark:bg-brand-500/20]="true"
             [class.dark:text-brand-400]="true">
          {{ (msg.sender?.firstName?.[0] ?? '?') | uppercase }}
        </div>

        <!-- Bubble -->
        <div class="max-w-[72%]">
          <p *ngIf="!isOwn(msg)" class="text-[10px] text-gray-400 mb-0.5 ml-1">
            {{ senderName(msg) }}
          </p>
          <div class="px-3 py-2 text-sm leading-relaxed break-words"
               [ngClass]="isOwn(msg)
                 ? 'bg-brand-500 text-white rounded-2xl rounded-br-sm shadow-sm'
                 : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700'">
            {{ msg.content }}
          </div>
          <p class="text-[9px] text-gray-400 mt-0.5 px-1"
             [class.text-right]="isOwn(msg)">
            {{ formatTime(msg.createdAt) }}
          </p>
        </div>

        <!-- Avatar own -->
        <div *ngIf="isOwn(msg)"
             class="w-6 h-6 rounded-full bg-brand-500 flex-shrink-0 flex items-center justify-center self-end text-[10px] font-bold text-white">
          {{ (user?.firstName?.[0] ?? 'Y') | uppercase }}
        </div>
      </div>
    </ng-container>

    <div #msgsEnd></div>
  </div>

  <!-- Input -->
  <div class="px-3 py-2.5 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 flex-shrink-0">
    <div class="flex gap-2 items-end">
      <textarea
        [(ngModel)]="input"
        (keydown.enter)="onEnter($event)"
        rows="1"
        placeholder="Escribe un mensaje..."
        class="flex-1 resize-none rounded-xl px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 max-h-24 overflow-y-auto"
      ></textarea>
      <button
        (click)="send()"
        [disabled]="!input.trim() || !conv"
        class="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shadow-sm">
        <svg class="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
        </svg>
      </button>
    </div>
    <p class="text-[9px] text-gray-400 mt-1 text-center">Enter para enviar \xB7 Shift+Enter nueva l\xEDnea</p>
  </div>

</div>
` }]
  }], null, { bookingId: [{
    type: Input
  }], bookingType: [{
    type: Input
  }], clientUserId: [{
    type: Input
  }], providerUserId: [{
    type: Input
  }], title: [{
    type: Input
  }], closeChat: [{
    type: Output
  }], unreadChange: [{
    type: Output
  }], msgsEnd: [{
    type: ViewChild,
    args: ["msgsEnd"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservationChatComponent, { className: "ReservationChatComponent", filePath: "src/app/shared/components/reservation-chat/reservation-chat.component.ts", lineNumber: 38 });
})();

export {
  ReservationChatComponent
};
//# sourceMappingURL=chunk-RVJMCZTW.js.map
