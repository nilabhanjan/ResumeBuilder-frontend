import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  private darkMode:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private DARK_MODE_KEY='dark_mode'
  constructor() {
    this.init()
  }
  getDarkMode(){
    return this.darkMode
  }
  init(){
    let darkModeLocalStorage = (this.getLocalStorageKeyStorage(this.DARK_MODE_KEY) == 'true')
    this.darkMode.next(darkModeLocalStorage)
  }
  toggleMode(){
   let value:boolean = (this.getLocalStorageKeyStorage(this.DARK_MODE_KEY)=='true')
    value = !value
    this.setKeyValueToLocalStorage(this.DARK_MODE_KEY,String(value))
    this.init()
  }
  setKeyValueToLocalStorage(key:string,value:string){
    console.log(`set to localstorage key: ${key} value: ${value} `)
    localStorage.setItem(key, value)
  }
  getLocalStorageKeyStorage(key:string){
    return localStorage.getItem(key)
  }
  removeLocalStorageItem(key:string){
    localStorage.removeItem(key)
  }

}
