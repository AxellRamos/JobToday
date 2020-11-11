import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilempleoPage } from './perfilempleo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilempleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilempleoPageRoutingModule {}
