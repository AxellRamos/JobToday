import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarioperfil',
  templateUrl: './usuarioperfil.page.html',
  styleUrls: ['./usuarioperfil.page.scss'],
})
export class UsuarioperfilPage implements OnInit {

  constructor(public Navctrl: NavController) { }

  ngOnInit() {
  }

  regresar():void{
    this.Navctrl.pop();
  }

}
