import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
 // {
   // path:'create',
  //  component:ProductCreateComponent,
  //  canActivate:[AuthGuard]
 // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
