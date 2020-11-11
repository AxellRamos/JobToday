import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosunoPageRoutingModule } from './cursosuno-routing.module';

import { CursosunoPage } from './cursosuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosunoPageRoutingModule
  ],
  declarations: [CursosunoPage]
})
export class CursosunoPageModule {}
