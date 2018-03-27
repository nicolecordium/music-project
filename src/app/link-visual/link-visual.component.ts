// from https://medium.com/netscape/visualizing-data-with-angular-and-d3-209dde784aeb

import { Component, Input } from '@angular/core';
import { Link } from '../models/d3';

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html'
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}
