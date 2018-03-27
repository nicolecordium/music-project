// from https://medium.com/netscape/visualizing-data-with-angular-and-d3-209dde784aeb

import { Directive, Input, ElementRef } from '@angular/core';
import { VisualizationService } from '../services';

@Directive({
    selector: '[zoomableOf]'
})
export class ZoomableDirective {
    @Input('zoomableOf') zoomableOf: ElementRef;

    constructor(private visualizationService: VisualizationService, private _element: ElementRef) {}

    ngOnInit() {
        this.visualizationService.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    }
}
