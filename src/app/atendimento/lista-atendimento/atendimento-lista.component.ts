import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-lista',
  templateUrl: './atendimento-lista.component.html',
  styleUrls: ['./atendimento-lista.component.css'],
})
export class AtendimentoListaComponent implements OnInit {
  atendimentos: any[] = [];
  clientes: { [key: string]: string } = {};
  origem_atendimentos: { [key: string]: { nome_antendimento: string } } = {};
  tipo_servico_atendimentos: { [key: string]: { nome_servico: string } } = {};

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.buscarAtendimentos(); //primeira fução que inicia
  }

  buscarAtendimentos(): void {
    this.atendimentoService.buscaVariosAtendimento().subscribe((data: any) => {
      this.atendimentos = data as any[];
      this.buscarNomesClientes();
      this.buscarOrigemAtendimentoPorId();
      this.buscarTipoServicoPorId();
    });
  }

  buscarNomesClientes(): void {
    const idsClientes = this.atendimentos.map(
      (atendimento) => atendimento.cliente,
    );
    idsClientes.forEach((idCliente) => {
      this.atendimentoService
        .buscarClientePorId(idCliente)
        .subscribe((cliente: any) => {
          this.clientes[idCliente] = cliente.nome;
        });
    });
  }

  buscarOrigemAtendimentoPorId(): void {
    const idsOrigemAtendimentos = this.atendimentos.map(
      (atendimento) => atendimento.atendimento_via,
    );
    idsOrigemAtendimentos.forEach((idOrigemAtendimento) => {
      this.atendimentoService
        .buscarOrigemAtendimentoPorId(idOrigemAtendimento)
        .subscribe((origem_atendimentos: any) => {
          this.origem_atendimentos[idOrigemAtendimento] =
            origem_atendimentos.nome_antendimento;
        });
    });
  }

  buscarTipoServicoPorId(): void {
    const idsTipoServicos = this.atendimentos.map(
      (atendimento) => atendimento.tipo_servico,
    );
    idsTipoServicos.forEach((idsTipoServico) => {
      this.atendimentoService
        .buscarTipoServicoPorId(idsTipoServico)
        .subscribe((tipo_servico_atendimentos: any) => {
          this.tipo_servico_atendimentos[idsTipoServico] =
            tipo_servico_atendimentos.nome_servico;
        });
    });
  }
}
