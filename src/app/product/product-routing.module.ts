import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductBagsComponent } from './product-bags/product-bags.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
  },
  {
    path: 'bags',
    component: ProductBagsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
