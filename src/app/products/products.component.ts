import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  vNav_arr = [
    {
      name: 'pokeballs',
      link: '/product',
      status: 'true',
    },
    {
      name: 'portions',
      link: 'portion',
      status: 'false',
    },
    {
      name: 'stones',
      link: 'stone',
      status: 'false',
    },
    /* {
    name : 'others',
    link : '../products/.components.html'
  } */
  ];

  constructor() {}

  ngOnInit(): void {}
}
