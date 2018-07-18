import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IjpComponent } from './ijp/ijp.component';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';

const routes: Routes = [
  {
    path:'',
    component:IjpComponent
  },
  {
    path:'profileupload',
    component:ProfileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IjpRoutingModule { }
