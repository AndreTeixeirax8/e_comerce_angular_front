import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.openMenu = !this.openMenu;
    console.log('VALUE', this.openMenu);
  }

}
