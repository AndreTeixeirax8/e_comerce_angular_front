import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  buscaVariosCliente(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/cliente');
  }

  /*
  criaCliente(cliente:any){
    return this.http.post(this.apiUrl + '/cliente/',cliente).subscribe()
  }*/

  criaCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl + '/cliente/', cliente);
  }

  editProduct(id: any, cliente: any) {
    return this.http.patch(this.apiUrl + '/cliente/' + id, cliente);
  }
}
