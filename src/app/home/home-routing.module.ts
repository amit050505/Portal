import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpjunkComponent } from './empjunk/empjunk.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent    
  },
  {
    path:'empjunk',
    component:EmpjunkComponent    
  },
  {
    path:'',
    component:HomeComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
