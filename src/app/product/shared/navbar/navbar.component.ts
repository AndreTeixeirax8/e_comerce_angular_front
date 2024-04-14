import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDesktop: boolean = false;
  openMenu: boolean = false;
  isUserAuthenticated:any
  constructor(
    private authService:AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authUser()
    this.checkIfDesktop();
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
    console.log('VALUE', this.openMenu);
  }

  authUser(){
    let token : any  =window.localStorage.getItem('token')

    if (!token){
      this.isUserAuthenticated =false
    }

    if(token){
      this.authService.veridiedUser(token).subscribe((data:any)=>{
        if(data && data === 'Authorized'){
          this.isUserAuthenticated =true
        }else {
          this.isUserAuthenticated = false
        }
      })
    }
  }

  checkIfDesktop() {
    // Verifica se a largura da tela é maior que 768px (tamanho considerado para a versão desktop)
    this.isDesktop = window.innerWidth > 768;
  }

  logout() {
    // Limpa o token armazenado
    window.localStorage.removeItem('token');
    // Redireciona para a tela de login
    this.router.navigate(['/auth/login']);
  }

}
