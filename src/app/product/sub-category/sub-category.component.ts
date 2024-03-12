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
  subProducts: any;
  routeName: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fetchProduct()
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(
      res =>{
        if(res === 'DELETED'){
          this.fetchProduct()
        }
        return
      }
    )
  }

  fetchProduct(){
    this.activatedRoute.params.subscribe((data: any) => {
      console.log('data', data['id']);
      this.routeName = data['id'];
      this.productService
        .getProductsBySubCategory(data['id'])
        .subscribe((products) => {
          console.log('products', products);

          if(Object.keys(products).length !== 0){
            this.subProducts = products;
          }else{
             this.subProducts = undefined
          }

          
        });
    });
  }

}
