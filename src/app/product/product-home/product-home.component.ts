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
  atendimentoData: any;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadAtendimentoData();
  }

  /*
  loadProducts() {
    return this.productService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }*/

  loadAtendimentoData() {
    this.productService.getAtendimentoTotal().subscribe(
      (data: any) => {
        this.atendimentoData = data;
      },
      (error) => {
        console.error('Erro ao carregar dados de atendimento:', error);
      },
    );
  }

  logout() {
    // Limpa o token armazenado
    window.localStorage.removeItem('token');
    // Redireciona para a tela de login
    this.router.navigate(['/auth/login']);
  }
}
