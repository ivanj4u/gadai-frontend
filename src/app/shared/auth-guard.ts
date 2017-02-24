import {Router, CanActivate} from "@angular/router";
import {AuthService} from "./auth-service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate() {
        console.log('AuthGuard#canActivate called');
        let isLogin: boolean = this.auth.isLogin();
        if (!isLogin) {
            this.router.navigate(["/login"]);
        }
        return (isLogin);
    }
}
