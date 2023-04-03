import { Injectable } from '@angular/core';
import { Event } from './event';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

	private eventUrl = 'http://localhost:3000/api/events';

  constructor(private http:HttpClient) { }

  getAllEvents(): Promise<void | Event[]>{
	  return this.http.get(this.eventUrl).toPromise().then(response => response as Event[]).catch(this.handleError);
  }

  getEventById(id: string): Promise<void | Event> {
	  return this.http.get(this.eventUrl + '/' + id).toPromise().then(response => response as Event).catch(this.handleError);
  }

  addNewEvent(newEvent: any): Promise<void | Event> {
	  return this.http.post(this.eventUrl, newEvent).toPromise().then(response => response as Event).catch(this.handleError);
  }

  deleteEvent(id: string): Promise<void | Event> {
	  return this.http.delete(this.eventUrl + '/' + id).toPromise().then(response => response as Event).catch(this.handleError);
  }

  updateEvent(id: string, updatedEvent: Event): Promise<void | Event> {
	  return this.http.put(this.eventUrl + '/' + id, updatedEvent).toPromise().then(response => response as Event).catch(this.handleError);	
  }

  handleError(error: any){
	  console.log('Error');
  }
}
