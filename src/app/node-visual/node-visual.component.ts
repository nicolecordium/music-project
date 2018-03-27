// from https://medium.com/netscape/visualizing-data-with-angular-and-d3-209dde784aeb

import { Component, Input } from '@angular/core';
import { D3Node } from '../models';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: D3Node;
}
