import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-create',
  templateUrl: './cria-atendimento.component.html',
  styleUrls: ['./novo-componente.css']
})
export class CriaAtendimentoComponent implements OnInit {

  atendimentoForm =this.formBuilder.group({
   
    cliente:[''], 
    observacoes:[''],
    tipo_servico: [''],
    atendimento_via:['']
    
  })

  onSubmit(){
    // console.log('VALUE', this.productForm.value)
     this.atendimentoService.criaAtendimento(this.atendimentoForm.value)
     this.atendimentoForm.reset()
   }

  constructor(
    private formBuilder:FormBuilder,
    private atendimentoService: AtendimentoService,
  ) { }

  ngOnInit(): void {
  }

}
