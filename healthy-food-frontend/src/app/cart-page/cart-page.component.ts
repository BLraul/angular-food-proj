import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../basics/models/Cart';
import { CartItem } from '../basics/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

cart!: Cart;

  constructor(private cartService: CartService, private foodService: FoodService) {
    
    // this.foodService.getAll().subscribe(allData => {
    //   cartService.addToCart(allData[1])
    //   cartService.addToCart(allData[3])
    //   cartService.addToCart(allData[4])
    // })

    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
    // this.setCart();
   }


  ngOnInit(): void {
  }

removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem, quantityInString: string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}

  setCart(){
    // this.cart = this.cartService.getCart();
  }
}
