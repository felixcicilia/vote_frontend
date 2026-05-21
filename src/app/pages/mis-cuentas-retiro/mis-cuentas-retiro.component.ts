import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CuentaVenezuela {
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  titular: string;
  cedula: string;
}

interface PagoMovilRetiro {
  banco: string;
  telefono: string;
  cedula: string;
}

const STORAGE_KEY = 'maritimo_cuentas_retiro';

@Component({
  selector: 'app-mis-cuentas-retiro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mis-cuentas-retiro.component.html',
})
export class MisCuentasRetiroComponent implements OnInit {

  editing = signal<string | null>(null);
  saved = signal<string | null>(null);

  cuentaVen: CuentaVenezuela = { banco: '', tipoCuenta: 'CORRIENTE', numeroCuenta: '', titular: '', cedula: '' };
  pagoMovil: PagoMovilRetiro = { banco: '', telefono: '', cedula: '' };

  readonly bancos = [
    'Banco de Venezuela', 'Banesco', 'Mercantil', 'BNC', 'Bicentenario',
    'BOD', 'Bancamiga', 'Banplus', 'Sofitasa', 'Banco Exterior', 'Otro',
  ];

  ngOnInit(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.cuentaVen) this.cuentaVen = { ...this.cuentaVen, ...d.cuentaVen };
        if (d.pagoMovil) this.pagoMovil = { ...this.pagoMovil, ...d.pagoMovil };
      }
    } catch {}
  }

  toggleEdit(section: string): void {
    this.editing.set(this.editing() === section ? null : section);
    this.saved.set(null);
  }

  save(section: string): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const current = raw ? JSON.parse(raw) : {};
      current[section] = (this as any)[section];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch {}
    this.editing.set(null);
    this.saved.set(section);
    setTimeout(() => this.saved.set(null), 3000);
  }

  isComplete(section: string): boolean {
    if (section === 'cuentaVen') return !!(this.cuentaVen.banco && this.cuentaVen.numeroCuenta && this.cuentaVen.titular && this.cuentaVen.cedula);
    if (section === 'pagoMovil') return !!(this.pagoMovil.banco && this.pagoMovil.telefono && this.pagoMovil.cedula);
    return false;
  }

  maskedAccount(num: string): string {
    if (!num || num.length < 4) return '••••••••';
    return '•'.repeat(Math.max(0, num.length - 4)) + num.slice(-4);
  }
}
