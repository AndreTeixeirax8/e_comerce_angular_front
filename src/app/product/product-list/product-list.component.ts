import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }

  /*
  loadProducts() {
    return this.productService.getProducts().subscribe((data: any) => {
      console.log('data:', data); // Exibe o objeto no formato de string
      console.dir(data); // Exibe o objeto como uma árvore
    });
  }*/
}
