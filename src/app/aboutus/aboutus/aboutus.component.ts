import { Component, OnInit } from '@angular/core';
import { Profile } from '../aboutus';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  profileData=Profile;
  showWorkExperience=false;

  constructor() { }

  ngOnInit() {
  }

  showExperience(el)
  {
    this.showWorkExperience=true;  
  }
}
