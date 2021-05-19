import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  email:string;
  pass:string;

  loginUser(){
  if (this.email=="admin@gmail.com" &&this.pass=="123456789") {
    alert("Welcome To Dashboard!");
  } else {
    alert("please check your details!");

  }
}
}
