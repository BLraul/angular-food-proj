import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../basics/models/food';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
      foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      foodsObservalbe = this.foodService.getAllFoodsByTag(params['tag']);
      else
      foodsObservalbe = foodService.getAll();

      foodsObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
  })
   }

  ngOnInit(): void {
  }

}
