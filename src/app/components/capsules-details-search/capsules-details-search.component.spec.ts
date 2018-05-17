import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesDetailsSearchComponent } from './capsules-details-search.component';

describe('CapsulesDetailsSearchComponent', () => {
  let component: CapsulesDetailsSearchComponent;
  let fixture: ComponentFixture<CapsulesDetailsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesDetailsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
