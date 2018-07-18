import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { states } from '../data-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  private data: Observable<string>;
  private fruits: Array<string> = [];
  private anyErrors: boolean;
  private finished: boolean;
  obsfromIteration=of(1,4,7);
  
  homeForm:FormGroup;
  states=states;

  constructor(private fb:FormBuilder) {
    this.CreateForm();
    };
    

    CreateForm()
    {
        this.homeForm=this.fb.group({
          name:['', Validators.required],
          street: '',
          city: '',
          state: '',
          zip: '',
          power: '',
          sidekick: ''
        });
    }

   
ngOnInit(){
  this.StartObserver();
  this.obsfromIteration.subscribe(
    n=>console.log(n),
    err=>console.log(err),
    ()=>console.log("obsfromIteration completed")
  );
  
    // Create a new Observable that will deliver the above sequence
const sequence = new Observable(observer=>{
  const seq = [1, 62, 30];
  let timeoutId;

  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        idx+=1;
        doSequence(arr, idx);
      }
    }, 1000);
  }

  doSequence(seq, 0);

  // Unsubscribe should clear the timeout to stop execution
  return {unsubscribe() {
    clearTimeout(timeoutId);
  }};

});

sequence.subscribe({
    next(num) { console.log(num); },
    complete() { console.log('Finished sequence'); }
});



}

StartObserver(){
  
  this.data = new Observable
  (
    observer =>{
            setTimeout(() =>
            {
                observer.next('Apple');
            }, 200);
           
            setTimeout(() =>
            {
                observer.next('mango');
            }, 400);
            setTimeout(() =>
            {
                observer.next('Orannge');
            }, 600);
            
            setTimeout(() =>
            {
                observer.complete();
            }, 800);
           
   }
  );
    let subscription = this.data.subscribe(
        fruit => console.log(fruit),
        error => console.log("error occurred"),
        () => console.log("emisson of values Completed.")
    );

  } 
  

}
