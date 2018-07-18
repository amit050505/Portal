import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';

import * as localForage from 'localforage';

import { ChangetextDirective } from './changetext.directive';
import { NavdecorDirective } from './navdecor.directive';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { JobAdComponent } from './job-ad/job-ad.component';
import { MagicBricksAdComponent } from './magic-bricks-ad/magic-bricks-ad.component';



@NgModule({
  entryComponents: [
    JobAdComponent, MagicBricksAdComponent, AdBannerComponent, AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule    
  ],  
  declarations: [
    AppComponent,
    ChangetextDirective,
    NavdecorDirective,
    AdDirective,
    AdBannerComponent,
    JobAdComponent,
    MagicBricksAdComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
