import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cria-cliente/cliente-create.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importe o módulo onde o NavbarComponent está declarado
import { ProductModule } from '../product/product.module'; 

@NgModule({
  declarations: [    
   ClienteCreateComponent,
   // O NavbarComponent está declarado no ProductModule
   // Portanto, não é necessário declará-lo aqui
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    // Importe o ProductModule
    ProductModule
  
  ],
  // Remova a exportação do NavbarComponent
})
export class ClienteModule {}