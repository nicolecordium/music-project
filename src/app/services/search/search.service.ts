import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchResult } from '../../models';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {
	private accessToken: string = environment.API_KEY;
	private baseUri: string = environment.BASE_URI;

	constructor(private http: Http) {
	}

	search(searchTerm: string): Observable<any> {
		const uri = this.baseUri + `/search/v1/artists/?query=${searchTerm}&limit=10&accessToken=${this.accessToken}`;
		return this.http.get(uri);
	}
}
