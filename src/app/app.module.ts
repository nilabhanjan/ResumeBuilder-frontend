import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './shared/component/menubar/menubar.component';
import { InfoComponent } from './component/info/info.component';
import { MiddleComponent } from './component/middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    InfoComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
