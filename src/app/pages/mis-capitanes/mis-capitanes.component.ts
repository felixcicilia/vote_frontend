import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth-pages/services/auth.service';
import { FilesService } from '../../shared/services/files.service';
import { CaptainsService } from './services/captains.service';
import { Captain, CaptainVerificationStatus } from './models/captain.model';
import { DocUploadComponent } from '../../shared/components/doc-upload/doc-upload.component';

@Component({
  selector: 'app-mis-capitanes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DocUploadComponent],
  templateUrl: './mis-capitanes.component.html',
})
export class MisCapitanesComponent implements OnInit {
  private readonly auth     = inject(AuthService);
  private readonly service  = inject(CaptainsService);
  readonly filesService     = inject(FilesService);
  private readonly fb       = inject(FormBuilder);

  loading   = true;
  saving    = false;
  captains: Captain[] = [];

  // ── Create / edit modal ──────────────────────────────────────────────────
  showForm   = signal(false);
  editTarget = signal<Captain | null>(null);

  // File URLs (managed outside reactive form — uploads are async)
  photoUrl           = '';
  documentFrontUrl   = '';
  documentBackUrl    = '';
  licenseDocumentUrl = '';

  // ── Verify modal (master) ────────────────────────────────────────────────
  verifyTarget  = signal<Captain | null>(null);
  verifyStatus  = signal<CaptainVerificationStatus>('APROBADO');
  verifyNotes   = '';
  verifying     = false;

  // ── Detail modal (master) ────────────────────────────────────────────────
  detailTarget = signal<Captain | null>(null);

  successMessage = '';
  errorMessage   = '';

  form = this.fb.group({
    firstName:     ['', Validators.required],
    lastName:      ['', Validators.required],
    documentId:    [''],
    licenseNumber: [''],
    phone:         [''],
    notes:         [''],
  });

  // ── Role helpers ─────────────────────────────────────────────────────────
  get isMaster(): boolean {
    const r = this.auth.role();
    return r === 'MASTER' || r === 'ADMINISTRADOR';
  }

  get isProvider(): boolean { return this.auth.role() === 'PROVEEDOR'; }

  get providerId(): number | null {
    return (this.auth.user() as any)?.providerProfile?.id ?? null;
  }

  get pageTitle()    { return this.isMaster ? 'Verificación de capitanes' : 'Mis capitanes'; }
  get pageSubtitle() {
    return this.isMaster
      ? 'Revisa y aprueba los capitanes registrados por los proveedores.'
      : 'Registra los capitanes de tu flota. El equipo MARITIMO los verificará.';
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const pid = this.isMaster ? undefined : (this.providerId ?? undefined);
    this.service.getAll(pid).subscribe({
      next: (list) => { this.captains = list; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  // ── Create / Edit modal ───────────────────────────────────────────────────
  openCreate(): void {
    this.editTarget.set(null);
    this.form.reset();
    this.photoUrl = this.documentFrontUrl = this.documentBackUrl = this.licenseDocumentUrl = '';
    this.showForm.set(true);
  }

  openEdit(c: Captain, event: Event): void {
    event.stopPropagation();
    this.editTarget.set(c);
    this.form.patchValue({
      firstName:     c.firstName,
      lastName:      c.lastName,
      documentId:    c.documentId ?? '',
      licenseNumber: c.licenseNumber ?? '',
      phone:         c.phone ?? '',
      notes:         c.notes ?? '',
    });
    this.photoUrl           = c.photoUrl ?? '';
    this.documentFrontUrl   = c.documentFrontUrl ?? '';
    this.documentBackUrl    = c.documentBackUrl ?? '';
    this.licenseDocumentUrl = c.licenseDocumentUrl ?? '';
    this.showForm.set(true);
  }

  closeForm(): void { this.showForm.set(false); this.editTarget.set(null); }

  submit(): void {
    if (this.form.invalid) return;
    if (!this.providerId && !this.isMaster) return;

    this.saving = true;
    const dto = {
      ...this.form.value as any,
      photoUrl:           this.photoUrl           || undefined,
      documentFrontUrl:   this.documentFrontUrl   || undefined,
      documentBackUrl:    this.documentBackUrl     || undefined,
      licenseDocumentUrl: this.licenseDocumentUrl || undefined,
    };
    const target = this.editTarget();

    const req$ = target
      ? this.service.update(target.id, dto, this.providerId ?? undefined)
      : this.service.create(dto, this.providerId!);

    req$.subscribe({
      next: () => {
        this.saving = false;
        this.closeForm();
        this.showSuccess(target ? 'Capitán actualizado.' : 'Capitán registrado. Pendiente de verificación.');
        this.load();
      },
      error: () => { this.saving = false; this.errorMessage = 'Error al guardar. Intente de nuevo.'; },
    });
  }

  deactivate(c: Captain, event: Event): void {
    event.stopPropagation();
    if (!confirm(`¿Desactivar a ${c.firstName} ${c.lastName}?`)) return;
    this.service.remove(c.id, this.providerId ?? undefined).subscribe({
      next: () => { this.showSuccess('Capitán desactivado.'); this.load(); },
    });
  }

  // ── Detail modal (master) ─────────────────────────────────────────────────
  openDetail(c: Captain): void {
    if (!this.isMaster) return;
    this.detailTarget.set(c);
  }

  closeDetail(): void { this.detailTarget.set(null); }

  openVerifyFromDetail(): void {
    const c = this.detailTarget();
    if (!c) return;
    this.closeDetail();
    this.openVerify(c);
  }

  // ── Verify modal (master) ─────────────────────────────────────────────────
  openVerify(c: Captain): void {
    this.verifyTarget.set(c);
    this.verifyStatus.set(c.verificationStatus ?? 'APROBADO');
    this.verifyNotes = c.verificationNotes ?? '';
  }

  closeVerify(): void { this.verifyTarget.set(null); }

  submitVerify(): void {
    const c = this.verifyTarget();
    if (!c) return;
    this.verifying = true;
    this.service.verify(c.id, this.verifyStatus(), this.verifyNotes || undefined).subscribe({
      next: () => {
        this.verifying = false;
        this.closeVerify();
        this.showSuccess('Estado de verificación actualizado.');
        this.load();
      },
      error: () => { this.verifying = false; },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  statusLabel(s: CaptainVerificationStatus): string {
    return ({ PENDIENTE: 'Pendiente', EN_REVISION: 'En revisión', APROBADO: 'Aprobado', RECHAZADO: 'Rechazado' } as any)[s] ?? s;
  }

  statusClass(s: CaptainVerificationStatus): string {
    return ({
      PENDIENTE:   'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      EN_REVISION: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
      APROBADO:    'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      RECHAZADO:   'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
    } as any)[s] ?? '';
  }

  statusDot(s: CaptainVerificationStatus): string {
    return ({ PENDIENTE: 'bg-amber-400', EN_REVISION: 'bg-blue-500', APROBADO: 'bg-green-500', RECHAZADO: 'bg-red-500' } as any)[s] ?? 'bg-gray-400';
  }

  photoSrc(c: Captain): string {
    return c.photoUrl ? this.filesService.absoluteUrl(c.photoUrl) : '';
  }

  initials(c: Captain): string {
    return `${c.firstName?.[0] ?? ''}${c.lastName?.[0] ?? ''}`.toUpperCase();
  }

  hasAnyDoc(c: Captain): boolean {
    return !!(c.documentFrontUrl || c.documentBackUrl || c.licenseDocumentUrl);
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => (this.successMessage = ''), 4000);
  }
}
