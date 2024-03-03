import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000';

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

  createProduct(product:any){
    return this.http.post(this.apiUrl + '/product',product).subscribe()
  }
}
