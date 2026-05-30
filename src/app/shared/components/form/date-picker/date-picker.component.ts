import {
  Component, Input, Output, EventEmitter, ElementRef, ViewChild,
  AfterViewInit, OnDestroy, OnChanges, SimpleChanges,
} from '@angular/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { LabelComponent } from '../label/label.component';
import 'flatpickr/dist/flatpickr.css';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [LabelComponent],
  templateUrl: './date-picker.component.html',
  styles: ``,
})
export class DatePickerComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() id!: string;
  @Input() mode: 'single' | 'multiple' | 'range' | 'time' = 'single';
  @Input() defaultDate?: string | Date | string[] | Date[];
  @Input() minDate?: string | Date;
  @Input() maxDate?: string | Date;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Output() dateChange = new EventEmitter<{ selectedDates: Date[]; dateStr: string }>();

  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef<HTMLInputElement>;

  private fp: flatpickr.Instance | undefined;

  ngAfterViewInit(): void {
    this.fp = flatpickr(this.dateInput.nativeElement, {
      mode:              this.mode,
      static:            false,
      monthSelectorType: 'static',
      dateFormat:        'Y-m-d',
      defaultDate:       this.defaultDate,
      minDate:           this.minDate,
      maxDate:           this.maxDate,
      locale:            Spanish,
      appendTo:          document.body,
      onChange: (selectedDates, dateStr) => {
        this.dateChange.emit({ selectedDates, dateStr });
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.fp) return;
    if (changes['minDate']) this.fp.set('minDate', this.minDate);
    if (changes['maxDate']) this.fp.set('maxDate', this.maxDate);
    if (changes['defaultDate']) this.fp.setDate(this.defaultDate ?? '', false);
  }

  ngOnDestroy(): void {
    this.fp?.destroy();
  }
}
