import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class EventsService {

	constructor(private http: Http) {
	}

	getEvents(artistId: number): Observable<any> {
		const startDateString = '2017-03-01';
		const endDateString = '2018-03-01';
		const uri = `/api/events/${artistId}/stats?startDate=${startDateString}&endDate=${endDateString}`;

		return this.http.get(uri);
	}
}
