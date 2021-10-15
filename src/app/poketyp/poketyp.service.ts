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
    new poketyp('water', 'lorem', '../../assets/type-icon/water.svg'),
    new poketyp('fire', 'lorem', '../../assets/type-icon/fire.svg'),
    new poketyp('grass', 'lorem', '../../assets/type-icon/grass.svg'),
    new poketyp('electric', 'lorem', '../../assets/type-icon/electric.svg'),
    new poketyp('ground', 'lorem', '../../assets/type-icon/ground.svg'),
    new poketyp('rock', 'lorem', '../../assets/type-icon/rock.svg'),
    new poketyp('ice', 'lorem', '../../assets/type-icon/ice.svg'),
    new poketyp('poison', 'lorem', '../../assets/type-icon/poison.svg'),
    new poketyp('flying', 'lorem', '../../assets/type-icon/flying.svg'),
    new poketyp('psychic', 'lorem', '../../assets/type-icon/psychic.svg'),
    new poketyp('bug', 'lorem', '../../assets/type-icon/bug.svg'),
    new poketyp('fighting', 'lorem', '../../assets/type-icon/fighting.svg'),
    new poketyp('ghost', 'lorem', '../../assets/type-icon/ghost.svg'),
    new poketyp('dark', 'lorem', '../../assets/type-icon/dark.svg'),
    new poketyp('dragon', 'lorem', '../../assets/type-icon/dragon.svg'),
    new poketyp('steel', 'lorem', '../../assets/type-icon/steel.svg'),
    new poketyp('fairy', 'lorem', '../../assets/type-icon/fairy.svg'),
    new poketyp('normal', 'lorem', '../../assets/type-icon/normal.svg'),
  ];

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

  getPoketyps() {
    return this.poketyps;
  }
}
