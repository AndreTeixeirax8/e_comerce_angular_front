import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductBagsComponent } from './product-bags/product-bags.component';

@NgModule({
  declarations: [ProductHomeComponent, ProductBagsComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
