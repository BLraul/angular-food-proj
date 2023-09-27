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

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.foodService.getAll().subscribe(data=> {
      if(!!data){
        this.route.params.subscribe(params => {
          if (params['searchTerm']) {
            this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'], data)
          }
          else if (params['tag']) {
            this.foods = this.foodService.getAllFoodsBtTag(params['tag'], data);
          }
          else {
             this.foods = data;
          }
        })
      }
    });

  }

}
