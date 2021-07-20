import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-procced',
  templateUrl: './procced.component.html',
  styleUrls: ['./procced.component.css']
})
export class ProccedComponent implements OnInit {
  constructor(public productService:ProductService) {
   }
  ngOnInit(){}
}
