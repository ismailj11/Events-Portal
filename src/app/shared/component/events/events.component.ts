import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { EventService } from '../../../core/services/event.service';
import { Event } from '../../../core/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.eventService.events$.subscribe(events => {
      this.events = events;
    });
  }

  createNewEvent(): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      data: { event: { eventID: 0, eventName: '', date: new Date() }, isEdit: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.addEvent(result).subscribe();
      }
    });
  }

  editEvent(event: Event): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      data: { event: { ...event }, isEdit: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.updateEvent(result).subscribe();
      }
    });
  }

  deleteEvent(eventID: number): void {
    this.eventService.deleteEvent(eventID).subscribe();
  }
}
