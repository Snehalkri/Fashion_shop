import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Product;
  constructor(private productservice:ProductService, private route:ActivatedRoute,private location:Location) { 

  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.product=this.productservice.getProduct(id);
  
  }
  goBack(): void{
    this.location.back();
  }
}