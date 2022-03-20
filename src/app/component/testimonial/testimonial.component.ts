import {Component, OnDestroy, OnInit} from '@angular/core';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit,OnDestroy {
  faQuoteLeft =faQuoteLeft
  faQuoteRight=faQuoteRight
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
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  testimonialArray:{name:string,text:string,image_url:string,firm:string}[] =[
    {
    name:'Gary Johnson',
    text:'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
    image_url:'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg',
    firm:'Locost Accessories'
  },
    {
      name:'Gary Johnson',
      text:'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
      image_url:'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg',
      firm:'Locost Accessories'
    },
    {
      name:'Gary Johnson',
      text:'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
      image_url:'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/testimonial-1.jpg',
      firm:'Locost Accessories'
    },
  ]
  constructor() {

  }
  ngOnDestroy() {

  }

  ngOnInit(): void {
  }

}
