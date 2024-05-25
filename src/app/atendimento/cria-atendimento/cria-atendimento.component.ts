import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AtendimentoService } from '../atendimento.service';
import { ClienteService } from 'src/app/cliente/cliente.service';

@Component({
  selector: 'app-atendimento-create',
  templateUrl: './cria-atendimento.component.html',
  styleUrls: ['./cria-atendimento.component.css'],
})
export class CriaAtendimentoComponent implements OnInit {
  clientes: any[] = [];
  origensAtendimento: any[] = [];

  atendimentoForm = this.formBuilder.group({
    cliente: [''],
    observacoes: [''],
    tipo_servico: [''],
    atendimento_via: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private atendimentoService: AtendimentoService,
    private clienteService: ClienteService,
  ) {}

  ngOnInit(): void {
    this.obterOrigensAtendimento();
  }

  onClienteInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const nome = inputElement.value;
    if (nome.length >= 2) {
      // Só busca se tiver pelo menos 2 caracteres
      this.atendimentoService
        .buscaClientesPorNome(nome)
        .subscribe((clientes: any[]) => {
          this.clientes = clientes;
        });
    } else {
      this.clientes = [];
    }
  }

  obterOrigensAtendimento() {
    this.atendimentoService
      .buscaVariosOrigemAtendimento()
      .subscribe((origens: any[]) => {
        this.origensAtendimento = origens;
      });
  }

  onSubmit() {
    this.atendimentoService
      .criaAtendimento(this.atendimentoForm.value)
      .subscribe(() => {
        this.atendimentoForm.reset();
      });
  }
}
