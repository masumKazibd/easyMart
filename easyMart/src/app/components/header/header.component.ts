import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  cartCount = 0;

  constructor(private cartService: CartService){}
  ngOnInit(): void {
      this.cartService.cartItemCount.subscribe(count => {
        this.cartCount = count;
      })
  }
}
