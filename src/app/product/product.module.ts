import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TitleTransformPipe } from './title.transform.pipe';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../common/shared.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TitleTransformPipe,
    ProductHomeComponent,
    ProductDetailComponent,
    SubCategoryComponent,
    NavbarComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
  ],
  exports: [NavbarComponent],
})
export class ProductModule {}
