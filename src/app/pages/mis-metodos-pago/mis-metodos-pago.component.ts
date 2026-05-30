import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth-pages/services/auth.service';
import { TasaService } from '../../shared/services/tasa.service';
import { PaymentAccountsService } from '../metodos-cobro/services/payment-accounts.service';
import { PaymentAccount } from '../metodos-cobro/models/payment-account.model';
import { environment } from '../../../environments/environment';
import { ImageUploadComponent } from '../../shared/components/image-upload/image-upload.component';

// ── Legacy constant kept for backward compatibility (no longer used directly) ──
export const MARITIMO_ACCOUNTS = [
  {
    id:       'binance',
    apiValue: 'BINANCE',
    currency: 'USD',
    icon:     '🟡',
    bg:       'bg-yellow-100 dark:bg-yellow-500/10',
    label:    'Binance Pay',
    sub:      'Pago cripto · Pago en USD',
    fields: [
      { label: 'ID Binance', value: '000000000' },
      { label: 'Titular',    value: 'MARITIMO C.A.' },
    ],
  },
  {
    id:       'zelle',
    apiValue: 'ZELLE',
    currency: 'USD',
    icon:     '💜',
    bg:       'bg-purple-100 dark:bg-purple-500/10',
    label:    'Zelle',
    sub:      'Pagos desde banco USA · Pago en USD',
    fields: [
      { label: 'Email',   value: 'pagos@maritimo.com' },
      { label: 'Titular', value: 'MARITIMO C.A.' },
    ],
  },
  {
    id:       'pagoMovil',
    apiValue: 'PAGO_MOVIL',
    currency: 'BS',
    icon:     '📱',
    bg:       'bg-amber-100 dark:bg-amber-500/10',
    label:    'Pago Móvil',
    sub:      'Transferencias interbancarias Venezuela · Pago en Bolívares',
    fields: [
      { label: 'Banco',    value: 'Banco de Venezuela' },
      { label: 'Teléfono', value: '0424-0000000' },
      { label: 'Cédula',   value: 'V-00000000' },
      { label: 'Titular',  value: 'MARITIMO C.A.' },
    ],
  },
  {
    id:       'efectivo',
    apiValue: 'CASH',
    currency: 'USD',
    icon:     '💵',
    bg:       'bg-green-100 dark:bg-green-500/10',
    label:    'Efectivo USD',
    sub:      'Entrega en persona o mensajería · Pago en USD',
    fields: [
      { label: 'Instrucciones', value: 'Contacta a tu agente MARITIMO para coordinar la entrega.' },
    ],
  },
  {
    id:       'transferenciaBS',
    apiValue: 'TRANSFERENCIA',
    currency: 'BS',
    icon:     '🏦',
    bg:       'bg-blue-100 dark:bg-blue-500/10',
    label:    'Transferencia Bolívares',
    sub:      'Transferencia bancaria Venezuela · Pago en Bolívares',
    fields: [
      { label: 'Banco',   value: 'Banco de Venezuela' },
      { label: 'Cuenta',  value: '0102-0000-00-0000000000' },
      { label: 'Cédula',  value: 'J-000000000' },
      { label: 'Titular', value: 'MARITIMO C.A.' },
    ],
  },
  // TDC se maneja aparte — cobro directo, no transferencia
];

@Component({
  selector: 'app-mis-metodos-pago',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageUploadComponent],
  templateUrl: './mis-metodos-pago.component.html',
})
export class MisMetodosPagoComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly accountsService = inject(PaymentAccountsService);
  readonly tasaService  = inject(TasaService);

  accounts: PaymentAccount[] = [];

  // ── Saldo ───────────────────────────────────────────────────────────────────
  saldoNudos  = 0;
  loadingSaldo = true;

  // ── Tarjetas (múltiples) ────────────────────────────────────────────────────
  readonly STORAGE_TDC = 'maritimo_tdcs';
  tarjetas: { id: string; numero: string; titular: string; vencimiento: string; cvv: string }[] = [];
  showAddCard  = signal(false);
  cardError    = '';
  newCard      = this.emptyCard();

  // ── Modal transferencias (Pago Móvil, Zelle, etc.) ──────────────────────────
  showModal   = signal(false);
  submitting  = false;
  reportSent  = signal(false);
  errorMsg    = '';

  // ── Modal TDC (cobro directo) ────────────────────────────────────────────────
  showTdcModal      = signal(false);
  tdcMonto: number | null = null;
  tdcSubmitting     = false;
  tdcReportSent     = signal(false);
  tdcError          = '';
  selectedCardId    = '';

  // Campos del formulario
  selectedAccount: PaymentAccount | null = null;
  nudos: number | null = null;
  referencia  = '';
  proofUrl    = '';

  get user() { return this.auth.user(); }

  // ── Conversión ──────────────────────────────────────────────────────────────
  get montoATransferir(): number {
    if (!this.nudos) return 0;
    if (this.selectedAccount?.currency === 'BS') {
      return this.tasaService.toBs(this.nudos);   // nudos × tasa
    }
    return this.nudos;                             // 1 nudo = 1 USD
  }

  get montoLabel(): string {
    if (!this.nudos || !this.selectedAccount) return '—';
    if (this.selectedAccount.currency === 'BS') {
      return this.tasaService.formatBsDirect(this.montoATransferir);
    }
    return `$${this.montoATransferir.toFixed(2)} USD`;
  }

  get tasa(): number { return this.tasaService.rate(); }

  // ── Helpers tarjetas ────────────────────────────────────────────────────────
  get selectedCard() { return this.tarjetas.find(c => c.id === this.selectedCardId) ?? null; }

  get cardBrand(): 'visa' | 'mastercard' | 'amex' | null {
    const n = this.newCard.numero.replace(/\s/g, '');
    if (!n) return null;
    if (n.startsWith('4')) return 'visa';
    if (/^(5[1-5]|2[2-7])/.test(n)) return 'mastercard';
    if (/^3[47]/.test(n)) return 'amex';
    return null;
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '');
    const isAmex = digits.startsWith('34') || digits.startsWith('37');
    let formatted: string;
    if (isAmex) {
      const d = digits.substring(0, 15);
      formatted = d.replace(/^(\d{1,4})(\d{1,6})?(\d{1,5})?$/, (_, a, b, c) =>
        [a, b, c].filter(Boolean).join(' '));
    } else {
      const d = digits.substring(0, 16);
      formatted = d.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    this.newCard.numero = formatted.trim();
    input.value = this.newCard.numero;
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, '').substring(0, 4);
    if (digits.length >= 2) {
      let month = parseInt(digits.substring(0, 2), 10);
      if (month > 12) month = 12;
      if (month === 0) month = 1;
      digits = month.toString().padStart(2, '0') + digits.substring(2);
    }
    const formatted = digits.length > 2 ? digits.substring(0, 2) + '/' + digits.substring(2) : digits;
    this.newCard.vencimiento = formatted;
    input.value = formatted;
  }

  formatTitular(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newCard.titular = input.value.toUpperCase();
    input.value = this.newCard.titular;
  }

  maskedCard(n: string): string {
    if (!n || n.length < 4) return '•••• •••• •••• ????';
    return `•••• •••• •••• ${n.slice(-4)}`;
  }

  ngOnInit(): void {
    this.tasaService.load();
    this.loadSaldo();
    this.accountsService.getActive().subscribe({ next: (a) => { this.accounts = a; } });
    try {
      const raw = localStorage.getItem(this.STORAGE_TDC);
      if (raw) { const parsed = JSON.parse(raw); this.tarjetas = Array.isArray(parsed) ? parsed : []; }
    } catch {}
  }

  private loadSaldo(): void {
    const uid = this.user?.id;
    if (!uid) { this.loadingSaldo = false; return; }
    this.http.get<any>(`${environment.apiUrl}/payments/wallet-balance/${uid}`)
      .subscribe({
        next: (r) => { this.saldoNudos = Number(r?.balance ?? r?.data?.balance ?? 0); this.loadingSaldo = false; },
        error: () => { this.loadingSaldo = false; },
      });
  }

  // ── Acciones ─────────────────────────────────────────────────────────────────
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  // ── TDC ─────────────────────────────────────────────────────────────────────
  emptyCard(): { id: string; numero: string; titular: string; vencimiento: string; cvv: string } {
    return { id: crypto.randomUUID(), numero: '', titular: '', vencimiento: '', cvv: '' };
  }

  isExpired(card: { vencimiento: string }): boolean {
    const parts = card.vencimiento.split('/');
    if (parts.length !== 2) return false;
    const month = parseInt(parts[0], 10);
    const year  = parseInt('20' + parts[1], 10);
    if (isNaN(month) || isNaN(year)) return false;
    const now = new Date();
    if (year < now.getFullYear()) return true;
    if (year === now.getFullYear() && month < now.getMonth() + 1) return true;
    return false;
  }

  saveCard(): void {
    const c = this.newCard;
    if (!c.numero || !c.titular || !c.vencimiento) {
      this.cardError = 'Completa número, titular y vencimiento.';
      return;
    }
    if (this.isExpired(c)) {
      this.cardError = 'La tarjeta está vencida. Ingresa una tarjeta vigente.';
      return;
    }
    this.cardError = '';
    this.tarjetas = [...this.tarjetas, { ...c }];
    try { localStorage.setItem(this.STORAGE_TDC, JSON.stringify(this.tarjetas)); } catch {}
    this.newCard = this.emptyCard();
    this.showAddCard.set(false);
  }

  removeCard(id: string): void {
    this.tarjetas = this.tarjetas.filter(c => c.id !== id);
    try { localStorage.setItem(this.STORAGE_TDC, JSON.stringify(this.tarjetas)); } catch {}
  }

  openTdcModal(card: { id: string; numero: string; titular: string; vencimiento: string; cvv: string }): void {
    this.selectedCardId = card.id;
    this.tdcMonto       = null;
    this.tdcError       = '';
    this.tdcReportSent.set(false);
    this.showTdcModal.set(true);
  }

  closeTdcModal(): void { this.showTdcModal.set(false); }

  submitTdcRecharge(): void {
    if (!this.tdcMonto || this.tdcMonto <= 0) {
      this.tdcError = 'Ingresa un monto válido.';
      return;
    }
    const uid = this.user?.id;
    if (!uid) return;

    this.tdcSubmitting = true;
    this.tdcError = '';

    const dto: any = {
      clientId:      uid,
      amount:        this.tdcMonto,
      currency:      'USD',
      method:        'CARD',
      referenceType: 'WALLET_TOPUP',
      referenceId:   uid,
      notes: `Recarga TDC $${this.tdcMonto} USD · Tarjeta: **** ${(this.selectedCard?.numero ?? '').slice(-4)}`,
    };

    this.http.post<any>(`${environment.apiUrl}/payments`, dto).subscribe({
      next: () => {
        this.tdcSubmitting = false;
        this.tdcReportSent.set(true);
        this.showTdcModal.set(false);
        this.loadSaldo();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.tdcError = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al procesar.';
        this.tdcSubmitting = false;
      },
    });
  }

  openModal(acc: PaymentAccount): void {
    this.selectedAccount = acc;
    this.nudos      = null;
    this.referencia = '';
    this.proofUrl   = '';
    this.errorMsg   = '';
    this.reportSent.set(false);
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  onProofUploaded(url: string): void { this.proofUrl = url; }

  submitReport(): void {
    if (!this.nudos || this.nudos <= 0 || !this.selectedAccount) {
      this.errorMsg = 'Ingresa una cantidad válida de nudos.';
      return;
    }
    const uid = this.user?.id;
    if (!uid) return;

    this.submitting = true;
    this.errorMsg   = '';

    const dto: any = {
      clientId:      uid,
      amount:        this.nudos,               // nudos = unidades a acreditar
      currency:      this.selectedAccount.currency === 'BS' ? 'VES' : 'USD',
      method:        this.selectedAccount.method,
      referenceType: 'WALLET_TOPUP',
      referenceId:   uid,
      notes: `Recarga de ${this.nudos} nudos via ${this.selectedAccount.label} · Monto: ${this.montoLabel}`,
    };
    if (this.referencia) dto.transactionRef = this.referencia;
    if (this.proofUrl)   dto.proofImageUrl  = this.proofUrl;

    this.http.post<any>(`${environment.apiUrl}/payments`, dto).subscribe({
      next: (res) => {
        this.submitting = false;
        this.showModal.set(false);
        this.loadSaldo();
        const pagoId = res?.data?.id ?? res?.id;
        if (pagoId) {
          this.router.navigate(['/pagos', pagoId]);
        } else {
          this.reportSent.set(true);
        }
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg  = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al reportar el pago.';
        this.submitting = false;
      },
    });
  }
}
