import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-atendimento-lista',
  templateUrl: './atendimento-lista.component.html',
  styleUrls: ['./atendimento-lista.component.css']
})
export class AtendimentoListaComponent implements OnInit {
  atendimentos: any[] = []; // Array para armazenar os clientes

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.buscarAtendimentos(); // Chama a função para buscar os clientes ao inicializar o componente
  }

  buscarAtendimentos(): void {
    this.atendimentoService.buscaVariosAtendimento().subscribe((data: any) => { 
      this.atendimentos = data as any[]; 
    });
  }
}
