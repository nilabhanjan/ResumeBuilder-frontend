import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ClassService} from "../../../../services/class.service";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit,OnDestroy {

  @Input() title:string ="gg"
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
