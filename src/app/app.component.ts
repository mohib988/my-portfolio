import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'portfolio';
  sectionName:string = 'Projects';
  title2:string = 'Projects';

  receiveData(data: string): void {
    this.title2 = data;
    console.log(data);
  }

}
