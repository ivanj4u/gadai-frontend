import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth-service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    console.log("Username : " + this.username);
    console.log("Password : " + this.password);

    // this.progressService.showDialog("Memeriksa username dan password");

    this.auth.login(this.username, this.password)
      .then(sukses => {
        // this.progressService.hideDialog();
        if (sukses) {
          console.log("Login berhasil");
          this.router.navigate(["/"]);
        } else {
          console.log("Login gagal");
        }
      })
      .catch(error => {
        console.log(error);
        // this.progressService.hideDialog();
      });
  }

}
