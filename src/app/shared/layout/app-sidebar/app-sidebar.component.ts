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
  navItems: NavItem[] = [
    {
      icon: `<i class="fas fa-dashboard fa-lg"></i>`,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: `<i class="fas fa-newspaper fa-lg"></i>`,
      name: "Noticias",
      subItems: [
        { name: "Noticias", path: "/noticias" },
        { name: "Sección Noticias", path: "/noticias/seccion" },
        { name: "Crear Noticia", path: "/noticias/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-clipboard-list fa-lg"></i>`,
      name: "Pedidos",
      subItems: [
        { name: "Solicitudes de pedido", path: "/pedidos" },
        { name: "Crear pedido Cajero", path: "/pedidos/crear" },
        { name: "Crear pedido Self Service", path: "/pedidos/kiosko" },
      ],
    },
    {
      icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
      name: "Pagos",
      subItems: [
        { name: "Lista de pagos", path: "/pagos" },
        { name: "Registrar pago", path: "/pagos/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-receipt fa-lg"></i>`,
      name: "Órdenes",
      subItems: [
        { name: "Lista de órdenes", path: "/ordenes" },
        { name: "Órdenes recientes", path: "/ordenes/crear" },
      ],
    },
    {
      icon: `<i class="fa-solid fa-people-carry-box"></i>`,
      name: "Operación",
      subItems: [{ name: "Lista de productos", path: "/operacion" }],
    },
    {
      icon: `<i class="fas fa-box-open fa-lg"></i>`,
      name: "Productos",
      subItems: [
        { name: "Lista de productos", path: "/productos" },
        { name: "Crear producto", path: "/productos/crear" },
      ],
    },
    {
      icon: `<i class="fas fa-users fa-lg"></i>`,
      name: "Clientes",
      subItems: [{ name: "Lista de clientes", path: "/clientes" }],
    },
    {
      icon: `<i class="fas fa-user-gear fa-lg"></i>`,
      name: "Usuarios",
      subItems: [
        { name: "Lista de usuarios", path: "/usuarios" },
        { name: "Nuevo usuario", path: "/usuarios/crear" },
      ],
    },
  ];

  othersItems: NavItem[] = [
    {
      icon: `<i class="fas fa-chart-pie fa-lg"></i>`,
      name: "Reportes",
      subItems: [{ name: "Administración", path: "/administracion" }],
    },
    {
      icon: `<i class="fas fa-cash-register fa-lg"></i>`,
      name: "Caja",
      subItems: [{ name: "flujo de Caja", path: "/caja" }],
    },
    {
      icon: `<i class="fas fa-warehouse fa-lg"></i>`,
      name: "Inventario",
      subItems: [{ name: "Resumen de inventario", path: "/inventario" }],
    },
    {
      icon: `<i class="fas fa-comments-dollar fa-lg"></i>`,
      name: "Tasa de cambio",
      subItems: [{ name: "Tasas registradas", path: "/tasas" }],
    },
    {
      icon: `<i class="fas fa-lock fa-lg"></i>`,
      name: "Acceso",
      subItems: [
        { name: "Perfil", path: "/profile" },
        { name: "Cerrar Sesión", path: "/signin" },
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

    if (!role) {
      return [];
    }

    if (role === "MASTER") {
      return items;
    }

    if (role === "ADMINISTRADOR") {
      return items.filter((item) => item.name !== "Usuarios");
    }

    if (role === "USUARIO") {
      return items
        .filter(
          (item) =>
            ![
              "Noticias",
              "Pagos",
              "Órdenes",
              "Operación",
              "Clientes",
              "Usuarios",
            ].includes(item.name),
        )
        .map((item) => {
          if (item.name === "Pedidos" && item.subItems) {
            return {
              ...item,
              subItems: item.subItems.filter(
                (sub) => sub.path !== "/pedidos/kiosko",
              ),
            };
          }

          return item;
        });
    }

    if (role === "CLIENTE") {
      const clientItems: NavItem[] = [
        {
          icon: `<i class="fas fa-newspaper fa-lg"></i>`,
          name: "Noticias",
          subItems: [{ name: "Noticias", path: "/noticias" }],
        },
        {
          icon: `<i class="fas fa-clipboard-list fa-lg"></i>`,
          name: "Pedidos",
          subItems: [
            { name: "Lista de pedidos", path: "/pedidos" },
            { name: "Pedido Self Service", path: "/pedidos/kiosko" },
          ],
        },
        {
          icon: `<i class="fas fa-money-bill-transfer fa-lg"></i>`,
          name: "Pagos",
          subItems: [{ name: "Lista de pagos", path: "/pagos" }],
        },
        {
          icon: `<i class="fas fa-receipt fa-lg"></i>`,
          name: "Órdenes",
          subItems: [{ name: "Lista de órdenes", path: "/ordenes" }],
        },
        {
          icon: `<i class="fa-solid fa-people-carry-box"></i>`,
          name: "Operación",
          subItems: [{ name: "Lista de productos", path: "/operacion" }],
        },
        {
          icon: `<i class="fas fa-user fa-lg"></i>`,
          name: "Perfil",
          path: "/profile",
        },
      ];

      return clientItems;
    }

    return [];
  }

  private filterOthersItemsByRole(items: NavItem[]): NavItem[] {
    const role = this.authService.role();

    if (!role) {
      return [];
    }

    if (role === "MASTER") {
      return items;
    }

    if (role === "ADMINISTRADOR") {
      return items;
    }

    if (role === "USUARIO" || role === "CLIENTE") {
      return [];
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
