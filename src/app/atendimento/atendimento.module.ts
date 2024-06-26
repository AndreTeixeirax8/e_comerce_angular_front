import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { CriaAtendimentoComponent } from './cria-atendimento/cria-atendimento.component';
import { AtendimentoListaComponent } from './lista-atendimento/atendimento-lista.component';
import { ClienteModule } from '../cliente';
import { SharedModule } from '../common/shared.module';
import { AtendimentoEdicaoComponent } from './atendimento-edicao/atendimento-edicao.component';

@NgModule({
  declarations: [
    CriaAtendimentoComponent,
    AtendimentoListaComponent,
    AtendimentoEdicaoComponent,
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    ProductModule,
    ClienteModule, // uso do  Navbar2Component,
    SharedModule,
    FormsModule, // Adicione o FormsModule às importações
  ],
  exports: [],
})
export class AtendimentoModule {}
