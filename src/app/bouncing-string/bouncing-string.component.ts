import { Component, OnInit, Input } from '@angular/core';
import { pulse } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-bouncing-string',
  templateUrl: './bouncing-string.component.html',
  styleUrls: ['./bouncing-string.component.css'],
  animations: [
    trigger('pulse', [
      transition('* => *', useAnimation(pulse, {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 0.6 }
      }))
    ])
  ]
})
export class BouncingStringComponent implements OnInit {
  @Input() text: string = '';
  letters: string[] = [];
  letterStates: boolean[] = [];

  constructor() { }

  ngOnInit() {
    this.letters = this.text.split('');
    this.letterStates = this.letters.map(l => false);
  }

}
