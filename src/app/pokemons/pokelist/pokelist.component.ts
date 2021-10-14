import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { pokemonService, typeName, typeColor } from '../pokemon.service';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {
  getColor(inputTypeColor: any) {
    let colorType: any;

    switch (inputTypeColor) {
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

    return colorType;
  }

  seeMore: any;

  typePoke = [
    {
      type: 'normal',
      color: 'palegoldenrod',
    },
    {
      type: 'fire',
      color: 'darkorange',
    },
    {
      type: 'water',
      color: 'steelblue',
    },
    {
      type: 'grass',
      color: 'green',
    },
    {
      type: 'steel',
      color: 'lightgrey',
    },
    {
      type: 'flying',
      color: 'plum',
    },
    {
      type: 'fighting',
      color: 'darkred',
    },
    {
      type: 'bug',
      color: 'greenyellow',
    },
    {
      type: 'poison',
      color: 'purple',
    },
    {
      type: 'electric',
      color: 'yellow',
    },
    {
      type: 'dark',
      color: 'burlywood',
    },
    {
      type: 'rock',
      color: 'darkkhaki',
    },
    {
      type: 'ground',
      color: 'sienna',
    },
    {
      type: 'ice',
      color: 'lightskyblue',
    },
    {
      type: 'psychic',
      color: 'deeppink',
    },
    {
      type: 'ghost',
      color: 'indigo',
    },
    {
      type: 'fairy',
      color: 'lightpink',
    },
    {
      type: 'dragon',
      color: 'slateblue',
    },
  ];

  gen_arr = [
    {
      gen_id : '1',
      color : 'brown'
    },
    {
      gen_id : '2',
      color : 'lightblue'
    },
  ]
  result: any[] = [];

  ttl = false;

  some(ix: any) {
    this.ttl = !this.ttl;

    console.log(this.ttl);

    this.pokemons_arr.find((x) => {
      if (x.id == ix) {
        this.seeMore = x.id;
        console.log(this.seeMore);
      }
    });
  }

  pokemons_arr: any[] = [];
  search_arr: any[] = [];
  search_name: any[] = [];
  search_type: any[] = [];
  searchvar: string = '';
  foundId = '';
  ptyp = '';

  search_color = 'white';
  typeshow = false;
  genshow = false;

  wishicon = false;

  constructor(
    public pokemonService: pokemonService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemons_arr = this.pokemonService.pokemons;

    console.log(this.pokemons_arr.find((x) => x.id));

  }


  switchCard(ix: any) {
    this.commonService.indexSent(ix);

    const test: any = {};
    test['id'] = this.foundId == '' ? ix + 1 : +this.foundId + 1;
    this.router.navigate(['detail'], {
      queryParams: test,
      queryParamsHandling: null,
      relativeTo: this.route,
    });
    console.log(this.foundId);
  }

  searchSome(evt: any) {
    console.log(evt);

    this.searchvar = evt;

    const found = this.pokemons_arr.find(
      (x) => x.name.english.toLowerCase() == evt
    );

    if (found == undefined) {
      this.search_arr = [];
      return;
    }

    if (evt != '') {
      if (this.search_arr.length == 0) {
        if (found != '') {
          this.search_arr.push(found);
        }
      } else {
        this.search_arr.splice(0, this.search_arr.length);
        this.search_arr.push(found);
      }
    }

    console.log(this.search_arr);
  }

  imgid(number: number, length: number) {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  doSome(tevt: string) {

    this.typePoke.find(x => { if(x.type == tevt){
      this.search_color = x.color
    }});
    console.log(this.search_color);

    this.search_arr = this.pokemons_arr.filter(
      (x) => x.type[0].toLowerCase() == tevt
    );
  }

  doGen(id : any){



  
    this.search_arr =
      this.pokemons_arr.filter((x) => x.generation == id)

   

   console.log(this.pokemons_arr.length);


  }

  wishlist() {
    this.wishicon = !this.wishicon;
  }

  clear() {
    this.search_arr.splice(0, this.search_arr.length);
    this.search_color = 'white';
  }

  showType(){

    this.typeshow = !this.typeshow;

    if(this.genshow == true){
    this.genshow = false

    }
  }

  showGen(){

    this.genshow =!this.genshow

    if(this.typeshow == true){
      this.typeshow = false
    }
  }
}
