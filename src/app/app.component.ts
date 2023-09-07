import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'portfolio';
  title2:string = 'portfolio';

  receiveData(data: string): void {
    this.title2 = data;
    console.log(data);
  }

}
