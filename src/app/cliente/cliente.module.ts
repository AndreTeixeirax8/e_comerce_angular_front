import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/product/shared/navbar';


@NgModule({
  declarations: [
    
   // ProductHomeComponent,
  
  ],
  imports: [
    CommonModule,
    //ProductRoutingModule,
   
      ],
      exports:[NavbarComponent]
})
export class ClienteModule {}
