import { Component, OnInit, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  
  constructor(private el: ElementRef, private renderer: Renderer, private route:ActivatedRoute) { 
    this.route.params.subscribe(profile=>{
    
    });
  }
    
  ngOnInit() {
  }

  
  @HostListener('mouseover',['$event']) onMouseOver(e:Event) { 
    console.log("Hostlistener: Mouseover event occurred "+ e);
  }


 
} 
