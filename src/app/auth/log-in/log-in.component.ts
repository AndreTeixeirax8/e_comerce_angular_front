/*import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username:[''],
    password:['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router :Router

    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.userLogin(this.loginForm.value).subscribe(
      (token:any) => {
        console.log(token.access_token)
        if(token){
          this.router.navigate(['/'])
          window.localStorage.setItem('token',token.access_token)
        }
      }
    ) 
  }

}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username:[''],
    password:['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router :Router

    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.userLogin(this.loginForm.value).subscribe(
      (token:any) => {
        console.log(token.access_token)
        if(token){
          window.localStorage.setItem('token',token.access_token);
          this.router.navigate(['/home']); // Redirecionar para a página "home" após o login bem-sucedido
        }
      }
    ) 
  }

}

