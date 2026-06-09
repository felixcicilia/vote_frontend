import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth-pages/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-perfil-proveedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil-proveedor.component.html',
})
export class PerfilProveedorComponent implements OnInit {
  private readonly fb   = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly auth         = inject(AuthService);

  saving = false;
  successMessage = '';
  errorMessage = '';

  get userId(): number | null { return this.auth.user()?.id ?? null; }
  get providerProfile() { return (this.auth.user() as any)?.providerProfile ?? null; }

  form = this.fb.group({
    companyName:    ['', [Validators.required, Validators.minLength(2)]],
    description:    [''],
    address:        [''],
    bankName:       [''],
    bankAccount:    [''],
    pagoMovilPhone: [''],
    zelleEmail:     [''],
    binanceEmail:   [''],
  });

  ngOnInit(): void {
    const p = this.providerProfile;
    if (p) {
      this.form.patchValue({
        companyName:    p.companyName    ?? '',
        description:    p.description    ?? '',
        address:        p.address        ?? '',
        bankName:       p.bankName       ?? '',
        bankAccount:    p.bankAccount    ?? '',
        pagoMovilPhone: p.pagoMovilPhone ?? '',
        zelleEmail:     p.zelleEmail     ?? '',
        binanceEmail:   p.binanceEmail   ?? '',
      });
    }
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const uid = this.userId;
    if (!uid) return;

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const v = this.form.value as any;
    const payload: any = {};
    if (v.companyName)    payload.companyName    = v.companyName;
    if (v.description)    payload.description    = v.description;
    if (v.address)        payload.address        = v.address;
    if (v.bankName)       payload.bankName       = v.bankName;
    if (v.bankAccount)    payload.bankAccount    = v.bankAccount;
    if (v.pagoMovilPhone) payload.pagoMovilPhone = v.pagoMovilPhone;
    if (v.zelleEmail)     payload.zelleEmail     = v.zelleEmail;
    if (v.binanceEmail)   payload.binanceEmail   = v.binanceEmail;

    this.http.patch<any>(`${environment.apiUrl}/users/${uid}/provider-profile`, payload).subscribe({
      next: () => {
        this.saving = false;
        this.successMessage = '✅ Perfil actualizado correctamente.';
        setTimeout(() => this.successMessage = '', 4000);
      },
      error: (err) => {
        this.saving = false;
        this.errorMessage = err?.error?.message ?? 'Error al guardar.';
      },
    });
  }

  isInvalid(f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }
}
