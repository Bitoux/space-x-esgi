import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDetailsSearchComponent } from './core-details-search.component';

describe('CoreDetailsSearchComponent', () => {
  let component: CoreDetailsSearchComponent;
  let fixture: ComponentFixture<CoreDetailsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDetailsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
