import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)},
  { path: 'app', loadChildren: () => import('./pages/app/app.module').then( m => m.AppPageModule)},
  { path: 'newproject', loadChildren: () => import('./pages/newproject/newproject.module').then( m => m.NewprojectPageModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
