import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TitleCasePipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  addedProductId: number | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ){}

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe(data => {
      this.allProducts = data;
      this.filteredProducts = data;
      console.log('Products loaded:', this.allProducts);
    });

    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    this.addedProductId = product.id;

    setTimeout(() => {
      this.addedProductId = null;
    }, 3000);
  }

  filterByCategory(category: string){
    if(category === 'all'){
      this.filteredProducts = this.allProducts;
    }else{
      this.filteredProducts = this.allProducts.filter(product => product.category === category);
    }
  }

  onSearch(event: Event){
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }
}
