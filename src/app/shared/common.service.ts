import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

 private indexSource = new Subject<any>();
 indexS$ = this.indexSource.asObservable();

 indexSent(indexNum : any){
   this.indexSource.next(indexNum);
 }

  constructor() { }

}
