import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaeFinancesComponent } from './bae-finances.component';

describe('BaeFinancesComponent', () => {
  let component: BaeFinancesComponent;
  let fixture: ComponentFixture<BaeFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaeFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaeFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
