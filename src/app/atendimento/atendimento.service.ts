import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  buscaVariosAtendimento() {
    return this.http.get(this.apiUrl + '/atendimento');
  }

  criaAtendimento(atendimento:any){
    return this.http.post(this.apiUrl + '/atendimento/',atendimento).subscribe()
  }

  editaAtendimento(id:any,atendimento:any){
    return this.http.patch(this.apiUrl + '/atendimento/' + id,atendimento)
  }

  buscarClientePorId(id: any) {
    
    return this.http.get(`${this.apiUrl}/cliente/${id}`);
  }

  buscarOrigemAtendimentoPorId(id: any) {
    
    return this.http.get(`${this.apiUrl}/origem-atendimento/${id}`);
  }

}
