import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
})
export class ProductHomeComponent implements OnInit {
  products: any;
  
  constructor(
    public productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }

  logout() {
    // Limpa o token armazenado
    window.localStorage.removeItem('token');
    // Redireciona para a tela de login
    this.router.navigate(['/auth/login']);
  }
 
}
