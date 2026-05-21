import {
  Component, Input, AfterViewInit, OnDestroy, OnChanges,
  ViewChild, ElementRef, SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Muelle } from '../../../pages/muelles/models/muelle.model';
import { Embarcacion } from '../../../pages/embarcaciones/models/embarcacion.model';

// ── Anchor icon for muelles ──────────────────────────────────────────────────
function anchorIcon(): L.DivIcon {
  return L.divIcon({
    html: `
      <div style="
        background:#1d4ed8;border:2.5px solid white;border-radius:50%;
        width:16px;height:16px;display:flex;align-items:center;justify-content:center;
        box-shadow:0 2px 8px rgba(29,78,216,.6);font-size:9px;color:white;line-height:1;">
        ⚓
      </div>`,
    className: '',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -12],
  });
}

// ── Vessel icon (triangle pointing up = heading) ─────────────────────────────
function vesselIcon(type: string): L.DivIcon {
  const isYate = type === 'YATE' || type === 'CATAMARAN';
  const color  = isYate ? '#0ea5e9' : '#f97316';
  const emoji  = type === 'YATE' ? '⛵' : type === 'CATAMARAN' ? '🛥️' : '🚤';
  return L.divIcon({
    html: `
      <div style="
        background:${color};border:2px solid white;border-radius:6px;
        width:28px;height:28px;display:flex;align-items:center;justify-content:center;
        font-size:15px;box-shadow:0 2px 10px rgba(0,0,0,.3);cursor:pointer;">
        ${emoji}
      </div>`,
    className: '',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

@Component({
  selector: 'app-mapa-muelles',
  standalone: true,
  imports: [CommonModule],
  template: `<div #mapEl style="height:100%;width:100%;"></div>`,
})
export class MapaMuellesComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() muelles: Muelle[] = [];
  @Input() embarcaciones: Embarcacion[] = [];
  @ViewChild('mapEl') mapEl!: ElementRef<HTMLDivElement>;

  private map?: L.Map;
  private muelleMarkers: L.Marker[] = [];
  private vesselMarkers: L.Marker[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => this.initMap(), 150);
  }

  ngOnChanges(ch: SimpleChanges): void {
    if (!this.map) return;
    if (ch['muelles'])      this.renderMuelles();
    if (ch['embarcaciones']) this.renderVessels();
  }

  ngOnDestroy(): void { this.map?.remove(); }

  private initMap(): void {
    if (!this.mapEl?.nativeElement) return;

    this.map = L.map(this.mapEl.nativeElement, {
      center: [11.0, -63.9],
      zoom: 9,
      zoomControl: false,
      scrollWheelZoom: true,
    });

    // ── Satellite base layer (Esri World Imagery — free, no API key) ──────────
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { attribution: 'Tiles © Esri', maxZoom: 19 }
    ).addTo(this.map);

    // ── Labels overlay (roads / place names on top of satellite) ─────────────
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      { attribution: '', maxZoom: 19, opacity: 0.8 }
    ).addTo(this.map);

    // ── Zoom control bottom-right ─────────────────────────────────────────────
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    this.map.whenReady(() => {
      setTimeout(() => {
        this.map?.invalidateSize();
        this.renderMuelles();
        this.renderVessels();
      }, 200);
    });
  }

  private renderMuelles(): void {
    if (!this.map) return;
    this.muelleMarkers.forEach(m => m.remove());
    this.muelleMarkers = [];

    this.muelles.filter(m => m.latitude && m.longitude).forEach(muelle => {
      const m = L.marker([muelle.latitude, muelle.longitude], { icon: anchorIcon(), zIndexOffset: 100 })
        .bindPopup(`
          <div style="font-family:system-ui;min-width:160px;">
            <p style="font-weight:700;font-size:13px;color:#1d4ed8;margin:0 0 3px">⚓ ${muelle.name}</p>
            ${muelle.city    ? `<p style="font-size:11px;color:#6b7280;margin:0">📍 ${muelle.city}${muelle.state ? ', ' + muelle.state : ''}</p>` : ''}
            ${muelle.address ? `<p style="font-size:10px;color:#9ca3af;margin:2px 0 0">${muelle.address}</p>` : ''}
          </div>
        `, { maxWidth: 220 })
        .addTo(this.map!);
      this.muelleMarkers.push(m);
    });

    this.fitAll();
  }

  private renderVessels(): void {
    if (!this.map) return;
    this.vesselMarkers.forEach(m => m.remove());
    this.vesselMarkers = [];

    this.embarcaciones
      .filter(e => (e as any).latitude && (e as any).longitude)
      .forEach(emb => {
        const lat = (emb as any).latitude;
        const lng = (emb as any).longitude;
        const m = L.marker([lat, lng], { icon: vesselIcon(emb.type), zIndexOffset: 200 })
          .bindPopup(`
            <div style="font-family:system-ui;min-width:160px;">
              <p style="font-weight:700;font-size:13px;color:#0369a1;margin:0 0 3px">
                ${emb.type === 'YATE' ? '⛵' : emb.type === 'CATAMARAN' ? '🛥️' : '🚤'} ${emb.name}
              </p>
              <p style="font-size:11px;color:#6b7280;margin:0">👥 ${emb.capacity} personas · ${emb.type}</p>
              ${emb.pricePerDay ? `<p style="font-size:12px;font-weight:700;color:#0ea5e9;margin:4px 0 0">$${emb.pricePerDay}/día</p>` : ''}
            </div>
          `, { maxWidth: 220 })
          .addTo(this.map!);
        this.vesselMarkers.push(m);
      });
  }

  private fitAll(): void {
    const all = [...this.muelleMarkers, ...this.vesselMarkers];
    if (all.length === 0) return;
    const group = L.featureGroup(all);
    this.map?.fitBounds(group.getBounds().pad(0.35));
    setTimeout(() => this.map?.invalidateSize(), 250);
  }
}
