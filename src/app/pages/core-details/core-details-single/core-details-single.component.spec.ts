import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDetailsSingleComponent } from './core-details-single.component';

describe('CoreDetailsSingleComponent', () => {
  let component: CoreDetailsSingleComponent;
  let fixture: ComponentFixture<CoreDetailsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDetailsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDetailsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
