import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [EventService]
})
export class DetailComponent implements OnInit {

	event: Event | undefined;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
	  this.route.params.pipe(switchMap((params: Params) => {
		  return this.eventService.getEventById(params['id']);
	  }))
	  .subscribe((newEvent: Event) => {
		  this.event = newEvent;
	  })
  }

  copyLink(id: string): void {
	navigator.clipboard.writeText(`${window.location.origin}/event/${id}`);
}

deleteEvent(id: string): void {
	this.eventService.deleteEvent(id).then(() => {
		this.router.navigate(['/list']);
	})
}

}
