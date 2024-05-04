import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { CriaAtendimentoComponent } from './cria-atendimento/cria-atendimento.component';




@NgModule({
  declarations: [
    CriaAtendimentoComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    ProductModule
  ],
  exports:[]
})
export class AtendimentoModule { }
