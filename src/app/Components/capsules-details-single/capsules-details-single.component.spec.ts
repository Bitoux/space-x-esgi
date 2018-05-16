import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesDetailsSingleComponent } from './capsules-details-single.component';

describe('CapsulesDetailsSingleComponent', () => {
  let component: CapsulesDetailsSingleComponent;
  let fixture: ComponentFixture<CapsulesDetailsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesDetailsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesDetailsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
