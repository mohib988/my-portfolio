import { Component } from '@angular/core';
import { project, tools } from '../details/detail';
// import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tools:any =tools;
  title:string = 'portfolio';
  sectionName:string = 'Projects';
  sectionName2:string = 'Technologies';
  title2:string = 'Projects';
project = project;
  receiveData(data: string): void {
    this.title2 = data;
    console.log(data);
  }




}
