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

  isUserAuthenticated =false

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
    console.log("Valor do token:", token); // Adicione este console.log para verificar o valor do token

    if(!token){
      this.isUserAuthenticated = false  //por que aqui recebe false se o toke está presente?
    }

    if(token){
      this.authService.veridiedUser(token).subscribe((data:any)=>{
        console.log('valor do data ',data)

      
        if(data){
          console.log("SE DATA FOR TRUE ELE ENTRA AQUI ")
          console.log("valor da mensage")
          console.log(data.mensage)
          if(data.message && data.message === 'jwt expired'){
            console.log('PERDEU VALOR DO TOKEN  ', data)
            this.isUserAuthenticated =false;
          }else if(data.message && data.message === 'Not authorized'){
            this.isUserAuthenticated =false;
          }else if (data && data === 'Authorized'){
            this.isUserAuthenticated =true;
          }
          console.log('isUserAuthenticated:', this.isUserAuthenticated);
        }
        
      })
    }

  }

}
