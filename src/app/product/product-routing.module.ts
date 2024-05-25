import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'create',
    component: ProductCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'bags/:id',
    component: SubCategoryComponent,
  },
  {
    path: '',
    component: ProductHomeComponent,
  },
  {
    path: 'bags',
    component: ProductBagsComponent,
  },
  {
    path: 'clothing',
    component: ProductClothingComponent,
  },
  {
    path: 'clothing/:id',
    component: SubCategoryComponent, //trocar a subcategoria ???
  },

  {
    path: 'accessories/:id',
    component: SubCategoryComponent, //trocar a subcategoria ???
  },

  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
