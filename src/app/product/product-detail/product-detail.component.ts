import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  images = [
    {
      path: 'https://ik.imagekit.io/cqjm5db3n/bags_300_vKpy1UGw8.png?updatedAt=1705951176862',
    },
    {
      path: 'https://ik.imagekit.io/cqjm5db3n/202649543-1-pink-removebg-preview_VSV6qfVeQ.png?updatedAt=1706028047460',
    },
    {
      path: 'https://ik.imagekit.io/cqjm5db3n/21789859-1-nero-removebg-preview_wgW5IS-k3.png?updatedAt=1706028046950',
    },
    {
      path: 'https://ik.imagekit.io/cqjm5db3n/dres.png?updatedAt=1705951004068',
    },
  ];

  //PAREM EM 8  MINUTOS NA AULA

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((url) => {
      console.log('url', url['id']);

      this.productService.getProductDetailById(url['id']).subscribe((data) => {
        console.log('data', data);
        this.product = data;
      });
    });
  }
}
