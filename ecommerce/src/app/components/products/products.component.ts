import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../../services/cart-api.service';
import { Product } from '../../entities/product.interface';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  providers: [CartApiService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private cartApi: CartApiService) {}

  allProducts: Product[] = [];

  cartItemNum: number = 0;

  ngOnInit(): void {
    this.cartApi.getProducts().subscribe((products) => {
      this.allProducts = products;
    });

    this.cartItemNum = this.getCartItemNum();
  }

  addToCart(product: Product): void {
    this.cartApi.addToCart(product);
    // console.log(`${product.title} was clicked!`)
  }

  getCartItemNum(): number {
    return this.cartApi.getCartCount();
  }
}
