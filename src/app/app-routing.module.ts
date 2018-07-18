import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'career',
    loadChildren:'./career/career.module#CareerModule'
  },
  {
    path:'ijp',
    loadChildren:'./ijp/ijp.module#IjpModule'
  },
  {
    path:'bae',
    loadChildren:'./bae/bae.module#BaeModule'
  },
  {
    path:'home',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path:'aboutus',
    loadChildren:'./aboutus/aboutus.module#AboutusModule'
  },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**', 
    loadChildren:'./pagenotfound/pagenotfound.module#PagenotfoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
