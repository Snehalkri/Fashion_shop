import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  products: Product[];
  carts:any;
  
    constructor(private productService: ProductService) { 
      this.carts = this.productService.getItemCart();
    }
  
    ngOnInit() {
    this.products = this.productService.getProducts();
    }
  onAdd(id:any){
    console.log(id);
    this.productService.addToCart(id);
  }
  cart(id:any){
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    products = Object.values(products).find((item:any)=>item.id === id);
    }
  }
  