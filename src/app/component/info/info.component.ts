import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
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
  imageUrl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgg5a8Gg2nOh5UJXl2ZBFxcu2Xd3NpBPJ1ng&usqp=CAU"
  mouseCoordinates:{x:number,y:number}={x:0,y:0}
  myinfo: UserModel={
    name:"Nilabh Anajn Chutia",
    designation:"Frontend-Developer",
    description:"Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career."
  }

  constructor(private userService: UserService) {
   this.subscription = userService.getUserDetails().subscribe((user)=>{
      this.user =user
   })
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    console.log(event.clientX, event.clientY);
    this.mouseCoordinates ={
      x: event.clientX*0.005,
      y: event.clientY*0.005
    }
  }

  getImageStyle(url:string){
    return {
      backgroundPosition: `calc(50% + ${this.mouseCoordinates.x}px) calc(50% + ${this.mouseCoordinates.y}px)`,
      backgroundImage:`url(${url})`
    }
  }

  ngOnInit(): void {
    this.userService.setUserDetails(this.myinfo)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
