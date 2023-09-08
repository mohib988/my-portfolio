import { Component } from '@angular/core';

@Component({
  selector: 'app-boxex',
  templateUrl: './boxex.component.html',
  styleUrls: ['./boxex.component.scss']
})
export class BoxexComponent {
    boxes = [
      { order: 1 },
      { order: 2 },
      { order: 3 },
      { order: 4 },
      { order: 5 },
      { order: 6 },
    ];
  
    ngOnInit() {
      // Automatically shuffle boxes every 5 seconds (5000 milliseconds)
      setInterval(() => {
        this.shuffleBoxes();
      }, 500);
    }
  
    shuffleBoxes() {
      // Shuffle the positions of the boxes
      this.boxes = this.shuffleArray(this.boxes);
    }
  
    // Function to shuffle an array randomly
    private shuffleArray(array: any[]): any[] {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;
  
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  
}
