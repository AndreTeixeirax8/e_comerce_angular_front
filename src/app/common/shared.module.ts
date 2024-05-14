import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar2Component } from './navbar2/navbar2.component';

@NgModule({
  declarations: [Navbar2Component],
  imports: [CommonModule],
  exports: [Navbar2Component]
})
export class SharedModule { }