
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('50000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('50000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],

})
export class HeaderComponent implements OnInit {
  words: string[] = ['Welcome', 'to', 'my', 'home'];
  currentWordIndex = 0;

  ngOnInit(): void {
    // Start the word transition timer
    this.startWordTransition();
  }

  startWordTransition(): void {
    setInterval(() => {
      if (this.currentWordIndex < this.words.length - 1) {
        this.currentWordIndex++;
      } else {
        this.currentWordIndex = 0;
      }
    }, 3000); // Change words every 2 seconds (adjust as needed)
  }
  @Input() a: string = '';


@Output() childE= new EventEmitter<string>();
sendData(): void {
this.childE.emit('Hello from child');
}
}
