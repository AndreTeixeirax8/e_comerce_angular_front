import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';
import { AtendimentoModel } from '../atendimento.model';

@Component({
  selector: 'app-atendimento-lista',
  templateUrl: './atendimento-lista.component.html',
  styleUrls: ['./atendimento-lista.component.css'],
})
export class AtendimentoListaComponent implements OnInit {
  atendimentoSelecionado: AtendimentoModel | null = null;
  isHovering = false;
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

  editarAtendimento(atendimento: any) {
    const atendimentoEditado = {
      ...atendimento,
      status: 'solucionado',
    };

    this.atendimentoService
      .editaAtendimento(atendimento.id, atendimentoEditado)
      .subscribe(
        (response) => {
          console.log('Atendimento editado com sucesso:', response);
          // Você pode atualizar a lista de atendimentos aqui, se necessário
        },
        (error) => {
          console.error('Erro ao editar o atendimento:', error);
        },
      );
  }

  editarAtendimentoCompleto(atendimento: AtendimentoModel) {
    this.atendimentoSelecionado = { ...atendimento };
  }

  cancelarEdicao() {
    this.atendimentoSelecionado = null;
  }

  salvarAtendimento(atendimento: AtendimentoModel) {
    this.atendimentoService
      .editaAtendimento(atendimento.id, atendimento)
      .subscribe(
        (response) => {
          console.log('Atendimento editado com sucesso:', response);
          // Atualize a lista de atendimentos, se necessário
          this.atendimentoSelecionado = null;
          this.buscarAtendimentos(); // Atualize a lista de atendimentos após a edição
        },
        (error) => {
          console.error('Erro ao editar o atendimento:', error);
        },
      );
  }
}
