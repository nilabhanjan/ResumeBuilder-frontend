import {Component, OnDestroy, OnInit} from '@angular/core';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {Subscription} from "rxjs";
import {ClassService} from "../../../services/class.service";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit,OnDestroy {
  faQuoteLeft =faQuoteLeft
  faQuoteRight=faQuoteRight
  darkMode:boolean=false
  subscription:Subscription
  constructor(private classService:ClassService) {
    this.subscription=classService.getDarkMode().subscribe((value)=>{
      this.darkMode = value
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
  }

}
