import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
})
export class ProductHomeComponent implements OnInit {
  products: any;
  //PAREI NA AULA 27  NO MINUTO 2:40
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
