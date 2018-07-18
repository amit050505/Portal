import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent {
  title = 'app';  

  constructor(ps:PostsService)
  {
    console.log("Getting data from PostService in AppComponent");
    console.log(ps.getDesire());
  }
}



