import { Component, Input } from '@angular/core';
import { D3Node } from '../models/d3';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: D3Node;
}
