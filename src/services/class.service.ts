import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  private darkMode:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  getDarkMode(){
    return this.darkMode
  }
  toggleMode(){
   let value = this.darkMode.value
    value = !value
    this.darkMode.next(value)
  }
}
