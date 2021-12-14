import { Component, OnInit } from '@angular/core';

export enum stoneName { 

  fire = 'fire',
  water = 'water',
  thunder = 'thunder',
  leaf = 'leaf',
  moon = 'moon',
  sun = 'sun',
  shiny = 'shiny',
  dusk = 'dusk',
  dawn = 'dawn',
  ever = 'ever',
  
 }


export enum stoneColor {

  fire = "darkorange", 
  water = "steelblue",
  thunder = "rgb(220, 255, 0)", 
  leaf = "green",
  moon = "darkkhaki",
  sun = "darkred",
  shiny = "rgb(255, 255, 100)",
  dusk = "plum",
  dawn = "skyblue",
  ever = "lightgrey",
  default = 'black'

 }


@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.css']
})
export class StonesComponent implements OnInit {

  getColor(inputTypeColor: any){

    let stoneType : any;

    console.log(inputTypeColor);


    switch(inputTypeColor){

      case stoneName.fire:
        stoneType = stoneColor.fire;
        break;
        case stoneName.water:
          stoneType = stoneColor.water;
          break;
          case stoneName.thunder:
        stoneType = stoneColor.thunder;
        break;
        case stoneName.leaf:
        stoneType = stoneColor.leaf;
        break;
        case stoneName.moon:
        stoneType = stoneColor.moon;
        break;
        case stoneName.sun:
        stoneType = stoneColor.sun;
        break;
        case stoneName.shiny:
        stoneType = stoneColor.shiny;
        break;
        case stoneName.dusk:
        stoneType = stoneColor.dusk;
        break;
        case stoneName.dawn:
        stoneType = stoneColor.dawn;
        break;
        case stoneName.ever:
        stoneType = stoneColor.ever;
        break;
        
          default:
            stoneType = stoneColor.default;
              break;
    } 
          console.log(stoneType);
          return stoneType;

  }




  stones_arr = [

    {
      name : 'fire',
      catchrate : '1x'
    },
    {
      name : 'water',
      catchrate : '1.5x'
    },
    {
      name : 'thunder',
      catchrate : '2x'
    },
    {
      name : 'leaf',
      catchrate : '255x'
    },
    {
      name : 'moon',
      catchrate : '1.5x'
    },
    {
      name : 'sun',
      catchrate : '1x'
    },
    {
      name : 'shiny',
      catchrate : '1x'
    },
    {
      name : 'dusk',
      catchrate : '1x'
    },
    {
      name : 'dawn',
      catchrate : '1x'
    },
    {
      name : 'ever',
      catchrate : '1x'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
