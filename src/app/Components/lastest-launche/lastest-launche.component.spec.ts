import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestLauncheComponent } from './lastest-launche.component';

describe('LastestLauncheComponent', () => {
  let component: LastestLauncheComponent;
  let fixture: ComponentFixture<LastestLauncheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestLauncheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestLauncheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
