import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  myDesire:any[]=["Tiddler","myspace",23];
  constructor() { }

  getDesire(): any[] {
    return this.myDesire;
  }
}
