import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ){
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    })
  }
  ngOnInit(): void {
      
  }
  onSubmit(): void{
    if(this.checkoutForm.invalid){
      alert('Please fillout the required field!!');
      return;
    }
    console.log('Order detials: ', this.checkoutForm.value);
    console.log('Cart items: ', this.cartService.getItems());

    alert('Your order has been placed successfully!');
    this.cartService.clearCart();
    this.checkoutForm.reset();
    this.router.navigate(['/products']);
  }
}
