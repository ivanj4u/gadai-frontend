import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./shared/component/login.component";
import {IndexComponent} from "./shared/component/index.component";
import {RegisterComponent} from "./shared/component/register.component";
import {ForgetComponent} from "./shared/component/forget.component";
import {GadaiModule} from "./gadai/gadai.module";
import {DropdownModule} from "ng2-bootstrap";
import {AuthGuard} from "./shared/auth-guard";

const routingApp: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'gadai', redirectTo: "/gadai", pathMatch: "full"},
    {path: '**', component: IndexComponent}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routingApp),
        DropdownModule.forRoot(),
        SharedModule,
        GadaiModule,
    ],
    providers: [
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
