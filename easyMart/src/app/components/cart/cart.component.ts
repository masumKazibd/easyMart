import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CartItem, CartService } from '../../services/cart.service';
=======
import { Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
>>>>>>> 4be36e9c888bbcab252a0fd3c9bb2e4677b5356d

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
<<<<<<< HEAD
  items: CartItem[] = [];
  totalPrice= 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartDetails();
  }

  loadCartDetails(){
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  removeItem(productId: number){
    this.cartService.removeItem(productId);
    this.loadCartDetails();
  }
  
  clearCart(){
    this.cartService.clearCart();
    this.loadCartDetails();
=======
  items: Product[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.items = this.cartService.getItems();
>>>>>>> 4be36e9c888bbcab252a0fd3c9bb2e4677b5356d
  }
}
