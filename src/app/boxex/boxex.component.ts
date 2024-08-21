import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boxex',
  templateUrl: './boxex.component.html',
  styleUrls: ['./boxex.component.scss']
})
export class BoxexComponent {
  @Input() project:any;

  
    ngOnInit() {
      // Automatically shuffle project every 5 seconds (5000 milliseconds)
   
      const interval = setInterval(() => {
        this.shuffleBoxes();
      }, 6000000);
    }
  
    shuffleBoxes() {
      // Shuffle the positions of the project
      this.project = this.shuffleArray(this.project);
    }
    
    navigateToUrl(url: string) {
      console.log(url)
      window.location.href = url;  // Navigate to the URL
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
