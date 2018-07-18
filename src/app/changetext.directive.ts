import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(private el:ElementRef, renderer:Renderer) {
      
      //this will change the value of the element which uses this directive
      console.log("changetext directive working.");
      el.nativeElement.innerText="Warning: This content has been changed from changetext directive. ";      
      this.el.nativeElement.style.color = 'grey';
      renderer.setElementStyle(this.el.nativeElement, "background-color", "#fff");
      renderer.setElementStyle(this.el.nativeElement, "padding", "0px 15px");
      renderer.setElementStyle(this.el.nativeElement, "margin", "15px");
      renderer.setElementStyle(this.el.nativeElement, "border-left", "solid 1px green");
    }
    ngOnInit() {
     
    }
}