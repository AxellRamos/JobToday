import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasantiaPageRoutingModule } from './pasantia-routing.module';

import { PasantiaPage } from './pasantia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasantiaPageRoutingModule
  ],
  declarations: [PasantiaPage]
})
export class PasantiaPageModule {}
