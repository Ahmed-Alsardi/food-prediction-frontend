import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prediction} from "../food-prediction/food-prediction.component";

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  url = "http://localhost:8000/predict"

  constructor(private http: HttpClient) {
  }

  predict(ingredient: string): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(this.url, {
      params: {
        ingredient: ingredient
      }
    })
  }
}
