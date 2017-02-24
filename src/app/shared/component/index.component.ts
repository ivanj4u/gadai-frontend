import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";

@Component({
  selector: 'index-component',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

}
