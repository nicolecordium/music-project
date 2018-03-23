import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class EventsService {

	constructor(private http: Http) {
	}

	getEvents(artistId: number): Observable<any> {
		/* NW [EXPLANATION] 3/22/18: different pattern than the search.service here - 
		* seems to be a problem where HttpClient doesn't dispatch proxy request to localhost, but Http does */
		const startDateString = '2017-03-01';
		const endDateString = '2018-03-01';
		const uri = `/api/events/${artistId}/stats?startDate=${startDateString}&endDate=${endDateString}`;

		return this.http.get(uri);
	}
}
