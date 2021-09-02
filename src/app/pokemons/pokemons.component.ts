import { Component, OnInit } from '@angular/core';
import { pokemonService, typeName, typeColor } from './pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: []

})
export class PokemonsComponent implements OnInit {


  getColor(inputTypeColor: any){

    let colorType : any;

    console.log(inputTypeColor);


    switch(inputTypeColor){

      case typeName.water:
        colorType = typeColor.water;
        break;
        case typeName.fire:
          colorType = typeColor.fire;
          break;
          case typeName.normal:
        colorType = typeColor.normal;
        break;
        case typeName.grass:
        colorType = typeColor.grass;
        break;
        case typeName.flying:
        colorType = typeColor.flying;
        break;
        case typeName.fighting:
        colorType = typeColor.fighting;
        break;
        case typeName.poison:
        colorType = typeColor.poison;
        break;
        case typeName.electric:
        colorType = typeColor.electric;
        break;
        case typeName.ground:
        colorType = typeColor.ground;
        break;
        case typeName.rock:
        colorType = typeColor.rock;
        break;
        case typeName.psychic:
        colorType = typeColor.psychic;
        break;
        case typeName.ice:
        colorType = typeColor.ice;
        break;
        case typeName.bug:
        colorType = typeColor.bug;
        break;
        case typeName.ghost:
        colorType = typeColor.ghost;
        break;
        case typeName.steel:
        colorType = typeColor.steel;
        break;
        case typeName.dragon:
        colorType = typeColor.dragon;
        break;
        case typeName.dark:
        colorType = typeColor.dark;
        break;
        case typeName.fairy:
        colorType = typeColor.fairy;
        break;
          default:
            colorType = typeColor.default;
              break;
    } 
          console.log(colorType);
          return colorType;

    

  }



  pokemons_arr: any [] = [];

  constructor(public pokemonService: pokemonService) { }

  ngOnInit(): void {
    this.pokemons_arr = this.pokemonService.pokemons;

    console.log(this.pokemons_arr);
  }

}
