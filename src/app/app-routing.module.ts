import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'cursosdos',
    loadChildren: () => import('./cursosdos/cursosdos.module').then( m => m.CursosdosPageModule)
  },
  {
    path: 'cursosuno',
    loadChildren: () => import('./cursosuno/cursosuno.module').then( m => m.CursosunoPageModule)
  },
  {
    path: 'empleoperfil',
    loadChildren: () => import('./empleoperfil/empleoperfil.module').then( m => m.EmpleoperfilPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'pasantia',
    loadChildren: () => import('./pasantia/pasantia.module').then( m => m.PasantiaPageModule)
  },
  {
    path: 'perfilempleo',
    loadChildren: () => import('./perfilempleo/perfilempleo.module').then( m => m.PerfilempleoPageModule)
  },
  {
    path: 'usuarioperfil',
    loadChildren: () => import('./usuarioperfil/usuarioperfil.module').then( m => m.UsuarioperfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
