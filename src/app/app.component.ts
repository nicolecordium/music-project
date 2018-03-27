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
	searchResults: SearchResult;
	eventResults: Events[];
	selectedArtist: Artist;
	eventSubscription: Subscription;
	searchSubscription: Subscription;

	constructor(private searchService: SearchService,
		private eventsService: EventsService) {

	}

	onSearchSubmit(searchTerm: string) {
		this.searchSubscription = this.searchService.search(searchTerm).subscribe((response) => {
			this.searchResults = response.json();
		});;
	}

	onArtistSelected(artist: Artist) {
		this.selectedArtist = artist;
		this.eventResults = [];

		this.eventSubscription = this.eventsService.getEvents(artist.id).subscribe((response) => {
			this.eventResults = response.json().counts;
		});
	}
}
