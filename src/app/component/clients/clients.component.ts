import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  clientsArray:{name:string,img_url:string,web_url:string}[]=[
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },
    {
      name: 'Golden Grid',
      img_url: 'https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/goldengrid.png',
      web_url: '#'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
