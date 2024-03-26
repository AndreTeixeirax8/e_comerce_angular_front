import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
    private authService:AuthService

    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.userLogin(this.loginForm.value).subscribe(
      (token:any) => {
        console.log(token.access_token)
      }
    ) 
  }

}
