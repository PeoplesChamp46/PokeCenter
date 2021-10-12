import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  /* @Input() list: any; */

  @Output() foodEvt= new EventEmitter;


  addToFood(evt: any){
    this.foodEvt.emit(evt.target.value);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
