import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsSingleComponent } from './rockets-single.component';

describe('RocketsSingleComponent', () => {
  let component: RocketsSingleComponent;
  let fixture: ComponentFixture<RocketsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
