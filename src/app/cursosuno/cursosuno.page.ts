import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cursosuno',
  templateUrl: './cursosuno.page.html',
  styleUrls: ['./cursosuno.page.scss'],
})
export class CursosunoPage implements OnInit {

  constructor(public Navctrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  regresar():void{
    this.Navctrl.pop();
  }

  form(){
    this.router.navigate(['form']);
  }

}
