import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ClassService} from "../../../services/class.service";

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit, OnDestroy {

  darkMode: boolean = false
  subscription: Subscription
  dataArray:{title:string,icon:string,description:string}[] = [
    {
      title: 'About',
      icon: 'gg-profile',
      description: 'Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career.'
    },
    {
      title: 'Education',
      icon: 'gg-organisation',
      description: 'Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career.'
    },
    {
      title: 'Goals',
      icon: 'gg-file-document',
      description: 'Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career.'
    },
    {
      title: 'Address',
      icon: 'gg-info',
      description: 'Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career.'
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
