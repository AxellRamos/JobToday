import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosdosPageRoutingModule } from './cursosdos-routing.module';

import { CursosdosPage } from './cursosdos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosdosPageRoutingModule
  ],
  declarations: [CursosdosPage]
})
export class CursosdosPageModule {}
