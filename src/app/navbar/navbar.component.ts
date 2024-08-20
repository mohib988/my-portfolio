import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('linkAnimation', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('hide => show', animate('0.5s ease-in')),
      transition('show => hide', animate('0.5s ease-out')),
    ]),
  ],
})
export class NavbarComponent {
  links: string[] = ['Home', 'About', 'Projects', 'Contact'];
  showLinks = 'hide';

  ngOnInit() {
    setTimeout(() => {
      this.showLinks = 'show';
    }, 1000); // Delay for the links to appear after 1 second
  }

}
