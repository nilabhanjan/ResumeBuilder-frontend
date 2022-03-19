import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClassService} from "../../../../services/class.service";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit, OnDestroy {
  faMoon=faMoon
  faSun=faSun
  darkMode=false
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
  updateDarkMode(){
    this.classService.toggleMode()
  }


}
