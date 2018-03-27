import { D3Node } from './';

// Implementing SimulationLinkDatum interface into our custom Link class
export class Link implements d3.SimulationLinkDatum<D3Node> {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    // Must - defining enforced implementation properties
    source: D3Node | string | number;
    target: D3Node | string | number;
    
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}
