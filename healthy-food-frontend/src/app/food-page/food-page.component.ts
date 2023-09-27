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
    this.foodService.getAll().subscribe(allData => {
      console.log("this.foods",allData)
      if(!!allData){
        this.foods = allData;
        console.log("this.allData",this.foods)
        this.activatedRoute.params.subscribe((params)=>{
          if(params['id']){
            this.food = this.foodService.getFoodById(params['id'], allData)
          }
        });
      }
    });
   
  }

  ngOnInit(): void {

    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
