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
import { ClientsComponent } from './component/clients/clients.component';
import { TitleComponent } from './shared/component/title/title.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { FunFactsComponent } from './component/fun-facts/fun-facts.component';
import { AnimatedDigitComponent } from './shared/component/animated-digit/animated-digit.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
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
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    ResumeComponent,
    ClientsComponent,
    TitleComponent,
    FunFactsComponent,
    AnimatedDigitComponent,
    FooterComponent,
    ComingsoonComponent
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
