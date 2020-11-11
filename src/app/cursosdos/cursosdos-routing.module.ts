import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosdosPage } from './cursosdos.page';

const routes: Routes = [
  {
    path: '',
    component: CursosdosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosdosPageRoutingModule {}
