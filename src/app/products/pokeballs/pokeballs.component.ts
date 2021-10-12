import { Component, OnInit } from '@angular/core';

export enum pokeballName { 

  pokeball = 'pokeball',
  greatball = 'greatball',
  masterball = 'masterball',
  ultraball = 'ultraball',
  safariball = 'safariball',
  ice = 'Ice',
  fighting = 'Fighting',
  poison = 'Poison',
  ground = 'Ground',
  flying = 'Flying',
  psychic = 'Psychic',
  bug = 'Bug',
  ghost = 'Ghost',
  dragon = 'Dragon',
  steel = 'Steel',
  fairy = 'Fairy',
  normal = 'Normal',
  dark = 'Dark',
 }


export enum pokeballColor {

  pokeball = "red",
  greatball = "blue",
  ultraball = "yellow",
  masterball = "purple",
  safariball = "green",
  fighting = "darkred",
  poison = "purple",
  electric = "yellow",
  ground = "sienna",
  rock = "darkkhaki",
  psychic = "deeppink",
  ice = "lightskyblue",
  bug = "greenyellow",
  ghost = "indigo",
  steel = "lightgrey",
  dragon = "slateblue",
  dark = "burlywood", 
  fairy = "lightpink",
  default = 'black'
 }


@Component({
  selector: 'app-pokeballs',
  templateUrl: './pokeballs.component.html',
  styleUrls: ['./pokeballs.component.css']
})
export class PokeballsComponent implements OnInit {

  getColor(inputTypeColor: any){

    let pokeballType : any;

    console.log(inputTypeColor);


    switch(inputTypeColor){

      case pokeballName.pokeball:
        pokeballType = pokeballColor.pokeball;
        break;
        case pokeballName.greatball:
          pokeballType = pokeballColor.greatball;
          break;
          case pokeballName.ultraball:
        pokeballType = pokeballColor.ultraball;
        break;
        case pokeballName.masterball:
        pokeballType = pokeballColor.masterball;
        break;
        case pokeballName.safariball:
        pokeballType = pokeballColor.safariball;
        break;
        case pokeballName.fighting:
        pokeballType = pokeballColor.fighting;
        break;
        case pokeballName.poison:
        pokeballType = pokeballColor.poison;
        break;
        case pokeballName.pokeball:
        pokeballType = pokeballColor.pokeball;
        break;
        case pokeballName.ground:
        pokeballType = pokeballColor.ground;
        break;
        case pokeballName.pokeball:
        pokeballType = pokeballColor.pokeball;
        break;
        case pokeballName.psychic:
        pokeballType = pokeballColor.psychic;
        break;
        case pokeballName.ice:
        pokeballType = pokeballColor.ice;
        break;
        case pokeballName.bug:
        pokeballType = pokeballColor.bug;
        break;
        case pokeballName.ghost:
        pokeballType = pokeballColor.ghost;
        break;
        case pokeballName.steel:
        pokeballType = pokeballColor.steel;
        break;
        case pokeballName.dragon:
        pokeballType = pokeballColor.dragon;
        break;
        case pokeballName.dark:
        pokeballType = pokeballColor.dark;
        break;
        case pokeballName.fairy:
        pokeballType = pokeballColor.fairy;
        break;
          default:
            pokeballType = pokeballColor.default;
              break;
    } 
          console.log(pokeballType);
          return pokeballType;

  }




  pokeball_arr = [

    {
      name : 'pokeball',
      catchrate : '1x'
    },
    {
      name : 'greatball',
      catchrate : '1.5x'
    },
    {
      name : 'ultraball',
      catchrate : '2x'
    },
    {
      name : 'masterball',
      catchrate : '255x'
    },
    {
      name : 'safariball',
      catchrate : '1.5x'
    },
    {
      name : 'fastball',
      catchrate : '1x'
    },
    {
      name : 'levelball',
      catchrate : '1x'
    },
    {
      name : 'lureball',
      catchrate : '1x'
    },
    {
      name : 'heavyball',
      catchrate : '1x'
    },
    {
      name : 'loveball',
      catchrate : '1x'
    },
    {
      name : 'friendball',
      catchrate : '1x'
    },
    {
      name : 'moonball',
      catchrate : '1x'
    },
    {
      name : 'sportball',
      catchrate : '1x'
    },
    {
      name : 'luxuryball',
      catchrate : '1x'
    },

  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}