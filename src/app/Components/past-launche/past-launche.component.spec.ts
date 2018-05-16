import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLauncheComponent } from './past-launche.component';

describe('PastLauncheComponent', () => {
  let component: PastLauncheComponent;
  let fixture: ComponentFixture<PastLauncheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLauncheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLauncheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
