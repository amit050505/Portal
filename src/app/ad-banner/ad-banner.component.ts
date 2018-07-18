import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdDirective} from '../ad.directive';
import { Ad } from '../ad';
import { MagicBricksAdComponent } from '../magic-bricks-ad/magic-bricks-ad.component';
import { JobAdComponent } from '../job-ad/job-ad.component';

import { AdItem } from '../ad-type';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  currentAdIndex = -1;
  interval: any;
  ads=this.getAdCollection();
 
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getAdCollection() {
    return [
      new AdItem(JobAdComponent, {body:"Full Stack Developer"}),
      new AdItem(JobAdComponent, {body:"Web Developer"}),
      new AdItem(JobAdComponent, {body:"Front End Developer"}),
      new AdItem(JobAdComponent, {body:"UI Developer"})
    ];
  }

  loadComponent(){
    //get one specific component for the current iteration
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    //resolve the component type
    let componentFactory=this.componentFactoryResolver.resolveComponentFactory(adItem.component);        

    //vacate the container 
    let viewContainerRef=this.adHost.viewContainerRef;
    viewContainerRef.clear();

    //create new component of the resolved component type in the container
    let componentRef=viewContainerRef.createComponent(componentFactory);
    
    //asign data to the component
    (<Ad>componentRef.instance).data=adItem.data;

  }


  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
