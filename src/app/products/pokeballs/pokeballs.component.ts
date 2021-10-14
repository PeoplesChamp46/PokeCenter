import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokeballs',
  templateUrl: './pokeballs.component.html',
  styleUrls: ['./pokeballs.component.css']
})
export class PokeballsComponent implements OnInit {


  pokeball_arr = [

    {
      name : 'pokeball',
      catchrate : '1x',
      color : 'red'
    },
    {
      name : 'greatball',
      catchrate : '1.5x',
      color : 'blue'
    },
    {
      name : 'ultraball',
      catchrate : '2x',
      color : 'yellow'
    },
    {
      name : 'masterball',
      catchrate : '255x',
      color : 'purple'
    },
    {
      name : 'safariball',
      catchrate : '1.5x',
      color : 'green'
    },
    {
      name : 'fastball',
      catchrate : '1x',
      color : 'orange'
    },
    {
      name : 'levelball',
      catchrate : '1x',
      color : 'gold'
    },
    {
      name : 'lureball',
      catchrate : '1x',
      color : 'skyblue'
    },
    {
      name : 'heavyball',
      catchrate : '1x',
      color : 'lightgrey'
    },
    {
      name : 'loveball',
      catchrate : '1x',
      color : 'violet'
    },
    {
      name : 'friendball',
      catchrate : '1x',
      color : 'yellowgreen'
    },
    {
      name : 'moonball',
      catchrate : '1x',
      color : 'navy'
    },
    {
      name : 'sportball',
      catchrate : '1x',
      color : 'orangered'
    },
    {
      name : 'luxuryball',
      catchrate : '1x',
      color : 'grey'
    },

  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}