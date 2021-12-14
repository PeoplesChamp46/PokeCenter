import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /*  navs = [ 'home', 'products', 'services', 'about', 'contact'] */


  navs = [
    {
      name : 'home',
      link : 'home',
      status : 'true',
    },
    {
      name : 'products',
      link : 'product',
      status : 'false',
    },
    {
      name : 'pokemons',
      link : 'pokemon',
      status : 'false'
    },
    {
      name : 'poketypes',
      link : 'poketyp',
      status : 'false'
    },
    {
      name : 'about',
      link : 'about',
      status : 'false'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
