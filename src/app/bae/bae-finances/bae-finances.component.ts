import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bae-finances',
  templateUrl: './bae-finances.component.html',
  styleUrls: ['./bae-finances.component.css']
})
export class BaeFinancesComponent implements OnInit {

  @Input() event:any;  
  @Output() elementToRemove=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeElement(ename){
    //alert(ename);
    this.elementToRemove.emit(ename);

  }
}
