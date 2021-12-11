import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FoodApiService} from "../services/food-api.service";

export interface Prediction {
  ingredient: string,
  prediction: [{
    label: string,
    value: number
  }]
}

@Component({
  selector: 'food-prediction',
  templateUrl: './food-prediction.component.html',
  styleUrls: ['./food-prediction.component.scss']
})
export class FoodPredictionComponent implements OnInit {

  form!: FormGroup
  predictions: Prediction[] = []
  loading = false
  currentPrediction!: Prediction

  constructor(private fb: FormBuilder, private foodAPI: FoodApiService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      prediction: ["", [Validators.required]]
    })
  }

  get user_ingredient() {
    return this.form.get("prediction")
  }

  onSubmit() {
    this.loading = true
    const ingredient = this.user_ingredient?.value
    this.foodAPI.predict(ingredient)
      .subscribe(res => {
        this.predictions.push(res)
        console.log(this.predictions)
        this.loading = false
      })
  }

  clear() {
    this.form.reset()
    this.predictions = []
  }

  changeContent(i: number) {
    console.log("from change content" + i)
    this.currentPrediction = this.predictions[i]
  }
}
