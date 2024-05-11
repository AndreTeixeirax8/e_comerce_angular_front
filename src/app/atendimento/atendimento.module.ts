import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { CriaAtendimentoComponent } from './cria-atendimento/cria-atendimento.component';
import { AtendimentoListaComponent } from './lista-atendimento/atendimento-lista.component';
import { ClienteModule } from '../cliente';


@NgModule({
  declarations: [
    CriaAtendimentoComponent,
    AtendimentoListaComponent,
   
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    ProductModule,
    ClienteModule // uso do  Navbar2Component,
  ],
  exports:[]
})
export class AtendimentoModule { }
