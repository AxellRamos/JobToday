import { Component, OnInit } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasantia',
  templateUrl: './pasantia.page.html',
  styleUrls: ['./pasantia.page.scss'],
})
export class PasantiaPage implements OnInit {

  nombre: string;
  apellido: string;
  telefono: string;

  prob:string;

  constructor(private emailComposer: EmailComposer, public Navctrl: NavController) { }

  ngOnInit() {
  }

  regresar():void{
    this.Navctrl.pop();
  }
  env(){
    let email = {
      to: 'hernandezfrander0@gmial.com',
      cc: 'axellhumberto95@gmail.com',
      subject: 'Quiero aplicar a la oferta de trabajo',
      body: 'Mi nombre es: ' + this.nombre + this.apellido + ' telefono: ' + this.telefono  + 'Estim@s:' + this.prob,
      isHTML: true
    };
    this.emailComposer.open(email);
  }

}
