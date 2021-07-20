import { Injectable } from '@angular/core';
import { Bag } from '../shared/bag';
import { BAGS } from '../shared/bags';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BagService {
  constructor() { }
  getBags():Observable<Bag[]>{
    return of(BAGS).pipe(delay(2000));

  }
}
