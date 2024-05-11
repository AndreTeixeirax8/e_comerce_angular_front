import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  isCollapsed: boolean = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }
  
  logout() {
    // Limpa o token armazenado
    window.localStorage.removeItem('token');
    // Redireciona para a tela de login
    this.router.navigate(['/auth/login']);
  }

}
