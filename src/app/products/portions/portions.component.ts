import { Component, OnInit } from '@angular/core';

export enum potionName { 

  potion = 'potion',
  superpotion = 'super potion',
  hyperpotion = 'hyper potion',
  maxpotion = 'max potion',
  fullrestore = 'full restore',
  antidote = 'antidote',
  awakening = 'awakening',
  fullheal = 'full heal',
  burnheal = 'burn heal',
  iceheal = 'ice heal',
  
 }


export enum potionColor {

  potion = "purple",
  superpotion = "orangered",
  hyperpotion = "pink",
  maxpotion = "steelblue",
  fullrestore = "lime",
  antidote = "orange",
  awakening = "skyblue",
  fullheal = "yellow",
  burnheal = "green",
  iceheal = "lavender",
  default = 'black'

 }

@Component({
  selector: 'app-portions',
  templateUrl: './portions.component.html',
  styleUrls: ['./portions.component.css']
})
export class PortionsComponent implements OnInit {

  getColor(inputTypeColor: any){

    let potionType : any;

    console.log(inputTypeColor);


    switch(inputTypeColor){

      case potionName.potion:
        potionType = potionColor.potion;
        break;
        case potionName.superpotion:
          potionType = potionColor.superpotion;
          break;
          case potionName.hyperpotion:
        potionType = potionColor.hyperpotion;
        break;
        case potionName.maxpotion:
        potionType = potionColor.maxpotion;
        break;
        case potionName.fullrestore:
        potionType = potionColor.fullrestore;
        break;
        case potionName.antidote:
        potionType = potionColor.antidote;
        break;
        case potionName.burnheal:
        potionType = potionColor.burnheal;
        break;
        case potionName.awakening:
        potionType = potionColor.awakening;
        break;
        case potionName.fullheal:
        potionType = potionColor.fullheal;
        break;
        case potionName.iceheal:
        potionType = potionColor.iceheal;
        break;
        
          default:
            potionType = potionColor.default;
              break;
    } 
          console.log(potionType);
          return potionType;

  }




  potions_arr = [

    {
      name : 'potion',
      catchrate : '1x'
    },
    {
      name : 'super potion',
      catchrate : '1.5x'
    },
    {
      name : 'hyper potion',
      catchrate : '2x'
    },
    {
      name : 'max potion',
      catchrate : '255x'
    },
    {
      name : 'full restore',
      catchrate : '1.5x'
    },
    {
      name : 'antidote',
      catchrate : '1x'
    },
    {
      name : 'awakening',
      catchrate : '1x'
    },
    {
      name : 'full heal',
      catchrate : '1x'
    },
    {
      name : 'burn heal',
      catchrate : '1x'
    },
    {
      name : 'ice heal',
      catchrate : '1x'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
