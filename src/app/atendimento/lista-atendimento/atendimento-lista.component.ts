import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-lista',
  templateUrl: './atendimento-lista.component.html',
  styleUrls: ['./atendimento-lista.component.css'],
})
export class AtendimentoListaComponent implements OnInit {
  paginaAtual = 1;
  itensPorPagina = 5;
  atendimentos: {
    data: any[];
    meta: {
      itemsPerPage: number;
      totalItems: number;
      currentPage: number;
      totalPages: number;
      sortBy: [string, string][];
    };
    links: {
      current: string;
    };
  } = {
    data: [],
    meta: {
      itemsPerPage: 0,
      totalItems: 0,
      currentPage: 0,
      totalPages: 0,
      sortBy: [],
    },
    links: {
      current: '',
    },
  };

  clientes: { [key: string]: string } = {};
  origem_atendimentos: { [key: string]: { nome_antendimento: string } } = {};
  tipo_servico_atendimentos: { [key: string]: { nome_servico: string } } = {};

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.buscarAtendimentos(); //primeira fução que inicia
  }

  buscarAtendimentos(): void {
    this.atendimentoService
      .buscaPaginadaAtendimento(this.paginaAtual, this.itensPorPagina)
      .subscribe((data: any) => {
        this.atendimentos = data;
      });
  }

  irParaPrimeiraPagina() {
    this.paginaAtual = 1;
    this.buscarAtendimentos();
  }

  irParaPaginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.buscarAtendimentos();
    }
  }

  irParaProximaPagina() {
    if (this.paginaAtual < this.atendimentos.meta.totalPages) {
      this.paginaAtual++;
      this.buscarAtendimentos();
    }
  }

  irParaUltimaPagina() {
    this.paginaAtual = this.atendimentos.meta.totalPages;
    this.buscarAtendimentos();
  }
}
