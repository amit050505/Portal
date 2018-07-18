import { Component, OnInit, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.css']
})
export class ProfileUploadComponent implements OnInit {

  public fullname:string="";
  public mobile:string="";
  public region:string="";
  public experience:string="";
  public desc:string="";
  public email:string="";
  
  
  constructor(private el: ElementRef, private renderer: Renderer, private route:ActivatedRoute) { 
    this.route.params.subscribe(profile=>{
    this.fullname=profile.name;    
    this.mobile=profile.mobile;
    this.desc=profile.desc;
    this.region=profile.region;
    this.experience=profile.exp;
    this.email=profile.email;
    console.log("Transfered data with routing");
    console.log(profile);
    });
  }
    
  ngOnInit() {
  }

}
