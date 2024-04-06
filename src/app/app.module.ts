import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor-service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
