import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEquipementsComponent } from './card-equipements.component';

describe('CardEquipementsComponent', () => {
  let component: CardEquipementsComponent;
  let fixture: ComponentFixture<CardEquipementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEquipementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
