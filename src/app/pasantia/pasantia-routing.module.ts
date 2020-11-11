import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasantiaPage } from './pasantia.page';

const routes: Routes = [
  {
    path: '',
    component: PasantiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasantiaPageRoutingModule {}
