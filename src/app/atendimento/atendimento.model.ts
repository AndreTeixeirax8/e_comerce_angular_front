export interface AtendimentoModel {
  id?: any;
  cliente_entity: ClienteEntity;
  observacoes: string;
  tipo_servico_entity: TipoServicoEntity;
  origem_atendimento: OrigemAtendimentoEntity;
  dataCriacao?: Date;
  status?: string;
}

export interface ClienteEntity {
  id?: string;
  nome: string;
}

export interface TipoServicoEntity {
  id?: any;
  nome_servico: string;
}

export interface OrigemAtendimentoEntity {
  id?: any;
  nome_antendimento: string;
}
