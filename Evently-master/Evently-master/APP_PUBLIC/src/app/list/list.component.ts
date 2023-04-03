import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [EventService]
})
export class ListComponent implements OnInit {

	events: Event[];
	filteredEvents: Event[];
	search: string = '';

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
	  this.eventService.getAllEvents().then((events:Event[]) => {
		  this.events = events.map(event => event);
		  this.filteredEvents = this.events;
		});
  }

  copyLink(id: string): void {
	  navigator.clipboard.writeText(`${window.location.origin}/event/${id}`);
  }

  filterEvents(searchTerm: string): void {
	  if(searchTerm.length <= 0) {
		  this.filteredEvents = this.events;
	  }
	  this.filteredEvents = this.events.filter(event => event.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }

}
