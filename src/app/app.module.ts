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

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    InfoComponent,
    TestimonialComponent,
    InfoComponent,
    MiddleComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
