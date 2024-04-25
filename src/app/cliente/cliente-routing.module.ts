import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ClienteCreateComponent } from './cria-cliente/cliente-create.component';

const routes: Routes = [
  {
    path:'createCliente',
   component:ClienteCreateComponent,
  canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
