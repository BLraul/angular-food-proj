import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../basics/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
foods!:Food[];
food!: Food;

  constructor(private activatedRoute: ActivatedRoute, 
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { 
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        foodService.getFoodById(params['id']).subscribe(serverFood => {
          this.food = serverFood;
        });
      })
   
  }

  ngOnInit(): void {

    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
