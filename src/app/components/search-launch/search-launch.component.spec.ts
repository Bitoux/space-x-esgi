import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaunchComponent } from './search-launch.component';

describe('SearchLaunchComponent', () => {
  let component: SearchLaunchComponent;
  let fixture: ComponentFixture<SearchLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
