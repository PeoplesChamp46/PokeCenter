import { poketyp } from '../shared/poketyp.model';

export enum elementtype {
  water = 'water',
  fire = 'fire',
  grass = 'grass',
  rock = 'rock',
  electric = 'electric',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  ghost = 'ghost',
  dragon = 'dragon',
  steel = 'steel',
  fairy = 'fairy',
  normal = 'normal',
  dark = 'dark',
}

export enum elecol {
  normal = 'palegoldenrod',
  fire = 'darkorange',
  water = 'steelblue',
  grass = 'green',
  flying = 'plum',
  fighting = 'darkred',
  poison = 'purple',
  electric = 'yellow',
  ground = 'sienna',
  rock = 'darkkhaki',
  psychic = 'deeppink',
  ice = 'lightskyblue',
  bug = 'greenyellow',
  ghost = 'indigo',
  steel = 'lightgrey',
  dragon = 'slateblue',
  dark = 'burlywood',
  fairy = 'lightpink',
  default = 'black',
}

export class poketypService {
  public poketyps: poketyp[] = [
    new poketyp('water', 'lorem'),
    new poketyp('fire', 'lorem'),
    new poketyp('grass', 'lorem'),
    new poketyp('electric', 'lorem'),
    new poketyp('ground', 'lorem'),
    new poketyp('rock', 'lorem'),
    new poketyp('ice', 'lorem'),
    new poketyp('poison', 'lorem'),
    new poketyp('flying', 'lorem'),
    new poketyp('psychic', 'lorem'),
    new poketyp('bug', 'lorem'),
    new poketyp('fighting', 'lorem'),
    new poketyp('ghost', 'lorem'),
    new poketyp('dark', 'lorem'),
    new poketyp('dragon', 'lorem'),
    new poketyp('steel', 'lorem'),
    new poketyp('fairy', 'lorem'),
    new poketyp('normal', 'lorem'),
  ];

  getPoketyps() {
    return this.poketyps;
  }
}
