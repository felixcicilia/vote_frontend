import {
  EmbarcacionesService
} from "./chunk-XZ3ZG6D6.js";
import {
  AlquileresService
} from "./chunk-MM6ITFT5.js";
import {
  IslandTripsService
} from "./chunk-NAARBNGA.js";
import {
  TasaService
} from "./chunk-XGLCC3KY.js";
import {
  AuthService
} from "./chunk-W52DWYR4.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DNRCO4H6.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  ViewChild,
  afterEveryRender,
  afterNextRender,
  environment,
  forkJoin,
  inject,
  input,
  isPlatformBrowser,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-VNQE6XX7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _c0 = ["chart"];
var ChartComponent = class _ChartComponent {
  constructor() {
    this.chart = input(...ngDevMode ? [void 0, {
      debugName: "chart"
    }] : []);
    this.annotations = input(...ngDevMode ? [void 0, {
      debugName: "annotations"
    }] : []);
    this.colors = input(...ngDevMode ? [void 0, {
      debugName: "colors"
    }] : []);
    this.dataLabels = input(...ngDevMode ? [void 0, {
      debugName: "dataLabels"
    }] : []);
    this.series = input(...ngDevMode ? [void 0, {
      debugName: "series"
    }] : []);
    this.stroke = input(...ngDevMode ? [void 0, {
      debugName: "stroke"
    }] : []);
    this.labels = input(...ngDevMode ? [void 0, {
      debugName: "labels"
    }] : []);
    this.legend = input(...ngDevMode ? [void 0, {
      debugName: "legend"
    }] : []);
    this.markers = input(...ngDevMode ? [void 0, {
      debugName: "markers"
    }] : []);
    this.noData = input(...ngDevMode ? [void 0, {
      debugName: "noData"
    }] : []);
    this.parsing = input(...ngDevMode ? [void 0, {
      debugName: "parsing"
    }] : []);
    this.fill = input(...ngDevMode ? [void 0, {
      debugName: "fill"
    }] : []);
    this.tooltip = input(...ngDevMode ? [void 0, {
      debugName: "tooltip"
    }] : []);
    this.plotOptions = input(...ngDevMode ? [void 0, {
      debugName: "plotOptions"
    }] : []);
    this.responsive = input(...ngDevMode ? [void 0, {
      debugName: "responsive"
    }] : []);
    this.xaxis = input(...ngDevMode ? [void 0, {
      debugName: "xaxis"
    }] : []);
    this.yaxis = input(...ngDevMode ? [void 0, {
      debugName: "yaxis"
    }] : []);
    this.forecastDataPoints = input(...ngDevMode ? [void 0, {
      debugName: "forecastDataPoints"
    }] : []);
    this.grid = input(...ngDevMode ? [void 0, {
      debugName: "grid"
    }] : []);
    this.states = input(...ngDevMode ? [void 0, {
      debugName: "states"
    }] : []);
    this.title = input(...ngDevMode ? [void 0, {
      debugName: "title"
    }] : []);
    this.subtitle = input(...ngDevMode ? [void 0, {
      debugName: "subtitle"
    }] : []);
    this.theme = input(...ngDevMode ? [void 0, {
      debugName: "theme"
    }] : []);
    this.autoUpdateSeries = input(true, ...ngDevMode ? [{
      debugName: "autoUpdateSeries"
    }] : []);
    this.chartReady = output();
    this.chartInstance = signal(null, ...ngDevMode ? [{
      debugName: "chartInstance"
    }] : []);
    this.chartElement = viewChild.required("chart");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this._destroyed = false;
    this._injector = inject(Injector);
    this.waitingForConnectedRef = null;
  }
  ngOnChanges(changes) {
    if (!this.isBrowser) return;
    this.hydrate(changes);
  }
  ngOnDestroy() {
    this.destroy();
    this._destroyed = true;
  }
  /** Determine if the host element is connected to the document */
  get isConnected() {
    return this.chartElement()?.nativeElement.isConnected;
  }
  hydrate(changes) {
    if (this.waitingForConnectedRef) {
      return;
    }
    const shouldUpdateSeries = this.chartInstance() && this.autoUpdateSeries() && Object.keys(changes).filter((c) => c !== "series").length === 0;
    if (shouldUpdateSeries) {
      this.updateSeries(this.series(), true);
      return;
    }
    afterNextRender({
      read: () => this.createElement()
    }, {
      injector: this._injector
    });
  }
  createElement() {
    return __async(this, null, function* () {
      const {
        default: ApexCharts
      } = yield import("./chunk-GEKWUCF7.js");
      window.ApexCharts ||= ApexCharts;
      if (this._destroyed) return;
      if (!this.isConnected) {
        this.waitForConnected();
        return;
      }
      const options = {};
      const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "parsing", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
      properties.forEach((property) => {
        const value = this[property]();
        if (value) {
          options[property] = value;
        }
      });
      this.destroy();
      const chartInstance = this.ngZone.runOutsideAngular(() => new ApexCharts(this.chartElement().nativeElement, options));
      this.chartInstance.set(chartInstance);
      this.render();
      this.chartReady.emit({
        chartObj: chartInstance
      });
    });
  }
  render() {
    if (this.isConnected) {
      return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
    } else {
      this.waitForConnected();
    }
  }
  updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
  }
  updateSeries(newSeries, animate) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
  }
  appendSeries(newSeries, animate) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
  }
  appendData(newData) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
  }
  highlightSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
  }
  toggleSeries(seriesName) {
    return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
  }
  showSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
  }
  hideSeries(seriesName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
  }
  resetSeries() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
  }
  zoomX(min, max) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
  }
  toggleDataPointSelection(seriesIndex, dataPointIndex) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
  }
  destroy() {
    this.chartInstance()?.destroy();
    this.chartInstance.set(null);
  }
  setLocale(localeName) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
  }
  paper() {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
  }
  addXaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
  }
  addYaxisAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
  }
  addPointAnnotation(options, pushToMemory, context) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
  }
  removeAnnotation(id, options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
  }
  clearAnnotations(options) {
    this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
  }
  dataURI(options) {
    return this.chartInstance()?.dataURI(options);
  }
  waitForConnected() {
    if (this.waitingForConnectedRef) {
      return;
    }
    this.waitingForConnectedRef = afterEveryRender({
      read: () => {
        if (this.isConnected) {
          this.waitingForConnectedRef.destroy();
          this.waitingForConnectedRef = null;
          this.createElement();
        }
      }
    }, {
      injector: this._injector
    });
  }
  static {
    this.\u0275fac = function ChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ChartComponent,
      selectors: [["apx-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.chartElement, _c0, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      inputs: {
        chart: [1, "chart"],
        annotations: [1, "annotations"],
        colors: [1, "colors"],
        dataLabels: [1, "dataLabels"],
        series: [1, "series"],
        stroke: [1, "stroke"],
        labels: [1, "labels"],
        legend: [1, "legend"],
        markers: [1, "markers"],
        noData: [1, "noData"],
        parsing: [1, "parsing"],
        fill: [1, "fill"],
        tooltip: [1, "tooltip"],
        plotOptions: [1, "plotOptions"],
        responsive: [1, "responsive"],
        xaxis: [1, "xaxis"],
        yaxis: [1, "yaxis"],
        forecastDataPoints: [1, "forecastDataPoints"],
        grid: [1, "grid"],
        states: [1, "states"],
        title: [1, "title"],
        subtitle: [1, "subtitle"],
        theme: [1, "theme"],
        autoUpdateSeries: [1, "autoUpdateSeries"]
      },
      outputs: {
        chartReady: "chartReady"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElement(0, "div", null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      selector: "apx-chart",
      template: `<div #chart></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    chart: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "chart",
        required: false
      }]
    }],
    annotations: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "annotations",
        required: false
      }]
    }],
    colors: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "colors",
        required: false
      }]
    }],
    dataLabels: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dataLabels",
        required: false
      }]
    }],
    series: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "series",
        required: false
      }]
    }],
    stroke: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stroke",
        required: false
      }]
    }],
    labels: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "labels",
        required: false
      }]
    }],
    legend: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "legend",
        required: false
      }]
    }],
    markers: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "markers",
        required: false
      }]
    }],
    noData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "noData",
        required: false
      }]
    }],
    parsing: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "parsing",
        required: false
      }]
    }],
    fill: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fill",
        required: false
      }]
    }],
    tooltip: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tooltip",
        required: false
      }]
    }],
    plotOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "plotOptions",
        required: false
      }]
    }],
    responsive: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "responsive",
        required: false
      }]
    }],
    xaxis: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "xaxis",
        required: false
      }]
    }],
    yaxis: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "yaxis",
        required: false
      }]
    }],
    forecastDataPoints: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "forecastDataPoints",
        required: false
      }]
    }],
    grid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "grid",
        required: false
      }]
    }],
    states: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "states",
        required: false
      }]
    }],
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    subtitle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "subtitle",
        required: false
      }]
    }],
    theme: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "theme",
        required: false
      }]
    }],
    autoUpdateSeries: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoUpdateSeries",
        required: false
      }]
    }],
    chartReady: [{
      type: Output,
      args: ["chartReady"]
    }],
    chartElement: [{
      type: ViewChild,
      args: ["chart", {
        isSignal: true
      }]
    }]
  });
})();
var declarations = [ChartComponent];
var NgApexchartsModule = class _NgApexchartsModule {
  static {
    this.\u0275fac = function NgApexchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgApexchartsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgApexchartsModule,
      imports: [ChartComponent],
      exports: [ChartComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgApexchartsModule, [{
    type: NgModule,
    args: [{
      imports: [declarations],
      exports: [declarations]
    }]
  }], null, null);
})();

// src/app/pages/mi-charter/pages/estadisticas/estadisticas.component.ts
var _c02 = () => ({ v: "3m", l: "3M" });
var _c1 = () => ({ v: "6m", l: "6M" });
var _c2 = () => ({ v: "12m", l: "12M" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ({ l: "Completadas", c: "bg-green-500", v: a0 });
var _c5 = (a0) => ({ l: "Confirmadas", c: "bg-blue-500", v: a0 });
var _c6 = (a0) => ({ l: "Pendientes", c: "bg-amber-400", v: a0 });
var _c7 = (a0) => ({ l: "Canceladas", c: "bg-red-500", v: a0 });
var _c8 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c9 = (a0) => ["/mi-charter/yates", a0, "editar"];
function EstadisticasComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function EstadisticasComponent_button_10_Template_button_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPeriod(opt_r2.v));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.period === opt_r2.v ? "bg-white text-brand-600 shadow-sm dark:bg-white/[0.08] dark:text-brand-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.l, " ");
  }
}
function EstadisticasComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5, "Cargando estad\xEDsticas...");
    \u0275\u0275elementEnd()()();
  }
}
function EstadisticasComponent_ng_container_14_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "span", 67);
    \u0275\u0275elementStart(2, "span", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r4.c);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.l);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.v);
  }
}
function EstadisticasComponent_ng_container_14_div_127_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 99);
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.imageUrl(s_r5.vessel.photos[0]), \u0275\u0275sanitizeUrl)("alt", s_r5.vessel.name);
  }
}
function EstadisticasComponent_ng_container_14_div_127_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.typeIcon(s_r5.vessel.type));
  }
}
function EstadisticasComponent_ng_container_14_div_127_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275template(2, EstadisticasComponent_ng_container_14_div_127_div_7_img_2_Template, 1, 2, "img", 77)(3, EstadisticasComponent_ng_container_14_div_127_div_7_div_3_Template, 2, 1, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79)(5, "div", 80)(6, "div")(7, "div", 66)(8, "h3", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 82);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 83);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57)(15, "p", 84);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 85);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 86)(21, "div", 87)(22, "p", 88);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 89);
    \u0275\u0275text(26, "Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 90);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 91)(30, "p", 92);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 89);
    \u0275\u0275text(34, "Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 93);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 94)(38, "p", 95);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 89);
    \u0275\u0275text(41, "Total reservas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 96)(43, "a", 97);
    \u0275\u0275text(44, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 98);
    \u0275\u0275text(46, " \u{1F4CB} Reservas ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r5.vessel.photos == null ? null : s_r5.vessel.photos[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(s_r5.vessel.photos == null ? null : s_r5.vessel.photos[0]));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r5.vessel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.verificationClass(s_r5.vessel.verificationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.verificationLabel(s_r5.vessel.verificationStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r5.vessel.type, " \xB7 ", s_r5.vessel.capacity, " pax");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 15, s_r5.totalRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tasaService.formatBs(s_r5.totalRevenue));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(24, 18, s_r5.charterRevenue, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", s_r5.charterCount, " reservas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(32, 21, s_r5.islandRevenue, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", s_r5.islandCount, " reservas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.totalBookings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c9, s_r5.vessel.id));
  }
}
function EstadisticasComponent_ng_container_14_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275text(3, "Rendimiento por embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 73);
    \u0275\u0275template(7, EstadisticasComponent_ng_container_14_div_127_div_7_Template, 47, 26, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.vesselStats.length, " embarcacion", ctx_r2.vesselStats.length !== 1 ? "es" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.vesselStats);
  }
}
function EstadisticasComponent_ng_container_14_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275text(2, "\u26F5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 103);
    \u0275\u0275text(4, "Sin embarcaciones registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 104);
    \u0275\u0275text(6, "Agrega tu primera embarcaci\xF3n para comenzar a ver estad\xEDsticas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 105);
    \u0275\u0275text(8, " Ir a Mis embarcaciones \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function EstadisticasComponent_ng_container_14_div_129_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 114)(1, "td", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 116);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 117);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 118)(10, "span", 119);
    \u0275\u0275text(11, "\u26F5 Charter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 120);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 121);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r6.client == null ? null : a_r6.client.firstName, " ", a_r6.client == null ? null : a_r6.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.vessel == null ? null : a_r6.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 7, a_r6.startDate, "dd MMM"), " \u2013 ", \u0275\u0275pipeBind2(8, 10, a_r6.endDate, "dd MMM yy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 13, a_r6.totalPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r6.status);
  }
}
function EstadisticasComponent_ng_container_14_div_129_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 114)(1, "td", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 116);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 117);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 118)(9, "span", 122);
    \u0275\u0275text(10, "\u{1F3DD}\uFE0F Excursi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 123);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 121);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r7.client == null ? null : b_r7.client.firstName, " ", b_r7.client == null ? null : b_r7.client.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r7.vessel == null ? null : b_r7.vessel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", b_r7.destination == null ? null : b_r7.destination.icon, " ", b_r7.destination == null ? null : b_r7.destination.name, " \xB7 ", \u0275\u0275pipeBind2(7, 8, b_r7.tripDate, "dd MMM yy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 11, b_r7.totalPrice, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.islandStatusLabel(b_r7.status));
  }
}
function EstadisticasComponent_ng_container_14_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275text(3, "\xDAltimas reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 106);
    \u0275\u0275text(5, "Ver todas \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 107)(7, "table", 108)(8, "thead")(9, "tr", 109)(10, "th", 110);
    \u0275\u0275text(11, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 110);
    \u0275\u0275text(13, "Embarcaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 110);
    \u0275\u0275text(15, "Detalle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 111);
    \u0275\u0275text(17, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 112);
    \u0275\u0275text(19, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 111);
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, EstadisticasComponent_ng_container_14_div_129_tr_23_Template, 17, 16, "tr", 113)(24, EstadisticasComponent_ng_container_14_div_129_tr_24_Template, 16, 14, "tr", 113);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.recentCharter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.recentIsland);
  }
}
function EstadisticasComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 1)(3, "div", 17)(4, "p", 18);
    \u0275\u0275text(5, "Ingresos totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7, "\u{1F4B0}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "div", 17)(15, "p", 18);
    \u0275\u0275text(16, "Reservas activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18, "\u{1F4CB}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 1)(24, "div", 17)(25, "p", 18);
    \u0275\u0275text(26, "Promedio / reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 25);
    \u0275\u0275text(28, "\u{1F4C8}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p", 26);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 24);
    \u0275\u0275text(33, "por reserva activa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 1)(35, "div", 17)(36, "p", 18);
    \u0275\u0275text(37, "Cancelaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 27);
    \u0275\u0275text(39, "\u274C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p", 28);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 24);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "h3", 32);
    \u0275\u0275text(48, "Ingresos por mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 33)(50, "span", 34);
    \u0275\u0275element(51, "span", 35);
    \u0275\u0275text(52, " Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 34);
    \u0275\u0275element(54, "span", 36);
    \u0275\u0275text(55, " Excursiones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(56, "apx-chart", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 1)(58, "h3", 38);
    \u0275\u0275text(59, "Tipo de servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "apx-chart", 39);
    \u0275\u0275elementStart(61, "div", 40)(62, "div", 41)(63, "span", 42);
    \u0275\u0275element(64, "span", 43);
    \u0275\u0275text(65, " Charters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 44);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 41)(69, "span", 42);
    \u0275\u0275element(70, "span", 45);
    \u0275\u0275text(71, " Excursiones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 44);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 46)(75, "span", 47);
    \u0275\u0275text(76, "Charter $");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 48);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 41)(81, "span", 47);
    \u0275\u0275text(82, "Excursiones $");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 49);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(86, "div", 50)(87, "div", 1)(88, "h3", 38);
    \u0275\u0275text(89, "Estado de reservas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 51);
    \u0275\u0275element(91, "apx-chart", 39);
    \u0275\u0275elementStart(92, "div", 52);
    \u0275\u0275template(93, EstadisticasComponent_ng_container_14_div_93_Template, 6, 3, "div", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 1)(95, "h3", 38);
    \u0275\u0275text(96, "Resumen del per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 54)(98, "div", 55)(99, "span", 56);
    \u0275\u0275text(100, "\u26F5 Charter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 57)(102, "p", 58);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 59);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 55)(108, "span", 56);
    \u0275\u0275text(109, "\u{1F3DD}\uFE0F Excursiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 57)(111, "p", 60);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 61);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 55)(117, "span", 56);
    \u0275\u0275text(118, "\u2705 Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 62);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 55)(122, "span", 56);
    \u0275\u0275text(123, "\u{1F4B5} Promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 63);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(127, EstadisticasComponent_ng_container_14_div_127_Template, 8, 3, "div", 64)(128, EstadisticasComponent_ng_container_14_div_128_Template, 9, 0, "div", 65)(129, EstadisticasComponent_ng_container_14_div_129_Template, 25, 2, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 44, ctx_r2.totalRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tasaService.formatBs(ctx_r2.totalRevenue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.totalBookings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.completedCount, " completadas");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(31, 47, ctx_r2.avgPerBooking, "1.0-0"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", ctx_r2.cancellationRate > 20 ? "text-red-600 dark:text-red-400" : "text-gray-800 dark:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.cancellationRate, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.cancelledCount, " canceladas");
    \u0275\u0275advance(13);
    \u0275\u0275property("series", ctx_r2.revenueSeries)("chart", ctx_r2.revenueChart)("xaxis", ctx_r2.revenueXAxis)("yaxis", ctx_r2.revenueYAxis)("plotOptions", ctx_r2.revenuePlot)("dataLabels", ctx_r2.revenueDataLabels)("stroke", ctx_r2.revenueStroke)("grid", ctx_r2.revenueGrid)("fill", ctx_r2.revenueFill)("tooltip", ctx_r2.revenueTooltip)("legend", ctx_r2.revenueLegend)("colors", ctx_r2.revenueColors);
    \u0275\u0275advance(4);
    \u0275\u0275property("series", ctx_r2.donutSeries)("chart", ctx_r2.donutChart)("labels", ctx_r2.donutLabels)("colors", ctx_r2.donutColors)("responsive", ctx_r2.donutResponsive);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.donutSeries[0]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.donutSeries[1]);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(79, 50, ctx_r2.charterRevenue, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(85, 53, ctx_r2.islandRevenue, "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275property("series", ctx_r2.statusSeries)("chart", ctx_r2.statusChart)("labels", ctx_r2.statusLabels)("colors", ctx_r2.statusColors)("responsive", ctx_r2.statusResponsive);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(73, _c8, \u0275\u0275pureFunction1(65, _c4, ctx_r2.statusSeries[0]), \u0275\u0275pureFunction1(67, _c5, ctx_r2.statusSeries[1]), \u0275\u0275pureFunction1(69, _c6, ctx_r2.statusSeries[2]), \u0275\u0275pureFunction1(71, _c7, ctx_r2.statusSeries[3])));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(104, 56, ctx_r2.charterRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tasaService.formatBs(ctx_r2.charterRevenue));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(113, 59, ctx_r2.islandRevenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tasaService.formatBs(ctx_r2.islandRevenue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.completedCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(126, 62, ctx_r2.avgPerBooking, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vesselStats.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vessels.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.recentCharter.length > 0 || ctx_r2.recentIsland.length > 0);
  }
}
var EstadisticasComponent = class _EstadisticasComponent {
  auth = inject(AuthService);
  alqService = inject(AlquileresService);
  tripsService = inject(IslandTripsService);
  embService = inject(EmbarcacionesService);
  tasaService = inject(TasaService);
  loading = true;
  period = "6m";
  allCharters = [];
  allBookings = [];
  // ── Mi negocio data ──────────────────────────────────────────────────────────
  vessels = [];
  vesselStats = [];
  recentCharter = [];
  recentIsland = [];
  // ── KPIs (period-filtered) ───────────────────────────────────────────────────
  totalRevenue = 0;
  charterRevenue = 0;
  islandRevenue = 0;
  totalBookings = 0;
  cancelledCount = 0;
  completedCount = 0;
  avgPerBooking = 0;
  cancellationRate = 0;
  // ── Charts ───────────────────────────────────────────────────────────────────
  revenueSeries = [];
  revenueChart = { type: "bar", height: 260, fontFamily: "Outfit, sans-serif", toolbar: { show: false } };
  revenueXAxis = { categories: [], axisBorder: { show: false }, axisTicks: { show: false } };
  revenueYAxis = { title: { text: void 0 }, labels: { formatter: (v) => `$${v >= 1e3 ? (v / 1e3).toFixed(0) + "k" : v}` } };
  revenuePlot = { bar: { horizontal: false, columnWidth: "45%", borderRadius: 5, borderRadiusApplication: "end" } };
  revenueDataLabels = { enabled: false };
  revenueStroke = { show: true, width: 4, colors: ["transparent"] };
  revenueGrid = { yaxis: { lines: { show: true } } };
  revenueFill = { opacity: 1 };
  revenueTooltip = { y: { formatter: (v) => `$${v.toLocaleString("es-VE", { minimumFractionDigits: 0 })}` } };
  revenueLegend = { show: true, position: "top", horizontalAlign: "left", fontFamily: "Outfit" };
  revenueColors = ["#7c3aed", "#3b82f6"];
  donutSeries = [0, 0];
  donutChart = { type: "donut", height: 240, fontFamily: "Outfit, sans-serif" };
  donutLabels = ["Charters", "Excursiones"];
  donutColors = ["#7c3aed", "#3b82f6"];
  donutResponsive = [{ breakpoint: 480, options: { chart: { height: 200 } } }];
  statusSeries = [];
  statusChart = { type: "donut", height: 220, fontFamily: "Outfit, sans-serif" };
  statusLabels = ["Completadas", "Confirmadas", "Pendientes", "Canceladas"];
  statusColors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];
  statusResponsive = [{ breakpoint: 480, options: { chart: { height: 180 } } }];
  get providerId() {
    return this.auth.user()?.providerProfile?.id ?? null;
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
      charters: this.alqService.getByProvider(pid),
      bookings: this.tripsService.getBookings({ providerId: pid })
    }).subscribe({
      next: ({ vessels, charters, bookings }) => {
        this.vessels = vessels;
        this.allCharters = charters;
        this.allBookings = bookings;
        this.recentCharter = [...charters].filter((a) => a.status !== "CANCELLED").sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()).slice(0, 5);
        this.recentIsland = [...bookings].filter((b) => b.status !== "CANCELLED").sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()).slice(0, 5);
        this.vesselStats = vessels.map((v) => {
          const vc = charters.filter((a) => a.vessel?.id === v.id && a.status !== "CANCELLED");
          const vi = bookings.filter((b) => b.vessel?.id === v.id && b.status !== "CANCELLED");
          const cr = vc.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
          const ir = vi.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
          return { vessel: v, charterRevenue: cr, charterCount: vc.length, islandRevenue: ir, islandCount: vi.length, totalRevenue: cr + ir, totalBookings: vc.length + vi.length };
        }).sort((a, b) => b.totalRevenue - a.totalRevenue);
        this.compute();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  setPeriod(p) {
    this.period = p;
    this.compute();
  }
  compute() {
    const cutoff = this.cutoffDate();
    const charters = this.allCharters.filter((a) => new Date(a.createdAt ?? 0) >= cutoff);
    const bookings = this.allBookings.filter((b) => new Date(b.createdAt ?? 0) >= cutoff);
    const activeC = charters.filter((a) => a.status !== "CANCELLED");
    const activeB = bookings.filter((b) => b.status !== "CANCELLED");
    this.charterRevenue = activeC.reduce((s, a) => s + Number(a.totalPrice ?? 0), 0);
    this.islandRevenue = activeB.reduce((s, b) => s + Number(b.totalPrice ?? 0), 0);
    this.totalRevenue = this.charterRevenue + this.islandRevenue;
    this.totalBookings = activeC.length + activeB.length;
    this.avgPerBooking = this.totalBookings > 0 ? this.totalRevenue / this.totalBookings : 0;
    this.cancelledCount = charters.filter((a) => a.status === "CANCELLED").length + bookings.filter((b) => b.status === "CANCELLED").length;
    const total = charters.length + bookings.length;
    this.cancellationRate = total > 0 ? Math.round(this.cancelledCount / total * 100) : 0;
    this.completedCount = charters.filter((a) => a.status === "COMPLETED").length + bookings.filter((b) => b.status === "COMPLETED").length;
    const buckets = this.buildMonthBuckets();
    for (const a of activeC) {
      const b = buckets.find((x) => x.key === this.monthKey(new Date(a.createdAt ?? 0)));
      if (b)
        b.charter += Number(a.totalPrice ?? 0);
    }
    for (const bk of activeB) {
      const b = buckets.find((x) => x.key === this.monthKey(new Date(bk.createdAt ?? 0)));
      if (b)
        b.island += Number(bk.totalPrice ?? 0);
    }
    this.revenueSeries = [
      { name: "Charter", data: buckets.map((b) => Math.round(b.charter)) },
      { name: "Excursiones", data: buckets.map((b) => Math.round(b.island)) }
    ];
    this.revenueXAxis = __spreadProps(__spreadValues({}, this.revenueXAxis), { categories: buckets.map((b) => b.label) });
    this.donutSeries = [activeC.length, activeB.length];
    const all = [...charters, ...bookings];
    this.statusSeries = [
      all.filter((x) => x.status === "COMPLETED").length,
      all.filter((x) => x.status === "CONFIRMED").length,
      all.filter((x) => x.status === "PENDING").length,
      all.filter((x) => x.status === "CANCELLED").length
    ];
  }
  cutoffDate() {
    const d = /* @__PURE__ */ new Date();
    d.setMonth(d.getMonth() - (this.period === "3m" ? 3 : this.period === "6m" ? 6 : 12));
    d.setDate(1);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  monthKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  buildMonthBuckets() {
    const months = this.period === "3m" ? 3 : this.period === "6m" ? 6 : 12;
    const MONTHS_ES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const now = /* @__PURE__ */ new Date();
    return Array.from({ length: months }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (months - 1 - i), 1);
      return { key: this.monthKey(d), label: `${MONTHS_ES[d.getMonth()]} ${String(d.getFullYear()).slice(-2)}`, charter: 0, island: 0 };
    });
  }
  // ── Vessel helpers (from mi-negocio) ──────────────────────────────────────
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
  static \u0275fac = function EstadisticasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EstadisticasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadisticasComponent, selectors: [["app-estadisticas"]], decls: 15, vars: 10, consts: [[1, "space-y-5"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-1", "rounded-xl", "border", "border-gray-200", "bg-gray-50", "p-1", "dark:border-gray-700", "dark:bg-white/[0.04]"], ["class", "rounded-lg px-3.5 py-1.5 text-xs font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/mi-charter/yates", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", "dark:text-gray-300"], ["class", "flex items-center justify-center py-24", 4, "ngIf"], [4, "ngIf"], [1, "rounded-lg", "px-3.5", "py-1.5", "text-xs", "font-semibold", "transition", 3, "click", "ngClass"], [1, "flex", "items-center", "justify-center", "py-24"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "text-5xl", "animate-bounce"], [1, "text-sm", "text-gray-400"], [1, "grid", "grid-cols-2", "gap-4", "lg:grid-cols-4"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-gray-400"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-brand-50", "text-lg", "dark:bg-brand-500/10"], [1, "mt-3", "text-3xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "mt-0.5", "text-xs", "text-brand-500"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-blue-50", "text-lg", "dark:bg-blue-500/10"], [1, "mt-3", "text-3xl", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-gray-400"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-purple-50", "text-lg", "dark:bg-purple-500/10"], [1, "mt-3", "text-3xl", "font-extrabold", "text-purple-600", "dark:text-purple-400"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-red-50", "text-lg", "dark:bg-red-500/10"], [1, "mt-3", "text-3xl", "font-extrabold", 3, "ngClass"], [1, "grid", "grid-cols-1", "gap-5", "lg:grid-cols-3"], [1, "lg:col-span-2", "rounded-2xl", "border", "border-gray-200", "bg-white", "p-5", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "flex", "items-center", "gap-4", "text-xs", "text-gray-400"], [1, "flex", "items-center", "gap-1.5"], [1, "inline-block", "h-2.5", "w-2.5", "rounded-sm", "bg-purple-500"], [1, "inline-block", "h-2.5", "w-2.5", "rounded-sm", "bg-blue-500"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "stroke", "grid", "fill", "tooltip", "legend", "colors"], [1, "mb-4", "text-sm", "font-semibold", "text-gray-800", "dark:text-white/90"], [3, "series", "chart", "labels", "colors", "responsive"], [1, "mt-4", "space-y-2"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center", "gap-2", "text-gray-600", "dark:text-gray-400"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-purple-500"], [1, "font-bold", "text-gray-800", "dark:text-white"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-blue-500"], [1, "border-t", "border-gray-100", "pt-2", "dark:border-gray-800", "flex", "items-center", "justify-between", "text-sm"], [1, "text-gray-500"], [1, "font-bold", "text-purple-600", "dark:text-purple-400"], [1, "font-bold", "text-blue-600", "dark:text-blue-400"], [1, "grid", "grid-cols-1", "gap-5", "sm:grid-cols-2"], [1, "flex", "items-center", "gap-6"], [1, "flex", "flex-col", "gap-3", "text-sm"], ["class", "flex items-center gap-2", 4, "ngFor", "ngForOf"], [1, "space-y-2.5"], [1, "flex", "items-center", "justify-between", "rounded-xl", "bg-gray-50", "px-4", "py-2.5", "dark:bg-white/[0.04]"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "text-right"], [1, "text-sm", "font-bold", "text-purple-600", "dark:text-purple-400"], [1, "text-[10px]", "text-purple-400"], [1, "text-sm", "font-bold", "text-blue-600", "dark:text-blue-400"], [1, "text-[10px]", "text-blue-400"], [1, "text-sm", "font-bold", "text-green-600", "dark:text-green-400"], [1, "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], ["class", "rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]", 4, "ngIf"], ["class", "rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [1, "h-2.5", "w-2.5", "flex-shrink-0", "rounded-full", 3, "ngClass"], [1, "text-gray-600", "dark:text-gray-400"], [1, "ml-auto", "font-bold", "text-gray-800", "dark:text-white"], [1, "rounded-2xl", "border", "border-gray-200", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-white/[0.03]"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-100", "px-5", "py-4", "dark:border-gray-800"], [1, "text-base", "font-semibold", "text-gray-800", "dark:text-white/90"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-800"], ["class", "flex flex-col gap-4 p-5 sm:flex-row sm:items-center", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "gap-4", "p-5", "sm:flex-row", "sm:items-center"], [1, "h-24", "w-full", "flex-shrink-0", "overflow-hidden", "rounded-xl", "bg-gray-100", "dark:bg-gray-800", "sm:h-20", "sm:w-28"], ["class", "h-full w-full object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-full items-center justify-center text-3xl opacity-20", 4, "ngIf"], [1, "flex", "flex-1", "flex-col", "justify-between"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-base", "font-bold", "text-gray-800", "dark:text-white/90"], [1, "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "text-xs", "text-gray-400"], [1, "text-2xl", "font-extrabold", "text-brand-600", "dark:text-brand-400"], [1, "text-xs", "text-brand-500"], [1, "mt-3", "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "bg-purple-50", "p-3", "text-center", "dark:bg-purple-500/10"], [1, "text-base", "font-extrabold", "text-purple-700", "dark:text-purple-400"], [1, "text-[10px]", "text-gray-400"], [1, "text-[10px]", "text-purple-500"], [1, "rounded-xl", "bg-blue-50", "p-3", "text-center", "dark:bg-blue-500/10"], [1, "text-base", "font-extrabold", "text-blue-700", "dark:text-blue-400"], [1, "text-[10px]", "text-blue-500"], [1, "rounded-xl", "bg-gray-50", "p-3", "text-center", "dark:bg-white/[0.04]"], [1, "text-base", "font-extrabold", "text-gray-800", "dark:text-white"], [1, "flex", "flex-col", "gap-1.5", "justify-center"], [1, "block", "rounded-lg", "border", "border-gray-200", "px-3", "py-1.5", "text-center", "text-xs", "font-medium", "text-gray-600", "hover:border-brand-300", "hover:text-brand-600", "transition", "dark:border-gray-700", 3, "routerLink"], ["routerLink", "/mi-charter/reservas", 1, "block", "rounded-lg", "border", "border-brand-200", "px-3", "py-1.5", "text-center", "text-xs", "font-medium", "text-brand-600", "hover:bg-brand-50", "transition", "dark:border-brand-500/30"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center", "text-3xl", "opacity-20"], [1, "rounded-2xl", "border", "border-dashed", "border-gray-300", "bg-white", "p-14", "text-center", "dark:border-gray-700", "dark:bg-white/[0.02]"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-bold", "text-gray-700", "dark:text-white/80"], [1, "mt-2", "text-sm", "text-gray-500"], ["routerLink", "/mi-charter/yates", 1, "mt-5", "inline-flex", "rounded-xl", "bg-brand-500", "px-6", "py-3", "text-sm", "font-bold", "text-white", "hover:bg-brand-600"], ["routerLink", "/mi-charter/reservas", 1, "text-xs", "font-semibold", "text-brand-500", "hover:text-brand-600"], [1, "overflow-x-auto"], [1, "min-w-full"], [1, "border-b", "border-gray-100", "dark:border-gray-800"], [1, "px-5", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500"], [1, "px-5", "py-3", "text-right", "text-xs", "font-medium", "text-gray-500"], ["class", "border-b border-gray-50 hover:bg-gray-50/50 dark:border-gray-800 dark:hover:bg-white/[0.02]", 4, "ngFor", "ngForOf"], [1, "border-b", "border-gray-50", "hover:bg-gray-50/50", "dark:border-gray-800", "dark:hover:bg-white/[0.02]"], [1, "px-5", "py-3.5", "text-sm", "font-medium", "text-gray-800", "dark:text-white/90"], [1, "px-5", "py-3.5", "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "px-5", "py-3.5", "text-xs", "text-gray-400"], [1, "px-5", "py-3.5", "text-center"], [1, "inline-flex", "rounded-full", "bg-purple-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-purple-700", "dark:bg-purple-500/10", "dark:text-purple-400"], [1, "px-5", "py-3.5", "text-right", "text-sm", "font-bold", "text-brand-600", "dark:text-brand-400"], [1, "px-5", "py-3.5", "text-center", "text-xs", "text-gray-400"], [1, "inline-flex", "rounded-full", "bg-blue-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-blue-700", "dark:bg-blue-500/10", "dark:text-blue-400"], [1, "px-5", "py-3.5", "text-right", "text-sm", "font-bold", "text-blue-600", "dark:text-blue-400"]], template: function EstadisticasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Estad\xEDsticas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Rendimiento de tu negocio y an\xE1lisis de ingresos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275template(10, EstadisticasComponent_button_10_Template, 2, 2, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, " \u2693 Gestionar flota \u2192 ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, EstadisticasComponent_div_13_Template, 6, 0, "div", 9)(14, EstadisticasComponent_ng_container_14_Template, 130, 78, "ng-container", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction3(6, _c3, \u0275\u0275pureFunction0(3, _c02), \u0275\u0275pureFunction0(4, _c1), \u0275\u0275pureFunction0(5, _c2)));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, NgApexchartsModule, ChartComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadisticasComponent, [{
    type: Component,
    args: [{ selector: "app-estadisticas", standalone: true, imports: [CommonModule, RouterModule, NgApexchartsModule], template: `<div class="space-y-5">

  <!-- Header -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white/90">Estad\xEDsticas</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Rendimiento de tu negocio y an\xE1lisis de ingresos.</p>
      </div>
      <div class="flex items-center gap-3">
        <!-- Period selector -->
        <div class="flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-white/[0.04]">
          <button *ngFor="let opt of [{v:'3m',l:'3M'},{v:'6m',l:'6M'},{v:'12m',l:'12M'}]"
            (click)="setPeriod($any(opt.v))"
            [ngClass]="period === opt.v
              ? 'bg-white text-brand-600 shadow-sm dark:bg-white/[0.08] dark:text-brand-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'"
            class="rounded-lg px-3.5 py-1.5 text-xs font-semibold transition">
            {{ opt.l }}
          </button>
        </div>
        <a routerLink="/mi-charter/yates"
          class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-600 transition dark:border-gray-700 dark:text-gray-300">
          \u2693 Gestionar flota \u2192
        </a>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="flex items-center justify-center py-24">
    <div class="flex flex-col items-center gap-4">
      <div class="text-5xl animate-bounce">\u{1F4CA}</div>
      <p class="text-sm text-gray-400">Cargando estad\xEDsticas...</p>
    </div>
  </div>

  <ng-container *ngIf="!loading">

    <!-- \u2500\u2500 KPI cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Ingresos totales</p>
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-lg dark:bg-brand-500/10">\u{1F4B0}</span>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-brand-600 dark:text-brand-400">\${{ totalRevenue | number:'1.0-0' }}</p>
        <p class="mt-0.5 text-xs text-brand-500">{{ tasaService.formatBs(totalRevenue) }}</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Reservas activas</p>
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-500/10">\u{1F4CB}</span>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-gray-800 dark:text-white">{{ totalBookings }}</p>
        <p class="mt-0.5 text-xs text-gray-400">{{ completedCount }} completadas</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Promedio / reserva</p>
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-lg dark:bg-purple-500/10">\u{1F4C8}</span>
        </div>
        <p class="mt-3 text-3xl font-extrabold text-purple-600 dark:text-purple-400">\${{ avgPerBooking | number:'1.0-0' }}</p>
        <p class="mt-0.5 text-xs text-gray-400">por reserva activa</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Cancelaciones</p>
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-lg dark:bg-red-500/10">\u274C</span>
        </div>
        <p class="mt-3 text-3xl font-extrabold"
          [ngClass]="cancellationRate > 20 ? 'text-red-600 dark:text-red-400' : 'text-gray-800 dark:text-white'">
          {{ cancellationRate }}%
        </p>
        <p class="mt-0.5 text-xs text-gray-400">{{ cancelledCount }} canceladas</p>
      </div>
    </div>

    <!-- \u2500\u2500 Revenue bar chart + type donut \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <!-- Bar chart -->
      <div class="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Ingresos por mes</h3>
          <div class="flex items-center gap-4 text-xs text-gray-400">
            <span class="flex items-center gap-1.5"><span class="inline-block h-2.5 w-2.5 rounded-sm bg-purple-500"></span> Charter</span>
            <span class="flex items-center gap-1.5"><span class="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500"></span> Excursiones</span>
          </div>
        </div>
        <apx-chart [series]="revenueSeries" [chart]="revenueChart" [xaxis]="revenueXAxis" [yaxis]="revenueYAxis"
          [plotOptions]="revenuePlot" [dataLabels]="revenueDataLabels" [stroke]="revenueStroke"
          [grid]="revenueGrid" [fill]="revenueFill" [tooltip]="revenueTooltip"
          [legend]="revenueLegend" [colors]="revenueColors">
        </apx-chart>
      </div>

      <!-- Type donut -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 class="mb-4 text-sm font-semibold text-gray-800 dark:text-white/90">Tipo de servicio</h3>
        <apx-chart [series]="donutSeries" [chart]="donutChart" [labels]="donutLabels"
          [colors]="donutColors" [responsive]="donutResponsive">
        </apx-chart>
        <div class="mt-4 space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span class="h-2.5 w-2.5 rounded-full bg-purple-500"></span> Charters
            </span>
            <span class="font-bold text-gray-800 dark:text-white">{{ donutSeries[0] }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span class="h-2.5 w-2.5 rounded-full bg-blue-500"></span> Excursiones
            </span>
            <span class="font-bold text-gray-800 dark:text-white">{{ donutSeries[1] }}</span>
          </div>
          <div class="border-t border-gray-100 pt-2 dark:border-gray-800 flex items-center justify-between text-sm">
            <span class="text-gray-500">Charter $</span>
            <span class="font-bold text-purple-600 dark:text-purple-400">\${{ charterRevenue | number:'1.0-0' }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">Excursiones $</span>
            <span class="font-bold text-blue-600 dark:text-blue-400">\${{ islandRevenue | number:'1.0-0' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Status + Resumen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 class="mb-4 text-sm font-semibold text-gray-800 dark:text-white/90">Estado de reservas</h3>
        <div class="flex items-center gap-6">
          <apx-chart [series]="statusSeries" [chart]="statusChart" [labels]="statusLabels"
            [colors]="statusColors" [responsive]="statusResponsive">
          </apx-chart>
          <div class="flex flex-col gap-3 text-sm">
            <div *ngFor="let item of [
              {l:'Completadas', c:'bg-green-500',  v:statusSeries[0]},
              {l:'Confirmadas', c:'bg-blue-500',   v:statusSeries[1]},
              {l:'Pendientes',  c:'bg-amber-400',  v:statusSeries[2]},
              {l:'Canceladas',  c:'bg-red-500',    v:statusSeries[3]}
            ]" class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 flex-shrink-0 rounded-full" [ngClass]="item.c"></span>
              <span class="text-gray-600 dark:text-gray-400">{{ item.l }}</span>
              <span class="ml-auto font-bold text-gray-800 dark:text-white">{{ item.v }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 class="mb-4 text-sm font-semibold text-gray-800 dark:text-white/90">Resumen del per\xEDodo</h3>
        <div class="space-y-2.5">
          <div class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
            <span class="text-sm text-gray-600 dark:text-gray-400">\u26F5 Charter</span>
            <div class="text-right">
              <p class="text-sm font-bold text-purple-600 dark:text-purple-400">\${{ charterRevenue | number:'1.0-0' }}</p>
              <p class="text-[10px] text-purple-400">{{ tasaService.formatBs(charterRevenue) }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
            <span class="text-sm text-gray-600 dark:text-gray-400">\u{1F3DD}\uFE0F Excursiones</span>
            <div class="text-right">
              <p class="text-sm font-bold text-blue-600 dark:text-blue-400">\${{ islandRevenue | number:'1.0-0' }}</p>
              <p class="text-[10px] text-blue-400">{{ tasaService.formatBs(islandRevenue) }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
            <span class="text-sm text-gray-600 dark:text-gray-400">\u2705 Completadas</span>
            <span class="text-sm font-bold text-green-600 dark:text-green-400">{{ completedCount }}</span>
          </div>
          <div class="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
            <span class="text-sm text-gray-600 dark:text-gray-400">\u{1F4B5} Promedio</span>
            <span class="text-sm font-bold text-brand-600 dark:text-brand-400">\${{ avgPerBooking | number:'1.0-0' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Rendimiento por embarcaci\xF3n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div *ngIf="vesselStats.length > 0"
      class="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">Rendimiento por embarcaci\xF3n</h3>
        <span class="text-sm text-gray-400">{{ vesselStats.length }} embarcacion{{ vesselStats.length !== 1 ? 'es' : '' }}</span>
      </div>
      <div class="divide-y divide-gray-100 dark:divide-gray-800">
        <div *ngFor="let s of vesselStats" class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
          <div class="h-24 w-full flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:h-20 sm:w-28">
            <img *ngIf="s.vessel.photos?.[0]" [src]="imageUrl(s.vessel.photos![0])" [alt]="s.vessel.name"
              class="h-full w-full object-cover" />
            <div *ngIf="!s.vessel.photos?.[0]"
              class="flex h-full items-center justify-center text-3xl opacity-20">{{ typeIcon(s.vessel.type) }}</div>
          </div>
          <div class="flex flex-1 flex-col justify-between">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-bold text-gray-800 dark:text-white/90">{{ s.vessel.name }}</h3>
                  <span class="rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="verificationClass(s.vessel.verificationStatus)">
                    {{ verificationLabel(s.vessel.verificationStatus) }}
                  </span>
                </div>
                <p class="text-xs text-gray-400">{{ s.vessel.type }} \xB7 {{ s.vessel.capacity }} pax</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-extrabold text-brand-600 dark:text-brand-400">\${{ s.totalRevenue | number:'1.0-0' }}</p>
                <p class="text-xs text-brand-500">{{ tasaService.formatBs(s.totalRevenue) }}</p>
              </div>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div class="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-500/10">
                <p class="text-base font-extrabold text-purple-700 dark:text-purple-400">\${{ s.charterRevenue | number:'1.0-0' }}</p>
                <p class="text-[10px] text-gray-400">Charter</p>
                <p class="text-[10px] text-purple-500">{{ s.charterCount }} reservas</p>
              </div>
              <div class="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-500/10">
                <p class="text-base font-extrabold text-blue-700 dark:text-blue-400">\${{ s.islandRevenue | number:'1.0-0' }}</p>
                <p class="text-[10px] text-gray-400">Excursiones</p>
                <p class="text-[10px] text-blue-500">{{ s.islandCount }} reservas</p>
              </div>
              <div class="rounded-xl bg-gray-50 p-3 text-center dark:bg-white/[0.04]">
                <p class="text-base font-extrabold text-gray-800 dark:text-white">{{ s.totalBookings }}</p>
                <p class="text-[10px] text-gray-400">Total reservas</p>
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

    <!-- \u2500\u2500 Sin embarcaciones \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div *ngIf="vessels.length === 0"
      class="rounded-2xl border border-dashed border-gray-300 bg-white p-14 text-center dark:border-gray-700 dark:bg-white/[0.02]">
      <div class="text-5xl mb-4">\u26F5</div>
      <h3 class="text-lg font-bold text-gray-700 dark:text-white/80">Sin embarcaciones registradas</h3>
      <p class="mt-2 text-sm text-gray-500">Agrega tu primera embarcaci\xF3n para comenzar a ver estad\xEDsticas.</p>
      <a routerLink="/mi-charter/yates" class="mt-5 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600">
        Ir a Mis embarcaciones \u2192
      </a>
    </div>

    <!-- \u2500\u2500 \xDAltimas reservas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
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
            <tr *ngFor="let a of recentCharter" class="border-b border-gray-50 hover:bg-gray-50/50 dark:border-gray-800 dark:hover:bg-white/[0.02]">
              <td class="px-5 py-3.5 text-sm font-medium text-gray-800 dark:text-white/90">{{ a.client?.firstName }} {{ a.client?.lastName }}</td>
              <td class="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-400">{{ a.vessel?.name }}</td>
              <td class="px-5 py-3.5 text-xs text-gray-400">{{ a.startDate | date:'dd MMM' }} \u2013 {{ a.endDate | date:'dd MMM yy' }}</td>
              <td class="px-5 py-3.5 text-center">
                <span class="inline-flex rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-500/10 dark:text-purple-400">\u26F5 Charter</span>
              </td>
              <td class="px-5 py-3.5 text-right text-sm font-bold text-brand-600 dark:text-brand-400">\${{ a.totalPrice | number:'1.0-0' }}</td>
              <td class="px-5 py-3.5 text-center text-xs text-gray-400">{{ a.status }}</td>
            </tr>
            <tr *ngFor="let b of recentIsland" class="border-b border-gray-50 hover:bg-gray-50/50 dark:border-gray-800 dark:hover:bg-white/[0.02]">
              <td class="px-5 py-3.5 text-sm font-medium text-gray-800 dark:text-white/90">{{ b.client?.firstName }} {{ b.client?.lastName }}</td>
              <td class="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-400">{{ b.vessel?.name }}</td>
              <td class="px-5 py-3.5 text-xs text-gray-400">{{ b.destination?.icon }} {{ b.destination?.name }} \xB7 {{ b.tripDate | date:'dd MMM yy' }}</td>
              <td class="px-5 py-3.5 text-center">
                <span class="inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">\u{1F3DD}\uFE0F Excursi\xF3n</span>
              </td>
              <td class="px-5 py-3.5 text-right text-sm font-bold text-blue-600 dark:text-blue-400">\${{ b.totalPrice | number:'1.0-0' }}</td>
              <td class="px-5 py-3.5 text-center text-xs text-gray-400">{{ islandStatusLabel(b.status) }}</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadisticasComponent, { className: "EstadisticasComponent", filePath: "src/app/pages/mi-charter/pages/estadisticas/estadisticas.component.ts", lineNumber: 51 });
})();
export {
  EstadisticasComponent
};
//# sourceMappingURL=chunk-WCQ7NBRX.js.map
