import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  url = "http://localhost:8000/predict"

  constructor(private http: HttpClient) {
  }

  predict(ingredient: string) {
    this.http.get(this.url, {
      params: {
        ingredient: ingredient
      }
    })
      .subscribe(res => console.log(res))

  }
}
