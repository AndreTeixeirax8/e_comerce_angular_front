import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductBagsComponent } from './product/product-bags/product-bags.component';

/* antiga rota
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product/product.module').then((a) => a.ProductModule),
  },
  {
    path:'auth',
    loadChildren: () =>
    import('./auth/auth.module').then(
      a => a.AuthModule
    )
  }
];*/

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'home', // ou qualquer outra rota que deseje proteger
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./product/product.module').then((a) => a.ProductModule),
  },
  {
    path: 'bags',
    component: ProductBagsComponent,
    canActivate: [AuthGuard] // Adicionando o AuthGuard para proteger a rota
  },
  {
    path:'auth',
    loadChildren: () =>
    import('./auth/auth.module').then(
      a => a.AuthModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
