import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm:any

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private router:Router,
  ) { }

  //PAREI EM 19:00
  ngOnInit(): void {
    this.productForm =this.formBuilder.group({
      title:[''],
      description:[''],
      imgUrl1:[''],
      price:[''],
      quantity:[''],
      size:[''],
      color:[''],
      shippings:[''],
      sex:[''],
      brands:[''],
      category:[''],
      subcategory:[''],
    })
  }

  onSubmit()
  {

  }

}
