import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AtendimentoModel } from '../atendimento.model';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-edicao',
  templateUrl: './atendimento-edicao.component.html',
  styleUrls: ['./atendimento-edicao.component.css'],
})
export class AtendimentoEdicaoComponent implements OnInit {
  @Input() atendimento: AtendimentoModel | null = null;
  @Output() salvar = new EventEmitter<AtendimentoModel>();
  @Output() cancelar = new EventEmitter();

  nomeCliente: string = '';
  observacoes: string = '';
  tipoServico: string = '';
  origemAtendimento: string = '';

  tiposServico: any[] = [];
  origensAtendimento: any[] = [];

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit() {
    this.carregarDados();

    if (this.atendimento) {
      this.nomeCliente = this.atendimento.cliente_entity.nome;
      this.observacoes = this.atendimento.observacoes;
      this.tipoServico = this.atendimento.tipo_servico_entity.id; // Mudança para ID
      this.origemAtendimento = this.atendimento.origem_atendimento.id; // Mudança para ID
    }
  }

  carregarDados() {
    this.atendimentoService
      .buscaVariosTipoServico()
      .subscribe((tiposServico: any[]) => {
        this.tiposServico = tiposServico;
      });

    this.atendimentoService
      .buscaVariosOrigemAtendimento()
      .subscribe((origensAtendimento: any[]) => {
        this.origensAtendimento = origensAtendimento;
      });
  }

  onSalvar() {
    if (this.atendimento) {
      const tipoServicoSelecionado = this.tiposServico.find(
        (tipo) => tipo.id === this.tipoServico,
      );
      const origemAtendimentoSelecionada = this.origensAtendimento.find(
        (origem) => origem.id === this.origemAtendimento,
      );

      const atendimentoEditado: AtendimentoModel = {
        ...this.atendimento,
        cliente_entity: {
          ...this.atendimento.cliente_entity,
          nome: this.nomeCliente,
        },
        observacoes: this.observacoes,
        tipo_servico_entity: tipoServicoSelecionado,
        origem_atendimento: origemAtendimentoSelecionada,
      };
      this.salvar.emit(atendimentoEditado);
    }
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
