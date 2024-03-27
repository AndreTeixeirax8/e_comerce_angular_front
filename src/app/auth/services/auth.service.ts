import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl ='http://localhost:3000'

  constructor(private http:HttpClient) { }

  userLogin(user:any){
    return this.http.post(this.apiUrl+'/auth/login',user )
  }

  //PAREI EM 36 MINUTOS
  getAuthToken(){
    return window.localStorage.getItem('token')
  }

}
