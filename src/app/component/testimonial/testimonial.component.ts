import { Component, OnInit } from '@angular/core';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  faQuoteLeft =faQuoteLeft
  faQuoteRight=faQuoteRight
  constructor() { }

  ngOnInit(): void {
  }

}
