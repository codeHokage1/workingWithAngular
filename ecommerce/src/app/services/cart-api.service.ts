import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product.interface';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http: HttpClient, private notification: NotificationService) {}

  cart: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  addToCart(product: Product): void {
    let foundItem = this.cart.find((item) => item.id === product.id);
    if (!foundItem) {
      product.quantity = 1;
      this.cart.push(product);
      // this.notification.addToCartSuccess(`${product.title} added to cart!`);
    } else {
      foundItem.quantity++;
      // this.notification.addToCartSuccess(`${product.title} = ${product.quantity} quantities in cart!`);
    }

    console.log(this.cart)
  }

  getCartCount(): number {
    console.log("From the service", this.cart.length);
    return this.cart.length;
  }
}
