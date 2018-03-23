import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { Events } from '../models/index';
import { EventTypes } from '../enums/enums';

@Component({
	selector: 'app-event-visualization',
	templateUrl: `./event-visualization.component.html`,
	styleUrls: ['./event-visualization.component.scss']
})
export class EventVisualizationComponent implements OnChanges {
	@Input() weekEvents: any;
	@Input() uniqueId: string;

	ngOnChanges(changes: SimpleChanges) {
		if (changes.weekEvents && this.weekEvents) {
			this.makeVisualization();
		}
	}

	getWeekSum(weekKey: string) {
		let sum = 0;
		const weekCounts = this.weekEvents;
		if (weekCounts) {
			for (let eventType in weekCounts) {
				sum += weekCounts[eventType];
			}
		}
		return sum;
	}

	makeVisualization() {
		/* NW [TODO] 3/22/18: this is always selecting the first instance of the component even if there are multiple,
		* and using the uniqueId causes runtime error because it's an invalid identifier */
		d3.select('.visualization')
			.append('svg');

		for (let eventType in this.weekEvents) {
			d3.select('svg')
				.selectAll('div')
				.data([this.weekEvents[eventType]])
				.enter()
				.append('div')
				.style('width', (d) => { return (d * 100) + 'px'; })
				.text(EventTypes[eventType]);
		}
	}

}
