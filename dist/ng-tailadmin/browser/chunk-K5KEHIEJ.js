import {
  AlquileresService
} from "./chunk-R5MJQUPH.js";
import {
  EmbarcacionesService
} from "./chunk-A6NA4AQE.js";
import {
  IslandTripsService
} from "./chunk-JQB7ZA4H.js";
import {
  TasaService
} from "./chunk-WSNZJFQG.js";
import {
  AuthService
} from "./chunk-U2PDA3ZS.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJH5TJUW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  forkJoin,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-6L3J4MHE.js";

// src/app/pages/mi-negocio/mi-negocio.component.ts
var _c0 = (a0) => ["/mi-charter/yates", a0, "editar"];
function MiNegocioComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F4B0}");
    \u0275\u0275elementEnd()();
  }
}
function MiNegocioComponent_ng_container_11_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 22);
    \u0275\u0275text(4, "Sin embarcaciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6, "Agrega tu primera embarcaci\xF3n en Mi Charter para comenzar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 24);
    \u0275\u0275text(8, " Ir a Mi Charter \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function MiNegocioComponent_ng_container_11_div_34_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.imageUrl(s_r1.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", s_r1.vessel.name);
  }
}
function MiNegocioComponent_ng_container_11_div_34_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeIcon(s_r1.vessel.type));
  }
}
function MiNegocioComponent_ng_container_11_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275template(2, MiNegocioComponent_ng_container_11_div_34_div_7_img_2_Template, 1, 2, "img", 33)(3, MiNegocioComponent_ng_container_11_div_34_div_7_div_3_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div", 36)(6, "div")(7, "div", 37)(8, "h3", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 41)(15, "p", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 44)(21, "div", 45)(22, "p", 46);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 47);
    \u0275\u0275text(26, "Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 48);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 49)(30, "p", 50);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 47);
    \u0275\u0275text(34, "Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 51);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 52)(38, "p", 53);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 47);
    \u0275\u0275text(41, "Reservas totales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 54)(43, "a", 55);
    \u0275\u0275text(44, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 56);
    \u0275\u0275text(46, " \u{1F4CB} Reservas ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r1.vessel.photos == null ? null : s_r1.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(s_r1.vessel.photos == null ? null : s_r1.vessel.photos[0]));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r1.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.verificationClass(s_r1.vessel.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verificationLabel(s_r1.vessel.verificationStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r1.vessel.type, " \xB7 ", s_r1.vessel.capacity, " pasajeros");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 15, s_r1.totalRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(s_r1.totalRevenue));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(24, 18, s_r1.charterRevenue, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", s_r1.charterCount, " reservas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(32, 21, s_r1.islandRevenue, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", s_r1.islandCount, " reservas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.totalBookings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, s_r1.vessel.id));
  }
}
function MiNegocioComponent_ng_container_11_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Rendimiento por embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275template(7, MiNegocioComponent_ng_container_11_div_34_div_7_Template, 47, 26, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.vesselStats.length, " embarcacion", ctx_r1.vesselStats.length !== 1 ? "es" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vesselStats);
  }
}
function MiNegocioComponent_ng_container_11_div_35_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 69);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 70)(10, "span", 71);
    \u0275\u0275text(11, "\u26F5 Charter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 72);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 73);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", a_r3.client == null ? null : a_r3.client.firstName, " ", a_r3.client == null ? null : a_r3.client.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.vessel == null ? null : a_r3.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 7, a_r3.startDate, "dd MMM"), " \u2013 ", \u0275\u0275pipeBind2(8, 10, a_r3.endDate, "dd MMM yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 13, a_r3.totalPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.status);
  }
}
function MiNegocioComponent_ng_container_11_div_35_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 69);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 70)(9, "span", 74);
    \u0275\u0275text(10, "\u{1F3DD}\uFE0F Excursi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 75);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", b_r4.client == null ? null : b_r4.client.firstName, " ", b_r4.client == null ? null : b_r4.client.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.vessel == null ? null : b_r4.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", b_r4.destination == null ? null : b_r4.destination.icon, " ", b_r4.destination == null ? null : b_r4.destination.name, " \xB7 ", \u0275\u0275pipeBind2(7, 8, b_r4.tripDate, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 11, b_r4.totalPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.islandStatusLabel(b_r4.status));
  }
}
function MiNegocioComponent_ng_container_11_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "\xDAltimas reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 59);
    \u0275\u0275text(5, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "table", 61)(8, "thead")(9, "tr", 62)(10, "th", 63);
    \u0275\u0275text(11, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 63);
    \u0275\u0275text(13, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 63);
    \u0275\u0275text(15, "Detalle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 64);
    \u0275\u0275text(17, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 65);
    \u0275\u0275text(19, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 64);
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, MiNegocioComponent_ng_container_11_div_35_tr_23_Template, 17, 16, "tr", 66)(24, MiNegocioComponent_ng_container_11_div_35_tr_24_Template, 16, 14, "tr", 66);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.recentCharter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentIsland);
  }
}
function MiNegocioComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 1)(3, "p", 11);
    \u0275\u0275text(4, "Ingresos totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 1)(11, "p", 11);
    \u0275\u0275text(12, "Reservas activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 15);
    \u0275\u0275text(16, "en total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 1)(18, "p", 11);
    \u0275\u0275text(19, "Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 15);
    \u0275\u0275text(24, "alquiler de yates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 1)(26, "p", 11);
    \u0275\u0275text(27, "Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 15);
    \u0275\u0275text(32, "viajes a cayos/islas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, MiNegocioComponent_ng_container_11_div_33_Template, 9, 0, "div", 18)(34, MiNegocioComponent_ng_container_11_div_34_Template, 8, 3, "div", 19)(35, MiNegocioComponent_ng_container_11_div_35_Template, 25, 2, "div", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 8, ctx_r1.totalRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tasaService.formatBs(ctx_r1.totalRevenue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalBookings);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(22, 11, ctx_r1.totalCharterRevenue, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(30, 14, ctx_r1.totalIslandRevenue, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.vessels.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vesselStats.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recentCharter.length > 0 || ctx_r1.recentIsland.length > 0);
  }
}
var MiNegocioComponent = class _MiNegocioComponent {
  auth = inject(AuthService);
  embService = inject(EmbarcacionesService);
  alqService = inject(AlquileresService);
  tripsService = inject(IslandTripsService);
  tasaService = inject(TasaService);
  loading = true;
  vessels = [];
  vesselStats = [];
  recentCharter = [];
  recentIsland = [];
  get user() {
    return this.auth.user();
  }
  get providerId() {
    return this.auth.user()?.providerProfile?.id ?? null;
  }
  get totalRevenue() {
    return this.vesselStats.reduce((s, v) => s + v.totalRevenue, 0);
  }
  get totalBookings() {
    return this.vesselStats.reduce((s, v) => s + v.totalBookings, 0);
  }
  get totalCharterRevenue() {
    return this.vesselStats.reduce((s, v) => s + v.charterRevenue, 0);
  }
  get totalIslandRevenue() {
    return this.vesselStats.reduce((s, v) => s + v.islandRevenue, 0);
  }
  get activeVessels() {
    return this.vessels.filter((v) => v.verificationStatus === "APPROVED" && v.isAvailable).length;
  }
  ngOnInit() {
    this.tasaService.load();
    const pid = this.providerId;
    if (!pid) {
      this.loading = false;
      return;
    }
    forkJoin({
      vessels: this.embService.getByProvider(pid),
      charter: this.alqService.getByProvider(pid),
      island: this.tripsService.getBookings({ providerId: pid })
    }).subscribe({
      next: ({ vessels, charter, island }) => {
        this.vessels = vessels;
        this.recentCharter = charter.filter((a) => a.status !== "CANCELLED").sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()).slice(0, 5);
        this.recentIsland = island.filter((b) => b.status !== "CANCELLED").sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()).slice(0, 5);
        this.vesselStats = vessels.map((v) => {
          const vc = charter.filter((a) => a.vessel?.id === v.id && a.status !== "CANCELLED");
          const vi = island.filter((b) => b.vessel?.id === v.id && b.status !== "CANCELLED");
          const cr = vc.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
          const ir = vi.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
          return {
            vessel: v,
            charterRevenue: cr,
            charterCount: vc.length,
            islandRevenue: ir,
            islandCount: vi.length,
            totalRevenue: cr + ir,
            totalBookings: vc.length + vi.length
          };
        }).sort((a, b) => b.totalRevenue - a.totalRevenue);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  imageUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http"))
      return url;
    return `${environment.apiUrl.replace("/api", "")}${url}`;
  }
  typeIcon(t) {
    return t === "YATE" ? "\u26F5" : t === "CATAMARAN" ? "\u{1F6E5}\uFE0F" : "\u{1F6A4}";
  }
  verificationLabel(s) {
    return s === "APPROVED" ? "Verificada" : s === "PENDING" ? "En revisi\xF3n" : "Rechazada";
  }
  verificationClass(s) {
    return s === "APPROVED" ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400" : s === "PENDING" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400" : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400";
  }
  islandStatusLabel(s) {
    const m = { PENDING: "Pendiente", CONFIRMED: "Confirmada", ACTIVE: "Activa", COMPLETED: "Completada", CANCELLED: "Cancelada" };
    return m[s] ?? s;
  }
  static \u0275fac = function MiNegocioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiNegocioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiNegocioComponent, selectors: [["app-mi-negocio"]], decls: 12, vars: 2, consts: [[1, "space-y-6"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], ["routerLink", "/mi-charter/yates", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "border", "border-gray-200", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-300"], ["class", "flex justify-center py-20", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "text-5xl", "animate-bounce"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "mt-0.5", "text-xs", "text-brand-500"], [1, "mt-2", "text-3xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-purple-600", "dark:text-purple-400"], [1, "mt-2", "text-3xl", "font-extrabold", "text-blue-600", "dark:text-blue-400"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], ["routerLink", "/mi-charter/yates", 1, "mt-5", "inline-flex", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "text-sm", "text-gray-500"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex flex-col gap-4 p-5 sm:flex-row sm:items-center", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-4", "p-5", "sm:flex-row", "sm:items-center"], [1, "h-28", "w-full", "flex-shrink-0", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "dark:from-slate-800", "dark:to-slate-900", "sm:h-24", "sm:w-32"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-4xl opacity-20", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "justify-between"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2"], [1, "text-lg", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "rounded-full", "px-2.5", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "text-right"], [1, "text-2xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-brand-500"], [1, "mt-3", "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "bg-purple-50", "p-3", "text-center", "dark:bg-purple-500/10"], [1, "text-lg", "font-extrabold", "text-purple-700", "dark:text-purple-400"], [1, "text-[10px]", "text-gray-400"], [1, "text-[10px]", "text-purple-500"], [1, "rounded-xl", "bg-blue-50", "p-3", "text-center", "dark:bg-blue-500/10"], [1, "text-lg", "font-extrabold", "text-blue-700", "dark:text-blue-400"], [1, "text-[10px]", "text-blue-500"], [1, "rounded-xl", "bg-gray-50", "p-3", "text-center", "dark:bg-white/[0.04]"], [1, "text-lg", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "flex", "flex-col", "gap-1.5", "justify-center"], [1, "block", "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-center", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "routerLink"], ["routerLink", "/mi-charter/reservas", 1, "block", "rounded-lg", "border", "border-brand-200", "px-3", "py-1.5", "text-center", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", "transition", "dark:border-brand-500/30"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-4xl", "opacity-20"], ["routerLink", "/mi-charter/reservas", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-100 dark:border-gray-800", 4, "ngFor", "ngForOf"], [1, "px-5", "py-4", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-4", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-4", "text-xs", "text-gray-400"], [1, "px-5", "py-4", "text-center"], [1, "inline-flex", "rounded-full", "bg-purple-100", "px-2.5", "py-1", "text-xs", "font-medium", "text-purple-700", "dark:bg-purple-500/10", "dark:text-purple-400"], [1, "px-5", "py-4", "text-right", "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "px-5", "py-4", "text-center", "text-xs", "text-gray-400"], [1, "inline-flex", "rounded-full", "bg-blue-100", "px-2.5", "py-1", "text-xs", "font-medium", "text-blue-700", "dark:bg-blue-500/10", "dark:text-blue-400"], [1, "px-5", "py-4", "text-right", "text-sm", "font-bold", "text-blue-600", "dark:text-blue-400"]], template: function MiNegocioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Mi Negocio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Resumen econ\xF3mico de tus embarcaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " \u2693 Gestionar embarcaciones \u2192 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, MiNegocioComponent_div_10_Template, 3, 0, "div", 6)(11, MiNegocioComponent_ng_container_11_Template, 36, 17, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiNegocioComponent, [{
    type: Component,
    args: [{ selector: "app-mi-negocio", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Mi Negocio</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Resumen econ\xF3mico de tus embarcaciones</p>
      </div>
      <a routerLink="/mi-charter/yates"
        class="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-300">
        \u2693 Gestionar embarcaciones \u2192
      </a>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex justify-center py-20">
    <div class="text-5xl animate-bounce">\u{1F4B0}</div>
  </div>

  <ng-container *ngIf="!loading">

    <!-- KPIs globales -->
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Ingresos totales</p>
        <p class="mt-2 text-3xl font-extrabold text-brand-600 dark:text-brand-400">\${{ totalRevenue | number:'1.0-0' }}</p>
        <p class="mt-0.5 text-xs text-brand-500">{{ tasaService.formatBs(totalRevenue) }}</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Reservas activas</p>
        <p class="mt-2 text-3xl font-extrabold text-gray-800 dark:text-white">{{ totalBookings }}</p>
        <p class="mt-0.5 text-xs text-gray-400">en total</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Charter</p>
        <p class="mt-2 text-3xl font-extrabold text-purple-600 dark:text-purple-400">\${{ totalCharterRevenue | number:'1.0-0' }}</p>
        <p class="mt-0.5 text-xs text-gray-400">alquiler de yates</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Excursiones</p>
        <p class="mt-2 text-3xl font-extrabold text-blue-600 dark:text-blue-400">\${{ totalIslandRevenue | number:'1.0-0' }}</p>
        <p class="mt-0.5 text-xs text-gray-400">viajes a cayos/islas</p>
      </div>
    </div>

    <!-- Sin embarcaciones -->
    <div *ngIf="vessels.length === 0"
      class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
      <div class="text-5xl mb-4">\u26F5</div>
      <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin embarcaciones registradas</h3>
      <p class="mt-2 text-sm text-gray-500">Agrega tu primera embarcaci\xF3n en Mi Charter para comenzar.</p>
      <a routerLink="/mi-charter/yates" class="mt-5 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
        Ir a Mi Charter \u2192
      </a>
    </div>

    <!-- Rendimiento por embarcaci\xF3n -->
    <div *ngIf="vesselStats.length > 0" class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Rendimiento por embarcaci\xF3n</h3>
        <span class="text-sm text-gray-500">{{ vesselStats.length }} embarcacion{{ vesselStats.length !== 1 ? 'es' : '' }}</span>
      </div>

      <div class="divide-y divide-gray-100 dark:divide-gray-800">
        <div *ngFor="let s of vesselStats" class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">

          <!-- Foto -->
          <div class="h-28 w-full flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 sm:h-24 sm:w-32">
            <img *ngIf="s.vessel.photos?.[0]" [src]="imageUrl(s.vessel.photos![0])" [alt]="s.vessel.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!s.vessel.photos?.[0]"
              class="flex h-full items-center justify-center text-4xl opacity-20">{{ typeIcon(s.vessel.type) }}</div>
          </div>

          <div class="flex flex-1 flex-col justify-between">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white/90">{{ s.vessel.name }}</h3>
                  <span class="rounded-full px-2.5 py-0.5 text-[10px] font-bold" [ngClass]="verificationClass(s.vessel.verificationStatus)">
                    {{ verificationLabel(s.vessel.verificationStatus) }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">{{ s.vessel.type }} \xB7 {{ s.vessel.capacity }} pasajeros</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-extrabold text-brand-600 dark:text-brand-400">\${{ s.totalRevenue | number:'1.0-0' }}</p>
                <p class="text-xs text-brand-500">{{ tasaService.formatBs(s.totalRevenue) }}</p>
              </div>
            </div>

            <!-- Desglose -->
            <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div class="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-500/10">
                <p class="text-lg font-extrabold text-purple-700 dark:text-purple-400">\${{ s.charterRevenue | number:'1.0-0' }}</p>
                <p class="text-[10px] text-gray-400">Charter</p>
                <p class="text-[10px] text-purple-500">{{ s.charterCount }} reservas</p>
              </div>
              <div class="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-500/10">
                <p class="text-lg font-extrabold text-blue-700 dark:text-blue-400">\${{ s.islandRevenue | number:'1.0-0' }}</p>
                <p class="text-[10px] text-gray-400">Excursiones</p>
                <p class="text-[10px] text-blue-500">{{ s.islandCount }} reservas</p>
              </div>
              <div class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
                <p class="text-lg font-extrabold text-gray-800 dark:text-white">{{ s.totalBookings }}</p>
                <p class="text-[10px] text-gray-400">Reservas totales</p>
              </div>
              <div class="flex flex-col gap-1.5 justify-center">
                <a [routerLink]="['/mi-charter/yates', s.vessel.id, 'editar']"
                  class="block rounded-lg border border-gray-200 px-3 py-1.5 text-center text-xs font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700">
                  \u270F\uFE0F Editar
                </a>
                <a routerLink="/mi-charter/reservas"
                  class="block rounded-lg border border-brand-200 px-3 py-1.5 text-center text-xs font-medium text-brand-600 hover:bg-brand-50 transition dark:border-brand-500/30">
                  \u{1F4CB} Reservas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actividad reciente -->
    <div *ngIf="recentCharter.length > 0 || recentIsland.length > 0"
      class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">

      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">\xDAltimas reservas</h3>
        <a routerLink="/mi-charter/reservas" class="text-xs font-semibold text-brand-500 hover:text-brand-600">Ver todas \u2192</a>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-100 dark:border-gray-800">
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Cliente</th>
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Embarcaci\xF3n</th>
              <th class="px-5 py-3 text-left text-xs font-medium text-gray-500">Detalle</th>
              <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Tipo</th>
              <th class="px-5 py-3 text-right text-xs font-medium text-gray-500">Total</th>
              <th class="px-5 py-3 text-center text-xs font-medium text-gray-500">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let a of recentCharter" class="border-b border-gray-100 dark:border-gray-800">
              <td class="px-5 py-4 text-sm font-medium text-gray-800 dark:text-white/90">
                {{ a.client?.firstName }} {{ a.client?.lastName }}
              </td>
              <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{{ a.vessel?.name }}</td>
              <td class="px-5 py-4 text-xs text-gray-400">{{ a.startDate | date:'dd MMM' }} \u2013 {{ a.endDate | date:'dd MMM yyyy' }}</td>
              <td class="px-5 py-4 text-center">
                <span class="inline-flex rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700 dark:bg-purple-500/10 dark:text-purple-400">\u26F5 Charter</span>
              </td>
              <td class="px-5 py-4 text-right text-sm font-bold text-brand-600 dark:text-brand-400">\${{ a.totalPrice | number:'1.0-0' }}</td>
              <td class="px-5 py-4 text-center text-xs text-gray-400">{{ a.status }}</td>
            </tr>
            <tr *ngFor="let b of recentIsland" class="border-b border-gray-100 dark:border-gray-800">
              <td class="px-5 py-4 text-sm font-medium text-gray-800 dark:text-white/90">
                {{ b.client?.firstName }} {{ b.client?.lastName }}
              </td>
              <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">{{ b.vessel?.name }}</td>
              <td class="px-5 py-4 text-xs text-gray-400">{{ b.destination?.icon }} {{ b.destination?.name }} \xB7 {{ b.tripDate | date:'dd MMM yyyy' }}</td>
              <td class="px-5 py-4 text-center">
                <span class="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">\u{1F3DD}\uFE0F Excursi\xF3n</span>
              </td>
              <td class="px-5 py-4 text-right text-sm font-bold text-blue-600 dark:text-blue-400">\${{ b.totalPrice | number:'1.0-0' }}</td>
              <td class="px-5 py-4 text-center text-xs text-gray-400">{{ islandStatusLabel(b.status) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </ng-container>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiNegocioComponent, { className: "MiNegocioComponent", filePath: "src/app/pages/mi-negocio/mi-negocio.component.ts", lineNumber: 32 });
})();
export {
  MiNegocioComponent
};
//# sourceMappingURL=chunk-K5KEHIEJ.js.map
