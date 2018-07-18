import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IjpRoutingModule } from './ijp-routing.module';
import { IjpComponent } from './ijp/ijp.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';

import { MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms';


import * as localForage from 'localforage';
import { ProfileUploadComponent } from './profile-upload/profile-upload.component';

@NgModule({
  imports: [
    CommonModule,
    IjpRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,    
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [IjpComponent, ProfileUploadComponent]
})
export class IjpModule { }
