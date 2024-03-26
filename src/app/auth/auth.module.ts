import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthRoutingngModule } from './auth-routing.module';
import { ProductModule } from '../product/product.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingngModule,
    ProductModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
