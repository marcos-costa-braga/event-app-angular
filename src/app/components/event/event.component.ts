import { Component, OnInit} from '@angular/core';

import { EventService } from './../../services/event.service';
import { Event } from './../../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event = {} as Event;
  events: Event[];

  constructor(private eventService: EventService) { }

    ngOnInit(): void {
      this.getEvents();
    }
    getEvents(): void {
      this.eventService.getEvents().subscribe((events: Event[]) => {
        this.events = events;
      });
    }
}
