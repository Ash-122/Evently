import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member, Event, Location } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	
	public host: Member = {
		name: '',
		email: ''
	}

	public location: Location = {
		type: '',
		sub_type: '',
		details: ''
	}

	public participants: Member[] = [];

	public participantMember: Member = {
		name: '',
		email: ''
	}

	public newEvent: Event = {
		_id: '',
		name: '',
		duration: 0,
		duration_unit: '',
		start_time: '',
		end_time: '',
		description: '',
		participants: this.participants,
		location: this.location,
		host: this.host,
	}

  constructor(private eventsService:EventService, private router: Router) { }

  ngOnInit(): void {
  }

  addParticipant(participant: Member) {
	  this.participants.push(participant);
	  this.participantMember = {
		  name: '',
		  email: ''
	  }
  }

  removeParticipant(participantName: string) {
	  this.participants = this.participants.filter(participant => participant.name !== participantName);
  }

  createEvent(){
	  this.eventsService.addNewEvent(this.newEvent).then((event: Event) => {
		  this.router.navigate([`/event/${event._id}`]);
	  });
  }

}
