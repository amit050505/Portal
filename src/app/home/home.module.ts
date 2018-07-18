import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { EmpjunkComponent } from './empjunk/empjunk.component';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material";

import { DialogOverviewExampleDialog } from './empjunk/empjunk.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,    
    HttpClientModule,
    MatDialogModule
  ],
  declarations: [HomeComponent, EmpjunkComponent, DialogOverviewExampleDialog],
  entryComponents:[DialogOverviewExampleDialog]
})
export class HomeModule { }
