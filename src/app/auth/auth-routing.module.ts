import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:'login',
        component:LogInComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingngModule {
    
}