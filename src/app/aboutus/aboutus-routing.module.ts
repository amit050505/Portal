import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {
    path:'',
    component:AboutusComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }