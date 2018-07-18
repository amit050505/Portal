import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as localForage from 'localforage';
import { Router } from '@angular/router'; 
import { Jobs } from '../jobs';
import { openings } from '../current-openings';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-ijp',
  templateUrl: './ijp.component.html',
  styleUrls: ['./ijp.component.css']
})
export class IjpComponent implements OnInit {
    persons:any;  
    jobOpenings:Jobs[];
    favorites:any[];
  
    constructor( private http:HttpClient, private router:Router) {
      
    }
   
    applyHere()
    {     
      this.router.navigate(['ijp/profileupload', {name:"Amit Kumar", exp:"3", region:"Europe", mobile:"9172575975", email:"verma.amit0407@gmail.com", desc:"NA"}]);
    }

    getOpenings(): Jobs[] {
      return openings;
    }

    ngOnInit() {
      
      console.log("getting data from data-source in the app only");
      this.jobOpenings=this.getOpenings();
      console.log(this.jobOpenings);

      console.log("Getting data from External API");      
      this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(data=>{
        this.persons=data;      
        console.log(data);          
      })
    }

    addToavorites(event, id)
    {
      this.favorites.push({key: id});
      localForage.setItem('favorites',this.favorites);
      
      localForage.getItem('favorites').then(function(fav) {
        if (fav) {        
          console.log(fav);        
        } else {
              
        }
      });
      
    }
}
