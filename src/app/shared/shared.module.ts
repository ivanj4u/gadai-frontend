import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth-service";
import { NavbarComponent } from './component/navbar.component';
import { FooterComponent } from './component/footer.component';
import { IndexComponent } from './component/index.component';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';
import { ForgetComponent } from './component/forget.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavbarComponent, FooterComponent, IndexComponent, LoginComponent, RegisterComponent, ForgetComponent
    ]
    ,
    providers : [
        AuthService
    ]
    ,
    declarations: [NavbarComponent, FooterComponent, IndexComponent, LoginComponent, RegisterComponent, ForgetComponent]
})
export class SharedModule {
}
