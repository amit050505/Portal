import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ScrollToModule} from 'ng2-scroll-to';



@NgModule({
  imports: [        
    CommonModule,
    AboutusRoutingModule,
    MatCardModule,
    MatToolbarModule,
    ScrollToModule.forRoot()
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
