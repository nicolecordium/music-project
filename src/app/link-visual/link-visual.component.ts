import { Component, Input } from '@angular/core';
import { Link } from '../models/d3';

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html'
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}
