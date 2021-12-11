import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FoodApiService} from "../services/food-api.service";

@Component({
  selector: 'food-prediction',
  templateUrl: './food-prediction.component.html',
  styleUrls: ['./food-prediction.component.scss']
})
export class FoodPredictionComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder, private foodAPI: FoodApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      prediction: ["", [Validators.required]]
    })
  }

  get prediction() {
    return this.form.get("prediction")
  }

  onSubmit() {
    const ingredient = this.prediction?.value
    this.foodAPI.predict(ingredient)
  }

  clear() {
    this.form.reset()
  }
}
