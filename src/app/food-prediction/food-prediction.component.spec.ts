import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FoodPredictionComponent} from './food-prediction.component';
import {FoodApiService} from "../services/food-api.service";
import {FormBuilder} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FoodPredictionComponent', () => {
  let component: FoodPredictionComponent;
  let fixture: ComponentFixture<FoodPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FoodPredictionComponent],
      providers: [FoodApiService, FormBuilder]
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
