import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ClassService} from "../../../services/class.service";

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit,OnDestroy {

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
