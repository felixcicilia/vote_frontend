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
  ActivatedRoute
} from "./chunk-DNRCO4H6.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VNQE6XX7.js";
import "./chunk-XWLXMCJQ.js";

// src/app/pages/mensajes/mensajes.component.ts
var _c0 = ["msgsEnd"];
var _c1 = () => [1, 2, 3];
function MensajesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function MensajesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MensajesComponent_div_10_div_1_Template, 1, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function MensajesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, "Sin conversaciones todav\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
function MensajesComponent_button_13_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.lastMessage);
  }
}
function MensajesComponent_button_13_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Sin mensajes");
    \u0275\u0275elementEnd();
  }
}
function MensajesComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MensajesComponent_button_13_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConv(c_r2));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "p", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MensajesComponent_button_13_p_6_Template, 2, 1, "p", 25)(7, MensajesComponent_button_13_p_7_Template, 2, 0, "p", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-brand-50", (ctx_r2.selected == null ? null : ctx_r2.selected.id) === c_r2.id)("dark:bg-brand-500/10", (ctx_r2.selected == null ? null : ctx_r2.selected.id) === c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r2.type === "SUPPORT" ? "bg-brand-100 dark:bg-brand-500/20" : c_r2.type === "BOOKING" ? "bg-blue-100 dark:bg-blue-500/20" : "bg-gray-100 dark:bg-white/[0.06]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.convIcon(c_r2), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.convTitle(c_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r2.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", c_r2.type === "SUPPORT" ? "bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300" : c_r2.type === "BOOKING" ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.type, " ");
  }
}
function MensajesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4, "Selecciona una conversaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, 'o pulsa "Contactar soporte" para abrir un nuevo chat');
    \u0275\u0275elementEnd()();
  }
}
function MensajesComponent_ng_container_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p", 45);
    \u0275\u0275text(2, "Cargando mensajes\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MensajesComponent_ng_container_16_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p", 46);
    \u0275\u0275text(2, "Sin mensajes a\xFAn. \xA1S\xE9 el primero en escribir!");
    \u0275\u0275elementEnd()();
  }
}
function MensajesComponent_ng_container_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("flex-row-reverse", ctx_r2.isOwnMsg(m_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isOwnMsg(m_r5) ? "bg-brand-500 text-white" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isOwnMsg(m_r5) ? (ctx_r2.user == null ? null : ctx_r2.user.firstName == null ? null : ctx_r2.user.firstName.charAt(0)) ?? "T" : (m_r5.sender == null ? null : m_r5.sender.firstName == null ? null : m_r5.sender.firstName.charAt(0)) ?? "?", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.isOwnMsg(m_r5) ? "rounded-tr-sm bg-brand-500 text-white" : "rounded-tl-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white/90");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r5.content, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-right", ctx_r2.isOwnMsg(m_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.senderName(m_r5), " \xB7 ", \u0275\u0275pipeBind2(8, 10, m_r5.createdAt, "HH:mm"), " ");
  }
}
function MensajesComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275template(10, MensajesComponent_ng_container_16_div_10_Template, 3, 0, "div", 37)(11, MensajesComponent_ng_container_16_div_11_Template, 3, 0, "div", 37)(12, MensajesComponent_ng_container_16_div_12_Template, 9, 13, "div", 38);
    \u0275\u0275element(13, "div", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 39)(16, "div", 40)(17, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function MensajesComponent_ng_container_16_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.input, $event) || (ctx_r2.input = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function MensajesComponent_ng_container_16_Template_textarea_keydown_enter_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEnter($event));
    });
    \u0275\u0275text(18, "          ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 42);
    \u0275\u0275listener("click", function MensajesComponent_ng_container_16_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.send());
    });
    \u0275\u0275text(20, " \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 43);
    \u0275\u0275text(22, "Enter para enviar \xB7 Shift+Enter para nueva l\xEDnea");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.selected.type === "SUPPORT" ? "bg-brand-100 dark:bg-brand-500/20" : ctx_r2.selected.type === "BOOKING" ? "bg-blue-100 dark:bg-blue-500/20" : "bg-gray-100 dark:bg-white/[0.06]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.convIcon(ctx_r2.selected), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.convTitle(ctx_r2.selected));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.convSubtitle(ctx_r2.selected));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loadingMsgs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingMsgs && ctx_r2.messages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.messages);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.input);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.input.trim());
  }
}
var MensajesComponent = class _MensajesComponent {
  http = inject(HttpClient);
  auth = inject(AuthService);
  route = inject(ActivatedRoute);
  cdr = inject(ChangeDetectorRef);
  base = `${environment.apiUrl}/chat`;
  socket;
  msgsEnd;
  get user() {
    return this.auth.user();
  }
  get isMaster() {
    return ["MASTER", "ADMINISTRADOR"].includes(this.auth.role() ?? "");
  }
  loading = true;
  conversations = [];
  selected = null;
  messages = [];
  loadingMsgs = false;
  input = "";
  sending = false;
  ngOnInit() {
    this.loadConversations();
    this.connectSocket();
    this.route.queryParams.subscribe((params) => {
      const convId = params["convId"];
      if (convId) {
        const timer = setInterval(() => {
          const conv = this.conversations.find((c) => c.id === +convId);
          if (conv) {
            this.selectConv(conv);
            clearInterval(timer);
          }
        }, 300);
        setTimeout(() => clearInterval(timer), 5e3);
      }
    });
  }
  ngOnDestroy() {
    this.socket?.disconnect();
  }
  ngAfterViewChecked() {
    this.msgsEnd?.nativeElement?.scrollIntoView({ behavior: "smooth" });
  }
  // ── Data ────────────────────────────────────────────────────────────────────
  loadConversations() {
    this.loading = true;
    this.http.get(`${this.base}/conversations`).subscribe({
      next: (c) => {
        this.conversations = c;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  selectConv(conv) {
    if (this.selected) {
      this.socket.emit("conv:leave", { conversationId: this.selected.id });
    }
    this.selected = conv;
    this.messages = [];
    this.loadingMsgs = true;
    this.socket.emit("conv:join", { conversationId: conv.id });
  }
  // ── Socket ──────────────────────────────────────────────────────────────────
  connectSocket() {
    const wsUrl = environment.apiUrl.replace("/api", "");
    this.socket = lookup(`${wsUrl}/maritime`, { transports: ["websocket"] });
    this.socket.on("conv:history", (msgs) => {
      this.messages = msgs;
      this.loadingMsgs = false;
      this.cdr.detectChanges();
    });
    this.socket.on("conv:message", (msg) => {
      if (msg.conversationId === this.selected?.id) {
        this.messages = [...this.messages, msg];
      }
      const conv = this.conversations.find((c) => c.id === msg.conversationId);
      if (conv) {
        conv.lastMessage = msg.content;
        conv.lastSenderId = msg.senderId;
        conv.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
        this.conversations = [conv, ...this.conversations.filter((c) => c.id !== conv.id)];
      }
      this.cdr.detectChanges();
    });
  }
  // ── Actions ─────────────────────────────────────────────────────────────────
  send() {
    if (!this.input.trim() || !this.selected || !this.user)
      return;
    this.socket.emit("conv:send", {
      conversationId: this.selected.id,
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
  /** Abrir/crear conversación de soporte */
  openSupport() {
    this.http.post(`${this.base}/conversations/support`, {}).subscribe({
      next: (conv) => {
        const exists = this.conversations.find((c) => c.id === conv.id);
        if (!exists)
          this.conversations = [conv, ...this.conversations];
        this.selectConv(conv);
      }
    });
  }
  // ── Display helpers ─────────────────────────────────────────────────────────
  convTitle(c) {
    if (c.type === "SUPPORT") {
      if (this.isMaster) {
        const client = c.participants?.[0];
        return client ? `${client.firstName} ${client.lastName}` : "\u{1F3A7} Chat de soporte";
      }
      return "\u{1F3A7} Soporte MARITIMO";
    }
    if (c.type === "BOOKING")
      return `\u2693 Reserva #${c.bookingId}`;
    const other = c.participants?.find((p) => p.id !== this.user?.id);
    return other ? `${other.firstName} ${other.lastName}` : "Chat directo";
  }
  convSubtitle(c) {
    if (c.type === "SUPPORT") {
      if (this.isMaster) {
        const client = c.participants?.[0];
        return client ? `Soporte \xB7 ${client.firstName}` : "Chat de soporte";
      }
      return "Atenci\xF3n al cliente";
    }
    if (c.type === "BOOKING")
      return "Chat de reserva";
    const other = c.participants?.find((p) => p.id !== this.user?.id);
    return other ? "Conversaci\xF3n privada" : "Chat directo";
  }
  convIcon(c) {
    if (c.type === "SUPPORT")
      return "\u{1F3A7}";
    if (c.type === "BOOKING")
      return "\u2693";
    return "\u{1F4AC}";
  }
  isOwnMsg(msg) {
    return msg.senderId === this.user?.id;
  }
  senderName(msg) {
    if (this.isOwnMsg(msg))
      return "T\xFA";
    return msg.sender ? `${msg.sender.firstName} ${msg.sender.lastName}` : "Usuario";
  }
  static \u0275fac = function MensajesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MensajesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MensajesComponent, selectors: [["app-mensajes"]], viewQuery: function MensajesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.msgsEnd = _t.first);
    }
  }, decls: 17, vars: 7, consts: [["msgsEnd", ""], [1, "flex", "h-[calc(100vh-140px)]", "gap-0", "overflow-hidden", "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "w-72", "flex-shrink-0", "flex-col", "border-r", "border-gray-100", "dark:border-gray-800"], [1, "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "border-b", "border-gray-100", "px-4", "py-3", "dark:border-gray-800"], [1, "w-full", "rounded-xl", "bg-brand-500", "px-4", "py-2", "text-xs", "font-bold", "text-white", "hover:bg-brand-600", "transition", 3, "click"], ["class", "flex-1 space-y-2 p-4", 4, "ngIf"], ["class", "flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center", 4, "ngIf"], [1, "flex-1", "overflow-y-auto"], ["class", "flex w-full items-start gap-3 border-b border-gray-50 px-4 py-3.5 text-left transition hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-white/[0.02]", 3, "bg-brand-50", "dark:bg-brand-500/10", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-1", "flex-col"], ["class", "flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center", 4, "ngIf"], [4, "ngIf"], [1, "flex-1", "space-y-2", "p-4"], ["class", "h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-white/[0.04]", 4, "ngFor", "ngForOf"], [1, "h-16", "animate-pulse", "rounded-xl", "bg-gray-100", "dark:bg-white/[0.04]"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3", "p-8", "text-center"], [1, "text-4xl"], [1, "text-sm", "text-gray-400"], [1, "flex", "w-full", "items-start", "gap-3", "border-b", "border-gray-50", "px-4", "py-3.5", "text-left", "transition", "hover:bg-gray-50", "dark:border-gray-800/50", "dark:hover:bg-white/[0.02]", 3, "click"], [1, "flex", "h-10", "w-10", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "text-lg", 3, "ngClass"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], ["class", "mt-0.5 truncate text-xs text-gray-400", 4, "ngIf"], ["class", "mt-0.5 text-xs text-gray-400 italic", 4, "ngIf"], [1, "mt-1", "flex-shrink-0", "rounded-full", "px-1.5", "py-0.5", "text-[9px]", "font-bold", "uppercase", 3, "ngClass"], [1, "mt-0.5", "truncate", "text-xs", "text-gray-400"], [1, "mt-0.5", "text-xs", "text-gray-400", "italic"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-4", "p-10", "text-center"], [1, "text-6xl"], [1, "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "flex", "items-center", "gap-4", "border-b", "border-gray-100", "px-6", "py-4", "dark:border-gray-800"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "text-xl", 3, "ngClass"], [1, "text-xs", "text-gray-400"], [1, "flex", "flex-1", "flex-col", "gap-3", "overflow-y-auto", "p-5"], ["class", "flex flex-1 items-center justify-center", 4, "ngIf"], ["class", "flex gap-2", 3, "flex-row-reverse", 4, "ngFor", "ngForOf"], [1, "border-t", "border-gray-100", "p-4", "dark:border-gray-800"], [1, "flex", "gap-3"], ["rows", "2", "placeholder", "Escribe tu mensaje\u2026", 1, "flex-1", "resize-none", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "px-4", "py-2.5", "text-sm", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:bg-gray-800", "dark:text-white", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "self-end", "rounded-xl", "bg-brand-500", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "hover:bg-brand-600", "disabled:opacity-40", "transition", 3, "click", "disabled"], [1, "mt-1", "text-[10px]", "text-gray-400"], [1, "flex", "flex-1", "items-center", "justify-center"], [1, "text-sm", "text-gray-400", "animate-pulse"], [1, "text-center", "text-sm", "text-gray-400"], [1, "flex", "gap-2"], [1, "flex", "h-8", "w-8", "flex-shrink-0", "items-center", "justify-center", "rounded-full", "text-xs", "font-bold", 3, "ngClass"], [1, "max-w-[70%]"], [1, "rounded-2xl", "px-4", "py-2.5", "text-sm", 3, "ngClass"]], template: function MensajesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4, "\u{1F4AC} Mensajes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function MensajesComponent_Template_button_click_8_listener() {
        return ctx.openSupport();
      });
      \u0275\u0275text(9, " \u{1F3A7} Contactar soporte ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MensajesComponent_div_10_Template, 2, 2, "div", 8)(11, MensajesComponent_div_11_Template, 5, 0, "div", 9);
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275template(13, MensajesComponent_button_13_Template, 10, 11, "button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12);
      \u0275\u0275template(15, MensajesComponent_div_15_Template, 7, 0, "div", 13)(16, MensajesComponent_ng_container_16_Template, 23, 9, "ng-container", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.conversations.length, " conversaci\xF3n", ctx.conversations.length !== 1 ? "es" : "");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.conversations.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.conversations);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selected);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MensajesComponent, [{
    type: Component,
    args: [{ selector: "app-mensajes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="flex h-[calc(100vh-140px)] gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

  <!-- \u2500\u2500 Sidebar: lista de conversaciones \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="flex w-72 flex-shrink-0 flex-col border-r border-gray-100 dark:border-gray-800">

    <!-- Cabecera -->
    <div class="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h1 class="font-bold text-gray-800 dark:text-white/90">\u{1F4AC} Mensajes</h1>
      <p class="mt-0.5 text-xs text-gray-400">{{ conversations.length }} conversaci\xF3n{{ conversations.length !== 1 ? 'es' : '' }}</p>
    </div>

    <!-- Bot\xF3n nueva conversaci\xF3n de soporte -->
    <div class="border-b border-gray-100 px-4 py-3 dark:border-gray-800">
      <button (click)="openSupport()"
        class="w-full rounded-xl bg-brand-500 px-4 py-2 text-xs font-bold text-white hover:bg-brand-600 transition">
        \u{1F3A7} Contactar soporte
      </button>
    </div>

    <!-- Skeleton -->
    <div *ngIf="loading" class="flex-1 space-y-2 p-4">
      <div *ngFor="let _ of [1,2,3]" class="h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-white/[0.04]"></div>
    </div>

    <!-- Sin conversaciones -->
    <div *ngIf="!loading && conversations.length === 0"
      class="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
      <div class="text-4xl">\u{1F4AC}</div>
      <p class="text-sm text-gray-400">Sin conversaciones todav\xEDa.</p>
    </div>

    <!-- Lista -->
    <div class="flex-1 overflow-y-auto">
      <button *ngFor="let c of conversations"
        (click)="selectConv(c)"
        class="flex w-full items-start gap-3 border-b border-gray-50 px-4 py-3.5 text-left transition hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-white/[0.02]"
        [class.bg-brand-50]="selected?.id === c.id"
        [class.dark:bg-brand-500/10]="selected?.id === c.id">

        <!-- Icono tipo -->
        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg"
          [ngClass]="c.type === 'SUPPORT' ? 'bg-brand-100 dark:bg-brand-500/20' : c.type === 'BOOKING' ? 'bg-blue-100 dark:bg-blue-500/20' : 'bg-gray-100 dark:bg-white/[0.06]'">
          {{ convIcon(c) }}
        </div>

        <!-- Info -->
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-gray-800 dark:text-white/90">{{ convTitle(c) }}</p>
          <p *ngIf="c.lastMessage" class="mt-0.5 truncate text-xs text-gray-400">{{ c.lastMessage }}</p>
          <p *ngIf="!c.lastMessage" class="mt-0.5 text-xs text-gray-400 italic">Sin mensajes</p>
        </div>

        <!-- Badge tipo -->
        <span class="mt-1 flex-shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase"
          [ngClass]="c.type === 'SUPPORT' ? 'bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300' :
                     c.type === 'BOOKING' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300' :
                     'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'">
          {{ c.type }}
        </span>
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 Panel principal: chat \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="flex flex-1 flex-col">

    <!-- Sin conversaci\xF3n seleccionada -->
    <div *ngIf="!selected" class="flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center">
      <div class="text-6xl">\u{1F4AC}</div>
      <p class="font-semibold text-gray-700 dark:text-gray-300">Selecciona una conversaci\xF3n</p>
      <p class="text-sm text-gray-400">o pulsa "Contactar soporte" para abrir un nuevo chat</p>
    </div>

    <!-- Conversaci\xF3n activa -->
    <ng-container *ngIf="selected">

      <!-- Header -->
      <div class="flex items-center gap-4 border-b border-gray-100 px-6 py-4 dark:border-gray-800">
        <div class="flex h-10 w-10 items-center justify-center rounded-full text-xl"
          [ngClass]="selected.type === 'SUPPORT' ? 'bg-brand-100 dark:bg-brand-500/20' :
                     selected.type === 'BOOKING' ? 'bg-blue-100 dark:bg-blue-500/20' :
                     'bg-gray-100 dark:bg-white/[0.06]'">
          {{ convIcon(selected) }}
        </div>
        <div>
          <p class="font-bold text-gray-800 dark:text-white/90">{{ convTitle(selected) }}</p>
          <p class="text-xs text-gray-400">{{ convSubtitle(selected) }}</p>
        </div>
      </div>

      <!-- Mensajes -->
      <div class="flex flex-1 flex-col gap-3 overflow-y-auto p-5">
        <div *ngIf="loadingMsgs" class="flex flex-1 items-center justify-center">
          <p class="text-sm text-gray-400 animate-pulse">Cargando mensajes\u2026</p>
        </div>

        <div *ngIf="!loadingMsgs && messages.length === 0"
          class="flex flex-1 items-center justify-center">
          <p class="text-center text-sm text-gray-400">Sin mensajes a\xFAn. \xA1S\xE9 el primero en escribir!</p>
        </div>

        <div *ngFor="let m of messages"
          class="flex gap-2"
          [class.flex-row-reverse]="isOwnMsg(m)">

          <!-- Avatar -->
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
            [ngClass]="isOwnMsg(m)
              ? 'bg-brand-500 text-white'
              : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'">
            {{ isOwnMsg(m) ? (user?.firstName?.charAt(0) ?? 'T') : (m.sender?.firstName?.charAt(0) ?? '?') }}
          </div>

          <!-- Burbuja -->
          <div class="max-w-[70%]">
            <div class="rounded-2xl px-4 py-2.5 text-sm"
              [ngClass]="isOwnMsg(m)
                ? 'rounded-tr-sm bg-brand-500 text-white'
                : 'rounded-tl-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white/90'">
              {{ m.content }}
            </div>
            <p class="mt-1 text-[10px] text-gray-400"
              [class.text-right]="isOwnMsg(m)">
              {{ senderName(m) }} \xB7 {{ m.createdAt | date:'HH:mm' }}
            </p>
          </div>
        </div>

        <div #msgsEnd></div>
      </div>

      <!-- Input -->
      <div class="border-t border-gray-100 p-4 dark:border-gray-800">
        <div class="flex gap-3">
          <textarea [(ngModel)]="input"
            rows="2"
            placeholder="Escribe tu mensaje\u2026"
            (keydown.enter)="onEnter($event)"
            class="flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          </textarea>
          <button (click)="send()" [disabled]="!input.trim()"
            class="self-end rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-40 transition">
            \u2192
          </button>
        </div>
        <p class="mt-1 text-[10px] text-gray-400">Enter para enviar \xB7 Shift+Enter para nueva l\xEDnea</p>
      </div>

    </ng-container>
  </div>
</div>
` }]
  }], null, { msgsEnd: [{
    type: ViewChild,
    args: ["msgsEnd"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MensajesComponent, { className: "MensajesComponent", filePath: "src/app/pages/mensajes/mensajes.component.ts", lineNumber: 48 });
})();
export {
  MensajesComponent
};
//# sourceMappingURL=chunk-D2DU3NQA.js.map
