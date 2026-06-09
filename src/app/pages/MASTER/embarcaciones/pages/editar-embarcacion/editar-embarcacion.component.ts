import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmbarcacionesService } from '../../services/embarcaciones.service';
import { ImageUploadComponent } from '../../../../shared/components/image-upload/image-upload.component';
import { Embarcacion, VesselAmenity, VesselStatus, VesselVerificationStatus } from '../../models/embarcacion.model';
import { environment } from '../../../../../environments/environment';

const AMENITY_LABELS: Record<VesselAmenity, string> = {
  WIFI: '📶 WiFi', SOUND_SYSTEM: '🔊 Sonido', AIR_CONDITIONING: '❄️ A/C',
  KITCHEN: '🍳 Cocina', BATHROOM: '🚿 Baño', REFRIGERATOR: '🧊 Nevera',
  DRINKING_WATER: '💧 Agua potable', SNORKELING: '🤿 Snorkel',
  FISHING_EQUIPMENT: '🎣 Pesca', KAYAK: '🛶 Kayak', LIFE_JACKETS: '🦺 Chalecos',
  FIRST_AID_KIT: '🩺 Botiquín', SUN_DECK: '☀️ Cubierta sol', DINING_AREA: '🍽️ Comedor',
  CAPTAIN_INCLUDED: '👨‍✈️ Capitán', FUEL_INCLUDED: '⛽ Combustible',
  PARKING: '🅿️ Estacionamiento', GENERATOR: '⚡ Generador',
};

const ALL_AMENITIES = Object.keys(AMENITY_LABELS) as VesselAmenity[];

@Component({
  selector: 'app-editar-embarcacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './editar-embarcacion.component.html',
})
export class EditarEmbarcacionComponent implements OnInit {
  private readonly fb      = inject(FormBuilder);
  private readonly service = inject(EmbarcacionesService);
  private readonly http    = inject(HttpClient);
  private readonly router  = inject(Router);
  private readonly route   = inject(ActivatedRoute);

  readonly amenityLabels = AMENITY_LABELS;
  readonly allAmenities  = ALL_AMENITIES;

  id!: number;
  vessel: Embarcacion | null = null;
  loading = false;
  saving = false;
  savingStatus = false;
  errorMessage = '';
  successMessage = '';

  photos: string[] = [];
  selectedAmenities: VesselAmenity[] = [];
  activePhotoIdx = 0;

  // Campos de verificación / estado (panel master)
  newVerifStatus: VesselVerificationStatus = 'PENDING';
  newStatus: VesselStatus = 'ACTIVE';
  rejectionReason = '';
  showRejectInput = false;

  form = this.fb.group({
    name:         ['', [Validators.required, Validators.minLength(2)]],
    type:         ['LANCHA', Validators.required],
    capacity:     [1,  [Validators.required, Validators.min(1)]],
    rooms:        [null as number | null],
    bathrooms:    [null as number | null],
    description:  [''],
    pricePerDay:  [null as number | null],
    pricePerPerson:[null as number | null],
    licensePlate: [''],
    year:         [null as number | null],
    isAvailable:  [true],
  });

  get apiBase() { return environment.apiUrl.replace('/api', ''); }

  imageUrl(p: string): string {
    return p?.startsWith('http') ? p : `${this.apiBase}${p}`;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  load(): void {
    this.loading = true;
    this.service.getById(this.id).subscribe({
      next: (e) => {
        this.vessel = e;
        this.newVerifStatus = e.verificationStatus;
        this.newStatus      = e.status;
        this.rejectionReason = e.rejectionReason ?? '';
        this.photos         = [...(e.photos ?? [])];
        this.selectedAmenities = [...(e.amenities ?? [])];
        this.form.patchValue({
          name:          e.name,
          type:          e.type,
          capacity:      e.capacity,
          rooms:         e.rooms ?? null,
          bathrooms:     e.bathrooms ?? null,
          description:   e.description ?? '',
          pricePerDay:   e.pricePerDay ?? null,
          pricePerPerson:e.pricePerPerson ?? null,
          licensePlate:  e.licensePlate ?? '',
          year:          e.year ?? null,
          isAvailable:   e.isAvailable,
        });
        this.loading = false;
      },
      error: () => { this.errorMessage = 'No se pudo cargar la embarcación.'; this.loading = false; },
    });
  }

  // ── Amenidades ─────────────────────────────────────────────────────────────
  toggleAmenity(a: VesselAmenity): void {
    if (this.selectedAmenities.includes(a)) {
      this.selectedAmenities = this.selectedAmenities.filter(x => x !== a);
    } else {
      this.selectedAmenities = [...this.selectedAmenities, a];
    }
  }

  // ── Fotos ──────────────────────────────────────────────────────────────────
  onPhotoUploaded(url: string, index: number): void {
    if (url) { this.photos[index] = url; } else { this.photos.splice(index, 1); }
  }
  addPhotoSlot(): void { this.photos.push(''); }
  removePhoto(i: number): void { this.photos.splice(i, 1); if (this.activePhotoIdx >= this.photos.length) this.activePhotoIdx = 0; }

  // ── Guardar datos ──────────────────────────────────────────────────────────
  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.errorMessage = '';
    const v = this.form.value as any;
    this.service.update(this.id, {
      name:          v.name,
      type:          v.type,
      capacity:      Number(v.capacity),
      rooms:         v.rooms ? Number(v.rooms) : undefined,
      bathrooms:     v.bathrooms ? Number(v.bathrooms) : undefined,
      description:   v.description || undefined,
      photos:        this.photos.filter(p => !!p),
      amenities:     this.selectedAmenities,
      pricePerDay:   v.pricePerDay   ? Number(v.pricePerDay)   : undefined,
      pricePerPerson:v.pricePerPerson? Number(v.pricePerPerson): undefined,
      licensePlate:  v.licensePlate  || undefined,
      year:          v.year          ? Number(v.year)          : undefined,
      isAvailable:   v.isAvailable,
    }).subscribe({
      next: () => { this.successMessage = '✅ Cambios guardados correctamente.'; this.saving = false; this.load(); },
      error: (err) => { this.errorMessage = err?.error?.message ?? 'Error al guardar.'; this.saving = false; },
    });
  }

  // ── Panel de estado maestro ────────────────────────────────────────────────
  saveStatus(): void {
    this.savingStatus = true;
    this.errorMessage = '';
    const payload: any = {
      status:             this.newStatus,
      verificationStatus: this.newVerifStatus,
      rejectionReason:    this.newVerifStatus === 'REJECTED' ? (this.rejectionReason || undefined) : undefined,
    };
    this.service.update(this.id, payload).subscribe({
      next: (updated: any) => {
        const data = updated?.data ?? updated;
        if (this.vessel) {
          this.vessel.status             = data.status ?? this.newStatus;
          this.vessel.verificationStatus = data.verificationStatus ?? this.newVerifStatus;
          this.vessel.rejectionReason    = data.rejectionReason ?? null;
        }
        this.savingStatus = false;
        this.successMessage = '✅ Estado actualizado correctamente.';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => { this.errorMessage = err?.error?.message ?? 'Error.'; this.savingStatus = false; },
    });
  }

  isInvalid(f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }

  // ── Labels ─────────────────────────────────────────────────────────────────
  typeIcon(t: string): string {
    return { LANCHA: '🚤', YATE: '⛵', CATAMARAN: '🪸', BOTE: '🛶' }[t] ?? '🚢';
  }
  statusLabel(s: VesselStatus): string {
    return { ACTIVE: 'Activa', MAINTENANCE: 'En mantenimiento', INACTIVE: 'Inactiva' }[s] ?? s;
  }
  statusClass(s: VesselStatus): string {
    return {
      ACTIVE:      'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      MAINTENANCE: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      INACTIVE:    'bg-gray-100 text-gray-500 dark:bg-gray-500/10 dark:text-gray-400',
    }[s] ?? '';
  }
  verifLabel(s: VesselVerificationStatus): string {
    return { APPROVED: '✓ Aprobada', REJECTED: '✗ Rechazada', PENDING: '⏳ Pendiente' }[s] ?? s;
  }
  verifClass(s: VesselVerificationStatus): string {
    return {
      APPROVED: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      REJECTED: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
      PENDING:  'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    }[s] ?? '';
  }
}
