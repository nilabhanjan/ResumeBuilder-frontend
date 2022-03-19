import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Subscription} from "rxjs";
import {UserModel} from "../../models/user.model"
import {ClassService} from "../../../services/class.service";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  subscription:Subscription
  subscription2:Subscription
  user?:UserModel
  darkMode:boolean=false
  imageUrl:string="https://static.toiimg.com/photo/msid-88428723/88428723.jpg?24468"
  mouseCoordinates:{x:number,y:number}={x:0,y:0}
  myinfo: UserModel={
    name:"Nilabh Anajn Chutia",
    designation:"Frontend-Developer",
    description:"Freshly Graduate in Master of Science Information Technology looking for an opportunity to move ahead in career."
  }

  constructor(private userService: UserService,private classService:ClassService) {
   this.subscription = userService.getUserDetails().subscribe((user)=>{
      this.user =user
   })
    this.subscription2 = classService.getDarkMode().subscribe((value)=>{
      this.darkMode= value
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
