import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  public href: string = '';
  subCategory: any;
  subProducts: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) =>
      //console.log('data', data['id'])
      this.productService
        .getProductsBySubCategory(data['id'])
        .subscribe((products) => {
          console.log('products', products);
          this.subProducts = products;
        })
    );
  }
}
