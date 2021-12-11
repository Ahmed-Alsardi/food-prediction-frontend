import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'food-prediction',
  templateUrl: './food-prediction.component.html',
  styleUrls: ['./food-prediction.component.scss']
})
export class FoodPredictionComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      prediction: ["", [Validators.required]]
    })
  }

  get prediction() {
    return this.form.get("prediction")
  }

  onSubmit() {

  }

  clear() {
    this.form.reset()
  }
}
