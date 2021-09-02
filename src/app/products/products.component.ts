import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  vNav_arr = [
  {
    name : 'pokeballs',
    link : '../products/pokeballs.components.html'
  },
  {
    name : 'portions',
    link : '../products/portions.components.html'
    
  },
  {
    name : 'stones',
    link : '../products/stones.components.html'
  },
  /* {
    name : 'others',
    link : '../products/.components.html'
  } */
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
