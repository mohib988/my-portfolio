import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ProjectsComponent } from './projects/projects.component';
import { BoxexComponent } from './boxex/boxex.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BoxexComponent,
    HeadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
