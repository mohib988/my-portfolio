import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('imageState', [
      state('profile', style({ transform: 'translateX(0)' })),
      state('hobbies', style({ transform: 'translateX(100%)' })),
      state('education', style({ transform: 'translateX(200%)' })),
      transition('* => *', animate('500ms ease-in-out'))
    ]),
    trigger('textState', [
      state('profile', style({ opacity: 1 })),
      state('hobbies', style({ opacity: 0 })),
      state('education', style({ opacity: 0 })),
      transition('* => *', animate('50000ms ease-in-out'))
    ]),
    // Animation trigger for swipe-right effect
    trigger('swipeEffect', [
      state('right', style({})), // No additional style
      state('left', style({ width: '100%' })), // Expand to the left
      transition('left => right', animate('300ms ease-in-out')), // Collapse to the right
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  content: { image: string; text: string }[] = [
    { image: './assets/images/m.jpg', text: 'Profile' },
    { image: './assets/images/1.jpg', text: 'Hobbies' },
  ];

  currentIndex: number = 0;
  swipeDirection: 'right' | 'left' = 'right';

 


  getCurrentContent() {
    return this.content[this.currentIndex];
  }
 // Touch event variables
 touchStartX: number | null = null;
 touchEndX: number | null = null;

 ngOnInit() {
   this.startContentCycle();
 }

 startContentCycle() {
   setInterval(() => {
     // Trigger swipe-left animation
     this.swipeDirection = 'left';

     setTimeout(() => {
       // Update content and trigger swipe-right animation
       this.currentIndex = (this.currentIndex + 1) % this.content.length;
       this.swipeDirection = 'right';
     }, 500); // Adjust the delay as needed
   }, 3000); // Adjust the interval as needed
 }



 // Touch event handlers
 @HostListener('touchstart', ['$event'])
 onTouchStart(event: TouchEvent) {
   this.touchStartX = event.touches[0].clientX;
 }

 @HostListener('touchend', ['$event'])
 onTouchEnd(event: TouchEvent) {
   if (this.touchStartX !== null) {
     this.touchEndX = event.changedTouches[0].clientX;
     this.handleSwipe();
   }
   this.touchStartX = null;
 }

 // Mouse event handlers (for desktop)
 @HostListener('mousedown', ['$event'])
 onMouseDown(event: MouseEvent) {
   this.touchStartX = event.clientX;
 }

 @HostListener('mouseup', ['$event'])
 onMouseUp(event: MouseEvent) {
   if (this.touchStartX !== null) {
     this.touchEndX = event.clientX;
     this.handleSwipe();
   }
   this.touchStartX = null;
 }

 handleSwipe() {
   if (this.touchStartX !== null && this.touchEndX !== null) {
     const swipeDistance = this.touchEndX - this.touchStartX;
     if (swipeDistance > 50) {
       // Swipe right
       this.swipeRight();
     } else if (swipeDistance < -50) {
       // Swipe left
       this.swipeLeft();
     }
   }
 }

 swipeLeft() {
   this.currentIndex = (this.currentIndex + 1) % this.content.length;
 }

 swipeRight() {
   this.currentIndex = this.currentIndex === 0 ? this.content.length - 1 : this.currentIndex - 1;
 }


}
