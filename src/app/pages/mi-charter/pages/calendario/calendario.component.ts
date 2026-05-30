import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AuthService } from '../../../auth-pages/services/auth.service';
import { AlquileresService } from '../../../alquileres/services/alquileres.service';
import { IslandTripsService } from '../../../buscar/services/island-trips.service';
import { EmbarcacionesService } from '../../../embarcaciones/services/embarcaciones.service';
import { Alquiler } from '../../../alquileres/models/alquiler.model';
import { IslandBooking } from '../../../buscar/models/island-trip.model';

interface PopupEvent {
  title: string;
  subtitle: string;
  vessel: string;
  client: string;
  status: string;
  statusClass: string;
  route: string;
  type: 'charter-start' | 'charter-end' | 'island';
  date: string;
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent implements OnInit {
  private readonly auth         = inject(AuthService);
  private readonly alqService   = inject(AlquileresService);
  private readonly tripsService = inject(IslandTripsService);
  private readonly router       = inject(Router);

  loading = true;
  popup = signal<PopupEvent | null>(null);

  calendarOptions = signal<CalendarOptions>({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek',
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
    },
    events: [],
    eventClassNames: ({ event }) => {
      const cat = event.extendedProps['calendar'] as string;
      return ['event-fc-color', `fc-bg-${cat}`];
    },
    eventClick: (info) => this.onEventClick(info),
    height: 'auto',
  });

  get providerId(): number | null {
    return (this.auth.user() as any)?.providerProfile?.id ?? null;
  }

  ngOnInit(): void {
    const pid = this.providerId;
    if (!pid) { this.loading = false; return; }

    forkJoin({
      charters: this.alqService.getByProvider(pid),
      bookings: this.tripsService.getBookings({ providerId: pid }),
    }).subscribe({
      next: ({ charters, bookings }) => {
        const events = [
          ...this.chartersToEvents(charters),
          ...this.bookingsToEvents(bookings),
        ];
        this.calendarOptions.update(opts => ({ ...opts, events }));
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private chartersToEvents(charters: Alquiler[]): EventInput[] {
    const events: EventInput[] = [];
    for (const c of charters) {
      if (c.status === 'CANCELLED') continue;
      const name = `${c.client?.firstName} ${c.client?.lastName}`;
      // Charter start
      events.push({
        id: `charter-start-${c.id}`,
        title: `⚓ ${c.vessel?.name ?? 'Charter'}`,
        start: c.startDate,
        extendedProps: {
          calendar: 'primary',
          type: 'charter-start',
          subtitle: `Inicio charter · ${c.days}n · ${c.passengers} pax`,
          vessel: c.vessel?.name ?? '—',
          client: name,
          status: c.status,
          route: `/alquileres/${c.id}`,
          date: c.startDate,
        },
      });
      // Charter end
      events.push({
        id: `charter-end-${c.id}`,
        title: `🏁 ${c.vessel?.name ?? 'Charter'}`,
        start: c.endDate,
        extendedProps: {
          calendar: 'success',
          type: 'charter-end',
          subtitle: `Fin charter · ${c.days}n · ${c.passengers} pax`,
          vessel: c.vessel?.name ?? '—',
          client: name,
          status: c.status,
          route: `/alquileres/${c.id}`,
          date: c.endDate,
        },
      });
    }
    return events;
  }

  private bookingsToEvents(bookings: IslandBooking[]): EventInput[] {
    return bookings
      .filter(b => b.status !== 'CANCELLED')
      .map(b => ({
        id: `island-${b.id}`,
        title: `🚢 ${b.vessel?.name ?? 'Excursión'}`,
        start: b.tripDate + (b.outboundSlot?.departureTime ? `T${b.outboundSlot.departureTime}` : ''),
        extendedProps: {
          calendar: 'warning',
          type: 'island',
          subtitle: `${b.departurePoint?.name} → ${b.destination?.name}`,
          vessel: b.vessel?.name ?? '—',
          client: `${b.client?.firstName} ${b.client?.lastName}`,
          status: b.status,
          route: `/reservas-isla/${b.id}`,
          date: b.tripDate,
        },
      }));
  }

  onEventClick(info: EventClickArg): void {
    info.jsEvent.preventDefault();
    const p = info.event.extendedProps;
    this.popup.set({
      title: info.event.title,
      subtitle: p['subtitle'],
      vessel: p['vessel'],
      client: p['client'],
      status: p['status'],
      statusClass: this.statusClass(p['status']),
      route: p['route'],
      type: p['type'],
      date: p['date'],
    });
  }

  closePopup(): void { this.popup.set(null); }

  navigateTo(route: string): void {
    this.popup.set(null);
    this.router.navigate([route]);
  }

  statusLabel(s: string): string {
    return ({ PENDING: 'Pendiente', CONFIRMED: 'Confirmado', ACTIVE: 'Activo', COMPLETED: 'Completado', CANCELLED: 'Cancelado' } as any)[s] ?? s;
  }

  statusClass(s: string): string {
    return ({
      PENDING:   'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
      CONFIRMED: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
      ACTIVE:    'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-400',
      COMPLETED: 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400',
      CANCELLED: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
    } as any)[s] ?? '';
  }

  typeLabel(t: string): string {
    return ({ 'charter-start': 'Inicio de charter', 'charter-end': 'Fin de charter', 'island': 'Excursión isla' } as any)[t] ?? t;
  }

  typeDotClass(t: string): string {
    return ({ 'charter-start': 'bg-brand-500', 'charter-end': 'bg-green-500', 'island': 'bg-orange-400' } as any)[t] ?? '';
  }
}
