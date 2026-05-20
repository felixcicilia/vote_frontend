import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmbarcacionesService } from '../../services/embarcaciones.service';
import { Embarcacion } from '../../models/embarcacion.model';
import { environment } from '../../../../../environments/environment';

const AMENITY_LABELS: Record<string, string> = {
  WIFI: '📶 Wi-Fi', SOUND_SYSTEM: '🔊 Sonido', AIR_CONDITIONING: '❄️ A/C',
  KITCHEN: '🍳 Cocina', BATHROOM: '🚿 Baño', REFRIGERATOR: '🧊 Refrigerador',
  DRINKING_WATER: '💧 Agua potable', SNORKELING: '🤿 Snorkeling',
  FISHING_EQUIPMENT: '🎣 Pesca', KAYAK: '🛶 Kayak', LIFE_JACKETS: '🦺 Chalecos',
  FIRST_AID_KIT: '🩹 Botiquín', SUN_DECK: '☀️ Cubierta solar',
  DINING_AREA: '🍽️ Comedor', CAPTAIN_INCLUDED: '👨‍✈️ Capitán incluido',
  FUEL_INCLUDED: '⛽ Combustible', PARKING: '🅿️ Estacionamiento', GENERATOR: '🔋 Generador',
};

@Component({
  selector: 'app-verificar-embarcaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verificar-embarcaciones.component.html',
})
export class VerificarEmbarcacionesComponent implements OnInit {
  private readonly embService = inject(EmbarcacionesService);

  loading = true;
  vessels: Embarcacion[] = [];
  processing: number | null = null;
  rejectionReason = '';
  rejectingId: number | null = null;

  // Modal
  detailVessel: Embarcacion | null = null;
  activePhotoIndex = 0;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.embService.getPendingVerification().subscribe({
      next: (v) => { this.vessels = v; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  approve(v: Embarcacion): void {
    this.processing = v.id;
    this.embService.verify(v.id, 'APPROVED').subscribe({
      next: () => {
        this.vessels = this.vessels.filter(x => x.id !== v.id);
        this.processing = null;
        if (this.detailVessel?.id === v.id) this.closeDetail();
      },
      error: () => { this.processing = null; },
    });
  }

  openReject(v: Embarcacion): void {
    this.rejectingId = v.id;
    this.rejectionReason = '';
  }

  confirmReject(v: Embarcacion): void {
    this.processing = v.id;
    this.embService.verify(v.id, 'REJECTED', this.rejectionReason || undefined).subscribe({
      next: () => {
        this.vessels = this.vessels.filter(x => x.id !== v.id);
        this.processing = null;
        this.rejectingId = null;
        if (this.detailVessel?.id === v.id) this.closeDetail();
      },
      error: () => { this.processing = null; },
    });
  }

  cancelReject(): void { this.rejectingId = null; this.rejectionReason = ''; }

  openDetail(v: Embarcacion): void {
    this.detailVessel = v;
    this.activePhotoIndex = 0;
    this.rejectingId = null;
    this.rejectionReason = '';
  }

  closeDetail(): void { this.detailVessel = null; }

  prevPhoto(): void {
    const len = this.detailVessel?.photos?.length ?? 0;
    this.activePhotoIndex = (this.activePhotoIndex - 1 + len) % len;
  }

  nextPhoto(): void {
    const len = this.detailVessel?.photos?.length ?? 0;
    this.activePhotoIndex = (this.activePhotoIndex + 1) % len;
  }

  imageUrl(url?: string | null): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  amenityLabel(a: string): string { return AMENITY_LABELS[a] ?? a; }
  typeIcon(t: string): string { return t === 'YATE' ? '⛵' : t === 'CATAMARAN' ? '🛥️' : t === 'BOTE' ? '🛶' : '🚤'; }
}
