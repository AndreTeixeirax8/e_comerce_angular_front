import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cria-cliente/cliente-create.component';
import { ClienteRoutingModule } from 'src/app/cliente';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module'; 

@NgModule({
  declarations: [    
   ClienteCreateComponent,
   
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    ProductModule
  
  ],
  
})
export class ClienteModule {}