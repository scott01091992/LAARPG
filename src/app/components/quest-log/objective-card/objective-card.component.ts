import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objective-card',
  templateUrl: './objective-card.component.pug',
  styleUrls: ['./objective-card.component.sass']
})
export class ObjectiveCardComponent implements OnInit {
    @Input() objective: any;
  constructor() { }
  ngOnInit() { }
}
