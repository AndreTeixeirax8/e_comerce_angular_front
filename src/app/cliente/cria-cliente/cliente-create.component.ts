import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm =this.formBuilder.group({
    nome:[''],
    cpf:[''],
    email:[''],
    
  })

  onSubmit(){
   // console.log('VALUE', this.productForm.value)
    this.clienteService.criaCliente(this.clienteForm.value)
    this.clienteForm.reset()
  }

  constructor(
    private formBuilder:FormBuilder,
    private clienteService: ClienteService,
    ) { }

  ngOnInit(): void {
  }

}
