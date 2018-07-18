import { Component, Input } from '@angular/core';
import { Ad } from '../ad';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html'
})
export class JobAdComponent implements Ad {

  @Input() data: any;

}
