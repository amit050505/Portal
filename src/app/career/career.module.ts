import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career/career.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [    
    CommonModule,
    CareerRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule
    
   
  ],
  declarations: [CareerComponent]
})
export class CareerModule { }
