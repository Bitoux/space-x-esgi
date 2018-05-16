import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesSingleComponent } from './capsules-single.component';

describe('CapsulesSingleComponent', () => {
  let component: CapsulesSingleComponent;
  let fixture: ComponentFixture<CapsulesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
