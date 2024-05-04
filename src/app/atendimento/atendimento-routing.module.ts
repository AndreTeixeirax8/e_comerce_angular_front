import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaAtendimentoComponent } from './cria-atendimento/cria-atendimento.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [

  {
    path:'createAtendimento',
   component:CriaAtendimentoComponent,
  canActivate:[AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
