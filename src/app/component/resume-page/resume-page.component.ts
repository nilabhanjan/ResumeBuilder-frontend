import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ClassService} from "../../../services/class.service";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit, OnDestroy {

  darkMode: boolean = false
  subscription: Subscription
  dataArray:{title:string,duration:string,description:string}[] = [
    {
      title: 'Graduation and Post Graduation',
      duration:'2016-2021',
      description: 'Master of Science Information Technlogy from Kazirana University, Jorhat, Assam'
    },
    {
      title: 'HS',
      duration:'2014-2016',
      description: 'Gyan Vigyan Academy, Dibrugarh, Assam'
    },
    {
      title: 'HSLC',
      duration:'2013-2014',
      description: 'Shankardev Shisu Niketan, Sivsagar, Assam'
    }
  ]
  skillsArray:{skill:string}[] = [
    {
      skill:'HTML'
    },
    {
      skill:'CSS'
    },
    {
      skill:'C'
    },
    {
      skill:'Python'
    },
    {
      skill:'Java'
    },
    {
      skill:'Microsoft office'
    },
    {
      skill:'Microsoft Powerpoint'
    }

  ]

  constructor(private classService: ClassService) {
    this.subscription = classService.getDarkMode().subscribe((value) => {
      this.darkMode = value
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
  }

}
