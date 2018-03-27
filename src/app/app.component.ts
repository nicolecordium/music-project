import { Component } from '@angular/core';
import { SearchService, EventsService } from './services/index';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { SearchResult, Artist, Events } from './models/index';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	searchResults$: Observable<SearchResult>;
	eventResults: Events[];
	eventSubscription: Subscription;
	selectedArtist: Artist;

	constructor(private searchService: SearchService,
		private eventsService: EventsService) {

	}

	onSearchSubmit(searchTerm: string) {
		this.searchResults$ = this.searchService.search(searchTerm);
	}

	onArtistSelected(artist: Artist) {
		this.selectedArtist = artist;
		this.eventResults = [];
		// NW [EXPLANATION] 3/22/18 - see services/events/events.service for explanation of different pattern than search submit
		this.eventSubscription = this.eventsService.getEvents(artist.id).subscribe((response) => {
			this.eventResults = response.json().counts;
		});
	}
}
