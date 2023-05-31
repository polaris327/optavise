import { Component, Input } from '@angular/core';

@Component({
  selector: 'optavise-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input()
  text!: String;

  @Input()
  vip?: boolean;
}
