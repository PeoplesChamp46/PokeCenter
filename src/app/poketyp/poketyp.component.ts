import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonService } from '../pokemons/pokemon.service';
import { poketyp } from '../shared/poketyp.model';
import { poketypService, elementtype, elecol } from './poketyp.service';

@Component({
  selector: 'app-poketyp',
  templateUrl: './poketyp.component.html',
  styleUrls: ['./poketyp.component.css'],
  providers: [poketypService],
})
export class PoketypComponent implements OnInit {
  getColor(eletyp: string) {
    let colorType: string;

    switch (eletyp) {
      case elementtype.water:
        colorType = elecol.water;
        break;
      case elementtype.fire:
        colorType = elecol.fire;
        break;
      case elementtype.normal:
        colorType = elecol.normal;
        break;
      case elementtype.grass:
        colorType = elecol.grass;
        break;
      case elementtype.flying:
        colorType = elecol.flying;
        break;
      case elementtype.fighting:
        colorType = elecol.fighting;
        break;
      case elementtype.poison:
        colorType = elecol.poison;
        break;
      case elementtype.electric:
        colorType = elecol.electric;
        break;
      case elementtype.ground:
        colorType = elecol.ground;
        break;
      case elementtype.rock:
        colorType = elecol.rock;
        break;
      case elementtype.psychic:
        colorType = elecol.psychic;
        break;
      case elementtype.ice:
        colorType = elecol.ice;
        break;
      case elementtype.bug:
        colorType = elecol.bug;
        break;
      case elementtype.ghost:
        colorType = elecol.ghost;
        break;
      case elementtype.steel:
        colorType = elecol.steel;
        break;
      case elementtype.dragon:
        colorType = elecol.dragon;
        break;
      case elementtype.dark:
        colorType = elecol.dark;
        break;
      case elementtype.fairy:
        colorType = elecol.fairy;
        break;
      default:
        colorType = elecol.default;
        break;
    }
    return colorType;
  }

  poketyps: poketyp[] = [];
  pokemons: any[] = [];
  dummy : any[]= [];

  constructor(
    public poketypService: poketypService,
    private pokemonserv: pokemonService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this.pokemons = this.pokemonserv.pokemons;
  }

  ngOnInit(): void {
    this.poketyps = this.poketypService.getPoketyps();
  }

  doSome(type: any) {
  
    console.log(type);

   this.dummy = this.pokemons.filter(x => x.type[0].toLowerCase() === type)

   console.log(this.dummy);

  }
}
