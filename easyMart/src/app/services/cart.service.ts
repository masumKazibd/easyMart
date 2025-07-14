import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  public cartItemCount = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product: product, quantity: 1 });
    }
    this.updateCartCount();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.updateCartCount();
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  clearCart() {
    this.items = [];
    this.updateCartCount();
  }

  private updateCartCount() {
    const totalCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartItemCount.next(totalCount);
  }
}