import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-lista',
  templateUrl: './atendimento-lista.component.html',
  styleUrls: ['./atendimento-lista.component.css']
})
export class AtendimentoListaComponent implements OnInit {
  atendimentos: any[] = []; // Array para armazenar os clientes
  clientes: { [key: string]: string } = {}; // Mapa para armazenar os nomes dos clientes

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.buscarAtendimentos(); // Chama a função para buscar os clientes ao inicializar o componente
  }

  buscarAtendimentos(): void {
    this.atendimentoService.buscaVariosAtendimento().subscribe((data: any) => { 
      this.atendimentos = data as any[]; 
      this.buscarNomesClientes(); // Chama a função para buscar os nomes dos clientes
    });
  }

  //busca um cliente por id

  buscarNomesClientes(): void {
    // Extrai todos os IDs dos clientes dos atendimentos
    const idsClientes = this.atendimentos.map(atendimento => atendimento.cliente);

    // Para cada ID de cliente, busca o nome do cliente e armazena no mapa
    idsClientes.forEach(idCliente => {
      this.atendimentoService.buscarClientePorId(idCliente).subscribe((cliente: any) => {
        this.clientes[idCliente] = cliente.nome;
      });
    });
  }
  
}
