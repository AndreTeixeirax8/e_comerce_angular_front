import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
    {
        path:'login',
        component:LogInComponent
    },
    {
        path:'signup',
        component: SignUpComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingngModule {
    
}