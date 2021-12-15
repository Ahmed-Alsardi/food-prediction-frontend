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

interface UIPrediction {
  ingredient: string,
  label: string
}

@Component({
  selector: 'food-prediction',
  templateUrl: './food-prediction.component.html',
  styleUrls: ['./food-prediction.component.scss']
})
export class FoodPredictionComponent implements OnInit {

  form!: FormGroup
  predictions: UIPrediction[] = []
  example = "example"

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
    const ingredient = this.user_ingredient?.value
    this.foodAPI.predict(ingredient)
      .subscribe(res => {

        const label = res.prediction[0].label.slice(9)
        const value = res.prediction[0].value
        console.log(label + value)
        const ui: UIPrediction = {
          ingredient: res.ingredient,
          label: label
        }
        this.predictions.push(ui)
        console.log(this.predictions)
      })
  }

  clear() {
    this.form.reset()
    this.predictions = []
  }
  clearLabel(p: UIPrediction) {
    const newPrediction:UIPrediction[] = []
    this.predictions.forEach(value => p != value ? newPrediction.push(value) : console.log(value, p))
    this.predictions = newPrediction
  }
}