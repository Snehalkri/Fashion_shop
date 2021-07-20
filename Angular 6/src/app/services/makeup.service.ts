import { Injectable } from '@angular/core';
import { Makeup } from '../shared/makeup';
import { MAKEUPS } from '../shared/makeups';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {

  constructor() { }
  getMakeups():Promise<Makeup[]>{
    return new Promise(resolve=>{
      //Simulate server latency with 1 sec
      setTimeout(()=>resolve (MAKEUPS),2000);
    });
  }
}
