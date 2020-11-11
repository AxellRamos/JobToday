import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleoperfilPage } from './empleoperfil.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleoperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleoperfilPageRoutingModule {}
