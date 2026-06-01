import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth-pages/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mis-cuentas-retiro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mis-cuentas-retiro.component.html',
})
export class MisCuentasRetiroComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  editing = signal<string | null>(null);
  saved   = signal<string | null>(null);
  saving  = signal(false);
  loading = true;
  errorMessage = '';

  // Transferencia venezolana
  bankName    = '';
  bankAccount = '';

  // Pago Móvil
  pagoMovilPhone = '';

  // Internacional
  zelleEmail   = '';
  binanceEmail = '';

  readonly bancos = [
    'Banco de Venezuela', 'Banesco', 'Mercantil', 'BNC', 'Bicentenario',
    'BOD', 'Bancamiga', 'Banplus', 'Sofitasa', 'Banco Exterior', 'Otro',
  ];

  get userId(): number | null { return this.auth.user()?.id ?? null; }

  ngOnInit(): void {
    // Pre-fill from cached user profile
    const p = (this.auth.user() as any)?.providerProfile;
    if (p) {
      this.bankName      = p.bankName       ?? '';
      this.bankAccount   = p.bankAccount    ?? '';
      this.pagoMovilPhone = p.pagoMovilPhone ?? '';
      this.zelleEmail    = p.zelleEmail     ?? '';
      this.binanceEmail  = p.binanceEmail   ?? '';
    }

    // Fetch latest from API
    const uid = this.userId;
    if (!uid) { this.loading = false; return; }

    this.http.get<any>(`${environment.apiUrl}/users/${uid}`).subscribe({
      next: (res) => {
        const profile = res?.data?.providerProfile ?? res?.providerProfile ?? {};
        this.bankName       = profile.bankName       ?? this.bankName;
        this.bankAccount    = profile.bankAccount    ?? this.bankAccount;
        this.pagoMovilPhone = profile.pagoMovilPhone ?? this.pagoMovilPhone;
        this.zelleEmail     = profile.zelleEmail     ?? this.zelleEmail;
        this.binanceEmail   = profile.binanceEmail   ?? this.binanceEmail;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  toggleEdit(section: string): void {
    this.editing.set(this.editing() === section ? null : section);
    this.saved.set(null);
    this.errorMessage = '';
  }

  save(section: string): void {
    const uid = this.userId;
    if (!uid) return;

    this.saving.set(true);
    this.errorMessage = '';

    const payload: any = {};
    if (section === 'transferencia') {
      payload.bankName    = this.bankName    || null;
      payload.bankAccount = this.bankAccount || null;
    } else if (section === 'pagoMovil') {
      payload.pagoMovilPhone = this.pagoMovilPhone || null;
    } else if (section === 'internacional') {
      payload.zelleEmail   = this.zelleEmail   || null;
      payload.binanceEmail = this.binanceEmail || null;
    }

    this.http.patch<any>(`${environment.apiUrl}/users/${uid}/provider-profile`, payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.editing.set(null);
        this.saved.set(section);
        setTimeout(() => this.saved.set(null), 3000);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage = err?.error?.message ?? 'Error al guardar.';
      },
    });
  }

  isComplete(section: string): boolean {
    if (section === 'transferencia')   return !!(this.bankName && this.bankAccount);
    if (section === 'pagoMovil')       return !!(this.pagoMovilPhone);
    if (section === 'internacional')   return !!(this.zelleEmail || this.binanceEmail);
    return false;
  }

  maskedAccount(num: string): string {
    if (!num || num.length < 4) return '••••••••';
    return '•'.repeat(Math.max(0, num.length - 4)) + num.slice(-4);
  }
}
