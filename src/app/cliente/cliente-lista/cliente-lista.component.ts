import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clientes: any[] = []; // Array para armazenar os clientes

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.buscarClientes(); // Chama a função para buscar os clientes ao inicializar o componente
  }

  buscarClientes(): void {
    this.clienteService.buscaVariosCliente().subscribe((data: any) => { // Ajuste o tipo de dados esperado para 'any'
      this.clientes = data as any[]; // Atribui os clientes retornados pelo serviço ao array de clientes
    });
  }
}
