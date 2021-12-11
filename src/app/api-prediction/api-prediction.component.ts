import {Component, Input, OnInit} from '@angular/core';
import {Prediction} from "../food-prediction/food-prediction.component";

@Component({
  selector: 'api-prediction',
  templateUrl: './api-prediction.component.html',
  styleUrls: ['./api-prediction.component.scss']
})
export class ApiPredictionComponent implements OnInit {

  @Input("prediction") prediction!: Prediction[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
