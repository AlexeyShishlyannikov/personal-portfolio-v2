import { transition, trigger, useAnimation, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { flipInX, flipOutX } from 'ng-animate';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
  animations: [
    trigger('flip', [
      state('true', style({ opacity: '0', display: 'none' })),
      state('false', style({ opacity: '1', display: '*' })),
      transition('false => true', [
        useAnimation(flipOutX, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 0.6 }
        })
      ]),
      transition('true => false', [
        useAnimation(flipInX, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 0.6 }
        })
      ])
    ])
  ]
})
export class BottomNavComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
