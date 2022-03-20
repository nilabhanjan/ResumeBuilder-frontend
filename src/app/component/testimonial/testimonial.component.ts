import {Component, OnDestroy, OnInit} from '@angular/core';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {Subscription} from "rxjs";
import {ClassService} from "../../../services/class.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

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
