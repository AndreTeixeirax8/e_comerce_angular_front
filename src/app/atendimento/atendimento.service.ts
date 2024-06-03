import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  buscaVariosAtendimento() {
    return this.http.get(this.apiUrl + '/atendimento');
  }

  buscaPaginadaAtendimento(paginaAtual: number, itensPorPagina: number) {
    const params = {
      page: paginaAtual,
      limit: itensPorPagina,
      sortBy: 'dataCriacao:ASC',
    };
    return this.http.get(this.apiUrl + '/atendimento/paginada', { params });
  }

  criaAtendimento(atendimento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/atendimento', atendimento);
  }

  /*
  editaAtendimento(id: any, atendimento: any) {
    return this.http.patch(this.apiUrl + '/atendimento/' + id, atendimento);
  }*/

  buscarClientePorId(id: any) {
    return this.http.get(`${this.apiUrl}/cliente/${id}`);
  }

  buscarOrigemAtendimentoPorId(id: any) {
    return this.http.get(`${this.apiUrl}/origem-atendimento/${id}`);
  }

  buscaVariosOrigemAtendimento(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/origem-atendimento');
  }

  buscaClientesPorNome(nome: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cliente/buscar/nome`, {
      params: { nome },
    });
  }

  buscarTipoServicoPorId(id: any) {
    return this.http.get(`${this.apiUrl}/tipo-servico/${id}`);
  }

  buscaVariosTipoServico(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/tipo-servico');
  }

  editaAtendimento(id: string, atendimento: any) {
    const url = `${this.apiUrl}/atendimento/${id}`;
    return this.http.put(url, atendimento);
  }
}
