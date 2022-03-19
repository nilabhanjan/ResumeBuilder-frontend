import { Component, OnInit } from '@angular/core';
import {ClassService} from "../../../../services/class.service";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private classService:ClassService) { }

  ngOnInit(): void {
  }
  updateDarkMode(){
    this.classService.toggleMode()
  }
}
