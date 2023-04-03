import { Component, OnInit } from '@angular/core';
import { Event, Member } from '../event';
import { EventService } from '../event.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [EventService]
})
export class UpdateComponent implements OnInit {

	event: Event | undefined;

	public participantMember: Member = {
		name: '',
		email: ''
	}

  constructor(private eventService:EventService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
	this.route.params.pipe(switchMap((params: Params) => {
		return this.eventService.getEventById(params['id']);
	}))
	.subscribe((newEvent: Event) => {
		this.event = {
			...newEvent,
			start_time: newEvent.start_time.split('T')[0],
			end_time: newEvent.end_time.split('T')[0]
		};
	})
  }

  addParticipant(participant: Member) {
	  this.event.participants.push(participant);
	  this.participantMember = {
		  name: '',
		  email: ''
	  }
  }

  removeParticipant(participantName: string) {
	  this.event.participants = this.event.participants.filter(participant => participant.name !== participantName);
  }


  updateEvent(id: string, event: Event) {
	  this.eventService.updateEvent(id, event).then(() => {
		  this.router.navigate([`/event/${id}`]);
	  })
  }

}
