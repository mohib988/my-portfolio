import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { project, tools } from '../details/detail';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



gsap.registerPlugin(ScrollToPlugin);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // Properties
  title: string = 'portfolio';
  sectionName: string = 'Projects';
  sectionName2: string = 'Technologies';
  title2: string = 'Projects';
  project = project;
  tools: any = tools;
  ngAfterViewInit() {
    // GSAP smooth scrolling logic
    const anchors = document.querySelectorAll('.neon-text');

    
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = (anchor as HTMLElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1, // Duration in seconds
            scrollTo: {
              y: targetElement.offsetTop,
              offsetY: 50 // Optional offset for fixed headers
            },
            ease: 'power2.inOut' // Easing function
          });
        }
      });
    });
  }
  
  // Method to receive data
  receiveData(data: string): void {
    this.title2 = data;
    console.log(data);
  }
}
