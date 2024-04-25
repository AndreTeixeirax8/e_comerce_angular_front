import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  buscaVariosCliente() {
    return this.http.get(this.apiUrl + '/cliente');
  }

  criaCliente(cliente:any){
    return this.http.post(this.apiUrl + '/cliente/',cliente).subscribe()
  }

  editProduct(id:any,cliente:any){
    return this.http.patch(this.apiUrl + '/cliente/' + id,cliente)
  }

}
