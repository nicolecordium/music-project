import { Component, Input } from '@angular/core';
import { Events, Artist } from '../models/index';

@Component({
	selector: 'app-event-data',
	templateUrl: `./event-data.component.html`,
	styleUrls: ['./event-data.component.scss']
})
export class EventDataComponent {
	@Input() events: Events;
	@Input() artist: Artist;
}
