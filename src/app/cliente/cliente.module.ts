import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../product/shared/navbar/navbar.component';


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
