import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaymentAccountsService } from './services/payment-accounts.service';
import { PaymentAccount, CreatePaymentAccountDto } from './models/payment-account.model';

const METHODS = [
  { value: 'PAGO_MOVIL',    label: 'Pago Móvil'            },
  { value: 'TRANSFERENCIA', label: 'Transferencia Bolívares'},
  { value: 'ZELLE',         label: 'Zelle'                  },
  { value: 'BINANCE',       label: 'Binance Pay'            },
  { value: 'CASH',          label: 'Efectivo USD'           },
  { value: 'CARD',          label: 'Tarjeta de crédito'     },
];

@Component({
  selector: 'app-metodos-cobro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './metodos-cobro.component.html',
})
export class MetodosCobroComponent implements OnInit {
  private readonly service = inject(PaymentAccountsService);

  accounts: PaymentAccount[] = [];
  loading = true;
  saving = false;
  errorMsg = '';
  successMsg = '';

  readonly METHODS = METHODS;
  readonly CURRENCIES = ['USD', 'BS', 'USDT'];

  showForm = false;
  editingId: number | null = null;

  form: CreatePaymentAccountDto = this.emptyForm();

  ngOnInit(): void { this.load(); }

  private load(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (a) => { this.accounts = a; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  private emptyForm(): CreatePaymentAccountDto {
    return { label: '', icon: '💳', method: 'PAGO_MOVIL', currency: 'USD', description: '', fields: [], isActive: true, sortOrder: 0 };
  }

  openCreate(): void {
    this.form = this.emptyForm();
    this.editingId = null;
    this.showForm = true;
    this.errorMsg = '';
  }

  openEdit(acc: PaymentAccount): void {
    this.form = {
      label: acc.label,
      icon: acc.icon,
      method: acc.method,
      currency: acc.currency,
      description: acc.description ?? '',
      fields: acc.fields.map(f => ({ ...f })),
      isActive: acc.isActive,
      sortOrder: acc.sortOrder,
    };
    this.editingId = acc.id;
    this.showForm = true;
    this.errorMsg = '';
  }

  cancel(): void { this.showForm = false; this.editingId = null; }

  addField(): void { this.form.fields = [...this.form.fields, { label: '', value: '' }]; }
  removeField(i: number): void { this.form.fields = this.form.fields.filter((_, idx) => idx !== i); }

  save(): void {
    if (!this.form.label.trim() || !this.form.method) { this.errorMsg = 'Nombre y método son obligatorios.'; return; }
    this.saving = true;
    this.errorMsg = '';

    const obs = this.editingId
      ? this.service.update(this.editingId, this.form)
      : this.service.create(this.form);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.successMsg = this.editingId ? 'Método actualizado.' : 'Método creado.';
        setTimeout(() => this.successMsg = '', 3000);
        this.load();
      },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : typeof msg === 'string' ? msg : 'Error al guardar.';
        this.saving = false;
      },
    });
  }

  toggleActive(acc: PaymentAccount): void {
    this.service.update(acc.id, { isActive: !acc.isActive }).subscribe({
      next: () => { acc.isActive = !acc.isActive; },
    });
  }

  moveUp(acc: PaymentAccount): void {
    const idx = this.accounts.indexOf(acc);
    if (idx <= 0) return;
    const prev = this.accounts[idx - 1];
    this.service.update(acc.id, { sortOrder: prev.sortOrder }).subscribe();
    this.service.update(prev.id, { sortOrder: acc.sortOrder }).subscribe(() => this.load());
  }

  moveDown(acc: PaymentAccount): void {
    const idx = this.accounts.indexOf(acc);
    if (idx >= this.accounts.length - 1) return;
    const next = this.accounts[idx + 1];
    this.service.update(acc.id, { sortOrder: next.sortOrder }).subscribe();
    this.service.update(next.id, { sortOrder: acc.sortOrder }).subscribe(() => this.load());
  }

  remove(acc: PaymentAccount): void {
    if (!confirm(`¿Eliminar "${acc.label}"?`)) return;
    this.service.remove(acc.id).subscribe({ next: () => this.load() });
  }

  methodLabel(v: string): string {
    return METHODS.find(m => m.value === v)?.label ?? v;
  }
}
