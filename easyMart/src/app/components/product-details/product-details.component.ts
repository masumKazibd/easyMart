import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    TitleCasePipe,
    CommonModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
      })
  }
}
