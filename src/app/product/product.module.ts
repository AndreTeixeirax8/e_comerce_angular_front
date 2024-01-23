import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductHomeComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
