import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  {

  details: {logo:string,email:string}[]=[
    {
      logo:"https://w7.pngwing.com/pngs/817/967/png-transparent-gmail-logo-gmail-email-icon-logo-gmail-logo-angle-text-rectangle-thumbnail.png",
      email:"qureshimohib@gmail.com"
    },
    {
      logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      email:"github.com/mohib988"
    },
    {
      logo:"https://miro.medium.com/v2/resize:fit:1358/0*gbfua3eCsElT77Eb.png",
      email:"hub.docker.com/u/mohibqureshi7"
    },
    {
      logo:"https://yt3.googleusercontent.com/9XmuxL_LL7CxAOOlbBgTnJIo2uHpoLKHhWzlPt7O49ULQmvBSJlxk1RpX3pJ8jkRBkD6p9BIRg=s900-c-k-c0x00ffffff-no-rj",
      email:"www.linkedin.com/in/mohib-qureshi-67433a222/"
    },
    
  ]

}
