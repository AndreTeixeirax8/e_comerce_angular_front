import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

@NgModule({
  declarations: [ProductHomeComponent, ProductBagsComponent, ProductDetailComponent, SubCategoryComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
