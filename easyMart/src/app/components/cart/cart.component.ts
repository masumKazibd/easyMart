import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';

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
  }
}
