import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  contrasena: string;

  constructor(public route: Router) { }

  ngOnInit() {
  }

  tab(){
    if(this.user == "Axell Ramos" && this.contrasena == "123"){
      this.route.navigate(['tabs']);
    }else{
      alert ("El usuario o Contraseña no es Correcta");
    }
    //this.route.navigate(['tabs']);
  }

}
