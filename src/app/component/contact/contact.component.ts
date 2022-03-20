import {Component, OnDestroy, OnInit} from '@angular/core';
import {faEnvelope, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faMobile} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  famap=faMapMarker;
  famobile=faMobile;
  famail=faEnvelope;

  constructor() {
  }



  ngOnInit(): void {
  }

}
