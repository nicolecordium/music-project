import { Directive, Input, ElementRef } from '@angular/core';
import { D3Node, ForceDirectedGraph } from '../models/d3';
import { VisualizationService } from '../services';

@Directive({
    selector: '[draggableNode]'
})
export class DraggableDirective {
    @Input('draggableNode') draggableNode: D3Node;
    @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

    constructor(private visualizationService: VisualizationService, private _element: ElementRef) { }

    ngOnInit() {
        this.visualizationService.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}
