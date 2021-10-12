import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/*  heroList: string[] = [];

  addHero(evt : any){
        const val = evt.target.value;
        this.heroList.push(val);
  }
 */

  foods : string[] = [];

  afterFoodAdd(food: any){
    this.foods.push(food);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
