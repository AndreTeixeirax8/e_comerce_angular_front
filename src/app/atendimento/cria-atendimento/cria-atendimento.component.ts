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
    clienteNome: [''],
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
    const clienteNome = this.atendimentoForm.get('clienteNome')?.value;
    const cliente = this.clientes.find((c) => c.nome === clienteNome);
    if (cliente) {
      this.atendimentoForm.patchValue({ cliente: cliente.id });
      this.atendimentoService
        .criaAtendimento(this.atendimentoForm.value)
        .subscribe(() => {
          this.atendimentoForm.reset();
        });
    } else {
      alert('Cliente não encontrado!');
    }
  }
}
