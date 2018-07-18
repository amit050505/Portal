import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import {MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    MatCardModule
  ],
  declarations: [PagenotfoundComponent]
})
export class PagenotfoundModule { }
