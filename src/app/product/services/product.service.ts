import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //apiUrl = 'http://localhost:3000';
  apiUrl = 'ecomercenestjsback-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl + '/product');
  }

  getProductsBySubCategory(id: any) {
    return this.http.get(this.apiUrl + '/product/category/' + id);
  }

  getProductDetailById(id: any) {
    return this.http.get(this.apiUrl + '/product/' + id);
  }

  createProduct(product: any) {
    return this.http.post(this.apiUrl + '/product/', product).subscribe();
  }

  deleteProduct(id: any) {
    return this.http.delete(this.apiUrl + '/product/' + id, {
      responseType: 'text',
    });
  }

  editProduct(id: any, product: any) {
    return this.http.patch(this.apiUrl + '/product/' + id, product);
  }

  getAtendimentoTotal() {
    //busca total de atendimentos
    return this.http.get(`${this.apiUrl}/atendimento/total`);
  }
}
