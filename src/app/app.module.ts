import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor-service';
import { AuthGuard } from './auth/auth.guard';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    },
    AuthGuard,
    FormBuilder
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
