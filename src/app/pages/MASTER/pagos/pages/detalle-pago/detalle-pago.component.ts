import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pago } from '../../models/pago.model';
import { PagosService } from '../../services/pagos.service';
import { AuthService } from '../../../auth-pages/services/auth.service';
import { environment } from '../../../../../environments/environment';

const METHOD_LABELS: Record<string, string> = {
  PAGO_MOVIL:    '📱 Pago Móvil',
  TRANSFERENCIA: '🏦 Transferencia Bs',
  ZELLE:         '💜 Zelle',
  BINANCE:       '🟡 Binance',
  CARD:          '💳 Tarjeta',
  CASH:          '💵 Efectivo',
};

const TYPE_LABELS: Record<string, string> = {
  TAXI_TRIP:    '🚤 Taxi acuático',
  TICKET:       '🎫 Ticket ferry',
  RENTAL:       '⛵ Alquiler charter',
  WALLET_TOPUP: '⚓ Recarga de nudos',
};

@Component({
  selector: 'app-detalle-pago',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detalle-pago.component.html',
})
export class DetallePagoComponent implements OnInit {
  private readonly service = inject(PagosService);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);

  get isMaster(): boolean { return this.auth.role() === 'MASTER'; }

  loading = true;
  errorMessage = '';
  pago: Pago | null = null;
  saving = false;

  showRejectForm = false;
  rejectionReason = '';
  imageZoom = false;

  readonly methodLabels = METHOD_LABELS;
  readonly typeLabels = TYPE_LABELS;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe({
      next: (p) => { this.pago = p; this.loading = false; },
      error: () => { this.errorMessage = 'No se pudo cargar el pago.'; this.loading = false; },
    });
  }

  verificar(): void {
    if (!this.pago) return;
    const userId = this.auth.user()?.id;
    if (!userId) return;
    this.saving = true;
    this.service.verify(this.pago.id, { verifiedById: userId }).subscribe({
      next: (p) => { this.pago = p; this.saving = false; },
      error: () => { alert('Error al verificar el pago.'); this.saving = false; },
    });
  }

  confirmarRechazo(): void {
    if (!this.pago || !this.rejectionReason.trim()) return;
    this.saving = true;
    this.service.reject(this.pago.id, { rejectionReason: this.rejectionReason.trim() }).subscribe({
      next: (p) => { this.pago = p; this.saving = false; this.showRejectForm = false; },
      error: () => { alert('Error al rechazar el pago.'); this.saving = false; },
    });
  }

  generarFactura(): void {
    if (!this.pago) return;
    const p = this.pago;
    const fecha = p.verifiedAt ? new Date(p.verifiedAt).toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' }) : new Date().toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' });
    const monto = this.fmtAmount(p);
    const metodo = METHOD_LABELS[p.method] ?? p.method;
    const tipo = TYPE_LABELS[p.referenceType] ?? p.referenceType;

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Factura #${p.id}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a2e; background: #fff; padding: 40px; }
          .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0070f3; padding-bottom: 24px; margin-bottom: 24px; }
          .brand { font-size: 24px; font-weight: 800; color: #0070f3; letter-spacing: -0.5px; }
          .brand span { color: #1a1a2e; }
          .invoice-num { text-align: right; }
          .invoice-num h2 { font-size: 22px; font-weight: 700; color: #0070f3; }
          .invoice-num p { font-size: 13px; color: #666; margin-top: 4px; }
          .badge { display: inline-block; background: #d1fae5; color: #065f46; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-top: 8px; }
          .section { margin-bottom: 20px; }
          .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-bottom: 10px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .field label { font-size: 11px; color: #888; display: block; margin-bottom: 2px; }
          .field p { font-size: 14px; font-weight: 600; color: #1a1a2e; }
          .amount-box { background: #f0f7ff; border: 2px solid #0070f3; border-radius: 12px; padding: 20px 24px; text-align: center; margin: 24px 0; }
          .amount-box .label { font-size: 12px; color: #555; text-transform: uppercase; letter-spacing: 0.06em; }
          .amount-box .value { font-size: 36px; font-weight: 900; color: #0070f3; margin-top: 4px; }
          .ref-box { background: #f8f9fa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; font-family: monospace; font-size: 15px; font-weight: 700; color: #374151; text-align: center; }
          .footer { margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 11px; color: #aaa; text-align: center; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">MARÍTI<span>MO</span></div>
            <p style="font-size:13px;color:#666;margin-top:4px;">Plataforma de turismo acuático</p>
          </div>
          <div class="invoice-num">
            <h2>RECIBO DE PAGO</h2>
            <p>Nro. ${String(p.id).padStart(6, '0')}</p>
            <p>${fecha}</p>
            <span class="badge">✓ VERIFICADO</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Datos del cliente</div>
          <div class="grid">
            <div class="field"><label>Nombre</label><p>${p.client.firstName} ${p.client.lastName}</p></div>
            <div class="field"><label>Correo electrónico</label><p>${p.client.email}</p></div>
          </div>
        </div>

        <div class="amount-box">
          <div class="label">Monto pagado</div>
          <div class="value">${monto}</div>
        </div>

        <div class="section">
          <div class="section-title">Detalles del pago</div>
          <div class="grid">
            <div class="field"><label>Método de pago</label><p>${metodo}</p></div>
            <div class="field"><label>Tipo de servicio</label><p>${tipo}</p></div>
            <div class="field"><label>ID de referencia</label><p>#${p.referenceId}</p></div>
            <div class="field"><label>Moneda</label><p>${p.currency}</p></div>
          </div>
        </div>

        ${p.transactionRef ? `
        <div class="section">
          <div class="section-title">Referencia de transacción</div>
          <div class="ref-box">${p.transactionRef}</div>
        </div>` : ''}

        ${p.verifiedBy ? `
        <div class="section">
          <div class="section-title">Verificado por</div>
          <div class="field"><p>${p.verifiedBy.firstName} ${p.verifiedBy.lastName}</p></div>
        </div>` : ''}

        <div class="footer">
          Este documento es un comprobante oficial de pago emitido por la plataforma MARÍTIMO.<br/>
          Para consultas: soporte@maritimo.com
        </div>
      </body>
      </html>
    `;

    const win = window.open('', '_blank', 'width=800,height=900');
    if (!win) return;
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }

  proofImageUrl(): string {
    const url = this.pago?.proofImageUrl;
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api', '')}${url}`;
  }

  statusClase(s: string): string {
    return s === 'VERIFIED' ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
      : s === 'REJECTED' ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400'
      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400';
  }

  statusLabel(s: string): string {
    return s === 'VERIFIED' ? '✓ Verificado' : s === 'REJECTED' ? '✗ Rechazado' : '⏳ Pendiente';
  }

  fmtAmount(p: Pago): string {
    const n = Number(p.amount);
    if (p.currency === 'VES' || p.currency === 'BS') {
      return `Bs. ${n.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (p.currency === 'USDT') return `${n.toFixed(2)} USDT`;
    return `$${n.toFixed(2)}`;
  }

  fmtDate(d?: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
}
