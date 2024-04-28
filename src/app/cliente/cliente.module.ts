import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cria-cliente/cliente-create.component';
import { ClienteRoutingModule } from 'src/app/cliente';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component'; 
import { Navbar2Component } from '../common/navbar2/navbar2.component';

@NgModule({
  declarations: [    
   ClienteCreateComponent,
    ClienteListaComponent,
    Navbar2Component,
   
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    ProductModule
  
  ],
  exports: [Navbar2Component],
  
})
export class ClienteModule {}