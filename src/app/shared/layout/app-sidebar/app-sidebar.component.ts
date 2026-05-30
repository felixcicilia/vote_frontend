import { CommonModule } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { combineLatest, Subscription } from "rxjs";

import { SidebarService } from "../../services/sidebar.service";
import { SafeHtmlPipe } from "../../pipe/safe-html.pipe";
import { SidebarWidgetComponent } from "./app-sidebar-widget.component";
import { AuthService } from "../../../pages/auth-pages/services/auth.service";

type NavSubItem = {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean;
};

type NavItem = {
  name: string;
  icon: string;
  path?: string;
  new?: boolean;
  masterOnly?: boolean;
  subItems?: NavSubItem[];
};

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule, SafeHtmlPipe, SidebarWidgetComponent],
  templateUrl: "./app-sidebar.component.html",
})
export class AppSidebarComponent {
  // ─── Items visibles para CLIENTE ────────────────────────────────────────────
  // Modelo 1: Excursión colectiva a isla  (como Uber — varios clientes, un proveedor)
  // Modelo 2: Charter privado             (como Airbnb — cliente reserva toda la embarcación)
  private clienteItems: NavItem[] = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio",
    },
    // ── Modelo 1 ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones a isla",
      path: "/buscar",
    },
    // ── Modelo 2 ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Alquilar embarcación",
      path: "/alquileres",
    },
    // ── Mis reservas ────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-calendar-check fa-lg"></i>`,
      name: "Mis reservas",
      path: "/mis-reservas",
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Mis pagos",
      path: "/pagos",
    },
    {
      icon: `<i class="fas fa-wallet fa-lg"></i>`,
      name: "Mi billetera",
      path: "/mis-metodos-pago",
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Mis reseñas",
      path: "/resenas",
    },
    {
      icon: `<i class="fas fa-circle-question fa-lg"></i>`,
      name: "FAQ",
      path: "/faq",
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes",
    },
    {
      icon: `<i class="fas fa-headset fa-lg"></i>`,
      name: "Soporte",
      path: "/soporte/tickets",
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones",
    },
  ];

  // ─── Items visibles para PROVEEDOR ──────────────────────────────────────────
  // El proveedor es el dueño de la embarcación.
  // Gestiona su flota, define sus horarios de excursión y atiende las reservas recibidas.
  private proveedorItems: NavItem[] = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio",
    },
    // ── Mi flota ────────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Mis embarcaciones",
      path: "/mi-charter/yates",
    },
    {
      icon: `<i class="fas fa-calendar-days fa-lg"></i>`,
      name: "Mis horarios",
      path: "/mi-charter/itinerario",
    },
    {
      icon: `<i class="fas fa-calendar-alt fa-lg"></i>`,
      name: "Calendario",
      path: "/mi-charter/calendario",
    },
    // ── Reservas recibidas ──────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones recibidas",
      path: "/reservas-isla",
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Charters contratados",
      path: "/mi-charter/reservas",
    },
    // ── Mi cuenta ───────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-chart-bar fa-lg"></i>`,
      name: "Estadísticas",
      path: "/mi-charter/estadisticas",
    },
    {
      icon: `<i class="fas fa-id-card fa-lg"></i>`,
      name: "Mis capitanes",
      path: "/mis-capitanes",
    },
    {
      icon: `<i class="fas fa-university fa-lg"></i>`,
      name: "Datos bancarios",
      path: "/mis-cuentas-retiro",
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Reseñas",
      path: "/resenas",
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes",
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones",
    },
  ];

  // ─── Items visibles para EMPLEADO ───────────────────────────────────────────
  private empleadoItems: NavItem[] = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones",
      path: "/reservas-isla",
    },
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Charters",
      path: "/alquileres",
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Verificar pagos",
      path: "/pagos",
    },
    {
      icon: `<i class="fas fa-coins fa-lg"></i>`,
      name: "Tasa del día",
      path: "/tasas",
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones",
    },
  ];

  // ─── OPERACIONES: Items del día a día para ADMINISTRADOR y MASTER ─────────────
  // El master/admin es el soporte de la empresa:
  // aprueba pagos, aprueba proveedores, aprueba embarcaciones, monitorea todo.
  navItems: NavItem[] = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: `<i class="fas fa-chart-line fa-lg"></i>`,
      name: "Finanzas",
      path: "/finanzas",
      masterOnly: true,
    },
    // ── Modelo 1: Excursiones a isla ────────────────────────────────────────
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Excursiones",
      path: "/reservas-isla",
    },
    // ── Modelo 2: Charters privados ─────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Charters",
      path: "/alquileres",
    },
    // ── Pagos y verificaciones ──────────────────────────────────────────────
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Pagos",
      path: "/pagos",
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Reseñas",
      path: "/resenas",
    },
    {
      icon: `<i class="fas fa-headset fa-lg"></i>`,
      name: "Soporte",
      subItems: [
        { name: "Tickets", path: "/soporte/tickets" },
        { name: "Chat / Mensajes", path: "/mensajes" },
      ],
    },
    {
      icon: `<i class="fas fa-circle-question fa-lg"></i>`,
      name: "FAQ",
      path: "/faq",
    },
    {
      icon: `<i class="fas fa-comments fa-lg"></i>`,
      name: "Mensajes",
      path: "/mensajes",
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones",
    },
  ];

  // ─── ADMINISTRACIÓN: Catálogo y configuración del sistema ────────────────────
  othersItems: NavItem[] = [
    // ── Aprobaciones ────────────────────────────────────────────────────────
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Embarcaciones",
      path: "/embarcaciones",
    },
    {
      icon: `<i class="fas fa-id-card fa-lg"></i>`,
      name: "Capitanes",
      path: "/mis-capitanes",
    },
    {
      icon: `<i class="fas fa-users fa-lg"></i>`,
      name: "Usuarios",
      subItems: [
        { name: "Lista de usuarios", path: "/usuarios" },
        { name: "Nuevo usuario", path: "/usuarios/crear" },
      ],
    },
    // ── Configuración excursiones ────────────────────────────────────────────
    {
      icon: `<i class="fas fa-map-pin fa-lg"></i>`,
      name: "Puntos de salida",
      path: "/puntos-salida",
    },
    {
      icon: `<i class="fas fa-island-tropical fa-lg"></i>`,
      name: "Destinos / Islas",
      path: "/destinos",
    },
    {
      icon: `<i class="fas fa-credit-card fa-lg"></i>`,
      name: "Métodos de cobro",
      path: "/metodos-cobro",
    },
    {
      icon: `<i class="fas fa-coins fa-lg"></i>`,
      name: "Tasas de cambio",
      path: "/tasas",
    },
  ];

  openSubmenu: string | null | number = null;
  subMenuHeights: { [key: string]: number } = {};

  @ViewChildren("subMenu") subMenuRefs!: QueryList<ElementRef>;

  readonly isExpanded$;
  readonly isMobileOpen$;
  readonly isHovered$;

  private subscription: Subscription = new Subscription();

  constructor(
    public sidebarService: SidebarService,
    public authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.isHovered$ = this.sidebarService.isHovered$;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setActiveMenuFromRoute(this.router.url);
        }
      }),
    );

    this.subscription.add(
      combineLatest([
        this.isExpanded$,
        this.isMobileOpen$,
        this.isHovered$,
      ]).subscribe(([isExpanded, isMobileOpen, isHovered]) => {
        if (!isExpanded && !isMobileOpen && !isHovered) {
          this.cdr.detectChanges();
        }
      }),
    );

    this.setActiveMenuFromRoute(this.router.url);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleSubmenu(section: string, index: number): void {
    const key = `${section}-${index}`;

    if (this.openSubmenu === key) {
      this.openSubmenu = null;
      this.subMenuHeights[key] = 0;
      return;
    }

    this.openSubmenu = key;

    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        this.subMenuHeights[key] = el.scrollHeight;
        this.cdr.detectChanges();
      }
    });
  }

  onSidebarMouseEnter(): void {
    this.isExpanded$
      .subscribe((expanded) => {
        if (!expanded) {
          this.sidebarService.setHovered(true);
        }
      })
      .unsubscribe();
  }

  onSubmenuClick(): void {
    this.isMobileOpen$
      .subscribe((isMobile) => {
        if (isMobile) {
          this.sidebarService.setMobileOpen(false);
        }
      })
      .unsubscribe();
  }

  private filterNavItemsByRole(items: NavItem[]): NavItem[] {
    const role = this.authService.role();

    if (!role) return [];

    if (role === "MASTER" || role === "ADMINISTRADOR") {
      return items.filter(item => !item.masterOnly || role === "MASTER");
    }

    if (role === "EMPLEADO") {
      return this.empleadoItems;
    }

    if (role === "PROVEEDOR") {
      return this.proveedorItems;
    }

    if (role === "CLIENTE") {
      return this.clienteItems;
    }

    return [];
  }

  private filterOthersItemsByRole(items: NavItem[]): NavItem[] {
    const role = this.authService.role();

    if (!role) return [];

    // Solo MASTER y ADMINISTRADOR ven los ítems de catálogo (othersItems)
    if (role === "MASTER" || role === "ADMINISTRADOR") {
      return items;
    }

    return [];
  }

  get filteredNavItems(): NavItem[] {
    return this.filterNavItemsByRole(this.navItems);
  }

  get filteredOthersItems(): NavItem[] {
    return this.filterOthersItemsByRole(this.othersItems);
  }

  private setActiveMenuFromRoute(currentUrl: string): void {
    const menuGroups = [
      { items: this.filteredNavItems, prefix: "main" },
      { items: this.filteredOthersItems, prefix: "others" },
    ];

    menuGroups.forEach((group) => {
      group.items.forEach((nav, i) => {
        if (nav.path && currentUrl === nav.path) {
          this.openSubmenu = null;
        }

        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (currentUrl === subItem.path) {
              const key = `${group.prefix}-${i}`;
              this.openSubmenu = key;

              setTimeout(() => {
                const el = document.getElementById(key);
                if (el) {
                  this.subMenuHeights[key] = el.scrollHeight;
                  this.cdr.detectChanges();
                }
              });
            }
          });
        }
      });
    });
  }
}
