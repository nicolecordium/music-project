import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ForceDirectedGraph, D3Node, Link } from '../models/d3';
import { Events } from '../models/index';
import { EventTypes } from '../enums/enums';
import { VisualizationService } from '../services'

@Component({
	selector: 'app-event-visualization',
	templateUrl: `./event-visualization.component.html`,
	styleUrls: ['./event-visualization.component.scss']
})
export class EventVisualizationComponent implements OnInit, OnChanges {
	@Input() data: Events;
	private _options: { width, height } = { width: 800, height: 600 };

	nodes: D3Node[];
	links: Link[];
	graph: ForceDirectedGraph;

	get options() {
		return this._options = {
			width: 500,
			height: 500
		};
	}

	constructor(private visualizationService: VisualizationService) {
	}

	ngOnInit() {
		this.links = [];
		this.nodes = [];
		/** Receiving an initialized simulated graph from our custom d3 service */
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

				for (let propertyName in this.data[weekName]) {
					const id = weekName + '.' + propertyName;
					const eventName = this.getEventTypeFromPropertyName(propertyName);
					const eventDate = this.getEventDateFromPropertyName(weekName);
					const fontSize = this.data[weekName][propertyName];
					const eventNode = new D3Node(id, eventName, eventDate, fontSize);
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
