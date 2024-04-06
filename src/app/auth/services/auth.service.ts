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


  signupUser(user:any){
    return this.http.post(this.apiUrl+'/users',user )
  }

  getAuthToken(){
    return window.localStorage.getItem('token')
  }

  veridiedUser(token:any){
    return this.http.get(this.apiUrl +'/users/auth/' + token)
  }

}
