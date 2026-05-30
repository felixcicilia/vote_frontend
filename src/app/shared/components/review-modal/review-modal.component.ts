import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResenasService } from '../../../pages/resenas/services/resenas.service';
import { AuthService } from '../../../pages/auth-pages/services/auth.service';
import { ReviewReferenceType } from '../../../pages/resenas/models/resena.model';

@Component({
  selector: 'app-review-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-modal.component.html',
})
export class ReviewModalComponent implements OnInit {
  @Input() referenceType!: ReviewReferenceType;
  @Input() referenceId!: number;
  @Input() vesselId?: number;
  @Input() reviewedUserId?: number;
  /** Título a mostrar en el modal (ej: "La Perla Negra" o "Excursión a Isla Larga") */
  @Input() title = '';

  @Output() cerrar  = new EventEmitter<void>();
  @Output() enviada = new EventEmitter<void>();

  private readonly service = inject(ResenasService);
  private readonly auth    = inject(AuthService);

  rating   = 0;       // 0 = sin seleccionar
  hovered  = 0;       // estrella hover
  comment  = '';
  loading  = false;
  errorMsg = '';
  done     = false;

  /** Pasos disponibles: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 */
  readonly steps = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  /** Estrellas para render (1-5) */
  readonly stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {}

  /** Fracción de relleno de una estrella dado el rating actual (o hover) */
  fill(star: number, value: number): 'full' | 'half' | 'empty' {
    if (value >= star) return 'full';
    if (value >= star - 0.5) return 'half';
    return 'empty';
  }

  activeValue(): number { return this.hovered || this.rating; }

  /** Al mover el mouse sobre la mitad izquierda o derecha de una estrella */
  onMouseMove(star: number, event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const x = event.offsetX;
    this.hovered = x < el.offsetWidth / 2 ? star - 0.5 : star;
  }

  onMouseLeave(): void { this.hovered = 0; }

  onClick(star: number, event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const x = event.offsetX;
    this.rating = x < el.offsetWidth / 2 ? star - 0.5 : star;
  }

  ratingLabel(): string {
    const v = this.activeValue();
    if (!v) return 'Selecciona una calificación';
    const labels: Record<number, string> = {
      1: 'Muy malo', 1.5: 'Malo', 2: 'Regular', 2.5: 'Aceptable',
      3: 'Bien', 3.5: 'Muy bien', 4: 'Bueno', 4.5: 'Muy bueno', 5: 'Excelente',
    };
    return labels[v] ?? `${v} / 5`;
  }

  enviar(): void {
    if (!this.rating) { this.errorMsg = 'Selecciona una calificación.'; return; }
    const user = this.auth.user();
    if (!user) return;

    this.loading = true;
    this.errorMsg = '';
    this.service.create({
      reviewerId:     user.id,
      referenceType:  this.referenceType,
      referenceId:    this.referenceId,
      rating:         this.rating,
      comment:        this.comment.trim() || undefined,
      vesselId:       this.vesselId,
      reviewedUserId: this.reviewedUserId,
    }).subscribe({
      next: () => { this.loading = false; this.done = true; this.enviada.emit(); },
      error: (err) => {
        const msg = err?.error?.message;
        this.errorMsg = Array.isArray(msg) ? msg.join(', ') : (typeof msg === 'string' ? msg : 'Error al enviar la reseña.');
        this.loading = false;
      },
    });
  }
}
