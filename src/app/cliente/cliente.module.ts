import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cria-cliente/cliente-create.component';
import { ClienteRoutingModule } from 'src/app/cliente';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component'; 
import { SharedModule } from '../common/shared.module';


@NgModule({
  declarations: [    
   ClienteCreateComponent,
    ClienteListaComponent,
  
   
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule, 
    RouterModule, 
    ProductModule,
    SharedModule
  
  ],
  exports: [],
  
})
export class ClienteModule {}