import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductBagsComponent } from './product/product-bags/product-bags.component';
import { ProductClothingComponent } from './product/product-clothing/product-clothing.component';
import { ProductAccessoriesComponent } from './product/product-accessories/product-accessories.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ClienteCreateComponent } from './cliente/cria-cliente/cliente-create.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { CriaAtendimentoComponent } from './atendimento/cria-atendimento/cria-atendimento.component';
import { AtendimentoListaComponent } from './atendimento/lista-atendimento/atendimento-lista.component';



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
    path: 'clothing',
    component: ProductClothingComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'create',
    component: ProductCreateComponent,
    canActivate: [AuthGuard] 
  },

  {
    path: 'createCliente',
    component: ClienteCreateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'createAtendimento',
    component: CriaAtendimentoComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'cliente',
    component: ClienteListaComponent,
    canActivate: [AuthGuard] 
  },

  {
    path: 'atendimento',
    component: AtendimentoListaComponent,
    canActivate: [AuthGuard] 
  },

  {
    path: 'accessories',
    component: ProductAccessoriesComponent,
    canActivate: [AuthGuard] 
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
