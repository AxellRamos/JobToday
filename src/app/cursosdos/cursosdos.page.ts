import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cursosdos',
  templateUrl: './cursosdos.page.html',
  styleUrls: ['./cursosdos.page.scss'],
})
export class CursosdosPage implements OnInit {

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
