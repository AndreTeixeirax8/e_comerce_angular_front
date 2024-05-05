import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AtendimentoService } from '../atendimento.service';
import { ClienteService } from 'src/app/cliente/cliente.service';

@Component({
  selector: 'app-atendimento-create',
  templateUrl: './cria-atendimento.component.html',
  styleUrls: ['./cria-atendimento.component.css']
})
export class CriaAtendimentoComponent implements OnInit {
  clientes: any[] = []; // Lista de clientes
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
    private clienteService: ClienteService // Injeção do serviço de cliente
  ) { }

  ngOnInit(): void {
     // Obtenha a lista de clientes ao inicializar o componente
     this.obterClientes();
  }

   // Método para obter a lista de clientes
   obterClientes() {
    this.clienteService.buscaVariosCliente().subscribe((clientes: any[]) => {
      this.clientes = clientes;
    });
  }

}
