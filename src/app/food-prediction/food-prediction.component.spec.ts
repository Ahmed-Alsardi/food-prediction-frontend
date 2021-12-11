import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPredictionComponent } from './food-prediction.component';

describe('FoodPredictionComponent', () => {
  let component: FoodPredictionComponent;
  let fixture: ComponentFixture<FoodPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
