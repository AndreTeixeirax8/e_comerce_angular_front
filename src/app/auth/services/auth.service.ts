import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //apiUrl ='http://localhost:3000'
  apiUrl = 'ecomercenestjsback-production.up.railway.app';

  constructor(private http: HttpClient) {}

  userLogin(user: any) {
    return this.http.post(this.apiUrl + '/auth/login', user);
  }

  signupUser(user: any) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  getAuthToken() {
    return window.localStorage.getItem('token');
  }

  veridiedUser(token: any) {
    console.log('chegou na verificacao com o token');
    console.log(token);
    return this.http.get(this.apiUrl + '/users/auth/' + token);
  }

  isAuthenticated(): Observable<boolean> {
    // Verifica se o token está presente no localStorage
    const token: string | null = window.localStorage.getItem('token');
    return of(!!token); // Retorna um Observable<boolean> com base no resultado da verificação do token
  }
}
