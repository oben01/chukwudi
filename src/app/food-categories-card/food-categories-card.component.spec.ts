import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoriesCardComponent } from './food-categories-card.component';

describe('FoodCategoriesCardComponent', () => {
  let component: FoodCategoriesCardComponent;
  let fixture: ComponentFixture<FoodCategoriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCategoriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCategoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
