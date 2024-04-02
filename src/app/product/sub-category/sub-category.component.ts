import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  public href: string = '';
  subProducts: any;
  routeName: any;

  isUserAuthenticated:any

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.authUser()
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


  authUser(){
    let token: any = window.localStorage.getItem('token')

    if(!token){
      this.isUserAuthenticated = false
    }

    if(token){
      this.authService.veridiedUser(token).subscribe((data:any)=>{
        console.log('get token ',data)

        if(data){
          if(data.message && data.message === 'jwt expired'){
            console.log('jwt expired cod block runs ', data)
          }
        }

      })
    }

  }

}
