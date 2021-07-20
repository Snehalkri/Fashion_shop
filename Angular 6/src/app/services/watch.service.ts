import { Injectable } from '@angular/core';
import { Watch } from '../shared/watch';
import { WATCHES } from '../shared/watches';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
//of:emit variable amount of values in a seq and then emit a complete notification


@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }
  getWatches():Observable<Watch[]>{
    return of(WATCHES).pipe(delay(1000));;

  }
}
