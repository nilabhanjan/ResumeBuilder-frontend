import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClassService} from "../../../services/class.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit, OnDestroy {

  darkMode: boolean = false
  subscription: Subscription

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


