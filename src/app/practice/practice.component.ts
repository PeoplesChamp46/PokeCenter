import { Component, OnInit } from '@angular/core';


export enum elementtype { 

  water = 'water',
  fire = 'fire',
  air = 'air',
  land = 'land',
  space = 'space'
 }

 export enum elecol {

  water = 'steelblue',
  fire = 'orangered',
  air = 'grey',
  land = 'sienna',
  space = 'midnightblue',
  default = 'black'
 }

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  getColor(eletyp: string){

    let colorType : string;

    switch(eletyp){

      case elementtype.water:
        colorType = elecol.water;
        break;
        case elementtype.fire:
          colorType = elecol.fire;
          break;
          case elementtype.land:
        colorType = elecol.land;
        break;
        case elementtype.air:
        colorType = elecol.air;
        break;
        case elementtype.space:
        colorType = elecol.space;
        break;
          default:
            colorType = elecol.default;
              break;
    } 
          return colorType;
    

  }



  cards = [
    {
      baccol : 'steelblue',
      eltyp : 'water',
      desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ipsum iusto officia et ipsa. Omnis cupiditate ipsum iusto officia et ipsa.',
    },
    {
      baccol : 'orangered',
      eltyp : 'fire',
      desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ipsum iusto officia et ipsa. Omnis cupiditate ipsum iusto officia et ipsa.',
    },    
    {
      baccol : 'grey',
      eltyp : 'air',
      desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ipsum iusto officia et ipsa. Omnis cupiditate ipsum iusto officia et ipsa.',
    },    
    {
      baccol : 'sienna',
      eltyp : 'land',
      desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ipsum iusto officia et ipsa. Omnis cupiditate ipsum iusto officia et ipsa.',
    },
    {
      baccol : 'midnightblue',
      eltyp : 'space',
      desc :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate ipsum iusto officia et ipsa. Omnis cupiditate ipsum iusto officia et ipsa.',
    }
  ]




  
  constructor() { }

  ngOnInit(): void {
  }

}
