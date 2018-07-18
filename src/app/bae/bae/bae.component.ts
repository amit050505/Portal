import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bae',
  templateUrl: './bae.component.html',
  styleUrls: ['./bae.component.css']
})
export class BaeComponent implements OnInit {

  Name:string="Coca Cola";
  EventsAttended:string[]=["Femina 2018","Oscar 2107","IIFA 2017"];
  constructor() { }

  ngOnInit() {
  }

  removeElement(ea){    
    const index: number = this.EventsAttended.indexOf(ea);
    if (index !== -1) {
        this.EventsAttended.splice(index, 1);
    }
  }

}
