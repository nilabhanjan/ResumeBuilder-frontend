import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {UserModel} from "../app/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {

  private userSubject: Subject<UserModel> = new Subject<UserModel>()

  getUserDetails(){
    return this.userSubject
  }

  setUserDetails(user:UserModel){
    this.userSubject.next(user)
  }

}
