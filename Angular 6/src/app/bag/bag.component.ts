import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag.service';
import { Bag } from '../shared/bag';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  bags: Bag[];
  constructor(private bagService:BagService) { }


  ngOnInit() {
     this.bagService.getBags()
     .subscribe((bags)=>this.bags=bags);
  }

}
