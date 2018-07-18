import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DummyComponent],
  declarations: [DummyComponent]
})
export class SampleModule { }
