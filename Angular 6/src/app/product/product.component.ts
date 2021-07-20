import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products: Product[];
carts:any;
selectedProduct: Product;

  constructor(private productService: ProductService) { 
    this.carts = this.productService.getItemCart();
  }

  ngOnInit() {
  this.products=this.productService.getProducts();
  }


onAdd(id:any){
	console.log(id);
	this.productService.addToCart(id);
}
cart(id:any){
	let products = localStorage.getItem('products');
	products = JSON.parse(products);
	products = Object.values(products).find((item:any)=>item.id === id)
    // console.log(products.cart);
}
}
