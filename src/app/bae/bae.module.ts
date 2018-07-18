import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaeRoutingModule } from './bae-routing.module';
import { BaeComponent } from './bae/bae.component';
import { BaeFinancesComponent } from './bae-finances/bae-finances.component';
import {MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    BaeRoutingModule,
    MatCardModule, MatToolbarModule
  ],
  declarations: [BaeComponent, BaeFinancesComponent]
})
export class BaeModule { }
