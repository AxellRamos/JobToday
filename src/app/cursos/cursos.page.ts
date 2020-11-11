import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor(public router: Router, public Navctrl: NavController) { }

  ngOnInit() {
  }
  form(){
    this.router.navigate(['form']);
  }

  regresar():void{
    this.Navctrl.pop();
  }

}
