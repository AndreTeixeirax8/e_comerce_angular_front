import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptorService  implements HttpInterceptor{
    constructor(private authService:AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        const token = this.authService.getAuthToken()

        if (token){
            request = request.clone({
                setHeaders:{Authorization:`Bearer ${token}`}
            })
        }

        return next.handle(request)
    }

}