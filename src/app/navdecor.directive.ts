import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavdecor]'
})
export class NavdecorDirective {

  hostElem:any;
  parent:any;
  siblings:any[];
  constructor(private el:ElementRef, private renderer:Renderer) { 
 
 
  }

  @HostListener("click", ["$event"])
   public onNavClick(event: any): void {
        
   }
 
}
