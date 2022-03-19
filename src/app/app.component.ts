import {Component, OnDestroy, Renderer2} from '@angular/core';
import {ClassService} from "../services/class.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'ResumeBuilder-frontend';
  subscribe:Subscription
  constructor(private classService: ClassService,private renderer: Renderer2) {
    this.subscribe=this.classService.getDarkMode().subscribe((value)=>{
      if(value){
        this.renderer.addClass(document.body, 'dark');
      }else{
        this.renderer.removeClass(document.body, 'dark');
      }
    })
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'dark');
    this.subscribe.unsubscribe()
  }
}
