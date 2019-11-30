import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-card',
  templateUrl: './moment-card.component.pug',
  styleUrls: ['./moment-card.component.sass']
})
export class MomentCardComponent implements OnInit {

    @Input() moment: any;

  constructor() { }

  ngOnInit() {
  }

}
