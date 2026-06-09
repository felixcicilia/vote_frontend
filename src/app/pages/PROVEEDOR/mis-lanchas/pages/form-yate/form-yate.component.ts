import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { VesselAmenity } from '../../../embarcaciones/models/embarcacion.model';
import { AMENITIES } from '../../../alquileres/data/amenities';
import { ImageUploadComponent } from '../../../../shared/components/image-upload/image-upload.component';

@Component({
  selector: 'app-form-yate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ImageUploadComponent],
  templateUrl: './form-yate.component.html',
})
export class FormYateComponent implements OnInit {
  private readonly fb        = inject(FormBuilder);
  private readonly router    = inject(Router);
  private readonly route     = inject(ActivatedRoute);
  private readonly embService = inject(EmbarcacionesService);
  readonly authService = inject(AuthService);

  readonly ALL_AMENITIES = AMENITIES;
  readonly TYPES = [
    { value: 'LANCHA',    label: 'Lancha',    icon: '🚤' },
    { value: 'YATE',      label: 'Yate',      icon: '⛵' },
    { value: 'CATAMARAN', label: 'Catamarán', icon: '🛥️' },
    { value: 'BOTE',      label: 'Bote',      icon: '🛶' },
  ];

  editId: number | null = null;
  loading = false;
  saving  = false;
  errorMessage = '';
  selectedAmenities: VesselAmenity[] = [];
  photos: string[] = [];

  get isEdit(): boolean { return this.editId !== null; }

  get providerProfileId(): number | null {
    const user = this.authService.user();
    return (user as any)?.providerProfile?.id ?? null;
  }

  readonly LANCHA_TYPES = ['LANCHA'];

  get isPricePerPerson(): boolean {
    return this.LANCHA_TYPES.includes(this.f?.type?.value ?? '');
  }

  form = this.fb.group({
    name:           ['', [Validators.required, Validators.maxLength(150)]],
    type:           ['YATE', Validators.required],
    capacity:       [10, [Validators.required, Validators.min(1), Validators.max(200)]],
    rooms:          [null as number | null],
    bathrooms:      [null as number | null],
    pricePerDay:    [null as number | null],
    pricePerPerson: [null as number | null],
    year:           [null as number | null],
    licensePlate:   [''],
    description:    [''],
    isAvailable:    [true],
  });

  get f() { return this.form.controls; }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = Number(id);
      this.loading = true;
      this.embService.getById(this.editId).subscribe({
        next: (v) => {
          this.form.patchValue({
            name:           v.name,
            type:           v.type,
            capacity:       v.capacity,
            rooms:          v.rooms ?? null,
            bathrooms:      v.bathrooms ?? null,
            pricePerDay:    v.pricePerDay ?? null,
            pricePerPerson: (v as any).pricePerPerson ?? null,
            year:           v.year ?? null,
            licensePlate:   v.licensePlate ?? '',
            description:    v.description ?? '',
            isAvailable:    v.isAvailable,
          });
          this.selectedAmenities = [...(v.amenities ?? [])];
          this.photos = [...(v.photos ?? [])];
          this.loading = false;
        },
        error: () => { this.loading = false; },
      });
    }
  }

  onPhotoUploaded(url: string, index: number): void {
    if (url) this.photos[index] = url;
    else this.photos.splice(index, 1);
  }

  addPhotoSlot(): void { this.photos.push(''); }
  removePhoto(i: number): void { this.photos.splice(i, 1); }

  toggleAmenity(value: VesselAmenity): void {
    const idx = this.selectedAmenities.indexOf(value);
    if (idx === -1) this.selectedAmenities.push(value);
    else this.selectedAmenities.splice(idx, 1);
  }

  hasAmenity(value: VesselAmenity): boolean {
    return this.selectedAmenities.includes(value);
  }

  guardar(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const pid = this.providerProfileId;
    if (!pid && !this.isEdit) {
      this.errorMessage = 'No se encontró tu perfil de proveedor.';
      return;
    }

    const isLancha = this.isPricePerPerson;
    const price = isLancha ? this.f.pricePerPerson.value : this.f.pricePerDay.value;
    if (!price || Number(price) < 1) {
      this.errorMessage = 'Debes ingresar un precio válido.';
      return;
    }

    this.saving = true;
    this.errorMessage = '';

    const payload = {
      name:           this.f.name.value!,
      type:           this.f.type.value as any,
      capacity:       Number(this.f.capacity.value),
      rooms:          this.f.rooms.value ?? undefined,
      bathrooms:      this.f.bathrooms.value ?? undefined,
      pricePerDay:    isLancha ? undefined : Number(this.f.pricePerDay.value),
      pricePerPerson: isLancha ? Number(this.f.pricePerPerson.value) : undefined,
      year:           this.f.year.value ?? undefined,
      licensePlate:   this.f.licensePlate.value ?? undefined,
      description:    this.f.description.value ?? undefined,
      isAvailable:    this.f.isAvailable.value ?? true,
      amenities:      this.selectedAmenities,
      photos:         this.photos.filter(p => !!p),
      ...(this.isEdit ? {} : { providerId: pid! }),
    };

    const req$ = this.isEdit
      ? this.embService.update(this.editId!, payload)
      : this.embService.create(payload as any);

    req$.subscribe({
      next: () => { this.saving = false; this.router.navigate(['/mi-charter/yates']); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMessage = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al guardar.';
        this.saving = false;
      },
    });
  }
}
