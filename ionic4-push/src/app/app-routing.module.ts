import { NgModule,Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {LoginPage } from './login/login.page';
const routes: Routes = [
 
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'second/:price', loadChildren: './second/second.module#SecondPageModule' },
  { path: 'login/', loadChildren: './login/login.module#LoginPageModule'  }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
