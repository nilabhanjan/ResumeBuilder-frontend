import { Component, OnInit } from '@angular/core';
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent implements OnInit {
  faHeart= faHeart
  funFacts:{name:string,icon:IconDefinition,digit:number}[] = [
    {
      name:'HappyClient',
      icon:faHeart,
      digit: 584
    },
    {
      name:'HappyClient',
      icon:faHeart,
      digit: 584
    },
    {
      name:'HappyClient',
      icon:faHeart,
      digit: 584
    },
    {
      name:'HappyClient',
      icon:faHeart,
      digit: 584
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
