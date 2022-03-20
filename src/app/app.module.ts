import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './shared/component/menubar/menubar.component';
import { InfoComponent } from './component/info/info.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MiddleComponent } from './component/middle/middle.component';
import { ResumePageComponent } from './component/resume-page/resume-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ResumeComponent } from './pages/resume/resume.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    InfoComponent,
    TestimonialComponent,
    InfoComponent,
    MiddleComponent,
    ResumePageComponent,
    AboutmeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
