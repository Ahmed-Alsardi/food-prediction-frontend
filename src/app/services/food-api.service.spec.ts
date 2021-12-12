import {TestBed} from '@angular/core/testing';

import {FoodApiService} from './food-api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FoodApiService', () => {
  let service: FoodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FoodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('', () => {
    // Dummy testing to try Jasmine and github action
    expect(5).toBe(5)
  });
});
