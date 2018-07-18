import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaeComponent } from './bae/bae.component';
const routes: Routes = [
{
  path:'',
  component: BaeComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaeRoutingModule { }
