import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showHide:boolean;

  constructor() { }
//this.showHide = true;
  ngOnInit() {
    this.showHide = true;
  }

  show(){
   this.showHide = !this.showHide;
  }
}