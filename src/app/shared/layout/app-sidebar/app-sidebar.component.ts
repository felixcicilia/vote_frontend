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
  private clienteItems: NavItem[] = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio",
    },
    {
      icon: `<i class="fas fa-search fa-lg"></i>`,
      name: "Buscar viaje",
      path: "/buscar",
    },
    {
      icon: `<i class="fas fa-ticket fa-lg"></i>`,
      name: "Mis reservas",
      path: "/mis-reservas",
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Alquileres",
      subItems: [
        { name: "Explorar embarcaciones", path: "/embarcaciones" },
        { name: "Mis alquileres", path: "/alquileres" },
      ],
    },
    {
      icon: `<i class="fas fa-taxi fa-lg"></i>`,
      name: "Taxi acuático",
      subItems: [
        { name: "Solicitar taxi", path: "/viajes-taxi/solicitar" },
        { name: "Mis viajes", path: "/viajes-taxi" },
      ],
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Mis pagos",
      path: "/pagos",
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Mis reseñas",
      path: "/resenas",
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

  // ─── Items visibles para PROVEEDOR ──────────────────────────────────────────
  private proveedorItems: NavItem[] = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio",
    },
    {
      icon: `<i class="fas fa-store fa-lg"></i>`,
      name: "Mi Negocio",
      path: "/mi-negocio",
    },
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Embarcaciones",
      subItems: [
        { name: "Mis embarcaciones", path: "/embarcaciones" },
        { name: "Nueva embarcación", path: "/embarcaciones/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Alquileres",
      subItems: [
        { name: "Lista de alquileres", path: "/alquileres" },
      ],
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Reseñas",
      path: "/resenas",
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

  // ─── Items visibles para EMPLEADO ───────────────────────────────────────────
  private empleadoItems: NavItem[] = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: `<i class="fas fa-taxi fa-lg"></i>`,
      name: "Viajes Taxi",
      subItems: [{ name: "Gestión de viajes", path: "/viajes-taxi" }],
    },
    {
      icon: `<i class="fas fa-ship fa-lg"></i>`,
      name: "Terminal",
      subItems: [
        { name: "Viajes programados", path: "/viajes" },
        { name: "Tickets emitidos", path: "/tickets" },
      ],
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Alquileres",
      subItems: [{ name: "Lista de alquileres", path: "/alquileres" }],
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Pagos",
      subItems: [
        { name: "Verificar pagos", path: "/pagos" },
      ],
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

  // ─── Items visibles para ADMINISTRADOR y MASTER ─────────────────────────────
  navItems: NavItem[] = [
    {
      icon: `<i class="fas fa-home fa-lg"></i>`,
      name: "Inicio",
      path: "/inicio",
    },
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: `<i class="fas fa-taxi fa-lg"></i>`,
      name: "Viajes Taxi",
      subItems: [{ name: "Todos los viajes", path: "/viajes-taxi" }],
    },
    {
      icon: `<i class="fas fa-ship fa-lg"></i>`,
      name: "Terminal",
      subItems: [
        { name: "Viajes programados", path: "/viajes" },
        { name: "Tickets emitidos", path: "/tickets" },
      ],
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Alquileres",
      subItems: [{ name: "Todos los alquileres", path: "/alquileres" }],
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Pagos",
      subItems: [
        { name: "Lista de pagos", path: "/pagos" },
      ],
    },
    {
      icon: `<i class="fas fa-star fa-lg"></i>`,
      name: "Reseñas",
      subItems: [{ name: "Todas las reseñas", path: "/resenas" }],
    },
    {
      icon: `<i class="fas fa-bell fa-lg"></i>`,
      name: "Notificaciones",
      path: "/notificaciones",
    },
  ];

  othersItems: NavItem[] = [
    {
      icon: `<i class="fas fa-sailboat fa-lg"></i>`,
      name: "Embarcaciones",
      subItems: [
        { name: "Lista", path: "/embarcaciones" },
        { name: "Nueva", path: "/embarcaciones/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-anchor fa-lg"></i>`,
      name: "Muelles",
      subItems: [
        { name: "Lista de muelles", path: "/muelles" },
        { name: "Nuevo muelle", path: "/muelles/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-route fa-lg"></i>`,
      name: "Rutas",
      subItems: [
        { name: "Lista de rutas", path: "/rutas" },
        { name: "Nueva ruta", path: "/rutas/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-clock fa-lg"></i>`,
      name: "Horarios",
      subItems: [
        { name: "Lista de horarios", path: "/horarios" },
        { name: "Nuevo horario", path: "/horarios/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-users fa-lg"></i>`,
      name: "Usuarios",
      subItems: [
        { name: "Lista de usuarios", path: "/usuarios" },
        { name: "Nuevo usuario", path: "/usuarios/crear" },
      ],
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
      return items; // navItems (operacional)
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
