import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() a: string = '';

@Output() childE= new EventEmitter<string>();
sendData(): void {
this.childE.emit('Hello from child');
}
}
