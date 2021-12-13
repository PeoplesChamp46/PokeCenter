import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonService } from '../pokemons/pokemon.service';
import { CommonService } from '../shared/common.service';
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
  poke_type_color : any [] = [];
  dummy : any[]= [];
  /* dummy1 : any[]= [];
  dummy2 : any[]= []; */



  backcolor : any;

  constructor(
    public poketypService: poketypService,
    private pokemonserv: pokemonService,
    private commonService : CommonService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this.pokemons = this.pokemonserv.pokemons;
  }

  ngOnInit(): void {
    this.poketyps = this.poketypService.getPoketyps();
    this.poke_type_color = this.poketypService.typePoke;
  }

  doSome(type: any) {
  
    console.log(type);

   this.dummy = this.pokemons.filter(x => x.type[0].toLowerCase() === type);


   let dummy1 = this.pokemons.filter(x =>  x.type.length == 2);
    let dummy2 = dummy1.filter(x => x.type[1].toLowerCase() === type);

    this.dummy = [...this.dummy, ...dummy2] 

   this.poke_type_color.find(x => {if(x.type == type){
    this.backcolor =  x.color;
   }});


  console.log(dummy2);

  }

  opendetails(pokeid : number){

    console.log(pokeid);

    const test: any = {};
    test['id'] = pokeid;
    this.router.navigate(['pokemon/detail'], {
      queryParams: test,
      queryParamsHandling: null,
      /* relativeTo: this.route, */
    });


  }

  imgid(number: number, length: number) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }


  clear() {
    this.dummy.splice(0, this.dummy.length);
    this.backcolor = 'white';
  }
}
