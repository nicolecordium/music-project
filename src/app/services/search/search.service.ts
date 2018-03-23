import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { SearchResult } from '../../models';
import { environment } from 'environments/environment';

@Injectable()
export class SearchService {
	// NW [EXPLANATION] 3/22/18: would rather use process.env here but having trouble accessing it in this context
	private accessToken: string = environment.API_KEY;
	private baseUri: string = environment.BASE_URI;

	constructor(private http: HttpClient) {
	}

	search(searchTerm: string): Observable<any> {
		const uri = this.baseUri + `/search/v1/artists/?query=${searchTerm}&limit=10&accessToken=${this.accessToken}`;
		return this.http.get(uri);
	}
}
