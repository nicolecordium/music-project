import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchResult, Artist } from '../models/index';

@Component({
	selector: 'app-search-results',
	templateUrl: `./search-results.component.html`,
	styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
	private selectedArtist: Artist;

	@Input() searchResults: SearchResult;
	@Output() artistSelected: EventEmitter<any> = new EventEmitter<any>();

	getArtistImage (artist: Artist) {
		return artist.images[0][40];
	}

	onArtistClick(artist: Artist) {
		this.artistSelected.emit(artist);
		this.selectedArtist = artist;
	}

	isArtistSelected(artist: Artist) {
		if (this.selectedArtist && this.selectedArtist.id == artist.id) {
			return true;
		}
		return false;
	}
}
