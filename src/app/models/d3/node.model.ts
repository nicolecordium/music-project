import * as d3 from 'd3';

// Implementing SimulationNodeDatum interface into our custom Node class
export class D3Node implements d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
	fy?: number | null;
    
	id: string;
	eventType: string;
	eventDate: string;
	fontSize: number;
    
    constructor(id: string, eventType: string, eventDate: string, fontSize: number) {
		this.id = id;
		this.eventType = eventType;
		this.eventDate = eventDate;
		this.fontSize = fontSize;
    }
}
