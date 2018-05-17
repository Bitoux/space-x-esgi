import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncheSingleComponent } from './launche-single.component';

describe('LauncheSingleComponent', () => {
  let component: LauncheSingleComponent;
  let fixture: ComponentFixture<LauncheSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncheSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncheSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
