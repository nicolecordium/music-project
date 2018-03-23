import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Events } from '../models/index';

@Component({
	selector: 'app-event-data',
	templateUrl: `./event-data.component.html`,
	styleUrls: ['./event-data.component.scss']
})
export class EventDataComponent implements OnChanges {
	@Input() events: Events;
	weekKeys: string[];

	ngOnChanges(changes: SimpleChanges) {
		if (changes.events && this.events) {
			this.weekKeys = Object.keys(this.events);
		}
	}
}
