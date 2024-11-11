import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventsSubject: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  events$: Observable<Event[]> = this.eventsSubject.asObservable();

  constructor() {
    const storedEvents = localStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    this.eventsSubject.next(events);  // Initialize with stored events
  }

  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  addEvent(event: Event): Observable<void> {
    const currentEvents = this.eventsSubject.getValue();
    const maxId = currentEvents.length > 0 ? Math.max(...currentEvents.map(e => e.eventID)) : 0;
    event.eventID = maxId + 1;
    const updatedEvents = [...currentEvents, event];
    this.updateLocalStorageAndSubject(updatedEvents);
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  updateEvent(updatedEvent: Event): Observable<void> {
    const currentEvents = this.eventsSubject.getValue();
    const updatedEvents = currentEvents.map(event => event.eventID === updatedEvent.eventID ? updatedEvent : event);
    this.updateLocalStorageAndSubject(updatedEvents);
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  deleteEvent(eventID: number): Observable<void> {
    const currentEvents = this.eventsSubject.getValue();
    const updatedEvents = currentEvents.filter(event => event.eventID !== eventID);
    this.updateLocalStorageAndSubject(updatedEvents);
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  private updateLocalStorageAndSubject(events: Event[]): void {
    localStorage.setItem('events', JSON.stringify(events));
    this.eventsSubject.next(events);  // Emit new events to subscribers
  }
}
