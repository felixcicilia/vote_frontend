import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PaymentAccount, CreatePaymentAccountDto } from '../models/payment-account.model';

@Injectable({ providedIn: 'root' })
export class PaymentAccountsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/payment-accounts`;

  getActive(): Observable<PaymentAccount[]> {
    return this.http.get<PaymentAccount[]>(this.base);
  }

  getAll(): Observable<PaymentAccount[]> {
    return this.http.get<PaymentAccount[]>(`${this.base}?all=true`);
  }

  create(dto: CreatePaymentAccountDto): Observable<PaymentAccount> {
    return this.http.post<PaymentAccount>(this.base, dto);
  }

  update(id: number, dto: Partial<CreatePaymentAccountDto>): Observable<PaymentAccount> {
    return this.http.patch<PaymentAccount>(`${this.base}/${id}`, dto);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
