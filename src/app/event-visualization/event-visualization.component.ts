import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Events, ForceDirectedGraph, D3Node, Link } from '../models';
import { EventTypes } from '../enums';
import { VisualizationService } from '../services'

@Component({
	selector: 'app-event-visualization',
	templateUrl: `./event-visualization.component.html`
})
export class EventVisualizationComponent implements OnInit, OnChanges {
	@Input() data: Events;
	private _options: { width, height } = { width: 800, height: 600 };

	nodes: D3Node[];
	links: Link[];
	graph: ForceDirectedGraph;

	get options() {
		return this._options;
	}

	constructor(private visualizationService: VisualizationService) {
	}

	ngOnInit() {
		this.links = [];
		this.nodes = [];
		this.graph = this.visualizationService.getForceDirectedGraph(this.nodes, this.links, this.options);
	}

	ngAfterViewInit() {
		this.graph.initSimulation(this.options);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.data && this.data) {
			this.nodes = [];
			this.links = [];

			for (let weekName in this.data) {
				const weekNodes: D3Node[] = [];

				// create a node for each event type in a week
				for (let propertyName in this.data[weekName]) {
					const id = weekName + '.' + propertyName;
					const eventName = this.getEventTypeFromPropertyName(propertyName);
					const eventDate = this.getEventDateFromPropertyName(weekName);
					const size = this.data[weekName][propertyName];
					const eventNode = new D3Node(id, eventName, eventDate, size);
					this.nodes.push(eventNode);
					weekNodes.push(eventNode);
				}

				// make links for eventNodes of the same week
				for (let weekNode of weekNodes) {
					for (let anotherWeekNode of weekNodes) {
						if (weekNode.id !== anotherWeekNode.id) {
							this.links.push(new Link(weekNode, anotherWeekNode));
						}
					}
				}
			}

			/** Receiving an initialized simulated graph from our custom d3 service */
			this.graph = this.visualizationService.getForceDirectedGraph(this.nodes, this.links, this.options);
		}
	}

	getEventTypeFromPropertyName (propName: string) {
		const eventTypeParsed = parseInt(propName);

		return EventTypes[eventTypeParsed];
	}

	getEventDateFromPropertyName(propName: string) {
		// const dateParts = propName.split('-');
		// const year = dateParts[0];
		return propName;
	}
}
