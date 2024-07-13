import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { TitleTransformPipe } from './title.transform.pipe';
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
    NavbarComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
  ],
  exports: [NavbarComponent],
})
export class ProductModule {}
