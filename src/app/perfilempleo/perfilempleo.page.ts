import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilempleo',
  templateUrl: './perfilempleo.page.html',
  styleUrls: ['./perfilempleo.page.scss'],
})
export class PerfilempleoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  perfil(){
    this.router.navigate(['usuarioperfil']);
  }

}
