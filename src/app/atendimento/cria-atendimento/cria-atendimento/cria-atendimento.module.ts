import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriaAtendimentoRoutingModule } from './cria-atendimento-routing.module';
import { NovoComponenteComponent } from './cria-atendimento/cria-atendimento.component.css.component';


@NgModule({
  declarations: [
    NovoComponenteComponent
  ],
  imports: [
    CommonModule,
    CriaAtendimentoRoutingModule
  ]
})
export class CriaAtendimentoModule { }
