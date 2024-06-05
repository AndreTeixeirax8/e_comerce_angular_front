import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AtendimentoModel } from '../atendimento.model';

@Component({
  selector: 'app-atendimento-edicao',
  templateUrl: './atendimento-edicao.component.html',
  styleUrls: ['./atendimento-edicao.component.css'],
})
export class AtendimentoEdicaoComponent {
  @Input() atendimento: AtendimentoModel | null = null;
  @Output() salvar = new EventEmitter<AtendimentoModel>();
  @Output() cancelar = new EventEmitter();

  nomeCliente: string = '';
  observacoes: string = '';
  tipoServico: string = '';
  origemAtendimento: string = '';

  ngOnInit() {
    if (this.atendimento) {
      this.nomeCliente = this.atendimento.cliente_entity.nome;
      this.observacoes = this.atendimento.observacoes;
      this.tipoServico = this.atendimento.tipo_servico_entity.nome_servico;
      this.origemAtendimento =
        this.atendimento.origem_atendimento.nome_antendimento;
    }
  }

  onSalvar() {
    if (this.atendimento) {
      const atendimentoEditado: AtendimentoModel = {
        ...this.atendimento,
        cliente_entity: {
          ...this.atendimento.cliente_entity,
          nome: this.nomeCliente,
        },
        observacoes: this.observacoes,
        tipo_servico_entity: {
          ...this.atendimento.tipo_servico_entity,
          nome_servico: this.tipoServico,
        },
        origem_atendimento: {
          ...this.atendimento.origem_atendimento,
          nome_antendimento: this.origemAtendimento,
        },
      };
      this.salvar.emit(atendimentoEditado);
    }
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
