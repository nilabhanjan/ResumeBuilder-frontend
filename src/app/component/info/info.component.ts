import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Subscription} from "rxjs";
import {UserModel} from "../../models/user.model"
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  subscription:Subscription
  user?:UserModel
  constructor(private userService: UserService) {
   this.subscription = userService.getUserDetails().subscribe((user)=>{
      this.user =user
   })
  }

  ngOnInit(): void {
    this.userService.setUserDetails({name:"Nilav Anjan",description:"sdawdawd",designation:"Frontend-Developer"})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
