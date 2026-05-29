import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth-pages/services/auth.service';

interface Faq {
  id: number;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
  isActive: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly base = `${environment.apiUrl}/faqs`;

  get isMaster() { return this.auth.role() === 'MASTER' || this.auth.role() === 'ADMINISTRADOR'; }

  faqs: Faq[] = [];
  loading = true;
  openId: number | null = null;
  search = '';
  filterCat = '';
  showForm = false;
  editTarget: Faq | null = null;

  form = { question: '', answer: '', category: 'General', sortOrder: 0, isActive: true };
  saving = false;

  get categories(): string[] {
    return [...new Set(this.faqs.map(f => f.category))].sort();
  }

  byCat(cat: string): Faq[] {
    return this.filtered.filter(f => f.category === cat);
  }

  get filtered(): Faq[] {
    const q = this.search.toLowerCase().trim();
    return this.faqs.filter(f => {
      const matchCat = !this.filterCat || f.category === this.filterCat;
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCat && matchSearch && (this.isMaster || f.isActive);
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const params = this.isMaster ? '' : '?active=true';
    this.http.get<Faq[]>(`${this.base}${params}`).subscribe({
      next: (f) => { this.faqs = f; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  toggle(id: number): void {
    this.openId = this.openId === id ? null : id;
  }

  openCreate(): void {
    this.editTarget = null;
    this.form = { question: '', answer: '', category: 'General', sortOrder: 0, isActive: true };
    this.showForm = true;
  }

  openEdit(f: Faq): void {
    this.editTarget = f;
    this.form = { question: f.question, answer: f.answer, category: f.category, sortOrder: f.sortOrder, isActive: f.isActive };
    this.showForm = true;
  }

  save(): void {
    if (!this.form.question.trim() || !this.form.answer.trim()) return;
    this.saving = true;
    const req = this.editTarget
      ? this.http.patch<Faq>(`${this.base}/${this.editTarget.id}`, this.form)
      : this.http.post<Faq>(this.base, this.form);
    req.subscribe({
      next: () => { this.load(); this.showForm = false; this.saving = false; },
      error: () => { this.saving = false; },
    });
  }

  delete(f: Faq): void {
    if (!confirm(`¿Eliminar "${f.question}"?`)) return;
    this.http.delete(`${this.base}/${f.id}`).subscribe({ next: () => this.load() });
  }

  toggleActive(f: Faq): void {
    this.http.patch<Faq>(`${this.base}/${f.id}`, { isActive: !f.isActive }).subscribe({
      next: (updated) => {
        const idx = this.faqs.findIndex(x => x.id === f.id);
        if (idx !== -1) this.faqs[idx] = updated;
      },
    });
  }
}
