import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  logout() : void {
    this.auth.logout();
  }

}
