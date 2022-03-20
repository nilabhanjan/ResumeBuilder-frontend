import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  ResearchArray:{data:string}[] = [
    {
      data:"Facial Recognition Based Door Locking and Unlocking Mechanism Based on\n" +
        "          IOT\n" +
        "          International Journal of Engineering Applied Sciences and Technology, 2021, Vol. 6, Issue 3, ISSN No.\n" +
        "          2455-2143, Pages 294-297\n" +
        "          Published Online July 2021 in IJEAST (http://www.ijeast.com)"
    }
    ]

  ProjectArray:{data:string}[] = [
  {
    data:"6th semester project Student entry system website using html, php."
  },
      {
        data:"10th semester project Facial recognition based door locking and unlocking mechanism based on IOT."
      }
  ]

  CertifiedArray:{data:string}[] = [
    {
      data:"Mar 26, 2021- Classical Cryptosystems and Core Concepts by coursera/university of colorado."
    },
    {
      data:"May 10, 2021- Natural Language processing in Tensorflow by coursera/deeplearning.ai."
    }
  ]

  WorkshopArray:{data:string}[] = [
    {
      data:"2017-Ethical hacking and network security workshop by gratia technologies and pvt.ltd."
    },
    {
      data:"2019-International workshop on Emerging trends in digital visualization and mapping."
    }
  ]

  constructor() {

  }


  ngOnInit(): void {
  }

}
