import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Navbar2Component],
  imports: [
    CommonModule,
    RouterModule, 
  ],
  exports: [Navbar2Component]
})
export class SharedModule { }