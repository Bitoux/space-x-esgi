import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLauncheComponent } from './upcoming-launche.component';

describe('UpcomingLauncheComponent', () => {
  let component: UpcomingLauncheComponent;
  let fixture: ComponentFixture<UpcomingLauncheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingLauncheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLauncheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
