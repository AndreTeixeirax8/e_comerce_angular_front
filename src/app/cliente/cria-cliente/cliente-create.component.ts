import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit {
  mensagemSucesso: string = '';
  exibirMensagemSucesso: boolean = false;

  clienteForm = this.formBuilder.group({
    nome: [''],
    cpf: [''],
    email: [''],
  });

  onSubmit() {
    this.clienteService.criaCliente(this.clienteForm.value).subscribe(
      (response) => {
        console.log('Cliente criado com sucesso:', response);
        this.mensagemSucesso = 'Cliente criado com sucesso!';
        this.exibirMensagemSucesso = true;
        setTimeout(() => {
          this.exibirMensagemSucesso = false;
        }, 3000); // Oculta a mensagem após 3 segundos
        this.clienteForm.reset();
      },
      (error) => {
        console.error('Erro ao criar o cliente:', error);
      },
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  ) {}

  ngOnInit(): void {}
}
