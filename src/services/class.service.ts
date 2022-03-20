import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  private darkMode:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private DARK_MODE_KEY='dark_mode'
  constructor() {
    let darkModeLocalStorage = this.getLocalStorageKeyStorage(this.DARK_MODE_KEY)
    if(darkModeLocalStorage){
      this.darkMode.next(Boolean(darkModeLocalStorage))
    }
  }
  getDarkMode(){
    return this.darkMode
  }
  toggleMode(){
   let value = this.darkMode.value
    value = !value
    this.darkMode.next(value)
    this.setKeyValueToLocalStorage(this.DARK_MODE_KEY,value)
  }
  setKeyValueToLocalStorage(key:string,value:any){
    localStorage.setItem(key, value)
  }
  getLocalStorageKeyStorage(key:string){
    return localStorage.getItem(key)
  }
  removeLocalStorageItem(key:string){
    localStorage.removeItem(key)
  }

}
