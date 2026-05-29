import {
  TicketsService
} from "./chunk-4C5T4XRR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X6ED7CSN.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6L3J4MHE.js";

// src/app/pages/tickets/pages/lista-tickets/lista-tickets.component.ts
var _c0 = (a0) => ["/tickets", a0];
function ListaTicketsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Cargando tickets...");
    \u0275\u0275elementEnd();
  }
}
function ListaTicketsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ListaTicketsComponent_div_23_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 23)(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 34)(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 36)(13, "a", 37);
    \u0275\u0275text(14, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", t_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r3.client.firstName, " ", t_r3.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.seats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", t_r3.totalPrice);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClase(t_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(t_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, t_r3.id));
  }
}
function ListaTicketsComponent_div_23_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No se encontraron tickets.");
    \u0275\u0275elementEnd()();
  }
}
function ListaTicketsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h3", 19);
    \u0275\u0275text(3, "Lista de tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "table", 22)(8, "thead")(9, "tr", 23)(10, "th", 24);
    \u0275\u0275text(11, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Asientos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 24);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 24);
    \u0275\u0275text(19, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21, "Detalle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ListaTicketsComponent_div_23_tr_23_Template, 15, 10, "tr", 26)(24, ListaTicketsComponent_div_23_tr_24_Template, 3, 0, "tr", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 28)(26, "p", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 29)(29, "button", 30);
    \u0275\u0275listener("click", function ListaTicketsComponent_div_23_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page - 1));
    });
    \u0275\u0275text(30, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275listener("click", function ListaTicketsComponent_div_23_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPagina(ctx_r0.page + 1));
    });
    \u0275\u0275text(32, "Siguiente");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.rangoInicio, "-", ctx_r0.rangoFin, " de ", ctx_r0.total);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.paginados)("ngForTrackBy", ctx_r0.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginados.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r0.page, " de ", ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === ctx_r0.totalPages || ctx_r0.total === 0);
  }
}
var ListaTicketsComponent = class _ListaTicketsComponent {
  service = inject(TicketsService);
  loading = false;
  errorMessage = "";
  tickets = [];
  filtrados = [];
  paginados = [];
  search = "";
  filtroEstado = "";
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 0;
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.tickets = data ?? [];
        this.aplicarFiltros();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "No se pudo cargar los tickets.";
        this.loading = false;
      }
    });
  }
  aplicarFiltros() {
    const t = this.search.trim().toLowerCase();
    this.filtrados = this.tickets.filter((tk) => {
      const busqueda = tk.qrCode.toLowerCase().includes(t) || tk.client.firstName.toLowerCase().includes(t) || tk.client.lastName.toLowerCase().includes(t);
      const estado = !this.filtroEstado || tk.status === this.filtroEstado;
      return busqueda && estado;
    });
    this.total = this.filtrados.length;
    this.totalPages = Math.max(1, Math.ceil(this.total / this.limit));
    if (this.page > this.totalPages)
      this.page = this.totalPages;
    this.paginados = this.filtrados.slice((this.page - 1) * this.limit, this.page * this.limit);
  }
  onSearchChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  onFilterChange() {
    this.page = 1;
    this.aplicarFiltros();
  }
  cambiarPagina(p) {
    if (p >= 1 && p <= this.totalPages) {
      this.page = p;
      this.aplicarFiltros();
    }
  }
  statusClase(s) {
    const map = {
      PENDING: "bg-yellow-100 text-yellow-700",
      CONFIRMED: "bg-blue-100 text-blue-700",
      USED: "bg-green-100 text-green-700",
      CANCELLED: "bg-red-100 text-red-700"
    };
    return map[s] ?? "bg-gray-100 text-gray-600";
  }
  statusLabel(s) {
    const map = {
      PENDING: "Pendiente",
      CONFIRMED: "Confirmado",
      USED: "Usado",
      CANCELLED: "Cancelado"
    };
    return map[s] ?? s;
  }
  get rangoInicio() {
    return this.total === 0 ? 0 : (this.page - 1) * this.limit + 1;
  }
  get rangoFin() {
    return Math.min(this.page * this.limit, this.total);
  }
  trackById(_, t) {
    return t.id;
  }
  static \u0275fac = function ListaTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaTicketsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaTicketsComponent, selectors: [["app-lista-tickets"]], decls: 24, vars: 5, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-col", "gap-4", "lg:flex-row"], ["type", "text", "placeholder", "Buscar por cliente o c\xF3digo QR...", 1, "h-11", "flex-1", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], [1, "h-11", "rounded-lg", "border", "border-gray-300", "bg-transparent", "px-4", "text-sm", "text-gray-700", "outline-none", "focus:border-brand-500", "dark:border-gray-700", "dark:text-white/90", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "PENDING"], ["value", "CONFIRMED"], ["value", "USED"], ["value", "CANCELLED"], ["class", "rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-6", "text-center", "text-sm", "text-gray-500", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "text-sm", "text-red-600", "dark:border-red-900/30", "dark:bg-red-500/10", "dark:text-red-400"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "border-t", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "flex", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-4", "py-2", "text-sm", "disabled:opacity-50", "dark:border-gray-700", "dark:text-gray-300", 3, "click", "disabled"], [1, "px-5", "py-4", "text-sm", "text-gray-500"], [1, "px-5", "py-4", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "px-5", "py-4"], [1, "inline-flex", "rounded-full", "px-2.5", "py-1", "text-xs", "font-medium", 3, "ngClass"], [1, "px-5", "py-4", "text-center"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-2", "text-xs", "font-medium", "text-gray-700", "hover:bg-gray-50", "dark:border-gray-700", "dark:text-gray-300", 3, "routerLink"], ["colspan", "6", 1, "px-5", "py-10", "text-center", "text-sm", "text-gray-500"]], template: function ListaTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestiona los boletos de viaje.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 1)(8, "div", 4)(9, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTicketsComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaTicketsComponent_Template_input_ngModelChange_9_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ListaTicketsComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ListaTicketsComponent_Template_select_ngModelChange_10_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Confirmado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Usado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Cancelado");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, ListaTicketsComponent_div_21_Template, 2, 0, "div", 12)(22, ListaTicketsComponent_div_22_Template, 2, 1, "div", 13)(23, ListaTicketsComponent_div_23_Template, 33, 10, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-lista-tickets", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Tickets</h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Gestiona los boletos de viaje.</p>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-4 lg:flex-row">
      <input type="text" [(ngModel)]="search" (ngModelChange)="onSearchChange()" placeholder="Buscar por cliente o c\xF3digo QR..."
        class="h-11 flex-1 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90" />
      <select [(ngModel)]="filtroEstado" (ngModelChange)="onFilterChange()"
        class="h-11 rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-700 outline-none focus:border-brand-500 dark:border-gray-700 dark:text-white/90">
        <option value="">Todos los estados</option>
        <option value="PENDING">Pendiente</option>
        <option value="CONFIRMED">Confirmado</option>
        <option value="USED">Usado</option>
        <option value="CANCELLED">Cancelado</option>
      </select>
    </div>
  </div>

  <div *ngIf="loading" class="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-white/[0.03]">Cargando tickets...</div>
  <div *ngIf="!loading && errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-500/10 dark:text-red-400">{{ errorMessage }}</div>

  <div *ngIf="!loading && !errorMessage" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Lista de tickets</h3>
      <span class="text-sm text-gray-500">{{ rangoInicio }}-{{ rangoFin }} de {{ total }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100 dark:border-gray-800">
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">#</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Cliente</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Asientos</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Total</th>
            <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Estado</th>
            <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let t of paginados; trackBy: trackById" class="border-b border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4 text-sm text-gray-500">#{{ t.id }}</td>
            <td class="px-5 py-4 text-sm font-medium text-gray-800 dark:text-white/90">{{ t.client.firstName }} {{ t.client.lastName }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">{{ t.seats }}</td>
            <td class="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">$ {{ t.totalPrice }}</td>
            <td class="px-5 py-4">
              <span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium" [ngClass]="statusClase(t.status)">
                {{ statusLabel(t.status) }}
              </span>
            </td>
            <td class="px-5 py-4 text-center">
              <a [routerLink]="['/tickets', t.id]" class="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Ver</a>
            </td>
          </tr>
          <tr *ngIf="paginados.length === 0">
            <td colspan="6" class="px-5 py-10 text-center text-sm text-gray-500">No se encontraron tickets.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-between border-t border-gray-100 px-5 py-4 dark:border-gray-800">
      <p class="text-sm text-gray-500">P\xE1gina {{ page }} de {{ totalPages }}</p>
      <div class="flex gap-2">
        <button (click)="cambiarPagina(page - 1)" [disabled]="page === 1" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Anterior</button>
        <button (click)="cambiarPagina(page + 1)" [disabled]="page === totalPages || total === 0" class="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">Siguiente</button>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaTicketsComponent, { className: "ListaTicketsComponent", filePath: "src/app/pages/tickets/pages/lista-tickets/lista-tickets.component.ts", lineNumber: 14 });
})();
export {
  ListaTicketsComponent
};
//# sourceMappingURL=chunk-RUTJEUH5.js.map
