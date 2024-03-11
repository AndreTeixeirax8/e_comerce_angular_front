import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductAccessoriesComponent } from './product-accessories/product-accessories.component';
import { ProductCosmeticsComponent } from './product-cosmetics/product-cosmetics.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
    path:'create',
    component:ProductCreateComponent,
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
    path: 'accessories',
    component: ProductAccessoriesComponent,
  },
  {   
    path: 'accessories/:id',
    component: SubCategoryComponent, //trocar a subcategoria ???
  },
  {
    path: 'cosmetics',
    component: ProductCosmeticsComponent,
  },
   
  {   
    path: 'cosmetics/:id',
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
