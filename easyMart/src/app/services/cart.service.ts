import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  public cartItemCount = new BehaviorSubject<number>(0);
  constructor() { }

  addToCart(product: Product){
    this.items.push(product);
    this.cartItemCount.next(this.items.length);
    console.log(`${product.title} added to cart!`);
  }

  getItems(): Product[]{
    return this.items;
  }
  clearCart(){
    this.items=[];
    this.cartItemCount.next(0);
    return this.items;
  }
}
