import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioperfilPageRoutingModule } from './usuarioperfil-routing.module';

import { UsuarioperfilPage } from './usuarioperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioperfilPageRoutingModule
  ],
  declarations: [UsuarioperfilPage]
})
export class UsuarioperfilPageModule {}
