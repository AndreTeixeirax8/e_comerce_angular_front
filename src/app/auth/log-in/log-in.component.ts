import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      savePassword: [false] // Adicione o campo 'savePassword' ao formulário
    });

    // Carregue as credenciais salvas do localStorage, se existirem
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      const { username, password } = JSON.parse(savedCredentials);
      this.loginForm.patchValue({ username, password });
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.userLogin(this.loginForm.value).subscribe(
      (token: any) => {
        console.log(token.access_token);
        if (token) {
          const { savePassword } = this.loginForm.value;

          // Salve as credenciais no localStorage se o usuário marcou "Salvar senha"
          if (savePassword) {
            const { username, password } = this.loginForm.value;
            localStorage.setItem('credentials', JSON.stringify({ username, password }));
          } else {
            // Remova as credenciais do localStorage se o usuário desmarcou "Salvar senha"
            localStorage.removeItem('credentials');
          }

          window.localStorage.setItem('token', token.access_token);
          this.router.navigate(['/home']);
        }
      }
    );
  }
}