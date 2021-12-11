import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApiPredictionComponent} from './api-prediction.component';

describe('ApiPredictionComponent', () => {
  let component: ApiPredictionComponent;
  let fixture: ComponentFixture<ApiPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiPredictionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
