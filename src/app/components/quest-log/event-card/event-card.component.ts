import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.pug',
  styleUrls: ['./event-card.component.sass']
})

export class EventCardComponent implements OnInit {

    @Input() event: any;

  constructor() {
  }

  ngOnInit() {
  }

}
