import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  poketypService,
  elecol,
  elementtype,
} from 'src/app/poketyp/poketyp.service';
import { CommonService } from 'src/app/shared/common.service';
import { pokemonService } from '../pokemon.service';
import { poketyp } from '../../shared/poketyp.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [poketypService],
})
export class DetailComponent implements OnInit {
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

  pokemons_arr: any[] = [];

  pokemons_det: any[] = [];

  ix: any = '';

  result: any = {};
  result1: any = {};
  result2: any = {};

  name: any;
  base: any;
  type: any[] = [];

  isLoaded: boolean = false;

  r_id: any;

  count = 1;

  poketyps: poketyp[] = [];

  constructor(
    private pokemonService: pokemonService,
    private poketypeService: poketypService,
    private CommonService: CommonService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.poketyps = this.poketypeService.getPoketyps();

    this.pokemons_arr = this.pokemonService.pokemons;

    this.activateRoute.queryParams.subscribe((params) => {
      this.r_id = params['id'];

      this.show(+this.r_id);
    });

    console.log(this.result.type[0]);
  }

  show(indexNum: any) {
    if (!this.isLoaded) {
      this.result = this.pokemons_arr.find((x) => x.id == indexNum);
      let result1_val: any;
      if (indexNum == 1) {
        result1_val = 251;
      } else {
        result1_val = indexNum - 1;
      }
      this.result1 = this.pokemons_arr.find((x) => x.id == result1_val);
      let result2_val: any;
      if (indexNum == 251) {
        result2_val = 1;
      } else {
        result2_val = indexNum + 1;
      }
      this.result2 = this.pokemons_arr.find((x) => x.id == result2_val);
      this.isLoaded = true;
    }
    console.log(this.result);
  }

  backClick() {
    this._location.back();
  }

  previus() {
    this.r_id -= 1;

    this.result1 = this.pokemons_arr.find((x) => x.id == this.r_id);

    this.result = this.result1;

    let r_val1 : any;
    if(this.r_id == 1){
      r_val1 = this.pokemons_arr.length
    } else {
      r_val1 = this.r_id - 1
    }

    this.result1 = this.pokemons_arr.find((x) => x.id == r_val1);
    this.result2 = this.pokemons_arr.find((x) => x.id == this.r_id + 1);

    console.log(r_val1);
  }

  next() {
    this.r_id = parseInt(this.r_id) + 1;

    this.result2 = this.pokemons_arr.find((x) => x.id == this.r_id);

    this.result = this.result2;

    this.result2 = this.pokemons_arr.find((x) => x.id == this.r_id + 1);
    this.result1 = this.pokemons_arr.find((x) => x.id == this.r_id - 1);
    console.log(this.result);
  }

  imgid(number : number, length : number) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
}
