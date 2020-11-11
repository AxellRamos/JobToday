import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosunoPage } from './cursosuno.page';

const routes: Routes = [
  {
    path: '',
    component: CursosunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosunoPageRoutingModule {}
