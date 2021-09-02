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
      link : '../home/home.component.html',
      status : 'true',
    },
    {
      name : 'products',
      link : '../products/products.component.html',
      status : 'false',
    },
    {
      name : 'pokemons',
      link : '../pokemons/pokemons.component.html',
      status : 'false'
    },
    {
      name : 'poketypes',
      link : '../poketyp/poketyp.component.html',
      status : 'false'
    },
    {
      name : 'contact',
      link : '../contact/contact.component.html',
      status : 'false'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
