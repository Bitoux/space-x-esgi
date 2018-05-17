import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesDetailsComponent } from './capsules-details.component';

describe('CapsulesDetailsComponent', () => {
  let component: CapsulesDetailsComponent;
  let fixture: ComponentFixture<CapsulesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
