import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "./services/auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> {
        return this.authService.isAuthenticated().pipe(
            map(isAuthenticated => {
                if (isAuthenticated) {
                    return true;
                } else {
                    // Redireciona para a página de login com a URL atual como parâmetro de retorno
                    return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
                }
            })
        );
    }

}

/* versão antiga
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router:Router
        ){}


        isLoggedIn(){
            let token:any =  window.localStorage.getItem('token')

            if(!token){
                this.router.navigate(['/'])
                return false
            }else{
                return this.authService.veridiedUser(token).pipe(
                    map(res => {
                        if(res === 'Authorized'){
                            return true
                        }else{
                            this.router.navigate(['/'])
                            return false 
                        }
                    }),
                    catchError((err) => {
                        return of (false)
                    }) 
                )
            }
        }

    canActivate():any {
        return    this.isLoggedIn()
    }
}*/