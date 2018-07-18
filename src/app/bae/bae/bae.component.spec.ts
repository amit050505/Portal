import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaeComponent } from './bae.component';

describe('BaeComponent', () => {
  let component: BaeComponent;
  let fixture: ComponentFixture<BaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
