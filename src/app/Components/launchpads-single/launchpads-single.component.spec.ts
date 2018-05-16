import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadsSingleComponent } from './launchpads-single.component';

describe('LaunchpadsSingleComponent', () => {
  let component: LaunchpadsSingleComponent;
  let fixture: ComponentFixture<LaunchpadsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
